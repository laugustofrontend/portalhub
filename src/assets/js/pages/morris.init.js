
/**
 * Theme: Minton Admin Template
 * Author: Coderthemes
 * Morris Chart
 */

!function($) {
  "use strict";

  var MorrisCharts = function() {};

  //creates Bar chart
  MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
    Morris.Bar({
      element: element,
      data: data,
      xkey: xkey,
      ykeys: ykeys,
      labels: labels,
      hideHover: 'auto',
      resize: true, //defaulted to true
      gridLineColor: '#3d4853',
      barColors: lineColors
    });
  },

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
    const $donutData = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];
    this.createDonutChart('morris-donut-example', $donutData, ["#3bafda", "#ededed", "#80deea"]);

    //creating bar chart
    const $barData  = [
      { y: 'Ações', a: 20, b: 10},
      { y: 'Opções', a: 15,  b: 25},
      { y: 'Renda Fixa', a: 5,  b: 15},
      { y: 'Funda de Investimento', a: 100,  b: 25},
      { y: 'Mercado Futuro(BMF)', a: 10,  b: 2},
      { y: 'Tesouro Direto', a: 67,  b: 25},
      { y: 'COE', a: 5,  b: 10},
      { y: 'Clube de Investimento', a: 12,  b: 0}
    ];
    this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['','',''], ["#017bc4", "#278070"]);
  },

  //init
  $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing
function($) {
  "use strict";
  $.MorrisCharts.init();
}(window.jQuery);
