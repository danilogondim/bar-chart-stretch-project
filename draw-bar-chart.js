//@ts-nocheck

// list of possible options to customize the chart
const chartOptions = ["width", "height", "valuesPosition", "barColour", "labelColour", "barSpacing", "barChartAxes"]

// default values in case the user does not pass an option

const defaultOptions = {
  width: 700,
  height: 300,
  valuesPosition: "start",
  barColour: "light-blue",
  labelColour: "black",
  barSpacing: 50,
  barChartAxes: ["x", "y"]
}


const drawBarChart = function (data, options, element) {
  // to do

  // label colour

  // bar chart axes

  // X-axis should show labels for each data value
  // Think about how you would need to structure your data to associate a label to each value

  // Y-axis should show ticks at certain values
  // Think about where you would configure these values. Should they be part of the data
  // or the options to the bar chart function.

  // The title of the bar chart should be able to be set and shown dynamically

  // The title of the bar chart font size and colour should also be customizable

  // split this main functions into small functions

  /*
    Multiple Value (Stacked) bar charts
    Allow the user to pass multiple values for each bar.

    Think about how you would need to structure this data compared to a single bar chart.
    This should also support all the features of the single bar chart, including

    Customizable bar colours, per value
    Customizable label colours
  */

  // check whether an option was not given and set to the default values if necessary
  for (let option of chartOptions) {
    if (options[option] === undefined) {
      options[option] = defaultOptions[option];
    }
  }

  // set a limit to barSpacing according to the chart width and the number of elements (minimum acceptable width for each bar is 0.1px)
  if ((options.barSpacing * (data.length + 1)) > (options.width + data.length * 0.1)) {
    options.barSpacing = (options.width - data.length * 0.1) / (data.length + 1)
  }


  $(element).css({
    "width": `${options.width}`,
    "height": `${options.height}`
  })

  // make barWidth dynamic according to the chart width, the empty spaces and the number of values passed)
  const barWidth = (options.width - ((data.length + 1) * options.barSpacing)) / data.length; // bar width depends on the total amount of values passed.

  const destination = document.querySelector(element);
  let counter = 0;
  for (let value of data) {
    if (counter === 0) {
      $(element).append("<div class=\"bar-spaces\"></div>");
    }


    $(element).append(
      `<div id="bars${counter}" class="bars">
        <span class="bar-values">${value}</span>
      </div>`);


    $(element).append("<div class=\"bar-spaces\"></div>");


    $(`#bars${counter}`).css({
      "height": `${(value / Math.max(...data)) * 100}%` // bar height should be dependent on the values of the data.
    });
    counter++;
  };
  $(".bars").css({
    "background-color": `${options.barColour}`,
    "width": `${barWidth}`
  });

  $(".bar-values").css({
    "display": "inline-grid",
    "align-items": `${options.valuesPosition}`
  })
  $(".bar-spaces").css({
    "width": `${options.barSpacing}`
  })

};
