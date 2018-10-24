class DrawingSquare extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord){
        this.contextReal.fillStyle = color;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.globalAlpha = opacity;
        this.contextDraft.fillStyle = color;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        let coord1 = coord[0] - this.origX;
        this.contextDraft.fillRect(this.origX,this.origY, coord1, coord1);
    }
    onMouseMove(){}
    onMouseUp(coord){
        let coord2 = coord[0] - this.origX;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY, coord2, coord2);
    }
    onMouseLeave(){}
    onMouseEnter(){}
}