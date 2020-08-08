//@ts-nocheck

const drawXAxis = function (data, options, element) {
  $(element).css({
    "width": options.plotWidth,
    "height": options.xAxisTitleHeight,
    "font-size": options.xTitleSize,
    "display": "inline-block",
    "text-align": "center"
  })

  $(element).html(options.xAxisTitle);
}
