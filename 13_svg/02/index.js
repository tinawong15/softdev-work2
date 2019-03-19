var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length); // compute height based on size of dataset

// g element contains a rect and a text
// g element for each data point
var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

// graph appears
bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

// text alignment
bar.append("text")
    .attr("x", function(d) { return x(d) - 3; }) // moves to the edge of the bar
    .attr("y", barHeight / 2) // moves to right corner of the bar
    .attr("dy", ".35em") // moves to center of bar
    .text(function(d) { return d; });
