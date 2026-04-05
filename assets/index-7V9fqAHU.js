(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(e){const n=Object.create(null);for(const r of e.split(","))n[r]=1;return r=>r in n}const K={},cn=[],Oe=()=>{},Xt=()=>!1,or=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ur=e=>e.startsWith("onUpdate:"),ie=Object.assign,Kr=(e,n)=>{const r=e.indexOf(n);r>-1&&e.splice(r,1)},di=Object.prototype.hasOwnProperty,F=(e,n)=>di.call(e,n),R=Array.isArray,ln=e=>On(e)==="[object Map]",Yt=e=>On(e)==="[object Set]",ht=e=>On(e)==="[object Date]",O=e=>typeof e=="function",X=e=>typeof e=="string",Le=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Qt=e=>(G(e)||O(e))&&O(e.then)&&O(e.catch),Zt=Object.prototype.toString,On=e=>Zt.call(e),fi=e=>On(e).slice(8,-1),eo=e=>On(e)==="[object Object]",Wr=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const n=Object.create(null);return r=>n[r]||(n[r]=e(r))},pi=/-\w/g,ye=ir(e=>e.replace(pi,n=>n.slice(1).toUpperCase())),hi=/\B([A-Z])/g,Xe=ir(e=>e.replace(hi,"-$1").toLowerCase()),no=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),br=ir(e=>e?`on${no(e)}`:""),Ee=(e,n)=>!Object.is(e,n),Bn=(e,...n)=>{for(let r=0;r<e.length;r++)e[r](...n)},ro=(e,n,r,t=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:t,value:r})},Br=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let mt;const sr=()=>mt||(mt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vr(e){if(R(e)){const n={};for(let r=0;r<e.length;r++){const t=e[r],o=X(t)?vi(t):Vr(t);if(o)for(const i in o)n[i]=o[i]}return n}else if(X(e)||G(e))return e}const mi=/;(?![^(]*\))/g,gi=/:([^]+)/,bi=/\/\*[^]*?\*\//g;function vi(e){const n={};return e.replace(bi,"").split(mi).forEach(r=>{if(r){const t=r.split(gi);t.length>1&&(n[t[0].trim()]=t[1].trim())}}),n}function hn(e){let n="";if(X(e))n=e;else if(R(e))for(let r=0;r<e.length;r++){const t=hn(e[r]);t&&(n+=t+" ")}else if(G(e))for(const r in e)e[r]&&(n+=r+" ");return n.trim()}const yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wi=Gr(yi);function to(e){return!!e||e===""}function ki(e,n){if(e.length!==n.length)return!1;let r=!0;for(let t=0;r&&t<e.length;t++)r=$r(e[t],n[t]);return r}function $r(e,n){if(e===n)return!0;let r=ht(e),t=ht(n);if(r||t)return r&&t?e.getTime()===n.getTime():!1;if(r=Le(e),t=Le(n),r||t)return e===n;if(r=R(e),t=R(n),r||t)return r&&t?ki(e,n):!1;if(r=G(e),t=G(n),r||t){if(!r||!t)return!1;const o=Object.keys(e).length,i=Object.keys(n).length;if(o!==i)return!1;for(const s in e){const a=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(a&&!c||!a&&c||!$r(e[s],n[s]))return!1}}return String(e)===String(n)}const oo=e=>!!(e&&e.__v_isRef===!0),Re=e=>X(e)?e:e==null?"":R(e)||G(e)&&(e.toString===Zt||!O(e.toString))?oo(e)?Re(e.value):JSON.stringify(e,io,2):String(e),io=(e,n)=>oo(n)?io(e,n.value):ln(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((r,[t,o],i)=>(r[vr(t,i)+" =>"]=o,r),{})}:Yt(n)?{[`Set(${n.size})`]:[...n.values()].map(r=>vr(r))}:Le(n)?vr(n):G(n)&&!R(n)&&!eo(n)?String(n):n,vr=(e,n="")=>{var r;return Le(e)?`Symbol(${(r=e.description)!=null?r:n})`:e};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fe;class _i{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=fe,!n&&fe&&(this.index=(fe.scopes||(fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].pause();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].resume();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].resume()}}run(n){if(this._active){const r=fe;try{return fe=this,n()}finally{fe=r}}}on(){++this._on===1&&(this.prevScope=fe,fe=this)}off(){this._on>0&&--this._on===0&&(fe=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let r,t;for(r=0,t=this.effects.length;r<t;r++)this.effects[r].stop();for(this.effects.length=0,r=0,t=this.cleanups.length;r<t;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,t=this.scopes.length;r<t;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Si(){return fe}let V;const yr=new WeakSet;class so{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&fe.active&&fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yr.has(this)&&(yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||co(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gt(this),lo(this);const n=V,r=we;V=this,we=!0;try{return this.fn()}finally{uo(this),V=n,we=r,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Xr(n);this.deps=this.depsTail=void 0,gt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ir(this)&&this.run()}get dirty(){return Ir(this)}}let ao=0,_n,Sn;function co(e,n=!1){if(e.flags|=8,n){e.next=Sn,Sn=e;return}e.next=_n,_n=e}function zr(){ao++}function Jr(){if(--ao>0)return;if(Sn){let n=Sn;for(Sn=void 0;n;){const r=n.next;n.next=void 0,n.flags&=-9,n=r}}let e;for(;_n;){let n=_n;for(_n=void 0;n;){const r=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function lo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function uo(e){let n,r=e.depsTail,t=r;for(;t;){const o=t.prevDep;t.version===-1?(t===r&&(r=o),Xr(t),xi(t)):n=t,t.dep.activeLink=t.prevActiveLink,t.prevActiveLink=void 0,t=o}e.deps=n,e.depsTail=r}function Ir(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(fo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function fo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Tn)||(e.globalVersion=Tn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ir(e))))return;e.flags|=2;const n=e.dep,r=V,t=we;V=e,we=!0;try{lo(e);const o=e.fn(e._value);(n.version===0||Ee(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{V=r,we=t,uo(e),e.flags&=-3}}function Xr(e,n=!1){const{dep:r,prevSub:t,nextSub:o}=e;if(t&&(t.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=t,e.nextSub=void 0),r.subs===e&&(r.subs=t,!t&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)Xr(i,!0)}!n&&!--r.sc&&r.map&&r.map.delete(r.key)}function xi(e){const{prevDep:n,nextDep:r}=e;n&&(n.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=n,e.nextDep=void 0)}let we=!0;const po=[];function Ue(){po.push(we),we=!1}function Ke(){const e=po.pop();we=e===void 0?!0:e}function gt(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const r=V;V=void 0;try{n()}finally{V=r}}}let Tn=0;class Ai{constructor(n,r){this.sub=n,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!V||!we||V===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==V)r=this.activeLink=new Ai(V,this),V.deps?(r.prevDep=V.depsTail,V.depsTail.nextDep=r,V.depsTail=r):V.deps=V.depsTail=r,ho(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const t=r.nextDep;t.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=t),r.prevDep=V.depsTail,r.nextDep=void 0,V.depsTail.nextDep=r,V.depsTail=r,V.deps===r&&(V.deps=t)}return r}trigger(n){this.version++,Tn++,this.notify(n)}notify(n){zr();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Jr()}}}function ho(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let t=n.deps;t;t=t.nextDep)ho(t)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Tr=new WeakMap,rn=Symbol(""),jr=Symbol(""),jn=Symbol("");function te(e,n,r){if(we&&V){let t=Tr.get(e);t||Tr.set(e,t=new Map);let o=t.get(r);o||(t.set(r,o=new Yr),o.map=t,o.key=r),o.track()}}function qe(e,n,r,t,o,i){const s=Tr.get(e);if(!s){Tn++;return}const a=c=>{c&&c.trigger()};if(zr(),n==="clear")s.forEach(a);else{const c=R(e),f=c&&Wr(r);if(c&&r==="length"){const d=Number(t);s.forEach((p,h)=>{(h==="length"||h===jn||!Le(h)&&h>=d)&&a(p)})}else switch((r!==void 0||s.has(void 0))&&a(s.get(r)),f&&a(s.get(jn)),n){case"add":c?f&&a(s.get("length")):(a(s.get(rn)),ln(e)&&a(s.get(jr)));break;case"delete":c||(a(s.get(rn)),ln(e)&&a(s.get(jr)));break;case"set":ln(e)&&a(s.get(rn));break}}Jr()}function on(e){const n=N(e);return n===e?n:(te(n,"iterate",jn),be(e)?n:n.map(_e))}function ar(e){return te(e=N(e),"iterate",jn),e}function Te(e,n){return We(e)?fn(tn(e)?_e(n):n):_e(n)}const Ci={__proto__:null,[Symbol.iterator](){return wr(this,Symbol.iterator,e=>Te(this,e))},concat(...e){return on(this).concat(...e.map(n=>R(n)?on(n):n))},entries(){return wr(this,"entries",e=>(e[1]=Te(this,e[1]),e))},every(e,n){return He(this,"every",e,n,void 0,arguments)},filter(e,n){return He(this,"filter",e,n,r=>r.map(t=>Te(this,t)),arguments)},find(e,n){return He(this,"find",e,n,r=>Te(this,r),arguments)},findIndex(e,n){return He(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return He(this,"findLast",e,n,r=>Te(this,r),arguments)},findLastIndex(e,n){return He(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return He(this,"forEach",e,n,void 0,arguments)},includes(...e){return kr(this,"includes",e)},indexOf(...e){return kr(this,"indexOf",e)},join(e){return on(this).join(e)},lastIndexOf(...e){return kr(this,"lastIndexOf",e)},map(e,n){return He(this,"map",e,n,void 0,arguments)},pop(){return vn(this,"pop")},push(...e){return vn(this,"push",e)},reduce(e,...n){return bt(this,"reduce",e,n)},reduceRight(e,...n){return bt(this,"reduceRight",e,n)},shift(){return vn(this,"shift")},some(e,n){return He(this,"some",e,n,void 0,arguments)},splice(...e){return vn(this,"splice",e)},toReversed(){return on(this).toReversed()},toSorted(e){return on(this).toSorted(e)},toSpliced(...e){return on(this).toSpliced(...e)},unshift(...e){return vn(this,"unshift",e)},values(){return wr(this,"values",e=>Te(this,e))}};function wr(e,n,r){const t=ar(e),o=t[n]();return t!==e&&!be(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=r(i.value)),i}),o}const Pi=Array.prototype;function He(e,n,r,t,o,i){const s=ar(e),a=s!==e&&!be(e),c=s[n];if(c!==Pi[n]){const p=c.apply(e,i);return a?_e(p):p}let f=r;s!==e&&(a?f=function(p,h){return r.call(this,Te(e,p),h,e)}:r.length>2&&(f=function(p,h){return r.call(this,p,h,e)}));const d=c.call(s,f,t);return a&&o?o(d):d}function bt(e,n,r,t){const o=ar(e),i=o!==e&&!be(e);let s=r,a=!1;o!==e&&(i?(a=t.length===0,s=function(f,d,p){return a&&(a=!1,f=Te(e,f)),r.call(this,f,Te(e,d),p,e)}):r.length>3&&(s=function(f,d,p){return r.call(this,f,d,p,e)}));const c=o[n](s,...t);return a?Te(e,c):c}function kr(e,n,r){const t=N(e);te(t,"iterate",jn);const o=t[n](...r);return(o===-1||o===!1)&&nt(r[0])?(r[0]=N(r[0]),t[n](...r)):o}function vn(e,n,r=[]){Ue(),zr();const t=N(e)[n].apply(e,r);return Jr(),Ke(),t}const Ii=Gr("__proto__,__v_isRef,__isVue"),mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Le));function Ti(e){Le(e)||(e=String(e));const n=N(this);return te(n,"has",e),n.hasOwnProperty(e)}class go{constructor(n=!1,r=!1){this._isReadonly=n,this._isShallow=r}get(n,r,t){if(r==="__v_skip")return n.__v_skip;const o=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return i;if(r==="__v_raw")return t===(o?i?Fi:wo:i?yo:vo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(t)?n:void 0;const s=R(n);if(!o){let c;if(s&&(c=Ci[r]))return c;if(r==="hasOwnProperty")return Ti}const a=Reflect.get(n,r,oe(n)?n:t);if((Le(r)?mo.has(r):Ii(r))||(o||te(n,"get",r),i))return a;if(oe(a)){const c=s&&Wr(r)?a:a.value;return o&&G(c)?Rr(c):c}return G(a)?o?Rr(a):Zr(a):a}}class bo extends go{constructor(n=!1){super(!1,n)}set(n,r,t,o){let i=n[r];const s=R(n)&&Wr(r);if(!this._isShallow){const f=We(i);if(!be(t)&&!We(t)&&(i=N(i),t=N(t)),!s&&oe(i)&&!oe(t))return f||(i.value=t),!0}const a=s?Number(r)<n.length:F(n,r),c=Reflect.set(n,r,t,oe(n)?n:o);return n===N(o)&&(a?Ee(t,i)&&qe(n,"set",r,t):qe(n,"add",r,t)),c}deleteProperty(n,r){const t=F(n,r);n[r];const o=Reflect.deleteProperty(n,r);return o&&t&&qe(n,"delete",r,void 0),o}has(n,r){const t=Reflect.has(n,r);return(!Le(r)||!mo.has(r))&&te(n,"has",r),t}ownKeys(n){return te(n,"iterate",R(n)?"length":rn),Reflect.ownKeys(n)}}class ji extends go{constructor(n=!1){super(!0,n)}set(n,r){return!0}deleteProperty(n,r){return!0}}const Ei=new bo,Ri=new ji,Mi=new bo(!0);const Er=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function Oi(e,n,r){return function(...t){const o=this.__v_raw,i=N(o),s=ln(i),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,f=o[e](...t),d=r?Er:n?fn:_e;return!n&&te(i,"iterate",c?jr:rn),ie(Object.create(f),{next(){const{value:p,done:h}=f.next();return h?{value:p,done:h}:{value:a?[d(p[0]),d(p[1])]:d(p),done:h}}})}}function Un(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Li(e,n){const r={get(o){const i=this.__v_raw,s=N(i),a=N(o);e||(Ee(o,a)&&te(s,"get",o),te(s,"get",a));const{has:c}=Gn(s),f=n?Er:e?fn:_e;if(c.call(s,o))return f(i.get(o));if(c.call(s,a))return f(i.get(a));i!==s&&i.get(o)},get size(){const o=this.__v_raw;return!e&&te(N(o),"iterate",rn),o.size},has(o){const i=this.__v_raw,s=N(i),a=N(o);return e||(Ee(o,a)&&te(s,"has",o),te(s,"has",a)),o===a?i.has(o):i.has(o)||i.has(a)},forEach(o,i){const s=this,a=s.__v_raw,c=N(a),f=n?Er:e?fn:_e;return!e&&te(c,"iterate",rn),a.forEach((d,p)=>o.call(i,f(d),f(p),s))}};return ie(r,e?{add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear")}:{add(o){const i=N(this),s=Gn(i),a=N(o),c=!n&&!be(o)&&!We(o)?a:o;return s.has.call(i,c)||Ee(o,c)&&s.has.call(i,o)||Ee(a,c)&&s.has.call(i,a)||(i.add(c),qe(i,"add",c,c)),this},set(o,i){!n&&!be(i)&&!We(i)&&(i=N(i));const s=N(this),{has:a,get:c}=Gn(s);let f=a.call(s,o);f||(o=N(o),f=a.call(s,o));const d=c.call(s,o);return s.set(o,i),f?Ee(i,d)&&qe(s,"set",o,i):qe(s,"add",o,i),this},delete(o){const i=N(this),{has:s,get:a}=Gn(i);let c=s.call(i,o);c||(o=N(o),c=s.call(i,o)),a&&a.call(i,o);const f=i.delete(o);return c&&qe(i,"delete",o,void 0),f},clear(){const o=N(this),i=o.size!==0,s=o.clear();return i&&qe(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{r[o]=Oi(o,e,n)}),r}function Qr(e,n){const r=Li(e,n);return(t,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?t:Reflect.get(F(r,o)&&o in t?r:t,o,i)}const Di={get:Qr(!1,!1)},Hi={get:Qr(!1,!0)},Ni={get:Qr(!0,!1)};const vo=new WeakMap,yo=new WeakMap,wo=new WeakMap,Fi=new WeakMap;function qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gi(e){return e.__v_skip||!Object.isExtensible(e)?0:qi(fi(e))}function Zr(e){return We(e)?e:et(e,!1,Ei,Di,vo)}function Ui(e){return et(e,!1,Mi,Hi,yo)}function Rr(e){return et(e,!0,Ri,Ni,wo)}function et(e,n,r,t,o){if(!G(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=Gi(e);if(i===0)return e;const s=o.get(e);if(s)return s;const a=new Proxy(e,i===2?t:r);return o.set(e,a),a}function tn(e){return We(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function We(e){return!!(e&&e.__v_isReadonly)}function be(e){return!!(e&&e.__v_isShallow)}function nt(e){return e?!!e.__v_raw:!1}function N(e){const n=e&&e.__v_raw;return n?N(n):e}function Ki(e){return!F(e,"__v_skip")&&Object.isExtensible(e)&&ro(e,"__v_skip",!0),e}const _e=e=>G(e)?Zr(e):e,fn=e=>G(e)?Rr(e):e;function oe(e){return e?e.__v_isRef===!0:!1}function Me(e){return Wi(e,!1)}function Wi(e,n){return oe(e)?e:new Bi(e,n)}class Bi{constructor(n,r){this.dep=new Yr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?n:N(n),this._value=r?n:_e(n),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(n){const r=this._rawValue,t=this.__v_isShallow||be(n)||We(n);n=t?n:N(n),Ee(n,r)&&(this._rawValue=n,this._value=t?n:_e(n),this.dep.trigger())}}function Vi(e){return oe(e)?e.value:e}const $i={get:(e,n,r)=>n==="__v_raw"?e:Vi(Reflect.get(e,n,r)),set:(e,n,r,t)=>{const o=e[n];return oe(o)&&!oe(r)?(o.value=r,!0):Reflect.set(e,n,r,t)}};function ko(e){return tn(e)?e:new Proxy(e,$i)}class zi{constructor(n,r,t){this.fn=n,this.setter=r,this._value=void 0,this.dep=new Yr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=t}notify(){if(this.flags|=16,!(this.flags&8)&&V!==this)return co(this,!0),!0}get value(){const n=this.dep.track();return fo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Ji(e,n,r=!1){let t,o;return O(e)?t=e:(t=e.get,o=e.set),new zi(t,o,r)}const Kn={},Yn=new WeakMap;let nn;function Xi(e,n=!1,r=nn){if(r){let t=Yn.get(r);t||Yn.set(r,t=[]),t.push(e)}}function Yi(e,n,r=K){const{immediate:t,deep:o,once:i,scheduler:s,augmentJob:a,call:c}=r,f=T=>o?T:be(T)||o===!1||o===0?Ge(T,1):Ge(T);let d,p,h,g,C=!1,A=!1;if(oe(e)?(p=()=>e.value,C=be(e)):tn(e)?(p=()=>f(e),C=!0):R(e)?(A=!0,C=e.some(T=>tn(T)||be(T)),p=()=>e.map(T=>{if(oe(T))return T.value;if(tn(T))return f(T);if(O(T))return c?c(T,2):T()})):O(e)?n?p=c?()=>c(e,2):e:p=()=>{if(h){Ue();try{h()}finally{Ke()}}const T=nn;nn=d;try{return c?c(e,3,[g]):e(g)}finally{nn=T}}:p=Oe,n&&o){const T=p,$=o===!0?1/0:o;p=()=>Ge(T(),$)}const H=Si(),L=()=>{d.stop(),H&&H.active&&Kr(H.effects,d)};if(i&&n){const T=n;n=(...$)=>{T(...$),L()}}let M=A?new Array(e.length).fill(Kn):Kn;const U=T=>{if(!(!(d.flags&1)||!d.dirty&&!T))if(n){const $=d.run();if(o||C||(A?$.some((Q,Z)=>Ee(Q,M[Z])):Ee($,M))){h&&h();const Q=nn;nn=d;try{const Z=[$,M===Kn?void 0:A&&M[0]===Kn?[]:M,g];M=$,c?c(n,3,Z):n(...Z)}finally{nn=Q}}}else d.run()};return a&&a(U),d=new so(p),d.scheduler=s?()=>s(U,!1):U,g=T=>Xi(T,!1,d),h=d.onStop=()=>{const T=Yn.get(d);if(T){if(c)c(T,4);else for(const $ of T)$();Yn.delete(d)}},n?t?U(!0):M=d.run():s?s(U.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function Ge(e,n=1/0,r){if(n<=0||!G(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=n))return e;if(r.set(e,n),n--,oe(e))Ge(e.value,n,r);else if(R(e))for(let t=0;t<e.length;t++)Ge(e[t],n,r);else if(Yt(e)||ln(e))e.forEach(t=>{Ge(t,n,r)});else if(eo(e)){for(const t in e)Ge(e[t],n,r);for(const t of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,t)&&Ge(e[t],n,r)}return e}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(e,n,r,t){try{return t?e(...t):e()}catch(o){cr(o,n,r)}}function De(e,n,r,t){if(O(e)){const o=Ln(e,n,r,t);return o&&Qt(o)&&o.catch(i=>{cr(i,n,r)}),o}if(R(e)){const o=[];for(let i=0;i<e.length;i++)o.push(De(e[i],n,r,t));return o}}function cr(e,n,r,t=!0){const o=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||K;if(n){let a=n.parent;const c=n.proxy,f=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,f)===!1)return}a=a.parent}if(i){Ue(),Ln(i,null,10,[e,c,f]),Ke();return}}Qi(e,r,o,t,s)}function Qi(e,n,r,t=!0,o=!1){if(o)throw e;console.error(e)}const ce=[];let Ie=-1;const un=[];let $e=null,sn=0;const _o=Promise.resolve();let Qn=null;function Zi(e){const n=Qn||_o;return e?n.then(this?e.bind(this):e):n}function es(e){let n=Ie+1,r=ce.length;for(;n<r;){const t=n+r>>>1,o=ce[t],i=En(o);i<e||i===e&&o.flags&2?n=t+1:r=t}return n}function rt(e){if(!(e.flags&1)){const n=En(e),r=ce[ce.length-1];!r||!(e.flags&2)&&n>=En(r)?ce.push(e):ce.splice(es(n),0,e),e.flags|=1,So()}}function So(){Qn||(Qn=_o.then(Ao))}function ns(e){R(e)?un.push(...e):$e&&e.id===-1?$e.splice(sn+1,0,e):e.flags&1||(un.push(e),e.flags|=1),So()}function vt(e,n,r=Ie+1){for(;r<ce.length;r++){const t=ce[r];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;ce.splice(r,1),r--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function xo(e){if(un.length){const n=[...new Set(un)].sort((r,t)=>En(r)-En(t));if(un.length=0,$e){$e.push(...n);return}for($e=n,sn=0;sn<$e.length;sn++){const r=$e[sn];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}$e=null,sn=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ao(e){try{for(Ie=0;Ie<ce.length;Ie++){const n=ce[Ie];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ln(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ie<ce.length;Ie++){const n=ce[Ie];n&&(n.flags&=-2)}Ie=-1,ce.length=0,xo(),Qn=null,(ce.length||un.length)&&Ao()}}let ge=null,Co=null;function Zn(e){const n=ge;return ge=e,Co=e&&e.type.__scopeId||null,n}function rs(e,n=ge,r){if(!n||e._n)return e;const t=(...o)=>{t._d&&Rt(-1);const i=Zn(n);let s;try{s=e(...o)}finally{Zn(i),t._d&&Rt(1)}return s};return t._n=!0,t._c=!0,t._d=!0,t}function Po(e,n){if(ge===null)return e;const r=pr(ge),t=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,s,a,c=K]=n[o];i&&(O(i)&&(i={mounted:i,updated:i}),i.deep&&Ge(s),t.push({dir:i,instance:r,value:s,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ze(e,n,r,t){const o=e.dirs,i=n&&n.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[t];c&&(Ue(),De(c,r,8,[e.el,a,e,n]),Ke())}}function ts(e,n){if(le){let r=le.provides;const t=le.parent&&le.parent.provides;t===r&&(r=le.provides=Object.create(t)),r[e]=n}}function Vn(e,n,r=!1){const t=ta();if(t||dn){let o=dn?dn._context.provides:t?t.parent==null||t.ce?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return r&&O(n)?n.call(t&&t.proxy):n}}const os=Symbol.for("v-scx"),is=()=>Vn(os);function $n(e,n,r){return Io(e,n,r)}function Io(e,n,r=K){const{immediate:t,deep:o,flush:i,once:s}=r,a=ie({},r),c=n&&t||!n&&i!=="post";let f;if(Mn){if(i==="sync"){const g=is();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Oe,g.resume=Oe,g.pause=Oe,g}}const d=le;a.call=(g,C,A)=>De(g,d,C,A);let p=!1;i==="post"?a.scheduler=g=>{re(g,d&&d.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(g,C)=>{C?g():rt(g)}),a.augmentJob=g=>{n&&(g.flags|=4),p&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const h=Yi(e,n,a);return Mn&&(f?f.push(h):c&&h()),h}function ss(e,n,r){const t=this.proxy,o=X(e)?e.includes(".")?To(t,e):()=>t[e]:e.bind(t,t);let i;O(n)?i=n:(i=n.handler,r=n);const s=Dn(this),a=Io(o,i.bind(t),r);return s(),a}function To(e,n){const r=n.split(".");return()=>{let t=e;for(let o=0;o<r.length&&t;o++)t=t[r[o]];return t}}const jo=Symbol("_vte"),as=e=>e.__isTeleport,xn=e=>e&&(e.disabled||e.disabled===""),yt=e=>e&&(e.defer||e.defer===""),wt=e=>typeof SVGElement<"u"&&e instanceof SVGElement,kt=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Mr=(e,n)=>{const r=e&&e.to;return X(r)?n?n(r):null:r},Eo={name:"Teleport",__isTeleport:!0,process(e,n,r,t,o,i,s,a,c,f){const{mc:d,pc:p,pbc:h,o:{insert:g,querySelector:C,createText:A,createComment:H}}=f,L=xn(n.props);let{shapeFlag:M,children:U,dynamicChildren:T}=n;if(e==null){const $=n.el=A(""),Q=n.anchor=A("");g($,r,t),g(Q,r,t);const Z=(ne,pe)=>{M&16&&d(U,ne,pe,o,i,s,a,c)},ee=()=>{const ne=n.target=Mr(n.props,C),pe=Or(ne,n,A,g);ne&&(s!=="svg"&&wt(ne)?s="svg":s!=="mathml"&&kt(ne)&&(s="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(ne),L||(Z(ne,pe),zn(n,!1)))};L&&(Z(r,Q),zn(n,!0)),yt(n.props)?(n.el.__isMounted=!1,re(()=>{ee(),delete n.el.__isMounted},i)):ee()}else{if(yt(n.props)&&e.el.__isMounted===!1){re(()=>{Eo.process(e,n,r,t,o,i,s,a,c,f)},i);return}n.el=e.el,n.targetStart=e.targetStart;const $=n.anchor=e.anchor,Q=n.target=e.target,Z=n.targetAnchor=e.targetAnchor,ee=xn(e.props),ne=ee?r:Q,pe=ee?$:Z;if(s==="svg"||wt(Q)?s="svg":(s==="mathml"||kt(Q))&&(s="mathml"),T?(h(e.dynamicChildren,T,ne,o,i,s,a),st(e,n,!0)):c||p(e,n,ne,pe,o,i,s,a,!1),L)ee?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):Wn(n,r,$,f,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Ve=n.target=Mr(n.props,C);Ve&&Wn(n,Ve,null,f,0)}else ee&&Wn(n,Q,Z,f,1);zn(n,L)}},remove(e,n,r,{um:t,o:{remove:o}},i){const{shapeFlag:s,children:a,anchor:c,targetStart:f,targetAnchor:d,target:p,props:h}=e;if(p&&(o(f),o(d)),i&&o(c),s&16){const g=i||!xn(h);for(let C=0;C<a.length;C++){const A=a[C];t(A,n,r,g,!!A.dynamicChildren)}}},move:Wn,hydrate:cs};function Wn(e,n,r,{o:{insert:t},m:o},i=2){i===0&&t(e.targetAnchor,n,r);const{el:s,anchor:a,shapeFlag:c,children:f,props:d}=e,p=i===2;if(p&&t(s,n,r),(!p||xn(d))&&c&16)for(let h=0;h<f.length;h++)o(f[h],n,r,2);p&&t(a,n,r)}function cs(e,n,r,t,o,i,{o:{nextSibling:s,parentNode:a,querySelector:c,insert:f,createText:d}},p){function h(H,L){let M=L;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")n.targetStart=M;else if(M.data==="teleport anchor"){n.targetAnchor=M,H._lpa=n.targetAnchor&&s(n.targetAnchor);break}}M=s(M)}}function g(H,L){L.anchor=p(s(H),L,a(H),r,t,o,i)}const C=n.target=Mr(n.props,c),A=xn(n.props);if(C){const H=C._lpa||C.firstChild;n.shapeFlag&16&&(A?(g(e,n),h(C,H),n.targetAnchor||Or(C,n,d,f,a(e)===C?e:null)):(n.anchor=s(e),h(C,H),n.targetAnchor||Or(C,n,d,f),p(H&&s(H),n,C,r,t,o,i))),zn(n,A)}else A&&n.shapeFlag&16&&(g(e,n),n.targetStart=e,n.targetAnchor=s(e));return n.anchor&&s(n.anchor)}const ls=Eo;function zn(e,n){const r=e.ctx;if(r&&r.ut){let t,o;for(n?(t=e.el,o=e.anchor):(t=e.targetStart,o=e.targetAnchor);t&&t!==o;)t.nodeType===1&&t.setAttribute("data-v-owner",r.uid),t=t.nextSibling;r.ut()}}function Or(e,n,r,t,o=null){const i=n.targetStart=r(""),s=n.targetAnchor=r("");return i[jo]=s,e&&(t(i,e,o),t(s,e,o)),s}const us=Symbol("_leaveCb");function tt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,tt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Ro(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function _t(e,n){let r;return!!((r=Object.getOwnPropertyDescriptor(e,n))&&!r.configurable)}const er=new WeakMap;function An(e,n,r,t,o=!1){if(R(e)){e.forEach((A,H)=>An(A,n&&(R(n)?n[H]:n),r,t,o));return}if(Cn(t)&&!o){t.shapeFlag&512&&t.type.__asyncResolved&&t.component.subTree.component&&An(e,n,r,t.component.subTree);return}const i=t.shapeFlag&4?pr(t.component):t.el,s=o?null:i,{i:a,r:c}=e,f=n&&n.r,d=a.refs===K?a.refs={}:a.refs,p=a.setupState,h=N(p),g=p===K?Xt:A=>_t(d,A)?!1:F(h,A),C=(A,H)=>!(H&&_t(d,H));if(f!=null&&f!==c){if(St(n),X(f))d[f]=null,g(f)&&(p[f]=null);else if(oe(f)){const A=n;C(f,A.k)&&(f.value=null),A.k&&(d[A.k]=null)}}if(O(c))Ln(c,a,12,[s,d]);else{const A=X(c),H=oe(c);if(A||H){const L=()=>{if(e.f){const M=A?g(c)?p[c]:d[c]:C()||!e.k?c.value:d[e.k];if(o)R(M)&&Kr(M,i);else if(R(M))M.includes(i)||M.push(i);else if(A)d[c]=[i],g(c)&&(p[c]=d[c]);else{const U=[i];C(c,e.k)&&(c.value=U),e.k&&(d[e.k]=U)}}else A?(d[c]=s,g(c)&&(p[c]=s)):H&&(C(c,e.k)&&(c.value=s),e.k&&(d[e.k]=s))};if(s){const M=()=>{L(),er.delete(e)};M.id=-1,er.set(e,M),re(M,r)}else St(e),L()}}}function St(e){const n=er.get(e);n&&(n.flags|=8,er.delete(e))}sr().requestIdleCallback;sr().cancelIdleCallback;const Cn=e=>!!e.type.__asyncLoader,Mo=e=>e.type.__isKeepAlive;function ds(e,n){Oo(e,"a",n)}function fs(e,n){Oo(e,"da",n)}function Oo(e,n,r=le){const t=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(lr(n,t,r),r){let o=r.parent;for(;o&&o.parent;)Mo(o.parent.vnode)&&ps(t,n,r,o),o=o.parent}}function ps(e,n,r,t){const o=lr(n,e,t,!0);Lo(()=>{Kr(t[n],o)},r)}function lr(e,n,r=le,t=!1){if(r){const o=r[e]||(r[e]=[]),i=n.__weh||(n.__weh=(...s)=>{Ue();const a=Dn(r),c=De(n,r,e,s);return a(),Ke(),c});return t?o.unshift(i):o.push(i),i}}const Be=e=>(n,r=le)=>{(!Mn||e==="sp")&&lr(e,(...t)=>n(...t),r)},hs=Be("bm"),ms=Be("m"),gs=Be("bu"),bs=Be("u"),vs=Be("bum"),Lo=Be("um"),ys=Be("sp"),ws=Be("rtg"),ks=Be("rtc");function _s(e,n=le){lr("ec",e,n)}const Ss=Symbol.for("v-ndc");function Do(e,n,r,t){let o;const i=r,s=R(e);if(s||X(e)){const a=s&&tn(e);let c=!1,f=!1;a&&(c=!be(e),f=We(e),e=ar(e)),o=new Array(e.length);for(let d=0,p=e.length;d<p;d++)o[d]=n(c?f?fn(_e(e[d])):_e(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=n(a+1,a,void 0,i)}else if(G(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>n(a,c,void 0,i));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,f=a.length;c<f;c++){const d=a[c];o[c]=n(e[d],d,c,i)}}else o=[];return o}const Lr=e=>e?ti(e)?pr(e):Lr(e.parent):null,Pn=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>No(e),$forceUpdate:e=>e.f||(e.f=()=>{rt(e.update)}),$nextTick:e=>e.n||(e.n=Zi.bind(e.proxy)),$watch:e=>ss.bind(e)}),_r=(e,n)=>e!==K&&!e.__isScriptSetup&&F(e,n),xs={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:r,setupState:t,data:o,props:i,accessCache:s,type:a,appContext:c}=e;if(n[0]!=="$"){const h=s[n];if(h!==void 0)switch(h){case 1:return t[n];case 2:return o[n];case 4:return r[n];case 3:return i[n]}else{if(_r(t,n))return s[n]=1,t[n];if(o!==K&&F(o,n))return s[n]=2,o[n];if(F(i,n))return s[n]=3,i[n];if(r!==K&&F(r,n))return s[n]=4,r[n];Dr&&(s[n]=0)}}const f=Pn[n];let d,p;if(f)return n==="$attrs"&&te(e.attrs,"get",""),f(e);if((d=a.__cssModules)&&(d=d[n]))return d;if(r!==K&&F(r,n))return s[n]=4,r[n];if(p=c.config.globalProperties,F(p,n))return p[n]},set({_:e},n,r){const{data:t,setupState:o,ctx:i}=e;return _r(o,n)?(o[n]=r,!0):t!==K&&F(t,n)?(t[n]=r,!0):F(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:t,appContext:o,props:i,type:s}},a){let c;return!!(r[a]||e!==K&&a[0]!=="$"&&F(e,a)||_r(n,a)||F(i,a)||F(t,a)||F(Pn,a)||F(o.config.globalProperties,a)||(c=s.__cssModules)&&c[a])},defineProperty(e,n,r){return r.get!=null?e._.accessCache[n]=0:F(r,"value")&&this.set(e,n,r.value,null),Reflect.defineProperty(e,n,r)}};function xt(e){return R(e)?e.reduce((n,r)=>(n[r]=null,n),{}):e}let Dr=!0;function As(e){const n=No(e),r=e.proxy,t=e.ctx;Dr=!1,n.beforeCreate&&At(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:c,inject:f,created:d,beforeMount:p,mounted:h,beforeUpdate:g,updated:C,activated:A,deactivated:H,beforeDestroy:L,beforeUnmount:M,destroyed:U,unmounted:T,render:$,renderTracked:Q,renderTriggered:Z,errorCaptured:ee,serverPrefetch:ne,expose:pe,inheritAttrs:Ve,components:Hn,directives:Nn,filters:mr}=n;if(f&&Cs(f,t,null),s)for(const z in s){const W=s[z];O(W)&&(t[z]=W.bind(r))}if(o){const z=o.call(r,r);G(z)&&(e.data=Zr(z))}if(Dr=!0,i)for(const z in i){const W=i[z],Ye=O(W)?W.bind(r,r):O(W.get)?W.get.bind(r,r):Oe,Fn=!O(W)&&O(W.set)?W.set.bind(r):Oe,Qe=tr({get:Ye,set:Fn});Object.defineProperty(t,z,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Se=>Qe.value=Se})}if(a)for(const z in a)Ho(a[z],t,r,z);if(c){const z=O(c)?c.call(r):c;Reflect.ownKeys(z).forEach(W=>{ts(W,z[W])})}d&&At(d,e,"c");function se(z,W){R(W)?W.forEach(Ye=>z(Ye.bind(r))):W&&z(W.bind(r))}if(se(hs,p),se(ms,h),se(gs,g),se(bs,C),se(ds,A),se(fs,H),se(_s,ee),se(ks,Q),se(ws,Z),se(vs,M),se(Lo,T),se(ys,ne),R(pe))if(pe.length){const z=e.exposed||(e.exposed={});pe.forEach(W=>{Object.defineProperty(z,W,{get:()=>r[W],set:Ye=>r[W]=Ye,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===Oe&&(e.render=$),Ve!=null&&(e.inheritAttrs=Ve),Hn&&(e.components=Hn),Nn&&(e.directives=Nn),ne&&Ro(e)}function Cs(e,n,r=Oe){R(e)&&(e=Hr(e));for(const t in e){const o=e[t];let i;G(o)?"default"in o?i=Vn(o.from||t,o.default,!0):i=Vn(o.from||t):i=Vn(o),oe(i)?Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):n[t]=i}}function At(e,n,r){De(R(e)?e.map(t=>t.bind(n.proxy)):e.bind(n.proxy),n,r)}function Ho(e,n,r,t){let o=t.includes(".")?To(r,t):()=>r[t];if(X(e)){const i=n[e];O(i)&&$n(o,i)}else if(O(e))$n(o,e.bind(r));else if(G(e))if(R(e))e.forEach(i=>Ho(i,n,r,t));else{const i=O(e.handler)?e.handler.bind(r):n[e.handler];O(i)&&$n(o,i,e)}}function No(e){const n=e.type,{mixins:r,extends:t}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(n);let c;return a?c=a:!o.length&&!r&&!t?c=n:(c={},o.length&&o.forEach(f=>nr(c,f,s,!0)),nr(c,n,s)),G(n)&&i.set(n,c),c}function nr(e,n,r,t=!1){const{mixins:o,extends:i}=n;i&&nr(e,i,r,!0),o&&o.forEach(s=>nr(e,s,r,!0));for(const s in n)if(!(t&&s==="expose")){const a=Ps[s]||r&&r[s];e[s]=a?a(e[s],n[s]):n[s]}return e}const Ps={data:Ct,props:Pt,emits:Pt,methods:wn,computed:wn,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:wn,directives:wn,watch:Ts,provide:Ct,inject:Is};function Ct(e,n){return n?e?function(){return ie(O(e)?e.call(this,this):e,O(n)?n.call(this,this):n)}:n:e}function Is(e,n){return wn(Hr(e),Hr(n))}function Hr(e){if(R(e)){const n={};for(let r=0;r<e.length;r++)n[e[r]]=e[r];return n}return e}function ae(e,n){return e?[...new Set([].concat(e,n))]:n}function wn(e,n){return e?ie(Object.create(null),e,n):n}function Pt(e,n){return e?R(e)&&R(n)?[...new Set([...e,...n])]:ie(Object.create(null),xt(e),xt(n??{})):n}function Ts(e,n){if(!e)return n;if(!n)return e;const r=ie(Object.create(null),e);for(const t in n)r[t]=ae(e[t],n[t]);return r}function Fo(){return{app:null,config:{isNativeTag:Xt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let js=0;function Es(e,n){return function(t,o=null){O(t)||(t=ie({},t)),o!=null&&!G(o)&&(o=null);const i=Fo(),s=new WeakSet,a=[];let c=!1;const f=i.app={_uid:js++,_component:t,_props:o,_container:null,_context:i,_instance:null,version:la,get config(){return i.config},set config(d){},use(d,...p){return s.has(d)||(d&&O(d.install)?(s.add(d),d.install(f,...p)):O(d)&&(s.add(d),d(f,...p))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,p){return p?(i.components[d]=p,f):i.components[d]},directive(d,p){return p?(i.directives[d]=p,f):i.directives[d]},mount(d,p,h){if(!c){const g=f._ceVNode||ke(t,o);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),e(g,d,h),c=!0,f._container=d,d.__vue_app__=f,pr(g.component)}},onUnmount(d){a.push(d)},unmount(){c&&(De(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,p){return i.provides[d]=p,f},runWithContext(d){const p=dn;dn=f;try{return d()}finally{dn=p}}};return f}}let dn=null;const Rs=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${ye(n)}Modifiers`]||e[`${Xe(n)}Modifiers`];function Ms(e,n,...r){if(e.isUnmounted)return;const t=e.vnode.props||K;let o=r;const i=n.startsWith("update:"),s=i&&Rs(t,n.slice(7));s&&(s.trim&&(o=r.map(d=>X(d)?d.trim():d)),s.number&&(o=r.map(Br)));let a,c=t[a=br(n)]||t[a=br(ye(n))];!c&&i&&(c=t[a=br(Xe(n))]),c&&De(c,e,6,o);const f=t[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(f,e,6,o)}}const Os=new WeakMap;function qo(e,n,r=!1){const t=r?Os:n.emitsCache,o=t.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!O(e)){const c=f=>{const d=qo(f,n,!0);d&&(a=!0,ie(s,d))};!r&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(G(e)&&t.set(e,null),null):(R(i)?i.forEach(c=>s[c]=null):ie(s,i),G(e)&&t.set(e,s),s)}function ur(e,n){return!e||!or(n)?!1:(n=n.slice(2).replace(/Once$/,""),F(e,n[0].toLowerCase()+n.slice(1))||F(e,Xe(n))||F(e,n))}function It(e){const{type:n,vnode:r,proxy:t,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:c,render:f,renderCache:d,props:p,data:h,setupState:g,ctx:C,inheritAttrs:A}=e,H=Zn(e);let L,M;try{if(r.shapeFlag&4){const T=o||t,$=T;L=je(f.call($,T,d,p,g,h,C)),M=a}else{const T=n;L=je(T.length>1?T(p,{attrs:a,slots:s,emit:c}):T(p,null)),M=n.props?a:Ls(a)}}catch(T){In.length=0,cr(T,e,1),L=ke(Je)}let U=L;if(M&&A!==!1){const T=Object.keys(M),{shapeFlag:$}=U;T.length&&$&7&&(i&&T.some(Ur)&&(M=Ds(M,i)),U=pn(U,M,!1,!0))}return r.dirs&&(U=pn(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(r.dirs):r.dirs),r.transition&&tt(U,r.transition),L=U,Zn(H),L}const Ls=e=>{let n;for(const r in e)(r==="class"||r==="style"||or(r))&&((n||(n={}))[r]=e[r]);return n},Ds=(e,n)=>{const r={};for(const t in e)(!Ur(t)||!(t.slice(9)in n))&&(r[t]=e[t]);return r};function Hs(e,n,r){const{props:t,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=n,f=i.emitsOptions;if(n.dirs||n.transition)return!0;if(r&&c>=0){if(c&1024)return!0;if(c&16)return t?Tt(t,s,f):!!s;if(c&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const h=d[p];if(Go(s,t,h)&&!ur(f,h))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:t===s?!1:t?s?Tt(t,s,f):!0:!!s;return!1}function Tt(e,n,r){const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!0;for(let o=0;o<t.length;o++){const i=t[o];if(Go(n,e,i)&&!ur(r,i))return!0}return!1}function Go(e,n,r){const t=e[r],o=n[r];return r==="style"&&G(t)&&G(o)?!$r(t,o):t!==o}function Ns({vnode:e,parent:n},r){for(;n;){const t=n.subTree;if(t.suspense&&t.suspense.activeBranch===e&&(t.el=e.el),t===e)(e=n.vnode).el=r,n=n.parent;else break}}const Uo={},Ko=()=>Object.create(Uo),Wo=e=>Object.getPrototypeOf(e)===Uo;function Fs(e,n,r,t=!1){const o={},i=Ko();e.propsDefaults=Object.create(null),Bo(e,n,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);r?e.props=t?o:Ui(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function qs(e,n,r,t){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=N(o),[c]=e.propsOptions;let f=!1;if((t||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let h=d[p];if(ur(e.emitsOptions,h))continue;const g=n[h];if(c)if(F(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const C=ye(h);o[C]=Nr(c,a,C,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{Bo(e,n,o,i)&&(f=!0);let d;for(const p in a)(!n||!F(n,p)&&((d=Xe(p))===p||!F(n,d)))&&(c?r&&(r[p]!==void 0||r[d]!==void 0)&&(o[p]=Nr(c,a,p,void 0,e,!0)):delete o[p]);if(i!==a)for(const p in i)(!n||!F(n,p))&&(delete i[p],f=!0)}f&&qe(e.attrs,"set","")}function Bo(e,n,r,t){const[o,i]=e.propsOptions;let s=!1,a;if(n)for(let c in n){if(kn(c))continue;const f=n[c];let d;o&&F(o,d=ye(c))?!i||!i.includes(d)?r[d]=f:(a||(a={}))[d]=f:ur(e.emitsOptions,c)||(!(c in t)||f!==t[c])&&(t[c]=f,s=!0)}if(i){const c=N(r),f=a||K;for(let d=0;d<i.length;d++){const p=i[d];r[p]=Nr(o,c,p,f[p],e,!F(f,p))}}return s}function Nr(e,n,r,t,o,i){const s=e[r];if(s!=null){const a=F(s,"default");if(a&&t===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&O(c)){const{propsDefaults:f}=o;if(r in f)t=f[r];else{const d=Dn(o);t=f[r]=c.call(null,n),d()}}else t=c;o.ce&&o.ce._setProp(r,t)}s[0]&&(i&&!a?t=!1:s[1]&&(t===""||t===Xe(r))&&(t=!0))}return t}const Gs=new WeakMap;function Vo(e,n,r=!1){const t=r?Gs:n.propsCache,o=t.get(e);if(o)return o;const i=e.props,s={},a=[];let c=!1;if(!O(e)){const d=p=>{c=!0;const[h,g]=Vo(p,n,!0);ie(s,h),g&&a.push(...g)};!r&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return G(e)&&t.set(e,cn),cn;if(R(i))for(let d=0;d<i.length;d++){const p=ye(i[d]);jt(p)&&(s[p]=K)}else if(i)for(const d in i){const p=ye(d);if(jt(p)){const h=i[d],g=s[p]=R(h)||O(h)?{type:h}:ie({},h),C=g.type;let A=!1,H=!0;if(R(C))for(let L=0;L<C.length;++L){const M=C[L],U=O(M)&&M.name;if(U==="Boolean"){A=!0;break}else U==="String"&&(H=!1)}else A=O(C)&&C.name==="Boolean";g[0]=A,g[1]=H,(A||F(g,"default"))&&a.push(p)}}const f=[s,a];return G(e)&&t.set(e,f),f}function jt(e){return e[0]!=="$"&&!kn(e)}const ot=e=>e==="_"||e==="_ctx"||e==="$stable",it=e=>R(e)?e.map(je):[je(e)],Us=(e,n,r)=>{if(n._n)return n;const t=rs((...o)=>it(n(...o)),r);return t._c=!1,t},$o=(e,n,r)=>{const t=e._ctx;for(const o in e){if(ot(o))continue;const i=e[o];if(O(i))n[o]=Us(o,i,t);else if(i!=null){const s=it(i);n[o]=()=>s}}},zo=(e,n)=>{const r=it(n);e.slots.default=()=>r},Jo=(e,n,r)=>{for(const t in n)(r||!ot(t))&&(e[t]=n[t])},Ks=(e,n,r)=>{const t=e.slots=Ko();if(e.vnode.shapeFlag&32){const o=n._;o?(Jo(t,n,r),r&&ro(t,"_",o,!0)):$o(n,t)}else n&&zo(e,n)},Ws=(e,n,r)=>{const{vnode:t,slots:o}=e;let i=!0,s=K;if(t.shapeFlag&32){const a=n._;a?r&&a===1?i=!1:Jo(o,n,r):(i=!n.$stable,$o(n,o)),s=n}else n&&(zo(e,n),s={default:1});if(i)for(const a in o)!ot(a)&&s[a]==null&&delete o[a]},re=Js;function Bs(e){return Vs(e)}function Vs(e,n){const r=sr();r.__VUE__=!0;const{insert:t,remove:o,patchProp:i,createElement:s,createText:a,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:h,setScopeId:g=Oe,insertStaticContent:C}=e,A=(l,u,m,w=null,b=null,v=null,S=void 0,_=null,k=!!u.dynamicChildren)=>{if(l===u)return;l&&!yn(l,u)&&(w=qn(l),Se(l,b,v,!0),l=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:y,ref:I,shapeFlag:x}=u;switch(y){case dr:H(l,u,m,w);break;case Je:L(l,u,m,w);break;case xr:l==null&&M(u,m,w,S);break;case ve:Hn(l,u,m,w,b,v,S,_,k);break;default:x&1?$(l,u,m,w,b,v,S,_,k):x&6?Nn(l,u,m,w,b,v,S,_,k):(x&64||x&128)&&y.process(l,u,m,w,b,v,S,_,k,gn)}I!=null&&b?An(I,l&&l.ref,v,u||l,!u):I==null&&l&&l.ref!=null&&An(l.ref,null,v,l,!0)},H=(l,u,m,w)=>{if(l==null)t(u.el=a(u.children),m,w);else{const b=u.el=l.el;u.children!==l.children&&f(b,u.children)}},L=(l,u,m,w)=>{l==null?t(u.el=c(u.children||""),m,w):u.el=l.el},M=(l,u,m,w)=>{[l.el,l.anchor]=C(l.children,u,m,w,l.el,l.anchor)},U=({el:l,anchor:u},m,w)=>{let b;for(;l&&l!==u;)b=h(l),t(l,m,w),l=b;t(u,m,w)},T=({el:l,anchor:u})=>{let m;for(;l&&l!==u;)m=h(l),o(l),l=m;o(u)},$=(l,u,m,w,b,v,S,_,k)=>{if(u.type==="svg"?S="svg":u.type==="math"&&(S="mathml"),l==null)Q(u,m,w,b,v,S,_,k);else{const y=l.el&&l.el._isVueCE?l.el:null;try{y&&y._beginPatch(),ne(l,u,b,v,S,_,k)}finally{y&&y._endPatch()}}},Q=(l,u,m,w,b,v,S,_)=>{let k,y;const{props:I,shapeFlag:x,transition:P,dirs:E}=l;if(k=l.el=s(l.type,v,I&&I.is,I),x&8?d(k,l.children):x&16&&ee(l.children,k,null,w,b,Sr(l,v),S,_),E&&Ze(l,null,w,"created"),Z(k,l,l.scopeId,S,w),I){for(const B in I)B!=="value"&&!kn(B)&&i(k,B,null,I[B],v,w);"value"in I&&i(k,"value",null,I.value,v),(y=I.onVnodeBeforeMount)&&Pe(y,w,l)}E&&Ze(l,null,w,"beforeMount");const D=$s(b,P);D&&P.beforeEnter(k),t(k,u,m),((y=I&&I.onVnodeMounted)||D||E)&&re(()=>{y&&Pe(y,w,l),D&&P.enter(k),E&&Ze(l,null,w,"mounted")},b)},Z=(l,u,m,w,b)=>{if(m&&g(l,m),w)for(let v=0;v<w.length;v++)g(l,w[v]);if(b){let v=b.subTree;if(u===v||Qo(v.type)&&(v.ssContent===u||v.ssFallback===u)){const S=b.vnode;Z(l,S,S.scopeId,S.slotScopeIds,b.parent)}}},ee=(l,u,m,w,b,v,S,_,k=0)=>{for(let y=k;y<l.length;y++){const I=l[y]=_?Fe(l[y]):je(l[y]);A(null,I,u,m,w,b,v,S,_)}},ne=(l,u,m,w,b,v,S)=>{const _=u.el=l.el;let{patchFlag:k,dynamicChildren:y,dirs:I}=u;k|=l.patchFlag&16;const x=l.props||K,P=u.props||K;let E;if(m&&en(m,!1),(E=P.onVnodeBeforeUpdate)&&Pe(E,m,u,l),I&&Ze(u,l,m,"beforeUpdate"),m&&en(m,!0),(x.innerHTML&&P.innerHTML==null||x.textContent&&P.textContent==null)&&d(_,""),y?pe(l.dynamicChildren,y,_,m,w,Sr(u,b),v):S||W(l,u,_,null,m,w,Sr(u,b),v,!1),k>0){if(k&16)Ve(_,x,P,m,b);else if(k&2&&x.class!==P.class&&i(_,"class",null,P.class,b),k&4&&i(_,"style",x.style,P.style,b),k&8){const D=u.dynamicProps;for(let B=0;B<D.length;B++){const q=D[B],ue=x[q],de=P[q];(de!==ue||q==="value")&&i(_,q,ue,de,b,m)}}k&1&&l.children!==u.children&&d(_,u.children)}else!S&&y==null&&Ve(_,x,P,m,b);((E=P.onVnodeUpdated)||I)&&re(()=>{E&&Pe(E,m,u,l),I&&Ze(u,l,m,"updated")},w)},pe=(l,u,m,w,b,v,S)=>{for(let _=0;_<u.length;_++){const k=l[_],y=u[_],I=k.el&&(k.type===ve||!yn(k,y)||k.shapeFlag&198)?p(k.el):m;A(k,y,I,null,w,b,v,S,!0)}},Ve=(l,u,m,w,b)=>{if(u!==m){if(u!==K)for(const v in u)!kn(v)&&!(v in m)&&i(l,v,u[v],null,b,w);for(const v in m){if(kn(v))continue;const S=m[v],_=u[v];S!==_&&v!=="value"&&i(l,v,_,S,b,w)}"value"in m&&i(l,"value",u.value,m.value,b)}},Hn=(l,u,m,w,b,v,S,_,k)=>{const y=u.el=l?l.el:a(""),I=u.anchor=l?l.anchor:a("");let{patchFlag:x,dynamicChildren:P,slotScopeIds:E}=u;E&&(_=_?_.concat(E):E),l==null?(t(y,m,w),t(I,m,w),ee(u.children||[],m,I,b,v,S,_,k)):x>0&&x&64&&P&&l.dynamicChildren&&l.dynamicChildren.length===P.length?(pe(l.dynamicChildren,P,m,b,v,S,_),(u.key!=null||b&&u===b.subTree)&&st(l,u,!0)):W(l,u,m,I,b,v,S,_,k)},Nn=(l,u,m,w,b,v,S,_,k)=>{u.slotScopeIds=_,l==null?u.shapeFlag&512?b.ctx.activate(u,m,w,S,k):mr(u,m,w,b,v,S,k):ct(l,u,k)},mr=(l,u,m,w,b,v,S)=>{const _=l.component=ra(l,w,b);if(Mo(l)&&(_.ctx.renderer=gn),oa(_,!1,S),_.asyncDep){if(b&&b.registerDep(_,se,S),!l.el){const k=_.subTree=ke(Je);L(null,k,u,m),l.placeholder=k.el}}else se(_,l,u,m,b,v,S)},ct=(l,u,m)=>{const w=u.component=l.component;if(Hs(l,u,m))if(w.asyncDep&&!w.asyncResolved){z(w,u,m);return}else w.next=u,w.update();else u.el=l.el,w.vnode=u},se=(l,u,m,w,b,v,S)=>{const _=()=>{if(l.isMounted){let{next:x,bu:P,u:E,parent:D,vnode:B}=l;{const Ae=Xo(l);if(Ae){x&&(x.el=B.el,z(l,x,S)),Ae.asyncDep.then(()=>{re(()=>{l.isUnmounted||y()},b)});return}}let q=x,ue;en(l,!1),x?(x.el=B.el,z(l,x,S)):x=B,P&&Bn(P),(ue=x.props&&x.props.onVnodeBeforeUpdate)&&Pe(ue,D,x,B),en(l,!0);const de=It(l),xe=l.subTree;l.subTree=de,A(xe,de,p(xe.el),qn(xe),l,b,v),x.el=de.el,q===null&&Ns(l,de.el),E&&re(E,b),(ue=x.props&&x.props.onVnodeUpdated)&&re(()=>Pe(ue,D,x,B),b)}else{let x;const{el:P,props:E}=u,{bm:D,m:B,parent:q,root:ue,type:de}=l,xe=Cn(u);en(l,!1),D&&Bn(D),!xe&&(x=E&&E.onVnodeBeforeMount)&&Pe(x,q,u),en(l,!0);{ue.ce&&ue.ce._hasShadowRoot()&&ue.ce._injectChildStyle(de,l.parent?l.parent.type:void 0);const Ae=l.subTree=It(l);A(null,Ae,m,w,l,b,v),u.el=Ae.el}if(B&&re(B,b),!xe&&(x=E&&E.onVnodeMounted)){const Ae=u;re(()=>Pe(x,q,Ae),b)}(u.shapeFlag&256||q&&Cn(q.vnode)&&q.vnode.shapeFlag&256)&&l.a&&re(l.a,b),l.isMounted=!0,u=m=w=null}};l.scope.on();const k=l.effect=new so(_);l.scope.off();const y=l.update=k.run.bind(k),I=l.job=k.runIfDirty.bind(k);I.i=l,I.id=l.uid,k.scheduler=()=>rt(I),en(l,!0),y()},z=(l,u,m)=>{u.component=l;const w=l.vnode.props;l.vnode=u,l.next=null,qs(l,u.props,w,m),Ws(l,u.children,m),Ue(),vt(l),Ke()},W=(l,u,m,w,b,v,S,_,k=!1)=>{const y=l&&l.children,I=l?l.shapeFlag:0,x=u.children,{patchFlag:P,shapeFlag:E}=u;if(P>0){if(P&128){Fn(y,x,m,w,b,v,S,_,k);return}else if(P&256){Ye(y,x,m,w,b,v,S,_,k);return}}E&8?(I&16&&mn(y,b,v),x!==y&&d(m,x)):I&16?E&16?Fn(y,x,m,w,b,v,S,_,k):mn(y,b,v,!0):(I&8&&d(m,""),E&16&&ee(x,m,w,b,v,S,_,k))},Ye=(l,u,m,w,b,v,S,_,k)=>{l=l||cn,u=u||cn;const y=l.length,I=u.length,x=Math.min(y,I);let P;for(P=0;P<x;P++){const E=u[P]=k?Fe(u[P]):je(u[P]);A(l[P],E,m,null,b,v,S,_,k)}y>I?mn(l,b,v,!0,!1,x):ee(u,m,w,b,v,S,_,k,x)},Fn=(l,u,m,w,b,v,S,_,k)=>{let y=0;const I=u.length;let x=l.length-1,P=I-1;for(;y<=x&&y<=P;){const E=l[y],D=u[y]=k?Fe(u[y]):je(u[y]);if(yn(E,D))A(E,D,m,null,b,v,S,_,k);else break;y++}for(;y<=x&&y<=P;){const E=l[x],D=u[P]=k?Fe(u[P]):je(u[P]);if(yn(E,D))A(E,D,m,null,b,v,S,_,k);else break;x--,P--}if(y>x){if(y<=P){const E=P+1,D=E<I?u[E].el:w;for(;y<=P;)A(null,u[y]=k?Fe(u[y]):je(u[y]),m,D,b,v,S,_,k),y++}}else if(y>P)for(;y<=x;)Se(l[y],b,v,!0),y++;else{const E=y,D=y,B=new Map;for(y=D;y<=P;y++){const he=u[y]=k?Fe(u[y]):je(u[y]);he.key!=null&&B.set(he.key,y)}let q,ue=0;const de=P-D+1;let xe=!1,Ae=0;const bn=new Array(de);for(y=0;y<de;y++)bn[y]=0;for(y=E;y<=x;y++){const he=l[y];if(ue>=de){Se(he,b,v,!0);continue}let Ce;if(he.key!=null)Ce=B.get(he.key);else for(q=D;q<=P;q++)if(bn[q-D]===0&&yn(he,u[q])){Ce=q;break}Ce===void 0?Se(he,b,v,!0):(bn[Ce-D]=y+1,Ce>=Ae?Ae=Ce:xe=!0,A(he,u[Ce],m,null,b,v,S,_,k),ue++)}const dt=xe?zs(bn):cn;for(q=dt.length-1,y=de-1;y>=0;y--){const he=D+y,Ce=u[he],ft=u[he+1],pt=he+1<I?ft.el||Yo(ft):w;bn[y]===0?A(null,Ce,m,pt,b,v,S,_,k):xe&&(q<0||y!==dt[q]?Qe(Ce,m,pt,2):q--)}}},Qe=(l,u,m,w,b=null)=>{const{el:v,type:S,transition:_,children:k,shapeFlag:y}=l;if(y&6){Qe(l.component.subTree,u,m,w);return}if(y&128){l.suspense.move(u,m,w);return}if(y&64){S.move(l,u,m,gn);return}if(S===ve){t(v,u,m);for(let x=0;x<k.length;x++)Qe(k[x],u,m,w);t(l.anchor,u,m);return}if(S===xr){U(l,u,m);return}if(w!==2&&y&1&&_)if(w===0)_.beforeEnter(v),t(v,u,m),re(()=>_.enter(v),b);else{const{leave:x,delayLeave:P,afterLeave:E}=_,D=()=>{l.ctx.isUnmounted?o(v):t(v,u,m)},B=()=>{v._isLeaving&&v[us](!0),x(v,()=>{D(),E&&E()})};P?P(v,D,B):B()}else t(v,u,m)},Se=(l,u,m,w=!1,b=!1)=>{const{type:v,props:S,ref:_,children:k,dynamicChildren:y,shapeFlag:I,patchFlag:x,dirs:P,cacheIndex:E}=l;if(x===-2&&(b=!1),_!=null&&(Ue(),An(_,null,m,l,!0),Ke()),E!=null&&(u.renderCache[E]=void 0),I&256){u.ctx.deactivate(l);return}const D=I&1&&P,B=!Cn(l);let q;if(B&&(q=S&&S.onVnodeBeforeUnmount)&&Pe(q,u,l),I&6)ui(l.component,m,w);else{if(I&128){l.suspense.unmount(m,w);return}D&&Ze(l,null,u,"beforeUnmount"),I&64?l.type.remove(l,u,m,gn,w):y&&!y.hasOnce&&(v!==ve||x>0&&x&64)?mn(y,u,m,!1,!0):(v===ve&&x&384||!b&&I&16)&&mn(k,u,m),w&&lt(l)}(B&&(q=S&&S.onVnodeUnmounted)||D)&&re(()=>{q&&Pe(q,u,l),D&&Ze(l,null,u,"unmounted")},m)},lt=l=>{const{type:u,el:m,anchor:w,transition:b}=l;if(u===ve){li(m,w);return}if(u===xr){T(l);return}const v=()=>{o(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:_}=b,k=()=>S(m,v);_?_(l.el,v,k):k()}else v()},li=(l,u)=>{let m;for(;l!==u;)m=h(l),o(l),l=m;o(u)},ui=(l,u,m)=>{const{bum:w,scope:b,job:v,subTree:S,um:_,m:k,a:y}=l;Et(k),Et(y),w&&Bn(w),b.stop(),v&&(v.flags|=8,Se(S,l,u,m)),_&&re(_,u),re(()=>{l.isUnmounted=!0},u)},mn=(l,u,m,w=!1,b=!1,v=0)=>{for(let S=v;S<l.length;S++)Se(l[S],u,m,w,b)},qn=l=>{if(l.shapeFlag&6)return qn(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=h(l.anchor||l.el),m=u&&u[jo];return m?h(m):u};let gr=!1;const ut=(l,u,m)=>{let w;l==null?u._vnode&&(Se(u._vnode,null,null,!0),w=u._vnode.component):A(u._vnode||null,l,u,null,null,null,m),u._vnode=l,gr||(gr=!0,vt(w),xo(),gr=!1)},gn={p:A,um:Se,m:Qe,r:lt,mt:mr,mc:ee,pc:W,pbc:pe,n:qn,o:e};return{render:ut,hydrate:void 0,createApp:Es(ut)}}function Sr({type:e,props:n},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:r}function en({effect:e,job:n},r){r?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function $s(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function st(e,n,r=!1){const t=e.children,o=n.children;if(R(t)&&R(o))for(let i=0;i<t.length;i++){const s=t[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Fe(o[i]),a.el=s.el),!r&&a.patchFlag!==-2&&st(s,a)),a.type===dr&&(a.patchFlag===-1&&(a=o[i]=Fe(a)),a.el=s.el),a.type===Je&&!a.el&&(a.el=s.el)}}function zs(e){const n=e.slice(),r=[0];let t,o,i,s,a;const c=e.length;for(t=0;t<c;t++){const f=e[t];if(f!==0){if(o=r[r.length-1],e[o]<f){n[t]=o,r.push(t);continue}for(i=0,s=r.length-1;i<s;)a=i+s>>1,e[r[a]]<f?i=a+1:s=a;f<e[r[i]]&&(i>0&&(n[t]=r[i-1]),r[i]=t)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=n[s];return r}function Xo(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Xo(n)}function Et(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Yo(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Yo(n.subTree):null}const Qo=e=>e.__isSuspense;function Js(e,n){n&&n.pendingBranch?R(e)?n.effects.push(...e):n.effects.push(e):ns(e)}const ve=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),In=[];let me=null;function J(e=!1){In.push(me=e?null:[])}function Xs(){In.pop(),me=In[In.length-1]||null}let Rn=1;function Rt(e,n=!1){Rn+=e,e<0&&me&&n&&(me.hasOnce=!0)}function Zo(e){return e.dynamicChildren=Rn>0?me||cn:null,Xs(),Rn>0&&me&&me.push(e),e}function Y(e,n,r,t,o,i){return Zo(j(e,n,r,t,o,i,!0))}function fr(e,n,r,t,o){return Zo(ke(e,n,r,t,o,!0))}function ei(e){return e?e.__v_isVNode===!0:!1}function yn(e,n){return e.type===n.type&&e.key===n.key}const ni=({key:e})=>e??null,Jn=({ref:e,ref_key:n,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||oe(e)||O(e)?{i:ge,r:e,k:n,f:!!r}:e:null);function j(e,n=null,r=null,t=0,o=null,i=e===ve?0:1,s=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ni(n),ref:n&&Jn(n),scopeId:Co,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:t,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ge};return a?(at(c,r),i&128&&e.normalize(c)):r&&(c.shapeFlag|=X(r)?8:16),Rn>0&&!s&&me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&me.push(c),c}const ke=Ys;function Ys(e,n=null,r=null,t=0,o=null,i=!1){if((!e||e===Ss)&&(e=Je),ei(e)){const a=pn(e,n,!0);return r&&at(a,r),Rn>0&&!i&&me&&(a.shapeFlag&6?me[me.indexOf(e)]=a:me.push(a)),a.patchFlag=-2,a}if(ca(e)&&(e=e.__vccOpts),n){n=Qs(n);let{class:a,style:c}=n;a&&!X(a)&&(n.class=hn(a)),G(c)&&(nt(c)&&!R(c)&&(c=ie({},c)),n.style=Vr(c))}const s=X(e)?1:Qo(e)?128:as(e)?64:G(e)?4:O(e)?2:0;return j(e,n,r,t,o,s,i,!0)}function Qs(e){return e?nt(e)||Wo(e)?ie({},e):e:null}function pn(e,n,r=!1,t=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:c}=e,f=n?Zs(o||{},n):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ni(f),ref:n&&n.ref?r&&i?R(i)?i.concat(Jn(n)):[i,Jn(n)]:Jn(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ve?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pn(e.ssContent),ssFallback:e.ssFallback&&pn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&t&&tt(d,c.clone(d)),d}function ri(e=" ",n=0){return ke(dr,null,e,n)}function ze(e="",n=!1){return n?(J(),fr(Je,null,e)):ke(Je,null,e)}function je(e){return e==null||typeof e=="boolean"?ke(Je):R(e)?ke(ve,null,e.slice()):ei(e)?Fe(e):ke(dr,null,String(e))}function Fe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pn(e)}function at(e,n){let r=0;const{shapeFlag:t}=e;if(n==null)n=null;else if(R(n))r=16;else if(typeof n=="object")if(t&65){const o=n.default;o&&(o._c&&(o._d=!1),at(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=n._;!o&&!Wo(n)?n._ctx=ge:o===3&&ge&&(ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else O(n)?(n={default:n,_ctx:ge},r=32):(n=String(n),t&64?(r=16,n=[ri(n)]):r=8);e.children=n,e.shapeFlag|=r}function Zs(...e){const n={};for(let r=0;r<e.length;r++){const t=e[r];for(const o in t)if(o==="class")n.class!==t.class&&(n.class=hn([n.class,t.class]));else if(o==="style")n.style=Vr([n.style,t.style]);else if(or(o)){const i=n[o],s=t[o];s&&i!==s&&!(R(i)&&i.includes(s))&&(n[o]=i?[].concat(i,s):s)}else o!==""&&(n[o]=t[o])}return n}function Pe(e,n,r,t=null){De(e,n,7,[r,t])}const ea=Fo();let na=0;function ra(e,n,r){const t=e.type,o=(n?n.appContext:e.appContext)||ea,i={uid:na++,vnode:e,type:t,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vo(t,o),emitsOptions:qo(t,o),emit:null,emitted:null,propsDefaults:K,inheritAttrs:t.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Ms.bind(null,i),e.ce&&e.ce(i),i}let le=null;const ta=()=>le||ge;let rr,Fr;{const e=sr(),n=(r,t)=>{let o;return(o=e[r])||(o=e[r]=[]),o.push(t),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};rr=n("__VUE_INSTANCE_SETTERS__",r=>le=r),Fr=n("__VUE_SSR_SETTERS__",r=>Mn=r)}const Dn=e=>{const n=le;return rr(e),e.scope.on(),()=>{e.scope.off(),rr(n)}},Mt=()=>{le&&le.scope.off(),rr(null)};function ti(e){return e.vnode.shapeFlag&4}let Mn=!1;function oa(e,n=!1,r=!1){n&&Fr(n);const{props:t,children:o}=e.vnode,i=ti(e);Fs(e,t,i,n),Ks(e,o,r||n);const s=i?ia(e,n):void 0;return n&&Fr(!1),s}function ia(e,n){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xs);const{setup:t}=r;if(t){Ue();const o=e.setupContext=t.length>1?aa(e):null,i=Dn(e),s=Ln(t,e,0,[e.props,o]),a=Qt(s);if(Ke(),i(),(a||e.sp)&&!Cn(e)&&Ro(e),a){if(s.then(Mt,Mt),n)return s.then(c=>{Ot(e,c)}).catch(c=>{cr(c,e,0)});e.asyncDep=s}else Ot(e,s)}else oi(e)}function Ot(e,n,r){O(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:G(n)&&(e.setupState=ko(n)),oi(e)}function oi(e,n,r){const t=e.type;e.render||(e.render=t.render||Oe);{const o=Dn(e);Ue();try{As(e)}finally{Ke(),o()}}}const sa={get(e,n){return te(e,"get",""),e[n]}};function aa(e){const n=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,sa),slots:e.slots,emit:e.emit,expose:n}}function pr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ko(Ki(e.exposed)),{get(n,r){if(r in n)return n[r];if(r in Pn)return Pn[r](e)},has(n,r){return r in n||r in Pn}})):e.proxy}function ca(e){return O(e)&&"__vccOpts"in e}const tr=(e,n)=>Ji(e,n,Mn),la="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qr;const Lt=typeof window<"u"&&window.trustedTypes;if(Lt)try{qr=Lt.createPolicy("vue",{createHTML:e=>e})}catch{}const ii=qr?e=>qr.createHTML(e):e=>e,ua="http://www.w3.org/2000/svg",da="http://www.w3.org/1998/Math/MathML",Ne=typeof document<"u"?document:null,Dt=Ne&&Ne.createElement("template"),fa={insert:(e,n,r)=>{n.insertBefore(e,r||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,r,t)=>{const o=n==="svg"?Ne.createElementNS(ua,e):n==="mathml"?Ne.createElementNS(da,e):r?Ne.createElement(e,{is:r}):Ne.createElement(e);return e==="select"&&t&&t.multiple!=null&&o.setAttribute("multiple",t.multiple),o},createText:e=>Ne.createTextNode(e),createComment:e=>Ne.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ne.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,r,t,o,i){const s=r?r.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{Dt.innerHTML=ii(t==="svg"?`<svg>${e}</svg>`:t==="mathml"?`<math>${e}</math>`:e);const a=Dt.content;if(t==="svg"||t==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}n.insertBefore(a,r)}return[s?s.nextSibling:n.firstChild,r?r.previousSibling:n.lastChild]}},pa=Symbol("_vtc");function ha(e,n,r){const t=e[pa];t&&(n=(n?[n,...t]:[...t]).join(" ")),n==null?e.removeAttribute("class"):r?e.setAttribute("class",n):e.className=n}const Ht=Symbol("_vod"),ma=Symbol("_vsh"),ga=Symbol(""),ba=/(?:^|;)\s*display\s*:/;function va(e,n,r){const t=e.style,o=X(r);let i=!1;if(r&&!o){if(n)if(X(n))for(const s of n.split(";")){const a=s.slice(0,s.indexOf(":")).trim();r[a]==null&&Xn(t,a,"")}else for(const s in n)r[s]==null&&Xn(t,s,"");for(const s in r)s==="display"&&(i=!0),Xn(t,s,r[s])}else if(o){if(n!==r){const s=t[ga];s&&(r+=";"+s),t.cssText=r,i=ba.test(r)}}else n&&e.removeAttribute("style");Ht in e&&(e[Ht]=i?t.display:"",e[ma]&&(t.display="none"))}const Nt=/\s*!important$/;function Xn(e,n,r){if(R(r))r.forEach(t=>Xn(e,n,t));else if(r==null&&(r=""),n.startsWith("--"))e.setProperty(n,r);else{const t=ya(e,n);Nt.test(r)?e.setProperty(Xe(t),r.replace(Nt,""),"important"):e[t]=r}}const Ft=["Webkit","Moz","ms"],Ar={};function ya(e,n){const r=Ar[n];if(r)return r;let t=ye(n);if(t!=="filter"&&t in e)return Ar[n]=t;t=no(t);for(let o=0;o<Ft.length;o++){const i=Ft[o]+t;if(i in e)return Ar[n]=i}return n}const qt="http://www.w3.org/1999/xlink";function Gt(e,n,r,t,o,i=wi(n)){t&&n.startsWith("xlink:")?r==null?e.removeAttributeNS(qt,n.slice(6,n.length)):e.setAttributeNS(qt,n,r):r==null||i&&!to(r)?e.removeAttribute(n):e.setAttribute(n,i?"":Le(r)?String(r):r)}function Ut(e,n,r,t,o){if(n==="innerHTML"||n==="textContent"){r!=null&&(e[n]=n==="innerHTML"?ii(r):r);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=r==null?e.type==="checkbox"?"on":"":String(r);(a!==c||!("_value"in e))&&(e.value=c),r==null&&e.removeAttribute(n),e._value=r;return}let s=!1;if(r===""||r==null){const a=typeof e[n];a==="boolean"?r=to(r):r==null&&a==="string"?(r="",s=!0):a==="number"&&(r=0,s=!0)}try{e[n]=r}catch{}s&&e.removeAttribute(o||n)}function an(e,n,r,t){e.addEventListener(n,r,t)}function wa(e,n,r,t){e.removeEventListener(n,r,t)}const Kt=Symbol("_vei");function ka(e,n,r,t,o=null){const i=e[Kt]||(e[Kt]={}),s=i[n];if(t&&s)s.value=t;else{const[a,c]=_a(n);if(t){const f=i[n]=Aa(t,o);an(e,a,f,c)}else s&&(wa(e,a,s,c),i[n]=void 0)}}const Wt=/(?:Once|Passive|Capture)$/;function _a(e){let n;if(Wt.test(e)){n={};let t;for(;t=e.match(Wt);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xe(e.slice(2)),n]}let Cr=0;const Sa=Promise.resolve(),xa=()=>Cr||(Sa.then(()=>Cr=0),Cr=Date.now());function Aa(e,n){const r=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=r.attached)return;De(Ca(t,r.value),n,5,[t])};return r.value=e,r.attached=xa(),r}function Ca(e,n){if(R(n)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},n.map(t=>o=>!o._stopped&&t&&t(o))}else return n}const Bt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pa=(e,n,r,t,o,i)=>{const s=o==="svg";n==="class"?ha(e,t,s):n==="style"?va(e,r,t):or(n)?Ur(n)||ka(e,n,r,t,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ia(e,n,t,s))?(Ut(e,n,t),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Gt(e,n,t,s,i,n!=="value")):e._isVueCE&&(Ta(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!X(t)))?Ut(e,ye(n),t,i,n):(n==="true-value"?e._trueValue=t:n==="false-value"&&(e._falseValue=t),Gt(e,n,t,s))};function Ia(e,n,r,t){if(t)return!!(n==="innerHTML"||n==="textContent"||n in e&&Bt(n)&&O(r));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Bt(n)&&X(r)?!1:n in e}function Ta(e,n){const r=e._def.props;if(!r)return!1;const t=ye(n);return Array.isArray(r)?r.some(o=>ye(o)===t):Object.keys(r).some(o=>ye(o)===t)}const Vt=e=>{const n=e.props["onUpdate:modelValue"]||!1;return R(n)?r=>Bn(n,r):n};function ja(e){e.target.composing=!0}function $t(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Pr=Symbol("_assign");function zt(e,n,r){return n&&(e=e.trim()),r&&(e=Br(e)),e}const si={created(e,{modifiers:{lazy:n,trim:r,number:t}},o){e[Pr]=Vt(o);const i=t||o.props&&o.props.type==="number";an(e,n?"change":"input",s=>{s.target.composing||e[Pr](zt(e.value,r,i))}),(r||i)&&an(e,"change",()=>{e.value=zt(e.value,r,i)}),n||(an(e,"compositionstart",ja),an(e,"compositionend",$t),an(e,"change",$t))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:r,modifiers:{lazy:t,trim:o,number:i}},s){if(e[Pr]=Vt(s),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Br(e.value):e.value,c=n??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(t&&n===r||o&&e.value.trim()===c)||(e.value=c))}},Ea=["ctrl","shift","alt","meta"],Ra={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Ea.some(r=>e[`${r}Key`]&&!n.includes(r))},ai=(e,n)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),t=n.join(".");return r[t]||(r[t]=(o,...i)=>{for(let s=0;s<n.length;s++){const a=Ra[n[s]];if(a&&a(o,n))return}return e(o,...i)})},Ma={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oa=(e,n)=>{const r=e._withKeys||(e._withKeys={}),t=n.join(".");return r[t]||(r[t]=o=>{if(!("key"in o))return;const i=Xe(o.key);if(n.some(s=>s===i||Ma[s]===i))return e(o)})},La=ie({patchProp:Pa},fa);let Jt;function Da(){return Jt||(Jt=Bs(La))}const Ha=(...e)=>{const n=Da().createApp(...e),{mount:r}=n;return n.mount=t=>{const o=Fa(t);if(!o)return;const i=n._component;!O(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=r(o,!1,Na(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},n};function Na(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Fa(e){return X(e)?document.querySelector(e):e}const qa="# 00 通用基础（200）\r\n\r\n> 程序员日常阅读文档、报错信息时最常见的通用词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ access | 访问；权限 | `access denied` 权限不足 |\r\n| ⭐ account | 账户；账号 | `user account` 用户账户 |\r\n| ⭐ action | 操作；动作 | `GitHub Actions` CI/CD 流水线 |\r\n| ⭐ active | 活跃的；激活的 | `active session` 活跃会话 |\r\n| ⭐ add | 添加；新增 | `git add` 暂存文件 |\r\n| ⭐ address | 地址 | `IP address` / `memory address` |\r\n| admin | 管理员；后台管理 | `admin panel` 管理后台 |\r\n| ⭐ allow | 允许；授权 | `allow origin` 跨域允许 |\r\n| ⭐ api | 应用程序接口 | `REST API` / `call an API` |\r\n| ⭐ app / application | 应用；程序 | `web app` / `desktop application` |\r\n| ⭐ architecture | 架构；体系结构 | `microservice architecture` 微服务架构 |\r\n| argument | 参数；争论 | `function argument` 函数参数 |\r\n| ⭐ assign | 赋值；分配 | `assign a variable` 给变量赋值 |\r\n| ⭐ attach | 附加；绑定 | `attach a file` / `attach a debugger` |\r\n| ⭐ attribute | 属性；特性 | `HTML attribute` / `object attribute` |\r\n| ⭐ authenticate | 认证；验证身份 | `authenticate user` 用户认证 |\r\n| ⭐ authorization | 授权 | `authorization header` 授权请求头 |\r\n| ⭐ auto / automatic | 自动的 | `auto-complete` 自动补全 |\r\n| ⭐ available | 可用的；有效的 | `service not available` 服务不可用 |\r\n| ⭐ background | 后台；背景 | `run in background` 后台运行 |\r\n| ⭐ backup | 备份 | `backup database` 备份数据库 |\r\n| ⭐ base / basic | 基础；基本的 | `base class` 基类 |\r\n| ⭐ binary | 二进制的；可执行文件 | `binary file` 二进制文件 |\r\n| ⭐ block | 阻塞；代码块 | `blocking call` 阻塞调用 |\r\n| ⭐ boot | 启动；引导 | `boot sequence` 启动顺序 |\r\n| ⭐ buffer | 缓冲区 | `buffer overflow` 缓冲区溢出 |\r\n| ⭐ build | 构建；编译 | `build failed` 构建失败 |\r\n| ⭐ cache | 缓存 | `cache miss` 缓存未命中 |\r\n| ⭐ cancel | 取消 | `cancel request` 取消请求 |\r\n| ⭐ certificate | 证书 | `SSL certificate` SSL 证书 |\r\n| ⭐ change | 变更；修改 | `changelog` 变更日志 |\r\n| ⭐ channel | 通道；频道 | `message channel` 消息通道 |\r\n| check | 检查；校验 | `check syntax` 语法检查 |\r\n| ⭐ client | 客户端 | `client-server model` 客户端-服务器模型 |\r\n| ⭐ cloud | 云；云服务 | `cloud storage` 云存储 |\r\n| ⭐ cluster | 集群 | `Kubernetes cluster` K8s 集群 |\r\n| ⭐ code | 代码；编码 | `source code` 源代码 |\r\n| ⭐ command | 命令 | `command line` 命令行 |\r\n| ⭐ commit | 提交 | `git commit` 提交代码 |\r\n| ⭐ component | 组件；部件 | `React component` React 组件 |\r\n| compress | 压缩 | `compress files` 压缩文件 |\r\n| ⭐ config / configuration | 配置 | `config file` 配置文件 |\r\n| ⭐ connect | 连接 | `connect to database` 连接数据库 |\r\n| ⭐ container | 容器 | `Docker container` Docker 容器 |\r\n| ⭐ content | 内容；载荷 | `Content-Type` HTTP 头 |\r\n| control | 控制；管理 | `version control` 版本控制 |\r\n| ⭐ copy | 复制 | `copy file` 复制文件 |\r\n| ⭐ core | 核心；内核 | `core logic` 核心逻辑 |\r\n| ⭐ create | 创建 | `create branch` 创建分支 |\r\n| credential | 凭证；认证信息 | `store credentials` 存储凭证 |\r\n| ⭐ data | 数据 | `data type` 数据类型 |\r\n| ⭐ debug | 调试 | `debug mode` 调试模式 |\r\n| ⭐ default | 默认 | `default value` 默认值 |\r\n| ⭐ delete | 删除 | `delete record` 删除记录 |\r\n| ⭐ deploy | 部署 | `deploy to production` 部署到生产 |\r\n| ⭐ develop / development | 开发 | `development environment` 开发环境 |\r\n| device | 设备 | `device driver` 设备驱动 |\r\n| ⭐ directory | 目录；文件夹 | `current directory` 当前目录 |\r\n| ⭐ disable | 禁用 | `disable feature` 禁用功能 |\r\n| ⭐ document | 文档；记录 | `API documentation` API 文档 |\r\n| ⭐ download | 下载 | `download package` 下载包 |\r\n| ⭐ enable | 启用 | `enable logging` 启用日志 |\r\n| encrypt | 加密 | `encrypt data` 加密数据 |\r\n| ⭐ environment | 环境 | `environment variable` 环境变量 |\r\n| ⭐ error | 错误 | `error message` 错误信息 |\r\n| ⭐ event | 事件 | `event listener` 事件监听器 |\r\n| ⭐ execute | 执行 | `execute command` 执行命令 |\r\n| ⭐ export | 导出；暴露 | `export function` 导出函数 |\r\n| ⭐ extend | 扩展；继承 | `extend class` 继承类 |\r\n| ⭐ fail / failure | 失败 | `build failure` 构建失败 |\r\n| ⭐ feature | 功能；特性 | `feature branch` 功能分支 |\r\n| ⭐ file | 文件 | `config file` 配置文件 |\r\n| filter | 过滤 | `filter results` 过滤结果 |\r\n| ⭐ fix | 修复 | `fix bug` 修复缺陷 |\r\n| flag | 标志；标记 | `feature flag` 功能开关 |\r\n| ⭐ flow | 流程；数据流 | `data flow` 数据流 |\r\n| ⭐ format | 格式；格式化 | `JSON format` JSON 格式 |\r\n| ⭐ function | 函数；功能 | `callback function` 回调函数 |\r\n| generate | 生成 | `generate token` 生成令牌 |\r\n| ⭐ global | 全局的 | `global variable` 全局变量 |\r\n| ⭐ host | 主机；托管 | `hostname` 主机名 |\r\n| ⭐ image | 镜像；图片 | `Docker image` Docker 镜像 |\r\n| ⭐ import | 导入；引入 | `import module` 导入模块 |\r\n| index | 索引 | `array index` 数组下标 |\r\n| ⭐ initialize / init | 初始化 | `git init` 初始化仓库 |\r\n| ⭐ install | 安装 | `install dependencies` 安装依赖 |\r\n| instance | 实例 | `create instance` 创建实例 |\r\n| ⭐ interface | 接口；界面 | `user interface` 用户界面 |\r\n| ⭐ invalid | 无效的 | `invalid token` 无效令牌 |\r\n| ⭐ key | 键；密钥 | `API key` API 密钥 |\r\n| ⭐ launch | 启动；发布 | `launch server` 启动服务器 |\r\n| ⭐ library / lib | 库 | `third-party library` 第三方库 |\r\n| ⭐ limit | 限制 | `rate limit` 速率限制 |\r\n| ⭐ link | 链接；符号链接 | `symlink` 软链接 |\r\n| ⭐ list | 列表 | `list files` 列出文件 |\r\n| ⭐ local | 本地的 | `local variable` 局部变量 |\r\n| ⭐ log | 日志；记录 | `error log` 错误日志 |\r\n| ⭐ loop | 循环 | `for loop` for 循环 |\r\n| ⭐ manage / management | 管理 | `package management` 包管理 |\r\n| ⭐ merge | 合并 | `merge branch` 合并分支 |\r\n| ⭐ message | 消息 | `error message` 错误消息 |\r\n| ⭐ method | 方法 | `HTTP method` HTTP 方法 |\r\n| ⭐ mode | 模式 | `dark mode` 暗黑模式 |\r\n| ⭐ module | 模块 | `ES module` ES 模块 |\r\n| monitor | 监控；显示器 | `system monitor` 系统监控 |\r\n| ⭐ name | 名称；命名 | `variable name` 变量名 |\r\n| ⭐ network | 网络 | `network request` 网络请求 |\r\n| ⭐ null | 空值 | `null pointer` 空指针 |\r\n| ⭐ object | 对象 | `JSON object` JSON 对象 |\r\n| ⭐ option | 选项；配置项 | `command-line option` 命令行选项 |\r\n| ⭐ output | 输出 | `standard output` 标准输出 |\r\n| ⭐ override | 覆盖；重写 | `override method` 重写方法 |\r\n| ⭐ package | 包；软件包 | `npm package` npm 包 |\r\n| ⭐ parameter / param | 参数 | `query parameter` 查询参数 |\r\n| ⭐ parse | 解析 | `parse JSON` 解析 JSON |\r\n| ⭐ path | 路径 | `file path` 文件路径 |\r\n| ⭐ pattern | 模式；规律 | `design pattern` 设计模式 |\r\n| ⭐ permission | 权限 | `file permission` 文件权限 |\r\n| ⭐ plugin | 插件 | `browser plugin` 浏览器插件 |\r\n| ⭐ port | 端口 | `port 8080` 8080 端口 |\r\n| ⭐ process | 进程；处理 | `background process` 后台进程 |\r\n| ⭐ production | 生产环境 | `deploy to production` 部署到生产 |\r\n| ⭐ project | 项目 | `open-source project` 开源项目 |\r\n| ⭐ property | 属性 | `CSS property` CSS 属性 |\r\n| ⭐ public | 公开的 | `public API` 公开 API |\r\n| ⭐ queue | 队列 | `message queue` 消息队列 |\r\n| ⭐ remote | 远程的 | `remote repository` 远程仓库 |\r\n| ⭐ remove | 移除；删除 | `remove file` 删除文件 |\r\n| ⭐ repository / repo | 仓库；代码库 | `GitHub repository` GitHub 仓库 |\r\n| ⭐ request | 请求 | `HTTP request` HTTP 请求 |\r\n| ⭐ reset | 重置 | `git reset` 重置提交 |\r\n| ⭐ resource | 资源 | `static resource` 静态资源 |\r\n| ⭐ response | 响应 | `HTTP response` HTTP 响应 |\r\n| ⭐ restart | 重启 | `restart service` 重启服务 |\r\n| ⭐ return | 返回 | `return value` 返回值 |\r\n| ⭐ role | 角色 | `user role` 用户角色 |\r\n| ⭐ run | 运行 | `run script` 运行脚本 |\r\n| ⭐ script | 脚本 | `shell script` Shell 脚本 |\r\n| ⭐ search | 搜索 | `full-text search` 全文搜索 |\r\n| ⭐ secure / security | 安全；安全性 | `security vulnerability` 安全漏洞 |\r\n| ⭐ server | 服务器 | `web server` Web 服务器 |\r\n| ⭐ service | 服务 | `microservice` 微服务 |\r\n| ⭐ session | 会话 | `user session` 用户会话 |\r\n| ⭐ setup | 配置；安装 | `project setup` 项目配置 |\r\n| ⭐ source | 来源；源码 | `source code` 源代码 |\r\n| ⭐ start | 启动；开始 | `start server` 启动服务器 |\r\n| ⭐ state | 状态 | `application state` 应用状态 |\r\n| ⭐ status | 状态码；状态 | `HTTP status 200` HTTP 状态 200 |\r\n| ⭐ stop | 停止 | `stop service` 停止服务 |\r\n| ⭐ store | 存储；仓库 | `data store` 数据存储 |\r\n| ⭐ sync | 同步 | `sync data` 同步数据 |\r\n| ⭐ system | 系统 | `operating system` 操作系统 |\r\n| ⭐ tag | 标签；标记 | `git tag` 打标签 |\r\n| ⭐ target | 目标 | `build target` 构建目标 |\r\n| ⭐ template | 模板 | `HTML template` HTML 模板 |\r\n| ⭐ test | 测试 | `unit test` 单元测试 |\r\n| ⭐ timeout | 超时 | `connection timeout` 连接超时 |\r\n| ⭐ token | 令牌；标记 | `access token` 访问令牌 |\r\n| ⭐ tool | 工具 | `developer tools` 开发者工具 |\r\n| ⭐ trigger | 触发 | `trigger event` 触发事件 |\r\n| ⭐ type | 类型 | `data type` 数据类型 |\r\n| ⭐ update | 更新 | `update package` 更新包 |\r\n| ⭐ upload | 上传 | `upload file` 上传文件 |\r\n| ⭐ user | 用户 | `end user` 终端用户 |\r\n| valid | 有效的 | `valid input` 有效输入 |\r\n| ⭐ value | 值 | `return value` 返回值 |\r\n| ⭐ variable / var | 变量 | `environment variable` 环境变量 |\r\n| ⭐ version | 版本 | `version control` 版本控制 |\r\n| ⭐ warning | 警告 | `deprecation warning` 废弃警告 |\r\n| workflow | 工作流 | `CI/CD workflow` 持续集成工作流 |\r\n| ⭐ ascii | ASCII 字符集 | 128个标准字符编码，`ASCII 65 = 'A'` |\r\n| ⭐ bandwidth | 带宽 | 网络每秒传输数据量，`100Mbps bandwidth` |\r\n| ⭐ base64 | Base64 编码 | 将二进制转为可打印字符，`btoa()` / `atob()` |\r\n| ⭐ charset | 字符集 | `charset=UTF-8` HTML/HTTP 中声明的字符编码 |\r\n| cipher | 密码算法 | `AES cipher` 对称加密算法 |\r\n| ⭐ digest | 哈希摘要 | `SHA-256 digest` 数据的固定长度指纹 |\r\n| ⭐ encoding | 编码 | `UTF-8 encoding` 字符到字节的转换规则 |\r\n| ⭐ epoch | Unix 纪元 | `epoch timestamp` 自 1970-01-01 起的秒数 |\r\n| ⭐ latency | 延迟 | `network latency` 数据从发出到收到的时间 |\r\n| ⭐ packet | 数据包 | 网络传输的最小数据单元，`packet loss` 丢包 |\r\n| ping | 网络测延迟 | `ping google.com` 测试网络是否可达 |\r\n| ⭐ timestamp | 时间戳 | `Unix timestamp` 记录事件发生时间的数字 |\r\n| ⭐ unicode | Unicode | 覆盖全球字符的编码标准，`\\u4e2d` = 中 |\r\n| ⭐ utf-8 | UTF-8 编码 | Unicode 最常用编码方式，兼容 ASCII |\r\n| ability | 能力；性能 | `system ability` 系统能力 |\r\n| accept | 接受；同意 | `accept connection` 接受连接 |\r\n| actual | 实际的 | `actual value` 实际值 |\r\n| adjust | 调整；调节 | `adjust settings` 调整设置 |\r\n| advance | 高级；预先 | `advanced settings` 高级设置 |\r\n| advanced | 高级的 | `advanced mode` 高级模式 |\r\n| advantage | 优势；优点 | `performance advantage` 性能优势 |\r\n| agent | 代理；代理程序 | `user agent` 用户代理 |\r\n| algorithm | 算法 | `sorting algorithm` 排序算法 |\r\n| already | 已经 | `already exists` 已存在 |\r\n| alternative | 替代方案；备选 | `alternative solution` 替代方案 |\r\n| analysis | 分析 | `data analysis` 数据分析 |\r\n| analyze | 分析 | `analyze logs` 分析日志 |\r\n| and | 与；和 | `and operator` 与运算符 |\r\n| any | 任意；任何 | `any type` 任意类型 |\r\n| approach | 方法；途径 | `design approach` 设计方法 |\r\n| area | 区域；领域 | `memory area` 内存区域 |\r\n| arrange | 安排；排列 | `arrange layout` 排列布局 |\r\n| array | 数组 | `array index` 数组索引 |\r\n| article | 文章；条款 | `technical article` 技术文章 |\r\n| as | 作为；如同 | `cast as type` 转换为类型 |\r\n| ask | 询问；请求 | `ask for permission` 请求权限 |\r\n| assist | 辅助；协助 | `assist function` 辅助函数 |\r\n| assume | 假设；假定 | `assume valid` 假设有效 |\r\n| at | 在；位于 | `at sign @` @符号 |\r\n| attempt | 尝试 | `connection attempt` 连接尝试 |\r\n| attention | 注意 | `pay attention` 注意 |\r\n| audio | 音频 | `audio stream` 音频流 |\r\n| automatically | 自动地 | `run automatically` 自动运行 |\r\n| automation | 自动化 | `test automation` 测试自动化 |\r\n| avoid | 避免 | `avoid conflict` 避免冲突 |\r\n| aware | 知晓的 | `context aware` 上下文感知 |\r\n| back | 返回；后退 | `go back` 返回 |\r\n| basis | 基础；基准 | `on the basis of` 基于 |\r\n| batch | 批处理 | `batch job` 批处理任务 |\r\n| be | 是；存在 | `to be or not to be` 存在与否 |\r\n| because | 因为 | `because of` 因为 |\r\n| become | 成为；变成 | `become active` 变为活跃 |\r\n| begin | 开始 | `begin transaction` 开始事务 |\r\n| behavior | 行为；表现 | `undefined behavior` 未定义行为 |\r\n| behind | 在...之后 | `behind proxy` 在代理后 |\r\n| believe | 相信 | `believe it or not` 信不信由你 |\r\n| benefit | 益处；好处 | `performance benefit` 性能收益 |\r\n| best | 最佳 | `best practice` 最佳实践 |\r\n| between | 在...之间 | `between operator` BETWEEN运算符 |\r\n| big | 大的 | `big data` 大数据 |\r\n| bit | 位；比特 | `8-bit` 8位 |\r\n| black | 黑色 | `black list` 黑名单 |\r\n| blue | 蓝色 | `blue screen` 蓝屏 |\r\n| board | 板；主板 | `dashboard` 仪表盘 |\r\n| body | 请求体；正文 | `request body` 请求体 |\r\n| bold | 粗体 | `bold text` 粗体文本 |\r\n| book | 书籍；预订 | `handbook` 手册 |\r\n| border | 边框；边界 | `border width` 边框宽度 |\r\n| both | 两者都 | `both sides` 双方 |\r\n| bottom | 底部 | `bottom margin` 底部边距 |\r\n| branch | 分支 | `branch office` 分支机构 |\r\n| break | 中断；断点 | `break point` 断点 |\r\n| brief | 简短的 | `in brief` 简言之 |\r\n| bright | 明亮的 | `bright mode` 明亮模式 |\r\n| bring | 带来 | `bring up` 启动；提出 |\r\n| broad | 广泛的 | `broadband` 宽带 |\r\n| browser | 浏览器 | `web browser` 网页浏览器 |\r\n| built | 内置的 | `built-in` 内置的 |\r\n| bulk | 批量 | `bulk insert` 批量插入 |\r\n| bundle | 捆绑；打包 | `software bundle` 软件包 |\r\n| burn | 刻录；烧毁 | `burn ISO` 刻录ISO |\r\n| business | 业务；商业 | `business logic` 业务逻辑 |\r\n| button | 按钮 | `submit button` 提交按钮 |\r\n| byte | 字节 | `byte array` 字节数组 |\r\n| calculate | 计算 | `calculate sum` 计算总和 |\r\n| call | 调用；呼叫 | `function call` 函数调用 |\r\n| camera | 摄像头 | `camera access` 摄像头访问 |\r\n| can | 能够；可以 | `can access` 可以访问 |\r\n| cannot | 不能 | `cannot connect` 无法连接 |\r\n| capability | 能力；功能 | `system capability` 系统能力 |\r\n| capable | 有能力的 | `capable of` 能够 |\r\n| capacity | 容量；能力 | `storage capacity` 存储容量 |\r\n| capital | 大写；首都 | `capital letter` 大写字母 |\r\n| capture | 捕获；抓取 | `capture screen` 截屏 |\r\n| car | 汽车（较少用） | `carousel` 轮播 |\r\n| card | 卡片 | `sound card` 声卡 |\r\n| care | 关心；注意 | `take care` 注意 |\r\n| career | 职业；生涯 | `career path` 职业路径 |\r\n| careful | 小心的 | `be careful` 小心 |\r\n| carefully | 仔细地 | `check carefully` 仔细检查 |\r\n| carry | 携带；执行 | `carry out` 执行 |\r\n| case | 情况；大小写 | `switch case` / `upper case` |\r\n| cash | 缓存；现金 | `cache` 缓存（同音） |\r\n| cast | 转换；投射 | `type cast` 类型转换 |\r\n| catalog | 目录；分类 | `data catalog` 数据目录 |\r\n| category | 类别；分类 | `error category` 错误类别 |\r\n| cause | 原因；导致 | `root cause` 根本原因 |\r\n| center | 中心 | `center align` 居中对齐 |\r\n| central | 中央的 | `central server` 中央服务器 |\r\n| century | 世纪 | `21st century` 21世纪 |\r\n| certain | 确定的 | `certain condition` 特定条件 |\r\n| certainly | 当然 | `certainly not` 当然不是 |\r\n| chain | 链；链条 | `blockchain` 区块链 |\r\n| challenge | 挑战 | `security challenge` 安全挑战 |\r\n| chamber | 舱；室 | `test chamber` 测试舱 |\r\n| chance | 机会；概率 | `by chance` 偶然 |\r\n| chapter | 章节 | `Chapter 1` 第一章 |\r\n| character | 字符；特性 | `special character` 特殊字符 |\r\n| characteristic | 特征 | `key characteristic` 关键特征 |\r\n| charge | 收费；充电 | `free of charge` 免费 |\r\n| chart | 图表 | `flow chart` 流程图 |\r\n| cheek | 脸颊（较少用） | - |\r\n| chemical | 化学的 | `chemical formula` 化学式 |\r\n| chest | 胸部（较少用） | - |\r\n| chief | 主要的；首席 | `chief engineer` 首席工程师 |\r\n| child | 子元素；子节点 | `child process` 子进程 |\r\n| children | 子元素们 | `children nodes` 子节点 |\r\n| chip | 芯片 | `microchip` 微芯片 |\r\n| choice | 选择 | `multiple choice` 多选 |\r\n| choose | 选择 | `choose file` 选择文件 |\r\n| circle | 圆形；循环 | `circle ci` CI工具 |\r\n| circuit | 电路 | `circuit breaker` 熔断器 |\r\n| circular | 循环的 | `circular reference` 循环引用 |\r\n| civil | 民事的 | `civil engineering` 土木工程 |\r\n| claim | 声明；索赔 | `claim token` 索取令牌 |\r\n| class | 类；分类 | `class definition` 类定义 |\r\n| classic | 经典的 | `classic mode` 经典模式 |\r\n| clean | 清理；干净的 | `clean build` 清理构建 |\r\n| clear | 清除；清晰的 | `clear cache` 清除缓存 |\r\n| clearly | 清晰地 | `clearly visible` 清晰可见 |\r\n| climate | 气候 | `climate control` 气候控制 |\r\n| climb | 爬升 | `climb up` 爬升 |\r\n| clinic | 诊所 | `code clinic` 代码诊所 |\r\n| clock | 时钟 | `system clock` 系统时钟 |\r\n| close | 关闭 | `close connection` 关闭连接 |\r\n| cloth | 布料（较少用） | - |\r\n| clothes | 衣服（较少用） | - |\r\n| club | 俱乐部 | `coding club` 编程俱乐部 |\r\n| clue | 线索 | `no clue` 无线索 |\r\n| coach | 教练 | `code coach` 代码教练 |\r\n| coal | 煤炭（较少用） | - |\r\n| coffee | 咖啡 | `coffee break` 咖啡休息 |\r\n| cold | 冷的 | `cold start` 冷启动 |\r\n| collapse | 折叠；崩溃 | `collapse section` 折叠区域 |\r\n| colleague | 同事 | `team colleague` 团队成员 |\r\n| collect | 收集 | `collect data` 收集数据 |\r\n| collection | 集合；收集 | `data collection` 数据收集 |\r\n| college | 大学；学院 | `college degree` 大学学位 |\r\n| color | 颜色 | `color code` 颜色代码 |\r\n| column | 列 | `database column` 数据库列 |\r\n| combine | 组合；合并 | `combine files` 合并文件 |\r\n| come | 来；出现 | `come from` 来自 |\r\n| comfortable | 舒适的 | `comfortable speed` 舒适速度 |\r\n| commerce | 商业 | `e-commerce` 电子商务 |\r\n| commercial | 商业的 | `commercial use` 商业用途 |\r\n| commission | 佣金；委员会 | `sales commission` 销售佣金 |\r\n| commitment | 承诺；提交 | `code commitment` 代码提交 |\r\n| committee | 委员会 | `technical committee` 技术委员会 |\r\n| common | 常见的；公共的 | `common practice` 常见做法 |\r\n| communicate | 通信；交流 | `communicate with` 与...通信 |\r\n| communication | 通信 | `inter-process communication` 进程间通信 |\r\n| community | 社区 | `developer community` 开发者社区 |\r\n| company | 公司 | `tech company` 科技公司 |\r\n| compare | 比较 | `compare values` 比较值 |\r\n| comparison | 比较 | `string comparison` 字符串比较 |\r\n| compete | 竞争 | `compete for` 竞争 |\r\n| competition | 竞争 | `market competition` 市场竞争 |\r\n| competitive | 有竞争力的 | `competitive advantage` 竞争优势 |\r\n| competitor | 竞争者 | `main competitor` 主要竞争者 |\r\n| complete | 完成；完整的 | `complete task` 完成任务 |\r\n| completely | 完全地 | `completely remove` 完全移除 |\r\n| complex | 复杂的 | `complex system` 复杂系统 |\r\n| complicated | 复杂的 | `complicated logic` 复杂逻辑 |\r\n| compose | 组合；撰写 | `docker-compose` 容器编排 |\r\n| composition | 组合；成分 | `object composition` 对象组合 |\r\n| compound | 复合的；化合物 | `compound interest` 复利 |\r\n| comprehend | 理解 | `comprehend code` 理解代码 |\r\n| comprehension | 理解；推导 | `list comprehension` 列表推导式 |\r\n| compromise | 妥协；泄露 | `security compromise` 安全泄露 |\r\n| computer | 计算机 | `personal computer` 个人电脑 |\r\n| concentrate | 集中 | `concentrate on` 专注于 |\r\n| concentration | 浓度；专注 | `high concentration` 高浓度 |\r\n| concept | 概念 | `core concept` 核心概念 |\r\n| concern | 关注；担忧 | `main concern` 主要关注点 |\r\n| concert | 音乐会（较少用） | - |\r\n| conduct | 执行；传导 | `conduct test` 执行测试 |\r\n| conductor | 导体；指挥 | `heat conductor` 热导体 |\r\n| conference | 会议 | `tech conference` 技术会议 |\r\n| confidence | 信心；置信度 | `confidence level` 置信水平 |\r\n| confident | 自信的 | `confident about` 对...有信心 |\r\n| confirm | 确认 | `confirm action` 确认操作 |\r\n| conflict | 冲突 | `merge conflict` 合并冲突 |\r\n| confuse | 混淆 | `confuse with` 与...混淆 |\r\n| confusion | 混淆；困惑 | `cause confusion` 导致混淆 |\r\n| congratulation | 祝贺 | `congratulations` 祝贺 |\r\n| congress | 国会；会议 | `technical congress` 技术大会 |\r\n| conquer | 征服；攻克 | `conquer bug` 攻克bug |\r\n| conscience | 良心（较少用） | - |\r\n| conscious | 有意识的 | `conscious of` 意识到 |\r\n| consciousness | 意识（较少用） | - |\r\n| consent | 同意；许可 | `user consent` 用户同意 |\r\n| consequence | 结果；后果 | `as a consequence` 结果 |\r\n| consequently | 因此 | `consequently` 因此 |\r\n| conservation | 保护；保存 | `energy conservation` 节能 |\r\n| conservative | 保守的 | `conservative estimate` 保守估计 |\r\n| consider | 考虑 | `consider option` 考虑选项 |\r\n| considerable | 相当大的 | `considerable amount` 相当大的数量 |\r\n| consideration | 考虑 | `under consideration` 在考虑中 |\r\n| consist | 由...组成 | `consist of` 由...组成 |\r\n| consistent | 一致的 | `consistent behavior` 一致的行为 |\r\n| constant | 常量；恒定的 | `constant value` 常量值 |\r\n| constantly | 不断地 | `constantly update` 不断更新 |\r\n| constitution | 宪法；构造 | `system constitution` 系统构造 |\r\n| construct | 构造；构建 | `construct object` 构造对象 |\r\n| construction | 构造；建设 | `under construction` 建设中 |\r\n| consult | 咨询；查阅 | `consult manual` 查阅手册 |\r\n| consultant | 顾问 | `technical consultant` 技术顾问 |\r\n| consume | 消费；消耗 | `consume memory` 消耗内存 |\r\n| consumption | 消耗；消费 | `memory consumption` 内存消耗 |\r\n| contact | 联系；接触 | `contact support` 联系支持 |\r\n| contain | 包含 | `contain value` 包含值 |\r\n| contemporary | 当代的；同时代的 | `contemporary design` 当代设计 |\r\n| continent | 大陆（较少用） | - |\r\n| continue | 继续 | `continue execution` 继续执行 |\r\n| continuous | 连续的 | `continuous integration` 持续集成 |\r\n| contract | 合约；契约 | `smart contract` 智能合约 |\r\n| contrast | 对比 | `in contrast` 相比之下 |\r\n| contribute | 贡献 | `contribute code` 贡献代码 |\r\n| contribution | 贡献 | `code contribution` 代码贡献 |\r\n| convenient | 方便的 | `convenient way` 方便的方式 |\r\n| conversation | 对话 | `online conversation` 在线对话 |\r\n| cook | 烹饪（较少用） | - |\r\n| cool | 酷的；凉爽的 | `cool feature` 酷功能 |\r\n| cooperation | 合作 | `team cooperation` 团队合作 |\r\n| coordinate | 坐标；协调 | `coordinate system` 坐标系 |\r\n| cop | 复制（俚语）；警察 | `copy` 复制 |\r\n| corn | 玉米（较少用） | - |\r\n| corner | 角落 | `corner case` 边界情况 |\r\n| corporation | 公司；企业 | `multinational corporation` 跨国公司 |\r\n| correct | 正确的；修正 | `correct error` 修正错误 |\r\n| correctly | 正确地 | `work correctly` 正常工作 |\r\n| cost | 成本；花费 | `time cost` 时间成本 |\r\n| cotton | 棉花（较少用） | - |\r\n| could | 能够（can过去式） | `could not` 不能 |\r\n| council | 理事会 | `technical council` 技术理事会 |\r\n| count | 计数 | `line count` 行数统计 |\r\n| counter | 计数器 | `hit counter` 点击计数器 |\r\n| country | 国家 | `country code` 国家代码 |\r\n| countryside | 乡村（较少用） | - |\r\n| couple | 一对；几个 | `a couple of` 几个 |\r\n| courage | 勇气（较少用） | - |\r\n| course | 课程；过程 | `of course` 当然 |\r\n| court | 法庭；球场（较少用） | - |\r\n| cousin | 表亲（较少用） | - |\r\n| cover | 覆盖；包含 | `code coverage` 代码覆盖率 |\r\n| cow | 奶牛（较少用） | - |\r\n| crack | 破解；裂缝 | `crack password` 破解密码 |\r\n| craft | 工艺；精心制作 | `craft code` 精心编写代码 |\r\n| crash | 崩溃 | `system crash` 系统崩溃 |\r\n| crazy | 疯狂的 | `crazy idea` 疯狂的想法 |\r\n| cream | 奶油（较少用） | - |\r\n| creation | 创建；创造 | `object creation` 对象创建 |\r\n| creative | 创造性的 | `creative solution` 创造性解决方案 |\r\n| creature | 生物（较少用） | - |\r\n| credit | 信用；学分 | `credit card` 信用卡 |\r\n| crew | 团队；工作人员 | `crew member` 团队成员 |\r\n| cricket | 板球（较少用） | - |\r\n| cross | 交叉；跨域 | `cross origin` 跨域 |\r\n| crypto | 加密；加密货币 | `cryptography` 加密技术 |\r\n| current | 当前的；电流 | `current version` 当前版本 |\r\n| curve | 曲线 | `learning curve` 学习曲线 |\r\n",Ga='# 01 开发基础 & 语法（300）\r\n\r\n> 编写代码、阅读报错、看技术文档时的核心词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ abstract | 抽象的；抽象类 | `abstract class` 抽象类 |\r\n| ⭐ allocate | 分配（内存） | `allocate memory` 分配内存 |\r\n| ⭐ annotation | 注解；注释 | `@annotation` Java/Python 注解 |\r\n| ⭐ array | 数组 | `array index out of bounds` 数组越界 |\r\n| ⭐ assert | 断言 | `assert value == expected` 断言相等 |\r\n| ⭐ async / asynchronous | 异步的 | `async function` 异步函数 |\r\n| ⭐ await | 等待（异步） | `await promise` 等待 Promise |\r\n| benchmark | 基准测试 | `run benchmarks` 运行基准测试 |\r\n| ⭐ boolean | 布尔类型 | `boolean flag` 布尔标志 |\r\n| ⭐ branch | 分支；条件分支 | `if-else branch` 条件分支 |\r\n| ⭐ break | 中断；跳出循环 | `break statement` break 语句 |\r\n| ⭐ callback | 回调函数 | `callback hell` 回调地狱 |\r\n| ⭐ cast | 类型转换 | `type cast` 类型强转 |\r\n| ⭐ catch | 捕获异常 | `try-catch block` 异常捕获块 |\r\n| ⭐ class | 类 | `define a class` 定义类 |\r\n| ⭐ closure | 闭包 | `closure variable` 闭包变量 |\r\n| ⭐ compile | 编译 | `compile error` 编译错误 |\r\n| ⭐ concurrency | 并发 | `concurrency control` 并发控制 |\r\n| ⭐ condition | 条件 | `condition check` 条件检查 |\r\n| ⭐ constant / const | 常量 | `const PI = 3.14` 常量定义 |\r\n| constructor | 构造函数 | `class constructor` 类构造器 |\r\n| ⭐ context | 上下文 | `execution context` 执行上下文 |\r\n| ⭐ continue | 继续；跳过 | `continue statement` continue 语句 |\r\n| ⭐ declare | 声明 | `declare variable` 声明变量 |\r\n| ⭐ dependency | 依赖 | `dependency injection` 依赖注入 |\r\n| ⭐ deprecate | 废弃 | `deprecated API` 废弃的 API |\r\n| ⭐ enum | 枚举 | `enum Status { ... }` 枚举类型 |\r\n| ⭐ exception | 异常 | `throw exception` 抛出异常 |\r\n| ⭐ expression | 表达式 | `regular expression` 正则表达式 |\r\n| ⭐ final | 最终的；不可变 | `final variable` 不可变变量（Java）|\r\n| ⭐ framework | 框架 | `web framework` Web 框架 |\r\n| garbage | 垃圾（内存） | `garbage collection` 垃圾回收 |\r\n| ⭐ generic | 泛型 | `generic type` 泛型类型 |\r\n| ⭐ heap | 堆（内存） | `heap allocation` 堆内存分配 |\r\n| ⭐ hook | 钩子；挂钩 | `React hook` / `git hook` |\r\n| ⭐ immutable | 不可变的 | `immutable object` 不可变对象 |\r\n| implement | 实现 | `implement interface` 实现接口 |\r\n| ⭐ inheritance | 继承 | `class inheritance` 类继承 |\r\n| ⭐ inject | 注入 | `dependency injection` 依赖注入 |\r\n| ⭐ input | 输入 | `user input` 用户输入 |\r\n| ⭐ integer / int | 整数 | `int overflow` 整数溢出 |\r\n| ⭐ iterate / iteration | 迭代 | `iterate over array` 遍历数组 |\r\n| ⭐ lambda | Lambda 表达式 | `lambda function` 匿名函数 |\r\n| ⭐ lazy | 懒加载；延迟 | `lazy loading` 懒加载 |\r\n| ⭐ literal | 字面量 | `string literal` 字符串字面量 |\r\n| ⭐ map | 映射；遍历转换 | `map function` 映射函数 |\r\n| ⭐ memory | 内存 | `memory leak` 内存泄漏 |\r\n| mock | 模拟（测试） | `mock object` 模拟对象 |\r\n| ⭐ namespace | 命名空间 | `namespace conflict` 命名空间冲突 |\r\n| ⭐ nested | 嵌套的 | `nested loop` 嵌套循环 |\r\n| ⭐ operator | 运算符 | `comparison operator` 比较运算符 |\r\n| optimize | 优化 | `optimize performance` 性能优化 |\r\n| ⭐ pointer | 指针 | `null pointer exception` 空指针异常 |\r\n| ⭐ polymorphism | 多态 | OOP 三大特性之一 |\r\n| ⭐ primitive | 原始类型 | `primitive type` 基本数据类型 |\r\n| private | 私有的 | `private method` 私有方法 |\r\n| ⭐ promise | Promise（异步） | `resolve a promise` 解析 Promise |\r\n| protected | 受保护的 | `protected field` 受保护字段 |\r\n| ⭐ prototype | 原型 | `prototype chain` 原型链 |\r\n| ⭐ recursion | 递归 | `recursive function` 递归函数 |\r\n| ⭐ reduce | 归约；减少 | `reduce array` 数组归约 |\r\n| ⭐ refactor | 重构 | `refactor code` 重构代码 |\r\n| ⭐ reference | 引用 | `pass by reference` 引用传递 |\r\n| ⭐ regex / regexp | 正则表达式 | `regex pattern` 正则模式 |\r\n| ⭐ runtime | 运行时 | `runtime error` 运行时错误 |\r\n| ⭐ scope | 作用域 | `variable scope` 变量作用域 |\r\n| ⭐ serialize | 序列化 | `serialize to JSON` 序列化为 JSON |\r\n| singleton | 单例 | `singleton pattern` 单例模式 |\r\n| ⭐ stack | 栈；调用栈 | `stack overflow` 栈溢出 |\r\n| ⭐ static | 静态的 | `static method` 静态方法 |\r\n| ⭐ string | 字符串 | `string interpolation` 字符串插值 |\r\n| ⭐ syntax | 语法 | `syntax error` 语法错误 |\r\n| ⭐ thread | 线程 | `main thread` 主线程 |\r\n| ⭐ throw | 抛出异常 | `throw new Error(...)` 抛出错误 |\r\n| ⭐ try | 尝试；异常处理 | `try-catch-finally` |\r\n| ⭐ tuple | 元组 | `return a tuple` 返回元组 |\r\n| ⭐ undefined | 未定义 | `undefined variable` 未定义变量 |\r\n| ⭐ void | 无返回值 | `void function` 无返回值函数 |\r\n| ⭐ while | while 循环 | `while (condition) { }` |\r\n| ⭐ yield | 生成器返回值 | `yield value` (Python/JS generator) |\r\n| alias | 别名 | `type alias` 类型别名 |\r\n| alter | 修改；变更 | `alter table` 修改表结构 |\r\n| append | 追加 | `append to list` 追加到列表 |\r\n| apply | 应用；申请 | `apply function` 应用函数 |\r\n| assignment | 赋值；任务 | `variable assignment` 变量赋值 |\r\n| atomic | 原子的 | `atomic operation` 原子操作 |\r\n| blank | 空白的 | `blank line` 空行 |\r\n| camel | 驼峰式 | `camelCase` 驼峰命名法 |\r\n| crisis | 危机 | `crisis management` 危机管理 |\r\n| critic | 批评者 | `code critic` 代码审查者 |\r\n| critical | 关键的；严重的 | `critical error` 严重错误 |\r\n| criticism | 批评 | `constructive criticism` 建设性批评 |\r\n| crop | 裁剪；截取 | `crop image` 裁剪图片 |\r\n| crowd | 人群；拥挤 | `crowd sourcing` 众包 |\r\n| crucial | 关键的 | `crucial step` 关键步骤 |\r\n| cruel | 残酷的 | `cruel reality` 残酷的现实 |\r\n| cry | 加密（俚语）；哭泣 | `cry for help` 求助 |\r\n| crystal | 水晶；清晰的 | `crystal clear` 非常清晰 |\r\n| cube | 立方体 | `data cube` 数据立方体 |\r\n| cupboard | 橱柜（较少用） | - |\r\n| cure | 治愈；修复 | `cure bug` 修复bug |\r\n| curiosity | 好奇心 | `technical curiosity` 技术好奇心 |\r\n| curious | 好奇的 | `curious about` 对...好奇 |\r\n| curse | 诅咒 | `curse of knowledge` 知识诅咒 |\r\n| curtain | 窗帘（较少用） | - |\r\n| cushion | 缓冲 | `cushion effect` 缓冲效应 |\r\n| custom | 自定义的 | `custom setting` 自定义设置 |\r\n| customer | 客户 | `customer support` 客户支持 |\r\n| cycle | 周期；循环 | `life cycle` 生命周期 |\r\n| ⭐ abstraction | 抽象；抽象层 | OOP 四大特性之一 |\r\n| ⭐ access modifier | 访问修饰符 | `public / private / protected` |\r\n| ⭐ bitwise | 位运算的 | `bitwise AND &` / `OR |` 位运算 |\r\n| ⭐ char / character | 字符类型 | `char c = \'A\'` / `charCodeAt()` |\r\n| ⭐ code smell | 代码坏味道 | 需要重构的代码信号，如过长方法 |\r\n| ⭐ compile-time | 编译期 | `compile-time error` 编译期错误 |\r\n| ⭐ conditional | 条件表达式 | `condition ? a : b` 三元运算符 |\r\n| ⭐ data structure | 数据结构 | `array / linked list / tree / hash` |\r\n| ⭐ deadlock | 死锁 | 两个线程互相等待对方释放资源 |\r\n| ⭐ decorator | 装饰器 | `@decorator` Python/TypeScript 装饰器 |\r\n| ⭐ default parameter | 默认参数 | `function fn(x = 0)` |\r\n| ⭐ design pattern | 设计模式 | `factory / observer / singleton` |\r\n| ⭐ destructure | 解构赋值 | `const { a } = obj` / `const [x] = arr` |\r\n| ⭐ dictionary / dict | 字典；映射 | Python `dict` / JS `Map` / `{}` |\r\n| ⭐ encapsulation | 封装 | OOP 四大特性之一 |\r\n| ⭐ event loop | 事件循环 | JS 单线程异步执行机制 |\r\n| ⭐ field | 字段；成员变量 | `class field` / `struct field` |\r\n| ⭐ float | 浮点数 | `float precision` 浮点精度问题 |\r\n| ⭐ for | for 循环 | `for (let i=0; i<n; i++)` |\r\n| ⭐ generator | 生成器 | `function*` / `yield` 惰性序列 |\r\n| ⭐ getter / setter | 取值/设值器 | `get name()` / `set name(v)` |\r\n| ⭐ higher-order function | 高阶函数 | 接收或返回函数的函数，如 `map/filter` |\r\n| ⭐ if / else | 条件语句 | `if (cond) {} else {}` |\r\n| ⭐ immutability | 不可变性 | `Object.freeze()` / `const` |\r\n| ⭐ instantiate | 实例化 | `new ClassName()` 创建对象实例 |\r\n| ⭐ key-value | 键值对 | `{ key: value }` 字典/映射结构 |\r\n| ⭐ linked list | 链表 | 每个节点含指向下一节点的指针 |\r\n| ⭐ local | 局部的 | `local variable` 函数内局部变量 |\r\n| ⭐ mutable | 可变的 | 与 `immutable` 相对；可被修改 |\r\n| ⭐ null / none | 空值 | `null` (JS/Java) / `None` (Python) |\r\n| ⭐ object-oriented | 面向对象 | OOP = Object-Oriented Programming |\r\n| ⭐ overload | 重载 | `method overloading` 同名不同参数 |\r\n| ⭐ parameter | 形参 | 函数定义中的变量，对应 argument 实参 |\r\n| ⭐ pass by value | 值传递 | 传递副本，修改不影响原变量 |\r\n| ⭐ pass by reference | 引用传递 | 传递地址，修改影响原变量 |\r\n| ⭐ pipeline | 管道；流水线 | `data pipeline` / `|>` 管道操作符 |\r\n| ⭐ pure function | 纯函数 | 相同输入必定相同输出，无副作用 |\r\n| ⭐ race condition | 竞态条件 | 多线程同时读写共享资源导致的问题 |\r\n| ⭐ return type | 返回类型 | `function fn(): string` 返回类型注解 |\r\n| ⭐ setter | 设值方法 | `set value(v) { this._v = v }` |\r\n| ⭐ side effect | 副作用 | 函数修改外部状态或 I/O 操作 |\r\n| ⭐ signature | 函数签名 | 函数名、参数类型和返回类型的描述 |\r\n| ⭐ spread | 展开运算符 | `...arr` / `...obj` ES6 扩展语法 |\r\n| ⭐ struct | 结构体 | `struct Point { x, y }` C/Rust/Go |\r\n| ⭐ switch | switch 语句 | `switch (val) { case x: break }` |\r\n| ⭐ template literal | 模板字符串 | `` `Hello ${name}` `` ES6 语法 |\r\n| ⭐ trait | 特征（Rust/PHP） | 类似 interface 的代码复用机制 |\r\n| ⭐ tree | 树形结构 | `binary tree` / `AST` 抽象语法树 |\r\n| ⭐ type annotation | 类型注解 | `x: number` TypeScript/Python 类型标注 |\r\n| ⭐ type assertion | 类型断言 | `value as string` TypeScript |\r\n| ⭐ type inference | 类型推断 | 编译器自动推断变量类型 |\r\n| ⭐ union type | 联合类型 | `string | number` TypeScript 联合类型 |\r\n| ⭐ unwrap | 解包 | `Option.unwrap()` Rust / 解包 Optional |\r\n| ⭐ interface | 接口 | `interface User { id: number }` |\r\n| ⭐ iterable | 可迭代的 | 实现了迭代协议的对象 |\r\n| ⭐ mock | 模拟对象 | `jest.mock()` 测试中模拟依赖 |\r\n| ⭐ module | 模块 | `import/export` ES module |\r\n| ⭐ mutation | 变更 | `state mutation` 直接修改状态 |\r\n| ⭐ optional | 可选的 | `param?: string` / `Optional<T>` |\r\n| ⭐ overwrite | 覆写 | `overwrite file` 覆盖已有文件 |\r\n| ⭐ package | 包 | `import package` 导入软件包 |\r\n| ⭐ protocol | 协议 | `network protocol` / Swift `protocol` |\r\n| ⭐ queue | 队列 | `FIFO queue` 先进先出队列 |\r\n| ⭐ refactoring | 重构 | 在不改变外部行为的前提下改善代码 |\r\n| ⭐ regex | 正则表达式 | `/\\d+/g` 匹配数字的正则 |\r\n| ⭐ reserved word | 保留字 | `if/else/class` 等不能用作变量名 |\r\n| ⭐ singleton | 单例模式 | 全局只有一个实例的设计模式 |\r\n| ⭐ snake_case | 下划线命名 | Python 变量/函数命名风格 |\r\n| ⭐ stack trace | 堆栈追踪 | 错误时打印的调用链信息 |\r\n| ⭐ state machine | 状态机 | `finite state machine` 有限状态机 |\r\n| ⭐ variable shadowing | 变量遮蔽 | 内层变量名与外层相同导致外层不可见 |\r\n| ⭐ AST | 抽象语法树 | 编译器/Babel 将源码解析成的树状结构 |\r\n| ⭐ big O notation | 时间复杂度 | `O(n)` `O(log n)` `O(n²)` 算法效率 |\r\n| ⭐ boolean operator | 布尔运算符 | `&&` `||` `!` 逻辑运算 |\r\n| ⭐ call stack | 调用栈 | 函数调用层叠；溢出时报 `Stack Overflow` |\r\n| ⭐ coercion | 类型强制转换 | `"1" + 1 = "11"` JS 隐式类型转换 |\r\n| ⭐ collection | 集合类型 | `List / Set / Map` 等容器类型 |\r\n| ⭐ coroutine | 协程 | 比线程更轻量的并发单元，Go `goroutine` |\r\n| ⭐ duck typing | 鸭子类型 | 只关注对象行为而非类型，Python/JS |\r\n| ⭐ dynamic typing | 动态类型 | 运行时确定类型，Python/JS |\r\n| ⭐ expression | 表达式 | 有返回值的代码片段；对应 statement 语句 |\r\n| ⭐ fiber | 纤程 | React Fiber 调度器 / 比线程更轻的并发 |\r\n| ⭐ first-class function | 一等函数 | 函数可作为值传递和返回，JS/Python |\r\n| ⭐ formatter | 代码格式化工具 | `Prettier` / `black` / `gofmt` |\r\n| ⭐ guard clause | 卫语句 | 提前返回以减少嵌套，提升可读性 |\r\n| ⭐ hardcoded | 硬编码 | 直接写死的值，应改为配置或常量 |\r\n| ⭐ hoisting | 变量提升 | JS 中 `var` 声明被提升到作用域顶部 |\r\n| ⭐ idempotent | 幂等的 | 多次执行结果相同，HTTP PUT/DELETE |\r\n| ⭐ interpreter | 解释器 | 逐行执行源码，Python/Ruby 使用解释器 |\r\n| ⭐ iterator | 迭代器 | 实现 `next()` 方法，用于逐步遍历集合 |\r\n| ⭐ linter | 代码检查工具 | `ESLint` / `Pylint` 静态代码分析 |\r\n| ⭐ method chaining | 方法链式调用 | `arr.filter().map().reduce()` |\r\n| ⭐ null coalescing | 空值合并 | `a ?? b` 当 a 为 null/undefined 取 b |\r\n| ⭐ observer pattern | 观察者模式 | 发布-订阅机制的经典实现 |\r\n| ⭐ optional chaining | 可选链 | `obj?.prop?.method()` 安全访问 |\r\n| ⭐ parser | 解析器 | 将 token 序列转为 AST 的程序 |\r\n| ⭐ profiler | 性能分析器 | 记录函数耗时，找出性能瓶颈 |\r\n| ⭐ prototype chain | 原型链 | JS 对象通过 `__proto__` 向上查找属性 |\r\n| ⭐ pub-sub | 发布-订阅 | 解耦发布者和订阅者的消息模式 |\r\n| ⭐ static analysis | 静态分析 | 不运行代码就能检查错误，TypeScript 类型检查 |\r\n| ⭐ strict mode | 严格模式 | `"use strict"` 禁用 JS 某些不安全特性 |\r\n| ⭐ symbol | 符号类型 | JS `Symbol()` 唯一且不可变的原始值 |\r\n| ⭐ ternary operator | 三元运算符 | `condition ? valueA : valueB` |\r\n| ⭐ transpiler | 转译器 | Babel 将 ES2022 转为 ES5 |\r\n| ⭐ type coercion | 类型强制转换 | 隐式：`"5" * 2 = 10`；显式：`Number("5")` |\r\n| ⭐ type guard | 类型守卫 | `typeof x === "string"` 缩窄类型范围 |\r\n| ⭐ variadic | 可变参数的 | `function fn(...args)` 接受任意数量参数 |\r\n| ⭐ virtual method | 虚方法 | 子类可覆盖的方法，C++/Java `virtual` |\r\n| ⭐ weak reference | 弱引用 | 不阻止垃圾回收的引用，`WeakMap` |\r\n| ⭐ lexer | 词法分析器 | 将源码切分为 token 序列 |\r\n| ⭐ token | 词法单元 | 编译器词法分析中的最小语法单位 |\r\n| ⭐ semantic | 语义 | `semantic error` 语法正确但逻辑错误 |\r\n| ⭐ algorithm | 算法 | `sorting algorithm` 排序算法 |\r\n| ⭐ logic | 业务逻辑 | `business logic` 核心处理逻辑 |\r\n| ⭐ deterministic | 确定性的 | 相同输入必定产生相同输出 |\r\n| ⭐ side channel | 侧信道 | 通过时间/内存等间接泄露信息的攻击 |\r\n| ⭐ deprecation | 废弃通知 | `@deprecated` 标记将被移除的 API |\r\n| ⭐ backward compatible | 向后兼容 | 新版本不破坏已有功能 |\r\n| ⭐ breaking change | 破坏性变更 | 不兼容旧接口的变更，需升级主版本号 |\r\n| ⭐ boilerplate | 样板代码 | 每次都要写的重复性基础代码 |\r\n| ⭐ DRY | 不重复原则 | Don\'t Repeat Yourself 避免代码冗余 |\r\n| ⭐ SOLID | 面向对象设计原则 | 单一职责/开闭/里氏替换/接口隔离/依赖倒置 |\r\n| ⭐ coupling | 耦合 | 模块间依赖程度；低耦合是好的设计目标 |\r\n| ⭐ cohesion | 内聚 | 模块内部关联紧密程度；高内聚是好的设计 |\r\n| ⭐ abstraction layer | 抽象层 | 隐藏底层细节，提供统一接口 |\r\n| ⭐ adapter pattern | 适配器模式 | 让不兼容接口能协同工作 |\r\n| ⭐ binary search | 二分查找 | `O(log n)` 在有序数组中查找元素 |\r\n| ⭐ circular dependency | 循环依赖 | A 依赖 B，B 依赖 A，导致无法解析 |\r\n| ⭐ clean code | 整洁代码 | 可读、可维护、简单的代码风格原则 |\r\n| ⭐ command pattern | 命令模式 | 将操作封装为对象，支持撤销/重做 |\r\n| ⭐ concurrency | 并发 | 多任务交替执行，单核也可并发 |\r\n| ⭐ context manager | 上下文管理器 | Python `with` 语句自动管理资源 |\r\n| ⭐ data binding | 数据绑定 | 数据与 UI 自动同步的机制 |\r\n| ⭐ dependency graph | 依赖图 | 描述模块间依赖关系的有向图 |\r\n| ⭐ DFS | 深度优先搜索 | `depth-first search` 图/树的遍历方式 |\r\n| ⭐ domain-driven design | 领域驱动设计 | DDD：以业务领域为核心的设计方法 |\r\n| ⭐ factory pattern | 工厂模式 | 封装对象创建逻辑，解耦实例化过程 |\r\n| ⭐ functional programming | 函数式编程 | 用纯函数和不可变数据构建程序 |\r\n| ⭐ graph | 图（数据结构） | 由节点和边组成，表示关系 |\r\n| ⭐ hash map | 哈希表 | 键值映射，查找 O(1)，JS `Map` / Python `dict` |\r\n| ⭐ inversion of control | 控制反转 | IoC：依赖由框架注入而非手动创建 |\r\n| ⭐ lazy evaluation | 惰性求值 | 只在需要时才计算值，避免不必要开销 |\r\n| ⭐ list comprehension | 列表推导式 | Python `[x*2 for x in arr if x > 0]` |\r\n| ⭐ memory management | 内存管理 | 分配/回收内存；GC 自动管理 |\r\n| ⭐ memoization | 记忆化 | 缓存函数返回值避免重复计算 |\r\n| ⭐ method signature | 方法签名 | 方法名、参数类型、返回类型的描述 |\r\n| ⭐ namespace collision | 命名空间冲突 | 不同模块有同名导出导致歧义 |\r\n| ⭐ null pointer | 空指针 | `NullPointerException` / `Cannot read property of null` |\r\n| ⭐ object composition | 对象组合 | 优于继承的代码复用方式 |\r\n| ⭐ partial application | 偏函数应用 | 固定函数部分参数，返回新函数 |\r\n| ⭐ priority queue | 优先队列 | 按优先级出队，常用堆实现 |\r\n| ⭐ reflection | 反射 | 运行时获取/修改类型信息，Java `reflect` |\r\n| ⭐ retry | 重试 | `retry with backoff` 失败后指数退避重试 |\r\n| ⭐ set | 集合类型 | 不含重复元素，`new Set([1,2,3])` |\r\n| ⭐ short-circuit | 短路求值 | `a && b`：a 为假则不执行 b |\r\n| ⭐ string formatting | 字符串格式化 | `f"Hello {name}"` / `String.format()` |\r\n| ⭐ tree traversal | 树遍历 | 前序/中序/后序/层序 遍历二叉树 |\r\n| ⭐ unit testing | 单元测试 | 测试最小代码单元，`Jest` / `pytest` |\r\n| ⭐ value object | 值对象 | 不可变，通过值而非引用判断相等 |\r\n| ⭐ visitor pattern | 访问者模式 | 不修改对象结构，增加新操作 |\r\n| ⭐ BFS | 广度优先搜索 | `breadth-first search` 图/树按层遍历 |\r\n| ⭐ copy-on-write | 写时复制 | 只在修改时才真正复制数据 |\r\n| ⭐ default export | 默认导出 | `export default fn` 一个文件一个默认 |\r\n| ⭐ named export | 具名导出 | `export { fn, cls }` 一个文件多个导出 |\r\n| ⭐ overflow | 溢出 | `integer overflow` 超过类型最大值 |\r\n| ⭐ parallelism | 并行 | 多核同时执行，区别于并发 |\r\n| ⭐ patch | 补丁；打补丁 | `monkey patch` 运行时修改对象行为 |\r\n| ⭐ polling | 轮询 | 定期发请求检查状态，对比 WebSocket |\r\n| ⭐ queue | 队列 | FIFO 先进先出数据结构 |\r\n| ⭐ repl | 交互式解释器 | Read-Eval-Print Loop，命令行交互环境 |\r\n| ⭐ runtime | 运行时 | 程序运行时环境，如 Node.js 运行时 |\r\n| ⭐ sandbox | 沙箱 | 隔离执行环境，防止影响外部 |\r\n| ⭐ self-documenting | 自文档化 | 代码本身即是文档，无需额外注释 |\r\n| ⭐ separation of concerns | 关注点分离 | SoC：不同功能放不同模块 |\r\n| ⭐ stdout / stderr | 标准输出/错误 | `console.log → stdout` `console.error → stderr` |\r\n| ⭐ tight coupling | 紧耦合 | 模块高度依赖，难以独立修改 |\r\n| ⭐ loose coupling | 松耦合 | 模块低依赖，易于替换和测试 |\r\n| ⭐ test coverage | 测试覆盖率 | 被测试覆盖的代码行/分支比例 |\r\n| ⭐ TDD | 测试驱动开发 | 先写测试，再写实现，循环迭代 |\r\n| ⭐ mutation testing | 变异测试 | 故意改坏代码，检验测试是否能检测到 |\r\n| ⭐ integration test | 集成测试 | 测试多个模块协作是否正确 |\r\n| ⭐ end-to-end test | 端到端测试 | 模拟用户真实操作的完整流程测试 |\r\n| ⭐ compiler | 编译器 | 将源代码转为机器码的程序，`gcc / tsc` |\r\n| ⭐ debugger | 调试器 | 断点暂停程序执行的工具，`gdb / Chrome DevTools` |\r\n| emulator | 模拟器 | 在一种系统上模拟另一种系统，`Android emulator` |\r\n| ⭐ kernel | 内核 | 操作系统核心，管理 CPU/内存/设备，`Linux kernel` |\r\n| macro | 宏 | 编译期代码替换/生成，C `#define` / Rust `macro_rules!` |\r\n| ⭐ scheduler | 调度器 | 决定哪个任务/线程下一个运行，`OS scheduler` |\r\n| fifo | 先进先出 | First In First Out，队列的基本原则 |\r\n| lifo | 后进先出 | Last In First Out，栈的基本原则 |\r\n',Ua='# 02 Git & GitHub & 协作（200）\r\n\r\n> 日常使用 Git 版本控制和团队协作时的必备词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ add | 暂存文件 | `git add .` 暂存所有改动 |\r\n| amend | 修改最后一次提交 | `git commit --amend` |\r\n| archive | 打包归档 | `git archive` 打包代码 |\r\n| ⭐ assign | 分配（任务/Issue） | `assign issue to @user` |\r\n| ⭐ author | 作者 | `git log --author=xxx` 按作者筛选 |\r\n| ⭐ base branch | 基础分支 | PR 目标分支，通常为 main |\r\n| ⭐ blame | 追溯行作者 | `git blame file.js` 查看每行作者 |\r\n| ⭐ branch | 分支 | `git branch feature/xxx` 创建分支 |\r\n| ⭐ bug | 缺陷；错误 | `fix bug #123` 修复 Issue 123 |\r\n| ⭐ checkout | 切换分支/恢复文件 | `git checkout main` 切换到 main |\r\n| cherry-pick | 摘取特定提交 | `git cherry-pick <hash>` |\r\n| ⭐ clean | 清理未跟踪文件 | `git clean -fd` 删除未跟踪文件 |\r\n| ⭐ clone | 克隆仓库 | `git clone <url>` 克隆远程仓库 |\r\n| ⭐ close | 关闭（Issue/PR） | `Closes #42` 关联 Issue |\r\n| ⭐ collaborate | 协作 | `collaborate on PR` 协作 PR |\r\n| ⭐ commit | 提交 | `git commit -m "message"` |\r\n| ⭐ conflict | 冲突 | `merge conflict` 合并冲突 |\r\n| ⭐ contribute | 贡献 | `contribute to open source` |\r\n| contributor | 贡献者 | `core contributor` 核心贡献者 |\r\n| ⭐ default branch | 默认分支 | 通常是 main 或 master |\r\n| ⭐ delete branch | 删除分支 | `git branch -d feature/xxx` |\r\n| ⭐ deploy | 部署 | `deploy on push to main` |\r\n| ⭐ diff | 差异；对比 | `git diff` 查看改动差异 |\r\n| ⭐ discard | 丢弃改动 | `git restore file.js` 丢弃改动 |\r\n| ⭐ draft | 草稿 | `draft PR` 草稿状态的 PR |\r\n| ⭐ fetch | 拉取（不合并） | `git fetch origin` 拉取远程信息 |\r\n| ⭐ fix | 修复 | `fix: resolve null pointer` |\r\n| ⭐ fork | 派生仓库 | `fork the repository` 叉仓库 |\r\n| ⭐ hash / SHA | 提交哈希 | `git log` 中的 40 位哈希值 |\r\n| ⭐ head | 当前指针 | `HEAD` 指向当前提交 |\r\n| ⭐ history | 历史记录 | `git log --oneline` 单行历史 |\r\n| ⭐ hook | Git 钩子 | `pre-commit hook` 提交前钩子 |\r\n| hotfix | 热修复分支 | `hotfix/critical-bug` |\r\n| ⭐ ignore | 忽略文件 | `.gitignore` 忽略配置 |\r\n| ⭐ issue | 问题；任务 | `open an issue` 提交 Issue |\r\n| ⭐ label | 标签 | `bug` / `enhancement` / `help wanted` |\r\n| ⭐ latest | 最新的 | `latest commit` 最新提交 |\r\n| ⭐ log | 日志 | `git log` 查看提交历史 |\r\n| ⭐ main / master | 主分支 | 项目主分支名 |\r\n| ⭐ merge | 合并 | `git merge feature/xxx` 合并分支 |\r\n| milestone | 里程碑 | 版本计划中的阶段目标 |\r\n| ⭐ origin | 远程默认别名 | `git push origin main` |\r\n| ⭐ pull | 拉取并合并 | `git pull origin main` |\r\n| ⭐ pull request / PR | 拉取请求 | 请求合并代码的流程 |\r\n| ⭐ push | 推送 | `git push origin feature/xxx` |\r\n| ⭐ rebase | 变基 | `git rebase main` 变基到 main |\r\n| ⭐ release | 发布版本 | `create a release v1.0.0` |\r\n| ⭐ remote | 远程 | `git remote -v` 查看远程地址 |\r\n| ⭐ resolve | 解决（冲突） | `resolve merge conflict` |\r\n| ⭐ review | 代码审查 | `code review` / `request review` |\r\n| ⭐ revert | 撤销提交 | `git revert <hash>` 安全撤销 |\r\n| ⭐ squash | 压缩提交 | `squash commits` 合并多个提交 |\r\n| ⭐ stash | 暂存（临时） | `git stash` 临时保存改动 |\r\n| ⭐ status | 工作区状态 | `git status` 查看文件状态 |\r\n| ⭐ switch | 切换分支 | `git switch main` |\r\n| ⭐ tag | 标签；版本标记 | `git tag v1.0.0` 打版本标签 |\r\n| ⭐ track | 跟踪 | `track remote branch` 跟踪远程分支 |\r\n| ⭐ upstream | 上游 | `upstream repository` 原始仓库 |\r\n| ⭐ workflow | 工作流 | `GitHub Actions workflow` |\r\n| working tree | 工作目录 | 未暂存改动所在位置 |\r\n| ⭐ access token | 访问令牌 | GitHub Personal Access Token |\r\n| ⭐ action | 自动化任务 | `GitHub Actions` workflow 中的 job |\r\n| ⭐ apply | 应用补丁 | `git apply patch.diff` 应用差异文件 |\r\n| ⭐ approval | 审批；批准 | `require approval` PR 需要审批 |\r\n| ⭐ bot | 自动化机器人 | `Dependabot` 依赖自动更新机器人 |\r\n| ⭐ check | 状态检查 | `status check` PR 必须通过的检查 |\r\n| ⭐ ci | 持续集成 | `CI passed` 持续集成通过 |\r\n| ⭐ collision | 哈希碰撞 | `hash collision` 极低概率的哈希冲突 |\r\n| ⭐ comment | 评论；注释 | `leave a comment on PR` 评论 PR |\r\n| ⭐ compare | 比较分支 | `compare branches` / `git diff main..feature` |\r\n| ⭐ convention | 约定；规范 | `commit message convention` 提交规范 |\r\n| ⭐ deprecated | 已废弃的 | `deprecated API` 废弃的接口 |\r\n| ⭐ description | 描述 | `PR description` PR 说明 |\r\n| ⭐ directory | 目录 | `git ls-files` 查看跟踪的目录文件 |\r\n| ⭐ drop | 丢弃 | `git stash drop` 删除某条 stash |\r\n| ⭐ edit | 编辑 | `git commit --edit` 编辑提交信息 |\r\n| ⭐ email | 邮箱配置 | `git config user.email` 设置提交邮箱 |\r\n| ⭐ empty commit | 空提交 | `git commit --allow-empty` 触发 CI |\r\n| ⭐ environment | 环境变量 | CI/CD 中的 `$GITHUB_TOKEN` 等 |\r\n| ⭐ exclude | 排除 | `.gitignore` 中排除特定文件 |\r\n| ⭐ existing | 已有的 | `existing branch` 已存在的分支 |\r\n| ⭐ file | 文件 | `track file` / `untrack file` |\r\n| ⭐ flag | 命令行标志 | `git push --force` 中的 `--force` 标志 |\r\n| ⭐ flow | 工作流模型 | `git flow` 分支管理模型 |\r\n| ⭐ force push | 强制推送 | `git push --force-with-lease` 安全强推 |\r\n| ⭐ format | 日志格式 | `git log --format="%h %s"` |\r\n| ⭐ freeze | 冻结版本 | `freeze dependencies` 锁定依赖版本 |\r\n| ⭐ global | 全局配置 | `git config --global` 全局配置 |\r\n| ⭐ include | 包含 | `.gitattributes` 包含规则 |\r\n| ⭐ index | 暂存区 | `git index` = staging area 暂存区 |\r\n| ⭐ initialize | 初始化 | `git init` 初始化本地仓库 |\r\n| ⭐ integrate | 集成 | `integrate changes` 集成新变更 |\r\n| ⭐ link | 关联 | `link PR to issue` 关联 PR 和 Issue |\r\n| ⭐ lock | 锁定 | `package-lock.json` 依赖锁文件 |\r\n| ⭐ message | 提交信息 | `commit message` 提交说明 |\r\n| ⭐ mirror | 镜像仓库 | `mirror repository` 备份仓库 |\r\n| ⭐ modify | 修改 | `modify file` 修改文件后 git add |\r\n| ⭐ move | 移动/重命名 | `git mv old.js new.js` |\r\n| ⭐ notify | 通知 | `@mention notify` @提及通知成员 |\r\n| ⭐ outdated | 过时的 | `outdated dependency` 依赖需要更新 |\r\n| ⭐ owner | 所有者 | `repo owner` 仓库所有者 |\r\n| ⭐ patch | 补丁文件 | `git format-patch` 生成补丁 |\r\n| ⭐ permission | 权限 | `read/write permission` 仓库读写权限 |\r\n| ⭐ pick | 挑选 | `cherry-pick commit` 挑选提交 |\r\n| ⭐ protected branch | 受保护分支 | main 分支通常设为 protected |\r\n| ⭐ recover | 恢复 | `git reflog` + checkout 恢复丢失提交 |\r\n| ⭐ reference / ref | 引用 | `refs/heads/main` 分支引用路径 |\r\n| ⭐ rename | 重命名 | `git mv` / rename branch |\r\n| ⭐ request changes | 要求修改 | PR review 中的 Request Changes |\r\n| ⭐ revision | 版本号；修订 | `git rev-parse HEAD` 获取当前版本 |\r\n| ⭐ rollback | 回滚 | `git revert` / `git reset` 回滚代码 |\r\n| ⭐ scope | 范围 | `feat(scope): message` 提交范围 |\r\n| ⭐ sign | 签名 | `git commit -S` GPG 签名提交 |\r\n| ⭐ skip | 跳过 | `[skip ci]` 跳过 CI 触发 |\r\n| ⭐ source | 来源分支 | `source branch` PR 的来源分支 |\r\n| ⭐ stage | 暂存 | `git add` = stage changes |\r\n| ⭐ submodule | 子模块 | `git submodule update` |\r\n| ⭐ sync | 同步 | `sync fork` 同步上游变更 |\r\n| ⭐ target | 目标分支 | `target branch` PR 合入的分支 |\r\n| ⭐ test | 测试 | `run tests in CI` CI 中自动测试 |\r\n| ⭐ token | 令牌 | `GITHUB_TOKEN` CI 中的权限令牌 |\r\n| ⭐ transfer | 转移 | `transfer ownership` 转移仓库所有权 |\r\n| ⭐ undo | 撤销 | `git reset HEAD~1` 撤销最近提交 |\r\n| ⭐ untrack | 取消追踪 | `git rm --cached file` 停止跟踪文件 |\r\n| ⭐ update | 更新 | `git pull` 更新本地分支 |\r\n| ⭐ validate | 验证 | `validate commit message` 校验提交信息 |\r\n| ⭐ version | 版本 | `semantic versioning` 语义化版本 v1.2.3 |\r\n| ⭐ visibility | 可见性 | `public / private / internal` 仓库可见性 |\r\n| ⭐ watcher | 关注者 | `watch repository` 关注仓库动态 |\r\n| ⭐ backlog | 待办列表 | `product backlog` 产品待办事项 |\r\n| ⭐ breaking change | 破坏性变更 | 需要升级主版本号的不兼容变更 |\r\n| ⭐ build artifact | 构建产物 | CI 产生的可部署文件，如 `.jar` `.zip` |\r\n| ⭐ changelog | 变更日志 | `CHANGELOG.md` 每次发布的变更记录 |\r\n| ⭐ ci pipeline | CI 流水线 | push 后自动触发的构建/测试流程 |\r\n| ⭐ code freeze | 代码冻结 | 发布前禁止合入新功能 |\r\n| ⭐ code owner | 代码负责人 | `CODEOWNERS` 文件指定文件审查人 |\r\n| ⭐ code style | 代码风格 | `.editorconfig` / `prettier` 统一风格 |\r\n| ⭐ commit convention | 提交规范 | `feat:` `fix:` `chore:` 前缀规范 |\r\n| ⭐ conventional commits | 约定式提交 | `feat(scope): desc` 标准化提交格式 |\r\n| ⭐ dependency update | 依赖更新 | `Dependabot` 自动提 PR 更新依赖 |\r\n| ⭐ deploy key | 部署密钥 | 专用于 CI/CD 的 SSH 公钥 |\r\n| ⭐ diverge | 分叉 | 两分支各有对方没有的提交 |\r\n| ⭐ fast-forward | 快进合并 | 无需新 commit 直接移动指针 |\r\n| ⭐ feature flag | 功能开关 | 通过配置控制功能是否启用，不改代码 |\r\n| ⭐ git bisect | 二分查找提交 | `git bisect` 定位引入 bug 的提交 |\r\n| ⭐ git blame | 逐行追责 | `git blame file` 查看每行最后修改者 |\r\n| ⭐ git flow | Git Flow 模型 | main/develop/feature/release/hotfix 分支模型 |\r\n| ⭐ git grep | 代码搜索 | `git grep "keyword"` 在仓库中搜索字符串 |\r\n| ⭐ git reflog | 操作日志 | `git reflog` 找回误删的分支/提交 |\r\n| ⭐ kanban | 看板 | GitHub Projects 看板式任务管理 |\r\n| ⭐ lgtm | 审查通过 | "Looks Good To Me" 常见 PR 评论 |\r\n| ⭐ lock file | 锁文件 | `package-lock.json` 固定依赖版本 |\r\n| ⭐ maintainer | 维护者 | 负责合并 PR 和发版的仓库成员 |\r\n| ⭐ merge strategy | 合并策略 | merge commit / squash / rebase 三种方式 |\r\n| ⭐ monorepo | 单仓库多项目 | 多个包/服务放在同一 Git 仓库 |\r\n| ⭐ nit | 细节改进意见 | `nit: rename variable` PR 中的小建议 |\r\n| ⭐ open source | 开源 | 开放源代码，允许社区贡献 |\r\n| ⭐ outdated | 过时 | `git status` 提示本地落后远程 |\r\n| ⭐ pr template | PR 模板 | `.github/pull_request_template.md` |\r\n| ⭐ pre-commit | 提交前钩子 | `pre-commit` 工具在提交前自动检查 |\r\n| ⭐ pre-release | 预发布 | `v1.0.0-beta.1` 语义化版本预发布标记 |\r\n| ⭐ preview | 预览 | 部署预览环境，可在合并前验证效果 |\r\n| ⭐ release candidate | 发布候选 | `v2.0.0-rc.1` 接近正式发布的版本 |\r\n| ⭐ release notes | 发布说明 | 描述新版本变更的文档 |\r\n| ⭐ roadmap | 路线图 | 产品或项目的未来规划 |\r\n| ⭐ rollout | 分批发布 | 逐步扩大新版本的用户比例 |\r\n| ⭐ scrum | Scrum 敏捷 | 以 sprint 为单位的敏捷开发框架 |\r\n| ⭐ semantic versioning | 语义化版本 | `MAJOR.MINOR.PATCH` 版本号规范 |\r\n| ⭐ sprint | 迭代冲刺 | 固定时长（通常两周）的开发周期 |\r\n| ⭐ staging | 预发布环境 | 与生产环境一致的测试环境 |\r\n| ⭐ trunk-based | 主干开发 | 所有人直接向 main 分支频繁提交 |\r\n| ⭐ version bump | 版本号递增 | `1.0.0 → 1.1.0` 发布前更新版本号 |\r\n| ⭐ wip | 进行中 | `WIP:` / `[WIP]` 标记未完成的 PR |\r\n| ⭐ workspace | 工作区 | monorepo 中的子包，`npm workspaces` |\r\n| ⭐ bisect | 二分定位 bug | `git bisect start/good/bad` |\r\n| ⭐ branch naming | 分支命名 | `feat/` `fix/` `chore/` 前缀规范 |\r\n| ⭐ branch protection rule | 分支保护规则 | 限制直接 push，要求 PR 审查 |\r\n| ⭐ ci badge | CI 徽章 | README 中显示构建状态的小图标 |\r\n| ⭐ code coverage | 代码覆盖率 | CI 中自动计算并报告测试覆盖率 |\r\n| ⭐ commit lint | 提交信息检查 | `commitlint` 校验提交信息格式 |\r\n| ⭐ commit SHA | 提交哈希 | 唯一标识一次提交的 40 位哈希 |\r\n| ⭐ continuous delivery | 持续交付 | CD：代码随时可发布到生产 |\r\n| ⭐ continuous deployment | 持续部署 | 通过 CI 自动部署到生产环境 |\r\n| ⭐ dependency lock | 依赖锁定 | `yarn.lock` / `package-lock.json` |\r\n| ⭐ devops | 开发运维一体化 | 开发与运维协同，CI/CD 核心理念 |\r\n| ⭐ environment variable | 环境变量 | `.env` 文件 / GitHub Secrets |\r\n| ⭐ feature branch | 功能分支 | `feat/login` 独立开发新功能的分支 |\r\n| ⭐ git attributes | Git 属性 | `.gitattributes` 控制行尾/merge 策略 |\r\n| ⭐ git hooks | Git 钩子 | 提交/推送等操作触发的脚本 |\r\n| ⭐ issue template | Issue 模板 | `.github/ISSUE_TEMPLATE/` 引导提 issue |\r\n| ⭐ maintainability | 可维护性 | 代码易于理解和修改的程度 |\r\n| ⭐ pull request review | PR 评审 | 合并前由同事审查代码的流程 |\r\n| ⭐ release branch | 发布分支 | 从 develop 切出，专门用于发版准备 |\r\n| ⭐ squash merge | 压缩合并 | 将多个 commit 压缩为一个再合入 |\r\n| ⭐ test suite | 测试套件 | CI 中运行的全套自动化测试 |\r\n| ⭐ three-way merge | 三路合并 | Git 合并时用两个分支和公共祖先对比 |\r\n| ⭐ triage | 问题分类 | 对 Issue 按严重程度/类型打标签排序 |\r\n',Ka='# 03 前端（HTML / CSS / JS / 浏览器）（300）\r\n\r\n> 前端开发、调试浏览器、阅读 MDN 文档时的核心词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ align | 对齐 | `align-items: center` 居中对齐 |\r\n| ⭐ animation | 动画 | `CSS animation` / `keyframe animation` |\r\n| ⭐ async | 异步脚本加载 | `<script async>` 异步加载 |\r\n| ⭐ attribute | HTML 属性 | `class`, `id`, `href` 等 HTML 属性 |\r\n| ⭐ bundle | 打包 | `webpack bundle` 打包产物 |\r\n| ⭐ callback | 回调 | `addEventListener callback` 事件回调 |\r\n| ⭐ canvas | 画布元素 | `<canvas>` 绘图元素 |\r\n| ⭐ cascade | 层叠（CSS） | CSS = Cascading Style Sheets |\r\n| ⭐ class | 类名；CSS 类 | `.class-name` CSS 选择器 |\r\n| ⭐ click | 点击事件 | `addEventListener(\'click\', ...)` |\r\n| ⭐ component | 组件 | `Vue/React component` |\r\n| ⭐ console | 控制台 | `console.log()` 打印调试 |\r\n| ⭐ cookie | Cookie | `document.cookie` 读取 Cookie |\r\n| ⭐ cors | 跨域资源共享 | `CORS error` 跨域错误 |\r\n| ⭐ cursor | 鼠标指针 | `cursor: pointer` 手型指针 |\r\n| ⭐ defer | 延迟加载脚本 | `<script defer>` 延迟执行 |\r\n| ⭐ dispatch | 派发（事件/action） | `dispatch event` / `store.dispatch()` |\r\n| ⭐ dom | 文档对象模型 | `DOM manipulation` DOM 操作 |\r\n| ⭐ element | 元素 | `HTML element` / `DOM element` |\r\n| ⭐ emit | 触发自定义事件 | `emit(\'click\', payload)` Vue 事件 |\r\n| ⭐ event | 事件 | `event.preventDefault()` 阻止默认 |\r\n| ⭐ fallback | 降级方案 | `fallback font` 备用字体 |\r\n| ⭐ fetch | 网络请求 | `fetch(\'/api/data\')` 发送请求 |\r\n| ⭐ flex | 弹性布局 | `display: flex` 启用 Flexbox |\r\n| ⭐ focus | 聚焦 | `:focus` 伪类样式 |\r\n| ⭐ font | 字体 | `font-size` / `font-family` |\r\n| ⭐ form | 表单 | `<form>` 表单元素 |\r\n| ⭐ grid | 网格布局 | `display: grid` CSS Grid |\r\n| ⭐ handler | 处理函数 | `event handler` 事件处理函数 |\r\n| ⭐ hash | 哈希路由 | `/#/route` 哈希路由 |\r\n| ⭐ header | 头部；请求头 | `<header>` 语义标签 / `HTTP header` |\r\n| ⭐ hidden | 隐藏 | `display: none` / `visibility: hidden` |\r\n| ⭐ hover | 悬停 | `:hover` 鼠标悬停伪类 |\r\n| ⭐ html | 超文本标记语言 | `<!DOCTYPE html>` 文档声明 |\r\n| ⭐ hydration | 注水（SSR） | `hydrate` 服务端渲染后客户端激活 |\r\n| ⭐ inherit | 继承（CSS） | `color: inherit` 继承父元素颜色 |\r\n| ⭐ inline | 行内的 | `inline element` 行内元素 |\r\n| ⭐ input | 输入框 | `<input type="text">` |\r\n| ⭐ javascript / js | JavaScript | 前端核心脚本语言 |\r\n| ⭐ jsx | JSX 语法 | React 中 JS + HTML 的混合语法 |\r\n| ⭐ keyframe | 关键帧 | `@keyframes animation` 关键帧动画 |\r\n| ⭐ lazy | 懒加载 | `loading="lazy"` 图片懒加载 |\r\n| ⭐ layout | 布局 | `page layout` 页面布局 |\r\n| ⭐ lifecycle | 生命周期 | `component lifecycle` 组件生命周期 |\r\n| ⭐ listener | 监听器 | `event listener` 事件监听器 |\r\n| ⭐ local storage | 本地存储 | `localStorage.setItem(key, val)` |\r\n| ⭐ margin | 外边距 | `margin: 0 auto` 水平居中 |\r\n| ⭐ media query | 媒体查询 | `@media (max-width: 768px)` 响应式 |\r\n| ⭐ middleware | 中间件 | Redux middleware / Express middleware |\r\n| ⭐ mount | 挂载 | `component mounted` 组件挂载 |\r\n| ⭐ mutation | 变更（状态） | `Vuex mutation` / `DOM mutation` |\r\n| ⭐ navigate | 导航 | `navigate to route` 路由跳转 |\r\n| ⭐ node | 节点 | `DOM node` / `Node.js` |\r\n| ⭐ observer | 观察者 | `IntersectionObserver` 交叉观察器 |\r\n| ⭐ overflow | 溢出 | `overflow: hidden` 隐藏溢出内容 |\r\n| ⭐ padding | 内边距 | `padding: 16px` 内边距 |\r\n| ⭐ parent | 父元素 | `parent element` 父节点 |\r\n| ⭐ pixel / px | 像素 | `font-size: 16px` |\r\n| ⭐ position | 定位 | `position: absolute` 绝对定位 |\r\n| ⭐ promise | Promise 对象 | `Promise.all([...])` 并行请求 |\r\n| ⭐ prop | 属性（组件传参） | `<Component prop={value}>` |\r\n| ⭐ proxy | 代理 | `Proxy object` / `devServer proxy` |\r\n| ⭐ reactive | 响应式的 | `reactive data` Vue/React 响应式 |\r\n| ⭐ reducer | 状态处理函数 | Redux reducer 纯函数 |\r\n| ⭐ ref | 引用 | `useRef()` / `$refs` |\r\n| ⭐ render | 渲染 | `server-side render` 服务端渲染 |\r\n| ⭐ responsive | 响应式设计 | `responsive layout` 自适应布局 |\r\n| ⭐ route | 路由 | `react-router` / `vue-router` |\r\n| ⭐ selector | 选择器 | `CSS selector` / `querySelector` |\r\n| ⭐ session storage | 会话存储 | `sessionStorage.getItem(key)` |\r\n| ⭐ shadow | 阴影；Shadow DOM | `box-shadow` / `Shadow DOM` |\r\n| ⭐ slot | 插槽 | `<slot>` Vue/Web Components 插槽 |\r\n| ⭐ state | 状态 | `component state` / `useState()` |\r\n| ⭐ style | 样式 | `inline style` / `CSS stylesheet` |\r\n| ⭐ svg | 可缩放矢量图 | `<svg>` 矢量图形元素 |\r\n| ⭐ throttle | 节流 | `throttle function` 限制函数调用频率 |\r\n| ⭐ transition | 过渡动画 | `transition: all 0.3s ease` |\r\n| ⭐ typescript / ts | TypeScript | JS 的类型超集 |\r\n| ⭐ unmount | 卸载 | `component unmounted` 组件卸载 |\r\n| ⭐ virtual dom | 虚拟 DOM | React/Vue 的 diff 优化核心 |\r\n| ⭐ viewport | 视口 | `<meta name="viewport">` 移动端适配 |\r\n| ⭐ watch | 侦听（数据变化） | `watch(() => state.count, ...)` Vue |\r\n| ⭐ z-index | 堆叠顺序 | `z-index: 999` 置于最上层 |\r\n| ⭐ abort | 中止请求 | `AbortController` 取消 fetch 请求 |\r\n| ⭐ accessibility / a11y | 无障碍访问 | `aria-label` / `role` 无障碍属性 |\r\n| ⭐ anchor | 锚点；链接 | `<a href>` 锚点元素 |\r\n| ⭐ append | 追加子元素 | `element.appendChild()` |\r\n| ⭐ apply | 应用样式 | `apply styles` / `Function.apply()` |\r\n| ⭐ arrow function | 箭头函数 | `const fn = () => {}` ES6 语法 |\r\n| ⭐ base url | 基础路径 | `<base href="/">` / `baseURL` 配置 |\r\n| ⭐ body | 页面主体 | `<body>` 标签 / `document.body` |\r\n| ⭐ breakpoint | 断点；响应式断点 | 调试断点 / `@media breakpoint` |\r\n| ⭐ button | 按钮 | `<button type="submit">` |\r\n| ⭐ cache | 浏览器缓存 | `Cache-Control` / Service Worker cache |\r\n| ⭐ child | 子元素 | `childNodes` / `children` |\r\n| ⭐ clone | 克隆节点 | `element.cloneNode(true)` 深克隆 |\r\n| ⭐ closure | 闭包 | `closure` 捕获外部变量的函数 |\r\n| ⭐ computed | 计算属性 | `computed property` Vue/React 计算值 |\r\n| ⭐ conditional | 条件渲染 | `v-if` / `{condition && <Comp>}` |\r\n| ⭐ content | 内容 | `content: ""` CSS 伪元素内容 |\r\n| ⭐ context | 上下文 | `React Context` / `canvas context` |\r\n| ⭐ control | 控件 | `form control` 表单控件 |\r\n| ⭐ convert | 转换 | `convert px to rem` 单位转换 |\r\n| ⭐ custom | 自定义 | `custom element` / `custom hook` |\r\n| ⭐ data | 数据绑定 | `data-*` 自定义数据属性 |\r\n| ⭐ debug | 调试 | `Chrome DevTools` 浏览器调试工具 |\r\n| ⭐ declaration | 声明 | `CSS declaration` `color: red;` |\r\n| ⭐ default | 默认值 | `default export` / `default props` |\r\n| ⭐ define | 定义 | `defineComponent()` Vue 3 定义组件 |\r\n| ⭐ dependency | 依赖 | `useEffect dependency array` 依赖数组 |\r\n| ⭐ destructure | 解构 | `const { a, b } = obj` 解构赋值 |\r\n| ⭐ display | 显示属性 | `display: block / flex / grid / none` |\r\n| ⭐ drag | 拖拽 | `drag and drop API` 拖拽接口 |\r\n| ⭐ dynamic | 动态的 | `dynamic import()` 动态导入 |\r\n| ⭐ effect | 副作用 | `useEffect()` React 副作用钩子 |\r\n| ⭐ encapsulate | 封装 | `encapsulate logic` 封装逻辑到组件 |\r\n| ⭐ entry | 入口 | `webpack entry` 打包入口文件 |\r\n| ⭐ error boundary | 错误边界 | React `ErrorBoundary` 组件 |\r\n| ⭐ export | 导出 | `export default` / `named export` |\r\n| ⭐ extend | 继承/扩展 | `extend base class` / `extend styles` |\r\n| ⭐ filter | 滤镜；过滤 | `filter: blur(4px)` / `Array.filter()` |\r\n| ⭐ fixed | 固定定位 | `position: fixed` 固定在视口 |\r\n| ⭐ frame | 帧；框架 | `requestAnimationFrame()` 动画帧 |\r\n| ⭐ function | 函数 | `arrow function` / `named function` |\r\n| ⭐ global | 全局 | `window` 对象 / `global scope` |\r\n| ⭐ guard | 守卫；拦截 | `route guard` 路由守卫 |\r\n| ⭐ height | 高度 | `height: 100vh` 视口高度 |\r\n| ⭐ hook | 钩子 | `useState` / `useEffect` React hook |\r\n| ⭐ icon | 图标 | `<link rel="icon">` favicon |\r\n| ⭐ id | 唯一标识 | `#id` CSS 选择器 / `getElementById` |\r\n| ⭐ image | 图片 | `<img src alt>` / `background-image` |\r\n| ⭐ import | 导入 | `import React from \'react\'` |\r\n| ⭐ index | 入口文件；索引 | `index.html` / `index.js` |\r\n| ⭐ instance | 实例 | `Vue instance` / `new Date()` |\r\n| ⭐ interactive | 交互的 | `interactive element` 可交互元素 |\r\n| ⭐ iterate | 遍历 | `forEach` / `map` 遍历数组 |\r\n| ⭐ key | 唯一键 | `key={item.id}` React 列表 key |\r\n| ⭐ link | 链接 | `<link rel="stylesheet">` 引入 CSS |\r\n| ⭐ list | 列表 | `<ul>/<ol>` / render list |\r\n| ⭐ memo | 记忆化 | `React.memo()` / `useMemo()` 避免重渲 |\r\n| ⭐ method | 方法 | `Array method` `map/filter/reduce` |\r\n| ⭐ modal | 弹窗 | `modal dialog` 模态对话框 |\r\n| ⭐ module | 模块 | `ES module` `import/export` |\r\n| ⭐ namespace | 命名空间 | `CSS namespace` / SVG namespace |\r\n| ⭐ opacity | 透明度 | `opacity: 0.5` 半透明 |\r\n| ⭐ optimize | 优化 | `optimize bundle size` 优化包体积 |\r\n| ⭐ output | 输出 | `webpack output` 构建输出目录 |\r\n| ⭐ override | 覆盖样式 | `override default styles` |\r\n| ⭐ plugin | 插件 | `webpack plugin` / `vite plugin` |\r\n| ⭐ polyfill | 兼容填充 | 为旧浏览器补充新 API 的代码 |\r\n| ⭐ preload | 预加载 | `<link rel="preload">` 预加载资源 |\r\n| ⭐ prototype | 原型 | `Array.prototype.map` |\r\n| ⭐ pseudo | 伪类/伪元素 | `::before` / `:nth-child()` |\r\n| ⭐ query | 查询 | `document.querySelector()` |\r\n| ⭐ queue | 微任务队列 | `microtask queue` Promise 回调队列 |\r\n| ⭐ radio | 单选框 | `<input type="radio">` |\r\n| ⭐ re-render | 重新渲染 | `avoid unnecessary re-renders` |\r\n| ⭐ relative | 相对定位 | `position: relative` |\r\n| ⭐ remove | 移除元素 | `element.remove()` / `removeEventListener` |\r\n| ⭐ reset | 重置样式 | `CSS reset` / `normalize.css` |\r\n| ⭐ resolve | 解析路径 | `resolve alias` / `Promise.resolve()` |\r\n| ⭐ scope | 样式作用域 | `scoped CSS` Vue 单文件组件样式隔离 |\r\n| ⭐ script | 脚本标签 | `<script src="...">` |\r\n| ⭐ scroll | 滚动 | `window.scrollTo()` / `overflow-y: scroll` |\r\n| ⭐ semantic | 语义化 | `semantic HTML` `<header>/<main>/<footer>` |\r\n| ⭐ sibling | 兄弟元素 | `adjacent sibling selector` `+` |\r\n| ⭐ size | 尺寸 | `font-size` / `box-sizing: border-box` |\r\n| ⭐ source map | 源码映射 | 调试时映射回源码位置 |\r\n| ⭐ specificity | 优先级（CSS） | `id > class > tag` 优先级规则 |\r\n| ⭐ spread | 展开运算 | `{...obj}` / `[...arr]` 扩展运算符 |\r\n| ⭐ static | 静态资源 | `static assets` 图片/字体等静态文件 |\r\n| ⭐ store | 状态仓库 | `Vuex store` / `Redux store` |\r\n| ⭐ string | 字符串 | `template string` 模板字符串 |\r\n| ⭐ submit | 提交表单 | `form.submit()` / `onSubmit` |\r\n| ⭐ table | 表格 | `<table><tr><td>` 表格元素 |\r\n| ⭐ template | 模板 | `<template>` / HTML template literal |\r\n| ⭐ text | 文本 | `textContent` / `innerText` |\r\n| ⭐ toggle | 切换 | `classList.toggle(\'active\')` |\r\n| ⭐ tooltip | 提示气泡 | 鼠标悬停时显示的说明文字 |\r\n| ⭐ transform | 变换 | `transform: rotate(45deg)` |\r\n| ⭐ tree shaking | 摇树优化 | 删除未使用的代码，减小包体积 |\r\n| ⭐ trigger | 触发 | `trigger click event` |\r\n| ⭐ type | 类型属性 | `<input type="email">` / TypeScript type |\r\n| ⭐ update | 更新 | `update DOM` / `component update` |\r\n| ⭐ url | 资源路径 | `fetch(url)` / `background-image: url()` |\r\n| ⭐ validate | 表单验证 | `validate input` 验证用户输入 |\r\n| ⭐ variable | CSS 变量 | `--primary-color: #007bff` |\r\n| ⭐ visible | 可见的 | `visibility: visible` / `v-show` |\r\n| ⭐ web component | Web 组件 | 原生自定义组件标准 |\r\n| ⭐ width | 宽度 | `width: 100%` / `max-width: 1200px` |\r\n| ⭐ worker | 工作线程 | `Web Worker` 后台线程处理 |\r\n| ⭐ wrapper | 包裹元素 | `<div class="wrapper">` 容器 div |\r\n| ⭐ BEM | CSS 命名规范 | `block__element--modifier` 命名方法论 |\r\n| ⭐ blob | 二进制数据对象 | `Blob` 处理文件/图片二进制数据 |\r\n| ⭐ border-radius | 圆角 | `border-radius: 8px` 圆角样式 |\r\n| ⭐ box model | 盒模型 | `content + padding + border + margin` |\r\n| ⭐ broadcast channel | 广播通道 | `BroadcastChannel` 跨标签页通信 |\r\n| ⭐ CDN | 内容分发网络 | 通过边缘节点加速静态资源加载 |\r\n| ⭐ critical path | 关键渲染路径 | 影响首屏渲染的 HTML/CSS/JS 加载顺序 |\r\n| ⭐ CSS-in-JS | 用 JS 写 CSS | `styled-components` / `emotion` |\r\n| ⭐ custom hook | 自定义 Hook | `useLocalStorage()` 封装逻辑复用 |\r\n| ⭐ dark mode | 暗黑模式 | `prefers-color-scheme: dark` 媒体查询 |\r\n| ⭐ debounce | 防抖 | 最后一次触发后延迟执行，常用于搜索框 |\r\n| ⭐ devtools | 开发者工具 | Chrome DevTools F12 调试面板 |\r\n| ⭐ drag and drop | 拖拽操作 | `draggable` 属性 / HTML5 DnD API |\r\n| ⭐ error handling | 错误处理 | `try-catch` / `ErrorBoundary` |\r\n| ⭐ event bubbling | 事件冒泡 | 事件从子元素向父元素传播 |\r\n| ⭐ event delegation | 事件委托 | 父元素监听代替子元素监听，提高性能 |\r\n| ⭐ event propagation | 事件传播 | capture → target → bubble 三阶段 |\r\n| ⭐ form validation | 表单验证 | `required` / `pattern` / `minlength` |\r\n| ⭐ full-stack | 全栈 | 同时负责前端和后端开发 |\r\n| ⭐ i18n | 国际化 | `i18n` = internationalization，多语言支持 |\r\n| ⭐ IndexedDB | 浏览器数据库 | 浏览器内置的大容量键值存储 |\r\n| ⭐ infinite scroll | 无限滚动 | 滚动到底部自动加载更多数据 |\r\n| ⭐ intersection observer | 交叉观察器 | 检测元素是否进入视口，实现懒加载 |\r\n| ⭐ JSON | 数据格式 | `JSON.parse()` / `JSON.stringify()` |\r\n| ⭐ loading state | 加载状态 | `isLoading` 控制加载动画显示 |\r\n| ⭐ localization / l10n | 本地化 | 翻译文本 + 格式化日期/货币 |\r\n| ⭐ memo / memoize | 记忆化 | `useMemo` / `React.memo` 避免重复计算 |\r\n| ⭐ microinteraction | 微交互 | 按钮点击反馈、加载动画等细节交互 |\r\n| ⭐ minification | 代码压缩 | 删除空格/注释/缩短变量名，减小体积 |\r\n| ⭐ module bundler | 模块打包工具 | `Webpack` / `Vite` / `Rollup` |\r\n| ⭐ npm / yarn / pnpm | 包管理器 | `npm install` / `pnpm add` |\r\n| ⭐ offline | 离线 | `offline-first` / Service Worker 缓存 |\r\n| ⭐ performance | 性能 | `Lighthouse` 分析页面性能得分 |\r\n| ⭐ placeholder | 占位符 | `<input placeholder="请输入">` |\r\n| ⭐ prefetch | 预获取 | `<link rel="prefetch">` 预加载下一页 |\r\n| ⭐ prerender | 预渲染 | 构建时生成静态 HTML，提升首屏速度 |\r\n| ⭐ progressive enhancement | 渐进增强 | 基础功能先行，再为高级浏览器增强 |\r\n| ⭐ query string | 查询字符串 | `?key=value&page=1` URL 参数 |\r\n| ⭐ reflow | 回流 | DOM 改变导致重新计算布局，性能消耗大 |\r\n| ⭐ repaint | 重绘 | 样式改变但不影响布局时触发 |\r\n| ⭐ render blocking | 渲染阻塞 | CSS/JS 文件阻止浏览器渲染页面 |\r\n| ⭐ render props | 渲染属性 | 通过 prop 传递渲染函数的组件复用模式 |\r\n| ⭐ service worker | 服务工作线程 | 拦截网络请求，实现离线缓存和推送通知 |\r\n| ⭐ SPA | 单页应用 | Single Page Application，路由不刷新页面 |\r\n| ⭐ SSG | 静态站点生成 | Static Site Generation，构建时生成 HTML |\r\n| ⭐ SSR | 服务端渲染 | Server-Side Rendering，服务器返回完整 HTML |\r\n| ⭐ text overflow | 文本溢出 | `overflow: hidden; text-overflow: ellipsis` |\r\n| ⭐ time to interactive | 可交互时间 | TTI：页面变为完全可交互的时间指标 |\r\n| ⭐ tree shaking | 摇树优化 | 打包时删除未使用的代码 |\r\n| ⭐ UX | 用户体验 | User Experience，设计和交互质量 |\r\n| ⭐ Vite | 前端构建工具 | 基于 ESM 的极速开发服务器 |\r\n| ⭐ web storage | Web 存储 | `localStorage` + `sessionStorage` |\r\n| ⭐ webpack | 模块打包器 | 将模块打包成浏览器可用的文件 |\r\n| ⭐ XHR | XMLHttpRequest | 传统 Ajax 请求方式，已被 `fetch` 替代 |\r\n| ⭐ accessibility tree | 无障碍树 | 浏览器为辅助技术（读屏器）生成的树 |\r\n| ⭐ code splitting | 代码分割 | 按需加载，减小初始包体积 |\r\n| ⭐ composable | 可组合函数 | Vue 3 `useXxx()` 逻辑复用单元 |\r\n| ⭐ content security policy | 内容安全策略 | `CSP` HTTP 头，防止 XSS 攻击 |\r\n| ⭐ cross-origin | 跨域 | 协议/域名/端口任一不同即为跨域 |\r\n| ⭐ flex-wrap | 弹性换行 | `flex-wrap: wrap` 超出宽度时换行 |\r\n| ⭐ fragment | 片段 | `<>...</>` React Fragment 不生成 DOM |\r\n| ⭐ hydrate | 激活 | SSR 后客户端接管 DOM 并绑定事件 |\r\n| ⭐ named slot | 具名插槽 | `<slot name="header">` Vue 具名插槽 |\r\n| ⭐ paint | 绘制 | 浏览器将像素绘制到屏幕的过程 |\r\n| ⭐ portal | 传送门 | `ReactDOM.createPortal` 渲染到父组件外 |\r\n| ⭐ provide / inject | 依赖注入 | Vue `provide/inject` 跨层级传值 |\r\n| ⭐ pure component | 纯组件 | `PureComponent` / `memo` 避免无效渲染 |\r\n| ⭐ runtime error | 运行时错误 | 运行时抛出的错误，如 `TypeError` |\r\n| ⭐ signal | 响应式信号 | `Solid.js` / `Angular` 中的细粒度响应式 |\r\n| ⭐ suspense | 异步等待 | `React Suspense` 等待异步组件加载 |\r\n| ⭐ SWR | 过期重新请求 | Stale-While-Revalidate 数据请求策略 |\r\n| ⭐ two-way binding | 双向绑定 | `v-model` 表单元素与数据自动同步 |\r\n| ⭐ unit em / rem | 相对单位 | `1rem = 16px`；`em` 相对父元素字号 |\r\n| ⭐ web vitals | 网页性能指标 | LCP / FID / CLS Google 核心性能指标 |\r\n| ⭐ async component | 异步组件 | `defineAsyncComponent()` 按需加载组件 |\r\n| ⭐ atomic design | 原子设计 | atoms → molecules → organisms 组件层次 |\r\n| ⭐ browser compatibility | 浏览器兼容性 | `caniuse.com` 查询 API 支持情况 |\r\n| ⭐ canvas API | Canvas 接口 | `ctx.fillRect()` 绘制 2D 图形 |\r\n| ⭐ chunk | 代码块 | `dynamic import` 分割出的懒加载块 |\r\n| ⭐ client-side rendering | 客户端渲染 | CSR：浏览器下载 JS 后渲染页面 |\r\n| ⭐ component library | 组件库 | `Ant Design` / `Element Plus` / `Shadcn` |\r\n| ⭐ CSS modules | CSS 模块 | `.module.css` 自动生成唯一类名，避免冲突 |\r\n| ⭐ custom directive | 自定义指令 | Vue `v-focus` 等自定义 DOM 操作指令 |\r\n| ⭐ data fetching | 数据请求 | `SWR` / `React Query` 数据获取策略 |\r\n| ⭐ design system | 设计系统 | 统一的组件规范、色彩、间距、字体规则 |\r\n| ⭐ disabled | 禁用状态 | `disabled` 属性禁用表单控件 |\r\n| ⭐ DOM reconciliation | DOM 协调 | React/Vue 通过 diff 算法最小化 DOM 更新 |\r\n| ⭐ drop zone | 放置区 | `dragover` + `drop` 事件实现拖放区域 |\r\n| ⭐ dynamic styles | 动态样式 | `:class` / `style` 绑定动态计算的样式 |\r\n| ⭐ error page | 错误页 | 404/500 页面 / React `errorElement` |\r\n| ⭐ fetch interceptor | 请求拦截器 | `axios interceptors` 统一处理请求/响应 |\r\n| ⭐ file upload | 文件上传 | `<input type="file">` / `FormData` |\r\n| ⭐ first contentful paint | 首次内容绘制 | FCP：页面首次渲染有效内容的时间 |\r\n| ⭐ focus trap | 焦点陷阱 | 模态框内限制 Tab 焦点循环，无障碍要求 |\r\n| ⭐ gesture | 手势 | `touch / swipe / pinch` 移动端手势 |\r\n| ⭐ global state | 全局状态 | `Pinia` / `Zustand` / `Redux` |\r\n| ⭐ HMR | 热模块替换 | Hot Module Replacement，保留状态更新代码 |\r\n| ⭐ HTTP/2 | HTTP 第二版 | 多路复用，减少请求延迟 |\r\n| ⭐ i18n key | 国际化键值 | `t(\'common.save\')` 翻译函数调用 |\r\n| ⭐ image optimization | 图片优化 | WebP 格式 / `srcset` 响应式图片 |\r\n| ⭐ import map | 导入映射 | 浏览器原生模块路径映射，无需打包 |\r\n| ⭐ input mask | 输入掩码 | 限制输入格式，如手机号 `138-xxxx-xxxx` |\r\n| ⭐ lazy component | 懒加载组件 | `React.lazy()` + `Suspense` 按需加载 |\r\n| ⭐ loading skeleton | 骨架屏 | 内容加载前显示的灰色占位样式 |\r\n| ⭐ long task | 长任务 | 超过 50ms 的 JS 任务，阻塞主线程 |\r\n',Wa='# 04 后端 & 服务\r\n\r\n> 后端开发、API 设计、服务架构、异步编程、安全相关词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ ack / nack | 确认 / 拒绝消息 | `message ack` 消费者告知已处理；`nack` 处理失败退回 |\r\n| ⭐ async / await | 异步 / 等待 | `async function fetchData()` 非阻塞执行 |\r\n| ⭐ authentication | 认证 | `JWT authentication` JWT 认证 |\r\n| ⭐ authorization | 授权 | `role-based authorization` 基于角色授权 |\r\n| ⭐ backoff | 退避 | `exponential backoff` 指数级延迟重试，避免雪崩 |\r\n| ⭐ backpressure | 背压 | 上游速率超过下游时的流量控制机制 |\r\n| ⭐ broker | 消息代理 | `Kafka broker` 消息路由和存储节点 |\r\n| ⭐ cache | 缓存 | `Redis cache` Redis 缓存 |\r\n| ⭐ callback | 回调函数 | `callback hell` 嵌套回调问题 |\r\n| ⭐ circuit breaker | 熔断器 | 服务故障时快速失败，防止级联崩溃 |\r\n| ⭐ consumer | 消费者 | `consumer group` 消费消息队列的服务 |\r\n| ⭐ controller | 控制器 | `MVC controller` 处理 HTTP 请求的控制器 |\r\n| ⭐ cors | 跨域资源共享 | `CORS policy` 跨域策略，允许指定来源 |\r\n| ⭐ cqrs | 命令查询职责分离 | 读写分离的架构模式 |\r\n| ⭐ csrf | 跨站请求伪造 | `CSRF token` 表单令牌防伪造攻击 |\r\n| ⭐ dashboard | 仪表板 | `Grafana dashboard` 实时展示系统指标 |\r\n| ⭐ dead letter | 死信队列 | 无法处理的消息存入 `dead letter queue` |\r\n| ⭐ dependency injection | 依赖注入 | `DI container` 解耦对象创建和使用 |\r\n| ⭐ deprecate | 废弃 | `deprecated API` 即将下线的接口，文档会标注 |\r\n| ⭐ endpoint | 接口端点 | `API endpoint /users` |\r\n| ⭐ event-driven | 事件驱动 | `event-driven architecture` 解耦异步处理 |\r\n| ⭐ event loop | 事件循环 | Node.js 单线程模型的核心机制 |\r\n| ⭐ factory | 工厂模式 | `factory pattern` 统一封装对象创建逻辑 |\r\n| ⭐ fallback | 降级 | `fallback response` 服务不可用时的兜底返回 |\r\n| ⭐ fanout | 广播 | `fanout exchange` 向所有绑定队列广播消息 |\r\n| ⭐ gateway | 网关 | `API gateway` 统一入口，处理路由/鉴权/限流 |\r\n| graphql | GraphQL | `GraphQL query` 客户端按需获取字段，减少过度获取 |\r\n| grpc | gRPC 远程调用 | `gRPC service` 高性能二进制协议，适合微服务 |\r\n| ⭐ harden | 安全加固 | `security hardening` 减少攻击面 |\r\n| ⭐ header | 请求/响应头 | `Authorization header` / `Content-Type header` |\r\n| ⭐ idempotent | 幂等的 | `idempotent request` 相同请求多次执行结果相同 |\r\n| ⭐ jwt | JSON Web Token | `Bearer <token>` 无状态令牌认证 |\r\n| ⭐ latency | 延迟 | `p99 latency` 第 99 百分位响应时间 |\r\n| ⭐ load balancer | 负载均衡器 | 分发流量到多台服务器，避免单点压力 |\r\n| ⭐ message queue | 消息队列 | `MQ` 异步通信缓冲，解耦生产者和消费者 |\r\n| ⭐ microservice | 微服务 | `microservice architecture` 按业务拆分的独立服务 |\r\n| ⭐ middleware | 中间件 | `Express middleware` 请求处理管道中的插件 |\r\n| ⭐ migration | 数据库迁移 | `run migrations` 执行表结构变更脚本 |\r\n| ⭐ model | 数据模型 | `ORM model` 对象关系映射的数据结构定义 |\r\n| monolith | 单体应用 | `monolithic architecture` 所有功能在一个进程中 |\r\n| ⭐ oauth | OAuth 授权框架 | `OAuth 2.0` 第三方登录（"用 Google 登录"） |\r\n| offset | 偏移量 | `Kafka offset` 标记消费者读到队列的哪个位置 |\r\n| openapi / swagger | 接口文档规范 | `Swagger UI` 可视化 API 文档和测试界面 |\r\n| ⭐ orm | 对象关系映射 | `Prisma / Sequelize ORM` 用代码操作数据库 |\r\n| ⭐ pagination | 分页 | `cursor-based pagination` 游标分页性能更好 |\r\n| ⭐ payload | 载荷；请求体 | `request payload` 请求携带的数据 |\r\n| ⭐ producer | 生产者 | 发送消息到队列的一方 |\r\n| ⭐ profiler | 性能分析器 | `CPU profiler` 找出程序中的性能瓶颈 |\r\n| ⭐ promise | Promise 对象 | `Promise.then().catch()` 异步操作的封装 |\r\n| ⭐ proxy | 代理 | `reverse proxy` Nginx 反向代理，转发请求 |\r\n| pub/sub | 发布/订阅模式 | `pub/sub` 解耦发布者与订阅者 |\r\n| ⭐ queue | 队列 | `task queue` 先进先出的任务缓冲 |\r\n| ⭐ rate limit | 速率限制 | `429 Too Many Requests` 超出调用频率 |\r\n| ⭐ repository | 仓储模式 | `UserRepository` 封装数据库访问层 |\r\n| ⭐ rest | REST 风格 | `RESTful API` 基于 HTTP 方法的接口规范 |\r\n| ⭐ retry | 重试 | `retry with backoff` 失败后延迟重试 |\r\n| ⭐ route | 路由 | `POST /api/users` 路由定义 |\r\n| ⭐ saga | Saga 模式 | 分布式事务的编排方案，通过事件链实现 |\r\n| ⭐ sanitize | 净化输入 | `sanitize HTML` 过滤用户输入防注入攻击 |\r\n| ⭐ schema | 数据结构定义 | `JSON schema` / `DB schema` |\r\n| ⭐ serialize | 序列化 | `serialize response` 对象转为 JSON/二进制 |\r\n| ⭐ service | 业务服务层 | `UserService` 封装业务逻辑的服务类 |\r\n| ⭐ singleton | 单例模式 | `singleton instance` 全局唯一实例 |\r\n| ⭐ sla | 服务等级协议 | `SLA 99.9%` 对可用性的承诺（每月宕机 < 43 分钟） |\r\n| ⭐ socket | 套接字 | `WebSocket` 双向实时通信 |\r\n| ⭐ span | 追踪单元 | `trace span` 分布式追踪中一次调用的时间段 |\r\n| soap | SOAP 协议 | 企业级 XML 接口协议，常见于老系统集成 |\r\n| ⭐ sso | 单点登录 | `SSO` 一次登录，访问多个系统 |\r\n| ⭐ ssl / tls | 加密传输协议 | `HTTPS = HTTP + TLS` |\r\n| ⭐ stateless | 无状态的 | `stateless REST API` 服务端不保存会话状态 |\r\n| ⭐ throttle | 节流 | `throttle requests` 限制接口调用频率 |\r\n| throughput | 吞吐量 | `requests per second` 每秒处理的请求数 |\r\n| ⭐ timeout | 超时 | `request timeout 5000ms` 超时则报错 |\r\n| ⭐ topic | 主题 | `Kafka topic` 消息分类的频道 |\r\n| ⭐ trace / tracing | 链路追踪 | `distributed tracing` Jaeger/Zipkin 追踪跨服务调用 |\r\n| ⭐ ttl | 存活时间 | `TTL 3600s` 缓存/Token 的过期时间 |\r\n| ⭐ uptime | 正常运行时间 | `99.9% uptime` 衡量服务可用性的指标 |\r\n| versioning | 版本管理 | `API versioning /v1/ /v2/` 接口向后兼容 |\r\n| ⭐ webhook | 网络钩子 | `GitHub webhook` 事件触发时主动推送通知 |\r\n| ⭐ xss | 跨站脚本攻击 | `XSS sanitize` 过滤用户输入防恶意脚本注入 |\r\n| ⭐ audit | 审计；审查 | `security audit` 安全审查，记录谁在何时做了什么 |\r\n| ⭐ exploit | 漏洞利用 | 攻击者利用漏洞执行恶意代码 |\r\n| ⭐ vulnerability | 漏洞 | `security vulnerability` 可被攻击者利用的软件缺陷 |\r\n| honeypot | 蜜罐 | 伪装成真实系统吸引攻击者的陷阱 |\r\n| devsecops | DevSecOps | 将安全融入 CI/CD 流程，安全左移 |\r\n| pentest | 渗透测试 | 模拟黑客攻击测试系统安全性 |\r\n',Ba="# 05 数据库\r\n\r\n> SQL、NoSQL、事务、锁、复制、性能优化相关词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ acid | ACID 特性 | 原子性+一致性+隔离性+持久性，事务的四个保证 |\r\n| ⭐ aggregate | 聚合 | `GROUP BY` / `aggregate function` COUNT/SUM/AVG |\r\n| alias | 别名 | `SELECT u.name AS username` 用 AS 起别名 |\r\n| ⭐ atomicity | 原子性 | 事务要么全部成功，要么全部回滚 |\r\n| avg | 平均值函数 | `SELECT AVG(price) FROM orders` |\r\n| ⭐ binlog | 二进制日志 | MySQL `binlog` 用于主从复制和数据恢复 |\r\n| ⭐ cascade | 级联 | `ON DELETE CASCADE` 删除主记录同时删除关联记录 |\r\n| ⭐ collection | 集合（NoSQL） | MongoDB 中对应 SQL 的表 |\r\n| ⭐ column | 列；字段 | `add column email VARCHAR(255)` |\r\n| ⭐ commit | 提交事务 | `COMMIT` 将事务的变更永久保存 |\r\n| ⭐ constraint | 约束 | `UNIQUE constraint` / `NOT NULL constraint` |\r\n| count | 计数函数 | `SELECT COUNT(*) FROM users` |\r\n| ⭐ cursor | 游标 | `cursor-based pagination` 高性能分页方案 |\r\n| ⭐ deadlock | 死锁 | `deadlock detected` 两个事务互相等待对方释放锁 |\r\n| ⭐ delete | 删除 | `DELETE FROM table WHERE id=1` |\r\n| ⭐ distinct | 去重 | `SELECT DISTINCT country` 去除重复值 |\r\n| ⭐ document | 文档（NoSQL） | MongoDB `document` 存储 JSON 格式的记录 |\r\n| embedding | 向量嵌入 | AI 语义搜索中存储的高维向量数据 |\r\n| ⭐ explain | 执行计划 | `EXPLAIN SELECT` 查看查询是否命中索引 |\r\n| ⭐ foreign key | 外键 | `FOREIGN KEY (user_id) REFERENCES users(id)` |\r\n| full scan | 全表扫描 | 未命中索引时逐行扫描，数据量大时极慢 |\r\n| ⭐ group by | 分组 | `GROUP BY user_id` 按字段分组后聚合 |\r\n| ⭐ having | 分组后过滤 | `HAVING COUNT(*) > 5` 对聚合结果过滤 |\r\n| ⭐ index | 索引 | `CREATE INDEX` 加速查询，空间换时间 |\r\n| ⭐ insert | 插入 | `INSERT INTO users (name) VALUES ('Alice')` |\r\n| ⭐ isolation level | 隔离级别 | `READ COMMITTED` 已提交读，控制并发可见性 |\r\n| ⭐ join | 关联查询 | `INNER JOIN` / `LEFT JOIN` 连接多表 |\r\n| ⭐ key-value | 键值存储 | Redis `key-value store` 最简单的 NoSQL 结构 |\r\n| like | 模糊匹配 | `WHERE name LIKE 'John%'` % 匹配任意字符 |\r\n| ⭐ lock | 锁 | `row-level lock` 行级锁，控制并发写入 |\r\n| ⭐ materialized view | 物化视图 | 预计算并持久化的查询结果，查询更快 |\r\n| max | 最大值函数 | `SELECT MAX(score) FROM results` |\r\n| ⭐ migration | 迁移脚本 | `schema migration` 数据库结构变更脚本 |\r\n| min | 最小值函数 | `SELECT MIN(price) FROM products` |\r\n| ⭐ mvcc | 多版本并发控制 | 读不阻塞写的并发方案，PostgreSQL/InnoDB 使用 |\r\n| ⭐ normalize | 规范化 | `database normalization` 减少数据冗余 |\r\n| ⭐ nosql | 非关系型数据库 | MongoDB / Redis / Cassandra，灵活结构 |\r\n| ⭐ null | 空值 | `IS NULL` / `NOT NULL constraint` |\r\n| ⭐ optimistic lock | 乐观锁 | 假设不冲突，提交时用版本号校验 |\r\n| ⭐ order by | 排序 | `ORDER BY created_at DESC` 按时间降序 |\r\n| ⭐ partition | 分区 | `table partitioning` 按范围/哈希水平切分大表 |\r\n| ⭐ pessimistic lock | 悲观锁 | 操作前先加锁，阻止其他事务并发修改 |\r\n| ⭐ primary key | 主键 | `PRIMARY KEY (id)` 唯一标识每条记录 |\r\n| ⭐ procedure | 存储过程 | `CALL stored_procedure()` 数据库端的可执行程序 |\r\n| ⭐ query | 查询 | `SQL query` / `query builder` |\r\n| ⭐ record | 记录；行 | `insert record` 插入一条数据 |\r\n| ⭐ relation | 关系 | `one-to-many relation` 一对多关系 |\r\n| ⭐ relational / rdbms | 关系型数据库 | MySQL / PostgreSQL / Oracle |\r\n| ⭐ replica | 副本 | `read replica` 只读副本，分担主库查询压力 |\r\n| ⭐ replication | 复制 | `master-slave replication` 主从数据同步 |\r\n| replication lag | 复制延迟 | 主从同步的时间差，影响读一致性 |\r\n| ⭐ rollback | 回滚 | `ROLLBACK` 撤销未提交的事务变更 |\r\n| ⭐ row | 行 | `row count` 表中的数据行数 |\r\n| ⭐ savepoint | 保存点 | `SAVEPOINT sp1` 事务内部的局部回滚点 |\r\n| ⭐ schema | 数据库结构 | `database schema` 表结构和关系的定义 |\r\n| ⭐ select | 查询 | `SELECT * FROM users WHERE active=1` |\r\n| ⭐ shard | 分片 | `database sharding` 水平拆分到多个数据库实例 |\r\n| snapshot | 快照 | `point-in-time snapshot` 某时刻的数据状态备份 |\r\n| stored procedure | 存储过程 | 封装在数据库中的可重用 SQL 程序 |\r\n| subquery | 子查询 | `SELECT * FROM (SELECT ...) AS sub` 嵌套查询 |\r\n| sum | 求和函数 | `SELECT SUM(amount) FROM orders` |\r\n| ⭐ table | 表 | `CREATE TABLE users (...)` |\r\n| time-series | 时序数据库 | InfluxDB 存储按时间顺序的监控/日志指标 |\r\n| ⭐ transaction | 事务 | `BEGIN ... COMMIT / ROLLBACK` 原子操作单元 |\r\n| ⭐ trigger | 触发器 | `BEFORE INSERT trigger` 数据变更时自动执行 |\r\n| ⭐ ttl | 数据过期时间 | Redis/MongoDB `TTL` 自动删除过期数据 |\r\n| ⭐ unique | 唯一约束 | `UNIQUE (email)` 该字段不允许重复值 |\r\n| ⭐ union | 联合查询 | `UNION ALL` 合并多个 SELECT 结果集 |\r\n| ⭐ update | 更新 | `UPDATE users SET name='Bob' WHERE id=1` |\r\n| vacuum | 清理（PG） | PostgreSQL `VACUUM` 回收死行，释放空间 |\r\n| vector db | 向量数据库 | Pinecone/Weaviate，存储 AI 语义搜索的向量 |\r\n| ⭐ view | 视图 | `CREATE VIEW` 基于查询创建的虚拟表 |\r\n| ⭐ wal | 预写日志 | Write-Ahead Log，数据库崩溃恢复的基础 |\r\n| ⭐ where | WHERE 条件 | `WHERE id > 100 AND status='active'` |\r\n| compaction | 压缩整理 | LSM-Tree 合并小文件，RocksDB/Cassandra 定期执行 |\r\n| tombstone | 墓碑标记 | 软删除时留下的标记，后续 compaction 时清理 |\r\n| ⭐ mysql | MySQL | 最流行的开源关系型数据库，`mysql -u root -p` |\r\n| ⭐ postgres | PostgreSQL | 功能最强大的开源关系型数据库，支持 JSON/全文搜索 |\r\n| ⭐ mongodb | MongoDB | 最流行的文档型 NoSQL 数据库，存储 BSON |\r\n| ⭐ redis | Redis | 内存键值数据库，常用于缓存/会话/消息队列 |\r\n| memcached | Memcached | 简单高速的分布式内存缓存，比 Redis 功能少 |\r\n| oracle | Oracle DB | 企业级关系型数据库，金融/电信常见 |\r\n",Va="# 06 云服务 & DevOps\r\n\r\n> AWS/Azure/GCP、Docker、Kubernetes、CI/CD、网络、监控、安全合规相关词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ acl | 访问控制列表 | `network ACL` 子网级别的网络访问规则 |\r\n| ⭐ alert | 告警 | 超过阈值时触发通知，叫醒 on-call 工程师 |\r\n| ⭐ artifact | 构建产物 | `build artifact` CI 输出的可部署文件 |\r\n| ⭐ autoscaling | 自动扩缩容 | `auto-scaling group` 按负载自动增减实例数 |\r\n| availability zone | 可用区 | `AZ` 同区域内的独立数据中心，用于高可用 |\r\n| ⭐ blue-green | 蓝绿部署 | 两套环境切换流量，实现零停机发布 |\r\n| ⭐ bucket | 存储桶 | `S3 bucket` 存储静态文件、备份、日志 |\r\n| ⭐ canary | 金丝雀发布 | `canary deployment` 先对 1% 流量发布，验证后逐步放量 |\r\n| ⭐ cdn | 内容分发网络 | `CDN cache` 将静态资源缓存到边缘节点，加速访问 |\r\n| ⭐ ci/cd | 持续集成/持续交付 | `GitHub Actions CI/CD pipeline` 自动化构建、测试、部署 |\r\n| ⭐ cidr | 无类别域间路由 | `10.0.0.0/24` IP 地址段的表示方法 |\r\n| ⭐ cloudwatch | 云监控（AWS） | `CloudWatch metrics/logs/alarms` AWS 监控服务 |\r\n| ⭐ cluster | 集群 | `Kubernetes cluster` 多节点协同工作的系统 |\r\n| compliance | 合规 | `SOC2 / GDPR compliance` 满足监管和安全要求 |\r\n| ⭐ configmap | 配置映射（K8s） | `K8s ConfigMap` 存储非敏感配置数据 |\r\n| ⭐ container | 容器 | `Docker container` 轻量化隔离的运行环境 |\r\n| ⭐ daemonset | 守护进程集（K8s） | 每个节点上自动运行一个 Pod，用于日志收集等 |\r\n| ⭐ deployment | 部署控制器（K8s） | `kubectl apply -f deployment.yaml` 声明式管理 Pod |\r\n| ⭐ dns | 域名解析系统 | `DNS record` A/CNAME 记录，域名→IP |\r\n| ⭐ docker | Docker 容器工具 | `docker build` / `docker run` / `docker push` |\r\n| ⭐ dockerfile | Docker 构建文件 | 描述镜像构建步骤，`FROM node:20 ... RUN npm install` |\r\n| ⭐ ec2 | 云服务器（AWS） | `EC2 instance` 弹性计算实例，按需付费 |\r\n| ⭐ environment | 运行环境 | `dev / staging / production` 三套环境 |\r\n| ⭐ feature flag | 功能开关 | 在生产中动态开启/关闭某功能，无需重新发布 |\r\n| ⭐ firewall | 防火墙 | `security group` AWS 实例级别的防火墙规则 |\r\n| gdpr | 通用数据保护条例 | 欧盟个人数据保护法规，违规罚款极高 |\r\n| ⭐ helm | K8s 包管理工具 | `helm install chart` 一键部署复杂 K8s 应用 |\r\n| ⭐ hpa | 水平自动扩缩容（K8s） | `HorizontalPodAutoscaler` 按 CPU/内存自动扩缩 Pod 数 |\r\n| ⭐ iam | 身份访问管理（AWS） | `IAM role / policy` 控制谁能访问哪些 AWS 资源 |\r\n| ⭐ image | 容器镜像 | `docker pull node:20` 镜像是容器的模板 |\r\n| ⭐ incident | 生产事故 | `P1 incident` 影响用户的高级别故障 |\r\n| ⭐ ingress | 入口规则（K8s） | `Ingress controller` 管理外部流量进入集群 |\r\n| ⭐ instance | 云主机实例 | `EC2 instance` / `RDS instance` |\r\n| job | CI 任务 | CI pipeline 中的单个执行单元 |\r\n| ⭐ kubernetes / k8s | 容器编排系统 | 自动管理容器的部署、调度、扩缩容、自愈 |\r\n| ⭐ lambda | 函数计算（AWS） | `Lambda function` 事件驱动的无服务器函数 |\r\n| ⭐ load balancer | 负载均衡器 | `ALB / NLB` 将流量分发到多个后端实例 |\r\n| ⭐ log | 日志 | `CloudWatch Logs` / `kubectl logs pod-name` |\r\n| ⭐ manifest | 配置清单（K8s） | `K8s manifest YAML` 声明资源期望状态的配置文件 |\r\n| ⭐ metric | 指标 | `CPU metric` / `request count` 可量化的监控数据 |\r\n| ⭐ monitoring | 监控 | Prometheus + Grafana 系统健康监控组合 |\r\n| ⭐ namespace | 命名空间（K8s） | `K8s namespace` 在同一集群中隔离不同团队/环境 |\r\n| ⭐ nat | 网络地址转换 | `NAT gateway` 让私有子网中的实例访问公网 |\r\n| ⭐ node | 节点（K8s） | `worker node` 运行 Pod 的物理/虚拟机器 |\r\n| ⭐ observability | 可观测性 | 指标 + 日志 + 链路追踪，系统状态透明化 |\r\n| ⭐ on-call | 值班 | `on-call rotation` 负责响应生产告警的轮值工程师 |\r\n| ⭐ pipeline | 流水线 | `CI/CD pipeline` 自动化构建→测试→部署 |\r\n| ⭐ pod | Pod（K8s） | K8s 最小部署单元，包含一个或多个容器 |\r\n| ⭐ postmortem | 故障复盘 | 分析故障根因和改进措施，`blameless postmortem` 无责追责 |\r\n| ⭐ provision | 开通；配置 | `provision infrastructure` 自动创建云资源 |\r\n| ⭐ pvc | 持久卷申请（K8s） | `PersistentVolumeClaim` 申请持久化存储资源 |\r\n| ⭐ rbac | 基于角色的访问控制 | `K8s RBAC` 控制谁能对哪些资源执行什么操作 |\r\n| rds | 托管数据库（AWS） | `RDS MySQL/PostgreSQL` 全托管，自动备份/扩容 |\r\n| ⭐ region | 区域 | `us-east-1` / `ap-northeast-1` 地理区域 |\r\n| ⭐ registry | 镜像仓库 | `Docker Hub` / `ECR` / `Harbor` 存储和分发镜像 |\r\n| ⭐ replica | 副本数 | `replicas: 3` 运行 3 个 Pod 实例保证高可用 |\r\n| ⭐ rollback | 回滚 | 部署失败时恢复到上一个稳定版本 |\r\n| ⭐ rollout | 滚动发布 | `kubectl rollout status` 逐步替换旧版本 Pod |\r\n| ⭐ route table | 路由表 | 控制子网内流量的下一跳走向 |\r\n| ⭐ runbook | 运维手册 | 标准化的故障处理步骤文档，供 on-call 参考 |\r\n| runner | CI 执行器 | `GitHub Actions runner` 执行流水线任务的机器 |\r\n| ⭐ s3 | 对象存储（AWS） | `S3 bucket` 存文件、静态网站、大数据集 |\r\n| ⭐ secret | 密钥配置（K8s） | `K8s Secret` 加密存储密码/Token 等敏感配置 |\r\n| ⭐ security group | 安全组 | AWS 实例级别的虚拟防火墙，控制入/出站流量 |\r\n| ⭐ serverless | 无服务器 | `AWS Lambda / Vercel` 无需管理服务器的运行模式 |\r\n| service mesh | 服务网格 | `Istio / Linkerd` 管理微服务间的流量、安全、可观测 |\r\n| ⭐ sre | 站点可靠性工程师 | SRE 用软件工程方法保障系统稳定性和可靠性 |\r\n| ⭐ stage | 流水线阶段 | `build → test → deploy` CI/CD 的各执行阶段 |\r\n| ⭐ staging | 预发布环境 | 与生产配置相同，用于上线前最终验证 |\r\n| ⭐ statefulset | 有状态应用控制器（K8s） | 数据库等有状态服务，保证 Pod 身份和存储稳定 |\r\n| ⭐ subnet | 子网 | `private subnet` / `public subnet` VPC 内的网段划分 |\r\n| ⭐ terraform | 基础设施即代码 | `terraform apply` 用代码声明和管理云资源 |\r\n| ⭐ volume | 持久化存储卷 | `mount volume` 容器重启后数据不丢失 |\r\n| ⭐ vpc | 虚拟私有网络 | `AWS VPC` 云上的隔离私有网络环境 |\r\n| waf | Web 应用防火墙 | `WAF rules` 拦截 SQL 注入、XSS 等恶意请求 |\r\n| zero trust | 零信任 | 默认不信任任何请求，每次访问都需验证 |\r\n| ⭐ yaml | YAML 配置格式 | K8s / Docker Compose / GitHub Actions 配置文件格式 |\r\n| ⭐ ddos | 分布式拒绝服务攻击 | 大量机器同时向目标发请求，耗尽资源 |\r\n| dhcp | 动态主机配置协议 | 自动给设备分配 IP 地址 |\r\n| icmp | 网络控制消息协议 | `ping` 命令底层使用 ICMP |\r\n| smtp | 简单邮件传输协议 | `SMTP port 587` 发送邮件的协议 |\r\n| sftp | 安全文件传输协议 | SSH 加密的文件传输，替代 FTP |\r\n| red team | 红队 | 模拟攻击者发现系统漏洞的安全团队 |\r\n| blue team | 蓝队 | 防御和监控安全威胁的运维安全团队 |\r\n| forensics | 数字取证 | 事故后分析日志和证据追溯攻击过程 |\r\n",$a=`# 07 AI & 大模型\r
\r
> LLM、训练推理、Prompt 工程、AI 安全、向量检索相关词汇\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ accuracy | 准确率 | 分类正确的样本占总样本的比例 |\r
| ⭐ adversarial | 对抗性的 | \`adversarial prompt\` 试图绕过模型安全限制的输入 |\r
| ⭐ agent | AI 智能体 | 能自主调用工具、执行多步骤任务的 LLM 应用 |\r
| ⭐ alignment | 对齐 | 使模型行为符合人类价值观和意图的研究方向 |\r
| api-key | API 密钥 | \`Authorization: Bearer sk-...\` 调用 AI API 的身份凭证 |\r
| ⭐ assistant | 助手角色 | \`role: "assistant"\` 对话中模型扮演的角色 |\r
| ⭐ attention | 注意力机制 | Transformer 核心机制，\`self-attention\` 计算词间关联 |\r
| ⭐ augmented | 增强的 | \`Retrieval-Augmented Generation (RAG)\` 检索增强生成 |\r
| ⭐ benchmark | 基准测试 | \`MMLU / HumanEval\` 评估模型能力的标准测试集 |\r
| ⭐ chain-of-thought | 思维链 | \`Chain-of-Thought prompting\` 让模型逐步推理再给答案 |\r
| ⭐ checkpoint | 检查点 | 训练过程中保存的模型权重快照，用于恢复训练 |\r
| ⭐ classification | 分类任务 | 将输入分到预定类别，如情感分析（正面/负面） |\r
| ⭐ clustering | 聚类 | 无监督学习，将相似数据分组 |\r
| ⭐ completion | 文本补全 | \`chat completion API\` 模型根据输入生成后续文本 |\r
| ⭐ context-window | 上下文窗口 | 模型单次能处理的最大 token 数，如 128k tokens |\r
| ⭐ cosine | 余弦相似度 | \`cosine similarity\` 计算两个向量的相似程度（0~1）|\r
| ⭐ cuda | CUDA | NVIDIA GPU 并行计算框架，AI 训练的底层加速 |\r
| ⭐ dataset | 数据集 | 用于训练或评估模型的标注数据集合 |\r
| ⭐ diffusion | 扩散模型 | \`diffusion model\` Stable Diffusion 等图像生成模型的基础 |\r
| ⭐ distillation | 知识蒸馏 | 用大模型（教师）指导小模型（学生）训练，压缩模型 |\r
| ⭐ embedding | 向量嵌入 | 将文本/图像转为高维向量，用于语义检索 |\r
| ⭐ epoch | 训练轮次 | 模型完整遍历一次训练集称为一个 epoch |\r
| ⭐ evals | 评估测试 | \`model evals\` 测量模型性能和安全性的评估套件 |\r
| ⭐ few-shot | 少样本学习 | \`few-shot prompting\` 在提示中给出少量示例引导输出 |\r
| ⭐ fine-tune | 微调 | 在预训练模型基础上用特定数据集继续训练 |\r
| ⭐ function-calling | 函数调用 | LLM 输出结构化 JSON 来调用外部工具/API |\r
| ⭐ gradient | 梯度 | 反向传播中计算的损失函数偏导，用于更新权重 |\r
| ⭐ grounding | 基础事实锚定 | 让模型输出基于真实数据，减少幻觉 |\r
| ⭐ guardrail | 护栏 | 防止模型输出有害内容的安全过滤机制 |\r
| ⭐ hallucination | 幻觉 | 模型生成看似合理但实际错误的内容 |\r
| ⭐ inference | 推理（运行） | 用训练好的模型处理新输入并生成输出 |\r
| ⭐ jailbreak | 越狱 | 试图绕过模型安全限制获取被禁止输出的攻击方式 |\r
| ⭐ label | 标签 | 数据集中人工标注的正确答案 |\r
| latent | 潜在空间 | \`latent space\` 模型内部的高维特征表示空间 |\r
| ⭐ layer | 层 | 神经网络中的处理单元，深度学习靠堆叠多层实现 |\r
| ⭐ leaderboard | 排行榜 | \`LMSYS Chatbot Arena\` 比较不同模型性能的公开榜单 |\r
| ⭐ lora | LoRA 微调 | Low-Rank Adaptation，低参数量高效微调方法 |\r
| ⭐ loss | 损失函数 | 衡量模型预测与真实标签差距的函数，训练目标是最小化 loss |\r
| ⭐ model | 模型 | 经过训练的神经网络，如 \`claude-3-5-sonnet\` |\r
| ⭐ multimodal | 多模态 | 同时处理文本、图像、音频等多种输入类型的模型 |\r
| ⭐ neural network | 神经网络 | 模仿人脑神经元连接的机器学习模型结构 |\r
| open-source | 开源模型 | \`Llama / Mistral\` 权重公开的模型，可本地部署 |\r
| ⭐ precision | 精确率 | 预测为正例中真正为正例的比例 |\r
| ⭐ pretrain | 预训练 | 在大规模数据上训练基础模型，之后再微调 |\r
| ⭐ prompt | 提示词 | 发送给模型的输入文本，决定模型行为 |\r
| ⭐ pruning | 剪枝 | 删除模型中不重要的权重，减小模型体积 |\r
| ⭐ quantization | 量化 | 将模型权重从 float32 压缩为 int8/4bit，减少内存占用 |\r
| ⭐ rag | 检索增强生成 | Retrieval-Augmented Generation，搜索知识库后再生成 |\r
| ⭐ recall | 召回率 | 实际为正例中被正确预测的比例 |\r
| ⭐ red-teaming | 红队测试 | 模拟攻击者测试模型安全漏洞 |\r
| ⭐ retrieval | 检索 | 从知识库中找到相关文档，RAG 的第一步 |\r
| ⭐ rlhf | 人类反馈强化学习 | Reinforcement Learning from Human Feedback，对齐训练方法 |\r
| ⭐ safety | 安全性 | 模型不输出有害内容的能力 |\r
| ⭐ sampling | 采样 | 生成文本时从概率分布中选取下一个 token 的策略 |\r
| ⭐ serving | 模型服务化 | 将训练好的模型部署为可调用 API |\r
| ⭐ similarity | 相似度 | \`cosine similarity\` 向量间的语义接近程度 |\r
| system-prompt | 系统提示词 | \`role: "system"\` 设定模型角色和行为规范的提示 |\r
| ⭐ temperature | 温度参数 | 控制输出随机性，0=确定性，1=创造性，>1=随机 |\r
| ⭐ token | 词元 | 模型处理文本的最小单位，约 4 个字符或 0.75 个英文词 |\r
| tokens-per-second | 每秒生成 token 数 | 衡量推理速度的指标，\`TPS\` |\r
| ⭐ tool-use | 工具调用 | 模型调用外部工具（搜索、代码执行）的能力 |\r
| ⭐ top-k | Top-K 采样 | 只从概率最高的 K 个 token 中采样 |\r
| ⭐ top-p | Top-P 采样 | 从累积概率达到 P 的 token 集合中采样（nucleus sampling）|\r
| ⭐ training | 训练 | 用数据反复调整模型权重使 loss 下降的过程 |\r
| ⭐ transformer | Transformer 架构 | 现代 LLM 的基础架构，基于注意力机制 |\r
| ⭐ vector | 向量 | 语义嵌入后的数值数组，用于相似度计算 |\r
| ⭐ vram | 显存 | GPU 的内存，限制可加载的模型大小 |\r
| ⭐ weight | 模型权重 | 神经网络中经过训练调整的参数值 |\r
| ⭐ zero-shot | 零样本学习 | \`zero-shot prompting\` 不给示例，直接让模型完成任务 |\r
| ⭐ vibe coding | 氛围编程 | 用 AI 辅助随意写代码，不深究细节，靠感觉驱动 |\r
| ⭐ agentic | 智能体式的 | \`agentic workflow\` 模型自主规划并执行多步骤任务 |\r
| ⭐ MCP | 模型上下文协议 | Model Context Protocol，标准化模型调用外部工具的协议 |\r
| ⭐ reasoning model | 推理模型 | 内置慢思考能力的模型，如 o1 / DeepSeek-R1 |\r
| ⭐ thinking tokens | 思考 token | 推理模型在给出答案前内部"思考"过程产生的 token |\r
| ⭐ test-time compute | 推理时算力 | 通过增加推理阶段算力（而非训练）提升模型能力 |\r
| ⭐ mixture of experts | 混合专家模型 | MoE，每次只激活部分参数，兼顾效率与规模 |\r
| ⭐ speculative decoding | 投机解码 | 用小模型预测草稿、大模型验证，提升推理速度 |\r
| ⭐ KV cache | KV 缓存 | 缓存注意力机制中的 Key/Value，避免重复计算 |\r
| ⭐ flash attention | Flash Attention | 高效注意力计算算法，大幅降低显存占用 |\r
| ⭐ GGUF | GGUF 量化格式 | llama.cpp 使用的模型量化存储格式，适合本地运行 |\r
| ⭐ Ollama | Ollama | 本地运行开源 LLM 的工具，\`ollama run llama3\` |\r
| ⭐ context poisoning | 上下文污染 | 在对话中注入错误信息影响后续模型输出 |\r
| ⭐ model collapse | 模型坍塌 | 用 AI 生成数据训练 AI 导致质量退化 |\r
| ⭐ synthetic data | 合成数据 | AI 生成的训练数据，用于扩充或替代真实数据 |\r
| ⭐ data flywheel | 数据飞轮 | 用户使用产生数据，数据改善模型，模型吸引更多用户 |\r
| ⭐ DPO | 直接偏好优化 | Direct Preference Optimization，无需奖励模型的对齐方法 |\r
| ⭐ SFT | 监督微调 | Supervised Fine-Tuning，用标注数据对预训练模型微调 |\r
| ⭐ GRPO | 组相对策略优化 | DeepSeek 提出的强化学习对齐方法 |\r
| ⭐ multiagent | 多智能体 | \`multi-agent framework\` 多个 AI 协作完成任务 |\r
| ⭐ orchestration | 编排 | 协调多个 agent/工具有序执行任务的机制 |\r
| ⭐ H100 / A100 | NVIDIA 旗舰 GPU 型号 | 数据中心 AI 训练主流显卡 |\r
| ⭐ B200 / Blackwell | NVIDIA Blackwell 架构 | 2024 年发布的新一代 GPU 架构 |\r
| ⭐ Hopper | NVIDIA Hopper 架构 | H100 所属架构，上一代旗舰 |\r
| ⭐ Tensor Core | 张量核心 | NVIDIA GPU 专为矩阵运算设计的计算单元 |\r
| ⭐ NVLink | NVLink 互联 | NVIDIA GPU 间高速直连总线，替代 PCIe |\r
| ⭐ DGX | NVIDIA DGX 超算 | NVIDIA 整机 AI 超算，\`DGX H100\` |\r
| ⭐ TensorRT | TensorRT | NVIDIA 推理优化引擎，加速模型部署 |\r
| ⭐ NCCL | NCCL | NVIDIA 集合通信库，多 GPU 分布式训练通信 |\r
| ⭐ GPU-rich / GPU-poor | 算力富裕 / 匮乏 | 形容公司/个人 GPU 资源多寡的网络用语 |\r
| ⭐ sovereign AI | 主权 AI | 国家/地区自主建设本土 AI 基础设施和模型 |\r
| ⭐ compute cluster | 算力集群 | 多台 GPU 服务器组成的训练集群 |\r
| ⭐ VRAM bandwidth | 显存带宽 | GPU 显存读写速度，影响推理速度的关键指标 |\r
| ⭐ constitutional AI | 宪法式 AI | Anthropic 提出：让模型依据原则自我批判改进 |\r
| ⭐ helpful / harmless / honest | 有帮助/无害/诚实 | HHH，Anthropic 对 Claude 的三大核心要求 |\r
| ⭐ artifacts | 工件；产物 | Claude 输出的代码/文档等独立可用的内容块 |\r
| ⭐ extended thinking | 扩展思考 | Claude 在回答前进行深度推理的模式 |\r
| ⭐ model card | 模型卡片 | 描述模型能力、限制、训练方式的文档 |\r
| ⭐ responsible scaling policy | 负责任扩展政策 | RSP，Anthropic 对模型安全评估的承诺框架 |\r
| ⭐ interpretability | 可解释性 | 理解模型内部工作机制的研究方向 |\r
| ⭐ mechanistic interpretability | 机制可解释性 | 逆向分析神经网络内部电路和特征的研究 |\r
| ⭐ superposition | 叠加态 | 模型用有限神经元表示更多特征的现象 |\r
| ⭐ sparse autoencoder / SAE | 稀疏自编码器 | 用于提取模型内部可解释特征的工具 |\r
| ⭐ sleeper agent | 潜伏智能体 | 训练中植入隐藏行为、特定条件触发的模型 |\r
| ⭐ model welfare | 模型福利 | 探讨 AI 是否有类似情感/体验需被考量的议题 |\r
| ⭐ prompt injection | 提示词注入 | 攻击者通过输入劫持模型行为的安全威胁 |\r
| ⭐ operator | 运营商 | API 调用方，负责设定 system prompt 的开发者 |\r
| ⭐ user | 终端用户 | 与模型对话的最终使用者 |\r
| ⭐ system prompt | 系统提示词 | operator 预设的指令，定义模型角色和行为边界 |\r
| ⭐ ASL | AI 安全级别 | AI Safety Level，Anthropic 评估模型风险的等级体系 |\r
`,za="# 08 社交媒体（Twitter/X）\r\n\r\n> Twitter/X 平台常用词汇，涵盖 UI 操作、互动指标和内容策略\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ algorithm | 算法（内容推荐） | `gaming the algorithm` 钻算法空子 |\r\n| ⭐ bookmark | 书签；收藏 | `add to bookmarks` 收藏帖子 |\r\n| clap | 点赞（Medium） | `give 50 claps` 在 Medium 打赏 50 个赞 |\r\n| ⭐ community | 社群；社区 | `join a community` 加入兴趣社群 |\r\n| content calendar | 内容排期表 | `plan your content calendar` 规划发帖计划 |\r\n| ⭐ cross-post | 跨平台转发 | `cross-post to LinkedIn` 同步发到 LinkedIn |\r\n| ⭐ DM | 私信（Direct Message） | `slide into DMs` 发私信 |\r\n| ⭐ engagement | 互动量 | `high engagement rate` 高互动率 |\r\n| engagement farming | 刷互动（诱导行为） | `engagement farming posts` 诱导互动的帖子 |\r\n| evergreen content | 常青内容（长期有效） | `write evergreen content` 写不过时的内容 |\r\n| ⭐ explore | 发现页；探索页 | `trending on Explore` 登上发现页 |\r\n| ⭐ follower | 粉丝；关注者 | `follower growth` 粉丝增长 |\r\n| ⭐ following | 关注（动词/名词） | `your following feed` 关注的人的时间线 |\r\n| ⭐ For You | 推荐页（算法流） | `For You feed` 为你推荐 |\r\n| ⭐ hashtag | 话题标签 | `trending hashtag` 热门话题标签 |\r\n| ⭐ impression | 曝光量 | `1M impressions` 100 万次曝光 |\r\n| ⭐ influencer | 网红；意见领袖 | `tech influencer` 科技领域网红 |\r\n| ⭐ like | 点赞 | `likes and reposts` 点赞和转发数 |\r\n| ⭐ mention | 提及；@某人 | `got a mention from @user` 被某人 @ 了 |\r\n| ⭐ meme | 梗图；网络梗 | `go meme` 变成梗 |\r\n| monetize | 变现；商业化 | `monetize your audience` 将粉丝变现 |\r\n| ⭐ post | 帖子；发帖 | `post a thread` 发一条长帖 |\r\n| ⭐ quote post | 引用转发 | `quote post with commentary` 引用并评论 |\r\n| ⭐ reach | 触达人数 | `organic reach` 自然触达 |\r\n| ⭐ reply | 回复 | `reply to a thread` 回复讨论串 |\r\n| ⭐ repost | 转发（X 平台） | `repost to spread the word` 转发扩散 |\r\n| shadow ban | 影子封禁（限流） | `got shadow banned` 帖子被限流了 |\r\n| ⭐ Spaces | 语音直播间（X 功能） | `host a Space` 开一个语音直播间 |\r\n| ⭐ thread | 长推；讨论串 | `post a thread` 发一条长帖串 |\r\n| ⭐ trending | 热门；趋势 | `trending on X` 在 X 上热搜了 |\r\n| ⭐ verified | 认证账户 | `blue checkmark / verified badge` 蓝 V |\r\n| ⭐ viral | 病毒式传播 | `went viral overnight` 一夜爆火 |\r\n| ⭐ views | 浏览量 | `100k views` 10 万次浏览 |\r\n| ⭐ X Premium | X 付费会员 | `subscribe to X Premium` 订阅 X 会员 |\r\n| ⭐ ratio | 被反比（回复远多于点赞） | `getting ratioed` 说错话被群嘲 |\r\n| ⭐ subtweet | 阴阳推文（不点名讽刺） | `obvious subtweet` 明显在影射某人 |\r\n| ⭐ doomscroll | 无限刷负面内容 | `stop doomscrolling` 别一直刷坏消息了 |\r\n| ⭐ hot take | 惊人/争议性观点 | `unpopular hot take` 少数派的强烈观点 |\r\n| ⭐ take | 观点；看法 | `bad take` 观点有问题 |\r\n| ⭐ receipts | 截图证据 | `show the receipts` 拿出截图证据 |\r\n| ⭐ clout | 网络影响力；名气 | `clout chasing` 蹭热度 |\r\n| ⭐ shill | 水军；带货推广 | `shilling a product` 带货/恰饭 |\r\n| ⭐ grift | 割韭菜；行骗 | `crypto grift` 加密货币割韭菜 |\r\n| ⭐ shitpost | 灌水；发无意义内容 | `shitposting all day` 整天发垃圾内容 |\r\n| ⭐ cope | 心理防御；不接受现实 | `this is cope` 这是在自我安慰 |\r\n| ⭐ discourse | 推上大讨论 | `tech Twitter discourse` 科技圈的舆论风波 |\r\n| ⭐ pile-on | 群体攻击；一窝蜂 | `avoid the pile-on` 避免被围攻 |\r\n| ⭐ context collapse | 受众混杂导致误解 | 不同群体看同一推文产生不同理解 |\r\n| ⭐ terminally online | 重度网络依赖 | `terminally online take` 脱离现实的网络观点 |\r\n| ⭐ main character | 主角光环；以自我为中心 | `main character energy` 把自己当主角 |\r\n| ⭐ burner account | 小号；马甲号 | `use a burner` 用小号发言 |\r\n| ⭐ mute | 静音（不取关但屏蔽） | `mute this conversation` 静音这条对话 |\r\n| ⭐ block | 拉黑 | `block and move on` 拉黑走人 |\r\n| ⭐ unfollow | 取消关注 | `mass unfollow` 批量取关 |\r\n| ⭐ deactivate | 注销账号 | `deactivate my account` 注销账号 |\r\n| ⭐ pinned post | 置顶帖 | `check my pinned` 看我的置顶帖 |\r\n| ⭐ list | 列表（Twitter List） | `add to a list` 加入列表订阅 |\r\n| ⭐ caption | 配文；说明文字 | `write a good caption` 写好配文 |\r\n| ⭐ clickbait | 标题党；诱导点击 | `clickbait headline` 诱导点击的标题 |\r\n| ⭐ engagement bait | 诱导互动 | `engagement bait post` 诱导点赞/转发的帖子 |\r\n| ⭐ quote tweet jail | 引用转发惩罚 | 频繁引用转发被限流 |\r\n| ⭐ X Communities | X 兴趣社区 | 按话题聚合的社区功能 |\r\n| ⭐ Super Follow | 付费订阅创作者 | `subscribe to creator` 付费解锁专属内容 |\r\n",Ja="# 09 技术社区（GitHub / Stack Overflow / HN）\r\n\r\n> 技术社区互动常用词汇，包括代码评审黑话、论坛术语和开发者惯用表达\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ ACK | 认可；同意（代码评审） | `ACK, merging` 同意，合并了 |\r\n| ⭐ anti-pattern | 反模式；不良实践 | `this is an anti-pattern` 这是反模式 |\r\n| ⭐ Ask HN | 向 HN 社区提问 | `Ask HN: How do you...` 向 HN 提问 |\r\n| badge | 徽章（Stack Overflow） | `gold badge` 金牌徽章 |\r\n| bike-shedding | 在细枝末节上争论 | `stop bike-shedding the color` 别纠结颜色了 |\r\n| bounty | 悬赏（Stack Overflow） | `offer a bounty` 挂悬赏求答案 |\r\n| ⭐ bug report | 缺陷报告 | `file a bug report` 提交 Bug 报告 |\r\n| bus factor | 巴士系数（人员风险） | `bus factor of 1` 只有一人了解该模块，风险极高 |\r\n| cargo cult | 照抄代码（不求甚解） | `cargo cult programming` 不理解就复制粘贴 |\r\n| ⭐ close vote | 关闭投票（SO） | `vote to close as duplicate` 投票标记为重复问题 |\r\n| ⭐ contributor | 贡献者 | `top contributor` 核心贡献者 |\r\n| ⭐ dead | 已删除/屏蔽内容（HN） | `[dead] comment` 被管理员删除的评论 |\r\n| ⭐ DNM | 不要合并（Do Not Merge） | `DNM: still WIP` 不要合并，还在开发中 |\r\n| dogfooding | 自己用自己的产品 | `we're dogfooding the new API` 我们在自测新 API |\r\n| ⭐ downvote | 踩；负面投票 | `got downvoted` 被踩了 |\r\n| ⭐ DRY | 不重复原则（Don't Repeat Yourself） | `violates DRY` 违反了 DRY 原则 |\r\n| ⭐ AFAIK | 据我所知（As Far As I Know） | `AFAIK it's a known bug` 据我所知这是已知 bug |\r\n| ⭐ FYI | 仅供参考（For Your Information） | `FYI: the API changed` 仅供参考：API 改了 |\r\n| ⭐ IIRC | 如果我没记错（If I Recall Correctly） | `IIRC it was fixed in v2` 如果我没记错是 v2 修的 |\r\n| ⭐ IMO / IMHO | 在我看来（In My (Humble) Opinion） | `IMO this approach is cleaner` 我觉得这个方案更清晰 |\r\n| karma | 积分；声望（HN/Reddit） | `need 501 karma to downvote` 需要 501 积分才能踩 |\r\n| ⭐ KISS | 保持简单原则（Keep It Simple） | `KISS principle` 别过度设计 |\r\n| ⭐ LGTM | 看起来不错（Looks Good To Me） | `LGTM, approved` 没问题，批准 |\r\n| low-hanging fruit | 容易实现的任务 | `tackle low-hanging fruit first` 先做简单的任务 |\r\n| ⭐ maintainer | 维护者；项目负责人 | `ask a maintainer` 联系项目维护者 |\r\n| ⭐ MVP | 最小可行产品（Minimum Viable Product） | `ship an MVP first` 先发布最小可行版本 |\r\n| NACK / NAK | 拒绝；不同意（代码评审） | `NACK, this breaks the API` 不同意，这会破坏 API |\r\n| ⭐ post-mortem | 故障复盘；事后分析 | `write a post-mortem` 写故障复盘报告 |\r\n| ⭐ PTAL | 请帮忙看一下（Please Take A Look） | `PTAL at this PR` 请看一下这个 PR |\r\n| rabbit hole | 越挖越深的问题 | `fell into a rabbit hole` 越研究越深陷其中 |\r\n| ⭐ reputation | 声望值（Stack Overflow） | `gain reputation` 提升声望值 |\r\n| ⭐ RFC | 征求意见稿（Request For Comments） | `RFC: new config format` 提议讨论新配置格式 |\r\n| rubber duck debugging | 橡皮鸭调试法 | `rubber duck debugging` 对着橡皮鸭讲解来找 bug |\r\n| ⭐ SGTM | 听起来不错（Sounds Good To Me） | `SGTM, let's go` 没问题，开搞吧 |\r\n| ⭐ Show HN | 向 HN 社区展示作品 | `Show HN: I built X` 向 HN 展示我做的东西 |\r\n| ⭐ sprint | 迭代冲刺（Agile） | `two-week sprint` 两周一个迭代 |\r\n| ⭐ TBD | 待定（To Be Determined） | `timeline TBD` 时间待定 |\r\n| ⭐ tech debt | 技术债 | `pay down tech debt` 还技术债 |\r\n| ⭐ TL;DR | 太长不看；摘要 | `TL;DR: use option B` 简而言之：用方案 B |\r\n| ⭐ upvote | 点赞；正面投票 | `most upvoted answer` 最高赞的回答 |\r\n| ⭐ WIP | 进行中（Work In Progress） | `WIP: not ready for review` 开发中，暂不需要 review |\r\n",Xa="# 10 英语语法与常用句式（120）\r\n\r\n> 技术文档、GitHub Issue、代码注释中反复出现的语法结构和实用句型\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ make sure (that) | 确保；务必 | `Make sure you have Node.js installed` |\r\n| ⭐ note that | 注意；请注意 | `Note that this is case-sensitive` 注意区分大小写 |\r\n| ⭐ keep in mind | 牢记；注意 | `Keep in mind that X may change` |\r\n| ⭐ be aware (that/of) | 注意；意识到 | `Be aware of potential side effects` |\r\n| ⭐ in order to | 为了；目的是 | `In order to use this, you need to...` |\r\n| ⭐ so that | 以便；使得 | `refactored so that it's reusable` |\r\n| ⭐ as long as | 只要；前提是 | `works as long as the token is valid` |\r\n| ⭐ as well as | 以及；还有 | `supports JSON as well as XML` |\r\n| ⭐ rather than | 而不是；优于 | `use async/await rather than callbacks` |\r\n| ⭐ instead of | 代替；而不是 | `use Map instead of plain object` |\r\n| ⭐ due to | 由于；因为 | `failed due to network timeout` |\r\n| ⭐ as a result (of) | 结果；因此 | `as a result, the request was rejected` |\r\n| ⭐ therefore | 因此；所以 | `the value is null, therefore it crashes` |\r\n| ⭐ however | 然而；但是 | `works on Mac, however fails on Windows` |\r\n| ⭐ whereas | 然而；而（对比） | `Python is dynamic, whereas TypeScript is typed` |\r\n| ⭐ although / though | 尽管；虽然 | `although it works, it's not ideal` |\r\n| ⭐ regardless of | 不管；无论 | `works regardless of OS` 跨平台 |\r\n| ⭐ in addition (to) | 除此之外；另外 | `In addition, you can also...` |\r\n| ⭐ furthermore | 此外；更进一步 | `Furthermore, the new API supports...` |\r\n| ⭐ on the other hand | 另一方面 | 对比两种方案时常用 |\r\n| ⭐ in contrast | 相比之下；与之相反 | `In contrast, the old version...` |\r\n| ⭐ for example / for instance | 例如 | `for example, you can pass a callback` |\r\n| ⭐ such as | 例如；比如 | `languages such as Python, Go, Rust` |\r\n| ⭐ i.e. | 即；也就是说 | 拉丁语缩写，= \"that is\" |\r\n| ⭐ e.g. | 例如 | 拉丁语缩写，= \"for example\" |\r\n| ⭐ etc. | 等等 | `...and etc.` 列举未完时使用 |\r\n| ⭐ refer to | 参考；指的是 | `refer to the docs` 参考文档 |\r\n| ⭐ according to | 根据；按照 | `according to the spec` 按照规范 |\r\n| ⭐ based on | 基于；根据 | `based on your config` 根据你的配置 |\r\n| ⭐ given (that) | 鉴于；考虑到 | `given that X is true, Y follows` |\r\n| ⭐ assuming (that) | 假设；如果 | `assuming the token is valid` |\r\n| ⭐ in case (of) | 以防；如果 | `in case of error, fallback to default` |\r\n| ⭐ otherwise | 否则；不然 | `handle the error, otherwise it will crash` |\r\n| ⭐ by default | 默认情况下 | `by default, this is disabled` |\r\n| ⭐ out of the box | 开箱即用 | `works out of the box` 无需额外配置 |\r\n| ⭐ under the hood | 底层；内部实现 | `under the hood, it uses WebSockets` |\r\n| ⭐ on behalf of | 代表；替 | `acting on behalf of the user` |\r\n| ⭐ in terms of | 就……而言；关于 | `in terms of performance` 就性能而言 |\r\n| ⭐ with respect to | 关于；就……来说 | `issues with respect to security` |\r\n| ⭐ as opposed to | 而不是；与……相对 | `declarative, as opposed to imperative` |\r\n| ⭐ is used to | 用于；被用来 | `this method is used to parse JSON` |\r\n| ⭐ is designed to | 旨在；设计用于 | `React is designed to build UIs` |\r\n| ⭐ is intended to | 意图是；目的是 | `this flag is intended to disable X` |\r\n| ⭐ is responsible for | 负责；承担 | `this module is responsible for routing` |\r\n| ⭐ is capable of | 能够；可以 | `is capable of handling 10k requests/s` |\r\n| ⭐ is known as | 被称为 | `this pattern is known as singleton` |\r\n| ⭐ is referred to as | 被称作；也叫做 | `commonly referred to as \"type narrowing\"` |\r\n| ⭐ failed to | 未能；失败了 | `failed to connect to database` |\r\n| ⭐ unable to | 无法；不能 | `unable to resolve module` |\r\n| ⭐ could not | 无法 | `could not find file 'index.js'` |\r\n| ⭐ expected X but got Y | 期望 X 但得到 Y | 常见测试失败描述 |\r\n| ⭐ X is not defined | X 未定义 | `ReferenceError: foo is not defined` |\r\n| ⭐ X is not a function | X 不是函数 | `TypeError: X is not a function` |\r\n| ⭐ X has no property Y | X 没有属性 Y | `Cannot read property 'y' of undefined` |\r\n| ⭐ it seems (that) | 似乎；看来 | `It seems that the issue is in line 42` |\r\n| ⭐ it turns out (that) | 结果发现；原来 | `It turns out the bug was a typo` |\r\n| ⭐ I noticed that | 我注意到 | GitHub issue 描述问题时常用 |\r\n| ⭐ I ran into | 我遇到了 | `I ran into this error when...` |\r\n| ⭐ I'm getting | 我收到了（错误） | `I'm getting a 403 error` |\r\n| ⭐ have you tried | 你试过……吗 | `Have you tried clearing the cache?` |\r\n| ⭐ would it be possible to | 是否可以 | 礼貌请求功能或帮助 |\r\n| ⭐ feel free to | 随时；请随意 | `feel free to open an issue` |\r\n| ⭐ let me know if | 如果……请告诉我 | `Let me know if this helps` |\r\n| ⭐ as mentioned | 如前所述 | `as mentioned above` 如上所述 |\r\n| ⭐ as shown | 如图所示；如所示 | `as shown in the example` 如示例所示 |\r\n| ⭐ for more details | 更多详情 | `for more details, see the docs` |\r\n| ⭐ see also | 另见；参考 | `See also: related issues` |\r\n| ⭐ to sum up | 总结来说 | `To sum up, avoid using X for Y` |\r\n| ⭐ in summary | 总结 | `In summary, the fix involves...` |\r\n| ⭐ that said | 话虽如此 | `That said, it works for most cases` |\r\n| ⭐ to be fair | 公平地说 | `To be fair, this is an edge case` |\r\n| ⭐ strictly speaking | 严格来说 | `Strictly speaking, this is undefined behavior` |\r\n| ⭐ in practice | 实际上；实践中 | `In practice, you rarely need this` |\r\n| ⭐ in theory | 理论上 | `In theory it should work, but...` |\r\n| ⭐ for the sake of | 为了……起见 | `for the sake of simplicity` 为简单起见 |\r\n| ⭐ at the expense of | 以……为代价 | `fast, at the expense of memory` |\r\n| ⭐ trade-off | 权衡；取舍 | `there's a trade-off between speed and memory` |\r\n| ⭐ pros and cons | 优缺点 | `the pros and cons of this approach` |\r\n| ⭐ as a rule of thumb | 根据经验；一般来说 | `As a rule of thumb, avoid premature optimization` |\r\n| ⭐ best practice | 最佳实践 | `follow best practices` |\r\n| ⭐ common pitfall | 常见陷阱 | `a common pitfall is forgetting to await` |\r\n| ⭐ gotcha | 坑；容易踩的陷阱 | `this is a common gotcha in JS` |\r\n| ⭐ caveat | 警告；注意事项 | `one caveat: this only works in Chrome` |\r\n| ⭐ disclaimer | 免责声明；说明 | `disclaimer: this is not production-ready` |\r\n| ⭐ heads up | 提前告知；注意 | `heads up: this API will be removed in v3` |\r\n| ⭐ breaking | 破坏性的 | `⚠️ breaking change in this version` |\r\n| ⭐ wip | 进行中（Work In Progress） | `WIP: do not merge` 草稿勿合并 |\r\n| ⭐ lgtm | 看起来不错（Looks Good To Me） | 代码审查通过时常用 |\r\n| ⭐ tldr | 太长不看（Too Long Didn't Read） | `TL;DR: just use option A` |\r\n| ⭐ fyi | 供参考（For Your Information） | `FYI, this was fixed in v2.1` |\r\n| ⭐ afaik | 据我所知（As Far As I Know） | `AFAIK, this is the intended behavior` |\r\n| ⭐ iirc | 如果我没记错（If I Recall Correctly） | `IIRC, this was changed in v1.5` |\r\n| ⭐ imho | 在我看来（In My Humble Opinion） | `IMHO, the API design could be better` |\r\n",Ya="# 11 技术阅读高频词（180）\r\n\r\n> GitHub Issues、Stack Overflow、MDN、Hacker News 等技术平台的超高频词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ workaround | 临时解决方案；变通方法 | `a quick workaround` 快速的变通方法 |\r\n| ⭐ deprecated | 已废弃的；不推荐使用 | `deprecated API` 废弃的接口 |\r\n| ⭐ snippet | 代码片段 | `code snippet` 代码片段 |\r\n| ⭐ iterate / iteration | 迭代；遍历 | `iterate over an array` 遍历数组 |\r\n| ⭐ instantiate | 实例化 | `instantiate a class` 实例化一个类 |\r\n| ⭐ implement / implementation | 实现；落地 | `implement a feature` 实现一个功能 |\r\n| ⭐ workaround | 临时方案 | `found a workaround` 找到了变通方法 |\r\n| ⭐ reproducible | 可复现的 | `reproducible bug` 可复现的 bug |\r\n| ⭐ minimal reproducible example | 最小复现示例 | Stack Overflow 提问必备 |\r\n| ⭐ expected behavior | 预期行为 | `this is expected behavior` 这是预期行为 |\r\n| ⭐ regression | 回归；功能退化 | `regression bug` 新版本引入的旧 bug |\r\n| ⭐ upstream / downstream | 上游 / 下游 | `upstream repository` 上游仓库 |\r\n| ⭐ stale | 过期的；陈旧的 | `stale cache` 过期缓存；stale bot 关闭长期未更新的 issue |\r\n| ⭐ milestone | 里程碑；版本节点 | `v2.0 milestone` 2.0 版本里程碑 |\r\n| ⭐ assignee | 被指派者 | `assign to me` 指派给我 |\r\n| ⭐ label | 标签 | `bug / enhancement / help wanted` 常见 GitHub 标签 |\r\n| ⭐ pinned | 置顶的 | `pinned issue` 置顶 issue |\r\n| ⭐ draft | 草稿；草案 | `draft PR` 草稿状态的 PR |\r\n| ⭐ squash | 压缩合并提交 | `squash and merge` 合并时压缩提交记录 |\r\n| ⭐ revert | 回滚；撤销 | `revert this commit` 回滚这个提交 |\r\n| ⭐ cherry-pick | 摘取特定提交 | `cherry-pick a commit` 从其他分支摘取提交 |\r\n| ⭐ patch | 补丁；修复 | `security patch` 安全补丁 |\r\n| ⭐ polyfill | 垫片；兼容补丁 | `fetch polyfill` 为旧浏览器补充 fetch 支持 |\r\n| ⭐ specification / spec | 规范；技术规格 | `ECMAScript spec` JS 语言规范 |\r\n| ⭐ compatibility | 兼容性 | `browser compatibility` 浏览器兼容性 |\r\n| ⭐ fallback | 降级方案；回退 | `fallback to default` 回退到默认值 |\r\n| ⭐ opinionated | 有主见的；约定强制的 | `opinionated framework` 强约定框架（如 Rails） |\r\n| ⭐ boilerplate | 样板代码；模板 | `boilerplate code` 重复的模板代码 |\r\n| ⭐ scaffold / scaffolding | 脚手架 | `scaffold a project` 用脚手架创建项目 |\r\n| ⭐ convention | 惯例；约定 | `convention over configuration` 约定优于配置 |\r\n| ⭐ opaque | 不透明的；难理解的 | `opaque error message` 含义不明的报错信息 |\r\n| ⭐ verbose | 冗长的；详细输出 | `verbose mode` 详细日志模式 |\r\n| ⭐ idiomatic | 符合语言惯例的 | `idiomatic Go` 地道的 Go 写法 |\r\n| ⭐ concurrency | 并发 | `concurrency issues` 并发问题 |\r\n| ⭐ thread-safe | 线程安全的 | `thread-safe operation` 线程安全操作 |\r\n| ⭐ race condition | 竞争条件 | 多线程访问同一资源时的 bug |\r\n| ⭐ deadlock | 死锁 | 两个线程互相等待对方释放资源 |\r\n| ⭐ bottleneck | 瓶颈 | `performance bottleneck` 性能瓶颈 |\r\n| ⭐ benchmark | 基准测试 | `run a benchmark` 跑基准测试 |\r\n| ⭐ profiling | 性能分析 | `CPU profiling` CPU 性能分析 |\r\n| ⭐ memory leak | 内存泄漏 | 对象不被释放导致内存持续增长 |\r\n| ⭐ garbage collection | 垃圾回收 | `GC pause` 垃圾回收停顿 |\r\n| ⭐ heap / stack | 堆 / 栈 | `heap memory` 堆内存；`call stack` 调用栈 |\r\n| ⭐ serialize / deserialize | 序列化 / 反序列化 | `serialize to JSON` 序列化为 JSON |\r\n| ⭐ encode / decode | 编码 / 解码 | `base64 encode` Base64 编码 |\r\n| ⭐ hash | 哈希；散列 | `hash a password` 对密码哈希 |\r\n| ⭐ encrypt / decrypt | 加密 / 解密 | `encrypt with AES` 用 AES 加密 |\r\n| ⭐ token | 令牌；标记 | `JWT token` 身份令牌 |\r\n| ⭐ payload | 载荷；数据体 | `request payload` 请求体数据 |\r\n| ⭐ schema | 数据结构定义；模式 | `JSON schema` / `database schema` |\r\n| ⭐ constraint | 约束 | `foreign key constraint` 外键约束 |\r\n| ⭐ transaction | 事务 | `database transaction` 数据库事务 |\r\n| ⭐ rollback | 回滚（事务/部署） | `rollback the migration` 回滚数据库迁移 |\r\n| ⭐ migration | 迁移 | `database migration` 数据库结构迁移 |\r\n| ⭐ seed | 种子数据 | `seed the database` 填充初始数据 |\r\n| ⭐ scaffold | 脚手架 | `rails scaffold` 自动生成 CRUD 代码 |\r\n| ⭐ middleware | 中间件 | `Express middleware` Express 中间件 |\r\n| ⭐ interceptor | 拦截器 | `request interceptor` 请求拦截器 |\r\n| ⭐ hook | 钩子；生命周期函数 | `React hooks` / `git hooks` |\r\n| ⭐ lifecycle | 生命周期 | `component lifecycle` 组件生命周期 |\r\n| ⭐ singleton | 单例 | `singleton pattern` 单例模式 |\r\n| ⭐ factory | 工厂模式 | `factory function` 工厂函数 |\r\n| ⭐ observer | 观察者 | `observer pattern` 观察者模式 |\r\n| ⭐ dependency injection | 依赖注入 | `DI container` 依赖注入容器 |\r\n| ⭐ abstraction | 抽象 | `layer of abstraction` 抽象层 |\r\n| ⭐ coupling | 耦合 | `loose coupling` 松耦合 |\r\n| ⭐ cohesion | 内聚性 | `high cohesion` 高内聚 |\r\n| ⭐ solid principles | SOLID 原则 | 面向对象设计五大原则 |\r\n| ⭐ refactor | 重构 | `refactor the codebase` 重构代码库 |\r\n| ⭐ technical debt | 技术债 | 快速开发留下的代码质量问题 |\r\n| ⭐ code review / CR | 代码审查 | `left a comment in CR` 在代码审查中留评论 |\r\n| ⭐ linter | 代码风格检查工具 | `ESLint` / `run the linter` |\r\n| ⭐ formatter | 代码格式化工具 | `Prettier formatter` |\r\n| ⭐ type-safe | 类型安全的 | `TypeScript is type-safe` |\r\n| ⭐ infer / inference | 推断；类型推断 | `type inference` 类型推断 |\r\n| ⭐ generic | 泛型 | `generic function` 泛型函数 |\r\n| ⭐ overload | 重载 | `function overloading` 函数重载 |\r\n| ⭐ override | 覆盖；重写 | `override a method` 重写父类方法 |\r\n| ⭐ inherit / inheritance | 继承 | `class inheritance` 类继承 |\r\n| ⭐ polymorphism | 多态 | 面向对象三大特性之一 |\r\n| ⭐ encapsulation | 封装 | 隐藏内部实现，对外暴露接口 |\r\n| ⭐ immutable | 不可变的 | `immutable object` 不可变对象 |\r\n| ⭐ mutable | 可变的 | `mutable state` 可变状态 |\r\n| ⭐ side effect | 副作用 | 函数修改了外部状态 |\r\n| ⭐ pure function | 纯函数 | 相同输入永远返回相同输出，无副作用 |\r\n| ⭐ callback | 回调函数 | `callback hell` 回调地狱 |\r\n| ⭐ promise | Promise 异步对象 | `resolve / reject a promise` |\r\n| ⭐ async / await | 异步语法糖 | `async function` / `await the result` |\r\n| ⭐ observable | 可观察对象（RxJS） | `subscribe to an observable` |\r\n| ⭐ stream | 流 | `readable stream` 可读流 |\r\n| ⭐ buffer | 缓冲区 | `buffer overflow` 缓冲区溢出 |\r\n| ⭐ queue | 队列 | `message queue` 消息队列 |\r\n| ⭐ stack overflow | 栈溢出 | 递归太深导致的崩溃，也是那个著名网站 |\r\n| ⭐ runtime error | 运行时错误 | 程序运行中抛出的错误 |\r\n| ⭐ compile-time | 编译时 | `compile-time error` 编译期错误 |\r\n| ⭐ edge case | 边界情况 | `handle edge cases` 处理边界情况 |\r\n| ⭐ regression test | 回归测试 | 确保新改动没有破坏已有功能 |\r\n| ⭐ unit test | 单元测试 | `write unit tests` 编写单元测试 |\r\n| ⭐ mock | 模拟对象 | `mock an API call` 模拟接口调用 |\r\n| ⭐ assertion | 断言 | `assert that value equals 1` |\r\n| ⭐ coverage | 覆盖率 | `test coverage 80%` 测试覆盖率 80% |\r\n| ⭐ end-to-end / e2e | 端到端测试 | `e2e testing with Playwright` |\r\n| acquisition | 收购 | `company acquisition` 公司被收购 |\r\n| valuation | 估值 | `$1B valuation` 10 亿美元估值 |\r\n| pivot | 转型；转变方向 | `the startup pivoted` 初创公司转型 |\r\n| disruption | 颠覆；行业变革 | `disruptive technology` 颠覆性技术 |\r\n| scalability | 可扩展性 | `horizontal scalability` 水平扩展能力 |\r\n| traction | 市场牵引力 | `gaining traction` 获得市场认可 |\r\n| open source | 开源 | `open source project` 开源项目 |\r\n| contributor | 贡献者 | `top contributor` 主要贡献者 |\r\n| maintainer | 维护者 | `project maintainer` 项目维护者 |\r\n| release notes | 发布说明 | `read the release notes` 读发布日志 |\r\n| changelog | 变更日志 | `CHANGELOG.md` 版本变更记录 |\r\n| semver | 语义化版本 | `major.minor.patch` 版本格式 |\r\n| breaking change | 破坏性改动 | 升级后需要修改代码才能兼容 |\r\n| backward compatible | 向后兼容 | 新版本兼容旧代码 |\r\n| opt-in / opt-out | 主动启用 / 默认启用可关闭 | `opt-in feature` 需手动开启的功能 |\r\n",Qa=`# 12 特朗普 & 马斯克用语（100）\r
\r
> 读懂科技政治推文必备：特朗普演讲高频词、马斯克口头禅、硅谷右派文化词\r
\r
## 特朗普标志性用语\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ tremendous | 巨大的；极好的 | 特朗普最爱词，\`a tremendous deal\` 极棒的交易 |\r
| ⭐ huge | 巨大的 | 发音被模仿为 "yuge"，\`it's gonna be huge\` |\r
| ⭐ believe me | 相信我 | 演讲口头禅，增强语气 |\r
| ⭐ fake news | 假新闻 | 攻击主流媒体的标志性词汇 |\r
| ⭐ witch hunt | 政治迫害；猎巫 | \`it's a total witch hunt\` 这是彻头彻尾的政治迫害 |\r
| ⭐ hoax | 骗局；闹剧 | \`the Russia hoax\` 俄罗斯通谋骗局 |\r
| ⭐ rigged | 被操控的；不公平的 | \`the election was rigged\` 选举被操纵了 |\r
| ⭐ drain the swamp | 清除腐败 | 比喻清除华盛顿政客腐败生态 |\r
| ⭐ MAGA | 让美国再次伟大 | Make America Great Again，特朗普竞选口号 |\r
| ⭐ America First | 美国优先 | 对外政策核心理念 |\r
| ⭐ deep state | 深层政府 | 指隐藏在政府内的反对势力 |\r
| ⭐ mainstream media / MSM | 主流媒体 | 特朗普常批评的媒体机构 |\r
| ⭐ radical left | 激进左派 | \`the radical left Democrats\` |\r
| ⭐ enemy of the people | 人民公敌 | 用于攻击媒体，\`fake news is the enemy\` |\r
| ⭐ perfect | 完美的 | \`a perfect phone call\` 那通完美的电话（弹劾风波） |\r
| ⭐ disaster | 灾难 | \`total disaster\` 彻头彻尾的灾难 |\r
| ⭐ loser / winner | 输家 / 赢家 | 特朗普世界观的基本二元划分 |\r
| ⭐ nasty | 讨厌的；恶劣的 | \`nasty woman\` 用于攻击对手 |\r
| ⭐ tariff | 关税 | \`impose tariffs\` 加征关税，贸易战核心词 |\r
| ⭐ deal | 交易；协议 | \`make a deal\` / 《交易的艺术》The Art of the Deal |\r
| ⭐ mandate | 授权；任务 | \`electoral mandate\` 选举授权 |\r
| ⭐ rally | 竞选集会 | \`hold a rally\` 举办集会演讲 |\r
| ⭐ impeach / impeachment | 弹劾 | 两次遭弹劾，\`impeach the president\` |\r
| ⭐ indictment | 起诉；大陪审团指控 | \`federal indictment\` 联邦起诉 |\r
| ⭐ witch | 女巫（比喻） | \`no collusion, no obstruction\` 无勾结无阻挠 |\r
| ⭐ unprecedented | 史无前例的 | 常用于描述自己的成就或遭遇 |\r
| ⭐ border | 边境 | \`secure the border\` 封锁边境 |\r
| ⭐ deportation | 驱逐出境 | \`mass deportation\` 大规模遣返移民 |\r
| ⭐ executive order | 行政令 | \`sign an executive order\` 签署行政令 |\r
| ⭐ DOGE | 政府效率部 | Department of Government Efficiency，马斯克主导 |\r
\r
## 马斯克标志性用语\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ first principles | 第一性原理 | 从基本事实出发推理，不类比，马斯克思维方式 |\r
| ⭐ order of magnitude | 数量级 | \`10x improvement\` 10 倍提升，马斯克常用尺度 |\r
| ⭐ iterate | 迭代 | \`fail fast, iterate\` 快速失败，快速迭代 |\r
| ⭐ feedback loop | 反馈循环 | \`tight feedback loop\` 紧密的反馈回路 |\r
| ⭐ physics-based | 基于物理的 | 用物理规律验证可行性下限 |\r
| ⭐ obviously | 显然；明显地 | 马斯克推文高频词，\`obviously this is wrong\` |\r
| ⭐ frankly | 坦白说；直白地 | \`frankly, it's embarrassing\` 坦率地说，这很丢人 |\r
| ⭐ to be clear | 说清楚；明确一点 | 澄清立场时的口头禅 |\r
| ⭐ reusable | 可复用的 | \`reusable rocket\` 可回收火箭，SpaceX 核心理念 |\r
| ⭐ multiplanetary | 多星球的 | \`become a multiplanetary species\` 成为多星球物种 |\r
| ⭐ sustainable | 可持续的 | \`sustainable energy\` Tesla 使命 |\r
| ⭐ existential risk | 生存风险 | AI 可能威胁人类存亡 |\r
| ⭐ simulation | 模拟；仿真 | \`we might be living in a simulation\` 模拟宇宙论 |\r
| ⭐ accelerationism | 加速主义 | 推动技术快速发展、加速变革 |\r
| ⭐ free speech absolutist | 绝对言论自由主义者 | 马斯克自我标榜的身份 |\r
| ⭐ based | 不随波逐流的；说真话的 | 网络右派文化词，\`that's based\` 这很硬核 |\r
| ⭐ redpill | 红药丸；觉醒 | 源自《黑客帝国》，指接受"真相"/转向保守 |\r
| ⭐ woke | 觉醒文化（贬义） | 马斯克等人批评的左派政治正确文化 |\r
| ⭐ DEI | 多元平等包容（批评语境） | Diversity Equity Inclusion，被部分人批评为反效果 |\r
| ⭐ sycophancy | 谄媚；阿谀奉承 | \`avoid sycophancy\` AI 不应一味迎合用户 |\r
| ⭐ the algorithm | 算法 | \`X's algorithm\` X 平台的推荐算法，马斯克曾开源 |\r
| ⭐ ratio | 被反比 | 评论数远多于点赞数，说明推文翻车 |\r
| ⭐ technically | 从技术上讲 | 马斯克推文爱用，\`technically it's correct\` |\r
| ⭐ lol | 哈哈 | 马斯克推文标志性回复方式 |\r
| ⭐ 🔥 / 💀 | 火 / 笑死 | 马斯克常用 emoji 表达认同 |\r
| ⭐ grok | 深刻理解；Grok AI | 源自科幻小说，也是马斯克旗下 AI 名字 |\r
| ⭐ boring | 无聊的；The Boring Company | 马斯克挖隧道公司，名字玩"无聊"双关 |\r
| ⭐ efficiency | 效率 | \`government efficiency\` DOGE 的核心词 |\r
| ⭐ waste / fraud / abuse | 浪费/欺诈/滥用 | DOGE 削减政府开支的三大打击目标 |\r
| ⭐ merit | 功绩；能力 | \`meritocracy\` 能力主义，反对 DEI 的核心主张 |\r
\r
## 硅谷政治文化通用词\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ tech bro | 科技兄弟 | 硅谷男性科技精英的戏称 |\r
| ⭐ effective altruism / EA | 有效利他主义 | 用数据最大化善意影响力的哲学，SBF 等人信奉 |\r
| ⭐ longtermism | 长期主义 | 为遥远未来人类利益做决策的哲学 |\r
| ⭐ e/acc | 有效加速主义 | Effective Accelerationism，拥抱技术加速进步 |\r
| ⭐ doomer | 末日论者 | 认为 AI 会毁灭人类的人 |\r
| ⭐ accelerationist | 加速主义者 | 推动技术/社会快速变革的人 |\r
| ⭐ disruption | 颠覆 | \`disruptive technology\` 颠覆性技术 |\r
| ⭐ pivot | 转型 | \`the company pivoted to AI\` 公司转型做 AI |\r
| ⭐ narrative | 叙事；话语权 | \`control the narrative\` 掌控舆论叙事 |\r
| ⭐ propaganda | 宣传；洗脑 | \`state propaganda\` 官方宣传机器 |\r
`,Za="# 12 职场与协作\r\n\r\n> 代码审查、技术沟通、日常协作必备词汇\r\n\r\n## 代码审查 (Code Review)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ LGTM | Looks Good To Me | `LGTM 👍` 审批通过 |\r\n| ⭐ nit / nitpick | 吹毛求疵的小问题 | `nit: rename this variable` 小问题：变量名改一下 |\r\n| ⭐ blocking | 阻塞性问题（必须改）| `this is blocking` 这必须改才能合 |\r\n| ⭐ non-blocking | 非阻塞问题（建议）| `non-blocking suggestion` 建议性意见 |\r\n| ⭐ suggestion | 建议（GitHub功能）| `left a suggestion` 留了个修改建议 |\r\n| ⭐ approve | 批准；同意 | `request changes` vs `approve` |\r\n| ⭐ request changes | 请求修改 | PR状态：需要修改 |\r\n| ⭐ PTAL | Please Take A Look | `PTAL @someone` 请看一下 |\r\n| ⭐ CC | Carbon Copy | `CC @manager` 抄送某人 |\r\n| workaround | 临时解决方案 | `temporary workaround` 临时绕过方案 |\r\n| follow-up | 后续跟进 | `address in follow-up` 后续再处理 |\r\n| out of scope | 超出范围 | `this is out of scope` 超出本次范围 |\r\n| edge case | 边界情况 | `handle this edge case` 处理这个边界情况 |\r\n| corner case | 极端情况 | `rare corner case` 罕见的极端场景 |\r\n| sanity check | 合理性检查 | `do a sanity check` 检查是否合理 |\r\n\r\n## 系统设计 (System Design)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ scalability | 可扩展性 | `horizontal scalability` 水平扩展能力 |\r\n| ⭐ availability | 可用性 | `99.99% availability` 四个9可用性 |\r\n| ⭐ consistency | 一致性 | `eventual consistency` 最终一致性 |\r\n| ⭐ latency | 延迟 | `low latency requirement` 低延迟要求 |\r\n| ⭐ throughput | 吞吐量 | `high throughput system` 高吞吐系统 |\r\n| ⭐ bottleneck | 瓶颈 | `performance bottleneck` 性能瓶颈 |\r\n| ⭐ trade-off | 权衡；取舍 | `there's always a trade-off` 总有取舍 |\r\n| ⭐ single point of failure | 单点故障 | `avoid SPOF` 避免单点故障 |\r\n| ⭐ fault tolerance | 容错性 | `fault tolerant design` 容错设计 |\r\n| ⭐ resilience | 弹性；恢复力 | `system resilience` 系统弹性 |\r\n| ⭐ backpressure | 背压；反压 | `apply backpressure` 施加反压防止过载 |\r\n| ⭐ circuit breaker | 熔断器 | `circuit breaker pattern` 熔断模式 |\r\n| ⭐ rate limiting | 限流 | `implement rate limiting` 实现限流 |\r\n| ⭐ load balancing | 负载均衡 | `LB distributes traffic` 负载均衡分发流量 |\r\n| ⭐ hot spot | 热点 | `data hot spot` 数据热点 |\r\n\r\n## 安全相关 (Security)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ vulnerability | 漏洞 | `security vulnerability` 安全漏洞 |\r\n| ⭐ exploit | 利用；攻击 | `exploit the vulnerability` 利用漏洞攻击 |\r\n| ⭐ CVE | 公共漏洞披露 | `CVE-2024-1234` 漏洞编号 |\r\n| ⭐ sanitize | 净化；消毒 | `sanitize user input` 净化用户输入 |\r\n| ⭐ validate | 验证 | `validate all inputs` 验证所有输入 |\r\n| ⭐ encrypt / decrypt | 加密/解密 | `encrypt at rest` 静态加密 |\r\n| ⭐ hash | 哈希 | `hash password with bcrypt` |\r\n| ⭐ salt | 盐值 | `password + salt` 加盐防彩虹表 |\r\n| ⭐ token | 令牌 | `JWT token` / `access token` |\r\n| ⭐ privilege | 权限 | `privilege escalation` 权限提升 |\r\n| ⭐ permission | 许可 | `file permission` 文件权限 |\r\n| ⭐ sandbox | 沙箱 | `run in sandbox` 沙箱运行 |\r\n| ⭐ payload | 载荷；有效负载 | `request payload` / `malicious payload` |\r\n| ⭐ brute force | 暴力破解 | `brute force attack` 暴力破解攻击 |\r\n| ⭐ man-in-the-middle | 中间人攻击 | `MITM attack` 中间人攻击 |\r\n\r\n## 测试与质量 (Testing)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ mock | 模拟对象 | `mock the database` 模拟数据库 |\r\n| ⭐ stub | 存根/桩 | `stub external API` 桩外部API |\r\n| ⭐ spy | 间谍函数 | `spy on function call` 监视函数调用 |\r\n| ⭐ coverage | 覆盖率 | `100% code coverage` 代码覆盖率100% |\r\n| ⭐ regression | 回归 | `prevent regression` 防止回归 |\r\n| ⭐ flaky | 不稳定的 | `flaky test` 不稳定/偶发失败的测试 |\r\n| ⭐ brittle | 脆弱的 | `brittle test` 容易坏的测试 |\r\n| ⭐ assertion | 断言 | `write an assertion` 写断言 |\r\n| ⭐ fixture | 测试夹具 | `test fixture` 测试固定数据 |\r\n| ⭐ setup / teardown | 准备/清理 | `beforeEach setup` 每个测试前准备 |\r\n| ⭐ test suite | 测试套件 | `run the test suite` 跑整套测试 |\r\n| ⭐ smoke test | 冒烟测试 | `quick smoke test` 快速冒烟测试 |\r\n| ⭐ sanity test | 健全性测试 | `sanity check before deploy` |\r\n| ⭐ integration test | 集成测试 | `integration test with DB` |\r\n| ⭐ E2E | 端到端测试 | `E2E test with Playwright` |\r\n\r\n## 职场沟通 (Communication)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ FYI | For Your Information | `FYI: schedule changed` 供参考 |\r\n| ⭐ ASAP | As Soon As Possible | `fix this ASAP` 尽快修复 |\r\n| ⭐ ETA | 预计完成时间 | `what's the ETA?` 预计多久？ |\r\n| ⭐ TBD | To Be Determined | `date TBD` 日期待定 |\r\n| ⭐ TIL | Today I Learned | `TIL about this trick` 今天学到 |\r\n| ⭐ AFAIK | As Far As I Know | `AFAIK it's not supported` 据我所知 |\r\n| ⭐ IMO / IMHO | 我认为/恕我直言 | `IMHO this is better` |\r\n| ⭐ onboard | 入职；上手 | `onboard new hire` 新人入职培训 |\r\n| ⭐ offboard | 离职交接 | `offboard process` 离职流程 |\r\n| ⭐ take ownership | 负责到底 | `take ownership of this` 你负责这个 |\r\n| ⭐ drive | 推动；主导 | `drive this initiative` 推动这个项目 |\r\n| ⭐ align | 对齐；同步 | `align with the team` 和团队对齐 |\r\n| ⭐ sync | 同步；会议 | `quick sync` 快速同步会议 |\r\n| ⭐ circle back | 回头再聊 | `let's circle back` 我们回头再说 |\r\n| ⭐ touch base | 碰头；联系 | `touch base tomorrow` 明天碰个头 |\r\n| ⭐ follow up | 跟进 | `follow up on this issue` 跟进这个问题 |\r\n| ⭐ loop in | 拉某人进群/知会 | `loop in the manager` 把经理拉进来 |\r\n| ⭐ table | 搁置（议题）| `let's table this` 先搁置这个 |\r\n| ⭐ punt | 推迟；踢皮球 | `punt to next sprint` 推迟到下个迭代 |\r\n| ⭐ escalate | 升级（上报）| `escalate to VP` 升级到VP |\r\n",ec='# 13 Python 高频词汇（100）\r\n\r\n> Python 语法、标准库、生态工具、错误信息常见词汇\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ interpreter | 解释器 | `Python interpreter` Python 逐行执行代码的程序 |\r\n| ⭐ script | 脚本 | `run a script` 运行一个 .py 文件 |\r\n| ⭐ module | 模块 | `import a module` 导入模块；一个 .py 文件就是一个模块 |\r\n| ⭐ package | 包 | 含 `__init__.py` 的目录，多个模块的集合 |\r\n| ⭐ pip | 包管理工具 | `pip install requests` 安装第三方包 |\r\n| ⭐ virtual environment | 虚拟环境 | `python -m venv .venv` 隔离项目依赖 |\r\n| ⭐ requirements.txt | 依赖清单 | `pip freeze > requirements.txt` 导出依赖 |\r\n| ⭐ import | 导入 | `import os` / `from pathlib import Path` |\r\n| ⭐ def | 定义函数 | `def func(args):` Python 函数定义关键字 |\r\n| ⭐ lambda | 匿名函数 | `lambda x: x * 2` 单行匿名函数 |\r\n| ⭐ class | 类 | `class MyClass:` 定义类 |\r\n| ⭐ instance | 实例 | `obj = MyClass()` 创建类的实例 |\r\n| ⭐ self | 自身引用 | 类方法第一个参数，代表实例本身 |\r\n| ⭐ __init__ | 构造方法 | 类实例化时自动调用的初始化方法 |\r\n| ⭐ __str__ / __repr__ | 字符串表示 | `__str__` 用于打印，`__repr__` 用于调试 |\r\n| ⭐ dunder / magic method | 魔法方法 | 双下划线方法，如 `__len__` / `__iter__` |\r\n| ⭐ decorator | 装饰器 | `@property` / `@staticmethod` / `@functools.wraps` |\r\n| ⭐ generator | 生成器 | `yield` 关键字产生的惰性序列，节省内存 |\r\n| ⭐ yield | 产出；暂停 | `yield value` 生成器函数中返回值并暂停 |\r\n| ⭐ comprehension | 推导式 | `[x for x in list]` 列表/字典/集合推导式 |\r\n| ⭐ iterable | 可迭代对象 | 可以用 `for` 遍历的对象，如 list / dict / str |\r\n| ⭐ iterator | 迭代器 | 实现 `__iter__` 和 `__next__` 的对象 |\r\n| ⭐ context manager | 上下文管理器 | `with open(\'file\') as f:` 自动管理资源 |\r\n| ⭐ exception | 异常 | `try / except / finally` 处理运行时错误 |\r\n| ⭐ raise | 抛出异常 | `raise ValueError("invalid")` 主动抛出异常 |\r\n| ⭐ traceback | 错误堆栈 | 报错时打印的调用链信息 |\r\n| ⭐ assertion | 断言 | `assert x > 0, "must be positive"` |\r\n| ⭐ type hint | 类型注解 | `def foo(x: int) -> str:` 静态类型提示 |\r\n| ⭐ annotation | 注解 | 函数参数和返回值的类型声明 |\r\n| ⭐ dataclass | 数据类 | `@dataclass` 自动生成 `__init__` 等方法的类 |\r\n| ⭐ Enum | 枚举类型 | `from enum import Enum` 定义常量集合 |\r\n| ⭐ ABC / abstract | 抽象基类 | `from abc import ABC, abstractmethod` |\r\n| ⭐ mixin | 混入类 | 通过多继承复用功能的设计模式 |\r\n| ⭐ slot | 槽（内存优化） | `__slots__` 限制实例属性，减少内存占用 |\r\n| ⭐ pickle | 序列化 | `pickle.dump/load` 将对象序列化为字节流 |\r\n| ⭐ json | JSON 处理 | `import json` / `json.dumps / json.loads` |\r\n| ⭐ pathlib | 路径操作 | `from pathlib import Path` 面向对象的路径处理 |\r\n| ⭐ os / sys | 系统接口 | `os.path` 路径操作；`sys.argv` 命令行参数 |\r\n| ⭐ subprocess | 子进程 | `subprocess.run(["ls", "-l"])` 执行系统命令 |\r\n| ⭐ threading | 多线程 | `import threading` Python 线程模块 |\r\n| ⭐ multiprocessing | 多进程 | 绕过 GIL 实现真并行，CPU 密集型任务 |\r\n| ⭐ GIL | 全局解释器锁 | Global Interpreter Lock，Python 多线程的主要限制 |\r\n| ⭐ asyncio | 异步 IO | `async def` / `await` Python 协程框架 |\r\n| ⭐ coroutine | 协程 | `async def` 定义的异步函数，可被 `await` |\r\n| ⭐ event loop | 事件循环 | asyncio 的调度核心，`asyncio.run()` |\r\n| ⭐ logging | 日志模块 | `import logging` / `logging.info("msg")` |\r\n| ⭐ argparse | 命令行参数解析 | `import argparse` 解析 CLI 参数 |\r\n| ⭐ pytest | 测试框架 | `pytest test_foo.py` Python 主流测试工具 |\r\n| ⭐ fixture | 测试夹具 | pytest 中预置测试环境的装饰器 `@pytest.fixture` |\r\n| ⭐ mock | 模拟对象 | `from unittest.mock import MagicMock` |\r\n| ⭐ coverage | 测试覆盖率 | `pytest --cov` 统计代码被测试覆盖的比例 |\r\n| ⭐ linter | 代码检查 | `flake8` / `pylint` 检查代码风格和错误 |\r\n| ⭐ formatter | 格式化工具 | `black` / `ruff` 自动格式化 Python 代码 |\r\n| ⭐ type checker | 类型检查器 | `mypy` / `pyright` 静态类型检查工具 |\r\n| ⭐ ruff | 快速 linter | 用 Rust 写的极速 Python linter，替代 flake8 |\r\n| ⭐ uv | 新一代包管理 | 用 Rust 写的极速 pip 替代品，`uv install` |\r\n| ⭐ poetry | 依赖管理 | `pyproject.toml` 管理项目依赖和发布 |\r\n| ⭐ pyproject.toml | 项目配置 | Python 项目的现代配置文件，替代 setup.py |\r\n| ⭐ wheel | 分发格式 | `.whl` Python 包的二进制分发格式 |\r\n| ⭐ PyPI | Python 包索引 | Python Package Index，`pip` 下载包的来源 |\r\n| ⭐ namespace | 命名空间 | 变量/函数名的作用域，`global` / `local` / `builtin` |\r\n| ⭐ scope | 作用域 | LEGB 规则：Local → Enclosing → Global → Built-in |\r\n| ⭐ closure | 闭包 | 内层函数捕获外层函数变量的机制 |\r\n| ⭐ mutable / immutable | 可变 / 不可变 | `list` 可变；`tuple / str / int` 不可变 |\r\n| ⭐ shallow copy | 浅拷贝 | `list.copy()` 只复制一层，嵌套对象共享引用 |\r\n| ⭐ deep copy | 深拷贝 | `copy.deepcopy()` 完全独立复制，包括嵌套 |\r\n| ⭐ unpacking | 解包 | `a, b = (1, 2)` / `*args, **kwargs` |\r\n| ⭐ walrus operator | 海象运算符 | `:=` 在表达式内赋值，Python 3.8+ |\r\n| ⭐ f-string | 格式化字符串 | `` f"Hello {name}" `` Python 3.6+ 字符串模板 |\r\n| ⭐ slice | 切片 | `list[1:3]` / `str[::-1]` 反转字符串 |\r\n| ⭐ dict comprehension | 字典推导式 | `{k: v for k, v in items}` |\r\n| ⭐ set | 集合 | `{1, 2, 3}` 无序不重复，`set.intersection()` |\r\n| ⭐ frozenset | 不可变集合 | 可作为字典 key 的不可变集合 |\r\n| ⭐ defaultdict | 默认值字典 | `from collections import defaultdict` |\r\n| ⭐ Counter | 计数器 | `from collections import Counter` 统计频次 |\r\n| ⭐ namedtuple | 具名元组 | `from collections import namedtuple` 轻量数据类 |\r\n| ⭐ heapq | 堆队列 | `import heapq` 实现优先队列 |\r\n| ⭐ functools | 函数工具 | `@functools.lru_cache` 缓存；`functools.reduce` |\r\n| ⭐ itertools | 迭代工具 | `itertools.chain / product / combinations` |\r\n| ⭐ numpy | 数值计算 | `import numpy as np` 矩阵运算，AI/数据科学基础 |\r\n| ⭐ pandas | 数据分析 | `import pandas as pd` DataFrame 数据处理 |\r\n| ⭐ matplotlib | 可视化 | `import matplotlib.pyplot as plt` 绘图 |\r\n| ⭐ requests | HTTP 客户端 | `import requests` 最流行的 HTTP 库 |\r\n| ⭐ FastAPI | 异步 Web 框架 | 基于类型注解的现代 API 框架，自动生成文档 |\r\n| ⭐ Flask | 轻量 Web 框架 | 微框架，适合小型 API 和原型开发 |\r\n| ⭐ Django | 全栈 Web 框架 | `convention over configuration` 的重量级框架 |\r\n| ⭐ SQLAlchemy | ORM 框架 | Python 最流行的数据库 ORM |\r\n| ⭐ Pydantic | 数据验证库 | 基于类型注解的数据校验，FastAPI 核心依赖 |\r\n| ⭐ celery | 异步任务队列 | 分布式任务调度，配合 Redis/RabbitMQ 使用 |\r\n| ⭐ redis-py | Redis 客户端 | `import redis` Python 连接 Redis |\r\n| ⭐ httpx | 现代 HTTP 客户端 | 支持 async 的 requests 替代品 |\r\n| ⭐ typer | CLI 框架 | 基于类型注解快速构建命令行工具 |\r\n| ⭐ rich | 终端美化库 | 彩色输出、进度条、表格，`from rich import print` |\r\n| ⭐ Jupyter | 交互式笔记本 | `jupyter notebook` 数据科学常用开发环境 |\r\n| ⭐ REPL | 交互式解释器 | Read-Eval-Print Loop，`python` 命令进入 |\r\n| ⭐ CPython | 官方 Python 实现 | 用 C 写的参考实现，最常用的 Python 版本 |\r\n| ⭐ PyPy | JIT 加速实现 | 比 CPython 快数倍的 Python 替代实现 |\r\n',nc="# 14 基础英语核心\r\n\r\n> 程序员读文档、看论文、写注释必备的四六级高频词\r\n\r\n## 动词核心 (Actions)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ obtain | 获取；获得 | `obtain a lock` 获取锁 / `obtain permission` |\r\n| ⭐ demonstrate | 演示；证明 | `demonstrate the concept` 演示这个概念 |\r\n| ⭐ illustrate | 阐明；举例说明 | `as illustrated below` 如下所示 |\r\n| ⭐ indicate | 指示；表明 | `error code indicates` 错误码表明 |\r\n| ⭐ ensure | 确保；保证 | `ensure thread safety` 确保线程安全 |\r\n| ⭐ eliminate | 消除；排除 | `eliminate race condition` 消除竞态条件 |\r\n| ⭐ achieve | 达成；实现 | `achieve high performance` 实现高性能 |\r\n| ⭐ acquire | 获取；取得 | `acquire resource` / `acquire lock` |\r\n| ⭐ release | 释放；发布 | `release memory` / `release v2.0` |\r\n| ⭐ retrieve | 检索；获取 | `retrieve data from cache` |\r\n| ⭐ modify | 修改 | `do not modify` 请勿修改 |\r\n| ⭐ utilize | 利用；使用 | `utilize GPU for computation` |\r\n| ⭐ examine | 检查；审查 | `examine the logs` 检查日志 |\r\n| ⭐ verify | 验证；核实 | `verify the signature` 验证签名 |\r\n| ⭐ distinguish | 区分；辨别 | `distinguish between A and B` |\r\n| ⭐ determine | 确定；决定 | `determine the optimal value` |\r\n| ⭐ specify | 指定；明确规定 | `as specified in RFC` 如 RFC 规定 |\r\n| ⭐ restrict | 限制；约束 | `restrict access` 限制访问 |\r\n| ⭐ prevent | 阻止；预防 | `prevent data loss` 防止数据丢失 |\r\n| ⭐ enable | 使能够；启用 | `enable feature flag` 启用功能开关 |\r\n| ⭐ disable | 禁用 | `disable warning` 禁用警告 |\r\n| ⭐ permit | 允许；许可 | `operation not permitted` 操作不允许 |\r\n| ⭐ prohibit | 禁止 | `prohibited characters` 禁止字符 |\r\n| ⭐ facilitate | 促进；使便利 | `facilitate debugging` 便于调试 |\r\n| ⭐ optimize | 优化 | `optimize performance` 性能优化 |\r\n| ⭐ refine | 改进；精炼 | `refine the algorithm` 改进算法 |\r\n\r\n## 描述与状态 (Description & State)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ sufficient | 足够的；充分的 | `sufficient memory` 内存充足 |\r\n| ⭐ insufficient | 不足的 | `insufficient permissions` 权限不足 |\r\n| ⭐ appropriate | 适当的；恰当的 | `use appropriate method` |\r\n| ⭐ adequate | 足够的；适当的 | `adequate for most cases` |\r\n| ⭐ feasible | 可行的 | `feasible solution` 可行方案 |\r\n| ⭐ viable | 可行的；可持续的 | `viable alternative` 可行替代方案 |\r\n| ⭐ prevalent | 流行的；普遍的 | `prevalent practice` 普遍做法 |\r\n| ⭐ prevalent | 普遍的 | `most prevalent error` 最常见的错误 |\r\n| ⭐ mandatory | 强制的；必须的 | `mandatory field` 必填项 |\r\n| ⭐ optional | 可选的 | `optional parameter` 可选参数 |\r\n| ⭐ explicit | 明确的；显式的 | `explicit type conversion` 显式转换 |\r\n| ⭐ implicit | 隐含的；隐式的 | `implicit conversion` 隐式转换 |\r\n| ⭐ concise | 简明的；简洁的 | `concise documentation` 简洁文档 |\r\n| ⭐ precise | 精确的；准确的 | `precise timing` 精确计时 |\r\n| ⭐ accurate | 准确的 | `accurate result` 准确结果 |\r\n| ⭐ approximate | 近似的；大概的 | `approximate value` 近似值 |\r\n| ⭐ arbitrary | 任意的；武断的 | `arbitrary precision` 任意精度 |\r\n| ⭐ random | 随机的 | `random access` 随机访问 |\r\n| ⭐ consecutive | 连续的 | `consecutive failures` 连续失败 |\r\n| ⭐ simultaneous | 同时的 | `simultaneous requests` 并发请求 |\r\n| ⭐ concurrent | 并发的 | `concurrent execution` 并发执行 |\r\n| ⭐ redundant | 冗余的；多余的 | `redundant backup` 冗余备份 |\r\n| ⭐ obsolete | 过时的；废弃的 | `obsolete API` 废弃的 API |\r\n| ⭐ deprecated | 已弃用 | `@Deprecated` 标记将移除 |\r\n| ⭐ experimental | 实验性的 | `experimental feature` 实验功能 |\r\n| ⭐ stable | 稳定的 | `stable release` 稳定版 |\r\n| ⭐ unstable | 不稳定的 | `unstable API` 不稳定接口 |\r\n| ⭐ consistent | 一致的 | `consistent behavior` 一致的行为 |\r\n| ⭐ inconsistent | 不一致的 | `inconsistent state` 状态不一致 |\r\n\r\n## 逻辑与关系 (Logic & Relations)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ whereas | 然而；鉴于 | `A works, whereas B fails` |\r\n| ⭐ hence | 因此；从此 | `hence, we recommend...` 因此我们建议 |\r\n| ⭐ thus | 因此 | `thus far` 到目前为止 |\r\n| ⭐ therefore | 因此 | `therefore, skip this step` |\r\n| ⭐ nevertheless | 尽管如此 | `nevertheless, it works` |\r\n| ⭐ nonetheless | 尽管如此 | 同 nevertheless |\r\n| ⭐ alternatively | 或者； alternatively | `alternatively, use...` 或者使用 |\r\n| ⭐ conversely | 相反地 | `conversely, if...` 相反，如果 |\r\n| ⭐ moreover | 此外；而且 | `moreover, it supports...` |\r\n| ⭐ furthermore | 此外 | `furthermore, note that...` |\r\n| ⭐ accordingly | 相应地 | `adjust accordingly` 相应调整 |\r\n| ⭐ subsequently | 随后；后来 | `subsequently merged` 随后合并 |\r\n| ⭐ prior | 在先的；优先的 | `prior to v2.0` 在2.0版本之前 |\r\n| ⭐ subsequent | 随后的 | `in subsequent releases` |\r\n| ⭐ regardless | 不管；无论 | `regardless of order` 无论顺序 |\r\n| ⭐ irrespective | 不考虑；不顾 | `irrespective of platform` |\r\n| ⭐ notwithstanding | 尽管 | `notwithstanding the above` |\r\n\r\n## 数量与程度 (Quantity & Degree)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ numerous | 众多的；许多的 | `numerous attempts` 多次尝试 |\r\n| ⭐ substantial | 大量的；实质的 | `substantial improvement` 显著改进 |\r\n| ⭐ considerable | 相当大的；重要的 | `considerable overhead` 相当大的开销 |\r\n| ⭐ negligible | 可忽略的；微不足道的 | `negligible impact` 影响可忽略 |\r\n| ⭐ minimal | 最小的；最少的 | `minimal configuration` 最小配置 |\r\n| ⭐ maximal | 最大的 | `maximal throughput` 最大吞吐 |\r\n| ⭐ excessive | 过度的；过多的 | `excessive logging` 日志过多 |\r\n| ⭐ moderate | 适度的；中等的 | `moderate load` 中等负载 |\r\n| ⭐ significant | 重要的；显著的 | `significant change` 重大变更 |\r\n| ⭐ insignificant | 不重要的 | `insignificant difference` |\r\n| ⭐ partial | 部分的 | `partial match` 部分匹配 |\r\n| ⭐ entire | 全部的；整个的 | `entire file` 整个文件 |\r\n| ⭐ comprehensive | 全面的；综合的 | `comprehensive test` 全面测试 |\r\n| ⭐ thorough | 彻底的；详尽的 | `thorough review` 彻底审查 |\r\n| ⭐ rigorous | 严格的；严谨的 | `rigorous validation` 严格验证 |\r\n\r\n## 文档与沟通 (Documentation)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ denote | 表示；意味着 | `X denotes the input` X 表示输入 |\r\n| ⭐ refer | 引用；参考 | `refer to the manual` 参考手册 |\r\n| ⭐ regard | 关于；至于 | `with regard to...` 关于... |\r\n| ⭐ concerning | 关于 | `issues concerning...` 关于...的问题 |\r\n| ⭐ regarding | 关于 | `questions regarding...` |\r\n| ⭐ pursuant | 依据；按照 | `pursuant to the policy` |\r\n| ⭐ herein | 在此；于此 | `defined herein` 本文定义的 |\r\n| ⭐ hereby | 特此 | `you are hereby notified` |\r\n| ⭐ thereof | 由此； thereof | `any part thereof` 其任何部分 |\r\n| ⭐ therein | 在其中 | `the file therein` 其中的文件 |\r\n| ⭐ whereby | 凭此；借以 | `a mechanism whereby...` |\r\n| ⭐ wherein | 在其中；在那种情况下 | `the case wherein...` |\r\n\r\n## 常见缩写 (Abbreviations)\r\n\r\n| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r\n|---|---|---|\r\n| ⭐ etc. | 等等 | `config, logs, etc.` |\r\n| ⭐ i.e. | 即；也就是 | `use a cache, i.e., Redis` |\r\n| ⭐ e.g. | 例如 | `common formats, e.g., JSON` |\r\n| ⭐ et al. | 等人 | `Smith et al. (2020)` 论文引用 |\r\n| ⭐ viz. | 即；也就是 | `three components, viz., A, B, C` |\r\n| ⭐ cf. | 比较；参照 | `cf. previous version` 参见旧版 |\r\n| ⭐ vs. / versus | 对； versus | `HTTP/1 vs. HTTP/2` |\r\n| ⭐ w.r.t. | with respect to | `performance w.r.t. latency` |\r\n",rc=`# 15 美式社交口语\r
\r
> 美国人日常社交、职场、网络聊天中最地道的表达\r
\r
## 日常寒暄 (Greetings & Small Talk)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ what's up | 怎么了/你好 | \`what's up? not much\` 互相问候 |\r
| ⭐ how's it going | 最近怎么样 | \`how's it going? pretty good\` |\r
| ⭐ long time no see | 好久不见 | 中式英语被美国接受 |\r
| ⭐ catch up | 叙旧；了解近况 | \`let's catch up\` 我们聊聊近况 |\r
| ⭐ hit me up | 联系我 | \`hit me up later\` 晚点联系我 |\r
| ⭐ check in | 问候；报到 | \`just checking in\` 就是问候一下 |\r
| ⭐ touch base | 碰头；联系 | \`let's touch base next week\` |\r
| ⭐ shoot the breeze | 闲聊；吹牛 | \`just shooting the breeze\` 随便聊聊 |\r
| ⭐ make small talk | 寒暄；尬聊 | \`hate making small talk\` 讨厌尬聊 |\r
| ⭐ break the ice | 打破僵局 | \`icebreaker question\` 破冰问题 |\r
\r
## 表达同意 (Agreeing)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ totally | 完全同意 | \`totally agree\` |\r
| ⭐ definitely | 肯定；当然 | \`definitely do that\` |\r
| ⭐ absolutely | 绝对 | \`absolutely right\` |\r
| ⭐ for sure | 当然 | \`for sure, man\` |\r
| ⭐ I hear you | 我懂你的意思 | 表示理解 |\r
| ⭐ you got that right | 你说得对 | 强烈同意 |\r
| ⭐ no doubt | 毫无疑问 | \`no doubt about it\` |\r
| ⭐ bet | 好的；没问题 | \`you coming? bet.\` |\r
| ⭐ word | 真的；同意 | \`word? word.\` 表示惊讶+同意 |\r
| ⭐ fair enough | 有道理；说得对 | 认可对方观点 |\r
| ⭐ makes sense | 说得通 | \`that makes sense\` |\r
| ⭐ I'm down | 我同意/我参加 | \`you down? I'm down.\` |\r
| ⭐ I'm in | 我加入 | 同意参与活动 |\r
| ⭐ sounds good | 听起来不错 | \`sounds good to me\` |\r
| ⭐ works for me | 我可以；适合我 | 接受提议 |\r
\r
## 表达不同意 (Disagreeing)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ not really | 不太...；不见得 | \`not really a fan\` 不太喜欢 |\r
| ⭐ I don't think so | 我不这么认为 | 委婉否定 |\r
| ⭐ I'm good | 不用了；我没事 | 礼貌拒绝 |\r
| ⭐ pass | 跳过；不要 | \`I'll pass\` 我不要 |\r
| ⭐ nah | 不（口语）| \`nah, I'm good\` 不用了 |\r
| ⭐ nope | 不（轻松）| 比 no 更随意 |\r
| ⭐ I see your point | 我理解你的观点 | 先认可再反驳 |\r
| ⭐ I get it, but... | 我懂，但是... | 委婉转折 |\r
| ⭐ not my thing | 不是我的菜 | 不喜欢但尊重 |\r
| ⭐ I'd rather not | 我宁愿不 | 礼貌拒绝 |\r
\r
## 情绪表达 (Emotions & Reactions)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ awesome | 太棒了 | \`that's awesome!\` |\r
| ⭐ amazing |  amazing | \`absolutely amazing\` |\r
| ⭐ dope | 酷；牛 | \`that's dope\` 太酷了 |\r
| ⭐ lit | 嗨；燃 | \`the party was lit\` 派对很嗨 |\r
| ⭐ fire | 火；很棒 | \`this song is fire\` |\r
| ⭐ sick | 酷毙了 | \`that's sick, dude\` |\r
| ⭐ dope | 很棒的 | 同 sick |\r
| ⭐ crazy | 疯狂的；不可思议的 | \`that's crazy!\` |\r
| ⭐ wild |  wild | \`that's wild\` 太疯狂了 |\r
| ⭐ mind-blowing | 令人震惊的 | \`mind-blowing experience\` |\r
| ⭐ bummer | 遗憾；倒霉 | \`what a bummer\` 真遗憾 |\r
| ⭐ that sucks | 那太糟了 | 表示同情 |\r
| ⭐ rip |安息/完了 | \`rip, he failed\` 他挂了 |\r
| ⭐ yikes | 哎呀；不妙 | \`yikes, that's expensive\` |\r
| ⭐ oof | 呃；难受 | 表示尴尬或同情 |\r
| ⭐ yikes | 天哪；不妙 | 表示担忧 |\r
| ⭐ ugh | 呃；讨厌 | 表示厌烦 |\r
| ⭐ meh | 一般般；无所谓 | \`how was it? meh.\` |\r
| ⭐ whatever | 随便； whatever | 无所谓或不满 |\r
| ⭐ lol | laughing out loud | 大笑 |\r
| ⭐ lmao | 笑死我了 | laugh my ass off |\r
| ⭐ rofl | 笑到打滚 | rolling on floor laughing |\r
| ⭐ haha | 哈哈 | 各种长度表示程度 |\r
| ⭐ dead | 笑死 | \`I'm dead 💀\` |\r
| ⭐ I'm screaming | 我笑出声 | 表示非常好笑 |\r
| ⭐ I can't | 我受不了了 | \`I can't even\` 无法形容 |\r
| ⭐ shook | 震惊的 | \`I'm shook\` 我震惊了 |\r
| ⭐ shooketh | 震惊（更夸张）| 网络用语 |\r
\r
## 俚语 & 流行语 (Slang)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ vibe | 氛围；感觉 | \`good vibes only\` 只留正能量 |\r
| ⭐ chill | 放松；别紧张 | \`just chill\` 放轻松 |\r
| ⭐ lowkey | 有点； secretly | \`lowkey tired\` 有点累 |\r
| ⭐ highkey | 非常； openly | \`highkey excited\` 超兴奋 |\r
| ⭐ savage | 狠人； brutally honest | \`that was savage\` 太狠了 |\r
| ⭐ extra | 戏多；过分 | \`she's so extra\` 她太戏精了 |\r
| ⭐ salty | 酸的；生气 | \`don't be salty\` 别生气嘛 |\r
| ⭐ shady |  shady；可疑 | \`that's shady\` 有猫腻 |\r
| ⭐ sketchy | 可疑；不靠谱 | \`seems sketchy\` 感觉不靠谱 |\r
| ⭐ sus | 可疑（suspicious）| \`that's sus\` 很可疑 |\r
| ⭐ cap | 谎言；吹牛 | \`no cap\` 说真的 / \`that's cap\` 假的 |\r
| ⭐ facts | 事实；没错 | \`straight facts\` 大实话 |\r
| ⭐ bet | 好的；打赌 | \`you bet\` 你说对了 |\r
| ⭐ finna | 将要（fixing to）| \`I'm finna leave\` 我要走了 |\r
| ⭐ gonna | 将要（going to）| \`I'm gonna go\` |\r
| ⭐ wanna | 想要（want to）| \`I wanna eat\` |\r
| ⭐ gotta | 必须（got to）| \`I gotta go\` 我得走了 |\r
| ⭐ kinda | 有点（kind of）| \`it's kinda cold\` |\r
| ⭐ sorta | 有点（sort of）| 同 kinda |\r
| ⭐ hella | 非常（加州）| \`hella good\` 超级好 |\r
| ⭐ mad | 非常（纽约）| \`mad tired\` 超级累 |\r
\r
## 社交互动 (Social Interactions)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ hang out | 一起玩；相处 | \`wanna hang out?\` |\r
| ⭐ chill | 放松；一起玩 | \`come chill at my place\` |\r
| ⭐ kick it | 一起玩 | \`let's kick it\` 一起玩儿 |\r
| ⭐ link up | 见面； connect | \`let's link up\` 咱们见个面 |\r
| ⭐ roll with | 和...一起 | \`I'm rolling with them\` |\r
| ⭐ show up | 出现；到场 | \`he didn't show up\` 他没来 |\r
| ⭐ bail | 放鸽子；溜走 | \`don't bail on me\` 别放我鸽子 |\r
| ⭐ flake | 爽约 | \`he flaked on me\` 他放我鸽子 |\r
| ⭐ ghost | 消失；不回消息 | \`he ghosted me\` 他不理我了 |\r
| ⭐ slide into DMs | 私信撩人 | \`slid into her DMs\` |\r
| ⭐ shoot your shot | 抓住机会表白 | \`just shoot your shot\` |\r
| ⭐ rizz | 魅力；撩人能力 | \`he's got rizz\` 他很会撩 |\r
| ⭐ game | 撩妹/汉技巧 | \`he's got game\` 他很会撩 |\r
| ⭐ crush | 暗恋对象 | \`I have a crush on her\` |\r
| ⭐ situationship | 暧昧关系 | 不是 relationship |\r
| ⭐ ship | 配对；嗑CP | \`I ship them\` 我嗑这对 |\r
| ⭐ OTP | One True Pairing | 最嗑的一对 |\r
| ⭐ BFF | Best Friends Forever | 闺蜜/死党 |\r
| ⭐ squad |  squad； crew | \`my squad\` 我的小伙伴们 |\r
| ⭐ fam | 家人（昵称）| \`what's up, fam\` |\r
| ⭐ bro / dude / man | 兄弟/伙计 | 男性之间常用 |\r
| ⭐ sis | 姐妹 | 女性之间 |\r
| ⭐ bestie |  bestie | 闺蜜 |\r
\r
## 职场社交 (Workplace Social)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ circle back | 回头再说 | \`let's circle back\` |\r
| ⭐ take this offline | 私下聊 | 会上不说，会后聊 |\r
| ⭐ ping me | 联系我 | \`ping me when done\` |\r
| ⭐ loop in | 拉某人进群 | \`loop in the manager\` |\r
| ⭐ keep me posted | 随时告诉我进展 | 保持更新 |\r
| ⭐ give me a heads up | 提前告诉我 | 预先通知 |\r
| ⭐ heads up | 提醒；注意 | \`heads up: meeting moved\` |\r
| ⭐ run it by | 征求...意见 | \`run it by the boss\` |\r
| ⭐ pick your brain | 请教你 | \`can I pick your brain?\` |\r
| ⭐ pick my brain | 随便问 | \`happy to pick my brain\` |\r
| ⭐ bounce ideas | 头脑风暴 | \`bounce some ideas\` |\r
| ⭐ spitball | 随便说说 | \`just spitballing\` 随便想想 |\r
| ⭐ put a pin in it | 先搁置 | \`let's put a pin in it\` |\r
| ⭐ table it | 搁置 | \`let's table this\` |\r
| ⭐ punt | 推迟 | \`punt to next week\` |\r
\r
## 网络/短信聊天 (Texting)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ brb | be right back | 马上回来 |\r
| ⭐ g2g / gtg | got to go | 得走了 |\r
| ⭐ ttyl | talk to you later | 回头聊 |\r
| ⭐ tyt | take your time | 不着急 |\r
| ⭐ idk | I don't know | 不知道 |\r
| ⭐ idc | I don't care | 无所谓 |\r
| ⭐ tbh | to be honest | 说实话 |\r
| ⭐ imo / imho | 我觉得/恕我直言 | in my (humble) opinion |\r
| ⭐ ngl | not gonna lie | 不瞒你说 |\r
| ⭐ fr | for real | 说真的；确实 |\r
| ⭐ fr fr | 真的真的 | 强调 |\r
| ⭐ ong | on God | 我发誓；真的 |\r
| ⭐ istg | I swear to God | 我发誓 |\r
| ⭐ nvm | never mind | 算了；没事了 |\r
| ⭐ np | no problem | 没问题 |\r
| ⭐ yw | you're welcome | 不客气 |\r
| ⭐ thx / tysm | thanks / thank you so much | 谢谢 |\r
| ⭐ ty | thank you | 谢谢 |\r
| ⭐ wtf | what the f*** | 什么鬼 |\r
| ⭐ wth | what the heck | 什么情况（温和版）|\r
| ⭐ omw | on my way | 在路上了 |\r
| ⭐ fyi | for your information | 供参考 |\r
| ⭐ asap | as soon as possible | 尽快 |\r
| ⭐ eta | 预计到达时间 | \`what's your ETA?\` |\r
| ⭐ b/c | because | 因为 |\r
| ⭐ w/ | with | 和 |\r
| ⭐ w/o | without | 没有 |\r
| ⭐ r | are | are |\r
| ⭐ u | you | 你 |\r
| ⭐ ur | your / you're | 你的/你是 |\r
| ⭐ 2day | today | 今天 |\r
| ⭐ 2moro | tomorrow | 明天 |\r
| ⭐ gr8 | great | 棒 |\r
| ⭐ l8r | later | 稍后 |\r
| ⭐ msg | message | 消息 |\r
| ⭐ pls / plz | please | 请 |\r
| ⭐ sry | sorry | 抱歉 |\r
| ⭐ cya | see ya | 再见 |\r
| ⭐ gn | good night | 晚安 |\r
| ⭐ gm | good morning | 早上好 |\r
| ⭐ hbu | how about you | 你呢 |\r
| ⭐ wyd | what you doing | 你在干嘛 |\r
| ⭐ wya | where you at | 你在哪 |\r
| ⭐ hmu | hit me up | 联系我 |\r
| ⭐ smh | shaking my head | 摇头；无语 |\r
| ⭐ fml | f*** my life | 我太难了 |\r
| ⭐ tmi | too much information | 信息太多/太细节了 |\r
| ⭐ icymi | in case you missed it | 以防你错过了 |\r
| ⭐ tl;dr | too long; didn't read | 太长不看 |\r
| ⭐ tldr | 同上 | 总结放在前面 |\r
| ⭐ rt / rtw | retweet | 转发 |\r
| ⭐ dm | direct message | 私信 |\r
| ⭐ pm | private message | 私信 |\r
\r
## 加州特色 (California Slang)\r
\r
| 英文单词 / 短语 | 中文释义 | 场景记忆 |\r
|---|---|---|\r
| ⭐ hella | 非常 | \`hella good\` 超级好 |\r
| ⭐ stoked | 兴奋；激动 | \`I'm stoked!\` 我太激动了 |\r
| ⭐ gnarly | 很棒的；困难的 | \`gnarly wave\` 浪太大了 |\r
| ⭐ dude | 伙计 | 加州人三句一个 dude |\r
| ⭐ no worries | 没问题；别担心 | 代替 you're welcome |\r
| ⭐ my bad | 我的错 | \`my bad, sorry\` |\r
`,tc=`# 16 CET-4/6 核心词汇

> 大学英语四六级完整核心词汇表，按字母顺序排列

| 英文单词 | 中文释义 | 词性 |
|---|---|---|
| abandon | 放弃，遗弃 | v. |
| ability | 能力，才能 | n. |
| able | 能够的，有能力的 | adj. |
| abnormal | 反常的，异常的 | adj. |
| aboard | 在船上，上船 | adv./prep. |
| abolish | 废除，废止 | v. |
| about | 关于，大约 | prep./adv. |
| above | 在...上面，超过 | prep./adv. |
| abroad | 在国外，到国外 | adv. |
| absence | 缺席，缺乏 | n. |
| absent | 缺席的，缺乏的 | adj. |
| absolute | 绝对的，完全的 | adj. |
| absorb | 吸收，使专心 | v. |
| abstract | 抽象的，摘要 | adj./n. |
| absurd | 荒谬的，可笑的 | adj. |
| abundant | 丰富的，充裕的 | adj. |
| abuse | 滥用，虐待 | v./n. |
| academic | 学术的，学院的 | adj. |
| academy | 学院，研究院 | n. |
| accelerate | 加速，促进 | v. |
| accent | 口音，重音 | n. |
| accept | 接受，认可 | v. |
| acceptable | 可接受的 | adj. |
| access | 进入，通道 | n./v. |
| accident | 事故，意外 | n. |
| accidental | 偶然的，意外的 | adj. |
| accommodate | 容纳，使适应 | v. |
| accommodation | 住处，膳宿 | n. |
| accompany | 陪伴，伴随 | v. |
| accomplish | 完成，实现 | v. |
| accord | 一致，符合 | v./n. |
| accordance | 一致，按照 | n. |
| according | 按照，根据 | prep. |
| accordingly | 因此，相应地 | adv. |
| account | 账户，解释 | n./v. |
| accountant | 会计 | n. |
| accumulate | 积累，积聚 | v. |
| accuracy | 准确性，精确度 | n. |
| accurate | 准确的，精确的 | adj. |
| accuse | 控告，指责 | v. |
| accustomed | 习惯的，通常的 | adj. |
| ache | 疼痛 | v./n. |
| achieve | 达到，实现 | v. |
| achievement | 成就，成绩 | n. |
| acid | 酸，酸的 | n./adj. |
| acknowledge | 承认，致谢 | v. |
| acquaint | 使认识，使了解 | v. |
| acquaintance | 熟人，相识 | n. |
| acquire | 获得，学到 | v. |
| acquisition | 获得，习得 | n. |
| acre | 英亩 | n. |
| across | 横过，在...对面 | prep./adv. |
| act | 行动，表演 | v./n. |
| action | 行动，作用 | n. |
| active | 活跃的，积极的 | adj. |
| activity | 活动，活力 | n. |
| actor | 演员 | n. |
| actress | 女演员 | n. |
| actual | 实际的，真实的 | adj. |
| acute | 敏锐的，急性的 | adj. |
| adapt | 适应，改编 | v. |
| add | 添加，增加 | v. |
| addition | 添加，加法 | n. |
| additional | 额外的，附加的 | adj. |
| address | 地址，演讲 | n./v. |
| adequate | 足够的，适当的 | adj. |
| adjust | 调整，适应 | v. |
| adjustment | 调整，调节 | n. |
| administration | 管理，行政 | n. |
| admire | 钦佩，赞赏 | v. |
| admission | 准许进入，承认 | n. |
| admit | 承认，准许进入 | v. |
| adolescent | 青少年，青春期的 | n./adj. |
| adopt | 采用，收养 | v. |
| adore | 崇拜，非常喜欢 | v. |
| adult | 成年人，成年的 | n./adj. |
| advance | 前进，进步 | v./n. |
| advanced | 高级的，先进的 | adj. |
| advantage | 优势，好处 | n. |
| adventure | 冒险，奇遇 | n. |
| advertise | 做广告，宣传 | v. |
| advertisement | 广告 | n. |
| advice | 建议，劝告 | n. |
| advise | 建议，劝告 | v. |
| advocate | 提倡，拥护 | v./n. |
| affair | 事情，事务 | n. |
| affect | 影响，感动 | v. |
| affection | 感情，喜爱 | n. |
| afford | 负担得起，提供 | v. |
| afraid | 害怕的，担心的 | adj. |
| after | 在...之后 | prep./conj. |
| afternoon | 下午 | n. |
| afterward | 后来，以后 | adv. |
| again | 再，又 | adv. |
| against | 反对，靠着 | prep. |
| age | 年龄，时代 | n./v. |
| agency | 代理，机构 | n. |
| agenda | 议程，日程 | n. |
| agent | 代理人，特工 | n. |
| aggressive | 侵略的，进取的 | adj. |
| ago | 以前 | adv. |
| agree | 同意，赞成 | v. |
| agreement | 协议，一致 | n. |
| agricultural | 农业的 | adj. |
| agriculture | 农业 | n. |
| ahead | 在前，向前 | adv. |
| aid | 帮助，援助 | n./v. |
| aim | 目标，瞄准 | n./v. |
| air | 空气，天空 | n. |
| aircraft | 飞机，航空器 | n. |
| airline | 航空公司 | n. |
| airport | 机场 | n. |
| alarm | 警报，惊慌 | n./v. |
| album | 相册，专辑 | n. |
| alcohol | 酒精，乙醇 | n. |
| alert | 警惕的，警报 | adj./n. |
| alike | 相似的，同样地 | adj./adv. |
| alive | 活着的，有活力的 | adj. |
| all | 所有的，全部 | adj./pron. |
| allocate | 分配，配置 | v. |
| allow | 允许，准许 | v. |
| allowance | 津贴，允许 | n. |
| almost | 几乎，差不多 | adv. |
| alone | 单独的，独自 | adj./adv. |
| along | 沿着，一起 | prep./adv. |
| alongside | 在...旁边，与...一起 | prep./adv. |
| aloud | 大声地，出声地 | adv. |
| alphabet | 字母表 | n. |
| already | 已经 | adv. |
| also | 也，而且 | adv. |
| alter | 改变，变更 | v. |
| alternative | 替代的，选择 | adj./n. |
| although | 虽然，尽管 | conj. |
| altitude | 海拔，高度 | n. |
| altogether | 总共，完全 | adv. |
| aluminium | 铝 | n. |
| always | 总是，永远 | adv. |
| am | 是 | v. |
| amateur | 业余爱好者 | n./adj. |
| amaze | 使惊奇，使惊愕 | v. |
| amazing | 令人惊奇的 | adj. |
| ambassador | 大使，代表 | n. |
| ambiguous | 模棱两可的 | adj. |
| ambition | 雄心，抱负 | n. |
| ambitious | 有雄心的，有野心的 | adj. |
| ambulance | 救护车 | n. |
| among | 在...之中 | prep. |
| amount | 数量，总额 | n./v. |
| ample | 充足的，丰富的 | adj. |
| amuse | 使发笑，使娱乐 | v. |
| amusement | 娱乐，消遣 | n. |
| analyse | 分析，分解 | v. |
| analysis | 分析，分解 | n. |
| ancestor | 祖先，祖宗 | n. |
| anchor | 锚，主持人 | n./v. |
| ancient | 古代的，古老的 | adj. |
| and | 和，与 | conj. |
| anecdote | 轶事，趣闻 | n. |
| anger | 愤怒，怒气 | n./v. |
| angle | 角，角度 | n. |
| angry | 生气的，愤怒的 | adj. |
| animal | 动物 | n. |
| ankle | 脚踝 | n. |
| anniversary | 周年纪念 | n. |
| announce | 宣布，通告 | v. |
| announcement | 公告，宣布 | n. |
| annoy | 使烦恼，使生气 | v. |
| annual | 每年的，年度的 | adj. |
| another | 另一个，再一个 | pron./adj. |
| answer | 回答，答案 | v./n. |
| ant | 蚂蚁 | n. |
| anticipate | 预期，预料 | v. |
| antique | 古董，古老的 | n./adj. |
| anxiety | 焦虑，渴望 | n. |
| anxious | 焦虑的，担心的 | adj. |
| any | 任何的，一些 | pron./adj. |
| anybody | 任何人 | pron. |
| anyhow | 无论如何，不管怎样 | adv. |
| anyone | 任何人 | pron. |
| anything | 任何事 | pron. |
| anyway | 无论如何，不管怎样 | adv. |
| anywhere | 任何地方 | adv. |
| apart | 分开，分离 | adv. |
| apartment | 公寓 | n. |
| apologize | 道歉，认错 | v. |
| apology | 道歉，歉意 | n. |
| apparent | 明显的，表面上的 | adj. |
| apparently | 显然，似乎 | adv. |
| appeal | 呼吁，上诉，吸引力 | v./n. |
| appear | 出现，似乎 | v. |
| appearance | 出现，外表 | n. |
| appetite | 食欲，欲望 | n. |
| applaud | 鼓掌，称赞 | v. |
| applause | 鼓掌，掌声 | n. |
| apple | 苹果 | n. |
| applicable | 可应用的，适当的 | adj. |
| applicant | 申请人 | n. |
| apply | 申请，应用 | v. |
| appoint | 任命，约定 | v. |
| appointment | 约会，任命 | n. |
| appreciate | 欣赏，感激 | v. |
| appreciation | 欣赏，感激 | n. |
| approach | 接近，方法 | v./n. |
| appropriate | 适当的，合适的 | adj. |
| approve | 赞成，批准 | v. |
| approximately | 大约，近似 | adv. |
| April | 四月 | n. |
| arbitrary | 任意的，武断的 | adj. |
| arch | 拱门，弓形 | n./v. |
| architect | 建筑师 | n. |
| architecture | 建筑，架构 | n. |
| Arctic | 北极的，北极 | adj./n. |
| are | 是 | v. |
| area | 地区，面积 | n. |
| argue | 争论，辩论 | v. |
| argument | 争论，论点 | n. |
| arise | 出现，升起 | v. |
| arithmetic | 算术 | n. |
| arm | 手臂，武器 | n./v. |
| army | 军队，陆军 | n. |
| around | 在...周围，大约 | prep./adv. |
| arouse | 唤醒，激起 | v. |
| arrange | 安排，整理 | v. |
| arrangement | 安排，布置 | n. |
| arrest | 逮捕，阻止 | v./n. |
| arrival | 到达，到来 | n. |
| arrive | 到达，到来 | v. |
| arrow | 箭，箭头 | n. |
| art | 艺术，美术 | n. |
| article | 文章，物品 | n. |
| artificial | 人造的，虚假的 | adj. |
| artist | 艺术家 | n. |
| artistic | 艺术的，有美感的 | adj. |
| as | 作为，当...时 | prep./conj. |
| ashamed | 惭愧的，羞耻的 | adj. |
| ash | 灰，灰烬 | n. |
| ashamed | 惭愧的，羞耻的 | adj. |
| aside | 在旁边，到旁边 | adv. |
| ask | 问，请求 | v. |
| asleep | 睡着的 | adj. |
| aspect | 方面，外观 | n. |
| assess | 评估，评价 | v. |
| assessment | 评估，评价 | n. |
| asset | 资产，优点 | n. |
| assign | 分配，指派 | v. |
| assignment | 任务，作业 | n. |
| assist | 帮助，协助 | v. |
| assistance | 帮助，援助 | n. |
| assistant | 助手，助理 | n./adj. |
| associate | 联系，交往 | v./n./adj. |
| association | 协会，联系 | n. |
| assume | 假设，承担 | v. |
| assumption | 假设，假定 | n. |
| assure | 保证，使确信 | v. |
| astonish | 使惊讶 | v. |
| astronaut | 宇航员 | n. |
| astronomer | 天文学家 | n. |
| at | 在，向 | prep. |
| athlete | 运动员 | n. |
| athletic | 运动的，健壮的 | adj. |
| atmosphere | 大气，气氛 | n. |
| atom | 原子 | n. |
| attach | 附上，依恋 | v. |
| attack | 攻击，进攻 | v./n. |
| attain | 达到，获得 | v. |
| attempt | 尝试，企图 | v./n. |
| attend | 参加，照顾 | v. |
| attendance | 出席，出席人数 | n. |
| attention | 注意，注意力 | n. |
| attitude | 态度，看法 | n. |
| attract | 吸引，引起 | v. |
| attraction | 吸引，吸引力 | n. |
| attractive | 有吸引力的 | adj. |
| attribute | 属性，把...归因于 | n./v. |
| audience | 观众，听众 | n. |
| audio | 音频的，声音的 | adj./n. |
| August | 八月 | n. |
| aunt | 阿姨，姑妈 | n. |
| Australia | 澳大利亚 | n. |
| Australian | 澳大利亚的，澳大利亚人 | adj./n. |
| authentic | 真实的，可靠的 | adj. |
| author | 作者 | n. |
| authority | 权威，权力 | n. |
| automatic | 自动的 | adj. |
| available | 可用的，有空的 | adj. |
| avenue | 大街，途径 | n. |
| average | 平均的，普通的 | adj./n./v. |
| avoid | 避免，避开 | v. |
| awake | 醒着的，唤醒 | adj./v. |
| award | 奖，授予 | n./v. |
| aware | 意识到的，知道的 | adj. |
| away | 离开，远离 | adv. |
| awful | 可怕的，极坏的 | adj. |
| awkward | 尴尬的，笨拙的 | adj. |
| baby | 婴儿 | n. |
| back | 后面，背部 | n./adv./adj. |
| background | 背景，经历 | n. |
| backward | 向后的，倒退的 | adv./adj. |
| bacteria | 细菌 | n. |
| bad | 坏的，糟糕的 | adj. |
| badly | 非常，糟糕地 | adv. |
| bag | 袋子，包 | n. |
| bakery | 面包店 | n. |
| balance | 平衡，余额 | n./v. |
| balcony | 阳台 | n. |
| ball | 球，舞会 | n. |
| ballet | 芭蕾舞 | n. |
| balloon | 气球 | n. |
| ban | 禁止，禁令 | v./n. |
| banana | 香蕉 | n. |
| band | 乐队，带子 | n. |
| bank | 银行，岸 | n. |
| bar | 酒吧，条 | n. |
| barbecue | 烧烤 | n./v. |
| barber | 理发师 | n. |
| bare | 赤裸的，仅仅的 | adj. |
| barely | 仅仅，几乎不 | adv. |
| bargain | 交易，便宜货 | n./v. |
| bark | 树皮，狗叫 | n./v. |
| barrier | 障碍，屏障 | n. |
| base | 基础，基地 | n./v. |
| baseball | 棒球 | n. |
| basic | 基本的，基础的 | adj. |
| basin | 盆，盆地 | n. |
| basis | 基础，根据 | n. |
| basket | 篮子 | n. |
| basketball | 篮球 | n. |
| bat | 蝙蝠，球拍 | n. |
| bath | 洗澡，浴室 | n. |
| bathe | 洗澡，游泳 | v. |
| bathroom | 浴室，卫生间 | n. |
| bathtub | 浴缸 | n. |
| battery | 电池 | n. |
| battle | 战斗，斗争 | n./v. |
| bay | 海湾 | n. |
| be | 是，存在 | v. |
| beach | 海滩 | n. |
| bean | 豆子 | n. |
| bear | 熊，忍受 | n./v. |
| beard | 胡须 | n. |
| beast | 野兽，牲畜 | n. |
| beat | 打，打败 | v./n. |
| beautiful | 美丽的 | adj. |
| beauty | 美丽，美人 | n. |
| because | 因为 | conj. |
| become | 变成，成为 | v. |
| bed | 床 | n. |
| bedroom | 卧室 | n. |
| bee | 蜜蜂 | n. |
| beef | 牛肉 | n. |
| beer | 啤酒 | n. |
| before | 在...之前 | prep./conj./adv. |
| beg | 乞求，恳求 | v. |
| begin | 开始 | v. |
| behalf | 代表，利益 | n. |
| behave | 表现，举止 | v. |
| behavior | 行为，举止 | n. |
| behind | 在...后面 | prep./adv. |
| being | 存在，生物 | n. |
| belief | 相信，信念 | n. |
| believe | 相信，认为 | v. |
| bell | 铃，钟 | n. |
| belong | 属于，归属 | v. |
| beloved | 心爱的，钟爱的 | adj./n. |
| below | 在...下面 | prep./adv. |
| belt | 带子，腰带 | n. |
| bench | 长凳，工作台 | n. |
| bend | 弯曲，弯腰 | v./n. |
| beneath | 在...下方 | prep./adv. |
| beneficial | 有益的，有利的 | adj. |
| benefit | 利益，好处 | n./v. |
| beside | 在...旁边 | prep. |
| besides | 此外，而且 | prep./adv. |
| best | 最好的 | adj./adv./n. |
| bet | 打赌，赌注 | v./n. |
| betray | 背叛，出卖 | v. |
| better | 更好的，更好 | adj./adv./v. |
| between | 在...之间 | prep. |
| beyond | 超过，在...那边 | prep./adv. |
| bicycle | 自行车 | n. |
| bid | 投标，出价 | v./n. |
| big | 大的 | adj. |
| bike | 自行车 | n./v. |
| bill | 账单，法案 | n. |
| billion | 十亿 | n./num. |
| bin | 箱子，垃圾桶 | n. |
| bind | 绑，约束 | v. |
| biography | 传记 | n. |
| biology | 生物学 | n. |
| bird | 鸟 | n. |
| birth | 出生，起源 | n. |
| birthday | 生日 | n. |
| biscuit | 饼干 | n. |
| bit | 一点，比特 | n. |
| bite | 咬，一口 | v./n. |
| bitter | 苦的，痛苦的 | adj. |
| black | 黑色的 | adj./n. |
| blackboard | 黑板 | n. |
| blame | 责备，责任 | v./n. |
| blank | 空白的，空虚的 | adj./n. |
| blanket | 毯子 | n. |
| blind | 盲的，失明的 | adj./v. |
| block | 块，阻塞 | n./v. |
| blog | 博客 | n. |
| blood | 血液 | n. |
| blow | 吹，打击 | v./n. |
| blue | 蓝色的，忧郁的 | adj./n. |
| board | 板，董事会 | n./v. |
| boat | 船 | n. |
| body | 身体，主体 | n. |
| boil | 沸腾，煮沸 | v. |
| bomb | 炸弹，轰炸 | n./v. |
| bond | 纽带，债券 | n./v. |
| bone | 骨头 | n. |
| bonus | 奖金，红利 | n. |
| book | 书，预订 | n./v. |
| boom | 繁荣，轰鸣声 | n./v. |
| boot | 靴子，启动 | n./v. |
| border | 边界，边境 | n./v. |
| bored | 无聊的，厌烦的 | adj. |
| boring | 无聊的，令人厌烦的 | adj. |
| born | 出生的，天生的 | adj. |
| borrow | 借，借用 | v. |
| boss | 老板，上司 | n. |
| both | 两者都 | pron./adj. |
| bother | 打扰，麻烦 | v./n. |
| bottle | 瓶子 | n. |
| bottom | 底部，最下部 | n./adj. |
| bounce | 弹跳，反弹 | v./n. |
| boundary | 边界，分界线 | n. |
| bow | 鞠躬，弓 | v./n. |
| bowl | 碗，钵 | n. |
| bowling | 保龄球 | n. |
| box | 盒子，拳击 | n./v. |
| boxing | 拳击 | n. |
| boy | 男孩 | n. |
| brain | 大脑，头脑 | n. |
| brake | 刹车，制动 | n./v. |
| branch | 分支，树枝 | n. |
| brand | 品牌，商标 | n. |
| brave | 勇敢的 | adj. |
| bread | 面包 | n. |
| break | 打破，休息 | v./n. |
| breakfast | 早餐 | n. |
| breast | 乳房，胸部 | n. |
| breath | 呼吸，气息 | n. |
| breathe | 呼吸 | v. |
| brick | 砖，砖块 | n. |
| bride | 新娘 | n. |
| bridge | 桥，桥梁 | n. |
| brief | 简短的，概要 | adj./n./v. |
| bright | 明亮的，聪明的 | adj. |
| brilliant | 杰出的，辉煌的 | adj. |
| bring | 带来，引起 | v. |
| Britain | 英国 | n. |
| British | 英国的，英国人 | adj./n. |
| broad | 宽阔的，广泛的 | adj. |
| broadcast | 广播，播送 | v./n. |
| brochure | 小册子 | n. |
| broken | 破碎的，坏掉的 | adj. |
| broom | 扫帚 | n. |
| brother | 兄弟 | n. |
| brow | 眉，额头 | n. |
| brown | 棕色的 | adj./n. |
| brush | 刷子，刷 | n./v. |
| budget | 预算 | n./v. |
| buffet | 自助餐 | n. |
| build | 建造，建立 | v. |
| building | 建筑物，大楼 | n. |
| bunch | 束，串，群 | n. |
| bungalow | 平房 | n. |
| burden | 负担，责任 | n./v. |
| bureaucratic | 官僚的 | adj. |
| burglar | 窃贼 | n. |
| burn | 燃烧，烧伤 | v./n. |
| burst | 爆发，突发 | v./n. |
| bury | 埋葬，隐藏 | v. |
| bus | 公共汽车 | n. |
| bush | 灌木，丛林 | n. |
| business | 商业，生意 | n. |
| busy | 忙碌的 | adj. |
| but | 但是，除了 | conj./prep. |
| butcher | 屠夫，肉商 | n. |
| butter | 黄油 | n. |
| butterfly | 蝴蝶 | n. |
| button | 按钮，纽扣 | n. |
| buy | 买，购买 | v. |
| by | 通过，被 | prep./adv. |
| bye | 再见 | int. |
| cabbage | 卷心菜 | n. |
| cabin | 小屋，客舱 | n. |
| cafeteria | 自助餐厅 | n. |
| cage | 笼子 | n. |
| cake | 蛋糕 | n. |
| calculate | 计算，估计 | v. |
| call | 呼叫，打电话 | v./n. |
| calm | 平静的，镇静的 | adj./v./n. |
| camel | 骆驼 | n. |
| camera | 照相机 | n. |
| camp | 营地，露营 | n./v. |
| campaign | 运动，战役 | n./v. |
| campus | 校园 | n. |
| can | 能，会，罐头 | v./n. |
| canal | 运河，渠道 | n. |
| cancel | 取消，撤销 | v. |
| cancer | 癌症 | n. |
| candidate | 候选人，考生 | n. |
| candle | 蜡烛 | n. |
| candy | 糖果 | n. |
| canteen | 食堂，小卖部 | n. |
| capable | 有能力的，能干的 | adj. |
| capacity | 容量，能力 | n. |
| capital | 首都，资本 | n./adj. |
| captain | 船长，队长 | n. |
| car | 汽车 | n. |
| carbon | 碳 | n. |
| card | 卡片，纸牌 | n. |
| care | 关心，照顾 | n./v. |
| career | 职业，事业 | n. |
| careful | 小心的，仔细的 | adj. |
| careless | 粗心的 | adj. |
| carpet | 地毯 | n. |
| carrot | 胡萝卜 | n. |
| carry | 携带，搬运 | v. |
| cartoon | 卡通，漫画 | n. |
| case | 情况，案例 | n. |
| cash | 现金 | n./v. |
| cassette | 盒式磁带 | n. |
| cast | 投，铸造，演员 | v./n. |
| castle | 城堡 | n. |
| casual | 随便的，偶然的 | adj. |
| cat | 猫 | n. |
| catch | 抓住，赶上 | v. |
| category | 类别，种类 | n. |
| cater | 迎合，提供饮食 | v. |
| cathedral | 大教堂 | n. |
| cattle | 牛，牲畜 | n. |
| caught | 抓住（catch过去式）| v. |
| cause | 原因，引起 | n./v. |
| caution | 小心，警告 | n./v. |
| cautious | 谨慎的，小心的 | adj. |
| cave | 洞穴 | n. |
| CD | 光盘 | n. |
| ceiling | 天花板 | n. |
| celebrate | 庆祝，歌颂 | v. |
| celebration | 庆祝，庆典 | n. |
| cell | 细胞，电池 | n. |
| cent | 分，美分 | n. |
| centigrade | 摄氏的 | adj. |
| centimetre | 厘米 | n. |
| central | 中心的，主要的 | adj. |
| centre | 中心，中央 | n./v. |
| century | 世纪，百年 | n. |
| ceremony | 仪式，典礼 | n. |
| certain | 确定的，某个 | adj. |
| certainly | 当然，肯定 | adv. |
| certificate | 证书，执照 | n. |
| chain | 链，链条 | n. |
| chair | 椅子，主席 | n./v. |
| chairman | 主席，会长 | n. |
| chalk | 粉笔 | n. |
| challenge | 挑战 | n./v. |
| champion | 冠军 | n. |
| chance | 机会，可能性 | n. |
| change | 改变，变化 | v./n. |
| channel | 频道，渠道 | n. |
| chaos | 混乱 | n. |
| chapter | 章，回 | n. |
| character | 性格，角色，字符 | n. |
| characteristic | 特有的，特征 | adj./n. |
| charge | 收费，充电，指控 | v./n. |
| charity | 慈善，慈善机构 | n. |
| charm | 魅力，魔力 | n./v. |
| chart | 图表 | n. |
| chat | 聊天，闲聊 | v./n. |
| cheap | 便宜的 | adj. |
| cheat | 欺骗，作弊 | v./n. |
| check | 检查，支票 | v./n. |
| cheek | 面颊，脸蛋 | n. |
| cheer | 欢呼，喝彩 | v./n. |
| cheerful | 愉快的，高兴的 | adj. |
| cheese | 奶酪 | n. |
| chef | 厨师 | n. |
| chemical | 化学的，化学品 | adj./n. |
| chemist | 化学家，药剂师 | n. |
| chemistry | 化学 | n. |
| cheque | 支票 | n. |
| chess | 国际象棋 | n. |
| chest | 胸部，箱子 | n. |
| chew | 咀嚼 | v. |
| chicken | 鸡，鸡肉 | n. |
| chief | 主要的，首领 | adj./n. |
| child | 孩子，儿童 | n. |
| childhood | 童年，幼年 | n. |
| chimney | 烟囱 | n. |
| chin | 下巴 | n. |
| China | 中国 | n. |
| Chinese | 中国的，中国人 | adj./n. |
| chip | 芯片，碎片 | n. |
| chocolate | 巧克力 | n. |
| choice | 选择，抉择 | n. |
| choir | 唱诗班，合唱团 | n. |
| choke | 窒息，堵塞 | v. |
| choose | 选择，挑选 | v. |
| chop | 砍，劈 | v./n. |
| chopsticks | 筷子 | n. |
| chorus | 合唱，副歌 | n. |
| Christian | 基督教的，基督徒 | adj./n. |
| Christmas | 圣诞节 | n. |
| church | 教堂 | n. |
| cigar | 雪茄 | n. |
| cigarette | 香烟 | n. |
| cinema | 电影院 | n. |
| circle | 圆，圈 | n./v. |
| circuit | 电路，巡回 | n. |
| circular | 圆形的，循环的 | adj. |
| circulate | 流通，传播 | v. |
| circumstance | 环境，情况 | n. |
| circus | 马戏团 | n. |
| citizen | 公民，市民 | n. |
| city | 城市 | n. |
| civil | 公民的，国内的 | adj. |
| civilian | 平民，百姓 | n./adj. |
| civilization | 文明，文化 | n. |
| claim | 声称，索赔 | v./n. |
| clap | 拍手，鼓掌 | v./n. |
| clarify | 澄清，阐明 | v. |
| clash | 冲突，撞击 | n./v. |
| class | 班级，阶级 | n. |
| classic | 经典的，古典的 | adj./n. |
| classify | 分类，分级 | v. |
| classmate | 同班同学 | n. |
| classroom | 教室 | n. |
| claw | 爪，钳 | n./v. |
| clay | 黏土，泥土 | n. |
| clean | 干净的，打扫 | adj./v. |
| clear | 清楚的，清除 | adj./v. |
| clerk | 职员，店员 | n. |
| clever | 聪明的，机灵的 | adj. |
| click | 点击，咔嗒声 | v./n. |
| client | 客户，委托人 | n. |
| cliff | 悬崖，峭壁 | n. |
| climate | 气候，风气 | n. |
| climb | 爬，攀登 | v./n. |
| clinic | 诊所 | n. |
| clock | 时钟 | n. |
| clone | 克隆，复制 | n./v. |
| close | 关闭，接近 | v./adj./adv. |
| cloth | 布，织物 | n. |
| clothes | 衣服 | n. |
| clothing | 服装，衣着 | n. |
| cloud | 云，阴影 | n. |
| cloudy | 多云的 | adj. |
| club | 俱乐部，社团 | n. |
| clue | 线索，提示 | n. |
| clumsy | 笨拙的 | adj. |
| coach | 教练，长途汽车 | n./v. |
| coal | 煤 | n. |
| coast | 海岸，海滨 | n. |
| coat | 外套，涂层 | n./v. |
| cock | 公鸡，龙头 | n. |
| cocoa | 可可粉 | n. |
| code | 密码，代码 | n./v. |
| coffee | 咖啡 | n. |
| coin | 硬币 | n. |
| coincidence | 巧合，巧合的事 | n. |
| cold | 冷的，感冒 | adj./n. |
| collar | 衣领，项圈 | n. |
| colleague | 同事，同僚 | n. |
| collect | 收集，领取 | v. |
| collection | 收藏，收集 | n. |
| college | 大学，学院 | n. |
| colour | 颜色，色彩 | n./v. |
| comb | 梳子，梳理 | n./v. |
| combine | 结合，联合 | v. |
| come | 来，来到 | v. |
| comedy | 喜剧，喜剧片 | n. |
| comfort | 安慰，舒适 | n./v. |
| comfortable | 舒适的，舒服的 | adj. |
| comic | 喜剧的，连环画 | adj./n. |
| command | 命令，指挥 | n./v. |
| comment | 评论，意见 | n./v. |
| commercial | 商业的，广告 | adj./n. |
| commit | 犯，委托 | v. |
| commitment | 承诺，献身 | n. |
| committee | 委员会 | n. |
| common | 共同的，普通的 | adj./n. |
| communicate | 交流，沟通 | v. |
| communication | 交流，通信 | n. |
| communism | 共产主义 | n. |
| communist | 共产主义者 | adj./n. |
| companion | 同伴，伴侣 | n. |
| company | 公司，陪伴 | n. |
| compare | 比较，对比 | v. |
| compass | 指南针，圆规 | n. |
| compensate | 补偿，赔偿 | v. |
| compete | 竞争，比赛 | v. |
| competence | 能力，胜任 | n. |
| competition | 竞争，比赛 | n. |
| complete | 完成，完全的 | v./adj. |
| complex | 复杂的，复合的 | adj./n. |
| complicated | 复杂的，难懂的 | adj. |
| component | 组成部分，组件 | n. |
| compose | 组成，创作 | v. |
| composition | 作文，组成 | n. |
| comprehension | 理解，理解力 | n. |
| comprehensive | 综合的，全面的 | adj. |
| comprise | 包含，由...组成 | v. |
| compromise | 妥协，折中 | n./v. |
| compulsory | 强制的，义务的 | adj. |
| compute | 计算，估计 | v. |
| computer | 计算机，电脑 | n. |
| concentrate | 集中，浓缩 | v. |
| concept | 概念，观念 | n. |
| concern | 关心，担忧 | n./v. |
| concert | 音乐会，演奏会 | n. |
| conclude | 得出结论，结束 | v. |
| conclusion | 结论，结尾 | n. |
| concrete | 具体的，混凝土 | adj./n. |
| condemn | 谴责，判刑 | v. |
| condition | 条件，状况 | n. |
| conduct | 行为，实施 | n./v. |
| conductor | 指挥，售票员 | n. |
| conference | 会议，讨论会 | n. |
| confess | 承认，坦白 | v. |
| confidence | 信心，信任 | n. |
| confident | 自信的，确信的 | adj. |
| confidential | 机密的，保密的 | adj. |
| confirm | 确认，证实 | v. |
| conflict | 冲突，矛盾 | n./v. |
| confuse | 使困惑，混淆 | v. |
| congratulation | 祝贺，恭喜 | n. |
| connect | 连接，联系 | v. |
| connection | 连接，关系 | n. |
| conscience | 良心，良知 | n. |
| consensus | 共识，一致同意 | n. |
| consequence | 结果，后果 | n. |
| conservative | 保守的，保守派 | adj./n. |
| consider | 考虑，认为 | v. |
| considerate | 体贴的，考虑周到的 | adj. |
| consideration | 考虑，体贴 | n. |
| consist | 由...组成，在于 | v. |
| consistent | 一致的，始终如一的 | adj. |
| constant | 不断的，常数 | adj./n. |
| constitute | 组成，构成 | v. |
| constitution | 宪法，章程 | n. |
| constrain | 限制，约束 | v. |
| construct | 建造，构造 | v. |
| construction | 建造，建筑 | n. |
| consult | 请教，查阅 | v. |
| consultant | 顾问，咨询专家 | n. |
| consume | 消耗，消费 | v. |
| consumer | 消费者，用户 | n. |
| consumption | 消费，消耗 | n. |
| contact | 联系，接触 | n./v. |
| contain | 包含，容纳 | v. |
| container | 容器，集装箱 | n. |
| contemporary | 当代的，现代的 | adj./n. |
| content | 内容，满足的 | n./adj. |
| contest | 竞赛，比赛 | n./v. |
| context | 上下文，背景 | n. |
| continent | 大陆，洲 | n. |
| continue | 继续，延续 | v. |
| continuous | 连续的，持续的 | adj. |
| contract | 合同，契约 | n./v. |
| contradict | 反驳，与...矛盾 | v. |
| contrary | 相反的，反面 | adj./n. |
| contribute | 贡献，捐助 | v. |
| contribution | 贡献，捐款 | n. |
| control | 控制，支配 | n./v. |
| controversial | 有争议的 | adj. |
| convenience | 方便，便利 | n. |
| convenient | 方便的，便利的 | adj. |
| conventional | 传统的，常规的 | adj. |
| conversation | 谈话，交谈 | n. |
| convey | 传达，运输 | v. |
| convince | 使确信，说服 | v. |
| cook | 烹饪，煮 | v./n. |
| cooker | 炊具 | n. |
| cookie | 饼干 | n. |
| cool | 凉爽的，酷的 | adj. |
| copy | 复制，拷贝 | n./v. |
| corn | 玉米，谷物 | n. |
| corner | 角落，拐角 | n. |
| corporation | 公司，企业 | n. |
| correct | 正确的，改正 | adj./v. |
| correspond | 通信，符合 | v. |
| corridor | 走廊，通道 | n. |
| cost | 成本，花费 | n./v. |
| cottage | 小屋，村舍 | n. |
| cotton | 棉花 | n. |
| cough | 咳嗽 | v./n. |
| could | 能，可以 | v. |
| council | 理事会，委员会 | n. |
| count | 数数，计算 | v./n. |
| counter | 柜台，反对 | n./v./adv. |
| country | 国家，乡村 | n. |
| countryside | 乡下，农村 | n. |
| county | 郡，县 | n. |
| couple | 夫妇，一对 | n. |
| courage | 勇气，胆量 | n. |
| course | 课程，过程 | n. |
| court | 法庭，球场 | n. |
| courtesy | 礼貌，礼仪 | n. |
| cousin | 堂/表兄弟姐妹 | n. |
| cover | 覆盖，包括 | v./n. |
| cow | 母牛，奶牛 | n. |
| crash | 碰撞，坠毁 | v./n. |
| crayon | 蜡笔 | n. |
| crazy | 疯狂的，狂热的 | adj. |
| cream | 奶油，乳脂 | n. |
| create | 创造，创作 | v. |
| creation | 创造，作品 | n. |
| creative | 创造性的，有创造力的 | adj. |
| creature | 生物，动物 | n. |
| credit | 信用，学分 | n./v. |
| crew | 船员，工作人员 | n. |
| cricket | 板球，蟋蟀 | n. |
| crime | 犯罪，罪行 | n. |
| criminal | 犯罪的，罪犯 | adj./n. |
| crisis | 危机，危急关头 | n. |
| criterion | 标准，准则 | n. |
| critic | 批评家，评论家 | n. |
| critical | 批评的，关键的 | adj. |
| criticism | 批评，评论 | n. |
| criticize | 批评，评论 | v. |
| crop | 庄稼，作物 | n./v. |
| cross | 穿过，十字 | v./n. |
| crossing | 十字路口，横渡 | n. |
| crossroads | 十字路口 | n. |
| crowd | 人群，拥挤 | n./v. |
| crucial | 至关重要的，决定性的 | adj. |
| cruel | 残忍的，残酷的 | adj. |
| cry | 哭，喊叫 | v./n. |
| cube | 立方体，立方 | n. |
| cuisine | 烹饪，菜肴 | n. |
| culture | 文化，文明 | n. |
| cup | 杯子，奖杯 | n. |
| cupboard | 碗柜，橱柜 | n. |
| cure | 治愈，治疗 | v./n. |
| curious | 好奇的，稀奇古怪的 | adj. |
| currency | 货币，通货 | n. |
| curriculum | 课程，全部课程 | n. |
| curtain | 窗帘，幕布 | n. |
| curve | 曲线，弯曲 | n./v. |
| cushion | 垫子，靠垫 | n. |
| custom | 习惯，风俗 | n. |
| customer | 顾客，客户 | n. |
| customs | 海关，关税 | n. |
| cut | 切，割，削减 | v./n. |
| cycle | 循环，周期 | n./v. |
| cyclist | 骑自行车的人 | n. |
`;function oc(e,n){const r=n.match(/[/\\]([^/\\]+)\.md$/),o=r?r[1]:n;return e.split(`
`).filter(c=>c.trim().startsWith("|")).filter(c=>!c.includes("---")&&!c.includes("英文单词")).map(c=>{const f=c.split("|").slice(1,-1).map(A=>A.trim());if(f.length<2)return null;const d=f[0]??"",p=d.includes("⭐"),h=d.replace(/⭐\s*/g,"").trim(),g=f[1]??"",C=f[2]??"";return h?{word:h,isHighFreq:p,meaning:g,scene:C,category:o}:null}).filter(Boolean)}function ci(e){const n=e.match(/^(\d+)-(.+)$/);return n?{num:n[1],label:n[2]}:{num:"",label:e}}const hr=(e,n)=>{const r=e.__vccOpts||e;for(const[t,o]of n)r[t]=o;return r},ic={class:"sidebar"},sc=["onClick"],ac={class:"nav-label"},cc={class:"nav-count"},lc={__name:"CategoryNav",props:{categories:Array,selected:String,counts:Object},emits:["select"],setup(e){function n(r){if(r==="全部")return"全部";const{label:t}=ci(r);return t}return(r,t)=>(J(),Y("nav",ic,[t[0]||(t[0]=j("div",{class:"sidebar-header"},"分类",-1)),j("ul",null,[(J(!0),Y(ve,null,Do(e.categories,o=>(J(),Y("li",{key:o,class:hn(["nav-item",{active:e.selected===o}]),onClick:i=>r.$emit("select",o)},[j("span",ac,Re(n(o)),1),j("span",cc,Re(e.counts[o]??0),1)],10,sc))),128))])]))}},uc=hr(lc,[["__scopeId","data-v-611b13f4"]]),dc={class:"card-head"},fc=["innerHTML"],pc={key:0,class:"star",title:"高频核心词"},hc=["innerHTML"],mc=["innerHTML"],gc={__name:"WordCard",props:{word:Object,query:String},emits:["click"],setup(e){const n=e;function r(){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const s=new SpeechSynthesisUtterance(n.word.word);s.lang="en-US",s.rate=.9,window.speechSynthesis.speak(s)}function t(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o(s,a){if(!a||!s)return t(s??"");const c=t(s),f=t(a).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return c.replace(new RegExp(f,"gi"),d=>`<mark>${d}</mark>`)}function i(s){return t(s).replace(/`([^`]+)`/g,"<code>$1</code>")}return(s,a)=>(J(),Y("div",{class:"card",onClick:a[0]||(a[0]=c=>s.$emit("click",e.word))},[j("div",dc,[j("span",{class:"word",innerHTML:o(e.word.word,e.query)},null,8,fc),e.word.isHighFreq?(J(),Y("span",pc,"⭐")):ze("",!0),j("button",{class:"speak-btn",onClick:ai(r,["stop"]),title:"朗读"},[...a[1]||(a[1]=[j("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"13",height:"13"},[j("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"})],-1)])])]),j("div",{class:"meaning",innerHTML:o(e.word.meaning,e.query)},null,8,hc),e.word.scene?(J(),Y("div",{key:0,class:"scene",innerHTML:i(e.word.scene)},null,8,mc)):ze("",!0),a[2]||(a[2]=j("div",{class:"click-hint"},"点击翻译",-1))]))}},bc=hr(gc,[["__scopeId","data-v-a910d72f"]]),vc={class:"word-list-wrap"},yc={key:0,class:"empty"},wc={key:1,class:"word-grid"},kc={__name:"WordList",props:{words:Array,query:String},emits:["select"],setup(e){return(n,r)=>(J(),Y("div",vc,[e.words.length===0?(J(),Y("div",yc," 没有找到匹配的词汇 ")):(J(),Y("div",wc,[(J(!0),Y(ve,null,Do(e.words,(t,o)=>(J(),fr(bc,{key:o,word:t,query:e.query,onClick:i=>n.$emit("select",t)},null,8,["word","query","onClick"]))),128))]))]))}},_c=hr(kc,[["__scopeId","data-v-1da5f16d"]]),Sc={class:"modal"},xc={class:"modal-head"},Ac={class:"modal-word"},Cc={key:0,class:"star"},Pc={class:"category-badge"},Ic={class:"section"},Tc={class:"meaning"},jc={key:0,class:"section"},Ec=["innerHTML"],Rc={class:"section translate-section"},Mc={class:"translate-input-row"},Oc=["disabled"],Lc={key:0,class:"spinner"},Dc={key:1},Hc={key:0,class:"translate-result"},Nc={class:"result-text"},Fc={key:1,class:"translate-error"},qc={__name:"WordModal",props:{word:Object},emits:["close"],setup(e){const n=e,r=Me(n.word.word),t=Me(""),o=Me(""),i=Me(!1),s=Me(!1);$n(()=>n.word,h=>{r.value=h.word,t.value="",o.value=""});function a(){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const h=new SpeechSynthesisUtterance(n.word.word);h.lang="en-US",h.rate=.9,h.onstart=()=>{s.value=!0},h.onend=()=>{s.value=!1},h.onerror=()=>{s.value=!1},window.speechSynthesis.speak(h)}const c=tr(()=>{if(!n.word.category)return"";const{label:h}=ci(n.word.category);return h});async function f(){const h=r.value.trim();if(h){i.value=!0,t.value="",o.value="";try{const g=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(h)}&langpair=en|zh`,C=await fetch(g);if(!C.ok)throw new Error(`HTTP ${C.status}`);const A=await C.json();A.responseStatus===200?t.value=A.responseData.translatedText:o.value=A.responseDetails||"翻译失败"}catch{o.value="网络请求失败，请检查网络连接"}finally{i.value=!1}}}function d(h){return(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(h){return d(h).replace(/`([^`]+)`/g,"<code>$1</code>")}return(h,g)=>(J(),fr(ls,{to:"body"},[j("div",{class:"modal-backdrop",onClick:g[2]||(g[2]=ai(C=>h.$emit("close"),["self"]))},[j("div",Sc,[j("button",{class:"close-btn",onClick:g[0]||(g[0]=C=>h.$emit("close"))},"×"),j("div",xc,[j("span",Ac,Re(e.word.word),1),j("button",{class:hn(["speak-btn",{speaking:s.value}]),onClick:a,title:"朗读发音"},[...g[3]||(g[3]=[j("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[j("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"})],-1)])],2),e.word.isHighFreq?(J(),Y("span",Cc,"⭐ 高频")):ze("",!0),j("span",Pc,Re(c.value),1)]),j("div",Ic,[g[4]||(g[4]=j("div",{class:"section-label"},"词库释义",-1)),j("div",Tc,Re(e.word.meaning),1)]),e.word.scene?(J(),Y("div",jc,[g[5]||(g[5]=j("div",{class:"section-label"},"场景记忆",-1)),j("div",{class:"scene",innerHTML:p(e.word.scene)},null,8,Ec)])):ze("",!0),j("div",Rc,[g[6]||(g[6]=j("div",{class:"section-label"},[ri("在线翻译 "),j("span",{class:"api-tag"},"MyMemory")],-1)),j("div",Mc,[Po(j("input",{"onUpdate:modelValue":g[1]||(g[1]=C=>r.value=C),class:"translate-input",placeholder:"可修改要翻译的词...",onKeydown:Oa(f,["enter"])},null,544),[[si,r.value]]),j("button",{class:"translate-btn",disabled:i.value,onClick:f},[i.value?(J(),Y("span",Lc)):(J(),Y("span",Dc,"翻译"))],8,Oc)]),t.value?(J(),Y("div",Hc,[j("span",Nc,Re(t.value),1)])):ze("",!0),o.value?(J(),Y("div",Fc,Re(o.value),1)):ze("",!0)])])])]))}},Gc=hr(qc,[["__scopeId","data-v-7eea5d83"]]),Uc={class:"layout"},Kc={class:"main"},Wc={class:"topbar"},Bc={class:"title-area"},Vc={class:"total-count"},$c={class:"controls"},zc={class:"search-wrap"},Jc=["title"],Xc={__name:"App",setup(e){const n=Object.assign({"../words/00-通用基础.md":qa,"../words/01-开发基础.md":Ga,"../words/02-Git协作.md":Ua,"../words/03-前端.md":Ka,"../words/04-后端.md":Wa,"../words/05-数据库.md":Ba,"../words/06-云服务.md":Va,"../words/07-AI与大模型.md":$a,"../words/08-社交媒体.md":za,"../words/09-技术社区.md":Ja,"../words/10-英语语法句式.md":Xa,"../words/11-技术阅读高频词.md":Ya,"../words/12-特朗普马斯克.md":Qa,"../words/12-职场与协作.md":Za,"../words/13-Python.md":ec,"../words/14-基础英语核心.md":nc,"../words/15-美式社交口语.md":rc,"../words/16-CET4-6词汇.md":tc}),r=[];for(const[p,h]of Object.entries(n))r.push(...oc(h,p));const t=["全部",...Object.keys(n).map(p=>{const h=p.match(/[/\\]([^/\\]+)\.md$/);return h?h[1]:p})],o=tr(()=>{const p={全部:r.length};for(const h of r)p[h.category]=(p[h.category]??0)+1;return p}),i=Me("全部"),s=Me(""),a=Me(!1),c=Me(null),f=Me("default"),d=tr(()=>{const p=s.value.toLowerCase().trim();let h=r.filter(g=>!(i.value!=="全部"&&g.category!==i.value||a.value&&!g.isHighFreq||p&&!g.word.toLowerCase().includes(p)&&!g.meaning.includes(p)));return f.value==="asc"?h=h.slice().sort((g,C)=>g.word.localeCompare(C.word,"en")):f.value==="desc"&&(h=h.slice().sort((g,C)=>C.word.localeCompare(g.word,"en"))),h});return(p,h)=>(J(),Y("div",Uc,[ke(uc,{categories:t,selected:i.value,counts:o.value,onSelect:h[0]||(h[0]=g=>i.value=g)},null,8,["selected","counts"]),j("div",Kc,[j("header",Wc,[j("div",Bc,[h[7]||(h[7]=j("h1",null,"程序员英文词汇速查",-1)),j("span",Vc,Re(d.value.length)+" 词",1)]),j("div",$c,[j("div",zc,[h[8]||(h[8]=j("svg",{class:"search-icon",viewBox:"0 0 20 20",fill:"currentColor"},[j("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})],-1)),Po(j("input",{"onUpdate:modelValue":h[1]||(h[1]=g=>s.value=g),class:"search",type:"text",placeholder:"搜索英文词或中文释义..."},null,512),[[si,s.value]]),s.value?(J(),Y("button",{key:0,class:"clear-btn",onClick:h[2]||(h[2]=g=>s.value="")},"×")):ze("",!0)]),j("button",{class:hn(["star-btn",{active:a.value}]),onClick:h[3]||(h[3]=g=>a.value=!a.value)}," ⭐ 仅高频 ",2),j("button",{class:"sort-btn",onClick:h[4]||(h[4]=g=>f.value=f.value==="default"?"asc":f.value==="asc"?"desc":"default"),title:f.value==="default"?"点击按 A-Z 排序":f.value==="asc"?"点击按 Z-A 排序":"点击恢复默认排序"},Re(f.value==="default"?"排序":f.value==="asc"?"A-Z ↑":"Z-A ↓"),9,Jc)])]),ke(_c,{words:d.value,query:s.value,onSelect:h[5]||(h[5]=g=>c.value=g)},null,8,["words","query"])]),c.value?(J(),fr(Gc,{key:0,word:c.value,onClose:h[6]||(h[6]=g=>c.value=null)},null,8,["word"])):ze("",!0)]))}};Ha(Xc).mount("#app");
