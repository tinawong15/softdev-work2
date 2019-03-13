var pic = document.getElementById("vimage");
var clear = document.getElementById('but_clear');

var start = true;

var draw_dot = function(x,y) {
  var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "15");
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke", "black");
    c.addEventListener('click', change_dot);
  pic.appendChild(c);
}

var change_dot = function(e) {
  if(e.target.getAttribute('fill') === 'purple') {
    e.target.setAttribute('fill', 'green');
  }
  else {
    pic.removeChild(e.target);
    randomX = Math.floor(Math.random() * pic.getAttribute("width"));
    randomY = Math.floor(Math.random() * pic.getAttribute("height"));
    draw_dot(randomX,randomY);
  }
}

pic.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.getAttribute("id") == "vimage"){
        draw_dot(e.offsetX,e.offsetY);
    }
})

clear.addEventListener('click', function(e) {
  pic.innerHTML = '';
  var start = true;
})
