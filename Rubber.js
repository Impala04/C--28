class Rubber {
    constructor(body1,point2){
    var options={bodyA:body1,pointB:point2,
    stiffness:0.004,
    length:1
    } 
    this.rubber= Constraint.create(options)
    World.add(world,this.rubber)
}
display(){
   if(this.rubber.bodyA){ 
       stroke ("aqua")
    line (this.rubber.bodyA.position.x,this.rubber.bodyA.position.y,this.rubber.pointB.x,this.rubber.pointB.y)
   }
  } 
fly(){
    this.rubber.bodyA=null
}
attach(body){
this.rubber.bodyA=body
}
}
