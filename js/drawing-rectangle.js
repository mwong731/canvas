class DrawingRectangle extends PaintFunction{
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
    }
    onDragging(coord,event){
        this.contextDraft.globalAlpha = opacity;
        this.contextDraft.fillStyle = color;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }
    onMouseLeave(){}
    onMouseEnter(){}
}