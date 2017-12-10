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
        case "菜鸟学院":
            url = "http://www.runoob.com/?s=";
            break;

    }
    var keyword = document.getElementById("keyword").value;
    window.open(url + keyword);
}