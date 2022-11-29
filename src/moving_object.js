class MovingObject{
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color; 
    }

    draw(ctx){
        
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
        // ctx.strokeStyle = "darkred";
        ctx.fillStyle = this.color;
        ctx.lineWidth = 20;
        ctx.stroke();
        // ctx.fillStyle = "red";
        ctx.fill();
    }

    move(ctx){
        // ctx.clearRect();
        this.pos[0] = this.pos[0] + this.vel[0];
        this.pos[1] = this.pos[1] + this.vel[1];
        this.draw(ctx);
    }
}

module.exports = MovingObject;