class Box
{
  constructor(x, y, width, height){
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
  }
  display( color )
  {
    if( this.body.speed < 10 )
    {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill( color );
    imageMode(CENTER);
    rect(-10, 0, this.width, this.height);
    pop();
    }else
    {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      //rect(this.body.position.x, this.body.position.y, 0, 0);
      pop();
    }
  }
  score()
  {
    if( this.Visiblity<0 && this.Visiblity>-105 )
    {
      score++;
    }
  }

}
