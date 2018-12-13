!function(a){"use strict";function b(a,b,c){var d=Math.max(Math.ceil(Math.sqrt(b*b+c*c)),c+36);v=b,w=c,z.setDimensions({width:d,height:c+36}),fabric.Image.fromURL(a,function(a){B=a,A=new fabric.Group([a]),A.set({left:(d-b)/2,top:18,selectable:!1,borderColor:"#666666",borderOpacityWhenMoving:1,cornerColor:"#666666",cornerSize:8,transparentCorners:!1,rotatingPointOffset:10}),A.setControlsVisibility({bl:!1,br:!1,mb:!1,ml:!1,mr:!1,mt:!1,tl:!1,tr:!1}),A.lockMovementX=!0,A.lockMovementY=!0,A.lockScalingX=!0,A.lockScalingY=!0,A.on("rotating",i),z.add(A)})}function c(a){a.stopPropagation(),d()}function d(){y||$(".ocrt-imgedit").remove(),z&&(f(),g(),z.clear(),C=0,B=null,A&&A.remove&&A.remove(),A=null,m(D),D.length=0,F.length=0,G=-1,H=0,I=-1,y.hide())}function e(b){var c=null;b.stopPropagation(),-1!==G&&(z.discardActiveObject(),c=0!==A.angle?z.toDataURL({format:"jpeg"}):z.toDataURL({format:"jpeg",left:(z.width-v)/2,top:18,width:v,height:w})),d(),c&&"function"==typeof a.finEditImg&&a.finEditImg(c)}function f(){A&&(A.set({selectable:!1}),z.discardActiveObject()),$("#ocrt_img_rotate").removeClass("active")}function g(){z.isDrawingMode&&(z.isDrawingMode=!1),$("#ocrt_img_erase").removeClass("active")}function h(a){a.stopPropagation(),g(),A.set({selectable:!0}),z.setActiveObject(A),$("#ocrt_img_rotate").addClass("active")}function i(){var a,b,c=0,d=D.length;for(b=A.angle-C,C=A.angle;d>c;c++)a=D[c],a.setAngle(a.angle+b);n("rotate",b)}function j(a){a.stopPropagation(),f(),z.isDrawingMode=!0,$("#ocrt_img_erase").addClass("active"),z.freeDrawingBrush=new fabric.PencilBrush(z),z.freeDrawingBrush.color="#ffffff",z.freeDrawingBrush.width=20,z.freeDrawingBrush.shadowBlur=0}function k(){f(),g()}function l(a){var b=new fabric.Group([],{left:(z.width-v)/2,top:18,width:v,height:w,selectable:!1,evented:!1,hasBorders:!1,hasControls:!1});z.remove(a),a.set({left:a.left-z.width/2,top:a.top-z.height/2}),b.add(a),z.add(b),D.push(b),n("path")}function m(a){for(var b,c=0,d=a.length;d>c;c++)b=a[c],z.remove(b),b.remove(),b=null}function n(a,b){"rotate"===a?(clearTimeout(x),H+=b,x=setTimeout(function(){o(a)},800)):(x&&(clearTimeout(x),o("rotate")),o(a))}function o(a){var b,c,d,e=F.length,f=G+1;if(e>f){for(c=f;e>c;c++)if(b=F[c],"path"===b.type){d=D.length-b.pathGroupIndex,"path"===a&&(d-=1),D.splice(b.pathGroupIndex,d);break}F.splice(f,e-f),G++}else E>e?G++:F.shift();F.push(p(a)),x=null}function p(a){var b={type:a};return"rotate"===a?(b.angle=H,H=0):(I=D.length-1,b.pathGroupIndex=I),b}function q(){var a;G>=0&&(a=F[G],G--,"rotate"===a.type?s(-a.angle):(z.remove(D[I]),I--))}function r(){var a;G!==F.length-1&&(G++,a=F[G],"rotate"===a.type?s(a.angle):(I++,z.add(D[I])))}function s(a){var b,c=0;for(A.setAngle(A.angle+a);I>=c;c++)b=D[c],b.setAngle(b.angle+a)}function t(){var a,b,c;if(G>=0){for(A.setAngle(0),a=0,b=D.length;b>a;a++)c=D[a],c.setAngle(0),z.remove(c);G=-1,I=-1}}function u(){y.on("click",k),$("#ocrt_img_rotate").on("click",h),$("#ocrt_img_erase").on("click",j),$("#ocrt_img_cancel, #ocrt_imgedit_close").on("click",c),$("#ocrt_img_undo").on("click",q),$("#ocrt_img_redo").on("click",r),$("#ocrt_img_revert").on("click",t),$("#ocrt_img_done").on("click",e),y.find(".canvas-container").on("click",!1),z.on("path:created",function(a){l(a.path)})}var v,w,x,y=null,z=null,A=null,B=null,C=0,D=[],E=100,F=[],G=-1,H=0,I=-1,J='<div class="ocrt-imgedit" id="ocrt_imgedit"><div class="ocrt-table"><div class="ocrt-tablecell"><div class="ocrt-imgedit-content"><div class="ocrt-imgedit-header"><div class="ocrt-imgedit-title">编辑截图</div><span class="ocrt-iconfont" id="ocrt_imgedit_close">&#xe633;</span></div><div class="ocrt-imgedit-container"><div class="ocrt-table"><div class="ocrt-tablecell"><canvas id="ocrt_imgedit_canvas"></canvas></div></div></div><div class="ocrt-imgedit-toolbar"><div class="ocrt-imgedit-toolbtn" id="ocrt_img_rotate" title="旋转图像"><span class="ocrt-iconfont">&#xe7d3;</span></div><div class="ocrt-imgedit-toolbtn" id="ocrt_img_erase" title="涂抹图像"><span class="ocrt-iconfont">&#xe605;</span></div><div class="ocrt-imgedit-toolline"></div><div class="ocrt-imgedit-toolbtn" id="ocrt_img_undo" title="后退"><span class="ocrt-iconfont">&#xe606;</span></div><div class="ocrt-imgedit-toolbtn" id="ocrt_img_redo" title="前进"><span class="ocrt-iconfont">&#xe609;</span></div><div class="ocrt-imgedit-toolbtn" id="ocrt_img_revert">还原</div><div class="ocrt-imgedit-toolbtn fr" id="ocrt_img_cancel"><span class="ocrt-iconfont">&#xe633;</span>取消</div><div class="ocrt-imgedit-toolbtn fr" id="ocrt_img_done"><span class="ocrt-iconfont">&#xe67f;</span>确认</div></div></div></div></div></div>';a.beginEditImg=function(a,c,d){y=$(".ocrt-imgedit"),y.length<1?(y=$(J).appendTo($("body")),z=new fabric.Canvas("ocrt_imgedit_canvas",{backgroundColor:"#ffffff"}),u()):y.show(),b(a,c,d)},a.clearEditImg=d}(window);