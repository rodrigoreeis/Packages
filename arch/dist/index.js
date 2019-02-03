!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("arch",[],t):"object"==typeof exports?exports.arch=t():e.arch=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.soda=void 0;var o=n(1),i=r(o),a=n(3),u=r(a);t.soda=a.soda,t.default=function(e){var t=(0,u.default)(e);return function(e){var n=t(e);return n.arch=function(e){var t=e.model,r=e.actions,o=void 0===r?{}:r,a=e.store,u=e.beforeUpdate,c=(0,i.default)(Object.assign({},t));if(c.actions(o.call?o(c):o),c.subscribe(function(e){var t=Object.assign({},e);n.reactor(u?u(t):t)}),c.set(function(e){for(var n in t)n in e||(e[n]=t[n])}),a){var l=c.dispatch;c.dispatch=function(e,t){l(e,t),a.dispatch(e,t)}}return c},n}}},function(e,t,n){var r,o,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,u){"object"==n(t)&&"object"==n(e)?e.exports=u():(o=[],r=u,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n(),r="__update__",o=JSON.parse(JSON.stringify(e));return{get:function(){return o},set:function(e){e(o),t.publish(r,{state:o})},actions:function(e){var n=function(n){t.subscribe(n,function(t){o=Object.assign(o,e[n](o,t))})};for(var r in e)n(r)},dispatch:function(e,n){t.publish(e,n),t.publish(r,{state:o,action:e,payload:n})},subscribe:function(e){return e.call?t.subscribe(r,function(t){var n=t.state,r=t.action,o=t.payload;return e(n,{action:r,payload:o})}):void t.subscribe(r,function(t){var n=t.state,r=t.action,o=t.payload;r in e&&e[r](n,{action:r,payload:o})})}}};var n=function(e,t){return e={},t={},{publish:function(n,r){n in e?e[n].forEach(function(e){return e(r)}):t[n]=r},subscribe:function(n,r){return e[n]=e[n]||[],e[n].push(r),n in t&&e[n].forEach(function(e){return e(t[n])}),function(){e[n]=e[n].filter(function(e){return e==r})}}}}}])})}).call(t,n(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){var r,o,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,u){"object"==n(t)&&"object"==n(e)?e.exports=u():(o=[],r=u,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e){(requestAnimationFrame||setTimeout)(e)}function i(e){return JSON.parse(JSON.stringify(e))}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,t=document.createElement("div"),n=Array.prototype.slice.call(e.querySelectorAll("[data-component]"));n.forEach(function(e,t){return e.setAttribute(d,f++)}),t.innerHTML=e.innerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,"");var r=Array.prototype.slice.call(t.querySelectorAll("[data-component]")),o=r.filter(function(e){return!e.getAttribute(d)});o.forEach(function(e){return e.setAttribute(d,f++)}),r.forEach(function(e){var t=+e.getAttribute(d);p[t]||(p[t]=e.outerHTML)})}Object.defineProperty(t,"__esModule",{value:!0}),t.soda=t.morphdom=void 0;var u=n(1),c=r(u),l=n(2),s=r(l);t.morphdom=c.default,t.soda=s.default;var f=0,d="data-reactor-id",p={},v={},m={};s.default.prefix("v-"),t.default=function(e){return a(),function(e){if(e.elm==document.body)e.reactor=function(e){return console.warn("Reactor can`t be used on document.body")};else{var t=+e.elm.getAttribute(d),n=p[t],r=e.elm;e.reactor=function(o){if(!o)return i(m);Object.assign(m,o);var u=Object.assign({},i(m),o),l={hascomponent:!1};r=(0,c.default)(r,(0,s.default)(n,u),a(r,l)),l.hascomponent&&(e.jails.observer||e.jails.start(r),e.elm.getAttribute(d)||(e.elm.setAttribute(d,f++),p[f]=r.outerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,""))),l.hascomponent=!1,v[t]=u}}var a=function(t,n){return{getNodeKey:function(e){var t=e.getAttribute&&e.getAttribute(d);if(t)return+t},onBeforeElChildrenUpdated:function(t,n){if(t.getAttribute&&t.getAttribute("data-static")&&t!=e.elm)return!1},onNodeAdded:function(e){e.getAttribute&&e.getAttribute("data-component")&&!e.j&&(n.hascomponent=!0)},onNodeDiscarded:function(t){t.getAttribute&&t.getAttribute("data-component")&&t.j&&e.jails.destroy(t)},onBeforeNodeAdded:function(e){if(e.getAttribute){var t=e.getAttribute("data-animation-before-enter");if(t){var n=e.getAttribute("data-animation-enter");e.classList.add(t),o(function(){e.classList.add(n),o(function(){e.classList.remove(t),e.classList.remove(n)})})}}},onBeforeNodeDiscarded:function(e){if(e.getAttribute){var t=e.getAttribute("data-animation-leave");if(t){e.classList.add(t);var n=function t(){e.removeEventListener(h,t),e.removeEventListener(y,t),e.parentNode?e.parentNode.removeChild(e):null};return e.addEventListener(h,n),e.addEventListener(y,n),e.classList.add(t),!1}}}}};return e.reactor.templates=p,e.reactor.model=v,e.reactor.REACTORID=d,e.reactor.SST=m,e.reactor.lifecycle={},e}};var b=function(e){for(var t in e)if(t in document.body.style)return e[t]},y=b({animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}),h=b({transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"})},function(e,t){function n(e){!f&&v.createRange&&(f=v.createRange(),f.selectNode(v.body));var t;return f&&f.createContextualFragment?t=f.createContextualFragment(e):(t=v.createElement("body"),t.innerHTML=e),t.childNodes[0]}function r(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function o(e,t){return t&&t!==p?v.createElementNS(t,e):v.createElement(e)}function i(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function a(e,t){var n,r,o,i,a,u,c=t.attributes;for(n=c.length-1;n>=0;--n)r=c[n],o=r.name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,u=e.getAttributeNS(i,o),u!==a&&e.setAttributeNS(i,o,a)):(u=e.getAttribute(o),u!==a&&e.setAttribute(o,a));for(c=e.attributes,n=c.length-1;n>=0;--n)r=c[n],r.specified!==!1&&(o=r.name,i=r.namespaceURI,i?(o=r.localName||o,b(t,i,o)||e.removeAttributeNS(i,o)):b(t,null,o)||e.removeAttribute(o))}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}function c(){}function l(e){return e.id}function s(e){return function(t,a,u){function s(e){E?E.push(e):E=[e]}function f(e,t){if(e.nodeType===h)for(var n=e.firstChild;n;){var r=void 0;t&&(r=N(n))?s(r):(C(n),n.firstChild&&f(n,t)),n=n.nextSibling}}function d(e,t,n){R(e)!==!1&&(t&&t.removeChild(e),C(e),f(e,n))}function p(e){if(e.nodeType===h)for(var t=e.firstChild;t;){var n=N(t);n&&(k[n]=t),p(t),t=t.nextSibling}}function m(e){T(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=N(t);if(o){var i=k[o];i&&r(t,i)&&(t.parentNode.replaceChild(i,t),b(i,t))}m(t),t=n}}function b(n,o,i){var u,c=N(o);if(c&&delete k[c],!a.isSameNode||!a.isSameNode(t)){if(!i){if(S(n,o)===!1)return;if(e(n,o),O(n),M(n,o)===!1)return}if("TEXTAREA"!==n.nodeName){var l,f,p,x,E=o.firstChild,T=n.firstChild;e:for(;E;){for(p=E.nextSibling,l=N(E);T;){if(f=T.nextSibling,E.isSameNode&&E.isSameNode(T)){E=p,T=f;continue e}u=N(T);var R=T.nodeType,C=void 0;if(R===E.nodeType&&(R===h?(l?l!==u&&((x=k[l])?T.nextSibling===x?C=!1:(n.insertBefore(x,T),f=T.nextSibling,u?s(u):d(T,n,!0),T=x):C=!1):u&&(C=!1),C=C!==!1&&r(T,E),C&&b(T,E)):R!==g&&R!=_||(C=!0,T.nodeValue!==E.nodeValue&&(T.nodeValue=E.nodeValue))),C){E=p,T=f;continue e}u?s(u):d(T,n,!0),T=f}if(l&&(x=k[l])&&r(x,E))n.appendChild(x),b(x,E);else{var j=A(E);j!==!1&&(j&&(E=j),E.actualize&&(E=E.actualize(n.ownerDocument||v)),n.appendChild(E),m(E))}E=p,T=f}for(;T;)f=T.nextSibling,(u=N(T))?s(u):d(T,n,!0),T=f}var G=y[n.nodeName];G&&G(n,o)}}if(u||(u={}),"string"==typeof a)if("#document"===t.nodeName||"HTML"===t.nodeName){var x=a;a=v.createElement("html"),a.innerHTML=x}else a=n(a);var E,N=u.getNodeKey||l,A=u.onBeforeNodeAdded||c,T=u.onNodeAdded||c,S=u.onBeforeElUpdated||c,O=u.onElUpdated||c,R=u.onBeforeNodeDiscarded||c,C=u.onNodeDiscarded||c,M=u.onBeforeElChildrenUpdated||c,j=u.childrenOnly===!0,k={};p(t);var G=t,L=G.nodeType,w=a.nodeType;if(!j)if(L===h)w===h?r(t,a)||(C(t),G=i(t,o(a.nodeName,a.namespaceURI))):G=a;else if(L===g||L===_){if(w===L)return G.nodeValue!==a.nodeValue&&(G.nodeValue=a.nodeValue),G;G=a}if(G===a)C(t);else if(b(G,a,j),E)for(var P=0,V=E.length;P<V;P++){var $=k[E[P]];$&&d($,$.parentNode,!1)}return!j&&G!==t&&t.parentNode&&(G.actualize&&(G=G.actualize(t.ownerDocument||v)),t.parentNode.replaceChild(G,t)),G}}var f,d,p="http://www.w3.org/1999/xhtml",v="undefined"==typeof document?void 0:document,m=v?v.body||v.createElement("div"):{};d=m.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:m.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};var b=d,y={OPTION:function(e,t){u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),b(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!b(t,null,"multiple")){for(var n=-1,r=0,o=t.firstChild;o;){var i=o.nodeName;if(i&&"OPTION"===i.toUpperCase()){if(b(o,null,"selected")){n=r;break}r++}o=o.nextSibling}e.selectedIndex=r}}},h=1,g=3,_=8,x=s(a);e.exports=x},function(e,t,r){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":n(e)},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=r(1),c=r(2),l="undefined"!=typeof document?document:{},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";o(this,e),this._prefix=t}return a(e,[{key:"setDocument",value:function(e){l=e}},{key:"run",value:function(e,t){var n=this,r=l.createElement("div");l.documentMode<9&&(r.style.display="none",l.body.appendChild(r)),r.innerHTML=e,(0,c.nodes2Arr)(r.childNodes).map(function(e){n.compileNode(e,t)});var o=r.innerHTML;return l.documentMode<9&&l.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map(function(e){var r=t._prefix+e.name;n[r]=e}),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var r=this,o=this._getPrefixReg(),a=e.sodaDirectives,s=this._getPrefixedDirectiveMap(),f=function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(u.VALUE_OUT_REG,function(e,t){var o=r.parseSodaExpression(t,n);return"object"===("undefined"==typeof o?"undefined":i(o))&&(o=JSON.stringify(o,null,2)),o})),t.attributes&&t.attributes.length&&(a.map(function(e){var o=e.name,i=e.opt,a=r._prefix+o;if((0,c.exist)(t.getAttribute(a))){var u=t.getAttribute(a);i.link.bind(r)({expression:u,scope:n,el:t,parseSodaExpression:r.parseSodaExpression.bind(r),getValue:r.getValue.bind(r),compileNode:r.compileNode.bind(r),document:l}),r._removeSodaMark(t,a)}}),(0,c.nodes2Arr)(t.attributes).filter(function(e){return!s[e.name]}).map(function(e){if(o.test(e.name)){var i=e.name.replace(o,"");if(i&&(0,c.exist)(e.value)){var a=r.parseComplexExpression(e.value,n);a!==!1&&(0,c.exist)(a)&&t.setAttribute(i,a),r._removeSodaMark(t,e.name)}}else(0,c.exist)(e.value)&&(e.value=r.parseComplexExpression(e.value,n))})),(0,c.nodes2Arr)(t.childNodes).map(function(t){e(t,n)})};f(t,n)}},{key:"getEvalFunc",value:function(t){var n=new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap);return n}},{key:"getValue",value:function(e,t){if(u.CONST_REGG.lastIndex=0,t.replace(u.CONST_REGG,function(t){return"undefined"==typeof e[t]?t:e[t]}),"true"===t)return!0;if("false"===t)return!1;var n=function t(n,r){var o=r.indexOf(".");if(o>-1){var i=r.substr(0,o);return r=r.substr(o+1),"undefined"!=typeof e[i]&&u.CONST_REG.test(i)&&(i=e[i]),"undefined"!=typeof n[i]&&null!==n[i]?t(n[i],r):""}r=r.trim(),"undefined"!=typeof e[r]&&u.CONST_REG.test(r)&&(r=e[r]);var a;return a="undefined"!=typeof n[r]?n[r]:""};return n(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=u.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(u.VALUE_OUT_REG,function(e,r){return n.parseSodaExpression(r,t)})}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=e.replace(u.STRING_REG,function(e,n,r){var o=(0,c.getRandom)();return t[o]=n||r,o}),e=e.replace(u.OR_REG,u.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(u.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",i=e.slice(1);u.ATTR_REG_NG.test(o);)u.ATTR_REG.lastIndex=0,o=o.replace(u.ATTR_REG,function(e,r){var o=(0,c.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o});return o=o.replace(u.OBJECT_REG,function(e){return"getValue(scope,'"+e.trim()+"')"}),o=this.parseFilter(i,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap,o=function e(){var o=t.shift();if(o){for(var o=o.split(":"),i=o.slice(1)||[],a=(o[0]||"").trim(),c=0;c<i.length;c++)u.OBJECT_REG_NG.test(i[c])&&(i[c]="getValue(scope,'"+i[c]+"')");r[a]&&(i.unshift(n),i=i.join(","),n="sodaFilterMap['"+a+"']("+i+")"),e()}};return o(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o],a=i.opt.priority,u=void 0===a?0:a;if(r<u);else if(r>=u)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o,a=void 0;return a="function"==typeof r?r.apply(null,t):r,{template:a,option:i}}}]),e}();s.sodaDirectives=[],s.sodaFilterMap={},s.template={},t.default=s},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!==e&&void 0!==e&&""!==e&&"undefined"!=typeof e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)};t.assign=Object.assign||function(e,t){for(var n,r,c=u(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){r=o(n);for(var f=0;f<r.length;f++)a.call(n,r[f])&&(c[r[f]]=n[r[f]])}}return c}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o),a=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var u=new i.default,c=function(e,t){return u.run(e,t)},l={prefix:function(e){u.prefix(e)},filter:function(e,t){i.default.filter(e,t)},directive:function(e,t){i.default.directive(e,t)},setDocument:function(e){u.setDocument(e)},discribe:function(e,t,n){i.default.discribe(e,t,n)},Soda:i.default},s=(0,a.assign)(c,l);e.exports=s},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,u=e.expression,c=e.getValue,l=(e.parseSodaExpression,e.compileNode),s=/\s+by\s+([^\s]+)$/,f=u.replace(s,function(e,t){return t&&(r=(t||"").trim()),""}),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/,p=d.exec(f);if(p){if(p[1]&&p[2]){if(t=(p[1]||"").trim(),n=(p[2]||"").trim(),!t||!n)return}else p[3]&&p[4]&&p[5]&&(r=(p[3]||"").trim(),t=(p[4]||"").trim(),n=(p[5]||"").trim());r=r||"$index";var v=c(i,n)||[],m=function(e){var n=a.cloneNode(!0),u=Object.create(i);u[r]=e,u[t]=v[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),l(n,u)};if("length"in v)for(var b=0;b<v.length;b++)m(b);else for(var b in v)v.hasOwnProperty(b)&&m(b);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el,i=n(t,r);i||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o),a=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")},u=function(e,t){return e.className?void(e.className.match(a(t))||(e.className+=" "+t)):void(e.className=t)};i.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=o(r,t);i&&u(n,i)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=e.parseSodaExpression,i=o(t,n);i&&(r.innerHTML=i)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var u=i.createElement("div");if(u.innerHTML=a,n.parentNode)for(;u.childNodes[0];)n.parentNode.insertBefore(u.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=o(r,t),a=function(e,t){var n=/opacity|z-index/;return n.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(i){var u=[];for(var c in i)if(i.hasOwnProperty(c)){var l=a(c,i[c]);u.push([c,l].join(":"))}for(var s=n.style,c=0;c<s.length;c++){var f=s[c];i[f]||u.push([f,s[f]].join(":"))}var d=u.join(";");n.setAttribute("style",d)}}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,o=e.expression,a=/\{\{([^\}]*)\}\}/g,u=o.replace(a,function(e,n){return r(n,t)});u=u.split(":");var c=u[0],l=u.slice(1),s=i.default.getTmpl(c,l),f=s.template,d=s.option,p=void 0===d?{}:d;f&&(p.compile?n.outerHTML=this.run(f,t):n.outerHTML=f)}})}])})}])})}).call(t,n(2)(e))}])});