
var chartDom = document.getElementById('sun');
var myChart = echarts.init(chartDom);
var option;
var data = [{
    name: '工程',
    children: [{
        name: '技术',
        value: 15,
        children: [{
            name: 'pug',
            value: 2
        }, {
            name: '基础',
            value: 5,
            children: [{
                name: ' JavaScript',
                value: 1
            }]
        }, {
            name: 'stylus',
            value: 4
        }, {
            name: 'echarts',
            value: 4
        }]
    }, {
        name: 'Father',
        value: 10,
        children: [{
            name: 'Me',
            value: 5
        }, {
            name: 'Brother Peter',
            value: 1
        }]
    }]
}, {
    name: 'Others',
    children: [{
        name: 'Design',
        children: [{
            name: 'Skills',
            value: 1,
            children:[
                {
                    name: 'Figma',
                    value: 1
                },{
                    name: 'Blender',
                    value: 2
                },{
                    name: 'Ps +',
                    value: 2
                },{
                    name: 'Adobe',
                    value: 2
                }
            ]
        }, {
            name: 'Blender',
            value: 2
        }]
    }]
}];



option = {
	legend: {
	    show: true,
		data: data,
	    x: 'right',
	    y: 'bottom',
	    icon: "roundRect",
	    itemWidth: 10,
	    itemHeight: 10,
	    bottom: 10,
		padding: 10,
	    textStyle: {
	        color: '#666666',
	        fontSize: 0
	    },
	},
	grid:{
		left: 0
	},
    toolbox:{
        show: true
    },
    tooltip:{
        formatter: function (params) {
            return params.marker + params.name;
        }
    },
    series: {
        label: {
            show: false
        },

        type: 'sunburst',
        data: data,
        radius: [40, '90%'],
        itemStyle: {
            borderRadius: 4,
            borderWidth: 0,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowBlur: 14,
        },
        
    }
};
option && myChart.setOption(option);