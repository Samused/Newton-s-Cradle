class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
        pointB: pointB,
            stiffness: 0.03,
            length: 199
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB;
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}