var $c=Object.defineProperty;var Qc=(s,e,t)=>e in s?$c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var pt=(s,e,t)=>(Qc(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="156",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eh=0,Jo=1,th=2,Kl=1,nh=2,Nn=3,xn=0,Kt=1,gn=2,jn=0,Hi=1,$o=2,Qo=3,ea=4,ih=5,Fi=100,rh=101,sh=102,ta=103,na=104,oh=200,ah=201,lh=202,ch=203,Zl=204,Jl=205,hh=206,uh=207,dh=208,fh=209,ph=210,mh=0,vh=1,gh=2,co=3,yh=4,_h=5,xh=6,Mh=7,$l=0,Sh=1,Eh=2,Yn=0,bh=1,wh=2,Th=3,Ql=4,Ah=5,ec=300,qi=301,ji=302,ho=303,uo=304,vs=306,ui=1e3,on=1001,hs=1002,Bt=1003,fo=1004,as=1005,Zt=1006,tc=1007,di=1008,Kn=1009,Rh=1010,Ch=1011,Po=1012,nc=1013,Xn=1014,Un=1015,Mr=1016,ic=1017,rc=1018,ai=1020,Ph=1021,an=1023,Lh=1024,Ih=1025,li=1026,Yi=1027,Nh=1028,sc=1029,Dh=1030,oc=1031,ac=1033,Ss=33776,Es=33777,bs=33778,ws=33779,ia=35840,ra=35841,sa=35842,oa=35843,Uh=36196,aa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,va=37815,ga=37816,ya=37817,_a=37818,xa=37819,Ma=37820,Sa=37821,Ts=36492,Ea=36494,ba=36495,Bh=36283,wa=36284,Ta=36285,Aa=36286,Fh=2200,Oh=2201,zh=2202,Sr=2300,Ki=2301,As=2302,Oi=2400,zi=2401,us=2402,Lo=2500,Vh=2501,kh=0,lc=1,po=2,cc=3e3,ci=3001,Hh=3200,Gh=3201,hc=0,Wh=1,hi="",vt="srgb",Ot="srgb-linear",gs="display-p3",Rs=7680,Xh=519,qh=512,jh=513,Yh=514,Kh=515,Zh=516,Jh=517,$h=518,Qh=519,mo=35044,Ra="300 es",vo=1035,Bn=2e3,ds=2001;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const vr=Math.PI/180,Zi=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function Io(s,e){return(s%e+e)%e}function eu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tu(s,e,t){return s!==e?(t-s)/(e-s):0}function gr(s,e,t){return(1-t)*s+t*e}function nu(s,e,t,n){return gr(s,e,1-Math.exp(-t*n))}function iu(s,e=1){return e-Math.abs(Io(s,e*2)-e)}function ru(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function su(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ou(s,e){return s+Math.floor(Math.random()*(e-s+1))}function au(s,e){return s+Math.random()*(e-s)}function lu(s){return s*(.5-Math.random())}function cu(s){s!==void 0&&(Ca=s);let e=Ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hu(s){return s*vr}function uu(s){return s*Zi}function go(s){return(s&s-1)===0&&s!==0}function uc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function du(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dc={DEG2RAD:vr,RAD2DEG:Zi,generateUUID:ln,clamp:It,euclideanModulo:Io,mapLinear:eu,inverseLerp:tu,lerp:gr,damp:nu,pingpong:iu,smoothstep:ru,smootherstep:su,randInt:ou,randFloat:au,randFloatSpread:lu,seededRandom:cu,degToRad:hu,radToDeg:uu,isPowerOfTwo:go,ceilPowerOfTwo:uc,floorPowerOfTwo:fs,setQuaternionFromProperEuler:du,normalize:_t,denormalize:yn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,r,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=i[0],v=i[3],p=i[6],x=i[1],y=i[4],_=i[7],S=i[2],R=i[5],T=i[8];return r[0]=o*g+a*x+l*S,r[3]=o*v+a*y+l*R,r[6]=o*p+a*_+l*T,r[1]=c*g+h*x+u*S,r[4]=c*v+h*y+u*R,r[7]=c*p+h*_+u*T,r[2]=d*g+f*x+m*S,r[5]=d*v+f*y+m*R,r[8]=d*p+f*_+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new at;function fc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fu(){const s=Er("canvas");return s.style.display="block",s}const Pa={};function yr(s){s in Pa||(Pa[s]=!0,console.warn(s))}function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pu=new at().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mu=new at().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vu(s){return s.convertSRGBToLinear().applyMatrix3(mu)}function gu(s){return s.applyMatrix3(pu).convertLinearToSRGB()}const yu={[Ot]:s=>s,[vt]:s=>s.convertSRGBToLinear(),[gs]:vu},_u={[Ot]:s=>s,[vt]:s=>s.convertLinearToSRGB(),[gs]:gu},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ot},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=yu[e],i=_u[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let yi;class pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Er("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xu=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ls(i[o].image)):r.push(Ls(i[o]))}else r=Ls(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ls(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mu=0;class Ht extends Jn{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=on,i=on,r=Zt,o=di,a=an,l=Kn,c=Ht.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ln(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ci?vt:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?ci:cc}set encoding(e){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ci?vt:hi}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=ec;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],v=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+v)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(f+1)/2,S=(p+1)/2,R=(h+d)/4,T=(u+g)/4,D=(m+v)/4;return y>_&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=R/n,r=T/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=D/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=D/r),this.set(n,i,r,t),this}let x=Math.sqrt((v-m)*(v-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(v-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends Jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ci?vt:hi),this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vc extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eu extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let v=1-a;const p=l*d+c*f+h*m+u*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),R=Math.atan2(S,p*x);v=Math.sin(v*R)/S,a=Math.sin(a*R)/S}const _=a*x;if(l=l*v+d*_,c=c*v+f*_,h=h*v+m*_,u=u*v+g*_,v===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,u=l*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new X,La=new tn;class Mn{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_i.copy(e.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)An.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else i.boundingBox===null&&i.computeBoundingBox(),_i.copy(i.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Pr.subVectors(this.max,or),xi.subVectors(e.a,or),Mi.subVectors(e.b,or),Si.subVectors(e.c,or),On.subVectors(Mi,xi),zn.subVectors(Si,Mi),Qn.subVectors(xi,Si);let t=[0,-On.z,On.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,On.z,0,-On.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-On.y,On.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!Ns(t,xi,Mi,Si,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,xi,Mi,Si,Pr))?!1:(Lr.crossVectors(On,zn),t=[Lr.x,Lr.y,Lr.z],Ns(t,xi,Mi,Si,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new X,new X,new X,new X,new X,new X,new X,new X],An=new X,_i=new Mn,xi=new X,Mi=new X,Si=new X,On=new X,zn=new X,Qn=new X,or=new X,Pr=new X,Lr=new X,ei=new X;function Ns(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bu=new Mn,ar=new X,Ds=new X;class Sn{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ds)),this.expandByPoint(ar.copy(e.center).sub(Ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new X,Us=new X,Ir=new X,Vn=new X,Bs=new X,Nr=new X,Fs=new X;class tr{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Us.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Us);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=Vn.dot(this.direction),l=-Vn.dot(Ir),c=Vn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Us).addScaledVector(Ir,d),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,r){Bs.subVectors(t,e),Nr.subVectors(n,e),Fs.crossVectors(Bs,Nr);let o=this.direction.dot(Fs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=a*this.direction.dot(Nr.crossVectors(Vn,Nr));if(l<0)return null;const c=a*this.direction.dot(Bs.cross(Vn));if(c<0||l+c>o)return null;const h=-a*Vn.dot(Fs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,g,v){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,g,v)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,g,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,Tu)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),kn.crossVectors(n,$t),kn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),kn.crossVectors(n,$t)),kn.normalize(),Dr.crossVectors($t,kn),i[0]=kn.x,i[4]=Dr.x,i[8]=$t.x,i[1]=kn.y,i[5]=Dr.y,i[9]=$t.y,i[2]=kn.z,i[6]=Dr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],v=n[10],p=n[14],x=n[3],y=n[7],_=n[11],S=n[15],R=i[0],T=i[4],D=i[8],M=i[12],E=i[1],P=i[5],H=i[9],F=i[13],W=i[2],k=i[6],ie=i[10],z=i[14],U=i[3],J=i[7],q=i[11],A=i[15];return r[0]=o*R+a*E+l*W+c*U,r[4]=o*T+a*P+l*k+c*J,r[8]=o*D+a*H+l*ie+c*q,r[12]=o*M+a*F+l*z+c*A,r[1]=h*R+u*E+d*W+f*U,r[5]=h*T+u*P+d*k+f*J,r[9]=h*D+u*H+d*ie+f*q,r[13]=h*M+u*F+d*z+f*A,r[2]=m*R+g*E+v*W+p*U,r[6]=m*T+g*P+v*k+p*J,r[10]=m*D+g*H+v*ie+p*q,r[14]=m*M+g*F+v*z+p*A,r[3]=x*R+y*E+_*W+S*U,r[7]=x*T+y*P+_*k+S*J,r[11]=x*D+y*H+_*ie+S*q,r[15]=x*M+y*F+_*z+S*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],v=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+v*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],v=e[14],p=e[15],x=u*v*c-g*d*c+g*l*f-a*v*f-u*l*p+a*d*p,y=m*d*c-h*v*c-m*l*f+o*v*f+h*l*p-o*d*p,_=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,S=m*u*l-h*g*l-m*a*d+o*g*d+h*a*v-o*u*v,R=t*x+n*y+i*_+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=x*T,e[1]=(g*d*r-u*v*r-g*i*f+n*v*f+u*i*p-n*d*p)*T,e[2]=(a*v*r-g*l*r+g*i*c-n*v*c-a*i*p+n*l*p)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=y*T,e[5]=(h*v*r-m*d*r+m*i*f-t*v*f-h*i*p+t*d*p)*T,e[6]=(m*l*r-o*v*r-m*i*c+t*v*c+o*i*p-t*l*p)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=_*T,e[9]=(m*u*r-h*g*r-m*n*f+t*g*f+h*n*p-t*u*p)*T,e[10]=(o*g*r-m*a*r+m*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=S*T,e[13]=(h*g*i-m*u*i+m*n*d-t*g*d-h*n*v+t*u*v)*T,e[14]=(m*a*i-o*g*i-m*n*l+t*g*l+o*n*v-t*a*v)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,g=o*h,v=o*u,p=a*u,x=l*c,y=l*h,_=l*u,S=n.x,R=n.y,T=n.z;return i[0]=(1-(g+p))*S,i[1]=(f+_)*S,i[2]=(m-y)*S,i[3]=0,i[4]=(f-_)*R,i[5]=(1-(d+p))*R,i[6]=(v+x)*R,i[7]=0,i[8]=(m+y)*T,i[9]=(v-x)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const o=Ei.set(i[4],i[5],i[6]).length(),a=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/r,h=1/o,u=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===Bn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ds)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let m,g;if(a===Bn)m=(o+r)*u,g=-2*u;else if(a===ds)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new X,cn=new st,wu=new X(0,0,0),Tu=new X(1,1,1),kn=new X,Dr=new X,$t=new X,Ia=new st,Na=new tn;class Rr{constructor(e=0,t=0,n=0,i=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Au=0;const Da=new X,bi=new tn,Cn=new st,Ur=new X,lr=new X,Ru=new X,Cu=new tn,Ua=new X(1,0,0),Ba=new X(0,1,0),Fa=new X(0,0,1),Pu={type:"added"},Lu={type:"removed"};class bt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new X,t=new Rr,n=new tn,i=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new at}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(Fa,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(Fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(lr,Ur,this.up):Cn.lookAt(Ur,lr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Cn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new X(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new X,Pn=new X,Os=new X,Ln=new X,wi=new X,Ti=new X,Oa=new X,zs=new X,Vs=new X,ks=new X;let Br=!1;class dn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){hn.subVectors(i,t),Pn.subVectors(n,t),Os.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Pn),l=hn.dot(Os),c=Pn.dot(Pn),h=Pn.dot(Os),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,r,o,a,l){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ln),l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Pn.subVectors(e,t),hn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;wi.subVectors(i,n),Ti.subVectors(r,n),zs.subVectors(e,n);const l=wi.dot(zs),c=Ti.dot(zs);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,i);const h=wi.dot(Vs),u=Ti.dot(Vs);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(wi,o);ks.subVectors(e,r);const f=wi.dot(ks),m=Ti.dot(ks);if(m>=0&&f<=m)return t.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ti,a);const v=h*m-f*u;if(v<=0&&u-h>=0&&f-m>=0)return Oa.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Oa,a);const p=1/(v+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(wi,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Iu=0;class _n extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Hi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Hs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=en.workingColorSpace){if(e=Io(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Hs(o,r,e+1/3),this.g=Hs(o,r,e),this.b=Hs(o,r,e-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return en.fromWorkingColorSpace(Wt.copy(this),e),Math.round(It(Wt.r*255,0,255))*65536+Math.round(It(Wt.g*255,0,255))*256+Math.round(It(Wt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=vt){en.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Fr);const n=gr(un.h,Fr.h,t),i=gr(un.s,Fr.s,t),r=gr(un.l,Fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new it;it.NAMES=gc;class qn extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new X,Or=new Pe;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRange={offset:0,count:-1},this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class yc extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _c extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const rn=new st,Gs=new bt,Ai=new X,Qt=new Mn,cr=new Mn,Ut=new X;class nn extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?_c:yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Qt.min,cr.min),Qt.expandByPoint(Ut),Ut.addVectors(Qt.max,cr.max),Qt.expandByPoint(Ut)):(Qt.expandByPoint(cr.min),Qt.expandByPoint(cr.max))}Qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(e,c),Ut.add(Ai)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new X,h[E]=new X;const u=new X,d=new X,f=new X,m=new Pe,g=new Pe,v=new Pe,p=new X,x=new X;function y(E,P,H){u.fromArray(i,E*3),d.fromArray(i,P*3),f.fromArray(i,H*3),m.fromArray(o,E*2),g.fromArray(o,P*2),v.fromArray(o,H*2),d.sub(u),f.sub(u),g.sub(m),v.sub(m);const F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(F),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(F),c[E].add(p),c[P].add(p),c[H].add(p),h[E].add(x),h[P].add(x),h[H].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let E=0,P=_.length;E<P;++E){const H=_[E],F=H.start,W=H.count;for(let k=F,ie=F+W;k<ie;k+=3)y(n[k+0],n[k+1],n[k+2])}const S=new X,R=new X,T=new X,D=new X;function M(E){T.fromArray(r,E*3),D.copy(T);const P=c[E];S.copy(P),S.sub(T.multiplyScalar(T.dot(P))).normalize(),R.crossVectors(D,P);const F=R.dot(h[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=F}for(let E=0,P=_.length;E<P;++E){const H=_[E],F=H.start,W=H.count;for(let k=F,ie=F+W;k<ie;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new X,r=new X,o=new X,a=new X,l=new X,c=new X,h=new X,u=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new st,ti=new tr,zr=new Sn,Va=new X,Ri=new X,Ci=new X,Pi=new X,Ws=new X,Vr=new X,kr=new Pe,Hr=new Pe,Gr=new Pe,ka=new X,Ha=new X,Ga=new X,Wr=new X,Xr=new X;class Yt extends bt{constructor(e=new nn,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ws.fromBufferAttribute(u,e),o?Vr.addScaledVector(Ws,h):Vr.addScaledVector(Ws.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(zr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(zr,Va)===null||ti.origin.distanceToSquared(Va)>(e.far-e.near)**2))&&(za.copy(r).invert(),ti.copy(e.ray).applyMatrix4(za),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=o[v.materialIndex],x=Math.max(v.start,f.start),y=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){const R=a.getX(_),T=a.getX(_+1),D=a.getX(_+2);i=qr(this,p,e,n,c,h,u,R,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const x=a.getX(v),y=a.getX(v+1),_=a.getX(v+2);i=qr(this,o,e,n,c,h,u,x,y,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=o[v.materialIndex],x=Math.max(v.start,f.start),y=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){const R=_,T=_+1,D=_+2;i=qr(this,p,e,n,c,h,u,R,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const x=v,y=v+1,_=v+2;i=qr(this,o,e,n,c,h,u,x,y,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function Du(s,e,t,n,i,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===xn,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:s}}function qr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ri),s.getVertexPosition(l,Ci),s.getVertexPosition(c,Pi);const h=Du(s,e,t,n,Ri,Ci,Pi,Wr);if(h){i&&(kr.fromBufferAttribute(i,a),Hr.fromBufferAttribute(i,l),Gr.fromBufferAttribute(i,c),h.uv=dn.getInterpolation(Wr,Ri,Ci,Pi,kr,Hr,Gr,new Pe)),r&&(kr.fromBufferAttribute(r,a),Hr.fromBufferAttribute(r,l),Gr.fromBufferAttribute(r,c),h.uv1=dn.getInterpolation(Wr,Ri,Ci,Pi,kr,Hr,Gr,new Pe),h.uv2=h.uv1),o&&(ka.fromBufferAttribute(o,a),Ha.fromBufferAttribute(o,l),Ga.fromBufferAttribute(o,c),h.normal=dn.getInterpolation(Wr,Ri,Ci,Pi,ka,Ha,Ga,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new X,materialIndex:0};dn.getNormal(Ri,Ci,Pi,u.normal),h.face=u}return h}class nr extends nn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(u,2));function m(g,v,p,x,y,_,S,R,T,D,M){const E=_/T,P=S/D,H=_/2,F=S/2,W=R/2,k=T+1,ie=D+1;let z=0,U=0;const J=new X;for(let q=0;q<ie;q++){const A=q*P-F;for(let O=0;O<k;O++){const B=O*E-H;J[g]=B*x,J[v]=A*y,J[p]=W,c.push(J.x,J.y,J.z),J[g]=0,J[v]=0,J[p]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(O/T),u.push(1-q/D),z+=1}}for(let q=0;q<D;q++)for(let A=0;A<T;A++){const O=d+A+k*q,B=d+A+k*(q+1),I=d+(A+1)+k*(q+1),C=d+(A+1)+k*q;l.push(O,B,C),l.push(B,I,C),U+=6}a.addGroup(f,U,M),f+=U,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=Ji(s[t]);for(const i in n)e[i]=n[i]}return e}function Uu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xc(s){return s.getRenderTarget()===null?s.outputColorSpace:Ot}const ps={clone:Ji,merge:jt};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ii=1;class Ou extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Xt(Li,Ii,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Li,Ii,e,t);r.layers=this.layers,this.add(r);const o=new Xt(Li,Ii,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Li,Ii,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Li,Ii,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Li,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Sc extends Ht{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zu extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ci?vt:hi),this.texture=new Sc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nr(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:jn});r.uniforms.tEquirect.value=t;const o=new Yt(i,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Zt),new Ou(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Xs=new X,Vu=new X,ku=new at;class Dn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xs.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ku.getNormalMatrix(e),i=this.coplanarPoint(Xs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Sn,jr=new X;class Do{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],g=i[10],v=i[11],p=i[12],x=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,v-f,_-p).normalize(),n[1].setComponents(l+r,d+c,v+f,_+p).normalize(),n[2].setComponents(l+o,d+h,v+m,_+x).normalize(),n[3].setComponents(l-o,d-h,v-m,_-x).normalize(),n[4].setComponents(l-a,d-u,v-g,_-y).normalize(),t===Bn)n[5].setComponents(l+a,d+u,v+g,_+y).normalize();else if(t===ds)n[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hu(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=s.SHORT;else if(u instanceof Uint32Array)m=s.UNSIGNED_INT;else if(u instanceof Int32Array)m=s.INT;else if(u instanceof Int8Array)m=s.BYTE;else if(u instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class ys extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],g=[],v=[];for(let p=0;p<h;p++){const x=p*d-o;for(let y=0;y<c;y++){const _=y*u-r;m.push(_,-x,0),g.push(0,0,1),v.push(y/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),S=x+1+c*(p+1),R=x+1+c*p;f.push(y,_,R),f.push(_,S,R)}this.setIndex(f),this.setAttribute("position",new fn(m,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ef=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Gu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:ju,alphatest_pars_fragment:Yu,aomap_fragment:Ku,aomap_pars_fragment:Zu,begin_vertex:Ju,beginnormal_vertex:$u,bsdfs:Qu,iridescence_fragment:ed,bumpmap_pars_fragment:td,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:rd,clipping_planes_vertex:sd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:ld,color_vertex:cd,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:vd,colorspace_fragment:gd,colorspace_pars_fragment:yd,envmap_fragment:_d,envmap_common_pars_fragment:xd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Dd,envmap_vertex:Ed,fog_vertex:bd,fog_pars_vertex:wd,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_fragment:Cd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Id,lights_pars_begin:Nd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Bd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:zd,lights_physical_pars_fragment:Vd,lights_fragment_begin:kd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:jd,map_fragment:Yd,map_pars_fragment:Kd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Qd,morphcolor_vertex:ef,morphnormal_vertex:tf,morphtarget_pars_vertex:nf,morphtarget_vertex:rf,normal_fragment_begin:sf,normal_fragment_maps:of,normal_pars_fragment:af,normal_pars_vertex:lf,normal_vertex:cf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:vf,premultiplied_alpha_fragment:gf,project_vertex:yf,dithering_fragment:_f,dithering_pars_fragment:xf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:bf,shadowmap_vertex:wf,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Rf,skinning_vertex:Cf,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:If,tonemapping_fragment:Nf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Bf,uv_pars_fragment:Ff,uv_pars_vertex:Of,uv_vertex:zf,worldpos_vertex:Vf,background_vert:kf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:qf,depth_vert:jf,depth_frag:Yf,distanceRGBA_vert:Kf,distanceRGBA_frag:Zf,equirect_vert:Jf,equirect_frag:$f,linedashed_vert:Qf,linedashed_frag:ep,meshbasic_vert:tp,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:rp,meshmatcap_vert:sp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:vp,shadow_vert:gp,shadow_frag:yp,sprite_vert:_p,sprite_frag:xp},Ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},mn={basic:{uniforms:jt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:jt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:jt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:jt([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:jt([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:jt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:jt([Ge.points,Ge.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:jt([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:jt([Ge.common,Ge.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:jt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:jt([Ge.sprite,Ge.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:jt([Ge.common,Ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:jt([Ge.lights,Ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};mn.physical={uniforms:jt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Yr={r:0,b:0,g:0};function Mp(s,e,t,n,i,r,o){const a=new it(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(v,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),x=!0);const _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===vs)?(h===void 0&&(h=new Yt(new nr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ji(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.colorSpace!==vt,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Yt(new ys(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,p){v.getRGB(Yr,xc(s)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(v,p=1){a.set(v),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(a,l)},render:m}}function Sp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=v(null);let c=l,h=!1;function u(W,k,ie,z,U){let J=!1;if(o){const q=g(z,ie,k);c!==q&&(c=q,f(c.object)),J=p(W,z,ie,U),J&&x(W,z,ie,U)}else{const q=k.wireframe===!0;(c.geometry!==z.id||c.program!==ie.id||c.wireframe!==q)&&(c.geometry=z.id,c.program=ie.id,c.wireframe=q,J=!0)}U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,D(W,k,ie,z),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(W){return n.isWebGL2?s.bindVertexArray(W):r.bindVertexArrayOES(W)}function m(W){return n.isWebGL2?s.deleteVertexArray(W):r.deleteVertexArrayOES(W)}function g(W,k,ie){const z=ie.wireframe===!0;let U=a[W.id];U===void 0&&(U={},a[W.id]=U);let J=U[k.id];J===void 0&&(J={},U[k.id]=J);let q=J[z];return q===void 0&&(q=v(d()),J[z]=q),q}function v(W){const k=[],ie=[],z=[];for(let U=0;U<i;U++)k[U]=0,ie[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:z,object:W,attributes:{},index:null}}function p(W,k,ie,z){const U=c.attributes,J=k.attributes;let q=0;const A=ie.getAttributes();for(const O in A)if(A[O].location>=0){const I=U[O];let C=J[O];if(C===void 0&&(O==="instanceMatrix"&&W.instanceMatrix&&(C=W.instanceMatrix),O==="instanceColor"&&W.instanceColor&&(C=W.instanceColor)),I===void 0||I.attribute!==C||C&&I.data!==C.data)return!0;q++}return c.attributesNum!==q||c.index!==z}function x(W,k,ie,z){const U={},J=k.attributes;let q=0;const A=ie.getAttributes();for(const O in A)if(A[O].location>=0){let I=J[O];I===void 0&&(O==="instanceMatrix"&&W.instanceMatrix&&(I=W.instanceMatrix),O==="instanceColor"&&W.instanceColor&&(I=W.instanceColor));const C={};C.attribute=I,I&&I.data&&(C.data=I.data),U[O]=C,q++}c.attributes=U,c.attributesNum=q,c.index=z}function y(){const W=c.newAttributes;for(let k=0,ie=W.length;k<ie;k++)W[k]=0}function _(W){S(W,0)}function S(W,k){const ie=c.newAttributes,z=c.enabledAttributes,U=c.attributeDivisors;ie[W]=1,z[W]===0&&(s.enableVertexAttribArray(W),z[W]=1),U[W]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,k),U[W]=k)}function R(){const W=c.newAttributes,k=c.enabledAttributes;for(let ie=0,z=k.length;ie<z;ie++)k[ie]!==W[ie]&&(s.disableVertexAttribArray(ie),k[ie]=0)}function T(W,k,ie,z,U,J,q){q===!0?s.vertexAttribIPointer(W,k,ie,U,J):s.vertexAttribPointer(W,k,ie,z,U,J)}function D(W,k,ie,z){if(n.isWebGL2===!1&&(W.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const U=z.attributes,J=ie.getAttributes(),q=k.defaultAttributeValues;for(const A in J){const O=J[A];if(O.location>=0){let B=U[A];if(B===void 0&&(A==="instanceMatrix"&&W.instanceMatrix&&(B=W.instanceMatrix),A==="instanceColor"&&W.instanceColor&&(B=W.instanceColor)),B!==void 0){const I=B.normalized,C=B.itemSize,K=t.get(B);if(K===void 0)continue;const oe=K.buffer,re=K.type,ee=K.bytesPerElement,fe=n.isWebGL2===!0&&(re===s.INT||re===s.UNSIGNED_INT||B.gpuType===nc);if(B.isInterleavedBufferAttribute){const he=B.data,N=he.stride,le=B.offset;if(he.isInstancedInterleavedBuffer){for(let te=0;te<O.locationSize;te++)S(O.location+te,he.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let te=0;te<O.locationSize;te++)_(O.location+te);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let te=0;te<O.locationSize;te++)T(O.location+te,C/O.locationSize,re,I,N*ee,(le+C/O.locationSize*te)*ee,fe)}else{if(B.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)S(O.location+he,B.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let he=0;he<O.locationSize;he++)_(O.location+he);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let he=0;he<O.locationSize;he++)T(O.location+he,C/O.locationSize,re,I,C*ee,C/O.locationSize*he*ee,fe)}}else if(q!==void 0){const I=q[A];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(O.location,I);break;case 3:s.vertexAttrib3fv(O.location,I);break;case 4:s.vertexAttrib4fv(O.location,I);break;default:s.vertexAttrib1fv(O.location,I)}}}}R()}function M(){H();for(const W in a){const k=a[W];for(const ie in k){const z=k[ie];for(const U in z)m(z[U].object),delete z[U];delete k[ie]}delete a[W]}}function E(W){if(a[W.id]===void 0)return;const k=a[W.id];for(const ie in k){const z=k[ie];for(const U in z)m(z[U].object),delete z[U];delete k[ie]}delete a[W.id]}function P(W){for(const k in a){const ie=a[k];if(ie[W.id]===void 0)continue;const z=ie[W.id];for(const U in z)m(z[U].object),delete z[U];delete ie[W.id]}}function H(){F(),h=!0,c!==l&&(c=l,f(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function Ep(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function bp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,_=o||e.has("OES_texture_float"),S=y&&_,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:R}}function wp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dn,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,v=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!v)r?h(null):c();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=h(m,d,y,f);for(let S=0;S!==y;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<p)&&(v=new Float32Array(p));for(let y=0,_=f;y!==g;++y,_+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function Tp(s){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=qi:a===uo&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ho||a===uo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zu(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Uo extends Mc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Wa=[.125,.215,.35,.446,.526,.582],si=20,qs=new Uo,Xa=new it;let js=null;const ri=(1+Math.sqrt(5))/2,Ni=1/ri,qa=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ri,Ni),new X(0,ri,-Ni),new X(Ni,0,ri),new X(-Ni,0,ri),new X(ri,Ni,0),new X(-ri,Ni,0)];class yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){js=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(js),e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),js=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Mr,format:an,colorSpace:Ot,depthBuffer:!1},i=ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(r)),this._blurMaterial=Rp(r,e,t)}return i}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,i){const a=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xa),h.toneMapping=Yn,h.autoClear=!1;const f=new qn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Yt(new nr,f);let g=!1;const v=e.background;v?v.isColor&&(f.color.copy(v),e.background=null,g=!0):(f.color.copy(Xa),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Kr(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qi||e.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=qa[(i-1)%qa.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*si-1),g=r/m,v=isFinite(r)?1+Math.floor(h*g):si;v>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${si}`);const p=[];let x=0;for(let T=0;T<si;++T){const D=T/g,M=Math.exp(-D*D/2);p.push(M),T===0?x+=M:T<v&&(x+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const _=this._sizeLods[i],S=3*_*(i>y-Vi?i-y+Vi:0),R=4*(this._cubeSize-_);Kr(t,S,R,3*_,2*_),l.setRenderTarget(t),l.render(u,qs)}}function Ap(s){const e=[],t=[],n=[];let i=s;const r=s-Vi+1+Wa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Vi?l=Wa[o-s+Vi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,v=2,p=1,x=new Float32Array(g*m*f),y=new Float32Array(v*m*f),_=new Float32Array(p*m*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,D=R>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(M,g*m*R),y.set(d,v*m*R);const E=[R,R,R,R,R,R];_.set(E,p*m*R)}const S=new nn;S.setAttribute("position",new Ft(x,g)),S.setAttribute("uv",new Ft(y,v)),S.setAttribute("faceIndex",new Ft(_,p)),e.push(S),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ja(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Rp(s,e,t){const n=new Float32Array(si),i=new X(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ya(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ka(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ho||l===uo,h=l===qi||l===ji;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new yo(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new yo(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lp(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let v=0,p=g.length;v<p;v++)e.remove(g[v])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let v=0,p=g.length;v<p;v++)e.update(g[v],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let y=0,_=x.length;y<_;y+=3){const S=x[y+0],R=x[y+1],T=x[y+2];d.push(S,R,R,T,T,S)}}else if(m!==void 0){const x=m.array;g=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const S=y+0,R=y+1,T=y+2;d.push(S,R,R,T,T,S)}}else return;const v=new(fc(d)?_c:yc)(d,1);v.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,v)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ip(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*l),t.update(f,r,1)}function u(d,f,m){if(m===0)return;let g,v;if(i)g=s,v="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,f,a,d*l,m),t.update(f,r,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Np(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dp(s,e){return s[0]-e[0]}function Up(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Bp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let k=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var f=k;v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),S===!0&&(M=3);let E=h.attributes.position.count*M,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*P*4*g),F=new vc(H,E,P,g);F.type=Un,F.needsUpdate=!0;const W=M*4;for(let ie=0;ie<g;ie++){const z=R[ie],U=T[ie],J=D[ie],q=E*P*4*ie;for(let A=0;A<z.count;A++){const O=A*W;y===!0&&(o.fromBufferAttribute(z,A),H[q+O+0]=o.x,H[q+O+1]=o.y,H[q+O+2]=o.z,H[q+O+3]=0),_===!0&&(o.fromBufferAttribute(U,A),H[q+O+4]=o.x,H[q+O+5]=o.y,H[q+O+6]=o.z,H[q+O+7]=0),S===!0&&(o.fromBufferAttribute(J,A),H[q+O+8]=o.x,H[q+O+9]=o.y,H[q+O+10]=o.z,H[q+O+11]=J.itemSize===4?o.w:1)}}v={count:g,texture:F,size:new Pe(E,P)},r.set(h,v),h.addEventListener("dispose",k)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){const S=g[_];S[0]=_,S[1]=d[_]}g.sort(Up);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Dp);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const S=a[_],R=S[0],T=S[1];R!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+_)!==v[R]&&h.setAttribute("morphTarget"+_,v[R]),p&&h.getAttribute("morphNormal"+_)!==p[R]&&h.setAttribute("morphNormal"+_,p[R]),i[_]=T,x+=T):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const y=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Fp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const bc=new Ht,wc=new vc,Tc=new Eu,Ac=new Sc,Za=[],Ja=[],$a=new Float32Array(16),Qa=new Float32Array(9),el=new Float32Array(4);function ir(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Za[i];if(r===void 0&&(r=new Float32Array(i),Za[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function _s(s,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Op(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function Hp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;el.set(n),s.uniformMatrix2fv(this.addr,!1,el),Dt(t,n)}}function Gp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;Qa.set(n),s.uniformMatrix3fv(this.addr,!1,Qa),Dt(t,n)}}function Wp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,n))return;$a.set(n),s.uniformMatrix4fv(this.addr,!1,$a),Dt(t,n)}}function Xp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function Yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function Kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function Qp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||bc,i)}function em(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tc,i)}function tm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ac,i)}function nm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wc,i)}function im(s){switch(s){case 5126:return Op;case 35664:return zp;case 35665:return Vp;case 35666:return kp;case 35674:return Hp;case 35675:return Gp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return jp;case 35669:case 35673:return Yp;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function rm(s,e){s.uniform1fv(this.addr,e)}function sm(s,e){const t=ir(e,this.size,2);s.uniform2fv(this.addr,t)}function om(s,e){const t=ir(e,this.size,3);s.uniform3fv(this.addr,t)}function am(s,e){const t=ir(e,this.size,4);s.uniform4fv(this.addr,t)}function lm(s,e){const t=ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cm(s,e){const t=ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hm(s,e){const t=ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function um(s,e){s.uniform1iv(this.addr,e)}function dm(s,e){s.uniform2iv(this.addr,e)}function fm(s,e){s.uniform3iv(this.addr,e)}function pm(s,e){s.uniform4iv(this.addr,e)}function mm(s,e){s.uniform1uiv(this.addr,e)}function vm(s,e){s.uniform2uiv(this.addr,e)}function gm(s,e){s.uniform3uiv(this.addr,e)}function ym(s,e){s.uniform4uiv(this.addr,e)}function _m(s,e,t){const n=this.cache,i=e.length,r=_s(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||bc,r[o])}function xm(s,e,t){const n=this.cache,i=e.length,r=_s(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Tc,r[o])}function Mm(s,e,t){const n=this.cache,i=e.length,r=_s(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ac,r[o])}function Sm(s,e,t){const n=this.cache,i=e.length,r=_s(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wc,r[o])}function Em(s){switch(s){case 5126:return rm;case 35664:return sm;case 35665:return om;case 35666:return am;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return vm;case 36295:return gm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=im(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Em(t.type)}}class Tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function tl(s,e){s.seq.push(e),s.map[e.id]=e}function Am(s,e,t){const n=s.name,i=n.length;for(Ys.lastIndex=0;;){const r=Ys.exec(n),o=Ys.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tl(t,c===void 0?new bm(a,s,e):new wm(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Tm(a),tl(t,u)),t=u}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Am(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function nl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Rm=0;function Cm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Pm(s){switch(s){case Ot:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function il(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cm(s.getShaderSource(e),o)}else return i}function Lm(s,e){const t=Pm(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Im(s,e){let t;switch(e){case bh:t="Linear";break;case wh:t="Reinhard";break;case Th:t="OptimizedCineon";break;case Ql:t="ACESFilmic";break;case Ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function Dm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Um(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mr(s){return s!==""}function rl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(s){return s.replace(Bm,Om)}const Fm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Om(s,e){let t=ot[e];if(t===void 0){const n=Fm.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _o(t)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(s){return s.replace(zm,Vm)}function Vm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function al(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qi:case ji:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case Eh:e="ENVMAP_BLENDING_ADD";break}return e}function Xm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qm(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=km(t),c=Hm(t),h=Gm(t),u=Wm(t),d=Xm(t),f=t.isWebGL2?"":Nm(t),m=Dm(r),g=i.createProgram();let v,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(mr).join(`
`),v.length>0&&(v+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(v=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[f,al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Lm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=_o(o),o=rl(o,t),o=sl(o,t),a=_o(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+v+o,_=x+p+a,S=nl(i,i.VERTEX_SHADER,y),R=nl(i,i.FRAGMENT_SHADER,_);if(i.attachShader(g,S),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),E=i.getShaderInfoLog(S).trim(),P=i.getShaderInfoLog(R).trim();let H=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,R);else{const W=il(i,S,"vertex"),k=il(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+W+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||P==="")&&(F=!1);F&&(this.diagnostics={runnable:H,programLog:M,vertexShader:{log:E,prefix:v},fragmentShader:{log:P,prefix:p}})}i.deleteShader(S),i.deleteShader(R);let T;this.getUniforms=function(){return T===void 0&&(T=new ls(i,g)),T};let D;return this.getAttributes=function(){return D===void 0&&(D=Um(i,g)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=R,this}let jm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Km(e),t.set(e,n)),n}}class Km{constructor(e){this.id=jm++,this.code=e,this.usedTimes=0}}function Zm(s,e,t,n,i,r,o){const a=new No,l=new Ym,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function v(M,E,P,H,F){const W=H.fog,k=F.geometry,ie=M.isMeshStandardMaterial?H.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||ie),U=z&&z.mapping===vs?z.image.height:null,J=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,A=q!==void 0?q.length:0;let O=0;k.morphAttributes.position!==void 0&&(O=1),k.morphAttributes.normal!==void 0&&(O=2),k.morphAttributes.color!==void 0&&(O=3);let B,I,C,K;if(J){const rt=mn[J];B=rt.vertexShader,I=rt.fragmentShader}else B=M.vertexShader,I=M.fragmentShader,l.update(M),C=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const oe=s.getRenderTarget(),re=F.isInstancedMesh===!0,ee=!!M.map,fe=!!M.matcap,he=!!z,N=!!M.aoMap,le=!!M.lightMap,te=!!M.bumpMap,$=!!M.normalMap,Q=!!M.displacementMap,Ae=!!M.emissiveMap,ye=!!M.metalnessMap,Te=!!M.roughnessMap,_e=M.anisotropy>0,qe=M.clearcoat>0,Je=M.iridescence>0,L=M.sheen>0,w=M.transmission>0,ne=_e&&!!M.anisotropyMap,xe=qe&&!!M.clearcoatMap,ve=qe&&!!M.clearcoatNormalMap,Me=qe&&!!M.clearcoatRoughnessMap,Xe=Je&&!!M.iridescenceMap,we=Je&&!!M.iridescenceThicknessMap,ue=L&&!!M.sheenColorMap,G=L&&!!M.sheenRoughnessMap,ge=!!M.specularMap,Ue=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Oe=w&&!!M.transmissionMap,Ze=w&&!!M.thicknessMap,et=!!M.gradientMap,j=!!M.alphaMap,Be=M.alphaTest>0,de=!!M.alphaHash,Se=!!M.extensions,Le=!!k.attributes.uv1,tt=!!k.attributes.uv2,lt=!!k.attributes.uv3;let ft=Yn;return M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ft=s.toneMapping),{isWebGL2:h,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:I,defines:M.defines,customVertexShaderID:C,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:re,instancingColor:re&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ot,map:ee,matcap:fe,envMap:he,envMapMode:he&&z.mapping,envMapCubeUVHeight:U,aoMap:N,lightMap:le,bumpMap:te,normalMap:$,displacementMap:d&&Q,emissiveMap:Ae,normalMapObjectSpace:$&&M.normalMapType===Wh,normalMapTangentSpace:$&&M.normalMapType===hc,metalnessMap:ye,roughnessMap:Te,anisotropy:_e,anisotropyMap:ne,clearcoat:qe,clearcoatMap:xe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Me,iridescence:Je,iridescenceMap:Xe,iridescenceThicknessMap:we,sheen:L,sheenColorMap:ue,sheenRoughnessMap:G,specularMap:ge,specularColorMap:Ue,specularIntensityMap:Ne,transmission:w,transmissionMap:Oe,thicknessMap:Ze,gradientMap:et,opaque:M.transparent===!1&&M.blending===Hi,alphaMap:j,alphaTest:Be,alphaHash:de,combine:M.combine,mapUv:ee&&g(M.map.channel),aoMapUv:N&&g(M.aoMap.channel),lightMapUv:le&&g(M.lightMap.channel),bumpMapUv:te&&g(M.bumpMap.channel),normalMapUv:$&&g(M.normalMap.channel),displacementMapUv:Q&&g(M.displacementMap.channel),emissiveMapUv:Ae&&g(M.emissiveMap.channel),metalnessMapUv:ye&&g(M.metalnessMap.channel),roughnessMapUv:Te&&g(M.roughnessMap.channel),anisotropyMapUv:ne&&g(M.anisotropyMap.channel),clearcoatMapUv:xe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:G&&g(M.sheenRoughnessMap.channel),specularMapUv:ge&&g(M.specularMap.channel),specularColorMapUv:Ue&&g(M.specularColorMap.channel),specularIntensityMapUv:Ne&&g(M.specularIntensityMap.channel),transmissionMapUv:Oe&&g(M.transmissionMap.channel),thicknessMapUv:Ze&&g(M.thicknessMap.channel),alphaMapUv:j&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($||_e),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:tt,vertexUv3s:lt,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(ee||j),fog:!!W,useFog:M.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:O,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&M.map.colorSpace===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Se&&M.extensions.derivatives===!0,extensionFragDepth:Se&&M.extensions.fragDepth===!0,extensionDrawBuffers:Se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)E.push(P),E.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(E,M),y(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function _(M){const E=m[M.type];let P;if(E){const H=mn[E];P=ps.clone(H.uniforms)}else P=M.uniforms;return P}function S(M,E){let P;for(let H=0,F=c.length;H<F;H++){const W=c[H];if(W.cacheKey===E){P=W,++P.usedTimes;break}}return P===void 0&&(P=new qm(s,E,M,r),c.push(P)),P}function R(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:D}}function Jm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ll(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,g,v){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:v},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=v),e++,p}function a(u,d,f,m,g,v){const p=o(u,d,f,m,g,v);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,g,v){const p=o(u,d,f,m,g,v);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||$m),n.length>1&&n.sort(d||ll),i.length>1&&i.sort(d||ll)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Qm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new cl,s.set(n,[o])):i>=r.length?(o=new cl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ev(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new it};break;case"SpotLight":t={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function tv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nv=0;function iv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rv(s,e){const t=new ev,n=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new X);const r=new X,o=new st,a=new st;function l(h,u){let d=0,f=0,m=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let g=0,v=0,p=0,x=0,y=0,_=0,S=0,R=0,T=0,D=0;h.sort(iv);const M=u===!0?Math.PI:1;for(let P=0,H=h.length;P<H;P++){const F=h[P],W=F.color,k=F.intensity,ie=F.distance,z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=W.r*k*M,f+=W.g*k*M,m+=W.b*k*M;else if(F.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(F.sh.coefficients[U],k);else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const J=F.shadow,q=n.get(F);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,i.directionalShadow[g]=q,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=F.shadow.matrix,_++}i.directional[g]=U,g++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(W).multiplyScalar(k*M),U.distance=ie,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,i.spot[p]=U;const J=F.shadow;if(F.map&&(i.spotLightMap[T]=F.map,T++,J.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[p]=J.matrix,F.castShadow){const q=n.get(F);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=z,R++}p++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(W).multiplyScalar(k),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),i.rectArea[x]=U,x++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity*M),U.distance=F.distance,U.decay=F.decay,F.castShadow){const J=F.shadow,q=n.get(F);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=F.shadow.matrix,S++}i.point[v]=U,v++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(k*M),U.groundColor.copy(F.groundColor).multiplyScalar(k*M),i.hemi[y]=U,y++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const E=i.hash;(E.directionalLength!==g||E.pointLength!==v||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==y||E.numDirectionalShadows!==_||E.numPointShadows!==S||E.numSpotShadows!==R||E.numSpotMaps!==T)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=x,i.point.length=v,i.hemi.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=R+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,E.directionalLength=g,E.pointLength=v,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=y,E.numDirectionalShadows=_,E.numPointShadows=S,E.numSpotShadows=R,E.numSpotMaps=T,i.version=nv++)}function c(h,u){let d=0,f=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){const _=h[x];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(_.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(_.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:l,setupView:c,state:i}}function hl(s,e){const t=new rv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sv(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new hl(s,e),t.set(r,[l])):o>=a.length?(l=new hl(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ov extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class av extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hv(s,e,t){let n=new Do;const i=new Pe,r=new Pe,o=new gt,a=new ov({depthPacking:Gh}),l=new av,c={},h=t.maxTextureSize,u={[xn]:Kt,[Kt]:xn,[gn]:gn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new nn;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Yt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let p=this.type;this.render=function(S,R,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;const D=s.getRenderTarget(),M=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),P=s.state;P.setBlending(jn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const H=p!==Nn&&this.type===Nn,F=p===Nn&&this.type!==Nn;for(let W=0,k=S.length;W<k;W++){const ie=S[W],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const U=z.getFrameExtents();if(i.multiply(U),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/U.x),i.x=r.x*U.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/U.y),i.y=r.y*U.y,z.mapSize.y=r.y)),z.map===null||H===!0||F===!0){const q=this.type!==Nn?{minFilter:Bt,magFilter:Bt}:{};z.map!==null&&z.map.dispose(),z.map=new Zn(i.x,i.y,q),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const J=z.getViewportCount();for(let q=0;q<J;q++){const A=z.getViewport(q);o.set(r.x*A.x,r.y*A.y,r.x*A.z,r.y*A.w),P.viewport(o),z.updateMatrices(ie,q),n=z.getFrustum(),_(R,T,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===Nn&&x(z,T),z.needsUpdate=!1}p=this.type,v.needsUpdate=!1,s.setRenderTarget(D,M,E)};function x(S,R){const T=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(R,null,T,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(R,null,T,f,g,null)}function y(S,R,T,D){let M=null;const E=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=T.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const P=M.uuid,H=R.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let W=F[H];W===void 0&&(W=M.clone(),F[H]=W),M=W}if(M.visible=R.visible,M.wireframe=R.wireframe,D===Nn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=s.properties.get(M);P.light=T}return M}function _(S,R,T,D,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Nn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const H=e.update(S),F=S.material;if(Array.isArray(F)){const W=H.groups;for(let k=0,ie=W.length;k<ie;k++){const z=W[k],U=F[z.materialIndex];if(U&&U.visible){const J=y(S,U,D,M);s.renderBufferDirect(T,null,H,J,S,z)}}}else if(F.visible){const W=y(S,F,D,M);s.renderBufferDirect(T,null,H,W,S,null)}}const P=S.children;for(let H=0,F=P.length;H<F;H++)_(P[H],R,T,D,M)}}function uv(s,e,t){const n=t.isWebGL2;function i(){let j=!1;const Be=new gt;let de=null;const Se=new gt(0,0,0,0);return{setMask:function(Le){de!==Le&&!j&&(s.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){j=Le},setClear:function(Le,tt,lt,ft,Rt){Rt===!0&&(Le*=ft,tt*=ft,lt*=ft),Be.set(Le,tt,lt,ft),Se.equals(Be)===!1&&(s.clearColor(Le,tt,lt,ft),Se.copy(Be))},reset:function(){j=!1,de=null,Se.set(-1,0,0,0)}}}function r(){let j=!1,Be=null,de=null,Se=null;return{setTest:function(Le){Le?oe(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(Le){Be!==Le&&!j&&(s.depthMask(Le),Be=Le)},setFunc:function(Le){if(de!==Le){switch(Le){case mh:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case gh:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case yh:s.depthFunc(s.EQUAL);break;case _h:s.depthFunc(s.GEQUAL);break;case xh:s.depthFunc(s.GREATER);break;case Mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Le}},setLocked:function(Le){j=Le},setClear:function(Le){Se!==Le&&(s.clearDepth(Le),Se=Le)},reset:function(){j=!1,Be=null,de=null,Se=null}}}function o(){let j=!1,Be=null,de=null,Se=null,Le=null,tt=null,lt=null,ft=null,Rt=null;return{setTest:function(rt){j||(rt?oe(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(rt){Be!==rt&&!j&&(s.stencilMask(rt),Be=rt)},setFunc:function(rt,pe,me){(de!==rt||Se!==pe||Le!==me)&&(s.stencilFunc(rt,pe,me),de=rt,Se=pe,Le=me)},setOp:function(rt,pe,me){(tt!==rt||lt!==pe||ft!==me)&&(s.stencilOp(rt,pe,me),tt=rt,lt=pe,ft=me)},setLocked:function(rt){j=rt},setClear:function(rt){Rt!==rt&&(s.clearStencil(rt),Rt=rt)},reset:function(){j=!1,Be=null,de=null,Se=null,Le=null,tt=null,lt=null,ft=null,Rt=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,g=[],v=null,p=!1,x=null,y=null,_=null,S=null,R=null,T=null,D=null,M=!1,E=null,P=null,H=null,F=null,W=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,z=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),ie=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ie=z>=2);let J=null,q={};const A=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),B=new gt().fromArray(A),I=new gt().fromArray(O);function C(j,Be,de,Se){const Le=new Uint8Array(4),tt=s.createTexture();s.bindTexture(j,tt),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<de;lt++)n&&(j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY)?s.texImage3D(Be,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Be+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return tt}const K={};K[s.TEXTURE_2D]=C(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=C(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(K[s.TEXTURE_2D_ARRAY]=C(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=C(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(s.DEPTH_TEST),l.setFunc(co),Q(!1),Ae(Jo),oe(s.CULL_FACE),te(jn);function oe(j){d[j]!==!0&&(s.enable(j),d[j]=!0)}function re(j){d[j]!==!1&&(s.disable(j),d[j]=!1)}function ee(j,Be){return f[j]!==Be?(s.bindFramebuffer(j,Be),f[j]=Be,n&&(j===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Be),j===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Be)),!0):!1}function fe(j,Be){let de=g,Se=!1;if(j)if(de=m.get(Be),de===void 0&&(de=[],m.set(Be,de)),j.isWebGLMultipleRenderTargets){const Le=j.texture;if(de.length!==Le.length||de[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,lt=Le.length;tt<lt;tt++)de[tt]=s.COLOR_ATTACHMENT0+tt;de.length=Le.length,Se=!0}}else de[0]!==s.COLOR_ATTACHMENT0&&(de[0]=s.COLOR_ATTACHMENT0,Se=!0);else de[0]!==s.BACK&&(de[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function he(j){return v!==j?(s.useProgram(j),v=j,!0):!1}const N={[Fi]:s.FUNC_ADD,[rh]:s.FUNC_SUBTRACT,[sh]:s.FUNC_REVERSE_SUBTRACT};if(n)N[ta]=s.MIN,N[na]=s.MAX;else{const j=e.get("EXT_blend_minmax");j!==null&&(N[ta]=j.MIN_EXT,N[na]=j.MAX_EXT)}const le={[oh]:s.ZERO,[ah]:s.ONE,[lh]:s.SRC_COLOR,[Zl]:s.SRC_ALPHA,[ph]:s.SRC_ALPHA_SATURATE,[dh]:s.DST_COLOR,[hh]:s.DST_ALPHA,[ch]:s.ONE_MINUS_SRC_COLOR,[Jl]:s.ONE_MINUS_SRC_ALPHA,[fh]:s.ONE_MINUS_DST_COLOR,[uh]:s.ONE_MINUS_DST_ALPHA};function te(j,Be,de,Se,Le,tt,lt,ft){if(j===jn){p===!0&&(re(s.BLEND),p=!1);return}if(p===!1&&(oe(s.BLEND),p=!0),j!==ih){if(j!==x||ft!==M){if((y!==Fi||R!==Fi)&&(s.blendEquation(s.FUNC_ADD),y=Fi,R=Fi),ft)switch(j){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case Qo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ea:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ea:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}_=null,S=null,T=null,D=null,x=j,M=ft}return}Le=Le||Be,tt=tt||de,lt=lt||Se,(Be!==y||Le!==R)&&(s.blendEquationSeparate(N[Be],N[Le]),y=Be,R=Le),(de!==_||Se!==S||tt!==T||lt!==D)&&(s.blendFuncSeparate(le[de],le[Se],le[tt],le[lt]),_=de,S=Se,T=tt,D=lt),x=j,M=!1}function $(j,Be){j.side===gn?re(s.CULL_FACE):oe(s.CULL_FACE);let de=j.side===Kt;Be&&(de=!de),Q(de),j.blending===Hi&&j.transparent===!1?te(jn):te(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),l.setFunc(j.depthFunc),l.setTest(j.depthTest),l.setMask(j.depthWrite),a.setMask(j.colorWrite);const Se=j.stencilWrite;c.setTest(Se),Se&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Te(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(j){E!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),E=j)}function Ae(j){j!==eh?(oe(s.CULL_FACE),j!==P&&(j===Jo?s.cullFace(s.BACK):j===th?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),P=j}function ye(j){j!==H&&(ie&&s.lineWidth(j),H=j)}function Te(j,Be,de){j?(oe(s.POLYGON_OFFSET_FILL),(F!==Be||W!==de)&&(s.polygonOffset(Be,de),F=Be,W=de)):re(s.POLYGON_OFFSET_FILL)}function _e(j){j?oe(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function qe(j){j===void 0&&(j=s.TEXTURE0+k-1),J!==j&&(s.activeTexture(j),J=j)}function Je(j,Be,de){de===void 0&&(J===null?de=s.TEXTURE0+k-1:de=J);let Se=q[de];Se===void 0&&(Se={type:void 0,texture:void 0},q[de]=Se),(Se.type!==j||Se.texture!==Be)&&(J!==de&&(s.activeTexture(de),J=de),s.bindTexture(j,Be||K[j]),Se.type=j,Se.texture=Be)}function L(){const j=q[J];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function w(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function G(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(j){B.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),B.copy(j))}function Ne(j){I.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),I.copy(j))}function Oe(j,Be){let de=u.get(Be);de===void 0&&(de=new WeakMap,u.set(Be,de));let Se=de.get(j);Se===void 0&&(Se=s.getUniformBlockIndex(Be,j.name),de.set(j,Se))}function Ze(j,Be){const Se=u.get(Be).get(j);h.get(Be)!==Se&&(s.uniformBlockBinding(Be,Se,j.__bindingPointIndex),h.set(Be,Se))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,q={},f={},m=new WeakMap,g=[],v=null,p=!1,x=null,y=null,_=null,S=null,R=null,T=null,D=null,M=!1,E=null,P=null,H=null,F=null,W=null,B.set(0,0,s.canvas.width,s.canvas.height),I.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:oe,disable:re,bindFramebuffer:ee,drawBuffers:fe,useProgram:he,setBlending:te,setMaterial:$,setFlipSided:Q,setCullFace:Ae,setLineWidth:ye,setPolygonOffset:Te,setScissorTest:_e,activeTexture:qe,bindTexture:Je,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:ne,texImage2D:G,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:Ze,texStorage2D:we,texStorage3D:ue,texSubImage2D:xe,texSubImage3D:ve,compressedTexSubImage2D:Me,compressedTexSubImage3D:Xe,scissor:Ue,viewport:Ne,reset:et}}function dv(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const v=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return p?new OffscreenCanvas(L,w):Er("canvas")}function y(L,w,ne,xe){let ve=1;if((L.width>xe||L.height>xe)&&(ve=xe/Math.max(L.width,L.height)),ve<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Me=w?fs:Math.floor,Xe=Me(ve*L.width),we=Me(ve*L.height);g===void 0&&(g=x(Xe,we));const ue=ne?x(Xe,we):g;return ue.width=Xe,ue.height=we,ue.getContext("2d").drawImage(L,0,0,Xe,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Xe+"x"+we+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function _(L){return go(L.width)&&go(L.height)}function S(L){return a?!1:L.wrapS!==on||L.wrapT!==on||L.minFilter!==Bt&&L.minFilter!==Zt}function R(L,w){return L.generateMipmaps&&w&&L.minFilter!==Bt&&L.minFilter!==Zt}function T(L){s.generateMipmap(L)}function D(L,w,ne,xe,ve=!1){if(a===!1)return w;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Me=w;return w===s.RED&&(ne===s.FLOAT&&(Me=s.R32F),ne===s.HALF_FLOAT&&(Me=s.R16F),ne===s.UNSIGNED_BYTE&&(Me=s.R8)),w===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(Me=s.R8UI),ne===s.UNSIGNED_SHORT&&(Me=s.R16UI),ne===s.UNSIGNED_INT&&(Me=s.R32UI),ne===s.BYTE&&(Me=s.R8I),ne===s.SHORT&&(Me=s.R16I),ne===s.INT&&(Me=s.R32I)),w===s.RG&&(ne===s.FLOAT&&(Me=s.RG32F),ne===s.HALF_FLOAT&&(Me=s.RG16F),ne===s.UNSIGNED_BYTE&&(Me=s.RG8)),w===s.RGBA&&(ne===s.FLOAT&&(Me=s.RGBA32F),ne===s.HALF_FLOAT&&(Me=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(Me=xe===vt&&ve===!1?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)),(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function M(L,w,ne){return R(L,ne)===!0||L.isFramebufferTexture&&L.minFilter!==Bt&&L.minFilter!==Zt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function E(L){return L===Bt||L===fo||L===as?s.NEAREST:s.LINEAR}function P(L){const w=L.target;w.removeEventListener("dispose",P),F(w),w.isVideoTexture&&m.delete(w)}function H(L){const w=L.target;w.removeEventListener("dispose",H),k(w)}function F(L){const w=n.get(L);if(w.__webglInit===void 0)return;const ne=L.source,xe=v.get(ne);if(xe){const ve=xe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&W(L),Object.keys(xe).length===0&&v.delete(ne)}n.remove(L)}function W(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const ne=L.source,xe=v.get(ne);delete xe[w.__cacheKey],o.memory.textures--}function k(L){const w=L.texture,ne=n.get(L),xe=n.get(w);if(xe.__webglTexture!==void 0&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(ne.__webglFramebuffer[ve]))for(let Me=0;Me<ne.__webglFramebuffer[ve].length;Me++)s.deleteFramebuffer(ne.__webglFramebuffer[ve][Me]);else s.deleteFramebuffer(ne.__webglFramebuffer[ve]);ne.__webglDepthbuffer&&s.deleteRenderbuffer(ne.__webglDepthbuffer[ve])}else{if(Array.isArray(ne.__webglFramebuffer))for(let ve=0;ve<ne.__webglFramebuffer.length;ve++)s.deleteFramebuffer(ne.__webglFramebuffer[ve]);else s.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&s.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let ve=0;ve<ne.__webglColorRenderbuffer.length;ve++)ne.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(ne.__webglColorRenderbuffer[ve]);ne.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ve=0,Me=w.length;ve<Me;ve++){const Xe=n.get(w[ve]);Xe.__webglTexture&&(s.deleteTexture(Xe.__webglTexture),o.memory.textures--),n.remove(w[ve])}n.remove(w),n.remove(L)}let ie=0;function z(){ie=0}function U(){const L=ie;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),ie+=1,L}function J(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function q(L,w){const ne=n.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){const xe=L.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(ne,L,w);return}}t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+w)}function A(L,w){const ne=n.get(L);if(L.version>0&&ne.__version!==L.version){ee(ne,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+w)}function O(L,w){const ne=n.get(L);if(L.version>0&&ne.__version!==L.version){ee(ne,L,w);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+w)}function B(L,w){const ne=n.get(L);if(L.version>0&&ne.__version!==L.version){fe(ne,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+w)}const I={[ui]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[hs]:s.MIRRORED_REPEAT},C={[Bt]:s.NEAREST,[fo]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[tc]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},K={[qh]:s.NEVER,[Qh]:s.ALWAYS,[jh]:s.LESS,[Kh]:s.LEQUAL,[Yh]:s.EQUAL,[$h]:s.GEQUAL,[Zh]:s.GREATER,[Jh]:s.NOTEQUAL};function oe(L,w,ne){if(ne?(s.texParameteri(L,s.TEXTURE_WRAP_S,I[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,I[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,I[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,C[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,C[w.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==on||w.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,E(w.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==Bt&&w.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Bt||w.minFilter!==as&&w.minFilter!==di||w.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(L,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function re(L,w){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",P));const xe=w.source;let ve=v.get(xe);ve===void 0&&(ve={},v.set(xe,ve));const Me=J(w);if(Me!==L.__cacheKey){ve[Me]===void 0&&(ve[Me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),ve[Me].usedTimes++;const Xe=ve[L.__cacheKey];Xe!==void 0&&(ve[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&W(w)),L.__cacheKey=Me,L.__webglTexture=ve[Me].texture}return ne}function ee(L,w,ne){let xe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=s.TEXTURE_3D);const ve=re(L,w),Me=w.source;t.bindTexture(xe,L.__webglTexture,s.TEXTURE0+ne);const Xe=n.get(Me);if(Me.version!==Xe.__version||ve===!0){t.activeTexture(s.TEXTURE0+ne),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const we=S(w)&&_(w.image)===!1;let ue=y(w.image,we,!1,h);ue=Je(w,ue);const G=_(ue)||a,ge=r.convert(w.format,w.colorSpace);let Ue=r.convert(w.type),Ne=D(w.internalFormat,ge,Ue,w.colorSpace,w.isVideoTexture);oe(xe,w,G);let Oe;const Ze=w.mipmaps,et=a&&w.isVideoTexture!==!0,j=Xe.__version===void 0||ve===!0,Be=M(w,ue,G);if(w.isDepthTexture)Ne=s.DEPTH_COMPONENT,a?w.type===Un?Ne=s.DEPTH_COMPONENT32F:w.type===Xn?Ne=s.DEPTH_COMPONENT24:w.type===ai?Ne=s.DEPTH24_STENCIL8:Ne=s.DEPTH_COMPONENT16:w.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===li&&Ne===s.DEPTH_COMPONENT&&w.type!==Po&&w.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Xn,Ue=r.convert(w.type)),w.format===Yi&&Ne===s.DEPTH_COMPONENT&&(Ne=s.DEPTH_STENCIL,w.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ai,Ue=r.convert(w.type))),j&&(et?t.texStorage2D(s.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ge,Ue,null));else if(w.isDataTexture)if(Ze.length>0&&G){et&&j&&t.texStorage2D(s.TEXTURE_2D,Be,Ne,Ze[0].width,Ze[0].height);for(let de=0,Se=Ze.length;de<Se;de++)Oe=Ze[de],et?t.texSubImage2D(s.TEXTURE_2D,de,0,0,Oe.width,Oe.height,ge,Ue,Oe.data):t.texImage2D(s.TEXTURE_2D,de,Ne,Oe.width,Oe.height,0,ge,Ue,Oe.data);w.generateMipmaps=!1}else et?(j&&t.texStorage2D(s.TEXTURE_2D,Be,Ne,ue.width,ue.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue.width,ue.height,ge,Ue,ue.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ge,Ue,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&j&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Ne,Ze[0].width,Ze[0].height,ue.depth);for(let de=0,Se=Ze.length;de<Se;de++)Oe=Ze[de],w.format!==an?ge!==null?et?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Oe.width,Oe.height,ue.depth,ge,Oe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ne,Oe.width,Oe.height,ue.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Oe.width,Oe.height,ue.depth,ge,Ue,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Ne,Oe.width,Oe.height,ue.depth,0,ge,Ue,Oe.data)}else{et&&j&&t.texStorage2D(s.TEXTURE_2D,Be,Ne,Ze[0].width,Ze[0].height);for(let de=0,Se=Ze.length;de<Se;de++)Oe=Ze[de],w.format!==an?ge!==null?et?t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Oe.width,Oe.height,ge,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Ne,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(s.TEXTURE_2D,de,0,0,Oe.width,Oe.height,ge,Ue,Oe.data):t.texImage2D(s.TEXTURE_2D,de,Ne,Oe.width,Oe.height,0,ge,Ue,Oe.data)}else if(w.isDataArrayTexture)et?(j&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Ne,ue.width,ue.height,ue.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ge,Ue,ue.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,ge,Ue,ue.data);else if(w.isData3DTexture)et?(j&&t.texStorage3D(s.TEXTURE_3D,Be,Ne,ue.width,ue.height,ue.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ge,Ue,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,ge,Ue,ue.data);else if(w.isFramebufferTexture){if(j)if(et)t.texStorage2D(s.TEXTURE_2D,Be,Ne,ue.width,ue.height);else{let de=ue.width,Se=ue.height;for(let Le=0;Le<Be;Le++)t.texImage2D(s.TEXTURE_2D,Le,Ne,de,Se,0,ge,Ue,null),de>>=1,Se>>=1}}else if(Ze.length>0&&G){et&&j&&t.texStorage2D(s.TEXTURE_2D,Be,Ne,Ze[0].width,Ze[0].height);for(let de=0,Se=Ze.length;de<Se;de++)Oe=Ze[de],et?t.texSubImage2D(s.TEXTURE_2D,de,0,0,ge,Ue,Oe):t.texImage2D(s.TEXTURE_2D,de,Ne,ge,Ue,Oe);w.generateMipmaps=!1}else et?(j&&t.texStorage2D(s.TEXTURE_2D,Be,Ne,ue.width,ue.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Ue,ue)):t.texImage2D(s.TEXTURE_2D,0,Ne,ge,Ue,ue);R(w,G)&&T(xe),Xe.__version=Me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,ne){if(w.image.length!==6)return;const xe=re(L,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ne);const Me=n.get(ve);if(ve.version!==Me.__version||xe===!0){t.activeTexture(s.TEXTURE0+ne),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let de=0;de<6;de++)!Xe&&!we?ue[de]=y(w.image[de],!1,!0,c):ue[de]=we?w.image[de].image:w.image[de],ue[de]=Je(w,ue[de]);const G=ue[0],ge=_(G)||a,Ue=r.convert(w.format,w.colorSpace),Ne=r.convert(w.type),Oe=D(w.internalFormat,Ue,Ne,w.colorSpace),Ze=a&&w.isVideoTexture!==!0,et=Me.__version===void 0||xe===!0;let j=M(w,G,ge);oe(s.TEXTURE_CUBE_MAP,w,ge);let Be;if(Xe){Ze&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,j,Oe,G.width,G.height);for(let de=0;de<6;de++){Be=ue[de].mipmaps;for(let Se=0;Se<Be.length;Se++){const Le=Be[Se];w.format!==an?Ue!==null?Ze?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,Oe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,0,0,Le.width,Le.height,Ue,Ne,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se,Oe,Le.width,Le.height,0,Ue,Ne,Le.data)}}}else{Be=w.mipmaps,Ze&&et&&(Be.length>0&&j++,t.texStorage2D(s.TEXTURE_CUBE_MAP,j,Oe,ue[0].width,ue[0].height));for(let de=0;de<6;de++)if(we){Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ue[de].width,ue[de].height,Ue,Ne,ue[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Oe,ue[de].width,ue[de].height,0,Ue,Ne,ue[de].data);for(let Se=0;Se<Be.length;Se++){const tt=Be[Se].image[de].image;Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,0,0,tt.width,tt.height,Ue,Ne,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,Oe,tt.width,tt.height,0,Ue,Ne,tt.data)}}else{Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,Ne,ue[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Oe,Ue,Ne,ue[de]);for(let Se=0;Se<Be.length;Se++){const Le=Be[Se];Ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,0,0,Ue,Ne,Le.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se+1,Oe,Ue,Ne,Le.image[de])}}}R(w,ge)&&T(s.TEXTURE_CUBE_MAP),Me.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function he(L,w,ne,xe,ve,Me){const Xe=r.convert(ne.format,ne.colorSpace),we=r.convert(ne.type),ue=D(ne.internalFormat,Xe,we,ne.colorSpace);if(!n.get(w).__hasExternalTextures){const ge=Math.max(1,w.width>>Me),Ue=Math.max(1,w.height>>Me);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,Me,ue,ge,Ue,w.depth,0,Xe,we,null):t.texImage2D(ve,Me,ue,ge,Ue,0,Xe,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),_e(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ve,n.get(ne).__webglTexture,0,Te(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,ve,n.get(ne).__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function N(L,w,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let xe=s.DEPTH_COMPONENT16;if(ne||_e(w)){const ve=w.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Un?xe=s.DEPTH_COMPONENT32F:ve.type===Xn&&(xe=s.DEPTH_COMPONENT24));const Me=Te(w);_e(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,xe,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,xe,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,xe,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const xe=Te(w);ne&&_e(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,s.DEPTH24_STENCIL8,w.width,w.height):_e(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const xe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ve=0;ve<xe.length;ve++){const Me=xe[ve],Xe=r.convert(Me.format,Me.colorSpace),we=r.convert(Me.type),ue=D(Me.internalFormat,Xe,we,Me.colorSpace),G=Te(w);ne&&_e(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,G,ue,w.width,w.height):_e(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G,ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ue,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const xe=n.get(w.depthTexture).__webglTexture,ve=Te(w);if(w.depthTexture.format===li)_e(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Yi)_e(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function te(L){const w=n.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,L)}else if(ne){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]=s.createRenderbuffer(),N(w.__webglDepthbuffer[xe],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),N(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(L,w,ne){const xe=n.get(L);w!==void 0&&he(xe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&te(L)}function Q(L){const w=L.texture,ne=n.get(L),xe=n.get(w);L.addEventListener("dispose",H),L.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=w.version,o.memory.textures++);const ve=L.isWebGLCubeRenderTarget===!0,Me=L.isWebGLMultipleRenderTargets===!0,Xe=_(L)||a;if(ve){ne.__webglFramebuffer=[];for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[we]=[];for(let ue=0;ue<w.mipmaps.length;ue++)ne.__webglFramebuffer[we][ue]=s.createFramebuffer()}else ne.__webglFramebuffer[we]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)ne.__webglFramebuffer[we]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Me)if(i.drawBuffers){const we=L.texture;for(let ue=0,G=we.length;ue<G;ue++){const ge=n.get(we[ue]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&_e(L)===!1){const we=Me?w:[w];ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ue=0;ue<we.length;ue++){const G=we[ue];ne.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[ue]);const ge=r.convert(G.format,G.colorSpace),Ue=r.convert(G.type),Ne=D(G.internalFormat,ge,Ue,G.colorSpace,L.isXRRenderTarget===!0),Oe=Te(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ne.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),N(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),oe(s.TEXTURE_CUBE_MAP,w,Xe);for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)he(ne.__webglFramebuffer[we][ue],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue);else he(ne.__webglFramebuffer[we],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);R(w,Xe)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const we=L.texture;for(let ue=0,G=we.length;ue<G;ue++){const ge=we[ue],Ue=n.get(ge);t.bindTexture(s.TEXTURE_2D,Ue.__webglTexture),oe(s.TEXTURE_2D,ge,Xe),he(ne.__webglFramebuffer,L,ge,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),R(ge,Xe)&&T(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?we=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,xe.__webglTexture),oe(we,w,Xe),a&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)he(ne.__webglFramebuffer[ue],L,w,s.COLOR_ATTACHMENT0,we,ue);else he(ne.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,we,0);R(w,Xe)&&T(we),t.unbindTexture()}L.depthBuffer&&te(L)}function Ae(L){const w=_(L)||a,ne=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let xe=0,ve=ne.length;xe<ve;xe++){const Me=ne[xe];if(R(Me,w)){const Xe=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,we=n.get(Me).__webglTexture;t.bindTexture(Xe,we),T(Xe),t.unbindTexture()}}}function ye(L){if(a&&L.samples>0&&_e(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ne=L.width,xe=L.height;let ve=s.COLOR_BUFFER_BIT;const Me=[],Xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(L),ue=L.isWebGLMultipleRenderTargets===!0;if(ue)for(let G=0;G<w.length;G++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let G=0;G<w.length;G++){Me.push(s.COLOR_ATTACHMENT0+G),L.depthBuffer&&Me.push(Xe);const ge=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(ge===!1&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[G]),ge===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Xe])),ue){const Ue=n.get(w[G]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,ve,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let G=0;G<w.length;G++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,we.__webglColorRenderbuffer[G]);const ge=n.get(w[G]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D,ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Te(L){return Math.min(u,L.samples)}function _e(L){const w=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(L){const w=o.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function Je(L,w){const ne=L.colorSpace,xe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===vo||ne!==Ot&&ne!==hi&&(ne===vt||ne===gs?a===!1?e.has("EXT_sRGB")===!0&&xe===an?(L.format=vo,L.minFilter=Zt,L.generateMipmaps=!1):w=pc.sRGBToLinear(w):(xe!==an||ve!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),w}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=A,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=$,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_e}const fv=0,Lt=1;function pv(s,e,t){const n=t.isWebGL2;function i(r,o=hi){let a;const l=o===vt||o===gs?Lt:fv;if(r===Kn)return s.UNSIGNED_BYTE;if(r===ic)return s.UNSIGNED_SHORT_4_4_4_4;if(r===rc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rh)return s.BYTE;if(r===Ch)return s.SHORT;if(r===Po)return s.UNSIGNED_SHORT;if(r===nc)return s.INT;if(r===Xn)return s.UNSIGNED_INT;if(r===Un)return s.FLOAT;if(r===Mr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ph)return s.ALPHA;if(r===an)return s.RGBA;if(r===Lh)return s.LUMINANCE;if(r===Ih)return s.LUMINANCE_ALPHA;if(r===li)return s.DEPTH_COMPONENT;if(r===Yi)return s.DEPTH_STENCIL;if(r===vo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nh)return s.RED;if(r===sc)return s.RED_INTEGER;if(r===Dh)return s.RG;if(r===oc)return s.RG_INTEGER;if(r===ac)return s.RGBA_INTEGER;if(r===Ss||r===Es||r===bs||r===ws)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ia||r===ra||r===sa||r===oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===aa||r===la)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===aa)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===la)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ca||r===ha||r===ua||r===da||r===fa||r===pa||r===ma||r===va||r===ga||r===ya||r===_a||r===xa||r===Ma||r===Sa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ca)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ha)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ua)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===da)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fa)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pa)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ma)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===va)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ga)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ya)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_a)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xa)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ma)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sa)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ts||r===Ea||r===ba)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ts)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ea)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ba)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bh||r===wa||r===Ta||r===Aa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ts)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Aa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ai?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class mv extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n),p=this._getHandJoint(c,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gv extends Ht{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:li,h!==li&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=Xn),n===void 0&&h===Yi&&(n=ai),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yv extends Jn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const g=t.getContextAttributes();let v=null,p=null;const x=[],y=[],_=new Xt;_.layers.enable(1),_.viewport=new gt;const S=new Xt;S.layers.enable(2),S.viewport=new gt;const R=[_,S],T=new mv;T.layers.enable(1),T.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let O=x[A];return O===void 0&&(O=new Ks,x[A]=O),O.getTargetRaySpace()},this.getControllerGrip=function(A){let O=x[A];return O===void 0&&(O=new Ks,x[A]=O),O.getGripSpace()},this.getHand=function(A){let O=x[A];return O===void 0&&(O=new Ks,x[A]=O),O.getHandSpace()};function E(A){const O=y.indexOf(A.inputSource);if(O===-1)return;const B=x[O];B!==void 0&&(B.update(A.inputSource,A.frame,c||o),B.dispatchEvent({type:A.type,data:A.inputSource}))}function P(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",H);for(let A=0;A<x.length;A++){const O=y[A];O!==null&&(y[A]=null,x[A].disconnect(O))}D=null,M=null,e.setRenderTarget(v),f=null,d=null,u=null,i=null,p=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",P),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:f}),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let O=null,B=null,I=null;g.depth&&(I=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=g.stencil?Yi:li,B=g.stencil?ai:Xn);const C={colorFormat:t.RGBA8,depthFormat:I,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(C),i.updateRenderState({layers:[d]}),p=new Zn(d.textureWidth,d.textureHeight,{format:an,type:Kn,depthTexture:new gv(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const K=e.properties.get(p);K.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(A){for(let O=0;O<A.removed.length;O++){const B=A.removed[O],I=y.indexOf(B);I>=0&&(y[I]=null,x[I].disconnect(B))}for(let O=0;O<A.added.length;O++){const B=A.added[O];let I=y.indexOf(B);if(I===-1){for(let K=0;K<x.length;K++)if(K>=y.length){y.push(B),I=K;break}else if(y[K]===null){y[K]=B,I=K;break}if(I===-1)break}const C=x[I];C&&C.connect(B)}}const F=new X,W=new X;function k(A,O,B){F.setFromMatrixPosition(O.matrixWorld),W.setFromMatrixPosition(B.matrixWorld);const I=F.distanceTo(W),C=O.projectionMatrix.elements,K=B.projectionMatrix.elements,oe=C[14]/(C[10]-1),re=C[14]/(C[10]+1),ee=(C[9]+1)/C[5],fe=(C[9]-1)/C[5],he=(C[8]-1)/C[0],N=(K[8]+1)/K[0],le=oe*he,te=oe*N,$=I/(-he+N),Q=$*-he;O.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Q),A.translateZ($),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Ae=oe+$,ye=re+$,Te=le-Q,_e=te+(I-Q),qe=ee*re/ye*Ae,Je=fe*re/ye*Ae;A.projectionMatrix.makePerspective(Te,_e,qe,Je,Ae,ye),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function ie(A,O){O===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(O.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;T.near=S.near=_.near=A.near,T.far=S.far=_.far=A.far,(D!==T.near||M!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,M=T.far);const O=A.parent,B=T.cameras;ie(T,O);for(let I=0;I<B.length;I++)ie(B[I],O);B.length===2?k(T,_,S):T.projectionMatrix.copy(_.projectionMatrix),z(A,T,O)};function z(A,O,B){B===null?A.matrix.copy(O.matrixWorld):(A.matrix.copy(B.matrixWorld),A.matrix.invert(),A.matrix.multiply(O.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(O.projectionMatrix),A.projectionMatrixInverse.copy(O.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=Zi*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(A){l=A,d!==null&&(d.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)};let U=null;function J(A,O){if(h=O.getViewerPose(c||o),m=O,h!==null){const B=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let I=!1;B.length!==T.cameras.length&&(T.cameras.length=0,I=!0);for(let C=0;C<B.length;C++){const K=B[C];let oe=null;if(f!==null)oe=f.getViewport(K);else{const ee=u.getViewSubImage(d,K);oe=ee.viewport,C===0&&(e.setRenderTargetTextures(p,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(p))}let re=R[C];re===void 0&&(re=new Xt,re.layers.enable(C),re.viewport=new gt,R[C]=re),re.matrix.fromArray(K.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(K.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(oe.x,oe.y,oe.width,oe.height),C===0&&(T.matrix.copy(re.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),I===!0&&T.cameras.push(re)}}for(let B=0;B<x.length;B++){const I=y[B],C=x[B];I!==null&&C!==void 0&&C.update(I,O,c||o)}U&&U(A,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),m=null}const q=new Ec;q.setAnimationLoop(J),this.setAnimationLoop=function(A){U=A},this.dispose=function(){}}}function _v(s,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,xc(s)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function i(v,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(v,p):p.isMeshToonMaterial?(r(v,p),u(v,p)):p.isMeshPhongMaterial?(r(v,p),h(v,p)):p.isMeshStandardMaterial?(r(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,_)):p.isMeshMatcapMaterial?(r(v,p),m(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),g(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?l(v,p,x,y):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Kt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Kt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(v.envMap.value=x,v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap){v.lightMap.value=p.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,v.lightMapTransform)}p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,x,y){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*x,v.scale.value=y*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function u(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),e.get(p).envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,x){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&v.clearcoatNormalScale.value.negate())),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){const x=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xv(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",v));const S=y.program;n.updateUBOMapping(x,S);const R=e.render.frame;r[x.id]!==R&&(d(x),r[x.id]=R)}function h(x){const y=u();x.__bindingPointIndex=y;const _=s.createBuffer(),S=x.__size,R=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],_=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,T=_.length;R<T;R++){const D=_[R];if(f(D,R,S)===!0){const M=D.__offset,E=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let H=0;H<E.length;H++){const F=E[H],W=g(F);typeof F=="number"?(D.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,M+P,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=F.elements[0],D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=F.elements[0],D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=F.elements[0]):(F.toArray(D.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,D.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,_){const S=x.value;if(_[y]===void 0){if(typeof S=="number")_[y]=S;else{const R=Array.isArray(S)?S:[S],T=[];for(let D=0;D<R.length;D++)T.push(R[D].clone());_[y]=T}return!0}else if(typeof S=="number"){if(_[y]!==S)return _[y]=S,!0}else{const R=Array.isArray(_[y])?_[y]:[_[y]],T=Array.isArray(S)?S:[S];for(let D=0;D<R.length;D++){const M=R[D];if(M.equals(T[D])===!1)return M.copy(T[D]),!0}}return!1}function m(x){const y=x.uniforms;let _=0;const S=16;let R=0;for(let T=0,D=y.length;T<D;T++){const M=y[T],E={boundary:0,storage:0},P=Array.isArray(M.value)?M.value:[M.value];for(let H=0,F=P.length;H<F;H++){const W=P[H],k=g(W);E.boundary+=k.boundary,E.storage+=k.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=_,T>0){R=_%S;const H=S-R;R!==0&&H-E.boundary<0&&(_+=S-R,M.__offset=_)}_+=E.storage}return R=_%S,R>0&&(_+=S-R),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function v(x){const y=x.target;y.removeEventListener("dispose",v);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Rc{constructor(e={}){const{canvas:t=fu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,v=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const y=this;let _=!1,S=0,R=0,T=null,D=-1,M=null;const E=new gt,P=new gt;let H=null;const F=new it(0);let W=0,k=t.width,ie=t.height,z=1,U=null,J=null;const q=new gt(0,0,k,ie),A=new gt(0,0,k,ie);let O=!1;const B=new Do;let I=!1,C=!1,K=null;const oe=new st,re=new Pe,ee=new X,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return T===null?z:1}let N=n;function le(b,V){for(let Y=0;Y<b.length;Y++){const Z=b[Y],se=t.getContext(Z,V);if(se!==null)return se}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Se,!1),N===null){const V=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&V.shift(),N=le(V,b),N===null)throw le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let te,$,Q,Ae,ye,Te,_e,qe,Je,L,w,ne,xe,ve,Me,Xe,we,ue,G,ge,Ue,Ne,Oe,Ze;function et(){te=new Pp(N),$=new bp(N,te,e),te.init($),Ne=new pv(N,te,$),Q=new uv(N,te,$),Ae=new Np(N),ye=new Jm,Te=new dv(N,te,Q,ye,$,Ne,Ae),_e=new Tp(y),qe=new Cp(y),Je=new Hu(N,$),Oe=new Sp(N,te,Je,$),L=new Lp(N,Je,Ae,Oe),w=new Fp(N,L,Je,Ae),G=new Bp(N,$,Te),Xe=new wp(ye),ne=new Zm(y,_e,qe,te,$,Oe,Xe),xe=new _v(y,ye),ve=new Qm,Me=new sv(te,$),ue=new Mp(y,_e,qe,Q,w,d,l),we=new hv(y,w,$),Ze=new xv(N,Ae,$,Q),ge=new Ep(N,te,Ae,$),Ue=new Ip(N,te,Ae,$),Ae.programs=ne.programs,y.capabilities=$,y.extensions=te,y.properties=ye,y.renderLists=ve,y.shadowMap=we,y.state=Q,y.info=Ae}et();const j=new yv(y,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(k,ie,!1))},this.getSize=function(b){return b.set(k,ie)},this.setSize=function(b,V,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,ie=V,t.width=Math.floor(b*z),t.height=Math.floor(V*z),Y===!0&&(t.style.width=b+"px",t.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(k*z,ie*z).floor()},this.setDrawingBufferSize=function(b,V,Y){k=b,ie=V,z=Y,t.width=Math.floor(b*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,V,Y,Z){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,V,Y,Z),Q.viewport(E.copy(q).multiplyScalar(z).floor())},this.getScissor=function(b){return b.copy(A)},this.setScissor=function(b,V,Y,Z){b.isVector4?A.set(b.x,b.y,b.z,b.w):A.set(b,V,Y,Z),Q.scissor(P.copy(A).multiplyScalar(z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){Q.setScissorTest(O=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(b=!0,V=!0,Y=!0){let Z=0;if(b){let se=!1;if(T!==null){const ae=T.texture.format;se=ae===ac||ae===oc||ae===sc}if(se){const ae=T.texture.type,Re=ae===Kn||ae===Xn||ae===Po||ae===ai||ae===ic||ae===rc,Fe=ue.getClearColor(),Ye=ue.getClearAlpha(),We=Fe.r,Ve=Fe.g,Ce=Fe.b;Re?(f[0]=We,f[1]=Ve,f[2]=Ce,f[3]=Ye,N.clearBufferuiv(N.COLOR,0,f)):(m[0]=We,m[1]=Ve,m[2]=Ce,m[3]=Ye,N.clearBufferiv(N.COLOR,0,m))}else Z|=N.COLOR_BUFFER_BIT}V&&(Z|=N.DEPTH_BUFFER_BIT),Y&&(Z|=N.STENCIL_BUFFER_BIT),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ve.dispose(),Me.dispose(),ye.dispose(),_e.dispose(),qe.dispose(),w.dispose(),Oe.dispose(),Ze.dispose(),ne.dispose(),j.dispose(),j.removeEventListener("sessionstart",rt),j.removeEventListener("sessionend",pe),K&&(K.dispose(),K=null),me.stop()};function Be(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const b=Ae.autoReset,V=we.enabled,Y=we.autoUpdate,Z=we.needsUpdate,se=we.type;et(),Ae.autoReset=b,we.enabled=V,we.autoUpdate=Y,we.needsUpdate=Z,we.type=se}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Le(b){const V=b.target;V.removeEventListener("dispose",Le),tt(V)}function tt(b){lt(b),ye.remove(b)}function lt(b){const V=ye.get(b).programs;V!==void 0&&(V.forEach(function(Y){ne.releaseProgram(Y)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,Y,Z,se,ae){V===null&&(V=fe);const Re=se.isMesh&&se.matrixWorld.determinant()<0,Fe=De(b,V,Y,Z,se);Q.setMaterial(Z,Re);let Ye=Y.index,We=1;if(Z.wireframe===!0){if(Ye=L.getWireframeAttribute(Y),Ye===void 0)return;We=2}const Ve=Y.drawRange,Ce=Y.attributes.position;let ct=Ve.start*We,dt=(Ve.start+Ve.count)*We;ae!==null&&(ct=Math.max(ct,ae.start*We),dt=Math.min(dt,(ae.start+ae.count)*We)),Ye!==null?(ct=Math.max(ct,0),dt=Math.min(dt,Ye.count)):Ce!=null&&(ct=Math.max(ct,0),dt=Math.min(dt,Ce.count));const xt=dt-ct;if(xt<0||xt===1/0)return;Oe.setup(se,Z,Fe,Y,Ye);let Pt,ht=ge;if(Ye!==null&&(Pt=Je.get(Ye),ht=Ue,ht.setIndex(Pt)),se.isMesh)Z.wireframe===!0?(Q.setLineWidth(Z.wireframeLinewidth*he()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(se.isLine){let Ke=Z.linewidth;Ke===void 0&&(Ke=1),Q.setLineWidth(Ke*he()),se.isLineSegments?ht.setMode(N.LINES):se.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else se.isPoints?ht.setMode(N.POINTS):se.isSprite&&ht.setMode(N.TRIANGLES);if(se.isInstancedMesh)ht.renderInstances(ct,xt,se.count);else if(Y.isInstancedBufferGeometry){const Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Jt=Math.min(Y.instanceCount,Ke);ht.renderInstances(ct,xt,Jt)}else ht.render(ct,xt)},this.compile=function(b,V){function Y(Z,se,ae){Z.transparent===!0&&Z.side===gn&&Z.forceSinglePass===!1?(Z.side=Kt,Z.needsUpdate=!0,ze(Z,se,ae),Z.side=xn,Z.needsUpdate=!0,ze(Z,se,ae),Z.side=gn):ze(Z,se,ae)}v=Me.get(b),v.init(),x.push(v),b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights(y._useLegacyLights),b.traverse(function(Z){const se=Z.material;if(se)if(Array.isArray(se))for(let ae=0;ae<se.length;ae++){const Re=se[ae];Y(Re,b,Z)}else Y(se,b,Z)}),x.pop(),v=null};let ft=null;function Rt(b){ft&&ft(b)}function rt(){me.stop()}function pe(){me.start()}const me=new Ec;me.setAnimationLoop(Rt),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(b){ft=b,j.setAnimationLoop(b),b===null?me.stop():me.start()},j.addEventListener("sessionstart",rt),j.addEventListener("sessionend",pe),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,V,T),v=Me.get(b,x.length),v.init(),x.push(v),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B.setFromProjectionMatrix(oe),C=this.localClippingEnabled,I=Xe.init(this.clippingPlanes,C),g=ve.get(b,p.length),g.init(),p.push(g),Ee(b,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(U,J),this.info.render.frame++,I===!0&&Xe.beginShadows();const Y=v.state.shadowsArray;if(we.render(Y,b,V),I===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(g,b),v.setupLights(y._useLegacyLights),V.isArrayCamera){const Z=V.cameras;for(let se=0,ae=Z.length;se<ae;se++){const Re=Z[se];be(g,b,Re,Re.viewport)}}else be(g,b,V);T!==null&&(Te.updateMultisampleRenderTarget(T),Te.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(y,b,V),Oe.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ee(b,V,Y,Z){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){Z&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(oe);const Re=w.update(b),Fe=b.material;Fe.visible&&g.push(b,Re,Fe,Y,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){const Re=w.update(b),Fe=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ee.copy(Re.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(oe)),Array.isArray(Fe)){const Ye=Re.groups;for(let We=0,Ve=Ye.length;We<Ve;We++){const Ce=Ye[We],ct=Fe[Ce.materialIndex];ct&&ct.visible&&g.push(b,Re,ct,Y,ee.z,Ce)}}else Fe.visible&&g.push(b,Re,Fe,Y,ee.z,null)}}const ae=b.children;for(let Re=0,Fe=ae.length;Re<Fe;Re++)Ee(ae[Re],V,Y,Z)}function be(b,V,Y,Z){const se=b.opaque,ae=b.transmissive,Re=b.transparent;v.setupLightsView(Y),I===!0&&Xe.setGlobalState(y.clippingPlanes,Y),ae.length>0&&$e(se,ae,V,Y),Z&&Q.viewport(E.copy(Z)),se.length>0&&ke(se,V,Y),ae.length>0&&ke(ae,V,Y),Re.length>0&&ke(Re,V,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function $e(b,V,Y,Z){const se=$.isWebGL2;K===null&&(K=new Zn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Mr:Kn,minFilter:di,samples:se?4:0})),y.getDrawingBufferSize(re),se?K.setSize(re.x,re.y):K.setSize(fs(re.x),fs(re.y));const ae=y.getRenderTarget();y.setRenderTarget(K),y.getClearColor(F),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear();const Re=y.toneMapping;y.toneMapping=Yn,ke(b,Y,Z),Te.updateMultisampleRenderTarget(K),Te.updateRenderTargetMipmap(K);let Fe=!1;for(let Ye=0,We=V.length;Ye<We;Ye++){const Ve=V[Ye],Ce=Ve.object,ct=Ve.geometry,dt=Ve.material,xt=Ve.group;if(dt.side===gn&&Ce.layers.test(Z.layers)){const Pt=dt.side;dt.side=Kt,dt.needsUpdate=!0,Ie(Ce,Y,Z,ct,dt,xt),dt.side=Pt,dt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Te.updateMultisampleRenderTarget(K),Te.updateRenderTargetMipmap(K)),y.setRenderTarget(ae),y.setClearColor(F,W),y.toneMapping=Re}function ke(b,V,Y){const Z=V.isScene===!0?V.overrideMaterial:null;for(let se=0,ae=b.length;se<ae;se++){const Re=b[se],Fe=Re.object,Ye=Re.geometry,We=Z===null?Re.material:Z,Ve=Re.group;Fe.layers.test(Y.layers)&&Ie(Fe,V,Y,Ye,We,Ve)}}function Ie(b,V,Y,Z,se,ae){b.onBeforeRender(y,V,Y,Z,se,ae),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),se.onBeforeRender(y,V,Y,Z,b,ae),se.transparent===!0&&se.side===gn&&se.forceSinglePass===!1?(se.side=Kt,se.needsUpdate=!0,y.renderBufferDirect(Y,V,Z,se,b,ae),se.side=xn,se.needsUpdate=!0,y.renderBufferDirect(Y,V,Z,se,b,ae),se.side=gn):y.renderBufferDirect(Y,V,Z,se,b,ae),b.onAfterRender(y,V,Y,Z,se,ae)}function ze(b,V,Y){V.isScene!==!0&&(V=fe);const Z=ye.get(b),se=v.state.lights,ae=v.state.shadowsArray,Re=se.state.version,Fe=ne.getParameters(b,se.state,ae,V,Y),Ye=ne.getProgramCacheKey(Fe);let We=Z.programs;Z.environment=b.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(b.isMeshStandardMaterial?qe:_e).get(b.envMap||Z.environment),We===void 0&&(b.addEventListener("dispose",Le),We=new Map,Z.programs=We);let Ve=We.get(Ye);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Re)return ce(b,Fe),Ve}else Fe.uniforms=ne.getUniforms(b),b.onBuild(Y,Fe,y),b.onBeforeCompile(Fe,y),Ve=ne.acquireProgram(Fe,Ye),We.set(Ye,Ve),Z.uniforms=Fe.uniforms;const Ce=Z.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=Xe.uniform),ce(b,Fe),Z.needsLights=je(b),Z.lightsStateVersion=Re,Z.needsLights&&(Ce.ambientLightColor.value=se.state.ambient,Ce.lightProbe.value=se.state.probe,Ce.directionalLights.value=se.state.directional,Ce.directionalLightShadows.value=se.state.directionalShadow,Ce.spotLights.value=se.state.spot,Ce.spotLightShadows.value=se.state.spotShadow,Ce.rectAreaLights.value=se.state.rectArea,Ce.ltc_1.value=se.state.rectAreaLTC1,Ce.ltc_2.value=se.state.rectAreaLTC2,Ce.pointLights.value=se.state.point,Ce.pointLightShadows.value=se.state.pointShadow,Ce.hemisphereLights.value=se.state.hemi,Ce.directionalShadowMap.value=se.state.directionalShadowMap,Ce.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ce.spotShadowMap.value=se.state.spotShadowMap,Ce.spotLightMatrix.value=se.state.spotLightMatrix,Ce.spotLightMap.value=se.state.spotLightMap,Ce.pointShadowMap.value=se.state.pointShadowMap,Ce.pointShadowMatrix.value=se.state.pointShadowMatrix);const ct=Ve.getUniforms(),dt=ls.seqWithValue(ct.seq,Ce);return Z.currentProgram=Ve,Z.uniformsList=dt,Ve}function ce(b,V){const Y=ye.get(b);Y.outputColorSpace=V.outputColorSpace,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function De(b,V,Y,Z,se){V.isScene!==!0&&(V=fe),Te.resetTextureUnits();const ae=V.fog,Re=Z.isMeshStandardMaterial?V.environment:null,Fe=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ot,Ye=(Z.isMeshStandardMaterial?qe:_e).get(Z.envMap||Re),We=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,dt=!!Y.morphAttributes.color;let xt=Yn;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=y.toneMapping);const Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=Pt!==void 0?Pt.length:0,Ke=ye.get(Z),Jt=v.state.lights;if(I===!0&&(C===!0||b!==M)){const Mt=b===M&&Z.id===D;Xe.setState(Z,b,Mt)}let nt=!1;Z.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Jt.state.version||Ke.outputColorSpace!==Fe||se.isInstancedMesh&&Ke.instancing===!1||!se.isInstancedMesh&&Ke.instancing===!0||se.isSkinnedMesh&&Ke.skinning===!1||!se.isSkinnedMesh&&Ke.skinning===!0||se.isInstancedMesh&&Ke.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ke.instancingColor===!1&&se.instanceColor!==null||Ke.envMap!==Ye||Z.fog===!0&&Ke.fog!==ae||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Xe.numPlanes||Ke.numIntersection!==Xe.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==Ve||Ke.morphTargets!==Ce||Ke.morphNormals!==ct||Ke.morphColors!==dt||Ke.toneMapping!==xt||$.isWebGL2===!0&&Ke.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,Ke.__version=Z.version);let zt=Ke.currentProgram;nt===!0&&(zt=ze(Z,V,se));let Vt=!1,wt=!1,At=!1;const yt=zt.getUniforms(),kt=Ke.uniforms;if(Q.useProgram(zt.program)&&(Vt=!0,wt=!0,At=!0),Z.id!==D&&(D=Z.id,wt=!0),Vt||M!==b){yt.setValue(N,"projectionMatrix",b.projectionMatrix),yt.setValue(N,"viewMatrix",b.matrixWorldInverse);const Mt=yt.map.cameraPosition;Mt!==void 0&&Mt.setValue(N,ee.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,wt=!0,At=!0)}if(se.isSkinnedMesh){yt.setOptional(N,se,"bindMatrix"),yt.setOptional(N,se,"bindMatrixInverse");const Mt=se.skeleton;Mt&&($.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),yt.setValue(N,"boneTexture",Mt.boneTexture,Te),yt.setValue(N,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qe=Y.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0&&$.isWebGL2===!0)&&G.update(se,Y,zt),(wt||Ke.receiveShadow!==se.receiveShadow)&&(Ke.receiveShadow=se.receiveShadow,yt.setValue(N,"receiveShadow",se.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(kt.envMap.value=Ye,kt.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),wt&&(yt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&He(kt,At),ae&&Z.fog===!0&&xe.refreshFogUniforms(kt,ae),xe.refreshMaterialUniforms(kt,Z,z,ie,K),ls.upload(N,Ke.uniformsList,kt,Te)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ls.upload(N,Ke.uniformsList,kt,Te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(N,"center",se.center),yt.setValue(N,"modelViewMatrix",se.modelViewMatrix),yt.setValue(N,"normalMatrix",se.normalMatrix),yt.setValue(N,"modelMatrix",se.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Mt=Z.uniformsGroups;for(let Tt=0,wn=Mt.length;Tt<wn;Tt++)if($.isWebGL2){const pn=Mt[Tt];Ze.update(pn,zt),Ze.bind(pn,zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zt}function He(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function je(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,V,Y){ye.get(b.texture).__webglTexture=V,ye.get(b.depthTexture).__webglTexture=Y;const Z=ye.get(b);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,V){const Y=ye.get(b);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,Y=0){T=b,S=V,R=Y;let Z=!0,se=null,ae=!1,Re=!1;if(b){const Ye=ye.get(b);Ye.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1):Ye.__webglFramebuffer===void 0?Te.setupRenderTarget(b):Ye.__hasExternalTextures&&Te.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Ve=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?se=Ve[V][Y]:se=Ve[V],ae=!0):$.isWebGL2&&b.samples>0&&Te.useMultisampledRTT(b)===!1?se=ye.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?se=Ve[Y]:se=Ve,E.copy(b.viewport),P.copy(b.scissor),H=b.scissorTest}else E.copy(q).multiplyScalar(z).floor(),P.copy(A).multiplyScalar(z).floor(),H=O;if(Q.bindFramebuffer(N.FRAMEBUFFER,se)&&$.drawBuffers&&Z&&Q.drawBuffers(b,se),Q.viewport(E),Q.scissor(P),Q.setScissorTest(H),ae){const Ye=ye.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ye.__webglTexture,Y)}else if(Re){const Ye=ye.get(b.texture),We=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ye.__webglTexture,Y||0,We)}D=-1},this.readRenderTargetPixels=function(b,V,Y,Z,se,ae,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){Q.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const Ye=b.texture,We=Ye.format,Ve=Ye.type;if(We!==an&&Ne.convert(We)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ve===Mr&&(te.has("EXT_color_buffer_half_float")||$.isWebGL2&&te.has("EXT_color_buffer_float"));if(Ve!==Kn&&Ne.convert(Ve)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Un&&($.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Z&&Y>=0&&Y<=b.height-se&&N.readPixels(V,Y,Z,se,Ne.convert(We),Ne.convert(Ve),ae)}finally{const Ye=T!==null?ye.get(T).__webglFramebuffer:null;Q.bindFramebuffer(N.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(b,V,Y=0){const Z=Math.pow(2,-Y),se=Math.floor(V.image.width*Z),ae=Math.floor(V.image.height*Z);Te.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,b.x,b.y,se,ae),Q.unbindTexture()},this.copyTextureToTexture=function(b,V,Y,Z=0){const se=V.image.width,ae=V.image.height,Re=Ne.convert(Y.format),Fe=Ne.convert(Y.type);Te.setTexture2D(Y,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Z,b.x,b.y,se,ae,Re,Fe,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Z,b.x,b.y,V.mipmaps[0].width,V.mipmaps[0].height,Re,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Z,b.x,b.y,Re,Fe,V.image),Z===0&&Y.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(b,V,Y,Z,se=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=b.max.x-b.min.x+1,Re=b.max.y-b.min.y+1,Fe=b.max.z-b.min.z+1,Ye=Ne.convert(Z.format),We=Ne.convert(Z.type);let Ve;if(Z.isData3DTexture)Te.setTexture3D(Z,0),Ve=N.TEXTURE_3D;else if(Z.isDataArrayTexture)Te.setTexture2DArray(Z,0),Ve=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ce=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dt=N.getParameter(N.UNPACK_SKIP_PIXELS),xt=N.getParameter(N.UNPACK_SKIP_ROWS),Pt=N.getParameter(N.UNPACK_SKIP_IMAGES),ht=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?N.texSubImage3D(Ve,se,V.x,V.y,V.z,ae,Re,Fe,Ye,We,ht.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ve,se,V.x,V.y,V.z,ae,Re,Fe,Ye,ht.data)):N.texSubImage3D(Ve,se,V.x,V.y,V.z,ae,Re,Fe,Ye,We,ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dt),N.pixelStorei(N.UNPACK_SKIP_ROWS,xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt),se===0&&Z.generateMipmaps&&N.generateMipmap(Ve),Q.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Te.setTextureCube(b,0):b.isData3DTexture?Te.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Te.setTexture2DArray(b,0):Te.setTexture2D(b,0),Q.unbindTexture()},this.resetState=function(){S=0,R=0,T=null,Q.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?ci:cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ci?vt:Ot}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Mv extends Rc{}Mv.prototype.isWebGL1Renderer=!0;class Sv extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ev{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new X;class Fo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ul=new X,dl=new gt,fl=new gt,bv=new X,pl=new st,Di=new X,Zs=new Sn,ml=new st,Js=new tr;class Cc extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Di.fromBufferAttribute(t,n),this.applyBoneTransform(n,Di),this.boundingBox.expandByPoint(Di)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Di.fromBufferAttribute(t,n),this.applyBoneTransform(n,Di),this.boundingSphere.expandByPoint(Di)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(i),e.ray.intersectsSphere(Zs)!==!1&&(ml.copy(i).invert(),Js.copy(e.ray).applyMatrix4(ml),!(this.boundingBox!==null&&Js.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;dl.fromBufferAttribute(i.attributes.skinIndex,e),fl.fromBufferAttribute(i.attributes.skinWeight,e),ul.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=fl.getComponent(r);if(o!==0){const a=dl.getComponent(r);pl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bv.copy(ul).applyMatrix4(pl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Pc extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wv extends Ht{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Bt,h=Bt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vl=new st,Tv=new st;class Oo{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Tv;vl.multiplyMatrices(a,t[r]),vl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=uc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wv(t,e,e,an,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Pc),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class gl extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new st,yl=new st,Zr=[],_l=new Mn,Av=new st,hr=new Yt,ur=new Sn;class Rv extends Yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Av)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),_l.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(_l)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),ur.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ui),yl.multiplyMatrices(n,Ui),hr.matrixWorld=yl,hr.raycast(e,Zr);for(let o=0,a=Zr.length;o<a;o++){const l=Zr[o];l.instanceId=r,l.object=this,t.push(l)}Zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zo extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new X,Ml=new X,Sl=new st,$s=new tr,Jr=new Sn;class Vo extends bt{constructor(e=new nn,t=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xl.fromBufferAttribute(t,i-1),Ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(Ml);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Sl.copy(i).invert(),$s.copy(e.ray).applyMatrix4(Sl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new X,h=new X,u=new X,d=new X,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,_=x-1;y<_;y+=f){const S=m.getX(y),R=m.getX(y+1);if(c.fromBufferAttribute(v,S),h.fromBufferAttribute(v,R),$s.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let y=p,_=x-1;y<_;y+=f){if(c.fromBufferAttribute(v,y),h.fromBufferAttribute(v,y+1),$s.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const El=new X,bl=new X;class Lc extends Vo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)El.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+El.distanceTo(bl);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cv extends Vo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ic extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wl=new st,xo=new tr,$r=new Sn,Qr=new X;class Pv extends bt{constructor(e=new nn,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;wl.copy(i).invert(),xo.copy(e.ray).applyMatrix4(wl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const v=c.getX(m);Qr.fromBufferAttribute(u,v),Tl(Qr,v,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)Qr.fromBufferAttribute(u,m),Tl(Qr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tl(s,e,t,n,i,r,o){const a=xo.distanceSqToPoint(s);if(a<t){const l=new X;xo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new X,i=[],r=[],o=[],a=new X,l=new st;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new X)}r[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(It(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ko extends En{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Pe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lv extends ko{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const es=new X,Qs=new Ho,eo=new Ho,to=new Ho;class Iv extends En{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new X){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(es.subVectors(i[0],i[1]).add(i[0]),c=es);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(es.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=es),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),Qs.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,g,v),eo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,g,v),to.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,g,v)}else this.curveType==="catmullrom"&&(Qs.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),eo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),to.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qs.calc(l),eo.calc(l),to.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Al(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Nv(s,e){const t=1-s;return t*t*e}function Dv(s,e){return 2*(1-s)*s*e}function Uv(s,e){return s*s*e}function _r(s,e,t,n){return Nv(s,e)+Dv(s,t)+Uv(s,n)}function Bv(s,e){const t=1-s;return t*t*t*e}function Fv(s,e){const t=1-s;return 3*t*t*s*e}function Ov(s,e){return 3*(1-s)*s*s*e}function zv(s,e){return s*s*s*e}function xr(s,e,t,n,i){return Bv(s,e)+Fv(s,t)+Ov(s,n)+zv(s,i)}class Nc extends En{constructor(e=new Pe,t=new Pe,n=new Pe,i=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,r.x,o.x,a.x),xr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vv extends En{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,r.x,o.x,a.x),xr(e,i.y,r.y,o.y,a.y),xr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Go extends En{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kv extends En{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dc extends En{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_r(e,i.x,r.x,o.x),_r(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hv extends En{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_r(e,i.x,r.x,o.x),_r(e,i.y,r.y,o.y),_r(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uc extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Al(a,l.x,c.x,h.x,u.x),Al(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Pe().fromArray(i))}return this}}var Bc=Object.freeze({__proto__:null,ArcCurve:Lv,CatmullRomCurve3:Iv,CubicBezierCurve:Nc,CubicBezierCurve3:Vv,EllipseCurve:ko,LineCurve:Go,LineCurve3:kv,QuadraticBezierCurve:Dc,QuadraticBezierCurve3:Hv,SplineCurve:Uc});class Gv extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Go(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Bc[i.type]().fromJSON(i))}return this}}class Mo extends Gv{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Go(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Dc(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Nc(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Uc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new ko(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cs extends Mo{constructor(e){super(e),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mo().fromJSON(i))}return this}}const Wv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Fc(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=Kv(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return br(r,o,t,a,l,f,0),o}};function Fc(s,e,t,n,i){let r,o;if(i===og(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Rl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Rl(r,s[r],s[r+1],o);return o&&xs(o,o.next)&&(Tr(o),o=o.next),o}function fi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(xs(t,t.next)||Et(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function br(s,e,t,n,i,r,o){if(!s)return;!o&&r&&eg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qv(s,n,i,r):Xv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Tr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=jv(fi(s),e,t),br(s,e,t,n,i,r,2)):o===2&&Yv(s,e,t,n,i,r):br(fi(s),e,t,n,i,r,1);break}}}function Xv(s){const e=s.prev,t=s,n=s.next;if(Et(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ki(i,a,r,l,o,c,m.x,m.y)&&Et(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Et(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,g=a>l?a>c?a:c:l>c?l:c,v=h>u?h>d?h:d:u>d?u:d,p=So(f,m,e,t,n),x=So(g,v,e,t,n);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=v&&y!==i&&y!==o&&ki(a,h,l,u,c,d,y.x,y.y)&&Et(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=g&&_.y>=m&&_.y<=v&&_!==i&&_!==o&&ki(a,h,l,u,c,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=v&&y!==i&&y!==o&&ki(a,h,l,u,c,d,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=v&&_!==i&&_!==o&&ki(a,h,l,u,c,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!xs(i,r)&&Oc(i,n,n.next,r)&&wr(i,r)&&wr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Tr(n),Tr(n.next),n=s=r),n=n.next}while(n!==s);return fi(n)}function Yv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ig(o,a)){let l=zc(o,a);o=fi(o,o.next),l=fi(l,l.next),br(o,e,t,n,i,r,0),br(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Kv(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Fc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ng(c));for(i.sort(Zv),r=0;r<i.length;r++)t=Jv(i[r],t);return t}function Zv(s,e){return s.x-e.x}function Jv(s,e){const t=$v(s,e);if(!t)return e;const n=zc(t,s);return fi(n,n.next),fi(t,t.next)}function $v(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ki(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),wr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Qv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Qv(s,e){return Et(s.prev,s,e.prev)<0&&Et(e.next,s,s.next)<0}function eg(s,e,t,n){let i=s;do i.z===0&&(i.z=So(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,tg(i)}function tg(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function So(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ng(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ki(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ig(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!rg(s,e)&&(wr(s,e)&&wr(e,s)&&sg(s,e)&&(Et(s.prev,s,e.prev)||Et(s,e.prev,e))||xs(s,e)&&Et(s.prev,s,s.next)>0&&Et(e.prev,e,e.next)>0)}function Et(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function xs(s,e){return s.x===e.x&&s.y===e.y}function Oc(s,e,t,n){const i=ns(Et(s,e,t)),r=ns(Et(s,e,n)),o=ns(Et(t,n,s)),a=ns(Et(t,n,e));return!!(i!==r&&o!==a||i===0&&ts(s,t,e)||r===0&&ts(s,n,e)||o===0&&ts(t,s,n)||a===0&&ts(t,e,n))}function ts(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ns(s){return s>0?1:s<0?-1:0}function rg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Oc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function wr(s,e){return Et(s.prev,s,s.next)<0?Et(s,e,s.next)>=0&&Et(s,s.prev,e)>=0:Et(s,e,s.prev)<0||Et(s,s.next,e)<0}function sg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function zc(s,e){const t=new Eo(s.i,s.x,s.y),n=new Eo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rl(s,e,t,n){const i=new Eo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Eo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function og(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Wi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Wi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Cl(e),Pl(n,e);let o=e.length;t.forEach(Cl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Pl(n,t[l]);const a=Wv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Cl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Pl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Wo extends nn{constructor(e=new cs([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new fn(i,3)),this.setAttribute("uv",new fn(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:ag;let y,_=!1,S,R,T,D;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,S=p.computeFrenetFrames(h,!1),R=new X,T=new X,D=new X),d||(v=0,f=0,m=0,g=0);const M=a.extractPoints(c);let E=M.shape;const P=M.holes;if(!Wi.isClockWise(E)){E=E.reverse();for(let N=0,le=P.length;N<le;N++){const te=P[N];Wi.isClockWise(te)&&(P[N]=te.reverse())}}const F=Wi.triangulateShape(E,P),W=E;for(let N=0,le=P.length;N<le;N++){const te=P[N];E=E.concat(te)}function k(N,le,te){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(le,te)}const ie=E.length,z=F.length;function U(N,le,te){let $,Q,Ae;const ye=N.x-le.x,Te=N.y-le.y,_e=te.x-N.x,qe=te.y-N.y,Je=ye*ye+Te*Te,L=ye*qe-Te*_e;if(Math.abs(L)>Number.EPSILON){const w=Math.sqrt(Je),ne=Math.sqrt(_e*_e+qe*qe),xe=le.x-Te/w,ve=le.y+ye/w,Me=te.x-qe/ne,Xe=te.y+_e/ne,we=((Me-xe)*qe-(Xe-ve)*_e)/(ye*qe-Te*_e);$=xe+ye*we-N.x,Q=ve+Te*we-N.y;const ue=$*$+Q*Q;if(ue<=2)return new Pe($,Q);Ae=Math.sqrt(ue/2)}else{let w=!1;ye>Number.EPSILON?_e>Number.EPSILON&&(w=!0):ye<-Number.EPSILON?_e<-Number.EPSILON&&(w=!0):Math.sign(Te)===Math.sign(qe)&&(w=!0),w?($=-Te,Q=ye,Ae=Math.sqrt(Je)):($=ye,Q=Te,Ae=Math.sqrt(Je/2))}return new Pe($/Ae,Q/Ae)}const J=[];for(let N=0,le=W.length,te=le-1,$=N+1;N<le;N++,te++,$++)te===le&&(te=0),$===le&&($=0),J[N]=U(W[N],W[te],W[$]);const q=[];let A,O=J.concat();for(let N=0,le=P.length;N<le;N++){const te=P[N];A=[];for(let $=0,Q=te.length,Ae=Q-1,ye=$+1;$<Q;$++,Ae++,ye++)Ae===Q&&(Ae=0),ye===Q&&(ye=0),A[$]=U(te[$],te[Ae],te[ye]);q.push(A),O=O.concat(A)}for(let N=0;N<v;N++){const le=N/v,te=f*Math.cos(le*Math.PI/2),$=m*Math.sin(le*Math.PI/2)+g;for(let Q=0,Ae=W.length;Q<Ae;Q++){const ye=k(W[Q],J[Q],$);oe(ye.x,ye.y,-te)}for(let Q=0,Ae=P.length;Q<Ae;Q++){const ye=P[Q];A=q[Q];for(let Te=0,_e=ye.length;Te<_e;Te++){const qe=k(ye[Te],A[Te],$);oe(qe.x,qe.y,-te)}}}const B=m+g;for(let N=0;N<ie;N++){const le=d?k(E[N],O[N],B):E[N];_?(T.copy(S.normals[0]).multiplyScalar(le.x),R.copy(S.binormals[0]).multiplyScalar(le.y),D.copy(y[0]).add(T).add(R),oe(D.x,D.y,D.z)):oe(le.x,le.y,0)}for(let N=1;N<=h;N++)for(let le=0;le<ie;le++){const te=d?k(E[le],O[le],B):E[le];_?(T.copy(S.normals[N]).multiplyScalar(te.x),R.copy(S.binormals[N]).multiplyScalar(te.y),D.copy(y[N]).add(T).add(R),oe(D.x,D.y,D.z)):oe(te.x,te.y,u/h*N)}for(let N=v-1;N>=0;N--){const le=N/v,te=f*Math.cos(le*Math.PI/2),$=m*Math.sin(le*Math.PI/2)+g;for(let Q=0,Ae=W.length;Q<Ae;Q++){const ye=k(W[Q],J[Q],$);oe(ye.x,ye.y,u+te)}for(let Q=0,Ae=P.length;Q<Ae;Q++){const ye=P[Q];A=q[Q];for(let Te=0,_e=ye.length;Te<_e;Te++){const qe=k(ye[Te],A[Te],$);_?oe(qe.x,qe.y+y[h-1].y,y[h-1].x+te):oe(qe.x,qe.y,u+te)}}}I(),C();function I(){const N=i.length/3;if(d){let le=0,te=ie*le;for(let $=0;$<z;$++){const Q=F[$];re(Q[2]+te,Q[1]+te,Q[0]+te)}le=h+v*2,te=ie*le;for(let $=0;$<z;$++){const Q=F[$];re(Q[0]+te,Q[1]+te,Q[2]+te)}}else{for(let le=0;le<z;le++){const te=F[le];re(te[2],te[1],te[0])}for(let le=0;le<z;le++){const te=F[le];re(te[0]+ie*h,te[1]+ie*h,te[2]+ie*h)}}n.addGroup(N,i.length/3-N,0)}function C(){const N=i.length/3;let le=0;K(W,le),le+=W.length;for(let te=0,$=P.length;te<$;te++){const Q=P[te];K(Q,le),le+=Q.length}n.addGroup(N,i.length/3-N,1)}function K(N,le){let te=N.length;for(;--te>=0;){const $=te;let Q=te-1;Q<0&&(Q=N.length-1);for(let Ae=0,ye=h+v*2;Ae<ye;Ae++){const Te=ie*Ae,_e=ie*(Ae+1),qe=le+$+Te,Je=le+Q+Te,L=le+Q+_e,w=le+$+_e;ee(qe,Je,L,w)}}}function oe(N,le,te){l.push(N),l.push(le),l.push(te)}function re(N,le,te){fe(N),fe(le),fe(te);const $=i.length/3,Q=x.generateTopUV(n,i,$-3,$-2,$-1);he(Q[0]),he(Q[1]),he(Q[2])}function ee(N,le,te,$){fe(N),fe(le),fe($),fe(le),fe(te),fe($);const Q=i.length/3,Ae=x.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);he(Ae[0]),he(Ae[1]),he(Ae[3]),he(Ae[1]),he(Ae[2]),he(Ae[3])}function fe(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function he(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Bc[i.type]().fromJSON(i)),new Wo(n,e.options)}}const ag={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Pe(r,o),new Pe(a,l),new Pe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],g=e[r*3],v=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Pe(o,1-l),new Pe(c,1-u),new Pe(d,1-m),new Pe(g,1-p)]:[new Pe(a,1-l),new Pe(h,1-u),new Pe(f,1-m),new Pe(v,1-p)]}};function lg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xo extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends Xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Hn(s,e,t){return Vc(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function is(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Vc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ll(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function kc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Cr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hg extends Cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oi,endingEnd:Oi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zi:r=e,a=2*t-n;break;case us:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zi:o=e,l=2*n-t;break;case us:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,v=g*m,p=-d*v+2*d*g-d*m,x=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*m+1,y=(-1-f)*v+(1.5+f)*g+.5*m,_=f*v-f*g;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+x*o[c+S]+y*o[l+S]+_*o[u+S];return r}}class Hc extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class ug extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Ki:t=this.InterpolantFactoryMethodLinear;break;case As:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Ki;case this.InterpolantFactoryMethodSmooth:return As}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Hn(n,r,o),this.values=Hn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Vc(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Hn(this.times),t=Hn(this.values),n=this.getValueSize(),i=this.getInterpolation()===As,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Hn(e,0,o),this.values=Hn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Hn(this.times,0),t=Hn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ki;class rr extends bn{}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Sr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gc extends bn{}Gc.prototype.ValueTypeName="color";class $i extends bn{}$i.prototype.ValueTypeName="number";class dg extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class pi extends bn{InterpolantFactoryMethodLinear(e){return new dg(this.times,this.values,this.getValueSize(),e)}}pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=Ki;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends bn{}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Sr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends bn{}Qi.prototype.ValueTypeName="vector";class bo{constructor(e,t=-1,n,i=Lo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=cg(l);l=Ll(l,1,h),c=Ll(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $i(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,g){if(f.length!==0){const v=[],p=[];kc(f,v,p,m),v.length!==0&&g.push(new u(d,v,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const v=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const y=d[m];v.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new $i(".morphTargetInfluence["+g+"]",v,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Qi,f+".position",d,"pos",i),n(pi,f+".quaternion",d,"rot",i),n(Qi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Gc;case"quaternion":return pi;case"bool":case"boolean":return rr;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fg(s.type);if(s.times===void 0){const t=[],n=[];kc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const er={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Wc=new mg;class mi{constructor(e){this.manager=e!==void 0?e:Wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class vg extends Error{constructor(e,t){super(e),this.response=t}}class qo extends mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=er.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=In[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const v=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{g+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let R=0,T=h.length;R<T;R++){const D=h[R];D.onProgress&&D.onProgress(S)}p.enqueue(_),x()}})}}});return new Response(v)}else throw new vg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{er.add(e,c);const h=In[e];delete In[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=In[e];if(h===void 0)throw this.manager.itemError(e),c;delete In[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gg extends mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=er.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Er("img");function l(){h(),er.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Xc extends mi{constructor(e){super(e)}load(e,t,n,i){const r=new Ht,o=new gg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class jo extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const no=new st,Il=new X,Nl=new X;class Yo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yg extends Yo{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _g extends jo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dl=new st,dr=new X,io=new X;class xg extends Yo{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),io.copy(n.position),io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(io),n.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),Dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl)}}class Mg extends jo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sg extends Yo{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eg extends jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bg extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=er.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){er.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class wg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ul();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ul(){return(typeof performance>"u"?Date:performance).now()}class Tg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){tn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;tn.multiplyQuaternionsFlat(e,o,e,t,e,n),tn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ko="\\[\\]\\.:\\/",Ag=new RegExp("["+Ko+"]","g"),Zo="[^"+Ko+"]",Rg="[^"+Ko.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",Zo),Pg=/(WCOD+)?/.source.replace("WCOD",Rg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zo),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zo),Ng=new RegExp("^"+Cg+Pg+Lg+Ig+"$"),Dg=["material","materials","bones","map"];class Ug{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(e){const t=Ng.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=Ug;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Oi,endingEnd:Oi};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Oh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Vh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Lo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===zh;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Fh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zi,i.endingEnd=zi):(e?i.endingStart=this.zeroSlopeAtStart?zi:Oi:i.endingStart=us,t?i.endingEnd=this.zeroSlopeAtEnd?zi:Oi:i.endingEnd=us)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Fg=new Float32Array(1);class Og extends Jn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;m=new Tg(mt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Hc(new Float32Array(2),new Float32Array(2),1,Fg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?bo.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Lo),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Bg(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?bo.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class zg{constructor(e,t,n=0,i=1/0){this.ray=new tr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(Bl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)To(e[i],this,n,t);return n.sort(Bl),n}}function Bl(s,e){return s.distance-e.distance}function To(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)To(i[r],e,t,!0)}}class Fl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rs=new Mn;class Vg extends Lc{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new nn;r.setIndex(new Ft(n,1)),r.setAttribute("position",new Ft(i,3)),super(r,new zo({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rs.setFromObject(this.object),rs.isEmpty())return;const t=rs.min,n=rs.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kg{constructor(){this.type="ShapePath",this.color=new it,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let y=0,_=p.length;y<_;y++){const S=p[y],R=new cs;R.curves=S.curves,x.push(R)}return x}function n(p,x){const y=x.length;let _=!1;for(let S=y-1,R=0;R<y;S=R++){let T=x[S],D=x[R],M=D.x-T.x,E=D.y-T.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(T=x[R],M=-M,D=x[S],E=-E),p.y<T.y||p.y>D.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const P=E*(p.x-T.x)-M*(p.y-T.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(p.y!==T.y)continue;if(D.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=D.x)return!0}}return _}const i=Wi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new cs,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],m=0,g;d[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)a=r[p],g=a.getPoints(),o=i(g),o=e?!o:o,o?(!h&&d[m]&&m++,d[m]={s:new cs,p:g},d[m].s.curves=a.curves,h&&m++,f[m]=[]):f[m].push({h:a,p:g[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,x=0;for(let y=0,_=d.length;y<_;y++)u[y]=[];for(let y=0,_=d.length;y<_;y++){const S=f[y];for(let R=0;R<S.length;R++){const T=S[R];let D=!0;for(let M=0;M<d.length;M++)n(T.p,d[M].p)&&(y!==M&&x++,D?(D=!1,u[M].push(T)):p=!0);D&&u[y].push(T)}}x>0&&p===!1&&(f=u)}let v;for(let p=0,x=d.length;p<x;p++){l=d[p].s,c.push(l),v=f[p];for(let y=0,_=v.length;y<_;y++)l.holes.push(v[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function ss(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qc={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(c,h){if(!i[c]){if(!n[c]){var u=typeof ss=="function"&&ss;if(!h&&u)return u(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}var d=i[c]={exports:{}};n[c][0].call(d.exports,function(f){var m=n[c][1][f];return o(m||f)},d,d.exports,t,n,i,r)}return i[c].exports}for(var a=typeof ss=="function"&&ss,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var r=t("../math/Vec3");t("../utils/Utils"),n.exports=o;function o(c){c=c||{},this.lowerBound=new r,c.lowerBound&&this.lowerBound.copy(c.lowerBound),this.upperBound=new r,c.upperBound&&this.upperBound.copy(c.upperBound)}var a=new r;o.prototype.setFromPoints=function(c,h,u,d){var f=this.lowerBound,m=this.upperBound,g=u;f.copy(c[0]),g&&g.vmult(f,f),m.copy(f);for(var v=1;v<c.length;v++){var p=c[v];g&&(g.vmult(p,a),p=a),p.x>m.x&&(m.x=p.x),p.x<f.x&&(f.x=p.x),p.y>m.y&&(m.y=p.y),p.y<f.y&&(f.y=p.y),p.z>m.z&&(m.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(m,m)),d&&(f.x-=d,f.y-=d,f.z-=d,m.x+=d,m.y+=d,m.z+=d),this},o.prototype.copy=function(c){return this.lowerBound.copy(c.lowerBound),this.upperBound.copy(c.upperBound),this},o.prototype.clone=function(){return new o().copy(this)},o.prototype.extend=function(c){var h=c.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var u=c.upperBound.x;this.upperBound.x<u&&(this.upperBound.x=u);var h=c.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var u=c.upperBound.y;this.upperBound.y<u&&(this.upperBound.y=u);var h=c.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var u=c.upperBound.z;this.upperBound.z<u&&(this.upperBound.z=u)},o.prototype.overlaps=function(c){var h=this.lowerBound,u=this.upperBound,d=c.lowerBound,f=c.upperBound;return(d.x<=u.x&&u.x<=f.x||h.x<=f.x&&f.x<=u.x)&&(d.y<=u.y&&u.y<=f.y||h.y<=f.y&&f.y<=u.y)&&(d.z<=u.z&&u.z<=f.z||h.z<=f.z&&f.z<=u.z)},o.prototype.contains=function(c){var h=this.lowerBound,u=this.upperBound,d=c.lowerBound,f=c.upperBound;return h.x<=d.x&&u.x>=f.x&&h.y<=d.y&&u.y>=f.y&&h.z<=d.z&&u.z>=f.z},o.prototype.getCorners=function(c,h,u,d,f,m,g,v){var p=this.lowerBound,x=this.upperBound;c.copy(p),h.set(x.x,p.y,p.z),u.set(x.x,x.y,p.z),d.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),m.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),v.copy(x)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];o.prototype.toLocalFrame=function(c,h){var u=l,d=u[0],f=u[1],m=u[2],g=u[3],v=u[4],p=u[5],x=u[6],y=u[7];this.getCorners(d,f,m,g,v,p,x,y);for(var _=0;_!==8;_++){var S=u[_];c.pointToLocal(S,S)}return h.setFromPoints(u)},o.prototype.toWorldFrame=function(c,h){var u=l,d=u[0],f=u[1],m=u[2],g=u[3],v=u[4],p=u[5],x=u[6],y=u[7];this.getCorners(d,f,m,g,v,p,x,y);for(var _=0;_!==8;_++){var S=u[_];c.pointToWorld(S,S)}return h.setFromPoints(u)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(o,a){if(o=o.index,a=a.index,a>o){var l=a;a=o,o=l}return this.matrix[(o*(o+1)>>1)+a-1]},r.prototype.set=function(o,a,l){if(o=o.index,a=a.index,a>o){var c=a;a=o,o=c}this.matrix[(o*(o+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var o=0,a=this.matrix.length;o!==a;o++)this.matrix[o]=0},r.prototype.setNumObjects=function(o){this.matrix.length=o*(o-1)>>1}},{}],5:[function(t,n,i){var r=t("../objects/Body"),o=t("../math/Vec3"),a=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,v,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var c=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,v){return!(!(g.collisionFilterGroup&v.collisionFilterMask)||!(v.collisionFilterGroup&g.collisionFilterMask)||(g.type&c||g.sleepState===r.SLEEPING)&&(v.type&c||v.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,v,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,v,p,x):this.doBoundingSphereBroadphase(g,v,p,x)};var h=new o;new o,new a,new o,l.prototype.doBoundingSphereBroadphase=function(g,v,p,x){var y=h;v.position.vsub(g.position,y);var _=Math.pow(g.boundingRadius+v.boundingRadius,2),S=y.norm2();S<_&&(p.push(g),x.push(v))},l.prototype.doBoundingBoxBroadphase=function(g,v,p,x){g.aabbNeedsUpdate&&g.computeAABB(),v.aabbNeedsUpdate&&v.computeAABB(),g.aabb.overlaps(v.aabb)&&(p.push(g),x.push(v))};var u={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,v){for(var p=u,x=d,y=f,_=g.length,S=0;S!==_;S++)x[S]=g[S],y[S]=v[S];g.length=0,v.length=0;for(var S=0;S!==_;S++){var R=x[S].id,T=y[S].id,D=R<T?R+","+T:T+","+R;p[D]=S,p.keys.push(D)}for(var S=0;S!==p.keys.length;S++){var D=p.keys.pop(),M=p[D];g.push(x[M]),v.push(y[M]),delete p[D]}},l.prototype.setWorld=function(g){};var m=new o;l.boundingSphereCheck=function(g,v){var p=m;return g.position.vsub(v.position,p),Math.pow(g.shape.boundingSphereRadius+v.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,v,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=l;var r=t("./Broadphase"),o=t("../math/Vec3"),a=t("../shapes/Shape");function l(h,u,d,f,m){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=m||10,this.aabbMin=h||new o(100,100,100),this.aabbMax=u||new o(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var v=0;v<g;v++)this.bins[v]=[],this.binLengths[v]=0}l.prototype=new r,l.prototype.constructor=l;var c=new o;new o,l.prototype.collisionPairs=function(h,u,d){var f=h.numObjects(),m=h.bodies,oe=this.aabbMax,K=this.aabbMin,g=this.nx,v=this.ny,p=this.nz,x=v*p,y=p,_=1,S=oe.x,R=oe.y,T=oe.z,D=K.x,M=K.y,E=K.z,P=g/(S-D),H=v/(R-M),F=p/(T-E),W=(S-D)/g,k=(R-M)/v,ie=(T-E)/p,z=Math.sqrt(W*W+k*k+ie*ie)*.5,U=a.types,J=U.SPHERE,q=U.PLANE;U.BOX,U.COMPOUND,U.CONVEXPOLYHEDRON;for(var A=this.bins,O=this.binLengths,B=this.bins.length,I=0;I!==B;I++)O[I]=0;var C=Math.ceil,K=Math.min,oe=Math.max;function re(we,ue,G,ge,Ue,Ne,Oe){var Ze=(we-D)*P|0,et=(ue-M)*H|0,j=(G-E)*F|0,Be=C((ge-D)*P),de=C((Ue-M)*H),Se=C((Ne-E)*F);Ze<0?Ze=0:Ze>=g&&(Ze=g-1),et<0?et=0:et>=v&&(et=v-1),j<0?j=0:j>=p&&(j=p-1),Be<0?Be=0:Be>=g&&(Be=g-1),de<0?de=0:de>=v&&(de=v-1),Se<0?Se=0:Se>=p&&(Se=p-1),Ze*=x,et*=y,j*=_,Be*=x,de*=y,Se*=_;for(var Le=Ze;Le<=Be;Le+=x)for(var tt=et;tt<=de;tt+=y)for(var lt=j;lt<=Se;lt+=_){var ft=Le+tt+lt;A[ft][O[ft]++]=Oe}}for(var I=0;I!==f;I++){var ee=m[I],fe=ee.shape;switch(fe.type){case J:var he=ee.position.x,N=ee.position.y,le=ee.position.z,te=fe.radius;re(he-te,N-te,le-te,he+te,N+te,le+te,ee);break;case q:fe.worldNormalNeedsUpdate&&fe.computeWorldNormal(ee.quaternion);var $=fe.worldNormal,Q=D+W*.5-ee.position.x,Ae=M+k*.5-ee.position.y,ye=E+ie*.5-ee.position.z,Te=c;Te.set(Q,Ae,ye);for(var _e=0,qe=0;_e!==g;_e++,qe+=x,Te.y=Ae,Te.x+=W)for(var Je=0,L=0;Je!==v;Je++,L+=y,Te.z=ye,Te.y+=k)for(var w=0,ne=0;w!==p;w++,ne+=_,Te.z+=ie)if(Te.dot($)<z){var xe=qe+L+ne;A[xe][O[xe]++]=ee}break;default:ee.aabbNeedsUpdate&&ee.computeAABB(),re(ee.aabb.lowerBound.x,ee.aabb.lowerBound.y,ee.aabb.lowerBound.z,ee.aabb.upperBound.x,ee.aabb.upperBound.y,ee.aabb.upperBound.z,ee);break}}for(var I=0;I!==B;I++){var ve=O[I];if(ve>1)for(var Me=A[I],_e=0;_e!==ve;_e++)for(var ee=Me[_e],Je=0;Je!==_e;Je++){var Xe=Me[Je];this.needBroadphaseCollision(ee,Xe)&&this.intersectionTest(ee,Xe,u,d)}}this.makePairsUnique(u,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=a;var r=t("./Broadphase"),o=t("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,c,h){var u=l.bodies,d=u.length,f,m,g,v;for(f=0;f!==d;f++)for(m=0;m!==f;m++)g=u[f],v=u[m],this.needBroadphaseCollision(g,v)&&this.intersectionTest(g,v,c,h)},new o,a.prototype.aabbQuery=function(l,c,h){h=h||[];for(var u=0;u<l.bodies.length;u++){var d=l.bodies[u];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(c)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(o,a){if(o=o.id,a=a.id,a>o){var l=a;a=o,o=l}return o+"-"+a in this.matrix},r.prototype.set=function(o,a,l){if(o=o.id,a=a.id,a>o){var c=a;a=o,o=c}l?this.matrix[o+"-"+a]=!0:delete this.matrix[o+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(o){}},{}],9:[function(t,n,i){n.exports=u;var r=t("../math/Vec3"),o=t("../math/Quaternion"),a=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),c=t("../shapes/Shape"),h=t("../collision/AABB");function u(B,I){this.from=B?B.clone():new r,this.to=I?I.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=u.ANY,this.result=new l,this.hasHit=!1,this.callback=function(C){}}u.prototype.constructor=u,u.CLOSEST=1,u.ANY=2,u.ALL=4;var d=new h,f=[];u.prototype.intersectWorld=function(B,I){return this.mode=I.mode||u.ANY,this.result=I.result||new l,this.skipBackfaces=!!I.skipBackfaces,this.collisionFilterMask=typeof I.collisionFilterMask<"u"?I.collisionFilterMask:-1,this.collisionFilterGroup=typeof I.collisionFilterGroup<"u"?I.collisionFilterGroup:-1,I.from&&this.from.copy(I.from),I.to&&this.to.copy(I.to),this.callback=I.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,B.broadphase.aabbQuery(B,d,f),this.intersectBodies(f),this.hasHit};var m=new r,g=new r;u.pointInTriangle=v;function v(B,I,C,K){K.vsub(I,q),C.vsub(I,m),B.vsub(I,g);var oe=q.dot(q),re=q.dot(m),ee=q.dot(g),fe=m.dot(m),he=m.dot(g),N,le;return(N=fe*ee-re*he)>=0&&(le=oe*he-re*ee)>=0&&N+le<oe*fe-re*re}var p=new r,x=new o;u.prototype.intersectBody=function(B,I){I&&(this.result=I,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!B.collisionResponse)&&!(!(this.collisionFilterGroup&B.collisionFilterMask)||!(B.collisionFilterGroup&this.collisionFilterMask)))for(var K=p,oe=x,re=0,ee=B.shapes.length;re<ee;re++){var fe=B.shapes[re];if(!(C&&!fe.collisionResponse)&&(B.quaternion.mult(B.shapeOrientations[re],oe),B.quaternion.vmult(B.shapeOffsets[re],K),K.vadd(B.position,K),this.intersectShape(fe,oe,K,B),this.result._shouldStop))break}},u.prototype.intersectBodies=function(B,I){I&&(this.result=I,this._updateDirection());for(var C=0,K=B.length;!this.result._shouldStop&&C<K;C++)this.intersectBody(B[C])},u.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},u.prototype.intersectShape=function(B,I,C,K){var oe=this.from,re=O(oe,this._direction,C);if(!(re>B.boundingSphereRadius)){var ee=this[B.type];ee&&ee.call(this,B,I,C,K)}},new r,new r;var y=new r,_=new r,S=new r,R=new r;new r,new l,u.prototype.intersectBox=function(B,I,C,K){return this.intersectConvex(B.convexPolyhedronRepresentation,I,C,K)},u.prototype[c.types.BOX]=u.prototype.intersectBox,u.prototype.intersectPlane=function(B,I,C,K){var oe=this.from,re=this.to,ee=this._direction,fe=new r(0,0,1);I.vmult(fe,fe);var he=new r;oe.vsub(C,he);var N=he.dot(fe);re.vsub(C,he);var le=he.dot(fe);if(!(N*le>0)&&!(oe.distanceTo(re)<N)){var te=fe.dot(ee);if(!(Math.abs(te)<this.precision)){var $=new r,Q=new r,Ae=new r;oe.vsub(C,$);var ye=-fe.dot($)/te;ee.scale(ye,Q),oe.vadd(Q,Ae),this.reportIntersection(fe,Ae,B,K,-1)}}},u.prototype[c.types.PLANE]=u.prototype.intersectPlane,u.prototype.getAABB=function(B){var I=this.to,C=this.from;B.lowerBound.x=Math.min(I.x,C.x),B.lowerBound.y=Math.min(I.y,C.y),B.lowerBound.z=Math.min(I.z,C.z),B.upperBound.x=Math.max(I.x,C.x),B.upperBound.y=Math.max(I.y,C.y),B.upperBound.z=Math.max(I.z,C.z)};var T={faceList:[0]};u.prototype.intersectHeightfield=function(B,I,C,K){B.data,B.elementSize;var oe=new r,re=new u(this.from,this.to);a.pointToLocalFrame(C,I,re.from,re.from),a.pointToLocalFrame(C,I,re.to,re.to);var ee=[],fe=null,he=null,N=null,le=null,te=B.getIndexOfPosition(re.from.x,re.from.y,ee,!1);if(te&&(fe=ee[0],he=ee[1],N=ee[0],le=ee[1]),te=B.getIndexOfPosition(re.to.x,re.to.y,ee,!1),te&&((fe===null||ee[0]<fe)&&(fe=ee[0]),(N===null||ee[0]>N)&&(N=ee[0]),(he===null||ee[1]<he)&&(he=ee[1]),(le===null||ee[1]>le)&&(le=ee[1])),fe!==null){var $=[];B.getRectMinMax(fe,he,N,le,$),$[0],$[1];for(var Q=fe;Q<=N;Q++)for(var Ae=he;Ae<=le;Ae++){if(this.result._shouldStop||(B.getConvexTrianglePillar(Q,Ae,!1),a.pointToWorldFrame(C,I,B.pillarOffset,oe),this.intersectConvex(B.pillarConvex,I,oe,K,T),this.result._shouldStop))return;B.getConvexTrianglePillar(Q,Ae,!0),a.pointToWorldFrame(C,I,B.pillarOffset,oe),this.intersectConvex(B.pillarConvex,I,oe,K,T)}}},u.prototype[c.types.HEIGHTFIELD]=u.prototype.intersectHeightfield;var D=new r,M=new r;u.prototype.intersectSphere=function(B,I,C,K){var oe=this.from,re=this.to,ee=B.radius,fe=Math.pow(re.x-oe.x,2)+Math.pow(re.y-oe.y,2)+Math.pow(re.z-oe.z,2),he=2*((re.x-oe.x)*(oe.x-C.x)+(re.y-oe.y)*(oe.y-C.y)+(re.z-oe.z)*(oe.z-C.z)),N=Math.pow(oe.x-C.x,2)+Math.pow(oe.y-C.y,2)+Math.pow(oe.z-C.z,2)-Math.pow(ee,2),le=Math.pow(he,2)-4*fe*N,te=D,$=M;if(!(le<0))if(le===0)oe.lerp(re,le,te),te.vsub(C,$),$.normalize(),this.reportIntersection($,te,B,K,-1);else{var Q=(-he-Math.sqrt(le))/(2*fe),Ae=(-he+Math.sqrt(le))/(2*fe);if(Q>=0&&Q<=1&&(oe.lerp(re,Q,te),te.vsub(C,$),$.normalize(),this.reportIntersection($,te,B,K,-1)),this.result._shouldStop)return;Ae>=0&&Ae<=1&&(oe.lerp(re,Ae,te),te.vsub(C,$),$.normalize(),this.reportIntersection($,te,B,K,-1))}},u.prototype[c.types.SPHERE]=u.prototype.intersectSphere;var E=new r;new r,new r;var P=new r;u.prototype.intersectConvex=function(I,C,K,oe,re){for(var ee=E,fe=P,he=re&&re.faceList||null,N=I.faces,le=I.vertices,te=I.faceNormals,$=this._direction,Q=this.from,Ae=this.to,ye=Q.distanceTo(Ae),Te=he?he.length:N.length,_e=this.result,qe=0;!_e._shouldStop&&qe<Te;qe++){var Je=he?he[qe]:qe,L=N[Je],w=te[Je],ne=C,xe=K;fe.copy(le[L[0]]),ne.vmult(fe,fe),fe.vadd(xe,fe),fe.vsub(Q,fe),ne.vmult(w,ee);var ve=$.dot(ee);if(!(Math.abs(ve)<this.precision)){var Me=ee.dot(fe)/ve;if(!(Me<0)){$.mult(Me,y),y.vadd(Q,y),_.copy(le[L[0]]),ne.vmult(_,_),xe.vadd(_,_);for(var Xe=1;!_e._shouldStop&&Xe<L.length-1;Xe++){S.copy(le[L[Xe]]),R.copy(le[L[Xe+1]]),ne.vmult(S,S),ne.vmult(R,R),xe.vadd(S,S),xe.vadd(R,R);var we=y.distanceTo(Q);!(v(y,_,S,R)||v(y,S,_,R))||we>ye||this.reportIntersection(ee,y,I,oe,Je)}}}}},u.prototype[c.types.CONVEXPOLYHEDRON]=u.prototype.intersectConvex;var H=new r,F=new r,W=new r,k=new r,ie=new r,z=new r;new h;var U=[],J=new a;u.prototype.intersectTrimesh=function(I,C,K,oe,re){var ee=H,fe=U,he=J,N=P,le=F,te=W,$=k,Q=z,Ae=ie;re&&re.faceList;var ye=I.indices;I.vertices,I.faceNormals;var Te=this.from,_e=this.to,qe=this._direction;he.position.copy(K),he.quaternion.copy(C),a.vectorToLocalFrame(K,C,qe,le),a.pointToLocalFrame(K,C,Te,te),a.pointToLocalFrame(K,C,_e,$);var Je=te.distanceSquared($);I.tree.rayQuery(this,he,fe);for(var L=0,w=fe.length;!this.result._shouldStop&&L!==w;L++){var ne=fe[L];I.getNormal(ne,ee),I.getVertex(ye[ne*3],_),_.vsub(te,N);var xe=le.dot(ee),ve=ee.dot(N)/xe;if(!(ve<0)){le.scale(ve,y),y.vadd(te,y),I.getVertex(ye[ne*3+1],S),I.getVertex(ye[ne*3+2],R);var Me=y.distanceSquared(te);!(v(y,S,_,R)||v(y,_,S,R))||Me>Je||(a.vectorToWorldFrame(C,ee,Ae),a.pointToWorldFrame(K,C,y,Q),this.reportIntersection(Ae,Q,I,oe,ne))}}fe.length=0},u.prototype[c.types.TRIMESH]=u.prototype.intersectTrimesh,u.prototype.reportIntersection=function(B,I,C,K,oe){var re=this.from,ee=this.to,fe=re.distanceTo(I),he=this.result;if(!(this.skipBackfaces&&B.dot(this._direction)>0))switch(he.hitFaceIndex=typeof oe<"u"?oe:-1,this.mode){case u.ALL:this.hasHit=!0,he.set(re,ee,B,I,C,K,fe),he.hasHit=!0,this.callback(he);break;case u.CLOSEST:(fe<he.distance||!he.hasHit)&&(this.hasHit=!0,he.hasHit=!0,he.set(re,ee,B,I,C,K,fe));break;case u.ANY:this.hasHit=!0,he.hasHit=!0,he.set(re,ee,B,I,C,K,fe),he._shouldStop=!0;break}};var q=new r,A=new r;function O(B,I,C){C.vsub(B,q);var K=q.dot(I);I.mult(K,A),A.vadd(B,A);var oe=C.distanceTo(A);return oe}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var r=t("../math/Vec3");n.exports=o;function o(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}o.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},o.prototype.abort=function(){this._shouldStop=!0},o.prototype.set=function(a,l,c,h,u,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(c),this.hitPointWorld.copy(h),this.shape=u,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var r=t("../collision/Broadphase");n.exports=o;function o(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(c){l.push(c.body)},this._removeBodyHandler=function(c){var h=l.indexOf(c.body);h!==-1&&l.splice(h,1)},a&&this.setWorld(a)}o.prototype=new r,o.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},o.insertionSortX=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.x<=h.aabb.lowerBound.x);u--)a[u+1]=a[u];a[u+1]=h}return a},o.insertionSortY=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.y<=h.aabb.lowerBound.y);u--)a[u+1]=a[u];a[u+1]=h}return a},o.insertionSortZ=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.z<=h.aabb.lowerBound.z);u--)a[u+1]=a[u];a[u+1]=h}return a},o.prototype.collisionPairs=function(a,l,c){var h=this.axisList,u=h.length,d=this.axisIndex,f,m;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==u;f++){var g=h[f];for(m=f+1;m<u;m++){var v=h[m];if(this.needBroadphaseCollision(g,v)){if(!o.checkBounds(g,v,d))break;this.intersectionTest(g,v,l,c)}}}},o.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,c=a.length,h=0;h!==c;h++){var u=a[h];u.aabbNeedsUpdate&&u.computeAABB()}l===0?o.insertionSortX(a):l===1?o.insertionSortY(a):l===2&&o.insertionSortZ(a)},o.checkBounds=function(a,l,c){var h,u;c===0?(h=a.position.x,u=l.position.x):c===1?(h=a.position.y,u=l.position.y):c===2&&(h=a.position.z,u=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,m=h+d,g=u-f;return g<m},o.prototype.autoDetectAxis=function(){for(var a=0,l=0,c=0,h=0,u=0,d=0,f=this.axisList,m=f.length,g=1/m,v=0;v!==m;v++){var p=f[v],x=p.position.x;a+=x,l+=x*x;var y=p.position.y;c+=y,h+=y*y;var _=p.position.z;u+=_,d+=_*_}var S=l-a*a*g,R=h-c*c*g,T=d-u*u*g;S>R?S>T?this.axisIndex=0:this.axisIndex=2:R>T?this.axisIndex=1:this.axisIndex=2},o.prototype.aabbQuery=function(a,l,c){c=c||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,u="x";h===1&&(u="y"),h===2&&(u="z");var d=this.axisList;l.lowerBound[u],l.upperBound[u];for(var f=0;f<d.length;f++){var m=d[f];m.aabbNeedsUpdate&&m.computeAABB(),m.aabb.overlaps(l)&&c.push(m)}return c}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=c,t("./Constraint");var r=t("./PointToPointConstraint"),o=t("../equations/ConeEquation"),a=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function c(h,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,m=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,h,m,u,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var v=this.coneEquation=new o(h,u,d),p=this.twistEquation=new a(h,u,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,v.maxForce=0,v.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(v,p)}c.prototype=new r,c.constructor=c,new l,new l,c.prototype.update=function(){var h=this.bodyA,u=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),u.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),u.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=o;var r=t("../utils/Utils");function o(a,l,c){c=r.defaults(c,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=o.idCounter++,this.collideConnected=c.collideConnected,c.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}o.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},o.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},o.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},o.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=a;var r=t("./Constraint"),o=t("../equations/ContactEquation");function a(l,c,h,u){r.call(this,l,c),typeof h>"u"&&(h=l.position.distanceTo(c.position)),typeof u>"u"&&(u=1e6),this.distance=h;var d=this.distanceEquation=new o(l,c);this.equations.push(d),d.minForce=-u,d.maxForce=u}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,c=this.bodyB,h=this.distanceEquation,u=this.distance*.5,d=h.ni;c.position.vsub(l.position,d),d.normalize(),d.mult(u,h.ri),d.mult(-u,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=c,t("./Constraint");var r=t("./PointToPointConstraint"),o=t("../equations/RotationalEquation"),a=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function c(d,f,m){m=m||{};var g=typeof m.maxForce<"u"?m.maxForce:1e6,v=m.pivotA?m.pivotA.clone():new l,p=m.pivotB?m.pivotB.clone():new l;r.call(this,d,v,f,p,g);var x=this.axisA=m.axisA?m.axisA.clone():new l(1,0,0);x.normalize();var y=this.axisB=m.axisB?m.axisB.clone():new l(1,0,0);y.normalize();var _=this.rotationalEquation1=new o(d,f,m),S=this.rotationalEquation2=new o(d,f,m),R=this.motorEquation=new a(d,f,g);R.enabled=!1,this.equations.push(_,S,R)}c.prototype=new r,c.constructor=c,c.prototype.enableMotor=function(){this.motorEquation.enabled=!0},c.prototype.disableMotor=function(){this.motorEquation.enabled=!1},c.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},c.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,u=new l;c.prototype.update=function(){var d=this.bodyA,f=this.bodyB,m=this.motorEquation,g=this.rotationalEquation1,v=this.rotationalEquation2,p=h,x=u,y=this.axisA,_=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(_,x),p.tangents(g.axisA,v.axisA),g.axisB.copy(x),v.axisB.copy(x),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,m.axisA),f.quaternion.vmult(this.axisB,m.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=l,t("./Constraint");var r=t("./PointToPointConstraint"),o=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var a=t("../math/Vec3");function l(c,h,u){u=u||{};var d=typeof u.maxForce<"u"?u.maxForce:1e6,f=new a,m=new a,g=new a;c.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,m),c.pointToLocalFrame(g,f),r.call(this,c,f,h,m,d);var v=this.rotationalEquation1=new o(c,h,u),p=this.rotationalEquation2=new o(c,h,u),x=this.rotationalEquation3=new o(c,h,u);this.equations.push(v,p,x)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var c=this.bodyA,h=this.bodyB;this.motorEquation;var u=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),c.vectorToWorldFrame(a.UNIT_X,u.axisA),h.vectorToWorldFrame(a.UNIT_Y,u.axisB),c.vectorToWorldFrame(a.UNIT_Y,d.axisA),h.vectorToWorldFrame(a.UNIT_Z,d.axisB),c.vectorToWorldFrame(a.UNIT_Z,f.axisA),h.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=l;var r=t("./Constraint"),o=t("../equations/ContactEquation"),a=t("../math/Vec3");function l(c,h,u,d,f){r.call(this,c,u),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new a,this.pivotB=d?d.clone():new a;var m=this.equationX=new o(c,u),g=this.equationY=new o(c,u),v=this.equationZ=new o(c,u);this.equations.push(m,g,v),m.minForce=g.minForce=v.minForce=-f,m.maxForce=g.maxForce=v.maxForce=f,m.ni.set(1,0,0),g.ni.set(0,1,0),v.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var c=this.bodyA,h=this.bodyB,u=this.equationX,d=this.equationY,f=this.equationZ;c.quaternion.vmult(this.pivotA,u.ri),h.quaternion.vmult(this.pivotB,u.rj),d.ri.copy(u.ri),d.rj.copy(u.rj),f.ri.copy(u.ri),f.rj.copy(u.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=a;var r=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function a(h,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,u,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new o,a.prototype.constructor=a;var l=new r,c=new r;a.prototype.computeB=function(h){var u=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,v=c,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(m,g),m.cross(f,v),p.rotational.copy(v),x.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(m),_=this.computeGW(),S=this.computeGiMf(),R=-y*u-_*d-h*S;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=a;var r=t("./Equation"),o=t("../math/Vec3");t("../math/Mat3");function a(v,p,x){x=typeof x<"u"?x:1e6,r.call(this,v,p,0,x),this.restitution=0,this.ri=new o,this.rj=new o,this.ni=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,c=new o,h=new o;a.prototype.computeB=function(v){var p=this.a,x=this.b,y=this.bi,_=this.bj,S=this.ri,R=this.rj,T=l,D=c,M=y.velocity,E=y.angularVelocity;y.force,y.torque;var P=_.velocity,H=_.angularVelocity;_.force,_.torque;var F=h,W=this.jacobianElementA,k=this.jacobianElementB,ie=this.ni;S.cross(ie,T),R.cross(ie,D),ie.negate(W.spatial),T.negate(W.rotational),k.spatial.copy(ie),k.rotational.copy(D),F.copy(_.position),F.vadd(R,F),F.vsub(y.position,F),F.vsub(S,F);var z=ie.dot(F),U=this.restitution+1,J=U*P.dot(ie)-U*M.dot(ie)+H.dot(D)-E.dot(T),q=this.computeGiMf(),A=-z*p-J*x-v*q;return A};var u=new o,d=new o,f=new o,m=new o,g=new o;a.prototype.getImpactVelocityAlongNormal=function(){var v=u,p=d,x=f,y=m,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(x,v),this.bj.getVelocityAtWorldPoint(y,p),v.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=a;var r=t("../math/JacobianElement"),o=t("../math/Vec3");function a(g,v,p,x){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=v,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,v,p){var x=v,y=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*y*(1+4*x))},a.prototype.computeB=function(g,v,p){var x=this.computeGW(),y=this.computeGq(),_=this.computeGiMf();return-y*g-x*v-_*p},a.prototype.computeGq=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.position,_=x.position;return g.spatial.dot(y)+v.spatial.dot(_)};var l=new o;a.prototype.computeGW=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.velocity,_=x.velocity,S=p.angularVelocity||l,R=x.angularVelocity||l;return g.multiplyVectors(y,S)+v.multiplyVectors(_,R)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.vlambda,_=x.vlambda,S=p.wlambda||l,R=x.wlambda||l;return g.multiplyVectors(y,S)+v.multiplyVectors(_,R)};var c=new o,h=new o,u=new o,d=new o;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.force,_=p.torque,S=x.force,R=x.torque,T=p.invMassSolve,D=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,u):u.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(R,d):d.set(0,0,0),y.mult(T,c),S.mult(D,h),g.multiplyVectors(c,u)+v.multiplyVectors(h,d)};var f=new o;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.invMassSolve,_=x.invMassSolve,S=p.invInertiaWorldSolve,R=x.invInertiaWorldSolve,T=y+_;return S&&(S.vmult(g.rotational,f),T+=f.dot(g.rotational)),R&&(R.vmult(v.rotational,f),T+=f.dot(v.rotational)),T};var m=new o;new o,new o,new o,new o,new o,a.prototype.addToWlambda=function(g){var v=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,y=this.bj,_=m;v.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(v.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=a;var r=t("./Equation"),o=t("../math/Vec3");t("../math/Mat3");function a(h,u,d){r.call(this,h,u,-d,d),this.ri=new o,this.rj=new o,this.t=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,c=new o;a.prototype.computeB=function(h){this.a;var u=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,m=l,g=c,v=this.t;d.cross(v,m),f.cross(v,g);var p=this.jacobianElementA,x=this.jacobianElementB;v.negate(p.spatial),m.negate(p.rotational),x.spatial.copy(v),x.rotational.copy(g);var y=this.computeGW(),_=this.computeGiMf(),S=-y*u-h*_;return S}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=a;var r=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function a(h,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,u,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new o,a.prototype.constructor=a;var l=new r,c=new r;a.prototype.computeB=function(h){var u=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,v=c,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(m,g),m.cross(f,v),p.rotational.copy(v),x.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(m),_=this.computeGW(),S=this.computeGiMf(),R=-y*u-_*d-h*S;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=a;var r=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function a(l,c,h){h=typeof h<"u"?h:1e6,o.call(this,l,c,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new o,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var c=this.b;this.bi,this.bj;var h=this.axisA,u=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),u.negate(f.rotational);var m=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),v=-m*c-l*g;return v}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var r=t("../utils/Utils");n.exports=o;function o(a,l,c){c=r.defaults(c,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=o.idCounter++,this.materials=[a,l],this.friction=c.friction,this.restitution=c.restitution,this.contactEquationStiffness=c.contactEquationStiffness,this.contactEquationRelaxation=c.contactEquationRelaxation,this.frictionEquationStiffness=c.frictionEquationStiffness,this.frictionEquationRelaxation=c.frictionEquationRelaxation}o.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=r;function r(o){var a="";o=o||{},typeof o=="string"?(a=o,o={}):typeof o=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof o.friction<"u"?o.friction:-1,this.restitution=typeof o.restitution<"u"?o.restitution:-1}r.idCounter=0},{}],26:[function(t,n,i){n.exports=o;var r=t("./Vec3");function o(){this.spatial=new r,this.rotational=new r}o.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},o.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=o;var r=t("./Vec3");function o(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}o.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},o.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},o.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},o.prototype.getTrace=function(l){var l=l||new r,c=this.elements;l.x=c[0],l.y=c[4],l.z=c[8]},o.prototype.vmult=function(a,l){l=l||new r;var c=this.elements,h=a.x,u=a.y,d=a.z;return l.x=c[0]*h+c[1]*u+c[2]*d,l.y=c[3]*h+c[4]*u+c[5]*d,l.z=c[6]*h+c[7]*u+c[8]*d,l},o.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},o.prototype.mmult=function(a,l){for(var c=l||new o,h=0;h<3;h++)for(var u=0;u<3;u++){for(var d=0,f=0;f<3;f++)d+=a.elements[h+f*3]*this.elements[f+u*3];c.elements[h+u*3]=d}return c},o.prototype.scale=function(a,l){l=l||new o;for(var c=this.elements,h=l.elements,u=0;u!==3;u++)h[3*u+0]=a.x*c[3*u+0],h[3*u+1]=a.y*c[3*u+1],h[3*u+2]=a.z*c[3*u+2];return l},o.prototype.solve=function(a,l){l=l||new r;for(var c=3,h=4,u=[],d=0;d<c*h;d++)u.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)u[d+h*f]=this.elements[d+3*f];u[3+4*0]=a.x,u[3+4*1]=a.y,u[3+4*2]=a.z;var m=3,g=m,v,p=4,x;do{if(d=g-m,u[d+h*d]===0){for(f=d+1;f<g;f++)if(u[d+h*f]!==0){v=p;do x=p-v,u[x+h*d]+=u[x+h*f];while(--v);break}}if(u[d+h*d]!==0)for(f=d+1;f<g;f++){var y=u[d+h*f]/u[d+h*d];v=p;do x=p-v,u[x+h*f]=x<=d?0:u[x+h*f]-u[x+h*d]*y;while(--v)}}while(--m);if(l.z=u[2*h+3]/u[2*h+2],l.y=(u[1*h+3]-u[1*h+2]*l.z)/u[1*h+1],l.x=(u[0*h+3]-u[0*h+2]*l.z-u[0*h+1]*l.y)/u[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},o.prototype.e=function(a,l,c){if(c===void 0)return this.elements[l+3*a];this.elements[l+3*a]=c},o.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},o.prototype.toString=function(){for(var a="",l=",",c=0;c<9;c++)a+=this.elements[c]+l;return a},o.prototype.reverse=function(a){a=a||new o;for(var l=3,c=6,h=[],u=0;u<l*c;u++)h.push(0);var u,d;for(u=0;u<3;u++)for(d=0;d<3;d++)h[u+c*d]=this.elements[u+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,m=f,g,v=c,p;do{if(u=m-f,h[u+c*u]===0){for(d=u+1;d<m;d++)if(h[u+c*d]!==0){g=v;do p=v-g,h[p+c*u]+=h[p+c*d];while(--g);break}}if(h[u+c*u]!==0)for(d=u+1;d<m;d++){var x=h[u+c*d]/h[u+c*u];g=v;do p=v-g,h[p+c*d]=p<=u?0:h[p+c*d]-h[p+c*u]*x;while(--g)}}while(--f);u=2;do{d=u-1;do{var x=h[u+c*d]/h[u+c*u];g=c;do p=c-g,h[p+c*d]=h[p+c*d]-h[p+c*u]*x;while(--g)}while(d--)}while(--u);u=2;do{var x=1/h[u+c*u];g=c;do p=c-g,h[p+c*u]=h[p+c*u]*x;while(--g)}while(u--);u=2;do{d=2;do{if(p=h[l+d+c*u],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(u,d,p)}while(d--)}while(u--);return a},o.prototype.setRotationFromQuaternion=function(a){var l=a.x,c=a.y,h=a.z,u=a.w,d=l+l,f=c+c,m=h+h,g=l*d,v=l*f,p=l*m,x=c*f,y=c*m,_=h*m,S=u*d,R=u*f,T=u*m,D=this.elements;return D[3*0+0]=1-(x+_),D[3*0+1]=v-T,D[3*0+2]=p+R,D[3*1+0]=v+T,D[3*1+1]=1-(g+_),D[3*1+2]=y-S,D[3*2+0]=p-R,D[3*2+1]=y+S,D[3*2+2]=1-(g+x),this},o.prototype.transpose=function(a){a=a||new o;for(var l=a.elements,c=this.elements,h=0;h!==3;h++)for(var u=0;u!==3;u++)l[3*h+u]=c[3*u+h];return a}},{"./Vec3":30}],28:[function(t,n,i){n.exports=o;var r=t("./Vec3");function o(d,f,m,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=m!==void 0?m:0,this.w=g!==void 0?g:1}o.prototype.set=function(d,f,m,g){this.x=d,this.y=f,this.z=m,this.w=g},o.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},o.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},o.prototype.setFromAxisAngle=function(d,f){var m=Math.sin(f*.5);this.x=d.x*m,this.y=d.y*m,this.z=d.z*m,this.w=Math.cos(f*.5)},o.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),m=Math.sqrt(1-this.w*this.w);return m<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/m,d.y=this.y/m,d.z=this.z/m),[d,f]};var a=new r,l=new r;o.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var m=a,g=l;d.tangents(m,g),this.setFromAxisAngle(m,Math.PI)}else{var v=d.cross(f);this.x=v.x,this.y=v.y,this.z=v.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var c=new r,h=new r,u=new r;o.prototype.mult=function(d,f){f=f||new o;var m=this.w,g=c,v=h,p=u;return g.set(this.x,this.y,this.z),v.set(d.x,d.y,d.z),f.w=m*d.w-g.dot(v),g.cross(v,p),f.x=m*v.x+d.w*g.x+p.x,f.y=m*v.y+d.w*g.y+p.y,f.z=m*v.z+d.w*g.z+p.z,f},o.prototype.inverse=function(d){var f=this.x,m=this.y,g=this.z,v=this.w;d=d||new o,this.conjugate(d);var p=1/(f*f+m*m+g*g+v*v);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},o.prototype.conjugate=function(d){return d=d||new o,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},o.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.vmult=function(d,f){f=f||new r;var m=d.x,g=d.y,v=d.z,p=this.x,x=this.y,y=this.z,_=this.w,S=_*m+x*v-y*g,R=_*g+y*m-p*v,T=_*v+p*g-x*m,D=-p*m-x*g-y*v;return f.x=S*_+D*-p+R*-y-T*-x,f.y=R*_+D*-x+T*-p-S*-y,f.z=T*_+D*-y+S*-x-R*-p,f},o.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},o.prototype.toEuler=function(d,f){f=f||"YZX";var m,g,v,p=this.x,x=this.y,y=this.z,_=this.w;switch(f){case"YZX":var S=p*x+y*_;if(S>.499&&(m=2*Math.atan2(p,_),g=Math.PI/2,v=0),S<-.499&&(m=-2*Math.atan2(p,_),g=-Math.PI/2,v=0),isNaN(m)){var R=p*p,T=x*x,D=y*y;m=Math.atan2(2*x*_-2*p*y,1-2*T-2*D),g=Math.asin(2*S),v=Math.atan2(2*p*_-2*x*y,1-2*R-2*D)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=m,d.z=g,d.x=v},o.prototype.setFromEuler=function(d,f,m,g){g=g||"XYZ";var v=Math.cos(d/2),p=Math.cos(f/2),x=Math.cos(m/2),y=Math.sin(d/2),_=Math.sin(f/2),S=Math.sin(m/2);return g==="XYZ"?(this.x=y*p*x+v*_*S,this.y=v*_*x-y*p*S,this.z=v*p*S+y*_*x,this.w=v*p*x-y*_*S):g==="YXZ"?(this.x=y*p*x+v*_*S,this.y=v*_*x-y*p*S,this.z=v*p*S-y*_*x,this.w=v*p*x+y*_*S):g==="ZXY"?(this.x=y*p*x-v*_*S,this.y=v*_*x+y*p*S,this.z=v*p*S+y*_*x,this.w=v*p*x-y*_*S):g==="ZYX"?(this.x=y*p*x-v*_*S,this.y=v*_*x+y*p*S,this.z=v*p*S-y*_*x,this.w=v*p*x+y*_*S):g==="YZX"?(this.x=y*p*x+v*_*S,this.y=v*_*x+y*p*S,this.z=v*p*S-y*_*x,this.w=v*p*x-y*_*S):g==="XZY"&&(this.x=y*p*x-v*_*S,this.y=v*_*x-y*p*S,this.z=v*p*S+y*_*x,this.w=v*p*x+y*_*S),this},o.prototype.clone=function(){return new o(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var r=t("./Vec3"),o=t("./Quaternion");n.exports=a;function a(c){c=c||{},this.position=new r,c.position&&this.position.copy(c.position),this.quaternion=new o,c.quaternion&&this.quaternion.copy(c.quaternion)}var l=new o;a.pointToLocalFrame=function(c,h,u,f){var f=f||new r;return u.vsub(c,f),h.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(c,h){return a.pointToLocalFrame(this.position,this.quaternion,c,h)},a.pointToWorldFrame=function(c,h,u,f){var f=f||new r;return h.vmult(u,f),f.vadd(c,f),f},a.prototype.pointToWorld=function(c,h){return a.pointToWorldFrame(this.position,this.quaternion,c,h)},a.prototype.vectorToWorldFrame=function(c,u){var u=u||new r;return this.quaternion.vmult(c,u),u},a.vectorToWorldFrame=function(c,h,u){return c.vmult(h,u),u},a.vectorToLocalFrame=function(c,h,u,f){var f=f||new r;return h.w*=-1,h.vmult(u,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=o;var r=t("./Mat3");function o(h,u,d){this.x=h||0,this.y=u||0,this.z=d||0}o.ZERO=new o(0,0,0),o.UNIT_X=new o(1,0,0),o.UNIT_Y=new o(0,1,0),o.UNIT_Z=new o(0,0,1),o.prototype.cross=function(h,u){var d=h.x,f=h.y,m=h.z,g=this.x,v=this.y,p=this.z;return u=u||new o,u.x=v*m-p*f,u.y=p*d-g*m,u.z=g*f-v*d,u},o.prototype.set=function(h,u,d){return this.x=h,this.y=u,this.z=d,this},o.prototype.setZero=function(){this.x=this.y=this.z=0},o.prototype.vadd=function(h,u){if(u)u.x=h.x+this.x,u.y=h.y+this.y,u.z=h.z+this.z;else return new o(this.x+h.x,this.y+h.y,this.z+h.z)},o.prototype.vsub=function(h,u){if(u)u.x=this.x-h.x,u.y=this.y-h.y,u.z=this.z-h.z;else return new o(this.x-h.x,this.y-h.y,this.z-h.z)},o.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},o.prototype.normalize=function(){var h=this.x,u=this.y,d=this.z,f=Math.sqrt(h*h+u*u+d*d);if(f>0){var m=1/f;this.x*=m,this.y*=m,this.z*=m}else this.x=0,this.y=0,this.z=0;return f},o.prototype.unit=function(h){h=h||new o;var u=this.x,d=this.y,f=this.z,m=Math.sqrt(u*u+d*d+f*f);return m>0?(m=1/m,h.x=u*m,h.y=d*m,h.z=f*m):(h.x=1,h.y=0,h.z=0),h},o.prototype.norm=function(){var h=this.x,u=this.y,d=this.z;return Math.sqrt(h*h+u*u+d*d)},o.prototype.length=o.prototype.norm,o.prototype.norm2=function(){return this.dot(this)},o.prototype.lengthSquared=o.prototype.norm2,o.prototype.distanceTo=function(h){var u=this.x,d=this.y,f=this.z,m=h.x,g=h.y,v=h.z;return Math.sqrt((m-u)*(m-u)+(g-d)*(g-d)+(v-f)*(v-f))},o.prototype.distanceSquared=function(h){var u=this.x,d=this.y,f=this.z,m=h.x,g=h.y,v=h.z;return(m-u)*(m-u)+(g-d)*(g-d)+(v-f)*(v-f)},o.prototype.mult=function(h,u){u=u||new o;var d=this.x,f=this.y,m=this.z;return u.x=h*d,u.y=h*f,u.z=h*m,u},o.prototype.scale=o.prototype.mult,o.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},o.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},o.prototype.negate=function(h){return h=h||new o,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var a=new o,l=new o;o.prototype.tangents=function(h,u){var d=this.norm();if(d>0){var f=a,m=1/d;f.set(this.x*m,this.y*m,this.z*m);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,u)}else h.set(1,0,0),u.set(0,1,0)},o.prototype.toString=function(){return this.x+","+this.y+","+this.z},o.prototype.toArray=function(){return[this.x,this.y,this.z]},o.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},o.prototype.lerp=function(h,u,d){var f=this.x,m=this.y,g=this.z;d.x=f+(h.x-f)*u,d.y=m+(h.y-m)*u,d.z=g+(h.z-g)*u},o.prototype.almostEquals=function(h,u){return u===void 0&&(u=1e-6),!(Math.abs(this.x-h.x)>u||Math.abs(this.y-h.y)>u||Math.abs(this.z-h.z)>u)},o.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var c=new o;o.prototype.isAntiparallelTo=function(h,u){return this.negate(c),c.almostEquals(h,u)},o.prototype.clone=function(){return new o(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=u;var r=t("../utils/EventTarget");t("../shapes/Shape");var o=t("../math/Vec3"),a=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var c=t("../collision/AABB"),h=t("../shapes/Box");function u(P){P=P||{},r.apply(this),this.id=u.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new o,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new o,P.position&&this.position.copy(P.position),this.previousPosition=new o,this.initPosition=new o,this.velocity=new o,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new o,this.force=new o;var H=typeof P.mass=="number"?P.mass:0;this.mass=H,this.invMass=H>0?1/H:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=H<=0?u.STATIC:u.DYNAMIC,typeof P.type==typeof u.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new o,this.quaternion=new l,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new l,this.angularVelocity=new o,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new o,this.interpolatedPosition=new o,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new o,this.invInertia=new o,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new o,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new c,this.aabbNeedsUpdate=!0,this.wlambda=new o,P.shape&&this.addShape(P.shape),this.updateMassProperties()}u.prototype=new r,u.prototype.constructor=u,u.DYNAMIC=1,u.STATIC=2,u.KINEMATIC=4,u.AWAKE=0,u.SLEEPY=1,u.SLEEPING=2,u.idCounter=0,u.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===u.SLEEPING&&this.dispatchEvent({type:"wakeup"})},u.prototype.sleep=function(){this.sleepState=u.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},u.sleepyEvent={type:"sleepy"},u.sleepEvent={type:"sleep"},u.prototype.sleepTick=function(P){if(this.allowSleep){var H=this.sleepState,F=this.velocity.norm2()+this.angularVelocity.norm2(),W=Math.pow(this.sleepSpeedLimit,2);H===u.AWAKE&&F<W?(this.sleepState=u.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(u.sleepyEvent)):H===u.SLEEPY&&F>W?this.wakeUp():H===u.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(u.sleepEvent))}},u.prototype.updateSolveMassProperties=function(){this.sleepState===u.SLEEPING||this.type===u.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},u.prototype.pointToLocalFrame=function(P,F){var F=F||new o;return P.vsub(this.position,F),this.quaternion.conjugate().vmult(F,F),F},u.prototype.vectorToLocalFrame=function(P,F){var F=F||new o;return this.quaternion.conjugate().vmult(P,F),F},u.prototype.pointToWorldFrame=function(P,F){var F=F||new o;return this.quaternion.vmult(P,F),F.vadd(this.position,F),F},u.prototype.vectorToWorldFrame=function(P,F){var F=F||new o;return this.quaternion.vmult(P,F),F};var d=new o,f=new l;u.prototype.addShape=function(P,H,F){var W=new o,k=new l;return H&&W.copy(H),F&&k.copy(F),this.shapes.push(P),this.shapeOffsets.push(W),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},u.prototype.updateBoundingRadius=function(){for(var P=this.shapes,H=this.shapeOffsets,F=P.length,W=0,k=0;k!==F;k++){var ie=P[k];ie.updateBoundingSphereRadius();var z=H[k].norm(),U=ie.boundingSphereRadius;z+U>W&&(W=z+U)}this.boundingRadius=W};var m=new c;u.prototype.computeAABB=function(){for(var P=this.shapes,H=this.shapeOffsets,F=this.shapeOrientations,W=P.length,k=d,ie=f,z=this.quaternion,U=this.aabb,J=m,q=0;q!==W;q++){var A=P[q];F[q].mult(z,ie),ie.vmult(H[q],k),k.vadd(this.position,k),A.calculateWorldAABB(k,ie,J.lowerBound,J.upperBound),q===0?U.copy(J):U.extend(J)}this.aabbNeedsUpdate=!1};var g=new a,v=new a;new a,u.prototype.updateInertiaWorld=function(P){var H=this.invInertia;if(!(H.x===H.y&&H.y===H.z&&!P)){var F=g,W=v;F.setRotationFromQuaternion(this.quaternion),F.transpose(W),F.scale(H,F),F.mmult(W,this.invInertiaWorld)}};var p=new o,x=new o;u.prototype.applyForce=function(P,H){if(this.type===u.DYNAMIC){var F=p;H.vsub(this.position,F);var W=x;F.cross(P,W),this.force.vadd(P,this.force),this.torque.vadd(W,this.torque)}};var y=new o,_=new o;u.prototype.applyLocalForce=function(P,H){if(this.type===u.DYNAMIC){var F=y,W=_;this.vectorToWorldFrame(P,F),this.pointToWorldFrame(H,W),this.applyForce(F,W)}};var S=new o,R=new o,T=new o;u.prototype.applyImpulse=function(P,H){if(this.type===u.DYNAMIC){var F=S;H.vsub(this.position,F);var W=R;W.copy(P),W.mult(this.invMass,W),this.velocity.vadd(W,this.velocity);var k=T;F.cross(P,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var D=new o,M=new o;u.prototype.applyLocalImpulse=function(P,H){if(this.type===u.DYNAMIC){var F=D,W=M;this.vectorToWorldFrame(P,F),this.pointToWorldFrame(H,W),this.applyImpulse(F,W)}};var E=new o;u.prototype.updateMassProperties=function(){var P=E;this.invMass=this.mass>0?1/this.mass:0;var H=this.inertia,F=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(P,this.mass,H),this.invInertia.set(H.x>0&&!F?1/H.x:0,H.y>0&&!F?1/H.y:0,H.z>0&&!F?1/H.z:0),this.updateInertiaWorld(!0)},u.prototype.getVelocityAtWorldPoint=function(P,H){var F=new o;return P.vsub(this.position,F),this.angularVelocity.cross(F,H),this.velocity.vadd(H,H),H}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var r=t("../math/Vec3"),o=t("../math/Quaternion");t("../collision/RaycastResult");var a=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=c;function c(z){this.chassisBody=z.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof z.indexRightAxis<"u"?z.indexRightAxis:1,this.indexForwardAxis=typeof z.indexForwardAxis<"u"?z.indexForwardAxis:0,this.indexUpAxis=typeof z.indexUpAxis<"u"?z.indexUpAxis:2}new r,new r,new r;var h=new r,u=new r,d=new r;new a,c.prototype.addWheel=function(z){z=z||{};var U=new l(z),J=this.wheelInfos.length;return this.wheelInfos.push(U),J},c.prototype.setSteeringValue=function(z,U){var J=this.wheelInfos[U];J.steering=z},new r,c.prototype.applyEngineForce=function(z,U){this.wheelInfos[U].engineForce=z},c.prototype.setBrake=function(z,U){this.wheelInfos[U].brake=z},c.prototype.addToWorld=function(z){this.constraints,z.add(this.chassisBody);var U=this;this.preStepCallback=function(){U.updateVehicle(z.dt)},z.addEventListener("preStep",this.preStepCallback),this.world=z},c.prototype.getVehicleAxisWorld=function(z,U){U.set(z===0?1:0,z===1?1:0,z===2?1:0),this.chassisBody.vectorToWorldFrame(U,U)},c.prototype.updateVehicle=function(z){for(var U=this.wheelInfos,J=U.length,q=this.chassisBody,A=0;A<J;A++)this.updateWheelTransform(A);this.currentVehicleSpeedKmHour=3.6*q.velocity.norm();var O=new r;this.getVehicleAxisWorld(this.indexForwardAxis,O),O.dot(q.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var A=0;A<J;A++)this.castRay(U[A]);this.updateSuspension(z);for(var B=new r,I=new r,A=0;A<J;A++){var C=U[A],K=C.suspensionForce;K>C.maxSuspensionForce&&(K=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(K*z,B),C.raycastResult.hitPointWorld.vsub(q.position,I),q.applyImpulse(B,C.raycastResult.hitPointWorld)}this.updateFriction(z);var oe=new r,re=new r,ee=new r;for(A=0;A<J;A++){var C=U[A];q.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,ee);var fe=1;switch(this.indexUpAxis){case 1:fe=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,re);var he=re.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(he,oe),re.vsub(oe,re);var N=re.dot(ee);C.deltaRotation=fe*N*z/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*z),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},c.prototype.updateSuspension=function(z){for(var U=this.chassisBody,J=U.mass,q=this.wheelInfos,A=q.length,O=0;O<A;O++){var B=q[O];if(B.isInContact){var I,C=B.suspensionRestLength,K=B.suspensionLength,oe=C-K;I=B.suspensionStiffness*oe*B.clippedInvContactDotSuspension;var re=B.suspensionRelativeVelocity,ee;re<0?ee=B.dampingCompression:ee=B.dampingRelaxation,I-=ee*re,B.suspensionForce=I*J,B.suspensionForce<0&&(B.suspensionForce=0)}else B.suspensionForce=0}},c.prototype.removeFromWorld=function(z){this.constraints,z.remove(this.chassisBody),z.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,m=new r;c.prototype.castRay=function(z){var U=f,J=m;this.updateWheelTransformWorld(z);var q=this.chassisBody,A=-1,O=z.suspensionRestLength+z.radius;z.directionWorld.scale(O,U);var B=z.chassisConnectionPointWorld;B.vadd(U,J);var I=z.raycastResult;I.reset();var C=q.collisionResponse;q.collisionResponse=!1,this.world.rayTest(B,J,I),q.collisionResponse=C;var K=I.body;if(z.raycastResult.groundObject=0,K){A=I.distance,z.raycastResult.hitNormalWorld=I.hitNormalWorld,z.isInContact=!0;var oe=I.distance;z.suspensionLength=oe-z.radius;var re=z.suspensionRestLength-z.maxSuspensionTravel,ee=z.suspensionRestLength+z.maxSuspensionTravel;z.suspensionLength<re&&(z.suspensionLength=re),z.suspensionLength>ee&&(z.suspensionLength=ee,z.raycastResult.reset());var fe=z.raycastResult.hitNormalWorld.dot(z.directionWorld),he=new r;q.getVelocityAtWorldPoint(z.raycastResult.hitPointWorld,he);var N=z.raycastResult.hitNormalWorld.dot(he);if(fe>=-.1)z.suspensionRelativeVelocity=0,z.clippedInvContactDotSuspension=1/.1;else{var le=-1/fe;z.suspensionRelativeVelocity=N*le,z.clippedInvContactDotSuspension=le}}else z.suspensionLength=z.suspensionRestLength+0*z.maxSuspensionTravel,z.suspensionRelativeVelocity=0,z.directionWorld.scale(-1,z.raycastResult.hitNormalWorld),z.clippedInvContactDotSuspension=1;return A},c.prototype.updateWheelTransformWorld=function(z){z.isInContact=!1;var U=this.chassisBody;U.pointToWorldFrame(z.chassisConnectionPointLocal,z.chassisConnectionPointWorld),U.vectorToWorldFrame(z.directionLocal,z.directionWorld),U.vectorToWorldFrame(z.axleLocal,z.axleWorld)},c.prototype.updateWheelTransform=function(z){var U=h,J=u,q=d,A=this.wheelInfos[z];this.updateWheelTransformWorld(A),A.directionLocal.scale(-1,U),J.copy(A.axleLocal),U.cross(J,q),q.normalize(),J.normalize();var O=A.steering,B=new o;B.setFromAxisAngle(U,O);var I=new o;I.setFromAxisAngle(J,A.rotation);var C=A.worldTransform.quaternion;this.chassisBody.quaternion.mult(B,C),C.mult(I,C),C.normalize();var K=A.worldTransform.position;K.copy(A.directionWorld),K.scale(A.suspensionLength,K),K.vadd(A.chassisConnectionPointWorld,K)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];c.prototype.getWheelTransformWorld=function(z){return this.wheelInfos[z].worldTransform};var v=new r,p=[],x=[],y=1;c.prototype.updateFriction=function(z){for(var U=v,J=this.wheelInfos,q=J.length,A=this.chassisBody,O=x,B=p,I=0;I<q;I++){var C=J[I],K=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,O[I]||(O[I]=new r),B[I]||(B[I]=new r)}for(var I=0;I<q;I++){var C=J[I],K=C.raycastResult.body;if(K){var oe=B[I],re=this.getWheelTransformWorld(I);re.vectorToWorldFrame(g[this.indexRightAxis],oe);var ee=C.raycastResult.hitNormalWorld,fe=oe.dot(ee);ee.scale(fe,U),oe.vsub(U,oe),oe.normalize(),ee.cross(oe,O[I]),O[I].normalize(),C.sideImpulse=ie(A,C.raycastResult.hitPointWorld,K,C.raycastResult.hitPointWorld,oe),C.sideImpulse*=y}}var he=1,N=.5;this.sliding=!1;for(var I=0;I<q;I++){var C=J[I],K=C.raycastResult.body,le=0;if(C.slipInfo=1,K){var te=0,$=C.brake?C.brake:te;le=T(A,K,C.raycastResult.hitPointWorld,O[I],$),le+=C.engineForce*z;var Q=$/le;C.slipInfo*=Q}if(C.forwardImpulse=0,C.skidInfo=1,K){C.skidInfo=1;var Ae=C.suspensionForce*z*C.frictionSlip,ye=Ae,Te=Ae*ye;C.forwardImpulse=le;var _e=C.forwardImpulse*N,qe=C.sideImpulse*he,Je=_e*_e+qe*qe;if(C.sliding=!1,Je>Te){this.sliding=!0,C.sliding=!0;var Q=Ae/Math.sqrt(Je);C.skidInfo*=Q}}}if(this.sliding)for(var I=0;I<q;I++){var C=J[I];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var I=0;I<q;I++){var C=J[I],L=new r;if(L.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var w=new r;O[I].scale(C.forwardImpulse,w),A.applyImpulse(w,L)}if(C.sideImpulse!==0){var K=C.raycastResult.body,ne=new r;ne.copy(C.raycastResult.hitPointWorld);var xe=new r;B[I].scale(C.sideImpulse,xe),A.pointToLocalFrame(L,L),L["xyz"[this.indexUpAxis]]*=C.rollInfluence,A.pointToWorldFrame(L,L),A.applyImpulse(xe,L),xe.scale(-1,xe),K.applyImpulse(xe,ne)}}};var _=new r,S=new r,R=new r;function T(z,U,J,q,A){var O=0,B=J,I=_,C=S,K=R;z.getVelocityAtWorldPoint(B,I),U.getVelocityAtWorldPoint(B,C),I.vsub(C,K);var oe=q.dot(K),re=H(z,J,q),ee=H(U,J,q),fe=1,he=fe/(re+ee);return O=-oe*he,A<O&&(O=A),O<-A&&(O=-A),O}var D=new r,M=new r,E=new r,P=new r;function H(z,U,J){var q=D,A=M,O=E,B=P;return U.vsub(z.position,q),q.cross(J,A),z.invInertiaWorld.vmult(A,B),B.cross(q,O),z.invMass+J.dot(O)}var F=new r,W=new r,k=new r;function ie(z,U,J,q,A,fe){var B=A.norm2();if(B>1.1)return 0;var I=F,C=W,K=k;z.getVelocityAtWorldPoint(U,I),J.getVelocityAtWorldPoint(q,C),I.vsub(C,K);var oe=A.dot(K),re=.2,ee=1/(z.invMass+J.invMass),fe=-re*oe*ee;return fe}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var r=t("./Body"),o=t("../shapes/Sphere"),a=t("../shapes/Box"),l=t("../math/Vec3"),c=t("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var m=new a(new l(5,2,.5));this.chassisBody=new r(1,m)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var m=f.body;m||(m=new r(1,new o(1.2))),this.wheelBodies.push(m),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,v=new l;this.chassisBody.pointToWorldFrame(g,v),m.position.set(v.x,v.y,v.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var x=new c(this.chassisBody,m,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,m){var g=this.wheelAxes[m],v=Math.cos(f),p=Math.sin(f),x=g.x,y=g.y;this.constraints[m].axisA.set(v*x-p*y,p*x+v*y,0)},h.prototype.setMotorSpeed=function(f,m){var g=this.constraints[m];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var m=this.constraints[f];m.disableMotor()};var u=new l;h.prototype.setWheelForce=function(f,m){this.wheelForces[m]=f},h.prototype.applyWheelForce=function(f,m){var g=this.wheelAxes[m],v=this.wheelBodies[m],p=v.torque;g.scale(f,u),v.vectorToWorldFrame(u,u),p.vadd(u,p)},h.prototype.addToWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),v=0;v<g.length;v++)f.add(g[v]);for(var v=0;v<m.length;v++)f.addConstraint(m[v]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,m=0;m<f.length;m++)this.applyWheelForce(f[m],m)},h.prototype.removeFromWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),v=0;v<g.length;v++)f.remove(g[v]);for(var v=0;v<m.length;v++)f.removeConstraint(m[v])};var d=new l;h.prototype.getWheelSpeed=function(f){var m=this.wheelAxes[f],g=this.wheelBodies[f],v=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(m,d),v.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=o,t("../shapes/Shape");var r=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function o(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}o.prototype.add=function(m){this.particles.push(m),this.neighbors.length<this.particles.length&&this.neighbors.push([])},o.prototype.remove=function(m){var g=this.particles.indexOf(m);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;o.prototype.getNeighbors=function(m,g){for(var v=this.particles.length,p=m.id,x=this.smoothingRadius*this.smoothingRadius,y=a,_=0;_!==v;_++){var S=this.particles[_];S.position.vsub(m.position,y),p!==S.id&&y.norm2()<x&&g.push(S)}};var l=new r,c=new r,h=new r,u=new r,d=new r,f=new r;o.prototype.update=function(){for(var m=this.particles.length,g=l,v=this.speedOfSound,p=this.eps,x=0;x!==m;x++){var y=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(y,_),_.push(this.particles[x]);for(var S=_.length,R=0,T=0;T!==S;T++){y.position.vsub(_[T].position,g);var D=g.norm(),M=this.w(D);R+=_[T].mass*M}this.densities[x]=R,this.pressures[x]=v*v*(this.densities[x]-this.density)}for(var E=c,P=h,H=u,F=d,W=f,x=0;x!==m;x++){var k=this.particles[x];E.set(0,0,0),P.set(0,0,0);for(var ie,z,_=this.neighbors[x],S=_.length,T=0;T!==S;T++){var U=_[T];k.position.vsub(U.position,F);var J=F.norm();ie=-U.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[T]/(this.densities[T]*this.densities[T]+p)),this.gradw(F,H),H.mult(ie,H),E.vadd(H,E),U.velocity.vsub(k.velocity,W),W.mult(1/(1e-4+this.densities[x]*this.densities[T])*this.viscosity*U.mass,W),z=this.nablaw(J),W.mult(z,W),P.vadd(W,P)}P.mult(k.mass,P),E.mult(k.mass,E),k.force.vadd(P,k.force),k.force.vadd(E,k.force)}},o.prototype.w=function(m){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-m*m,3)},o.prototype.gradw=function(m,g){var v=m.norm(),p=this.smoothingRadius;m.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-v*v,2),g)},o.prototype.nablaw=function(m){var g=this.smoothingRadius,v=945/(32*Math.PI*Math.pow(g,9))*(g*g-m*m)*(7*m*m-3*g*g);return v}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var r=t("../math/Vec3");n.exports=o;function o(x,y,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}o.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},o.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},o.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},o.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var a=new r,l=new r,c=new r,h=new r,u=new r,d=new r,f=new r,m=new r,g=new r,v=new r,p=new r;o.prototype.applyForce=function(){var x=this.stiffness,y=this.damping,_=this.restLength,S=this.bodyA,R=this.bodyB,T=a,D=l,M=c,E=h,P=p,H=u,F=d,W=f,k=m,ie=g,z=v;this.getWorldAnchorA(H),this.getWorldAnchorB(F),H.vsub(S.position,W),F.vsub(R.position,k),F.vsub(H,T);var U=T.norm();D.copy(T),D.normalize(),R.velocity.vsub(S.velocity,M),R.angularVelocity.cross(k,P),M.vadd(P,M),S.angularVelocity.cross(W,P),M.vsub(P,M),D.mult(-x*(U-_)-y*M.dot(D),E),S.force.vsub(E,S.force),R.force.vadd(E,R.force),W.cross(E,ie),k.cross(E,z),S.torque.vsub(ie,S.torque),R.torque.vadd(z,R.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var r=t("../math/Vec3"),o=t("../math/Transform"),a=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=c;function c(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new o,this.isInContact=!1}var u=new r,h=new r,u=new r;c.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var m=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,u);var g=f.hitNormalWorld.dot(u);if(m>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var v=-1/m;this.suspensionRelativeVelocity=g*v,this.clippedInvContactDotSuspension=v}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=l;var r=t("./Shape"),o=t("../math/Vec3"),a=t("./ConvexPolyhedron");function l(u){r.call(this),this.type=r.types.BOX,this.halfExtents=u,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var u=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,m=o,g=[new m(-u,-d,-f),new m(u,-d,-f),new m(u,d,-f),new m(-u,d,-f),new m(-u,-d,f),new m(u,-d,f),new m(u,d,f),new m(-u,d,f)],v=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new m(0,0,1),new m(0,1,0),new m(1,0,0);var p=new a(g,v);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(u,d){return d=d||new o,l.calculateInertia(this.halfExtents,u,d),d},l.calculateInertia=function(u,d,f){var m=u;f.x=1/12*d*(2*m.y*2*m.y+2*m.z*2*m.z),f.y=1/12*d*(2*m.x*2*m.x+2*m.z*2*m.z),f.z=1/12*d*(2*m.y*2*m.y+2*m.x*2*m.x)},l.prototype.getSideNormals=function(u,d){var f=u,m=this.halfExtents;if(f[0].set(m.x,0,0),f[1].set(0,m.y,0),f[2].set(0,0,m.z),f[3].set(-m.x,0,0),f[4].set(0,-m.y,0),f[5].set(0,0,-m.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var c=new o;new o,l.prototype.forEachWorldCorner=function(u,d,f){for(var m=this.halfExtents,g=[[m.x,m.y,m.z],[-m.x,m.y,m.z],[-m.x,-m.y,m.z],[-m.x,-m.y,-m.z],[m.x,-m.y,-m.z],[m.x,m.y,-m.z],[-m.x,m.y,-m.z],[m.x,-m.y,m.z]],v=0;v<g.length;v++)c.set(g[v][0],g[v][1],g[v][2]),d.vmult(c,c),u.vadd(c,c),f(c.x,c.y,c.z)};var h=[new o,new o,new o,new o,new o,new o,new o,new o];l.prototype.calculateWorldAABB=function(u,d,f,m){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var v=h[0];d.vmult(v,v),u.vadd(v,v),m.copy(v),f.copy(v);for(var p=1;p<8;p++){var v=h[p];d.vmult(v,v),u.vadd(v,v);var x=v.x,y=v.y,_=v.z;x>m.x&&(m.x=x),y>m.y&&(m.y=y),_>m.z&&(m.z=_),x<f.x&&(f.x=x),y<f.y&&(f.y=y),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=l;var r=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var a=t("../math/Transform");function l(A,O,B){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=A||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=O||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=B?B.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var c=new o;l.prototype.computeEdges=function(){var A=this.faces,O=this.vertices;O.length;var B=this.uniqueEdges;B.length=0;for(var I=c,C=0;C!==A.length;C++)for(var K=A[C],oe=K.length,re=0;re!==oe;re++){var ee=(re+1)%oe;O[K[re]].vsub(O[K[ee]],I),I.normalize();for(var fe=!1,he=0;he!==B.length;he++)if(B[he].almostEquals(I)||B[he].almostEquals(I)){fe=!0;break}fe||B.push(I.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var A=0;A<this.faces.length;A++){for(var O=0;O<this.faces[A].length;O++)if(!this.vertices[this.faces[A][O]])throw new Error("Vertex "+this.faces[A][O]+" not found!");var B=this.faceNormals[A]||new o;this.getFaceNormal(A,B),B.negate(B),this.faceNormals[A]=B;var I=this.vertices[this.faces[A][0]];if(B.dot(I)<0){console.error(".faceNormals["+A+"] = Vec3("+B.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var O=0;O<this.faces[A].length;O++)console.warn(".vertices["+this.faces[A][O]+"] = Vec3("+this.vertices[this.faces[A][O]].toString()+")")}}};var h=new o,u=new o;l.computeNormal=function(A,O,B,I){O.vsub(A,u),B.vsub(O,h),h.cross(u,I),I.isZero()||I.normalize()},l.prototype.getFaceNormal=function(A,O){var B=this.faces[A],I=this.vertices[B[0]],C=this.vertices[B[1]],K=this.vertices[B[2]];return l.computeNormal(I,C,K,O)};var d=new o;l.prototype.clipAgainstHull=function(A,O,B,I,C,K,oe,re,ee){for(var fe=d,he=-1,N=-Number.MAX_VALUE,le=0;le<B.faces.length;le++){fe.copy(B.faceNormals[le]),C.vmult(fe,fe);var te=fe.dot(K);te>N&&(N=te,he=le)}for(var $=[],Q=B.faces[he],Ae=Q.length,ye=0;ye<Ae;ye++){var Te=B.vertices[Q[ye]],_e=new o;_e.copy(Te),C.vmult(_e,_e),I.vadd(_e,_e),$.push(_e)}he>=0&&this.clipFaceAgainstHull(K,A,O,$,oe,re,ee)};var f=new o,m=new o,g=new o,v=new o,p=new o,x=new o;l.prototype.findSeparatingAxis=function(A,O,B,I,C,K,oe,re){var ee=f,fe=m,he=g,N=v,le=p,te=x,$=Number.MAX_VALUE,Q=this;if(Q.uniqueAxes)for(var ye=0;ye!==Q.uniqueAxes.length;ye++){B.vmult(Q.uniqueAxes[ye],ee);var _e=Q.testSepAxis(ee,A,O,B,I,C);if(_e===!1)return!1;_e<$&&($=_e,K.copy(ee))}else for(var Ae=oe?oe.length:Q.faces.length,ye=0;ye<Ae;ye++){var Te=oe?oe[ye]:ye;ee.copy(Q.faceNormals[Te]),B.vmult(ee,ee);var _e=Q.testSepAxis(ee,A,O,B,I,C);if(_e===!1)return!1;_e<$&&($=_e,K.copy(ee))}if(A.uniqueAxes)for(var ye=0;ye!==A.uniqueAxes.length;ye++){C.vmult(A.uniqueAxes[ye],fe);var _e=Q.testSepAxis(fe,A,O,B,I,C);if(_e===!1)return!1;_e<$&&($=_e,K.copy(fe))}else for(var qe=re?re.length:A.faces.length,ye=0;ye<qe;ye++){var Te=re?re[ye]:ye;fe.copy(A.faceNormals[Te]),C.vmult(fe,fe);var _e=Q.testSepAxis(fe,A,O,B,I,C);if(_e===!1)return!1;_e<$&&($=_e,K.copy(fe))}for(var Je=0;Je!==Q.uniqueEdges.length;Je++){B.vmult(Q.uniqueEdges[Je],N);for(var L=0;L!==A.uniqueEdges.length;L++)if(C.vmult(A.uniqueEdges[L],le),N.cross(le,te),!te.almostZero()){te.normalize();var w=Q.testSepAxis(te,A,O,B,I,C);if(w===!1)return!1;w<$&&($=w,K.copy(te))}}return I.vsub(O,he),he.dot(K)>0&&K.negate(K),!0};var y=[],_=[];l.prototype.testSepAxis=function(A,O,B,I,C,K){var oe=this;l.project(oe,A,B,I,y),l.project(O,A,C,K,_);var re=y[0],ee=y[1],fe=_[0],he=_[1],N=re-he,le=fe-ee,te=N<le?N:le;return te};var S=new o,R=new o;l.prototype.calculateLocalInertia=function(A,O){this.computeLocalAABB(S,R);var B=R.x-S.x,I=R.y-S.y,C=R.z-S.z;O.x=1/12*A*(2*I*2*I+2*C*2*C),O.y=1/12*A*(2*B*2*B+2*C*2*C),O.z=1/12*A*(2*I*2*I+2*B*2*B)},l.prototype.getPlaneConstantOfFace=function(A){var O=this.faces[A],B=this.faceNormals[A],I=this.vertices[O[0]],C=-B.dot(I);return C};var T=new o,D=new o,M=new o,E=new o,P=new o,H=new o,F=new o,W=new o;l.prototype.clipFaceAgainstHull=function(A,O,B,I,C,K,oe){for(var re=T,ee=D,fe=M,he=E,N=P,le=H,te=F,$=W,Q=this,Ae=[],ye=I,Te=Ae,_e=-1,qe=Number.MAX_VALUE,Je=0;Je<Q.faces.length;Je++){re.copy(Q.faceNormals[Je]),B.vmult(re,re);var L=re.dot(A);L<qe&&(qe=L,_e=Je)}if(!(_e<0)){var w=Q.faces[_e];w.connectedFaces=[];for(var ne=0;ne<Q.faces.length;ne++)for(var xe=0;xe<Q.faces[ne].length;xe++)w.indexOf(Q.faces[ne][xe])!==-1&&ne!==_e&&w.connectedFaces.indexOf(ne)===-1&&w.connectedFaces.push(ne);ye.length;for(var ve=w.length,Me=0;Me<ve;Me++){var Xe=Q.vertices[w[Me]],we=Q.vertices[w[(Me+1)%ve]];Xe.vsub(we,ee),fe.copy(ee),B.vmult(fe,fe),O.vadd(fe,fe),he.copy(this.faceNormals[_e]),B.vmult(he,he),O.vadd(he,he),fe.cross(he,N),N.negate(N),le.copy(Xe),B.vmult(le,le),O.vadd(le,le),-le.dot(N);var ge;{var ue=w.connectedFaces[Me];te.copy(this.faceNormals[ue]);var G=this.getPlaneConstantOfFace(ue);$.copy(te),B.vmult($,$);var ge=G-$.dot(O)}for(this.clipFaceAgainstPlane(ye,Te,$,ge);ye.length;)ye.shift();for(;Te.length;)ye.push(Te.shift())}te.copy(this.faceNormals[_e]);var G=this.getPlaneConstantOfFace(_e);$.copy(te),B.vmult($,$);for(var ge=G-$.dot(O),ne=0;ne<ye.length;ne++){var Ue=$.dot(ye[ne])+ge;if(Ue<=C&&(console.log("clamped: depth="+Ue+" to minDist="+(C+"")),Ue=C),Ue<=K){var Ne=ye[ne];if(Ue<=0){var Oe={point:Ne,normal:$,depth:Ue};oe.push(Oe)}}}}},l.prototype.clipFaceAgainstPlane=function(A,O,B,I){var C,K,oe=A.length;if(oe<2)return O;var re=A[A.length-1],ee=A[0];C=B.dot(re)+I;for(var fe=0;fe<oe;fe++){if(ee=A[fe],K=B.dot(ee)+I,C<0)if(K<0){var he=new o;he.copy(ee),O.push(he)}else{var he=new o;re.lerp(ee,C/(C-K),he),O.push(he)}else if(K<0){var he=new o;re.lerp(ee,C/(C-K),he),O.push(he),O.push(ee)}re=ee,C=K}return O},l.prototype.computeWorldVertices=function(A,O){for(var B=this.vertices.length;this.worldVertices.length<B;)this.worldVertices.push(new o);for(var I=this.vertices,C=this.worldVertices,K=0;K!==B;K++)O.vmult(I[K],C[K]),A.vadd(C[K],C[K]);this.worldVerticesNeedsUpdate=!1},new o,l.prototype.computeLocalAABB=function(A,O){var B=this.vertices.length,I=this.vertices;A.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),O.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<B;C++){var K=I[C];K.x<A.x?A.x=K.x:K.x>O.x&&(O.x=K.x),K.y<A.y?A.y=K.y:K.y>O.y&&(O.y=K.y),K.z<A.z?A.z=K.z:K.z>O.z&&(O.z=K.z)}},l.prototype.computeWorldFaceNormals=function(A){for(var O=this.faceNormals.length;this.worldFaceNormals.length<O;)this.worldFaceNormals.push(new o);for(var B=this.faceNormals,I=this.worldFaceNormals,C=0;C!==O;C++)A.vmult(B[C],I[C]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var A=0,O=this.vertices,B=0,I=O.length;B!==I;B++){var C=O[B].norm2();C>A&&(A=C)}this.boundingSphereRadius=Math.sqrt(A)};var k=new o;l.prototype.calculateWorldAABB=function(A,O,B,I){for(var C=this.vertices.length,K=this.vertices,oe,re,ee,fe,he,N,le=0;le<C;le++){k.copy(K[le]),O.vmult(k,k),A.vadd(k,k);var te=k;te.x<oe||oe===void 0?oe=te.x:(te.x>fe||fe===void 0)&&(fe=te.x),te.y<re||re===void 0?re=te.y:(te.y>he||he===void 0)&&(he=te.y),te.z<ee||ee===void 0?ee=te.z:(te.z>N||N===void 0)&&(N=te.z)}B.set(oe,re,ee),I.set(fe,he,N)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(A){A=A||new o;for(var O=this.vertices.length,B=this.vertices,I=0;I<O;I++)A.vadd(B[I],A);return A.mult(1/O,A),A},l.prototype.transformAllPoints=function(A,O){var B=this.vertices.length,I=this.vertices;if(O){for(var C=0;C<B;C++){var K=I[C];O.vmult(K,K)}for(var C=0;C<this.faceNormals.length;C++){var K=this.faceNormals[C];O.vmult(K,K)}}if(A)for(var C=0;C<B;C++){var K=I[C];K.vadd(A,K)}};var ie=new o,z=new o,U=new o;l.prototype.pointIsInside=function(A){var O=this.vertices.length,B=this.vertices,I=this.faces,C=this.faceNormals,K=null,oe=this.faces.length,re=ie;this.getAveragePointLocal(re);for(var ee=0;ee<oe;ee++){this.faces[ee].length;var O=C[ee],fe=B[I[ee][0]],he=z;A.vsub(fe,he);var N=O.dot(he),le=U;re.vsub(fe,le);var te=O.dot(le);if(N<0&&te>0||N>0&&te<0)return!1}return K?1:-1},new o;var J=new o,q=new o;l.project=function(A,O,B,I,C){var K=A.vertices.length,oe=J,re=0,ee=0,fe=q,he=A.vertices;fe.setZero(),a.vectorToLocalFrame(B,I,O,oe),a.pointToLocalFrame(B,I,fe,fe);var N=fe.dot(oe);ee=re=he[0].dot(oe);for(var le=1;le<K;le++){var te=he[le].dot(oe);te>re&&(re=te),te<ee&&(ee=te)}if(ee-=N,re-=N,ee>re){var $=ee;ee=re,re=$}C[0]=re,C[1]=ee}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=l;var r=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var a=t("./ConvexPolyhedron");function l(c,h,u,d){var f=d,m=[],g=[],v=[],p=[],x=[],y=Math.cos,_=Math.sin;m.push(new o(h*y(0),h*_(0),-u*.5)),p.push(0),m.push(new o(c*y(0),c*_(0),u*.5)),x.push(1);for(var S=0;S<f;S++){var R=2*Math.PI/f*(S+1),T=2*Math.PI/f*(S+.5);S<f-1?(m.push(new o(h*y(R),h*_(R),-u*.5)),p.push(2*S+2),m.push(new o(c*y(R),c*_(R),u*.5)),x.push(2*S+3),v.push([2*S+2,2*S+3,2*S+1,2*S])):v.push([0,1,2*S+1,2*S]),(f%2===1||S<f/2)&&g.push(new o(y(T),_(T),0))}v.push(x),g.push(new o(0,0,1));for(var D=[],S=0;S<p.length;S++)D.push(p[p.length-S-1]);v.push(D),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,m,v,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var r=t("./Shape"),o=t("./ConvexPolyhedron"),a=t("../math/Vec3"),l=t("../utils/Utils");n.exports=c;function c(h,u){u=l.defaults(u,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=u.maxValue,this.minValue=u.minValue,this.elementSize=u.elementSize,u.minValue===null&&this.updateMinValue(),u.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new o,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}c.prototype=new r,c.prototype.update=function(){this._cachedPillars={}},c.prototype.updateMinValue=function(){for(var h=this.data,u=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var m=h[d][f];m<u&&(u=m)}this.minValue=u},c.prototype.updateMaxValue=function(){for(var h=this.data,u=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var m=h[d][f];m>u&&(u=m)}this.maxValue=u},c.prototype.setHeightValueAtIndex=function(h,u,d){var f=this.data;f[h][u]=d,this.clearCachedConvexTrianglePillar(h,u,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,u,!0),this.clearCachedConvexTrianglePillar(h-1,u,!1)),u>0&&(this.clearCachedConvexTrianglePillar(h,u-1,!0),this.clearCachedConvexTrianglePillar(h,u-1,!1)),u>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,u-1,!0)},c.prototype.getRectMinMax=function(h,u,d,f,m){m=m||[];for(var g=this.data,v=this.minValue,p=h;p<=d;p++)for(var x=u;x<=f;x++){var y=g[p][x];y>v&&(v=y)}m[0]=this.minValue,m[1]=v},c.prototype.getIndexOfPosition=function(h,u,d,f){var m=this.elementSize,g=this.data,v=Math.floor(h/m),p=Math.floor(u/m);return d[0]=v,d[1]=p,f&&(v<0&&(v=0),p<0&&(p=0),v>=g.length-1&&(v=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(v<0||p<0||v>=g.length-1||p>=g[0].length-1)},c.prototype.getHeightAt=function(h,u,d){var f=[];this.getIndexOfPosition(h,u,f,d);var m=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,m),(m[0]+m[1])/2},c.prototype.getCacheConvexTrianglePillarKey=function(h,u,d){return h+"_"+u+"_"+(d?1:0)},c.prototype.getCachedConvexTrianglePillar=function(h,u,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,d)]},c.prototype.setCachedConvexTrianglePillar=function(h,u,d,f,m){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,d)]={convex:f,offset:m}},c.prototype.clearCachedConvexTrianglePillar=function(h,u,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,d)]},c.prototype.getConvexTrianglePillar=function(h,u,d){var f=this.pillarConvex,m=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,u,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new o,m=new a,this.pillarConvex=f,this.pillarOffset=m}var g=this.data,v=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new a);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var y=f.vertices,_=(Math.min(g[h][u],g[h+1][u],g[h][u+1],g[h+1][u+1])-this.minValue)/2+this.minValue;d?(m.set((h+.75)*v,(u+.75)*v,_),y[0].set(.25*v,.25*v,g[h+1][u+1]-_),y[1].set(-.75*v,.25*v,g[h][u+1]-_),y[2].set(.25*v,-.75*v,g[h+1][u]-_),y[3].set(.25*v,.25*v,-_-1),y[4].set(-.75*v,.25*v,-_-1),y[5].set(.25*v,-.75*v,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(m.set((h+.25)*v,(u+.25)*v,_),y[0].set(-.25*v,-.25*v,g[h][u]-_),y[1].set(.75*v,-.25*v,g[h+1][u]-_),y[2].set(-.25*v,.75*v,g[h][u+1]-_),y[3].set(-.25*v,-.25*v,-_-1),y[4].set(.75*v,-.25*v,-_-1),y[5].set(-.25*v,.75*v,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,u,d,f,m)},c.prototype.calculateLocalInertia=function(h,u){return u=u||new a,u.set(0,0,0),u},c.prototype.volume=function(){return Number.MAX_VALUE},c.prototype.calculateWorldAABB=function(h,u,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},c.prototype.updateBoundingSphereRadius=function(){var h=this.data,u=this.elementSize;this.boundingSphereRadius=new a(h.length*u,h[0].length*u,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=a;var r=t("./Shape"),o=t("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,c){return c=c||new o,c.set(0,0,0),c},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,c,h,u){h.copy(l),u.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=a;var r=t("./Shape"),o=t("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new o,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(c){var h=this.worldNormal;h.set(0,0,1),c.vmult(h,h),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(c,h){return h=h||new o,h},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new o;a.prototype.calculateWorldAABB=function(c,h,u,d){l.set(0,0,1),h.vmult(l,l);var f=Number.MAX_VALUE;u.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=c.x),l.y===1&&(d.y=c.y),l.z===1&&(d.z=c.z),l.x===-1&&(u.x=c.x),l.y===-1&&(u.y=c.y),l.z===-1&&(u.z=c.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=r;var r=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(o,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=a;var r=t("./Shape"),o=t("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,c){c=c||new o;var h=2*l*this.radius*this.radius/5;return c.x=h,c.y=h,c.z=h,c},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,c,h,u){for(var d=this.radius,f=["x","y","z"],m=0;m<f.length;m++){var g=f[m];h[g]=l[g]-d,u[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=h;var r=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var a=t("../math/Transform"),l=t("../collision/AABB"),c=t("../utils/Octree");function h(D,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new l,this.edges=null,this.scale=new o(1,1,1),this.tree=new c,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var u=new o;h.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var M=this.scale;D.aabb.lowerBound.x*=1/M.x,D.aabb.lowerBound.y*=1/M.y,D.aabb.lowerBound.z*=1/M.z,D.aabb.upperBound.x*=1/M.x,D.aabb.upperBound.y*=1/M.y,D.aabb.upperBound.z*=1/M.z;for(var E=new l,P=new o,H=new o,F=new o,W=[P,H,F],k=0;k<this.indices.length/3;k++){var ie=k*3;this._getUnscaledVertex(this.indices[ie],P),this._getUnscaledVertex(this.indices[ie+1],H),this._getUnscaledVertex(this.indices[ie+2],F),E.setFromPoints(W),D.insert(E,k)}D.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(D,M){d.copy(D);var E=this.scale,P=E.x,H=E.y,F=E.z,W=d.lowerBound,k=d.upperBound;return W.x/=P,W.y/=H,W.z/=F,k.x/=P,k.y/=H,k.z/=F,this.tree.aabbQuery(d,M)},h.prototype.setScale=function(D){var M=this.scale.x===this.scale.y===this.scale.z,E=D.x===D.y===D.z;M&&E||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var D=u,M=this.normals,E=0;E<this.indices.length/3;E++){var P=E*3,H=this.indices[P],F=this.indices[P+1],W=this.indices[P+2];this.getVertex(H,p),this.getVertex(F,x),this.getVertex(W,y),h.computeNormal(x,p,y,D),M[P]=D.x,M[P+1]=D.y,M[P+2]=D.z}},h.prototype.updateEdges=function(){for(var D={},M=function(ie,z){var U=H<F?H+"_"+F:F+"_"+H;D[U]=!0},E=0;E<this.indices.length/3;E++){var P=E*3,H=this.indices[P],F=this.indices[P+1];this.indices[P+2],M(),M(),M()}var W=Object.keys(D);this.edges=new Int16Array(W.length*2);for(var E=0;E<W.length;E++){var k=W[E].split("_");this.edges[2*E]=parseInt(k[0],10),this.edges[2*E+1]=parseInt(k[1],10)}},h.prototype.getEdgeVertex=function(D,M,E){var P=this.edges[D*2+(M?1:0)];this.getVertex(P,E)};var f=new o,m=new o;h.prototype.getEdgeVector=function(D,M){var E=f,P=m;this.getEdgeVertex(D,0,E),this.getEdgeVertex(D,1,P),P.vsub(E,M)};var g=new o,v=new o;h.computeNormal=function(D,M,E,P){M.vsub(D,v),E.vsub(M,g),g.cross(v,P),P.isZero()||P.normalize()};var p=new o,x=new o,y=new o;h.prototype.getVertex=function(D,M){var E=this.scale;return this._getUnscaledVertex(D,M),M.x*=E.x,M.y*=E.y,M.z*=E.z,M},h.prototype._getUnscaledVertex=function(D,M){var E=D*3,P=this.vertices;return M.set(P[E],P[E+1],P[E+2])},h.prototype.getWorldVertex=function(D,M,E,P){return this.getVertex(D,P),a.pointToWorldFrame(M,E,P,P),P},h.prototype.getTriangleVertices=function(D,M,E,P){var H=D*3;this.getVertex(this.indices[H],M),this.getVertex(this.indices[H+1],E),this.getVertex(this.indices[H+2],P)},h.prototype.getNormal=function(D,M){var E=D*3;return M.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var _=new l;h.prototype.calculateLocalInertia=function(D,M){this.computeLocalAABB(_);var E=_.upperBound.x-_.lowerBound.x,P=_.upperBound.y-_.lowerBound.y,H=_.upperBound.z-_.lowerBound.z;return M.set(1/12*D*(2*P*2*P+2*H*2*H),1/12*D*(2*E*2*E+2*H*2*H),1/12*D*(2*P*2*P+2*E*2*E))};var S=new o;h.prototype.computeLocalAABB=function(D){var M=D.lowerBound,E=D.upperBound,P=this.vertices.length;this.vertices;var H=S;this.getVertex(0,H),M.copy(H),E.copy(H);for(var F=0;F!==P;F++)this.getVertex(F,H),H.x<M.x?M.x=H.x:H.x>E.x&&(E.x=H.x),H.y<M.y?M.y=H.y:H.y>E.y&&(E.y=H.y),H.z<M.z?M.z=H.z:H.z>E.z&&(E.z=H.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var D=0,M=this.vertices,E=new o,P=0,H=M.length/3;P!==H;P++){this.getVertex(P,E);var F=E.norm2();F>D&&(D=F)}this.boundingSphereRadius=Math.sqrt(D)},new o;var R=new a,T=new l;h.prototype.calculateWorldAABB=function(D,M,E,P){var H=R,F=T;H.position=D,H.quaternion=M,this.aabb.toWorldFrame(H,F),E.copy(F.lowerBound),P.copy(F.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(D,M,E,P,H){D=D||1,M=M||.5,E=E||8,P=P||6,H=H||Math.PI*2;for(var F=[],W=[],k=0;k<=E;k++)for(var ie=0;ie<=P;ie++){var z=ie/P*H,U=k/E*Math.PI*2,J=(D+M*Math.cos(U))*Math.cos(z),q=(D+M*Math.cos(U))*Math.sin(z),A=M*Math.sin(U);F.push(J,q,A)}for(var k=1;k<=E;k++)for(var ie=1;ie<=P;ie++){var O=(P+1)*k+ie-1,B=(P+1)*(k-1)+ie-1,I=(P+1)*(k-1)+ie,C=(P+1)*k+ie;W.push(O,B,C),W.push(B,I,C)}return new h(F,W)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver");function o(){r.call(this),this.iterations=10,this.tolerance=1e-7}o.prototype=new r;var a=[],l=[],c=[];o.prototype.solve=function(h,u){var d=0,f=this.iterations,m=this.tolerance*this.tolerance,g=this.equations,v=g.length,p=u.bodies,x=p.length,y=h,_,S,R,T,D,M;if(v!==0)for(var E=0;E!==x;E++)p[E].updateSolveMassProperties();var P=l,H=c,F=a;P.length=v,H.length=v,F.length=v;for(var E=0;E!==v;E++){var W=g[E];F[E]=0,H[E]=W.computeB(y),P[E]=1/W.computeC()}if(v!==0){for(var E=0;E!==x;E++){var k=p[E],ie=k.vlambda,z=k.wlambda;ie.set(0,0,0),z&&z.set(0,0,0)}for(d=0;d!==f;d++){T=0;for(var U=0;U!==v;U++){var W=g[U];_=H[U],S=P[U],M=F[U],D=W.computeGWlambda(),R=S*(_-D-W.eps*M),M+R<W.minForce?R=W.minForce-M:M+R>W.maxForce&&(R=W.maxForce-M),F[U]+=R,T+=R>0?R:-R,W.addToWlambda(R)}if(T*T<m)break}for(var E=0;E!==x;E++){var k=p[E],J=k.velocity,q=k.angularVelocity;J.vadd(k.vlambda,J),q&&q.vadd(k.wlambda,q)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(o,a){return 0},r.prototype.addEquation=function(o){o.enabled&&this.equations.push(o)},r.prototype.removeEquation=function(o){var a=this.equations,l=a.indexOf(o);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=a,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver"),o=t("../objects/Body");function a(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],c=[],h={bodies:[]},u=o.STATIC;function d(p){for(var x=p.length,y=0;y!==x;y++){var _=p[y];if(!_.visited&&!(_.body.type&u))return _}return!1}var f=[];function m(p,x,y,_){for(f.push(p),p.visited=!0,x(p,y,_);f.length;)for(var S=f.pop(),R;R=d(S.children);)R.visited=!0,x(R,y,_),f.push(R)}function g(p,x,y){x.push(p.body);for(var _=p.eqs.length,S=0;S!==_;S++){var R=p.eqs[S];y.indexOf(R)===-1&&y.push(R)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,x){for(var y=l,_=this.nodePool,S=x.bodies,R=this.equations,T=R.length,D=S.length,M=this.subsolver;_.length<D;)_.push(this.createNode());y.length=D;for(var E=0;E<D;E++)y[E]=_[E];for(var E=0;E!==D;E++){var P=y[E];P.body=S[E],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var H=0;H!==T;H++){var F=R[H],E=S.indexOf(F.bi),W=S.indexOf(F.bj),k=y[E],ie=y[W];k.children.push(ie),k.eqs.push(F),ie.children.push(k),ie.eqs.push(F)}var z,U=0,J=c;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var q=h;z=d(y);){J.length=0,q.bodies.length=0,m(z,g,q.bodies,J);var A=J.length;J=J.sort(v);for(var E=0;E!==A;E++)M.addEquation(J[E]);M.solve(p,q),M.removeAllEquations(),U++}return U};function v(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(o,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[o]===void 0&&(l[o]=[]),l[o].indexOf(a)===-1&&l[o].push(a),this},hasEventListener:function(o,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[o]!==void 0&&l[o].indexOf(a)!==-1},removeEventListener:function(o,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[o]===void 0)return this;var c=l[o].indexOf(a);return c!==-1&&l[o].splice(c,1),this},dispatchEvent:function(o){if(this._listeners===void 0)return this;var a=this._listeners,l=a[o.type];if(l!==void 0){o.target=this;for(var c=0,h=l.length;c<h;c++)l[c].call(this,o)}return this}}},{}],50:[function(t,n,i){var r=t("../collision/AABB"),o=t("../math/Vec3");n.exports=l;function a(u){u=u||{},this.root=u.root||null,this.aabb=u.aabb?u.aabb.clone():new r,this.data=[],this.children=[]}function l(u,d){d=d||{},d.root=null,d.aabb=u,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(u,d){this.children.length=this.data.length=0},a.prototype.insert=function(u,d,f){var m=this.data;if(f=f||0,!this.aabb.contains(u))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var v=!1;g.length||(this.subdivide(),v=!0);for(var p=0;p!==8;p++)if(g[p].insert(u,d,f+1))return!0;v&&(g.length=0)}return m.push(d),!0};var c=new o;a.prototype.subdivide=function(){var u=this.aabb,d=u.lowerBound,f=u.upperBound,m=this.children;m.push(new a({aabb:new r({lowerBound:new o(0,0,0)})}),new a({aabb:new r({lowerBound:new o(1,0,0)})}),new a({aabb:new r({lowerBound:new o(1,1,0)})}),new a({aabb:new r({lowerBound:new o(1,1,1)})}),new a({aabb:new r({lowerBound:new o(0,1,1)})}),new a({aabb:new r({lowerBound:new o(0,0,1)})}),new a({aabb:new r({lowerBound:new o(1,0,1)})}),new a({aabb:new r({lowerBound:new o(0,1,0)})})),f.vsub(d,c),c.scale(.5,c);for(var g=this.root||this,v=0;v!==8;v++){var p=m[v];p.root=g;var x=p.aabb.lowerBound;x.x*=c.x,x.y*=c.y,x.z*=c.z,x.vadd(d,x),x.vadd(c,p.aabb.upperBound)}},a.prototype.aabbQuery=function(u,d){this.data,this.children;for(var f=[this];f.length;){var m=f.pop();m.aabb.overlaps(u)&&Array.prototype.push.apply(d,m.data),Array.prototype.push.apply(f,m.children)}return d};var h=new r;a.prototype.rayQuery=function(u,d,f){return u.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},a.prototype.removeEmptyNodes=function(){for(var u=[this];u.length;){for(var d=u.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(u,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var o=arguments.length,a=0;a!==o;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(o,a){if(o>a){var l=a;a=o,o=l}return this.data[o+"-"+a]},r.prototype.set=function(o,a,l){if(o>a){var c=a;a=o,o=c}var h=o+"-"+a;this.get(o,a)||this.data.keys.push(h),this.data[h]=l},r.prototype.reset=function(){for(var o=this.data,a=o.keys;a.length>0;){var l=a.pop();delete o[l]}}},{}],53:[function(t,n,i){function r(){}n.exports=r,r.defaults=function(o,a){o=o||{};for(var l in a)l in o||(o[l]=a[l]);return o}},{}],54:[function(t,n,i){n.exports=a;var r=t("../math/Vec3"),o=t("./Pool");function a(){o.call(this),this.type=r}a.prototype=new o,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=m;var r=t("../collision/AABB"),o=t("../shapes/Shape"),a=t("../collision/Ray"),l=t("../math/Vec3"),c=t("../math/Transform");t("../shapes/ConvexPolyhedron");var h=t("../math/Quaternion");t("../solver/Solver");var u=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function m(pe){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new u,this.world=pe,this.currentContactMaterial=null,this.enableFrictionReduction=!1}m.prototype.createContactEquation=function(pe,me,Ee,be,$e,ke){var Ie;this.contactPointPool.length?(Ie=this.contactPointPool.pop(),Ie.bi=pe,Ie.bj=me):Ie=new d(pe,me),Ie.enabled=pe.collisionResponse&&me.collisionResponse&&Ee.collisionResponse&&be.collisionResponse;var ze=this.currentContactMaterial;Ie.restitution=ze.restitution,Ie.setSpookParams(ze.contactEquationStiffness,ze.contactEquationRelaxation,this.world.dt);var ce=Ee.material||pe.material,De=be.material||me.material;return ce&&De&&ce.restitution>=0&&De.restitution>=0&&(Ie.restitution=ce.restitution*De.restitution),Ie.si=$e||Ee,Ie.sj=ke||be,Ie},m.prototype.createFrictionEquationsFromContact=function(pe,me){var Ee=pe.bi,be=pe.bj,$e=pe.si,ke=pe.sj,Ie=this.world,ze=this.currentContactMaterial,ce=ze.friction,De=$e.material||Ee.material,He=ke.material||be.material;if(De&&He&&De.friction>=0&&He.friction>=0&&(ce=De.friction*He.friction),ce>0){var je=ce*Ie.gravity.length(),b=Ee.invMass+be.invMass;b>0&&(b=1/b);var V=this.frictionEquationPool,Y=V.length?V.pop():new f(Ee,be,je*b),Z=V.length?V.pop():new f(Ee,be,je*b);return Y.bi=Z.bi=Ee,Y.bj=Z.bj=be,Y.minForce=Z.minForce=-je*b,Y.maxForce=Z.maxForce=je*b,Y.ri.copy(pe.ri),Y.rj.copy(pe.rj),Z.ri.copy(pe.ri),Z.rj.copy(pe.rj),pe.ni.tangents(Y.t,Z.t),Y.setSpookParams(ze.frictionEquationStiffness,ze.frictionEquationRelaxation,Ie.dt),Z.setSpookParams(ze.frictionEquationStiffness,ze.frictionEquationRelaxation,Ie.dt),Y.enabled=Z.enabled=pe.enabled,me.push(Y,Z),!0}return!1};var g=new l,v=new l,p=new l;m.prototype.createFrictionFromAverage=function(pe){var me=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(me,this.frictionResult)||pe===1)){var Ee=this.frictionResult[this.frictionResult.length-2],be=this.frictionResult[this.frictionResult.length-1];g.setZero(),v.setZero(),p.setZero();var $e=me.bi;me.bj;for(var ke=0;ke!==pe;ke++)me=this.result[this.result.length-1-ke],me.bodyA!==$e?(g.vadd(me.ni,g),v.vadd(me.ri,v),p.vadd(me.rj,p)):(g.vsub(me.ni,g),v.vadd(me.rj,v),p.vadd(me.ri,p));var Ie=1/pe;v.scale(Ie,Ee.ri),p.scale(Ie,Ee.rj),be.ri.copy(Ee.ri),be.rj.copy(Ee.rj),g.normalize(),g.tangents(Ee.t,be.t)}};var x=new l,y=new l,_=new h,S=new h;m.prototype.getContacts=function(pe,me,Ee,be,$e,ke,Ie){this.contactPointPool=$e,this.frictionEquationPool=Ie,this.result=be,this.frictionResult=ke;for(var ze=_,ce=S,De=x,He=y,je=0,b=pe.length;je!==b;je++){var V=pe[je],Y=me[je],Z=null;V.material&&Y.material&&(Z=Ee.getContactMaterial(V.material,Y.material)||null);for(var se=0;se<V.shapes.length;se++){V.quaternion.mult(V.shapeOrientations[se],ze),V.quaternion.vmult(V.shapeOffsets[se],De),De.vadd(V.position,De);for(var ae=V.shapes[se],Re=0;Re<Y.shapes.length;Re++){Y.quaternion.mult(Y.shapeOrientations[Re],ce),Y.quaternion.vmult(Y.shapeOffsets[Re],He),He.vadd(Y.position,He);var Fe=Y.shapes[Re];if(!(De.distanceTo(He)>ae.boundingSphereRadius+Fe.boundingSphereRadius)){var Ye=null;ae.material&&Fe.material&&(Ye=Ee.getContactMaterial(ae.material,Fe.material)||null),this.currentContactMaterial=Ye||Z||Ee.defaultContactMaterial;var We=this[ae.type|Fe.type];We&&(ae.type<Fe.type?We.call(this,ae,Fe,De,He,ze,ce,V,Y,ae,Fe):We.call(this,Fe,ae,He,De,ce,ze,Y,V,ae,Fe))}}}}},m.prototype[o.types.BOX|o.types.BOX]=m.prototype.boxBox=function(pe,me,Ee,be,$e,ke,Ie,ze){pe.convexPolyhedronRepresentation.material=pe.material,me.convexPolyhedronRepresentation.material=me.material,pe.convexPolyhedronRepresentation.collisionResponse=pe.collisionResponse,me.convexPolyhedronRepresentation.collisionResponse=me.collisionResponse,this.convexConvex(pe.convexPolyhedronRepresentation,me.convexPolyhedronRepresentation,Ee,be,$e,ke,Ie,ze,pe,me)},m.prototype[o.types.BOX|o.types.CONVEXPOLYHEDRON]=m.prototype.boxConvex=function(pe,me,Ee,be,$e,ke,Ie,ze){pe.convexPolyhedronRepresentation.material=pe.material,pe.convexPolyhedronRepresentation.collisionResponse=pe.collisionResponse,this.convexConvex(pe.convexPolyhedronRepresentation,me,Ee,be,$e,ke,Ie,ze,pe,me)},m.prototype[o.types.BOX|o.types.PARTICLE]=m.prototype.boxParticle=function(pe,me,Ee,be,$e,ke,Ie,ze){pe.convexPolyhedronRepresentation.material=pe.material,pe.convexPolyhedronRepresentation.collisionResponse=pe.collisionResponse,this.convexParticle(pe.convexPolyhedronRepresentation,me,Ee,be,$e,ke,Ie,ze,pe,me)},m.prototype[o.types.SPHERE]=m.prototype.sphereSphere=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=this.createContactEquation(Ie,ze,pe,me);be.vsub(Ee,ce.ni),ce.ni.normalize(),ce.ri.copy(ce.ni),ce.rj.copy(ce.ni),ce.ri.mult(pe.radius,ce.ri),ce.rj.mult(-me.radius,ce.rj),ce.ri.vadd(Ee,ce.ri),ce.ri.vsub(Ie.position,ce.ri),ce.rj.vadd(be,ce.rj),ce.rj.vsub(ze.position,ce.rj),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult)};var R=new l,T=new l,D=new l;m.prototype[o.types.PLANE|o.types.TRIMESH]=m.prototype.planeTrimesh=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=new l,De=R;De.set(0,0,1),$e.vmult(De,De);for(var He=0;He<me.vertices.length/3;He++){me.getVertex(He,ce);var je=new l;je.copy(ce),c.pointToWorldFrame(be,ke,je,ce);var b=T;ce.vsub(Ee,b);var V=De.dot(b);if(V<=0){var Y=this.createContactEquation(Ie,ze,pe,me);Y.ni.copy(De);var Z=D;De.scale(b.dot(De),Z),ce.vsub(Z,Z),Y.ri.copy(Z),Y.ri.vsub(Ie.position,Y.ri),Y.rj.copy(ce),Y.rj.vsub(ze.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}};var M=new l,E=new l;new l;var P=new l,H=new l,F=new l,W=new l,k=new l,ie=new l,z=new l,U=new l,J=new l,q=new l,A=new l,O=new r,B=[];m.prototype[o.types.SPHERE|o.types.TRIMESH]=m.prototype.sphereTrimesh=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=F,De=W,He=k,je=ie,b=z,V=U,Y=O,Z=H,se=E,ae=B;c.pointToLocalFrame(be,ke,Ee,b);var Re=pe.radius;Y.lowerBound.set(b.x-Re,b.y-Re,b.z-Re),Y.upperBound.set(b.x+Re,b.y+Re,b.z+Re),me.getTrianglesInAABB(Y,ae);for(var Fe=P,Ye=pe.radius*pe.radius,We=0;We<ae.length;We++)for(var Ve=0;Ve<3;Ve++)if(me.getVertex(me.indices[ae[We]*3+Ve],Fe),Fe.vsub(b,se),se.norm2()<=Ye){Z.copy(Fe),c.pointToWorldFrame(be,ke,Z,Fe),Fe.vsub(Ee,se);var Ce=this.createContactEquation(Ie,ze,pe,me);Ce.ni.copy(se),Ce.ni.normalize(),Ce.ri.copy(Ce.ni),Ce.ri.scale(pe.radius,Ce.ri),Ce.ri.vadd(Ee,Ce.ri),Ce.ri.vsub(Ie.position,Ce.ri),Ce.rj.copy(Fe),Ce.rj.vsub(ze.position,Ce.rj),this.result.push(Ce),this.createFrictionEquationsFromContact(Ce,this.frictionResult)}for(var We=0;We<ae.length;We++)for(var Ve=0;Ve<3;Ve++){me.getVertex(me.indices[ae[We]*3+Ve],ce),me.getVertex(me.indices[ae[We]*3+(Ve+1)%3],De),De.vsub(ce,He),b.vsub(De,V);var ct=V.dot(He);b.vsub(ce,V);var dt=V.dot(He);if(dt>0&&ct<0){b.vsub(ce,V),je.copy(He),je.normalize(),dt=V.dot(je),je.scale(dt,V),V.vadd(ce,V);var xt=V.distanceTo(b);if(xt<pe.radius){var Ce=this.createContactEquation(Ie,ze,pe,me);V.vsub(b,Ce.ni),Ce.ni.normalize(),Ce.ni.scale(pe.radius,Ce.ri),c.pointToWorldFrame(be,ke,V,V),V.vsub(ze.position,Ce.rj),c.vectorToWorldFrame(ke,Ce.ni,Ce.ni),c.vectorToWorldFrame(ke,Ce.ri,Ce.ri),this.result.push(Ce),this.createFrictionEquationsFromContact(Ce,this.frictionResult)}}}for(var Pt=J,ht=q,Ke=A,Jt=M,We=0,nt=ae.length;We!==nt;We++){me.getTriangleVertices(ae[We],Pt,ht,Ke),me.getNormal(ae[We],Jt),b.vsub(Pt,V);var xt=V.dot(Jt);if(Jt.scale(xt,V),b.vsub(V,V),xt=V.distanceTo(b),a.pointInTriangle(V,Pt,ht,Ke)&&xt<pe.radius){var Ce=this.createContactEquation(Ie,ze,pe,me);V.vsub(b,Ce.ni),Ce.ni.normalize(),Ce.ni.scale(pe.radius,Ce.ri),c.pointToWorldFrame(be,ke,V,V),V.vsub(ze.position,Ce.rj),c.vectorToWorldFrame(ke,Ce.ni,Ce.ni),c.vectorToWorldFrame(ke,Ce.ri,Ce.ri),this.result.push(Ce),this.createFrictionEquationsFromContact(Ce,this.frictionResult)}}ae.length=0};var I=new l,C=new l;m.prototype[o.types.SPHERE|o.types.PLANE]=m.prototype.spherePlane=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=this.createContactEquation(Ie,ze,pe,me);if(ce.ni.set(0,0,1),ke.vmult(ce.ni,ce.ni),ce.ni.negate(ce.ni),ce.ni.normalize(),ce.ni.mult(pe.radius,ce.ri),Ee.vsub(be,I),ce.ni.mult(ce.ni.dot(I),C),I.vsub(C,ce.rj),-I.dot(ce.ni)<=pe.radius){var De=ce.ri,He=ce.rj;De.vadd(Ee,De),De.vsub(Ie.position,De),He.vadd(be,He),He.vsub(ze.position,He),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult)}};var K=new l,oe=new l,re=new l;function ee(pe,me,Ee){for(var be=null,$e=pe.length,ke=0;ke!==$e;ke++){var Ie=pe[ke],ze=K;pe[(ke+1)%$e].vsub(Ie,ze);var ce=oe;ze.cross(me,ce);var De=re;Ee.vsub(Ie,De);var He=ce.dot(De);if(be===null||He>0&&be===!0||He<=0&&be===!1){be===null&&(be=He>0);continue}else return!1}return!0}var fe=new l,he=new l,N=new l,le=new l,te=[new l,new l,new l,new l,new l,new l],$=new l,Q=new l,Ae=new l,ye=new l;m.prototype[o.types.SPHERE|o.types.BOX]=m.prototype.sphereBox=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=this.v3pool,De=te;Ee.vsub(be,fe),me.getSideNormals(De,ke);for(var He=pe.radius,je=!1,b=Q,V=Ae,Y=ye,Z=null,se=0,ae=0,Re=0,Fe=null,Ye=0,We=De.length;Ye!==We&&je===!1;Ye++){var Ve=he;Ve.copy(De[Ye]);var Ce=Ve.norm();Ve.normalize();var ct=fe.dot(Ve);if(ct<Ce+He&&ct>0){var dt=N,xt=le;dt.copy(De[(Ye+1)%3]),xt.copy(De[(Ye+2)%3]);var Pt=dt.norm(),ht=xt.norm();dt.normalize(),xt.normalize();var Ke=fe.dot(dt),Jt=fe.dot(xt);if(Ke<Pt&&Ke>-Pt&&Jt<ht&&Jt>-ht){var Tt=Math.abs(ct-Ce-He);(Fe===null||Tt<Fe)&&(Fe=Tt,ae=Ke,Re=Jt,Z=Ce,b.copy(Ve),V.copy(dt),Y.copy(xt),se++)}}}if(se){je=!0;var Qe=this.createContactEquation(Ie,ze,pe,me);b.mult(-He,Qe.ri),Qe.ni.copy(b),Qe.ni.negate(Qe.ni),b.mult(Z,b),V.mult(ae,V),b.vadd(V,b),Y.mult(Re,Y),b.vadd(Y,Qe.rj),Qe.ri.vadd(Ee,Qe.ri),Qe.ri.vsub(Ie.position,Qe.ri),Qe.rj.vadd(be,Qe.rj),Qe.rj.vsub(ze.position,Qe.rj),this.result.push(Qe),this.createFrictionEquationsFromContact(Qe,this.frictionResult)}for(var nt=ce.get(),zt=$,Vt=0;Vt!==2&&!je;Vt++)for(var wt=0;wt!==2&&!je;wt++)for(var At=0;At!==2&&!je;At++)if(nt.set(0,0,0),Vt?nt.vadd(De[0],nt):nt.vsub(De[0],nt),wt?nt.vadd(De[1],nt):nt.vsub(De[1],nt),At?nt.vadd(De[2],nt):nt.vsub(De[2],nt),be.vadd(nt,zt),zt.vsub(Ee,zt),zt.norm2()<He*He){je=!0;var Qe=this.createContactEquation(Ie,ze,pe,me);Qe.ri.copy(zt),Qe.ri.normalize(),Qe.ni.copy(Qe.ri),Qe.ri.mult(He,Qe.ri),Qe.rj.copy(nt),Qe.ri.vadd(Ee,Qe.ri),Qe.ri.vsub(Ie.position,Qe.ri),Qe.rj.vadd(be,Qe.rj),Qe.rj.vsub(ze.position,Qe.rj),this.result.push(Qe),this.createFrictionEquationsFromContact(Qe,this.frictionResult)}ce.release(nt),nt=null;for(var yt=ce.get(),kt=ce.get(),Qe=ce.get(),Mt=ce.get(),Tt=ce.get(),wn=De.length,Vt=0;Vt!==wn&&!je;Vt++)for(var wt=0;wt!==wn&&!je;wt++)if(Vt%3!==wt%3){De[wt].cross(De[Vt],yt),yt.normalize(),De[Vt].vadd(De[wt],kt),Qe.copy(Ee),Qe.vsub(kt,Qe),Qe.vsub(be,Qe);var pn=Qe.dot(yt);yt.mult(pn,Mt);for(var At=0;At===Vt%3||At===wt%3;)At++;Tt.copy(Ee),Tt.vsub(Mt,Tt),Tt.vsub(kt,Tt),Tt.vsub(be,Tt);var Zc=Math.abs(pn),Jc=Tt.norm();if(Zc<De[At].norm()&&Jc<He){je=!0;var St=this.createContactEquation(Ie,ze,pe,me);kt.vadd(Mt,St.rj),St.rj.copy(St.rj),Tt.negate(St.ni),St.ni.normalize(),St.ri.copy(St.rj),St.ri.vadd(be,St.ri),St.ri.vsub(Ee,St.ri),St.ri.normalize(),St.ri.mult(He,St.ri),St.ri.vadd(Ee,St.ri),St.ri.vsub(Ie.position,St.ri),St.rj.vadd(be,St.rj),St.rj.vsub(ze.position,St.rj),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}ce.release(yt,kt,Qe,Mt,Tt)};var Te=new l,_e=new l,qe=new l,Je=new l,L=new l,w=new l,ne=new l,xe=new l,ve=new l,Me=new l;m.prototype[o.types.SPHERE|o.types.CONVEXPOLYHEDRON]=m.prototype.sphereConvex=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=this.v3pool;Ee.vsub(be,Te);for(var De=me.faceNormals,He=me.faces,je=me.vertices,b=pe.radius,V=0;V!==je.length;V++){var Y=je[V],Z=L;ke.vmult(Y,Z),be.vadd(Z,Z);var se=Je;if(Z.vsub(Ee,se),se.norm2()<b*b){Re=!0;var ae=this.createContactEquation(Ie,ze,pe,me);ae.ri.copy(se),ae.ri.normalize(),ae.ni.copy(ae.ri),ae.ri.mult(b,ae.ri),Z.vsub(be,ae.rj),ae.ri.vadd(Ee,ae.ri),ae.ri.vsub(Ie.position,ae.ri),ae.rj.vadd(be,ae.rj),ae.rj.vsub(ze.position,ae.rj),this.result.push(ae),this.createFrictionEquationsFromContact(ae,this.frictionResult);return}}for(var Re=!1,V=0,Fe=He.length;V!==Fe&&Re===!1;V++){var Ye=De[V],We=He[V],Ve=w;ke.vmult(Ye,Ve);var Ce=ne;ke.vmult(je[We[0]],Ce),Ce.vadd(be,Ce);var ct=xe;Ve.mult(-b,ct),Ee.vadd(ct,ct);var dt=ve;ct.vsub(Ce,dt);var xt=dt.dot(Ve),Pt=Me;if(Ee.vsub(Ce,Pt),xt<0&&Pt.dot(Ve)>0){for(var ht=[],Ke=0,Jt=We.length;Ke!==Jt;Ke++){var nt=ce.get();ke.vmult(je[We[Ke]],nt),be.vadd(nt,nt),ht.push(nt)}if(ee(ht,Ve,Ee)){Re=!0;var ae=this.createContactEquation(Ie,ze,pe,me);Ve.mult(-b,ae.ri),Ve.negate(ae.ni);var zt=ce.get();Ve.mult(-xt,zt);var Vt=ce.get();Ve.mult(-b,Vt),Ee.vsub(be,ae.rj),ae.rj.vadd(Vt,ae.rj),ae.rj.vadd(zt,ae.rj),ae.rj.vadd(be,ae.rj),ae.rj.vsub(ze.position,ae.rj),ae.ri.vadd(Ee,ae.ri),ae.ri.vsub(Ie.position,ae.ri),ce.release(zt),ce.release(Vt),this.result.push(ae),this.createFrictionEquationsFromContact(ae,this.frictionResult);for(var Ke=0,wt=ht.length;Ke!==wt;Ke++)ce.release(ht[Ke]);return}else for(var Ke=0;Ke!==We.length;Ke++){var At=ce.get(),yt=ce.get();ke.vmult(je[We[(Ke+1)%We.length]],At),ke.vmult(je[We[(Ke+2)%We.length]],yt),be.vadd(At,At),be.vadd(yt,yt);var kt=_e;yt.vsub(At,kt);var Qe=qe;kt.unit(Qe);var Mt=ce.get(),Tt=ce.get();Ee.vsub(At,Tt);var wn=Tt.dot(Qe);Qe.mult(wn,Mt),Mt.vadd(At,Mt);var pn=ce.get();if(Mt.vsub(Ee,pn),wn>0&&wn*wn<kt.norm2()&&pn.norm2()<b*b){var ae=this.createContactEquation(Ie,ze,pe,me);Mt.vsub(be,ae.rj),Mt.vsub(Ee,ae.ni),ae.ni.normalize(),ae.ni.mult(b,ae.ri),ae.rj.vadd(be,ae.rj),ae.rj.vsub(ze.position,ae.rj),ae.ri.vadd(Ee,ae.ri),ae.ri.vsub(Ie.position,ae.ri),this.result.push(ae),this.createFrictionEquationsFromContact(ae,this.frictionResult);for(var Ke=0,wt=ht.length;Ke!==wt;Ke++)ce.release(ht[Ke]);ce.release(At),ce.release(yt),ce.release(Mt),ce.release(pn),ce.release(Tt);return}ce.release(At),ce.release(yt),ce.release(Mt),ce.release(pn),ce.release(Tt)}for(var Ke=0,wt=ht.length;Ke!==wt;Ke++)ce.release(ht[Ke])}}},new l,new l,m.prototype[o.types.PLANE|o.types.BOX]=m.prototype.planeBox=function(pe,me,Ee,be,$e,ke,Ie,ze){me.convexPolyhedronRepresentation.material=me.material,me.convexPolyhedronRepresentation.collisionResponse=me.collisionResponse,this.planeConvex(pe,me.convexPolyhedronRepresentation,Ee,be,$e,ke,Ie,ze)};var Xe=new l,we=new l,ue=new l,G=new l;m.prototype[o.types.PLANE|o.types.CONVEXPOLYHEDRON]=m.prototype.planeConvex=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=Xe,De=we;De.set(0,0,1),$e.vmult(De,De);for(var He=0,je=ue,b=0;b!==me.vertices.length;b++){ce.copy(me.vertices[b]),ke.vmult(ce,ce),be.vadd(ce,ce),ce.vsub(Ee,je);var V=De.dot(je);if(V<=0){var Y=this.createContactEquation(Ie,ze,pe,me),Z=G;De.mult(De.dot(je),Z),ce.vsub(Z,Z),Z.vsub(Ee,Y.ri),Y.ni.copy(De),ce.vsub(be,Y.rj),Y.ri.vadd(Ee,Y.ri),Y.ri.vsub(Ie.position,Y.ri),Y.rj.vadd(be,Y.rj),Y.rj.vsub(ze.position,Y.rj),this.result.push(Y),He++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Y,this.frictionResult)}}this.enableFrictionReduction&&He&&this.createFrictionFromAverage(He)};var ge=new l,Ue=new l;m.prototype[o.types.CONVEXPOLYHEDRON]=m.prototype.convexConvex=function(pe,me,Ee,be,$e,ke,Ie,ze,ce,De,He,je){var b=ge;if(!(Ee.distanceTo(be)>pe.boundingSphereRadius+me.boundingSphereRadius)&&pe.findSeparatingAxis(me,Ee,$e,be,ke,b,He,je)){var V=[],Y=Ue;pe.clipAgainstHull(Ee,$e,me,be,ke,b,-100,100,V);for(var Z=0,se=0;se!==V.length;se++){var ae=this.createContactEquation(Ie,ze,pe,me,ce,De),Re=ae.ri,Fe=ae.rj;b.negate(ae.ni),V[se].normal.negate(Y),Y.mult(V[se].depth,Y),V[se].point.vadd(Y,Re),Fe.copy(V[se].point),Re.vsub(Ee,Re),Fe.vsub(be,Fe),Re.vadd(Ee,Re),Re.vsub(Ie.position,Re),Fe.vadd(be,Fe),Fe.vsub(ze.position,Fe),this.result.push(ae),Z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ae,this.frictionResult)}this.enableFrictionReduction&&Z&&this.createFrictionFromAverage(Z)}};var Ne=new l,Oe=new l,Ze=new l;m.prototype[o.types.PLANE|o.types.PARTICLE]=m.prototype.planeParticle=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=Ne;ce.set(0,0,1),Ie.quaternion.vmult(ce,ce);var De=Oe;be.vsub(Ie.position,De);var He=ce.dot(De);if(He<=0){var je=this.createContactEquation(ze,Ie,me,pe);je.ni.copy(ce),je.ni.negate(je.ni),je.ri.set(0,0,0);var b=Ze;ce.mult(ce.dot(be),b),be.vsub(b,b),je.rj.copy(b),this.result.push(je),this.createFrictionEquationsFromContact(je,this.frictionResult)}};var et=new l;m.prototype[o.types.PARTICLE|o.types.SPHERE]=m.prototype.sphereParticle=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=et;ce.set(0,0,1),be.vsub(Ee,ce);var De=ce.norm2();if(De<=pe.radius*pe.radius){var He=this.createContactEquation(ze,Ie,me,pe);ce.normalize(),He.rj.copy(ce),He.rj.mult(pe.radius,He.rj),He.ni.copy(ce),He.ni.negate(He.ni),He.ri.set(0,0,0),this.result.push(He),this.createFrictionEquationsFromContact(He,this.frictionResult)}};var j=new h,Be=new l;new l;var de=new l,Se=new l,Le=new l;m.prototype[o.types.PARTICLE|o.types.CONVEXPOLYHEDRON]=m.prototype.convexParticle=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=-1,De=de,He=Le,je=null,b=Be;if(b.copy(be),b.vsub(Ee,b),$e.conjugate(j),j.vmult(b,b),pe.pointIsInside(b)){pe.worldVerticesNeedsUpdate&&pe.computeWorldVertices(Ee,$e),pe.worldFaceNormalsNeedsUpdate&&pe.computeWorldFaceNormals($e);for(var V=0,Y=pe.faces.length;V!==Y;V++){var Z=[pe.worldVertices[pe.faces[V][0]]],se=pe.worldFaceNormals[V];be.vsub(Z[0],Se);var ae=-se.dot(Se);(je===null||Math.abs(ae)<Math.abs(je))&&(je=ae,ce=V,De.copy(se))}if(ce!==-1){var Re=this.createContactEquation(ze,Ie,me,pe);De.mult(je,He),He.vadd(be,He),He.vsub(Ee,He),Re.rj.copy(He),De.negate(Re.ni),Re.ri.set(0,0,0);var Fe=Re.ri,Ye=Re.rj;Fe.vadd(be,Fe),Fe.vsub(ze.position,Fe),Ye.vadd(Ee,Ye),Ye.vsub(Ie.position,Ye),this.result.push(Re),this.createFrictionEquationsFromContact(Re,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},m.prototype[o.types.BOX|o.types.HEIGHTFIELD]=m.prototype.boxHeightfield=function(pe,me,Ee,be,$e,ke,Ie,ze){pe.convexPolyhedronRepresentation.material=pe.material,pe.convexPolyhedronRepresentation.collisionResponse=pe.collisionResponse,this.convexHeightfield(pe.convexPolyhedronRepresentation,me,Ee,be,$e,ke,Ie,ze)};var tt=new l,lt=new l,ft=[0];m.prototype[o.types.CONVEXPOLYHEDRON|o.types.HEIGHTFIELD]=m.prototype.convexHeightfield=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=me.data,De=me.elementSize,He=pe.boundingSphereRadius,je=lt,b=ft,V=tt;c.pointToLocalFrame(be,ke,Ee,V);var Y=Math.floor((V.x-He)/De)-1,Z=Math.ceil((V.x+He)/De)+1,se=Math.floor((V.y-He)/De)-1,ae=Math.ceil((V.y+He)/De)+1;if(!(Z<0||ae<0||Y>ce.length||se>ce[0].length)){Y<0&&(Y=0),Z<0&&(Z=0),se<0&&(se=0),ae<0&&(ae=0),Y>=ce.length&&(Y=ce.length-1),Z>=ce.length&&(Z=ce.length-1),ae>=ce[0].length&&(ae=ce[0].length-1),se>=ce[0].length&&(se=ce[0].length-1);var Re=[];me.getRectMinMax(Y,se,Z,ae,Re);var Fe=Re[0],Ye=Re[1];if(!(V.z-He>Ye||V.z+He<Fe))for(var We=Y;We<Z;We++)for(var Ve=se;Ve<ae;Ve++)me.getConvexTrianglePillar(We,Ve,!1),c.pointToWorldFrame(be,ke,me.pillarOffset,je),Ee.distanceTo(je)<me.pillarConvex.boundingSphereRadius+pe.boundingSphereRadius&&this.convexConvex(pe,me.pillarConvex,Ee,je,$e,ke,Ie,ze,null,null,b,null),me.getConvexTrianglePillar(We,Ve,!0),c.pointToWorldFrame(be,ke,me.pillarOffset,je),Ee.distanceTo(je)<me.pillarConvex.boundingSphereRadius+pe.boundingSphereRadius&&this.convexConvex(pe,me.pillarConvex,Ee,je,$e,ke,Ie,ze,null,null,b,null)}};var Rt=new l,rt=new l;m.prototype[o.types.SPHERE|o.types.HEIGHTFIELD]=m.prototype.sphereHeightfield=function(pe,me,Ee,be,$e,ke,Ie,ze){var ce=me.data,De=pe.radius,He=me.elementSize,je=rt,b=Rt;c.pointToLocalFrame(be,ke,Ee,b);var V=Math.floor((b.x-De)/He)-1,Y=Math.ceil((b.x+De)/He)+1,Z=Math.floor((b.y-De)/He)-1,se=Math.ceil((b.y+De)/He)+1;if(!(Y<0||se<0||V>ce.length||se>ce[0].length)){V<0&&(V=0),Y<0&&(Y=0),Z<0&&(Z=0),se<0&&(se=0),V>=ce.length&&(V=ce.length-1),Y>=ce.length&&(Y=ce.length-1),se>=ce[0].length&&(se=ce[0].length-1),Z>=ce[0].length&&(Z=ce[0].length-1);var ae=[];me.getRectMinMax(V,Z,Y,se,ae);var Re=ae[0],Fe=ae[1];if(!(b.z-De>Fe||b.z+De<Re))for(var Ye=this.result,We=V;We<Y;We++)for(var Ve=Z;Ve<se;Ve++){var Ce=Ye.length;me.getConvexTrianglePillar(We,Ve,!1),c.pointToWorldFrame(be,ke,me.pillarOffset,je),Ee.distanceTo(je)<me.pillarConvex.boundingSphereRadius+pe.boundingSphereRadius&&this.sphereConvex(pe,me.pillarConvex,Ee,je,$e,ke,Ie,ze),me.getConvexTrianglePillar(We,Ve,!0),c.pointToWorldFrame(be,ke,me.pillarOffset,je),Ee.distanceTo(je)<me.pillarConvex.boundingSphereRadius+pe.boundingSphereRadius&&this.sphereConvex(pe,me.pillarConvex,Ee,je,$e,ke,Ie,ze);var ct=Ye.length-Ce;if(ct>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=_;var r=t("../shapes/Shape"),o=t("../math/Vec3"),a=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var c=t("./Narrowphase"),h=t("../utils/EventTarget"),u=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),m=t("../objects/Body"),g=t("../utils/TupleDictionary"),v=t("../collision/RaycastResult"),p=t("../collision/AABB"),x=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new c(this),this.collisionMatrix=new u,this.collisionMatrixPrevious=new u,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var S=new x;if(_.prototype.getContactMaterial=function(U,J){return this.contactMaterialTable.get(U.id,J.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var U=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=U,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(U){this.bodies.indexOf(U)===-1&&(U.index=this.bodies.length,this.bodies.push(U),U.world=this,U.initPosition.copy(U.position),U.initVelocity.copy(U.velocity),U.timeLastSleepy=this.time,U instanceof m&&(U.initAngularVelocity.copy(U.angularVelocity),U.initQuaternion.copy(U.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=U,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(U){this.constraints.push(U)},_.prototype.removeConstraint=function(U){var J=this.constraints.indexOf(U);J!==-1&&this.constraints.splice(J,1)},_.prototype.rayTest=function(U,J,q){q instanceof v?this.raycastClosest(U,J,{skipBackfaces:!0},q):this.raycastAll(U,J,{skipBackfaces:!0},q)},_.prototype.raycastAll=function(U,J,q,A){return q.mode=x.ALL,q.from=U,q.to=J,q.callback=A,S.intersectWorld(this,q)},_.prototype.raycastAny=function(U,J,q,A){return q.mode=x.ANY,q.from=U,q.to=J,q.result=A,S.intersectWorld(this,q)},_.prototype.raycastClosest=function(U,J,q,A){return q.mode=x.CLOSEST,q.from=U,q.to=J,q.result=A,S.intersectWorld(this,q)},_.prototype.remove=function(U){U.world=null;var J=this.bodies.length-1,q=this.bodies,A=q.indexOf(U);if(A!==-1){q.splice(A,1);for(var O=0;O!==q.length;O++)q[O].index=O;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=U,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(U){this.materials.push(U)},_.prototype.addContactMaterial=function(U){this.contactmaterials.push(U),this.contactMaterialTable.set(U.materials[0].id,U.materials[1].id,U)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var T=new o;_.prototype.step=function(U,J,q){if(q=q||10,J=J||0,J===0)this.internalStep(U),this.time+=U;else{var A=Math.floor((this.time+J)/U)-Math.floor(this.time/U);A=Math.min(A,q);for(var O=performance.now(),B=0;B!==A&&(this.internalStep(U),!(performance.now()-O>U*1e3));B++);this.time+=J;for(var I=this.time%U,C=I/U,K=T,oe=this.bodies,re=0;re!==oe.length;re++){var ee=oe[re];ee.type!==m.STATIC&&ee.sleepState!==m.SLEEPING?(ee.position.vsub(ee.previousPosition,K),K.scale(C,K),ee.position.vadd(K,ee.interpolatedPosition)):(ee.interpolatedPosition.copy(ee.position),ee.interpolatedQuaternion.copy(ee.quaternion))}}};var D={type:"postStep"},M={type:"preStep"},E={type:"collide",body:null,contact:null},P=[],H=[],F=[],W=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new a;var k=new a,ie=new a,z=new o;_.prototype.internalStep=function(U){this.dt=U;var J=this.contacts,q=F,A=W,O=this.numObjects(),B=this.bodies,I=this.solver,C=this.gravity,K=this.doProfiling,oe=this.profile,re=m.DYNAMIC,ee,fe=this.constraints,he=H;C.norm();var N=C.x,le=C.y,te=C.z,$=0;for(K&&(ee=performance.now()),$=0;$!==O;$++){var Q=B[$];if(Q.type&re){var Ae=Q.force,ye=Q.mass;Ae.x+=ye*N,Ae.y+=ye*le,Ae.z+=ye*te}}for(var $=0,Te=this.subsystems.length;$!==Te;$++)this.subsystems[$].update();K&&(ee=performance.now()),q.length=0,A.length=0,this.broadphase.collisionPairs(this,q,A),K&&(oe.broadphase=performance.now()-ee);var ge=fe.length;for($=0;$!==ge;$++){var _e=fe[$];if(!_e.collideConnected)for(var qe=q.length-1;qe>=0;qe-=1)(_e.bodyA===q[qe]&&_e.bodyB===A[qe]||_e.bodyB===q[qe]&&_e.bodyA===A[qe])&&(q.splice(qe,1),A.splice(qe,1))}this.collisionMatrixTick(),K&&(ee=performance.now());var Je=P,L=J.length;for($=0;$!==L;$++)Je.push(J[$]);J.length=0;var w=this.frictionEquations.length;for($=0;$!==w;$++)he.push(this.frictionEquations[$]);this.frictionEquations.length=0,this.narrowphase.getContacts(q,A,this,J,Je,this.frictionEquations,he),K&&(oe.narrowphase=performance.now()-ee),K&&(ee=performance.now());for(var $=0;$<this.frictionEquations.length;$++)I.addEquation(this.frictionEquations[$]);for(var ne=J.length,xe=0;xe!==ne;xe++){var _e=J[xe],Q=_e.bi,ve=_e.bj;_e.si,_e.sj;var Me;if(Q.material&&ve.material?Me=this.getContactMaterial(Q.material,ve.material)||this.defaultContactMaterial:Me=this.defaultContactMaterial,Me.friction,Q.material&&ve.material&&(Q.material.friction>=0&&ve.material.friction>=0&&Q.material.friction*ve.material.friction,Q.material.restitution>=0&&ve.material.restitution>=0&&(_e.restitution=Q.material.restitution*ve.material.restitution)),I.addEquation(_e),Q.allowSleep&&Q.type===m.DYNAMIC&&Q.sleepState===m.SLEEPING&&ve.sleepState===m.AWAKE&&ve.type!==m.STATIC){var Xe=ve.velocity.norm2()+ve.angularVelocity.norm2(),we=Math.pow(ve.sleepSpeedLimit,2);Xe>=we*2&&(Q._wakeUpAfterNarrowphase=!0)}if(ve.allowSleep&&ve.type===m.DYNAMIC&&ve.sleepState===m.SLEEPING&&Q.sleepState===m.AWAKE&&Q.type!==m.STATIC){var ue=Q.velocity.norm2()+Q.angularVelocity.norm2(),G=Math.pow(Q.sleepSpeedLimit,2);ue>=G*2&&(ve._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(Q,ve,!0),this.collisionMatrixPrevious.get(Q,ve)||(E.body=ve,E.contact=_e,Q.dispatchEvent(E),E.body=Q,ve.dispatchEvent(E))}for(K&&(oe.makeContactConstraints=performance.now()-ee,ee=performance.now()),$=0;$!==O;$++){var Q=B[$];Q._wakeUpAfterNarrowphase&&(Q.wakeUp(),Q._wakeUpAfterNarrowphase=!1)}var ge=fe.length;for($=0;$!==ge;$++){var _e=fe[$];_e.update();for(var qe=0,Ue=_e.equations.length;qe!==Ue;qe++){var Ne=_e.equations[qe];I.addEquation(Ne)}}I.solve(U,this),K&&(oe.solve=performance.now()-ee),I.removeAllEquations();var Oe=Math.pow;for($=0;$!==O;$++){var Q=B[$];if(Q.type&re){var Ze=Oe(1-Q.linearDamping,U),et=Q.velocity;et.mult(Ze,et);var j=Q.angularVelocity;if(j){var Be=Oe(1-Q.angularDamping,U);j.mult(Be,j)}}}for(this.dispatchEvent(M),$=0;$!==O;$++){var Q=B[$];Q.preStep&&Q.preStep.call(Q)}K&&(ee=performance.now());var de=k,Se=ie,Le=this.stepnumber,tt=m.DYNAMIC|m.KINEMATIC,lt=Le%(this.quatNormalizeSkip+1)===0,ft=this.quatNormalizeFast,Rt=U*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,$=0;$!==O;$++){var rt=B[$],pe=rt.force,me=rt.torque;if(rt.type&tt&&rt.sleepState!==m.SLEEPING){var Ee=rt.velocity,be=rt.angularVelocity,$e=rt.position,ke=rt.quaternion,Ie=rt.invMass,ze=rt.invInertiaWorld;Ee.x+=pe.x*Ie*U,Ee.y+=pe.y*Ie*U,Ee.z+=pe.z*Ie*U,rt.angularVelocity&&(ze.vmult(me,z),z.mult(U,z),z.vadd(be,be)),$e.x+=Ee.x*U,$e.y+=Ee.y*U,$e.z+=Ee.z*U,rt.angularVelocity&&(de.set(be.x,be.y,be.z,0),de.mult(ke,Se),ke.x+=Rt*Se.x,ke.y+=Rt*Se.y,ke.z+=Rt*Se.z,ke.w+=Rt*Se.w,lt&&(ft?ke.normalizeFast():ke.normalize())),rt.aabb&&(rt.aabbNeedsUpdate=!0),rt.updateInertiaWorld&&rt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,K&&(oe.integrate=performance.now()-ee),this.time+=U,this.stepnumber+=1,this.dispatchEvent(D),$=0;$!==O;$++){var Q=B[$],ce=Q.postStep;ce&&ce.call(Q)}if(this.allowSleep)for($=0;$!==O;$++)B[$].sleepTick(this.time)},_.prototype.clearForces=function(){for(var U=this.bodies,J=U.length,q=0;q!==J;q++){var A=U[q];A.force,A.torque,A.force.set(0,0,0),A.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(qc);var vn=qc.exports;const Ol={type:"change"},ro={type:"start"},zl={type:"end"},os=new tr,Vl=new Dn,Hg=Math.cos(70*dc.DEG2RAD);class Gg extends Jn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",w),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ol),n.update(),r=i.NONE},this.update=function(){const G=new X,ge=new tn().setFromUnitVectors(e.up,new X(0,1,0)),Ue=ge.clone().invert(),Ne=new X,Oe=new tn,Ze=new X,et=2*Math.PI;return function(Be=null){const de=n.object.position;G.copy(de).sub(n.target),G.applyQuaternion(ge),a.setFromVector3(G),n.autoRotate&&r===i.NONE&&P(M(Be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Se=n.minAzimuthAngle,Le=n.maxAzimuthAngle;isFinite(Se)&&isFinite(Le)&&(Se<-Math.PI?Se+=et:Se>Math.PI&&(Se-=et),Le<-Math.PI?Le+=et:Le>Math.PI&&(Le-=et),Se<=Le?a.theta=Math.max(Se,Math.min(Le,a.theta)):a.theta=a.theta>(Se+Le)/2?Math.max(Se,a.theta):Math.min(Le,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*c),G.setFromSpherical(a),G.applyQuaternion(Ue),de.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let tt=!1;if(n.zoomToCursor&&R){let lt=null;if(n.object.isPerspectiveCamera){const ft=G.length();lt=J(ft*c);const Rt=ft-lt;n.object.position.addScaledVector(_,Rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ft=new X(S.x,S.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),tt=!0;const Rt=new X(S.x,S.y,0);Rt.unproject(n.object),n.object.position.sub(Rt).add(ft),n.object.updateMatrixWorld(),lt=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(os.origin.copy(n.object.position),os.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(os.direction))<Hg?e.lookAt(n.target):(Vl.setFromNormalAndCoplanarPoint(n.object.up,n.target),os.intersectPlane(Vl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),tt=!0);return c=1,R=!1,tt||Ne.distanceToSquared(n.object.position)>o||8*(1-Oe.dot(n.object.quaternion))>o||Ze.distanceToSquared(n.target)>0?(n.dispatchEvent(Ol),Ne.copy(n.object.position),Oe.copy(n.object.quaternion),Ze.copy(n.target),tt=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",_e),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",Te),n.domElement.removeEventListener("pointerup",_e),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",w),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Fl,l=new Fl;let c=1;const h=new X,u=new Pe,d=new Pe,f=new Pe,m=new Pe,g=new Pe,v=new Pe,p=new Pe,x=new Pe,y=new Pe,_=new X,S=new Pe;let R=!1;const T=[],D={};function M(G){return G!==null?2*Math.PI/60*n.autoRotateSpeed*G:2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function P(G){l.theta-=G}function H(G){l.phi-=G}const F=function(){const G=new X;return function(Ue,Ne){G.setFromMatrixColumn(Ne,0),G.multiplyScalar(-Ue),h.add(G)}}(),W=function(){const G=new X;return function(Ue,Ne){n.screenSpacePanning===!0?G.setFromMatrixColumn(Ne,1):(G.setFromMatrixColumn(Ne,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(Ue),h.add(G)}}(),k=function(){const G=new X;return function(Ue,Ne){const Oe=n.domElement;if(n.object.isPerspectiveCamera){const Ze=n.object.position;G.copy(Ze).sub(n.target);let et=G.length();et*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Ue*et/Oe.clientHeight,n.object.matrix),W(2*Ne*et/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Ue*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),W(Ne*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ie(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(G){if(!n.zoomToCursor)return;R=!0;const ge=n.domElement.getBoundingClientRect(),Ue=G.clientX-ge.left,Ne=G.clientY-ge.top,Oe=ge.width,Ze=ge.height;S.x=Ue/Oe*2-1,S.y=-(Ne/Ze)*2+1,_.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(G){return Math.max(n.minDistance,Math.min(n.maxDistance,G))}function q(G){u.set(G.clientX,G.clientY)}function A(G){U(G),p.set(G.clientX,G.clientY)}function O(G){m.set(G.clientX,G.clientY)}function B(G){d.set(G.clientX,G.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ge=n.domElement;P(2*Math.PI*f.x/ge.clientHeight),H(2*Math.PI*f.y/ge.clientHeight),u.copy(d),n.update()}function I(G){x.set(G.clientX,G.clientY),y.subVectors(x,p),y.y>0?ie(E()):y.y<0&&z(E()),p.copy(x),n.update()}function C(G){g.set(G.clientX,G.clientY),v.subVectors(g,m).multiplyScalar(n.panSpeed),k(v.x,v.y),m.copy(g),n.update()}function K(G){U(G),G.deltaY<0?z(E()):G.deltaY>0&&ie(E()),n.update()}function oe(G){let ge=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),ge=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),ge=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),ge=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),ge=!0;break}ge&&(G.preventDefault(),n.update())}function re(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const G=.5*(T[0].pageX+T[1].pageX),ge=.5*(T[0].pageY+T[1].pageY);u.set(G,ge)}}function ee(){if(T.length===1)m.set(T[0].pageX,T[0].pageY);else{const G=.5*(T[0].pageX+T[1].pageX),ge=.5*(T[0].pageY+T[1].pageY);m.set(G,ge)}}function fe(){const G=T[0].pageX-T[1].pageX,ge=T[0].pageY-T[1].pageY,Ue=Math.sqrt(G*G+ge*ge);p.set(0,Ue)}function he(){n.enableZoom&&fe(),n.enablePan&&ee()}function N(){n.enableZoom&&fe(),n.enableRotate&&re()}function le(G){if(T.length==1)d.set(G.pageX,G.pageY);else{const Ue=ue(G),Ne=.5*(G.pageX+Ue.x),Oe=.5*(G.pageY+Ue.y);d.set(Ne,Oe)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ge=n.domElement;P(2*Math.PI*f.x/ge.clientHeight),H(2*Math.PI*f.y/ge.clientHeight),u.copy(d)}function te(G){if(T.length===1)g.set(G.pageX,G.pageY);else{const ge=ue(G),Ue=.5*(G.pageX+ge.x),Ne=.5*(G.pageY+ge.y);g.set(Ue,Ne)}v.subVectors(g,m).multiplyScalar(n.panSpeed),k(v.x,v.y),m.copy(g)}function $(G){const ge=ue(G),Ue=G.pageX-ge.x,Ne=G.pageY-ge.y,Oe=Math.sqrt(Ue*Ue+Ne*Ne);x.set(0,Oe),y.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),ie(y.y),p.copy(x)}function Q(G){n.enableZoom&&$(G),n.enablePan&&te(G)}function Ae(G){n.enableZoom&&$(G),n.enableRotate&&le(G)}function ye(G){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",Te),n.domElement.addEventListener("pointerup",_e)),Me(G),G.pointerType==="touch"?ne(G):qe(G))}function Te(G){n.enabled!==!1&&(G.pointerType==="touch"?xe(G):Je(G))}function _e(G){Xe(G),T.length===0&&(n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",Te),n.domElement.removeEventListener("pointerup",_e)),n.dispatchEvent(zl),r=i.NONE}function qe(G){let ge;switch(G.button){case 0:ge=n.mouseButtons.LEFT;break;case 1:ge=n.mouseButtons.MIDDLE;break;case 2:ge=n.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case vi.DOLLY:if(n.enableZoom===!1)return;A(G),r=i.DOLLY;break;case vi.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;O(G),r=i.PAN}else{if(n.enableRotate===!1)return;q(G),r=i.ROTATE}break;case vi.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;q(G),r=i.ROTATE}else{if(n.enablePan===!1)return;O(G),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ro)}function Je(G){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;B(G);break;case i.DOLLY:if(n.enableZoom===!1)return;I(G);break;case i.PAN:if(n.enablePan===!1)return;C(G);break}}function L(G){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(G.preventDefault(),n.dispatchEvent(ro),K(G),n.dispatchEvent(zl))}function w(G){n.enabled===!1||n.enablePan===!1||oe(G)}function ne(G){switch(we(G),T.length){case 1:switch(n.touches.ONE){case gi.ROTATE:if(n.enableRotate===!1)return;re(),r=i.TOUCH_ROTATE;break;case gi.PAN:if(n.enablePan===!1)return;ee(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;he(),r=i.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ro)}function xe(G){switch(we(G),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;le(G),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;te(G),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(G),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(G),n.update();break;default:r=i.NONE}}function ve(G){n.enabled!==!1&&G.preventDefault()}function Me(G){T.push(G)}function Xe(G){delete D[G.pointerId];for(let ge=0;ge<T.length;ge++)if(T[ge].pointerId==G.pointerId){T.splice(ge,1);return}}function we(G){let ge=D[G.pointerId];ge===void 0&&(ge=new Pe,D[G.pointerId]=ge),ge.set(G.pageX,G.pageY)}function ue(G){const ge=G.pointerId===T[0].pointerId?T[1]:T[0];return D[ge.pointerId]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",_e),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}class Wg extends Yt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new X(.70707,.70707,0),u=new it(t.sunColor!==void 0?t.sunColor:16777215),d=new it(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new X(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,g=t.side!==void 0?t.side:xn,v=t.fog!==void 0?t.fog:!1,p=new Dn,x=new X,y=new X,_=new X,S=new st,R=new X(0,0,-1),T=new gt,D=new X,M=new X,E=new gt,P=new st,H=new Xt,F=new Zn(i,r),W={uniforms:ps.merge([Ge.fog,Ge.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new st},sunColor:{value:new it(8355711)},sunDirection:{value:new X(.70707,.70707,0)},eye:{value:new X},waterColor:{value:new it(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},k=new Fn({fragmentShader:W.fragmentShader,vertexShader:W.vertexShader,uniforms:ps.clone(W.uniforms),lights:!0,side:g,fog:v});k.uniforms.mirrorSampler.value=F.texture,k.uniforms.textureMatrix.value=P,k.uniforms.alpha.value=a,k.uniforms.time.value=l,k.uniforms.normalSampler.value=c,k.uniforms.sunColor.value=u,k.uniforms.waterColor.value=d,k.uniforms.sunDirection.value=h,k.uniforms.distortionScale.value=m,k.uniforms.eye.value=f,n.material=k,n.onBeforeRender=function(ie,z,U){if(y.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(U.matrixWorld),S.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(S),D.subVectors(y,_),D.dot(x)>0)return;D.reflect(x).negate(),D.add(y),S.extractRotation(U.matrixWorld),R.set(0,0,-1),R.applyMatrix4(S),R.add(_),M.subVectors(y,R),M.reflect(x).negate(),M.add(y),H.position.copy(D),H.up.set(0,1,0),H.up.applyMatrix4(S),H.up.reflect(x),H.lookAt(M),H.far=U.far,H.updateMatrixWorld(),H.projectionMatrix.copy(U.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(H.projectionMatrix),P.multiply(H.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(x,y),p.applyMatrix4(H.matrixWorldInverse),T.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const J=H.projectionMatrix;E.x=(Math.sign(T.x)+J.elements[8])/J.elements[0],E.y=(Math.sign(T.y)+J.elements[9])/J.elements[5],E.z=-1,E.w=(1+J.elements[10])/J.elements[14],T.multiplyScalar(2/T.dot(E)),J.elements[2]=T.x,J.elements[6]=T.y,J.elements[10]=T.z+1-o,J.elements[14]=T.w,f.setFromMatrixPosition(U.matrixWorld);const q=ie.getRenderTarget(),A=ie.xr.enabled,O=ie.shadowMap.autoUpdate;n.visible=!1,ie.xr.enabled=!1,ie.shadowMap.autoUpdate=!1,ie.setRenderTarget(F),ie.state.buffers.depth.setMask(!0),ie.autoClear===!1&&ie.clear(),ie.render(z,H),n.visible=!0,ie.xr.enabled=A,ie.shadowMap.autoUpdate=O,ie.setRenderTarget(q);const B=U.viewport;B!==void 0&&ie.state.viewport(B)}}}class Ms extends Yt{constructor(){const e=Ms.SkyShader,t=new Fn({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:ps.clone(e.uniforms),side:Kt,depthWrite:!1});super(new nr(1,1,1),t),this.isSky=!0}}Ms.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new X},up:{value:new X(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Xg(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new nn;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=kl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);const m=kl(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function kl(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const o=new e(r);let a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;const l=new Ft(o,t,n);return i!==void 0&&(l.gpuType=i),l}function Hl(s,e){if(e===kh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===po||e===lc){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===po)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class qg extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jg(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new c0(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=wo.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jc){try{o[ut.KHR_BINARY_GLTF]=new h0(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new E0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:o[u]=new Kg;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[u]=new u0(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[u]=new d0;break;case ut.KHR_MESH_QUANTIZATION:o[u]=new f0;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function jg(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Yg{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new it(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ot);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Eg(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mg(h),c.distance=u;break;case"spot":c=new _g(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Kg{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,n){const i=[];e.color=new it(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class Zg{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Jg{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(r)}}class $g{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Qg{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class e0{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class t0{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(a[0],a[1],a[2],Ot),Promise.all(r)}}class n0{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class i0{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(a[0],a[1],a[2],Ot),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}}class r0{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class s0{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class o0{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class a0{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class l0{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class c0{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==sn.TRIANGLES&&c.mode!==sn.TRIANGLE_STRIP&&c.mode!==sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const g=new st,v=new X,p=new tn,x=new X(1,1,1),y=new Rv(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,g.compose(v,p,x));for(const _ in l)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);bt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const jc="glTF",fr=12,Gl={JSON:1313821514,BIN:5130562};class h0{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-fr,r=new DataView(e,fr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Gl.JSON){const c=new Uint8Array(e,fr+o,a);this.content=n.decode(c)}else if(l===Gl.BIN){const c=fr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ao[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ao[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Xi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],g=l[f];g!==void 0&&(m.normalized=g)}u(d)},a,c)})})}}class d0{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class f0{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class Yc extends Cr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,g=m-c,v=-2*f+3*d,p=f-d,x=1-v,y=p-d+u;for(let _=0;_!==a;_++){const S=o[g+_+a],R=o[g+_+l]*h,T=o[m+_+a],D=o[m+_]*h;r[_]=x*S+y*R+v*T+p*D}return r}}const p0=new tn;class m0 extends Yc{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return p0.fromArray(r).normalize().toArray(r),r}}const sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wl={9728:Bt,9729:Zt,9984:fo,9985:tc,9986:as,9987:di},Xl={33071:on,33648:hs,10497:ui},so={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ao={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},v0={CUBICSPLINE:void 0,LINEAR:Ki,STEP:Sr},oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),s.DefaultMaterial}function ii(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y0(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function _0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function x0(s){let e;const t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ao(t.attributes):e=s.indices+":"+ao(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ao(s.targets[n]);return e}function ao(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ro(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const S0=new st;class E0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Xc(this.options.manager):this.textureLoader=new bg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};ii(r,a,i),Wn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(wo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=so[i.type],a=Xi[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ft(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=so[i.type],c=Xi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,v;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(x);y||(g=new c(a,p*f,i.count*f/h),y=new Ev(g,f/h),t.cache.add(x,y)),v=new Fo(y,l,d%f/h,m)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),v=new Ft(g,l,m);if(i.sparse!==void 0){const p=so.SCALAR,x=Xi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new x(o[1],y,i.sparse.count*p),R=new c(o[2],_,i.sparse.count*l);a!==null&&(v=new Ft(v.array.slice(),v.itemSize,v.normalized));for(let T=0,D=S.length;T<D;T++){const M=S[T];if(v.setX(M,R[T*l]),l>=2&&v.setY(M,R[T*l+1]),l>=3&&v.setZ(M,R[T*l+2]),l>=4&&v.setW(M,R[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wl[d.magFilter]||Zt,h.minFilter=Wl[d.minFilter]||di,h.wrapS=Xl[d.wrapS]||ui,h.wrapT=Xl[d.wrapT]||ui,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const v=new Ht(g);v.needsUpdate=!0,d(v)}),t.load(wo.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||M0(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ic,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zo,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Xo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const u=i[ut.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new it(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ot),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gn);const h=r.alphaMode||oo.OPAQUE;if(h===oo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===oo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qn){const u=r.emissiveFactor;a.emissive=new it().setRGB(u[0],u[1],u[2],Ot)}return r.emissiveTexture!==void 0&&o!==qn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Wn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ii(i,u,r),u})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ql(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=x0(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ql(new nn,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?g0(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],v=o[f];let p;const x=c[f];if(v.mode===sn.TRIANGLES||v.mode===sn.TRIANGLE_STRIP||v.mode===sn.TRIANGLE_FAN||v.mode===void 0)p=r.isSkinnedMesh===!0?new Cc(g,x):new Yt(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),v.mode===sn.TRIANGLE_STRIP?p.geometry=Hl(p.geometry,lc):v.mode===sn.TRIANGLE_FAN&&(p.geometry=Hl(p.geometry,po));else if(v.mode===sn.LINES)p=new Lc(g,x);else if(v.mode===sn.LINE_STRIP)p=new Vo(g,x);else if(v.mode===sn.LINE_LOOP)p=new Cv(g,x);else if(v.mode===sn.POINTS)p=new Pv(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(p.geometry.morphAttributes).length>0&&_0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wn(p,r),v.extensions&&ii(i,p,v),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ii(i,u[0],r),u[0];const d=new oi;r.extensions&&ii(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(dc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Uo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new st;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oo(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],g=f.target,v=g.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(o.push(this.getDependency("node",v)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],g=u[3],v=u[4],p=[];for(let x=0,y=d.length;x<y;x++){const _=d[x],S=f[x],R=m[x],T=g[x],D=v[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,S,R,T,D);if(M)for(let E=0;E<M.length;E++)p.push(M[E])}return new bo(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,S0)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Pc:c.length>1?h=new oi:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Wn(h,r),r.extensions&&ii(n,h,r),r.matrix!==void 0){const u=new st;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new oi;n.name&&(r.name=i.createUniqueName(n.name)),Wn(r,n),n.extensions&&ii(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof _n||d instanceof Ht)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Gn[r.path]===Gn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Gn[r.path]){case Gn.weights:c=$i;break;case Gn.rotation:c=pi;break;case Gn.position:case Gn.scale:c=Qi;break;default:switch(n.itemSize){case 1:c=$i;break;case 2:case 3:default:c=Qi;break}break}const h=i.interpolation!==void 0?v0[i.interpolation]:Ki,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Gn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ro(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof pi?m0:Yc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function b0(s,e,t){const n=e.attributes,i=new Mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),a.normalized){const h=Ro(Xi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new X,l=new X;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=Ro(Xi[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Sn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ql(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Ao[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return en.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${en.workingColorSpace}" not supported.`),Wn(s,e),b0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y0(s,e.targets,t):s})}class w0 extends mi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new qo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new T0(e)}}class T0{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=A0(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function A0(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const u=R0(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function R0(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new kg;let a,l,c,h,u,d,f,m;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let v=0,p=g.length;v<p;)switch(g[v++]){case"m":a=g[v++]*e+t,l=g[v++]*e+n,o.moveTo(a,l);break;case"l":a=g[v++]*e+t,l=g[v++]*e+n,o.lineTo(a,l);break;case"q":c=g[v++]*e+t,h=g[v++]*e+n,u=g[v++]*e+t,d=g[v++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=g[v++]*e+t,h=g[v++]*e+n,u=g[v++]*e+t,d=g[v++]*e+n,f=g[v++]*e+t,m=g[v++]*e+n,o.bezierCurveTo(u,d,f,m,c,h);break}}return{offsetX:r.ha*e,path:o}}class C0 extends Wo{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}const P0="/assets/screencrab-742dd95e.glb";class L0{constructor(e,t,n,i=.3,r=1.2,o=65280){const a=new qn({color:o}),l=[];for(let h=0;h<e.length;h++){const u=new C0(e[h],{font:n,size:i,height:.02});u.computeBoundingBox();const d=u.boundingBox.max.x-u.boundingBox.min.x;u.translate(-d/2,-h*r,0),l.push(u)}const c=Xg(l);this.mesh=new Yt(c,a),this.mesh.position.copy(t)}addToScene(e){e.add(this.mesh)}}const jl=class{constructor(s,e,t,n,i,r,o,a=1){pt(this,"createWalkPath",()=>{let t=[];for(let n=0;n<3;n++)t.push({x:this.getRandomInRange(-20,20),z:this.getRandomInRange(-20,20)});return t});pt(this,"formatText",s=>{let e=12,t=[],n=0;for(let i=0;i<s.length-1;i+=e){if(n++,n>5){t[4]+=". . .";break}t.push(s.substring(i,i+e))}return t});pt(this,"addDecal",(s,e,t)=>{new w0().load("/helvetiker_regular.typeface.json",n=>{const i=this.formatText(e),r=new X(this.crabObject.position.x,this.crabObject.position.y+.8,this.crabObject.position.z);this.multiLineText=new L0(i,r,n,.1,.16),this.multiLineText.addToScene(s),this.scaleCrab(t-1)})});pt(this,"setSelected",s=>{s?(this.box=new Vg(this.crabObject,65280),this.scene.add(this.box)):this.scene.remove(this.box)});pt(this,"getRandomInRange",(s,e)=>Math.random()*(e-s)+s);pt(this,"getRandomInt",(s,e)=>(s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s+1))+s));pt(this,"resetWalkPath",()=>{let s={x:this.walkPath[this.walkPath.length-1].x,z:this.walkPath[this.walkPath.length-1].z};this.walkPath&&(this.walkPath=this.createWalkPath(),this.walkPath[0]=s),Math.random()<.25&&(this.isWalking=!1,this.animationsMap.get("walk").stop(),this.stopDuration=Math.random()*10,this.elapsedStopTime=0)});pt(this,"crabWalk",s=>{if(this.isWalking){this.walkTime>=1?(this.walkTime=0,this.resetWalkPath()):this.walkTime+=.01;const t=Math.floor(this.walkTime*(this.walkPath.length-1)),n=t+1,i=this.walkTime*(this.walkPath.length-1)-t,r=this.walkPath[t];let o=this.walkPath[n];o||(o=r),this.currentUnitVector=this.getUnitVector2D(new Pe(r.x,r.z),new Pe(o.x,o.z));const a=r.x+(o.x-r.x)*i,l=r.z+(o.z-r.z)*i,c=new vn.Vec3(a-this.crabBody.position.x,0,l-this.crabBody.position.z);c.normalize();const h=50;this.crabBody.applyForce(c.scale(h),this.crabBody.position),this.syncPositions(c)}else this.elapsedStopTime+=s,this.elapsedStopTime>this.stopDuration&&(this.isWalking=!0)});pt(this,"setPosition",s=>{this.crabObject.position.set(s),this.crabBody.position.set(s)});pt(this,"syncPositions",s=>{this.crabObject.position.copy(this.crabBody.position),this.crabObject.quaternion.copy(this.crabBody.quaternion);const e=Math.atan2(s.z,s.x),t=new vn.Quaternion;t.setFromEuler(0,-e,0,"XYZ"),this.crabBody.quaternion.copy(t);const n=Math.atan2(-s.z,s.x),i=new Rr(0,n+Math.PI/2,0);this.crabObject.rotation.copy(i),this.multiLineText&&(this.multiLineText.mesh.position.set(this.crabBody.position.x+s.x*.8*this.crabObject.scale.x,this.crabBody.position.y+.8*this.crabObject.scale.y,this.crabBody.position.z+s.z*.8*this.crabObject.scale.z),this.multiLineText.mesh.rotation.copy(i)),this.box&&this.box.update()});pt(this,"scaleCrab",s=>{this.crabObject.scale.x+=s,this.crabObject.scale.y+=s,this.crabObject.scale.z+=s,this.multiLineText.mesh.scale.x+=s,this.multiLineText.mesh.scale.y+=s,this.multiLineText.mesh.scale.z+=s;const e=this.crabObject.scale.x-.25;this.boxShape.halfExtents.x=e,this.boxShape.halfExtents.y=e,this.boxShape.halfExtents.z=e,this.boxShape.updateConvexPolyhedronRepresentation()});pt(this,"updateCrab",s=>{this.crabObject&&(this.crabWalk(s),this.crabMixer.update(s))});pt(this,"getUnitVector2D",(s,e)=>{const t=new Pe;return t.subVectors(e,s),new Pe().copy(t).normalize()});pt(this,"remove",()=>{this.crabObject&&(this.scene.remove(this.crabObject),this.crabObject=null),this.multiLineText&&(this.scene.remove(this.multiLineText),this.multiLineText=null),this.crabBody&&(this.world.removeBody(this.crabBody),this.crabBody=null),this.crabMixer&&(this.crabMixer.stopAllAction(),this.crabMixer=null)});this.animationsMap=new Map,this.walkTime=0,this.walkPath=this.createWalkPath(),this.isWalking=!0,this.stopDuration=0,this.elapsedStopTime=0,this.scene=e,this.world=t,this.boxShape=new vn.Box(new vn.Vec3(.75,.75,.75));const l=new vn.Material("slippery");l.friction=0,this.crabBody=new vn.Body({mass:1,material:l}),this.crabBody.addShape(this.boxShape),this.crabBody.position.copy(n),this.crabBody.linearDamping=.999,s.load(P0,c=>{c.scene.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.crabObject=c.scene.getObjectByName("Armature"),this.crabObject.position.set(n.x,n.y,n.z),this.crabObject.traverse(h=>{h instanceof Cc&&(h.postContent=i,h.index=r,h.material.name==="crabred"&&h.material.color.set(o))}),this.scene.add(this.crabObject),this.crabBody.position.set(this.crabObject.position.x,this.crabObject.position.y,this.crabObject.position.z),t.addBody(this.crabBody),i&&this.addDecal(this.scene,i,a),this.crabMixer=new Og(this.crabObject),c.animations.forEach(h=>{this.animationsMap.set(h.name,this.crabMixer.clipAction(h))}),this.animationsMap.get("walk").fadeIn(1).play()})}},I0="/assets/waternormals-add9912b.jpg",N0="/assets/paradise-469c7954.glb",Bi="https://postinparadise.com",pr={getUserId:async()=>{const s=await fetch(`${Bi}/userId`);if(!s.ok)throw new Error(`Failed with status: ${s.status}`);return await s.json()},getPosts:async()=>{const s=await fetch(`${Bi}/posts`);if(!s.ok)throw new Error(`Failed with status: ${s.status}`);return await s.json()},getPostsById:async s=>{console.log(s);const e=await fetch(`${Bi}/posts/${s}`);if(!e.ok)throw new Error(`Failed with status: ${e.status}`);return await e.json()},postPost:async s=>{const e=await fetch(`${Bi}/posts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:s})});if(!e.ok)throw new Error(`Failed with status: ${e.status}`);return await e.json()},addPost:async s=>{const e=await fetch(`${Bi}/posts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:s})});if(!e.ok)throw new Error(await e.text());return(await e.json()).postId},addLike:async s=>{const e=await fetch(`${Bi}/posts/${s}/like`,{method:"PUT"});if(!e.ok)throw new Error(`Failed with status: ${e.status}`);return await e.json()}},D0="/assets/1da4ff-a1a67736.png",U0="/assets/36d241-325b490e.png",B0="/assets/ff9e00-75652ba6.png",F0="/assets/ff69b4-8a873b95.png",O0="/assets/fffb01-757f68c1.png",z0=()=>window.innerWidth<=768,V0=class{constructor(){pt(this,"publishPost",()=>{const s=document.getElementById("postInput").value;this.currentPost?window.confirm(`This will overwrite your current post: 
"${this.currentPost.content}"
and reset your likes (${this.currentPost.likes_count}) to 0. 

Proceed?`)&&this.createPost(s):this.createPost(s)});pt(this,"crabListSelect",s=>{if(s.stopPropagation(),console.log(this.crabs.length,this.crabList.children.length),this.crabs.forEach((e,t)=>{e.setSelected(!1),this.crabList.children[t]&&this.crabList.children[t].classList.remove("selected")}),s.target.tagName==="IMG"){const e=s.target.parentElement,t=Array.from(s.currentTarget.children).indexOf(e);this.crabList.children[t].classList.add("selected"),this.crabs[t].setSelected(!0)}});pt(this,"scrollLeft",s=>{s.stopPropagation(),this.crabList.scrollLeft-=this.scrollAmount});pt(this,"scrollRight",s=>{s.stopPropagation(),this.crabList.scrollLeft+=this.scrollAmount});pt(this,"createPost",s=>{pr.addPost(s).then(e=>{console.log("Post added with ID: ",e,"Content: ",s),location.reload()}).catch(e=>{console.error("Error adding post:",e)})});pt(this,"loadUserInfo",()=>{pr.getUserId().then(s=>{s.user&&(this.userId=s.user[0].id,console.log(this.userId),pr.getPostsById(this.userId).then(e=>{this.currentPost=e}).catch(e=>console.log("Error getting post")))}).catch(s=>{console.log("Error getting userid: ",s)})});pt(this,"getRandomColor",()=>{let s=16752128;switch(this.getRandomInt(0,5)){case 0:s=16752128;break;case 1:s=1942783;break;case 2:s=16738740;break;case 3:s=3592769;break;case 4:s=16775937;break}return s});pt(this,"loadPosts",()=>{pr.getPosts().then(s=>{s.posts.forEach((e,t)=>{let n=this.getRandomColor(),i=15,r=e.likes_count*.1;this.crabs.push(new jl(this.gltfLoader,this.scene,this.world,{x:this.getRandomInt(-i,i),y:3,z:this.getRandomInt(-i,i)},e.content,t,n,1+r));let o=document.createElement("div");o.className="imageWrapper",o.style.width=z0()?"85%":"30%";let a=document.createElement("img");switch(n.toString(16)){case"ff9e00":a.src=B0;break;case"1da4ff":a.src=D0;break;case"ff69b4":a.src=F0;break;case"36d241":a.src=U0;break;case"fffb01":a.src=O0;break}a.className="responsiveImage",o.append(a);let l=document.createElement("div");l.textContent=e.content,l.className="responsiveText",o.append(l);let c=document.createElement("div");console.log(e),c.textContent="💚"+e.likes_count,c.className="likesCount",o.append(c),c.onclick=()=>{console.log(e),pr.addLike(e.id).then(h=>{console.log(h);let u=e.likes_count+1;c.textContent="💚"+u}).catch(h=>{console.log(h)})},this.crabList.appendChild(o)})}).catch(s=>{console.error("Error adding post:",s)})});pt(this,"showOverlay",s=>{const e=document.getElementById("crabListOverlay");e.style.display=s?"block":"none"});pt(this,"onMouseClick",s=>{this.mouse.x=s.clientX/window.innerWidth*2-1,this.mouse.y=-(s.clientY/window.innerHeight)*2+1,this.handleSceneClick()});pt(this,"onTouchStart",s=>{const e=s.touches[0];this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.handleSceneClick()});pt(this,"handleSceneClick",()=>{this.raycaster.setFromCamera(this.mouse,this.camera);const s=this.raycaster.intersectObjects(this.crabs.map(e=>e.crabObject));if(s.length>0){const e=s[0].object;this.handleObjectClick(e)}else this.handleObjectClick(null)});pt(this,"onWindowResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});pt(this,"getRandomInt",(s,e)=>(s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s+1))+s));pt(this,"spawnCrab",s=>{this.crabs.length<5&&(this.crabs.push(new jl(this.gltfLoader,this.scene,this.world,s,"hi my name is david it is so very nice to be online, right?")),console.log("new crab. crab count: ",this.crabs.length))});pt(this,"updateCrabs",s=>{performance.now()-this.lastCrabSpawn>this.crabSpawnInterval&&(this.lastCrabSpawn=performance.now()),this.crabs.length>0&&this.crabs.forEach(e=>{e.updateCrab(s)})});pt(this,"animate",s=>{this.world.step(s),this.updateCrabs(s)});pt(this,"render",()=>{this.water.material.uniforms.time.value+=1/60,this.renderer.render(this.scene,this.camera)});this.clock=new wg,this.animationsMap=new Map,this.crabs=[],this.container=document.getElementById("container"),this.lastCrabSpawn=performance.now(),this.crabSpawnInterval=1e3,this.clonedCrab=null,this.currentImage=0,this.renderer=new Rc,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=Ql,this.renderer.toneMappingExposure=.5,this.container.appendChild(this.renderer.domElement),this.scene=new Sv,this.world=new vn.World,this.world.gravity.set(0,-20,0);const s=new vn.Plane;this.floorBody=new vn.Body({mass:0}),this.floorBody.addShape(s),this.floorBody.quaternion.setFromAxisAngle(new vn.Vec3(1,0,0),-Math.PI/2),this.floorBody.position.set(0,1.5,0),this.world.addBody(this.floorBody),this.crabList=document.getElementById("crabList"),this.loadUserInfo(),this.loadPosts(),this.camera=new Xt(25,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(0,4,40),this.sun=new X;const e=new ys(1e4,1e4);this.water=new Wg(e,{textureWidth:512,textureHeight:512,waterNormals:new Xc().load(I0,a=>{a.wrapS=a.wrapT=ui}),sunDirection:new X,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water),this.sky=new Ms,this.sky.scale.setScalar(1e4),this.scene.add(this.sky);const t=this.sky.material.uniforms;t.turbidity.value=10,t.rayleigh.value=2,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.8,this.gltfLoader=new qg;var n=0,i=0,r=0;this.gltfLoader.load(N0,a=>{a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),this.leaves=a.scene.getObjectByName("Armature"),this.leaves.position.set(n,i+8,r),this.scene.add(this.leaves),this.tree=a.scene.getObjectByName("tree"),this.tree.position.set(n-1,i+4.4,r),this.scene.add(this.tree),this.island=a.scene.getObjectByName("island"),this.island.position.set(n,i-.9,r),this.island.scale.set(20,3.1,20),this.scene.add(this.island)}),this.pmremGenerator=new yo(this.renderer);let o;this.controls=new Gg(this.camera,this.renderer.domElement),this.controls.maxPolarAngle=Math.PI*.495,this.controls.target.set(0,3,0),this.controls.minDistance=5,this.controls.maxDistance=200,this.controls.update(),this.sun.setFromSphericalCoords(1,Math.PI/2,0),this.sky.material.uniforms.sunPosition.value.copy(this.sun),this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(),o!==void 0&&o.dispose(),o=this.pmremGenerator.fromScene(this.sky),this.scene.environment=o.texture,this.raycaster=new zg,this.mouse=new Pe,window.addEventListener("resize",this.onWindowResize),window.addEventListener("click",this.onMouseClick,!1),window.addEventListener("touchstart",this.onTouchStart,!1),this.scrollAmount=window.innerWidth*.5,document.getElementById("leftArrow").addEventListener("click",this.scrollLeft),document.getElementById("leftArrow").addEventListener("touchstart",this.scrollLeft),document.getElementById("rightArrow").addEventListener("click",this.scrollRight),document.getElementById("rightArrow").addEventListener("touchStart",this.scrollRight),document.getElementById("crabList").addEventListener("click",this.crabListSelect),document.getElementById("crabList").addEventListener("touchstart",this.crabListSelect),document.getElementById("publishBtn").addEventListener("click",this.publishPost)}handleObjectClick(s){if(s){this.showOverlay(!0),this.crabs.forEach(t=>t.setSelected(!1)),[...this.crabList.children].forEach(t=>{t.classList.remove("selected")}),this.crabs[s.index].setSelected(!0),this.crabList.children[s.index].classList.add("selected");const e=this.crabList.querySelector("div.imageWrapper.selected");e&&e.scrollIntoView({behavior:"smooth",block:"center"})}else this.showOverlay(!1),this.crabs.forEach(e=>e.setSelected(!1))}};var ms=!1;Wc.onLoad=()=>{document.getElementById("loading")&&(document.getElementById("loading").outerHTML=""),ms||(Kc(),ms=!0)};document.addEventListener("visibilitychange",function(){document.hidden?(ms=!1,Ar.clock.stop()):(ms=!0,Ar.clock.start())});const Yl=document.getElementById("terminal"),k0=document.getElementById("toggleTab");let lo=!1;k0.addEventListener("click",function(){lo?(Yl.style.top="-120px",document.getElementById("toggleTab").innerHTML="⬇️ post in paradise ⬇️"):(Yl.style.top="50px",document.getElementById("toggleTab").innerHTML="⬆️ close ⬆️"),lo=!lo});const Ar=new V0,Kc=()=>{requestAnimationFrame(Kc),H0(),Ar.animate(Ar.clock.getDelta())},H0=()=>{Ar.render()};
