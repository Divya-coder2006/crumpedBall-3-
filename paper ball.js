class Ball{

    constructor(x,y,radius){
         var options ={
             'restitution':0.3,
             'isStatic':false,
             'density':0.1,
           'friction': 0.1
         }
         this.body = Bodies.circle(x,y,(radius-20)/2,options);
         this.radius = radius;
         this.x = x;
         this.y = y;
         this.image = loadImage("ball.png")

         World.add(world,this.body);
      }
      display(){
       
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
      }

}
