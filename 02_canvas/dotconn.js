var c = document.getElementById("playground");
var width = c.getAttribute("width");
var height = c.getAttribute("height");
var ctx = c.getContext("2d");
var startX;
var startY;
// clears the canvas
var clearButton = document.getElementById('clear');
clearButton.addEventListener("click", function(e) {
  // starts the path of the ellipse all over again
  ctx.beginPath();
  ctx.clearRect(0, 0, width, height);
});

c.addEventListener('click', function(e) {
  ctx.fillStyle = '#00FF00'; // green
  ctx.lineTo(e.offsetX, e.offsetY);
  // move to center of circle
  ctx.moveTo(e.offsetX+30, e.offsetY);
  ctx.stroke();
  // get coordinates relative to element
  ctx.ellipse(e.offsetX, e.offsetY, 30, 30, 0, 0, 2 * Math.PI);
  ctx.moveTo(e.offsetX, e.offsetY);
  ctx.fill();
  ctx.stroke();
  startX = e.offsetX;
  startY = e.offsetY;
});
