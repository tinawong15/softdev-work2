var pic = document.getElementById("vimage");
var clear = document.getElementById('but_clear');

var prev_x;
var prev_y;
var start = true;

pic.addEventListener('click', function(e) {
  var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

  if(pic.childNodes.length > 0) {
    if(start) {
      start = false;
    }
    else {
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', prev_x);
      line.setAttribute('x2', e.offsetX);
      line.setAttribute('y1', prev_y);
      line.setAttribute('y2', e.offsetY);
      line.setAttribute('stroke', 'black');
      pic.appendChild(line);
    }
  }

  pic.appendChild(c);
  prev_x = e.offsetX;
  prev_y = e.offsetY;
})

clear.addEventListener('click', function(e) {
  pic.innerHTML = '';
  var start = true;
})
