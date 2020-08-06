//@ts-nocheck
const charOptions = {
  width: 200,
  height: 200,
  barColour: "light-blue",
  labelColour: "black",
  barSpacing: 20,
  barChartAxes: ["x", "y"],
}


const drawBarChart = function (data, options, element) {
  // to do
  // change width according to the options
  // change bar spacing according to the options
  // split this main functions in small functions
  let barWidth;
  let barHeight;

  if (options.width !== undefined) {
    charOptions.width = options.width;
  };
  if (options.height !== undefined) {
    charOptions.height = options.height;
  }
  const destination = document.querySelector("#destination"); //change back to element
  let counter = 0;
  for (let value of data) {
    barWidth = charOptions.width / 2 / data.length; // bar width depends on the total amount of values passed.
    barHeight = value; // bar height should be dependent on the values of the data.
    destination.insertAdjacentHTML("beforeend",
      `<div id="bars${counter}" class="bars">
        <span class="bar-values">${barHeight}</span>
      </div>`
    )
    destination.insertAdjacentHTML("beforeend",
      `<div class="bar-spaces"></div>`
    )
    $(`#bars${counter}`).css({
      "height": `${(barHeight / Math.max(...data)) * 100}%`,
      "background-color": `${charOptions.barColour}`,
      "width": `${barWidth}`
    });
    counter++;
  };
$(".bar-values").css({
  "display": "inline-grid",
  "align-items": `${options.valuesPosition ? options.valuesPosition:"start"}`
})

};

// The data parameter will be the data the chart should work from Start with just an
// Array of numbers e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element
// that the chart will get rendered into.
