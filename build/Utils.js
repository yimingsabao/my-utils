function dataUtils(){}function domUtils(){}function BottomLoader(t){this.BUFF=200,this.viewportHeight=window.screen.height,this.DIFF=this.viewportHeight,this.cbContent={},this.count=1,this.last=0,this.init(t)}dataUtils.prototype={init:function(){console.log("init")},unique:function(t){for(var e,n=[],o={},i=0;null!=(e=t[i]);i++)o[e]||(n.push(e),o[e]=!0);return n},isMatchUA:function(t,e){var n=(e||"").split("|"),o=!1;return n.forEach(function(e){e=e.trim(),e&&t.indexOf(e)!==-1&&(o=!0)}),o},parseBoolean:function(t){var e=!1;try{e=JSON.parse(t)}catch(n){}return e},getURLParam:function(t){var e,n={},o=/^([\u4E00-\u9FFF]|[a-zA-Z]|[0-9]|\s)+$/,i=(t.split("?")[1]||"").split("&");for(var r in i)if(i.hasOwnProperty(r)){e=i[r].split("=");var a=decodeURIComponent(e[1]||"");a&&o.test(a)&&(n[e[0]]=a)}return console.log(n),n},getDefaultTime:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;n=n<9?"0"+n:n;var o=t.getDate();o=o<9?"0"+o:o;var i=e+""+n+o;return i},html_encode:function(t){var e="";return 0==t.length?"":(e=t.replace(/&/g,"&gt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/ /g,"&nbsp;"),e=e.replace(/\'/g,"&#39;"),e=e.replace(/\"/g,"&quot;"),e=e.replace(/\n/g,"<br>"))},html_decode:function(t){var e="";return 0==t.length?"":(e=t.replace(/&gt;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&nbsp;/g," "),e=e.replace(/&#39;/g,"'"),e=e.replace(/&quot;/g,'"'),e=e.replace(/<br>/g,"\n"))},getBase64Image:function(t,e){var n=new Image;n.crossOrigin="",n.src=t,n.onload=function(){var t=document.createElement("canvas");t.width=n.width,t.height=n.height;var o=t.getContext("2d");o.drawImage(n,0,0,n.width,n.height);var i=n.src.substring(n.src.lastIndexOf(".")+1).toLowerCase(),r=t.toDataURL("image/"+i);e&&e(r)}}},domUtils.prototype={insertAfter:function(t,e){var n=e.parentNode;n.lastChild==e?n.appendChild(t):n.insertBefore(t,e.nextSibling)}},BottomLoader.prototype={init:function(t){var e=this,n=null;window.addEventListener("scroll",function(){t?("number"==typeof n&&clearTimeout(n),n=setTimeout(function(){e.detect()},e.BUFF)):e.throttle(200,e.detect)},!1)},detect:function(){var t=this,e=document.body.clientHeight,n=document.body.scrollTop,o=e;t.viewportHeight+n+cbContent.diff>=o&&n+cbContent.diff<=o&&(cbContent.callback&&cbContent.callback(t.count),console.log("Loader "+t.count+" times"),t.count++)},addCallback:function(t,e){var n=this;cbContent={diff:e.diff||n.DIFF,callback:t},e.immediately&&n.detect()},throttle:function(t,e){var n=this,o=+new Date;o-n.last>t&&(console.log("in"),e.apply(this,arguments),n.last=o)}};