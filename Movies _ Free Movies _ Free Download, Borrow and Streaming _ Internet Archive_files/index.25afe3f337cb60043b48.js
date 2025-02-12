/*! For license information please see index.25afe3f337cb60043b48.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5609],{7889:function(e,t,i){i.d(t,{N:function(){return n.P}});var n=i(5575);i(7750)},5141:function(e,t,i){i.d(t,{E8:function(){return n.c},ab:function(){return n.m},cc:function(){return o},gx:function(){return n.s}});var n=i(1615);class r{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(n.L,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(n.L,this.__litLocalizeEventHandler)}}const s=e=>e.addController(new r(e)),o=()=>e=>"function"==typeof e?l(e):a(e),a=({kind:e,elements:t})=>({kind:e,elements:t,finisher(e){e.addInitializer(s)}}),l=e=>(e.addInitializer(s),e)},5768:function(e,t,i){i.d(t,{e:function(){return r},i:function(){return s},t:function(){return n}});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},2668:function(e,t,i){i.d(t,{U:function(){return ne},W:function(){return le},c:function(){return z},f:function(){return c},g:function(){return N},m:function(){return H}});var n,r=window,s=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap,l=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}},c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new l(i,e,o)},d=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,h=window,u=h.trustedTypes,p=u?u.emptyScript:"",m=h.reactiveElementPolyfillSupport,v={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},g=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:g},y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{s?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=f){var n;const r=this.constructor._$Ep(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:v).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=n.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:v;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}_$Ej(){return e=this,t=function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&(yield e),!this.isUpdatePending},new Promise(((i,n)=>{var r=e=>{try{o(t.next(e))}catch(e){n(e)}},s=e=>{try{o(t.throw(e))}catch(e){n(e)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,s);o((t=t.apply(e,null)).next())}));var e,t}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:y}),(null!==(n=h.reactiveElementVersions)&&void 0!==n?n:h.reactiveElementVersions=[]).push("1.5.0");var b,w=window,k=w.trustedTypes,$=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,A="?"+S,E=`<${A}>`,_=document,x=(e="")=>_.createComment(e),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,T=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,R=/"/g,D=/^(?:script|style|textarea|title)$/i,U=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=U(1),N=U(2),B=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),W=new WeakMap,F=_.createTreeWalker(_,129,null,!1),j=class{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,s=0;const o=e.length-1,a=this.parts,[l,c]=((e,t)=>{const i=e.length-1,n=[];let r,s=2===t?"<svg>":"",o=P;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===P?"!--"===l[1]?o=L:void 0!==l[1]?o=T:void 0!==l[2]?(D.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=M):void 0!==l[3]&&(o=M):o===M?">"===l[0]?(o=null!=r?r:P,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?M:'"'===l[3]?R:O):o===R||o===O?o=M:o===L||o===T?o=P:(o=M,r=void 0);const h=o===M&&e[t+1].startsWith("/>")?" ":"";s+=o===P?i+E:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+S+h):i+S+(-2===c?(n.push(void 0),t):h)}const a=s+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(a):a,n]})(e,t);if(this.el=j.createElement(l,i),F.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=F.nextNode())&&a.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(S)){const i=c[s++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split(S),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?Q:"@"===t[1]?J:G})}else a.push({type:6,index:r})}for(const t of e)n.removeAttribute(t)}if(D.test(n.tagName)){const e=n.textContent.split(S),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],x()),F.nextNode(),a.push({type:2,index:++r});n.append(e[t],x())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(S,e+1));)a.push({type:7,index:r}),e+=S.length-1}r++}}static createElement(e,t){const i=_.createElement("template");return i.innerHTML=e,i}};function K(e,t,i=e,n){var r,s,o,a;if(t===B)return t;let l=void 0!==n?null===(r=i._$Co)||void 0===r?void 0:r[n]:i._$Cl;const c=C(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=K(e,l._$AS(e,t.values),l,n)),t}var V=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:_).importNode(i,!0);F.currentNode=r;let s=F.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new q(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new X(s,this,e)),this.u.push(t),l=n[++a]}o!==(null==l?void 0:l.index)&&(s=F.nextNode(),o++)}return r}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},q=class{constructor(e,t,i,n){var r;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),C(e)?e===z||null==e||""===e?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==B&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>I(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=j.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.p(i);else{const e=new V(r,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new j(e)),t}k(e){I(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new q(this.O(x()),this.O(x()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},G=class{constructor(e,t,i,n,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let s=!1;if(void 0===r)e=K(this,e,t,0),s=!C(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{const n=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=K(this,n[i+o],t,o),a===B&&(a=this._$AH[o]),s||(s=!C(a)||a!==this._$AH[o]),a===z?e=z:e!==z&&(e+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},Z=class extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},Y=k?k.emptyScript:"",Q=class extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==z?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}},J=class extends G{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=K(this,e,t,0))&&void 0!==i?i:z)===B)return;const n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}},X=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}},ee=w.litHtmlPolyfillSupport;null==ee||ee(j,q),(null!==(b=w.litHtmlVersions)&&void 0!==b?b:w.litHtmlVersions=[]).push("2.5.0");var te,ie,ne=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,r;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new q(t.insertBefore(x(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return B}};ne.finalized=!0,ne._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ne});var re=globalThis.litElementPolyfillSupport;null==re||re({LitElement:ne}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.2.2");var se=c`
  :host {
    font: normal 1.2rem/1.5 var(--themeFontFamily);
  }

  form {
    max-width: 600px;
  }

  p {
    margin-top: 0;
    font-weight: 200;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: var(--activeColor);
  }

  fieldset {
    padding: 0.7rem 2rem;
    margin: 1.5rem 0;
    box-sizing: border-box;
    text-align: center;
    border: none;
    border-radius: 7px;
    background-color: #fcf5e6;
    box-shadow: 3px 3px 0 0 #c3ad97;
  }

  label {
    display: none;
  }

  img {
    width: 100%;
    max-width: 215px;
    max-height: 60px;
    margin-bottom: 1.3rem;
    vertical-align: middle;
  }

  input {
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    font: normal 1.2rem/1.5 var(--themeFontFamily);
    color: #858585;
    box-sizing: border-box;
    border: 1px solid var(--grey80);
    border-radius: 2rem;
    background: #eee;
  }

  input:focus {
    border-color: #66afe9;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    outline: none;
  }

  .search-field {
    position: relative;
    overflow: hidden;
  }

  .search-field svg {
    position: absolute;
    top: 2px;
    left: 3px;
    width: 2.4rem;
    height: 2.4rem;
  }

  .search-field .fill-color {
    fill: var(--iconFill);
  }

  input:focus + svg {
    display: none;
  }

  @media (min-width: 890px) {
    form {
      margin: 0 auto;
    }

    p {
      margin-bottom: 3rem;
      font-size: 1.6rem;
      text-align: center;
    }

    img {
      margin: 0;
    }

    fieldset {
      margin: 0 auto;
      font-size: 0;
    }

    fieldset a,
    .search-field {
      display: inline-block;
      width: 50%;
      vertical-align: middle;
    }

    fieldset a {
      text-align: center;
    }

    .search-field svg {
      width: 2.8rem;
      height: 2.8rem;
    }

    .search-field .fill-color {
      fill: var(--desktopSearchIconFill);
    }
  }
`,oe=H`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="searchTitleID searchDescID"
  >
    <title id="searchTitleID">Search icon</title>
    <desc id="searchDescID">An illustration of a magnifying glass.</desc>
    <path class="fill-color" d="m32.4526364 29.8875889-8.1719472-7.9751279c1.1046135-1.4876138 1.7652549-3.3102407 1.7652549-5.2846451 0-.101185-.0142895-.1981539-.030573-.2944743.0166158-.0976175.0309053-.196208.0309053-.2990145 0-4.9814145-4.152935-9.0343271-9.2572866-9.0343271-.0907218 0-.1781206.01394537-.2655193.02594487-.0880633-.0119995-.1747974-.02594487-.2655193-.02594487-5.1046839 0-9.25761889 4.0529126-9.25761889 9.0343271 0 .1011849.01395722.1981539.03057294.2947985-.01694804.0976176-.03090525.1958838-.03090525.2986903 0 4.9814145 4.1526027 9.0346514 9.2572866 9.0346514.0907218 0 .1777882-.0139454.2658516-.0262692.0873987.0123238.1741328.0262692.265187.0262692 1.7306942 0 3.3467399-.4747911 4.7338208-1.2852439l8.2882574 8.0886366c.3652137.3564177.843082.53414 1.3212826.53414.4782007 0 .9567336-.1780467 1.3212827-.53414.7294304-.7118622.7294304-1.8660845-.0003323-2.5782711zm-15.9526364-7.8875889c-.0832667-.0118703-.1652765-.0253024-.2513711-.0253024-2.8781993 0-5.2197212-2.3278242-5.2197212-5.1891862 0-.0974612-.013197-.1908615-.0289077-.2836371.0160249-.0940251.0292219-.1889874.0292219-.2880105 0-2.861362 2.3418361-5.1891861 5.2200354-5.1891861.0854662 0 .1677902-.0131198.2510569-.0246777.0826383.0115579.1649623.0246777.2510569.0246777 2.8781993 0 5.2197212 2.3278241 5.2197212 5.1891861 0 .0974612.0135112.1908616.0289077.2839496-.0157107.0940251-.0295361.1886749-.0295361.287698 0 2.861362-2.3415219 5.1891862-5.2197212 5.1891862-.0860946 0-.1684187.0134321-.2507427.0253024z" fill-rule="evenodd" />
  </svg>
`,ae=H`
<svg height="55" viewBox="0 0 205 55" width="205" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m41.5442526 5.47625158v36.05869762s-.0825635.8039669.6808836.8039669c.7634442 0 .5779563-.8039669.5779563-.8039669v-36.05869762h5.4674088l.0001982 44.76728562c.0070059.1547261.1602174 4.7191467-6.1484876 4.7191467-6.1999371 0-6.1018528-4.697561-6.0880787-5.0160398l.0008628-1.7899844h5.5092566l.0006247 1.8215446c.0064131.111431.0698016.5292973.6598981.5292973.6808836 0 .5564693-.5981684.5564693-.5981684v-4.3726361s-.9489378 1.6294184-3.4044061 1.2370455c-2.4554712-.39237-2.8060919-1.8148639-2.9712219-2.4967105-.1651328-.6795829-.2680542-1.174855-.2680542-2.0625 0-.8599178-.0383122-34.61864321-.0406109-36.64339281l-.0001077-.09488771zm30.6351382 1.09344342c6.9117365 0 6.7805382 5.4445918 6.7805382 5.4445918v39.5210721h-5.7365952v-1.1522413s-2.086754 2.4978424-5.1507198.8955592c-3.0650979-1.6011513-2.5436924-5.1879097-2.5436924-5.1879097l.0000351-8.8028589c.0025794-.2398669.0684122-2.0251881 1.4352444-3.3674745 1.4669498-1.4405832 3.4553051-1.2178245 3.4553051-1.2178245h2.5425603v-20.4327721s-.0656021-.8966882-.7170766-.8966882c-.6526037 0-.6854033.9566179-.6854033.9566179v16.080489h-6.030665l-.0005626-16.2852138c-.0087587-.3366877-.0366527-5.555347 6.6510318-5.555347zm28.5031432-6.569695v31.41468l.711418.0192211c.593792 0 .593792-.4941403.593792-.4941403v-24.86759869h5.897202v21.90049339s.079171 1.404399-.791723 2.512539c-.870895 1.1081429-1.820962 1.1477197-1.820962 1.1477197s.989654.3946337 1.860548 1.4439758c.870894 1.0482132.791724 2.4921889.791724 2.4921889v14.4024477h-5.936789l-.000309-13.3243353c-.002165-.043998-.019484-.2297601-.158037-.3860879-.158343-.1775284-.277102-.1775284-.277102-.1775284h-.890123v13.8879516h-5.8180296v-49.9715266zm-14.2340414 8.02384579c5.9675612 0 6.2060902 4.59291681 6.2148001 5.06804611l.0002664 15.2041578h-5.556805v-15.4269123s-.0531603-.5009227-.6062332-.5009227c-.5519582 0-.5790885.42064-.5790885.42064v32.2254321s.079173.4477782.6582614.4477782c.4900102 0 .5467595-.3205986.552623-.4192443l.00045-8.2163433h5.4775891l.000339 7.8754281c.0126595.1654646.3391417 5.1294029-6.0570166 5.1294029-6.504565 0-6.1358477-5.1867779-6.1358477-5.1867779l-.0006428-31.5032204c-.0096883-.3249184-.0495263-5.11746431 6.0313048-5.11746431zm-73.7580006-5.70016816v42.49270187h.5575988s.2081099.2374581.5010473-.0554082.1956685-.3901121.1956685-.3901121v-42.04605262l5.7004019.00115789.0007682 41.01721663c.015678.1470376.248026 2.5994908-1.4903372 4.3374305-1.792686 1.7922473-4.4053704 1.6101973-4.4053704 1.6101973h-7.83579091s-2.61381542.18205-4.40650134-1.6101973c-1.79268592-1.7922503-1.48843833-4.344369-1.48843833-4.344369v-41.01027813l5.69927118-.00115789v42.04605262s-.09726862.0972458.19566849.3901121c.29293741.2928663.50217829.0554082.50217829.0554082h.55646783v-42.49270187zm44.8442957-.59701342s2.8128759.11081342 4.2515488 1.54913579 1.3572386 4.52302632 1.3572386 4.52302632v20.17269738s.1085791 1.6825658-.8324397 2.4967105c-.9410187.8141447-1.5743967.9950658-1.5743967.9950658s1.0495978.5789474 1.6105898 1.3026316c.5609919.7236842.7419571 1.3930921.7419571 2.3881579l.0007115 7.6426204c.0126941.1435677.1783816 2.2493941-.8874408 3.6468533-1.1038873 1.4473684-2.4430294 2.1348684-5.2298927 2.1348684h-6.4604558v-46.85176739zm14.5337626 35.74095399s-.1673942-.0203558-.3777654.1843136c-.2092421.2069274-.1459043.3301795-.1459043.3301795v8.4524058s.1673942.4523026.7329089.4523026c.5643854 0 .648084-.4523026.648084-.4523026v-8.9465489zm-44.3104484-34.72101373c5.9643432 0 6.16707 4.5349604 6.1720848 5.00409423l-.0000412 36.6461958h-5.2231058v-1.0674342s-1.8990049 2.3135258-4.6881295.8299731c-2.7891246-1.4824208-2.3140925-4.8057147-2.3140925-4.8057147l.0000416-8.1558683c.0025667-.229176.064831-1.8776574 1.3051717-3.1166422 1.3357486-1.3354261 3.1454001-1.1273669 3.1454001-1.1273669h2.3140896v-18.92660288s-.0588122-.831105-.6526037-.831105-.6232005.88538132-.6232005.88538132v14.89545606h-5.4888988l-.0005553-15.08585244c-.0080458-.3266358-.0237133-5.14451389 6.0538395-5.14451389zm28.932117 33.13115253-.4776089-.0000064v8.3947599h.705764c.5067025 0 .560992-.7236842.560992-.7236842v-6.712171c0-.9769737-.7962466-.9589047-.7962466-.9589047zm-29.0339092-4.5105709s-.1526883-.0203529-.3438338.1707431c-.1900134.191099-.1323304.305305-.1323304.305305v7.8282282s.1515591.419511.6661776.419511c.5146186 0 .5915302-.419511.5915302-.419511v-8.2861842zm29.0087131-25.54039926c-.6808813 0-.5443092.01385177-.4995274.01731471l.0109215.0007774v25.52796055s1.3391421.1085526 1.3391421-1.3569079v-23.35690792s.1085791-.83223684-.8505362-.83223684z" fill="#ab2e33"/><path d="m164.347608 2.25946661v7.4442539c.21729-.35229187 1.198489-1.67028746 3.735798-1.67028746 3.534354 0 3.281982 3.91684325 3.281982 3.91684325v39.9180342h-3.988173l-.000094-38.4191634c-.002249-.1296195-.058484-1.7498629-1.464346-1.7498629-1.087582 0-1.450864.5267465-1.565167 1.1683005v39.1020256h-4.190748v-49.71014369zm23.367699 5.4959617c3.58528 0 3.32838 3.94160559 3.32838 3.94160559v40.1712766h-4.045888l-.000761-38.6884533c-.008742-.2394578-.118025-1.7360686-1.484053-1.7360686-1.103423 0-1.471231.5301234-1.587799 1.1750516v39.3496435h-4.250729v-43.92154285h4.250729v1.38890288c.220685-.35566881 1.216596-1.68041542 3.790121-1.68041542zm11.392998-.52112204c6.124855 0 5.736674 5.39691513 5.736674 5.39691513v24.2844279h-7.17056l.000077 9.2728055c.001997 1.1852594.055922 2.3291557 1.511897 2.3291557 1.511974 0 1.588933-1.3483852 1.588933-1.3483852v-6.1679026h4.108134l-.00035 5.6892637c-.01289 1.7887967-.410235 4.8333128-5.736327 4.8333128-5.22451 0-5.490421-3.8596058-5.502952-4.1455025l-.000589-34.6706379s-.65866-5.47345253 5.465063-5.47345253zm-72.839588-6.23430627c4.55044 0 4.748706 4.49835393 4.756437 5.01739476l.000233 44.68489444h-4.246265l-.000015-45.39546442c-.001065-.11122824-.038841-1.27912478-1.155468-1.27912478-.689016 0-1.239407-.0003988-1.575847-.00072723l-.366181-.00042531v46.67574174h-4.288077v-46.69262361h-1.942025c-1.0608 0-1.147931 1.05402663-1.154906 1.2547936l-.00058 45.43783001h-4.296023l.000269-45.03840883c.008379-.46638804.223774-4.66388037 5.263374-4.66388037zm12.746531 4.73059864c5.939252 0 5.529572 4.80151166 5.529572 4.80151166v39.1864407h-3.791254v-1.7040541s-.748065 1.776088-2.920962 1.8481219-4.418224-.1913422-4.418224-3.9371049l.000537-10.0356421c.009666-.3007246.1911-3.4583326 3.548528-3.4583326h3.5253l-.000596-22.2422593c-.009853-.1121552-.157986-1.45801702-1.592862-1.45801702-1.497271 0-1.484813 1.94491522-1.484813 1.94491522v17.4051907h-3.99949l-.000952-17.7112484c-.014831-.304231-.125641-4.63952176 5.605216-4.63952176zm12.457944.74622797c5.704988 0 5.452616 4.56852529 5.452616 4.56852529v16.2188817h-3.836522v-16.7703934s-.202578-1.40578478-1.51537-1.40578478c-1.193447 0-1.427274 1.16180558-1.459925 1.37304298l-.004518.0327418v32.5368129c0 .9038006.353096 1.9584201 1.565167 1.9584201 1.212068 0 1.363719-1.3551363 1.363719-1.3551363v-9.239474h3.786725l.000848 7.3579585c.013087 2.5821014.10472 5.9480539-5.301813 5.9480539-5.604264 0-5.201371-4.7699955-5.201371-4.7699955l-.000475-31.3866454c-.017056-.171763-.453979-5.06700779 5.150919-5.06700779zm26.215101 3.66584829v37.0051649h-3.533221v-37.0051649zm-37.199548 25.1702202h-1.714552s-.530775.0720339-.917823.4558391c-.385924.3838082-.409681.9848389-.409681.9848389v8.5236357s.096195 1.56111 1.568559 1.56111c1.473497 0 1.473497-1.6095052 1.473497-1.6095052zm58.697648-25.2264959c-1.433886 0-1.511974 1.7344408-1.511974 1.7344408v21.9725922h3.100907v-22.1256642s-.155047-1.5813688-1.588933-1.5813688zm-23.264712-5.31700073c1.129455 0 2.045015.68657238 2.045015 1.53184407 0 .84639831-.91556 1.53184695-2.045015 1.53184695s-2.045012-.68544864-2.045012-1.53184695c0-.84527169.915557-1.53184407 2.045012-1.53184407z" fill="#211e1e"/></g></svg>
`;class le extends ne{static get styles(){return se}static get properties(){return{queryHandler:{type:Object},waybackPagesArchived:{type:String}}}constructor(){super(),this.waybackPagesArchived=""}handleSubmit(e){e.preventDefault();const t=e.target.querySelector("#url").value;this.emitWaybackSearchSubmitted(t),this.queryHandler.performQuery(t)}emitWaybackSearchSubmitted(e){this.dispatchEvent(new CustomEvent("waybackSearchSubmitted",{detail:{query:e}}))}emitWaybackMachineStatsLinkClicked(){this.dispatchEvent(new CustomEvent("waybackMachineStatsLinkClicked"))}emitWaybackMachineLogoLinkClicked(){this.dispatchEvent(new CustomEvent("waybackMachineLogoLink"))}render(){var e;return this.waybackPagesArchived=null!=(e=this.getAttribute("waybackPagesArchived"))?e:"",H`
      <form action="" method="post" @submit=${this.handleSubmit}>
        <p>
          Search the history of over ${this.waybackPagesArchived}
          <a
            @click=${this.emitWaybackMachineStatsLinkClicked}
            data-event-click-tracking="TopNav|WaybackMachineStatsLink"
            href="https://blog.archive.org/2016/10/23/defining-web-pages-web-sites-and-web-captures/"
            >web pages</a
          >
          on the Internet.
        </p>
        <fieldset>
          <a
            @click=${this.emitWaybackMachineLogoLinkClicked}
            data-event-click-tracking="TopNav|WaybackMachineLogoLink"
            href="https://web.archive.org"
            >${ae}</a>
          <label for="url">Search the Wayback Machine</label>
          <div class="search-field">
            <input type="text" name="url" id="url" placeholder="enter URL or keywords" />
            ${oe}
          </div>
        </fieldset>
      </form>
    `}}customElements.define("ia-wayback-search",le)},6344:function(e,t,i){i.d(t,{i:function(){return d},r:function(){return c},s:function(){return S}});var n=i(8035);const r=window,s=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class l{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new l("string"==typeof e?e:e+"",void 0,o),d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new l(i,e,o)},h=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return c(t)})(e):e;var u;const p=window,m=p.trustedTypes,v=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y};class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{s?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=b){var n;const r=this.constructor._$Ep(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:f).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=n.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:f;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||y)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var k,$;w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:w}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.1");class S extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.D)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return n.T}}S.finalized=!0,S._$litElement$=!0,null===(k=globalThis.litElementHydrateSupport)||void 0===k||k.call(globalThis,{LitElement:S});const A=globalThis.litElementPolyfillSupport;null==A||A({LitElement:S}),(null!==($=globalThis.litElementVersions)&&void 0!==$?$:globalThis.litElementVersions=[]).push("3.3.3")},8035:function(e,t,i){var n;i.d(t,{A:function(){return C},D:function(){return K},T:function(){return x},b:function(){return _},j:function(){return F},x:function(){return E}});const r=window,s=r.trustedTypes,o=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,c="?"+l,d=`<${c}>`,h=document,u=()=>h.createComment(""),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,m=Array.isArray,v=e=>m(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),g="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,b=/>/g,w=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,$=/"/g,S=/^(?:script|style|textarea|title)$/i,A=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),E=A(1),_=A(2),x=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),I=new WeakMap,P=h.createTreeWalker(h,129,null,!1);function L(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const T=(e,t)=>{const i=e.length-1,n=[];let r,s=2===t?"<svg>":"",o=f;for(let t=0;t<i;t++){const i=e[t];let c,h,u=-1,p=0;for(;p<i.length&&(o.lastIndex=p,h=o.exec(i),null!==h);)p=o.lastIndex,o===f?"!--"===h[1]?o=y:void 0!==h[1]?o=b:void 0!==h[2]?(S.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=w):void 0!==h[3]&&(o=w):o===w?">"===h[0]?(o=null!=r?r:f,u=-1):void 0===h[1]?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=void 0===h[3]?w:'"'===h[3]?$:k):o===$||o===k?o=w:o===y||o===b?o=f:(o=w,r=void 0);const m=o===w&&e[t+1].startsWith("/>")?" ":"";s+=o===f?i+d:u>=0?(n.push(c),i.slice(0,u)+a+i.slice(u)+l+m):i+l+(-2===u?(n.push(void 0),t):m)}return[L(e,s+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class M{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const d=e.length-1,h=this.parts,[p,m]=T(e,t);if(this.el=M.createElement(p,i),P.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=P.nextNode())&&h.length<d;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(a)||t.startsWith(l)){const i=m[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+a).split(l),t=/([.?@])?(.*)/.exec(i);h.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?H:"?"===t[1]?B:"@"===t[1]?z:U})}else h.push({type:6,index:r})}for(const t of e)n.removeAttribute(t)}if(S.test(n.tagName)){const e=n.textContent.split(l),t=e.length-1;if(t>0){n.textContent=s?s.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],u()),P.nextNode(),h.push({type:2,index:++r});n.append(e[t],u())}}}else if(8===n.nodeType)if(n.data===c)h.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(l,e+1));)h.push({type:7,index:r}),e+=l.length-1}r++}}static createElement(e,t){const i=h.createElement("template");return i.innerHTML=e,i}}function O(e,t,i=e,n){var r,s,o,a;if(t===x)return t;let l=void 0!==n?null===(r=i._$Co)||void 0===r?void 0:r[n]:i._$Cl;const c=p(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=O(e,l._$AS(e,t.values),l,n)),t}class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:h).importNode(i,!0);P.currentNode=r;let s=P.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new D(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new W(s,this,e)),this._$AV.push(t),l=n[++a]}o!==(null==l?void 0:l.index)&&(s=P.nextNode(),o++)}return P.currentNode=h,r}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class D{constructor(e,t,i,n){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),p(e)?e===C||null==e||""===e?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==x&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):v(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&p(this._$AH)?this._$AA.nextSibling.data=e:this.$(h.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=M.createElement(L(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{const e=new R(r,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new M(e)),t}T(e){m(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new D(this.k(u()),this.k(u()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class U{constructor(e,t,i,n,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let s=!1;if(void 0===r)e=O(this,e,t,0),s=!p(e)||e!==this._$AH&&e!==x,s&&(this._$AH=e);else{const n=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=O(this,n[i+o],t,o),a===x&&(a=this._$AH[o]),s||(s=!p(a)||a!==this._$AH[o]),a===C?e=C:e!==C&&(e+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class H extends U{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}const N=s?s.emptyScript:"";class B extends U{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,N):this.element.removeAttribute(this.name)}}class z extends U{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=O(this,e,t,0))&&void 0!==i?i:C)===x)return;const n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const F={O:a,P:l,A:c,C:1,M:T,L:R,R:v,D:O,I:D,V:U,H:B,N:z,U:H,F:W},j=r.litHtmlPolyfillSupport;null==j||j(M,D),(null!==(n=r.litHtmlVersions)&&void 0!==n?n:r.litHtmlVersions=[]).push("2.8.0");const K=(e,t,i)=>{var n,r;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new D(t.insertBefore(u(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o}},1615:function(e,t,i){i.d(t,{L:function(){return a},c:function(){return $},m:function(){return E},s:function(){return r}});var n=Object.assign;const r=(e,...t)=>({strTag:!0,strings:e,values:t}),s=(e,t,i)=>{let n=e[0];for(let r=1;r<e.length;r++)n+=t[i?i[r-1]:r-1],n+=e[r];return n},o=e=>{return"string"!=typeof(t=e)&&"strTag"in t?s(e.strings,e.values):e;var t},a="lit-localize-status";class l{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const c=[];for(let e=0;e<256;e++)c[e]=(e>>4&15).toString(16)+(15&e).toString(16);const d=new WeakMap,h=new Map;function u(e,t,i){var r;if(e){const o=null!==(r=null==i?void 0:i.id)&&void 0!==r?r:function(e){const t="string"==typeof e?e:e.strings;let i=h.get(t);return void 0===i&&(i=function(e,t){return(t?"h":"s")+function(e){let t=0,i=8997,n=0,r=33826,s=0,o=40164,a=0,l=52210;for(let c=0;c<e.length;c++)i^=e.charCodeAt(c),t=435*i,n=435*r,s=435*o,a=435*l,s+=i<<8,a+=r<<8,n+=t>>>16,i=65535&t,s+=n>>>16,r=65535&n,l=a+(s>>>16)&65535,o=65535&s;return c[l>>8]+c[255&l]+c[o>>8]+c[255&o]+c[r>>8]+c[255&r]+c[i>>8]+c[255&i]}("string"==typeof e?e:e.join(""))}(t,"string"!=typeof e&&!("strTag"in e)),h.set(t,i)),i}(t),a=e[o];if(a){if("string"==typeof a)return a;if("strTag"in a)return s(a.strings,t.values,a.values);{let e=d.get(a);return void 0===e&&(e=a.values,d.set(a,e)),n(n({},a),{values:e.map((e=>t.values[e]))})}}}return o(t)}function p(e){window.dispatchEvent(new CustomEvent(a,{detail:e}))}let m,v,g,f,y,b="",w=new l;w.resolve();let k=0;const $=e=>(function(){if(_)throw new Error("lit-localize can only be configured once");E=(e,t)=>u(y,e,t),_=!0}(),b=v=e.sourceLocale,g=new Set(e.targetLocales),g.add(e.sourceLocale),f=e.loadLocale,{getLocale:S,setLocale:A}),S=()=>b,A=e=>{if(e===(null!=m?m:b))return w.promise;if(!g||!f)throw new Error("Internal error");if(!g.has(e))throw new Error("Invalid locale code");k++;const t=k;return m=e,w.settled&&(w=new l),p({status:"loading",loadingLocale:e}),(e===v?Promise.resolve({templates:void 0}):f(e)).then((i=>{k===t&&(b=e,m=void 0,y=i.templates,p({status:"ready",readyLocale:e}),w.resolve())}),(i=>{k===t&&(p({status:"error",errorLocale:e,errorMessage:i.toString()}),w.reject(i))})),w.promise};let E=o,_=!1},5575:function(e,t,i){i.d(t,{P:function(){return r}});var n=i(7750);class r{constructor(e){this.generator=e.generator}get(){return(0,n.a)(this,void 0,void 0,(function*(){return this.cachedResponse?this.cachedResponse:this.previousPromise?(this.previousPromise=this.previousPromise.then((e=>e)),this.previousPromise):(this.previousPromise=this.generateSingletonAndCache(),this.previousPromise)}))}reset(){this.cachedResponse=void 0,this.previousPromise=void 0}generateSingletonAndCache(){return(0,n.a)(this,void 0,void 0,(function*(){const e=yield this.generator();return this.cachedResponse=e,e}))}}},8915:function(e,t,i){i.d(t,{e:function(){return s}});var n=Object.assign;const r=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?n(n({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function s(e){return(t,i)=>{return void 0!==i?(n=e,s=i,void t.constructor.createProperty(s,n)):r(e,t);var n,s}}},4719:function(e,t,i){i.d(t,{e:function(){return r}});var n=i(2539);function r(e){return(0,n.o)({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}},7019:function(e,t,i){i.d(t,{e:function(){return n}});const n=e=>t=>{return"function"==typeof t?(i=e,n=t,customElements.define(i,n),n):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t);var i,n};var r;null===(r=window.HTMLSlotElement)||void 0===r||r.prototype.assignedElements},2539:function(e,t,i){i.d(t,{i:function(){return s},o:function(){return r}});var n=Object.assign;const r=({finisher:e,descriptor:t})=>(i,r)=>{var s;if(void 0===r){const r=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:n(n({},i),{key:r});return null!=e&&(o.finisher=function(t){e(t,r)}),o}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,r,t(r)),null==e||e(n,r)}};function s(e,t){return r({descriptor:i=>{const n={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[t]&&(this[t]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}},9262:function(e,t,i){i.d(t,{t:function(){return s}});var n=i(8915),r=Object.assign;function s(e){return(0,n.e)(r(r({},e),{state:!0}))}},7750:function(e,t,i){function n(e,t,i,n){var r,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,i,o):r(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o}function r(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,i,n){return new(i||(i=Promise))((function(r,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}l((n=n.apply(e,t||[])).next())}))}i.d(t,{_:function(){return n},a:function(){return s},b:function(){return r}}),"function"==typeof SuppressedError&&SuppressedError},3245:function(e,t,i){i.d(t,{AH:function(){return n.i},JW:function(){return r.b},WF:function(){return n.s},XX:function(){return r.D},iz:function(){return n.r},qy:function(){return r.x},s6:function(){return r.A}});var n=i(6344),r=i(8035)},3274:function(e,t,i){i.d(t,{EM:function(){return n.e},MZ:function(){return r.e},P:function(){return o.i},YG:function(){return a.e},wk:function(){return s.t}});var n=i(7019),r=i(8915),s=i(9262),o=i(2539),a=i(4719)},1788:function(e,t,i){let n;var r;i.d(t,{K:function(){return n}}),(r=n||(n={})).Off="off",r.Fixed="fixed",r.PageBottom="pageBottom"},3923:function(e,t,i){i.r(t),i.d(t,{AnalyticsHandler:function(){return a}});var n=Object.assign;class r{constructor(e){var t,i,n,r;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=null!==(t=null==e?void 0:e.defaultService)&&void 0!==t?t:this.DEFAULT_SERVICE,this.imageUrl=null!==(i=null==e?void 0:e.imageUrl)&&void 0!==i?i:this.DEFAULT_IMAGE_URL,this.imageContainer=null!==(n=null==e?void 0:e.imageContainer)&&void 0!==n?n:document.body,this.requireImagePing=null!==(r=null==e?void 0:e.requireImagePing)&&void 0!==r&&r}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing)return void this.sendPingViaImage(t);const i=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{i(t)}catch(e){this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,i=n({kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random()},e.eventConfiguration);this.sendPing(i)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const i=e;i.eventConfiguration=t,this.sendEvent(i)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const i=null!=e?e:{};i.service=null!==(t=i.service)&&void 0!==t?t:this.defaultService;const n=new URL(this.imageUrl),r=Object.keys(i);return r.forEach((e=>{const t=i[e];n.searchParams.append(e,t)})),n.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),n.searchParams.append("count",`${r.length+2}`),n}}class s{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const t=new URL(e).searchParams.get("iax");if(!t)return;const i=t.split("|"),n=i.length>=1?i[1]:"",r=i.length>=2?i[2]:"";this.analyticsManager.sendEventNoSampling({category:i[0],action:n,label:r})}trackPageView(e){const t={kind:"pageview"};t.timediff=(new Date).getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=""===document.referrer?"-":document.referrer;const{domInteractive:i,defaultFontSize:n}=this;i&&(t.loadtime=i),n&&(t.iaprop_fontSize=n),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),(null==e?void 0:e.mediaType)&&(t.iaprop_mediaType=e.mediaType),(null==e?void 0:e.mediaLanguage)&&(t.iaprop_mediaLanguage=e.mediaLanguage),(null==e?void 0:e.primaryCollection)&&(t.iaprop_primaryCollection=e.primaryCollection),(null==e?void 0:e.page)&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize;return`${1.6*parseFloat(t)}${t.replace(/(\d*\.\d+)|\d+/,"")}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return 0!==e.length?e[0].domInteractive:void 0}}function o(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class a{constructor(e){o(this,"analyticsBackend",void 0),o(this,"analyticsHelpers",void 0),e.enableAnalytics&&(this.analyticsBackend=new r,this.analyticsHelpers=new s(this.analyticsBackend))}sendPing(e){var t;null==(t=this.analyticsBackend)||t.sendPing(e)}sendEvent(e){var t;null==(t=this.analyticsBackend)||t.sendEvent(e)}send_event(e,t,i,n){this.sendEvent({category:e,action:t,label:i,eventConfiguration:n})}sendEventNoSampling(e){var t;null==(t=this.analyticsBackend)||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;null==(t=this.analyticsHelpers)||t.trackIaxParameter(e)}trackPageView(e){var t;null==(t=this.analyticsHelpers)||t.trackPageView(e)}}},9389:function(e,t,i){i.d(t,{N:function(){return o}});var n=i(5768);const r=new WeakSet;class s extends n.i{constructor(e){super(e)}update(e,[t,i]){return r.has(e)||(t(),r.add(e)),this.render(t,i)}render(e,t){return t()}}const o=(0,n.e)(s)},9371:function(e,t,i){var n={};i.r(n),i.d(n,{MODE:function(){return P},NODE_ENV:function(){return L},SNOWPACK_PUBLIC_ARCHIVE_API_URL:function(){return l},SNOWPACK_PUBLIC_ARCHIVE_IMAGE_URL:function(){return b},SNOWPACK_PUBLIC_ARCHIVE_IT_COLLECTION_URL:function(){return p},SNOWPACK_PUBLIC_ARCHIVE_IT_PARTNER_URL:function(){return m},SNOWPACK_PUBLIC_ARCHIVE_NAV_URL:function(){return a},SNOWPACK_PUBLIC_BASE_PATH:function(){return y},SNOWPACK_PUBLIC_BRAINTREE_AUTH_TOKEN:function(){return E},SNOWPACK_PUBLIC_ENVIRONMENT:function(){return o},SNOWPACK_PUBLIC_FEATURE_FEEDBACK_SERVICE_URL:function(){return I},SNOWPACK_PUBLIC_GOOGLEPAY_MERCHANT_ID:function(){return C},SNOWPACK_PUBLIC_ITEM_MANAGEMENT_URL:function(){return g},SNOWPACK_PUBLIC_RADIO_SEARCH_URL:function(){return u},SNOWPACK_PUBLIC_RECAPTCHA_SITE_KEY:function(){return _},SNOWPACK_PUBLIC_SENTRY_DSN:function(){return k},SNOWPACK_PUBLIC_SENTRY_ERROR_SAMPLE_RATE:function(){return S},SNOWPACK_PUBLIC_SENTRY_TRACES_SAMPLE_RATE:function(){return $},SNOWPACK_PUBLIC_SUPPRESS_FACETS:function(){return w},SNOWPACK_PUBLIC_TESTING:function(){return s},SNOWPACK_PUBLIC_TV_SEARCH_URL:function(){return h},SNOWPACK_PUBLIC_USER_LISTS_API_URL:function(){return v},SNOWPACK_PUBLIC_VENMO_PROFILE_ID:function(){return x},SNOWPACK_PUBLIC_VERSION:function(){return r},SNOWPACK_PUBLIC_WAYBACK_SEARCH_URL:function(){return d},SNOWPACK_PUBLIC_WAYBACK_URL:function(){return c},SNOWPACK_PUBLIC_WEB_ARCHIVES_SERVICE_URL:function(){return f},SNOWPACK_PUBLIC_ZENDESK_HELP_WIDGET_KEY:function(){return A},SSR:function(){return T}});const r="main---8aac9035",s="false",o="prod",a="",l="archive.org",c="web.archive.org",d="https://web.archive.org/web/*/",h="https://archive.org/tv",u="https://archive.org/search.php",p="https://archive-it.org/collections/",m="https://archive-it.org/organizations/",v="https://archive.org",g="https://archive.org/manage/",f="https://archive.org/services/web-archives/service.php",y="/offshoot_assets/",b="https://archive.org",w="false",k="https://f36cc7e0e3484c2ab9aa70f5999ee9ca@sentry.archive.org/2",$="0.1",S="0.5",A="685f6dc4-48c5-411f-8463-cc6dd50abe2d",E="production_x6ffdgk2_pqd7hz44swp6zvvw",_="6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2",x="2878003111190856236",C="14255500436693515703",I="https://archive.org/services/feature-feedback",P="production",L="production",T=!1;var M=i(3245),O=i(3274),R=i(5141),D=i(2668),U=Object.assign;class H extends D.U{trackClick(e){var t,i;const n=null==(i=null==(t=e.currentTarget)?void 0:t.dataset)?void 0:i.eventClickTracking;void 0!==n&&this.dispatchEvent(new CustomEvent("trackClick",{bubbles:!0,composed:!0,detail:{event:n}}))}trackSubmit(e){var t,i;const n=null==(i=null==(t=e.currentTarget)?void 0:t.dataset)?void 0:i.eventSubmitTracking;void 0!==n&&this.dispatchEvent(new CustomEvent("trackSubmit",{bubbles:!0,composed:!0,detail:{event:n}}))}}var N={audio:D.m`
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="audioTitleID audioDescID"
  >
    <title id="audioTitleID">Audio icon</title>
    <desc id="audioDescID">An illustration of an audio speaker.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(10, 8)" class="fill-color">
        <path
          d="M19.4264564,11.8585048 L19.4264564,20.7200433 C19.4264564,22.3657576 18.8838179,23.2519114 16.8489237,23.2519114 C12.2364969,23.125318 7.75972977,23.125318 3.14730298,23.2519114 C1.24806842,23.2519114 0.569770368,22.492351 0.569770368,20.7200433 L0.569770368,2.74377955 C0.569770368,1.09806526 1.11240881,0.211911416 3.14730298,0.211911416 C7.75972977,0.338504822 12.2364969,0.338504822 16.8489237,0.211911416 C18.7481583,0.211911416 19.4264564,0.971471855 19.4264564,2.74377955 C19.2907967,5.78202131 19.4264564,8.82026306 19.4264564,11.8585048 L19.4264564,11.8585048 Z M10.0659432,2.74377955 C8.16670861,2.74377955 6.67445288,4.13630702 6.67445288,5.90861471 C6.67445288,7.6809224 8.16670861,9.07344988 10.0659432,9.07344988 C11.9651777,9.07344988 13.4574335,7.6809224 13.4574335,5.90861471 C13.4574335,4.13630702 11.8295181,2.74377955 10.0659432,2.74377955 L10.0659432,2.74377955 Z M10.0659432,11.4787246 C7.21709133,11.4787246 5.04653754,13.6308125 5.04653754,16.1626806 C5.04653754,18.8211422 7.35275094,20.8466367 10.0659432,20.8466367 C12.914795,20.8466367 15.0853488,18.6945488 15.0853488,16.1626806 C15.0853488,13.6308125 12.7791354,11.4787246 10.0659432,11.4787246 L10.0659432,11.4787246 Z"
        ></path>
        <ellipse cx="10.2016028" cy="16.5690777" rx="1.35659611" ry="1.34075134"></ellipse>
      </g>
    </g>
  </svg>
