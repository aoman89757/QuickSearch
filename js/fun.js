var SiteDic =
    {
        "Google": "https://www.google.com.hk/search?q=",
        "Bing": "https://www.bing.com/search?q=",
        "Baidu": "https://www.baidu.com/s?ie=utf-8&wd=",
        "StackOverflow": "https://stackoverflow.com/search?q=",
        "CSDN": "http://so.csdn.net/so/search/s.do?t=blog&q=",
        "菜鸟学院": "http://www.runoob.com/?s=",
        "京东": "https://search.jd.com/Search?enc=utf-8&keyword=",
        "淘宝": "https://s.taobao.com/search?q=",
        "亚马逊":"https://www.amazon.cn/s/ref=nb_sb_noss_2?__mk_zh_CN=亚马逊网站&url=search-alias%3Daps&field-keywords=",
        "当当":"http://search.dangdang.com/?key=",
        "知乎":"https://www.zhihu.com/search?type=content&q=",
        "腾讯视频":"https://v.qq.com/x/search/?q=",
        "爱奇艺":"http://so.iqiyi.com/so/q_",
        "Youtube":"https://www.youtube.com/results?search_query=",
        "bilibili":"https://search.bilibili.com/all?keyword=",
        "豆瓣图书":"https://book.douban.com/subject_search?search_text=",
        "Github":"https://github.com/search?utf8=✓&q=",
        "搜狗":"https://www.sogou.com/web?ie=utf8&sourceid=qc&bq=1&query=",
        "豆瓣电影":"https://movie.douban.com/subject_search?search_text=",
        "高德地图":"http://ditu.amap.com/search?query=",
        "蚂蜂窝":"http://www.mafengwo.cn/search/s.php?q=",
        "多看阅读":"http://www.duokan.com/search/"

    }

    function Search(sitename) {
        var url = SiteDic[sitename];
        var keyword = encodeURIComponent(document.getElementById("keyword").value);
        window.open(url + keyword);

    }
    function StartSearch(obj) {
        Search(obj.id);
    }

    function defaultSearch(e) {
        var keynum = window.event ? e.keyCode : e.which;
        if(keynum == 13){
            Search("Baidu");
        }
    }