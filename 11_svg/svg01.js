var pic = document.getElementById("vimage");
var clear = document.getElementById('but_clear');
var move = document.getElementById('but_move');
var change_vel = document.getElementById('but_?');
var requestID;
var start = true;
var moving = false;

var draw_dot = function(x,y) {
  var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("vx", 1);
    c.setAttribute("vy", 1);
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

var move_dot = function() {
    var i;
    for(i = 0; i < pic.children.length; i++) {
      c = pic.children[i];
      console.log(i);
      c.setAttribute("cx", Number(c.getAttribute("cx")) + Number(c.getAttribute("vx")));
      console.log(Number(c.getAttribute("cx")) + Number(c.getAttribute("vx")));
      c.setAttribute("cy", Number(c.getAttribute("cy")) + Number(c.getAttribute("vy")));
      console.log(Number(c.getAttribute("cy")) + Number(c.getAttribute("vy")));

      if(Number(c.getAttribute("cx")) <= 0 || (Number(c.getAttribute("cx"))  + Number(c.getAttribute("r")) >= Number(pic.getAttribute("width")))){
        c.setAttribute("vx", Number(c.getAttribute("vx") * -1));
      }
      if(Number(c.getAttribute("cy")) <= 0 || (Number(c.getAttribute("cy"))  + Number(c.getAttribute("r")) >= Number(pic.getAttribute("height")))){
        c.setAttribute("vy", Number(c.getAttribute("vy") * -1));
      }

    }
  requestID = window.requestAnimationFrame(move_dot);
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

move.addEventListener('click', function(e) {
  if(!moving) {
    moving = true;
    window.cancelAnimationFrame(requestID);
    move_dot();
  }
})

change_vel.addEventListener('click', function(e) {
  for(i = 0; i < pic.children.length; i++) {
    c = pic.children[i];
    var current_vx = Number(c.getAttribute("vx"));
    var current_vy = Number(c.getAttribute("vy"));
    c.setAttribute("vx", current_vx+1);
    c.setAttribute("vy", current_vy+1);
  }
})
