var chart = AmCharts.makeChart("SmoothChart", {
	"type": "serial",
	"categoryField": "date",
	"dataDateFormat": "YYYY",
	"marginTop": 20,
	"plotAreaBorderColor": "#888888",
	"colors": [
		"#FF6600",
		"#FCD202",
		"#00d856",
		"#0D8ECF",
		"#2A0CD0",
		"#CD0D74",
		"#CC0000",
		"#00CC00",
		"#0000CC",
		"#DDDDDD",
		"#999999",
		"#333333",
		"#990000"
	],
	"borderColor": "#B9B9B9",
	"color": "#d9d9d9",
	"fontFamily": "Montserrat",
	"fontSize": 10,
	"handDrawScatter": 0,
	"handDrawThickness": 0,
	"categoryAxis": {
		"autoRotateCount": 0,
		"gridPosition": "start",
		"labelColorField": "",
		"minPeriod": "YYYY",
		"parseDates": false,
		"position": "left",
		"startOnAxis": true,
		"axisAlpha": 0.5,
		"axisColor": "#4B4F5E",
		"fillColor": "#4B4F5E",
		"firstDayOfWeek": 0,
		"gridAlpha": 0,
		"gridColor": "#4B4F5E",
		"labelOffset": 2,
		"minHorizontalGap": 68,
		"minorGridAlpha": 0,
		"minorGridEnabled": false,
		"minVerticalGap": 40,
		"titleFontSize": 0
	},
	"chartCursor": {
		"enabled": true,
		"categoryBalloonDateFormat": "YYYY",
		"cursorAlpha": 0,
		"cursorColor": "#191919",
		"fullWidth": true,
		"oneBalloonOnly": true,
		"valueLineAlpha": 0.47,
		"valueLineBalloonEnabled": true,
		"valueLineEnabled": true,
		"valueZoomable": true
	},
	"chartScrollbar": {
		"enabled": false,
		"autoGridCount": true,
		"backgroundAlpha": 0,
		"color": "#888888",
		"graph": "g1",
		"graphFillAlpha": 0,
		"graphLineAlpha": 0.2,
		"graphLineColor": "#c2c2c2",
		"graphType": "smoothedLine",
		"gridAlpha": 0,
		"scrollbarHeight": 50,
		"selectedBackgroundAlpha": 0.1,
		"selectedBackgroundColor": "#888888",
		"selectedGraphFillAlpha": 0,
		"selectedGraphLineAlpha": 1
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonColor": "#191919",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "",
			"bulletAlpha": 0,
			"bulletBorderAlpha": 1,
			"bulletBorderColor": "#1C95F3",
			"bulletSize": 6,
			"color": "#1c95f3",
			"fillAlphas": ".9",
			"fillColorsField": "lineColor",
			"fixedColumnWidth": 0,
			"gapPeriod": 0,
			"id": "AmGraph-1",
			"legendValueText": "[[value]]",
			"lineAlpha": 0,
			"lineColor": "#f47961",
			"lineColorField": "lineColor",
			"title": "Documents",
			"type": "smoothedLine",
			"valueField": "column-1"
		},
		{
			"balloonColor": "#191919",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "",
			"fillAlphas": ".9",
			"fillColorsField": "lineColor",
			"gapPeriod": 0,
			"id": "AmGraph-2",
			"legendValueText": "[[value]]",
			"lineAlpha": 0,
			"lineColor": "#60be7b",
			"lineColorField": "lineColor",
			"title": "Accounts",
			"type": "smoothedLine",
			"valueField": "column-2"
		},
		{
			"balloonColor": "#191919",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "",
			"fillAlphas": ".5",
			"fillColorsField": "lineColor",
			"gapPeriod": 0,
			"id": "AmGraph-3",
			"legendValueText": "[[value]]",
			"lineAlpha": 0,
			"lineColor": "#4b5d69",
			"lineColorField": "lineColor",
			"title": "Synchronization",
			"type": "smoothedLine",
			"valueAxis": "ValueAxis-1",
			"valueField": "column-3"
		}
	],
	"guides": [],
	"valueAxes": [],
	"allLabels": [],
	"balloon": {
		"borderColor": "#141414",
		"borderThickness": 1,
		"color": "#FFFFFF",
		"fillAlpha": 1,
		"fillColor": "#141414"
	},
	"legend": {
		"enabled": false,
		"useGraphSettings": true
	},
	"titles": [],
	"dataProvider": [
		{
			"date": "2001",
			"column-1": 8,
			"column-2": 5,
			"column-3": 3
		},
		{
			"date": "2002",
			"column-1": 6,
			"column-2": 7,
			"column-3": 3
		},
		{
			"date": "2003",
			"column-1": 2,
			"column-2": 3,
			"column-3": 6
		},
		{
			"date": "2004",
			"column-1": 4,
			"column-2": 3,
			"column-3": 1
		},
		{
			"date": "2005",
			"column-1": 2,
			"column-2": 1,
			"column-3": 3
		},
		{
			"date": "2006",
			"column-1": 3,
			"column-2": 2,
			"column-3": 1
		},
		{
			"date": "2007",
			"column-1": 4,
			"column-2": 8,
			"column-3": 6
		}
	]
});


chart.addListener("rendered", zoomChart);
if(chart.zoomChart){
	chart.zoomChart();
}

function zoomChart(){
    chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.1), Math.round(chart.dataProvider.length * 0.8));
}