`,close:D.m`
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="closeTitleID closeDescID"
  >
    <title id="closeTitleID">Close icon</title>
    <desc id="closeDescID">A line drawing of an X</desc>
    <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
  </svg>
`,donate:D.m`
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="donateTitleID donateDescID"
  >
    <title id="donateTitleID">Donate icon</title>
    <desc id="donateDescID">An illustration of a heart shape</desc>
    <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
  </svg>
`,donateUnpadded:D.m`
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
    aria-labelledby="donateTitleID donateDescID"
  >
    <title id="donateTitleID">Donate icon</title>
    <desc id="donateDescID">An illustration of a heart shape</desc>
    <path class="fill-color" d="m32.6,8.12c-1.57,-1.51 -3.46,-2.21 -5.65,-2.11c-1,0.03 -2.14,0.51 -3.42,1.44c-1.28,0.92 -2.28,2.09 -3.03,3.51c-0.71,-1.41 -1.72,-2.59 -3,-3.51c-1.29,-0.93 -2.43,-1.41 -3.41,-1.44c-1.46,-0.07 -2.8,0.23 -4.02,0.88c-1.23,0.65 -2.21,1.6 -2.94,2.83c-0.74,1.24 -1.11,2.63 -1.12,4.17c-0.05,2.56 0.85,5.01 2.68,7.37c1.46,1.88 3.52,4.21 6.19,7.04c2.66,2.81 4.53,4.71 5.62,5.69c1,-0.88 2.85,-2.75 5.55,-5.6s4.81,-5.23 6.31,-7.13c1.81,-2.36 2.71,-4.81 2.66,-7.37c-0.04,-2.35 -0.83,-4.28 -2.4,-5.77z"/>
  </svg>
`,ellipses:D.m`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="ellipsesTitleID ellipsesDescID"
  >
    <title id="ellipsesTitleID">Ellipses icon</title>
    <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
    <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
  </svg>
`,iaLogo:D.m`
  <svg
    class="ia-logo"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logoTitleID logoDescID"
  >
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" fill="white">
        <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
      </mask>
      <use fill="#FFFFFF" xlink:href="#path-1"></use>
      <g  mask="url(#mask-2)" fill="#FFFFFF">
        <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
      </g>
    </g>
  </svg>
`,images:D.m`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="imagesTitleID imagesDescID"
  >
    <title id="imagesTitleID">Images icon</title>
    <desc id="imagesDescID">An illustration of two photographs.</desc>
    <path class="fill-color" d="m20.8219178 15.3769871c0 1.1136708-.8767123 1.8932404-1.8630137 1.8932404s-1.9726027-.8909367-1.9726027-1.8932404c0-1.0023038.8767123-1.8932404 1.9726027-1.8932404.9863014 0 1.8630137.8909366 1.8630137 1.8932404zm-5.9178082-3.7864808h15.4520548v6.0138225l-1.9726028-3.3410125-2.6301369 6.3479237-2.1917809-2.67281-6.1369863 5.1228859h-2.5205479zm-1.7534247-1.6705063v14.9231892h18.8493151v-14.9231892zm-2.9589041 7.2388604c.2191781 0 1.9726028-.3341012 1.9726028-.3341012v-2.0046075l-4.1643836.5568354c.43835616 4.7887846.87671233 9.9116704 1.31506849 14.700455 6.02739731-.5568354 13.26027401-1.5591391 19.39726031-2.1159746-.1095891-.5568354-.1095891-2.0046075-.2191781-2.67281-.4383562.1113671-1.4246575 0-1.8630137.1113671v.8909367c-5.1506849.4454683-10.3013699 1.1136708-15.4520548 1.6705062.109589-.111367-.5479452-7.0161262-.9863014-10.8026071z" fill-rule="evenodd"/>
  </svg>
