;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-mathml",ev:"0.1",l:!0,f:function(r,n){!function(){function n(r,t){return(n=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r})(r,t)}function t(r){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function o(r,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}var i=Array.isArray;function u(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function a(r,n){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,n){if(r){if("string"==typeof r)return u(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(r,n):void 0}}(r))||n&&r&&"number"==typeof r.length){t&&(r=t);var e=0;return function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,l=Object.prototype;function c(r){var n=Object.create(null);return r&&Object.assign(n,r),n}function s(r,n,t,e,o,i,u,a,f,l,c){return r}function v(r){return JSON.parse(r)}function m(r,n){try{return v(r)}catch(r){return null==n||n(r),null}}function p(r){var n,t=parseFloat(r);return"number"==typeof(n=t)&&isFinite(n)?t:void 0}function h(r){var n=Object.getOwnPropertyDescriptor(r,"message");if(null!=n&&n.writable)return r;var t=r.message,e=r.stack,o=new Error(t);for(var i in r)o[i]=r[i];return o.stack=e,o}function d(r){for(var n,t=null,e="",o=a(arguments,!0);!(n=o()).done;){var i=n.value;i instanceof Error&&!t?t=h(i):(e&&(e+=" "),e+=i)}return t?e&&(t.message=e+": "+t.message):t=new Error(e),t}function b(r){var n,t;null===(n=(t=self).__AMP_REPORT_ERROR)||void 0===n||n.call(t,r)}l.hasOwnProperty,l.toString;var g=["Webkit","webkit","Moz","moz","ms","O","o"];function y(r,n,t,e,o){var i=function(r,n,t){if(n.startsWith("--"))return n;f||(f=c());var e=f[n];if(!e||t){if(e=n,void 0===r[n]){var o=function(r){return r.charAt(0).toUpperCase()+r.slice(1)}(n),i=function(r,n){for(var t=0;t<g.length;t++){var e=g[t]+n;if(void 0!==r[e])return e}return""}(r,o);void 0!==r[i]&&(e=i)}t||(f[n]=e)}return e}(r.style,n,o);if(i){var u,a=e?t+e:t;r.style.setProperty((u=i.replace(/[A-Z]/g,(function(r){return"-"+r.toLowerCase()})),g.some((function(r){return u.startsWith(r+"-")}))?"-".concat(u):u),a)}}var w=self.AMP_CONFIG||{},j=("string"==typeof w.thirdPartyFrameRegex?new RegExp(w.thirdPartyFrameRegex):w.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,O=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function S(r){if(!self.document||!self.document.head)return null;if(self.location&&O.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(r,'"]'));return n&&n.getAttribute("content")||null}var E={thirdParty:w.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:w.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:j,cdn:w.cdnUrl||S("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:O,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:w.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:w.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:w.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:w.geoApiUrl||S("amp-geo-api")},x=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function R(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(r)}catch(r){return n}}function A(r){var n,t=c();if(!r)return t;for(;n=x.exec(r);){var e=R(n[1],n[1]),o=n[2]?R(n[2].replace(/\+/g," "),n[2]):"";t[e]=o}return t}function I(r){var n=(r||self).location;return A(n.originalHash||n.hash)}var F="";function M(r){var n=r||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(r){return{localDev:!1,development:T(r,I(r)),esm:!1,test:!1,rtvVersion:P(r)}}(n)}function P(r){var n;return F||(F=(null===(n=r.AMP_CONFIG)||void 0===n?void 0:n.v)||"01".concat("2203281422000")),F}function T(r,n){var t=n||I(r);return["1","actions","amp","amp4ads","amp4email"].includes(t.development)||!!r.AMP_DEV_MODE}function N(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var k=self.__AMP_LOG;function L(r,n){throw new Error("failed to call initLogConstructor")}function U(r){return k.user||(k.user=$()),function(r,n){return n&&n.ownerDocument.defaultView!=r}(k.user.win,r)?k.userForEmbed||(k.userForEmbed=$()):k.user}function $(r){return L()}function _(){return k.dev||(k.dev=L())}function z(r,n,t,e,o,i,u,a,f,l,c){return r}function D(r,n,t,e,o,i,u,a,f,l,c){return U().assert(r,n,t,e,o,i,u,a,f,l,c)}function V(r,n){return C(r=function(r){return r.__AMP_TOP||(r.__AMP_TOP=r)}(r),n)}function G(r,n){return C((t=J(r),(e=J(t)).isSingleDoc()?e.win:e),n);var t,e}function J(r){return r.nodeType?(t=r,n=(t.ownerDocument||t).defaultView,V(n,"ampdoc")).getAmpDoc(r):r;var n,t}function C(r,n){z(function(r,n){var t=r.__AMP_SERVICES&&r.__AMP_SERVICES[n];return!(!t||!t.ctor)}(r,n));var t=function(r){var n=r.__AMP_SERVICES;return n||(n=r.__AMP_SERVICES={}),n}(r)[n];return t.obj||(z(t.ctor),z(t.context),t.obj=new t.ctor(t.context),z(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}var H=function(){function r(){}return r.generate=function(r){return function(r){for(var n=r.length,t=5381,e=0;e<n;e++)t=33*t^r.charCodeAt(e);return String(t>>>0)}(function(r){for(var n=[],t=0;1==(null==(i=r)?void 0:i.nodeType)&&t<25;){var e="";r.id&&(e="/".concat(r.id));var o=r.nodeName.toLowerCase();n.push("".concat(o).concat(e).concat(q(r))),t++,r=r.parentElement}var i;return n.join()}(r))},r}();function q(r){for(var n=r.nodeName,t=0,e=0,o=r.previousElementSibling;o&&e<25&&t<100;)o.nodeName==n&&e++,t++,o=o.previousElementSibling;return e<25&&t<100?".".concat(e):""}function B(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.push.apply(t,e)}return t}function X(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){N(r,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))}))}return r}var Z="__AMP__EXPERIMENT_TOGGLES";function W(r){var n,t,e,o,u;if(r[Z])return r[Z];r[Z]=c();var f=r[Z];s(f);var l=X(X({},null!==(n=r.AMP_CONFIG)&&void 0!==n?n:{}),null!==(t=r.AMP_EXP)&&void 0!==t?t:v((null===(e=r.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var m in l){var p=l[m];"number"==typeof p&&p>=0&&p<=1&&(f[m]=Math.random()<p)}var h=null===(o=r.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(i(h)&&h.length){var d=r.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var b,g,y=a((null===(b=d.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(g=y()).done;){var w=g.value;h.includes(w)&&(f[w]=!0)}}Object.assign(f,function(r){var n,t="";try{var e;"localStorage"in r&&(t=null!==(e=r.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(r){_().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var o,i=(null===(n=t)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],u=c(),f=a(i,!0);!(o=f()).done;){var l=o.value;l&&("-"==l[0]?u[l.substr(1)]=!1:u[l]=!0)}return u}(r));var j=null===(u=r.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(i(j)&&j.length)for(var O,S=A(r.location.originalHash||r.location.hash),E=a(j,!0);!(O=E()).done;){var x=O.value,R=S["e-".concat(x)];"1"==R&&(f[x]=!0),"0"==R&&(f[x]=!1)}return f}var K,Q,Y=function(){function r(r){this.St=r,this.It=0,this.Ct=0,this.Ot=c()}var n=r.prototype;return n.has=function(r){return!!this.Ot[r]},n.get=function(r){var n=this.Ot[r];if(n)return n.access=++this.Ct,n.payload},n.put=function(r,n){this.has(r)||this.It++,this.Ot[r]={payload:n,access:this.Ct},this.Rt()},n.Rt=function(){if(!(this.It<=this.St)){var r,n=this.Ot,t=this.Ct+1;for(var e in n){var o=n[e].access;o<t&&(t=o,r=e)}void 0!==r&&(delete n[r],this.It--)}},r}();function rr(r,n){return K||(K=self.document.createElement("a"),Q=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Y(100))),function(r,n,t){if(t&&t.has(n))return t.get(n);r.href=n,r.protocol||(r.href=r.href);var e,o={href:r.href,protocol:r.protocol,host:r.host,hostname:r.hostname,port:"0"==r.port?"":r.port,pathname:r.pathname,search:r.search,hash:r.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),e=r.origin&&"null"!=r.origin?r.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=e;var i=o;return t&&t.put(n,i),i}(K,r,n?null:Q)}function nr(r){return"https:"==(r=function(r){return"string"==typeof r?rr(r):r}(r)).protocol||"localhost"==r.hostname||"127.0.0.1"==r.hostname||(t=".localhost",(e=(n=r.hostname).length-t.length)>=0&&n.indexOf(t,e)==e);var n,t,e}new Set(["c","v","a","ad"]);var tr={};function er(r,n,t,e){var o=t||n.getAttribute("type");D(o,"Attribute type required for <amp-ad>: %s",n);var i=function(r){for(var n=0,t=r;t&&t!=t.parent;t=t.parent)n++;return String(n)+"-"+ur(r)}(r),u={};return function(r,n){var t=r.dataset;for(var e in t)e.startsWith("vars")||(n[e]=t[e]);var o=r.getAttribute("json");if(o){var i=m(o);if(void 0===i)throw U().createError("Error parsing JSON in json attribute in element %s",r);for(var u in i)n[u]=i[u]}}(n,u),u=function(r,n,t,e){var o=Date.now(),i=n.getAttribute("width"),u=n.getAttribute("height");(e=e||{}).width=p(i),e.height=p(u),n.getAttribute("title")&&(e.title=n.getAttribute("title"));var a=r.location.href;"about:srcdoc"==a&&(a=r.parent.location.href);var f,l,c,s,v=J(n),m=G(n,"documentInfo").get(),h=(s=n,G(s,"viewer")).getUnconfirmedReferrerUrl(),d=function(r){for(var n=r.ownerDocument.body,t=0,e=0,o=r;o&&o!=n;o=o.offsetParent)t+=o.offsetLeft,e+=o.offsetTop;var i=r.offsetHeight;return function(r,n,t,e){return{left:r,top:n,width:t,height:e,bottom:n+e,right:r+t,x:r,y:n}}(t,e,r.offsetWidth,i)}(n);e._context={"ampcontextVersion":"2203281422000","ampcontextFilepath":"".concat(E.thirdParty,"/").concat("2203281422000","/ampcontext-v0.js"),"sourceUrl":m.sourceUrl,"referrer":h,"canonicalUrl":m.canonicalUrl,"pageViewId":m.pageViewId,"location":{"href":a},"startTime":o,"tagName":n.tagName,"mode":{localDev:!1,development:M(c).development,esm:M(c).esm,test:!1,rtvVersion:M(c).rtvVersion},"canary":(f=r,!(null===(l=f.AMP_CONFIG)||void 0===l||!l.canary)),"hidden":!v.isVisible(),"initialLayoutRect":d?{"left":d.left,"top":d.top,"width":d.width,"height":d.height}:null,"domFingerprint":H.generate(n),"experimentToggles":W(r),"sentinel":t};var b=n.getAttribute("src");return b&&(e.src=b),e}(r,n,i,u),u.type=o,Object.assign(u._context,e),u}function or(r){return"".concat(E.thirdParty,"/").concat("2203281422000","/vendor/").concat(r).concat(".js")}function ir(r,n,t){return function(r,n,t){var e=n.getMetaByName("amp-3p-iframe-src");if(!e)return null;var o=function(r,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return D(null!=r,"%s %s must be available",n,t),D(nr(r)||/^\/\//.test(r),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,t,r),r}(e,'meta[name="amp-3p-iframe-src"]');D(-1==o.indexOf("?"),"3p iframe url must not include query string %s in element %s.",o,e);var i=rr(o);return D("localhost"==i.hostname&&!t||i.origin!=rr(r.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",o,i.origin,e),"".concat(o,"?").concat("2203281422000")}(r,n,t)||function(r,n){return r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ur(r),"https://"+r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(E.thirdPartyFrameHost,"/").concat("2203281422000","/")+"".concat("frame",".html")}(r)}function ur(r){var n;if(r.crypto&&r.crypto.getRandomValues){var t=new Uint32Array(2);r.crypto.getRandomValues(t),n=String(t[0])+t[1]}else n=String(r.Math.random()).substr(2)+"0";return n}function ar(r){if(r.sandbox&&r.sandbox.supports){for(var n=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],t=0;t<n.length;t++){var e=n[t];if(!r.sandbox.supports(e))return void _().info("3p-frame","Iframe doesn't support %s",e)}r.sandbox=n.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}}function fr(r){return"string"==typeof r&&r.startsWith("amp-")&&-1!=r.indexOf("{")}function lr(r){return r.data}var cr="unlisten";function sr(r,n,t){var e=function(r,n){var t=r.listeningFors;return!t&&n&&(t=r.listeningFors=Object.create(null)),t||null}(r,t);if(!e)return e;var o=e[n];return!o&&t&&(o=e[n]=[]),o||null}function vr(r,n){for(var t=n;t&&t!=t.parent;t=t.parent)if(t==r)return!0;return!1}function mr(r){for(var n={"sentinel":cr},t=r.length-1;t>=0;t--){var e=r[t];if(!e.frame.contentWindow){r.splice(t,1);var o=e.events;for(var i in o)o[i].splice(0,1/0).forEach((function(r){r(n)}))}}}var pr=function(r){!function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&n(r,t)}(a,r);var e,i,u=(e=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,n=t(e);if(i){var u=t(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return o(this,r)});function a(r){var n;return(n=u.call(this,r)).tb=null,n}var f=a.prototype;return f.preconnectCallback=function(){var r;(r=this.win,V(r,"preconnect")).url(this.getAmpDoc(),"https://cdnjs.cloudflare.com")},f.buildCallback=function(){var r,n=this;this.element.hasAttribute("inline")&&(r="1px"),this.mutateElement((function(){!function(r,n){for(var t in n)y(r,t,n[t])}(n.element,{width:r,height:"1rem"})}))},f.layoutCallback=function(){var r=this,n=function(r,n,t,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.allowFullscreen,u=void 0!==i&&i,a=o.initialIntersection;z(void 0===n.isConnected||!0===n.isConnected);var f=er(r,n,t,e);a&&(f._context.initialIntersection=a);var l=r.document.createElement("iframe");tr[f.type]||(tr[f.type]=0),tr[f.type]+=1;var c=n.getAmpDoc(),s=ir(r,c),v=rr(s).hostname,m=JSON.stringify({"host":v,"bootstrap":or(f.type),"type":f.type,"count":tr[f.type],"attributes":f});return l.src=s,l.ampLocation=rr(s),l.name=m,f.width&&(l.width=f.width),f.height&&(l.height=f.height),f.title&&(l.title=f.title),u&&l.setAttribute("allowfullscreen","true"),l.setAttribute("scrolling","no"),y(l,"border","none"),l.onload=function(){this.readyState="complete"},l.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(t)||ar(l),l.setAttribute("data-amp-3p-sentinel",f._context.sentinel),l}(this.win,this.element,"mathml");return n.title=this.element.title||"MathML formula",n.classList.add("i-amphtml-fill-content"),function(r,n,t,e,o,i){z(r.src),z(!r.parentNode),z(t);var u=r.ownerDocument.defaultView;!function(r){r.listeningFors||r.addEventListener("message",(function(n){if(lr(n)){var t=function(r){return"string"==typeof r&&(r="{"==r.charAt(0)?m(r,(function(r){_().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",r)}))||null:fr(r)?function(r){if(!fr(r))return null;var n=r.indexOf("{");return s(-1!=n),m(r.substr(n),(function(n){!function(r){var n=d.apply(null,arguments);setTimeout((function(){throw b(n),n}))}(new Error("MESSAGING: Failed to parse message: ".concat(r,"\n").concat(n.message)))}))}(r):null),r}(lr(n));if(t&&t.sentinel){var e=function(r,n,t,e){var o,i=sr(r,n);if(!i)return i;for(var u=0;u<i.length;u++){var a=i[u],f=a.frame.contentWindow;if(f){if(e==f||vr(f,e)){o=a;break}}else setTimeout(mr,0,i)}return o?o.events:null}(r,t.sentinel,n.origin,n.source);if(e){var o=e[t.type];if(o){o=o.slice();for(var i=0;i<o.length;i++)(0,o[i])(t,n.source,n.origin,n)}}}}}))}(u);var a,f=function(r,n,t){for(var e,o=function(r,n){return r.getAttribute("data-amp-3p-sentinel")}(n),i=sr(r,o,!0),u=0;u<i.length;u++){var a=i[u];if(a.frame===n){e=a;break}}return e||(e={frame:n,events:Object.create(null)},i.push(e)),e.events}(u,r),l=rr(r.src).origin,c=f["embed-size"]||(f["embed-size"]=[]),v=function(n,e,o,i){if("amp"==n.sentinel){if(e!=r.contentWindow)return;if(l!=o)return}e==r.contentWindow&&(n.sentinel!=cr?t(n,e,o,i):a())};c.push(v),a=function(){if(v){var r=c.indexOf(v);r>-1&&c.splice(r,1),v=null,c=null,t=null}}}(n,0,(function(n){var t;r.element.hasAttribute("inline")||(n.width=void 0),(t=r.getAmpDoc(),G(t,"mutator")).forceChangeSize(r.element,n.height,n.width)})),this.element.appendChild(n),this.tb=n,this.loadPromise(n)},f.unlayoutCallback=function(){var r,n;return this.tb&&(null===(n=(r=this.tb).parentElement)||void 0===n||n.removeChild(r),this.tb=null),!0},f.isLayoutSupported=function(r){return"container"==r},a}(r.BaseElement);r.registerElement("amp-mathml",pr,"amp-mathml[inline]{display:inline-block;vertical-align:middle}\n/*# sourceURL=/extensions/amp-mathml/0.1/amp-mathml.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-mathml-0.1.js.map