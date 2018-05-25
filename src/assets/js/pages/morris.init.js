
/**
 * Theme: Minton Admin Template
 * Author: Coderthemes
 * Morris Chart
 */

!function($) {
  "use strict";

  var MorrisCharts = function() {};

  //creates line chart
  MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
    Morris.Donut({
      element: element,
      data: data,
      resize: true, //defaulted to true
      colors: colors,
      labelColor: '#fff'
  });
},
  MorrisCharts.prototype.init = function() {
    //creating donut chart
    var $donutData = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];
    this.createDonutChart('morris-donut-example', $donutData, ["#3bafda", "#ededed", "#80deea"]);
  },

  //init
  $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);
