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
var circle = document.getElementById('circle');
circle.addEventListener('click', function(e) {
  window.cancelAnimationFrame(requestID);
  drawDot();
});

var dvdLogoSetup = function() {
  clear();
  window.cancelAnimationFrame( requestID);
  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor(Math.random() * (c.width-rectWidth));
  var rectY = Math.floor(Math.random() * (c.height-rectHeight));

  var xVel = 1;
  var yVel = 1;

  // adds and draws the image onto the canvas
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
  // ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  var dvdLogo = function() {
    clear();
    // reflects direction when image reaches boundaries of the canvas
    if(rectX + rectWidth == c.width || rectX == 0) {
      xVel *= -1;
    }
    if(rectY + rectHeight == c.height || rectY == 0) {
      yVel *= -1;
    }
    // moves the image
    rectX += xVel;
    rectY += yVel;

    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    requestID = window.requestAnimationFrame(dvdLogo);
  }
  dvdLogo();
}

var dvd = document.getElementById('dvd');
dvd.addEventListener('click', function(e) {
  dvdLogoSetup();
})
