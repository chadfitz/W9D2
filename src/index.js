const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;



document.addEventListener("DOMContentLoaded", function(){
    const canvasT = document.getElementById("game-canvas");
    
    const ctx = canvasT.getContext('2d');
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, 600, 300);

    let options = {pos: [50, 50], vel: [100, 30], radius: 10, color: "red"}
    let circle = new MovingObject(options);
    circle.draw(ctx);

    setInterval(() => circle.move(ctx), 500);
    // circle.move(ctx);
    // circle.draw(ctx);
    // circle.move(ctx);
});