//@ts-nocheck

const drawBars = function (data, options, element) {
  $(element).css({
    "width": options.plotWidth,
    "height": options.plotHeight,
    "border-left": "0.3mm solid lightslategray",
    "border-bottom": "0.3mm solid lightslategray",
    "display": "table"
  })

  // make barWidth dynamic according to the chart width, the empty spaces and the number of values passed)
  const barWidth = (options.plotWidth - ((data.length + 1) * options.barSpacing)) / data.length; // bar width depends on the total amount of values passed.

  // draw the bars
  let mainBarCounter = 0;
  let objSum
  // loop through the data array to plot each bar
  for (let obj of data) {
    // before drawing the first bar, set an empty space on top so the y-label is higher than the highest bar, and set a space between the y-axis and the first bar
    if (mainBarCounter === 0) {
      $(element).append(`<span id="top-empty-space-${chartNumber}" style="height: ${(options.chartMaxValue - options.maxValue) / options.chartMaxValue * 100}%; display: block"></span>`);
      $(element).append(`<div class="bar-spaces-${chartNumber}"></div>`);
    }

    // start drawing the bars
    // calculate and set each bar height
    objSum = obj.values.reduce((a, b) => a + b, 0);

    // create a barGroup div and set each main bar
    $(element).append(`<div id="chart-${chartNumber}-barGroup-${mainBarCounter}" class="chart-${chartNumber}-bars"></div>`);
    $(`#chart-${chartNumber}-barGroup-${mainBarCounter}`).css({
      "height": `${objSum / options.chartMaxValue * 100}%`
    });

    // set each section of the main bar
    let sectionCounter = 0;
    for (let value of data[mainBarCounter].values) {
      $(`#chart-${chartNumber}-barGroup-${mainBarCounter}`).append(`<div id="chart-${chartNumber}-sectionBar-${mainBarCounter}-${sectionCounter}" class="chart-${chartNumber}-section-${sectionCounter}" style="height: ${value / objSum * 100}%"></div>`);
      $(`#chart-${chartNumber}-sectionBar-${mainBarCounter}-${sectionCounter}`).append(`<span class="bar-values-${chartNumber}" style="height: 100%">${value}</span>`);
      sectionCounter++;
    }

    // include an empty bar space after each bar
    $(element).append(`<div class="bar-spaces-${chartNumber}"></div>`);

    mainBarCounter++;
  };

  // set each section color
  // check how many different sections we have
  let maxSections;
  for (let obj of data) {
    if (maxSections === undefined || obj.values.length > maxSections) {
      maxSections = obj.values.length;
    }
  }

  // loop from 0 to maxSections to pick and set each section color
  for (let i = 0; i < maxSections; i++) {
    $(`.chart-${chartNumber}-section-${i}`).css({
      "background-color": `${options.barColours[i]}`,
      "display": "grid"
    });

  }

  $(`.chart-${chartNumber}-bars`).css({
    "width": barWidth,
    "display": "inline-block",
    "vertical-align": "bottom",
    "text-align": "center"
  });

  $(`.bar-values-${chartNumber}`).css({
    "display": "inline-grid",
    "align-items": options.plotValuesPosition,
    "color": options.plotValuesColour,
    "font-size": options.plotValuesSize
  })
  $(`.bar-spaces-${chartNumber}`).css({
    "width": `${options.barSpacing}`,
    "display": "inline-block"
  })

};
