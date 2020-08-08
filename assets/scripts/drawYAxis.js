//@ts-nocheck

const drawYAxis = function (data, options, element) {
  $(element).css({
    "width": options.yAxisWidth,
    "display": "inline-flex"
  })

  $(element).append(`<div id="y-axis-title" style="width: ${$(element).innerWidth() * .4}px; display: inline-block; height: ${options.chartHeight}px"></div>`);
  $(element).append(`<div class="y-ticks-values" style="width: ${$(element).innerWidth() * .3}px; display: grid; height: ${options.chartHeight}px"></div>`);
  $(element).append(`<div class="y-ticks" style="width: ${$(element).innerWidth() * .3}px; height: ${options.chartHeight}px; display: grid"></div>`);

  $(".y-ticks-values").append(`<span style="height: ${options.titleHeight}px; display: grid"></span>`);
  $(".y-ticks-values").append(`<div id="tick-values" style="height: ${options.plotHeight}px; display: table"></div>`);
  $(".y-ticks-values").append(`<span style="height: ${options.labelsHeight}px; display: grid"></span>`);

  $(".y-ticks").append(`<span style="height: ${options.titleHeight}px; display: grid"></span>`);
  $(".y-ticks").append(`<div id="ticks" style="height: ${options.plotHeight}px; display: table"></div>`);
  $(".y-ticks").append(`<span style="height: ${options.labelsHeight}px; display: grid; font-size: ${options.ticksSize}px">0</span>`);



  // const ticks = [(options.chartMaxValue / 3).toFixed(0), (options.chartMaxValue / 2).toFixed(0), options.chartMaxValue.toFixed(0)];
  // alert(ticks)
  for (let i = 1; i < options.qTicks; i++) {
    $("#tick-values").append(`<div style="height: ${100 / (options.qTicks - 1)}%; font-size: ${options.ticksSize}px">${(options.chartMaxValue / i).toFixed(0)}</div>`); // include some labels according to the chart
  }

  for (let i = 1; i < options.qTicks; i++) {
    if (i === options.qTicks - 1) {
      $("#ticks").append(`<div style="height: ${100 / (options.qTicks - 1)}%; border-top: 0.30mm solid lightslategray; border-bottom: 0.30mm solid lightslategray"></div>`); // include some labels according to the chart
    }
    else {
      $("#ticks").append(`<div style="height: ${100 / (options.qTicks - 1)}%; border-top: 0.30mm solid lightslategray"></div>`); // include some labels according to the chart
    }
  }






}
