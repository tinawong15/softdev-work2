var c = document.getElementById("slate");
var width = c.getAttribute("width");
var height = c.getAttribute("height");
var ctx = c.getContext("2d");

// clears the canvas
var clearButton = document.getElementById('clear');
clearButton.addEventListener("click", function() {
  ctx.clearRect(0, 0, width, height);
});

// state variable, if true: rectangle, if false: dot
var isRectangle = true;
var toggleButton = document.getElementById('toggle');

// toggle button switches between draw-a-rectangle mode and draw-a-dot mode
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
    ctx.fillStyle = '#FF0000'; // red
    // get coordinates relative to element
    ctx.fillRect(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, 50, 50);
  }
  else {
    console.log("Ellipse");
    ctx.fillStyle = '#00FF00'; // green
    // starts the path of the ellipse all over again every time it is clicked
    ctx.beginPath();
    // get coordinates relative to element
    ctx.ellipse(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, 50, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
  }
});
