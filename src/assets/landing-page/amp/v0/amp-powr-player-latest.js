;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-powr-player",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function u(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return o(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a;function s(){return a||(a=Promise.resolve(void 0))}var f=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function c(t){return new Promise((function(n){n(t())}))}var h=Array.isArray;function l(t){return h(t)?t:[t]}var v=Object.prototype,d=(v.hasOwnProperty,v.toString);function p(t){return"[object Object]"===d.call(t)}function m(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function y(t){return"number"==typeof t&&isFinite(t)}function b(t,n,i,r,e,o,u,a,s,f,c){return t}function w(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function g(t){return(t.ownerDocument||t).defaultView}var k,q={bubbles:!0,cancelable:!0};function x(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function S(t,n){t.insertBefore(n,t.firstChild)}function j(t){return t.parent&&t.parent!=t}function O(t,n,i,r){var e=i||{};b(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var u=r||q,a=u.bubbles,s=u.cancelable;o.initEvent(n,a,s),t.dispatchEvent(o)}function M(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function P(t){for(var n,i=null,r="",e=u(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=M(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function T(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function E(t){var n=P.apply(null,arguments);setTimeout((function(){throw T(n),n}))}function R(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){E(t)}}function A(t){var n=P.apply(null,arguments);return n.expected=!0,n}var Y=["Webkit","webkit","Moz","moz","ms","O","o"],z={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function _(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;k||(k=m());var r=k[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<Y.length;i++){var r=Y[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(k[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),Y.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}var I=/vertical/,W=new WeakMap,C=new WeakMap,U=new WeakMap;function F(t){var n=W.get(t);return n||(n=new t.ResizeObserver(N),W.set(t,n)),n}function N(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=C.get(e);if(o){U.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;J(a.type,s,r)}}}}}function J(t,n,i){if(0==t){var r=i.contentRect,e=r.height;R(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=g(f),h=I.test(function(t,n){return t.getComputedStyle(n)||z}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}R(n,o)}}var L=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=C.get(t);if(e||(e=[],C.set(t,e),F(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=U.get(t);o&&setTimeout((function(){return J(1,i,o)}))}}}(this.Gn,0,this.Jn)):function(t,n){!function(t,n,i){var r=C.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){C.delete(t),U.delete(t);var e=t.ownerDocument.defaultView;e&&F(e).unobserve(t)}}(t,0,n)}(this.Gn,this.Jn))},n.Jn=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.Un){this.Un=i;var r=this.Gn;i||r.pause()}},t}(),B=self.AMP_CONFIG||{},D=("string"==typeof B.thirdPartyFrameRegex?new RegExp(B.thirdPartyFrameRegex):B.thirdPartyFrameRegex,("string"==typeof B.cdnProxyRegex?new RegExp(B.cdnProxyRegex):B.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function V(t){if(!self.document||!self.document.head)return null;if(self.location&&D.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}function Z(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}B.thirdPartyUrl,B.thirdPartyFrameHost,B.cdnUrl||V("runtime-host"),B.errorReportingUrl,B.betaErrorReportingUrl,B.localDev,B.geoApiUrl||V("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var $=self.__AMP_LOG;function G(t,n){throw new Error("failed to call initLogConstructor")}function H(t){return $.user||($.user=K()),function(t,n){return n&&n.ownerDocument.defaultView!=t}($.user.win,t)?$.userForEmbed||($.userForEmbed=K()):$.user}function K(t){return G()}function Q(t,n,i,r,e,o,u,a,s,f,c){return t}function X(t,n,i,r,e,o,u,a,s,f,c){return H().assert(t,n,i,r,e,o,u,a,s,f,c)}function tt(t,n){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function nt(t,n){return ot(et(rt(t)),n)}function it(t,n){var i=et(rt(t));return at(i,n)?ot(i,n):null}function rt(t){return t.nodeType?(n=g(t),tt(n,"ampdoc")).getAmpDoc(t):t;var n}function et(t){var n=rt(t);return n.isSingleDoc()?n.win:n}function ot(t,n){Q(at(t,n));var i=ut(t)[n];return i.obj||(Q(i.ctor),Q(i.context),i.obj=new i.ctor(i.context),Q(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function ut(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function at(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var st,ft,ct,ht=function(t){return it(t,"action")},lt=function(t){return tt(t,"platform")},vt=function(t){return ot(t,"timer")},dt=function(t){return it(t,"url")},pt=function(t){return nt(t,"viewport")};function mt(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=j(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function yt(t){var n,i=null===(n=st)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){st||(st=new WeakMap,ft=new WeakMap),b(ft);var n=ft.get(t);return n||(n=mt((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),b(n),n.unobserve(o),b(st),null===(e=st.get(o))||void 0===e||e.resolve(t[r]),st.delete(o))}}),t,{needsRootBounds:!0}),ft.set(t,n)),n}(g(t));b(st),r.observe(t),i=new f,st.set(t,i)}return i.promise}function bt(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,n){for(var i in n)_(t,i,n[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,c((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function wt(t){return t.querySelector("video, iframe")}function gt(t,n){var i=c((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];T(A.apply(null,i))}("TRYPLAY",t)})),i}function kt(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==ct)return ct;ct=!1;try{var t={get capture(){return ct=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return ct}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function qt(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function xt(t,n,i,r){return kt(t,n,i,r)}function St(t){return t.data}new WeakMap,new WeakMap;var jt,Ot=function(){function t(){this.vt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.vt||(this.vt=[]),this.vt.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.vt&&(i=t,-1!=(r=(n=this.vt).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.vt&&(this.vt.length=0)},n.fire=function(t){if(this.vt)for(var n,i=u(this.vt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.vt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),Mt=function(){function t(){this.ag=!1,this.fg=new Ot}var n=t.prototype;return n.onSessionEnd=function(t){this.fg.add(t)},n.beginSession=function(){this.ag=!0},n.endSession=function(){this.ag&&this.fg.fire(),this.ag=!1},n.isSessionActive=function(){return this.ag},t}();function Pt(t){var n=t.ownerDocument||t;return jt&&jt.ownerDocument===n||(jt=n.createElement("div")),Tt}function Tt(t){return function(t,n){b(1===n.length),t.innerHTML=n[0];var i=t.firstElementChild;return b(i),b(!i.nextElementSibling),t.removeChild(i),i}(jt,t)}var Et=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Rt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function At(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var Yt={"title":"","artist":"","album":"","artwork":[{"src":""}]},zt="registered",_t="load",It="playing",Wt="pause",Ct="ended",Ut="muted",Ft="unmuted",Nt="ad_start",Jt="ad_end",Lt="playing_manual",Bt="paused",Dt="video-play",Vt="user-interacted";function Zt(t){t.signals().signal(Vt)}var $t="video-manager",Gt=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=Z((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=m());var o="amp-extension=".concat(r);if(o){var u=At(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else S(t,n)}(t,a,At(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.cg=null,this.lg=null,this.vg=null,this.js=vt(t.win),this.dg=ht(t.getHeadNode()),this.pg=function(){return n.mg()},this.yg=Z((function(){return new Qt(n.ampdoc,n)})),this.js.delay(this.pg,1e3)}var n=t.prototype;return n.dispose=function(){if(this.yg().dispose(),this.lg.disconnect(),this.lg=null,this.cg)for(var t=0;t<this.cg.length;t++)this.cg[t].dispose()},n.mg=function(){for(var t=0;t<this.cg.length;t++){var n=this.cg[t];n.getPlayingState()!==Bt&&(en(n,"video-seconds-played"),this.bg(n))}this.js.delay(this.pg,1e3)},n.bg=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(y(i)&&y(r)&&r>0){var e=i/r,o=qt(this.ampdoc.win,"".concat($t,".").concat(n),{"time":i,"percent":e});this.dg.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;Q(t);var i=t;if(this.gg(t),t.supportsPlatform()&&!this.wg(t)){this.lg||(this.lg=mt((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.kg(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.lg.observe(i.element),xt(i.element,"reloaded",(function(){return r.videoLoaded()})),this.cg=this.cg||[];var r=new Kt(this,t);this.cg.push(r);var e=r.video.element;O(e,zt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(zt),e.classList.add("i-amphtml-video-interface")}},n.gg=function(t){i("play",(function(){return gt(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Zt(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.wg=function(t){if(Ht(this.vg,t))return this.vg;for(var n=0;this.cg&&n<this.cg.length;n++){var i=this.cg[n];if(Ht(i,t))return this.vg=i,i}return null},n.kg=function(t){return Q(this.wg(t))},n.registerForAutoFullscreen=function(t){this.yg().register(t)},n.qg=function(){return this.yg()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=H().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.kg(r);return(e?e.getAnalyticsDetails():s()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.kg(t).getPlayingState()},n.isMuted=function(t){return this.kg(t).isMuted()},n.userInteracted=function(t){return this.kg(t).userInteracted()},n.isRollingAd=function(t){return this.kg(t).isRollingAd()},n.pauseOtherVideos=function(t){this.cg.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Lt&&n.video.pause()}))},t}(),Ht=function(t,n){return!!t&&(t.video===n||t.video.element===n)},Kt=function(){function t(t,n){var i=this;this.Sg=t,this.qi=t.ampdoc,this.video=n,this.xg=!0,this.jg=!1,this.Zn=!1,this.Og=!1,this.xe=!1,this.Rg=new Mt,this.Rg.onSessionEnd((function(){return en(i,"video-session")})),this.Mg=new Mt,this.Mg.onSessionEnd((function(){return en(i,"video-session-visible")})),this.Pg=Z((function(){return new rn(i.qi.win,i)})),this.Ag=!1,this.Eg=!1,this.Tg=null,this.$=!1,this.Cg=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Sg.installAutoplayStyles(),this.Yg=Yt,this.zg=function(){gt(i.video,!1)},this.Ig=function(){i.video.pause()},xt(n.element,_t,(function(){return i.videoLoaded()})),xt(n.element,Wt,(function(){return i.Ug()})),xt(n.element,"play",(function(){i.Cg=!0,en(i,Dt)})),xt(n.element,It,(function(){return i._g()})),xt(n.element,Ut,(function(){return i.$=!0})),xt(n.element,Ft,(function(){i.$=!1,i.Sg.pauseOtherVideos(i)})),xt(n.element,"amp:video:tick",(function(t){var n=St(t),r=n.eventType;r&&i.Wg(r,n.vars)})),xt(n.element,Ct,(function(){i.Og=!1,en(i,"video-ended")})),xt(n.element,Nt,(function(){i.Og=!0,en(i,"video-ad-start")})),xt(n.element,Jt,(function(){i.Og=!1,en(i,"video-ad-end")})),n.signals().whenSignal(zt).then((function(){return i.Fg()})),this.Lg=Z((function(){var t="firstPlay",n=qt(i.qi.win,t,{}),r=i.video.element;ht(r).trigger(r,t,n,1)})),this.Bg()}var n=t.prototype;return n.dispose=function(){this.Pg().stop()},n.Wg=function(t,n){var i,r,e,o=(e=t,(r="__amp:eventType")in(i={})?Object.defineProperty(i,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[r]=e,i);Object.keys(n).forEach((function(t){o["custom_".concat(t)]=n[t]})),en(this,"video-hosted-custom",o)},n.Bg=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.xg=!1,t.Zn&&t.video.pause()}))},n.isMuted=function(){return this.$},n.isPlaybackManaged=function(){return this.xg},n.Fg=function(){this.Ng()&&this.Sg.registerForAutoFullscreen(this),this.hasAutoplay&&this.Dg()},n.Ng=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&X(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},n._g=function(){this.Zn=!0,this.getPlayingState()==Lt&&(this.Lg(),this.Sg.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=dt(t);if(n&&n.artwork){var r=n.artwork;Q(h(r)),r.forEach((function(t){if(t){var n=p(t)?t.src:t;X(i.isProtocolValid(n))}}))}}(u,this.Yg),t=this.qi.win,n=this.Yg,i=this.zg,r=this.Ig,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(Yt),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Rg.beginSession(),this.xe&&this.Mg.beginSession(),this.Cg||en(this,Dt)},n.Ug=function(){en(this,"video-pause"),this.Zn=!1,this.Eg?this.Eg=!1:this.Rg.endSession()},n.videoLoaded=function(){this.jg=!0,this.Tg=wt(this.video.element),this.Jg(),this.Pg().start(),this.xe&&this.Gg()},n.Jg=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Yg=m(this.video.getMetadata()));var t=this.qi.win.document;if(!this.Yg.artwork||0==this.Yg.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=w(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.Yg.artwork=[{"src":n}])}if(!this.Yg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Tg.getAttribute("title")||this.Tg.getAttribute("aria-label")||t.title;i&&(this.Yg.title=i)}}},n.Vg=function(){this.jg&&this.Gg()},n.Gg=function(){var t=this;this.qi.isVisible()&&bt(this.qi.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.Zg():t.$g()}))},n.Dg=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),bt(this.qi.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.Hg()):t.video.showControls()}))},n.Hg=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Vt)){var e=function(t,n){for(var i=Pt(n)(Rt),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return x(r),i}(0,r),o=[e],u=[xt(r,Wt,(function(){return f(!1)})),xt(r,It,(function(){return f(!0)})),xt(r,Nt,(function(){s(!1),n.showControls()})),xt(r,Jt,(function(){s(!0),n.hideControls()})),xt(r,Ft,(function(){return Zt(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=Pt(t)(Et);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.Yg);o.push(a),u.push(xt(a,"click",(function(){return Zt(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Og&&s(!1),n.signals().whenSignal(Vt).then((function(){t.Lg(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){x(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},n.Zg=function(){this.xg&&(this.xe?(this.Mg.beginSession(),gt(this.video,!0),this.Ag=!0):(this.Zn&&this.Mg.endSession(),this.video.pause(),this.Eg=!0))},n.$g=function(){this.xe?this.Mg.beginSession():this.Zn&&this.Mg.endSession()},n.updateVisibility=function(t){var n=this.xe;this.xe=t,t!=n&&this.Vg()},n.getPlayingState=function(){return this.Zn?this.Zn&&this.Ag&&!this.userInteracted()?"playing_auto":Lt:Bt},n.isRollingAd=function(){return this.Og},n.userInteracted=function(){return null!=this.video.signals().get(Vt)},n.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([bt(this.qi.win),yt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.$,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),Qt=function(){function t(t,n){var i=this;this.Sg=n,this.qi=t,this.Kg=null,this.Qg=null,this.cg=[],this.Xg=[],this.hw=function(){return i.dw()},this.pw=function(t){return i.mw(t)==Lt},this.yw=function(t,n){return i.bw(t,n)},this.gw(),this.ww()}var n=t.prototype;return n.dispose=function(){this.Xg.forEach((function(t){return t()})),this.Xg.length=0},n.register=function(t){var n=t.video,i=n.element;this.kw(i)&&(this.cg.push(n),xt(i,Wt,this.hw),xt(i,It,this.hw),xt(i,Ct,this.hw),n.signals().whenSignal(Vt).then(this.hw),this.dw())},n.ww=function(){var t=this,n=this.qi.getRootNode(),i=function(){return t.qw()};this.Xg.push(xt(n,"webkitfullscreenchange",i),xt(n,"mozfullscreenchange",i),xt(n,"fullscreenchange",i),xt(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.qi.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.kw=function(t){if("video"==wt(t).tagName.toLowerCase())return!0;var n=lt(this.qi.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.qw=function(){this.Kg=null},n.gw=function(){var t=this,n=this.qi.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.Xg.push(xt(r,"change",(function(){return t.Sw()})))}this.Xg.push(xt(n,"orientationchange",(function(){return t.Sw()})))},n.Sw=function(){this.isInLandscape()?null!=this.Qg&&this.xw(this.Qg):this.Kg&&this.jw(this.Kg)},n.xw=function(t){var n=lt(this.qi.win);this.Kg=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.Ow(t).then((function(){return t.fullscreenEnter()}))},n.jw=function(t){this.Kg=null,this.Ow(t,"center").then((function(){return t.fullscreenExit()}))},n.Ow=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Rw();return this.Mw().then((function(){return yt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return s();var f=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,f)}))},n.Rw=function(){return pt(this.qi)},n.Mw=function(){return vt(this.qi.win).promise(330)},n.dw=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.Qg);this.Qg=null;var n=this.cg.filter(this.pw).map((function(t){return yt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.yw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.Qg=n})):t.Qg}))},n.bw=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=pt(this.qi),a=Xt(u,i),s=Xt(u,e);return a<s||a>s?a-s:i.top-e.top},n.mw=function(t){return this.Sg.getPlayingState(t)},t}();function Xt(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function tn(t){return 10*t*5}var nn=function(t){return!!t&&!isNaN(t)&&t>1},rn=function(){function t(t,n){this.js=vt(t),this.Pw=n,this.Xg=null,this.Aw=0,this.Ew=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Pw.video.element;this.stop(),this.Xg=this.Xg||[],this.Tw()?this.Cw(this.Ew):this.Xg.push(function(n,i,r,e){var o=function(){t.Tw()&&t.Cw(t.Ew)},u=kt(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.Xg.push(xt(n,Ct,(function(){t.Tw()&&t.Yw(100)})))},n.stop=function(){if(this.Xg){for(;this.Xg.length>0;)this.Xg.pop()();this.Ew++}},n.Tw=function(){var t=this.Pw.video,n=t.getDuration();if(!nn(n))return!1;if(tn(n)<250){var i=Math.ceil(5);this.zw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.zw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];H().warn.apply(H(),[$t].concat(n))},n.Cw=function(t){var n,i=this;if(t==this.Ew){var r=this.Pw,e=this.js,o=r.video,u=function(){return i.Cw(t)};if(r.getPlayingState()!=Bt){var a=o.getDuration();if(nn(a)){var s=(n=tn(a),b(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);Q(y(c)),this.Yw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.Yw=function(t){t<=0||this.Aw!=t&&(this.Aw=t,this.Iw(t))},n.Iw=function(t){en(this.Pw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function en(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),O(r.element,n,t)}))}var on=["<iframe frameborder=0 allowfullscreen></iframe>"];function un(t,n){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=l(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(n))}new Set(["c","v","a","ad"]);var an="amp-powr-player",sn={"ready":_t,"playing":It,"pause":Wt,"ended":Ct,"ads-ad-started":Nt,"ads-ad-ended":Jt},fn=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(s,t);var r,o,a=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(r);if(o){var u=i(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return e(this,t)});function s(t){var n;return(n=a.call(this,t)).tb=null,n.zm=!1,n.$=!1,n.ik=!1,n.Xb=null,n.uw=null,n.eb=null,n.Wb=null,n.rk=null,n.Gt=new L(n.element),n}var c=s.prototype;return c.preconnectCallback=function(){var t;(t=this.win,tt(t,"preconnect")).url(this.getAmpDoc(),"https://player.powr.com")},c.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},c.buildCallback=function(){this.rk=it(this.element,"url-replace");var t=new f;this.Xb=t.promise,this.uw=t.resolve},c.layoutCallback=function(){var t,n,i,r=this,e=(this,t=this.ek(),i=Pt(n=this.element)(on),function(t,n,i,r){for(var e,o=u(l(["referrerpolicy"]),!0);!(e=o()).done;){var a=e.value,s=n.getAttribute(a);null!==s&&i.setAttribute(a,s)}}(0,this.element,i),i.src=dt(n).assertHttpsUrl(t,n),function(t,n){t.classList.add("i-amphtml-fill-content")}(i),n.appendChild(i),i);return this.tb=e,this.eb=xt(this.win,"message",(function(t){return r.Xw(t)})),this.Gt.updatePlaying(!0),this.loadPromise(e).then((function(){return r.Xb}))},c.aw=function(t,n){var i=this;this.Xb.then((function(){i.tb&&i.tb.contentWindow&&i.tb.contentWindow.postMessage(JSON.stringify({"command":t,"args":n}),"https://player.powr.com")}))},c.Xw=function(t){var n=this.element;if(t.source==this.tb.contentWindow){var i=St(t);if((r=i)&&(p(r)||r.startsWith("{"))){var r,e,o=p(e=i)?e:w(e);if(null!=o){var u,a=o.event;if(a&&("ready"===a&&this.uk(o),"playing"===a&&(this.zm=!0),"pause"===a&&(this.zm=!1),!function(t,n,i){if(null==i[n])return!1;var r=i[n];return(h(r)?r:[r]).forEach((function(n){O(t,n)})),!0}(n,a,sn)&&"volumechange"===a)){var s=o.muted;if(null==s||this.$==s)return;return this.$=s,void O(n,(u=this.$,u?Ut:Ft))}}}}},c.uk=function(t){this.ik=!0;var n,i,r,e,o=this.element;i="video-manager",r=Gt,function(t,n,i,r,e,o){var u=ut(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&ot(t,i))}(et(e=rt(o)),e,i,r),(n=o,nt(n,"video-manager")).register(this),this.uw(this.tb),($.dev||($.dev=G())).info(an,"Player %s ready. Powr Player version: %s IFrame Support version: %s",this.Wb,t.powrVersion,t.iframeVersion)},c.ek=function(){var t=this.element,n=X(t.getAttribute("data-account"),"The data-account attribute is required for <amp-powr-player> %s",t);this.Wb=X(t.getAttribute("data-player"),"The data-player attribute is required for <amp-powr-player> %s",t);var i=t.getAttribute("data-video"),r=t.getAttribute("data-terms");X(i||r,"The data-video or data-terms attribute is required for <amp-powr-player> %s",t);var e={"account":n,"player":this.Wb};i&&(e.video=i),r&&(e.terms=r);var o=un("https://player.powr.com/iframe.html",e),u=t.getAttribute("data-referrer");return u&&t.setAttribute("data-param-referrer",this.rk.expandUrlSync(u)),t.setAttribute("data-param-playsinline","true"),un(o,function(t,n,i){var r=t.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(t))},c.mutatedAttributesCallback=function(t){var n=t["data-account"],i=t["data-player"]||t["data-player-id"],r=t["data-video"];void 0===n&&void 0===i&&void 0===r||this.tb&&(this.tb.src=this.ek())},c.pauseCallback=function(){this.tb&&this.tb.contentWindow&&this.ik&&this.zm&&this.pause()},c.unlayoutOnPause=function(){return!this.ik},c.unlayoutCallback=function(){this.tb&&(x(this.tb),this.tb=null),this.eb&&this.eb();var t=new f;return this.Xb=t.promise,this.uw=t.resolve,this.Gt.updatePlaying(!1),!0},c.supportsPlatform=function(){return!0},c.isInteractive=function(){return!0},c.play=function(t){this.aw("play")},c.pause=function(){this.aw("pause")},c.mute=function(){this.aw("muted",!0)},c.unmute=function(){this.aw("muted",!1)},c.showControls=function(){this.aw("controls",!0)},c.hideControls=function(){this.aw("controls",!1)},c.fullscreenEnter=function(){var t,n;this.tb&&(n=(t=this.tb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)},c.fullscreenExit=function(){this.tb&&function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)},c.isFullscreen=function(){return!!this.tb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.tb)},c.preimplementsAutoFullscreen=function(){return!1},c.getMetadata=function(){},c.preimplementsMediaSessionAPI=function(){return!0},c.getCurrentTime=function(){return 0},c.getDuration=function(){return 1},c.getPlayedRanges=function(){return[]},c.seekTo=function(t){this.user().error(an,"`seekTo` not supported.")},s}(t.BaseElement);t.registerElement(an,fn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-powr-player-0.1.js.map