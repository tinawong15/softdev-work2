//Source for data: http://www.statpoint.net/default.aspx

var tasks = [1, 2, 3, 4, 5, 6]
var values =[39, 40, 44, 47, 41, 37]

var width = 1000;
var height = 1000;
var svg = d3.select(".chart").attr("width", width).attr("height", height)

var i = 0;
while (i < tasks.length){
  var circle = svg.append("circle")
      .attr("cx", function(d){return 50+100*tasks[i]})
      .attr("cy", function(d){return ((100+(d3.max(values)+1)*6)-(6*values[i]))})
      .attr("r", 5);
  i += 1;
}


var x_scale = d3.scaleLinear()
    .domain([0,d3.max(tasks)+1])
    .range([0, (d3.max(tasks)+1)*100]);

var y_scale = d3.scaleLinear()
    .domain([0,d3.max(values)+1])
    .range([30+(d3.max(values)+1)*6,0]);

var x_axis = d3.axisBottom()
    .scale(x_scale)

var y_axis = d3.axisLeft()
    .scale(y_scale)

var chart = d3.select(".chart")
chart.append('g')
    .attr("transform","translate (50,420)")
    .call(x_axis)

chart.append('g')
    .attr("transform","translate (50,100)")
    .call(y_axis)

chart.append("text")
    .attr("x",width / 2 -200)
    .attr("y", 0)
    .attr("dy","2em")
    .text("Pulse Rates over Different Tasks");

chart.append("text")
    .attr("x",width/2-150)
    .attr("y", 25)
    .attr("dy","2em")
    .text("By Emily Lee, Tina Wong");

chart.append("text")
    .attr("x",width/2-100)
    .attr("y",height/2-70)
    .attr("dy","2em")
    .text("Task");

chart.append("text")
    .attr("transform","rotate(-90)")
    .attr("x",-200)
    .attr("y",10)
    .attr("dy","1em")
    .text("Beats per Minute");
