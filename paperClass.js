class Paper {
    constructor(x, y, radius) {
        var options = {
            'density' : 1.2,
            'friction' : 5,
            'restitution' : 0.3,

        };
        this.body = Bodies.circle(x, y, radius/2, options)
        this.width = radius;
        this.height = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
        
    }
    display(){
      var pos =this.body.position;
      push()
      imageMode(RADIUS);
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill('black');
      image( this.image, 0,0,this.width, this.height);
      pop();
    }
}
