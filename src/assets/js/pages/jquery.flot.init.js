/**
 * Theme: Minton Admin Template
 * Author: Coderthemes
 * Module/App: Flot-Chart
 */

! function($) {
  "use strict";

  var FlotChart = function() {
      this.$body = $("body")
      this.$realData = []
  };

  FlotChart.prototype.createRealTimeGraph = function(selector, data, colors) {
    var plot = $.plot(selector, [data], {
        colors : colors,
        series : {
          grow : {
              active : false
          }, //disable auto grow
          shadowSize : 0, // drawing is faster without shadows
          lines : {
              show : true,
              fill : true,
              lineWidth : 2,
              steps : false
          }
        },
        grid : {
          show : true,
          aboveData : false,
          color : '#36404a',
          labelMargin : 15,
          axisMargin : 0,
          borderWidth : 0,
          borderColor : null,
          minBorderMargin : 5,
          clickable : true,
          hoverable : true,
          autoHighlight : false,
          mouseActiveRadius : 20
        },
        tooltip : true, //activate tooltip
        tooltipOpts : {
          content : "Value is : %y.0" + "%",
          shifts : {
              x : -30,
              y : -50
          }
        },
        yaxis : {
          min : 0,
          max : 100,
          tickColor : '#transparent',
          tickLength: 0
        },
        xaxis : {
            show : false
        }
    });

    return plot;
  },

  FlotChart.prototype.init = function() {
    //real time data representation
    var plot = this.createRealTimeGraph('#flotRealTime', this.randomData(), ['#3bafda']);
    plot.draw();
    var $this = this;
    function updatePlot() {
      plot.setData([$this.randomData()]);
      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      setTimeout(updatePlot, $('html').hasClass('mobile-device') ? 1000 : 1000);
    }

    updatePlot();
  },

  FlotChart.prototype.randomData = function() {
    var totalPoints = 300;
    if (this.$realData.length > 0)
      this.$realData = this.$realData.slice(1);

    // Do a random walk
    while (this.$realData.length < totalPoints) {
      var prev = this.$realData.length > 0 ? this.$realData[this.$realData.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      this.$realData.push(y);
  }

  // Zip the generated y values with the x values
  var res = [];
  for (var i = 0; i < this.$realData.length; ++i) {
    res.push([i, this.$realData[i]])
  }

  return res;
}

  //init flotchart
  $.FlotChart = new FlotChart, $.FlotChart.Constructor = FlotChart

}(window.jQuery),

//initializing flotchart
function($) {
    "use strict";
    $.FlotChart.init()
}(window.jQuery);

$(document).ready(function() {
  $(function() {
    //some data
    var d1 = [];
    for (var i = 0; i <= 10; i += 1) {
      d1.push([i, parseInt(Math.random() * 30)]);
    }

    var d2 = [];
    for (var i = 0; i <= 10; i += 1) {
      d2.push([i, parseInt(Math.random() * 30)]);
    }

    var d3 = [];
    for (var i = 0; i <= 10; i += 1) {
      d3.push([i, parseInt(Math.random() * 30)]);
    }

    var ds = new Array();

    ds.push({
    label : "Data One",
    data : d1,
    bars : {
        order : 1
    }
    });
    ds.push({
    label : "Data Two",
    data : d2,
    bars : {
        order : 2
    }
    });
    ds.push({
    label : "Data Three",
    data : d3,
    bars : {
        order : 3
    }
    });

    var stack = 0,
      bars = false,
      lines = false,
      steps = false;

    var options = {
      bars : {
        show : true,
        barWidth : 0.2,
        fill : 1
      },
      grid : {
        show : true,
        aboveData : false,
        labelMargin : 5,
        axisMargin : 0,
        borderWidth : 0,
        minBorderMargin : 5,
        clickable : true,
        hoverable : true,
        autoHighlight : false,
        mouseActiveRadius : 20,
        borderColor : '#f5f5f5'
      },
      series : {
        stack : stack
      },
      legend : {
        position : "ne",
        margin : [0, -24],
        noColumns : 0,
        labelBoxBorderColor : null,
        labelFormatter : function(label, series) {
          // just add some space to labes
          return '' + label + '&nbsp;&nbsp;';
        },
        width : 30,
        height : 2
      },
      yaxis : {
        tickColor : '#f5f5f5',
        tickLength: 0,
        font : {
          color : '#bdbdbd'
        }
      },
      xaxis : {
        tickColor : '#f5f5f5',
        tickLength: 0,
        font : {
          color : '#bdbdbd'
        }
      },
      colors : ["#3bafda", "#26c6da", "#80deea"],
      tooltip : true, //activate tooltip
      tooltipOpts : {
        content : "%s : %y.0",
        shifts : {
          x : -30,
          y : -50
        }
      }
    };

    $.plot($("#ordered-bars-chart"), ds, options);
  });
});
