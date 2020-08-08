//@ts-nocheck

const drawYAxis = function (data, options, element) {
  $(element).css({
    "width": options.yAxisWidth,
    "display": "inline-flex"
  })

  $(element).append(`<div style="width: ${$(element).innerWidth() * .7}px; display: inline-block; height: ${options.chartHeight}px"></div>`);
  $(element).append(`<div class="y-ticks" style="width: ${$(element).innerWidth() * .3}px; height: ${options.chartHeight}px; display: inline-block"></div>`);
  $(".y-ticks").append(`<span style="height: ${options.titleHeight}px; display: grid"></span>`);
  $(".y-ticks").append(`<div id="ticks" style="height: ${options.plotHeight}px; display: grid"></div>`);
  $(".y-ticks").append(`<span style="height: ${options.labelsHeight}px; display: grid"></span>`);



  const ticks = [(options.chartMaxValue/3).toFixed(0), (options.chartMaxValue/2).toFixed(0), options.chartMaxValue.toFixed(0)];
  // alert(ticks)


  // $("#ticks").append(); // include some labels according to the chart


  $("#ticks").css({
    "border-bottom": "0.3mm solid lightslategray"
  })

}
