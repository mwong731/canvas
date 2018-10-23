class AddText extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;     
        this.clicked=0;  
        this.arr=[]   
    }
    
    
    onMouseDown(coord,event){
        this.arr.push(coord[0]);
        this.arr.push(coord[1]);
        
        if(this.clicked==0){ //add text box
            $('body').prepend(`<textarea id="addText" style="border:dotted 2px #000000; z-index:100; position:absolute; left:${coord[0]}px; top:${coord[1]}px; font-size:50px; color:${color}; background-color:transparent;">`);
            this.clicked=1;
        }else{ //place text
            var word=$('#addText').val();
            var x=this.arr.length-4;
            var y=this.arr.length-3;
            this.contextReal.font = '50px arial';
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
    onMouseLeave(){}
    onMouseEnter(){}
}