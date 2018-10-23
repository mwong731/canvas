class Spray extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;  
        this.isDrawing=false;        
    }
    
    onMouseDown(coord,event){
        this.isDrawing = true;
        this.contextReal.lineWidth = 10;
        //this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
        this.contextReal.moveTo(coord[0], coord[1]);
      };

    onDragging(coord,event){
        var density=50;
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          
        if (this.isDrawing==true) {
            for (var i = density; i--; ) {
              var radius = 20;
              var offsetX = getRandomInt(-radius, radius);
              var offsetY = getRandomInt(-radius, radius);
              this.contextReal.fillStyle = color;
              this.contextReal.fillRect(coord[0] + offsetX, coord[1] + offsetY, 1, 1);
            }
          }

    }

    onMouseMove(){}
    onMouseUp(){
        this.isDrawing = false;
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

