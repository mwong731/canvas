class DrawingSquare extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord){
        this.contextDraft.globalAlpha = opacity;
        this.contextReal.fillStyle = color;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.globalAlpha = opacity;
        this.contextDraft.fillStyle = color;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let xWidth = coord[0] - this.origX;
        let yHeight = coord[1] - this.origY
        if (yHeight < 0){
            yHeight = Math.abs(xWidth) * -1
        }else{
            yHeight = Math.abs(xWidth)
        }
        this.contextDraft.fillRect(this.origX,this.origY, xWidth, yHeight);
    }
    onMouseMove(){}
    onMouseUp(coord){
        let xWidth = coord[0] - this.origX;
        let yHeight = coord[1] - this.origY
        if (yHeight < 0){
            yHeight = Math.abs(xWidth) * -1
        }else{
            yHeight = Math.abs(xWidth)
        }
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY, xWidth, yHeight);
    }
    onMouseLeave(){}
    onMouseEnter(){}
}