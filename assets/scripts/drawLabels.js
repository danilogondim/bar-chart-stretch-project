//@ts-nocheck

const drawLabels = function (data, options, element) {



  $(element).css({
    "width": options.plotWidth,
    "height": options.labelsHeight,
    "text-align": "center"
  })


  // make barWidth dynamic according to the chart width, the empty spaces and the number of values passed)
  const barWidth = (options.plotWidth - ((data.length + 1) * options.barSpacing)) / data.length; // bar width depends on the total amount of values passed.

  let counter = 0;

  for (let obj of data) {

    if (counter === 0) {
      $(element).append("<div class=\"bar-spaces\"></div>");
    }

    $(element).append(
      `<span id="labels${counter}" class="labels">
        <span class="label-values">${obj.label}</span>
      </span>`);


    $(element).append("<div class=\"bar-spaces\"></div>");

    counter++;
  };

  $(".bar-spaces").css({
    "width": `${options.barSpacing}`
  })
  $(".labels").css({
    "display": "inline-block",
    "width": barWidth,
    "color": options.labelColour,
    "font-size": options.labelsSize
  })

};
