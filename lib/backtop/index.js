!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n=t("object"==typeof exports?require("vue"):e.vue);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=77)}({0:function(e,t){e.exports=function(e,t,n,o,r,i){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):o&&(l=o),l){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=l,u.render=function(e,t){return l.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:s,exports:a,options:u}}},1:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);t.default={name:"w-backtop",data:function(){return{show:!1}},methods:{backtop:function(){var e=this.scrollView===window?document.documentElement.scrollTop:this.scrollView.scrollTop;(0,o.scrollTop)(this.scrollView,e,0)},scrollHandler:function(){var e=window.pageYOffset,t=window.innerHeight;this.scrollView!==window&&(e=this.scrollView.scrollTop,t=this.scrollView.offsetHeight),this.show=e>=t/2},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},50)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el),this.scrollView.addEventListener("scroll",this.throttledCheck,!1),this.scrollView.addEventListener("resize",this.scrollHandler,!1)},destroyed:function(){this.scrollView.removeEventListener("scroll",this.throttledCheck,!1),this.scrollView.removeEventListener("resize",this.scrollHandler,!1)}}},2:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(m){var i=p++;o=d||(d=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var r=u(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=l[s.id];a.refs--,n.push(a)}t?(r=u(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],c=i[2],u=i[3],l={id:e+":"+r,css:a,media:c,sourceMap:u};o[s]?o[s].parts.push(l):n.push(o[s]={id:s,parts:[l]})}return n}},4:function(e,t,n){"use strict";function o(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function r(e,t){if(e){for(var n=e.className,r=(t||"").split(" "),i=0,s=r.length;i<s;i++){var a=r[i];a&&(e.classList?e.classList.add(a):o(e,a)||(n+=" "+a))}e.classList||(e.className=n)}}function i(e,t){if(e&&t){for(var n=t.split(" "),r=" "+e.className+" ",i=0,s=n.length;i<s;i++){var a=n[i];a&&(e.classList?e.classList.remove(a):o(e,a)&&(r=r.replace(" "+a+" "," ")))}e.classList||(e.className=g(r))}}function s(e,t,n){if(e&&t)if("object"===(void 0===t?"undefined":f(t)))for(var o in t)t.hasOwnProperty(o)&&s(e,o,t[o]);else t=b(t),"opacity"===t&&y<9?e.style.filter=isNaN(n)?"":"alpha(opacity="+100*n+")":e.style[t]=n}function a(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window}function c(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-o,i=r+t.offsetHeight;return r>=0&&r<n||i>0&&i<=n}function u(e){function t(n,o,r){if(n!==o){var i=n+r>o?o:n+r;n>o&&(i=n-r<o?o:n-r),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,o,r)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-o);t(n,o,Math.ceil(i/r*50))}function l(){return++w}Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=t.isArray=t.isDate=t.isFunction=t.isNumber=t.isString=t.isBoolean=t.pageScroll=t.isIOS=t.getStyle=t.once=t.off=t.on=void 0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=o,t.addClass=r,t.removeClass=i,t.setStyle=s,t.getScrollview=a,t.checkInview=c,t.scrollTop=u,t.getZIndex=l;var d=n(5),p=function(e){return e&&e.__esModule?e:{default:e}}(d),v=p.default.prototype.$isServer,h=/([\:\-\_]+(.))/g,m=/^moz([A-Z])/,y=v?0:Number(document.documentMode),w=1e4,g=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},b=function(e){return e.replace(h,function(e,t,n,o){return o?n.toUpperCase():n}).replace(m,"Moz$1")},C=t.on=function(){return!v&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),_=t.off=function(){return!v&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}();t.once=function(e,t,n){C(e,t,function o(){n&&n.apply(this,arguments),_(e,t,o)})},t.getStyle=y<9?function(e,t){if(!v){if(!e||!t)return null;t=b(t),"float"===t&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!v){if(!e||!t)return null;t=b(t),"float"===t&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}},t.isIOS=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),t.pageScroll=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),t.isBoolean=function(e){return"boolean"==typeof e},t.isString=function(e){return"string"==typeof e},t.isNumber=function(e){return"number"==typeof e},t.isFunction=function(e){return"function"==typeof e},t.isDate=function(e){return"date"===Object.prototype.toString.call(e).match(/^(\[object )(\w+)\]$/i)[2].toLowerCase()},t.isArray=Array.isArray,t.isObject=function(e){return"object"===(void 0===e?"undefined":f(e))}},5:function(t,n){t.exports=e},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Backtop=void 0;var o=n(78),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.Backtop=r.default},78:function(e,t,n){"use strict";function o(e){c||n(79)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);var a=n(81),c=!1,u=n(0),l=o,f=u(i.a,a.a,!1,l,"data-v-41a14ace",null);f.options.__file="packages/backtop/src/backtop.vue",t.default=f.exports},79:function(e,t,n){var o=n(80);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("152ec655",o,!1)},80:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,"\n.wui-backtop[data-v-41a14ace] {\n  border: 1px solid #C0C0C0;\n  width: 1rem;\n  height: 1rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  position: fixed;\n  border-radius: 50%;\n  right: 5%;\n  bottom: 5%;\n  cursor: pointer;\n}\n",""])},81:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:function(t){t.stopPropagation(),e.backtop(t)}}},[e.$slots.default?e._t("default"):n("div",{staticClass:"wui-backtop"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"}},[n("polyline",{attrs:{stroke:"#C0C0C0",fill:"transparent","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"5 14, 11 8, 17 14"}})])])],2)},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};t.a=i}})});