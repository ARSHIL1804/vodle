;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-reach-player",ev:"0.1",l:!0,f:function(t,e){(()=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var{hasOwnProperty:r,toString:i}=Object.prototype;function o(t){const e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;const{message:n,stack:r}=t,i=new Error(n);for(const e in t)i[e]=t[e];return i.stack=r,i}function s(t){let e=null,r="";for(var i,s=n(arguments,!0);!(i=s()).done;){const t=i.value;t instanceof Error&&!e?e=o(t):(r&&(r+=" "),r+=t)}return e?r&&(e.message=r+": "+e.message):e=new Error(r),e}function l(t){var e,n;null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t)}function c(t,...e){try{return t.apply(null,e)}catch(t){!function(t){const e=s.apply(null,arguments);setTimeout((()=>{throw l(e),e}))}(t)}}var a={"getPropertyPriority":()=>"","getPropertyValue":()=>""};var u=/vertical/,f=new WeakMap,h=new WeakMap,p=new WeakMap;function m(t){let e=f.get(t);return e||(e=new t.ResizeObserver(d),f.set(t,e)),e}function d(t){const e=new Set;for(let n=t.length-1;n>=0;n--){const r=t[n],{target:i}=r;if(e.has(i))continue;e.add(i);const o=h.get(i);if(o){p.set(i,r);for(let t=0;t<o.length;t++){const{callback:e,type:n}=o[t];y(n,e,r)}}}}function y(t,e,n){if(0==t){const{contentRect:t}=n,{height:r,width:i}=t;c(e,{width:i,height:r})}else if(1==t){const{borderBoxSize:t}=n;let i;if(t)i=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,e=((r=t).ownerDocument||r).defaultView,o=u.test(function(t,e){return t.getComputedStyle(e)||a}(e,t).writingMode),{offsetHeight:s,offsetWidth:l}=t;let c,f;o?(f=l,c=s):(c=l,f=s),i={inlineSize:c,blockSize:f}}c(e,i)}var r}var b=self.AMP_CONFIG||{},v=("string"==typeof b.thirdPartyFrameRegex?new RegExp(b.thirdPartyFrameRegex):b.thirdPartyFrameRegex,("string"==typeof b.cdnProxyRegex?new RegExp(b.cdnProxyRegex):b.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function g(t){if(!self.document||!self.document.head)return null;if(self.location&&v.test(self.location.origin))return null;const e=self.document.head.querySelector(`meta[name="${t}"]`);return e&&e.getAttribute("content")||null}function w(t,e,n,r,i,o,s,l,c,a,u){return t}function S(t,e){return function(t,e){w(function(t,e){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}(t,e));const n=function(t){let e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return n.obj||(w(n.ctor),w(n.context),n.obj=new n.ctor(n.context),w(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}b.thirdPartyUrl,b.thirdPartyFrameHost,b.cdnUrl||g("runtime-host"),b.errorReportingUrl,b.betaErrorReportingUrl,b.localDev,b.geoApiUrl||g("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var k=class extends t.BaseElement{constructor(t){super(t),this.Mv=null,this.pf=new class{constructor(t){this.yf=t,this.mf=!1,this.bf=!1,this._f=this._f.bind(this)}updatePlaying(t){t!==this.mf&&(this.mf=t,t?(this.bf=!1,function(t,e){!function(t,e,n){const r=t.ownerDocument.defaultView;if(!r)return;let i=h.get(t);if(i||(i=[],h.set(t,i),m(r).observe(t)),!i.some((t=>t.callback===n&&1===t.type))){i.push({type:1,callback:n});const e=p.get(t);e&&setTimeout((()=>y(1,n,e)))}}(t,0,e)}(this.yf,this._f)):function(t,e){!function(t,e,n){const r=h.get(t);if(r&&(function(t,e){const r=[];let i=0;for(let e=0;e<t.length;e++){const s=t[e];(o=s).callback===n&&1===o.type?r.push(s):(i<e&&(t[i]=s),i++)}var o;i<t.length&&(t.length=i)}(r),0==r.length)){h.delete(t),p.delete(t);const e=t.ownerDocument.defaultView;e&&m(e).unobserve(t)}}(t,0,e)}(this.yf,this._f))}_f({blockSize:t,inlineSize:e}){const n=e>0&&t>0;if(n===this.bf)return;this.bf=n;const r=this.yf;n||r.pause()}}(this.element)}preconnectCallback(t){var e;(e=this.win,S(e,"preconnect")).url(this.getAmpDoc(),"https://player-cdn.beachfrontmedia.com",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){this.element.classList.add("i-amphtml-media-component")}layoutCallback(){const t=this.element.getAttribute("data-embed-id")||"default",e=this.element.ownerDocument.createElement("iframe");return e.setAttribute("frameborder","no"),e.setAttribute("scrolling","no"),e.setAttribute("allowfullscreen","true"),e.src="https://player-cdn.beachfrontmedia.com/playerapi/v1/frame/player/?embed_id="+encodeURIComponent(t),e.classList.add("i-amphtml-fill-content"),this.element.appendChild(e),this.Mv=e,this.pf.updatePlaying(!0),this.loadPromise(e)}unlayoutCallback(){const t=this.Mv;return t&&(this.element.removeChild(t),this.Mv=null),this.pf.updatePlaying(!1),!0}pauseCallback(){this.Mv&&this.Mv.contentWindow&&this.Mv.contentWindow.postMessage("pause","https://player-cdn.beachfrontmedia.com")}};t.registerElement("amp-reach-player",k)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-reach-player-0.1.mjs.map