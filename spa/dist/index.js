!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("spa",[],e):"object"==typeof exports?exports.spa=e():t.spa=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Router=void 0;var o=n(2),i=r(o),a=n(4),s=r(a),u=e.Router=s.default;e.default=function(t){var e=t.options,n=t.initialize,r=t.routes,o=t.callback,a={},s=function(){return null},c=new u(e),p=n||s,l=document.querySelector("[data-outlet]");p(c);var h=function(t){c.get(t,function(e,n,s){var u=r[t](e.params,{req:e,res:n,next:s}),c="[data-component*="+u.component+"]",p=document.querySelector(c),h=u.component;if(p)a[h]=l.querySelector(c);else if(a[h])l.innerHTML="",l.appendChild(a[h]);else{var f=u.css,y=u.js,d=u.templateUrl;(0,i.default)({css:f,js:y,html:d}).then(function(t){var e=t.html,n=t.js,r=t.css;l.innerHTML=e,a[h]=l.querySelector(c),o?o(l,{html:e,js:n,css:r}):null})}})};for(var f in r)h(f)}},,function(t,e,n){var r,o,i;(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a,s){"object"==n(e)&&"object"==n(t)?t.exports=s():(o=[],r=s,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i)))}(void 0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=function(t){var e=t.html,a=t.css,s=t.js,u=[];return a&&u.push(i(a)),s&&u.push(o(s)),e&&u.push(r(e)),Promise.all(u).then(function(t){var e=n(t,3),r=e[0],o=e[1],i=e[2];return{html:i,css:r,js:o}})};var r=function(t){return new Promise(function(e,n){if(t){var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&(200==r.status?e(r.responseText):n(r))},r.open("get",t),r.send(null)}})},o=function(t){return new Promise(function(e,n){var r=document.createElement("script");r.onload=function(){return e(r)},r.src=t,document.head.appendChild(r)})},i=function(t){return new Promise(function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,document.head.appendChild(r),e(r)})}}])})}).call(e,n(3)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){(function(n){!function(r){function o(t){"use strict";var e=this;return this.events={},this.state=null,this.options=t||{},this.options.env=this.options.env||(0===Object.keys(r).length&&n&&n.browser!==!0?"server":"client"),this.options.mode=this.options.mode||("server"!==this.options.env&&this.options.pushState&&r.history&&r.history.pushState?"pushState":"hashchange"),this.version="0.6.4","function"==typeof r.addEventListener&&(r.addEventListener("hashchange",function(){e.trigger("hashchange")}),r.addEventListener("popstate",function(t){return(!e.state||null!==e.state.previousState)&&void e.trigger("navigate")})),this}function i(t,e){this.stack=i.global.slice(0),this.router=t,this.runCallback=!0,this.callbackRan=!1,this.propagateEvent=!0,this.value=t.path();for(var n in e)this[n]=e[n];return this}function a(t){this.route=t,this.keys=[],this.regex=o.regexRoute(t,this.keys)}o.regexRoute=function(t,e,n,r){return t instanceof RegExp?t:(t instanceof Array&&(t="("+t.join("|")+")"),t=t.concat(r?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(t,n,r,o,i,a){return e.push({name:o,optional:!!a}),n=n||"",""+(a?"":n)+"(?:"+(a?n:"")+(r||"")+(i||r&&"([^/.]+?)"||"([^/]+?)")+")"+(a||"")}).replace(/([\/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),new RegExp("^"+t+"$",n?"":"i"))},o._forEach=function(t,e){return"function"==typeof Array.prototype.forEach?Array.prototype.forEach.call(t,e):function(t,e){for(var n=0,r=this.length;n<r;++n)t.call(e,this[n],n,this)}.call(t,e)},o.prototype.get=o.prototype.add=function(t){var e=this,n=Array.prototype.slice.call(arguments,1,-1),r=Array.prototype.slice.call(arguments,-1)[0],o=new a(t),s=function(){var a=o.parse(e.path());if(a.match){var s={route:t,params:a.params,req:a,regex:a.match},u=new i(e,s).enqueue(n.concat(r));if(e.trigger("match",u,a),!u.runCallback)return e;if(u.previousState=e.state,e.state=u,u.parent()&&u.parent().propagateEvent===!1)return u.propagateEvent=!1,e;u.callback()}return e},u="pushState"!==e.options.mode&&"server"!==e.options.env?"hashchange":"navigate";return s().on(u,s)},o.prototype.trigger=function(t){var e=this,n=Array.prototype.slice.call(arguments,1);return this.events[t]&&o._forEach(this.events[t],function(t){t.apply(e,n)}),this},o.prototype.on=o.prototype.bind=function(t,e){var n=this,r=t.split(" ");return o._forEach(r,function(t){n.events[t]?n.events[t].push(e):n.events[t]=[e]}),this},o.prototype.once=function(t,e){var n=!1;return this.on(t,function(){return!n&&(n=!0,e.apply(this,arguments),e=null,!0)})},o.prototype.context=function(t){var e=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=arguments[0],o=arguments.length>2?Array.prototype.slice.call(arguments,1,-1):[],i=Array.prototype.slice.call(arguments,-1)[0],a="/"!==t.slice(-1)&&"/"!==r&&""!==r?t+"/":t,s="/"!==r.substr(0,1)?r:r.substr(1),u=a+s;return e.add.apply(e,[u].concat(n).concat(o).concat([i]))}},o.prototype.navigate=function(t){return this.path(t).trigger("navigate")},o.prototype.path=function(t){var e,n=this;return"string"==typeof t?("pushState"===n.options.mode?(e=n.options.root?n.options.root+t:t,r.history.pushState({},null,e)):r.location?r.location.hash=(n.options.hashBang?"!":"")+t:r._pathname=t||"",this):"undefined"==typeof t?e="pushState"===n.options.mode?r.location.pathname.replace(n.options.root,""):"pushState"!==n.options.mode&&r.location?r.location.hash?r.location.hash.split(n.options.hashBang?"#!":"#")[1]:"":r._pathname||"":t===!1?("pushState"===n.options.mode?r.history.pushState({},null,n.options.root||"/"):r.location&&(r.location.hash=n.options.hashBang?"!":""),n):void 0},o.listen=function(){var t,e;return arguments[0]&&arguments[1]?(t=arguments[0],e=arguments[1]):e=arguments[0],function(){for(var t in e)this.add.call(this,t,e[t]);return this}.call(new o(t||{}))},i.global=[],i.prototype.preventDefault=function(){this.runCallback=!1},i.prototype.stopPropagation=function(){this.propagateEvent=!1},i.prototype.parent=function(){var t=!(!this.previousState||!this.previousState.value||this.previousState.value!=this.value);return!!t&&this.previousState},i.prototype.callback=function(){this.callbackRan=!0,this.timeStamp=Date.now(),this.next()},i.prototype.enqueue=function(t,e){for(var n=Array.isArray(t)?e<t.length?t.reverse():t:[t];n.length;)this.stack.splice(e||this.stack.length+1,0,n.shift());return this},i.prototype.next=function(){var t=this;return this.stack.shift().call(this.router,this.req,this,function(){t.next.call(t)})},a.prototype.parse=function(t){var e=t.match(this.regex),n=this,r={params:{},keys:this.keys,matches:(e||[]).slice(1),match:e};return o._forEach(r.matches,function(t,e){var o=n.keys[e]&&n.keys[e].name?n.keys[e].name:e;r.params[o]=t?decodeURIComponent(t):void 0}),r},o.CallStack=i,o.Request=a,"function"!=typeof r.define||r.define.amd.grapnel?"object"==typeof t&&"object"==typeof t.exports?t.exports=e=o:r.Grapnel=o:r.define(function(t,e,n){return r.define.amd.grapnel=!0,o})}.call({},"object"==typeof window?window:this)}).call(e,n(5))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){d&&f&&(d=!1,f.length?y=f.concat(y):v=-1,y.length&&s())}function s(){if(!d){var t=o(a);d=!0;for(var e=y.length;e;){for(f=y,y=[];++v<e;)f&&f[v].run();v=-1,e=y.length}f=null,d=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var p,l,h=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(t){p=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var f,y=[],d=!1,v=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];y.push(new u(t,e)),1!==y.length||d||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.prependListener=c,h.prependOnceListener=c,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}}])});