`,search:D.m`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="searchTitleID searchDescID"
  >
    <title id="searchTitleID">Search icon</title>
    <desc id="searchDescID">An illustration of a magnifying glass.</desc>
    <path class="fill-color" d="m32.4526364 29.8875889-8.1719472-7.9751279c1.1046135-1.4876138 1.7652549-3.3102407 1.7652549-5.2846451 0-.101185-.0142895-.1981539-.030573-.2944743.0166158-.0976175.0309053-.196208.0309053-.2990145 0-4.9814145-4.152935-9.0343271-9.2572866-9.0343271-.0907218 0-.1781206.01394537-.2655193.02594487-.0880633-.0119995-.1747974-.02594487-.2655193-.02594487-5.1046839 0-9.25761889 4.0529126-9.25761889 9.0343271 0 .1011849.01395722.1981539.03057294.2947985-.01694804.0976176-.03090525.1958838-.03090525.2986903 0 4.9814145 4.1526027 9.0346514 9.2572866 9.0346514.0907218 0 .1777882-.0139454.2658516-.0262692.0873987.0123238.1741328.0262692.265187.0262692 1.7306942 0 3.3467399-.4747911 4.7338208-1.2852439l8.2882574 8.0886366c.3652137.3564177.843082.53414 1.3212826.53414.4782007 0 .9567336-.1780467 1.3212827-.53414.7294304-.7118622.7294304-1.8660845-.0003323-2.5782711zm-15.9526364-7.8875889c-.0832667-.0118703-.1652765-.0253024-.2513711-.0253024-2.8781993 0-5.2197212-2.3278242-5.2197212-5.1891862 0-.0974612-.013197-.1908615-.0289077-.2836371.0160249-.0940251.0292219-.1889874.0292219-.2880105 0-2.861362 2.3418361-5.1891861 5.2200354-5.1891861.0854662 0 .1677902-.0131198.2510569-.0246777.0826383.0115579.1649623.0246777.2510569.0246777 2.8781993 0 5.2197212 2.3278241 5.2197212 5.1891861 0 .0974612.0135112.1908616.0289077.2839496-.0157107.0940251-.0295361.1886749-.0295361.287698 0 2.861362-2.3415219 5.1891862-5.2197212 5.1891862-.0860946 0-.1684187.0134321-.2507427.0253024z" fill-rule="evenodd" />
  </svg>
`,software:D.m`
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="softwareTitleID softwareDescID"
  >
    <title id="softwareTitleID">Software icon</title>
    <desc id="softwareDescID">An illustration of a 3.5" floppy disk.</desc>
    <path class="fill-color" d="m32 30.6900373v-21.44521088c0-.82988428-.4156786-1.24482642-1.2470357-1.24482642h-21.50592858c-.83135715 0-1.24703572.4221795-1.24703572 1.26653851v21.44521089c0 .8588337.41567857 1.2882506 1.24703572 1.2882506h21.48327168c.8458575 0 1.2687863-.4366542 1.2687863-1.3099627zm-5.9950155-20.4410268v6.114667c0 .6694561-.3428744 1.0041841-1.0286232 1.0041841h-10.1294464c-.2622159 0-.4773054-.0802141-.6452685-.2406423s-.2519447-.3642806-.2519447-.6115572v-6.1363791l.0217506-.1311772h12.0326259zm-4.9437353.8295827v5.0010178h3.0405558v-5.0010178zm-9.7134658 18.8035735v-7.753025c0-.5241057.1604108-.9025595.4812325-1.1353613.1897138-.1453504.4011782-.2180256.6343932-.2180256h14.7451099c.3208217 0 .5905898.1091636.8093044.3274907s.3280719.5023936.3280719.8521995v7.8181612l-.0217506.1094652h-16.9772676z"/>
  </svg>
`,texts:D.m`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="textsTitleID textsDescID"
  >
    <title id="textsTitleID">Texts icon</title>
    <desc id="textsDescID">An illustration of an open book.</desc>
    <path class="fill-color" d="m10.3323235 11.0007023h6.9060825c.8851083 0 1.5847122.3064258 2.0988114.9192774v14.4324451h-.6460032c-.1435563-.120323-.3528315-.2434552-.6278257-.3693964-.2749942-.1259413-.5201585-.2191097-.7354929-.2795053l-.3048241-.1081503h-5.7042647c-.3108832 0-.5621067-.0601615-.7536705-.1804846-.0717781-.0599274-.1256117-.1439663-.1615008-.2521166-.0358891-.1081502-.0598928-.2043619-.0720112-.2886348v-13.8741368zm19.1752505 0v13.603761c-.0717781.3361555-.2211606.5943584-.4481473.7746089-.0717781.0599274-.1733862.1079162-.304824.1439663-.1314379.0360501-.2451643.0601615-.3411793.0723343h-5.5965975c-.9568865.2640552-1.5068748.5164059-1.649965.757052h-.6634817v-14.4324451c.5140992-.6128516 1.2076439-.9192774 2.0806339-.9192774h6.92426zm1.3814961.6489017-.1796783 15.2976474c-.0955489 0-1.0342578.0119386-2.8161268.035816-1.7818691.0238773-3.3006293.0898911-4.5562806.1980414-1.2556514.1081503-1.9613144.2884008-2.1169891.5407514-.0955488.1924233-.5439291.273419-1.345141.2429871-.8012118-.0304319-1.3155441-.1776755-1.5429969-.4417308-.334654-.3843783-3.4558378-.5765674-9.36355164-.5765674v-15.3875385l-.96830576.3960828v16.2702977c6.4096947-.2041278 9.7760429-.0840388 10.0990445.3602669.2391051.276228.9864833.414342 2.2421347.414342.1915638 0 .4187835-.0210682.6816593-.0632047s.4810068-.0870821.6543929-.1348367c.1733862-.0477547.2719646-.0838048.2957353-.1081503.0838965-.1563732.9599161-.2675666 2.6280587-.3335805 1.6681426-.0660138 3.3213703-.0931684 4.9596831-.0814638l2.4392915.0182591v-16.2344816z"/>
  </svg>
`,upload:D.m`
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="uploadTitleID uploadDescID"
  >
    <title id="uploadTitleID">Upload icon</title>
    <desc id="uploadDescID">An illustration of a horizontal line over an up pointing arrow.</desc>
    <path class="fill-color" d="m20 12.8 8 10.4h-4.8v8.8h-6.4v-8.8h-4.8zm12-4.8v3.2h-24v-3.2z" fill-rule="evenodd"/>
  </svg>
`,uploadUnpadded:D.m`
  <svg
    height="14"
    width="14"
    viewBox="8 8 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="uploadTitleID uploadDescID"
  >
    <title id="uploadTitleID">Upload files</title>
    <path class="fill-color" d="m20 12.8 8 10.4h-4.8v8.8h-6.4v-8.8h-4.8zm12-4.8v3.2h-24v-3.2z" fill-rule="evenodd"/>
  </svg>
`,user:D.m`
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="userTitleID userDescID"
  >
    <title id="userTitleID">User icon</title>
    <desc id="userDescID">An illustration of a person's head and chest.</desc>
    <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
  </svg>
`,video:D.m`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="videoTitleID videoDescID"
  >
    <title id="videoTitleID">Video icon</title>
    <desc id="videoDescID">An illustration of two cells of a film strip.</desc>
    <path class="fill-color" d="m31.0117647 12.0677966c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.3898305c0 .4067797-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711864-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.2711865-.7058823-.6779661v-.6779661c0-.4067797.2823529-.6779661.7058823-.6779661h1.2705883c.4235294 0 .7058823.2711864.7058823.6779661zm-4.0941176-10.440678c0 .5423729-.4235295.9491525-.9882353.9491525h-11.5764706c-.5647059 0-.9882353-.4067796-.9882353-.9491525v-6.9152542c0-.5423729.4235294-.9491526.9882353-.9491526h11.5764706c.5647058 0 .9882353.4067797.9882353.9491526zm-.1411765 11.2542373c0 .5423729-.4235294.9491525-.9882353.9491525h-11.5764706c-.5647059 0-.9882353-.4067796-.9882353-.9491525v-6.9152542c0-.5423729.4235294-.9491526.9882353-.9491526h11.5764706c.5647059 0 .9882353.4067797.9882353.9491526zm-14.9647059-17.220339c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.3898305c0 .4067797-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711864-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm0 3.2542373c0 .4067796-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.2711865-.70588236-.6779661v-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661zm20.0470588-20.4745763h-.8470588v.27118644.6779661c0 .40677966-.2823529.6779661-.7058823.6779661h-1.2705883c-.4235294 0-.7058823-.27118644-.7058823-.6779661v-.6779661-.27118644h-16.5176471v.27118644.6779661c0 .40677966-.2823529.6779661-.7058823.6779661h-1.27058828c-.42352941 0-.70588236-.27118644-.70588236-.6779661v-.6779661-.27118644h-1.12941176v24h1.12941176v-.2711864-.6779661c0-.4067797.28235295-.6779661.70588236-.6779661h1.27058828c.4235294 0 .7058823.2711864.7058823.6779661v.6779661.2711864h16.6588235v-.2711864-.6779661c0-.4067797.282353-.6779661.7058824-.6779661h1.2705882c.4235294 0 .7058824.2711864.7058824.6779661v.6779661.2711864h.8470588v-24z" fill-rule="evenodd"/>
  </svg>
`,web:D.m`
  <svg
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="webTitleID webDescID"
  >
    <title id="webTitleID">Web icon</title>
    <desc id="webDescID">An illustration of a computer application window</desc>
    <path class="fill-color" d="m8 28.7585405v-8.1608108-9.3577297h24v9.3577297 8.1608108zm14.2702703-15.8863783h-12.43243246v2.6114594h12.43243246zm7.7837838 14.0365946v-7.0727027-1.8497838h-20.21621626v1.8497838 7.0727027zm-3.7837838-14.0365946h-2.7027027v2.6114594h2.7027027zm4 0h-2.7027027v2.6114594h2.7027027z" fill-rule="evenodd"/>
  </svg>
`};class B extends D.U{constructor(){super(),this.fill="fff",this.active=!1}static get properties(){return{fill:{type:String},active:{type:Boolean}}}}class z extends B{static get styles(){return D.f`
      svg {
        display: block;
        height: 4rem;
        width: 4rem;
      }
      .fill-color {
        fill: var(--activeColor);
      }
    `}static get closed(){return D.m`
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hamburgerTitleID hamburgerDescID">
        <title id="hamburgerTitleID">Hamburger icon</title>
        <desc id="hamburgerDescID">An icon used to represent a menu that can be toggled by interacting with this icon.</desc>
        <path d="m30.5 26.5c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5z" fill="#999" fill-rule="evenodd"/>
      </svg>
    `}static get opened(){return N.close}render(){return this.active?z.opened:z.closed}}customElements.define("icon-hamburger",z);var W=D.f`
  .dropdown-toggle {
    display: block;
    text-transform: uppercase;
    color: var(--grey80);
    cursor: pointer;
  }

  .dropdown-toggle svg {
    height: 100%;
    width: 4rem;
  }

  .dropdown-toggle .fill-color {
    fill: var(--iconFill);
  }

  .dropdown-toggle:active .fill-color,
  .dropdown-toggle:focus .fill-color,
  .dropdown-toggle:hover .fill-color {
    fill: var(--linkHoverColor);
  }

  .active {
    border-radius: 1rem 1rem 0 0;
    background: var(--activeButtonBg);
  }

  .active .fill-color {
    fill: var(--activeColor);
  }

  span {
    display: none;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--loginTextColor);
  }

  span a {
    color: inherit;
    text-decoration: none;
    outline: 0;
  }

  a:hover,
  a:active,
  a:focus {
    color: var(--linkHoverColor) !important;
    outline: none !important;
    outline-offset: inherit !important;
  }

  @media (min-width: 890px) {
    .logged-out-toolbar {
      padding: 1rem 0.5rem;
      vertical-align: middle;
    }

    .active {
      background: transparent;
    }

    .dropdown-toggle {
      display: inline-block;
      vertical-align: middle;
    }

    .dropdown-toggle svg {
      height: 3rem;
      width: 3rem;
      display: block;
    }

    span {
      display: inline;
      vertical-align: middle;
    }
  }
