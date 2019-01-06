!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pandora",[],t):"object"==typeof exports?exports.pandora=t():e.pandora=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=n(3);Object.defineProperty(t,"pandora",{enumerable:!0,get:function(){return r(i).default}})},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.log=function(t){return function(n){return e&&"production"!==e.env.NODE_ENV&&(console.groupCollapsed(t+" / INITIAL STATE"),console.log("+ state",n.getState()),console.groupEnd(),n.subscribe(function(e,n){var r=n.action,o=n.payload,i=JSON.parse(JSON.stringify(e));console.groupCollapsed(t+" / ACTION => "+r),console.log("+ payload",o),console.log("+ state",i),console.groupEnd()})),n}}}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){g&&p&&(g=!1,p.length?h=p.concat(h):m=-1,h.length&&c())}function c(){if(!g){var e=o(u);g=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,g=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var p,h=[],g=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new a(e,t)),1!==h.length||g||o(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.model,n=void 0===t?{}:t,r=e.actions,o=void 0===r?{}:r,i=e.middlewares,u=void 0===i?[]:i,c=e.autostart,a=void 0===c||c,s=e.callback,f=[],l=[],d=JSON.parse(JSON.stringify(n)),p=function(e){o=e},h=function(e){e(d),l.forEach(function(e){return e(d,{haschanged:!0})})},g=function(){return Object.assign({},d)},m=function(){return o},y=function(e){e&&(e.call?l.push(e):l.push(function(t,n){n.action in e&&e[n.action](t,n)}))},v=function(e,t){return new Promise(function(n){f.push({action:e,payload:t}),1==f.length&&(requestAnimationFrame||setTimeout)(function(){for(;f.length;)b(f[0].action,f[0].payload,n)})})},b=function(e,t,n){var r=!1;if(e in o){var i=Object.assign({},d),u=o[e](i,t,T);u&&(d=Object.assign(d,u),r=!0)}if(f.shift(),!f.length){var c={action:e,payload:t,haschanged:r};l.forEach(function(e){return e(d,c)}),n(d,c)}},T={set:h,getState:g,dispatch:v,subscribe:y,getActions:m,setActions:p};return s&&(y(function(e,t){return t.haschanged?s(e,t):null}),a?s(d):null),u.forEach(function(e){return e(T)}),T}}])});