;
!function(r){var n=self.BENTO=self.BENTO||{};(n.bento=n.bento||[]).push((function(r){"use strict";function n(r,t){return(n=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r})(r,t)}function t(r){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function o(r,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function u(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}function i(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.push.apply(t,e)}return t}function a(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(r,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))}))}return r}function c(r,n,t,e,o,u,i){try{var a=r[u](i),c=a.value}catch(r){return void t(r)}a.done?n(c):Promise.resolve(c).then(e,o)}function f(r){return function(){var n=this,t=arguments;return new Promise((function(e,o){var u=r.apply(n,t);function i(r){c(u,e,o,i,a,"next",r)}function a(r){c(u,e,o,i,a,"throw",r)}i(void 0)}))}}function l(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function s(r,n){if(r){if("string"==typeof r)return l(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(r,n):void 0}}function v(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,o,u=[],i=!0,a=!1;try{for(t=t.call(r);!(i=(e=t.next()).done)&&(u.push(e.value),!n||u.length!==n);i=!0);}catch(r){a=!0,o=r}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(r,n)||s(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Array.isArray;var d=Object.prototype;function b(r){return(r.ownerDocument||r).defaultView}function m(r){return r.parent&&r.parent!=r}function p(r,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=t.needsRootBounds,o=t.rootMargin,u=t.threshold,i=m(n)&&(e||o)?n.document:void 0;return new n.IntersectionObserver(r,{threshold:u,root:i,rootMargin:o})}d.hasOwnProperty,d.toString;var y=new WeakMap,h=new WeakMap;function g(r){for(var n=new Set,t=r.length-1;t>=0;t--){var e=r[t],o=e.target;if(!n.has(o)){n.add(o);var u=h.get(o);if(u)for(var i=0;i<u.length;i++)(0,u[i])(e)}}}function w(r){return function(r){if(Array.isArray(r))return l(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||s(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j={loading:!1,error:null,pages:[],hasMore:!0};var M={fetchJson:function(r,n){return this.fetch(r,n).then((function(r){return r.json()}))},fetch:function(r,n){return f(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,self.fetch(r,n);case 2:if((e=t.sent).ok){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))()}},O={loadMoreSpinner:"load-more-spinner-cc33818",loadMoreIcon:"load-more-icon-cc33818"},k=("url('data:image/svg+xml;charset=utf-8,".concat('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><linearGradient id="grad"><stop stop-color="rgb(51,51,51)" stop-opacity=".75"></stop><stop offset="100%" stop-color="rgb(51,51,51)" stop-opacity="0"></stop></linearGradient></defs><path d="M11,4.4 A18,18, 0,1,0, 38,20" fill="none" stroke="url(%23grad)" stroke-width="1.725"></path></svg>',"')"),"url('data:image/svg+xml;charset=utf-8,".concat('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>',"')"),["src","fetchJson","itemsKey","maxItems","loadMore","loadMoreBookmark","viewportBuffer","template","wrapperTemplate","loadMoreTemplate","loadingTemplate","errorTemplate"]),S=function(n){return(0,r.createElement)("div",null,String(n))},x=function(n){return(0,r.createElement)("div",null,n)},R=function(n,t){return(0,r.createElement)("div",null,"Unable to Load More ",(0,r.createElement)("button",{"load-more-retry":!0},(0,r.createElement)("label",null,(0,r.createElement)("span",{class:n.loadMoreIcon})," Retry")))},A=function(){return(0,r.createElement)("div",null,(0,r.createElement)("button",{"load-more-button":!0},(0,r.createElement)("label",null,"See More")))},P=function(n){return(0,r.createElement)("div",null,(0,r.createElement)("span",{"aria-label":"Loading",class:n.loadMoreSpinner}))};function I(r,n){return n.split(".").reduce((function(r,n){return r&&""!==n?r[n]:r}),r)}var T=(0,r.forwardRef)((function(n,t){var o,u=n.src,i=void 0===u?null:u,c=n.fetchJson,l=void 0===c?M.fetchJson:c,s=n.itemsKey,d=void 0===s?"items":s,m=n.maxItems,T=void 0===m?0:m,E=n.loadMore,L=void 0===E?"none":E,C=n.loadMoreBookmark,G=void 0===C?"load-more-src":C,J=n.viewportBuffer,K=void 0===J?2:J,N=n.template,U=void 0===N?S:N,W=n.wrapperTemplate,z=void 0===W?x:W,D=n.loadMoreTemplate,H=void 0===D?A:D,V=n.loadingTemplate,$=void 0===V?P:V,q=n.errorTemplate,F=void 0===q?R:q,Q=function(r,n){if(null==r)return{};var t,e,o={},u=Object.keys(r);for(e=0;e<u.length;e++)t=u[e],n.indexOf(t)>=0||(o[t]=r[t]);return o}(n,k),X=(0,r.useAmpContext)().renderable,Y=(0,r.useMemo)((function(){var r=Math.floor(100*K);return{rootMargin:"0% 0% ".concat(r,"% 0%"),threshold:0}}),[K]),Z=(0,r.useRef)(null),_=function(n,t){var e=v((0,r.useState)(!1),2),o=e[0],u=e[1];return(0,r.useEffect)((function(){var r=n.current;if(r)return function(r,n,t){var e=b(r);if(t){var o=p((function(r){n(r[r.length-1])}),e,t);return o.observe(r),function(){o.unobserve(r)}}var u=y.get(e);u||y.set(e,u=p(g,e));var i=h.get(r);return i||(i=[],h.set(r,i)),i.push(n),u.observe(r),function(){!function(r,n){var t,e,o,u=h.get(r);if(u&&(e=n,-1!=(o=(t=u).indexOf(e))&&(t.splice(o,1),1)&&!u.length)){var i=b(r),a=y.get(i);null==a||a.unobserve(r),h.delete(r)}}(r,n)}}(r,(function(r){u(r.isIntersecting)}),t)}),[n,t]),o}(Z,Y),rr=function(n){var t=n.fetchPage,e=n.getNextPageParam,o=function(n){var t=(0,r.useRef)(!1);(0,r.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]);var e=v((0,r.useState)(n),2),o=e[0],u=e[1];return[o,(0,r.useCallback)((function(r){t.current&&u(r)}),[u])]}(j),u=v(o,2),i=u[0],c=u[1],l=(0,r.useValueRef)({fetchPage:t,getNextPageParam:e,state:i}),s=(0,r.useRef)(0),d=(0,r.useCallback)(f(regeneratorRuntime.mark((function r(){var n,t,e,o,u,i,f,v,d,b,m=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=m.length>0&&void 0!==m[0]&&m[0],t=l.current,e=t.fetchPage,o=t.getNextPageParam,u=t.state,n||!u.loading){r.next=4;break}return r.abrupt("return");case 4:return i=++s.current,c((function(r){return a(a({},r),{},{loading:!0})})),f=n?[]:u.pages,v=f.length?f[f.length-1]:void 0,r.prev=8,r.next=11,e({pageParam:v?o(v):void 0});case 11:if(d=r.sent,i===s.current){r.next=14;break}return r.abrupt("return");case 14:b=o(d),c({loading:!1,error:null,pages:[].concat(w(f),[d]),hasMore:null!=b}),r.next=23;break;case 18:if(r.prev=18,r.t0=r.catch(8),i===s.current){r.next=22;break}return r.abrupt("return");case 22:c((function(n){return a(a({},n),{},{loading:!1,error:r.t0})}));case 23:case"end":return r.stop()}}),r,null,[[8,18]])}))),[l,c]),b=(0,r.useCallback)((function(){return d(!0)}),[d]);return a(a({},i),{},{loadMore:d,reset:b})}({fetchPage:(o=f(regeneratorRuntime.mark((function r(n){var t,e,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=n.pageParam,e=void 0===t?i:t,X){r.next=3;break}return r.abrupt("return",null);case 3:return r.next=5,l(e);case 5:return o=r.sent,r.abrupt("return",o);case 7:case"end":return r.stop()}}),r)}))),function(r){return o.apply(this,arguments)}),getNextPageParam:function(r){return function(r,n){return I(r,n)}(r,G)}}),nr=rr.error,tr=rr.hasMore,er=rr.loadMore,or=rr.loading,ur=rr.pages,ir=rr.reset;(0,r.useEffect)((function(){ir()}),[i,X,G,ir]);var ar=X&&"auto"===L&&_&&!or&&tr;(0,r.useEffect)((function(){ar&&er()}),[ar,er]);var cr=(0,r.useMemo)((function(){var n=ur.flatMap((function(r){return function(r,n){if(!r)return[];var t=I(r,n);return t?(Array.isArray(t)||(t=[t]),t):[]}(r,d)}));return T>0&&n.length>T&&(n=n.slice(0,T)),n.map((function(n,t){var o=U(n);return o&&"object"===e(o)&&"string"==typeof o.__html&&(o=(0,r.createElement)("span",{dangerouslySetInnerHTML:o})),B(o,{"key":t,"role":"listitem"})}))}),[ur,d,T,U]),fr=or,lr=0!==cr.length,sr="manual"===L&&tr&&!or;(0,r.useImperativeHandle)(t,(function(){return{refresh:ir}}),[ir]);var vr=O;return(0,r.createElement)(r.ContainWrapper,a(a({"aria-live":"polite"},Q),{},{onClick:function(r){r.target.closest("[load-more-button], [load-more-retry]")&&er()}}),(0,r.createElement)(r.Fragment,{"test-id":"contents"},lr&&B(z(cr),{"role":"list"}),fr&&$(vr),sr&&H(vr),nr&&F(vr,nr),"auto"===L&&(0,r.createElement)("span",{ref:Z})))}));function B(n,t){return(0,r.isValidElement)(n)?(0,r.cloneElement)(n,a(a({},t),n.props)):n}T.displayName="List";var E=function(r){!function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&n(r,t)}(a,r);var e,u,i=(e=a,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,n=t(e);if(u){var i=t(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return o(this,r)});function a(){return i.apply(this,arguments)}return a}(r.PreactBaseElement);E.Component=T,E.props={"src":{attr:"src"},"itemsKey":{attr:"items"},"maxItems":{attr:"max-items",type:"number"},"loadMore":{attr:"load-more"},"loadMoreBookmark":{attr:"load-more-bookmark"},"viewportBuffer":{attr:"viewport-buffer",type:"number"}},E.layoutSizeDefined=!0,E.usesShadowDom=!0,E.usesTemplate=!0,(0,r.defineBentoElement)("bento-list",E,undefined)}))}();
//# sourceMappingURL=bento-list-1.0.js.map