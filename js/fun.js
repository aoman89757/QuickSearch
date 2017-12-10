function StartSearch(obj) {
    //var keyword = $("keyword").innerText;
    var url = "";
    switch (obj.id){
        case "Google":
            url = "https://www.google.com.hk/search?q=";
            break;
        case "Bing":
            url = "https://www.bing.com/search?q="
            break;
        case "Baidu":
            url = "https://www.baidu.com/s?ie=utf-8&wd=";
            break;
        case "Stack Overlow":
            url = "https://stackoverflow.com/search?q=";
            break;
        case "CSDN":
            url = "http://so.csdn.net/so/search/s.do?t=blog&q=";
            break;
        case "京东":
            url = "https://search.jd.com/Search?enc=utf-8&keyword=";
            break;
        case "淘宝":
            url = "https://s.taobao.com/search?q=";
            break;
        case "亚马逊":
            url = "https://www.amazon.cn/s/ref=nb_sb_noss_2?__mk_zh_CN=亚马逊网站&url=search-alias%3Daps&field-keywords=";
            break;
        case "当当":
            url = "http://search.dangdang.com/?key=";
            break;
        case "知乎":
            url = "https://www.zhihu.com/search?type=content&q=";
            break;
        case "腾讯视频":
            url = "https://v.qq.com/x/search/?q=";
            break;
        case "爱奇艺":
            url = "http://so.iqiyi.com/so/q_";
            break;
        case "Youtube":
            url = "https://www.youtube.com/results?search_query=";
            break;
        case "bilibili":
            url = "https://search.bilibili.com/all?keyword=";
            break;

    }
    var keyword = document.getElementById("keyword").value;
    window.open(url + keyword);
}

function defaultSearch(e) {
    var keynum = window.event ? e.keyCode : e.which;
    if(keynum == 13){
        var url = "https://www.baidu.com/s?ie=utf-8&wd="
        var keyword = document.getElementById("keyword").value;
        window.open(url + keyword);
    }
}