class PlayerArcher{
    constructor(x,y,w,h,angle){
        let options ={
            isStatic: true
        }
        this.body=Bodies.rectangle(x, y, w, h, angle, options)
        this.w = w 
        this.h = h 
        this.angle = angle
        this.x = x
        this.y = y
        World.add(world, this.body);
    }

    display(){
        let pos = this.body.position;
        push();
        rotate(this.angle);
        fill("blue");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}