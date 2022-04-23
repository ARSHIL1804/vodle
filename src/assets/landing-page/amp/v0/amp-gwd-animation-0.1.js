;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-gwd-animation",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i(n,t){return(i=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function e(n){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,i){if(i&&("object"===r(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return t(n)}Array.isArray;var u=Object.prototype,a=u.hasOwnProperty;function f(n,t){return a.call(n,t)}function s(n){return(n.ownerDocument||n).defaultView}u.toString;var c,l=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function h(n,t,i,e,r){return r||(t?"�":e?n.slice(0,-1)+"\\"+n.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+n)}function v(n,t){return n.replace(/^|,/g,"$&".concat(t," "))}function d(n){return String(n).replace(l,h)}var m=self.AMP_CONFIG||{},g=("string"==typeof m.thirdPartyFrameRegex?new RegExp(m.thirdPartyFrameRegex):m.thirdPartyFrameRegex,("string"==typeof m.cdnProxyRegex?new RegExp(m.cdnProxyRegex):m.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function p(n){if(!self.document||!self.document.head)return null;if(self.location&&g.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}m.thirdPartyUrl,m.thirdPartyFrameHost,m.cdnUrl||p("runtime-host"),m.errorReportingUrl,m.betaErrorReportingUrl,m.localDev,m.geoApiUrl||p("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function y(n){return w.user||(w.user=b()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(w.user.win,n)?w.userForEmbed||(w.userForEmbed=b()):w.user}function b(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function x(n,t,i,e,r,o,u,a,f,s,c){return n}function E(n,t,i,e,r,o,u,a,f,s,c){return y().assert(n,t,i,e,r,o,u,a,f,s,c)}function _(n,t){var i,e,r=(i=P(n),(e=P(i)).isSingleDoc()?e.win:e);return A(r,t)?j(r,t):null}function C(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}function P(n){return n.nodeType?(t=s(n),function(n,t){return j(n=C(n),"ampdoc")}(t)).getAmpDoc(n):n;var t}function j(n,t){x(A(n,t));var i=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return i.obj||(x(i.ctor),x(i.context),i.obj=new i.ctor(i.context),x(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function A(n,t){var i=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!i||!i.ctor)}var O=function(n){return _(n,"action")},R="gwd-page-wrapper",S="gwd-pause-animation",T="gwd-play-animation",N="data-gwd-label-animation",D="gwd.timelineEvent",G=["animationend","webkitAnimationEnd"],W="__AMP_GWD_GOTO_COUNTERS__",k="GWD",L=function(){function n(n){var t=this;this.qi=n,this.t=n.win,this.Yd=this.t.document,this.vnn=this.gnn.bind(this),n.whenReady().then((function(){var n=t.Yd.body;!function(n,t,i){if(t())i();else{var e=s(n);if(e.MutationObserver){var r=new e.MutationObserver((function(){t()&&(r.disconnect(),i())}));r.observe(n,{childList:!0})}else var o=e.setInterval((function(){t()&&(e.clearInterval(o),i())}),5)}}(n,(function(){return!!n.querySelector(".".concat(d(R)))}),t.Is.bind(t))}))}var t=n.prototype;return t.Is=function(){this.pnn(),this.setCurrentPage(0)},t.setEnabled=function(n){this.Yd.body.classList.toggle("i-amphtml-gwd-animation-disabled",!n)},t.setCurrentPage=function(n){var t=this.Yd.body.querySelectorAll(".".concat(d(R)));if(0!=t.length){var i=".".concat(d(R),".").concat(d(T)),e=function(n,t){if(void 0!==c?c:c=function(n){try{var t=n.ownerDocument,i=t.createElement("div"),e=t.createElement("div");return i.appendChild(e),i.querySelector(":scope div")===e}catch(n){return!1}}(n))return n.querySelector(v(t,":scope"));var i=function(n,t){var i=n.classList,e="i-amphtml-scoped";i.add(e);var r=v(t,".".concat(e)),o=n.querySelectorAll(r);return i.remove(e),o}(n,t)[0];return void 0===i?null:i}(this.Yd.body,i);e&&this.wnn(e);var r=t[n];r?this.ynn(r):y().error(k,"Could not find page with index "+n+".")}else y().warn(k,"Could not set current page. No pages were found in the document.")},t.ynn=function(n){n.classList.add(T)},t.wnn=function(n){var t,i=this;n.classList.remove(T),[n].concat((t=n.querySelectorAll("*"),t?Array.prototype.slice.call(t):[])).forEach((function(n){return i.bnn(n)}))},t.bnn=function(n){if(n.classList.remove(S),n.hasAttribute(N)){var t=n.getAttribute(N);n.classList.remove(t),n.removeAttribute(N)}delete n[W]},t.play=function(n){var t=this.getReceiver(n);t&&t.classList.remove(S)},t.pause=function(n){var t=this.getReceiver(n);t&&t.classList.add(S)},t.togglePlay=function(n){var t=this.getReceiver(n);t&&t.classList.toggle(S)},t.gotoAndPlay=function(n,t){var i=this.getReceiver(n);i&&this.xnn(i,t)},t.gotoAndPause=function(n,t){var i=this,e=this.getReceiver(n);e&&(this.xnn(e,t),this.t.setTimeout((function(){i.pause(n)}),40))},t.gotoAndPlayNTimes=function(n,t,i,e){if(i<=0)y().error(k,"Invalid maxCount parameter: ".concat(i));else if(e){var r=this.getReceiver(n);if(r){var o="".concat(e,"_").concat(t),u=function(n,t){return n[W]&&f(n[W],t)?n[W][t]:0}(r,o);u<i&&(this.xnn(r,t),function(n,t,i){n[W]||(n[W]={}),f(n[W],t)||(n[W][t]=0),n[W][t]=i}(r,o,u+1))}}else y().error(k,"Event name required but not specified.")},t.getReceiver=function(n){if("document.body"==n)return this.Yd.body;var t=this.Yd.getElementById(n);return t&&t.classList?t:(y().error(k,"Could not get receiver with id ".concat(n,".")),null)},t.xnn=function(n,t){n.classList.remove(S);var i,e,r=n.getAttribute(N);r&&(n.classList.remove(r),n.removeAttribute(N)),r==t&&(i=n,e="__AMP_GWD_TEMP",self[e]=i.offsetWidth,delete self[e]),n.classList.add(t),n.setAttribute(N,t)},t.gnn=function(n){var t=n.target.getAttribute("data-event-name");if(t){var i={"eventName":t,"sourceEvent":n},e=function(n,t,i,e){var r={detail:i};if(Object.assign(r,void 0),"function"==typeof n.CustomEvent)return new n.CustomEvent(t,r);var o=n.document.createEvent("CustomEvent");return o.initCustomEvent(t,!!r.bubbles,!!r.cancelable,i),o}(this.t,D,i);this.Yd.dispatchEvent(e)}},t.pnn=function(){for(var n=0;n<G.length;n++)this.Yd.body.addEventListener(G[n],this.vnn,!0)},t.Enn=function(){for(var n=0;n<G.length;n++)this.Yd.body.removeEventListener(G[n],this.vnn,!0)},t.dispose=function(){this.Enn()},n}();new Set(["c","v","a","ad"]);var M="amp-gwd-animation",$={"play":["args.id"],"pause":["args.id"],"togglePlay":["args.id"],"gotoAndPlay":["args.id","args.label"],"gotoAndPause":["args.id","args.label"],"gotoAndPlayNTimes":["args.id","args.label","args.N","event.detail.eventName"],"setCurrentPage":["args.index"]},z=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&i(n,t)}(f,n);var r,u,a=(r=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=e(r);if(u){var i=e(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return o(this,n)});function f(n){var i;return(i=a.call(this,n))._nn="",i.Cnn=null,i.Pnn=i.jnn.bind(t(i)),i}var s=f.prototype;return s.buildCallback=function(){this._nn=this.element.getAttribute("timeline-event-prefix")||"";var n=function(n,t){var i=(n.ownerDocument||n).defaultView,e=t||C(i);if(i&&i!=e&&C(i)==e)try{return i.frameElement}catch(n){}return null}(this.element,this.getAmpDoc().win);n&&(this.Cnn=n.__AMP_EMBED__),this.c9().addEventListener(D,this.Pnn,!0);var t=this.Ann();if(t){E(this.element.id,"The ".concat(M," element must have an id."));var i="".concat(this.element.id,".setCurrentPage(index=event.index)");!function(n,t,i,e){var r,o=t.getAttribute("on")||"",u="".concat("slideChange",":"),a=o.indexOf(u);if(-1!=a){var f=a+u.length;r=o.substr(0,f)+e+","+o.substr(f)}else(r=o)&&(r+=";"),r+="".concat(u).concat(e);O(n).setActions(t,r)}(this.element,t,0,i)}var e=this.K$.bind(this);for(var r in $)this.registerAction(r,e)},s.c9=function(){return this.Cnn?this.Cnn.win.document:this.getAmpDoc().getRootNode()},s.Ann=function(){return this.c9().getElementById("pagedeck")},s.K$=function(n){this.Onn(n)&&this.Rnn(n)},s.Onn=function(n){if("setCurrentPage"==n.method){var t=this.Ann();return t&&n.source==t}return!0},s.Rnn=function(n){var t=E(_(this.element,"gwd"),"Cannot execute action because the GWD service is not registered."),i=$[n.method].map((function(t){return function(n,t){for(var i=t.split("."),e=n,r=0;r<i.length;r++){var o=i[r];if(!o||!e||void 0===e[o]){e=void 0;break}e=e[o]}return e}(n,t)}));t[n.method].apply(t,i)},s.jnn=function(n){var t=O(this.element),i=function(n){return n.detail}(n).eventName,e="".concat(this._nn).concat(i);t.trigger(this.element,e,n,3)},s.detachedCallback=function(){return this.c9().removeEventListener(D,this.Pnn,!0),!0},f}(n.BaseElement);n.registerServiceForDoc("gwd",L),n.registerElement(M,z,".i-amphtml-gwd-animation-disabled [class*=-animation],.i-amphtml-gwd-animation-disabled [class*=gwdanimation]{animation:none!important}\n/*# sourceURL=/extensions/amp-gwd-animation/0.1/amp-gwd-animation.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-gwd-animation-0.1.js.map