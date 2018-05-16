/**
 * Theme: Minton Admin Template
 * Author: Coderthemes
 * Component: Dashboard
 *
 */
$( document ).ready(function() {

    var DrawSparkline = function() {
        $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            width: '100%',
            height: '20',
            barWidth: '7',
            barSpacing: '3',
            barColor: '#3bafda'
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
