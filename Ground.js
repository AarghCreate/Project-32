class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display( color ){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      rotate( angle );
      fill( color );
      rect(pos.x, pos.y+this.height, this.width, this.height);
      pop();
    }
  }
