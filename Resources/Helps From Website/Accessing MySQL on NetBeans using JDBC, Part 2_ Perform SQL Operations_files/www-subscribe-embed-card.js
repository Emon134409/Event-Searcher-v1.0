(function(){var k=this;function l(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"string"==typeof a}function t(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b};var aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function y(a,b){return a<b?-1:a>b?1:0};var z=Array.prototype,ca=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=z.filter?function(a,b,c){return z.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e};
function ea(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=d,f=n(e);if("array"==f||"object"==f&&"number"==typeof e.length){e=a.length||0;f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};function fa(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function ga(a,b){var c;a.classList?c=a.classList.contains(b):(c=fa(a),c=0<=ca(c,b));return c}function ha(a,b){a.classList?a.classList.add(b):ga(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ia(a,b){a.classList?a.classList.remove(b):ga(a,b)&&(a.className=da(fa(a),function(a){return a!=b}).join(" "))};var ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function la(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ka.length;f++)c=ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function ma(a,b){this.width=a;this.height=b};var A;a:{var na=k.navigator;if(na){var oa=na.userAgent;if(oa){A=oa;break a}}A=""};var pa=-1!=A.indexOf("Opera")||-1!=A.indexOf("OPR"),B=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),qa=-1!=A.indexOf("Edge"),C=-1!=A.indexOf("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge"))&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"))&&-1==A.indexOf("Edge"),ra=-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge");
function sa(){var a=A;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ra)return/WebKit\/(\S+)/.exec(a)}function ta(){var a=k.document;return a?a.documentMode:void 0}var ua=function(){if(pa&&k.opera){var a;var b=k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=sa())&&(a=b?b[1]:"");return B&&(b=ta(),b>parseFloat(a))?String(b):a}(),va={};
function wa(a){if(!va[a]){for(var b=0,c=aa(String(ua)).split("."),d=aa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),v=RegExp("(\\d*)(\\D*)","g");do{var q=m.exec(g)||["","",""],r=v.exec(h)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=y(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||y(0==q[2].length,0==r[2].length)||y(q[2],r[2])}while(0==b)}va[a]=0<=b}}
var xa=k.document,ya=xa&&B?ta()||("CSS1Compat"==xa.compatMode?parseInt(ua,10):5):void 0;var E;if(!(E=!C&&!B)){var F;if(F=B)F=9<=ya;E=F}E||C&&wa("1.9.1");B&&wa("9");function za(){var a=document;return p("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"};function Aa(a){var b=a.offsetWidth,c=a.offsetHeight,d=ra&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;a:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}B&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new ma(e.right-e.left,e.bottom-e.top)}return new ma(b,c)};var G=window,H=document,Ba=G.location;function Ca(){}var Da=/\[native code\]/;function I(a,b,c){return a[b]=a[b]||c}function Ea(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}function Fa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}function J(){var a;if((a=Object.create)&&Da.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}var K=I(G,"gapi",{});var L;L=I(G,"___jsl",J());I(L,"I",0);I(L,"hel",10);function Ga(){var a=Ba.href,b;if(L.dpo)b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}function Ha(a){var b=I(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}function M(a){return I(I(L,"H",J()),a,J())};var N=I(L,"perf",J());I(N,"g",J());var Ia=I(N,"i",J());I(N,"r",[]);J();J();function O(a,b,c){b&&0<b.length&&(b=Ja(b),c&&0<c.length&&(b+="___"+Ja(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=I(Ia,"_p",J()),I(b,c,J())[a]=(new Date).getTime(),b=N.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}function Ja(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};var Ka=J(),Q=[];function R(a){throw Error("Bad hint"+(a?": "+a:""));};Q.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=I(L,b,[]).concat(c):I(L,b,c)}if(b=a.u)a=I(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var La=/^(\/[a-zA-Z0-9_\-]+)+$/,Ma=/^[a-zA-Z0-9\-_\.,!]+$/,Na=/^gapi\.loaded_[0-9]+$/,Oa=/^[a-zA-Z0-9,._-]+$/;function Pa(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ka[f],h=null;g?h=g(e,b,c,d):R("no hint processor for: "+f);h||R("failed to generate load url");b=h;c=b.match(Qa);(d=b.match(Ra))&&1===d.length&&Sa.test(b)&&c&&1===c.length||R("failed sanity: "+a);return h}
function Ta(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}a=Ua(a);Na.test(c)||R("invalid_callback");b=Va(b);d=d&&d.length?Va(d):null;return[encodeURIComponent(a.o).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.f?"/am="+e(a.f):"",a.j?"/rs="+e(a.j):"",a.l?"/t="+e(a.l):"","/cb=",e(c)].join("")}
function Ua(a){"/"!==a.charAt(0)&&R("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))R("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");La.test(b)||R("invalid_prefix");c=S(a,"k",!0);d=S(a,"am");e=S(a,"rs");a=S(a,"t");return{o:b,version:c,
f:d,j:e,l:a}}function Va(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Oa.test(e)&&b.push(e)}return b.join(",")}function S(a,b,c){a=a[b];!a&&c&&R("missing: "+b);if(a){if(Ma.test(a))return a;R("invalid: "+b)}return null}var Sa=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ra=/\/cb=/g,Qa=/\/\//g;function Wa(){var a=Ga();if(!a)throw Error("Bad hint");return a}
Ka.m=function(a,b,c,d){(a=a[0])||R("missing_hint");return"https://apis.google.com"+Ta(a,b,c,d)};var T=decodeURI("%73cript");function Xa(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Ea.call(b,e)&&c.push(e)}return c}function Ya(a){"loading"!=H.readyState?Za(a):H.write("<"+T+' src="'+encodeURI(a)+'"></'+T+">")}function Za(a){var b=H.createElement(T);b.setAttribute("src",a);b.async="true";(a=H.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(H.head||H.body||H.documentElement).appendChild(b)}
function $a(a,b){var c=b&&b._c;if(c)for(var d=0;d<Q.length;d++){var e=Q[d][0],f=Q[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}function ab(a,b,c){bb(function(){var c;c=b===Ga()?I(K,"_",J()):J();c=I(M(b),"_",c);a(c)},c)}
function cb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);$a(a,c);var d=a?a.split(":"):[],e=c.h||Wa(),f=I(L,"ah",J());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var m=h.split("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e,v=g.length&&g[g.length-1]||null,q=v;v&&v.hint==m||(q={hint:m,features:[]},g.push(q));q.features.push(h)}var r=g.length;if(1<r){var D=c.callback;D&&(c.callback=function(){0==--r&&D()})}for(;d=g.shift();)db(d.features,c,d.hint)}else db(d||[],c,e)}
function db(a,b,c){function d(a,b){if(r)return 0;G.clearTimeout(q);D.push.apply(D,u);var d=((K||{}).config||{}).update;d?d(f):f&&I(L,"cu",[]).push(f);if(b){O("me0",a,P);try{ab(b,c,v)}finally{O("me1",a,P)}}return 1}a=Fa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,v=void 0;"function"==typeof m&&(v=m);var q=null,r=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=I(M(c),"r",[]).sort(),D=I(M(c),"L",[]).sort(),P=[].concat(m);
0<g&&(q=G.setTimeout(function(){r=!0;h()},g));var u=Xa(a,D);if(u.length){var u=Xa(a,m),w=I(L,"CP",[]),x=w.length;w[x]=function(a){function b(){var a=w[x+1];a&&a()}function c(b){w[x]=null;d(u,a)&&Ha(function(){e&&e();b()})}if(!a)return 0;O("ml1",u,P);0<x&&w[x-1]?w[x]=function(){c(b)}:c(b)};if(u.length){var ba="loaded_"+L.I++;K[ba]=function(a){w[x](a);K[ba]=null};a=Pa(c,u,"gapi."+ba,m);m.push.apply(m,u);O("ml0",u,P);b.sync||G.___gapisync?Ya(a):Za(a)}else w[x](Ca)}else d(u)&&e&&e()};function bb(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,cb("debug_error",function(){try{window.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};K.load=function(a,b){return bb(function(){return cb(a,b)})};var eb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",eb);t("yt.tokens_",window.yt&&window.yt.tokens_||{});t("yt.msgs_",window.yt&&window.yt.msgs_||{});function fb(){return l("gapi.iframes.getContext")()}function gb(){return l("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")};var ib=l("yt.net.ping.workerUrl_")||null;t("yt.net.ping.workerUrl_",ib);function jb(a){try{var b=kb,c=gb();a.register("msg-hovercard-subscription",b,c)}catch(d){}}function kb(a){if(a){a=!!a.isSubscribed;var b=za();a?ia(b,"subscribe"):ha(b,"subscribe");a?ha(b,"subscribed"):ia(b,"subscribed")}};var U;
function lb(){var a;a=za();var b;b:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Aa(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Aa(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.width,height:a.height};fb().ready(a,null,void 0);a=gb();fb().addOnOpenerHandler(jb,null,a)}U="function"==n(lb)?{callback:lb}:lb||{};var nb;(nb=U.gapiHintOverride)||(nb="GAPI_HINT_OVERRIDE"in eb?eb.GAPI_HINT_OVERRIDE:void 0);
if(nb){var ob;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],pb=V.split("?",2),W=1<pb.length?pb[1]:pb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var qb=W.split("&"),X={},rb=0,sb=qb.length;rb<sb;rb++){var Y=qb[rb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),tb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==n(X[Z])?ea(X[Z],tb):X[Z]=[X[Z],tb]:X[Z]=tb}}ob=X}else ob={};var ub=ob.gapi_jsh;ub&&la(U,
{_c:{jsl:{h:ub}}})}cb("gapi.iframes:gapi.iframes.style.common",U);})();
