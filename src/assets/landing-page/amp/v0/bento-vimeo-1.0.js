;
!function(n){var t=self.BENTO=self.BENTO||{};(t.bento=t.bento||[]).push((function(n){"use strict";function t(n,e){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,e)}function e(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function a(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=r(n);if(t){var a=r(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return i(this,e)}}var u;function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n,t){if(n){if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,t):void 0}}function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],a=!0,u=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}}(n,t)||c(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}function d(n){var t=function(n,t){if("object"!==o(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t);if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n,"string");return"symbol"===o(t)?t:String(t)}function v(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function m(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){v(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var y="unload",b=(v(u={},"auto",0),v(u,"lazy",1),v(u,"eager",2),v(u,y,3),"loading"),g="complete";function h(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(e)return(e=e.call(n)).next.bind(e);if(Array.isArray(n)||(e=c(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var w=function(){var n=this;this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))},j=Array.isArray;var O=Object.prototype,k=(O.hasOwnProperty,O.toString);function S(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var e=n.message,r=n.stack,o=new Error(e);for(var i in n)o[i]=n[i];return o.stack=r,o}function q(n){for(var t,e=null,r="",o=h(arguments,!0);!(t=o()).done;){var i=t.value;i instanceof Error&&!e?e=S(i):(r&&(r+=" "),r+=i)}return e?r&&(e.message=r+": "+e.message):e=new Error(r),e}function x(n){var t,e;null===(t=(e=self).__AMP_REPORT_ERROR)||void 0===t||t.call(e,n)}function E(n){var t=q.apply(null,arguments);return t.expected=!0,t}function I(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}var R={bubbles:!0,cancelable:!0},P=self.AMP_CONFIG||{},A=("string"==typeof P.thirdPartyFrameRegex?new RegExp(P.thirdPartyFrameRegex):P.thirdPartyFrameRegex,("string"==typeof P.cdnProxyRegex?new RegExp(P.cdnProxyRegex):P.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function C(n){if(!self.document||!self.document.head)return null;if(self.location&&A.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}P.thirdPartyUrl,P.thirdPartyFrameHost,P.cdnUrl||C("runtime-host"),P.errorReportingUrl,P.betaErrorReportingUrl,P.localDev,P.geoApiUrl||C("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var T={"title":"","artist":"","album":"","artwork":[{"src":""}]};function N(n){var t=n.querySelector('script[type="application/ld+json"]');if(t){var e=I(t.textContent);if(e&&e.image)return"string"==typeof e.image?e.image:e.image["@list"]&&"string"==typeof e.image["@list"][0]?e.image["@list"][0]:"string"==typeof e.image.url?e.image.url:"string"==typeof e.image[0]?e.image[0]:void 0}}function M(n){var t=n.querySelector('link[rel="shortcut icon"]')||n.querySelector('link[rel="icon"]');return t?t.getAttribute("href"):void 0}function L(t){var e=t.displayIcon,r=t.displayOverlay,o=t.metadata,i=t.onOverlayClick,a=t.pause,u=t.play,l=t.playing,c=t.wrapperRef,f=(0,n.useAmpContext)().playable;return(0,n.useEffect)((function(){if(f){var n=new IntersectionObserver((function(n){n[n.length-1].isIntersecting?u().catch((function(){})):a()}),{threshold:.5});return n.observe(c.current),function(){n.disconnect()}}a()}),[c,u,a,f]),(0,n.createElement)(n.Fragment,null,e&&(0,n.createElement)("div",{class:"eq-9e7199f"+(l?" eq-playing-9e7199f":"")},(0,n.createElement)(F,null)),r&&(0,n.createElement)("button",{"aria-label":o&&o.title||"Unmute video",tabindex:"0",class:"autoplay-mask-button-9e7199f fill-content-overlay-fc551a7",onClick:i}))}var V,U,z,F=(V=!1,U=null,z=function(){return[1,2,3,4].map((function(t){return(0,n.createElement)("div",{class:"eq-col-9e7199f",key:t})}))},function(){if(!V){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];U=z.apply(self,t),V=!0,z=null}return U}),Y=(0,n.forwardRef)((function(t,e){var r,o="class",i=t.autoplay,a=void 0!==i&&i,u=t.component,l=void 0===u?"video":u,c=t.controls,v=void 0!==c&&c,p=t.loading,h=t.loop,j=void 0!==h&&h,O=t.mediasession,k=void 0===O||O,S=t.noaudio,q=void 0!==S&&S,I=t.onPlayingState,R=t.onReadyState,P=t.poster,A=t.sources,C=t.src,V=t.style,U=t[o],z=s(t,["autoplay","component","controls","loading","loop","mediasession","noaudio","onPlayingState","onReadyState","poster","sources","src","style",o].map(d));r=(0,n.useAmpContext)().notify,(0,n.useLayoutEffect)((function(){r&&r()}));var F=(0,n.useAmpContext)().playable,Y=(0,n.useLoading)(p),B=Y!==y,$=f((0,n.useState)(a),2),J=$[0],D=$[1],W=f((0,n.useState)(!1),2),Z=W[0],_=W[1],G=f((0,n.useState)(null),2),H=G[0],K=G[1],Q=f((0,n.useState)(!a),2),X=Q[0],nn=Q[1],tn=(0,n.useRef)(null),en=(0,n.useRef)(null),rn=(0,n.useMemo)((function(){return new w}),[]),on=(0,n.useRef)(b),an=(0,n.useValueRef)(R),un=(0,n.useCallback)((function(n,t){if(n!==on.current){on.current=n;var e=an.current;e&&e(n,t)}}),[an]),ln=(0,n.useValueRef)(I),cn=(0,n.useCallback)((function(n){_(n);var t=ln.current;t&&t(n)}),[ln]);(0,n.useLayoutEffect)((function(){B||cn(!1)}),[B,cn]);var fn=(0,n.useCallback)((function(){return rn.promise.then((function(){return n=en.current,e=function(){return n.play(!!t)},(r=new Promise((function(n){n(e())}))).catch((function(n){!function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];x(E.apply(null,e))}("TRYPLAY",n)})),r;var n,t,e,r}))}),[rn]),sn=(0,n.useCallback)((function(){rn.promise.then((function(){var n;return null===(n=en.current)||void 0===n?void 0:n.pause()}))}),[rn]),dn=(0,n.useCallback)((function(){return rn.promise.then((function(){return en.current.requestFullscreen()}))}),[rn]),vn=(0,n.useCallback)((function(){D(!1),nn(!0)}),[]);return(0,n.useLayoutEffect)((function(){var n,t=null===(n=en.current)||void 0===n?void 0:n.readyState;null!=t&&un(t>0?g:b)}),[un]),(0,n.useLayoutEffect)((function(){return k&&Z&&H&&function(n,t,e,r){var o=n.navigator;"mediaSession"in o&&n.MediaMetadata&&(o.mediaSession.metadata=new n.MediaMetadata(T),o.mediaSession.metadata=new n.MediaMetadata(t),o.mediaSession.setActionHandler("play",e),o.mediaSession.setActionHandler("pause",r))}(window,H,fn,sn),function(){}}),[k,Z,H,fn,sn]),(0,n.useEffect)((function(){F||sn()}),[F,sn]),(0,n.useImperativeHandle)(e,(function(){return{get readyState(){return on.current},play:fn,pause:sn,requestFullscreen:dn,get currentTime(){return en.current?en.current.currentTime:0},get duration(){return en.current?en.current.duration:NaN},get autoplay(){return a},get controls(){return v},get loop(){return j},userInteracted:vn,mute:function(){return D(!0)},unmute:function(){X&&D(!1)}}}),[fn,sn,dn,vn,X,a,v,j]),(0,n.createElement)(n.ContainWrapper,{contentRef:tn,class:U,style:V,size:!0,layout:!0,paint:!0},B&&(0,n.createElement)(l,m(m({},z),{},{ref:en,loading:Y,muted:J,loop:j,controls:v&&(!a||X),onCanPlay:function(){rn.resolve(),un(g)},onLoadedMetadata:function(){k&&rn.promise.then((function(){var n,t,e,r;K((n=en.current,m({"title":(t=z).title||t["aria-label"]||document.title,"artist":t.artist||"","album":t.album||"","artwork":[{"src":t.artwork||t.poster||N(document)||(e=document,r=e.querySelector('meta[property="og:image"]'),r?r.getAttribute("content"):void 0)||M(document)||""}]},n&&n.getMetadata?n.getMetadata():Object.create(null))))})),un(g)},onPlaying:function(){return cn(!0)},onPause:function(){return cn(!1)},onEnded:function(){return cn(!1)},onError:function(n){un("error",n),rn.reject(n)},class:"fill-stretch-fc551a7",src:C,poster:P}),A),a&&!X&&(0,n.createElement)(L,{metadata:H,playing:Z,displayIcon:!q&&J,wrapperRef:tn,play:fn,pause:sn,displayOverlay:v,onOverlayClick:vn}))}));Y.displayName="VideoWrapper";var B=function(n){e(r,n);var t=a(r);function r(){return t.apply(this,arguments)}return r}(n.PreactBaseElement);function $(n,t){var e;null==n||null===(e=n.contentWindow)||void 0===e||e.postMessage(t,"*")}B.Component=Y,B.loadable=!0,B.layoutSizeDefined=!0,B.staticProps,B.props={"album":{attr:"album"},"alt":{attr:"alt"},"artist":{attr:"artist"},"artwork":{attr:"artwork"},"attribution":{attr:"attribution"},"autoplay":{attr:"autoplay",type:"boolean"},"controls":{attr:"controls",type:"boolean"},"controlslist":{attr:"controlslist"},"crossorigin":{attr:"crossorigin"},"disableremoteplayback":{attr:"disableremoteplayback"},"loop":{attr:"loop",type:"boolean"},"noaudio":{attr:"noaudio",type:"boolean"},"poster":{attr:"poster"},"sources":{selector:"source",single:!1,clone:!0},"src":{attr:"src"},"title":{attr:"title"},"dock":{attr:"dock",media:!0},"rotate-to-fullscreen":{attr:"rotate-to-fullscreen",type:"boolean",media:!0}},B.shadowCss='.fill-stretch-fc551a7{width:100%;height:100%;position:relative}.fill-content-overlay-fc551a7{top:0;left:0;right:0;bottom:0;position:absolute}.autoplay-mask-button-9e7199f{width:100%;border:none;display:block;-webkit-appearance:none;appearance:none;background:transparent}.eq-9e7199f{right:7px;width:20px;bottom:7px;height:12px;display:-ms-flexbox;display:flex;opacity:0.8;z-index:1;overflow:hidden;position:absolute;-ms-flex-align:end;align-items:flex-end;pointer-events:none!important}.eq-playing-9e7199f>div:after,.eq-playing-9e7199f>div:before{animation-play-state:running}.eq-col-9e7199f{-ms-flex:1;flex:1;height:100%;position:relative;margin-right:1px}.eq-col-9e7199f:after,.eq-col-9e7199f:before{width:100%;height:100%;content:"";position:absolute;animation:keyframes-eq-animation-9e7199f 0s linear infinite alternate;will-change:transform;background-color:#fafafa;animation-play-state:paused}.eq-col-9e7199f:nth-child(4):before{animation-duration:0.4s}.eq-col-9e7199f:nth-child(4):after{animation-duration:0.25s}.eq-col-9e7199f:nth-child(3):before{animation-duration:0.3s}.eq-col-9e7199f:nth-child(3):after{animation-duration:0.35s}.eq-col-9e7199f:nth-child(2):before{animation-duration:0.5s}.eq-col-9e7199f:nth-child(2):after{animation-duration:0.4s}.eq-col-9e7199f:first-child:before{animation-duration:0.3s}.eq-col-9e7199f:first-child:after{animation-duration:0.45s}@keyframes keyframes-eq-animation-9e7199f{0%{transform:translateY(100%)}to{transform:translateY(0)}}',B.usesShadowDom=!0,new Set(["c","v","a","ad"]);var J=function(){return/^(https?:)?\/\/((player|www)\.)?vimeo.com(?=$|\/)/},D={"play":"playing","pause":"pause","ended":"ended","volumechange":null};function W(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return JSON.stringify({"method":n,"value":t})}var Z=["loading","unloadOnPause","sandbox","muted","controls","origin","onCanPlay","onMessage","playerStateRef","makeMethodMessage","makeFullscreenMessage","onIframeLoad"],_=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"].join(" ");function G(n,t,e){n&&n.contentWindow&&t.then((function(){n.contentWindow.postMessage(e(),"*")}))}var H=(0,n.forwardRef)((function(t,e){var r=t.loading,o=t.unloadOnPause,i=void 0!==o&&o,a=t.sandbox,u=void 0===a?_:a,l=t.muted,c=void 0!==l&&l,f=t.controls,d=void 0!==f&&f,v=t.origin,p=t.onCanPlay,y=t.onMessage,b=t.playerStateRef,g=t.makeMethodMessage,h=t.makeFullscreenMessage,j=t.onIframeLoad,O=s(t,Z),k=(0,n.useRef)(null),S=(0,n.useMemo)((function(){return new w}),[]),q=(0,n.useRef)(g),x=(0,n.useCallback)((function(n){G(null==k?void 0:k.current,S.promise,(function(){return q.current(n)}))}),[S.promise]),E=(0,n.useRef)(h),I=(0,n.useCallback)((function(){return G(null==k?void 0:k.current,S.promise,E.current)}),[S.promise]);(0,n.useImperativeHandle)(e,(function(){return{get currentTime(){var n,t;return null!==(n=null==b||null===(t=b.current)||void 0===t?void 0:t.currentTime)&&void 0!==n?n:NaN},get duration(){var n,t;return null!==(n=null==b||null===(t=b.current)||void 0===t?void 0:t.duration)&&void 0!==n?n:NaN},requestFullscreen:function(){if(!E.current)return S.promise.then((function(){k.current.requestFullscreen()}));I()},play:function(){return x("play")},pause:function(){if(i){var n=k.current;n&&(n.src=n.src)}else x("pause")}}}),[b,x,I,S.promise,i]);var R=function(t){var e=(0,n.useRef)(null);return e.current=t,e}(y);return(0,n.useLayoutEffect)((function(){if(k.current){var n=k.current.ownerDocument.defaultView;return n.addEventListener("message",t),function(){return n.removeEventListener("message",t)}}function t(n){R.current&&(v&&!v.test(n.origin)||n.source!=k.current.contentWindow||R.current({currentTarget:k.current,target:k.current,data:n.data}))}}),[v,R]),(0,n.useLayoutEffect)((function(){x(c?"mute":"unmute")}),[c,x]),(0,n.useLayoutEffect)((function(){x(d?"showControls":"hideControls")}),[d,x]),(0,n.createElement)("iframe",m(m({},O),{},{ref:k,allowfullscreen:!0,frameborder:"0",sandbox:u,loading:r,onCanPlay:function(){p&&S.promise.then(p),S.resolve()},onLoad:function(n){null==j||j(n)}}))}));H.displayName="VideoIframeInternal";var K=(0,n.forwardRef)((function(t,e){return(0,n.createElement)(Y,m(m({ref:e},t),{},{component:H}))}));K.displayName="VideoIframe";var Q=["autoplay","doNotTrack","onLoad","videoid"];function X(n,t){!function(n,t,e,r){n.ownerDocument;var o=n.ownerDocument.createEvent("Event");o.data={};var i={bubbles:!0,cancelable:!1}||R,a=i.bubbles,u=i.cancelable;o.initEvent(t,a,u),n.dispatchEvent(o)}(n,t)}function nn(n){return"mute"===n?W("setVolume","0"):"unmute"===n?W("setVolume","1"):W(n)}var tn=(0,n.forwardRef)((function(t,e){var r=t.autoplay,o=void 0!==r&&r,i=t.doNotTrack,a=void 0!==i&&i,u=t.onLoad,l=t.videoid,c=s(t,Q),f=(0,n.useMemo)(J,[]),d=(0,n.useMemo)((function(){return function(n,t,e){return function(n,t,e){if(!t)return n;var r=n.split("#",2),o=r[0].split("?",2);return o[0]+(o[1]?"?".concat(o[1],"&").concat(t):"?".concat(t))+(r[1]?"#".concat(r[1]):"")}("https://player.vimeo.com/video/".concat(encodeURIComponent(n)),function(n){var t,e,r,o=[];for(var i in n){var a=n[i];if(null!=a){a=j(r=a)?r:[r];for(var u=0;u<a.length;u++)o.push((t=i,e=a[u],"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e))))}}return o.join("&")}({"dnt":e?"1":void 0,"muted":t?"1":void 0}))}(l,o,a)}),[l,a,o]),v=(0,n.useRef)(null),p=(0,n.useValueRef)(u),y=(0,n.useCallback)((function(n){v.current!==n&&(v.current=n,X(n,"canplay"),function(n){Object.keys(D).forEach((function(t){$(n,W("addEventListener",t))}))}(n))}),[]),b=(0,n.useCallback)((function(n){var t,e,r=n.currentTarget,o=(t=n.data,e=t,"[object Object]"===k.call(e)?t:I(t));if(o){var i,a=o.event;if("ready"!=a&&"ping"!=o.method){if(D[a])return X(r,D[a]),void(null===(i=p.current)||void 0===i||i.call(p))}else y(r)}}),[y,p]),g=(0,n.useCallback)((function(n){$(n.currentTarget,W("ping"))}),[]);return(0,n.createElement)(K,m(m({ref:e},c),{},{origin:f,autoplay:o,src:d,onMessage:b,makeMethodMessage:nn,onIframeLoad:g,controls:!0}))}));tn.displayName="BentoVimeo";var en=function(n){e(r,n);var t=a(r);function r(){return t.apply(this,arguments)}return r}(B);en.Component=tn,en.props={"autoplay":{attr:"autoplay",type:"boolean"},"controls":{attr:"controls",type:"boolean"},"videoid":{attr:"data-videoid"},"doNotTrack":{attr:"do-not-track"},"loading":{attr:"data-loading"}},en.layoutSizeDefined=!0,en.usesShadowDom=!0,en.loadable=!0,(0,n.defineBentoElement)("bento-vimeo",en,undefined)}))}();
//# sourceMappingURL=bento-vimeo-1.0.js.map