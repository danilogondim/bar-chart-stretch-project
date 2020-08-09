//@ts-nocheck

const drawBars = function (data, options, element) {
  $(element).css({
    "width": options.plotWidth,
    "height": options.plotHeight
  })


  // make barWidth dynamic according to the chart width, the empty spaces and the number of values passed)
  const barWidth = (options.plotWidth - ((data.length + 1) * options.barSpacing)) / data.length; // bar width depends on the total amount of values passed.

  let counter = 0;
  let objSum
  for (let obj of data) {
    objSum = obj.values.reduce((a, b) => a + b, 0);
    if (counter === 0) {
      $(element).append(`<span id="top-empty-space" style="height: ${(options.chartMaxValue - options.maxValue) / options.chartMaxValue * 100}%; display: block"></span>`);
      $(element).append("<div class=\"bar-spaces\"></div>");
    }


    $(element).append(
      `<div id="bars${counter}" class="bars">
        <span class="bar-values">${objSum}</span>
      </div>`);


    $(element).append("<div class=\"bar-spaces\"></div>");


    $(`#bars${counter}`).css({
      "height": `${objSum / options.chartMaxValue * 100}%` // bar height should be dependent on the values of the data.
    });
    counter++;
  };

  // separar classes por series e aplicar a partir de loop
  $(".bars").css({
    "background-color": `${options.barColours[0]}`,
    "width": barWidth
  });

  $(".bar-values").css({
    "display": "inline-grid",
    "align-items": options.plotValuesPosition,
    "color": options.plotValuesColour,
    "font-size": options.plotValuesSize
  })
  $(".bar-spaces").css({
    "width": `${options.barSpacing}`
  })

};
