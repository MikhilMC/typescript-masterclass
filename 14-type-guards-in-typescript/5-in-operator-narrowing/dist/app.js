"use strict";
function getArea(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
