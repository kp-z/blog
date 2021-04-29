var chartDom = document.getElementById('gantt');
var myChart = echarts.init(chartDom);
var option;

var data = [];
var dataCount = 10;
var startTime = +new Date();
var nowTime = +new Date();
var categories = ['位置', '经历', '学习'];

var oneYear = 31557600000;
var oneMonth = 2629800000;
var baseTime = 0;
var Time2013 = oneYear*43;
var Time2017 = Time2013 + oneYear*4;
var Time2018 = Time2013 + oneYear*5;
var data1 = [{
            name: '青岛大学',
            value: [
                1,
                Time2013+oneMonth*9,
                Time2017+oneMonth*9,
                oneYear
            ],
            itemStyle: {
                normal: {
                    color: '#ff6b81',

                }
            }
        },{
            name: '波恩大学',
            value: [
                1,
                Time2018+oneMonth*4,
                Time2018+oneYear*3,
                oneYear*3
            ],
            itemStyle: {
                normal: {
                    color: '#ff6b81',
  
                }
            }
        },{
            name: '青大创新实验室',
            value: [
                0,
                Time2013+oneYear+oneMonth*9,
                Time2013+oneYear*2+oneMonth*9,
                oneYear*2
            ],
            itemStyle: {
                normal: {
                    color: '#1e90ff',

                }
            }
        },{
            name: 'OneZo',
            value: [
                0,
                Time2013+oneYear*7-oneMonth*2,
                Time2013+oneYear*7+oneMonth*4,
                oneYear*3
            ],
            itemStyle: {
                normal: {
                    color: '#1e90ff',

                }
            }
        },{
            name: '华为',
            value: [
                0,
                Time2013+oneYear*7+oneMonth*6,
                nowTime,
                oneYear*3
            ],
            itemStyle: {
                normal: {
                    color: '#1e90ff',

                }
            }
        },{
            name: '青岛',
            value: [
                2,
                Time2013+oneMonth*9,
                Time2013+oneYear*4,
                oneYear*3
            ],
            itemStyle: {
                normal: {
                    color: '#f1c40f',

                }
            }
        },{
            name: '韩国',
            value: [
                2,
                Time2013+oneYear*4,
                Time2013+oneYear*4+oneMonth*3,
                oneYear*3
            ],
            itemStyle: {
                normal: {
                    color: '#f1c40f',
                    
                }
            }
        },{
            name: '波恩',
            value: [
                2,
                Time2018+oneMonth*4,
                nowTime,
                oneYear*3
            ],
            itemStyle: {
                normal: {
                    color: '#f1c40f',

                }
            }
        },];
        

function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.6;

    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height,
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height,
    });

    return rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: {
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height,
            r: 4
        },
        style: api.style()
    };
}


option = {
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
        }
    },
    dataZoom: [{
        type: 'inside',
        filterMode: 'weakFilter',
        showDataShadow: false,
    }, {
        type: 'inside',
        filterMode: 'weakFilter'
    }],
    grid: {
        height: '60%',
        top: 25,
        left:20,
        width:'95%'

    },
    xAxis: {
        type:'time',
        min: Time2013+oneMonth*9,
        max: nowTime,
        axisLabel:{
            fontSize: 8,
            color: 'rgba(0,0,0, .5)'
        }
  
    },
    yAxis: {
        data: categories,
        axisTick :{
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel:{
            rotate: 90,
            fontSize: 8,
            color: 'rgba(0,0,0, .5)'
        }
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            borderRadius : 80,
            opacity: 0.8,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowBlur: 5,
            shadowOffsetX: 4,
            shadowOffsetY: 4,
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data1
    }]
};

option && myChart.setOption(option);
