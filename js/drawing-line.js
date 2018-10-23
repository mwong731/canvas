class SprayPaint extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;          
    }
    
    onMouseDown(coord,event){
        this.context.globalAlpha = opacity;
        this.context.strokeStyle = color;
        this.context.lineJoin = "round";
        this.context.lineWidth = stroke;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}