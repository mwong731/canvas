class DrawPolygon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.context = contextReal; 
        this.contextDraft=contextDraft;
        this.a=0;
        this.b=0;
        this.started=false;
        this.arr=[];
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
        this.context.lineJoin = "round";
        this.context.lineWidth = stroke;
        this.contextDraft.strokeStyle = color;
        this.context.fillStyle = color;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = stroke;



        this.a=coord[0];
        this.b=coord[1];     

        if(this.started==false){
            this.context.beginPath();
            this.context.moveTo(coord[0],coord[1]);
            this.arr.push(coord[0]);
            this.arr.push(coord[1]);
        }
       
    }
    onDragging(){}

    onMouseMove(coord,event){
        if(this.started==true){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.a,this.b);
            this.contextDraft.lineTo(coord[0],coord[1]);       
            this.contextDraft.closePath();
            this.contextDraft.stroke();
        }
        
        
    }
    onMouseUp(coord,event){
        if(this.started==false){   
            this.started=true;
        }else{
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            //check if line back to original point
            var x=this.arr.length-2;
            var y=this.arr.length-1;
            if(coord[0]>=(this.arr[x]-5)&&coord[0]<=(this.arr[x]+5)){
                if(coord[1]>=(this.arr[y]-5)&&coord[1]<=(this.arr[y]+5)){
                this.started=false
                this.context.lineTo(coord[0],coord[1]);
                this.context.closePath();
                this.context.stroke();
                this.context.fill();  
                }
            }else{
                this.context.lineTo(coord[0],coord[1]);
                this.context.stroke(); 
            }
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}