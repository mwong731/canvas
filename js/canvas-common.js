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

//stroke change
var stroke='';
$( "#stroke" ).change(function() {
    stroke=$(this).val();
    $('#strokeNumber').val(stroke);
  });

function zoomIn(){   
        contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let capImg = document.getElementById("zoomImg")
        contextReal.drawImage(capImg, 0, 0,canvasReal.width*1.2, canvasReal.height*1.2)
        capImg.setAttribute('src', canvasReal.toDataURL("image/png"))   
}
function zoomOut(){   
        contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let capImg = document.getElementById("zoomImg")
        contextReal.drawImage(capImg, 0, 0,canvasReal.width*0.8, canvasReal.height*0.8)
        capImg.setAttribute('src', canvasReal.toDataURL("image/png"))   
}

function to_image() {   
    let a = document.getElementById("dlImg");
    a.setAttribute('download', "image.png")
    a.setAttribute('href', canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    a.click();          
}

function clear(){
    contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
}


class PaintFunction{
    constructor(color, stroke){
        this.color=color;
        this.stroke=stroke;
    }
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

}  