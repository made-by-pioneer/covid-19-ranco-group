!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=n(1);(r=o)&&r.__esModule;function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=function(e){return Math.floor(e.getBoundingClientRect().top)};e.preventDefault();var r=t?t.getAttribute("href"):this.getAttribute("href"),o=document.querySelector(r);if(o){var u=n(o);window.scrollBy({top:u,left:0,behavior:"smooth"});var i=setInterval(function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===n(o)||e)&&(o.tabIndex="-1",o.focus(),window.history.pushState("","",r),clearInterval(i))},100)}}document.querySelectorAll(".scroll").forEach(function(e){return e.onclick=u})},function(e,t){}]);