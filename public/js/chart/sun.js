
var chartDom = document.getElementById('sun');
var myChart = echarts.init(chartDom);
var option;
var data = [{ 
        name: ' 智能系统',
        value: 8,
        children: [{
            name: 'Robotic',
            value: 3,
            visualMap: false,
            itemStyle:{
                color: '#b5ea7b'
            },
            children: [{
                name: 'SLAM',
                value: 2,
                visualMap: false,
                itemStyle:{
                    color: '#c6ef9a'
                },
            }]
        }, {
            name: ' 机器学习',
            value: 3,
            visualMap: false,
            itemStyle:{
                color: '#b5ea7b'
            },
            children: [{
                name: '强化学习',
                value: 1,
                visualMap: false,
                itemStyle:{
                    color: '#c6ef9a'
                },
            }]
        }, {
            name: '物联网',
            value: 2,
            visualMap: false,
            itemStyle:{
                color: '#b5ea7b'
            },
        }]
    }, {
        name: '程序语言',
        value: 9,
        children: [{
            name: 'Python',
            value: 3,
            visualMap: false,
            itemStyle:{
                color: '#f8e07f'
            },
            children:[
                {
                    name: 'numpy | scipy | matploit | seaborn',
                    value: 1.5,
                    visualMap: false,
                    itemStyle:{
                        color: '#f4e1a7'
                    },
                },
                {
                    name: 'pytorch',
                    value: 1.5,
                    visualMap: false,
                    itemStyle:{
                        color: '#f4e1a7'
                    },
                },
            ]
        }, {
            name: 'C++',
            value: 2,
            visualMap: false,
            itemStyle:{
                color: '#f8e07f'
            },
        },{
            name: 'Javascript | CSS | H5',
            value: 3,
            visualMap: false,
            itemStyle:{
                color: '#f8e07f'
            },
            children:[
                {
                    name: 'vue | 微信小程序 | stylus | pug',
                    value: 2,
                    visualMap: false,
                    itemStyle:{
                        color: '#f4e1a7'
                    },
                },
                {
                    name: 'echarts|three.js',
                    value: .5,
                    visualMap: false,
                    itemStyle:{
                        color: '#f4e1a7'
                    },
                },
            ]
        }]
}, {
    name: '数媒技术',
    children: [{
        name: '摄影 ',
        visualMap: false,
        value: .8,
        itemStyle:{
            color: '#ffb7c2'
        }
     },{
            name: 'UI/UX',
            value: 0.5,
            visualMap: false,
            itemStyle:{
                color: '#ffb7c2'
            },
            children: [{
                name: 'Figma | PS ',
                value: 0.5,
                visualMap: false,
                itemStyle:{
                    color: '#ffb7c2'
                },
            }]
        },{
            name: '3d建模',
            value: 0.8,
            visualMap: false,
            itemStyle:{
                color: '#ffb7c2'
            },
            children: [{
                name: 'Blender',
                value: 0.8,
                visualMap: false,
                itemStyle:{
                    color: '#ffb7c2'
                },
            }]
    },]
    
}];




option = {
    visualMap: {
        type: 'piecewise',
        min: 0,
        max: 25,
        left: 'right',
        top: 20,
        textGap: -60,
        itemWidth: 80,
        itemHeight: 20,
        itemGap: 8,
        pieces: [
            {value: 9, label: '程序语言', color: '#f4d142'}, 
            {value: 8, label: '智能系统', color: '#97e245'}, 
            {value: 2.1, label: '数媒技术', color: '#ff8fa0'}, 
        ],
        textStyle:{
            color: '#fff'
        }
    },
    tooltip:{
        formatter: function (params) {
            return params.marker + params.name;
        },
    },
    series: {
        label: {
            show: false
        },

        type: 'sunburst',
        data: data,
        radius: [40, '90%'],
        center: ['35%', '50%'],
        itemStyle: {
            borderRadius: 4,
            borderWidth: 0,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowBlur: 14,
        },
        
    }
};
option && myChart.setOption(option);