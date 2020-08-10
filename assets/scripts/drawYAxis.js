//@ts-nocheck

const drawYAxis = function (options, element) {
  $(element).css({
    "width": options.yAxisWidth,
    "display": "inline-flex"
  })

  // Create a div for y-axis title and set its value and style
  $(element).append(`<div id="y-axis-title-${chartNumber}" style="width: ${options.yAxisTitleWidth}px; display: inline-block; height: ${options.chartHeight}px">${options.yAxisTitle}</div>`);
  $(`#y-axis-title-${chartNumber}`).css({
    "writing-mode": "vertical-lr",
    "transform": "rotate(180deg)",
    "text-align": "center",
    "font-size": options.yTitleSize,
    "display": "inline-flex",
    "justify-content": "center",
    "align-items": "center"
  })

  // Create a div for the tick values and set them
  $(element).append(`<div class="y-ticks-values-${chartNumber}" style="width: ${options.yValuesWidth}px; display: grid; height: ${options.chartHeight}px"></div>`);
  $(`.y-ticks-values-${chartNumber}`).append(`<span style="height: ${options.titleHeight}px; display: grid"></span>`);
  $(`.y-ticks-values-${chartNumber}`).append(`<div id="tick-values-${chartNumber}" style="height: ${options.plotHeight}px; display: table"></div>`);
  $(`.y-ticks-values-${chartNumber}`).append(`<span style="height: ${options.labelsHeight}px; display: grid"></span>`);
  for (let i = 1; i < options.qTicks; i++) {
    $(`#tick-values-${chartNumber}`).append(`<div style="height: ${100 / (options.qTicks - 1)}%; font-size: ${options.tickValuesSize}px">${(options.chartMaxValue / i).toFixed(0)}</div>`);
  }

  // Create a div for the ticks and set them
  $(element).append(`<div class="y-ticks-marks-${chartNumber}" style="width: ${options.yTicksWidth}px; height: ${options.chartHeight}px; display: grid"></div>`);
  $(`.y-ticks-marks-${chartNumber}`).append(`<span style="height: ${options.titleHeight}px; display: grid"></span>`);
  $(`.y-ticks-marks-${chartNumber}`).append(`<div id="tick-marks-${chartNumber}" style="height: ${options.plotHeight}px; display: table"></div>`);
  $(`.y-ticks-marks-${chartNumber}`).append(`<span style="height: ${options.labelsHeight + options.xAxisTitleHeight}px; display: grid; font-size: ${options.tickValuesSize}px">0</span>`);
  for (let i = 1; i < options.qTicks; i++) {
    if (i === options.qTicks - 1) {
      $(`#tick-marks-${chartNumber}`).append(`<div style="height: ${100 / (options.qTicks - 1)}%; border-top: 0.30mm solid lightslategray; border-bottom: 0.30mm solid lightslategray"></div>`);
    }
    else {
      $(`#tick-marks-${chartNumber}`).append(`<div style="height: ${100 / (options.qTicks - 1)}%; border-top: 0.30mm solid lightslategray"></div>`);
    }
  }
}
