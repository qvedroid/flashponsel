(self.AMP=self.AMP||[]).push({n:"amp-iframe",v:"1516337355291",f:(function(AMP){var k;function r(a,b){function d(){}d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=a;for(var c in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var t=self.log;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function w(){if(t.dev)return t.dev;throw Error("failed to call initLogConstructor");};function x(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function y(a){return a||{}};function z(a){a=a.__AMP_TOP||a;var b=a.services;b||(b=a.services={});a=b.timer;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function B(a,b){var d=a.length-b.length;return 0<=d&&a.indexOf(b,d)==d};function C(a,b){for(var d,c=a;c&&c!==d;c=c.parentElement)if(b(c))return c;return null}function D(a){return a.closest?a.closest(".i-amphtml-overlay"):C(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".i-amphtml-overlay"):!1})};var E=(self.AMP_CONFIG||{}).thirdPartyFrameHost||"ampproject.net";var F,G;
function H(a){var b;F||(F=self.document.createElement("a"),G=self.UrlCache||(self.UrlCache=Object.create(null)));var d=G[a];if(d)return d;var c=F;c.href=a;c.protocol||(c.href=c.href);var e={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=c.origin&&
"null"!=c.origin?c.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;var f=e,g=f;return b?g:G[a]=g}function I(a){"string"==typeof a&&(a=H(a));return"https:"==a.protocol||"localhost"==a.hostname||B(a.hostname,".localhost")};function aa(a,b){try{return JSON.parse(a)}catch(d){b&&b(d)}};var J,K="Webkit webkit Moz moz ms O o".split(" ");function L(a,b){var d,c;c=a.style;J||(J=x());var e=J.zIndex;if(!e){e="zIndex";if(void 0===c.zIndex){var f;b:{for(f=0;f<K.length;f++){var g=K[f]+"ZIndex";if(void 0!==c[g]){f=g;break b}}f=""}void 0!==c[f]&&(e=f)}J.zIndex=e}c=e;c&&(a.style[c]=d?b+d:b)};var ba={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0};function M(a,b,d,c){return{left:a,top:b,width:d,height:c,bottom:b+c,right:a+d,x:a,y:b}}function ca(a){for(var b=-Infinity,d=Infinity,c=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),d=Math.min(d,g.left+g.width),c=Math.max(c,g.top),e=Math.min(e,g.top+g.height),d<b||e<c))return null}return Infinity==d?null:M(b,c,d-b,e-c)}function N(a,b,d){return 0==b&&0==d||0==a.width&&0==a.height?a:M(a.left+b,a.top+d,a.width,a.height)};function da(a){if(!O(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(d){return w().error("MESSAGING","Failed to parse message: "+a,d),null}}function O(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function ea(a,b){for(var d=[],c=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?(c<e&&(a[c]=f),c++):d.push(f)}c<a.length&&(a.length=c)};function P(a,b,d){var c=a.listeningFors;!c&&d&&(c=a.listeningFors=Object.create(null));a=c||null;if(!a)return a;var e=a[b];!e&&d&&(e=a[b]=[]);return e||null}function fa(a,b,d){var c=H(b.src).origin,e=d?b.getAttribute("data-amp-3p-sentinel"):"amp";a=P(a,e,!0);for(var f,e=0;e<a.length;e++){var g=a[e];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:c,events:Object.create(null)},a.push(f));return f.events}
function ga(a){for(var b=y({sentinel:"unlisten"}),d=a.length-1;0<=d;d--){var c=a[d];if(!c.frame.contentWindow){a.splice(d,1);var e=c.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function ha(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=ia(b.data);if(c&&c.sentinel){var d;d=c.sentinel;var f=b.origin,g=b.source,h=P(a,d);if(h){for(var n,l=0;l<h.length;l++){var q=h[l],p=q.frame.contentWindow;if(p)if("amp"===d){if(q.origin===f&&p==g){n=q;break}}else{var m;if(!(m=g==p))b:{for(m=g;m&&m!=m.parent;m=m.parent)if(m==p){m=!0;break b}m=!1}if(m){n=q;break}}else setTimeout(ga,0,h)}d=n?n.events:null}else d=h;var A=d;if(A){var v=A[c.type];if(v)for(v=v.slice(),d=0;d<v.length;d++)(0,v[d])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function Q(a,b,d,c,e){function f(b,c,f){if(e||c==a.contentWindow)"unlisten"==b.sentinel?n():d(b,c,f)}var g=a.ownerDocument.defaultView;ha(g);c=fa(g,a,c);var h=c[b]||(c[b]=[]),n;h.push(f);return n=function(){if(f){var a=h.indexOf(f);-1<a&&h.splice(a,1);d=h=f=null}}}
function ja(a,b,d,c,e){if(a.contentWindow){c.type=d;c.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp";var f=c;e&&(f="amp-"+JSON.stringify(c));for(a=0;a<b.length;a++)d=b[a],d.win.postMessage(f,d.origin)}}function ia(a){"string"==typeof a&&(a="{"==a.charAt(0)?aa(a,function(a){w().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:O(a)?da(a):null);return a}
function R(a,b,d,c){var e=this;this.c=a;this.J=d;this.l=[];this.W=Q(this.c,b,function(a,b,d){e.l.some(function(a){return a.win==b})||e.l.push({win:b,origin:d});c(a,b,d)},this.J,this.J)}R.prototype.send=function(a,b){ea(this.l,function(a){return!!a.win.parent});ja(this.c,this.l,a,b,this.J)};R.prototype.destroy=function(){this.W();this.l.length=0};var ka=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],la=Date.now();function S(a,b,d){var c=this;this.H=a;this.m=null;this.M=this.O=!1;this.F=null;this.G=a.getViewport();this.P=new R(b,"send-intersections",d||!1,function(){ma(c)});this.m=new T(function(a){for(var b=0;b<a.length;b++)delete a[b].target;c.P.send("intersection",y({changes:a}))},{threshold:ka});this.m.tick(this.G.getRect());this.fire=function(){c.O&&c.M&&c.m.tick(c.G.getRect())}}
function ma(a){a.O=!0;a.m.observe(a.H.element);a.H.getVsync().measure(function(){a.M=a.H.isInViewport();a.fire()});var b=a.G.onScroll(a.fire),d=a.G.onChanged(a.fire);a.F=function(){b();d()}}S.prototype.onViewportCallback=function(a){this.M=a};S.prototype.destroy=function(){this.O=!1;this.m=null;this.F&&(this.F(),this.F=null);this.P.destroy();this.P=null};
function T(a,b){this.S=a;var d=b&&b.threshold,d=d?Array.isArray(d)?d:[d]:[0];for(a=0;a<d.length;a++){var c=d[a];"number"===typeof c&&isFinite(c)}this.V=d.sort();this.N=null;this.U=void 0;this.h=[]}T.prototype.disconnect=function(){this.h.length=0};
T.prototype.observe=function(a){for(var b=0;b<this.h.length;b++)if(this.h[b].element===a){w().warn("INTERSECTION-OBSERVER","should observe same element once");return}var d={element:a,currentThresholdSlot:0};this.N&&(a=U(this,d,this.N,this.U))&&this.S([a]);this.h.push(d)};T.prototype.unobserve=function(a){for(var b=0;b<this.h.length;b++)if(this.h[b].element===a){this.h.splice(b,1);return}w().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};
T.prototype.tick=function(a,b){b&&(a=N(a,-b.left,-b.top),b=N(b,-b.left,-b.top));this.N=a;this.U=b;for(var d=[],c=0;c<this.h.length;c++){var e=U(this,this.h[c],a,b);e&&d.push(e)}d.length&&this.S(d)};
function U(a,b,d,c){var e=b.element,f=null,g=e.getLayoutBox(),h=e.getOwner(),f=h&&h.getLayoutBox(),n=ca(g,f,d,c)||M(0,0,0,0),h=n,l=g,h=h.width*h.height/(l.width*l.height);a=a.V;var l=0,q=a.length;if(0==h)a=0;else{for(var p=(l+q)/2|0;l<p;)h<a[p]?q=p:l=p,p=(l+q)/2|0;a=q}var m=a;if(m==b.currentThresholdSlot)return null;b.currentThresholdSlot=m;d=c?null:d;c=n;a=g;if(l=d)c=N(c,-d.left,-d.top),a=N(a,-d.left,-d.top),l=N(l,-d.left,-d.top);var A={time:"undefined"!==typeof performance&&performance.now?performance.now():
Date.now()-la,rootBounds:l,boundingClientRect:a,intersectionRect:c,intersectionRatio:h,target:e};return A};var na="allowfullscreen allowpaymentrequest allowtransparency allow frameborder referrerpolicy scrolling".split(" "),oa=0,V=0;function W(a){a=AMP.BaseElement.call(this,a)||this;a.D=null;a.B=!1;a.K=!1;a.o=!1;a.T=!1;a.X=null;a.I=null;a.c=null;a.C=!1;a.j=null;a.w="";a.iframeSrc=null;a.A=null;a.L=void 0;return a}r(W,AMP.BaseElement);k=W.prototype;k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a};
k.assertSource=function(a,b,d){var c=H(a);u().assert(I(c)||"data:"==c.protocol,"Invalid <amp-iframe> src. Must start with https://. Found %s",this.element);var e=H(b);u().assert(!(" "+d+" ").match(/\s+allow-same-origin\s+/i)||c.origin!=e.origin&&"data:"!=c.protocol,"Origin of <amp-iframe> must not be equal to container %sif allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",this.element);u().assert(!(B(c.hostname,"."+E)||
B(c.hostname,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",a);return a};
k.assertPosition=function(){var a=this.element.getLayoutBox(),b=Math.min(600,.75*this.getViewport().getSize().height);u().assert(a.top>=b,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/master/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",this.element,
a.top,b)};function X(a){if(a){var b=H(a);"data:"==b.protocol||b.hash&&"#"!=b.hash||(b=a.indexOf("#"),a=(-1==b?a:a.substring(0,b))+"#amp=1");return a}}
k.firstAttachedCallback=function(){this.w=this.element.getAttribute("sandbox");var a;if(!(a=X(this.element.getAttribute("src")))){a=this.element.getAttribute("srcdoc");var b=this.w;if(a){u().assert(!(" "+b+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element);if("undefined"!==typeof TextEncoder)b=(new TextEncoder("utf-8")).encode(a);else{a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),d=0;d<a.length;d++){var c=a.charCodeAt(d);
b[d]=c}}a=btoa;d=Array(b.length);for(c=0;c<b.length;c++)d[c]=String.fromCharCode(b[c]);b=d.join("");a="data:text/html;charset=utf-8;base64,"+a(b)}else a=void 0}var e=a;this.iframeSrc=this.assertSource(e,window.location.href,this.w);a=this.element;"no"!=a.getAttribute("scrolling")&&(b=a.ownerDocument.createElement("i-amphtml-scroll-container"),a.appendChild(b),a=b);this.A=a};k.preconnectCallback=function(a){this.iframeSrc&&this.preconnect.url(this.iframeSrc,a)};
k.buildCallback=function(){this.D=this.getPlaceholder();this.B=!!this.D;(this.C=this.element.hasAttribute("resizable"))&&this.element.setAttribute("scrolling","no");this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0")};
k.onLayoutMeasure=function(){Y(this);var a;a:{var b=this.element.getLayoutBox();a=b.height;for(var b=b.width,d=0;d<Z.length;d++){var c=Z[d][0],e=Z[d][1];if(!(e>a||c>b)&&20>=a-e&&20>=b-c){a=!0;break a}}a=!1}this.K=a;a=this.element.getLayoutBox();10<a.width&&10<a.height?a=!1:(void 0===this.L&&(this.L=!!D(this.element)),a=!this.L);this.o=a;if(a=this.K){a=this.win;b=!1;d=0;c=this.element;do ba[c.tagName]?(d++,b=!1):(e=(a.getComputedStyle(c)||x()).position,"fixed"!=e&&"sticky"!=e||(b=!0)),c=c.parentElement;
while(c&&"BODY"!=c.tagName);a=!(!b&&1>=d)}this.T=a;this.j&&this.j.fire()};function Y(a){if(a.c){var b=a.getViewport().getLayoutRect(a.c),d=a.getLayoutBox();a.I=N(b,-d.left,-d.top)}}k.getIntersectionElementLayoutBox=function(){if(!this.c)return AMP.BaseElement.prototype.getIntersectionElementLayoutBox.call(this);var a=this.getLayoutBox();this.I||Y(this);return N(this.I,a.left,a.top)};
k.layoutCallback=function(){var a=this;u().assert(!this.T,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead.");this.B||this.assertPosition();this.C&&u().assert(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element);if(!this.iframeSrc)return Promise.resolve();if(this.o&&(V++,1<V))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new"),
Promise.resolve();var b=this.element.ownerDocument.createElement("iframe");this.c=b;this.applyFillContent(b);b.name="amp_iframe"+oa++;this.B&&L(b,-1);this.propagateAttributes(na,b);pa(b,this.w);b.src=this.iframeSrc;this.o||(this.j=new S(this,b));b.onload=function(){b.readyState="complete";a.R();a.o&&(a.iframeSrc=null,z(a.win).promise(5E3).then(function(){b.parentElement&&b.parentElement.removeChild(b);a.element.setAttribute("amp-removed","");a.c=null}))};Q(b,"embed-size",function(b){qa(a,b.height,
b.width)});this.B&&Q(b,"embed-ready",this.R.bind(this));this.A.appendChild(b);return this.loadPromise(b).then(function(){a.A!=a.element&&z(a.win).delay(function(){a.deferMutate(function(){a.A.classList.add("amp-active")})},1E3)})};k.unlayoutOnPause=function(){return!0};k.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.D&&this.togglePlaceholder(!0);this.c=null;this.j&&(this.j.destroy(),this.j=null)}return!0};k.viewportCallback=function(a){if(this.j)this.j.onViewportCallback(a)};
k.getPriority=function(){return this.K?2:this.o?1:AMP.BaseElement.prototype.getPriority.call(this)};k.mutatedAttributesCallback=function(a){var b=a.src;void 0!==b&&(this.iframeSrc=X(b),this.c&&(this.c.src=this.assertSource(this.iframeSrc,window.location.href,this.w)))};k.R=function(){var a=this;this.D&&this.getVsync().mutate(function(){a.c&&(L(a.c,0),a.togglePlaceholder(!1))})};k.firstLayoutCompleted=function(){};
function qa(a,b,d){if(a.C)if(100>b)a.user().error("amp-iframe","Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",a.element);else{var c,e;b=parseInt(b,10);isNaN(b)||(c=Math.max(b+(a.element.offsetHeight-a.c.offsetHeight),b));d=parseInt(d,10);isNaN(d)||(e=Math.max(d+(a.element.offsetWidth-a.c.offsetWidth),d));void 0!==c||void 0!==e?a.attemptChangeSize(c,e).then(function(){void 0!==c&&a.element.setAttribute("height",
c);void 0!==e&&a.element.setAttribute("width",e)},function(){}):a.user().error("amp-iframe","Ignoring embed-size request because no width or height value is provided",a.element)}else a.user().error("amp-iframe","Ignoring embed-size request because this iframe is not resizable",a.element)}function pa(a,b){var d=b||"";a.setAttribute("sandbox",d)}var Z=[[300,250],[320,50],[300,50],[320,100]];(function(a){a.registerElement("amp-iframe",W)})(self.AMP);
})});
//# sourceMappingURL=amp-iframe-0.1.js.map

/*!
 * custom edit for fix imges blogger code img to amp-img
 */
$('.thumbnail').find('img').replaceWith(function () { return '<amp-img src="'+this.src+'" width="1080" height="610" layout="responsive" alt="'+this.alt+'"></amp-img>' });
