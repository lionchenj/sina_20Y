!function(a){"use strict";function b(){o.find(".ocrt-panel-review > img").on("mouseenter",function(){$(this).parent().addClass("hover")}),o.find(".ocrt-panel-imgedit").on("mouseleave",function(){$(this).parent().removeClass("hover")}),o.find(".ocrt-panel-imgedit > div").on("click",function(){var b=o.find(".ocrt-panel-review > img")[0];a.beginEditImg(b.src,b.naturalWidth,b.naturalHeight)})}var c,d,e,f,g,h,i,j,k,l,m,n,o=null,p='<div class="ocrt-panel-ocrres"><div class="ocrt-panel-leftarea"> <span>原文：</span></div><div class="ocrt-panel-rightarea"><textarea id="ocrt_ocr"></textarea></div></div><div class="ocrt-panel-tranres"><div class="ocrt-panel-leftarea"><span>译文：</span></div><div class="ocrt-panel-rightarea"><div id="ocrt_trans"></div><a href="#" id="ocrt_moreexplain" target="_blank">更多释义&gt;&gt;</a></div></div>',q='<div class="ocrt-panel-background" id="ocrt_panel"><div class="ocrt-panel-bar"><div class="ocrt_panel-title"><img width="18" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iui6q+S7vemqjOivgeWksei0pSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTExLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAxMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC1Db3B5LTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMjM1Mjk0LCA0LjIwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTEyIiBwb2ludHM9IjMuOTg1OTgyOTQgMCA1LjQxMzUzMzgzIDAgMS40MTE5OTg0MSA5LjQ3MzY4NDIxIDAgOS40NzM2ODQyMSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTEyLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNzY2OTE3LCA0LjczNjg0Mikgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNi43NjY5MTcsIC00LjczNjg0MikgIiBwb2ludHM9IjguMDQ2MTMzMzEgMCA5LjQ3MzY4NDIxIDAgNS40NzIxNDg3OCA5LjQ3MzY4NDIxIDQuMDYwMTUwMzggOS40NzM2ODQyMSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOSIgeD0iMS44OTQ3MzY4NCIgeT0iNS42ODQyMTA1MyIgd2lkdGg9IjUuNDEzNTMzODMiIGhlaWdodD0iMS4zNTMzODM0NiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNTY1MjE3MzksMTYuNDM0NzgyNiBMMTYuNDM0NzgyNiwxNi40MzQ3ODI2IEwxNi40MzQ3ODI2LDEuNTY1MjE3MzkgTDEuNTY1MjE3MzksMS41NjUyMTczOSBMMS41NjUyMTczOSwxNi40MzQ3ODI2IFogTTE4LDAgTDE4LDE4IEwwLDE4IEwwLDAgTDE4LDAgWiBNOC4zNDc4MjYwOSwwIEw4LjM0NzgyNjA5LDEuNTY1MjE3MzkgTDkuOTEzMDQzNDgsMS41NjUyMTczOSBMOS45MTMwNDM0OCwwIEw4LjM0NzgyNjA5LDAgWiBNMCw4LjM0NzgyNjA5IEwwLDkuOTEzMDQzNDggTDEuNTYzNDkyNjgsOS45MTMwNDM0OCBMMS41NjM0OTI2OCw4LjM0NzgyNjA5IEwwLDguMzQ3ODI2MDkgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjOUI5QjlCIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMTUtQ29weS05IiBmaWxsPSIjRTMzOTNCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMjYzMTU4LCA0LjI2MzE1OCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtNC4yNjMxNTgsIC00LjI2MzE1OCkgIiBwb2ludHM9IjEuNTk4NzQ5MjkgNi45Mjc3MDE4MyAxLjU5ODc0OTI5IC04LjUyNjUxMjgzZS0xNCAwIC04LjUyNjUxMjgzZS0xNCAxLjEwNzQ1NzU0ZS0xNyA4LjUyNjMxNTc5IDguNTI2MzE1NzkgOC41MjYzMTU3OSA4LjUyNjMxNTc5IDYuOTI3NzAxODMiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"/>百度截图翻译插件</div><div class="right-btnarea"><div class="ocrt-panel-bar-btn ocrt-panel-recapture-btn"><span class="ocrt-iconfont">&#xe638;</span>重新截图</div><div class="ocrt-panel-bar-btn ocrt-panel-shrink-btn"><span class="ocrt-iconfont">&#xe607;</span></div><div class="ocrt-panel-bar-btn ocrt-panel-expand-btn"><span class="ocrt-iconfont">&#xe608;</span></div><div class="ocrt-panel-bar-btn ocrt-panel-close-btn"><span class="ocrt-iconfont">&#xe633;</span></div></div></div><div class="ocrt-panel-review"><img><div class="ocrt-panel-imgedit"><div>编辑截图</div></div></div><div class="ocrt-panel-result"><div class="ocrt-panel-fromto"><div class="ocrt-panel-from"></div><span class="ocrt-iconfont">&#xe6df;</span><div class="ocrt-panel-to"></div></div><div class="ocrt-panel-loading"><img src="data:image/gif;base64,R0lGODlhEAAQALMMAKqooJGOhp2bk7e1rZ2bkre1rJCPhqqon8PBudDOxXd1bISCef///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAAEAAQAAAET5DJyYyhmAZ7sxQEs1nMsmACGJKmSaVEOLXnK1PuBADepCiMg/DQ+/2GRI8RKOxJfpTCIJNIYArS6aRajWYZCASDa41Ow+Fx2YMWOyfpTAQAIfkEBQAADAAsAAAAABAAEAAABE6QyckEoZgKe7MEQMUxhoEd6FFdQWlOqTq15SlT9VQM3rQsjMKO5/n9hANixgjc9SQ/CgKRUSgw0ynFapVmGYkEg3v1gsPibg8tfk7CnggAIfkEBQAADAAsAAAAABAAEAAABE2QycnOoZjaA/IsRWV1goCBoMiUJTW8A0XMBPZmM4Ug3hQEjN2uZygahDyP0RBMEpmTRCKzWGCkUkq1SsFOFQrG1tr9gsPc3jnco4A9EQAh+QQFAAAMACwAAAAAEAAQAAAETpDJyUqhmFqbJ0LMIA7McWDfF5LmAVApOLUvLFMmlSTdJAiM3a73+wl5HYKSEET2lBSFIhMIYKRSimFriGIZiwWD2/WCw+Jt7xxeU9qZCAAh+QQFAAAMACwAAAAAEAAQAAAETZDJyRCimFqbZ0rVxgwF9n3hSJbeSQ2rCWIkpSjddBzMfee7nQ/XCfJ+OQYAQFksMgQBxumkEKLSCfVpMDCugqyW2w18xZmuwZycdDsRACH5BAUAAAwALAAAAAAQABAAAARNkMnJUqKYWpunUtXGIAj2feFIlt5JrWybkdSydNNQMLaND7pC79YBFnY+HENHMRgyhwPGaQhQotGm00oQMLBSLYPQ9QIASrLAq5x0OxEAIfkEBQAADAAsAAAAABAAEAAABE2QycmUopham+da1cYkCfZ94UiW3kmtbJuRlGF0E4Iwto3rut6tA9wFAjiJjkIgZAYDTLNJgUIpgqyAcTgwCuACJssAdL3gpLmbpLAzEQA7"/>图像识别中</div><div class="ocrt-panel-errorinfo"><div class="ocrt-panel-erroricon"></div><div class="ocrt-panel-errorheader"></div><div class="ocrt-panel-errorbody"></div></div>'+p+"</div></div>";d=function(b){b=b||"";var c,d,f=b.split("\n"),g=[],h=f.length,i=0;for(c=0;h>c;c++)d=f[c].replace(/(^\s*)|(\s*$)/g,""),i+=d.length,g.push(d);var j=a.getFromLanguageId(),k=a.getToLanguageId();i>0?o.find("#ocrt_moreexplain").attr("href","http://fanyi.baidu.com/#"+j+"/"+k+"/"+encodeURI(g.join("\n"))).show():o.find("#ocrt_moreexplain").attr("href","#").hide(),e&&clearTimeout(e),e=setTimeout(function(){"function"==typeof a.changePanelText&&a.changePanelText(g),e=null},600)},c=function(){o?(o.addClass("close"),o.find("#ocrt_ocr").off("input"),o.find(".ocrt-panel-recapture-btn").off("click"),o.find(".ocrt-panel-shrink-btn").off("click"),o.find(".ocrt-panel-expand-btn").off("click"),o.find(".ocrt-panel-close-btn").off("click"),o.find(".ocrt-panel-fromto").off("click"),o.find("#ocrt_ocr").val(""),o.find("#ocrt_trans").html(""),o.find("#ocrt_moreexplain").attr("href","#").off("click").hide()):$("#ocrt_panel").addClass("close")},l=function(){"function"==typeof a.toggleFromTo&&(a.toggleFromTo(),m(),d(o.find("#ocrt_ocr").val()))},m=function(){o&&(o.find(".ocrt-panel-from").html(a.getFromLanguage()),o.find(".ocrt-panel-to").html(a.getToLanguage()))},f=function(){"function"==typeof a.reCapture&&a.reCapture()},g=function(){o&&(o.removeClass("expand"),o.addClass("shrink"))},h=function(){o&&(o.removeClass("shrink"),o.addClass("expand"))},i=function(){c()},j=function(){"function"==typeof a.readOCR&&a.readOCR(o.find("#ocrt_ocr").val())},k=function(){"function"==typeof a.readTrans&&a.readTrans(o.find("#ocrt_trans").html().replace("<br>"," "))},n=function(){"function"==typeof a.moreExplain&&a.moreExplain()},a.showOCRTPanel=function(a){try{o=$("#ocrt_panel"),o.length<1&&(o=$(q),a.append(o),b()),o.removeClass("close shrink expand"),m(),o.find("#ocrt_ocr").on("input",function(){d(this.value)}),o.find(".ocrt-panel-recapture-btn").on("click",f),o.find(".ocrt-panel-shrink-btn").on("click",g),o.find(".ocrt-panel-expand-btn").on("click",h),o.find(".ocrt-panel-close-btn").on("click",i),o.find(".ocrt-panel-fromto").on("click",l),o.find("#ocrt_moreexplain").on("click",n),setTimeout(function(){o.addClass("expand")},100)}catch(e){console.error(e),c()}},a.showOCRTPanelPic=function(a){o&&o.find(".ocrt-panel-review > img").attr("src",a)},a.showOCRTPanelResultWaiting=function(){o&&o.find(".ocrt-panel-result").removeClass("showResult showWarning").addClass("showWaiting")},a.showOCRTPanelResultWarning=function(a,b){o&&(o.find(".ocrt-panel-result").removeClass("showWaiting showResult").addClass("showWarning"),o.find(".ocrt-panel-errorheader").html(a),o.find(".ocrt-panel-errorbody").html(b))},a.showOCRTPanelResultOCR=function(b){if(o&&(o.find(".ocrt-panel-result").removeClass("showWarning showWaiting").addClass("showResult"),o.find("#ocrt_ocr").val(b),b.length>0)){var c=a.getFromLanguageId(),d=a.getToLanguageId();o.find("#ocrt_moreexplain").attr("href","http://fanyi.baidu.com/#"+c+"/"+d+"/"+encodeURI(b)).show()}},a.showOCRTPanelResultTrans=function(a){o&&(o.find(".ocrt-panel-result").removeClass("showWarning showWaiting").addClass("showResult"),o.find("#ocrt_trans").html(a))},a.closeOCRTPanel=c}(window);