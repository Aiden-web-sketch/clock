class Clock{
    constructor(x,y,radius){
this.radius=radius
this.body=Bodies.circle(x,y,radius)
    }
display(){
    arc(100,100,200,200)
    stroke(255,0,0)
    strokeWeight(7)
    line(0,0,100,0)
    scAngle=map(0,60,0,360)
    angleMode(DEGREES);
    cicrle(0,0,this.radius,this,this.radius)

    }
}
