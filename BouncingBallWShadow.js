var t = 0;
var y = 0;
var draw = function() {
    background(186, 255, 232);
    fill(255, 255, 255);
    rect(0, 250, 400, 150);
    y = -0.02*t*t + 3.5*t;
    var grey = 0.1 * y + 200;
    var shadowSize = 0.2 * y + 50;
    fill(grey, grey, grey);
    ellipse(200, 300, shadowSize, 10);
    var correctedY = 250 - y;
    fill(71, 117, 255);
    ellipse(200, correctedY, 50, 50);
    if (y < 0) {
        t = 0;
    }
    t += 5;
};
