!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("linkq",[],r):"object"==typeof exports?exports.linkq=r():e.linkq=r()}(this,function(){return function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{previous:null};return r=r.value&&r.value.apply?r.value():r,{isroot:!t.previous,get:function(o){return o.value&&o.value.apply?e(r[o.value()],{previous:e(r,t)}):e(void 0==r[o]?{error:"property "+o+" not found",node:r}:r[o],{previous:e(r,t)})},select:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(function(e,r){return e.get(r)},this)},prev:function(){return t.previous&&t.previous.prev?t.previous.isroot?e(t.previous.value()):e(t.previous.value(),{previous:t.previous.prev()}):e(r)},then:function(t){if(r&&!r.error)try{t(r)}catch(r){return e({error:r})}return this},otherwise:function(e){return(null==r||void 0==r||r.error)&&e(r),this},value:function(){return r},reset:function(){for(var e=this.prev(),r=50;!e.isroot||!r;)e=e.prev(),r--;return e},data:function(){var e=this.reset();return e.value()}}};r.default=t}])});