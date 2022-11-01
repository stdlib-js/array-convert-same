// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).convertArraySame=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return y&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function p(r,e){return null!=r&&m.call(r,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(r){var e,t,n;if(null==r)return h.call(r);t=r[g],e=p(r,g);try{r[g]=void 0}catch(e){return h.call(r)}return n=h.call(r),e?r[g]=t:delete r[g],n}:function(r){return h.call(r)};var b=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function v(r){return null!==r&&"object"==typeof r}function d(r){return v(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function E(){return/^\s*function\s*([^(]*)/i}c(v,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!b(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(v));var A=/^\s*function\s*([^(]*)/i;function _(r){var e,t,n;if(("Object"===(t=w(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=A.exec(n.toString()))return e[1]}return d(r)?"Buffer":t}c(E,"REGEXP",A);var T={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},j="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var B="function"==typeof Float64Array?Float64Array:void 0;var L=function(){var r,e,t;if("function"!=typeof x)return!1;try{e=new x([1,3.14,-3.14,NaN]),t=e,r=(j&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")},S="function"==typeof Float32Array;var V=Number.POSITIVE_INFINITY,R="function"==typeof Float32Array?Float32Array:null;var k="function"==typeof Float32Array?Float32Array:void 0;var I=function(){var r,e,t;if("function"!=typeof R)return!1;try{e=new R([1,3.14,-3.14,5e40]),t=e,r=(S&&t instanceof Float32Array||"[object Float32Array]"===w(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===V}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")},C="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var M="function"==typeof Uint32Array?Uint32Array:void 0;var U=function(){var r,e,t;if("function"!=typeof O)return!1;try{e=new O(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(C&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?M:function(){throw new Error("not implemented")},F="function"==typeof Int32Array;var N="function"==typeof Int32Array?Int32Array:null;var P="function"==typeof Int32Array?Int32Array:void 0;var Y=function(){var r,e,t;if("function"!=typeof N)return!1;try{e=new N([1,3.14,-3.14,2147483648]),t=e,r=(F&&t instanceof Int32Array||"[object Int32Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?P:function(){throw new Error("not implemented")},W="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var J="function"==typeof Uint16Array?Uint16Array:void 0;var z=function(){var r,e,t;if("function"!=typeof G)return!1;try{e=new G(e=[1,3.14,-3.14,65536,65537]),t=e,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")},X="function"==typeof Int16Array;var q="function"==typeof Int16Array?Int16Array:null;var D="function"==typeof Int16Array?Int16Array:void 0;var H=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q([1,3.14,-3.14,32768]),t=e,r=(X&&t instanceof Int16Array||"[object Int16Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")},K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null;var Z="function"==typeof Uint8Array?Uint8Array:void 0;var $=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,256,257]),t=e,r=(K&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Z:function(){throw new Error("not implemented")},rr="function"==typeof Uint8ClampedArray;var er="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var tr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var nr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er([-1,0,1,3.14,4.99,255,256]),t=e,r=(rr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===w(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")},or="function"==typeof Int8Array;var ir="function"==typeof Int8Array?Int8Array:null;var ar="function"==typeof Int8Array?Int8Array:void 0;var ur=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,128]),t=e,r=(or&&t instanceof Int8Array||"[object Int8Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};function fr(r){return"number"==typeof r}var lr=Number,cr=lr.prototype.toString;var yr=s();function sr(r){return"object"==typeof r&&(r instanceof lr||(yr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function hr(r){return fr(r)||sr(r)}c(hr,"isPrimitive",fr),c(hr,"isObject",sr);var mr=lr.NEGATIVE_INFINITY,pr=Math.floor;function gr(r){return pr(r)===r}function wr(r){return r<V&&r>mr&&gr(r)}function br(r){return fr(r)&&wr(r)}function vr(r){return sr(r)&&wr(r.valueOf())}function dr(r){return br(r)||vr(r)}function Er(r){return br(r)&&r>=0}function Ar(r){return vr(r)&&r.valueOf()>=0}function _r(r){return Er(r)||Ar(r)}c(dr,"isPrimitive",br),c(dr,"isObject",vr),c(_r,"isPrimitive",Er),c(_r,"isObject",Ar);function Tr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&gr(r.length)&&r.length>=0&&r.length<=4294967295}function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&gr(r.length)&&r.length>=0&&r.length<=9007199254740991}var xr="function"==typeof ArrayBuffer;function Br(r){return xr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===w(r)}function Lr(r){return"object"==typeof r&&null!==r&&!b(r)}var Sr=/./;function Vr(r){return"boolean"==typeof r}var Rr=Boolean.prototype.toString;var kr=s();function Ir(r){return"object"==typeof r&&(r instanceof Boolean||(kr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function Cr(r){return Vr(r)||Ir(r)}function Or(){return new Function("return this;")()}c(Cr,"isPrimitive",Vr),c(Cr,"isObject",Ir);var Mr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Fr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Nr="object"==typeof Fr?Fr:null;var Pr=function(r){if(arguments.length){if(!Vr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Or()}if(Mr)return Mr;if(Ur)return Ur;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Pr.document&&Pr.document.childNodes,Wr=Int8Array;var Gr="function"==typeof Sr||"object"==typeof Wr||"function"==typeof Yr?function(r){return _(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_(r).toLowerCase():e};function Jr(r){return"function"===Gr(r)}function zr(r,e){if(!(this instanceof zr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!fr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!fr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(zr,"BYTES_PER_ELEMENT",8),c(zr.prototype,"BYTES_PER_ELEMENT",8),c(zr.prototype,"byteLength",16),c(zr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(zr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Xr="function"==typeof Math.fround?Math.fround:null,qr=new I(1);var Dr="function"==typeof Xr?Xr:function(r){return qr[0]=r,qr[0]};function Hr(r,e){if(!(this instanceof Hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!fr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!fr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dr(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dr(e)}),this}function Kr(r){return r instanceof zr||r instanceof Hr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Qr(r){return gr(r/2)}function Zr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Hr,"BYTES_PER_ELEMENT",4),c(Hr.prototype,"BYTES_PER_ELEMENT",4),c(Hr.prototype,"byteLength",8),c(Hr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Hr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var $r=Zr()?Symbol.iterator:null;function re(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function ee(r){return r.re}function te(r){return r.im}function ne(r,e){return new I(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function oe(r,e){return new L(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ie(r,e){return r[e]}function ae(r,e){return r.get(e)}function ue(r,e,t){r[e]=t}function fe(r,e,t){r.set(t,e)}function le(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ae:ie,setter:e?fe:ue}}function ce(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Tr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ee(n),te(n))}return e}function ye(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,Tr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!Kr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ee(i),te(i))}return n}function se(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!Kr(n=e[o]))return null;r[i]=ee(n),r[i+1]=te(n),i+=2}return r}var he=2*I.BYTES_PER_ELEMENT,me=Zr();function pe(r){return r instanceof ve||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ge(r){return r===ve||"Complex128Array"===r.name}function we(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===he}function be(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*he}function ve(){var r,e,t,n;if(e=arguments.length,!(this instanceof ve))return 0===e?new ve:1===e?new ve(arguments[0]):2===e?new ve(arguments[0],arguments[1]):new ve(arguments[0],arguments[1],arguments[2]);if(0===e)t=new I(0);else if(1===e)if(Er(arguments[0]))t=new I(2*arguments[0]);else if(jr(arguments[0]))if((n=(t=arguments[0]).length)&&b(t)&&Kr(t[0])){if(null===(t=se(new I(2*n),t))){if(!Qr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new I(arguments[0])}}else{if(we(t))t=ne(t,0);else if(be(t))t=oe(t,0);else if(!Qr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new I(t)}else if(Br(arguments[0])){if(!gr((t=arguments[0]).byteLength/he))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+he+". Byte length: `"+t.byteLength+"`.");t=new I(t)}else{if(!Lr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===me)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Jr(t[$r]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Jr((t=t[$r]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ce(t))instanceof Error)throw t;t=new I(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Er(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!gr(r/he))throw new RangeError("invalid argument. Byte offset must be a multiple of "+he+". Value: `"+r+"`.");if(2===e){if(!gr((n=t.byteLength-r)/he))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+he+". View byte length: `"+n+"`.");t=new I(t,r)}else{if(!Er(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*he>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*he+"`.");t=new I(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function de(r){return r.re}function Ee(r){return r.im}function Ae(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Tr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(de(n),Ee(n))}return e}function _e(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,Tr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!Kr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(de(i),Ee(i))}return n}function Te(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!Kr(n=e[o]))return null;r[i]=de(n),r[i+1]=Ee(n),i+=2}return r}c(ve,"BYTES_PER_ELEMENT",he),c(ve,"name","Complex64Array"),c(ve,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Jr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(pe(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,r.get(c),c)))i[y]=ee(l),i[y+1]=te(l);else{if(!(Tr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(jr(r)){if(n){for(u=r.length,a=le(r),c=0;c<u;c++)if(!Kr(a.getter(r,c))){f=!0;break}if(f){if(!Qr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,a.getter(r,c),c)))i[y]=ee(l),i[y+1]=te(l);else{if(!(Tr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Lr(r)&&me&&Jr(r[$r])){if(!Jr((i=r[$r]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?ye(i,n,e):ce(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(ve,"of",(function(){var r,e;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),re(ve.prototype,"buffer",(function(){return this._buffer.buffer})),re(ve.prototype,"byteLength",(function(){return this._buffer.byteLength})),re(ve.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(ve.prototype,"BYTES_PER_ELEMENT",ve.BYTES_PER_ELEMENT),c(ve.prototype,"copyWithin",(function(r,e){if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(ve.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Hr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),$r&&c(t,$r,(function(){return e.entries()})),t})),c(ve.prototype,"get",(function(r){var e;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Er(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Hr((e=this._buffer)[r*=2],e[r+1])})),re(ve.prototype,"length",(function(){return this._length})),c(ve.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Er(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Kr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ee(r),void(n[t+1]=te(r))}if(pe(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*he,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new I(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!jr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Kr(r[f])){i=!0;break}if(i){if(!Qr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*he,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new I(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ee(u),n[t+1]=te(u),t+=2}}));var je=2*L.BYTES_PER_ELEMENT,xe=Zr();function Be(r){return r instanceof Re||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Le(r){return r===Re||"Complex64Array"===r.name}function Se(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===je/2}function Ve(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===je}function Re(){var r,e,t,n;if(e=arguments.length,!(this instanceof Re))return 0===e?new Re:1===e?new Re(arguments[0]):2===e?new Re(arguments[0],arguments[1]):new Re(arguments[0],arguments[1],arguments[2]);if(0===e)t=new L(0);else if(1===e)if(Er(arguments[0]))t=new L(2*arguments[0]);else if(jr(arguments[0]))if((n=(t=arguments[0]).length)&&b(t)&&Kr(t[0])){if(null===(t=Te(new L(2*n),t))){if(!Qr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new L(arguments[0])}}else{if(Se(t))t=ne(t,0);else if(Ve(t))t=oe(t,0);else if(!Qr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new L(t)}else if(Br(arguments[0])){if(!gr((t=arguments[0]).byteLength/je))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+je+". Byte length: `"+t.byteLength+"`.");t=new L(t)}else{if(!Lr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===xe)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Jr(t[$r]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Jr((t=t[$r]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ae(t))instanceof Error)throw t;t=new L(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Er(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!gr(r/je))throw new RangeError("invalid argument. Byte offset must be a multiple of "+je+". Value: `"+r+"`.");if(2===e){if(!gr((n=t.byteLength-r)/je))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+je+". View byte length: `"+n+"`.");t=new L(t,r)}else{if(!Er(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*je>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*je+"`.");t=new L(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Re,"BYTES_PER_ELEMENT",je),c(Re,"name","Complex128Array"),c(Re,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Jr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Be(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,r.get(c),c)))i[y]=de(l),i[y+1]=Ee(l);else{if(!(Tr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(jr(r)){if(n){for(u=r.length,a=le(r),c=0;c<u;c++)if(!Kr(a.getter(r,c))){f=!0;break}if(f){if(!Qr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,a.getter(r,c),c)))i[y]=de(l),i[y+1]=Ee(l);else{if(!(Tr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Lr(r)&&xe&&Jr(r[$r])){if(!Jr((i=r[$r]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?_e(i,n,e):Ae(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Re,"of",(function(){var r,e;if(!Jr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),re(Re.prototype,"buffer",(function(){return this._buffer.buffer})),re(Re.prototype,"byteLength",(function(){return this._buffer.byteLength})),re(Re.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Re.prototype,"BYTES_PER_ELEMENT",Re.BYTES_PER_ELEMENT),c(Re.prototype,"copyWithin",(function(r,e){if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Re.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new zr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),$r&&c(t,$r,(function(){return e.entries()})),t})),c(Re.prototype,"get",(function(r){var e;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Er(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new zr((e=this._buffer)[r*=2],e[r+1])})),re(Re.prototype,"length",(function(){return this._length})),c(Re.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Er(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Kr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=de(r),void(n[t+1]=Ee(r))}if(Be(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new L(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!jr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Kr(r[f])){i=!0;break}if(i){if(!Qr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new L(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=de(u),n[t+1]=Ee(u),t+=2}}));var ke=[L,I,Y,U,H,z,ur,$,nr,ve,Re],Ie=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Ce=Ie.length;function Oe(r){var e;if(b(r))return"generic";if(d(r))return null;for(e=0;e<Ce;e++)if(r instanceof ke[e])return Ie[e];return T[_(r)]||null}var Me={float64:L,float32:I,generic:Array,int16:H,int32:Y,int8:ur,uint16:z,uint32:U,uint8:$,uint8c:nr,complex64:ve,complex128:Re};function Ue(r,e,t,n,o,i,a){var u,f,l,c,y,s,h;for(u=e.data,f=o.data,c=e.getter,l=o.setter,y=n,s=a,h=0;h<r;h++)l(f,s,c(u,y)),y+=t,s+=i;return e}function Fe(r,e,t,n,o){var i,a,u,f,l,c;if(r<=0)return n;if(u=le(e),f=le(n),u.accessors||f.accessors)return Ue(r,u,t,i=t<0?(1-r)*t:0,f,o,a=o<0?(1-r)*o:0),f.data;if(1===t&&1===o){if((l=r%8)>0)for(c=0;c<l;c++)n[c]=e[c];if(r<8)return n;for(c=l;c<r;c+=8)n[c]=e[c],n[c+1]=e[c+1],n[c+2]=e[c+2],n[c+3]=e[c+3],n[c+4]=e[c+4],n[c+5]=e[c+5],n[c+6]=e[c+6],n[c+7]=e[c+7];return n}for(i=t<0?(1-r)*t:0,a=o<0?(1-r)*o:0,c=0;c<r;c++)n[a]=e[i],i+=t,a+=o;return n}function Ne(r){return"complex64"===r}function Pe(r){return"complex128"===r}function Ye(r,e){var t,n,o,i,a,u;if(!jr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if("generic"===e)return function(r){var e;return(e=le(r)).accessors?function(r){var e,t,n,o,i;for(e=r.data,o=r.getter,n=e.length,t=[],i=0;i<n;i++)t.push(o(e,i));return t}(e):function(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}(r)}(r);if(n=function(r){return Me[r]||null}(e),null===n)throw new TypeError("invalid argument. Second argument must be a recognized array data type. Value: `"+e+"`.");return a=r.length,t=Ne(u=Oe(r)),i=new n(a),t||Pe(u)?(o=t?ne(r,0):oe(r,0),Ne(e)?(Fe(2*a,o,1,ne(i,0),1),i):Pe(e)?(Fe(2*a,o,1,oe(i,0),1),i):(Fe(a,o,2,i,1),i)):(t=Ne(e))||Pe(e)?(Fe(a,r,1,t?ne(i,0):oe(i,0),2),i):(Fe(a,r,1,i,1),i)}return c(Fe,"ndarray",(function(r,e,t,n,o,i,a){var u,f,l,c,y,s;if(r<=0)return o;if(l=le(e),c=le(o),l.accessors||c.accessors)return Ue(r,l,t,n,c,i,a),c.data;if(u=n,f=a,1===t&&1===i){if((y=r%8)>0)for(s=0;s<y;s++)o[f]=e[u],u+=t,f+=i;if(r<8)return o;for(s=y;s<r;s+=8)o[f]=e[u],o[f+1]=e[u+1],o[f+2]=e[u+2],o[f+3]=e[u+3],o[f+4]=e[u+4],o[f+5]=e[u+5],o[f+6]=e[u+6],o[f+7]=e[u+7],u+=8,f+=8;return o}for(s=0;s<r;s++)o[f]=e[u],u+=t,f+=i;return o})),function(r,e){var t=Oe(e);if(null===t)throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("00E2c",t,e));return Ye(r,t)}}));
//# sourceMappingURL=browser.js.map
