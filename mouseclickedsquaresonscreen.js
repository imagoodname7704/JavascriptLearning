var xPositions = [100, 200];
var yPositions = [200, 300];

var squared = function() {
    background(9, 5, 59);
    for (var i = 0; i < yPositions.length; i++) {
        fill(255, 0, 0);
        rect (xPositions[i], yPositions[i], 30, 30);
    }
};

mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(mouseY);   
    squared();
};
