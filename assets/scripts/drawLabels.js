//@ts-nocheck

const drawLabels = function (data, options, element) {

  $(element).css({
    "width": options.plotWidth,
    "height": options.labelsHeight,
    "text-align": "center",
    "display":"flex"
  })

  // make barWidth dynamic according to the chart width, the empty spaces and the number of values passed)
  const barWidth = (options.plotWidth - ((data.length + 1) * options.barSpacing)) / data.length; // bar width depends on the total amount of values passed.

  let counter = 0;

  for (let obj of data) {

    if (counter === 0) {
      $(element).append(`<div class="bar-spaces-${chartNumber}"></div>`);
    }

    $(element).append(
      `<span class="labels-${chartNumber}">${obj.label}</span>`);


    $(element).append(`<div class="bar-spaces-${chartNumber}"></div>`);

    counter++;
  };

  $(`.bar-spaces-${chartNumber}`).css({
    "width": `${options.barSpacing}`
  })
  $(`.labels-${chartNumber}`).css({
    "display": "inline-flex",
    "width": barWidth,
    "color": options.labelColour,
    "font-size": options.labelsSize,
    "writing-mode": "vertical-rl",
    "transform": "rotate(180deg)",
    "justify-content" : "flex-end",
    "align-items": "center"
  })
};
