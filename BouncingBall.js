var y = 0;
var speed = 2;
draw = function() {
    background(127, 204, 255);
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);
    y = y + speed;
    if (y > 400) {
        speed = -5;
    }
    if (y < 0) {
        speed = 5;
    }
};
