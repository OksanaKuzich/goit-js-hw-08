!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var o,r,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,f=setTimeout(w,t),d?y(e):a}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=g();if(T(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function O(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function x(){var e=g(),n=T(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(w,t),y(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},x.flush=function(){return void 0===f?a:O(g())},x}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var j=document.querySelector("iframe"),T=new Vimeo.Player(j);T.on("play",(function(){console.log("played the video!")})),T.getVideoTitle().then((function(e){console.log("title:",e)}));T.on("timeupdate",e(t)((function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}),1e3)),T.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name})),{name:"Max",age:21,getContact:function(){console.log("Name: ",this.name,"Age: ",this.age)},pets:{cat:{name:"Will"}}}.getContact()}();
//# sourceMappingURL=02-video.2bb159b7.js.map
