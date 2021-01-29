class Bob{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.001,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50,options);
        this.radius = 100;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("grey")
        ellipse( 0, 0, this.radius,this.radius);
        pop();
      }
}