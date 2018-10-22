class DragCanvas extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;   
    }
    
    onMouseDown(coord,event){
        $('#canvas-container').css('cursor','move')
        this.origX = coord[0];
        this.origY = coord[1];
        this.imageData = this.contextReal.getImageData(0, 0, this.contextReal.canvas.width, this.contextReal.canvas.height);
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.putImageData(this.imageData, coord[0]-this.origX, coord[1]-this.origY);
        this.contextReal.putImageData(this.imageData, coord[0]-this.origX, coord[1]-this.origY);
    }

    onMouseMove(){}
    onMouseUp(){
        $('#canvas-container').css('cursor','default')
    }
    onMouseLeave(){}
    onMouseEnter(){}
}