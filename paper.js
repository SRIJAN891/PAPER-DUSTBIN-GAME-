class paper
{
    constructor(x,y,radius)
    {
        var option={
            isStatic:false,
            restitution:0,
            friction:1,
            density:0.5

        }
     this.body=Bodies.circle(x,y,radius,option)
     this.radius=radius;
     this.image=loadImage("paper.png")
     World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;

        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        imageMode (CENTER)
        image (this.image,0,0,this.radius,this.radius)
        pop ()
    }
}
