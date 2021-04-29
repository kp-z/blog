$("#recent-posts").scroll(function () {
    let scrollTop = document.getElementById("Box").scrollTop;
    let clientHeight = document.getElementById("Box").clientHeight;
    let scrollHeight = document.getElementById("Box").scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        if(bpage != bpages){
            load(bpage += 1)//加载数据的方法 与上面页面触底加载方式一致
        }
    }
})