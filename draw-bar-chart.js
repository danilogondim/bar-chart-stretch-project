// to do

// include better behaviour for decimal values

// reorganize the code, classes, ids...

//@ts-nocheck

const drawBarChart = function (data, options, element) {
  checkValues(data, options)
  $(element).css({
    "width": options.chartWidth,
    "height": options.chartHeight,
    "display": "flex",
    "margin-top": "30px",
    "border": "0.3mm solid lightslategray"
  })

  // draw y-axis
  $(element).append(`<div id="y-axis-${chartNumber}"></div>`);
  drawYAxis(options, `#y-axis-${chartNumber}`);

  // set a div to work with the plot area
  $(element).append(`<div id="plot-area-${chartNumber}"></div>`);

  // draw the title
  $(`#plot-area-${chartNumber}`).append(`<span id="title-${chartNumber}"></span>`);
  drawTitle(options, `#title-${chartNumber}`);

  // draw within the plotting area (the bars)
  $(`#plot-area-${chartNumber}`).append(`<div id="bars-area-${chartNumber}"></div>`);
  drawBars(data, options, `#bars-area-${chartNumber}`);

  // draw the labels
  $(`#plot-area-${chartNumber}`).append(`<span id="labels-area-${chartNumber}"></span>`);
  drawLabels(data, options, `#labels-area-${chartNumber}`);

  // draw the x-axis title
  $(`#plot-area-${chartNumber}`).append(`<span id="x-axis-title-${chartNumber}"></span>`);
  drawXAxis(options, `#x-axis-title-${chartNumber}`);

  // resetting the main parameters so that we can generate another chart if necessary
  chartNumber++;
  data = undefined;
  options = undefined;
  element = undefined;
}
