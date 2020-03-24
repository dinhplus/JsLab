var Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
Circle.prototype.isOverlapped = function(otherCircle) {
    ranged = Math.sqrt(
        Math.pow(this.x - otherCircle.x, 2) +
        Math.pow(this.y - otherCircle.y, 2)
    );
    sumRadius = this.radius + otherCircle.radius;
    if (ranged > sumRadius) return 1

    else if (ranged === sumRadius) return 0
    else return -1;
}

module.exports = Circle;