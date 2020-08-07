// to do

// bar chart axes

// X-axis labels should be part of the main object (reduce chart height)

// Y-axis should show ticks at certain values
// Think about where you would configure these values. Should they be part of the data
// or the options to the bar chart function.

// split this main functions into small functions

/*
  Multiple Value (Stacked) bar charts
  Allow the user to pass multiple values for each bar.

  Think about how you would need to structure this data compared to a single bar chart.
  This should also support all the features of the single bar chart, including

  Customizable bar colours, per value
  Customizable label colours
*/






//@ts-nocheck

// default values in case the user does not pass an option

const defaultOptions = {
  width: 700,
  height: 300,
  title: "",
  titleColour: "black",
  titleSize: 25,
  valuesPosition: "start",
  valuesColour: "black",
  barColour: "light-blue",
  barSpacing: 50,
  labelColour: "black",
  barChartAxes: ["x", "y"]
}

const drawBarChart = function (data, options, element) {

  // check whether an option was not given and set to the default values if necessary
  for (let option in defaultOptions) {
    if (options[option] === undefined) {
      options[option] = defaultOptions[option];
    }
  }

  // set a limit to barSpacing according to the chart width and the number of elements (minimum acceptable width for each bar is 0.1px)
  if ((options.barSpacing * (data.length + 1)) > (options.width + data.length * 0.1)) {
    options.barSpacing = (options.width - data.length * 0.1) / (data.length + 1)
  }


  $(element).css({
    "width": `${options.width}`,
    "height": `${options.height}`
  })

  $(element).append("<span id=\"title\"></span>");
  drawTitle(data, options, "#title");

  $(element).append("<div id=\"bars\"></div>");
  drawBars(data, options, "#bars"); //change options? data?


  $(element).append("<span id=\"labels\"></span>"); // change options? data?
  drawLabels(data, options, "#labels");
}
