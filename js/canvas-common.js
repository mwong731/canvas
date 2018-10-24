let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
    newUndoEventListener()
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
    let capImg = document.getElementById("zoomImg")
    capImg.setAttribute('src', canvasReal.toDataURL("image/png"))
    captureUndo()
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

//color change
var color='';
$( "#color" ).change(function() {
    color=$(this).val();
  });

//background change
var bgColor='';
$( "#bgColor" ).change(function() {
    bgColor=$(this).val();
    $( "#canvas-real" ).css("background-color", `${bgColor}`)
  });

//stroke change
var stroke='';
$( "#stroke" ).change(function() {
    stroke=$(this).val();
    $('#strokeNumber').val(stroke);
  });

//opacity change
var opacity= '1';
$( "#opacity" ).change(function() {
    opacity=$(this).val();
    $('#opacityNumber').val(opacity);
  });
  
//font change
var fontStyle= '';
$( "#fontStyle" ).change(function() {
    fontStyle=$(this).val();
  });

class PaintFunction{
    constructor(color, stroke,fontStyle){
        this.color=color;
        this.stroke=stroke;
        this.fontStyle=fontStyle;
    }
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

}  