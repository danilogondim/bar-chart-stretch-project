//@ts-nocheck

const drawTitle = function (data, options, element) {
  $(element).css({
    "width": options.width,
    "height": options.height * .15,
    "text-align": "center",
    "display": "inline-block",
    "color": options.titleColour,
    "font-size": options.titleSize
  })

  $(element).html(options.title);

}
