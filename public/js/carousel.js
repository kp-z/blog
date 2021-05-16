function $(id) {
    return document.getElementById(id);
}

//浏览器窗口高度
var windowHeight = 900;
var currentN = 1;
var currentTop = 0;
var scrollDirection = 1;
var clock;

window.onresize = function() {
    windowHeight = document.documentElement.clientHeight;
}

window.onload = function() {

    //获取浏览器窗口高度
    windowHeight = document.documentElement.clientHeight;


    //主显DIV滚动事件处理
    $("banner").onscroll = function() {

        //获取当前滚动的顶线位置
        var tempTop = $("banner").scrollTop;

        //计算当前在第几个主画面
        n = Math.round(tempTop / windowHeight) + 1;

        radio(n);

        //判断滚动方向
        if (tempTop > currentTop) {
            scrollDirection = 1;
        } else if (tempTop < currentTop) {
            scrollDirection = -1;
        }

        //滑动动画			
        clearInterval(clock);
        clock = setInterval(animation, 1);

        //每次滚动完毕将位置存入变量以供比较判断滚动方向
        currentTop = $("banner").scrollTop;

        //$("informationdiv").innerHTML="方向"+scrollDirection+" "+n+"th screen "+"scroll top of maindiv"+currentTop+" window height:"+windowHeight;		

    }
}

//选中第n个radio
function radio(n) {
    $("banner-btn-" + n).checked = "true";
}

//点选RADIO后直接跳转至第n屏
function showScreen(n) {
    radio(n);
    var targetTop = (n - 1) * windowHeight;
    $("banner").scrollTop = targetTop;
}

//分屏滑动动画效果
function animation() {

    if (scrollDirection == 1) {
        //上行
        if ($("banner").scrollTop % windowHeight != 0) {
            $("banner").scrollTop += 1;
        } else {
            clearInterval(clock);
        }
    }

    if (scrollDirection == -1) {
        //下行			
        if ($("banner").scrollTop % windowHeight != 0) {
            $("banner").scrollTop -= 1;
        } else {
            clearInterval(clock);
        }
    }


}