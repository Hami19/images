      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var options = {
          width: 800, height: 220,
          yellowColor : '0000FF',
          yellowFrom:0, yellowTo: 25,
          redFrom: 65, redTo: 100,
          greenFrom: 25, greenTo: 65,
          minorTicks: 5
        };

        window.chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Temperature', window.temperature],
            ['Humidity', window.humidity]
          ]), options);

          chart.draw(google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Temperature', window.temperature || 0],
            ['Humidity', window.humidity || 0]
          ]), options);
      }