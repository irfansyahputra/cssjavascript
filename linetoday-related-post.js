var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"Related Post",widgetStyle:1,homePage:"https://www.mahatemplates.net",numPosts:4,summaryLength:370,titleLength:"auto",thumbnailSize:300,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span class="bg_overlay"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize+"-c"):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><div class="related-post-item-thumbnail"><img class="lazy" alt="'+t+'" title="'+t+'" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" aria-label="Related Post" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> </span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" aria-label="Related Post" href="'+v+'"'+b+'><div class="related-post-item-thumbnail"><img class="lazy" alt="'+t+'" title="'+t+'"  src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" aria-label="Related Post" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><div class="related-post-item-thumbnail"><img class="lazy" alt="'+t+'" title="'+t+'" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" aria-label="Related Post" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><div class="related-post-item-thumbnail"><img class="lazy" alt="'+t+'" title="'+t+'" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);
function loadScript(d){var o=document.createElement("script");o.src=d,document.body.appendChild(o)}function downloadJSAtOnload1(){loadScript("data:application/x-javascript;base64,ZnVuY3Rpb24gbGF6eUxvYWQoKXtmb3IodmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgibGF6eSIpLHQ9MDt0PGUubGVuZ3RoO3QrKylpc0luVmlld3BvcnQoZVt0XSkmJihlW3RdLnNyYz1lW3RdLmdldEF0dHJpYnV0ZSgiZGF0YS1zcmMiKSl9ZnVuY3Rpb24gaXNJblZpZXdwb3J0KGUpe3ZhciB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIHQuYm90dG9tPj0wJiZ0LnJpZ2h0Pj0wJiZ0LnRvcDw9KHdpbmRvdy5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkmJnQubGVmdDw9KHdpbmRvdy5pbm5lcldpZHRofHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpfWZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIoZSx0KXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLHQpOndpbmRvdy5hdHRhY2hFdmVudCgib24iK2UsdCl9cmVnaXN0ZXJMaXN0ZW5lcigibG9hZCIsbGF6eUxvYWQpLHJlZ2lzdGVyTGlzdGVuZXIoInNjcm9sbCIsbGF6eUxvYWQpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIkRPTUNvbnRlbnRMb2FkZWQiLGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Zvcih2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJhIiksdD1lLmxlbmd0aCxuPS9maXJlZm94fHRyaWRlbnQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpP2RvY3VtZW50LmRvY3VtZW50RWxlbWVudDpkb2N1bWVudC5ib2R5LGk9ZnVuY3Rpb24oZSx0LG4saSl7cmV0dXJuKGUvPWkvMik8MT9uLzIqZSplKmUrdDpuLzIqKChlLT0yKSplKmUrMikrdH07dC0tOyllLml0ZW0odCkuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLGZ1bmN0aW9uKGUpe3ZhciB0LG89bi5zY3JvbGxUb3Ascj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgvW14jXSskLy5leGVjKHRoaXMuaHJlZilbMF0pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxkPW4uc2Nyb2xsSGVpZ2h0LXdpbmRvdy5pbm5lckhlaWdodCxhPWQ+bytyP3I6ZC1vLGM9ZnVuY3Rpb24oZSl7dmFyIHI9ZS0odD10fHxlKSxkPWkocixvLGEsOTAwKTtuLnNjcm9sbFRvcD1kLDkwMD5yJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyl9O3JlcXVlc3RBbmltYXRpb25GcmFtZShjKSxlLnByZXZlbnREZWZhdWx0KCkuYW5pbWF0ZSh7b3BhY2l0eToiMSJ9LDFlMyl9KX0pOw==")}window.addEventListener?window.addEventListener("load",downloadJSAtOnload1,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload1):window.onload=downloadJSAtOnload1;