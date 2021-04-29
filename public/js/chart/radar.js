var chartDom = document.getElementById('radar');
var myChart = echarts.init(chartDom);
var option;


var indicator = [{
        text: 'Ne',
        max: 2000,
    },
    {
        text: 'Ni',
        max: 2000
    },
    {
        text: 'Se',
        max: 2000
    },
    {
        text: 'Si',
        max: 2000
    },
    {
        text: 'Te',
        max: 2000
    },
    {
        text: 'Ti',
        max: 2000
    },
    {
        text: 'Fi',
        max: 2000
    },
    {
        text: 'Fe',
        max: 2000
    }
];
var dataArr = [{
        name: "自我评价",
        value: [160, 700, 1100, 800, 1100, 900, 1400, 1600],
        lineStyle: {
            normal: {
                color: "rgba(2255,255,255,0)"
            }
        },
        areaStyle: {
            normal: { // 单项区域填充样式
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#7bed9f'
                        },
                        {
                            offset: 1,
                            color: '#27ae60'
                        }
                    ],
                    false
                ),
                opacity: 1, // 区域透明度
                // 设置扇形的阴影
                shadowBlur: 12,
                shadowColor: 'rgba(77,214,189,0.8)',
                shadowOffsetX: 12,
                shadowOffsetY: 12
            }
        }
    },
    {
        name: "朋友评价",
        value: [1600, 700, 1100, 800, 1100, 1400, 1400, 600],

        lineStyle: {
            normal: {
                color: "rgba(2255,255,255,0)"
            }

        },

        areaStyle: {
            normal: { // 单项区域填充样式
                color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#eccc68'
                        },
                        {
                            offset: 1,
                            color: '#ff4757'
                        }
                    ],
                    false
                ),
                opacity: 1, // 区域透明度
                // 设置扇形的阴影
                shadowBlur: 12,
                shadowColor: 'rgba(137,201,255,0.50)',
                shadowOffsetX: 6,
                shadowOffsetY: 6
            }
        }
    }
];
option = {
    tooltip:{},
    color: ['#22CF96', '#ff4757'],
    // backgroundColor: "#fff",
    legend: {
        show: true,
        data: ['自我评价', '朋友评价'],
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
    radar: {
        radius: '75%',
        name: {
            color: '#a4b0be',
            fontSize: 10,
            align: 'center',
            // lineHeight: 3
        },
        nameGap: 2,
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false
        },
        axisLine: { //指向外圈文本的分隔线样式
            show: false
        },

        splitLine: {
            lineStyle: {
                color: '#ddd', // 分隔线颜色
                width: .5, // 分隔线线宽
            }
        },
    },
    series: [{
        type: 'radar',
        symbolSize: 0,
        data: dataArr,

    }]
};
option && myChart.setOption(option);