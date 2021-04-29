---
title: 豆瓣
date: 2021-04-10 21:56:50
top_img: false
comments: false
---

<style>
    .douban{
        overflow:hidden;
        style="background:transparent"
    }
    .douban iframe{
        width:100%; 
        height:1500px; 
        border: none;
        border-radius: 10px;
    }
</style>


<div class="douban" >
    <iframe id="iframe"
        allowtransparency="true"
        src="https://m.douban.com/people/43103367/subject_profile" 
        sandbox = "allow-scripts allow-same-origin n">
    </iframe>
</div>

<script type="text/javascript">
    var x=document.getElementById("iframe");
    var y=(x.contentWindow || x.contentDocument);
    if (y.document)y=y.document;
        y.body.style.backgroundColor="#0000ff";
</script>