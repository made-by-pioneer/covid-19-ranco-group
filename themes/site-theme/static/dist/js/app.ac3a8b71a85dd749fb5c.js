!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n,o=r(1);(n=o)&&n.__esModule;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=function(e){return Math.floor(e.getBoundingClientRect().top)};e.preventDefault();var n=t?t.getAttribute("href"):this.getAttribute("href"),o=document.querySelector(n);if(o){var i=r(o);window.scrollBy({top:i,left:0,behavior:"smooth"});var l=setInterval(function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===r(o)||e)&&(o.tabIndex="-1",o.focus(),window.history.pushState("","",n),clearInterval(l))},100)}}document.querySelectorAll(".scroll").forEach(function(e){return e.onclick=i});for(var l=document.querySelectorAll("#product"),a=function(e){var t=product[e];t.querySelector("button").addEventListener("click",function(){var e=t.querySelector("#title").innerText,r=document.getElementById(e+"-quote"),n=document.getElementById(e+"-quote-visual"),o=quoteQuans.find(function(t){return t.productName===e}),i=t.querySelector("#des").innerText,l=t.querySelector("#quantity").value,a=t.querySelector("#size").value;o.sizeNeeded===a&&o.quanNeeded===l||(o.quanNeeded=l,o.sizeNeeded=a,r.innerHTML='<input type="hidden" name="'+e.split(" ").join("-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"")+'-needed" value="'+l+'"><input type="hidden" name="'+e.split(" ").join("-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"")+'-size" value="'+a+'">',n.innerHTML='<div class="flex flex-wrap w-full py-5 border-b border-black"><div class="w-1/4 text-center"><span class="border border-black py-1 px-3">'+l+'</span></div><div class="w-1/2 font-ibm-conds text-xl">'+e+'<br><p class="pt-2 font-ibm-mono text-xs">'+i+'</p></div><div class="w-1/4 text-center"><button class="border border-black py-1 px-3" onclick="'+e.split(" ").join("-").split("-").join("").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"")+'removeQuote()">X</button></div></div>');var u=t.querySelector("#item-add-notif"),c=t.querySelector("#item-updated-notif");u.classList.contains("revealed")?(c.classList.remove("opacity-0","-mt-6"),c.classList.add("revealed"),u.classList.add("opacity-0","-mt-6"),u.classList.remove("revealed")):c.classList.contains("revealed")?(c.classList.toggle("-mt-6"),sleep(100),c.classList.toggle("-mt-6")):(u.classList.add("revealed"),u.classList.remove("opacity-0","-mt-6"))},!1)},u=0;u<l.length;u++)a(u)},function(e,t){}]);