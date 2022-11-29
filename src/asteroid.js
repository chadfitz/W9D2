import MovingObject from "./moving_object";
import Util from "./util"

class Asteroid {
    constructor(){
        this.color = "brown";
        this.radius = 40;
    }

    inherits(this, MovingObject){};
}