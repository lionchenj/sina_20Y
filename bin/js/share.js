function share(data){
	 var ajax_data={};
	 // ajax_data['url']=window.location.href;
	 ajax_data['url']='https://dev170.weibanker.cn/chenjj/www/sina/index.html';
		$.ajax({
			url:'php/jssdk.php',
			type: 'POST',
			dataType: 'json',
			data:ajax_data,
			timeout:30000,
			success:function(res){
				console.log(res)
			wx.config({
				appId:res.appId,
				timestamp:res.timestamp,
				nonceStr:res.nonceStr,
				signature:res.signature,
				jsApiList: [
				// 所有要调用的 API 都要加到这个列表中
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'hideMenuItems',
				'showMenuItems',
				'hideAllNonBaseMenuItem',
				'showAllNonBaseMenuItem',
				'translateVoice',
				'startRecord',
				'stopRecord',
				'onRecordEnd',
				'playVoice',
				'pauseVoice',
				'stopVoice',
				'uploadVoice',
				'downloadVoice',
				'chooseImage',
				'previewImage',
				'uploadImage',
				'downloadImage',
				'getNetworkType',
				'openLocation',
				'getLocation',
				'hideOptionMenu',
				'showOptionMenu',
				'closeWindow',
				'scanQRCode',
				'chooseWXPay',
				'openProductSpecificView',
				'addCard',
				'chooseCard',
				'openCard'
				]
			});
		wx.ready(function() {
			
		var shareData={};
		shareData['title']=data.title;
		var score = window.localStorage.getItem('score')
		alert(score)
		shareData['desc']='恭喜！($体育小百科)，您在新浪体育20周年答对'+score+'道题。';
		shareData['imgUrl']=data.imgUrl;
		shareData['success']=function(res){
		  shareSuccess(res);
		};
		shareData['cancel']=function(res){
		 shareFail(res);
		};
		
		wx.onMenuShareAppMessage(shareData);
		wx.onMenuShareTimeline(shareData);
		wx.onMenuShareQQ(shareData);
		wx.onMenuShareWeibo(shareData);
		wx.onMenuShareQZone(shareData);
		})	
			},
			error:function(){

			}
		})
	

}