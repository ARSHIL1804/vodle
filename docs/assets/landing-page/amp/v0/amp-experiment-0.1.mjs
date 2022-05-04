;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-experiment",ev:"0.1",l:!0,f:function(n,t){(()=>{var{hasOwnProperty:t,toString:e}=Object.prototype;function r(n,e){return t.call(n,e)}var o=self.AMP_CONFIG||{},i=("string"==typeof o.thirdPartyFrameRegex?new RegExp(o.thirdPartyFrameRegex):o.thirdPartyFrameRegex,("string"==typeof o.cdnProxyRegex?new RegExp(o.cdnProxyRegex):o.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function s(n){if(!self.document||!self.document.head)return null;if(self.location&&i.test(self.location.origin))return null;const t=self.document.head.querySelector(`meta[name="${n}"]`);return t&&t.getAttribute("content")||null}o.thirdPartyUrl,o.thirdPartyFrameHost,o.cdnUrl||s("runtime-host"),o.errorReportingUrl,o.betaErrorReportingUrl,o.localDev,o.geoApiUrl||s("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u,c=self.__AMP_LOG;function l(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function a(n,t,e,r,o,i,s,u,c,l,a){return n}function f(n,t,e,r,o,i,s,u,a,f,p){return(c.user||(c.user=l()),void c.user.win?c.userForEmbed||(c.userForEmbed=l()):c.user).assert(n,t,e,r,o,i,s,u,a,f,p)}var p=class{constructor(){this.promise=new Promise(((n,t)=>{this.resolve=n,this.reject=t}))}};function h(n,t){return b(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function d(n,t){return function(n,t){const e=P(n,t);if(e)return e;const r=w(n);return r[t]=function(){const n=new p,{promise:t,reject:e,resolve:r}=n;return t.catch((()=>{})),{obj:null,promise:t,resolve:r,reject:e,context:null,ctor:null}}(),r[t].promise}(g(n),t)}function m(n,t){return P(g(n),t)}function v(n){return n.nodeType?(t=n,e=(t.ownerDocument||t).defaultView,h(e,"ampdoc")).getAmpDoc(n):n;var t,e}function g(n){const t=v(n);return t.isSingleDoc()?t.win:t}function b(n,t){a(function(n,t){const e=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!e||!e.ctor)}(n,t));const e=w(n)[t];return e.obj||(a(e.ctor),a(e.context),e.obj=new e.ctor(e.context),a(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function P(n,t){const e=w(n)[t];return e?e.promise?e.promise:(b(n,t),e.promise=Promise.resolve(e.obj)):null}function w(n){let t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}function x(n,t,e,r){return function(n,t,e,r){const o=m(n,t);if(o)return o;const i=v(n);return i.whenExtensionsKnown().then((()=>{const n=i.getExtensionVersion(e);return n?h(i.win,"extensions").waitForExtension(e,n):null})).then((e=>e?r?m(n,t):d(n,t):null))}(n,t,e,r).then((n=>function(n,t,e){return f(n,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",t,e,e,e)}(n,t,e)))}var y=/^[\w-]+$/;function j(n){f(y.test(n),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",n)}var A=class extends n.BaseElement{static prerenderAllowed(){return!0}isLayoutSupported(n){return"nodisplay"==n||"container"==n}isBuildRenderBlocking(){return!0}buildCallback(){return d(this.getAmpDoc(),"variant").then((n=>{try{const t=this.$b(),o=Object.create(null),i=Object.keys(t).map((n=>function(n,t,o){j(t),function(n){const t=n.variants;var o;f((o=t,"[object Object]"===e.call(o)&&Object.keys(t).length>0),"Missing experiment variants config."),n.group&&j(n.group);let i=0;for(const n in t)if(r(t,n)){j(n);const e=t[n];f("number"==typeof e&&e>0&&e<100,"Invalid percentage %s:%s. Has to be greater than 0 and less than 100",n,e),i+=e}f(i.toFixed(6)<=100,"Total percentage is bigger than 100: "+i)}(o);const i=n.getParam("amp-x-"+t);if(i&&r(o.variants,i))return Promise.resolve(i);const s=!1!==o.sticky,c=o.cidScope||"amp-experiment";let l=Promise.resolve(!0);if(s&&o.consentNotificationId){l=(n=>x(n,"userNotificationManager","amp-user-notification"))(n.getHeadNode()).then((n=>n.getNotification(o.consentNotificationId))).then((n=>(f(n,`Notification not found: ${o.consentNotificationId}`),n.isDismissed())))}return l.then((e=>{if(!e)return null;const r=o.group||t;return function(n,t,e){if(!e)return Promise.resolve(100*n.win.Math.random());const r=(o=n,d(o,"cid")).then((n=>n.get({scope:e,createCookieIfNotPresent:!0},u||(u=Promise.resolve(void 0)))));var o,i;return Promise.all([r,(i=n.win,h(i,"crypto"))]).then((n=>n[1].uniform(t+":"+n[0]))).then((n=>100*n))}(n,r,s?c:null).then((n=>{let t=0;const e=Object.keys(o.variants).sort();for(let r=0;r<e.length;r++)if(t+=o.variants[e[r]],n<t)return e[r];return null}))}))}(this.getAmpDoc(),n,t[n]).then((t=>{o[n]=t})))),s=Promise.all(i).then((()=>o)).then(this.s9.bind(this));n.init(s)}catch(t){throw n.init({}),t}}))}$b(){const{children:n}=this.element;return f(1==n.length&&"SCRIPT"==n[0].tagName&&"APPLICATION/JSON"==n[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.'),a((t=n[0].textContent,JSON.parse(t)));var t}s9(n){return this.getAmpDoc().waitForBodyOpen().then((t=>{for(const e in n)n[e]&&t.setAttribute("amp-x-"+e,n[e]);return n}))}};n.registerServiceForDoc("variant",class{constructor(n){this.ampdoc=n,this.qx=new p}init(n){this.qx.resolve(n)}getVariants(){return this.qx.promise}whenReady(){return this.getVariants()}}),n.registerElement("amp-experiment",A)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-experiment-0.1.mjs.map