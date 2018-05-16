/**
 * Theme: Minton Admin Template
 * Author: Coderthemes
 * Component: Sparkline Chart
 *
 */
$( document ).ready(function() {

    var DrawSparkline = function() {
            $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
                type: 'bar',
                height: '20',
                barWidth: '10',
                barSpacing: '3',
                barColor: '#FF5733'
            });
        };

    DrawSparkline();

    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });
});
