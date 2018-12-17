function share(data){
	 var ajax_data={};
		ajax_data['url']=window.location.href;
		$.ajax({
			url:'php/jssdk.php',
			type: 'POST',
			dataType: 'json',
			data:ajax_data,
			timeout:30000,
			success:function(res){
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
		shareData['desc']=data.desct;
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