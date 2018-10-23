//api 5bce9a03db03bc4700182aec
//GET https://opengraph.io/api/1.1/site/<URL encoded site URL>?app_id=xxxxxxx
let g_api = '5bceacbbdb03bc4700182af5';

function httpGet(Url_) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", Url_, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function getGraph(sitePath) {
    let full_url = 'https://opengraph.io/api/1.1/site/' + encodeURIComponent(sitePath) + '?app_id=' + g_api;


    return JSON.parse(httpGet(full_url)).hybridGraph;

}