class Box_4{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.Visibility = 255;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box4 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box4);
    }
    display(){
         //console.log(this.box4.speed);
         fill("yellow");
      if(this.box4.speed < 10){
        var stonepos= this.box4.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("yellow");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box4); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
}