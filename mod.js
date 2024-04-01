// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return t&&"symbol"==typeof Symbol.toStringTag}var e=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i,o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"";i=r()?function(t){var r,i,o,u,f;if(null==t)return e.call(t);i=t[a],f=a,r=null!=(u=t)&&n.call(u,f);try{t[a]=void 0}catch(r){return e.call(t)}return o=e.call(t),r?t[a]=i:delete t[a],o}:function(t){return e.call(t)};var u,f=i;u=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var s=u,h=/./,c="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function p(t){return"number"==typeof t}function g(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function y(t,r,e){var n=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+g(i):g(i)+t,n&&(t="-"+t)),t}var d=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function v(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!isFinite(n)){if(!p(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=y(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=y(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===w.call(t.specifier)?w.call(e):d.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var b=Math.abs,m=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,A=/e\+(\d)$/,R=/e-(\d)$/,T=/^(\d+)$/,P=/^(\d+)e/,S=/\.0$/,B=/\.0*e/,U=/(\..*[^0])0*e/;function I(t){var r,e,n=parseFloat(t.arg);if(!isFinite(n)){if(!p(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":b(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=_.call(e,U,"$1e"),e=_.call(e,B,"e"),e=_.call(e,S,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=_.call(e,A,"e+0$1"),e=_.call(e,R,"e-0$1"),t.alternate&&(e=_.call(e,T,"$1."),e=_.call(e,P,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=t.specifier===E.call(t.specifier)?E.call(e):m.call(e)}function O(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}var Y=String.fromCharCode,C=isNaN,x=Array.isArray;function j(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function M(t){var r,e,n,i,o,a,u,f,s,h,c,l,p;if(!x(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,f=0;f<t.length;f++)if(n=t[f],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!C(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(o)?String(n.arg):Y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(h=n.arg,c=n.width,l=n.padRight,p=void 0,(p=c-h.length)<0?h:h=l?h+O(p):O(p)+h)),a+=n.arg||"",u+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function D(t){var r,e,n,i;for(e=[],i=0,n=k.exec(t);n;)(r=t.slice(i,k.lastIndex-n[0].length)).length&&e.push(r),e.push(L(n)),i=k.lastIndex,n=k.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function F(t){var r,e;if("string"!=typeof t)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[D(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return M.apply(null,r)}var N,V=Object.prototype,z=V.toString,$=V.__defineGetter__,Z=V.__defineSetter__,G=V.__lookupGetter__,W=V.__lookupSetter__;N=function(){try{return c({},"x",{}),!0}catch(t){return!1}}()?l:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(t,r)||W.call(t,r)?(n=t.__proto__,t.__proto__=V,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(t,r,e.get),a&&Z&&Z.call(t,r,e.set),t};var X=N;function q(t,r,e){X(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function J(t){return"boolean"==typeof t}var H=Boolean,K=Boolean.prototype.toString;var Q=r();function tt(t){return"object"==typeof t&&(t instanceof H||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function rt(t){return J(t)||tt(t)}q(rt,"isPrimitive",J),q(rt,"isObject",tt);var et="object"==typeof self?self:null,nt="object"==typeof window?window:null,it="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ot="object"==typeof it?it:null,at="object"==typeof globalThis?globalThis:null;var ut=function(t){if(arguments.length){if(!J(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(at)return at;if(et)return et;if(nt)return nt;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}(),ft=ut.document&&ut.document.childNodes,st=Int8Array;function ht(){return/^\s*function\s*([^(]*)/i}var ct=/^\s*function\s*([^(]*)/i;function lt(t){return null!==t&&"object"==typeof t}q(ht,"REGEXP",ct);var pt=function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!s(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(lt);function gt(t){return lt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}function yt(t){var r,e,n;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ct.exec(n.toString()))return r[1]}return gt(t)?"Buffer":e}q(lt,"isObjectLikeArray",pt);var dt="function"==typeof h||"object"==typeof st||"function"==typeof ft?function(t){return yt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?yt(t).toLowerCase():r};var wt=[],vt=[],bt="undefined"!=typeof Uint8Array?Uint8Array:Array,mt=!1;function Et(){mt=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0;r<64;++r)wt[r]=t[r],vt[t.charCodeAt(r)]=r;vt["-".charCodeAt(0)]=62,vt["_".charCodeAt(0)]=63}function _t(t,r,e){for(var n,i,o=[],a=r;a<e;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],o.push(wt[(i=n)>>18&63]+wt[i>>12&63]+wt[i>>6&63]+wt[63&i]);return o.join("")}function At(t){var r;mt||Et();for(var e=t.length,n=e%3,i="",o=[],a=16383,u=0,f=e-n;u<f;u+=a)o.push(_t(t,u,u+a>f?f:u+a));return 1===n?(r=t[e-1],i+=wt[r>>2],i+=wt[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=wt[r>>10],i+=wt[r>>4&63],i+=wt[r<<2&63],i+="="),o.push(i),o.join("")}function Rt(t,r,e,n,i){var o,a,u=8*i-n-1,f=(1<<u)-1,s=f>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=n;h>0;a=256*a+t[r+c],c+=l,h-=8);if(0===o)o=1-s;else{if(o===f)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=s}return(p?-1:1)*a*Math.pow(2,o-n)}function Tt(t,r,e,n,i,o){var a,u,f,s=8*o-i-1,h=(1<<s)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=h):(a=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-a))<1&&(a--,f*=2),(r+=a+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(a++,f/=2),a+c>=h?(u=0,a=h):a+c>=1?(u=(r*f-1)*Math.pow(2,i),a+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(a=a<<i|u,s+=i;s>0;t[e+p]=255&a,p+=g,a/=256,s-=8);t[e+p-g]|=128*y}var Pt={}.toString,St=Array.isArray||function(t){return"[object Array]"==Pt.call(t)};Ot.TYPED_ARRAY_SUPPORT=void 0===it.TYPED_ARRAY_SUPPORT||it.TYPED_ARRAY_SUPPORT;var Bt=Ut();function Ut(){return Ot.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function It(t,r){if(Ut()<r)throw new RangeError("Invalid typed array length");return Ot.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=Ot.prototype:(null===t&&(t=new Ot(r)),t.length=r),t}function Ot(t,r,e){if(!(Ot.TYPED_ARRAY_SUPPORT||this instanceof Ot))return new Ot(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return xt(this,t)}return Yt(this,t,r,e)}function Yt(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);Ot.TYPED_ARRAY_SUPPORT?(t=r).__proto__=Ot.prototype:t=jt(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!Ot.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|Lt(r,e);t=It(t,n);var i=t.write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(kt(r)){var e=0|Mt(r.length);return 0===(t=It(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?It(t,0):jt(t,r);if("Buffer"===r.type&&St(r.data))return jt(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function Ct(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function xt(t,r){if(Ct(r),t=It(t,r<0?0:0|Mt(r)),!Ot.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function jt(t,r){var e=r.length<0?0:0|Mt(r.length);t=It(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function Mt(t){if(t>=Ut())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ut().toString(16)+" bytes");return 0|t}function kt(t){return!(null==t||!t._isBuffer)}function Lt(t,r){if(kt(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return cr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return lr(t).length;default:if(n)return cr(t).length;r=(""+r).toLowerCase(),n=!0}}function Dt(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return tr(this,r,e);case"utf8":case"utf-8":return Jt(this,r,e);case"ascii":return Kt(this,r,e);case"latin1":case"binary":return Qt(this,r,e);case"base64":return qt(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rr(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function Ft(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function Nt(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=Ot.from(r,n)),kt(r))return 0===r.length?-1:Vt(t,r,e,n,i);if("number"==typeof r)return r&=255,Ot.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Vt(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function Vt(t,r,e,n,i){var o,a=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;a=2,u/=2,f/=2,e/=2}function s(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}if(i){var h=-1;for(o=e;o<u;o++)if(s(t,o)===s(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*a}else-1!==h&&(o-=o-h),h=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(s(t,o+l)!==s(r,l)){c=!1;break}if(c)return o}return-1}function zt(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var u=parseInt(r.substr(2*a,2),16);if(isNaN(u))return a;t[e+a]=u}return a}function $t(t,r,e,n){return pr(cr(r,t.length-e),t,e,n)}function Zt(t,r,e,n){return pr(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function Gt(t,r,e,n){return Zt(t,r,e,n)}function Wt(t,r,e,n){return pr(lr(r),t,e,n)}function Xt(t,r,e,n){return pr(function(t,r){for(var e,n,i,o=[],a=0;a<t.length&&!((r-=2)<0);++a)n=(e=t.charCodeAt(a))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function qt(t,r,e){return 0===r&&e===t.length?At(t):At(t.slice(r,e))}function Jt(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,a,u,f,s=t[i],h=null,c=s>239?4:s>223?3:s>191?2:1;if(i+c<=e)switch(c){case 1:s<128&&(h=s);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&s)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(f=(15&s)<<12|(63&o)<<6|63&a)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],a=t[i+2],u=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&u)&&(f=(15&s)<<18|(63&o)<<12|(63&a)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=Ht)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Ht));return e}(n)}Ot.poolSize=8192,Ot._augment=function(t){return t.__proto__=Ot.prototype,t},Ot.from=function(t,r,e){return Yt(null,t,r,e)},Ot.TYPED_ARRAY_SUPPORT&&(Ot.prototype.__proto__=Uint8Array.prototype,Ot.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Ot[Symbol.species]),Ot.alloc=function(t,r,e){return function(t,r,e,n){return Ct(r),r<=0?It(t,r):void 0!==e?"string"==typeof n?It(t,r).fill(e,n):It(t,r).fill(e):It(t,r)}(null,t,r,e)},Ot.allocUnsafe=function(t){return xt(null,t)},Ot.allocUnsafeSlow=function(t){return xt(null,t)},Ot.isBuffer=gr,Ot.compare=function(t,r){if(!kt(t)||!kt(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},Ot.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Ot.concat=function(t,r){if(!St(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Ot.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=Ot.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!kt(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},Ot.byteLength=Lt,Ot.prototype._isBuffer=!0,Ot.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)Ft(this,r,r+1);return this},Ot.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)Ft(this,r,r+3),Ft(this,r+1,r+2);return this},Ot.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)Ft(this,r,r+7),Ft(this,r+1,r+6),Ft(this,r+2,r+5),Ft(this,r+3,r+4);return this},Ot.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Jt(this,0,t):Dt.apply(this,arguments)},Ot.prototype.equals=function(t){if(!kt(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Ot.compare(this,t)},Ot.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},Ot.prototype.compare=function(t,r,e,n,i){if(!kt(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(e>>>=0)-(r>>>=0),u=Math.min(o,a),f=this.slice(n,i),s=t.slice(r,e),h=0;h<u;++h)if(f[h]!==s[h]){o=f[h],a=s[h];break}return o<a?-1:a<o?1:0},Ot.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},Ot.prototype.indexOf=function(t,r,e){return Nt(this,t,r,e,!0)},Ot.prototype.lastIndexOf=function(t,r,e){return Nt(this,t,r,e,!1)},Ot.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return zt(this,t,r,e);case"utf8":case"utf-8":return $t(this,t,r,e);case"ascii":return Zt(this,t,r,e);case"latin1":case"binary":return Gt(this,t,r,e);case"base64":return Wt(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xt(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},Ot.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Ht=4096;function Kt(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function Qt(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function tr(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=hr(t[o]);return i}function rr(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function er(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function nr(t,r,e,n,i,o){if(!kt(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function ir(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function or(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function ar(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function ur(t,r,e,n,i){return i||ar(t,0,e,4),Tt(t,r,e,n,23,4),e+4}function fr(t,r,e,n,i){return i||ar(t,0,e,8),Tt(t,r,e,n,52,8),e+8}Ot.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),Ot.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=Ot.prototype;else{var i=r-t;e=new Ot(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},Ot.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||er(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},Ot.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||er(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},Ot.prototype.readUInt8=function(t,r){return r||er(t,1,this.length),this[t]},Ot.prototype.readUInt16LE=function(t,r){return r||er(t,2,this.length),this[t]|this[t+1]<<8},Ot.prototype.readUInt16BE=function(t,r){return r||er(t,2,this.length),this[t]<<8|this[t+1]},Ot.prototype.readUInt32LE=function(t,r){return r||er(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Ot.prototype.readUInt32BE=function(t,r){return r||er(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Ot.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||er(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},Ot.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||er(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},Ot.prototype.readInt8=function(t,r){return r||er(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Ot.prototype.readInt16LE=function(t,r){r||er(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},Ot.prototype.readInt16BE=function(t,r){r||er(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},Ot.prototype.readInt32LE=function(t,r){return r||er(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Ot.prototype.readInt32BE=function(t,r){return r||er(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Ot.prototype.readFloatLE=function(t,r){return r||er(t,4,this.length),Rt(this,t,!0,23,4)},Ot.prototype.readFloatBE=function(t,r){return r||er(t,4,this.length),Rt(this,t,!1,23,4)},Ot.prototype.readDoubleLE=function(t,r){return r||er(t,8,this.length),Rt(this,t,!0,52,8)},Ot.prototype.readDoubleBE=function(t,r){return r||er(t,8,this.length),Rt(this,t,!1,52,8)},Ot.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||nr(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},Ot.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||nr(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},Ot.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,1,255,0),Ot.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},Ot.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,2,65535,0),Ot.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):ir(this,t,r,!0),r+2},Ot.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,2,65535,0),Ot.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):ir(this,t,r,!1),r+2},Ot.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,4,4294967295,0),Ot.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):or(this,t,r,!0),r+4},Ot.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,4,4294967295,0),Ot.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):or(this,t,r,!1),r+4},Ot.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);nr(this,t,r,e,i-1,-i)}var o=0,a=1,u=0;for(this[r]=255&t;++o<e&&(a*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},Ot.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);nr(this,t,r,e,i-1,-i)}var o=e-1,a=1,u=0;for(this[r+o]=255&t;--o>=0&&(a*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},Ot.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,1,127,-128),Ot.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},Ot.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,2,32767,-32768),Ot.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):ir(this,t,r,!0),r+2},Ot.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,2,32767,-32768),Ot.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):ir(this,t,r,!1),r+2},Ot.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,4,2147483647,-2147483648),Ot.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):or(this,t,r,!0),r+4},Ot.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||nr(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Ot.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):or(this,t,r,!1),r+4},Ot.prototype.writeFloatLE=function(t,r,e){return ur(this,t,r,!0,e)},Ot.prototype.writeFloatBE=function(t,r,e){return ur(this,t,r,!1,e)},Ot.prototype.writeDoubleLE=function(t,r,e){return fr(this,t,r,!0,e)},Ot.prototype.writeDoubleBE=function(t,r,e){return fr(this,t,r,!1,e)},Ot.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!Ot.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},Ot.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Ot.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var a=kt(t)?t:cr(new Ot(t,n).toString()),u=a.length;for(o=0;o<e-r;++o)this[o+r]=a[o%u]}return this};var sr=/[^+\/0-9A-Za-z-_]/g;function hr(t){return t<16?"0"+t.toString(16):t.toString(16)}function cr(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],a=0;a<n;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function lr(t){return function(t){var r,e,n,i,o,a;mt||Et();var u=t.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[u-2]?2:"="===t[u-1]?1:0,a=new bt(3*u/4-o),n=o>0?u-4:u;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)i=vt[t.charCodeAt(r)]<<18|vt[t.charCodeAt(r+1)]<<12|vt[t.charCodeAt(r+2)]<<6|vt[t.charCodeAt(r+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===o?(i=vt[t.charCodeAt(r)]<<2|vt[t.charCodeAt(r+1)]>>4,a[f++]=255&i):1===o&&(i=vt[t.charCodeAt(r)]<<10|vt[t.charCodeAt(r+1)]<<4|vt[t.charCodeAt(r+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(sr,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function pr(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function gr(t){return null!=t&&(!!t._isBuffer||yr(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&yr(t.slice(0,0))}(t))}function yr(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var dr=Object.freeze({__proto__:null,Buffer:Ot,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),Ot.alloc(+t)},isBuffer:gr,kMaxLength:Bt}),wr=Ot;function vr(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){return this instanceof t?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var br,mr=vr(dr).Buffer;br=function(){var t,r;if("function"!=typeof wr)return!1;try{t=gt(r="function"==typeof wr.from?wr.from([1,2,3,4]):new wr([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t}()?mr:function(){throw new Error("not implemented")};var Er,_r=br,Ar=(Er=_r.from,"function"===dt(Er)),Rr=Math.floor;var Tr=9007199254740991;function Pr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,Rr(r)===r)&&t.length>=0&&t.length<=Tr;var r}var Sr=Ar?function(t){if(!Pr(t))throw new TypeError(F("invalid argument. Must provide an array-like object. Value: `%s`.",t));return _r.from(t)}:function(t){if(!Pr(t))throw new TypeError(F("invalid argument. Must provide an array-like object. Value: `%s`.",t));return new _r(t)};function Br(t,r){return r&&"Buffer"===r.type&&s(r.data)?Sr(r.data):r}export{Br as default};
//# sourceMappingURL=mod.js.map
