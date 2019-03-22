var data = [];
var tasks = [1, 2, 3, 4, 5, 6]
var values = [39, 40, 44, 47, 41, 37]

var i = 0;
for(i = 0; i < tasks.length; i++) {
  data[i] = [tasks[i], values[i]];
  console.log(data[i])
}

var width = 420,
    height = 100;

var x = d3.scaleLinear()
    .domain([1, 6])
    .range([20, width]);

var y = d3.scaleLinear()
    .domain([30, 50])
    .range([5, height]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

var scatter = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d) {
      return "translate(" + x(d[0]) + "," + y(d[1]) + ")";
     })
     .attr('text', function(d) { return d[1] });

scatter.append('rect')
  .attr('width', 5)
  .attr('height', 5 );

var x_scale = d3.scaleLinear()
  .domain([d3.min(tasks), d3.max(tasks)])
  .range([0, width]);

var y_scale = d3.scaleLinear()
  .domain([d3.min(values), d3.max(values)])
  .range([0, height]);

var x_axis = d3.axisBottom()
  .scale(x_scale);

var y_axis = d3.axisLeft()
  .scale(y_scale);

chart.append('g')
  .attr('transform', 'translate(10,90)')
  .call(x_axis);

chart.append('g')
  .attr('transform', 'translate(20,0)')
  .call(y_axis);

// var width = 420,
//     barHeight = 20;
//
// var x = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, width]);
//
// var chart = d3.select(".chart")
//     .attr("width", width)
//     .attr("height", barHeight * data.length); // compute height based on size of dataset
//
// // g element contains a rect and a text
// // g element for each data point
// var bar = chart.selectAll("g")
//     .data(data)
//   .enter().append("g")
//     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
//
// // graph appears
// bar.append("rect")
//     .attr("width", x)
//     .attr("height", barHeight - 1);
//
// // text alignment
// bar.append("text")
//     .attr("x", function(d) { return x(d) - 3; }) // moves to the edge of the bar
//     .attr("y", barHeight / 2) // moves to right corner of the bar
//     .attr("dy", ".35em") // moves to center of bar
//     .text(function(d) { return d; });
//
