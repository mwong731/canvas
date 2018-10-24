class AddText extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;     
        this.clicked=0;  
        this.arr=[]   
    }
    
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        
        if(this.clicked==0){ //add text box
            this.arr.push(coord[0]);
            this.arr.push(coord[1]);
            $('body').prepend(`<textarea id="addText" style="border:dotted 2px #000000; z-index:100; position:absolute; left:${coord[0]}px; top:${coord[1]}px; font-size:50px; font-family:${fontStyle} ; color:${color}; background-color:transparent;">`);
            this.clicked=1;
        }else{ //place text
            var word=$('#addText').val();
            var x=this.arr.length-2;
            var y=this.arr.length-1;
            this.contextReal.font = `50px ${fontStyle}` ;
            this.contextReal.globalAlpha = opacity;
            this.contextReal.fillStyle = color;
            this.contextReal.fillText(word,(this.arr[x]+4),(this.arr[y]+56));
            $('#addText').remove();
            this.clicked=0;
        }
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){
        
    }
    onMouseEnter(coord,event){
        var x=this.origX;
        var y=this.origY;

        if(this.clicked==1){
        $( "#color,#fontStyle" ).change(function() {

        var word=$('#addText').val();
        $('#addText').remove();
        $('body').prepend(`<textarea id="addText"  style="border:dotted 2px #000000; z-index:100; position:absolute; left:${x}px; top:${y}px; font-size:50px; font-family:${fontStyle}; color:${color}; background-color:transparent;">${word}</textarea>`);
 
             });
         }
    }


    
}