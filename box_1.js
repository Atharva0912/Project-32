class Box_1{
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
          this.box1 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
          World.add(world,this.box1);
      }
 
      score(){
        if(this.Visibility < 0 && this.Visibility >- 105){
          score++;
        }
      }

      display(){
          push()
          //console.log(this.box1.speed);
          fill("blue");
      if(this.box1.speed < 10){
        var stonepos= this.box1.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("blue");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box1); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
  
      }