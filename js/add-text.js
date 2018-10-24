class AddText extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;     
        this.clicked=0;  
        this.arr=[];
        this.textWidth=0;
        this.textHeight=0;

    }
    
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        
        if(this.clicked==0){ //add text box
            this.arr.push(coord[0]);
            this.arr.push(coord[1]);

            if(this.contextReal.canvas.width-coord[0]<300){ //check if the textbox will go beyond the canvas border x-axis
                this.textWidth=this.contextReal.canvas.width-coord[0];
            }else{
                this.textWidth=300;
            }

            if(this.contextReal.canvas.height-coord[1]<100){ //check if the textbox will go beyond the canvas border y-axis
                this.textHeight=this.contextReal.canvas.height-coord[1];
            }else{
                this.textHeight=100;
            }

            $('#canvas-container').prepend(`<textarea id="addText" style="border:dotted 2px #000000; z-index:100; position:absolute; left:${coord[0]}px; top:${coord[1]}px; font-size:50px; font-family:${fontStyle} ; color:${color}; background-color:transparent;width:${this.textWidth}px;height:${this.textHeight}px">`);
            this.clicked=1;
        }else{ //place text
            var word=$('#addText').val();
            var x=this.arr.length-2;
            var y=this.arr.length-1;
            this.contextReal.font = `50px ${fontStyle}` ;
            this.contextReal.globalAlpha = opacity;
            this.contextReal.fillStyle = color;
            this.contextReal.fillText(word,(this.arr[x]+4),(this.arr[y]+57));
            $('#addText').remove();
            this.clicked=0;
        }
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){
        $( ".btn" ).click(function() {      
            $('#addText').remove();   
         });
    }
    onMouseEnter(coord,event){
        var x=this.origX;
        var y=this.origY;
        var textWidth=this.textWidth;
        var textHeight=this.textHeight;


        if(this.clicked==1){
        $( "#color,#fontStyle" ).change(function() {

        var word=$('#addText').val();
        $('#addText').remove();
        $('#canvas-container').prepend(`<textarea id="addText"  style="border:dotted 2px #000000; z-index:100; position:absolute; left:${x}px; top:${y}px; font-size:50px; font-family:${fontStyle}; color:${color}; background-color:transparent;width:${textWidth}px;height:${textHeight}px">${word}</textarea>`);
 
             });
         }
    }


    
}