//@ts-nocheck

const checkValues = function (data, options, element) {
  // default values in case the user does not pass an option
  const defaultOptions = {

    chartWidth: 700,
    chartHeight: 300,

    yAxisWidth:35,

    title: "",
    titleHeight: 45,
    titleColour: "black",
    titleSize: 25,

    plotWidth: 665,
    plotHeight: 210,

    valuesPosition: "start",
    valuesColour: "black",
    valuesSize: 15,

    barColour: "light-blue",
    barSpacing: 50,

    labelColour: "black",
    labelsHeight: 45,
    labelsSize: 15,

    barChartAxes: ["x", "y"]
  }
  // check whether an option was not given and set to the default values if necessary
  for (let option in defaultOptions) {
    if (options[option] === undefined) {
      options[option] = defaultOptions[option];
    }
  }

  // reducing chart space so the y axis can be inserted within the main object
  options.plotWidth = options.chartWidth * .95;
  options.yAxisWidth = options.chartWidth * .05;
  options.titleHeight = options.chartHeight * .15;
  options.plotHeight = options.chartHeight * .7;
  options.labelsHeight = options.chartHeight * .15;

  // set a limit to barSpacing according to the plot width and the number of elements (minimum acceptable width for each bar is 0.1px)
  if ((options.barSpacing * (data.length + 1)) > (options.plotWidth + data.length * 0.1)) {
    options.barSpacing = (options.plotWidth - data.length * 0.1) / (data.length + 1)
  }

}
