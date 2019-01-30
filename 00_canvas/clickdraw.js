var c = document.getElementById("slate");
var width = c.getAttribute("width");
var height = c.getAttribute("height");
var ctx = c.getContext("2d");

var clearButton = document.getElementById('clear');
clearButton.addEventListener("click", function() {
  ctx.clearRect(0, 0, width, height);
});

var isRectangle = true;
var toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', function() {
  isRectangle = !isRectangle;
  if(isRectangle) {
    this.innerHTML = "Draw-a-Rectangle Mode";
  }
  else {
    this.innerHTML = "Draw-A-Dot Mode";
  }
});

c.addEventListener('click', function(e) {
  if(isRectangle) {
    console.log("Rectangle");
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, 50, 50);
  }
  else {
    console.log("Ellipse");
    ctx.fillStyle = '#00FF00';
    ctx.beginPath();
    ctx.ellipse(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, 50, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
  }
});
