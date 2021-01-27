class Box_3{
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
        this.box3 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box3);
    }
    display(){
        //console.log(this.box3.speed);
        fill("pink");
      if(this.box3.speed < 10){
        var stonepos= this.box3.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("pink");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box3); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
    }