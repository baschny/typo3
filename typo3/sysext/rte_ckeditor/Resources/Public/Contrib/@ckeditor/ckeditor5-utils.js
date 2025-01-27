import{isObject as t,isString as e,isPlainObject as n,cloneDeepWith as o,isElement as r,isFunction as i}from"lodash-es";
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const s=function(){try{return navigator.userAgent.toLowerCase()}catch(t){return""}}(),l={isMac:c(s),isWindows:function(t){return t.indexOf("windows")>-1}(s),isGecko:function(t){return!!t.match(/gecko\/\d+/)}(s),isSafari:function(t){return t.indexOf(" applewebkit/")>-1&&-1===t.indexOf("chrome")}(s),isiOS:function(t){return!!t.match(/iphone|ipad/i)||c(t)&&navigator.maxTouchPoints>0}(s),isAndroid:function(t){return t.indexOf("android")>-1}(s),isBlink:function(t){return t.indexOf("chrome/")>-1&&t.indexOf("edge/")<0}(s),features:{isRegExpUnicodePropertySupported:function(){let t=!1;try{t=0==="ć".search(new RegExp("[\\p{L}]","u"))}catch(t){}return t}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */()}};function c(t){return t.indexOf("macintosh")>-1}function a(t,e,n,o){n=n||function(t,e){return t===e};const r=Array.isArray(t)?t:Array.prototype.slice.call(t),i=Array.isArray(e)?e:Array.prototype.slice.call(e),s=function(t,e,n){const o=h(t,e,n);if(-1===o)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const r=u(t,o),i=u(e,o),s=h(r,i,n),l=t.length-s,c=e.length-s;return{firstIndex:o,lastIndexOld:l,lastIndexNew:c}}(r,i,n),l=o?function(t,e){const{firstIndex:n,lastIndexOld:o,lastIndexNew:r}=t;if(-1===n)return Array(e).fill("equal");let i=[];n>0&&(i=i.concat(Array(n).fill("equal")));r-n>0&&(i=i.concat(Array(r-n).fill("insert")));o-n>0&&(i=i.concat(Array(o-n).fill("delete")));r<e&&(i=i.concat(Array(e-r).fill("equal")));return i}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(s,i.length):function(t,e){const n=[],{firstIndex:o,lastIndexOld:r,lastIndexNew:i}=e;i-o>0&&n.push({index:o,type:"insert",values:t.slice(o,i)});r-o>0&&n.push({index:o+(i-o),type:"delete",howMany:r-o});return n}(i,s);return l}function h(t,e,n){for(let o=0;o<Math.max(t.length,e.length);o++)if(void 0===t[o]||void 0===e[o]||!n(t[o],e[o]))return o;return-1}function u(t,e){return t.slice(e).reverse()}function f(t,e,n){n=n||function(t,e){return t===e};const o=t.length,r=e.length;if(o>200||r>200||o+r>300)return f.fastDiff(t,e,n,!0);let i,s;if(r<o){const n=t;t=e,e=n,i="delete",s="insert"}else i="insert",s="delete";const l=t.length,c=e.length,a=c-l,h={},u={};function d(o){const r=(void 0!==u[o-1]?u[o-1]:-1)+1,a=void 0!==u[o+1]?u[o+1]:-1,f=r>a?-1:1;h[o+f]&&(h[o]=h[o+f].slice(0)),h[o]||(h[o]=[]),h[o].push(r>a?i:s);let d=Math.max(r,a),p=d-o;for(;p<l&&d<c&&n(t[p],e[d]);)p++,d++,h[o].push("equal");return d}let p,g=0;do{for(p=-g;p<a;p++)u[p]=d(p);for(p=a+g;p>a;p--)u[p]=d(p);u[a]=d(a),g++}while(u[a]!==c);return h[a].slice(1)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function d(t,e){const n=[];let o=0,r=null;return t.forEach((t=>{"equal"==t?(i(),o++):"insert"==t?(r&&"insert"==r.type?r.values.push(e[o]):(i(),r={type:"insert",index:o,values:[e[o]]}),o++):r&&"delete"==r.type?r.howMany++:(i(),r={type:"delete",index:o,howMany:1})})),i(),n;function i(){r&&(n.push(r),r=null)}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function p(t,...e){e.forEach((e=>{const n=Object.getOwnPropertyNames(e),o=Object.getOwnPropertySymbols(e);n.concat(o).forEach((n=>{if(n in t.prototype)return;if("function"==typeof e&&("length"==n||"name"==n||"prototype"==n))return;const o=Object.getOwnPropertyDescriptor(e,n);o.enumerable=!1,Object.defineProperty(t.prototype,n,o)}))}))}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */f.fastDiff=a;
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
class g{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=function t(){t.called=!0},this.off=function t(){t.called=!0}}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const m=new Array(256).fill("").map(((t,e)=>("0"+e.toString(16)).slice(-2)));function b(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+m[t>>0&255]+m[t>>8&255]+m[t>>16&255]+m[t>>24&255]+m[e>>0&255]+m[e>>8&255]+m[e>>16&255]+m[e>>24&255]+m[n>>0&255]+m[n>>8&255]+m[n>>16&255]+m[n>>24&255]+m[o>>0&255]+m[o>>8&255]+m[o>>16&255]+m[o>>24&255]}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const _={get(t="normal"){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function w(t,e){const n=_.get(e.priority);for(let o=0;o<t.length;o++)if(_.get(t[o].priority)<n)return void t.splice(o,0,e);t.push(e)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const y="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class v extends Error{constructor(t,e,n){super(function(t,e){const n=new WeakSet,o=(t,e)=>{if("object"==typeof e&&null!==e){if(n.has(e))return`[object ${e.constructor.name}]`;n.add(e)}return e},r=e?` ${JSON.stringify(e,o)}`:"",i=I(t);return t+r+i}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return"CKEditorError"===t}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new v(t.message,e);throw n.stack=t.stack,n}}function E(t,e){console.warn(...x(t,e))}function T(t,e){console.error(...x(t,e))}function I(t){return`\nRead more: ${y}#error-${t}`}function x(t,e){const n=I(t);return e?[t,e,n]:[t,n]}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const L="40.0.0",O=new Date(2023,9,4);
/* istanbul ignore next -- @preserve */
if(globalThis.CKEDITOR_VERSION)throw new v("ckeditor-duplicated-modules",null);
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */globalThis.CKEDITOR_VERSION=L;const k=Symbol("listeningTo"),A=Symbol("emitterId"),N=Symbol("delegations"),C=S(Object);function S(t){if(!t)return C;return class extends t{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let o=!1;this.listenTo(this,t,((t,...n)=>{o||(o=!0,t.off(),e.call(this,t,...n))}),n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,o={}){let r,i;this[k]||(this[k]={});const s=this[k];R(t)||M(t);const l=R(t);(r=s[l])||(r=s[l]={emitter:t,callbacks:{}}),(i=r.callbacks[e])||(i=r.callbacks[e]=[]),i.push(n),function(t,e,n,o,r){e._addEventListener?e._addEventListener(n,o,r):t._addEventListener.call(e,n,o,r)}(this,t,e,n,o)}stopListening(t,e,n){const o=this[k];let r=t&&R(t);const i=o&&r?o[r]:void 0,s=i&&e?i.callbacks[e]:void 0;if(!(!o||t&&!i||e&&!s))if(n){V(this,t,e,n);-1!==s.indexOf(n)&&(1===s.length?delete i.callbacks[e]:V(this,t,e,n))}else if(s){for(;n=s.pop();)V(this,t,e,n);delete i.callbacks[e]}else if(i){for(e in i.callbacks)this.stopListening(t,e);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[k]}}fire(t,...e){try{const n=t instanceof g?t:new g(this,t),o=n.name;let r=P(this,o);if(n.path.push(this),r){const t=[n,...e];r=Array.from(r);for(let e=0;e<r.length&&(r[e].callback.apply(this,t),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[e].callback)),!n.stop.called);e++);}const i=this[N];if(i){const t=i.get(o),r=i.get("*");t&&B(t,n,e),r&&B(r,n,e)}return n.return}catch(t){
/* istanbul ignore next -- @preserve */
v.rethrowUnexpectedError(t,this)}}delegate(...t){return{to:(e,n)=>{this[N]||(this[N]=new Map),t.forEach((t=>{const o=this[N].get(t);o?o.set(e,n):this[N].set(t,new Map([[e,n]]))}))}}}stopDelegating(t,e){if(this[N])if(t)if(e){const n=this[N].get(t);n&&n.delete(e)}else this[N].delete(t);else this[N].clear()}_addEventListener(t,e,n){!function(t,e){const n=D(t);if(n[e])return;let o=e,r=null;const i=[];for(;""!==o&&!n[o];)n[o]={callbacks:[],childEvents:[]},i.push(n[o]),r&&n[o].childEvents.push(r),r=o,o=o.substr(0,o.lastIndexOf(":"));if(""!==o){for(const t of i)t.callbacks=n[o].callbacks.slice();n[o].childEvents.push(r)}}(this,t);const o=j(this,t),r={callback:e,priority:_.get(n.priority)};for(const t of o)w(t,r)}_removeEventListener(t,e){const n=j(this,t);for(const t of n)for(let n=0;n<t.length;n++)t[n].callback==e&&(t.splice(n,1),n--)}}}function M(t,e){t[A]||(t[A]=e||b())}function R(t){return t[A]}function D(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function j(t,e){const n=D(t)[e];if(!n)return[];let o=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const r=j(t,n.childEvents[e]);o=o.concat(r)}return o}function P(t,e){let n;return t._events&&(n=t._events[e])&&n.callbacks.length?n.callbacks:e.indexOf(":")>-1?P(t,e.substr(0,e.lastIndexOf(":"))):null}function B(t,e,n){for(let[o,r]of t){r?"function"==typeof r&&(r=r(e.name)):r=e.name;const t=new g(e.source,r);t.path=[...e.path],o.fire(t,...n)}}function V(t,e,n,o){e._removeEventListener?e._removeEventListener(n,o):t._removeEventListener.call(e,n,o)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach((t=>{S[t]=C.prototype[t]}));const F=Symbol("observableProperties"),K=Symbol("boundObservables"),W=Symbol("boundProperties"),H=Symbol("decoratedMethods"),q=Symbol("decoratedOriginal"),U=Y(S());function Y(e){if(!e)return U;return class extends e{set(e,n){if(t(e))return void Object.keys(e).forEach((t=>{this.set(t,e[t])}),this);$(this);const o=this[F];if(e in this&&!o.has(e))throw new v("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>o.get(e),set(t){const n=o.get(e);let r=this.fire(`set:${e}`,e,t,n);void 0===r&&(r=t),n===r&&o.has(e)||(o.set(e,r),this.fire(`change:${e}`,e,r,n))}}),this[e]=n}bind(...t){if(!t.length||!X(t))throw new v("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new v("observable-bind-duplicate-properties",this);$(this);const e=this[W];t.forEach((t=>{if(e.has(t))throw new v("observable-bind-rebind",this)}));const n=new Map;return t.forEach((t=>{const o={property:t,to:[]};e.set(t,o),n.set(t,o)})),{to:z,toMany:G,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[F])return;const e=this[W],n=this[K];if(t.length){if(!X(t))throw new v("observable-unbind-wrong-properties",this);t.forEach((t=>{const o=e.get(t);o&&(o.to.forEach((([t,e])=>{const r=n.get(t),i=r[e];i.delete(o),i.size||delete r[e],Object.keys(r).length||(n.delete(t),this.stopListening(t,"change"))})),e.delete(t))}))}else n.forEach(((t,e)=>{this.stopListening(e,"change")})),n.clear(),e.clear()}decorate(t){$(this);const e=this[t];if(!e)throw new v("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,((t,n)=>{t.return=e.apply(this,n)})),this[t]=function(...e){return this.fire(t,e)},this[t][q]=e,this[H]||(this[H]=[]),this[H].push(t)}stopListening(t,e,n){if(!t&&this[H]){for(const t of this[H])this[t]=this[t][q];delete this[H]}super.stopListening(t,e,n)}}}function $(t){t[F]||(Object.defineProperty(t,F,{value:new Map}),Object.defineProperty(t,K,{value:new Map}),Object.defineProperty(t,W,{value:new Map}))}function z(...t){const e=function(...t){if(!t.length)throw new v("observable-bind-to-parse-error",null);const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach((t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new v("observable-bind-to-parse-error",null);n={observable:t,properties:[]},e.to.push(n)}})),e}(...t),n=Array.from(this._bindings.keys()),o=n.length;if(!e.callback&&e.to.length>1)throw new v("observable-bind-to-no-callback",this);if(o>1&&e.callback)throw new v("observable-bind-to-extra-callback",this);var r;
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */e.to.forEach((t=>{if(t.properties.length&&t.properties.length!==o)throw new v("observable-bind-to-properties-length",this);t.properties.length||(t.properties=this._bindProperties)})),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),r=this._observable,this._to.forEach((t=>{const e=r[K];let n;e.get(t.observable)||r.listenTo(t.observable,"change",((o,i)=>{n=e.get(t.observable)[i],n&&n.forEach((t=>{J(r,t.property)}))}))})),function(t){let e;t._bindings.forEach(((n,o)=>{t._to.forEach((r=>{e=r.properties[n.callback?0:t._bindProperties.indexOf(o)],n.to.push([r.observable,e]),function(t,e,n,o){const r=t[K],i=r.get(n),s=i||{};s[o]||(s[o]=new Set);s[o].add(e),i||r.set(n,s)}(t._observable,n,r.observable,e)}))}))}(this),this._bindProperties.forEach((t=>{J(this._observable,t)}))}function G(t,e,n){if(this._bindings.size>1)throw new v("observable-bind-to-many-not-one-binding",this);this.to(...function(t,e){const n=t.map((t=>[t,e]));return Array.prototype.concat.apply([],n)}(t,e),n)}function X(t){return t.every((t=>"string"==typeof t))}function J(t,e){const n=t[W].get(e);let o;n.callback?o=n.callback.apply(t,n.to.map((t=>t[0][t[1]]))):(o=n.to[0],o=o[0][o[1]]),Object.prototype.hasOwnProperty.call(t,e)?t[e]=o:t.set(e,o)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach((t=>{Y[t]=U.prototype[t]}));class Q{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach((({element:t,newElement:e})=>{t.style.display="",e&&e.remove()})),this._replacedElements=[]}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Z(t){let e=0;for(const n of t)e++;return e}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function tt(t,e){const n=Math.min(t.length,e.length);for(let o=0;o<n;o++)if(t[o]!=e[o])return o;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function et(t){return!(!t||!t[Symbol.iterator])}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function nt(t,n,o={},r=[]){const i=o&&o.xmlns,s=i?t.createElementNS(i,n):t.createElement(n);for(const t in o)s.setAttribute(t,o[t]);!e(r)&&et(r)||(r=[r]);for(let n of r)e(n)&&(n=t.createTextNode(n)),s.appendChild(n);return s}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class ot{constructor(t,e){this._config={},e&&this.define(rt(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,o,r=!1){if(n(e))return void this._setObjectToTarget(t,e,r);const i=e.split(".");e=i.pop();for(const e of i)n(t[e])||(t[e]={}),t=t[e];if(n(o))return n(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,o,r);r&&void 0!==t[e]||(t[e]=o)}_getFromSource(t,e){const o=e.split(".");e=o.pop();for(const e of o){if(!n(t[e])){t=null;break}t=t[e]}return t?rt(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach((o=>{this._setToTarget(t,o,e[o],n)}))}}function rt(t){return o(t,it)}function it(t){return r(t)?t:void 0}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function st(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function lt(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const ct=at(S());function at(t){if(!t)return ct;return class extends t{listenTo(t,e,n,o={}){if(st(t)||lt(t)){const r={capture:!!o.useCapture,passive:!!o.usePassive},i=this._getProxyEmitter(t,r)||new ht(t,r);this.listenTo(i,e,n,o)}else super.listenTo(t,e,n,o)}stopListening(t,e,n){if(st(t)||lt(t)){const o=this._getAllProxyEmitters(t);for(const t of o)this.stopListening(t,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(t,e){const n=t[k];return n&&n[e]?n[e].emitter:null}(this,ut(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map((e=>this._getProxyEmitter(t,e))).filter((t=>!!t))}}}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach((t=>{at[t]=ct.prototype[t]}));class ht extends(S()){constructor(t,e){super(),M(this,ut(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),S().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){S().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=e=>{this.fire(t,e)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function ut(t,e){let n=function(t){return t["data-ck-expando"]||(t["data-ck-expando"]=b())}(t);for(const t of Object.keys(e).sort())e[t]&&(n+="-"+t);return n}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */let ft;try{ft={window:window,document:document}}catch(t){
/* istanbul ignore next -- @preserve */
ft={window:{},document:{}}}var dt=ft;
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function pt(t){let e=t.parentElement;if(!e)return null;for(;"BODY"!=e.tagName;){const t=e.style.overflowY||dt.window.getComputedStyle(e).overflowY;if("auto"===t||"scroll"===t)break;if(e=e.parentElement,!e)return null}return e}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function gt(t){const e=[];let n=t;for(;n&&n.nodeType!=Node.DOCUMENT_NODE;)e.unshift(n),n=n.parentNode;return e}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function mt(t){return t instanceof HTMLTextAreaElement?t.value:t.innerHTML}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function bt(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function _t(t){return"[object Text]"==Object.prototype.toString.call(t)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function wt(t){return"[object Range]"==Object.prototype.toString.apply(t)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function yt(t){return t&&t.parentNode?t.offsetParent===dt.document.body?null:t.offsetParent:null}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const vt=["top","right","bottom","left","width","height"];class Et{constructor(t){const e=wt(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),xt(t)||e)if(e){const e=Et.getDomRangeRects(t);Tt(this,Et.getBoundingRect(e))}else Tt(this,t.getBoundingClientRect());else if(lt(t)){const{innerWidth:e,innerHeight:n}=t;Tt(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else Tt(this,t)}clone(){return new Et(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const t=new Et(e);return t._source=this._source,t}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(It(t))return e;let n,o=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!It(r);){const t="visible"===((i=r)instanceof HTMLElement?i.ownerDocument.defaultView.getComputedStyle(i).overflow:"visible");o instanceof HTMLElement&&"absolute"===Lt(o)&&(n=o);const s=Lt(r);if(t||n&&("relative"===s&&t||"relative"!==s)){o=r,r=r.parentNode;continue}const l=new Et(r),c=e.getIntersection(l);if(!c)return null;c.getArea()<e.getArea()&&(e=c),o=r,r=r.parentNode}var i;return e}isEqual(t){for(const e of vt)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=dt.window,n=this.clone().moveBy(t,e);if(xt(n._source)){const t=yt(n._source);t&&function(t,e){const n=new Et(e),o=bt(e);let r=0,i=0;r-=n.left,i-=n.top,r+=e.scrollLeft,i+=e.scrollTop,r-=o.left,i-=o.top,t.moveBy(r,i)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(n,t)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,o;if(lt(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{const r=bt(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,"ltr"===o?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new Et(t));else{let n=t.startContainer;_t(n)&&(n=n.parentNode);const o=new Et(n.getBoundingClientRect());o.right=o.left,o.width=0,e.push(o)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return 0==n?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new Et(e))}}function Tt(t,e){for(const n of vt)t[n]=e[n]}function It(t){return!!xt(t)&&t===t.ownerDocument.body}function xt(t){return null!==t&&"object"==typeof t&&1===t.nodeType&&"function"==typeof t.getBoundingClientRect}function Lt(t){return t instanceof HTMLElement?t.ownerDocument.defaultView.getComputedStyle(t).position:"static"}class Ot{constructor(t,e){Ot._observerInstance||Ot._createObserver(),this._element=t,this._callback=e,Ot._addElementCallback(t,e),Ot._observerInstance.observe(t)}get element(){return this._element}destroy(){Ot._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){Ot._elementCallbacks||(Ot._elementCallbacks=new Map);let n=Ot._elementCallbacks.get(t);n||(n=new Set,Ot._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=Ot._getElementCallbacks(t);n&&(n.delete(e),n.size||(Ot._elementCallbacks.delete(t),Ot._observerInstance.unobserve(t))),Ot._elementCallbacks&&!Ot._elementCallbacks.size&&(Ot._observerInstance=null,Ot._elementCallbacks=null)}static _getElementCallbacks(t){return Ot._elementCallbacks?Ot._elementCallbacks.get(t):null}static _createObserver(){Ot._observerInstance=new dt.window.ResizeObserver((t=>{for(const e of t){const t=Ot._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}}))}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function kt(t,e){t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function At(t){return e=>e+t}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Nt(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Ct(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function St(t){return t&&t.nodeType===Node.COMMENT_NODE}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Mt(t){try{dt.document.createAttribute(t)}catch(t){return!1}return!0}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Rt(t){return!!(t&&t.getClientRects&&t.getClientRects().length)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Dt({element:t,target:e,positions:n,limiter:o,fitInViewport:r,viewportOffsetConfig:s}){i(e)&&(e=e()),i(o)&&(o=o());const l=yt(t),c=function(t){t=Object.assign({top:0,bottom:0,left:0,right:0},t);const e=new Et(dt.window);return e.top+=t.top,e.height-=t.top,e.bottom-=t.bottom,e.height-=t.bottom,e}(s),a=new Et(t),h=jt(e,c);let u;if(!h||!c.getIntersection(h))return null;const f={targetRect:h,elementRect:a,positionedElementAncestor:l,viewportRect:c};if(o||r){if(o){const t=jt(o,c);t&&(f.limiterRect=t)}u=function(t,e){const{elementRect:n}=e,o=n.getArea(),r=t.map((t=>new Pt(t,e))).filter((t=>!!t.name));let i=0,s=null;for(const t of r){const{limiterIntersectionArea:e,viewportIntersectionArea:n}=t;if(e===o)return t;const r=n**2+e**2;r>i&&(i=r,s=t)}return s}(n,f)}else u=new Pt(n[0],f);return u}function jt(t,e){const n=new Et(t).getVisible();return n?n.getIntersection(e):null}Ot._observerInstance=null,Ot._elementCallbacks=null;class Pt{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:o,top:r,name:i,config:s}=n;this.name=i,this.config=s,this._positioningFunctionCoordinates={left:o,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Bt(t){const e=t.parentNode;e&&e.removeChild(t)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Vt({target:t,viewportOffset:e=0,ancestorOffset:n=0,alignToTop:o,forceScroll:r}){const i=$t(t);let s=i,l=null;for(e=function(t){if("number"==typeof t)return{top:t,bottom:t,left:t,right:t};return t}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(e);s;){let c;c=zt(s==i?t:l),Wt({parent:c,getRect:()=>Gt(t,s),alignToTop:o,ancestorOffset:n,forceScroll:r});const a=Gt(t,s);if(Kt({window:s,rect:a,viewportOffset:e,alignToTop:o,forceScroll:r}),s.parent!=s){if(l=s.frameElement,s=s.parent,!l)return}else s=null}}function Ft(t,e,n){Wt({parent:zt(t),getRect:()=>new Et(t),ancestorOffset:e,limiterElement:n})}function Kt({window:t,rect:e,alignToTop:n,forceScroll:o,viewportOffset:r}){const i=e.clone().moveBy(0,r.bottom),s=e.clone().moveBy(0,-r.top),l=new Et(t).excludeScrollbarsAndBorders(),c=n&&o,a=[s,i].every((t=>l.contains(t)));let{scrollX:h,scrollY:u}=t;const f=h,d=u;c?u-=l.top-e.top+r.top:a||(qt(s,l)?u-=l.top-e.top+r.top:Ht(i,l)&&(u+=n?e.top-l.top-r.top:e.bottom-l.bottom+r.bottom)),a||(Ut(e,l)?h-=l.left-e.left+r.left:Yt(e,l)&&(h+=e.right-l.right+r.right)),h==f&&u===d||t.scrollTo(h,u)}function Wt({parent:t,getRect:e,alignToTop:n,forceScroll:o,ancestorOffset:r=0,limiterElement:i}){const s=$t(t),l=n&&o;let c,a,h;const u=i||s.document.body;for(;t!=u;)a=e(),c=new Et(t).excludeScrollbarsAndBorders(),h=c.contains(a),l?t.scrollTop-=c.top-a.top+r:h||(qt(a,c)?t.scrollTop-=c.top-a.top+r:Ht(a,c)&&(t.scrollTop+=n?a.top-c.top-r:a.bottom-c.bottom+r)),h||(Ut(a,c)?t.scrollLeft-=c.left-a.left+r:Yt(a,c)&&(t.scrollLeft+=a.right-c.right+r)),t=t.parentNode}function Ht(t,e){return t.bottom>e.bottom}function qt(t,e){return t.top<e.top}function Ut(t,e){return t.left<e.left}function Yt(t,e){return t.right>e.right}function $t(t){return wt(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function zt(t){if(wt(t)){let e=t.commonAncestorContainer;return _t(e)&&(e=e.parentNode),e}return t.parentNode}function Gt(t,e){const n=$t(t),o=new Et(t);if(n===e)return o;{let t=n;for(;t!=e;){const e=t.frameElement,n=new Et(e).excludeScrollbarsAndBorders();o.moveBy(n.left,n.top),t=t.parent}}return o}const Xt={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Jt={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Qt=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){t[String.fromCharCode(e).toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;for(const e of"`-=[];',./\\")t[e]=e.charCodeAt(0);return t}(),Zt=Object.fromEntries(Object.entries(Qt).map((([t,e])=>[e,t.charAt(0).toUpperCase()+t.slice(1)])));function te(t){let e;if("string"==typeof t){if(e=Qt[t.toLowerCase()],!e)throw new v("keyboard-unknown-key",null,{key:t})}else e=t.keyCode+(t.altKey?Qt.alt:0)+(t.ctrlKey?Qt.ctrl:0)+(t.shiftKey?Qt.shift:0)+(t.metaKey?Qt.cmd:0);return e}function ee(t){return"string"==typeof t&&(t=function(t){return t.split("+").map((t=>t.trim()))}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(t)),t.map((t=>"string"==typeof t?function(t){if(t.endsWith("!"))return te(t.slice(0,-1));const e=te(t);return(l.isMac||l.isiOS)&&e==Qt.ctrl?Qt.cmd:e}(t):t)).reduce(((t,e)=>e+t),0)}function ne(t){let e=ee(t);return Object.entries(l.isMac||l.isiOS?Xt:Jt).reduce(((t,[n,o])=>(0!=(e&Qt[n])&&(e&=~Qt[n],t+=o),t)),"")+(e?Zt[e]:"")}function oe(t){return t==Qt.arrowright||t==Qt.arrowleft||t==Qt.arrowup||t==Qt.arrowdown}function re(t,e){const n="ltr"===e;switch(t){case Qt.arrowleft:return n?"left":"right";case Qt.arrowright:return n?"right":"left";case Qt.arrowup:return"up";case Qt.arrowdown:return"down"}}function ie(t,e){const n=re(t,e);return"down"===n||"right"===n}const se=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function le(t){return se.includes(t)?"rtl":"ltr"}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function ce(t){return Array.isArray(t)?t:[t]}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* istanbul ignore else -- @preserve */function ae(t,e,n=1){if("number"!=typeof n)throw new v("translation-service-quantity-not-a-number",null,{quantity:n});const o=Object.keys(dt.window.CKEDITOR_TRANSLATIONS).length;1===o&&(t=Object.keys(dt.window.CKEDITOR_TRANSLATIONS)[0]);const r=e.id||e.string;if(0===o||!function(t,e){return!!dt.window.CKEDITOR_TRANSLATIONS[t]&&!!dt.window.CKEDITOR_TRANSLATIONS[t].dictionary[e]}(t,r))return 1!==n?e.plural:e.string;const i=dt.window.CKEDITOR_TRANSLATIONS[t].dictionary,s=dt.window.CKEDITOR_TRANSLATIONS[t].getPluralForm||(t=>1===t?0:1),l=i[r];if("string"==typeof l)return l;return l[Number(s(n))]}dt.window.CKEDITOR_TRANSLATIONS||(dt.window.CKEDITOR_TRANSLATIONS={});
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
class he{constructor({uiLanguage:t="en",contentLanguage:e}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=le(this.uiLanguage),this.contentLanguageDirection=le(this.contentLanguage),this.t=(t,e)=>this._t(t,e)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=ce(e),"string"==typeof t&&(t={string:t});const n=!!t.plural?e[0]:1;return function(t,e){return t.replace(/%(\d+)/g,((t,n)=>n<e.length?e[n]:t))}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(ae(this.uiLanguage,t,n),e)}}class ue extends(S()){constructor(t={},e={}){super();const n=et(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const e of t)this._items.push(e),this._itemMap.set(this._getItemIdBeforeAdding(e),e)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new v("collection-add-item-invalid-index",this);let n=0;for(const o of t){const t=this._getItemIdBeforeAdding(o),r=e+n;this._items.splice(r,0,o),this._itemMap.set(t,o),this.fire("add",o,r),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new v("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if("string"==typeof t)return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new v("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding((e=>new t(e)))},using:t=>{"function"==typeof t?this._setUpBindToBinding(t):this._setUpBindToBinding((e=>e[t]))}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,o,r)=>{const i=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(o);if(i&&s)this._bindToExternalToInternalMap.set(o,s),this._bindToInternalToExternalMap.set(s,o);else{const n=t(o);if(!n)return void this._skippedIndexesFromExternal.push(r);let i=r;for(const t of this._skippedIndexesFromExternal)r>t&&i--;for(const t of e._skippedIndexesFromExternal)i>=t&&i++;this._bindToExternalToInternalMap.set(o,n),this._bindToInternalToExternalMap.set(n,o),this.add(n,i);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)i<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",((t,e,n)=>{const o=this._bindToExternalToInternalMap.get(e);o&&this.remove(o),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce(((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t)),[])}))}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],"string"!=typeof n)throw new v("collection-add-invalid-id",this);if(this.get(n))throw new v("collection-add-item-already-exists",this)}else t[e]=n=b();return n}_remove(t){let e,n,o,r=!1;const i=this._idProperty;if("string"==typeof t?(n=t,o=this._itemMap.get(n),r=!o,o&&(e=this._items.indexOf(o))):"number"==typeof t?(e=t,o=this._items[e],r=!o,o&&(n=o[i])):(o=t,n=o[i],e=this._items.indexOf(o),r=-1==e||!this._itemMap.get(n)),r)throw new v("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(s),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function fe(t){const e=t.next();return e.done?null:e.value}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class de extends(at(Y())){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new v("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",(()=>this._focus(t)),{useCapture:!0}),this.listenTo(t,"blur",(()=>this._blur()),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout((()=>{this.focusedElement=null,this.isFocused=!1}),0)}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class pe{constructor(){this._listener=new(at())}listenTo(t){this._listener.listenTo(t,"keydown",((t,e)=>{this._listener.fire("_keydown:"+te(e),e)}))}set(t,e,n={}){const o=ee(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,((t,n)=>{e(n,(()=>{n.preventDefault(),n.stopPropagation(),t.stop()})),t.return=!0}),{priority:r})}press(t){return!!this._listener.fire("_keydown:"+te(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function ge(t){return et(t)?new Map(t):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(t)}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function me(t,e,n,o){if(Math.max(e.length,t.length)>1e4)return t.slice(0,n).concat(e).concat(t.slice(n+o,t.length));{const r=Array.from(t);return r.splice(n,o,...e),r}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function be(t,e){let n;function o(...r){o.cancel(),n=setTimeout((()=>t(...r)),e)}return o.cancel=()=>{clearTimeout(n)},o}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function _e(t){function e(t){return t.length>=40&&t.length<=255?"VALID":"INVALID"}if(!t)return"INVALID";let n="";try{n=atob(t)}catch(t){return"INVALID"}const o=n.split("-"),r=o[0],i=o[1];if(!i)return e(t);try{atob(i)}catch(n){try{if(atob(r),!atob(r).length)return e(t)}catch(n){return e(t)}}if(r.length<40||r.length>255)return"INVALID";let s="";try{atob(r),s=atob(i)}catch(t){return"INVALID"}if(8!==s.length)return"INVALID";const l=Number(s.substring(0,4)),c=Number(s.substring(4,6))-1,a=Number(s.substring(6,8)),h=new Date(l,c,a);return h<O||isNaN(Number(h))?"INVALID":"VALID"}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function we(t){return!!t&&1==t.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)}function ye(t){return!!t&&1==t.length&&/[\ud800-\udbff]/.test(t)}function ve(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}function Ee(t,e){return ye(t.charAt(e-1))&&ve(t.charAt(e))}function Te(t,e){return we(t.charAt(e))}const Ie=function(){const t=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map((t=>t.source)).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function xe(t,e){const n=String(t).matchAll(Ie);return Array.from(n).some((t=>t.index<e&&e<t.index+t[0].length))}export{v as CKEditorError,ue as Collection,ot as Config,at as DomEmitterMixin,Q as ElementReplacer,S as EmitterMixin,g as EventInfo,de as FocusTracker,pe as KeystrokeHandler,he as Locale,Y as ObservableMixin,Et as Rect,Ot as ResizeObserver,tt as compareArrays,Z as count,nt as createElement,be as delay,f as diff,d as diffToChanges,l as env,a as fastDiff,pt as findClosestScrollableAncestor,fe as first,gt as getAncestors,bt as getBorderWidths,te as getCode,mt as getDataFromElement,ne as getEnvKeystrokeText,le as getLanguageDirection,re as getLocalizedArrowKeyCodeDirection,Dt as getOptimalPosition,dt as global,Nt as indexOf,Ct as insertAt,w as insertToPriorityArray,oe as isArrowKeyCode,we as isCombiningMark,St as isComment,ie as isForwardArrowKeyCode,ye as isHighSurrogateHalf,Te as isInsideCombinedSymbol,xe as isInsideEmojiSequence,Ee as isInsideSurrogatePair,et as isIterable,ve as isLowSurrogateHalf,st as isNode,wt as isRange,_t as isText,Mt as isValidAttributeName,Rt as isVisible,Qt as keyCodes,T as logError,E as logWarning,p as mix,ee as parseKeystroke,_ as priorities,O as releaseDate,Bt as remove,Ft as scrollAncestorsToShowTarget,Vt as scrollViewportToShowTarget,kt as setDataInElement,me as spliceArray,ce as toArray,ge as toMap,At as toUnit,b as uid,_e as verifyLicense,L as version};