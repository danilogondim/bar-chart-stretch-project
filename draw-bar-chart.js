// to do

// test chartMaxValue customization

// work with the values check (plotWidth + yAxisWidth = chartWidth; titleHeight + plotHeight + labelsHeight = chartWidth)

// bar chart axes titles

// check whether the functions use all the passed parameters and clean them

// Y-axis should show ticks at certain values
// Think about where you would configure these values. Should they be part of the data
// or the options to the bar chart function.

// reorganize the code, classes, ids...

// change axis vs chart proportion (.05 vs .95)

// make it able to decrease the chart width and length without losing soo much appearance (labels and titles shoud be limited to a maximum height/width)

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
  checkValues(data, options, element)
  $(element).css({
    "width": options.chartWidth,
    "height": options.chartHeight,
    "display": "flex"
  })
  $(element).append("<div id=\"y-axis\"></div>");
  drawYAxis(data, options, "#y-axis");
  $(element).append("<div id=\"chart\"></div>");
  $("#chart").append("<span id=\"title\"></span>");
  drawTitle(data, options, "#title");
  $("#chart").append("<div id=\"bars\"></div>");
  drawBars(data, options, "#bars"); //change options? data?
  $("#chart").append("<span id=\"labels\"></span>"); // change options? data?
  drawLabels(data, options, "#labels");
}
