class DragCanvas extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selected=0;   
        this.arr=[];
    }
    
    onMouseDown(coord,event){
        //$('#canvas-container').css('cursor','move')
        this.origX = coord[0];
        this.origY = coord[1];

        if(this.selected==0){
            this.arr.push(coord[0]);
            this.arr.push(coord[1]);
            console.log("mouse1"+this.origX,this.origY)
        }else{
            console.log("mouse2"+this.origX,this.origY)
            var x=this.arr[0];
            var y=this.arr[1];
            var xWidth=this.arr[2]-x;
            var yHeight=this.arr[3]-y;

            this.imageData = this.contextReal.getImageData(x, y, xWidth, yHeight);
            this.contextReal.clearRect(x, y, xWidth, yHeight);

        }

    }
    onDragging(coord,event){
        if(this.selected==0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        }else{
            console.log("mouse3"+this.origX,this.origY)
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.putImageData(this.imageData, (this.arr[0]+coord[0]-this.origX), (this.arr[1]+coord[1]-this.origY));
        }
        
        
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        if(this.selected==0){
            this.arr.push(coord[0]);
            this.arr.push(coord[1]);
            console.log(this.arr);
            this.selected=1;
        }else{
            this.contextReal.putImageData(this.imageData, coord[0], coord[1]);
            this.selected=0;
        }
        //$('#canvas-container').css('cursor','default')
    }
    onMouseLeave(){}
    onMouseEnter(){}
}