//@ts-nocheck

const checkValues = function (data, options) {
  // default values in case the user does not pass an option
  const defaultOptions = {

    chartWidth: 700,
    chartHeight: 300,

    title: "",
    titleHeight: 45,
    titleColour: "black",
    titleSize: 25,

    yAxisWidth: 35,

    yAxisTitle: "",
    yTitleSize: 12,
    yAxisTitleWidth: 14,

    qTicks: 5,
    yTicksWidth: 10.5,

    tickValuesSize: 12,
    yValuesWidth: 10.5,

    plotWidth: 665,
    plotHeight: 210,

    plotValuesPosition: "start",
    plotValuesColour: "black",
    plotValuesSize: 15,

    barColour: "light-blue",
    barSpacing: 50,

    labelColour: "black",
    labelsHeight: 45,
    labelsSize: 15,

    xAxisTitle: "Years",
    xTitleSize: 12,
    xAxisTitleHeight: 14,
  }
  // check whether an option was not given and set to the default values if necessary
  for (let option in defaultOptions) {
    if (options[option] === undefined) {
      options[option] = defaultOptions[option];
    }
  }

  // check whether the passed widths are compatible and correct them if not, trying to keep the same rate as passed
  if (options.plotWidth + options.yAxisWidth !== options.chartWidth) {
    options.plotWidth = options.chartWidth * options.plotWidth / (options.plotWidth + options.yAxisWidth);
    options.yAxisWidth = options.chartWidth * options.yAxisWidth / (options.plotWidth + options.yAxisWidth);
  };
  if (options.yAxisTitleWidth + options.yTicksWidth + options.yValuesWidth !== options.yAxisWidth) {
    options.yAxisTitleWidth = options.yAxisWidth * options.yAxisTitleWidth / (options.yAxisTitleWidth + options.yTicksWidth + options.yValuesWidth);
    options.yTicksWidth = options.yAxisWidth * options.yTicksWidth / (options.yAxisTitleWidth + options.yTicksWidth + options.yValuesWidth);
    options.yValuesWidth = options.yAxisWidth * options.yValuesWidth / (options.yAxisTitleWidth + options.yTicksWidth + options.yValuesWidth);
  };

  // check whether the passed heights are compatible and correct them if not, trying to keep the same rate as passed

  if (options.titleHeight + options.plotHeight + options.labelsHeight + options.xAxisTitleHeight !== options.chartHeight) {
    options.titleHeight = options.chartHeight * options.titleHeight / (options.titleHeight + options.plotHeight + options.labelsHeight + options.xAxisTitleHeight)
    options.plotHeight = options.chartHeight * options.plotHeight / (options.titleHeight + options.plotHeight + options.labelsHeight + options.xAxisTitleHeight)
    options.labelsHeight = options.chartHeight * options.labelsHeight / (options.titleHeight + options.plotHeight + options.labelsHeight + options.xAxisTitleHeight)
    options.xAxisTitleHeight = options.chartHeight * options.xAxisTitleHeight / (options.titleHeight + options.plotHeight + options.labelsHeight + options.xAxisTitleHeight)
  }

  // set a limit to barSpacing according to the plot width and the number of elements (minimum acceptable width for each bar is 0.1px)
  if ((options.barSpacing * (data.length + 1)) > (options.plotWidth + data.length * 0.1)) {
    options.barSpacing = (options.plotWidth - data.length * 0.1) / (data.length + 1)
  }

  // set a MaxValue to help defining y-axis and bar heights
  for (let obj of data) {
    if (options.maxValue === undefined) {
      options.maxValue = obj.value;
    } else if (obj.value > options.maxValue) {
      options.maxValue = obj.value;
    }
  }

  // set a chartMaxValue by adding an arbitrary value to MaxValue
  // the chartMaxValue will be used to set y-axis ticks and plot area
  // 0-9 = max +1
  // 10-18 = max +2
  // 19-99 = next multiple of 5 (can not be the same number)
  // else = next multiple of 20 (can not be the same number)

  if (options.chartMaxValue === undefined || options.chartMaxValue < options.maxValue) {
    options.chartMaxValue = options.maxValue;
    if (options.chartMaxValue <= 9) {
      options.chartMaxValue += 1;
    } else if (options.chartMaxValue <= 18) {
      options.chartMaxValue += 2;

    } else if (options.chartMaxValue <= 99) {
      options.chartMaxValue += 1;
      while (options.chartMaxValue % 5 !== 0) {
        options.chartMaxValue += 1;
      }

    } else {
      options.chartMaxValue += 1;
      while (options.chartMaxValue % 20 !== 0) {
        options.chartMaxValue += 1;
      }
    }

  }







}
