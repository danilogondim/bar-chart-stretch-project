// to do

// include better behaviour for decimal values

// reorganize the code, classes, ids...

/*
  Multiple Value (Stacked) bar charts
  Allow the user to pass multiple values for each bar.

  Think about how you would need to structure this data compared to a single bar chart.
  This should also support all the features of the single bar chart, including

  Customizable bar colours, per value
  Customizable label colours
*/


//@ts-nocheck

const drawBarChart = function (data, options, element) {
  checkValues(data, options)
  $(element).css({
    "width": options.chartWidth,
    "height": options.chartHeight,
    "display": "flex"
  })

  // draw y-axis
  $(element).append("<div id=\"y-axis\"></div>");
  drawYAxis(options, "#y-axis");

  // set a div to work with the plot area
  $(element).append("<div id=\"chart\"></div>");

  // draw the title
  $("#chart").append("<span id=\"title\"></span>");
  drawTitle(data, options, "#title");

  // draw within the plotting area (the bars)
  $("#chart").append("<div id=\"bars\"></div>");
  drawBars(data, options, "#bars");

  // draw the labels
  $("#chart").append("<span id=\"labels\"></span>");
  drawLabels(data, options, "#labels");

  // draw the x-axis title
  $("#chart").append("<span id=\"x-axis-title\"></span>");
  drawXAxis(data, options, "#x-axis-title");
}
