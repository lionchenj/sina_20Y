chrome.runtime.onInstalled.addListener(function(){
      start();
})

function receivedListener(details){
    var flag = false,
        rule = {
            "name": "Access-Control-Allow-Origin",
            "value": "*"
        };
    for (var i = 0; i < details.responseHeaders.length; ++i) {
        if (details.responseHeaders[i].name.toLowerCase() === rule.name.toLowerCase()) {
            flag = true;
            details.responseHeaders[i].value = rule.value;
            break;
        }
    }
    if(!flag) {
        details.responseHeaders.push(rule);
    }
    console.log(details.responseHeaders)
    return {responseHeaders: details.responseHeaders};

}

function start() {

    chrome.storage.sync.get('domains', function(result){
        var domains = result['domains'];
        var new_domains = []
        for(var i in domains ){
            new_domains.push("*://" + domains[i] + "/*")
        }
        console.log(new_domains)

        chrome.webRequest.onHeadersReceived.addListener(receivedListener,{
                urls: new_domains
            },
            ["blocking","responseHeaders"]
        );
    });
}

start();