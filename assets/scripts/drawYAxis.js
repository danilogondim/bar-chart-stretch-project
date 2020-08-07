//@ts-nocheck

const drawYAxis = function (data, options, element) {
  $(element).css({
    "width": options.yAxisWidth,
    "display": "contents"
  })

  $(element).append(`<div style="width: ${$(element).innerWidth() * .7}px; display: inline-block;height: ${options.chartHeight}px"></div>`);
  $(element).append(`<div id="y-ticks" style="width: ${$(element).innerWidth() * .2}px; display: inline-block;height: ${options.chartHeight}px"></div>`);

  $("#y-ticks").append("<span></span>");
  $("#y-ticks").append("<div></div>");
  $("#y-ticks").append("<span></span>");


}
