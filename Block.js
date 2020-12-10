class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility=255;

      }

      display() {


        if (this.body.speed<3) 
    {
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }else 
    {
     
     
      push();
      
      this.Visibility=this.Visibility-1;
      tint(255,this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      World.remove(world, this.body);
      pop();
    }
      

      }
      
}
