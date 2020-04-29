var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 320, 320),
			rad = 33,
			defaultText = 'Skills',
			speed = 250;
		
		r.circle(160, 160, 45).attr({ stroke: 'none', fill: '#193340' });
		
		var title = r.text(160, 160, defaultText).attr({
			font: '12px Arial',
			fill: '#fff'
		}).toFront();
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 160 + rad * Math.cos(b),
				sy = 160 - rad * Math.sin(b),
				x = 160 + rad * Math.cos(a),
				y = 160 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();
			
			rad += 20;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 25 });
			
			z.mouseover(function(){
                this.animate({ 'stroke-width': 30, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 25, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});	
            });
		});
		
	}
}

$(function(){ o.init(); 

	function random_numbers() {
		for (var a = [],i = 0; i < 300; ++i) a[i] = i;
	
		var tmp, current, top = a.length;
	
		if(top) while(--top) {
		  current = Math.floor(Math.random() * (top + 1));
		  tmp = a[current];
		  a[current] = a[top];
		  a[top] = tmp;
		}
		return a;
	  }
	  
	  Highcharts.setOptions({
		colors: ['#f47961', '#60be7b', '#4b5d69', '#9fdbea']
	  });
	
	  $('#areaChart').highcharts({
		chart: {
		  type: 'areaspline',
		  zoomType: 'x'
		},
		title: { text: null },
		legend: { enabled: false },
	
		xAxis: {
		  type: 'datetime',
		  categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		  ],
		  min: 0.5,
		  max: 11,
		  plotLines: [{
			color: 'red',
			dashStyle: 'solid',
			value: '3',
			width: '1'
		  }]
		},
	
		yAxis: {
		  title: {
			text: null
		  }
		},
	
		tooltip: {
		  shared: true
		},
	
		credits: {
		  enabled: false
		},
	
		plotOptions: {
		  areaspline: {
			fillOpacity: 0.8
		  },
		  series: {
			marker: { enabled: false },
			lineWidth: 0
		  }
		},
	
		series: [{
		  name: 'Failing',
		  data: random_numbers()
		}, {
		  name: 'Unknown',
		  data: random_numbers()
		}, {
		  name: 'Passing',
		  data: random_numbers()
		}]
	  });

});
