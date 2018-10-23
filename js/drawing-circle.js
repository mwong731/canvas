class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.globalAlpha = opacity;
        this.contextReal.fillStyle = color;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();

    }
    onDragging(coord,event){
        this.contextDraft.globalAlpha = opacity;
        this.contextDraft.fillStyle = color;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        if((coord[0]- this.origX)>=0){ //drag right
            var radius=Math.sqrt((coord[0]- this.origX)*(coord[0]- this.origX)+(coord[1]- this.origY)*(coord[1]- this.origY));
            this.contextDraft.arc(this.origX,this.origY,radius,0,2*Math.PI);
        }else{ //drag left
            var radius=Math.sqrt((this.origX-coord[0])*(this.origX-coord[0])+(this.origY-coord[1])*(this.origY-coord[1]));
            this.contextDraft.arc(this.origX,this.origY,radius,0,2*Math.PI);
        }
        this.contextDraft.fill();
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if((coord[0]- this.origX)>=0){
            var radius=Math.sqrt((coord[0]- this.origX)*(coord[0]- this.origX)+(coord[1]- this.origY)*(coord[1]- this.origY));
            this.contextReal.arc(this.origX,this.origY,radius,0,2*Math.PI);
        }else{
            var radius=Math.sqrt((this.origX-coord[0])*(this.origX-coord[0])+(this.origY-coord[1])*(this.origY-coord[1]));
            this.contextReal.arc(this.origX,this.origY,radius,0,2*Math.PI);
        }
        this.contextReal.fill();        
    }        
    onMouseLeave(){}
    onMouseEnter(){}
}