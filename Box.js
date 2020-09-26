class Box{
    constructor(x,y,w,h){
          var options ={
               restitution:0.5,
               friction:0.9,
               density:0.3
           }  
          this.block=Bodies.rectangle(x,y,w,h,options);
          this.width=w;
          this.height=h;
      World.add(world,this.block);
        }

      display(){
         var pos=this.block.position;
         rectMode(CENTER);
         fill("brown");
    rect(pos.x,pos.y,this.width,this.height);



      }












}