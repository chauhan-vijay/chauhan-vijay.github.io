(function(e){function r(r){for(var t,c,i=r[0],u=r[1],l=r[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);f&&f(r);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(t=!1)}t&&(a.splice(r--,1),e=i(i.s=n[0]))}return e}var t={},o={app:0},a=[];function c(e){return i.p+"js/"+({"average-calculator":"average-calculator"}[e]||e)+"."+{"average-calculator":"6f7f8d0c"}[e]+".js"}function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var r=[],n=o[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise((function(r,t){n=o[e]=[r,t]}));r.push(n[2]=t);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;a=function(r){u.onerror=u.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",l.name="ChunkLoadError",l.type=t,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(r)},i.m=e,i.c=t,i.d=function(e,r,n){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)i.d(n,t,function(r){return e[r]}.bind(null,t));return n},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/average-calculator/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("cd49")},"7d8e":function(e,r,n){"use strict";n("a6bd")},a6bd:function(e,r,n){},cd49:function(e,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7a23"),o={className:"p-fluid p-grid p-justify-center"},a={className:"p-col-8 p-shadow-24"};function c(e,r){var n=Object(t["v"])("router-view");return Object(t["p"])(),Object(t["d"])("div",o,[Object(t["f"])("div",a,[Object(t["f"])(n)])])}n("7d8e");const i={};i.render=c;var u=i,l=n("9483");Object(l["a"])("".concat("/average-calculator/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var s=n("6c02"),f=[{path:"/",name:"AverageCalculator",component:function(){return n.e("average-calculator").then(n.bind(null,"7a59"))}}],d=Object(s["a"])({history:Object(s["b"])(),routes:f}),p=d,v=n("5502"),b=Object(v["a"])({state:{},mutations:{},actions:{},modules:{}}),g=n("9319"),h=n("3822"),m=(n("2d62"),n("e1ae"),n("4121"),n("bddf"),Object(t["c"])(u));m.use(b),m.use(p),m.use(g["a"]),m.component("InputNumber",h["a"]),m.mount("#app")}});
//# sourceMappingURL=app.aa73bf73.js.map