`,F=(e,t)=>/^https?:/.test(e)?e:`${t}${e}`;customElements.define("login-button",class extends H{static get styles(){return W}static get properties(){return{baseHost:{type:String},config:{type:Object},openMenu:{type:String}}}constructor(){super(),this.config={},this.openMenu=""}get signupPath(){return F("/account/signup",this.baseHost)}get loginPath(){return F("/account/login",this.baseHost)}get analyticsEvent(){return`${this.config.eventCategory}|NavLoginIcon`}get menuOpened(){return"login"===this.openMenu}get avatarClass(){return"dropdown-toggle"+(this.menuOpened?" active":"")}toggleDropdown(e){e.preventDefault(),this.trackClick(e),this.dropdownTabIndex=this.menuOpened?"":"-1",this.dispatchEvent(new CustomEvent("menuToggled",{bubbles:!0,composed:!0,detail:{menuName:"login"}}))}render(){return D.m`
      <div class="logged-out-toolbar">
        <a
          class="${this.avatarClass}"
          @click=${this.toggleDropdown}
          data-event-click-tracking="${this.analyticsEvent}"
        >
          ${N.user}
        </a>
        <span>
          <a href="${this.signupPath}">Sign up</a>
          |
          <a href="${this.loginPath}">Log in</a>
        </span>
      </div>
    `}});var j=D.f`
  input[type="text"] {
    color: var(--grey13);
  }

  input:focus {
    outline: none;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .search {
    padding-top: 0;
    margin-right: 0.5rem;
  }
  .search svg {
    position: relative;
    fill: var(--activeSearchColor);
  }
  .search-activated {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 0;
    right: 4rem;
    bottom: 0;
    left: 4rem;
    z-index: 3;
    padding: 0.5rem 0.2rem;
    border-radius: 1rem 1rem 0 0;
    background: var(--searchActiveBg);
  }
  .search-inactive {
    display: none;
  }
  .search-activated .highlight,
  .search-activated .search {
    background: var(--searchActiveInputBg);
    border-radius: 0.5rem;
  }
  .search-activated .highlight {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin: 0 0.5rem;
  }
  .search-activated .search {
    height: 100%;
    padding: 0;
    margin-right: 0;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
  .search-activated .search svg {
    height: 3rem;
    width: 3rem;
  }
  .search-activated .search-field {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.6rem;
    text-align: center;
  }
  .search-activated .search-field:focus {
    outline: none;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .fade-in {
    animation: fade-in 0.2s forwards;
  }

  @media (min-width: 890px) {
    .search svg {
      display: inline;
      width: 2.8rem;
      height: 2.8rem;
      vertical-align: -14px;
    }
    .search path {
      fill: var(--desktopSearchIconFill);
    }

    .search-inactive,
    .search-activated {
      display: block;
      position: static;
      padding: 1.1rem 0.2rem;
      background: transparent;
    }

    .search-activated .highlight {
      width: 13rem;
      height: 2.8rem;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }

    .search-activated .search-field {
      width: calc(100% - 28px);
      height: 100%;
      padding-left: 0;
      font-size: 1.4rem;
      text-align: left;
    }

    .search-activated .search svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;customElements.define("nav-search",class extends H{static get styles(){return j}static get properties(){return{baseHost:{type:String},config:{type:Object},locationHandler:{type:Object},open:{type:Boolean},openMenu:{type:String},searchIn:{type:String},searchQuery:{type:String}}}constructor(){super(),this.config={},this.locationHandler=()=>{},this.open=!1,this.openMenu="",this.searchIn=""}search(e){const t=this.shadowRoot.querySelector("[name=query]").value;return t?"TV"===this.searchIn?(this.locationHandler(F(`/details/tv?q=${t}`,this.baseHost)),e.preventDefault(),!1):(this.trackSubmit(e),!0):(e.preventDefault(),!1)}toggleSearchMenu(){"search"!==this.openMenu&&this.dispatchEvent(new CustomEvent("menuToggled",{detail:{menuName:"search"},composed:!0,bubbles:!0}))}get searchInsideInput(){return this.searchIn?D.m`<input type='hidden' name='sin' value='${this.searchIn}' />`:D.c}get searchEndpoint(){return"/search"}render(){const e=this.open?"flex":"search-inactive";return D.m`
      <div class="search-activated fade-in ${e}">
        <form
          id="nav-search"
          class="highlight"
          action=${F(this.searchEndpoint,this.baseHost)}
          method="get"
          @submit=${this.search}
          data-event-submit-tracking="${this.config.eventCategory}|NavSearchSubmit"
        >
          <input
            type="text"
            name="query"
            class="search-field"
            placeholder="Search"
            autocomplete="off"
            value=${this.searchQuery||""}
            @focus=${this.toggleSearchMenu}
          />
          ${this.searchInsideInput}
          <button
            type="submit"
            class="search"
            tabindex="-1"
            data-event-click-tracking="${this.config.eventCategory}|NavSearchClose"
          >
            ${N.search}
          </button>
        </form>
      </div>
    `}});const K=e=>{const t=e.split(" "),i=t.pop(),n=`${i.substr(0,1).toUpperCase()}${i.substr(1)}`;return t.length?K(`${t.join(" ")}${n}`):n};var V=D.f`
  a {
    display: inline-block;
    text-decoration: none;
  }

  .menu-item {
    display: inline-block;
    width: 100%;
    padding: 0;
    font-size: 1.6rem;
    text-align: left;
    background: transparent;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .menu-item:focus {
    outline: none;
  }

  .label {
    display: inline-block;
    padding: 0;
    font-weight: 400;
    color: var(--primaryTextColor);
    text-align: left;
    vertical-align: middle;
  }

  .menu-item > .icon {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .menu-item > .icon > svg {
    height: 4rem;
    width: 4rem;
  }

  .menu-item.selected .icon {
    background-color: var(--activeButtonBg);
    border-radius: 1rem 0 0 1rem;
  }

  .icon .fill-color {
    fill: #999;
  }

  .icon.active .fill-color {
    fill: #fff;
  }

  .donate .fill-color {
    fill: #f00;
  }

  @media (min-width: 890px) {
    .menu-item {
      width: auto;
      height: 5rem;
      color: var(--mediaLabelDesktopColor);
      display: inline-flex;
    }
    .menu-item:hover,
    .menu-item:active,
    .menu-item:focus {
      color: var(--linkHoverColor);
    }

    .menu-item:hover .fill-color,
    .menu-item:active .fill-color,
    .menu-item:focus .fill-color {
      fill: var(--linkHoverColor);
    }

    .label {
      display: none;
    }

    .label,
    .web:after {
      padding-right: 1rem;
      font-size: 1.3rem;
      text-transform: uppercase;
      color: inherit;
    }

    .web:after {
      display: none;
      content: "web";
    }
    .donate,
    .more {
      display: none;
    }

    .menu-item.selected {
      background: var(--activeDesktopMenuIcon);
    }

    .menu-item.selected .label,
    .menu-item.selected.web:after {
      color: var(--linkHoverColor);
    }

    .menu-item.selected .icon {
      background: transparent;
    }

    /* selected state icon colors */
    .web.selected .fill-color {
      fill: #ffcd27;
    }

    .texts.selected .fill-color {
      fill: #faab3c;
    }

    .video.selected .fill-color {
      fill: #f1644b;
    }

    .audio.selected .fill-color {
      fill: #00adef;
    }

    .software.selected .fill-color {
      fill: #9ecc4f;
    }

    .images.selected .fill-color {
      fill: #aa99c9;
    }
  }

  @media (min-width: 1200px) {
    .label,
    .web:after {
      display: inline;
    }

    .web .label {
      display: none;
    }
  }
`;class q extends H{static get styles(){return V}static get properties(){return{config:{type:Object},icon:{type:String},href:{type:String},label:{type:String},mediatype:{type:String},openMenu:{type:String},selected:{type:Boolean},followable:{type:Boolean}}}static get icons(){return N}constructor(){super(),this.config={},this.icon="",this.href="",this.label="",this.mediatype="",this.openMenu="",this.selected=!1,this.followable=!1}onClick(e){this.trackClick(e),e.preventDefault(),"media"!==this.openMenu&&this.dispatchMenuToggledEvent(),this.dispatchMediaTypeSelectedEvent()}dispatchMenuToggledEvent(){this.dispatchEvent(new CustomEvent("menuToggled",{bubbles:!0,composed:!0,detail:{menuName:"media"}}))}dispatchMediaTypeSelectedEvent(){this.dispatchEvent(new CustomEvent("mediaTypeSelected",{bubbles:!0,composed:!0,detail:{mediatype:this.mediatype}}))}get buttonClass(){return this.selected?"selected":""}get tooltipPrefix(){return this.selected?"Collapse":"Expand"}get iconClass(){return this.selected?"active":""}get analyticsEvent(){return`${this.config.eventCategory}|NavMenu${K(this.mediatype)}`}get menuItem(){return D.m`
      <span class="icon ${this.iconClass}">
        ${q.icons[this.icon]}
      </span>
      <span class="label">${this.label}</span>
    `}render(){return D.m`
      <a
        href="${this.href}"
        class="menu-item ${this.mediatype} ${this.buttonClass}"
        @click=${this.followable?this.trackClick:this.onClick}
        data-event-click-tracking="${this.analyticsEvent}"
        title="${this.tooltipPrefix} ${this.mediatype} menu"
      >
        ${this.menuItem}
      </a>
    `}}customElements.define("media-button",q);var G=D.f`
  :host {
    outline: none;
  }

  .media-menu-inner {
    z-index: -1;
    top: -40rem;
    background-color: var(--mediaMenuBg);
    margin: 0;
    overflow: hidden;
    transition-duration: 0.2s;
    transition-property: top;
    transition-timing-function: ease;
  }

  .menu-group {
    position: relative;
    line-height: normal;
  }

  /* Mobile view styles */
  @media (max-width: 889px) {
    .media-menu-inner {
      position: absolute;
      width: 100%;
    }

    .open .media-menu-inner {
      top: 0;
    }

    .overflow-clip {
      position: absolute;
      z-index: -1; /** needs to be under the navigation, otherwise it intercepts clicks */
      top: 4rem;
      left: 0;
      height: 0;
      width: 100%;
      overflow: hidden;
      transition-duration: 0.2s;
      transition-property: height;
    }

    .open .overflow-clip {
      height: 40rem;
    }
  }

  /* Desktop view styles */
  @media (min-width: 890px) {
    .media-menu-inner {
      display: block;
      position: static;
      width: auto;
      height: 5rem;
      transition-property: none;
    }

    .menu-group {
      font-size: 0;
    }
  }
`;const Z=[{icon:"web",menu:"web",href:"https://web.archive.org",label:"Wayback Machine"},{icon:"texts",menu:"texts",href:"/details/texts",label:"Texts"},{icon:"video",menu:"video",href:"/details/movies",label:"Video"},{icon:"audio",menu:"audio",href:"/details/audio",label:"Audio"},{icon:"software",menu:"software",href:"/details/software",label:"Software"},{icon:"images",menu:"images",href:"/details/image",label:"Images"},{icon:"donate",menu:"donate",href:"/donate/",label:"Donate",followable:!0},{icon:"ellipses",menu:"more",href:"/about/",label:"More"}];class Y extends D.U{static get styles(){return G}static get properties(){return{baseHost:{type:String},config:{type:Object},openMenu:{type:String},selectedMenuOption:{type:String},currentTab:{type:Object}}}constructor(){super(),this.config={},this.openMenu="",this.selectedMenuOption="",this.currentTab={}}updated(e){if(e.has("currentTab")){const e=Array.from(this.shadowRoot.querySelectorAll("media-button"));e.map(((t,i)=>{const n=t.shadowRoot.querySelector("a.menu-item");if(n&&n.classList.contains(`${this.selectedMenuOption}`)){n.classList.remove("selected"),n.blur();const t="next"===this.currentTab.moveTo?i+1:i-1;e[t].shadowRoot.querySelector("a.menu-item").focus()}}))}}get mediaMenuOptionsTemplate(){return Z.map((({icon:e,menu:t,label:i,href:n,followable:r})=>{const s=this.selectedMenuOption===t;return D.m`
        <media-button
          .config=${this.config}
          .icon=${e}
          .href=${F(n,this.baseHost)}
          .followable=${r}
          .label=${i}
          .mediatype=${t}
          .openMenu=${this.openMenu}
          .selected=${s}
          .selectedMenuOption=${this.selectedMenuOption}
          data-mediatype="${t}"
        ></media-button>
      `}))}get menuOpened(){return"media"===this.openMenu}get menuClass(){return this.menuOpened?"open":"closed"}render(){return D.m`
      <div class="media-menu-container ${this.menuClass}">
        <div class="overflow-clip">
          <nav
            class="media-menu-inner"
            aria-expanded="${this.menuOpened}"
          >
            <div class="menu-group">
              ${this.mediaMenuOptionsTemplate}
            </div>
          </nav>
        </div>
      </div>
    `}}customElements.define("media-menu",Y);var Q=D.g`
  <svg class="ia-wordmark stacked" viewBox="0 0 95 30" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" fill-rule="evenodd">
      <g transform="translate(0 17)">
        <path d="m3.07645967 2.60391777c.09263226-.31901841.26275495-.97477846.26275495-1.10630359 0-.74950669-.57227138-.76816274-1.19041353-.88009902v-.41183224h2.90678232l3.77209227 12.60682378h-1.60725868l-1.16012991-3.8963154h-3.94266032l-1.15968456 3.8963154h-.95794221zm-.69607795 5.4317081h3.41670507l-1.76223957-5.469953z"/><path d="m13.2661876 2.75363255c0-1.85487748-.0316196-1.85487748-1.469201-2.13611739v-.41183224h3.8032666c1.1601299 0 4.3599508 0 4.3599508 3.35342446 0 2.13518459-1.143652 2.84737918-2.3652399 3.0903742l2.8448791 6.16302512h-1.7773814l-2.7366596-5.82581707h-.9588329v5.82581707h-1.7007817zm1.7007817 3.35295806h.8817878c1.0042583 0 2.411556-.33674165 2.411556-2.43508055 0-2.0237147-.9588329-2.58572812-2.2579112-2.58572812-1.0354326 0-1.0354326.33720805-1.0354326 1.68650665z"/><path d="m30.9386422 12.2878054c-.5250645.2817063-1.3761234.7121946-2.9682403.7121946-3.3552471 0-4.5612478-2.4537366-4.5612478-6.66860403 0-3.4089262.86531-6.18214759 4.3136347-6.18214759 1.3761234 0 2.3812724.28077351 3.0920468.56201342l.0930776 3.12908549h-.4484648c-.0619033-.95612241-.9125167-2.79187744-2.5821241-2.79187744-2.2726076 0-2.6440273 2.94065941-2.6440273 5.28292612 0 2.95931547.8510588 5.61966783 2.9994146 5.61966783 1.4692009 0 2.2267368-.5620135 2.7059306-.9551897z"/><path d="m35.4546446 2.67900836c0-1.48129014-.0926322-1.64966096-1.5466914-1.83622143v-.41276504l3.2470277-.43002189v5.80669465h4.2049699v-5.60101173h1.7007816v12.60682378h-1.7007816v-6.12571303h-4.2049699v6.12571303h-1.7003363z"/><path d="m46.0300434 12.3447063c1.0973359 0 1.3137748-.2807735 1.3137748-1.7420083v-8.05568117c0-1.46123489-.2164389-1.741542-1.3137748-1.741542v-.46919958h4.3287765v.46919958c-1.0826395 0-1.3137748.28030711-1.3137748 1.741542v8.05568117c0 1.4612348.2311353 1.7420083 1.3137748 1.7420083v.4678004h-4.3287765z"/><path d="m55.1990352 2.60391777c-.494781-1.7051627-.6341747-1.7051627-1.8709043-1.98640261v-.41183224h2.9994145l3.0301436 10.26548988h.0307289l2.9535438-10.26548988h1.0042584l-3.771647 12.60682378h-1.344949z"/><path d="m67.7842867 2.75363255c0-1.85487748-.0463161-1.85487748-1.4687557-2.13611739v-.41183224h7.4061269l.0463161 2.77228859h-.433323c0-1.49854698-.6488711-1.89218957-1.6696073-1.89218957h-1.2060007c-.7726777 0-.9735293.07462419-.9735293.97431206v3.7279446h1.8709043c1.0657162 0 1.174381-.82366447 1.2674586-1.44164603h.4324323v3.93316112h-.4324323c0-1.01162415-.3402454-1.61141607-1.2674586-1.61141607h-1.8709043v4.17755538c0 1.0489362.2008516 1.0867147.9735293 1.0867147h1.7168141c.8804518 0 1.2977423-.3749865 1.3908199-1.835755h.433323l-.0472068 2.715854h-6.1685065z"/>
      </g>
      <path d="m1.55575146 9.89647882v-7.6678574c0-1.39053729-.25677019-1.65867172-1.55575146-1.65867172v-.44528687h5.12561364v.44528687c-1.28118091 0-1.55575146.26813443-1.55575146 1.65867172v7.6678574c0 1.39097468.27457055 1.65735948 1.55575146 1.65735948v.4461617h-5.12561364v-.4461617c1.29898127 0 1.55575146-.2663848 1.55575146-1.65735948z"/><path d="m9.92299051 2.28198586c0-1.65823431-.25588017-1.58649851-1.83032201-1.88962601v-.39235985h3.8626781l5.7664266 9.70008019h.0364907v-9.70008019h1.1534634v12h-1.7577856l-6.0405521-10.14492965h-.0369358v10.14492965h-1.15346329z"/><path d="m25.631543.83808413h-1.2633805c-1.4458343 0-1.8668128.44572428-1.977175 1.74834147h-.5122054l.0729815-2.5864256h9.3727795l.0734265 2.63935263h-.5126504c0-1.37304075-.5860768-1.8012685-1.9954203-1.8012685h-1.2442452v11.16191587h-2.0141107z"/><path d="m36.1050097 2.42502005c0-1.7654006-.0556262-1.7654006-1.7399852-2.0326602v-.39235985h8.7684573l.0551811 2.63935263h-.5126504c0-1.42684261-.7685305-1.8012685-1.9762849-1.8012685h-1.4284789c-.9153835 0-1.1534633.0717358-1.1534633.92775388v3.54829773h2.2152547c1.2629356 0 1.3906532-.7851571 1.5010154-1.37391558h.5130954v3.74513378h-.5130954c0-.96274696-.4022881-1.53313407-1.5010154-1.53313407h-2.2152547v3.97608803c0 .9986149.2380798 1.033608 1.1534633 1.033608h2.0319111c1.0439911 0 1.5375061-.356492 1.6469783-1.74702926h.5135404l-.0551812 2.58511336h-7.3034876z"/><path d="m48.1689385 2.42502005c0-1.7654006-.0364908-1.7654006-1.7382052-2.0326602v-.39235985h4.5026011c1.3732977 0 5.1621043 0 5.1621043 3.19180579 0 2.03309761-1.3537173 2.71065102-2.8004416 2.94248013l3.3682731 5.86571408h-2.1053376l-3.2396655-5.54552745h-1.1352179v5.54552745h-2.0141107zm2.0141107 3.19136837h1.0439911c1.189064 0 2.8556227-.32018663 2.8556227-2.31697893 0-1.92680615-1.1352179-2.46132536-2.673169-2.46132536-1.2264448 0-1.2264448.32062404-1.2264448 1.6057447z"/><path d="m61.4610921 2.28198586c0-1.65823431-.2567702-1.58649851-1.830767-1.88962601v-.39235985h3.8622331l5.7659816 9.70008019h.0369357v-9.70008019h1.1534633v12h-1.7568955l-6.0414421-10.14492965h-.0364908v10.14492965h-1.1530183z"/><path d="m75.1550889 2.42502005c0-1.7654006-.0547361-1.7654006-1.7390952-2.0326602v-.39235985h8.7684573l.0551811 2.63935263h-.5126504c0-1.42684261-.7694205-1.8012685-1.9771749-1.8012685h-1.4280339c-.9149385 0-1.1530183.0717358-1.1530183.92775388v3.54829773h2.2148098c1.2633805 0 1.3906531-.7851571 1.5010153-1.37391558h.5130954v3.74513378h-.5130954c0-.96274696-.4022881-1.53313407-1.5010153-1.53313407h-2.2148098v3.97608803c0 .9986149.2380798 1.033608 1.1530183 1.033608h2.0319111c1.0439911 0 1.5379511-.356492 1.6478683-1.74702926h.5126504l-.0551811 2.58511336h-7.3039327z"/><path d="m89.2335734.83808413h-1.2624905c-1.4462793 0-1.8672578.44572428-1.97762 1.74834147h-.5122054l.0734265-2.5864256h9.3718895l.0734265 2.63935263h-.5122054c0-1.37304075-.5856318-1.8012685-1.9958653-1.8012685h-1.2446902v11.16191587h-2.0136657z"/>
    </g>
  </svg>

`,J=D.f`
  button:focus,
  input:focus {
    outline: none;
  }

  nav {
    position: relative;
    display: flex;
    height: 4rem;
    grid-template-areas: 'hamburger empty heart search user';
    -ms-grid-columns: 4rem minmax(1rem, 100%) 4rem 4rem 4rem;
    grid-template-columns: 4rem auto 4rem 4rem 4rem;
    -ms-grid-rows: 100%;
    grid-template-rows: 100%;
    background: var(--primaryNavBg);
    border-bottom: 1px solid var(--primaryNavBottomBorder);
  }

  nav.hide-search {
    grid-template-areas: 'hamburger empty heart user';
    -ms-grid-columns: 4rem minmax(1rem, 100%) 4rem 4rem;
    grid-template-columns: 4rem auto 4rem 4rem;
  }

  .right-side-section {
    display: flex;
    margin-left: auto;
    user-select: none;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
  }

  .branding {
    position: static;
    float: left;
    margin: 0 !important;
    padding: 0 5px 0 10px;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  slot,
  .branding {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  media-menu {
    grid-column-start: hamburger-start;
    grid-column-end: user-end;
  }

  .ia-logo {
    height: 3rem;
    width: 2.7rem;
    display: inline-block;
  }
  .ia-wordmark {
    height: 3rem;
    width: 9.5rem;
  }
  .ia-logo,
  .ia-wordmark {
    margin-right: 5px;
  }

  .hamburger {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: hamburger;
    padding: 0;
  }
  .hamburger svg {
    height: 4rem;
    width: 4rem;
    fill: var(--activeColor);
  }

  .mobile-donate-link {
    display: inline-block;
  }
  .mobile-donate-link svg {
    height: 4rem;
    width: 4rem;
  }
  .mobile-donate-link .fill-color {
    fill: rgb(255, 0, 0);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    user-select: none;
  }

  .search-trigger {
    padding: 0;
  }
  .search-trigger svg {
    height: 4rem;
    width: 4rem;
  }
  .search-trigger .fill-color {
    fill: var(--iconFill);
  }

  .search-activated {
    position: relative;
    z-index: 3;
  }

  .upload {
    display: none;
  }

  .upload span {
    display: none;
  }

  .upload svg {
    height: 3rem;
    width: 3rem; 
  }

  .screen-name {
    display: none;
    font-size: 1.3rem;
    vertical-align: middle;
    text-transform: uppercase;
  }

  .user-menu {
    color: var(--lightTextColor);
    padding: 0.5rem;
    height: 100%;
  }

  button.user-menu:hover,
  button.user-menu:focus {
    color: var(--linkHoverColor);
    outline: none;
  }

  .user-menu.active {
    border-radius: 1rem 1rem 0 0;
    background: var(--activeButtonBg);
  }

  .user-menu img {
    display: block;
    width: 3rem;
    height: 3rem;
  }

  .link-home {
    text-decoration: none;
    display: inline-flex;
  }
  a.link-home:focus,
  a.link-home:focus-visible {
    outline-offset: 1px;
  }

  @media only screen and (min-width: 890px) and (max-device-width: 905px) {
    .branding.second-logo {
      padding-right: 0;
    }
  }

  @media (min-width: 906px) {
    .branding.second-logo {
      padding-right: 20px;
    }
  }

  @media (max-width: 889px) {
    slot[name='opt-sec-logo'] {
      display: none;
    }

    .right-side-section {
      display: initial;
    }
    .right-side-section .user-info {
      float: right;
    }
  }

  @media (min-width: 890px) {
    :host {
      --userIconWidth: 3.2rem;
      --userIconHeight: 3.2rem;
    }

    nav {
      display: flex;
      z-index: 4;
      height: 5rem;
      padding-right: 1.5rem;
    }

    slot[name='opt-sec-logo-mobile'] {
      display: none;
    }

    .ia-logo,
    .ia-wordmark {
      margin-right: 10px;
    }

    .hamburger,
    .search-trigger,
    .mobile-donate-link {
      display: none;
    }

    .user-info {
      display: block;
      float: right;
      vertical-align: middle;
      height: 100%;
    }

    .user-info .user-menu img {
      height: 3rem;
      width: 3rem;
      margin-right: 0.5rem;
    }

    .user-menu {
      padding: 1rem 0.5rem;
    }
    .user-menu.active {
      background: transparent;
    }

    .user-menu img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.5rem;
    }

    .upload {
      display: block;
      padding: 1rem 0.5rem;
      float: right;
      font-size: 1.4rem;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--lightTextColor);
    }
    .upload:active,
    .upload:focus,
    .upload:hover {
      color: var(--linkHoverColor);
    }
    .upload:focus-visible {
      outline: none;
    }

    .upload svg {
      vertical-align: middle;
      fill: var(--iconFill);
    }

    .upload:hover svg,
    .upload:focus svg,
    .upload:active svg {
      fill: var(--linkHoverColor);
    }

    nav-search {
      float: right;
      margin-left: 1rem;
    }

  }

  @media (min-width: 990px) {
    .screen-name {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 165px;
    }

    .upload span {
      display: inline;
    }
  }
`;function X(e){window.location=e}customElements.define("primary-nav",class extends H{static get styles(){return J}static get properties(){return{mediaBaseHost:{type:String},baseHost:{type:String},hideSearch:{type:Boolean},config:{type:Object},openMenu:{type:String},screenName:{type:String},searchIn:{type:String},searchQuery:{type:String},secondIdentitySlotMode:{type:String},selectedMenuOption:{type:String},signedOutMenuOpen:{type:Boolean},userMenuOpen:{type:Boolean},username:{type:String},userProfileImagePath:{type:String},currentTab:{type:Object}}}constructor(){super(),this.config={},this.openMenu="",this.searchIn="",this.selectedMenuOption="",this.signedOutMenuOpen=!1,this.userMenuOpen=!1,this.mediaBaseHost="https://archive.org",this.secondIdentitySlotMode="",this.currentTab={}}toggleMediaMenu(e){this.trackClick(e),this.dispatchEvent(new CustomEvent("menuToggled",{detail:{menuName:"media"}}))}toggleSearchMenu(e){this.trackClick(e),this.dispatchEvent(new CustomEvent("menuToggled",{detail:{menuName:"search"}}))}toggleUserMenu(e){this.trackClick(e),this.dispatchEvent(new CustomEvent("menuToggled",{detail:{menuName:"user"}}))}updated(e){var t,i;if(e.has("currentTab")){if(0===Object.keys(this.currentTab).length)return D.c;if(this.currentTab&&"usermenu"===this.currentTab.mediatype){const e=Array.from(this.shadowRoot.querySelector("media-menu").shadowRoot.querySelectorAll("media-button")).filter((e=>e.shadowRoot.querySelector("a").classList.contains("images"))),i="next"===this.currentTab.moveTo?this.shadowRoot.querySelector("a.upload"):null==(t=e[0])?void 0:t.shadowRoot.querySelector("a.menu-item");i&&i.focus()}else"next"===this.currentTab.moveTo&&(this.shadowRoot.querySelector(".user-menu")?this.shadowRoot.querySelector(".user-menu").focus():null==(i=this.shadowRoot.querySelector("login-button").shadowRoot.querySelectorAll("span a")[0])||i.focus())}}get userIcon(){const e="user"===this.openMenu?"active":"",t="user"===this.openMenu?"Close user menu":"Expand user menu";return D.m`
      <button
        class="user-menu ${e}"
        title="${t}"
        @click="${this.toggleUserMenu}"
        data-event-click-tracking="${this.config.eventCategory}|NavUserMenu"
      >
        <img
          src="${this.mediaBaseHost}${this.userProfileImagePath}"
          alt="${this.screenName}"
        />
        <span class="screen-name" dir="auto">${this.screenName}</span>
      </button>
    `}get loginIcon(){return D.m`
      <login-button
        .baseHost=${this.baseHost}
        .config=${this.config}
        .dropdownOpen=${this.signedOutMenuOpen}
        .openMenu=${this.openMenu}
        @signedOutMenuToggled=${this.signedOutMenuToggled}
      ></login-button>
    `}get searchMenuOpen(){return"search"===this.openMenu}get allowSecondaryIcon(){return"allow"===this.secondIdentitySlotMode}get searchMenu(){return this.hideSearch?D.c:D.m`
      <button
        class="search-trigger"
        @click="${this.toggleSearchMenu}"
        data-event-click-tracking="${this.config.eventCategory}|NavSearchOpen"
      >
        ${N.search}
      </button>
      <nav-search
        .baseHost=${this.baseHost}
        .config=${this.config}
        .locationHandler=${X}
        .open=${this.searchMenuOpen}
        .openMenu=${this.openMenu}
        .searchIn=${this.searchIn}
        .searchQuery=${this.searchQuery}
      ></nav-search>
    `}get mobileDonateHeart(){return D.m`
      <a class="mobile-donate-link" href=${F("/donate/?origin=iawww-mbhrt",this.baseHost)}>
        ${N.donateUnpadded}
        <span class="sr-only">"Donate to the archive"</span>
      </a>
    `}get uploadButtonTemplate(){return D.m`
      <a href="${F("/create",this.baseHost)}"
        class="upload"
        @focus=${this.toggleMediaMenu}
      >
      ${N.upload}
      <span>Upload</span>
    </a>`}get userStateTemplate(){return D.m`<div class="user-info">
      ${this.username?this.userIcon:this.loginIcon}
    </div>`}get secondLogoSlot(){return this.allowSecondaryIcon?D.m`
          <slot name="opt-sec-logo"></slot>
          <slot name="opt-sec-logo-mobile"></slot>
        `:D.c}get secondLogoClass(){return this.allowSecondaryIcon?"second-logo":""}render(){return this.openMenu,D.m`
      <nav class=${this.hideSearch?"hide-search":D.c}>
        <button
          class="hamburger"
          @click="${this.toggleMediaMenu}"
          data-event-click-tracking="${this.config.eventCategory}|NavHamburger"
          title="Open main menu"
        >
          <icon-hamburger ?active=${"media"===this.openMenu}></icon-hamburger>
        </button>

        <div class=${`branding ${this.secondLogoClass}`}>
          <a
            href=${F("/",this.baseHost)}
            @click=${this.trackClick}
            data-event-click-tracking="${this.config.eventCategory}|NavHome"
            title="Go home"
            class="link-home"
            >${N.iaLogo}${Q}</a
          >
          ${this.secondLogoSlot}
        </div>
        <media-menu
          .baseHost=${this.baseHost}
          .config=${this.config}
          ?mediaMenuAnimate="${this.mediaMenuAnimate}"
          .selectedMenuOption=${this.selectedMenuOption}
          .openMenu=${this.openMenu}
          .currentTab=${this.currentTab}
        ></media-menu>
        <div class="right-side-section">
          ${this.mobileDonateHeart}
          ${this.userStateTemplate}
          ${this.uploadButtonTemplate}
          ${this.searchMenu}
        </div>
      </nav>
    `}});var ee=D.f`
  .nav-container {
    position: relative;
  }

  nav {
    position: absolute;
    right: 0;
    z-index: 4;
    overflow: hidden;
    font-size: 1.6rem;
    background-color: var(--dropdownMenuBg);
    transition-property: top;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  .initial,
  .closed {
    top: var(--topOffset, -1500px);
  }

  .closed {
    transition-duration: 0.5s;
  }

  .open {
    max-width: 100vw;
    overflow: auto;
  }

  h3 {
    padding: 0.6rem 2rem;
    margin: 0;
    font-size: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ul {
    padding: 0.4rem 0 0.7rem 0;
    margin: 0;
    list-style: none;
    /* viewport height - nav height + bottom nav border */
    max-height: calc(100vh - 7.2rem + 1px);
    overflow: auto;
    box-sizing: border-box;
  }

  .divider {
    margin: 0.5rem 0;
    border-bottom: 1px solid var(--dropdownMenuDivider);
  }

  a,
  .info-item {
    display: block;
    color: var(--primaryTextColor);
    text-decoration: none;
    padding: 1rem 2rem;
  }

  .info-item {
    font-size: 0.8em;
    color: var(--dropdownMenuInfoItem);
  }

  .callout {
    position: absolute;
    margin-left: 10px;
    padding: 0 5px;
    border-radius: 2px;
    background: #fee257;
    color: #2c2c2c;
    font-size: 1.4rem;
    font-weight: bold;
  }

  a.mobile-upload {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  a.mobile-upload svg {
    fill: var(--white);
    margin-right: 1rem;
    height: 1.4rem;
    width: 1.4rem;
  }

  @media (min-width: 890px) {
    nav {
      display: flex;
      overflow: visible;
      top: 0;
      left: auto;
      z-index: 5;
      transition: opacity 0.2s ease-in-out;
      font-size: 1.4rem;
      border-radius: 2px;
      background: var(--primaryTextColor);
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    }

    nav:after {
      position: absolute;
      right: 7px;
      top: -7px;
      width: 12px;
      height: 7px;
      box-sizing: border-box;
      color: var(--white);
      content: '';
      border-bottom: 7px solid currentColor;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    h3 {
      display: none;
    }

    ul {
      /* viewport height - nav height + bottom nav border */
      max-height: calc(100vh - 8.5rem + 1px);
    }

    .divider {
      border-bottom-color: var(--dropdownMenuDivider);
    }

    a {
      padding: 0.5rem 2rem;
      color: var(--inverseTextColor);
      transition: background 0.1s ease-out, color 0.1s ease-out;
    }

    .info-item {
      padding: 0.5rem 2rem;
      font-size: 0.8em;
    }

    a:hover,
    a:active,
    a:focus {
      color: var(--linkHoverColor);
      background: var(--linkColor);
      outline: none;
    }

    .initial,
    .closed {
      opacity: 0;
      transition-duration: 0.2s;
    }

    .open {
      opacity: 1;
      overflow: visible;
    }

    a.mobile-upload {
      display: none;
    }
  }
`;class te extends H{static get styles(){return ee}static get properties(){return{baseHost:{type:String},config:{type:Object},hideSearch:{type:Boolean},menuItems:{type:Array},animate:{type:Boolean},open:{type:Boolean}}}constructor(){super(),this.config={},this.menuItems=[],this.open=!1,this.animate=!1}get dropdownItems(){return this.menuItems?Array.isArray(this.menuItems[0])?this.menuItems.map(((e,t)=>[t?te.dropdownDivider:D.m``,...this.dropdownSection(e)])):this.dropdownSection(this.menuItems):D.c}static get dropdownDivider(){return D.m`<li role="presentation" class="divider"></li>`}dropdownSection(e){return e.map((e=>D.m`
        <li>${e.url?this.dropdownLink(e):te.dropdownText(e)}</li>
      `))}dropdownLink(e){var t;const i=null==(t=this.config.callouts)?void 0:t[e.title];return D.m`<a
      href="${F(e.url,this.baseHost)}"
      class="${e.class}"
      tabindex="${this.open?"":"-1"}"
      @click=${this.trackClick}
      data-event-click-tracking="${this.config.eventCategory}|Nav${e.analyticsEvent}"
      aria-label=${i?`New feature: ${e.title}`:D.c}>
        ${"mobile-upload"===e.class?N.uploadUnpadded:D.c}
        ${e.title}
        ${i?D.m`<span class="callout" aria-hidden="true">${i}</span>`:D.c}
    </a>`}static dropdownText(e){return D.m`<span class="info-item">${e.title}</span>`}get menuClass(){const e=this.hideSearch?" search-hidden":"";return this.open?`open${e}`:this.animate?`closed${e}`:`initial${e}`}get ariaHidden(){return Boolean(!this.open).toString()}get ariaExpanded(){return Boolean(this.open).toString()}render(){return D.m`
      <div class="nav-container">
        <nav
          class="${this.menuClass}"
          aria-hidden="${this.ariaHidden}"
          aria-expanded="${this.ariaExpanded}"
        >
          <ul>
            ${this.dropdownItems}
          </ul>
        </nav>
      </div>
    `}}var ie=D.f`
  @media (min-width: 890px) {
    .initial,
    .closed,
    .open {
      right: 22.4rem;
    }

    .search-hidden.initial,
    .search-hidden.closed,
    .search-hidden.open {
      right: 5.8rem;
    }
  }

  @media (min-width: 990px) {
    .initial,
    .closed,
    .open {
      right: 27.2rem;
    }

    .search-hidden.initial,
    .search-hidden.closed,
    .search-hidden.open {
      right: 12rem;
    }
  }
`;class ne{constructor(e,t){var i;this.elementsContainer=e,this.menuOption=t,this.focusableElements=this.getFocusableElements(),this.focusedIndex=this.getInitialFocusedIndex(),null==(i=this.focusableElements[this.focusedIndex])||i.focus(),this.handleKeyDown=this.handleKeyDown.bind(this)}getInitialFocusedIndex(){return"usermenu"===this.menuOption?1:0}getFocusableElements(){const e='a[href], button, input, [tabindex]:not([tabindex="-1"])';let t;if("web"===this.menuOption){const i=this.elementsContainer.querySelector("wayback-slider").shadowRoot,n=i.querySelector("wayback-search"),r=Array.from(n.shadowRoot.querySelectorAll(e)),s=Array.from(i.querySelectorAll(e)),o=i.querySelector("save-page-form");t=[...r,...s,...Array.from(o.shadowRoot.querySelectorAll(e))]}else t=this.elementsContainer.querySelectorAll(e);return Array.from(t).filter((e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")))}handleKeyDown(e){const{key:t}=e,i="Tab"===t;["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(t)?(this.handleArrowKey(t),e.preventDefault()):i&&this.handleTabKey(e)}handleArrowKey(e){["ArrowDown","ArrowRight"].includes(e)?this.focusNext():this.focusPrevious()}focusPrevious(){var e;0!==this.focusableElements.length&&(this.focusedIndex=(this.focusedIndex-1+this.focusableElements.length)%this.focusableElements.length,null==(e=this.focusableElements[this.focusedIndex])||e.focus())}focusNext(){var e;0!==this.focusableElements.length&&(this.focusedIndex=(this.focusedIndex+1)%this.focusableElements.length,null==(e=this.focusableElements[this.focusedIndex])||e.focus())}handleTabKey(e){var t;if(this.menuOption){const t=e.shiftKey;this.focusToOtherMenuItems(t)}null==(t=this.focusableElements[this.focusedIndex])||t.blur(),e.preventDefault()}focusToOtherMenuItems(e=!1){this.elementsContainer.dispatchEvent(new CustomEvent("focusToOtherMenuItem",{bubbles:!0,composed:!0,detail:{mediatype:this.menuOption,moveTo:e?"prev":"next"}}))}}customElements.define("user-menu",class extends te{static get styles(){return[te.styles,ie]}static get properties(){return U(U({},te.properties),{username:{type:String},screenName:{type:String}})}constructor(){super(),this.username=""}updated(e){var t;if(e.has("open")&&this.open){const e=null==(t=this.shadowRoot)?void 0:t.querySelector(".nav-container");if(e){const t=new ne(e,"usermenu");this.addEventListener("keydown",t.handleKeyDown),this.removeEventListener("keydown",this.previousKeydownListener),this.previousKeydownListener=t.handleKeyDown}}}render(){return D.m`
      <div class="nav-container">
        <nav
          class="${this.menuClass}"
          aria-hidden="${this.ariaHidden}"
          aria-expanded="${this.ariaExpanded}"
        >
          <h3>${this.screenName}</h3>
          <ul>
            ${this.dropdownItems}
          </ul>
        </nav>
      </div>
    `}});var re=D.f`
  .menu-wrapper {
    position: relative;
  }

  button:focus,
  input:focus {
    outline-color: var(--linkColor);
    outline-width: 0.16rem;
    outline-style: auto;
    outline-offset: 2px !important;
  }
  .search-menu-inner {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 4;
    padding: 0 4.5rem;
    font-size: 1.6rem;
    background-color: var(--searchMenuBg);
  }
  .tx-slide {
    overflow: hidden;
    transition-property: top;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
  .initial,
  .closed {
    top: var(--topOffset, -1500px);
  }
  .closed {
    transition-duration: 0.2s;
  }

  label,
  a {
    padding: 1rem;
    display: block;
  }

  .advanced-search {
    text-decoration: none;
    color: var(--linkColor);
    line-height: normal;
    padding: 0.5rem;
    margin-top: 5px;
  }

  @media (min-width: 890px) {
    .search-menu-inner {
      overflow: visible;
      right: 2rem;
      left: auto;
      z-index: 5;
      padding: 1rem 2rem;
      transition: opacity 0.2s ease-in-out;
      font-size: 1.4rem;
      color: var(--inverseTextColor);
      border-radius: 2px;
      background: var(--primaryTextColor);
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    }

    .search-menu-inner:after {
      position: absolute;
      right: 7px;
      top: -7px;
      width: 12px;
      height: 7px;
      box-sizing: border-box;
      color: #fff;
      content: '';
      border-bottom: 7px solid currentColor;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }

    .initial,
    .closed {
      opacity: 0;
      transition-duration: 0.2s;
    }

    .open {
      opacity: 1;
    }

    label {
      padding: 0;
      font-weight: normal;
      margin: 0;
    }

    label + label {
      padding-top: 7px;
    }

    a {
      padding: 1rem 0 0 0;
    }
  }
`;customElements.define("search-menu",class extends H{static get styles(){return re}static get properties(){return{baseHost:{type:String},config:{type:Object},hideSearch:{type:Boolean},openMenu:{type:String},searchMenuOpen:{type:Boolean},searchMenuAnimate:{type:Boolean},selectedSearchType:{type:String}}}constructor(){super(),this.config={},this.openMenu="",this.searchMenuOpen=!1,this.searchMenuAnimate=!1,this.selectedSearchType=""}firstUpdated(){this.shadowRoot.addEventListener("keydown",(e=>this.handleKeyDownEvent(e)))}disconnectedCallback(){this.shadowRoot.removeEventListener("keydown",(e=>this.handleKeyDownEvent(e)))}handleKeyDownEvent(e){const t=this.shadowRoot.querySelectorAll(".search-menu-inner label input[type=radio]"),i=t.length-1;if(!i)return;const n=i=>{e.preventDefault();const n=t[i];n.checked=!0,n.dispatchEvent(new Event("change")),n.focus()};"Home"===e.key?n(0):"End"===e.key&&n(i)}selectSearchType(e){this.selectedSearchType=e.target.value}searchInChanged(e){this.dispatchEvent(new CustomEvent("searchInChanged",{detail:{searchIn:e.target.value}}))}get searchTypesTemplate(){return[{label:"metadata",value:"",isDefault:!0},{label:"text contents",value:"TXT"},{label:"TV news captions",value:"TV"},{label:"radio transcripts",value:"RADIO"},{label:"archived web sites",value:"WEB"}].map((({value:e,label:t,isDefault:i})=>this.config.hiddenSearchOptions&&this.config.hiddenSearchOptions.includes(e)?D.m``:D.m`
        <label @click="${this.selectSearchType}">
          <input form="nav-search" type="radio" name="sin" value="${e}" ?checked=${i} @change=${this.searchInChanged} />
          Search ${t}
        </label>
      `))}get menuClass(){return"search"===this.openMenu?"open":"closed"}render(){const e=Boolean(!this.openMenu).toString(),t=Boolean(this.searchMenuOpen).toString();return this.hideSearch?D.m``:D.m`
      <div class="menu-wrapper">
        <div
          class="search-menu-inner tx-slide ${this.menuClass}"
          aria-hidden="${e}"
          aria-expanded="${t}"
        >
          ${this.searchTypesTemplate}
          <a
            class="advanced-search"
            href="${F("/advancedsearch.php",this.baseHost)}"
            @click=${this.trackClick}
            data-event-click-tracking="${this.config.eventCategory}|NavAdvancedSearch"
            >Advanced Search</a
          >
        </div>
      </div>
    `}});var se=D.f`
  form {
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    text-align: center;
  }

  fieldset {
    padding: .5rem;
    border-radius: 5px;
    box-shadow: none;
  }

  input {
    padding-left: 3rem;
    margin-top: .3rem;
    font-size: 1.4rem;
    border-color: #bca38e;
    background: #fff;
  }

  input::placeholder,
  input::-webkit-input-placeholder {
    color: #8e8e8e;
  }

  .search-field svg {
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 890px) {
    fieldset a,
    .search-field {
      display: block;
      width: auto;
    }

    fieldset a {
      margin: 0 1.5rem;
    }
  }
`;class oe extends D.W{static get styles(){return[D.W.styles,se]}}customElements.define("wayback-search",oe);var ae=D.f`
  div {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: .8rem;
    margin: 0;
    padding: 0;
    border: none;
  }

  input[type="text"] {
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    border: 1px solid var(--savePageInputBorder);
    border-radius: .5rem;
    color: var(--grey13);
    font-size: inherit;
  }

  input[type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: .4rem .8rem;
    font: normal 1.3rem var(--themeFontFamily);
    text-transform: uppercase;
    color: var(--savePageSubmitText);
    border: none;
    border-radius: 16px;
    background: var(--savePageSubmitBg);
    cursor: pointer;
  }

  .error {
    display: none;
    margin-top: .5rem;
    font-weight: bold;
    color: var(--savePageErrorText);
  }

  .visible {
    display: block;
  }

  @media (min-width: 890px) {
    h3 {
      margin-top: 0;
      font: normal 100 1.6rem var(--themeFontFamily);
    }
  }
`;customElements.define("save-page-form",class extends H{static get styles(){return ae}static get properties(){return{config:{type:Object},inputValid:{type:Boolean}}}constructor(){super(),this.config={eventCategory:""},this.inputValid=!0}validateURL(e){const t=e.target.querySelector('[name="url_preload"]');if(!/\..{2,}$/.test(t.value))return e.preventDefault(),void(this.inputValid=!1);this.inputValid=!0,this.trackSubmit(e)}get errorClass(){return"error"+(this.inputValid?"":" visible")}render(){return D.m`
      <form action="//web.archive.org/save" method="post" data-event-submit-tracking="${this.config.eventCategory}|SavePageSubmit" @submit=${this.validateURL}>
        <h3>Save Page Now</h3>
        <p>Capture a web page as it appears now for use as a trusted citation in the future.</p>
        <div>
          <input type="text" name="url_preload" placeholder="https://" />
          <input type="submit" value="Save" />
        </div>
        <p class=${this.errorClass}>Please enter a valid web address</p>
      </form>
    `}});var le={performQuery(e){window.location=`https://web.archive.org/web/*/${e}`}};const ce=D.f`
  h4 {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: var(--activeColor);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li + li {
    padding-top: 1.5rem;
  }

  @media (min-width: 890px) {
    h4 {
      margin: 0 0 1rem 0;
      font-weight: 100;
    }

    ul {
      font-size: 1.3rem;
    }

    li {
      padding-bottom: .5rem;
    }

    li + li {
      padding-top: 0;
    }

    li a {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;var de=[ce,D.f`
  @media (min-width: 890px) {
    :host {
      display: block;
      grid-column: 1 / 4;
      padding: 0 1.5rem;
    }

    h4 {
      margin-top: 0;
      font: normal 100 1.6rem var(--themeFontFamily);
    }

    .grid {
      display: grid;
      grid-template-columns: minmax(auto, 260px) 1fr minmax(auto, 260px);
      /* Possible for 890 - 935: minmax(auto, 260px) 1fr minmax(auto, 260px) */
      grid-column-gap: 2.5rem;
    }

    .link-lists {
      display: grid;
      grid-template-columns: calc(50% - 1.25rem) calc(50% - 1.25rem);
      grid-column-gap: 2.5rem;
    }
  }
`];customElements.define("wayback-slider",class extends H{static get styles(){return de}static get properties(){return{archiveItLinks:{type:Array},baseHost:{type:String},browserExtensionsLinks:{type:Array},config:{type:Object},mobileAppsLinks:{type:Array}}}constructor(){super(),this.archiveItLinks=[],this.browserExtensionsLinks=[],this.mobileAppsLinks=[]}get mobileAppsItems(){return this.linkList("mobileAppsLinks","Wayback")}get browserExtensionsItems(){return this.linkList("browserExtensionsLinks","Wayback")}get archiveItItems(){return this.linkList("archiveItLinks","ArchiveIt")}linkList(e,t){return this[e].map((e=>D.m`<li>
      <a href=${F(e.url,this.baseHost)} @click=${this.trackClick} data-event-click-tracking="${this.analyticsEvent(`${t}${e.title}`)}" target=${e.external?"_blank":""} rel=${e.external?"noreferrer noopener":""}>${e.title}</a>
    </li>`))}analyticsEvent(e){return`${this.config.eventCategory}|${K(e)}`}render(){return D.m`
      <div class="grid">
        <wayback-search
          waybackPagesArchived=${this.config.waybackPagesArchived}
          .queryHandler=${le}></wayback-search>
        <div class="link-lists">
          <div>
            <h4>Mobile Apps</h4>
            <ul class="mobile-apps">
              ${this.mobileAppsItems}
            </ul>
            <h4>Browser Extensions</h4>
            <ul class="browser-extensions">
              ${this.browserExtensionsItems}
            </ul>
          </div>
          <div>
            <h4>Archive-It Subscription</h4>
            <ul class="archive-it">
              ${this.archiveItItems}
            </ul>
          </div>
        </div>
        <save-page-form .config=${this.config}></save-page-form>
      </div>
    `}});var he=D.f`
  ul {
    padding: 0;
    margin: -1rem 0 0 0;
    list-style: none;
  }
  a {
    display: block;
    padding: 1rem 0;
    text-decoration: none;
    color: var(--activeColor);
  }
`;customElements.define("more-slider",class extends H{static get properties(){return{baseHost:{type:String},config:{type:Object},menuItems:{type:Array}}}static get styles(){return he}analyticsEvent(e){return`${this.config.eventCategory}|NavMore${K(e)}`}render(){return D.m`
      <ul>
        ${this.menuItems.map((e=>D.m`<li><a @click=${this.trackClick} href=${F(e.url,this.baseHost)} data-event-click-tracking="${this.analyticsEvent(e.title)}">${e.title}</a></li>`))}
      </ul>
    `}});var ue=[ce,D.f`
  img {
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto 1rem auto;
    border-radius: 45px;
  }

  h3 {
    margin-top: 0;
    font-size: 1.8rem;
  }

  .icon-links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    text-align: center;
  }

  .icon-links a {
    display: inline-block;
    width: 12rem;
    margin-bottom: 1.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    text-overflow: ellipsis;
  }

  .icon-links a + a {
    margin-left: 2rem;
  }

  .featured h4 {
    display: none;
  }

  @media (min-width: 890px) {
    :host {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: 40% 20% 40%;
      grid-template-columns: 40% 20% 40%;
    }

    .wayback-search {
      -ms-grid-column: 1;
      -ms-grid-column-span: 3;
      grid-column: 1 / 4;
    }

    h3 {
      display: none;
    }

    .icon-links {
      -ms-grid-column: 1;
    }

    .icon-links a {
      padding-top: 3.5rem;
      max-width: 16rem;
    }

    .links {
      padding: 0 1.5rem;
    }

    .featured {
      -ms-grid-column: 2;
    }

    .featured h4 {
      display: block;
    }

    .top {
      -ms-grid-column: 3;
    }

    .top ul {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: 50% 3rem 50%;
      grid-template-columns: 50% 50%;
      -ms-grid-rows: (auto)[7];
      grid-template-rows: repeat(7, auto);
      grid-column-gap: 3rem;
      grid-auto-flow: column;
    }
    .top ul > *:nth-child(1) {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(2) {
      -ms-grid-row: 2;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(3) {
      -ms-grid-row: 3;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(4) {
      -ms-grid-row: 4;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(5) {
      -ms-grid-row: 5;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(6) {
      -ms-grid-row: 6;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(7) {
      -ms-grid-row: 7;
      -ms-grid-column: 1;
    }
    .top ul > *:nth-child(8) {
      -ms-grid-row: 1;
      -ms-grid-column: 3;
    }
    .top ul > *:nth-child(9) {
      -ms-grid-row: 2;
      -ms-grid-column: 3;
    }
    .top ul > *:nth-child(10) {
      -ms-grid-row: 3;
      -ms-grid-column: 3;
    }
    .top ul > *:nth-child(11) {
      -ms-grid-row: 4;
      -ms-grid-column: 3;
    }
    .top ul > *:nth-child(12) {
      -ms-grid-row: 5;
      -ms-grid-column: 3;
    }
    .top ul > *:nth-child(13) {
      -ms-grid-row: 6;
      -ms-grid-column: 3;
    }
    .top ul > *:nth-child(14) {
      -ms-grid-row: 7;
      -ms-grid-column: 3;
    }
  }
`];class pe extends H{static get styles(){return ue}static get properties(){return{baseHost:{type:String},config:{type:Object},menu:{type:String},menuItems:{type:Object}}}constructor(){super(),this.config={},this.menu="",this.menuItems={},this.links=pe.defaultLinks}shouldUpdate(){return this.menuItems&&(this.links=this.menuItems),!0}static get defaultLinks(){return{iconLinks:[],featuredLinks:[],links:[]}}analyticsEvent(e){return`${this.config.eventCategory}|${K(e)}${K(this.menu)}`}get iconLinks(){return this.links.iconLinks.map((e=>D.m`
        <a href="${F(e.url,this.baseHost)}" @click=${this.trackClick} data-event-click-tracking="${this.analyticsEvent(e.title)}"><img src="${e.icon}" loading="lazy" />${e.title}</a>
      `))}renderLinks(e){return this.links[e].map((e=>D.m`
        <li><a href="${F(e.url,this.baseHost)}" @click=${this.trackClick} data-event-click-tracking="${this.analyticsEvent(e.title)}">${e.title}</a></li>
      `))}render(){return this.menu?(this.menuItems&&(this.links=this.menuItems),"web"===this.menu?D.m`
        <wayback-slider
          .baseHost=${this.baseHost}
          .config=${this.config}
          .archiveItLinks=${this.menuItems.archiveItLinks}
          .browserExtensionsLinks=${this.menuItems.browserExtensionsLinks}
          .mobileAppsLinks=${this.menuItems.mobileAppsLinks}
        ></wayback-slider>`:"more"===this.menu?D.m`
        <more-slider .baseHost=${this.baseHost} .config=${this.config} .menuItems=${this.menuItems}>
        </more-slider>`:D.m`
      <h3>${this.links.heading}</h3>
      <div class="icon-links">
        ${this.iconLinks}
      </div>
      <div class="links featured">
        <h4>Featured</h4>
        <ul>
          ${this.renderLinks("featuredLinks")}
        </ul>
      </div>
      <div class="links top">
        <h4>Top</h4>
        <ul>
          ${this.renderLinks("links")}
        </ul>
      </div>
    `):D.m``}}customElements.define("media-subnav",pe);var me=D.f`
  .media-slider-container {
    position: relative;
  }

  .overflow-clip {
    display: none;
    position: absolute;
    top: 3rem;
    right: 0;
    left: 0;
    height: 0;
    overflow: hidden;
    transition: height 0.2s ease;
  }

  .information-menu {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 0;
    height: 31.9rem;
    overflow-x: hidden;
    font-size: 1.4rem;
    background: var(--mediaSliderBg);
  }

  .open {
    display: block;
  }

  .hidden {
    display: none;
  }

  .info-box {
    padding: 1rem;
  }

  @media (max-width: 889px) {
    .overflow-clip.open {
      display: block;
      height: 35.8rem;
      left: 4rem;
      top: 0;
    }
  }

  @media (min-width: 890px) {
    .overflow-clip {
      display: block;
    }

    .information-menu {
      left: 0;
      z-index: 3;
      height: auto;
      min-height: 21rem;
      background: var(--mediaSliderDesktopBg);
      transform: translate(0, -100%);
      transition: transform 0.2s ease;
    }

    .overflow-clip.open {
      height: 22rem;
    }

    .information-menu.open {
      transform: translate(0, 0);
    }

    .info-box {
      max-width: 100rem;
      padding: 1.5rem 0;
      margin: 0 auto;
    }
  }
`;class ve extends D.U{static get styles(){return me}static get properties(){return{baseHost:{type:String},config:{type:Object},mediaSliderOpen:{type:Boolean},menus:{type:Object},selectedMenuOption:{type:String}}}constructor(){super(),this.config={},this.mediaSliderOpen=!1,this.menus={},this.selectedMenuOption="texts"}updated(e){var t,i;if(e.has("selectedMenuOption")&&this.selectedMenuOption){const e=null==(i=null==(t=this.shadowRoot)?void 0:t.querySelector(".has-focused"))?void 0:i.shadowRoot;if(e){const t=new ne(e,this.selectedMenuOption);this.addEventListener("keydown",t.handleKeyDown),this.removeEventListener("keydown",this.previousKeydownListener),this.previousKeydownListener=t.handleKeyDown}}}shouldUpdate(){const e=this.shadowRoot?this.shadowRoot.querySelector(".information-menu"):null;return e&&(e.scrollTop=0),!0}render(){const e=this.mediaSliderOpen?"open":"closed";return D.m`
      <div class="media-slider-container">
        <div class="overflow-clip ${e}">
          <div class="information-menu ${e}">
            <div class="info-box">
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"audio"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="audio"
                .menuItems=${this.menus.audio}
              ></media-subnav>
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"images"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="images"
                .menuItems=${this.menus.images}
              ></media-subnav>
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"software"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="software"
                .menuItems=${this.menus.software}
              ></media-subnav>
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"texts"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="texts"
                .menuItems=${this.menus.texts}
              ></media-subnav>
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"video"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="video"
                .menuItems=${this.menus.video}
              ></media-subnav>
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"web"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="web"
                .menuItems=${this.menus.web}
              ></media-subnav>
              <media-subnav
                .baseHost=${this.baseHost}
                .config=${this.config}
                class="${"more"===this.selectedMenuOption?"has-focused":"hidden"}"
                menu="more"
                .menuItems=${this.menus.more}
              ></media-subnav>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("media-slider",ve);var ge=D.f`
  ul {
    position: relative;
    z-index: 3;
    padding: .8rem 0;
    margin: 0;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align: center;
    background: var(--desktopSubnavBg);
  }

  li {
    display: inline-block;
    padding: 0 15px;
  }

  a {
    text-decoration: none;
    color: var(--subnavLinkColor);
  }

  a:hover,
  a:active,
  a:focus {
    color: var(--linkHoverColor);
  }

  .donate svg {
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: top;
    fill: #f00;
  }
`;class fe extends H{static get styles(){return ge}static get properties(){return{baseHost:{type:String},menuItems:{type:Array}}}get listItems(){return this.menuItems?this.menuItems.map((e=>D.m`
        <li>
          <a class="${e.title.toLowerCase()}" href="${F(e.url,this.baseHost)}">${e.title}${fe.iconFor(e.title)}</a>
        </li>
      `)):D.c}static iconFor(e){const t={Donate:N.donate};return t[e]?t[e]:D.m``}render(){return D.m`
      <ul>
        ${this.listItems}
      </ul>
    `}}customElements.define("desktop-subnav",fe);var ye=D.f`
  @media (min-width: 890px) {
    .initial,
    .closed,
    .open {
      right: 33.5rem;
    }

    .search-hidden.initial,
    .search-hidden.closed,
    .search-hidden.open {
      right: 18.5rem;
    }
  }

  @media (min-width: 990px) {
    .initial,
    .closed,
    .open {
      right: 40rem;
    }

    .search-hidden.initial,
    .search-hidden.closed,
    .search-hidden.open {
      right: 26rem;
    }
  }
`;customElements.define("signed-out-dropdown",class extends te{static get styles(){return[te.styles,ye]}});var be=D.f`
  :host {
    --white: #fff;
    --grey13: #222;
    --grey20: #333;
    --grey40: #666;
    --grey28: #474747;
    --grey60: #999;
    --grey66: #aaa;
    --grey80: #ccc;
    --errorYellow: #ffcd27;

    --linkColor: #428bca;
    --linkHoverColor: var(--white);
    --subnavLinkColor: var(--grey66);
    --primaryTextColor: var(--white);
    --inverseTextColor: var(--grey20);
    --lightTextColor: var(--grey60);
    --activeColor: var(--white);
    --activeButtonBg: var(--grey20);
    --iconFill: var(--grey60);

    --searchActiveBg: var(--grey20);
    --searchActiveInputBg: var(--white);
    --searchMenuBg: var(--grey20);
    --desktopSearchIconFill: var(--grey20);

    --mediaMenuBg: var(--grey13);
    --mediaLabelDesktopColor: var(--grey60);
    --activeDesktopMenuIcon: var(--grey28);

    --mediaSliderBg: var(--grey20);
    --mediaSliderDesktopBg: var(--grey28);

    --primaryNavBg: var(--grey13);
    --primaryNavBottomBorder: var(--grey20);

    --desktopSubnavBg: var(--grey20);

    --dropdownMenuBg: var(--grey20);
    --dropdownMenuInfoItem: var(--grey60);
    --dropdownMenuDivider: var(--grey40);

    --loginTextColor: var(--grey60);

    --themeFontFamily: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --logoWidthTablet: 263px;

    --savePageSubmitBg: var(--grey13);
    --savePageSubmitText: var(--white);
    --savePageInputBorder: var(--grey60);
    --savePageErrorText: var(--errorYellow);

    color: var(--primaryTextColor);
    font-family: var(--themeFontFamily);
  }

  primary-nav:focus {
    outline: none !important;
  }

  #close-layer {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
  }
  #close-layer.visible {
    display: block;
  }

  .topnav {
    position: relative;
    z-index: 4;
  }

  @media (max-width: 889px) {
    desktop-subnav {
      display: none;
    }
  }
`;const we={eventCategory:"TopNav",hiddenSearchOptions:[],waybackPagesArchived:"740 billion"};class ke extends D.U{static get styles(){return be}static get properties(){return{localLinks:Boolean,waybackPagesArchived:String,baseHost:{type:String},mediaBaseHost:{type:String},admin:{type:Boolean},canManageFlags:{type:Boolean},config:{type:Object,converter(e){return JSON.parse(atob(e))}},hideSearch:{type:Boolean},itemIdentifier:{type:String},mediaSliderOpen:{type:Boolean},menus:{type:Object,converter(e){return JSON.parse(atob(e))}},openMenu:{type:String},screenName:{type:String},searchIn:{type:String},searchQuery:{type:String,converter(e){return atob(e)}},selectedMenuOption:{type:String},username:{type:String},userProfileImagePath:{type:String},secondIdentitySlotMode:{type:String},currentTab:{type:Object}}}constructor(){super(),this.menuSetup(),this.mediaBaseHost="https://archive.org",this.userProfileImagePath="/services/img/user/profile",this.config=we,this.hideSearch=!1,this.mediaSliderOpen=!1,this.openMenu="",this.searchIn="",this.selectedMenuOption="",this.secondIdentitySlotMode="",this.currentTab={}}updated(e){(e.has("username")||e.has("localLinks")||e.has("baseHost")||e.has("waybackPagesArchived")||e.has("itemIdentifier"))&&this.menuSetup()}firstUpdated(){document.addEventListener("keydown",(e=>{"Escape"===e.key&&(this.openMenu="",this.mediaSliderOpen=!1)}),!1)}menuSetup(){var e;this.localLinks="false"!==this.getAttribute("localLinks")&&!1!==this.getAttribute("localLinks"),this.username=this.getAttribute("username"),this.screenName=this.getAttribute("screenname"),this.waybackPagesArchived=null!=(e=this.getAttribute("waybackPagesArchived"))?e:"",this.baseHost=this.localLinks?"":"https://archive.org",this.menus=function(e="___USERID___",t=!0,i="",n=""){i&&(we.waybackPagesArchived=i);const r=t?"":"https://archive.org";return{audio:{heading:"Internet Archive Audio",iconLinks:[{icon:`${r}/services/img/etree`,title:"Live Music Archive",url:`${r}/details/etree`},{icon:`${r}/services/img/librivoxaudio`,title:"Librivox Free Audio",url:`${r}/details/librivoxaudio`}],featuredLinks:[{title:"All Audio",url:`${r}/details/audio`},{title:"Grateful Dead",url:`${r}/details/GratefulDead`},{title:"Netlabels",url:`${r}/details/netlabels`},{title:"Old Time Radio",url:`${r}/details/oldtimeradio`},{title:"78 RPMs and Cylinder Recordings",url:`${r}/details/78rpm`}],links:[{title:"Audio Books & Poetry",url:`${r}/details/audio_bookspoetry`},{title:"Computers, Technology and Science",url:`${r}/details/audio_tech`},{title:"Music, Arts & Culture",url:`${r}/details/audio_music`},{title:"News & Public Affairs",url:`${r}/details/audio_news`},{title:"Spirituality & Religion",url:`${r}/details/audio_religion`},{title:"Podcasts",url:`${r}/details/podcasts`},{title:"Radio News Archive",url:`${r}/details/radio`}]},images:{heading:"Images",iconLinks:[{icon:`${r}/services/img/metropolitanmuseumofart-gallery`,title:"Metropolitan Museum",url:`${r}/details/metropolitanmuseumofart-gallery`},{icon:`${r}/services/img/clevelandart`,title:"Cleveland Museum of Art",url:`${r}/details/clevelandart`}],featuredLinks:[{title:"All Images",url:`${r}/details/image`},{title:"Flickr Commons",url:`${r}/details/flickrcommons`},{title:"Occupy Wall Street Flickr",url:`${r}/details/flickr-ows`},{title:"Cover Art",url:`${r}/details/coverartarchive`},{title:"USGS Maps",url:`${r}/details/maps_usgs`}],links:[{title:"NASA Images",url:`${r}/details/nasa`},{title:"Solar System Collection",url:`${r}/details/solarsystemcollection`},{title:"Ames Research Center",url:`${r}/details/amesresearchcenterimagelibrary`}]},more:[{title:"About",url:`${r}/about/`},{title:"Blog",url:"https://blog.archive.org"},{title:"Projects",url:`${r}/projects/`},{title:"Help",url:`${r}/about/faqs.php`},{title:"Donate",url:`${r}/donate?origin=iawww-TopNavDonateButton`},{title:"Contact",url:`${r}/about/contact`},{title:"Jobs",url:`${r}/about/jobs`},{title:"Volunteer",url:`${r}/about/volunteer-positions`},{title:"People",url:`${r}/about/bios`}],software:{heading:"Software",iconLinks:[{icon:`${r}/services/img/internetarcade`,title:"Internet Arcade",url:`${r}/details/internetarcade`},{icon:`${r}/services/img/consolelivingroom`,title:"Console Living Room",url:`${r}/details/consolelivingroom`}],featuredLinks:[{title:"All Software",url:`${r}/details/software`},{title:"Old School Emulation",url:`${r}/details/tosec`},{title:"MS-DOS Games",url:`${r}/details/softwarelibrary_msdos_games`},{title:"Historical Software",url:`${r}/details/historicalsoftware`},{title:"Classic PC Games",url:`${r}/details/classicpcgames`},{title:"Software Library",url:`${r}/details/softwarelibrary`}],links:[{title:"Kodi Archive and Support File",url:`${r}/details/kodi_archive`},{title:"Vintage Software",url:`${r}/details/vintagesoftware`},{title:"APK",url:`${r}/details/apkarchive`},{title:"MS-DOS",url:`${r}/details/softwarelibrary_msdos`},{title:"CD-ROM Software",url:`${r}/details/cd-roms`},{title:"CD-ROM Software Library",url:`${r}/details/cdromsoftware`},{title:"Software Sites",url:`${r}/details/softwaresites`},{title:"Tucows Software Library",url:`${r}/details/tucows`},{title:"Shareware CD-ROMs",url:`${r}/details/cdbbsarchive`},{title:"Software Capsules Compilation",url:`${r}/details/softwarecapsules`},{title:"CD-ROM Images",url:`${r}/details/cdromimages`},{title:"ZX Spectrum",url:`${r}/details/softwarelibrary_zx_spectrum`},{title:"DOOM Level CD",url:`${r}/details/doom-cds`}]},texts:{heading:"Texts",iconLinks:[{title:"Open Library",icon:`${r}/images/widgetOL.png`,url:"https://openlibrary.org/"},{title:"American Libraries",icon:`${r}/services/img/americana`,url:`${r}/details/americana`}],featuredLinks:[{title:"All Texts",url:`${r}/details/texts`},{title:"Smithsonian Libraries",url:`${r}/details/smithsonian`},{title:"FEDLINK (US)",url:`${r}/details/fedlink`},{title:"Genealogy",url:`${r}/details/genealogy`},{title:"Lincoln Collection",url:`${r}/details/lincolncollection`}],links:[{title:"American Libraries",url:`${r}/details/americana`},{title:"Canadian Libraries",url:`${r}/details/toronto`},{title:"Universal Library",url:`${r}/details/universallibrary`},{title:"Project Gutenberg",url:`${r}/details/gutenberg`},{title:"Children's Library",url:`${r}/details/iacl`},{title:"Biodiversity Heritage Library",url:`${r}/details/biodiversity`},{title:"Books by Language",url:`${r}/details/booksbylanguage`},{title:"Additional Collections",url:`${r}/details/additional_collections`}]},web:{mobileAppsLinks:[{url:"https://apps.apple.com/us/app/wayback-machine/id1201888313",title:"Wayback Machine (iOS)",external:!0},{url:"https://play.google.com/store/apps/details?id=com.archive.waybackmachine&hl=en_US",title:"Wayback Machine (Android)",external:!0}],browserExtensionsLinks:[{url:"https://chrome.google.com/webstore/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak",title:"Chrome",external:!0},{url:"https://addons.mozilla.org/en-US/firefox/addon/wayback-machine_new/",title:"Firefox",external:!0},{url:"https://apps.apple.com/us/app/wayback-machine/id1472432422?mt=12",title:"Safari",external:!0},{url:"https://microsoftedge.microsoft.com/addons/detail/wayback-machine/kjmickeoogghaimmomagaghnogelpcpn?hl=en-US",title:"Edge",external:!0}],archiveItLinks:[{url:"https://www.archive-it.org/explore",title:"Explore the Collections",external:!0},{url:"https://www.archive-it.org/blog/learn-more/",title:"Learn More",external:!0},{url:"https://www.archive-it.org/contact-us",title:"Build Collections",external:!0}]},video:{heading:"Video",iconLinks:[{icon:`${r}/services/img/tv`,title:"TV News",url:`${r}/details/tv`},{icon:`${r}/services/img/911`,title:"Understanding 9/11",url:`${r}/details/911`}],featuredLinks:[{title:"All Video",url:`${r}/details/movies`},{title:"Prelinger Archives",url:`${r}/details/prelinger`},{title:"Democracy Now!",url:`${r}/details/democracy_now_vid`},{title:"Occupy Wall Street",url:`${r}/details/occupywallstreet`},{title:"TV NSA Clip Library",url:`${r}/details/nsa`}],links:[{title:"Animation & Cartoons",url:`${r}/details/animationandcartoons`},{title:"Arts & Music",url:`${r}/details/artsandmusicvideos`},{title:"Computers & Technology",url:`${r}/details/computersandtechvideos`},{title:"Cultural & Academic Films",url:`${r}/details/culturalandacademicfilms`},{title:"Ephemeral Films",url:`${r}/details/ephemera`},{title:"Movies",url:`${r}/details/moviesandfilms`},{title:"News & Public Affairs",url:`${r}/details/newsandpublicaffairs`},{title:"Spirituality & Religion",url:`${r}/details/spiritualityandreligion`},{title:"Sports Videos",url:`${r}/details/sports`},{title:"Television",url:`${r}/details/television`},{title:"Videogame Videos",url:`${r}/details/gamevideos`},{title:"Vlogs",url:`${r}/details/vlogs`},{title:"Youth Media",url:`${r}/details/youth_media`}]},user:[{url:`${r}/create`,title:"Upload files",analyticsEvent:"UserUpload",class:"mobile-upload"},{url:`${r}/details/@${e}`,title:"My uploads",analyticsEvent:"UserLibrary"},{url:`${r}/details/@${e}/loans`,title:"My loans",analyticsEvent:"UserLoans"},{url:`${r}/details/fav-${e}`,title:"My favorites",analyticsEvent:"UserFavorites"},{url:`${r}/details/@${e}/lists`,title:"My lists",analyticsEvent:"UserLists"},{url:`${r}/details/@${e}/collections`,title:"My collections",analyticsEvent:"UserCollections"},{url:`${r}/details/@${e}/web-archive`,title:"My web archives",analyticsEvent:"UserWebArchive"},{url:`${r}/account/index.php?settings=1`,title:"Account settings",analyticsEvent:"UserSettings"},{url:"https://help.archive.org",title:"Get help",analyticsEvent:"UserHelp"},{url:`${r}/account/logout`,title:"Log out",analyticsEvent:"UserLogOut"}],userAdmin:[{title:"ADMINS:"},{title:"item:"},{url:`${r}/editxml/${n}`,title:"edit xml",analyticsEvent:"AdminUserEditXML"},{url:`${r}/edit.php?redir=1&identifier=${n}`,title:"edit files",analyticsEvent:"AdminUserEditFiles"},{url:`${r}/download/${n}/`,title:"download",analyticsEvent:"AdminUserDownload"},{url:`${r}/metadata/${n}/`,title:"metadata",analyticsEvent:"AdminUserMetadata"},{url:`https://catalogd.archive.org/history/${n}`,title:"history",analyticsEvent:"AdminUserHistory"},{url:`${r}/manage/${n}`,title:"manage",analyticsEvent:"AdminUserManager"},{url:`${r}/manage/${n}#make_dark`,title:"curate",analyticsEvent:"AdminUserCurate"},{url:`${r}/manage/${n}#modify_xml`,title:"modify xml",analyticsEvent:"AdminUserModifyXML"}],userAdminFlags:[{url:`${r}/services/flags/admin.php?identifier=${n}`,title:"manage flags",analyticsEvent:"AdminUserManageFlags"}],signedOut:[{url:`${r}/account/signup`,title:"Sign up for free",analyticsEvent:"AvatarMenu-Signup"},{url:`${r}/account/login`,title:"Log in",analyticsEvent:"AvatarMenu-Login"}]}}(this.username,this.localLinks,this.waybackPagesArchived,this.itemIdentifier)}menuToggled({detail:e}){const t=this.openMenu;this.openMenu=t===e.menuName?"":e.menuName,"media"!==this.openMenu&&this.closeMediaSlider()}openMediaSlider(){this.mediaSliderOpen=!0}closeMediaSlider(){this.mediaSliderOpen=!1,this.selectedMenuOption=""}closeMenus(){this.openMenu="",this.closeMediaSlider()}searchInChanged(e){this.searchIn=e.detail.searchIn}trackClick({detail:e}){this.dispatchEvent(new CustomEvent("analyticsClick",{bubbles:!0,composed:!0,detail:e}))}trackSubmit({detail:e}){this.dispatchEvent(new CustomEvent("analyticsSubmit",{bubbles:!0,composed:!0,detail:e}))}mediaTypeSelected({detail:e}){this.selectedMenuOption!==e.mediatype?(this.selectedMenuOption=e.mediatype,this.openMediaSlider()):this.closeMediaSlider()}get searchMenuOpened(){return"search"===this.openMenu}get signedOutOpened(){return"login"===this.openMenu}get userMenuOpened(){return"user"===this.openMenu}get searchMenuTabIndex(){return this.searchMenuOpened?"":"-1"}get userMenuTabIndex(){return this.userMenuOpened?"":"-1"}get signedOutTabIndex(){return this.signedOutOpened?"":"-1"}get closeLayerClass(){return this.openMenu||this.mediaSliderOpen?"visible":""}get userMenu(){return D.m`
      <user-menu
        .baseHost=${this.baseHost}
        .config=${this.config}
        .menuItems=${this.userMenuItems}
        ?open=${"user"===this.openMenu}
        .username=${this.username}
        ?hideSearch=${this.hideSearch}
        tabindex="${this.userMenuTabIndex}"
        @menuToggled=${this.menuToggled}
        @trackClick=${this.trackClick}
        @focusToOtherMenuItem=${e=>this.currentTab=e.detail}
      ></user-menu>
    `}get signedOutDropdown(){return D.m`
      <signed-out-dropdown
        .baseHost=${this.baseHost}
        .config=${this.config}
        .open=${this.signedOutOpened}
        ?hideSearch=${this.hideSearch}
        tabindex="${this.signedOutTabIndex}"
        .menuItems=${this.signedOutMenuItems}
      ></signed-out-dropdown>
    `}get signedOutMenuItems(){return this.menus.signedOut}get userMenuItems(){const e=this.menus.user;let t=this.menus.userAdmin;return this.canManageFlags&&(t=t.concat(this.menus.userAdminFlags)),this.itemIdentifier&&this.admin?[e,t]:e}get desktopSubnavMenuItems(){return this.menus.more}get allowSecondaryIcon(){return"allow"===this.secondIdentitySlotMode}get secondLogoSlot(){return this.allowSecondaryIcon?D.m`
          <slot name="opt-sec-logo" slot="opt-sec-logo"></slot>
          <slot name="opt-sec-logo-mobile" slot="opt-sec-logo-mobile"></slot>
        `:D.c}get separatorTemplate(){return D.m`<li class="divider" role="presentation"></li>`}render(){return D.m`
      <div class="topnav">
        <primary-nav
          .baseHost=${this.baseHost}
          .mediaBaseHost=${this.mediaBaseHost}
          .config=${this.config}
          .openMenu=${this.openMenu}
          .screenName=${this.screenName}
          .searchIn=${this.searchIn}
          .searchQuery=${this.searchQuery}
          .secondIdentitySlotMode=${this.secondIdentitySlotMode}
          .selectedMenuOption=${this.selectedMenuOption}
          .username=${this.username}
          .userProfileImagePath=${this.userProfileImagePath}
          .currentTab=${this.currentTab}
          ?hideSearch=${this.hideSearch}
          @mediaTypeSelected=${this.mediaTypeSelected}
          @toggleSearchMenu=${this.toggleSearchMenu}
          @trackClick=${this.trackClick}
          @trackSubmit=${this.trackSubmit}
          @menuToggled=${this.menuToggled}
        >
          ${this.secondLogoSlot}
        </primary-nav>
        <media-slider
          .baseHost=${this.baseHost}
          .config=${this.config}
          .selectedMenuOption=${this.selectedMenuOption}
          .mediaSliderOpen=${this.mediaSliderOpen}
          .menus=${this.menus}
          tabindex="${this.mediaSliderOpen?"1":"-1"}"
          @focusToOtherMenuItem=${e=>this.currentTab=e.detail}
        ></media-slider>
      </div>
      ${this.username?this.userMenu:this.signedOutDropdown}
      <search-menu
        .baseHost=${this.baseHost}
        .config=${this.config}
        .openMenu=${this.openMenu}
        tabindex="${this.searchMenuTabIndex}"
        ?hideSearch=${this.hideSearch}
        @searchInChanged=${this.searchInChanged}
        @trackClick=${this.trackClick}
        @trackSubmit=${this.trackSubmit}
      ></search-menu>
      <desktop-subnav
        .baseHost=${this.baseHost}
        .menuItems=${this.desktopSubnavMenuItems}
        @focus=${this.closeMenus}
      ></desktop-subnav>
      <div id="close-layer" class="${this.closeLayerClass}" @click=${this.closeMenus}></div>
    `}}customElements.define("ia-topnav",ke);const $e=/:([^\\/]+)/g,Se="router-slot",Ae=window,Ee="native";function _e(e,t){Ae.dispatchEvent(new CustomEvent(e,{detail:t}))}function xe(e,t,i,n){const r=Array.isArray(t)?t:[t];return r.forEach((t=>e.addEventListener(t,i,n))),()=>r.forEach((t=>e.removeEventListener(t,i,n)))}function Ce(e){e.forEach((e=>e()))}const Ie=[["pushState",["pushstate","changestate"]],["replaceState",["replacestate","changestate"]],["forward",["pushstate","changestate"]],["go",["pushstate","changestate"]],["back",["popstate"]]];function Pe(e,t,i){const n=e[t];!function(e,t,i){null==e[Ee]&&(e[Ee]={}),e[Ee][`${t}`]=i.bind(e)}(e,t,n),e[t]=(...t)=>{Le()||(n.apply(e,t),i(t))}}function Le(){return!Ae.dispatchEvent(new CustomEvent("willchangestate",{cancelable:!0}))}const Te=document.createElement("a");function Me(e={}){return Ue(window.location.pathname,e)}function Oe(e,t={}){return Te.href=e,Ue(Te.pathname,t)}function Re(){return window.location.search}function De(e){return Ue(e,{start:!1,end:!1})}function Ue(e,{start:t=!0,end:i=!0}={}){return e=t&&!e.startsWith("/")?`/${e}`:!t&&e.startsWith("/")?e.slice(1):e,i&&!e.endsWith("/")?`${e}/`:!i&&e.endsWith("/")?e.slice(0,e.length-1):e}function He(e,t){const i=[],n=De(e.path.replace($e,((e,...t)=>(i.push(t[0]),"([^/]+)")))),r="**"===e.path||0===e.path.length&&"full"!=e.pathMatch?/^/:(()=>{switch(e.pathMatch||"prefix"){case"full":return new RegExp(`^/?${n}/?$`);case"suffix":return new RegExp(`^.*?${n}/?$`);case"fuzzy":return new RegExp(`^.*?${n}.*?$`);default:return new RegExp(`^[/]?${n}(?:/|$)`)}})(),s=t.match(r);if(null!=s){const n=i.reduce(((e,t,i)=>(e[t]=s[i+1],e)),{}),r=De(t.slice(0,s[0].length)),o=De(t.slice(s[0].length,t.length));return{route:e,match:s,params:n,fragments:{consumed:r,rest:o}}}return null}function Ne(e,t=""){const{tree:i,depth:n}=function(e){let t=[e];for(;null!=e.parent;)e=e.parent,t.push(e);return{tree:t.reduce(((e,t)=>({slot:t,child:e})),void 0),depth:t.length}}(e);if(!t.startsWith("/")){let e=0;t.startsWith("./")&&(t=t.slice(2));const r=t.match(new RegExp("\\.\\.\\/","g"));if(null!=r){e=r.length;const i=r.reduce(((e,t)=>e+t.length),0);t=t.slice(i)}const s=function(e,t){let i=e;const n=[];for(;null!=i&&null!=i.slot.match&&t>0;)n.push(i.slot.match.fragments.consumed),i=i.child,t--;return n}(i,n-1-e).filter((e=>e.length>0));t=`${s.join("/")}${s.length>0?"/":""}${t}`}return Oe(t,{end:!1})}function Be(e){return ze(e,Se)}function ze(e,t,i=0,n=0){const r=e.getRootNode();if(n>=i){const i=r.querySelector(t);if(null!=i&&i!=e)return i}const s=r.getRootNode();return null==s.host?null:ze(s.host,t,i,++n)}class We{constructor(e){this.routerSlot=e}setup(){this.boundEventHandler=this.handleEvent.bind(this),window.addEventListener("click",this.boundEventHandler)}teardown(){window.removeEventListener("click",this.boundEventHandler)}handleEvent(e){var t,i;if(!(null===(t=this.routerSlot)||void 0===t?void 0:t.handleAnchorLinks))return;const n="composedPath"in e?e.composedPath().find((e=>e instanceof HTMLAnchorElement)):e.target;if(null==n||!(n instanceof HTMLAnchorElement))return;const r=n.href.startsWith(location.origin),s=""!==n.target&&"_self"!==n.target,o="disabled"===n.dataset.routerSlot,a=null===(i=this.routerSlot)||void 0===i?void 0:i.getRouteMatch(n.pathname),l=e.metaKey;if(!r||s||o||!a||l)return;if(e.metaKey)return;const c=`${n.pathname}${n.search}`;e.preventDefault(),history.pushState(null,"",c)}}const Fe=document.createElement("template");Fe.innerHTML="<slot></slot>",function(){for(const[e,t]of Ie)for(const i of t)Pe(history,e,(()=>_e(i)));window.addEventListener("popstate",(e=>{if(Le())return e.preventDefault(),void e.stopPropagation();setTimeout((()=>_e("changestate")),0)}))}();class je extends HTMLElement{constructor(){super(),this.listeners=[],this._routes=[],this._handleAnchors=!0,this._routeMatch=null,this.render=this.render.bind(this),this.attachShadow({mode:"open"}).appendChild(Fe.content.cloneNode(!0))}get routes(){return this._routes}set routes(e){this.clear(),this.add(e)}get handleAnchorLinks(){return this._handleAnchors}set handleAnchorLinks(e){this._handleAnchors=e,e?this.setupAnchorListener():this.detachAnchorListener()}get parent(){return this._parent}set parent(e){this.detachListeners(),this._parent=e,this.attachListeners()}get isRoot(){return null==this.parent}get match(){return this._routeMatch}get route(){return null!=this.match?this.match.route:null}get fragments(){return null!=this.match?this.match.fragments:null}get params(){return null!=this.match?this.match.params:null}connectedCallback(){this.parent=this.queryParentRouterSlot(),this.setupAnchorListener()}disconnectedCallback(){this.detachListeners(),this.detachAnchorListener()}queryParentRouterSlot(){return Be(this)}constructAbsolutePath(e){return Ne(this,e)}add(e,t=this.isRoot&&this.isConnected){this._routes.push(...e),t&&this.render().then()}clear(){this._routes.length=0}getRouteMatch(e){const t=function(e,t){for(const i of e){const e=He(i,t);if(null!=e)return e}return null}(this._routes,e);return t}async render(){if(!this.isConnected)return;const e=null!=this.parent&&null!=this.parent.fragments?this.parent.fragments.rest:function(e={}){return Ue((t=Me(),i=function(e={}){return Oe(".",e)}(),t.replace(new RegExp(`^${i}`),"")),e);var t,i}();await this.renderPath(e)}setupAnchorListener(){var e;this.isRoot&&(this.detachAnchorListener(),this.anchorHandler=new We(this),null===(e=this.anchorHandler)||void 0===e||e.setup())}detachAnchorListener(){var e;null===(e=this.anchorHandler)||void 0===e||e.teardown()}attachListeners(){this.listeners.push(null!=this.parent?xe(this.parent,"changestate",this.render):xe(Ae,"changestate",this.render))}clearChildren(){for(;null!=this.firstChild;)this.firstChild.parentNode.removeChild(this.firstChild)}detachListeners(){Ce(this.listeners)}async renderPath(e){const t=this.getRouteMatch(e);if(null==t)return this._routeMatch=null,!1;const{route:i}=t,n={match:t,slot:this};try{const e=function(e,t){if(null==e)return!0;const{route:i,fragments:n}=e,{route:r,fragments:s}=t,o=i==r;return!(n.consumed==s.consumed&&o)}(this.match,t);if(e){let e=!1;const r=xe(Ae,"changestate",(()=>e=!0),{once:!0}),s=()=>{r()},o=()=>(s(),_e("navigationcancel",n),_e("navigationend",n),!1);if(_e("navigationstart",n),null!=i.guards)for(const e of i.guards)if(!await e(n))return o();if(function(e){return"redirectTo"in e}(i))return s(),function(e,t){history.replaceState(history.state,"",`${Ne(e,t.redirectTo)}${t.preserveQuery?Re():""}`)}(this,i),!1;if(function(e){return"resolve"in e}(i)){if(!1===await i.resolve(n))return o()}else{const r=await async function(e,t){let i=e.component;if(i instanceof Function)try{i=i()}catch(e){if(!(e instanceof TypeError))throw e}const n=await Promise.resolve(i);let r;return r=n instanceof HTMLElement?i:new(n.default?n.default:n),null!=e.setup&&e.setup(r,t),r}(i,n);if(e)return o();this.clearChildren(),this._routeMatch=t,this.appendChild(r)}s()}return this._routeMatch=t,requestAnimationFrame((()=>{var e;e=n,this.dispatchEvent(new CustomEvent("changestate",{detail:e}))})),e&&(_e("navigationsuccess",n),_e("navigationend",n)),e}catch(e){throw _e("navigationerror",n),_e("navigationend",n),e}}}window.customElements.define(Se,je);const Ke=document.createElement("template");Ke.innerHTML="<slot></slot>";class Ve extends HTMLElement{constructor(){super(),this.listeners=[],this._context=null,this.navigate=this.navigate.bind(this),this.updateActive=this.updateActive.bind(this),this.attachShadow({mode:"open",delegatesFocus:this.delegateFocus}).appendChild(Ke.content.cloneNode(!0))}static get observedAttributes(){return["disabled"]}set path(e){this.setAttribute("path",e)}get path(){return this.getAttribute("path")||"/"}get target(){return this.getAttribute("target")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get active(){return this.hasAttribute("active")}set active(e){e?this.setAttribute("active",""):this.removeAttribute("active")}get delegateFocus(){return this.hasAttribute("delegateFocus")}set delegateFocus(e){e?this.setAttribute("delegateFocus",""):this.removeAttribute("delegateFocus")}get preserveQuery(){return this.hasAttribute("preservequery")}set preserveQuery(e){e?this.setAttribute("preservequery",""):this.removeAttribute("preservequery")}get context(){return this._context}set context(e){this._context=e}get absolutePath(){return this.constructAbsolutePath(this.path)}connectedCallback(){this.listeners.push(xe(this,"click",(e=>this.navigate(this.path,e))),xe(this,"keydown",(e=>"Enter"===e.code||"Space"===e.code?this.navigate(this.path,e):void 0)),xe(Ae,"navigationend",this.updateActive),xe(Ae,"changestate",this.updateActive)),this.context=Be(this),this.setAttribute("role","link"),this.hasAttribute("tabindex")||this.updateTabIndex()}disconnectedCallback(){Ce(this.listeners)}attributeChangedCallback(e,t,i){"disabled"===e&&this.updateTabIndex()}updateTabIndex(){this.tabIndex=this.disabled?-1:0}constructAbsolutePath(e){return null!=this.context?this.context.constructAbsolutePath(e):Ue(e,{end:!1})}updateActive(){const e=function(e,t=Me()){return new RegExp(`^${De(e)}(/|$)`,"gm").test(De(t))}(this.absolutePath);e!==this.active&&(this.active=e)}navigate(e,t){if(null!=t&&this.disabled)return t.preventDefault(),void t.stopPropagation();const i=this.preserveQuery?Re():"",n=`${this.absolutePath}${i}`;this.target?window.open(n,this.target):t instanceof MouseEvent&&t.metaKey?window.open(n,"_blank"):history.pushState(null,"",n)}}function qe(){qe=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var s="static"===r?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Ye(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var s=this.decorateConstructor(i,t);return n.push.apply(n,s.finishers),s.finishers=n,s},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return et(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?et(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this);var t},toElementDescriptor:function(e){var t=e.kind+"";if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=Xe(e.key),n=e.placement+"";if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Je(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=Je(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function Ge(e){var t,i=Xe(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function Ze(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Ye(e){return e.decorators&&e.decorators.length}function Qe(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Je(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function Xe(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}var tt,it,nt,rt,st,ot,at;window.customElements.define("router-link",Ve),tt=[(0,O.EM)("horizontal-activity-indicator")],it=M.WF,st=qe(),nt=function(e){st.initializeInstanceElements(e,at.elements)},rt=it,ot={F:class extends rt{constructor(...e){super(...e),nt(this)}},d:[{kind:"field",decorators:[(0,O.MZ)({type:Object})],key:"resizeObserver",value:void 0},{kind:"field",decorators:[(0,O.MZ)({type:Boolean})],key:"adjustSpeedForWidth",value(){return!0}},{kind:"field",decorators:[(0,O.P)(".track")],key:"track",value:void 0},{kind:"method",key:"render",value:function(){return M.qy`
      <div class="track">
        <div class="bar"></div>
      </div>
    `}},{kind:"method",key:"updated",value:function(e){const t=e.get("resizeObserver");t&&t.removeObserver({handler:this,target:this.track}),(e.has("adjustSpeedForWidth")||e.has("resizeObserver"))&&(this.adjustSpeedForWidth?this.setupResizeObserver():this.disconnectResizeObserver())}},{kind:"method",key:"handleResize",value:function(e){const t=e.contentRect.width;e.target===this.track&&this.updateLoaderSpeed(t)}},{kind:"method",key:"disconnectedCallback",value:function(){this.disconnectResizeObserver()}},{kind:"method",key:"updateLoaderSpeed",value:function(e){var t,i;const n=Math.max(e/200,3);null==(i=null==(t=this.shadowRoot)?void 0:t.host)||i.style.setProperty("--horizontalActivityIndicatorDuration",n+"s")}},{kind:"method",key:"disconnectResizeObserver",value:function(){var e;null==(e=this.resizeObserver)||e.removeObserver({handler:this,target:this.track})}},{kind:"method",key:"setupResizeObserver",value:async function(){var e;null==(e=this.resizeObserver)||e.addObserver({handler:this,target:this.track})}},{kind:"get",static:!0,key:"styles",value:function(){const e=M.AH`var(--horizontalActivityIndicatorColor, dodgerblue)`,t=M.AH`var(--horizontalActivityIndicatorDuration, 7.5s)`;return M.AH`
      :host {
        display: block;
      }

      @keyframes loader-animation {
        0% {
          left: -100%;
          width: 100%;
        }
        49% {
          left: 100%;
          width: 10%;
        }
        50% {
          left: 100%;
          width: 100%;
        }
        100% {
          left: -10%;
          width: 10%;
        }
      }

      .track {
        height: 100%;
        width: 100%;
        overflow: hidden;
      }

      .track .bar {
        position: relative;
        height: 100%;
        background-color: ${e};
        animation-name: loader-animation;
        animation-duration: ${t};
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
    `}}]},at=st.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},n=0;n<e.length;n++){var r,s=e[n];if("method"===s.kind&&(r=t.find(i)))if(Qe(s.descriptor)||Qe(r.descriptor)){if(Ye(s)||Ye(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Ye(s)){if(Ye(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}Ze(s,r)}else t.push(s)}return t}(ot.d.map(Ge)),tt),st.initializeClassElements(ot.F,at.elements),st.runClassFinishers(ot.F,at.finishers);var lt=i(1788),ct=i(9389),dt=i(7889);function ht(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class ut{async pageNavigationOccurred(e=!0){!window.location.pathname.startsWith("/donate")&&e?await this.addDonationBanner():await this.removeDonationBanner()}constructor(e){ht(this,"ownerId","donationBannerHandler"),ht(this,"baseUrl",void 0),this.baseUrl=e.baseUrl}async removeDonationBanner(){var e;null==(e=this.bannerContainer)||e.remove()}async addDonationBanner(){if(this.bannerContainer)return;const e=document.createElement("div");e.dataset.owner=this.ownerId;const t=document.createElement("div");t.id="donato";const i=document.createElement("script");i.type="text/javascript",i.src=`https://${this.baseUrl}/includes/donate.js`,e.appendChild(t),e.appendChild(i),document.body.prepend(e)}get bannerContainer(){return document.body.querySelector(`[data-owner=${this.ownerId}]`)}}function pt(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class mt{async getBannerConfig(e){const t=new URLSearchParams;(null==e?void 0:e.ymd)&&t.append("ymd",e.ymd),(null==e?void 0:e.variant)&&t.append("variant",e.variant),(null==e?void 0:e.platform)&&t.append("platform",e.platform),(null==e?void 0:e.recacheDonationBanner)&&t.append("recacheDonationBanner",e.recacheDonationBanner);let i=this.endpoint;const n=t.toString();return n.length>0&&(i=`${i}?${n}`),(await this.fetchHandler.fetchIAApiResponse(i,{includeCredentials:!0})).value}constructor(e){pt(this,"fetchHandler",void 0),pt(this,"endpoint","/services/donations/banner.php"),this.fetchHandler=e.fetchHandler}}var vt=i(8971),gt=i(2786);function ft(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class yt{get appRoutes(){return[{path:"donate",pathMatch:"full",component:()=>(0,vt.s)((()=>Promise.all([i.e(4223),i.e(8035)]).then(i.bind(i,9277)))),setup:(e,t)=>{const i=e,n=document.createElement("slot");n.name="donation-form-slot",n.slot="donation-form-slot",setTimeout((()=>{i.appendChild(n),i.appServices=this.appServices}),0)}},{path:"/details/:id",component:()=>Promise.all([i.e(4223),i.e(5653)]).then(i.bind(i,5653)),setup:(e,t)=>{const i=decodeURIComponent(t.match.params.id),n=e;n.appServices=this.appServices,n.identifier=i}},{path:"/collection/:id",resolve:e=>{const t=e.match.params.id;return history.replaceState(history.state,"",`/details/${t}${window.location.search}`),!1}},{path:"/account/:tab",resolve:this.accountRouteResolver},{path:"/account",resolve:this.accountRouteResolver},{path:"/search",component:()=>(0,vt.s)((()=>Promise.all([i.e(4223),i.e(2622)]).then(i.bind(i,4549)))),setup:(e,t)=>{e.appServices=this.appServices}},{path:"/$",component:()=>(0,vt.s)((()=>Promise.all([i.e(4223),i.e(1871)]).then(i.bind(i,2244)))),setup:(e,t)=>{e.appServices=this.appServices}},{path:"/about/:page",component:()=>(0,vt.s)((()=>i.e(2143).then(i.bind(i,9444)))),setup:(e,t)=>{const i=e,n=decodeURIComponent(t.match.params.page);i.subPage=n,i.appServices=this.appServices}},{path:"/about/$",component:()=>(0,vt.s)((()=>i.e(2143).then(i.bind(i,9444)))),setup:(e,t)=>{e.appServices=this.appServices}},{path:"/labs/search/smart-row",component:()=>(0,vt.s)((()=>Promise.all([i.e(4223),i.e(2622)]).then(i.bind(i,4549)))),setup:(e,t)=>{const i=e;i.appServices=this.appServices,i.showSmartResults=!0}},{path:"/labs/search/smart-bubbles",component:()=>(0,vt.s)((()=>Promise.all([i.e(4223),i.e(2622)]).then(i.bind(i,4549)))),setup:(e,t)=>{const i=e;i.appServices=this.appServices,i.showSmartFacetBar=!0}}]}constructor(e){ft(this,"appServices",void 0),ft(this,"accountRouteResolver",(e=>((0,gt.T)(this.appServices,e.match.params.tab),!1))),this.appServices=e}}var bt=i(609),wt=Object.assign;function kt(){kt=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var s="static"===r?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!At(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var s=this.decorateConstructor(i,t);return n.push.apply(n,s.finishers),s.finishers=n,s},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Ct(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Ct(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this);var t},toElementDescriptor:function(e){var t=e.kind+"";if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=xt(e.key),n=e.placement+"";if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_t(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=_t(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function $t(e){var t,i=xt(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function St(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function At(e){return e.decorators&&e.decorators.length}function Et(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _t(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function xt(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}function Ct(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}!function(e,t,r){var s=kt(),o=function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,O.MZ)({type:Object})],key:"appServices",value(){return new dt.N({generator:async()=>(await(0,vt.s)((()=>i.e(1692).then(i.bind(i,3006))))).AppServices.generateAppServices({appRoot:this,appConfig:this.appConfig,modalManager:new dt.N({generator:async()=>this.modalManager})})})}},{kind:"field",decorators:[(0,O.MZ)({type:Object})],key:"appConfig",value(){return new dt.N({generator:async()=>{const e=n,t="1"===new URLSearchParams(window.location.search).get("prerender"),i="true"===e.SNOWPACK_PUBLIC_TESTING,r="true"===e.SNOWPACK_PUBLIC_SUPPRESS_FACETS,s=parseFloat(e.SNOWPACK_PUBLIC_SENTRY_TRACES_SAMPLE_RATE),o=parseFloat(e.SNOWPACK_PUBLIC_SENTRY_ERROR_SAMPLE_RATE);return{environment:e.SNOWPACK_PUBLIC_ENVIRONMENT,documentReferrer:document.referrer,basePath:e.SNOWPACK_PUBLIC_BASE_PATH,version:e.SNOWPACK_PUBLIC_VERSION,archiveNavUrl:e.SNOWPACK_PUBLIC_ARCHIVE_NAV_URL,archiveApiUrl:e.SNOWPACK_PUBLIC_ARCHIVE_API_URL,waybackUrl:e.SNOWPACK_PUBLIC_WAYBACK_URL,waybackSearchUrl:e.SNOWPACK_PUBLIC_WAYBACK_SEARCH_URL,tvSearchUrl:e.SNOWPACK_PUBLIC_TV_SEARCH_URL,radioSearchUrl:e.SNOWPACK_PUBLIC_RADIO_SEARCH_URL,archiveItCollectionSearchUrl:e.SNOWPACK_PUBLIC_ARCHIVE_IT_COLLECTION_URL,archiveItPartnerSearchUrl:e.SNOWPACK_PUBLIC_ARCHIVE_IT_PARTNER_URL,userListsUrl:e.SNOWPACK_PUBLIC_USER_LISTS_API_URL,itemManagementUrl:e.SNOWPACK_PUBLIC_ITEM_MANAGEMENT_URL,webArchivesServiceUrl:e.SNOWPACK_PUBLIC_WEB_ARCHIVES_SERVICE_URL,sentry:{dsn:e.SNOWPACK_PUBLIC_SENTRY_DSN,tracesSampleRate:s,sampleRate:o},zendeskHelpWidgetKey:e.SNOWPACK_PUBLIC_ZENDESK_HELP_WIDGET_KEY,isPrerendering:t,isTesting:i,suppressFacets:r,recaptchaSiteKey:e.SNOWPACK_PUBLIC_RECAPTCHA_SITE_KEY,donationForm:{braintreeAuthToken:e.SNOWPACK_PUBLIC_BRAINTREE_AUTH_TOKEN,venmoProfileId:e.SNOWPACK_PUBLIC_VENMO_PROFILE_ID,googlepayMerchantId:e.SNOWPACK_PUBLIC_GOOGLEPAY_MERCHANT_ID},featureFeedback:{serviceUrl:e.SNOWPACK_PUBLIC_FEATURE_FEEDBACK_SERVICE_URL},baseImageUrl:e.SNOWPACK_PUBLIC_ARCHIVE_IMAGE_URL,currentBaseUrl:window.location.origin}}})}},{kind:"field",decorators:[(0,O.wk)()],key:"footerPosition",value(){return lt.K.Off}},{kind:"field",decorators:[(0,O.wk)()],key:"hasLoadedStrings",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"showDebugBorders",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"showDevMenu",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"activityIndicatorVisible",value(){return!0}},{kind:"field",decorators:[(0,O.wk)()],key:"sharedResizeObserver",value:void 0},{kind:"field",decorators:[(0,O.wk)()],key:"siteHasLimitedFunctionality",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"waybackPagesArchived",value(){return""}},{kind:"field",decorators:[(0,O.wk)()],key:"screenName",value(){return""}},{kind:"field",decorators:[(0,O.wk)()],key:"username",value(){return""}},{kind:"field",decorators:[(0,O.wk)()],key:"userHasItemsPriv",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"userHasFlagsPriv",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"zendeskWidgetVisible",value(){return!1}},{kind:"field",decorators:[(0,O.wk)()],key:"zendeskWidgetKey",value(){return""}},{kind:"field",decorators:[(0,O.wk)()],key:"donationBannerVisible",value:void 0},{kind:"field",decorators:[(0,O.wk)()],key:"psaBannerService",value:void 0},{kind:"field",decorators:[(0,O.wk)()],key:"userService",value:void 0},{kind:"field",decorators:[(0,O.wk)()],key:"localCache",value:void 0},{kind:"field",decorators:[(0,O.wk)()],key:"keyValueStoreManager",value:void 0},{kind:"field",decorators:[(0,O.wk)()],key:"itemIdentifier",value:void 0},{kind:"field",decorators:[(0,O.P)("router-slot")],key:"routerSlot",value:void 0},{kind:"field",decorators:[(0,O.P)("ia-topnav")],key:"topNav",value:void 0},{kind:"field",decorators:[(0,O.P)("modal-manager")],key:"modalManager",value:void 0},{kind:"field",decorators:[(0,O.P)("#maincontent")],key:"mainContent",value:void 0},{kind:"field",key:"donationBannerHandler",value:void 0},{kind:"field",key:"donationBannerService",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this.startup()}},{kind:"method",key:"updated",value:function(e){var t;e.has("appServices")&&this.appServices&&this.setupAppServicesDependents(),e.has("hasLoadedStrings")&&this.hasLoadedStrings&&this.setupView(),e.has("donationBannerVisible")&&this.donationBannerVisible&&(null==(t=this.donationBannerHandler)||t.pageNavigationOccurred(!!this.donationBannerVisible))}},{kind:"method",key:"startup",value:async function(){this.checkForLimitedFunctionality(),await Promise.all([this.setupDonationBannerService(),this.setupDonationBannerHandler(),this.setupPsaBanner(),this.setupKeyValueStoreManager(),this.setupZendeskWidget(),this.startupSentry()])}},{kind:"method",key:"setupIntersectionObserverPolyfill",value:async function(){if("IntersectionObserver"in window)return;const e=await(0,vt.s)((()=>i.e(7111).then(i.bind(i,7736))));window.IntersectionObserver=e.default,await this.trackEvent({event:{category:"offshootPolyfills",action:"loadIntersectionObserver",label:navigator.userAgent},sampling:!0})}},{kind:"method",key:"setupPsaBanner",value:async function(){const e=await this.appServices.get();await Promise.all([this.psaBannerService=await e.psaBannerService.get(),this.userService=await e.userService.get(),this.localCache=await e.localCache.get()])}},{kind:"method",key:"setupKeyValueStoreManager",value:async function(){const e=await this.appServices.get();this.keyValueStoreManager=await e.keyValueStoreManager.get()}},{kind:"method",key:"setupZendeskWidget",value:async function(){const e=await this.appServices.get(),t=await e.appConfig.get(),i=await e.configService.get(),n=await i.getConfig("feature.zendesk_enabled");this.zendeskWidgetKey=t.zendeskHelpWidgetKey,this.zendeskWidgetVisible=""!==n}},{kind:"method",key:"setupAppServicesDependents",value:async function(){await Promise.all([this.setupDevMenu(),this.setupLocalizationManager(),this.startupThemeManager(),this.trackIaxParameter(),this.setupPageViewAnalytics(),this.setupPageMetadataService(),this.setupLightDOMTunnelReset(),this.setupResizeObserver()])}},{kind:"method",key:"startupSentry",value:async function(){const e=await this.appConfig.get();if(e.isTesting||e.isPrerendering)return;const{SentryConfigurer:t}=await(0,vt.s)((()=>Promise.all([i.e(4223),i.e(3326)]).then(i.bind(i,4960))));new t(e).configure()}},{kind:"method",key:"checkForLimitedFunctionality",value:async function(){const e=new URLSearchParams(window.location.search).get("limited");this.siteHasLimitedFunctionality="1"===e}},{kind:"field",key:"iaxParameterTracked",value(){return!1}},{kind:"method",key:"trackIaxParameter",value:async function(){if(this.iaxParameterTracked)return;const e=await this.appServices.get();(await e.analyticsHandler.get()).trackIaxParameter(window.location.href),this.iaxParameterTracked=!0}},{kind:"method",key:"setupDevMenu",value:async function(){const e=await this.appServices.get(),t=await e.appConfig.get(),i=await this.getLoggedInUser(),n="dev"===t.environment,r=i&&i.privs.includes("offshoot-dev")||!1;this.showDevMenu=n||r}},{kind:"method",key:"setupPageViewAnalytics",value:async function(){window.addEventListener("navigationend",(async()=>{const e=await this.appServices.get();(await e.analyticsHandler.get()).trackPageView()}))}},{kind:"method",key:"setupPageMetadataService",value:async function(){window.addEventListener("navigationstart",(async()=>{const e=await this.appServices.get(),t=await e.pageMetadataService.get();t.clearMetaTags(),t.clearLinkTags()}))}},{kind:"method",key:"setupLightDOMTunnelReset",value:async function(){window.addEventListener("navigationstart",(async()=>{const e=await this.appServices.get();(await e.lightDOMTunnel.get()).removeAll()}))}},{kind:"method",key:"setupResizeObserver",value:async function(){const e=await this.appServices.get(),t=await e.resizeObserver.get();this.sharedResizeObserver=t}},{kind:"method",key:"setupPageNavigationActivityIndicator",value:async function(){window.addEventListener("navigationstart",(async()=>{this.showActivityIndicator(!0)})),window.addEventListener("navigationend",(async()=>{this.showActivityIndicator(!1)}))}},{kind:"method",key:"setupDonationBannerService",value:async function(){var e,t,i,n;const r=await this.appServices.get(),s=await r.fetchHandler.get();this.donationBannerService=new mt({fetchHandler:s});const o=new URLSearchParams(window.location.search),a=null!=(e=o.get("ymd"))?e:void 0,l=null!=(t=o.get("variant"))?t:void 0,c=null!=(i=o.get("platform"))?i:void 0,d=null!=(n=o.get("recacheDonationBanner"))?n:void 0,h=await this.donationBannerService.getBannerConfig({ymd:a,variant:l,platform:c,recacheDonationBanner:d});h&&(this.donationBannerVisible=h.shouldDisplayBanner)}},{kind:"method",key:"setupDonationBannerHandler",value:async function(){const e=await this.appConfig.get();this.donationBannerHandler=new ut({baseUrl:e.archiveApiUrl}),window.addEventListener("navigationend",(async()=>{var e;await(null==(e=this.donationBannerHandler)?void 0:e.pageNavigationOccurred(!!this.donationBannerVisible))}))}},{kind:"method",key:"setupView",value:async function(){await this.setupIntersectionObserverPolyfill(),await Promise.all([this.setupPageNavigationActivityIndicator(),this.setupRouter(),this.setupTopnav()])}},{kind:"method",key:"setFooterPosition",value:async function(e){this.footerPosition=e}},{kind:"method",key:"showTopNavSearch",value:function(e){this.topNav.hideSearch=!e}},{kind:"method",key:"showTopNav2ndLogo",value:function(e){const t=e?"allow":"";this.topNav.secondIdentitySlotMode=t}},{kind:"method",key:"showZendeskWidget",value:function(e){this.zendeskWidgetVisible=e}},{kind:"method",key:"setItemIdentifier",value:function(e){this.itemIdentifier=e}},{kind:"method",key:"addAllowedCustomElementsToPage",value:function(){this.convertDayInHistoryLinks(),this.convertDisabilityEligibilityForms()}},{kind:"method",key:"convertDayInHistoryLinks",value:function(){var e,t;const i=null==(e=this.routerSlot)?void 0:e.querySelector("collection-page"),n=null==(t=null==i?void 0:i.shadowRoot)?void 0:t.querySelectorAll('a[onclick*="tapeoftheday("]');null==n||n.forEach((e=>{const t=e.textContent,i=document.createElement("day-in-history");i.textContent=t,e.replaceWith(i)}))}},{kind:"method",key:"convertDisabilityEligibilityForms",value:function(){var e,t,i;const n=null==(e=this.routerSlot)?void 0:e.querySelector("collection-page"),r=null==(t=null==n?void 0:n.shadowRoot)?void 0:t.querySelector("collection-about"),s=null==(i=null==r?void 0:r.shadowRoot)?void 0:i.querySelectorAll(".disability-eligibility-provider-form");null==s||s.forEach((e=>{var t,i,n,r,s,o;const a=e.parentElement,l=document.createElement("disability-eligibility-form"),c=e.querySelector("form");l.setAttribute("type",null!=(t=null==c?void 0:c.dataset.disabilityEligibilityType)?t:""),l.toggleAttribute("ispassword",!!e.querySelector('input[type="password"]')),l.toggleAttribute("open",null!=(i=null==a?void 0:a.open)&&i);const d=null==a?void 0:a.querySelector("h2");null==d||d.setAttribute("slot","title"),l.append(null!=d?d:"");const h=document.createElement("span");h.textContent=null!=(r=null==(n=e.querySelector("label"))?void 0:n.textContent)?r:"",h.setAttribute("slot","input-label"),l.append(h),null==(s=e.querySelectorAll("p"))||s.forEach((e=>{l.append(e)})),null==(o=e.parentElement)||o.replaceWith(l)}))}},{kind:"method",key:"getWindowScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.clientWidth}},{kind:"field",key:"activityIndicatorRequests",value(){return 0}},{kind:"method",key:"showActivityIndicator",value:function(e){this.activityIndicatorRequests+=e?1:-1,this.activityIndicatorRequests=Math.max(0,this.activityIndicatorRequests);const t=!e&&0===this.activityIndicatorRequests;this.activityIndicatorVisible=!t}},{kind:"method",key:"isListsCalloutEnabled",value:async function(){var e,t;try{const e=await this.appServices.get(),[t,i]=await Promise.all([e.keyValueStoreManager.get(),e.abtestManager.get()]),n=null==t?void 0:t.getKeyValueStore({namespace:"UserLists",storageType:"localStorage"}),[r,s]=await Promise.all([i.variantFor("UserListsLaunchCallouts"),null==n?void 0:n.get("tabCalloutDismissed")]);return"On"===r&&!s}catch(i){return null==(t=null==(e=window.Sentry)?void 0:e.captureMessage)||t.call(e,"Unable to load lists callout state: "+i,"error"),!1}}},{kind:"method",key:"setupTopnav",value:async function(){const e=await this.appConfig.get();this.topNav.baseHost=e.archiveNavUrl,this.waybackPagesArchived=await this.getWaybackPagesArchived();const t=await this.getLoggedInUser();if(!t)return;this.screenName=t.screenname,this.username=t.itemname.replace(/^@/,"");const i=t.privs.includes("/");this.userHasItemsPriv=i||t.privs.includes("/items"),this.userHasFlagsPriv=i||t.privs.includes("/flags"),await this.updateTopNavCallouts()}},{kind:"method",key:"updateTopNavCallouts",value:async function(){const e=await this.isListsCalloutEnabled();this.topNav.config&&(this.topNav.config=wt(wt({},this.topNav.config),{callouts:e?{"My lists":"NEW"}:{}}))}},{kind:"method",key:"getWaybackPagesArchived",value:async function(){var e;const t=await this.appServices.get(),i=await t.mediaCountService.get(),n=await i.fetchMediaCounts();return(0,bt.F)(null!=(e=null==n?void 0:n.web)?e:0)}},{kind:"method",key:"getLoggedInUser",value:async function(){const e=await this.appServices.get(),t=await e.userService.get();return(await t.getLoggedInUser()).success}},{kind:"method",key:"startupThemeManager",value:async function(){const e=await this.appServices.get(),t=await e.themeManager.get();await t.startup()}},{kind:"method",key:"setupRouter",value:async function(){if(!this.routerSlot)return;const e=new yt(this.appServices);this.routerSlot.handleAnchorLinks=!1,this.routerSlot.add(e.appRoutes)}},{kind:"method",key:"setupLocalizationManager",value:async function(){const e=await this.appServices.get(),t=await e.localizationManager.get();this.showActivityIndicator(!0),await t.setup(),this.hasLoadedStrings=!0,this.showActivityIndicator(!1)}},{kind:"method",key:"render",value:function(){return M.qy`
      <a
        href="#maincontent"
        id="skip-to-main-content-link"
        @click=${this.skipToMainContent}
        >${(0,R.ab)("Skip to main content")}</a
      >

      <header>
        ${this.psaBannerTemplate}
        ${this.siteHasLimitedFunctionality?this.limitedSiteFunctionalityBannerTemplate:M.s6}
        <ia-topnav
          localLinks="true"
          waybackPagesArchived=${this.waybackPagesArchived}
          @trackClick=${this.trackTopNavEvent}
          @trackSubmit=${this.trackTopNavEvent}
          screenName=${this.screenName}
          username=${this.username}
          itemIdentifier=${this.itemIdentifier}
          ?admin=${this.userHasItemsPriv}
          ?canManageFlags=${this.userHasFlagsPriv}
        >
        </ia-topnav>
        ${this.showDevMenu?this.devMenuTemplate:M.s6}
        ${this.activityIndicatorVisible?this.activityIndicatorTemplate:M.s6}
      </header>

      ${this.hasLoadedStrings?this.mainTemplate:M.s6}
      ${this.modalManagerTemplate}
      ${this.zendeskWidgetVisible?this.zendeskHelpWidgetTemplate:M.s6}
    `}},{kind:"get",key:"psaBannerTemplate",value:function(){return(0,ct.N)((async()=>{await(0,vt.s)((()=>Promise.all([i.e(4223),i.e(570)]).then(i.bind(i,2987))))}),(()=>M.qy`
          <psa-banners
            .psaBannerService=${this.psaBannerService}
            .userService=${this.userService}
            .keyValueStoreManager=${this.keyValueStoreManager}
          >
          </psa-banners>
        `))}},{kind:"method",key:"skipToMainContent",value:function(e){var t;e.preventDefault(),null==(t=this.mainContent)||t.scrollIntoView({behavior:"smooth"}),setTimeout((()=>{var e;null==(e=this.mainContent)||e.focus()}),250)}},{kind:"get",key:"limitedSiteFunctionalityBannerTemplate",value:function(){return(0,ct.N)((async()=>{await(0,vt.s)((()=>i.e(4223).then(i.bind(i,3565))))}),(()=>M.qy`
          <alert-banner .level=${"warn"}>
            ${(0,R.ab)("Your browser may not be compatible with all the features on this site. Consider upgrading to a modern browser for an improved experience.")}
          </alert-banner>
        `))}},{kind:"get",key:"zendeskHelpWidgetTemplate",value:function(){return(0,ct.N)((async()=>{await(0,vt.s)((()=>Promise.all([i.e(4223),i.e(6044)]).then(i.bind(i,7418))))}),(()=>M.qy`
          <ia-zendesk-help-widget
            widgetSrc="https://static.zdassets.com/ekr/snippet.js?key=${this.zendeskWidgetKey}"
          ></ia-zendesk-help-widget>
        `))}},{kind:"get",key:"devMenuTemplate",value:function(){return(0,ct.N)((async()=>{await(0,vt.s)((()=>Promise.all([i.e(4223),i.e(8797)]).then(i.bind(i,9926))))}),(()=>M.qy`
          <dev-tools
            .appServices=${this.appServices}
            @pageWidthSliderChanged=${this.devToolPageWidthSliderChanged}
            @borderCheckboxChecked=${this.devToolsBorderCheckboxChecked}
          >
          </dev-tools>
        `))}},{kind:"get",key:"activityIndicatorTemplate",value:function(){return M.qy`
      <horizontal-activity-indicator
        .resizeObserver=${this.sharedResizeObserver}
      >
      </horizontal-activity-indicator>
    `}},{kind:"get",key:"mainTemplate",value:function(){return M.qy`
      <main id="maincontent" tabindex="-1">
        <div
          class="page-container ${this.showDebugBorders?"show-debug-borders":""}"
        >
          <router-slot></router-slot>
        </div>
      </main>

      <footer class="${this.footerPosition}">${this.footerTemplate}</footer>
    `}},{kind:"get",key:"modalManagerTemplate",value:function(){return(0,ct.N)((async()=>{await(0,vt.s)((()=>i.e(4223).then(i.bind(i,4603))))}),(()=>M.qy`
          <modal-manager>
            <slot
              name="paypal-upsell-button"
              slot="paypal-upsell-button"
            ></slot>
          </modal-manager>
        `))}},{kind:"method",key:"devToolPageWidthSliderChanged",value:function(e){var t,i;const n=e.detail.width;null==(i=null==(t=this.shadowRoot)?void 0:t.host)||i.style.setProperty("--app-root-page-max-width",n+"rem")}},{kind:"method",key:"devToolsBorderCheckboxChecked",value:function(e){const t=e.detail.showBorders;this.showDebugBorders=t}},{kind:"method",key:"trackTopNavEvent",value:async function(e){var t,i;const[n,r]=null==(i=null==(t=e.detail)?void 0:t.event)?void 0:i.split("|");n&&r&&await this.trackEvent({event:{category:n,action:r},sampling:!0})}},{kind:"method",key:"trackEvent",value:async function(e){const t=await this.appServices.get(),i=await t.analyticsHandler.get();e.sampling?i.sendEvent(e.event):i.sendEventNoSampling(e.event)}},{kind:"get",key:"footerTemplate",value:function(){return(0,ct.N)((async()=>{await(0,vt.s)((()=>i.e(9173).then(i.bind(i,9010))))}),(()=>M.qy` <app-footer></app-footer> `))}},{kind:"get",static:!0,key:"styles",value:function(){return M.AH`
      #skip-to-main-content-link {
        /*http://webaim.org/techniques/css/invisiblecontent/*/
        position: absolute;
        clip: rect(0, 0, 0, 0);
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
        font-size: 1.4rem;
        color: var(--ia-theme-link-color, #4b64ff);
      }
      #skip-to-main-content-link:focus {
        position: static;
        width: auto;
        height: auto;
        outline: thin dotted #333;
        outline: 3px auto -webkit-focus-ring-color;
        margin: 5px 0 2px 8px;
        padding: 2px 3px;
        display: inline-block;
      }
      #skip-to-main-content-link:visited {
        color: var(--ia-theme-link-color, #4b64ff);
      }

      horizontal-activity-indicator {
        position: absolute;
        height: 3px;
        width: 100%;
      }
      modal-manager[mode='closed'] {
        display: none;
      }
      modal-manager.more-search-facets {
        --modalWidth: 85rem;
        --modalBorder: 2px solid #194880;
        --modalTitleLineHeight: 4rem;
        --modalTitleFontSize: 1.8rem;
        --modalCornerRadius: 0;
        --modalBottomPadding: 0;
        --modalScrollOffset: 0;
        --modalCornerRadius: 0.5rem;
      }
      modal-manager.expanded-date-picker {
        --modalWidth: 58rem;
        --modalBorder: 2px solid var(--primaryButtonBGColor, #194880);
        --modalTitleLineHeight: 4rem;
        --modalTitleFontSize: 1.8rem;
        --modalCornerRadius: 0;
        --modalBottomPadding: 0;
        --modalBottomMargin: 0;
        --modalScrollOffset: 0;
        --modalCornerRadius: 0.5rem;
      }
      modal-manager.remove-items {
        --modalWidth: 58rem;
        --modalBorder: 2px solid var(--primaryButtonBGColor, #194880);
        --modalTitleLineHeight: 4rem;
        --modalTitleFontSize: 1.8rem;
        --modalCornerRadius: 0;
        --modalBottomPadding: 0;
        --modalBottomMargin: 0;
        --modalScrollOffset: 0;
        --modalCornerRadius: 0.5rem;
      }
      modal-manager.create-user-list {
        --modalTitleLineHeight: 4.5rem;
        --modalHeaderBottomPadding: 0;
        --modalWidth: 40rem;
      }
      modal-manager.delete-user-list {
        --modalTitleLineHeight: 4.5rem;
        --modalHeaderBottomPadding: 0;
        --modalWidth: 40rem;
      }

      app-footer {
        display: block;
      }
      .page-container {
        margin: auto;
      }
      .page-container.show-debug-borders {
        outline: 1px solid purple;
      }
      footer {
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
      }
      footer.fixed {
        position: fixed;
      }
      footer.off {
        display: none;
      }
    `}}]}}((function(e){s.initializeInstanceElements(e,a.elements)}),r),a=s.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},n=0;n<e.length;n++){var r,s=e[n];if("method"===s.kind&&(r=t.find(i)))if(Et(s.descriptor)||Et(r.descriptor)){if(At(s)||At(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(At(s)){if(At(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}St(s,r)}else t.push(s)}return t}(o.d.map($t)),e);s.initializeClassElements(o.F,a.elements),s.runClassFinishers(o.F,a.finishers)}([(0,O.EM)("app-root")],0,M.WF)},2786:function(e,t,i){async function n(e,t){const i=await e.get(),n=await i.userService.get(),r=(await n.getLoggedInUser()).success;if(r){const e=r.itemname,i=t?`/${t}`:"",n=window.location.search,s=window.location.hash;history.replaceState(history.state,"",`/details/${e}${i}${n}${s}`)}else window.location.pathname="/login"}i.d(t,{T:function(){return n}})},609:function(e,t,i){i.d(t,{F:function(){return r}});var n=i(5141);function r(e,t="long"){const i=function(e){let t=1;return e>=1e9?t=1e9:e>=1e6?t=1e6:e>=1e3&&(t=1e3),t}(e),r=function(e=0,t){const i=e/t;let n=0;return n=i<10?Math.round(10*(i+Number.EPSILON))/10:Math.round(i),n}(e,i);return function(e,t,i){switch(t){case 1e9:return"short"===i?(0,n.ab)(n.gx`${e}B`):(0,n.ab)(n.gx`${e} billion`);case 1e6:return"short"===i?(0,n.ab)(n.gx`${e}M`):(0,n.ab)(n.gx`${e} million`);case 1e3:return"short"===i?(0,n.ab)(n.gx`${e}K`):(0,n.ab)(n.gx`${e} thousand`);default:return`${e}`}}(r,i,t)}},8971:function(e,t,i){i.d(t,{s:function(){return l}});var n=i(6184),r=i(3923);class s extends Error{constructor(e){super(e),this.name="ImportRetryError"}}const o=new r.AnalyticsHandler({enableAnalytics:!0}),a=2;async function l(e,t=a,i=1e3){try{return await e()}catch(r){let c="Error loading import";if("string"==typeof r?c=r:r instanceof Error&&(c=r.message),t){await(0,n.L)(i);const r=a-t+1;return o.sendEvent({category:"offshootImportRetry",action:"retryingImport",label:`retryNumber: ${r} / ${a}, error: ${c}`}),l(e,t-1,i)}throw o.sendEvent({category:"offshootImportRetry",action:"importFailed",label:c}),new s(c)}}},6184:function(e,t,i){function n(e){return new Promise((t=>setTimeout(t,e)))}i.d(t,{L:function(){return n}})}},function(e){e(e.s=9371)}]);
//# sourceMappingURL=index.25afe3f337cb60043b48.js.map