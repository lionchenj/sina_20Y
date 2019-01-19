var share_data = {};

(function () {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
        // var myAudio = document.getElementById('bg-music');
        document.addEventListener("WeixinJSBridgeReady", function () {
            // myAudio.play();
            var context = new window.webkitAudioContext();  
            var source = null;  
            var audioBuffer = null; 
            function stopSound() {  
                if (source) {  
                    source.noteOff(0); //立即停止  
                }  
            }  
            function playSound() {  
                source = context.createBufferSource();  
                source.buffer = audioBuffer;  
                source.loop = true;  
                source.connect(context.destination);  
                source.noteOn(0); //立即播放  
            }  
            function initSound(arrayBuffer) {  
                context.decodeAudioData(arrayBuffer, function(buffer) { //解码成功时的回调函数  
                    audioBuffer = buffer;  
                    playSound();  
                }, function(e) { //解码出错时的回调函数  
                    console.log('Error decoding file', e);  
                });  
            }  
            function loadAudioFile(url) {  
                var xhr = new XMLHttpRequest(); //通过XHR下载音频文件  
                xhr.open('GET', url, true);  
                xhr.responseType = 'arraybuffer';  
                xhr.onload = function(e) { //下载完成  
                    initSound(this.response);  
                };  
                xhr.send();  
            }  
            loadAudioFile('bgm.mp3');
        }, false);

    }
    var url = location.search; //获取url中"?"符后的字串
    var score = 0;
    if (url) {
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        score = theRequest.score;
    }
    if (score >= 8) {
        $('.bg').attr('src', './images/score_4.jpg');
    } else if (score >= 5) {
        $('.bg').attr('src', './images/score_3.jpg');
    } else if (score >= 2) {
        $('.bg').attr('src', './images/score_2.jpg');
    } else {
        $('.bg').attr('src', './images/score_1.jpg');
    }
    $('.score').attr('src', './images/num_' + score + '.png');
    $('.pageImg').show();
    share_data['title'] = "你在新浪体育20周年测试结果";
    share_data['desct'] = "恭喜！您在新浪体育20周年答对" + score + "道题。";
    share_data['imgUrl'] = "http://www.datazan.cn/sinasports20/view/sinasports20.jpg";
})()
//分享
$(".share").on('click', function () {
    //判断浏览器
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    share(share_data);
    $(".dialog").show();    
    if (isWeiXin()) {
        console.log(" 是来自微信内置浏览器");
    } else {
        $('.content').html('长按保存图片分享')
        $('.content').css('text-align','center')
    }
    $('.confirm').on('click', function () {
        $('.dialog').hide();
    })
})
//保存
//再一次
$('.again').on('click', function () {
    window.location.href = 'https://dev170.weibanker.cn/chenjj/www/sina/index.html'
})