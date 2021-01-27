class Box_2{
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
        this.box2 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box2);
                
    }
    display(){
        push()
       // console.log(this.box2.speed);
        fill("green");
      if(this.box2.speed < 10){
        var stonepos= this.box2.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("green");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box2); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
}