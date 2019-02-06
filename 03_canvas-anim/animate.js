// Tina Wong
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught ...which is often
// 2019-02-04

var c = document.getElementById("playground");
var width = c.getAttribute("width");
var height = c.getAttribute("height");
var ctx = c.getContext("2d");
var requestID;
var radius = 1;
var growing = 1;

var stop = document.getElementById('stop');
stop.addEventListener('click', function(e) {
  window.cancelAnimationFrame(requestID);
});

ctx.fillStyle = "#000000"; // black

var clear = function() {
  ctx.clearRect(0, 0, c.width, c.height);
}

var drawDot = function() {
  // change the way the radius is growing
  if (growing == 1 && (radius >= c.width / 2 || radius >= c.height / 2)){
    growing = -1;
  }
  else if (growing == -1 && radius <= 0) {
    growing = 1;
  }
  radius += growing;

  // clear to prevent canvas color to be changed when circle covers the canvas
  clear();

  // draw circle
  ctx.beginPath();
  ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot);
};
circle.addEventListener('click', function(e) {
  window.cancelAnimationFrame(requestID);
  drawDot();
});
