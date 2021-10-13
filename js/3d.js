//set the dimensions and margins of the graph
const width = 400,
  height = 400,
  margin = 90;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin;

// append the svg object
const svg = d3
  .selectAll(".donutChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);

// Create dummy data
const data = { a: 60, b: 40 };

// set the color scale
const color = d3.scaleOrdinal().range(["#88d342", "#436924"]);

// Compute the position of each group on the pie:
const pie = d3.pie().value((d) => d[1]);

const data_ready = pie(Object.entries(data));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll("whatever")
  .data(data_ready)
  .join("path")
  .attr(
    "d",
    d3
      .arc()
      .innerRadius(100) // This is the size of the donut hole
      .outerRadius(radius)
  )
  .attr("fill", (d) => color(d.data[0]))
  .attr("stroke", "none")
  .style("stroke-width", "2px")
  .style("opacity", 0.8);
