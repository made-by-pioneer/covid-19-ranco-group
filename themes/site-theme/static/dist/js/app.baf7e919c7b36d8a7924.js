!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=n(1);(r=o)&&r.__esModule;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=function(e){return Math.floor(e.getBoundingClientRect().top)};e.preventDefault();var r=t?t.getAttribute("href"):this.getAttribute("href"),o=document.querySelector(r);if(o){var i=n(o);window.scrollBy({top:i,left:0,behavior:"smooth"});var u=setInterval(function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===n(o)||e)&&(o.tabIndex="-1",o.focus(),window.history.pushState("","",r),clearInterval(u))},100)}}document.querySelectorAll(".scroll").forEach(function(e){return e.onclick=i});for(var u=document.querySelectorAll("#product"),l=function(e){var t=product[e];t.querySelector("button").addEventListener("click",function(){var e=t.querySelector("#title").innerText,n=document.getElementById(e+"-quote"),r=document.getElementById(e+"-quote-visual"),o=quoteQuans.find(function(t){return t.productName===e}),i=t.querySelector("#des").innerText,u=t.querySelector("#quantity").value,l=t.querySelector("#size").value;o.sizeNeeded===l&&o.quanNeeded===u||(o.quanNeeded=u,o.sizeNeeded=l,n.innerHTML='<input type="hidden" name="'+e.split(" ").join("-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"")+'-needed" value="'+u+'"><input type="hidden" name="'+e.split(" ").join("-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"")+'-size" value="'+l+'">',r.innerHTML='<div class="flex flex-wrap w-full py-5 border-b border-black"><div class="w-1/4 text-center"><span class="border border-black py-1 px-3">'+u+'</span></div><div class="w-1/2 font-ibm-conds text-xl">'+e+'<br><p class="pt-2 font-ibm-mono text-xs">'+i+'</p></div><div class="w-1/4 text-center"><button class="border border-black py-1 px-3" onclick="'+e.split(" ").join("-").split("-").join("").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"")+'removeQuote()">X</button></div></div>'),t.querySelector("#item-add-notif").classList.remove("opacity-0","-mt-6")},!1)},c=0;c<u.length;c++)l(c)},function(e,t){}]);