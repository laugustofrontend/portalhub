/**
 Template Name: Minton Dashboard
 Author: CoderThemes
 Email: coderthemes@gmail.com
 File: Chartjs
 */


!function($) {
  "use strict";

  var ChartJs = function() {};

  ChartJs.prototype.respChart = function(selector,type,data, options) {
    //default config
    Chart.defaults.global.defaultFontColor = "rgba(255,255,255,0.5)";
    // get selector by context
    var ctx = selector.get(0).getContext("2d");
    // pointing parent container to make chart js inherit its width
    var container = $(selector).parent();

    // enable resizing matter
    $(window).resize( generateChart );

    // this function produce the responsive Chart JS
    function generateChart(){
      // make chart width fit with its container
      var ww = selector.attr('width', $(container).width() );
      switch(type){
        case 'Line':
          new Chart(ctx, {type: 'line', data: data, options: options});
          break;
        case 'Doughnut':
          new Chart(ctx, {type: 'doughnut', data: data, options: options});
          break;
        case 'Pie':
          new Chart(ctx, {type: 'pie', data: data, options: options});
          break;
        case 'Bar':
          new Chart(ctx, {type: 'bar', data: data, options: options});
          break;
        case 'Radar':
          new Chart(ctx, {type: 'radar', data: data, options: options});
          break;
        case 'PolarArea':
          new Chart(ctx, {data: data, type: 'polarArea', options: options});
          break;
      }
      // Initiate new chart or Redraw

    };
    // run function - render chart at first load
    generateChart();
  },
        //init
        ChartJs.prototype.init = function() {
          //donut chart
          var donutChart = {
              labels: [
                  "Desktop",
                  "Tablets",
                  "Mobiles"
              ],
              datasets: [
                  {
                      data: [300, 50, 100],
                      backgroundColor: [
                          "#3bafda",
                          "#26c6da",
                          "#00b19d"
                      ],
                      hoverBackgroundColor: [
                          "#3bafda",
                          "#26c6da",
                          "#00b19d"
                      ],
                      hoverBorderColor: "#fff"
                  }]
          };
          this.respChart($("#doughnut"),'Doughnut',donutChart);
        },
        $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);
