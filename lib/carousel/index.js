!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=97)}({1:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var s=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},100:function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,".carousel {\n  box-sizing: content-box;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.carousel-track {\n  height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  display: table-cell;\n  font-size: 0;\n}\n.carousel-item {\n  width: 100vw;\n  height: 100%;\n  overflow: hidden;\n  display: inline-block;\n}\n.carousel-indicators {\n  position: absolute;\n  height: 0;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.carousel-dot {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 10px;\n  background: rgba(0, 0, 0, 0.5);\n}\n.carousel-dot.active {\n  background: red;\n}\n",""])},2:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=l[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(s(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:r}}}}function o(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function s(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(m){var s=f++;i=d||(d=o()),e=r.bind(null,i,s,!1),n=r.bind(null,i,s,!0)}else i=o(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function r(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),l={},h=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var o=c(t,e);return i(o),function(e){for(var n=[],s=0;s<o.length;s++){var r=o[s],a=l[r.id];a.refs--,n.push(a)}e?(o=c(t,e),i(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},3:function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=s[0],a=s[1],u=s[2],c=s[3],l={id:t+":"+o,css:a,media:u,sourceMap:c};i[r]?i[r].parts.push(l):n.push(i[r]={id:r,parts:[l]})}return n}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Carousel=void 0;var i=n(98),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.Carousel=o.default},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(99);e.default={name:"w-carousel",props:{loop:{type:Boolean,default:!0},auto:{type:Number,default:3e3},indicators:{type:Boolean,default:!1},responsive:{type:Number,default:40},flickThreshold:{type:Number,default:.6},delta:{type:Number,default:100},onSlidEnd:{type:Function,default:function(t){return 0}},preventDefault:{type:Boolean,default:!1},active:{type:Number,default:0}},data:function(){return{touch:!1,timer:0,activeIndex:this.active,trackStyle:{transform:"translate(0px, 0px) translateZ(0px)",transitionDuration:0},transitionDuration:300,width:"100vw"}},computed:{computedAuto:function(){return this.auto&&this.$slots.default.length>1},computedLoop:function(){return this.$slots.default.length>1&&this.loop}},methods:{setHelperDOM:function(){var t=this.$slots.default.length;t>1&&this.loop&&(this.addonBefore=this.list[t-1].$el.outerHTML,this.addonAfter=this.list[0].$el.outerHTML)},slid:function(t,e){var n=this.computedLoop,i=this.width,o=this.transitionDuration,s=this.$slots,r=s.default.length;if(0!==r){n||(t=(t+r)%r);var a=-i*(t+(n?1:0))-e;this.trackStyle={transform:"translate("+a+"px, 0px) translateZ(0px) translate3d(0, 0, 0)",transitionDuration:o+"ms","-webkit-backface-visibility":"hidden"},this.activeIndex=(t+r)%r,o>0&&n&&(0===this.activeIndex||this.activeIndex===r-1)&&setTimeout(this.correctIndex,o),o>0&&this.onSlidEnd(this.activeIndex)}},correctIndex:function(){this.transitionDuration=0,this.slid(this.activeIndex,0)},calculatePos:function(t){var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY,i=this.x-e,o=this.y-n;return{deltaX:i,deltaY:o,absX:Math.abs(i),absY:Math.abs(o)}},setTimer:function(){var t=this,e=this.auto,n=this.$slots,i=n.default.length;e&&i>1&&(this.timer=setInterval(function(){t.transitionTo(t.activeIndex+1)},e))},clearTimer:function(){this.timer&&clearInterval(this.timer)},transitionTo:function(t,e){this.clearTimer(),this.transitionDuration=e||300,this.slid(t,0),this.setTimer()},onTouchstart:function(t){if(!(t.touches.length>1)){if(1===this.$slots.default.length)return void(this.touch=!1);this.touch=!0,this.transitionDuration=0,this.start=Date.now(),this.x=t.touches[0].clientX,this.y=t.touches[0].clientY,this.clearTimer()}},onTouchmove:function(t){if(this.preventDefault&&t.preventDefault(),this.touch){var e=this.calculatePos(t);e.absX>e.absY&&(t.preventDefault(),this.slid(this.activeIndex,e.deltaX))}},onTouchend:function(t){if(this.touch){var e=this.loop,n=this.$slots,i=this.start,o=this.flickThreshold,s=this.delta,r=this.activeIndex,a=this.calculatePos(t),u=Date.now()-i,c=Math.sqrt(a.absX*a.absX+a.absY*a.absY)/u,l=c>o,h=r;(l||a.absX>s)&&(h+=a.absX/a.deltaX,e||(h=Math.max(Math.min(h,n.default.length-1),0))),this.transitionTo(h),this.cleanTouch()}},onTouchcancel:function(t){this.touch&&(this.transitionTo(this.activeIndex),this.cleanTouch())},cleanTouch:function(){this.touch=!1},resize:function(){this.$nextTick(function(){this.width=this.$el.clientWidth,this.slid(this.activeIndex,0)},this)}},watch:{auto:function(){this.setTimer()}},render:function(t){var e=this,n=this.computedLoop,i=this.$slots,o=i.default.length-1,s=this.indicators&&t("div",{class:"carousel-indicators"},[" ",this.$slots.default.map(function(n,i){var o={"carousel-dot":!0,active:i===e.activeIndex};return t("div",{class:o,on:{click:e.transitionTo.bind(e,i,300)}},[" ",i," "])})," "]),r={};0!==this.responsive&&(r.height="0",r.paddingBottom=this.responsive+"%");var a={width:this.width+("number"==typeof this.width?"px":"")};return t("div",{class:"carousel",style:r},[t("div",{class:"carousel-track",style:this.trackStyle,on:{touchstart:this.onTouchstart,touchmove:this.onTouchmove,touchend:this.onTouchend,touchcancel:this.onTouchcancel}},[n?t("div",{class:"carousel-item",style:a},[this.$slots.default[o]]):null," ",this.$slots.default.map(function(e){return t("div",{class:"carousel-item",style:a},[e])})," ",n?t("div",{class:"carousel-item",style:a},[this.$slots.default[0]]):null," "]),s])},mounted:function(){var t=this;this.$nextTick(function(){t.resize(),window.addEventListener("resize",t.resize),t.setTimer()}),document.addEventListener("visibilitychange",function(e){(document.hidden?t.clearTimer:t.setTimer)()})},beforeDestroy:function(){window.removeEventListener("resize",this.resize),this.clearTimer()}}},99:function(t,e,n){var i=n(100);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("38ef1d24",i,!1)}})});