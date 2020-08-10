//@ts-nocheck

const drawTitle = function (options, element) {


  $(element).css({
    "width": options.plotWidth,
    "height": options.titleHeight,
    "text-align": "center",
    "display": "inline-grid",
    "align-items": "center",
    "color": options.titleColour,
    "font-size": options.titleSize
  })

  $(element).html(options.title);

}
