/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(document,Math,undefined){(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(jQuery&&!jQuery.fn.sparkline){factory(jQuery)}})(function($){"use strict";var UNSET_OPTION={},getDefaults,createClass,SPFormat,clipval,quartile,normalizeValue,normalizeValues,remove,isNumber,all,sum,addCSS,ensureArray,formatNumber,RangeMap,MouseHandler,Tooltip,barHighlightMixin,line,bar,tristate,discrete,bullet,pie,box,defaultStyles,initStyles,VShape,VCanvas_base,VCanvas_canvas,VCanvas_vml,pending,shapeCount=0;getDefaults=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:false,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:false,enableHighlight:true,highlightLighten:1.4,tooltipSkipNull:true,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:false,numberFormatter:false,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:false,disableInteraction:false},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:undefined,normalRangeMax:undefined,normalRangeColor:"#ccc",drawNormalOnTop:false,chartRangeMin:undefined,chartRangeMax:undefined,chartRangeMinX:undefined,chartRangeMaxX:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:undefined,nullColor:undefined,zeroAxis:true,barWidth:4,barSpacing:1,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,colorMap:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:undefined,thresholdValue:0,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,tooltipFormat:new SPFormat("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:undefined,tooltipFormat:new SPFormat("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:false,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:true,outlierIQR:1.5,spotRadius:1.5,target:undefined,targetColor:"#4a2",chartRangeMax:undefined,chartRangeMin:undefined,tooltipFormat:new SPFormat("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}};defaultStyles=".jqstooltip { "+"position: absolute;"+"left: 0px;"+"top: 0px;"+"visibility: hidden;"+"background: rgb(0, 0, 0) transparent;"+"background-color: rgba(0,0,0,0.6);"+"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);"+'-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";'+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"white-space: nowrap;"+"padding: 5px;"+"border: 1px solid white;"+"box-sizing: content-box;"+"z-index: 10000;"+"}"+".jqsfield { "+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"}";createClass=function(){var Class,args;Class=function(){this.init.apply(this,arguments)};if(arguments.length>1){if(arguments[0]){Class.prototype=$.extend(new arguments[0],arguments[arguments.length-1]);Class._super=arguments[0].prototype}else{Class.prototype=arguments[arguments.length-1]}if(arguments.length>2){args=Array.prototype.slice.call(arguments,1,-1);args.unshift(Class.prototype);$.extend.apply($,args)}}else{Class.prototype=arguments[0]}Class.prototype.cls=Class;return Class};$.SPFormatClass=SPFormat=createClass({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(format,fclass){this.format=format;this.fclass=fclass},render:function(fieldset,lookups,options){var self=this,fields=fieldset,match,token,lookupkey,fieldvalue,prec;return this.format.replace(this.fre,function(){var lookup;token=arguments[1];lookupkey=arguments[3];match=self.precre.exec(token);if(match){prec=match[2];token=match[1]}else{prec=false}fieldvalue=fields[token];if(fieldvalue===undefined){return""}if(lookupkey&&lookups&&lookups[lookupkey]){lookup=lookups[lookupkey];if(lookup.get){return lookups[lookupkey].get(fieldvalue)||fieldvalue}else{return lookups[lookupkey][fieldvalue]||fieldvalue}}if(isNumber(fieldvalue)){if(options.get("numberFormatter")){fieldvalue=options.get("numberFormatter")(fieldvalue)}else{fieldvalue=formatNumber(fieldvalue,prec,options.get("numberDigitGroupCount"),options.get("numberDigitGroupSep"),options.get("numberDecimalMark"))}}return fieldvalue})}});$.spformat=function(format,fclass){return new SPFormat(format,fclass)};clipval=function(val,min,max){if(val<min){return min}if(val>max){return max}return val};quartile=function(values,q){var vl;if(q===2){vl=Math.floor(values.length/2);return values.length%2?values[vl]:(values[vl-1]+values[vl])/2}else{if(values.length%2){vl=(values.length*q+q)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}else{vl=(values.length*q+2)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}}};normalizeValue=function(val){var nf;switch(val){case"undefined":val=undefined;break;case"null":val=null;break;case"true":val=true;break;case"false":val=false;break;default:nf=parseFloat(val);if(val==nf){val=nf}}return val};normalizeValues=function(vals){var i,result=[];for(i=vals.length;i--;){result[i]=normalizeValue(vals[i])}return result};remove=function(vals,filter){var i,vl,result=[];for(i=0,vl=vals.length;i<vl;i++){if(vals[i]!==filter){result.push(vals[i])}}return result};isNumber=function(num){return!isNaN(parseFloat(num))&&isFinite(num)};formatNumber=function(num,prec,groupsize,groupsep,decsep){var p,i;num=(prec===false?parseFloat(num).toString():num.toFixed(prec)).split("");p=(p=$.inArray(".",num))<0?num.length:p;if(p<num.length){num[p]=decsep}for(i=p-groupsize;i>0;i-=groupsize){num.splice(i,0,groupsep)}return num.join("")};all=function(val,arr,ignoreNull){var i;for(i=arr.length;i--;){if(ignoreNull&&arr[i]===null)continue;if(arr[i]!==val){return false}}return true};sum=function(vals){var total=0,i;for(i=vals.length;i--;){total+=typeof vals[i]==="number"?vals[i]:0}return total};ensureArray=function(val){return $.isArray(val)?val:[val]};addCSS=function(css){var tag,iefail;if(document.createStyleSheet){try{document.createStyleSheet().cssText=css;return}catch(e){iefail=true}}tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);if(iefail){document.styleSheets[document.styleSheets.length-1].cssText=css}else{tag[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=css}};$.fn.simpledraw=function(width,height,useExisting,interact){var target,mhandler;if(useExisting&&(target=this.data("_jqs_vcanvas"))){return target}if($.fn.sparkline.canvas===false){return false}else if($.fn.sparkline.canvas===undefined){var el=document.createElement("canvas");if(!!(el.getContext&&el.getContext("2d"))){$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_canvas(width,height,target,interact)}}else if(document.namespaces&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML");$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_vml(width,height,target)}}else{$.fn.sparkline.canvas=false;return false}}if(width===undefined){width=$(this).innerWidth()}if(height===undefined){height=$(this).innerHeight()}target=$.fn.sparkline.canvas(width,height,this,interact);mhandler=$(this).data("_jqs_mhandler");if(mhandler){mhandler.registerCanvas(target)}return target};$.fn.cleardraw=function(){var target=this.data("_jqs_vcanvas");if(target){target.reset()}};$.RangeMapClass=RangeMap=createClass({init:function(map){var key,range,rangelist=[];for(key in map){if(map.hasOwnProperty(key)&&typeof key==="string"&&key.indexOf(":")>-1){range=key.split(":");range[0]=range[0].length===0?-Infinity:parseFloat(range[0]);range[1]=range[1].length===0?Infinity:parseFloat(range[1]);range[2]=map[key];rangelist.push(range)}}this.map=map;this.rangelist=rangelist||false},get:function(value){var rangelist=this.rangelist,i,range,result;if((result=this.map[value])!==undefined){return result}if(rangelist){for(i=rangelist.length;i--;){range=rangelist[i];if(range[0]<=value&&range[1]>=value){return range[2]}}}return undefined}});$.range_map=function(map){return new RangeMap(map)};MouseHandler=createClass({init:function(el,options){var $el=$(el);this.$el=$el;this.options=options;this.currentPageX=0;this.currentPageY=0;this.el=el;this.splist=[];this.tooltip=null;this.over=false;this.displayTooltips=!options.get("disableTooltips");this.highlightEnabled=!options.get("disableHighlight")},registerSparkline:function(sp){this.splist.push(sp);if(this.over){this.updateDisplay()}},registerCanvas:function(canvas){var $canvas=$(canvas.canvas);this.canvas=canvas;this.$canvas=$canvas;$canvas.mouseenter($.proxy(this.mouseenter,this));$canvas.mouseleave($.proxy(this.mouseleave,this));$canvas.click($.proxy(this.mouseclick,this))},reset:function(removeTooltip){this.splist=[];if(this.tooltip&&removeTooltip){this.tooltip.remove();this.tooltip=undefined}},mouseclick:function(e){var clickEvent=$.Event("sparklineClick");clickEvent.originalEvent=e;clickEvent.sparklines=this.splist;this.$el.trigger(clickEvent)},mouseenter:function(e){$(document.body).unbind("mousemove.jqs");$(document.body).bind("mousemove.jqs",$.proxy(this.mousemove,this));this.over=true;this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(!this.tooltip&&this.displayTooltips){this.tooltip=new Tooltip(this.options);this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},mouseleave:function(){$(document.body).unbind("mousemove.jqs");var splist=this.splist,spcount=splist.length,needsRefresh=false,sp,i;this.over=false;this.currentEl=null;if(this.tooltip){this.tooltip.remove();this.tooltip=null}for(i=0;i<spcount;i++){sp=splist[i];if(sp.clearRegionHighlight()){needsRefresh=true}}if(needsRefresh){this.canvas.render()}},mousemove:function(e){this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(this.tooltip){this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},updateDisplay:function(){var splist=this.splist,spcount=splist.length,needsRefresh=false,offset=this.$canvas.offset(),localX=this.currentPageX-offset.left,localY=this.currentPageY-offset.top,tooltiphtml,sp,i,result,changeEvent;if(!this.over){return}for(i=0;i<spcount;i++){sp=splist[i];result=sp.setRegionHighlight(this.currentEl,localX,localY);if(result){needsRefresh=true}}if(needsRefresh){changeEvent=$.Event("sparklineRegionChange");changeEvent.sparklines=this.splist;this.$el.trigger(changeEvent);if(this.tooltip){tooltiphtml="";for(i=0;i<spcount;i++){sp=splist[i];tooltiphtml+=sp.getCurrentRegionTooltip()}this.tooltip.setContent(tooltiphtml)}if(!this.disableHighlight){this.canvas.render()}}if(result===null){this.mouseleave()}}});Tooltip=createClass({sizeStyle:"position: static !important;"+"display: block !important;"+"visibility: hidden !important;"+"float: left !important;",init:function(options){var tooltipClassname=options.get("tooltipClassname","jqstooltip"),sizetipStyle=this.sizeStyle,offset;this.container=options.get("tooltipContainer")||document.body;this.tooltipOffsetX=options.get("tooltipOffsetX",10);this.tooltipOffsetY=options.get("tooltipOffsetY",12);$("#jqssizetip").remove();$("#jqstooltip").remove();this.sizetip=$("<div/>",{id:"jqssizetip",style:sizetipStyle,"class":tooltipClassname});this.tooltip=$("<div/>",{id:"jqstooltip","class":tooltipClassname}).appendTo(this.container);offset=this.tooltip.offset();this.offsetLeft=offset.left;this.offsetTop=offset.top;this.hidden=true;$(window).unbind("resize.jqs scroll.jqs");$(window).bind("resize.jqs scroll.jqs",$.proxy(this.updateWindowDims,this));this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=$(window).scrollTop();this.scrollLeft=$(window).scrollLeft();this.scrollRight=this.scrollLeft+$(window).width();this.updatePosition()},getSize:function(content){this.sizetip.html(content).appendTo(this.container);this.width=this.sizetip.width()+1;this.height=this.sizetip.height();this.sizetip.remove()},setContent:function(content){if(!content){this.tooltip.css("visibility","hidden");this.hidden=true;return}this.getSize(content);this.tooltip.html(content).css({width:this.width,height:this.height,visibility:"visible"});if(this.hidden){this.hidden=false;this.updatePosition()}},updatePosition:function(x,y){if(x===undefined){if(this.mousex===undefined){return}x=this.mousex-this.offsetLeft;y=this.mousey-this.offsetTop}else{this.mousex=x=x-this.offsetLeft;this.mousey=y=y-this.offsetTop}if(!this.height||!this.width||this.hidden){return}y-=this.height+this.tooltipOffsetY;x+=this.tooltipOffsetX;if(y<this.scrollTop){y=this.scrollTop}if(x<this.scrollLeft){x=this.scrollLeft}else if(x+this.width>this.scrollRight){x=this.scrollRight-this.width}this.tooltip.css({left:x,top:y})},remove:function(){this.tooltip.remove();this.sizetip.remove();this.sizetip=this.tooltip=undefined;$(window).unbind("resize.jqs scroll.jqs")}});initStyles=function(){addCSS(defaultStyles)};$(initStyles);pending=[];$.fn.sparkline=function(userValues,userOptions){return this.each(function(){var options=new $.fn.sparkline.options(this,userOptions),$this=$(this),render,i;render=function(){var values,width,height,tmp,mhandler,sp,vals;if(userValues==="html"||userValues===undefined){vals=this.getAttribute(options.get("tagValuesAttribute"));if(vals===undefined||vals===null){vals=$this.html()}values=vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else{values=userValues}width=options.get("width")==="auto"?values.length*options.get("defaultPixelsPerValue"):options.get("width");if(options.get("height")==="auto"){if(!options.get("composite")||!$.data(this,"_jqs_vcanvas")){tmp=document.createElement("span");tmp.innerHTML="a";$this.html(tmp);height=$(tmp).innerHeight()||$(tmp).height();$(tmp).remove();tmp=null}}else{height=options.get("height")}if(!options.get("disableInteraction")){mhandler=$.data(this,"_jqs_mhandler");if(!mhandler){mhandler=new MouseHandler(this,options);$.data(this,"_jqs_mhandler",mhandler)}else if(!options.get("composite")){mhandler.reset()}}else{mhandler=false}if(options.get("composite")&&!$.data(this,"_jqs_vcanvas")){if(!$.data(this,"_jqs_errnotify")){alert("Attempted to attach a composite sparkline to an element with no existing sparkline");$.data(this,"_jqs_errnotify",true)}return}sp=new($.fn.sparkline[options.get("type")])(this,values,options,width,height);sp.render();if(mhandler){mhandler.registerSparkline(sp)}};if($(this).html()&&!options.get("disableHiddenCheck")&&$(this).is(":hidden")||!$(this).parents("body").length){if(!options.get("composite")&&$.data(this,"_jqs_pending")){for(i=pending.length;i;i--){if(pending[i-1][0]==this){pending.splice(i-1,1)}}}pending.push([this,render]);$.data(this,"_jqs_pending",true)}else{render.call(this)}})};$.fn.sparkline.defaults=getDefaults();$.sparkline_display_visible=function(){var el,i,pl;var done=[];for(i=0,pl=pending.length;i<pl;i++){el=pending[i][0];if($(el).is(":visible")&&!$(el).parents().is(":hidden")){pending[i][1].call(el);$.data(pending[i][0],"_jqs_pending",false);done.push(i)}else if(!$(el).closest("html").length&&!$.data(el,"_jqs_pending")){$.data(pending[i][0],"_jqs_pending",false);done.push(i)}}for(i=done.length;i;i--){pending.splice(done[i-1],1)}};$.fn.sparkline.options=createClass({init:function(tag,userOptions){var extendedOptions,defaults,base,tagOptionType;this.userOptions=userOptions=userOptions||{};this.tag=tag;this.tagValCache={};defaults=$.fn.sparkline.defaults;base=defaults.common;this.tagOptionsPrefix=userOptions.enableTagOptions&&(userOptions.tagOptionsPrefix||base.tagOptionsPrefix);tagOptionType=this.getTagSetting("type");if(tagOptionType===UNSET_OPTION){extendedOptions=defaults[userOptions.type||base.type]}else{extendedOptions=defaults[tagOptionType]}this.mergedOptions=$.extend({},base,extendedOptions,userOptions)},getTagSetting:function(key){var prefix=this.tagOptionsPrefix,val,i,pairs,keyval;if(prefix===false||prefix===undefined){return UNSET_OPTION}if(this.tagValCache.hasOwnProperty(key)){val=this.tagValCache.key}else{val=this.tag.getAttribute(prefix+key);if(val===undefined||val===null){val=UNSET_OPTION}else if(val.substr(0,1)==="["){val=val.substr(1,val.length-2).split(",");for(i=val.length;i--;){val[i]=normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g,""))}}else if(val.substr(0,1)==="{"){pairs=val.substr(1,val.length-2).split(",");val={};for(i=pairs.length;i--;){keyval=pairs[i].split(":",2);val[keyval[0].replace(/(^\s*)|(\s*$)/g,"")]=normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g,""))}}else{val=normalizeValue(val)}this.tagValCache.key=val}return val},get:function(key,defaultval){var tagOption=this.getTagSetting(key),result;if(tagOption!==UNSET_OPTION){return tagOption}return(result=this.mergedOptions[key])===undefined?defaultval:result}});$.fn.sparkline._base=createClass({disabled:false,init:function(el,values,options,width,height){this.el=el;this.$el=$(el);this.values=values;this.options=options;this.width=width;this.height=height;this.currentRegion=undefined},initTarget:function(){var interactive=!this.options.get("disableInteraction");if(!(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),interactive))){this.disabled=true}else{this.canvasWidth=this.target.pixelWidth;this.canvasHeight=this.target.pixelHeight}},render:function(){if(this.disabled){this.el.innerHTML="";return false}return true},getRegion:function(x,y){},setRegionHighlight:function(el,x,y){var currentRegion=this.currentRegion,highlightEnabled=!this.options.get("disableHighlight"),newRegion;if(x>this.canvasWidth||y>this.canvasHeight||x<0||y<0){return null}newRegion=this.getRegion(el,x,y);if(currentRegion!==newRegion){if(currentRegion!==undefined&&highlightEnabled){this.removeHighlight()}this.currentRegion=newRegion;if(newRegion!==undefined&&highlightEnabled){this.renderHighlight()}return true}return false},clearRegionHighlight:function(){if(this.currentRegion!==undefined){this.removeHighlight();this.currentRegion=undefined;return true}return false},renderHighlight:function(){this.changeHighlight(true)},removeHighlight:function(){this.changeHighlight(false)},changeHighlight:function(highlight){},getCurrentRegionTooltip:function(){var options=this.options,header="",entries=[],fields,formats,formatlen,fclass,text,i,showFields,showFieldsKey,newFields,fv,formatter,format,fieldlen,j;if(this.currentRegion===undefined){return""}fields=this.getCurrentRegionFields();formatter=options.get("tooltipFormatter");if(formatter){return formatter(this,options,fields)}if(options.get("tooltipChartTitle")){header+='<div class="jqs jqstitle">'+options.get("tooltipChartTitle")+"</div>\n"}formats=this.options.get("tooltipFormat");if(!formats){return""}if(!$.isArray(formats)){formats=[formats]}if(!$.isArray(fields)){fields=[fields]}showFields=this.options.get("tooltipFormatFieldlist");showFieldsKey=this.options.get("tooltipFormatFieldlistKey");if(showFields&&showFieldsKey){newFields=[];for(i=fields.length;i--;){fv=fields[i][showFieldsKey];if((j=$.inArray(fv,showFields))!=-1){newFields[j]=fields[i]}}fields=newFields}formatlen=formats.length;fieldlen=fields.length;for(i=0;i<formatlen;i++){format=formats[i];if(typeof format==="string"){format=new SPFormat(format)}fclass=format.fclass||"jqsfield";for(j=0;j<fieldlen;j++){if(!fields[j].isNull||!options.get("tooltipSkipNull")){$.extend(fields[j],{prefix:options.get("tooltipPrefix"),suffix:options.get("tooltipSuffix")});text=format.render(fields[j],options.get("tooltipValueLookups"),options);entries.push('<div class="'+fclass+'">'+text+"</div>")}}}if(entries.length){return header+entries.join("\n")}return""},getCurrentRegionFields:function(){},calcHighlightColor:function(color,options){var highlightColor=options.get("highlightColor"),lighten=options.get("highlightLighten"),parse,mult,rgbnew,i;if(highlightColor){return highlightColor}if(lighten){parse=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);if(parse){rgbnew=[];mult=color.length===4?16:1;for(i=0;i<3;i++){rgbnew[i]=clipval(Math.round(parseInt(parse[i+1],16)*mult*lighten),0,255)}return"rgb("+rgbnew.join(",")+")"}}return color}});barHighlightMixin={changeHighlight:function(highlight){var currentRegion=this.currentRegion,target=this.target,shapeids=this.regionShapes[currentRegion],newShapes;if(shapeids){newShapes=this.renderRegion(currentRegion,highlight);if($.isArray(newShapes)||$.isArray(shapeids)){target.replaceWithShapes(shapeids,newShapes);this.regionShapes[currentRegion]=$.map(newShapes,function(newShape){return newShape.id})}else{target.replaceWithShape(shapeids,newShapes);this.regionShapes[currentRegion]=newShapes.id}}},render:function(){var values=this.values,target=this.target,regionShapes=this.regionShapes,shapes,ids,i,j;if(!this.cls._super.render.call(this)){return}for(i=values.length;i--;){shapes=this.renderRegion(i);if(shapes){if($.isArray(shapes)){ids=[];for(j=shapes.length;j--;){shapes[j].append();ids.push(shapes[j].id)}regionShapes[i]=ids}else{shapes.append();regionShapes[i]=shapes.id}}else{regionShapes[i]=null}}target.render()}};$.fn.sparkline.line=line=createClass($.fn.sparkline._base,{type:"line",init:function(el,values,options,width,height){line._super.init.call(this,el,values,options,width,height);this.vertices=[];this.regionMap=[];this.xvalues=[];this.yvalues=[];this.yminmax=[];this.hightlightSpotId=null;this.lastShapeId=null;this.initTarget()},getRegion:function(el,x,y){var i,regionMap=this.regionMap;for(i=regionMap.length;i--;){if(regionMap[i]!==null&&x>=regionMap[i][0]&&x<=regionMap[i][1]){return regionMap[i][2]}}return undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.yvalues[currentRegion]===null,x:this.xvalues[currentRegion],y:this.yvalues[currentRegion],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:currentRegion}},renderHighlight:function(){var currentRegion=this.currentRegion,target=this.target,vertex=this.vertices[currentRegion],options=this.options,spotRadius=options.get("spotRadius"),highlightSpotColor=options.get("highlightSpotColor"),highlightLineColor=options.get("highlightLineColor"),highlightSpot,highlightLine;if(!vertex){return}if(spotRadius&&highlightSpotColor){highlightSpot=target.drawCircle(vertex[0],vertex[1],spotRadius,undefined,highlightSpotColor);this.highlightSpotId=highlightSpot.id;target.insertAfterShape(this.lastShapeId,highlightSpot)}if(highlightLineColor){highlightLine=target.drawLine(vertex[0],this.canvasTop,vertex[0],this.canvasTop+this.canvasHeight,highlightLineColor);this.highlightLineId=highlightLine.id;target.insertAfterShape(this.lastShapeId,highlightLine)}},removeHighlight:function(){var target=this.target;if(this.highlightSpotId){target.removeShapeId(this.highlightSpotId);this.highlightSpotId=null}if(this.highlightLineId){target.removeShapeId(this.highlightLineId);this.highlightLineId=null}},scanValues:function(){var values=this.values,valcount=values.length,xvalues=this.xvalues,yvalues=this.yvalues,yminmax=this.yminmax,i,val,isStr,isArray,sp;for(i=0;i<valcount;i++){val=values[i];isStr=typeof values[i]==="string";isArray=typeof values[i]==="object"&&values[i]instanceof Array;sp=isStr&&values[i].split(":");if(isStr&&sp.length===2){xvalues.push(Number(sp[0]));yvalues.push(Number(sp[1]));yminmax.push(Number(sp[1]))}else if(isArray){xvalues.push(val[0]);yvalues.push(val[1]);yminmax.push(val[1])}else{xvalues.push(i);if(values[i]===null||values[i]==="null"){yvalues.push(null)}else{yvalues.push(Number(val));yminmax.push(Number(val))}}}if(this.options.get("xvalues")){xvalues=this.options.get("xvalues")}this.maxy=this.maxyorg=Math.max.apply(Math,yminmax);this.miny=this.minyorg=Math.min.apply(Math,yminmax);this.maxx=Math.max.apply(Math,xvalues);this.minx=Math.min.apply(Math,xvalues);this.xvalues=xvalues;this.yvalues=yvalues;this.yminmax=yminmax},processRangeOptions:function(){var options=this.options,normalRangeMin=options.get("normalRangeMin"),normalRangeMax=options.get("normalRangeMax");if(normalRangeMin!==undefined){if(normalRangeMin<this.miny){this.miny=normalRangeMin}if(normalRangeMax>this.maxy){this.maxy=normalRangeMax}}if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.miny)){this.miny=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.maxy)){this.maxy=options.get("chartRangeMax")}if(options.get("chartRangeMinX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMinX")<this.minx)){this.minx=options.get("chartRangeMinX")}if(options.get("chartRangeMaxX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMaxX")>this.maxx)){this.maxx=options.get("chartRangeMaxX")}},drawNormalRange:function(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey){var normalRangeMin=this.options.get("normalRangeMin"),normalRangeMax=this.options.get("normalRangeMax"),ytop=canvasTop+Math.round(canvasHeight-canvasHeight*((normalRangeMax-this.miny)/rangey)),height=Math.round(canvasHeight*(normalRangeMax-normalRangeMin)/rangey);this.target.drawRect(canvasLeft,ytop,canvasWidth,height,undefined,this.options.get("normalRangeColor")).append()},render:function(){var options=this.options,target=this.target,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,vertices=this.vertices,spotRadius=options.get("spotRadius"),regionMap=this.regionMap,rangex,rangey,yvallast,canvasTop,canvasLeft,vertex,path,paths,x,y,xnext,xpos,xposnext,last,next,yvalcount,lineShapes,fillShapes,plen,valueSpots,hlSpotsEnabled,color,xvalues,yvalues,i;if(!line._super.render.call(this)){return}this.scanValues();this.processRangeOptions();xvalues=this.xvalues;yvalues=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2){return}canvasTop=canvasLeft=0;rangex=this.maxx-this.minx===0?1:this.maxx-this.minx;rangey=this.maxy-this.miny===0?1:this.maxy-this.miny;yvallast=this.yvalues.length-1;if(spotRadius&&(canvasWidth<spotRadius*4||canvasHeight<spotRadius*4)){spotRadius=0}if(spotRadius){hlSpotsEnabled=options.get("highlightSpotColor")&&!options.get("disableInteraction");if(hlSpotsEnabled||options.get("minSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.miny){canvasHeight-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("maxSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.maxy){canvasHeight-=Math.ceil(spotRadius);canvasTop+=Math.ceil(spotRadius)}if(hlSpotsEnabled||(options.get("minSpotColor")||options.get("maxSpotColor"))&&(yvalues[0]===this.miny||yvalues[0]===this.maxy)){canvasLeft+=Math.ceil(spotRadius);canvasWidth-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("spotColor")||(options.get("minSpotColor")||options.get("maxSpotColor")&&(yvalues[yvallast]===this.miny||yvalues[yvallast]===this.maxy))){canvasWidth-=Math.ceil(spotRadius)}}canvasHeight--;if(options.get("normalRangeMin")!==undefined&&!options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}path=[];paths=[path];last=next=null;yvalcount=yvalues.length;for(i=0;i<yvalcount;i++){x=xvalues[i];xnext=xvalues[i+1];y=yvalues[i];xpos=canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex));xposnext=i<yvalcount-1?canvasLeft+Math.round((xnext-this.minx)*(canvasWidth/rangex)):canvasWidth;next=xpos+(xposnext-xpos)/2;regionMap[i]=[last||0,next,i];last=next;if(y===null){if(i){if(yvalues[i-1]!==null){path=[];paths.push(path)}vertices.push(null)}}else{if(y<this.miny){y=this.miny}if(y>this.maxy){y=this.maxy}if(!path.length){path.push([xpos,canvasTop+canvasHeight])}vertex=[xpos,canvasTop+Math.round(canvasHeight-canvasHeight*((y-this.miny)/rangey))];path.push(vertex);vertices.push(vertex)}}lineShapes=[];fillShapes=[];plen=paths.length;for(i=0;i<plen;i++){path=paths[i];if(path.length){if(options.get("fillColor")){path.push([path[path.length-1][0],canvasTop+canvasHeight]);fillShapes.push(path.slice(0));path.pop()}if(path.length>2){path[0]=[path[0][0],path[1][1]]}lineShapes.push(path)}}plen=fillShapes.length;for(i=0;i<plen;i++){target.drawShape(fillShapes[i],options.get("fillColor"),options.get("fillColor")).append()}if(options.get("normalRangeMin")!==undefined&&options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}plen=lineShapes.length;for(i=0;i<plen;i++){target.drawShape(lineShapes[i],options.get("lineColor"),undefined,options.get("lineWidth")).append()}if(spotRadius&&options.get("valueSpots")){valueSpots=options.get("valueSpots");if(valueSpots.get===undefined){valueSpots=new RangeMap(valueSpots)}for(i=0;i<yvalcount;i++){color=valueSpots.get(yvalues[i]);if(color){target.drawCircle(canvasLeft+Math.round((xvalues[i]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[i]-this.miny)/rangey)),spotRadius,undefined,color).append()}}}if(spotRadius&&options.get("spotColor")&&yvalues[yvallast]!==null){target.drawCircle(canvasLeft+Math.round((xvalues[xvalues.length-1]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[yvallast]-this.miny)/rangey)),spotRadius,undefined,options.get("spotColor")).append()}if(this.maxy!==this.minyorg){if(spotRadius&&options.get("minSpotColor")){x=xvalues[$.inArray(this.minyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.minyorg-this.miny)/rangey)),spotRadius,undefined,options.get("minSpotColor")).append()}if(spotRadius&&options.get("maxSpotColor")){x=xvalues[$.inArray(this.maxyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.maxyorg-this.miny)/rangey)),spotRadius,undefined,options.get("maxSpotColor")).append()}}this.lastShapeId=target.getLastShapeId();this.canvasTop=canvasTop;target.render()}});$.fn.sparkline.bar=bar=createClass($.fn.sparkline._base,barHighlightMixin,{type:"bar",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10),chartRangeMin=options.get("chartRangeMin"),chartRangeMax=options.get("chartRangeMax"),chartRangeClip=options.get("chartRangeClip"),stackMin=Infinity,stackMax=-Infinity,isStackString,groupMin,groupMax,stackRanges,numValues,i,vlen,range,zeroAxis,xaxisOffset,min,max,clipMin,clipMax,stacked,vlist,j,slen,svals,val,yoffset,yMaxCalc,canvasHeightEf;bar._super.init.call(this,el,values,options,width,height);for(i=0,vlen=values.length;i<vlen;i++){val=values[i];isStackString=typeof val==="string"&&val.indexOf(":")>-1;if(isStackString||$.isArray(val)){stacked=true;if(isStackString){val=values[i]=normalizeValues(val.split(":"));

}val=remove(val,null);groupMin=Math.min.apply(Math,val);groupMax=Math.max.apply(Math,val);if(groupMin<stackMin){stackMin=groupMin}if(groupMax>stackMax){stackMax=groupMax}}}this.stacked=stacked;this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.width=width=values.length*barWidth+(values.length-1)*barSpacing;this.initTarget();if(chartRangeClip){clipMin=chartRangeMin===undefined?-Infinity:chartRangeMin;clipMax=chartRangeMax===undefined?Infinity:chartRangeMax}numValues=[];stackRanges=stacked?[]:numValues;var stackTotals=[];var stackRangesNeg=[];for(i=0,vlen=values.length;i<vlen;i++){if(stacked){vlist=values[i];values[i]=svals=[];stackTotals[i]=0;stackRanges[i]=stackRangesNeg[i]=0;for(j=0,slen=vlist.length;j<slen;j++){val=svals[j]=chartRangeClip?clipval(vlist[j],clipMin,clipMax):vlist[j];if(val!==null){if(val>0){stackTotals[i]+=val}if(stackMin<0&&stackMax>0){if(val<0){stackRangesNeg[i]+=Math.abs(val)}else{stackRanges[i]+=val}}else{stackRanges[i]+=Math.abs(val-(val<0?stackMax:stackMin))}numValues.push(val)}}}else{val=chartRangeClip?clipval(values[i],clipMin,clipMax):values[i];val=values[i]=normalizeValue(val);if(val!==null){numValues.push(val)}}}this.max=max=Math.max.apply(Math,numValues);this.min=min=Math.min.apply(Math,numValues);this.stackMax=stackMax=stacked?Math.max.apply(Math,stackTotals):max;this.stackMin=stackMin=stacked?Math.min.apply(Math,numValues):min;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<min)){min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>max)){max=options.get("chartRangeMax")}this.zeroAxis=zeroAxis=options.get("zeroAxis",true);if(min<=0&&max>=0&&zeroAxis){xaxisOffset=0}else if(zeroAxis==false){xaxisOffset=min}else if(min>0){xaxisOffset=min}else{xaxisOffset=max}this.xaxisOffset=xaxisOffset;range=stacked?Math.max.apply(Math,stackRanges)+Math.max.apply(Math,stackRangesNeg):max-min;this.canvasHeightEf=zeroAxis&&min<0?this.canvasHeight-2:this.canvasHeight-1;if(min<xaxisOffset){yMaxCalc=stacked&&max>=0?stackMax:max;yoffset=(yMaxCalc-xaxisOffset)/range*this.canvasHeight;if(yoffset!==Math.ceil(yoffset)){this.canvasHeightEf-=2;yoffset=Math.ceil(yoffset)}}else{yoffset=this.canvasHeight}this.yoffset=yoffset;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.range=range},getRegion:function(el,x,y){var result=Math.floor(x/this.totalBarWidth);return result<0||result>=this.values.length?undefined:result},getCurrentRegionFields:function(){var currentRegion=this.currentRegion,values=ensureArray(this.values[currentRegion]),result=[],value,i;for(i=values.length;i--;){value=values[i];result.push({isNull:value===null,value:value,color:this.calcColor(i,value,currentRegion),offset:currentRegion})}return result},calcColor:function(stacknum,value,valuenum){var colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,options=this.options,color,newColor;if(this.stacked){color=options.get("stackedBarColor")}else{color=value<0?options.get("negBarColor"):options.get("barColor")}if(value===0&&options.get("zeroColor")!==undefined){color=options.get("zeroColor")}if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}return $.isArray(color)?color[stacknum%color.length]:color},renderRegion:function(valuenum,highlight){var vals=this.values[valuenum],options=this.options,xaxisOffset=this.xaxisOffset,result=[],range=this.range,stacked=this.stacked,target=this.target,x=valuenum*this.totalBarWidth,canvasHeightEf=this.canvasHeightEf,yoffset=this.yoffset,y,height,color,isNull,yoffsetNeg,i,valcount,val,minPlotted,allMin;vals=$.isArray(vals)?vals:[vals];valcount=vals.length;val=vals[0];isNull=all(null,vals);allMin=all(xaxisOffset,vals,true);if(isNull){if(options.get("nullColor")){color=highlight?options.get("nullColor"):this.calcHighlightColor(options.get("nullColor"),options);y=yoffset>0?yoffset-1:yoffset;return target.drawRect(x,y,this.barWidth-1,0,color,color)}else{return undefined}}yoffsetNeg=yoffset;for(i=0;i<valcount;i++){val=vals[i];if(stacked&&val===xaxisOffset){if(!allMin||minPlotted){continue}minPlotted=true}if(range>0){height=Math.floor(canvasHeightEf*(Math.abs(val-xaxisOffset)/range))+1}else{height=1}if(val<xaxisOffset||val===xaxisOffset&&yoffset===0){y=yoffsetNeg;yoffsetNeg+=height}else{y=yoffset-height;yoffset-=height}color=this.calcColor(i,val,valuenum);if(highlight){color=this.calcHighlightColor(color,options)}result.push(target.drawRect(x,y,this.barWidth-1,height-1,color,color))}if(result.length===1){return result[0]}return result}});$.fn.sparkline.tristate=tristate=createClass($.fn.sparkline._base,barHighlightMixin,{type:"tristate",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10);tristate._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.values=$.map(values,Number);this.width=width=values.length*barWidth+(values.length-1)*barSpacing;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.initTarget()},getRegion:function(el,x,y){return Math.floor(x/this.totalBarWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],color:this.calcColor(this.values[currentRegion],currentRegion),offset:currentRegion}},calcColor:function(value,valuenum){var values=this.values,options=this.options,colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,color,newColor;if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}else if(values[valuenum]<0){color=options.get("negBarColor")}else if(values[valuenum]>0){color=options.get("posBarColor")}else{color=options.get("zeroBarColor")}return color},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,target=this.target,canvasHeight,height,halfHeight,x,y,color;canvasHeight=target.pixelHeight;halfHeight=Math.round(canvasHeight/2);x=valuenum*this.totalBarWidth;if(values[valuenum]<0){y=halfHeight;height=halfHeight-1}else if(values[valuenum]>0){y=0;height=halfHeight-1}else{y=halfHeight-1;height=2}color=this.calcColor(values[valuenum],valuenum);if(color===null){return}if(highlight){color=this.calcHighlightColor(color,options)}return target.drawRect(x,y,this.barWidth-1,height-1,color,color)}});$.fn.sparkline.discrete=discrete=createClass($.fn.sparkline._base,barHighlightMixin,{type:"discrete",init:function(el,values,options,width,height){discrete._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.values=values=$.map(values,Number);this.min=Math.min.apply(Math,values);this.max=Math.max.apply(Math,values);this.range=this.max-this.min;this.width=width=options.get("width")==="auto"?values.length*2:this.width;this.interval=Math.floor(width/values.length);this.itemWidth=width/values.length;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.min)){this.min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.max)){this.max=options.get("chartRangeMax")}this.initTarget();if(this.target){this.lineHeight=options.get("lineHeight")==="auto"?Math.round(this.canvasHeight*.3):options.get("lineHeight")}},getRegion:function(el,x,y){return Math.floor(x/this.itemWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],offset:currentRegion}},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,min=this.min,max=this.max,range=this.range,interval=this.interval,target=this.target,canvasHeight=this.canvasHeight,lineHeight=this.lineHeight,pheight=canvasHeight-lineHeight,ytop,val,color,x;val=clipval(values[valuenum],min,max);x=valuenum*interval;ytop=Math.round(pheight-pheight*((val-min)/range));color=options.get("thresholdColor")&&val<options.get("thresholdValue")?options.get("thresholdColor"):options.get("lineColor");if(highlight){color=this.calcHighlightColor(color,options)}return target.drawLine(x,ytop,x,ytop+lineHeight,color)}});$.fn.sparkline.bullet=bullet=createClass($.fn.sparkline._base,{type:"bullet",init:function(el,values,options,width,height){var min,max,vals;bullet._super.init.call(this,el,values,options,width,height);this.values=values=normalizeValues(values);vals=values.slice();vals[0]=vals[0]===null?vals[2]:vals[0];vals[1]=values[1]===null?vals[2]:vals[1];min=Math.min.apply(Math,values);max=Math.max.apply(Math,values);if(options.get("base")===undefined){min=min<0?min:0}else{min=options.get("base")}this.min=min;this.max=max;this.range=max-min;this.shapes={};this.valueShapes={};this.regiondata={};this.width=width=options.get("width")==="auto"?"4.0em":width;this.target=this.$el.simpledraw(width,height,options.get("composite"));if(!values.length){this.disabled=true}this.initTarget()},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{fieldkey:currentRegion.substr(0,1),value:this.values[currentRegion.substr(1)],region:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,shapeid=this.valueShapes[currentRegion],shape;delete this.shapes[shapeid];switch(currentRegion.substr(0,1)){case"r":shape=this.renderRange(currentRegion.substr(1),highlight);break;case"p":shape=this.renderPerformance(highlight);break;case"t":shape=this.renderTarget(highlight);break}this.valueShapes[currentRegion]=shape.id;this.shapes[shape.id]=currentRegion;this.target.replaceWithShape(shapeid,shape)},renderRange:function(rn,highlight){var rangeval=this.values[rn],rangewidth=Math.round(this.canvasWidth*((rangeval-this.min)/this.range)),color=this.options.get("rangeColors")[rn-2];if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,0,rangewidth-1,this.canvasHeight-1,color,color)},renderPerformance:function(highlight){var perfval=this.values[1],perfwidth=Math.round(this.canvasWidth*((perfval-this.min)/this.range)),color=this.options.get("performanceColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,Math.round(this.canvasHeight*.3),perfwidth-1,Math.round(this.canvasHeight*.4)-1,color,color)},renderTarget:function(highlight){var targetval=this.values[0],x=Math.round(this.canvasWidth*((targetval-this.min)/this.range)-this.options.get("targetWidth")/2),targettop=Math.round(this.canvasHeight*.1),targetheight=this.canvasHeight-targettop*2,color=this.options.get("targetColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(x,targettop,this.options.get("targetWidth")-1,targetheight-1,color,color)},render:function(){var vlen=this.values.length,target=this.target,i,shape;if(!bullet._super.render.call(this)){return}for(i=2;i<vlen;i++){shape=this.renderRange(i).append();this.shapes[shape.id]="r"+i;this.valueShapes["r"+i]=shape.id}if(this.values[1]!==null){shape=this.renderPerformance().append();this.shapes[shape.id]="p1";this.valueShapes.p1=shape.id}if(this.values[0]!==null){shape=this.renderTarget().append();this.shapes[shape.id]="t0";this.valueShapes.t0=shape.id}target.render()}});$.fn.sparkline.pie=pie=createClass($.fn.sparkline._base,{type:"pie",init:function(el,values,options,width,height){var total=0,i;pie._super.init.call(this,el,values,options,width,height);this.shapes={};this.valueShapes={};this.values=values=$.map(values,Number);if(options.get("width")==="auto"){this.width=this.height}if(values.length>0){for(i=values.length;i--;){total+=values[i]}}this.total=total;this.initTarget();this.radius=Math.floor(Math.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],percent:this.values[currentRegion]/this.total*100,color:this.options.get("sliceColors")[currentRegion%this.options.get("sliceColors").length],offset:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,newslice=this.renderSlice(currentRegion,highlight),shapeid=this.valueShapes[currentRegion];delete this.shapes[shapeid];this.target.replaceWithShape(shapeid,newslice);this.valueShapes[currentRegion]=newslice.id;this.shapes[newslice.id]=currentRegion},renderSlice:function(valuenum,highlight){var target=this.target,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),offset=options.get("offset"),circle=2*Math.PI,values=this.values,total=this.total,next=offset?2*Math.PI*(offset/360):0,start,end,i,vlen,color;vlen=values.length;for(i=0;i<vlen;i++){start=next;end=next;if(total>0){end=next+circle*(values[i]/total)}if(valuenum===i){color=options.get("sliceColors")[i%options.get("sliceColors").length];if(highlight){color=this.calcHighlightColor(color,options)}return target.drawPieSlice(radius,radius,radius-borderWidth,start,end,undefined,color)}next=end}},render:function(){var target=this.target,values=this.values,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),shape,i;if(!pie._super.render.call(this)){return}if(borderWidth){target.drawCircle(radius,radius,Math.floor(radius-borderWidth/2),options.get("borderColor"),undefined,borderWidth).append()}for(i=values.length;i--;){if(values[i]){shape=this.renderSlice(i).append();this.valueShapes[i]=shape.id;this.shapes[shape.id]=i}}target.render()}});$.fn.sparkline.box=box=createClass($.fn.sparkline._base,{type:"box",init:function(el,values,options,width,height){box._super.init.call(this,el,values,options,width,height);this.values=$.map(values,Number);this.width=options.get("width")==="auto"?"4.0em":width;this.initTarget();if(!this.values.length){this.disabled=1}},getRegion:function(){return 1},getCurrentRegionFields:function(){var result=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];if(this.loutlier!==undefined){result.push({field:"lo",value:this.loutlier})}if(this.routlier!==undefined){result.push({field:"ro",value:this.routlier})}if(this.lwhisker!==undefined){result.push({field:"lw",value:this.lwhisker})}if(this.rwhisker!==undefined){result.push({field:"rw",value:this.rwhisker})}return result},render:function(){var target=this.target,values=this.values,vlen=values.length,options=this.options,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,minValue=options.get("chartRangeMin")===undefined?Math.min.apply(Math,values):options.get("chartRangeMin"),maxValue=options.get("chartRangeMax")===undefined?Math.max.apply(Math,values):options.get("chartRangeMax"),canvasLeft=0,lwhisker,loutlier,iqr,q1,q2,q3,rwhisker,routlier,i,size,unitSize;if(!box._super.render.call(this)){return}if(options.get("raw")){if(options.get("showOutliers")&&values.length>5){loutlier=values[0];lwhisker=values[1];q1=values[2];q2=values[3];q3=values[4];rwhisker=values[5];routlier=values[6]}else{lwhisker=values[0];q1=values[1];q2=values[2];q3=values[3];rwhisker=values[4]}}else{values.sort(function(a,b){return a-b});q1=quartile(values,1);q2=quartile(values,2);q3=quartile(values,3);iqr=q3-q1;if(options.get("showOutliers")){lwhisker=rwhisker=undefined;for(i=0;i<vlen;i++){if(lwhisker===undefined&&values[i]>q1-iqr*options.get("outlierIQR")){lwhisker=values[i]}if(values[i]<q3+iqr*options.get("outlierIQR")){rwhisker=values[i]}}loutlier=values[0];routlier=values[vlen-1]}else{lwhisker=values[0];rwhisker=values[vlen-1]}}this.quartiles=[q1,q2,q3];this.lwhisker=lwhisker;this.rwhisker=rwhisker;this.loutlier=loutlier;this.routlier=routlier;unitSize=canvasWidth/(maxValue-minValue+1);if(options.get("showOutliers")){canvasLeft=Math.ceil(options.get("spotRadius"));canvasWidth-=2*Math.ceil(options.get("spotRadius"));unitSize=canvasWidth/(maxValue-minValue+1);if(loutlier<lwhisker){target.drawCircle((loutlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}if(routlier>rwhisker){target.drawCircle((routlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}}target.drawRect(Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q3-q1)*unitSize),Math.round(canvasHeight*.8),options.get("boxLineColor"),options.get("boxFillColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q3-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.9),options.get("medianColor")).append();if(options.get("target")){size=Math.ceil(options.get("spotRadius"));target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2-size),Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2+size),options.get("targetColor")).append();target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft-size),Math.round(canvasHeight/2),Math.round((options.get("target")-minValue)*unitSize+canvasLeft+size),Math.round(canvasHeight/2),options.get("targetColor")).append()}target.render()}});VShape=createClass({init:function(target,id,type,args){this.target=target;this.id=id;this.type=type;this.args=args},append:function(){this.target.appendShape(this);return this}});VCanvas_base=createClass({_pxregex:/(\d+)(px)?\s*$/i,init:function(width,height,target){if(!width){return}this.width=width;this.height=height;this.target=target;this.lastShapeId=null;if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this)},drawLine:function(x1,y1,x2,y2,lineColor,lineWidth){return this.drawShape([[x1,y1],[x2,y2]],lineColor,lineWidth)},drawShape:function(path,lineColor,fillColor,lineWidth){return this._genShape("Shape",[path,lineColor,fillColor,lineWidth])},drawCircle:function(x,y,radius,lineColor,fillColor,lineWidth){return this._genShape("Circle",[x,y,radius,lineColor,fillColor,lineWidth])},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){return this._genShape("PieSlice",[x,y,radius,startAngle,endAngle,lineColor,fillColor])},drawRect:function(x,y,width,height,lineColor,fillColor){return this._genShape("Rect",[x,y,width,height,lineColor,fillColor])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(el,target){$(target).html(el)},_calculatePixelDims:function(width,height,canvas){var match;match=this._pxregex.exec(height);if(match){this.pixelHeight=match[1]}else{this.pixelHeight=$(canvas).height()}match=this._pxregex.exec(width);if(match){this.pixelWidth=match[1]}else{this.pixelWidth=$(canvas).width()}},_genShape:function(shapetype,shapeargs){var id=shapeCount++;shapeargs.unshift(id);return new VShape(this,id,shapetype,shapeargs)},appendShape:function(shape){alert("appendShape not implemented")},replaceWithShape:function(shapeid,shape){alert("replaceWithShape not implemented")},insertAfterShape:function(shapeid,shape){alert("insertAfterShape not implemented")},removeShapeId:function(shapeid){alert("removeShapeId not implemented")},getShapeAt:function(el,x,y){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}});VCanvas_canvas=createClass(VCanvas_base,{init:function(width,height,target,interact){VCanvas_canvas._super.init.call(this,width,height,target);this.canvas=document.createElement("canvas");if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);$(this.canvas).css({display:"inline-block",width:width,height:height,verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;this.interact=interact;this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined;$(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(lineColor,fillColor,lineWidth){var context=this.canvas.getContext("2d");if(lineColor!==undefined){context.strokeStyle=lineColor}context.lineWidth=lineWidth===undefined?1:lineWidth;if(fillColor!==undefined){context.fillStyle=fillColor}return context},reset:function(){var context=this._getContext();context.clearRect(0,0,this.pixelWidth,this.pixelHeight);this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth),i,plen;context.beginPath();context.moveTo(path[0][0]+.5,path[0][1]+.5);for(i=1,plen=path.length;i<plen;i++){context.lineTo(path[i][0]+.5,path[i][1]+.5)}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth);context.beginPath();context.arc(x,y,radius,0,2*Math.PI,false);if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.moveTo(x,y);context.arc(x,y,radius,startAngle,endAngle,false);context.lineTo(x,y);context.closePath();if(lineColor!==undefined){context.stroke()}if(fillColor){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x+width,y],[x+width,y+height],[x,y+height],[x,y]],lineColor,fillColor)},appendShape:function(shape){this.shapes[shape.id]=shape;this.shapeseq.push(shape.id);this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;this.shapes[shape.id]=shape;for(i=shapeseq.length;i--;){if(shapeseq[i]==shapeid){shapeseq[i]=shape.id}}delete this.shapes[shapeid]},replaceWithShapes:function(shapeids,shapes){var shapeseq=this.shapeseq,shapemap={},sid,i,first;for(i=shapeids.length;i--;){shapemap[shapeids[i]]=true}for(i=shapeseq.length;i--;){sid=shapeseq[i];if(shapemap[sid]){shapeseq.splice(i,1);delete this.shapes[sid];first=i}}for(i=shapes.length;i--;){shapeseq.splice(first,0,shapes[i].id);this.shapes[shapes[i].id]=shapes[i]}},insertAfterShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i+1,0,shape.id);this.shapes[shape.id]=shape;return}}},removeShapeId:function(shapeid){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i,1);break}}delete this.shapes[shapeid]},getShapeAt:function(el,x,y){this.targetX=x;this.targetY=y;this.render();return this.currentTargetShapeId},render:function(){var shapeseq=this.shapeseq,shapes=this.shapes,shapeCount=shapeseq.length,context=this._getContext(),shapeid,shape,i;context.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(i=0;i<shapeCount;i++){shapeid=shapeseq[i];shape=shapes[shapeid];this["_draw"+shape.type].apply(this,shape.args)}if(!this.interact){this.shapes={};this.shapeseq=[]}}});VCanvas_vml=createClass(VCanvas_base,{init:function(width,height,target){var groupel;VCanvas_vml._super.init.call(this,width,height,target);if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);this.canvas=document.createElement("span");$(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:width,height:height,margin:"0px",padding:"0px",verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;groupel='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>';this.canvas.insertAdjacentHTML("beforeEnd",groupel);this.group=$(this.canvas).children()[0];this.rendered=false;this.prerender=""},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var vpath=[],initial,stroke,fill,closed,vel,plen,i;for(i=0,plen=path.length;i<plen;i++){vpath[i]=""+path[i][0]+","+path[i][1]}initial=vpath.splice(0,1);lineWidth=lineWidth===undefined?1:lineWidth;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';closed=vpath[0]===vpath[vpath.length-1]?"x ":"";vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+initial+" l "+vpath.join(", ")+" "+closed+'e">'+" </v:shape>";return vel},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var stroke,fill,vel;x-=radius;y-=radius;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel="<v:oval "+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;top:'+y+"px; left:"+x+"px; width:"+radius*2+"px; height:"+radius*2+'px"></v:oval>';return vel},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var vpath,startx,starty,endx,endy,stroke,fill,vel;if(startAngle===endAngle){return""}if(endAngle-startAngle===2*Math.PI){startAngle=0;endAngle=2*Math.PI}startx=x+Math.round(Math.cos(startAngle)*radius);starty=y+Math.round(Math.sin(startAngle)*radius);endx=x+Math.round(Math.cos(endAngle)*radius);endy=y+Math.round(Math.sin(endAngle)*radius);if(startx===endx&&starty===endy){if(endAngle-startAngle<Math.PI){return""}startx=endx=x+radius;starty=endy=y}if(startx===endx&&starty===endy&&endAngle-startAngle<Math.PI){return""}vpath=[x-radius,y-radius,x+radius,y+radius,startx,starty,endx,endy];stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="1px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+x+","+y+" wa "+vpath.join(", ")+' x e">'+" </v:shape>";return vel},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x,y+height],[x+width,y+height],[x+width,y],[x,y]],lineColor,fillColor)},reset:function(){this.group.innerHTML=""},appendShape:function(shape){var vel=this["_draw"+shape.type].apply(this,shape.args);if(this.rendered){this.group.insertAdjacentHTML("beforeEnd",vel)}else{this.prerender+=vel}this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].outerHTML=vel},replaceWithShapes:function(shapeids,shapes){var existing=$("#jqsshape"+shapeids[0]),replace="",slen=shapes.length,i;for(i=0;i<slen;i++){replace+=this["_draw"+shapes[i].type].apply(this,shapes[i].args)}existing[0].outerHTML=replace;for(i=1;i<shapeids.length;i++){$("#jqsshape"+shapeids[i]).remove()}},insertAfterShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].insertAdjacentHTML("afterEnd",vel)},removeShapeId:function(shapeid){var existing=$("#jqsshape"+shapeid);this.group.removeChild(existing[0])},getShapeAt:function(el,x,y){var shapeid=el.id.substr(8);return shapeid},render:function(){if(!this.rendered){this.group.innerHTML=this.prerender;this.rendered=true}}})})})(document,Math);
/*! Select2 4.0.8 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(u){var e=function(){if(u&&u.fn&&u.fn.select2&&u.fn.select2.amd)var e=u.fn.select2.amd;var t,n,r,h,o,s,f,g,m,v,y,_,i,a,w;function b(e,t){return i.call(e,t)}function l(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(r=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(i=(i=f[h.slice(0,d).join("/")])&&i[r]){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(b(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!b(m,e)&&!b(_,e))throw new Error("No "+e);return m[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?c(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},i=Object.prototype.hasOwnProperty,a=[].slice,w=/\.js$/,f=function(e,t){var n,r=c(e),i=r[0],o=t[1];return e=r[1],i&&(n=D(i=l(i,o))),i?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return l(e,t)}}(o)):l(e,o):(i=(r=c(e=l(e,o)))[0],e=r[1],i&&(n=D(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,r){var i,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(r=r||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)i=d[l]=g.module(e);else if(b(m,o)||b(v,o)||b(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(r,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(i&&i.exports!==h&&i.exports!==m[e]?m[e]=i.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,r,i){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=r,r=i),r?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(m,e)||b(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=r),e.define("almond",function(){}),e.define("jquery",[],function(){var e=u||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var i={};function u(e){var t=e.prototype,n=[];for(var r in t){"function"==typeof t[r]&&"constructor"!==r&&n.push(r)}return n}i.Extend=function(e,t){var n={}.hasOwnProperty;function r(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i.Decorate=function(r,i){var e=u(i),t=u(r);function o(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=r.prototype.constructor;0<t&&(e.call(arguments,r.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=r.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=r.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,r=e.length;n<r;n++)e[n].apply(this,t)},i.Observable=e,i.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},i.bind=function(e,t){return function(){e.apply(t,arguments)}},i._convertData=function(e){for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];(o=o.substring(0,1).toLowerCase()+o.substring(1))in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),r=r[o]}delete e[t]}}return e},i.hasScroll=function(e,t){var n=o(t),r=t.style.overflowX,i=t.style.overflowY;return(r!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===r||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},i.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},i.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},i.__cache={};var n=0;return i.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},i.StoreData=function(e,t,n){var r=i.GetUniqueElementId(e);i.__cache[r]||(i.__cache[r]={}),i.__cache[r][t]=n},i.GetData=function(e,t){var n=i.GetUniqueElementId(e);return t?i.__cache[n]&&null!=i.__cache[n][t]?i.__cache[n][t]:o(e).data(t):i.__cache[n]},i.RemoveData=function(e){var t=i.GetUniqueElementId(e);null!=i.__cache[t]&&delete i.__cache[t]},i}),e.define("select2/results",["jquery","./utils"],function(h,f){function r(e,t,n){this.$element=e,this.data=n,this.options=t,r.__super__.constructor.call(this)}return f.Extend(r,f.Observable),r.prototype.render=function(){var e=h('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},r.prototype.clear=function(){this.$results.empty()},r.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(e.message);n.append(t(r(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},r.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},r.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},r.prototype.position=function(e,t){t.find(".select2-results").append(e)},r.prototype.sort=function(e){return this.options.get("sorter")(e)},r.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},r.prototype.setClasses=function(){var t=this;this.data.current(function(e){var r=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,r)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},r.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},r.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},r.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"treeitem","aria-selected":"false"},r=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var i in(null!=e.element&&r.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[i];t.setAttribute(i,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},r.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var r=n-1;0===e.length&&(r=0);var i=t.eq(r);i.trigger("mouseenter");var o=l.$results.offset().top,s=i.offset().top,a=l.$results.scrollTop()+(s-o);0===r?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var r=t.eq(n);r.trigger("mouseenter");var i=l.$results.offset().top+l.$results.outerHeight(!1),o=r.offset().top+r.outerHeight(!1),s=l.$results.scrollTop()+o-i;0===n?l.$results.scrollTop(0):i<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,r=0<e.deltaY&&t-e.deltaY<=0,i=e.deltaY<0&&n<=l.$results.height();r?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):i&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},r.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},r.prototype.destroy=function(){this.$results.remove()},r.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,r=e.offset().top,i=this.$results.scrollTop()+(r-n),o=r-n;i-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(i)}},r.prototype.template=function(e,t){var n=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),i=n(e,t);null==i?t.style.display="none":"string"==typeof i?t.innerHTML=r(i):h(t).append(i)},r}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,r,i){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return r.Extend(o,r.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=r.GetData(this.$element[0],"old-tabindex")?this._tabindex=r.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),this.$selection=e},o.prototype.bind=function(e,t){var n=this,r=(e.id,e.id+"-results");this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",r),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex)}),e.on("disable",function(){n.$selection.attr("tabindex","-1")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){n(this);this!=t[0]&&r.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,r){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var r=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",r).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",r),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);n.empty().append(r),n.attr("title",t.title||t.text)}else this.clear()},i}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,a){function n(e,t){n.__super__.constructor.apply(this,arguments)}return a.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var r=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){r.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!r.options.get("disabled")){var t=i(this).parent(),n=a.GetData(t[0],"data");r.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=this.selectionContainer(),o=this.display(r,i);i.append(o),i.attr("title",r.title||r.text),a.StoreData(i[0],"data",r),t.push(i)}var s=this.$selection.find(".select2-selection__rendered");a.appendMany(s,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var r=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(r)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,r,a){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e)}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var r=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var o={data:r};if(this.trigger("clear",o),o.prevented)this.$element.val(i);else{for(var s=0;s<r.length;s++)if(o={data:r[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(i);this.$element.trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=r.DELETE&&t.which!=r.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),r=i('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(r[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(r)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(r,s,a){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("open",function(){r.$search.trigger("focus")}),t.on("close",function(){r.$search.val(""),r.$search.removeAttr("aria-activedescendant"),r.$search.trigger("focus")}),t.on("enable",function(){r.$search.prop("disabled",!1),r._transferTabIndex()}),t.on("disable",function(){r.$search.prop("disabled",!0)}),t.on("focus",function(e){r.$search.trigger("focus")}),t.on("results:focus",function(e){r.$search.attr("aria-activedescendant",e.id)}),this.$selection.on("focusin",".select2-search--inline",function(e){r.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){r._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented(),e.which===a.BACKSPACE&&""===r.$search.val()){var t=r.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=s.GetData(t[0],"data");r.searchRemoveChoice(n),e.preventDefault()}}});var i=document.documentMode,o=i&&i<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?r.$selection.off("input.search input.searchcheck"):r.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(o&&"input"===e.type)r.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=a.SHIFT&&t!=a.CTRL&&t!=a.ALT&&t!=a.TAB&&r.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").innerWidth():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var r=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,i)){t=t||{};var n=s.Event("select2:"+e,{params:t});r.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function r(e){this.dict=e||{}}return r.prototype.all=function(){return this.dict},r.prototype.get=function(e){return this.dict[e]},r.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},r._cache={},r.loadPath=function(e){if(!(e in r._cache)){var t=n(e);r._cache[e]=t}return new r(r._cache[e])},r}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(r){function n(e,t){n.__super__.constructor.call(this)}return r.Extend(n,r.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=r.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+r.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],r=this;this.$element.find(":selected").each(function(){var e=l(this),t=r.item(e);n.push(t)}),e(n)},n.prototype.select=function(i){var o=this;if(i.selected=!0,l(i.element).is("option"))return i.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var r=i[n].id;-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("change")});else{var e=i.id;this.$element.val(e),this.$element.trigger("change")}},n.prototype.unselect=function(i){var o=this;if(this.$element.prop("multiple")){if(i.selected=!1,l(i.element).is("option"))return i.element.selected=!1,void this.$element.trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].id;r!==i.id&&-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(r,e){var i=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(r,t);null!==n&&i.push(n)}}),e({results:i})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),r=this._normalizeItem(e);return r.element=t,a.StoreData(t,"data",r),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),r=[],i=0;i<n.length;i++){var o=l(n[i]),s=this.item(o);r.push(s)}t.children=r}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function r(e,t){var n=t.get("data")||[];r.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n))}return f.Extend(r,e),r.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),r.__super__.select.call(this,n)},r.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),r=n.map(function(){return t.item(g(this)).id}).get(),i=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,r)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}i.push(p)}}return i},r}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var r=o.ajax(e);return r.then(t),r.fail(n),r}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,r){var i=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=i.processResults(e,n);i.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),r(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||i.trigger("results:message",{message:"errorLoading"})});i._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var r=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(r))for(var s=0;s<r.length;s++){var a=r[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var r=t.results,i=0;i<r.length;i++){var o=r[i],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=r,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(r,a)}t.results=r,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var r=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t=r._normalizeItem(e);if(!r.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=r.option(t);n.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([n])}!function(e){r.trigger("select",{data:e})}(t)});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,r){for(var i=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,i)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(r(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.query=function(n,r,i){var o=this;this.current(function(e){var t=null!=e?e.length:0;0<o.maximumSelectionLength&&t>=o.maximumSelectionLength?o.trigger("results:message",{message:"maximumSelected",args:{maximum:o.maximumSelectionLength}}):n.call(o,r,i)})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(i,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=i('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){i(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),t.on("open",function(){r.$search.attr("tabindex",0),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),t.on("close",function(){r.$search.attr("tabindex",-1),r.$search.val(""),r.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||r.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(r.showSearch(e)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide"))})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;0<=r;r--){var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("query",function(e){r.lastParams=e,r.loading=!0}),t.on("query:append",function(e){r.lastParams=e,r.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=n.get("dropdownParent")||f(document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this,i=!1;e.call(this,t,n),t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),i||(i=!0,t.on("results:all",function(){r._positionDropdown(),r._resizeDropdown()}),t.on("results:append",function(){r._positionDropdown(),r._resizeDropdown()}))}),t.on("close",function(){r._hideDropdown(),r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._attachPositioningHandler=function(e,t){var n=this,r="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(r,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(r+" "+i+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,r="resize.select2."+t.id,i="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+r+" "+i)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),r=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=i.top,o.bottom=i.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-s,u=l>i.bottom+s,d={left:i.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h=p.offset();d.top-=h.top,d.left-=h.left,t||n||(r="below"),u||!c||t?!c&&u&&t&&(r="below"):r="above",("above"==r||t&&"below"!==r)&&(d.top=o.top-h.top-s),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("close",function(e){r._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var r=this.getHighlightedResults();if(!(r.length<1)){var i=o.GetData(r[0],"data");null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{data:i})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(f,g,m,v,y,_,$,w,b,A,x,t,D,S,E,C,O,T,q,L,j,I,P,k,R,U,M,z,e){function n(){this.reset()}return n.prototype.apply=function(t){if(null==(t=f.extend(!0,{},this.defaults,t)).dataAdapter){if(null!=t.ajax?t.dataAdapter=E:null!=t.data?t.dataAdapter=S:t.dataAdapter=D,0<t.minimumInputLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,T)),0<t.maximumInputLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,q)),0<t.maximumSelectionLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,L)),t.tags&&(t.dataAdapter=A.Decorate(t.dataAdapter,C)),null==t.tokenSeparators&&null==t.tokenizer||(t.dataAdapter=A.Decorate(t.dataAdapter,O)),null!=t.query){var e=g(t.amdBase+"compat/query");t.dataAdapter=A.Decorate(t.dataAdapter,e)}if(null!=t.initSelection){var n=g(t.amdBase+"compat/initSelection");t.dataAdapter=A.Decorate(t.dataAdapter,n)}}if(null==t.resultsAdapter&&(t.resultsAdapter=m,null!=t.ajax&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,k)),null!=t.placeholder&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,P)),t.selectOnClose&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,M))),null==t.dropdownAdapter){if(t.multiple)t.dropdownAdapter=j;else{var r=A.Decorate(j,I);t.dropdownAdapter=r}if(0!==t.minimumResultsForSearch&&(t.dropdownAdapter=A.Decorate(t.dropdownAdapter,U)),t.closeOnSelect&&(t.dropdownAdapter=A.Decorate(t.dropdownAdapter,z)),null!=t.dropdownCssClass||null!=t.dropdownCss||null!=t.adaptDropdownCssClass){var i=g(t.amdBase+"compat/dropdownCss");t.dropdownAdapter=A.Decorate(t.dropdownAdapter,i)}t.dropdownAdapter=A.Decorate(t.dropdownAdapter,R)}if(null==t.selectionAdapter){if(t.multiple?t.selectionAdapter=y:t.selectionAdapter=v,null!=t.placeholder&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,_)),t.allowClear&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,$)),t.multiple&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,w)),null!=t.containerCssClass||null!=t.containerCss||null!=t.adaptContainerCssClass){var o=g(t.amdBase+"compat/containerCss");t.selectionAdapter=A.Decorate(t.selectionAdapter,o)}t.selectionAdapter=A.Decorate(t.selectionAdapter,b)}if("string"==typeof t.language)if(0<t.language.indexOf("-")){var s=t.language.split("-")[0];t.language=[t.language,s]}else t.language=[t.language];if(f.isArray(t.language)){var a=new x;t.language.push("en");for(var l=t.language,c=0;c<l.length;c++){var u=l[c],d={};try{d=x.loadPath(u)}catch(e){try{u=this.defaults.amdLanguageBase+u,d=x.loadPath(u)}catch(e){t.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+u+'" could not be automatically loaded. A fallback will be used instead.');continue}}a.extend(d)}t.translations=a}else{var p=x.loadPath(this.defaults.amdLanguageBase+"en"),h=new x(t.language);h.extend(p),t.translations=h}return t},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:A.escapeMarkup,language:e,matcher:function e(t,n){if(""===f.trim(t.term))return n;if(n.children&&0<n.children.length){for(var r=f.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&r.children.splice(i,1);return 0<r.children.length?r:e(t,r)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.set=function(e,t){var n={};n[f.camelCase(e)]=t;var r=A._convertData(n);f.extend(!0,this.defaults,r)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(r,d,i,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),this.options=i.apply(this.options),t&&t.is("input")){var n=r(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function r(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var o=e[0].attributes[i].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,r)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(i,c,u,r){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var i=this.render();this._placeContainer(i);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,i);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,i);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element")}if("element"==t){var i=e.outerWidth(!1);return i<=0?"auto":i+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){i.each(e,t._syncA),i.each(e,t._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,r=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===i.inArray(e,r)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===r.ESC||t===r.TAB||t===r.UP&&e.altKey?(n.close(),e.preventDefault()):t===r.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===r.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===r.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===r.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===r.ENTER||t===r.SPACE||t===r.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._syncSubtree=function(e,t){var n=!1,r=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var i=0;i<t.addedNodes.length;i++){t.addedNodes[i].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length&&(n=!0);else n=!0;n&&this.dataAdapter.current(function(e){r.trigger("selection:update",{data:e})})}},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,r={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in r){var i=r[e],o={prevented:!1,name:e,args:t};if(n.call(this,i,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.trigger("query",{})},d.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];i.isArray(t)&&(t=i.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=i('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("jquery-mousewheel",["jquery"],function(e){return e}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,o,t,s){if(null==i.fn.select2){var a=["open","close","destroy"];i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new o(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,r)}),-1<i.inArray(t,a)?this:n}}return null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return u.fn.select2.amd=e,t});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
/*!
 DataTables 1.10.19
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Z(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Z(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Z(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Ca(a){var b=n.defaults.oLanguage,c=b.sDecimal;c&&Da(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&(d&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(d&&"Loading..."===b.sLoadingRecords)&&F(a,
a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Da(a)}}function fb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(n.models.oSearch,a[b])}function gb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function hb(a){if(!n.__browser){var b={};n.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,
overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,n.__browser);a.oScroll.iBarWidth=n.__browser.barWidth}
function ib(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ea(a,b){var c=n.defaults.column,d=a.aoColumns.length,c=h.extend({},n.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},n.models.oSearch,c[d]);ka(a,d,h(b).data())}function ka(a,b,c){var b=a.aoColumns[b],
d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(gb(c),J(n.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=S(g),i=b.mRender?
S(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return N(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,
b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function $(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Fa(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&la(a);r(a,null,"column-sizing",[a])}function aa(a,b){var c=ma(a,"bVisible");return"number"===
typeof c[b]?c[b]:null}function ba(a,b){var c=ma(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function V(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function ma(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ga(a){var b=a.aoColumns,c=a.aoData,d=n.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<
j;g++){i=0;for(h=c.length;i<h;i++){t[i]===k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function jb(a,b,c,d){var e,f,g,j,i,m,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){m=b[e];var q=m.targets!==k?m.targets:m.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ea(a);d(q[f],m)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],m);else if("string"===
typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,m)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function O(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},n.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ha(a,e,c,d);return e}function na(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,
e){c=Ia(a,e);return O(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function kb(a,
b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function Ja(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function S(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=S(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||
-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=Ja(f);for(var i=0,m=j.length;i<m;i++){f=j[i].match(ca);g=j[i].match(W);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(m=a.length;i<m;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(W,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}
function N(a){if(h.isPlainObject(a))return N(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ja(e),f;f=e[e.length-1];for(var g,j,i=0,m=e.length-1;i<m;i++){g=e[i].match(ca);j=e[i].match(W);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(m=d.length;j<m;j++)f={},b(f,d[j],g),
a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(W,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(W))a[f.replace(W,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ka(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function pa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,
1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ia(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;La(a,e)}}function Ia(a,b,c,d){var e=[],f=b.firstChild,g,
j,i=0,m,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),N(a)(d,b.getAttribute(c)))}},G=function(a){if(c===k||c===i)j=l[i],m=h.trim(a.innerHTML),j&&j._bAttrSrc?(N(j.mData._)(d,m),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=N(j.mData)),j._setter(d,m)):d[i]=m;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)G(f),e.push(f);f=f.nextSibling}else{e=b.anCells;
f=0;for(g=e.length;f<g;f++)G(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&N(a.rowId)(d,b);return{data:d,cells:e}}function Ha(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,m,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;La(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){m=a.aoColumns[l];i=c?d[l]:H.createElement(m.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||m.mRender||m.mData!==l)&&(!h.isPlainObject(m.mData)||m.mData._!==l+".display"))i.innerHTML=
B(a,b,l,"display");m.sClass&&(i.className+=" "+m.sClass);m.bVisible&&!c?j.appendChild(i):!m.bVisible&&c&&i.parentNode.removeChild(i);m.fnCreatedCell&&m.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}r(a,"aoRowCreatedCallback",null,[j,f,b,g])}e.nTr.setAttribute("role","row")}function La(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function lb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,m=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Ma(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Na(a,"header")(a,d,
f,m);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,m;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=
0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(m=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+m]!==k&&g[d][f].cell==g[d][f+m].cell;){for(c=0;c<i;c++)j[d+c][f+m]=1;m++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",m)}}}}function P(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=
d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,m=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!mb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:m;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ha(a,l);var t=q.nTr;if(0!==e){var G=d[c%e];q._sRowStripe!=G&&(h(t).removeClass(q._sRowStripe).addClass(G),
q._sRowStripe=G)}r(a,"aoRowCallback",null,[t,q._aData,c,j,l]);b.push(t);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:V(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ka(a),g,m,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ka(a),g,m,i]);d=h(a.nTBody);d.children().detach();
d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&nb(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;P(a);a._drawHold=!1}function ob(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=
a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,m,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];m=f[k+1];if("'"==m||'"'==m){l="";for(q=2;f[k+q]!=m;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(m=l.split("."),i.id=m[0].substr(1,m[0].length-1),i.className=m[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=pb(a);else if("f"==j&&
d.bFilter)g=qb(a);else if("r"==j&&d.bProcessing)g=rb(a);else if("t"==j)g=sb(a);else if("i"==j&&d.bInfo)g=tb(a);else if("p"==j&&d.bPaginate)g=ub(a);else if(0!==n.ext.feature.length){i=n.ext.feature;q=0;for(m=i.length;q<m;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,m,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<
i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;m=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][m+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||
!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var m="function"===typeof f?f(b,a):f,b="function"===typeof f&&m?m:h.extend(!0,b,m);delete g.data}m={data:b,success:function(b){var c=
b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=r(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(m,{url:g||a.sAjaxSource})):
"function"===typeof g?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(m,g)),g.data=f)}function mb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),sa(a,vb(a),function(b){wb(a,b)}),!1):!0}function vb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,m,l,k=X(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function(a,b){j.push({name:a,value:b})};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",
i);var G={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)m=b[g],l=f[g],i="function"==typeof m.mData?"function":m.mData,G.columns.push({data:i,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,m.bSearchable)),d.bSort&&t("bSortable_"+g,m.bSortable);d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",
e.bRegex));d.bSort&&(h.each(k,function(a,b){G.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+a,b.dir)}),t("iSortingCols",k.length));b=n.ext.legacy.ajax;return null===b?a.sAjaxSource?j:G:b?j:G}function wb(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}oa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,
10);d=0;for(e=c.length;d<e;d++)O(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;P(a);a._bInitComplete||ua(a,b);a.bAjaxDataGet=!0;C(a,!1)}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?S(c)(b):b}function qb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",
g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,P(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Oa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",
c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ga(a);if("ssp"!=y(a)){xb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)yb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,
e[b].bSmart,e[b].bCaseInsensitive);zb(a)}else f(b);a.bFiltered=!0;r(a,null,"search",[a])}function zb(a){for(var b=n.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,m=c.length;i<m;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function yb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Pa(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function xb(a,b,c,d,e,f){var d=Pa(b,
d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==n.ext.search.length&&(c=!0);j=Ab(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Pa(a,b,c,d){a=b?a:Qa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',
"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Ab(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=n.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);
h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Bb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Cb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function tb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Db,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",
b+"_info"));return d[0]}function Db(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Eb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Eb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,
c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){ob(a);lb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Fa(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));r(a,null,"preInit",[a]);T(a);e=
y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++)O(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ua(a,c)},a):(C(a,!1),ua(a))}else setTimeout(function(){ha(a)},200)}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&$(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);r(a,null,"length",[a,c])}function pb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=
e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ra(a,h(this).val());P(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===
c&&h("select",i).val(d)});return i[0]}function ub(a){var b=a.sPaginationType,c=n.ext.pager[b],d="function"===typeof c,e=function(a){P(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Na(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,
e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&P(a));return b}function rb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}
function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");r(a,null,"processing",[a,b])}function sb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),m=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",
position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:la,sName:"scrolling"});return i[0]}function la(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,
f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,m=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),n=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),Q,L,R,w,Ua=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==
L&&a.scrollBarVis!==k)a.scrollBarVis=L,$(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();u&&(R=u.clone().prependTo(p),Q=u.find("tr"),R=R.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=aa(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},R);f=p.outerWidth();if(""===c){r.width="100%";if(U&&(p.find("tbody").height()>j.offsetHeight||
"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(r.width=v(d),f=p.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Ua.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ua[b]},o);h(L).height(0);u&&(I(C,R),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},R),I(function(a,b){a.style.width=y[b]},Q),h(R).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height=
"0";a.childNodes[0].style.overflow="hidden";a.style.width=Ua[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+A[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=y[b]},R);if(p.outerWidth()<f){Q=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(Q-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else Q="100%";q.width=v(Q);
g.width=v(Q);u&&(a.nScrollFoot.style.width=v(Q));!e&&U&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();m[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(n[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,
f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Fa(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=ma(a,"bVisible"),m=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,n,o,p=a.oBrowser,d=p.bScrollOversize;(n=b.style.width)&&-1!==n.indexOf("%")&&(l=n);for(n=0;n<i.length;n++)o=c[i[n]],null!==o.sWidth&&(o.sWidth=Fb(o.sWidthOrig,k),t=!0);if(d||
!t&&!f&&!e&&j==V(a)&&j==m.length)for(n=0;n<j;n++)i=aa(a,n),null!==i&&(c[i].sWidth=v(m.eq(n).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");m=ra(a,j.find("thead")[0]);for(n=0;n<i.length;n++)o=c[i[n]],m[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):
"",o.sWidthOrig&&f&&h(m[n]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(n=0;n<i.length;n++)t=i[n],o=c[t],h(Gb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);h("[name]",j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(n=e=0;n<i.length;n++)k=h(m[n]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(m[n].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[n]].sWidth=v(k-g);b.style.width=v(e);o.remove()}l&&(b.style.width=v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Oa(function(){$(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,
b){var c=Hb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Yb,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function X(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var m=[];f=function(a){a.length&&
!h.isArray(a[0])?m.push(a):h.merge(m,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<m.length;a++){i=m[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",m[a]._idx===k&&(m[a]._idx=h.inArray(m[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:m[a][1],index:m[a]._idx,type:j,formatter:n.ext.type.order[j+"-pre"]})}return d}function nb(a){var b,c,d=[],e=n.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ga(a);h=X(a);b=0;for(c=h.length;b<
c;b++)j=h[b],j.formatter&&g++,Ib(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,n=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=n[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,n=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=n[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],
c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=X(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,
b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==
typeof d&&d(a)}function Ma(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=X(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+
(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=n.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=n.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Bb(a.oPreviousSearch),
columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Bb(a.aoPreSearchCols[d])}})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&
(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==k&&h.extend(a.oPreviousSearch,Cb(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Cb(g.search))}r(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=
a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function ya(a){var b=n.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=n.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==
typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Xa(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).on("click.DT",b,function(b){h(a).blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",
function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Na(a,b){var c=a.renderer,d=n.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===
typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Lb.numbers_length,d=Math.floor(c/2);b<=c?c=Y(0,b):a<=d?(c=Y(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=Y(b-(c-2),b):(c=Y(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function Da(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Ya)},"html-num":function(b){return za(b,
a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Ya)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Mb(a){return function(){var b=[ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this,b)}}var n=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new s(ya(this[x.iApiIndex])):new s(this)};
this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&la(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,
b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():
c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};
this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[x.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();
(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in n.ext.internal)e&&(this[e]=Mb(e));this.each(function(){var e={},g=1<d?Xa(e,a,!0):a,j=0,i,e=this.getAttribute("id"),m=!1,l=n.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{fb(l);gb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var t=n.settings,
j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead&&o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy();break}else{K(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){t.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+n.ext._unique++;var p=h.extend(!0,{},n.models.oSettings,{sDestroyWidth:q[0].style.width,
sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();fb(g);Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Xa(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");
z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");p.rowIdFn=S(g.rowId);hb(p);var u=p.oClasses;h.extend(u,n.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Ca(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(p)},error:function(){ha(p)}}),m=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(ea(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++)t.push(null)}else t=
g.aoColumns;j=0;for(i=t.length;j<i;j++)Ea(p,e?e[j]:null);jb(p,g.aoColumnDefs,t,function(a,b){ka(p,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ka(p,a)}}})}var U=p.oFeatures,
e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}wa(p);U.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=X(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});r(p,null,"order",[p,a,b]);Jb(p)}});z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||U.bDeferRender)&&wa(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){p.nTFoot=b[0];ea(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)O(p,g.aaData[j]);else(p.bDeferLoading||y(p)=="dom")&&na(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();
p.bInitialised=true;m===false&&ha(p)};g.bStateSave?(U.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Kb(p,g,e)):e()}});b=null;return this},x,s,o,u,Za={},Nb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Ya=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Ob=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Pb=function(a,b){Za[b]||(Za[b]=RegExp(Qa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Za[b],"."):a},$a=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Pb(a,b));c&&d&&(a=a.replace(Ya,""));return!isNaN(parseFloat(a))&&isFinite(a)},Qb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:$a(a.replace(Aa,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},Y=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Rb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},qa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};n.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace($b,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,W=/\(\)$/,Qa=n.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=
/<.*?>/g,Oa=n.util.throttle,Sb=[],w=Array.prototype,ac=function(a){var b,c,d=n.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};s=function(a,b){if(!(this instanceof
s))return new s(a,b);var c=[],d=function(a){(a=ac(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};s.extend(this,this,Sb)};n.Api=s;h.extend(s.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new s(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new s(this.context,b)},flatten:function(){var a=[];return new s(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,m,l=this.context,
n,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(n=Ba(l[g],u.opts));h=0;for(m=o.length;h<m;h++)f=o[h],f="cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,n),f!==k&&e.push(f)}}return e.length||d?(a=new s(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new s(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return ib(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return ib(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new s(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new s(this.context,qa(this))},unshift:w.unshift});s.extend=function(a,b,c){if(c.length&&b&&(b instanceof s||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);s.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,s.extend(a,b[f.name],f.propExt)}};s.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)s.register(a[c],b);else for(var e=a.split("."),f=Sb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var m=f.length;i<m;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};s.registerPlural=u=function(a,b,c){s.register(a,c);s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof s?a.length?h.isArray(a[0])?new s(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;if(a){b=s;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new s(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?P(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});o("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});o("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Tb=function(a,b,c){if(c){var d=new s(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){oa(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++)O(a,c[d]);T(a,b);C(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});o("ajax.reload()",function(a,b){return this.iterator("table",function(c){Tb(c,!1===b,a)})});o("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Tb(c,!1===b,a)})});var ab=function(a,b,c,d,e){var f=[],g,j,i,m,l,n;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(m=b.length;i<m;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(n=j.length;l<n;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(m=a.length;i<m;i++)f=a[i](d,e,f)}return qa(f)},bb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},cb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;e=a.aiDisplayMaster;var j=b.search;c=b.order;d=b.page;if("ssp"==y(a))return"removed"===j?[]:Y(0,e.length);if("current"==d){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==c||"applied"==c)if("none"==j)f=e.slice();else if("applied"==j)f=g.slice();else{if("removed"==j){var i={};c=0;for(d=g.length;c<d;c++)i[g[c]]=null;f=h.map(e,function(a){return!i.hasOwnProperty(a)?a:null})}}else if("index"==c||"original"==c){c=0;for(d=a.aoData.length;c<d;c++)"none"==
j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=b,f;return ab("row",a,function(a){var b=Ob(a),i=c.aoData;if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var c=i[b];return a(b,c._aData,c.nTr)?b:null});if(a.nodeName){var b=
a._DT_RowIndex,m=a._DT_CellIndex;if(b!==k)return i[b]&&i[b].nTr===a?[b]:[];if(m)return i[m.row]&&i[m.row].nTr===a?[m.row]:[];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){b=c.aIds[a.replace(/^#/,"")];if(b!==k)return[b.idx]}b=Rb(ja(c.aoData,f,"nTr"));return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",
function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new s(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,m,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(m=
l.length;i<m;i++)l[i]._DT_CellIndex.row=g}pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(na(b,c)[0]):h.push(O(b,c));return h},
1),c=this.rows(-1);c.pop();h.merge(c,b);return c});o("row()",function(a,b){return cb(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;var c=b[0].aoData[this[0]];c._aData=a;h.isArray(a)&&c.nTr.id&&N(b[0].rowId)(a,c.nTr.id);da(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&
a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?na(b,a)[0]:O(b,a)});return this.row(b[0])});var db=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Ub=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=V(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&db(f,c)}))}}};o("row().child()",function(a,b){var c=
this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)db(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=V(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);
c._detailsShow&&c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Ub(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Ub(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){db(this);return this});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var bc=/^([^:]+):(name|visIdx|visible)$/,Vb=function(a,b,
c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return ab("column",e,function(a){var b=Ob(a);if(a==="")return Y(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Vb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(bc):
"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var n=h.map(g,function(a,b){return a.bVisible?b:null});return[n[n.length+b]]}return[aa(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},
1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Vb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},
1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,
i,m,l;if(a!==k&&g.bVisible!==a){if(a){var n=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(m=j.length;i<m;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[n]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);b.aiDisplay.length||h(b.nTBody).find("td[colspan]").attr("colspan",V(b));xa(b)}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",
function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});o("columns.adjust()",function(){return this.iterator("table",function(a){$(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return aa(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});o("column()",function(a,b){return cb(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));
h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=bb(c),f=b.aoData,g=Ba(b,e),j=Rb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,n,o,u,s,r,v;return ab("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){n=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<m;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(r)}else n.push(r)}}return n}if(h.isPlainObject(a))return a.column!==
k&&a.row!==k&&h.inArray(a.row,g)!==-1?[a]:[];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b),e=this.rows(a),f,g,j,i,m;this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}},1);var l=this.cells(f,
c);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",
function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});o("cell()",function(a,b,c){return cb(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],
c[0].row,c[0].column):k;kb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){Ma(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=
this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,
h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:
null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){xa(a)})});n.versionCheck=n.fnVersionCheck=function(a){for(var b=n.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};n.isDataTable=
n.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof n.Api)return!0;h.each(n.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};n.tables=n.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(n.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new s(c):c};n.camelToHungarian=J;o("$()",function(a,b){var c=
this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){oa(a)})});o("settings()",function(){return new s(this.context,this.context)});o("init()",function(){var a=
this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||(new s(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");
h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),
(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,n.settings);-1!==c&&n.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=S(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:
a._);return a.replace("%d",c)});n.version="1.10.19";n.settings=[];n.models={};n.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};n.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};n.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,
sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};n.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
n.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Z(n.defaults);n.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Z(n.defaults.column);n.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:
this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};n.ext=x={buttons:{},
classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:n.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:n.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});
h.extend(n.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Lb=n.ext.pager;h.extend(Lb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,n.ext.renderer,{pageButton:{_:function(a,b,c,d,e,
f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,n=0,o=function(b,d){var k,s,u,r,v=function(b){Ta(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u=h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r)}else{m=null;l="";switch(r){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=
j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=r+1;l=e===r?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":n,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(m).appendTo(b);Wa(u,{action:r},v);n++}}}},s;try{s=h(b).find(H.activeElement).data("dt-idx")}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+
s+"]").focus()}}});h.extend(n.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Qb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Qb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||
"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(n.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Nb," ").replace(Aa,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Nb," "):a}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Pb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return M(a)?
"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});Da("");h.extend(!0,n.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:
c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]==
"asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var eb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};n.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return eb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+f+(e||"")}}},text:function(){return{display:eb,filter:eb}}};h.extend(n.ext.internal,{_fnExternApiFunc:Mb,_fnBuildAjax:sa,_fnAjaxUpdate:mb,_fnAjaxParameters:vb,_fnAjaxUpdateDraw:wb,_fnAjaxDataSrc:ta,_fnAddColumn:Ea,_fnColumnOptions:ka,_fnAdjustColumnSizing:$,_fnVisibleToColumnIndex:aa,_fnColumnIndexToVisible:ba,_fnVisbleColumns:V,_fnGetColumns:ma,_fnColumnTypes:Ga,_fnApplyColumnDefs:jb,_fnHungarianMap:Z,_fnCamelToHungarian:J,_fnLanguageCompat:Ca,_fnBrowserDetect:hb,_fnAddData:O,_fnAddTr:na,_fnNodeToDataIndex:function(a,
b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:kb,_fnSplitObjNotation:Ja,_fnGetObjectDataFn:S,_fnSetObjectDataFn:N,_fnGetDataMaster:Ka,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:da,_fnGetRowElements:Ia,_fnCreateTr:Ha,_fnBuildHead:lb,_fnDrawHead:fa,_fnDraw:P,_fnReDraw:T,_fnAddOptionsHtml:ob,_fnDetectHeader:ea,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:qb,_fnFilterComplete:ga,_fnFilterCustom:zb,
_fnFilterColumn:yb,_fnFilter:xb,_fnFilterCreateSearch:Pa,_fnEscapeRegex:Qa,_fnFilterData:Ab,_fnFeatureHtmlInfo:tb,_fnUpdateInfo:Db,_fnInfoMacros:Eb,_fnInitialise:ha,_fnInitComplete:ua,_fnLengthChange:Ra,_fnFeatureHtmlLength:pb,_fnFeatureHtmlPaginate:ub,_fnPageChange:Ta,_fnFeatureHtmlProcessing:rb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:sb,_fnScrollDraw:la,_fnApplyToChildren:I,_fnCalculateColumnWidths:Fa,_fnThrottle:Oa,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:v,
_fnSortFlatten:X,_fnSort:nb,_fnSortAria:Jb,_fnSortListener:Va,_fnSortAttachListener:Ma,_fnSortingClasses:wa,_fnSortData:Ib,_fnSaveState:xa,_fnLoadState:Kb,_fnSettingsFromNode:ya,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Sa,_fnRenderer:Na,_fnDataSource:y,_fnRowAttributes:La,_fnExtend:Xa,_fnCalculateEnd:function(){}});h.fn.dataTable=n;n.$=h;h.fn.dataTableSettings=n.settings;h.fn.dataTableExt=n.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};
h.each(n,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.1.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var computeDimension = function(element,dimension)
		{
			if (element['offset'+dimension])
			{
				return element['offset'+dimension];
			}
			else
			{
				return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
			}
		};

		var width = this.width = computeDimension(context.canvas,'Width') || context.canvas.width;
		var height = this.height = computeDimension(context.canvas,'Height') || context.canvas.height;

		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
			customTooltips: false,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// String - Tooltip title template
			tooltipTitleTemplate: "<%= label%>",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Array - A list of colors to use as the defaults
			segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928" ],

			// Array - A list of highlight colors to use as the defaults
			segmentHighlightColorDefaults: [ "#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150" ],

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)){
					objClone[key] = value;
				}
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)){
						base[key] = value;
					}
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		where = helpers.where = function(collection, filterCallback){
			var filtered = [];

			helpers.each(collection, function(item){
				if (filterCallback(item)){
					filtered.push(item);
				}
			});

			return filtered;
		},
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to start of the array
			if (!startIndex){
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to end of the array
			if (!startIndex){
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn === "function") console.warn(str);
		},
		amd = helpers.amd = (typeof define === 'function' && define.amd),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				var s = num.toString();
				if(s.indexOf("e-") < 0){
					// no exponent, e.g. 0.01
					return s.split(".")[1].length;
				}
				else if(s.indexOf(".") < 0) {
					// no decimal point, e.g. 1e-9
					return parseInt(s.split("e-")[1]);
				}
				else {
					// exponent and decimal point, e.g. 1.23e-9
					var parts = s.split(".")[1].split("e-");
					return parts[0].length + parseInt(parts[1]);
				}
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			// Filter out null values since these would min() to zero
			var values = [];
			each(valuesArray, function( v ){
				v == null || values.push( v );
			});
			var minValue = min(values),
			    maxValue = max(values);

			// We need some degree of separation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){

			// If templateString is function rather than string-template - call the function for valuesObject

			if(templateString instanceof Function){
			 	return templateString(valuesObject);
		 	}

			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (templateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t;
				}
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t * t;
				}
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0){
					return 0;
				}
				if (t === 1){
					return 1;
				}
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * Math.pow(2, 10 * (t - 1));
				}
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1){
					return t;
				}
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1){
					return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				}
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1) == 1){
					return 1;
				}
				if (!p){
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else{
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1) == 1){
					return 1;
				}
				if (!p){
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else{
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1 / 2) == 2){
					return 1;
				}
				if (!p){
					p = 1 * (0.3 * 1.5);
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				if (t < 1){
					return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));}
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				}
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2){
					return easingEffects.easeInBounce(t * 2) * 0.5;
				}
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode,
			    padding = parseInt(getStyle(container, 'padding-left')) + parseInt(getStyle(container, 'padding-right'));
			// TODO = check cross browser stuff with this.
			return container ? container.clientWidth - padding : 0;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode,
			    padding = parseInt(getStyle(container, 'padding-bottom')) + parseInt(getStyle(container, 'padding-top'));
			// TODO = check cross browser stuff with this.
			return container ? container.clientHeight - padding : 0;
		},
		getStyle = helpers.getStyle = function (el, property) {
			return el.currentStyle ?
				el.currentStyle[property] :
				document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;

			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			Chart.animationService.cancelAnimation(this);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height = this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			
			if (this.options.animation && !reflow){
				var animation = new Chart.Animation();
				animation.numSteps = this.options.animationSteps;
				animation.easing = this.options.animationEasing;
				
				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);
					
					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};
				
				// user events
				animation.onAnimationProgress = this.options.onAnimationProgress;
				animation.onAnimationComplete = this.options.onAnimationComplete;
				
				Chart.animationService.addAnimation(this, animation);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return helpers.template(this.options.legendTemplate, this);
		},
		destroy : function(){
			this.stop();
			this.clear();
			unbindEvents(this, this.events);
			var canvas = this.chart.canvas;

			// Reset canvas height/width attributes starts a fresh with the canvas context
			canvas.width = this.chart.width;
			canvas.height = this.chart.height;

			// < IE9 doesn't support removeProperty
			if (canvas.style.removeProperty) {
				canvas.style.removeProperty('width');
				canvas.style.removeProperty('height');
			} else {
				canvas.style.removeAttribute('width');
				canvas.style.removeAttribute('height');
			}

			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if(this.options.customTooltips){
				this.options.customTooltips(false);
			}
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: template(this.options.tooltipTitleTemplate,ChartElements[0]),
						chart: this.chart,
						ctx: this.chart.ctx,
						custom: this.options.customTooltips
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		},
		hasValue: function(){
			return isNumber(this.value);
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.x, this.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			// Normalize all angles to 0 - 2*PI (0 - 360°)
			var pointRelativeAngle = pointRelativePosition.angle % (Math.PI * 2),
			    startAngle = (Math.PI * 2 + this.startAngle) % (Math.PI * 2),
			    endAngle = (Math.PI * 2 + this.endAngle) % (Math.PI * 2) || 360;

			// Calculate wether the pointRelativeAngle is between the start and the end angle
			var betweenAngles = (endAngle < startAngle) ?
				pointRelativeAngle <= endAngle || pointRelativeAngle >= startAngle:
				pointRelativeAngle >= startAngle && pointRelativeAngle <= endAngle;

			//Check if within the range of the open/close angle
			var withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle);

            ctx.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: "", // the easing to use for this animation
		render: null, // render function used by the animation service
		
		onAnimationProgress: null, // user specified callback to fire on each step of the animation 
		onAnimationComplete: null, // user specified callback to fire when the animation finishes
	});
	
	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = this.caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				switch(this.yAlign)
				{
				case "above":
					//Draw a caret above the x/y
					ctx.beginPath();
					ctx.moveTo(this.x,this.y - caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.closePath();
					ctx.fill();
					break;
				case "below":
					tooltipY = this.y + caretPadding + this.caretHeight;
					//Draw a caret below the x/y
					ctx.beginPath();
					ctx.moveTo(this.x, this.y + caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.closePath();
					ctx.fill();
					break;
				}

				switch(this.xAlign)
				{
				case "left":
					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
					break;
				case "right":
					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
					break;
				}

				drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

				ctx.fill();

				ctx.fillStyle = this.textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
			}
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.titleHeight = this.title ? this.titleFontSize * 1.5 : 0;
			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleHeight;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleHeight / 3;
			} else{
				return baseLineHeight + ((this.fontSize * 1.5 * afterTitleIndex) + this.fontSize / 2) + this.titleHeight;
			}

		},
		draw : function(){
			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
				var ctx = this.ctx;
				ctx.fillStyle = this.fillColor;
				ctx.fill();
				ctx.closePath();

				ctx.textAlign = "left";
				ctx.textBaseline = "middle";
				ctx.fillStyle = this.titleTextColor;
				ctx.font = this.titleFont;

				ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

				ctx.font = this.font;
				helpers.each(this.labels,function(label,index){
					ctx.fillStyle = this.textColor;
					ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

					//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
					//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
					//Instead we'll make a white filled block to put the legendColour palette over.

					ctx.fillStyle = this.legendColorBackground;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

					ctx.fillStyle = this.legendColors[index].fill;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


				},this);
			}
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) + 10 : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting endpoint, excluding the space for x labels
			var cachedEndPoint = this.endPoint;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.endPoint = cachedEndPoint;
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth) ? firstWidth/2 : this.yLabelWidth;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter),
						drawHorizontalLine = this.showHorizontalLines;

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}

					// This is X axis, so draw it
					if (index === 0 && !drawHorizontalLine){
						drawHorizontalLine = true;
					}

					if (drawHorizontalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					if(drawHorizontalLine){
						ctx.moveTo(xStart, linePositionY);
						ctx.lineTo(this.width, linePositionY);
						ctx.stroke();
						ctx.closePath();
					}

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0),
						drawVerticalLine = this.showVerticalLines;

					// This is Y axis, so draw it
					if (index === 0 && !drawVerticalLine){
						drawVerticalLine = true;
					}

					if (drawVerticalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					if (drawVerticalLine){
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.startPoint - 3);
						ctx.stroke();
						ctx.closePath();
					}


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						var centerOffset = null, outerPosition = null;

						if (this.angleLineWidth > 0 && (i % this.angleLineInterval === 0)){
							centerOffset = this.calculateCenterOffset(this.max);
							outerPosition = this.getPointPosition(i, centerOffset);
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}

						if (this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
							if (centerOffset == null)
								centerOffset = this.calculateCenterOffset(this.max);

							if (outerPosition == null)
								outerPosition = this.getPointPosition(i, centerOffset);

							var previousOuterPosition = this.getPointPosition(i === 0 ? this.valuesCount - 1 : i - 1, centerOffset);
							var nextOuterPosition = this.getPointPosition(i === this.valuesCount - 1 ? 0 : i + 1, centerOffset);

							var previousOuterHalfway = { x: (previousOuterPosition.x + outerPosition.x) / 2, y: (previousOuterPosition.y + outerPosition.y) / 2 };
							var nextOuterHalfway = { x: (outerPosition.x + nextOuterPosition.x) / 2, y: (outerPosition.y + nextOuterPosition.y) / 2 };

							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(previousOuterHalfway.x, previousOuterHalfway.y);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.lineTo(nextOuterHalfway.x, nextOuterHalfway.y);
							ctx.fillStyle = this.backgroundColors[i];
							ctx.fill();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		addAnimation: function(chartInstance, animationObject) {
			for (var index = 0; index < this.animations.length; ++ index){
				if (this.animations[index].chartInstance === chartInstance){
					// replacing an in progress animation
					this.animations[index].animationObject = animationObject;
					return;
				}
			}
			
			this.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (this.animations.length == 1) {
				helpers.requestAnimFrame.call(window, this.digestWrapper);
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findNextWhere(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});
			
			if (index)
			{
				this.animations.splice(index, 1);
			}
		},
		// calls startDigest with the proper context
		digestWrapper: function() {
			Chart.animationService.startDigest.call(Chart.animationService);
		},
		startDigest: function() {

			var startTime = Date.now();
			var framesToDrop = 0;

			if(this.dropFrames > 1){
				framesToDrop = Math.floor(this.dropFrames);
				this.dropFrames -= framesToDrop;
			}

			for (var i = 0; i < this.animations.length; i++) {

				if (this.animations[i].animationObject.currentStep === null){
					this.animations[i].animationObject.currentStep = 0;
				}

				this.animations[i].animationObject.currentStep += 1 + framesToDrop;
				if(this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps){
					this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps;
				}
				
				this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject);
				
				// Check if executed the last frame.
				if (this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps){
					// Call onAnimationComplete
					this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance);
					// Remove the animation.
					this.animations.splice(i, 1);
					// Keep the index in place to offset the splice
					i--;
				}
			}

			var endTime = Date.now();
			var delay = endTime - startTime - this.frameDuration;
			var frameDelay = delay / this.frameDuration;

			if(frameDelay > 1){
				this.dropFrames += frameDelay;
			}

			// Do we have more stuff to animate?
			if (this.animations.length > 0){
				helpers.requestAnimFrame.call(window, this.digestWrapper);
			}
		}
	};

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		define('Chart', [], function(){
			return Chart;
		});
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						if (activeBar) {
							activeBar.fillColor = activeBar.highlightFill;
							activeBar.strokeColor = activeBar.highlightStroke;
						}
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.bars.push(new this.BarClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : (typeof dataset.strokeColor == 'object') ? dataset.strokeColor[index] : dataset.strokeColor,
						fillColor : (typeof dataset.fillColor == 'object') ? dataset.fillColor[index] : dataset.fillColor,
						highlightFill : (dataset.highlightFill) ? (typeof dataset.highlightFill == 'object') ? dataset.highlightFill[index] : dataset.highlightFill : (typeof dataset.fillColor == 'object') ? dataset.fillColor[index] : dataset.fillColor,
						highlightStroke : (dataset.highlightStroke) ? (typeof dataset.highlightStroke == 'object') ? dataset.highlightStroke[index] : dataset.highlightStroke : (typeof dataset.strokeColor == 'object') ? dataset.strokeColor[index] : dataset.strokeColor
					}));
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].bars.push(new this.BarClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
					y: this.scale.endPoint,
					width : this.scale.calculateBarWidth(this.datasets.length),
					base : this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].strokeColor,
					fillColor : this.datasets[datasetIndex].fillColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					if (bar.hasValue()){
						bar.base = this.scale.endPoint;
						//Transition then draw
						bar.transition({
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
							y : this.scale.calculateY(bar.value),
							width : this.scale.calculateBarWidth(this.datasets.length)
						}, easingDecimal).draw();
					}
				},this);

			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=segments[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"

	};

	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the defaults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				if (!datapoint.color) {
					datapoint.color = 'hsl(' + (360 * index / data.length) + ', 100%, 50%)';
				}
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex !== undefined ? atIndex : this.segments.length;
			if ( typeof(segment.color) === "undefined" ) {
				segment.color = Chart.defaults.global.segmentColorDefault[index % Chart.defaults.global.segmentColorDefault.length];
				segment.highlight = Chart.defaults.global.segmentHighlightColorDefaults[index % Chart.defaults.global.segmentHighlightColorDefaults.length];				
			}
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value) {
			if ( this.total > 0 ) {
				return (Math.PI*2)*(value / this.total);
			} else {
				return 0;
			}
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += Math.abs(segment.value);
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",

		//Boolean - Whether to horizontally center the label and point dot inside the grid
		offsetGridLines : false

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				offsetGridLines : this.options.offsetGridLines,
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				offsetGridLines : this.options.offsetGridLines,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: this.scale.calculateX(this.scale.valuesCount+1),
					y: this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			// Some helper methods for getting the next/prev points
			var hasValue = function(item){
				return item.value !== null;
			},
			nextPoint = function(point, collection, index){
				return helpers.findNextWhere(collection, hasValue, index) || point;
			},
			previousPoint = function(point, collection, index){
				return helpers.findPreviousWhere(collection, hasValue, index) || point;
			};

			if (!this.scale) return;
			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){
				var pointsWithValues = helpers.where(dataset.points, hasValue);

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points, function(point, index){
					if (point.hasValue()){
						point.transition({
							y : this.scale.calculateY(point.value),
							x : this.scale.calculateX(index)
						}, easingDecimal);
					}
				},this);


				// Control points need to be calculated in a separate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(pointsWithValues, function(point, index){
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
						point.controlPoints = helpers.splineCurve(
							previousPoint(point, pointsWithValues, index),
							point,
							nextPoint(point, pointsWithValues, index),
							tension
						);

						// Prevent the bezier going outside of the bounds of the graph

						// Cap puter bezier handles to the upper/lower scale bounds
						if (point.controlPoints.outer.y > this.scale.endPoint){
							point.controlPoints.outer.y = this.scale.endPoint;
						}
						else if (point.controlPoints.outer.y < this.scale.startPoint){
							point.controlPoints.outer.y = this.scale.startPoint;
						}

						// Cap inner bezier handles to the upper/lower scale bounds
						if (point.controlPoints.inner.y > this.scale.endPoint){
							point.controlPoints.inner.y = this.scale.endPoint;
						}
						else if (point.controlPoints.inner.y < this.scale.startPoint){
							point.controlPoints.inner.y = this.scale.startPoint;
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();

				helpers.each(pointsWithValues, function(point, index){
					if (index === 0){
						ctx.moveTo(point.x, point.y);
					}
					else{
						if(this.options.bezierCurve){
							var previous = previousPoint(point, pointsWithValues, index);

							ctx.bezierCurveTo(
								previous.controlPoints.outer.x,
								previous.controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					}
				}, this);

				if (this.options.datasetStroke) {
					ctx.stroke();
				}

				if (this.options.datasetFill && pointsWithValues.length > 0){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(pointsWithValues,function(point){
					point.draw();
				});
			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segment.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=segments[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the defaults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			
			this.reflow();
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//Number - Interval at which to draw angle lines ("every Nth point")
			angleLineInterval: 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					var pointPosition;
					if (!this.scale.animation){
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
					}
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backgroundColors: this.options.scaleBackgroundColors,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
        angleLineInterval: (this.options.angleLineInterval) ? this.options.angleLineInterval : 1,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: pointPosition.x,
					y: pointPosition.y,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					if (point.hasValue()){
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				if(this.options.datasetFill){
					ctx.fill();
				}
				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					if (point.hasValue()){
						point.draw();
					}
				});

			},this);

		}

	});





}).call(this);

/**
 * jVectorMap version 1.2.2
 *
 * Copyright 2011-2013, Kirill Lebedev
 * Licensed under the MIT license.
 *
 */(function(e){var t={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};e.fn.vectorMap=function(e){var n,r,i,n=this.children(".jvectormap-container").data("mapObject");if(e==="addMap")jvm.WorldMap.maps[arguments[1]]=arguments[2];else{if(!(e!=="set"&&e!=="get"||!t[e][arguments[1]]))return r=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),n[e+r].apply(n,Array.prototype.slice.call(arguments,2));e=e||{},e.container=this,n=new jvm.WorldMap(e)}return this}})(jQuery),function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=t.length;n;)e.event.fixHooks[t[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],r,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);var jvm={inherits:function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.parentClass=t},mixin:function(e,t){var n;for(n in t.prototype)t.prototype.hasOwnProperty(n)&&(e.prototype[n]=t.prototype[n])},min:function(e){var t=Number.MAX_VALUE,n;if(e instanceof Array)for(n=0;n<e.length;n++)e[n]<t&&(t=e[n]);else for(n in e)e[n]<t&&(t=e[n]);return t},max:function(e){var t=Number.MIN_VALUE,n;if(e instanceof Array)for(n=0;n<e.length;n++)e[n]>t&&(t=e[n]);else for(n in e)e[n]>t&&(t=e[n]);return t},keys:function(e){var t=[],n;for(n in e)t.push(n);return t},values:function(e){var t=[],n,r;for(r=0;r<arguments.length;r++){e=arguments[r];for(n in e)t.push(e[n])}return t}};jvm.$=jQuery,jvm.AbstractElement=function(e,t){this.node=this.createElement(e),this.name=e,this.properties={},t&&this.set(t)},jvm.AbstractElement.prototype.set=function(e,t){var n;if(typeof e=="object")for(n in e)this.properties[n]=e[n],this.applyAttr(n,e[n]);else this.properties[e]=t,this.applyAttr(e,t)},jvm.AbstractElement.prototype.get=function(e){return this.properties[e]},jvm.AbstractElement.prototype.applyAttr=function(e,t){this.node.setAttribute(e,t)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(e,t,n){this.container=e,this.setSize(t,n),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(e,t){t=t||this.rootElement,t.add(e),e.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(e,t,n){var r=new jvm[this.classPrefix+"PathElement"](e,t);return this.add(r,n),r},jvm.AbstractCanvasElement.prototype.addCircle=function(e,t,n){var r=new jvm[this.classPrefix+"CircleElement"](e,t);return this.add(r,n),r},jvm.AbstractCanvasElement.prototype.addGroup=function(e){var t=new jvm[this.classPrefix+"GroupElement"];return e?e.node.appendChild(t.node):this.node.appendChild(t.node),t.canvas=this,t},jvm.AbstractShapeElement=function(e,t,n){this.style=n||{},this.style.current={},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setHovered=function(e){this.isHovered!==e&&(this.isHovered=e,this.updateStyle())},jvm.AbstractShapeElement.prototype.setSelected=function(e){this.isSelected!==e&&(this.isSelected=e,this.updateStyle(),jvm.$(this.node).trigger("selected",[e]))},jvm.AbstractShapeElement.prototype.setStyle=function(e,t){var n={};typeof e=="object"?n=e:n[e]=t,jvm.$.extend(this.style.current,n),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var e={};jvm.AbstractShapeElement.mergeStyles(e,this.style.initial),jvm.AbstractShapeElement.mergeStyles(e,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(e,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(e,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(e,this.style.selectedHover)),this.set(e)},jvm.AbstractShapeElement.mergeStyles=function(e,t){var n;t=t||{};for(n in t)t[n]===null?delete e[n]:e[n]=t[n]},jvm.SVGElement=function(e,t){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(e){return document.createElementNS(jvm.SVGElement.svgns,e)},jvm.SVGElement.prototype.addClass=function(e){this.node.setAttribute("class",e)},jvm.SVGElement.prototype.getElementCtr=function(e){return jvm["SVG"+e]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(e){this.node.appendChild(e.node)},jvm.SVGCanvasElement=function(e,t,n){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(e,t){this.width=e,this.height=t,this.node.setAttribute("width",e),this.node.setAttribute("height",t)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(e,t,n){this.scale=e,this.transX=t,this.transY=n,this.rootElement.node.setAttribute("transform","scale("+e+") translate("+t+", "+n+")")},jvm.SVGShapeElement=function(e,t,n){jvm.SVGShapeElement.parentClass.call(this,e,t),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGPathElement=function(e,t){jvm.SVGPathElement.parentClass.call(this,"path",e,t),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(e,t){jvm.SVGCircleElement.parentClass.call(this,"circle",e,t)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.VMLElement=function(e,t){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(e){return document.createElement("<rvml:"+e+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(e){return jvm["VML"+e]},jvm.VMLElement.prototype.addClass=function(e){jvm.$(this.node).addClass(e)},jvm.VMLElement.prototype.applyAttr=function(e,t){this.node[e]=t},jvm.VMLElement.prototype.getBBox=function(){var e=jvm.$(this.node);return{x:e.position().left/this.canvas.scale,y:e.position().top/this.canvas.scale,width:e.width()/this.canvas.scale,height:e.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(e){this.node.appendChild(e.node)},jvm.VMLCanvasElement=function(e,t,n){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(e,t){var n,r,i,s;this.width=e,this.height=t,this.node.style.width=e+"px",this.node.style.height=t+"px",this.node.coordsize=e+" "+t,this.node.coordorigin="0 0";if(this.rootElement){n=this.rootElement.node.getElementsByTagName("shape");for(i=0,s=n.length;i<s;i++)n[i].coordsize=e+" "+t,n[i].style.width=e+"px",n[i].style.height=t+"px";r=this.node.getElementsByTagName("group");for(i=0,s=r.length;i<s;i++)r[i].coordsize=e+" "+t,r[i].style.width=e+"px",r[i].style.height=t+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(e,t,n){this.scale=e,this.transX=t,this.transY=n,this.rootElement.node.coordorigin=this.width-t-this.width/100+","+(this.height-n-this.height/100),this.rootElement.node.coordsize=this.width/e+","+this.height/e},jvm.VMLShapeElement=function(e,t){jvm.VMLShapeElement.parentClass.call(this,e,t),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(e,t){switch(e){case"fill":this.node.fillcolor=t;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(t*100)+"%";break;case"stroke":t==="none"?this.node.stroked=!1:this.node.stroked=!0,this.node.strokecolor=t;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(t*100)+"%";break;case"stroke-width":parseInt(t,10)===0?this.node.stroked=!1:this.node.stroked=!0,this.node.strokeweight=t;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(t);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(e,t){var n=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",e,t),this.node.coordorigin="0 0",n.node.on=!0,n.node.matrix="0.01,0,0,0.01,0,0",n.node.offset="0,0",this.node.appendChild(n.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(e,t){e==="d"?this.node.path=jvm.VMLPathElement.pathSvgToVml(t):jvm.VMLShapeElement.prototype.applyAttr.call(this,e,t)},jvm.VMLPathElement.pathSvgToVml=function(e){var t="",n=0,r=0,i,s;return e=e.replace(/(-?\d+)e(-?\d+)/g,"0"),e.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(e,t,o,u){o=o.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),o[0]||o.shift();for(var a=0,f=o.length;a<f;a++)o[a]=Math.round(100*o[a]);switch(t){case"m":return n+=o[0],r+=o[1],"t"+o.join(",");case"M":return n=o[0],r=o[1],"m"+o.join(",");case"l":return n+=o[0],r+=o[1],"r"+o.join(",");case"L":return n=o[0],r=o[1],"l"+o.join(",");case"h":return n+=o[0],"r"+o[0]+",0";case"H":return n=o[0],"l"+n+","+r;case"v":return r+=o[0],"r0,"+o[0];case"V":return r=o[0],"l"+n+","+r;case"c":return i=n+o[o.length-4],s=r+o[o.length-3],n+=o[o.length-2],r+=o[o.length-1],"v"+o.join(",");case"C":return i=o[o.length-4],s=o[o.length-3],n=o[o.length-2],r=o[o.length-1],"c"+o.join(",");case"s":return o.unshift(r-s),o.unshift(n-i),i=n+o[o.length-4],s=r+o[o.length-3],n+=o[o.length-2],r+=o[o.length-1],"v"+o.join(",");case"S":return o.unshift(r+r-s),o.unshift(n+n-i),i=o[o.length-4],s=o[o.length-3],n=o[o.length-2],r=o[o.length-1],"c"+o.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(e,t){jvm.VMLCircleElement.parentClass.call(this,"oval",e,t)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(e,t){switch(e){case"r":this.node.style.width=t*2+"px",this.node.style.height=t*2+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!t)return;this.node.style.left=t-(this.get("r")||0)+"px";break;case"cy":if(!t)return;this.node.style.top=t-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,e,t)}},jvm.VectorCanvas=function(e,t,n){return this.mode=window.SVGAngle?"svg":"vml",this.mode=="svg"?this.impl=new jvm.SVGCanvasElement(e,t,n):this.impl=new jvm.VMLCanvasElement(e,t,n),this.impl},jvm.SimpleScale=function(e){this.scale=e},jvm.SimpleScale.prototype.getValue=function(e){return e},jvm.OrdinalScale=function(e){this.scale=e},jvm.OrdinalScale.prototype.getValue=function(e){return this.scale[e]},jvm.NumericScale=function(e,t,n,r){this.scale=[],t=t||"linear",e&&this.setScale(e),t&&this.setNormalizeFunction(t),n&&this.setMin(n),r&&this.setMax(r)},jvm.NumericScale.prototype={setMin:function(e){this.clearMinValue=e,typeof this.normalize=="function"?this.minValue=this.normalize(e):this.minValue=e},setMax:function(e){this.clearMaxValue=e,typeof this.normalize=="function"?this.maxValue=this.normalize(e):this.maxValue=e},setScale:function(e){var t;for(t=0;t<e.length;t++)this.scale[t]=[e[t]]},setNormalizeFunction:function(e){e==="polynomial"?this.normalize=function(e){return Math.pow(e,.2)}:e==="linear"?delete this.normalize:this.normalize=e,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(e){var t=[],n=0,r,i=0,s;typeof this.normalize=="function"&&(e=this.normalize(e));for(i=0;i<this.scale.length-1;i++)r=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),t.push(r),n+=r;s=(this.maxValue-this.minValue)/n;for(i=0;i<t.length;i++)t[i]*=s;i=0,e-=this.minValue;while(e-t[i]>=0)e-=t[i],i++;return i==this.scale.length-1?e=this.vectorToNum(this.scale[i]):e=this.vectorToNum(this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),e/t[i]))),e},vectorToNum:function(e){var t=0,n;for(n=0;n<e.length;n++)t+=Math.round(e[n])*Math.pow(256,e.length-n-1);return t},vectorSubtract:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]-t[r];return n},vectorAdd:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]+t[r];return n},vectorMult:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]*t;return n},vectorLength:function(e){var t=0,n;for(n=0;n<e.length;n++)t+=e[n]*e[n];return Math.sqrt(t)}},jvm.ColorScale=function(e,t,n,r){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(e){var t;for(t=0;t<e.length;t++)this.scale[t]=jvm.ColorScale.rgbToArray(e[t])},jvm.ColorScale.prototype.getValue=function(e){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,e))},jvm.ColorScale.arrayToRgb=function(e){var t="#",n,r;for(r=0;r<e.length;r++)n=e[r].toString(16),t+=n.length==1?"0"+n:n;return t},jvm.ColorScale.numToRgb=function(e){e=e.toString(16);while(e.length<6)e="0"+e;return"#"+e},jvm.ColorScale.rgbToArray=function(e){return e=e.substr(1),[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]},jvm.DataSeries=function(e,t){var n;e=e||{},e.attribute=e.attribute||"fill",this.elements=t,this.params=e,e.attributes&&this.setAttributes(e.attributes),jvm.$.isArray(e.scale)?(n=e.attribute==="fill"||e.attribute==="stroke"?jvm.ColorScale:jvm.NumericScale,this.scale=new n(e.scale,e.normalizeFunction,e.min,e.max)):e.scale?this.scale=new jvm.OrdinalScale(e.scale):this.scale=new jvm.SimpleScale(e.scale),this.values=e.values||{},this.setValues(this.values)},jvm.DataSeries.prototype={setAttributes:function(e,t){var n=e,r;if(typeof e=="string")this.elements[e]&&this.elements[e].setStyle(this.params.attribute,t);else for(r in n)this.elements[r]&&this.elements[r].element.setStyle(this.params.attribute,n[r])},setValues:function(e){var t=Number.MIN_VALUE,n=Number.MAX_VALUE,r,i,s={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(i in e)e[i]?s[i]=this.scale.getValue(e[i]):s[i]=this.elements[i].element.style.initial[this.params.attribute];else{if(!this.params.min||!this.params.max){for(i in e)r=parseFloat(e[i]),r>t&&(t=e[i]),r<n&&(n=r);this.params.min||this.scale.setMin(n),this.params.max||this.scale.setMax(t),this.params.min=n,this.params.max=t}for(i in e)r=parseFloat(e[i]),isNaN(r)?s[i]=this.elements[i].element.style.initial[this.params.attribute]:s[i]=this.scale.getValue(r)}this.setAttributes(s),jvm.$.extend(this.values,e)},clear:function(){var e,t={};for(e in this.values)this.elements[e]&&(t[e]=this.elements[e].element.style.initial[this.params.attribute]);this.setAttributes(t),this.values={}},setScale:function(e){this.scale.setScale(e),this.values&&this.setValues(this.values)},setNormalizeFunction:function(e){this.scale.setNormalizeFunction(e),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(e){return e>0?1:e<0?-1:e},mill:function(e,t,n){return{x:this.radius*(t-n)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*e)*this.radDeg))/.8}},mill_inv:function(e,t,n){return{lat:(2.5*Math.atan(Math.exp(.8*t/this.radius))-5*Math.PI/8)*this.degRad,lng:(n*this.radDeg+e/this.radius)*this.degRad}},merc:function(e,t,n){return{x:this.radius*(t-n)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+e*Math.PI/360))}},merc_inv:function(e,t,n){return{lat:(2*Math.atan(Math.exp(t/this.radius))-Math.PI/2)*this.degRad,lng:(n*this.radDeg+e/this.radius)*this.degRad}},aea:function(e,t,n){var r=0,i=n*this.radDeg,s=29.5*this.radDeg,o=45.5*this.radDeg,u=e*this.radDeg,a=t*this.radDeg,f=(Math.sin(s)+Math.sin(o))/2,l=Math.cos(s)*Math.cos(s)+2*f*Math.sin(s),c=f*(a-i),h=Math.sqrt(l-2*f*Math.sin(u))/f,p=Math.sqrt(l-2*f*Math.sin(r))/f;return{x:h*Math.sin(c)*this.radius,y:-(p-h*Math.cos(c))*this.radius}},aea_inv:function(e,t,n){var r=e/this.radius,i=t/this.radius,s=0,o=n*this.radDeg,u=29.5*this.radDeg,a=45.5*this.radDeg,f=(Math.sin(u)+Math.sin(a))/2,l=Math.cos(u)*Math.cos(u)+2*f*Math.sin(u),c=Math.sqrt(l-2*f*Math.sin(s))/f,h=Math.sqrt(r*r+(c-i)*(c-i)),p=Math.atan(r/(c-i));return{lat:Math.asin((l-h*h*f*f)/(2*f))*this.degRad,lng:(o+p/f)*this.degRad}},lcc:function(e,t,n){var r=0,i=n*this.radDeg,s=t*this.radDeg,o=33*this.radDeg,u=45*this.radDeg,a=e*this.radDeg,f=Math.log(Math.cos(o)*(1/Math.cos(u)))/Math.log(Math.tan(Math.PI/4+u/2)*(1/Math.tan(Math.PI/4+o/2))),l=Math.cos(o)*Math.pow(Math.tan(Math.PI/4+o/2),f)/f,c=l*Math.pow(1/Math.tan(Math.PI/4+a/2),f),h=l*Math.pow(1/Math.tan(Math.PI/4+r/2),f);return{x:c*Math.sin(f*(s-i))*this.radius,y:-(h-c*Math.cos(f*(s-i)))*this.radius}},lcc_inv:function(e,t,n){var r=e/this.radius,i=t/this.radius,s=0,o=n*this.radDeg,u=33*this.radDeg,a=45*this.radDeg,f=Math.log(Math.cos(u)*(1/Math.cos(a)))/Math.log(Math.tan(Math.PI/4+a/2)*(1/Math.tan(Math.PI/4+u/2))),l=Math.cos(u)*Math.pow(Math.tan(Math.PI/4+u/2),f)/f,c=l*Math.pow(1/Math.tan(Math.PI/4+s/2),f),h=this.sgn(f)*Math.sqrt(r*r+(c-i)*(c-i)),p=Math.atan(r/(c-i));return{lat:(2*Math.atan(Math.pow(l/h,1/f))-Math.PI/2)*this.degRad,lng:(o+p/f)*this.degRad}}},jvm.WorldMap=function(e){var t=this,n;this.params=jvm.$.extend(!0,{},jvm.WorldMap.defaultParams,e);if(!jvm.WorldMap.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.WorldMap.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").css({width:"100%",height:"100%"}).addClass("jvectormap-container"),this.params.container.append(this.container),this.container.data("mapObject",this),this.container.css({position:"relative",overflow:"hidden"}),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){t.setSize()},jvm.$(window).resize(this.onResize);for(n in jvm.WorldMap.apiEvents)this.params[n]&&this.container.bind(jvm.WorldMap.apiEvents[n]+".jvectormap",this.params[n]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.params.bindTouchEvents&&this.bindContainerTouchEvents():this.bindContainerEvents(),this.bindElementEvents(),this.createLabel(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.setSize(),this.params.focusOn&&(typeof this.params.focusOn=="object"?this.setFocus.call(this,this.params.focusOn.scale,this.params.focusOn.x,this.params.focusOn.y):this.setFocus.call(this,this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.params.series&&this.createSeries()},jvm.WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(e){this.container.css("background-color",e)},resize:function(){var e=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/e,this.transX*=this.baseScale/e,this.transY*=this.baseScale/e},setSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var e,t;for(e in this.series)for(t=0;t<this.series[e].length;t++)this.series[e][t].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var e,t,n,r;this.defaultWidth*this.scale<=this.width?(e=(this.width-this.defaultWidth*this.scale)/(2*this.scale),n=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(e=0,n=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(t=(this.height-this.defaultHeight*this.scale)/(2*this.scale),r=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(t=0,r=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>t?this.transY=t:this.transY<r&&(this.transY=r),this.transX>e?this.transX=e:this.transX<n&&(this.transX=n),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var e=!1,t,n,r=this;this.container.mousemove(function(i){return e&&(r.transX-=(t-i.pageX)/r.scale,r.transY-=(n-i.pageY)/r.scale,r.applyTransform(),t=i.pageX,n=i.pageY),!1}).mousedown(function(r){return e=!0,t=r.pageX,n=r.pageY,!1}),jvm.$("body").mouseup(function(){e=!1}),this.params.zoomOnScroll&&this.container.mousewheel(function(e,t,n,i){var s=jvm.$(r.container).offset(),o=e.pageX-s.left,u=e.pageY-s.top,a=Math.pow(1.3,i);r.label.hide(),r.setScale(r.scale*a,o,u),e.preventDefault()})},bindContainerTouchEvents:function(){var e,t,n=this,r,i,s,o,u,a=function(a){var f=a.originalEvent.touches,l,c,h,p;a.type=="touchstart"&&(u=0),f.length==1?(u==1&&(h=n.transX,p=n.transY,n.transX-=(r-f[0].pageX)/n.scale,n.transY-=(i-f[0].pageY)/n.scale,n.applyTransform(),n.label.hide(),(h!=n.transX||p!=n.transY)&&a.preventDefault()),r=f[0].pageX,i=f[0].pageY):f.length==2&&(u==2?(c=Math.sqrt(Math.pow(f[0].pageX-f[1].pageX,2)+Math.pow(f[0].pageY-f[1].pageY,2))/t,n.setScale(e*c,s,o),n.label.hide(),a.preventDefault()):(l=jvm.$(n.container).offset(),f[0].pageX>f[1].pageX?s=f[1].pageX+(f[0].pageX-f[1].pageX)/2:s=f[0].pageX+(f[1].pageX-f[0].pageX)/2,f[0].pageY>f[1].pageY?o=f[1].pageY+(f[0].pageY-f[1].pageY)/2:o=f[0].pageY+(f[1].pageY-f[0].pageY)/2,s-=l.left,o-=l.top,e=n.scale,t=Math.sqrt(Math.pow(f[0].pageX-f[1].pageX,2)+Math.pow(f[0].pageY-f[1].pageY,2)))),u=f.length};jvm.$(this.container).bind("touchstart",a),jvm.$(this.container).bind("touchmove",a)},bindElementEvents:function(){var e=this,t;this.container.mousemove(function(){t=!0}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(t){var n=this,r=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),i=r.indexOf("jvectormap-region")===-1?"marker":"region",s=i=="region"?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),o=i=="region"?e.regions[s].element:e.markers[s].element,u=i=="region"?e.mapData.paths[s].name:e.markers[s].config.name||"",a=jvm.$.Event(i+"LabelShow.jvectormap"),f=jvm.$.Event(i+"Over.jvectormap");t.type=="mouseover"?(e.container.trigger(f,[s]),f.isDefaultPrevented()||o.setHovered(!0),e.label.text(u),e.container.trigger(a,[e.label,s]),a.isDefaultPrevented()||(e.label.show(),e.labelWidth=e.label.width(),e.labelHeight=e.label.height())):(o.setHovered(!1),e.label.hide(),e.container.trigger(i+"Out.jvectormap",[s]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){t=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(n){var r=this,i=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),s=i.indexOf("jvectormap-region")===-1?"marker":"region",o=s=="region"?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),u=jvm.$.Event(s+"Click.jvectormap"),a=s=="region"?e.regions[o].element:e.markers[o].element;if(!t){e.container.trigger(u,[o]);if(s==="region"&&e.params.regionsSelectable||s==="marker"&&e.params.markersSelectable)u.isDefaultPrevented()||(e.params[s+"sSelectableOne"]&&e.clearSelected(s+"s"),a.setSelected(!a.isSelected))}})},bindZoomButtons:function(){var e=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){e.setScale(e.scale*e.params.zoomStep,e.width/2,e.height/2)}),this.container.find(".jvectormap-zoomout").click(function(){e.setScale(e.scale/e.params.zoomStep,e.width/2,e.height/2)})},createLabel:function(){var e=this;this.label=jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")),this.container.mousemove(function(t){var n=t.pageX-15-e.labelWidth,r=t.pageY-15-e.labelHeight;n<5&&(n=t.pageX+15),r<5&&(r=t.pageY+15),e.label.is(":visible")&&e.label.css({left:n,top:r})})},setScale:function(e,t,n,r){var i,s=jvm.$.Event("zoom.jvectormap");e>this.params.zoomMax*this.baseScale?e=this.params.zoomMax*this.baseScale:e<this.params.zoomMin*this.baseScale&&(e=this.params.zoomMin*this.baseScale),typeof t!="undefined"&&typeof n!="undefined"&&(i=e/this.scale,r?(this.transX=t+this.defaultWidth*(this.width/(this.defaultWidth*e))/2,this.transY=n+this.defaultHeight*(this.height/(this.defaultHeight*e))/2):(this.transX-=(i-1)/e*t,this.transY-=(i-1)/e*n)),this.scale=e,this.applyTransform(),this.container.trigger(s,[e/this.baseScale])},setFocus:function(e,t,n){var r,i,s,o,u;if(jvm.$.isArray(e)||this.regions[e]){jvm.$.isArray(e)?o=e:o=[e];for(u=0;u<o.length;u++)this.regions[o[u]]&&(i=this.regions[o[u]].element.getBBox(),i&&(typeof r=="undefined"?r=i:(s={x:Math.min(r.x,i.x),y:Math.min(r.y,i.y),width:Math.max(r.x+r.width,i.x+i.width)-Math.min(r.x,i.x),height:Math.max(r.y+r.height,i.y+i.height)-Math.min(r.y,i.y)},r=s)));this.setScale(Math.min(this.width/r.width,this.height/r.height),-(r.x+r.width/2),-(r.y+r.height/2),!0)}else e*=this.baseScale,this.setScale(e,-t*this.defaultWidth,-n*this.defaultHeight,!0)},getSelected:function(e){var t,n=[];for(t in this[e])this[e][t].element.isSelected&&n.push(t);return n},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(e,t){var n;typeof t!="object"&&(t=[t]);if(jvm.$.isArray(t))for(n=0;n<t.length;n++)this[e][t[n]].element.setSelected(!0);else for(n in t)this[e][n].element.setSelected(!!t[n])},setSelectedRegions:function(e){this.setSelected("regions",e)},setSelectedMarkers:function(e){this.setSelected("markers",e)},clearSelected:function(e){var t={},n=this.getSelected(e),r;for(r=0;r<n.length;r++)t[n[r]]=!1;this.setSelected(e,t)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(e){return this.mapData.paths[e].name},createRegions:function(){var e,t,n=this;for(e in this.mapData.paths)t=this.canvas.addPath({d:this.mapData.paths[e].path,"data-code":e},jvm.$.extend(!0,{},this.params.regionStyle)),jvm.$(t.node).bind("selected",function(e,t){n.container.trigger("regionSelected.jvectormap",[jvm.$(this).attr("data-code"),t,n.getSelectedRegions()])}),t.addClass("jvectormap-region jvectormap-element"),this.regions[e]={element:t,config:this.mapData.paths[e]}},createMarkers:function(e){var t,n,r,i,s,o=this;this.markersGroup=this.markersGroup||this.canvas.addGroup();if(jvm.$.isArray(e)){s=e.slice(),e={};for(t=0;t<s.length;t++)e[t]=s[t]}for(t in e)i=e[t]instanceof Array?{latLng:e[t]}:e[t],r=this.getMarkerPosition(i),r!==!1&&(n=this.canvas.addCircle({"data-index":t,cx:r.x,cy:r.y},jvm.$.extend(!0,{},this.params.markerStyle,{initial:i.style||{}}),this.markersGroup),n.addClass("jvectormap-marker jvectormap-element"),jvm.$(n.node).bind("selected",function(e,t){o.container.trigger("markerSelected.jvectormap",[jvm.$(this).attr("data-index"),t,o.getSelectedMarkers()])}),this.markers[t]&&this.removeMarkers([t]),this.markers[t]={element:n,config:i})},repositionMarkers:function(){var e,t;for(e in this.markers)t=this.getMarkerPosition(this.markers[e].config),t!==!1&&this.markers[e].element.setStyle({cx:t.x,cy:t.y})},getMarkerPosition:function(e){return jvm.WorldMap.maps[this.params.map].projection?this.latLngToPoint.apply(this,e.latLng||[0,0]):{x:e.coords[0]*this.scale+this.transX*this.scale,y:e.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(e,t,n){var r={},i=[],s,o,n=n||[];r[e]=t;for(o=0;o<n.length;o++)s={},s[e]=n[o],i.push(s);this.addMarkers(r,i)},addMarkers:function(e,t){var n;t=t||[],this.createMarkers(e);for(n=0;n<t.length;n++)this.series.markers[n].setValues(t[n]||{})},removeMarkers:function(e){var t;for(t=0;t<e.length;t++)this.markers[e[t]].element.remove(),delete this.markers[e[t]]},removeAllMarkers:function(){var e,t=[];for(e in this.markers)t.push(e);this.removeMarkers(t)},latLngToPoint:function(e,t){var n,r=jvm.WorldMap.maps[this.params.map].projection,i=r.centralMeridian,s=this.width-this.baseTransX*2*this.baseScale,o=this.height-this.baseTransY*2*this.baseScale,u,a,f=this.scale/this.baseScale;return t<-180+i&&(t+=360),n=jvm.Proj[r.type](e,t,i),u=this.getInsetForPoint(n.x,n.y),u?(a=u.bbox,n.x=(n.x-a[0].x)/(a[1].x-a[0].x)*u.width*this.scale,n.y=(n.y-a[0].y)/(a[1].y-a[0].y)*u.height*this.scale,{x:n.x+this.transX*this.scale+u.left*this.scale,y:n.y+this.transY*this.scale+u.top*this.scale}):!1},pointToLatLng:function(e,t){var n=jvm.WorldMap.maps[this.params.map].projection,r=n.centralMeridian,i=jvm.WorldMap.maps[this.params.map].insets,s,o,u,a,f;for(s=0;s<i.length;s++){o=i[s],u=o.bbox,a=e-(this.transX*this.scale+o.left*this.scale),f=t-(this.transY*this.scale+o.top*this.scale),a=a/(o.width*this.scale)*(u[1].x-u[0].x)+u[0].x,f=f/(o.height*this.scale)*(u[1].y-u[0].y)+u[0].y;if(a>u[0].x&&a<u[1].x&&f>u[0].y&&f<u[1].y)return jvm.Proj[n.type+"_inv"](a,-f,r)}return!1},getInsetForPoint:function(e,t){var n=jvm.WorldMap.maps[this.params.map].insets,r,i;for(r=0;r<n.length;r++){i=n[r].bbox;if(e>i[0].x&&e<i[1].x&&t>i[0].y&&t<i[1].y)return n[r]}},createSeries:function(){var e,t;this.series={markers:[],regions:[]};for(t in this.params.series)for(e=0;e<this.params.series[t].length;e++)this.series[t][e]=new jvm.DataSeries(this.params.series[t][e],this[t])},remove:function(){this.label.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize)}},jvm.WorldMap.maps={},jvm.WorldMap.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover
:{}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2},selected:{fill:"blue"},selectedHover:{}}},jvm.WorldMap.apiEvents={onRegionLabelShow:"regionLabelShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerLabelShow:"markerLabelShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"};
$.fn.vectorMap('addMap', 'world_mill_en',{"insets": [{"width": 900.0, "top": 0, "height": 440.7063107441331, "bbox": [{"y": -12671671.123330014, "x": -20004297.151525836}, {"y": 6930392.02513512, "x": 20026572.394749384}], "left": 0}], "paths": {"BD": {"path": "M652.71,228.85l-0.04,1.38l-0.46,-0.21l-0.42,0.3l0.05,0.65l-0.17,-1.37l-0.48,-1.26l-1.08,-1.6l-0.23,-0.13l-2.31,-0.11l-0.31,0.36l0.21,0.98l-0.6,1.11l-0.8,-0.4l-0.37,0.09l-0.23,0.3l-0.54,-0.21l-0.78,-0.19l-0.38,-2.04l-0.83,-1.89l0.4,-1.5l-0.16,-0.35l-1.24,-0.57l0.36,-0.62l1.5,-0.95l0.02,-0.49l-1.62,-1.26l0.64,-1.31l1.7,1.0l0.12,0.04l0.96,0.11l0.19,1.62l0.25,0.26l2.38,0.37l2.32,-0.04l1.06,0.33l-0.92,1.79l-0.97,0.13l-0.23,0.16l-0.77,1.51l0.05,0.35l1.37,1.37l0.5,-0.14l0.35,-1.46l0.24,-0.0l1.24,3.92Z", "name": "Bangladesh"}, "BE": {"path": "M429.28,143.95l1.76,0.25l0.13,-0.01l2.16,-0.64l1.46,1.34l1.26,0.71l-0.23,1.8l-0.44,0.08l-0.24,0.25l-0.2,1.36l-1.8,-1.22l-0.23,-0.05l-1.14,0.23l-1.62,-1.43l-1.15,-1.31l-0.21,-0.1l-0.95,-0.04l-0.21,-0.68l1.66,-0.54Z", "name": "Belgium"}, "BF": {"path": "M413.48,260.21l-1.22,-0.46l-0.13,-0.02l-1.17,0.1l-0.15,0.06l-0.73,0.53l-0.87,-0.41l-0.39,-0.75l-0.13,-0.13l-0.98,-0.48l-0.14,-1.2l0.63,-0.99l0.05,-0.18l-0.05,-0.73l1.9,-2.01l0.08,-0.14l0.35,-1.65l0.49,-0.44l1.05,0.3l0.21,-0.02l1.05,-0.52l0.13,-0.13l0.3,-0.58l1.87,-1.1l0.11,-0.1l0.43,-0.72l2.23,-1.01l1.21,-0.32l0.51,0.4l0.19,0.06l1.25,-0.01l-0.14,0.89l0.01,0.13l0.34,1.16l0.06,0.11l1.35,1.59l0.07,1.13l0.24,0.28l2.64,0.53l-0.05,1.39l-0.42,0.59l-1.11,0.21l-0.22,0.17l-0.46,0.99l-0.69,0.23l-2.12,-0.05l-1.14,-0.2l-0.19,0.03l-0.72,0.36l-1.07,-0.17l-4.35,0.12l-0.29,0.29l-0.06,1.44l0.25,1.45Z", "name": "Burkina Faso"}, "BG": {"path": "M477.63,166.84l0.51,0.9l0.33,0.14l0.9,-0.21l1.91,0.47l3.68,0.16l0.17,-0.05l1.2,-0.75l2.78,-0.67l1.72,1.05l1.02,0.24l-0.97,0.97l-0.91,2.17l0.0,0.24l0.56,1.19l-1.58,-0.3l-0.16,0.01l-2.55,0.95l-0.2,0.28l-0.02,1.23l-1.92,0.24l-1.68,-0.99l-0.27,-0.02l-1.94,0.8l-1.52,-0.07l-0.15,-1.72l-0.12,-0.21l-0.99,-0.76l0.18,-0.18l0.02,-0.39l-0.17,-0.22l0.33,-0.75l0.91,-0.91l0.01,-0.42l-1.16,-1.25l-0.18,-0.89l0.24,-0.27Z", "name": "Bulgaria"}, "BA": {"path": "M468.39,164.66l0.16,0.04l0.43,-0.0l-0.43,0.93l0.06,0.34l1.08,1.06l-0.28,1.09l-0.5,0.13l-0.47,0.28l-0.86,0.74l-0.1,0.16l-0.28,1.29l-1.81,-0.94l-0.9,-1.22l-1.0,-0.73l-1.1,-1.1l-0.55,-0.96l-1.11,-1.3l0.3,-0.75l0.59,0.46l0.42,-0.04l0.46,-0.54l1.0,-0.06l2.11,0.5l1.72,-0.03l1.06,0.64Z", "name": "Bosnia and Herzegovina"}, "BN": {"path": "M707.34,273.57l0.76,-0.72l1.59,-1.03l-0.18,1.93l-0.9,-0.06l-0.28,0.14l-0.31,0.51l-0.68,-0.78Z", "name": "Brunei"}, "BO": {"path": "M263.83,340.79l-0.23,-0.12l-2.86,-0.11l-0.28,0.17l-0.77,1.67l-1.17,-1.51l-0.18,-0.11l-3.28,-0.64l-0.28,0.1l-2.02,2.3l-1.43,0.29l-0.91,-3.35l-1.31,-2.88l0.75,-2.41l-0.09,-0.32l-1.23,-1.03l-0.31,-1.76l-0.05,-0.12l-1.12,-1.6l1.49,-2.62l0.01,-0.28l-1.0,-2.0l0.48,-0.72l0.02,-0.29l-0.37,-0.78l0.87,-1.13l0.06,-0.18l0.05,-2.17l0.12,-1.71l0.5,-0.8l0.01,-0.3l-1.9,-3.58l1.3,0.15l1.34,-0.05l0.23,-0.12l0.51,-0.7l2.12,-0.99l1.31,-0.93l2.81,-0.37l-0.21,1.51l0.01,0.13l0.29,0.91l-0.19,1.64l0.11,0.27l2.72,2.27l0.15,0.07l2.71,0.41l0.92,0.88l0.12,0.07l1.64,0.49l1.0,0.71l0.18,0.06l1.5,-0.02l1.24,0.64l0.1,1.31l0.05,0.14l0.44,0.68l0.02,0.73l-0.44,0.03l-0.27,0.39l0.96,2.99l0.28,0.21l4.43,0.1l-0.28,1.12l0.0,0.15l0.27,1.02l0.15,0.19l1.27,0.67l0.52,1.42l-0.42,1.91l-0.66,1.1l-0.04,0.2l0.21,1.3l-0.19,0.13l-0.01,-0.27l-0.15,-0.24l-2.33,-1.33l-0.14,-0.04l-2.38,-0.03l-4.36,0.76l-0.21,0.16l-1.2,2.29l-0.03,0.13l-0.06,1.37l-0.79,2.53l-0.05,-0.08Z", "name": "Bolivia"}, "JP": {"path": "M781.17,166.78l1.8,0.67l0.28,-0.04l1.38,-1.01l0.43,2.67l-3.44,0.77l-0.18,0.12l-2.04,2.79l-3.71,-1.94l-0.42,0.15l-1.29,3.11l-2.32,0.04l-0.3,-2.63l1.12,-2.1l2.51,-0.16l0.28,-0.25l0.73,-4.22l0.58,-1.9l2.59,2.84l2.0,1.1ZM773.66,187.36l-0.92,2.24l-0.01,0.2l0.4,1.3l-1.18,1.81l-3.06,1.28l-4.35,0.17l-0.19,0.08l-3.4,3.06l-1.36,-0.87l-0.1,-1.95l-0.34,-0.28l-4.35,0.62l-2.99,1.33l-2.87,0.05l-0.28,0.2l0.09,0.33l2.37,1.93l-1.57,4.44l-1.35,0.97l-0.9,-0.79l0.57,-2.32l-0.15,-0.34l-1.5,-0.77l-0.81,-1.53l2.04,-0.75l0.14,-0.1l1.28,-1.72l2.47,-1.43l1.84,-1.92l4.83,-0.82l2.62,0.57l0.33,-0.16l2.45,-4.77l1.38,1.14l0.38,0.0l5.1,-4.02l0.09,-0.11l1.57,-3.57l0.02,-0.16l-0.42,-3.22l0.94,-1.67l2.27,-0.47l1.26,3.82l-0.07,2.23l-2.26,2.86l-0.06,0.19l0.04,2.93ZM757.85,196.18l0.22,0.66l-1.11,1.33l-0.8,-0.7l-0.33,-0.04l-1.28,0.65l-0.14,0.15l-0.54,1.34l-1.17,-0.57l0.02,-1.03l1.2,-1.45l1.24,0.28l0.29,-0.1l0.9,-1.03l1.51,0.5Z", "name": "Japan"}, "BI": {"path": "M494.7,295.83l-0.14,-2.71l-0.04,-0.13l-0.34,-0.62l0.93,0.12l0.3,-0.16l0.67,-1.25l0.9,0.11l0.11,0.76l0.08,0.16l0.46,0.48l0.02,0.56l-0.55,0.48l-0.96,1.29l-0.82,0.82l-0.61,0.07Z", "name": "Burundi"}, "BJ": {"path": "M427.4,268.94l-1.58,0.22l-0.52,-1.45l0.11,-5.73l-0.08,-0.21l-0.43,-0.44l-0.09,-1.13l-0.09,-0.19l-1.52,-1.52l0.24,-1.01l0.7,-0.23l0.18,-0.16l0.45,-0.97l1.07,-0.21l0.19,-0.12l0.53,-0.73l0.73,-0.65l0.68,-0.0l1.69,1.3l-0.08,0.67l0.02,0.14l0.52,1.38l-0.44,0.9l-0.01,0.24l0.2,0.52l-1.1,1.42l-0.76,0.76l-0.08,0.13l-0.47,1.59l0.05,1.69l-0.13,3.79Z", "name": "Benin"}, "BT": {"path": "M650.38,213.78l0.88,0.75l-0.13,1.24l-1.77,0.07l-2.1,-0.18l-1.57,0.4l-2.02,-0.91l-0.02,-0.24l1.54,-1.87l1.18,-0.6l1.67,0.59l1.32,0.08l1.01,0.67Z", "name": "Bhutan"}, "JM": {"path": "M226.67,238.37l1.64,0.23l1.2,0.56l0.11,0.19l-1.25,0.03l-0.14,0.04l-0.65,0.37l-1.24,-0.37l-1.17,-0.77l0.11,-0.22l0.86,-0.15l0.52,0.08Z", "name": "Jamaica"}, "BW": {"path": "M484.91,331.96l0.53,0.52l0.82,1.53l2.83,2.86l0.14,0.08l0.85,0.22l0.03,0.81l0.74,1.66l0.21,0.17l1.87,0.39l1.17,0.87l-3.13,1.71l-2.3,2.01l-0.07,0.1l-0.82,1.74l-0.66,0.88l-1.24,0.19l-0.24,0.2l-0.65,1.98l-1.4,0.55l-1.9,-0.12l-1.2,-0.74l-1.06,-0.32l-0.22,0.02l-1.22,0.62l-0.14,0.14l-0.58,1.21l-1.16,0.79l-1.18,1.13l-1.5,0.23l-0.4,-0.68l0.22,-1.53l-0.04,-0.19l-1.48,-2.54l-0.11,-0.11l-0.53,-0.31l-0.0,-7.25l2.18,-0.08l0.29,-0.3l0.07,-9.0l1.63,-0.08l3.69,-0.86l0.84,0.93l0.38,0.05l1.53,-0.97l0.79,-0.03l1.3,-0.53l0.23,0.1l0.92,1.96Z", "name": "Botswana"}, "BR": {"path": "M259.49,274.87l1.42,0.25l1.97,0.62l0.28,-0.05l0.67,-0.55l1.76,-0.38l2.8,-0.94l0.12,-0.08l0.92,-0.96l0.05,-0.33l-0.15,-0.32l0.73,-0.06l0.36,0.35l-0.27,0.93l0.17,0.36l0.76,0.34l0.44,0.9l-0.58,0.73l-0.06,0.13l-0.4,2.13l0.03,0.19l0.62,1.22l0.17,1.11l0.11,0.19l1.54,1.18l0.15,0.06l1.23,0.12l0.29,-0.15l0.2,-0.36l0.71,-0.11l1.13,-0.44l0.79,-0.63l1.25,0.19l0.65,-0.08l1.32,0.2l0.32,-0.18l0.23,-0.51l-0.05,-0.31l-0.31,-0.37l0.11,-0.31l0.75,0.17l0.13,0.0l1.1,-0.24l1.34,0.5l1.08,0.51l0.33,-0.05l0.67,-0.58l0.27,0.05l0.28,0.57l0.31,0.17l1.2,-0.18l0.17,-0.08l1.03,-1.05l0.76,-1.82l1.39,-2.16l0.49,-0.07l0.52,1.17l1.4,4.37l0.2,0.2l1.14,0.35l0.05,1.39l-1.8,1.97l0.01,0.42l0.78,0.75l0.18,0.08l4.16,0.37l0.08,2.25l0.5,0.22l1.78,-1.54l2.98,0.85l4.07,1.5l1.07,1.28l-0.37,1.23l0.36,0.38l2.83,-0.75l4.8,1.3l3.75,-0.09l3.6,2.02l3.27,2.84l1.93,0.72l2.13,0.11l0.76,0.66l1.22,4.56l-0.96,4.03l-1.22,1.58l-3.52,3.51l-1.63,2.91l-1.75,2.09l-0.5,0.04l-0.26,0.19l-0.72,1.99l0.18,4.76l-0.95,5.56l-0.74,0.96l-0.06,0.15l-0.43,3.39l-2.49,3.34l-0.06,0.13l-0.4,2.56l-1.9,1.07l-0.13,0.16l-0.51,1.38l-2.59,0.0l-3.94,1.01l-1.82,1.19l-2.85,0.81l-3.01,2.17l-2.12,2.65l-0.06,0.13l-0.36,2.0l0.01,0.13l0.4,1.42l-0.45,2.63l-0.53,1.23l-1.76,1.53l-2.76,4.79l-2.16,2.15l-1.69,1.29l-0.09,0.12l-1.12,2.6l-1.3,1.26l-0.45,-1.02l0.99,-1.18l0.01,-0.37l-1.5,-1.95l-1.98,-1.54l-2.58,-1.77l-0.2,-0.05l-0.81,0.07l-2.42,-2.05l-0.25,-0.07l-0.77,0.14l2.75,-3.07l2.8,-2.61l1.67,-1.09l2.11,-1.49l0.13,-0.24l0.05,-2.15l-0.07,-0.2l-1.26,-1.54l-0.35,-0.09l-0.64,0.27l0.3,-0.95l0.34,-1.57l0.01,-1.52l-0.16,-0.26l-0.9,-0.48l-0.27,-0.01l-0.86,0.39l-0.65,-0.08l-0.23,-0.8l-0.23,-2.39l-0.04,-0.12l-0.47,-0.79l-0.14,-0.12l-1.69,-0.71l-0.25,0.01l-0.93,0.47l-2.29,-0.44l0.15,-3.3l-0.03,-0.15l-0.62,-1.22l0.57,-0.39l0.13,-0.3l-0.22,-1.37l0.67,-1.13l0.44,-2.04l-0.01,-0.17l-0.59,-1.61l-0.14,-0.16l-1.25,-0.66l-0.22,-0.82l0.35,-1.41l-0.28,-0.37l-4.59,-0.1l-0.78,-2.41l0.34,-0.02l0.28,-0.31l-0.03,-1.1l-0.05,-0.16l-0.45,-0.68l-0.1,-1.4l-0.16,-0.24l-1.45,-0.76l-0.14,-0.03l-1.48,0.02l-1.04,-0.73l-1.62,-0.48l-0.93,-0.9l-0.16,-0.08l-2.72,-0.41l-2.53,-2.12l0.18,-1.54l-0.01,-0.13l-0.29,-0.91l0.26,-1.83l-0.34,-0.34l-3.28,0.43l-0.14,0.05l-1.3,0.93l-2.16,1.01l-0.12,0.09l-0.47,0.65l-1.12,0.05l-1.84,-0.21l-0.12,0.01l-1.33,0.41l-0.82,-0.21l0.16,-3.6l-0.48,-0.26l-1.97,1.43l-1.96,-0.06l-0.86,-1.23l-0.22,-0.13l-1.23,-0.11l0.34,-0.69l-0.05,-0.33l-1.36,-1.5l-0.92,-2.0l0.45,-0.32l0.13,-0.25l-0.0,-0.87l1.34,-0.64l0.17,-0.32l-0.23,-1.23l0.56,-0.77l0.05,-0.13l0.16,-1.03l2.7,-1.61l2.01,-0.47l0.16,-0.09l0.24,-0.27l2.11,0.11l0.31,-0.25l1.13,-6.87l0.06,-1.12l-0.4,-1.53l-0.1,-0.15l-1.0,-0.82l0.01,-1.45l1.08,-0.32l0.39,0.2l0.44,-0.24l0.08,-0.96l-0.25,-0.32l-1.22,-0.22l-0.02,-1.01l4.57,0.05l0.22,-0.09l0.6,-0.63l0.44,0.5l0.47,1.42l0.45,0.16l0.27,-0.18l1.21,1.16l0.23,0.08l1.95,-0.16l0.23,-0.14l0.43,-0.67l1.76,-0.55l1.05,-0.42l0.18,-0.2l0.25,-0.92l1.65,-0.66l0.18,-0.35l-0.14,-0.53l-0.26,-0.22l-1.91,-0.19l-0.29,-1.33l0.1,-1.64l-0.15,-0.28l-0.44,-0.25Z", "name": "Brazil"}, "BS": {"path": "M227.51,216.69l0.3,0.18l-0.24,1.07l0.03,-1.04l-0.09,-0.21ZM226.5,224.03l-0.13,0.03l-0.54,-1.3l-0.09,-0.12l-0.78,-0.64l0.4,-1.26l0.33,0.05l0.79,2.0l0.01,1.24ZM225.76,216.5l-2.16,0.34l-0.07,-0.41l0.85,-0.16l1.36,0.07l0.02,0.16Z", "name": "The Bahamas"}, "BY": {"path": "M480.08,135.28l2.09,0.02l0.13,-0.03l2.72,-1.3l0.16,-0.19l0.55,-1.83l1.94,-1.06l0.15,-0.31l-0.2,-1.33l1.33,-0.52l2.58,-1.3l2.39,0.8l0.3,0.75l0.37,0.17l1.22,-0.39l2.18,0.75l0.2,1.36l-0.48,0.85l0.01,0.32l1.57,2.26l0.92,0.6l-0.1,0.41l0.19,0.35l1.61,0.57l0.48,0.6l-0.64,0.49l-1.91,-0.11l-0.18,0.05l-0.48,0.32l-0.1,0.39l0.57,1.1l0.51,1.78l-1.79,0.17l-0.18,0.08l-0.77,0.73l-0.09,0.19l-0.13,1.31l-0.75,-0.22l-2.11,0.15l-0.56,-0.66l-0.39,-0.06l-0.8,0.49l-0.79,-0.4l-0.13,-0.03l-1.94,-0.07l-2.76,-0.79l-2.58,-0.27l-1.98,0.07l-0.15,0.05l-1.31,0.86l-0.8,0.09l-0.04,-1.16l-0.03,-0.12l-0.63,-1.28l1.22,-0.56l0.17,-0.27l0.01,-1.35l-0.04,-0.15l-0.66,-1.24l-0.08,-1.12Z", "name": "Belarus"}, "BZ": {"path": "M198.03,239.7l0.28,0.19l0.43,-0.1l0.82,-1.42l0.0,0.07l0.29,0.29l0.16,0.0l-0.02,0.35l-0.39,1.08l0.02,0.25l0.16,0.29l-0.23,0.8l0.04,0.24l0.09,0.14l-0.25,1.12l-0.38,0.53l-0.33,0.06l-0.21,0.15l-0.41,0.74l-0.25,0.0l0.17,-2.58l0.01,-2.2Z", "name": "Belize"}, "RU": {"path": "M688.57,38.85l0.63,2.39l0.44,0.19l2.22,-1.23l7.18,0.07l5.54,2.49l1.85,1.77l-0.55,2.34l-2.64,1.42l-6.57,2.76l-1.95,1.5l0.12,0.53l3.09,0.68l3.69,1.23l0.21,-0.01l1.98,-0.81l1.16,2.84l0.5,0.08l1.03,-1.18l3.86,-0.74l7.79,0.78l0.56,2.05l0.27,0.22l10.47,0.71l0.32,-0.29l0.13,-3.34l4.98,0.8l3.96,-0.02l3.88,2.43l1.06,2.79l-1.38,1.83l0.01,0.38l3.15,3.64l0.1,0.08l3.94,1.86l0.4,-0.14l2.28,-4.56l3.75,1.94l0.22,0.02l4.18,-1.22l4.76,1.4l0.26,-0.04l1.74,-1.23l3.98,0.63l0.32,-0.41l-1.71,-4.1l3.0,-1.86l22.39,3.04l2.06,2.67l0.1,0.08l6.55,3.51l0.17,0.03l10.08,-0.86l4.86,0.73l1.91,1.72l-0.29,3.13l0.18,0.31l3.08,1.26l0.19,0.01l3.32,-0.9l4.37,-0.11l4.78,0.87l4.61,-0.48l4.26,3.82l0.32,0.05l3.1,-1.4l0.12,-0.45l-1.91,-2.67l0.92,-1.64l7.78,1.22l5.22,-0.26l7.12,2.1l9.6,5.22l6.4,4.15l-0.2,2.44l0.14,0.28l1.69,1.04l0.45,-0.31l-0.51,-2.66l6.31,0.58l4.52,3.61l-2.1,1.52l-4.02,0.42l-0.27,0.29l-0.06,3.83l-0.81,0.67l-2.14,-0.11l-1.91,-1.39l-3.19,-1.13l-0.51,-1.63l-0.21,-0.2l-2.54,-0.67l-0.13,-0.0l-2.69,0.5l-1.12,-1.19l0.48,-1.36l-0.38,-0.39l-3.0,0.98l-0.17,0.44l1.02,1.76l-1.27,1.55l-3.09,1.71l-3.15,-0.29l-0.3,0.18l0.07,0.34l2.22,2.1l1.47,3.22l1.15,1.09l0.25,1.41l-0.48,0.76l-4.47,-0.81l-0.17,0.02l-6.97,2.9l-2.2,0.44l-0.11,0.05l-3.83,2.68l-3.63,2.32l-0.1,0.11l-0.76,1.4l-3.3,-2.4l-0.3,-0.03l-6.31,2.85l-0.99,-1.21l-0.4,-0.06l-2.32,1.54l-3.23,-0.49l-0.33,0.2l-0.79,2.39l-2.97,3.51l-0.07,0.21l0.09,1.47l0.22,0.27l2.62,0.74l-0.3,4.7l-2.06,0.12l-0.26,0.2l-1.07,2.94l0.04,0.27l0.83,1.19l-4.03,1.63l-0.18,0.21l-0.83,3.72l-3.55,0.79l-0.23,0.23l-0.73,3.32l-3.22,2.76l-0.76,-1.88l-1.07,-4.88l-1.39,-7.59l1.17,-4.76l2.05,-2.08l0.09,-0.19l0.11,-1.46l3.67,-0.77l0.15,-0.08l4.47,-4.61l4.29,-3.82l4.48,-3.01l0.11,-0.14l2.01,-5.43l-0.31,-0.4l-3.04,0.33l-0.24,0.17l-1.47,3.11l-5.98,3.94l-1.91,-4.36l-0.33,-0.17l-6.46,1.3l-0.15,0.08l-6.27,6.33l-0.01,0.41l1.7,1.87l-5.04,0.87l-3.51,0.34l0.16,-2.32l-0.26,-0.32l-3.89,-0.56l-0.19,0.04l-3.02,1.77l-7.63,-0.63l-8.24,1.1l-0.16,0.07l-8.11,7.09l-9.6,8.31l0.16,0.52l3.79,0.42l1.16,2.03l0.17,0.14l2.43,0.76l0.31,-0.08l1.5,-1.61l2.49,0.2l3.46,3.6l0.08,2.67l-1.91,3.26l-0.04,0.14l-0.21,3.91l-1.11,5.09l-3.73,4.55l-0.87,2.21l-6.73,7.14l-1.59,1.77l-3.23,1.72l-1.38,0.03l-1.48,-1.39l-0.37,-0.03l-3.36,2.22l-0.11,0.14l-0.16,0.42l-0.01,-1.09l1.0,-0.06l0.28,-0.27l0.36,-3.6l-0.61,-2.51l1.85,-0.94l2.94,0.53l0.32,-0.15l1.71,-3.1l0.84,-3.38l0.97,-1.18l1.32,-2.88l-0.34,-0.42l-4.14,0.95l-2.18,1.25l-3.51,-0.0l-0.95,-2.81l-0.1,-0.14l-2.97,-2.3l-0.11,-0.05l-4.19,-1.0l-0.89,-3.08l-0.87,-2.03l-0.95,-1.46l-1.54,-3.37l-0.12,-0.14l-2.27,-1.28l-3.83,-1.02l-3.37,0.1l-3.11,0.61l-0.13,0.06l-2.07,1.69l0.04,0.49l1.23,0.72l0.03,1.53l-1.34,1.05l-2.26,3.51l-0.05,0.17l0.02,1.27l-3.25,1.9l-2.87,-1.17l-0.14,-0.02l-2.86,0.26l-1.22,-1.02l-0.12,-0.06l-1.5,-0.35l-0.23,0.04l-3.62,2.27l-3.24,0.53l-2.28,0.79l-3.08,-0.51l-2.24,0.03l-1.49,-1.61l-2.45,-1.57l-0.11,-0.04l-2.6,-0.43l-3.17,0.43l-2.31,0.59l-3.31,-1.28l-0.45,-2.31l-0.21,-0.23l-2.94,-0.85l-2.26,-0.39l-2.77,-1.36l-0.37,0.09l-2.59,3.45l-0.03,0.32l0.91,1.74l-2.15,2.01l-3.47,-0.79l-2.44,-0.12l-1.59,-1.46l-0.2,-0.08l-2.55,-0.05l-2.12,-0.98l-0.24,-0.01l-3.85,1.57l-4.74,2.79l-2.59,0.55l-0.79,0.21l-1.21,-1.81l-0.29,-0.13l-3.05,0.41l-0.96,-1.25l-0.14,-0.1l-1.65,-0.6l-1.15,-1.82l-0.13,-0.12l-1.38,-0.6l-0.19,-0.02l-3.49,0.82l-3.35,-1.85l-0.38,0.08l-1.08,1.4l-5.36,-8.17l-3.02,-2.52l0.72,-0.85l0.01,-0.38l-0.37,-0.08l-6.22,3.21l-1.98,0.16l0.17,-1.51l-0.2,-0.31l-3.22,-1.17l-0.19,-0.0l-2.3,0.74l-0.72,-3.27l-0.24,-0.23l-4.5,-0.75l-0.21,0.04l-2.2,1.42l-6.21,1.27l-0.11,0.05l-1.16,0.81l-9.3,1.19l-0.18,0.09l-1.15,1.17l-0.02,0.39l1.56,2.01l-2.02,0.74l-0.16,0.42l0.35,0.68l-2.18,1.49l0.02,0.51l3.83,2.16l-0.45,1.13l-3.31,-0.13l-0.25,0.12l-0.57,0.77l-2.97,-1.59l-0.15,-0.04l-3.97,0.07l-0.13,0.03l-2.53,1.32l-2.84,-1.28l-5.52,-2.3l-0.12,-0.02l-3.91,0.09l-0.16,0.05l-5.17,3.6l-0.13,0.21l-0.25,1.89l-2.17,-1.6l-0.44,0.1l-2.0,3.59l0.06,0.37l0.55,0.5l-1.32,2.23l0.04,0.36l2.13,2.17l0.23,0.09l1.7,-0.08l1.42,1.89l-0.23,1.5l0.19,0.32l0.94,0.38l-0.89,1.44l-2.3,0.49l-0.17,0.11l-2.49,3.2l0.0,0.37l2.2,2.81l-0.23,1.93l0.06,0.22l2.56,3.32l-1.27,1.02l-0.4,0.66l-0.8,-0.15l-1.65,-1.75l-0.18,-0.09l-0.66,-0.09l-1.45,-0.64l-0.72,-1.16l-0.18,-0.13l-2.34,-0.63l-0.17,0.0l-1.32,0.41l-0.31,-0.4l-0.12,-0.09l-3.49,-1.48l-3.67,-0.49l-2.1,-0.52l-0.3,0.1l-0.12,0.14l-2.96,-2.4l-2.89,-1.19l-1.69,-1.42l1.27,-0.35l0.16,-0.1l2.08,-2.61l-0.04,-0.41l-1.02,-0.9l3.21,-1.12l0.2,-0.31l-0.07,-0.69l-0.37,-0.26l-1.86,0.42l0.05,-0.86l1.11,-0.76l2.35,-0.23l0.25,-0.19l0.39,-1.07l0.0,-0.19l-0.51,-1.64l0.95,-1.58l0.04,-0.16l-0.03,-0.95l-0.22,-0.28l-3.69,-1.06l-1.43,0.02l-1.45,-1.44l-0.29,-0.08l-1.83,0.49l-2.88,-1.04l0.04,-0.42l-0.04,-0.18l-0.89,-1.43l-0.23,-0.14l-1.77,-0.14l-0.13,-0.66l0.52,-0.56l0.01,-0.4l-1.6,-1.9l-0.27,-0.1l-2.55,0.32l-0.71,-0.16l-0.3,0.1l-0.53,0.63l-0.58,-0.08l-0.56,-1.97l-0.48,-0.94l0.17,-0.11l1.92,0.11l0.2,-0.06l0.97,-0.74l0.05,-0.42l-0.72,-0.91l-0.13,-0.1l-1.43,-0.51l0.09,-0.36l-0.13,-0.33l-0.97,-0.59l-1.43,-2.06l0.44,-0.77l0.04,-0.19l-0.25,-1.64l-0.2,-0.24l-2.45,-0.84l-0.19,-0.0l-1.05,0.34l-0.25,-0.62l-0.18,-0.17l-2.5,-0.84l-0.74,-1.93l-0.21,-1.7l-0.13,-0.21l-0.92,-0.63l0.83,-0.89l0.07,-0.27l-0.71,-3.26l1.69,-2.01l0.03,-0.34l-0.24,-0.41l2.63,-1.9l-0.01,-0.49l-2.31,-1.57l5.08,-4.61l2.33,-2.24l1.01,-2.08l-0.09,-0.37l-3.52,-2.56l0.94,-2.38l-0.04,-0.29l-2.14,-2.86l1.61,-3.35l-0.01,-0.29l-2.81,-4.58l2.19,-3.04l-0.06,-0.42l-3.7,-2.76l0.32,-2.67l1.87,-0.38l4.26,-1.77l2.46,-1.47l3.96,2.58l0.12,0.05l6.81,1.04l9.37,4.87l1.81,1.92l0.15,2.55l-2.61,2.06l-3.95,1.07l-11.1,-3.15l-0.17,0.0l-1.84,0.53l-0.1,0.53l3.97,2.97l0.15,1.77l0.16,4.14l0.19,0.27l3.21,1.22l1.94,1.03l0.44,-0.22l0.32,-1.94l-0.07,-0.25l-1.32,-1.52l1.25,-1.2l5.87,2.45l0.24,-0.01l2.11,-0.98l0.13,-0.42l-1.55,-2.75l5.52,-3.84l2.13,0.22l2.28,1.42l0.43,-0.12l1.46,-2.87l-0.04,-0.33l-1.97,-2.37l1.14,-2.38l-0.02,-0.3l-1.42,-2.07l6.15,1.22l1.14,1.92l-2.74,0.46l-0.25,0.3l0.02,2.36l0.12,0.24l1.97,1.44l0.25,0.05l3.87,-0.91l0.22,-0.23l0.58,-2.55l5.09,-1.98l8.67,-3.69l1.22,0.14l-2.06,2.2l0.18,0.5l3.11,0.45l0.23,-0.07l1.71,-1.41l4.59,-0.12l0.12,-0.03l3.53,-1.72l2.7,2.48l0.42,-0.01l2.85,-2.88l-0.0,-0.43l-2.42,-2.35l1.0,-1.13l7.2,1.31l3.42,1.36l9.06,4.97l0.39,-0.08l1.67,-2.27l-0.04,-0.4l-2.46,-2.23l-0.06,-0.82l-0.26,-0.27l-2.64,-0.38l0.69,-1.76l0.0,-0.22l-1.32,-3.47l-0.07,-1.27l4.52,-4.09l0.08,-0.11l1.6,-4.18l1.67,-0.84l6.33,1.2l0.46,2.31l-2.31,3.67l0.05,0.38l1.49,1.41l0.77,3.04l-0.56,6.05l0.09,0.24l2.62,2.54l-0.99,2.65l-4.87,5.96l0.17,0.48l2.86,0.61l0.31,-0.13l0.94,-1.42l2.67,-1.04l0.18,-0.19l0.64,-2.01l2.11,-1.98l0.05,-0.37l-1.38,-2.32l1.11,-2.74l-0.24,-0.41l-2.53,-0.33l-0.53,-2.16l1.96,-4.42l-0.05,-0.32l-3.03,-3.48l4.21,-2.94l0.12,-0.3l-0.52,-3.04l0.72,-0.06l1.18,2.35l-0.97,4.39l0.2,0.35l2.68,0.84l0.37,-0.38l-1.05,-3.07l3.89,-1.71l5.05,-0.24l4.55,2.62l0.36,-0.05l0.05,-0.36l-2.19,-3.84l-0.23,-4.78l4.07,-0.92l5.98,0.21l5.47,-0.64l0.2,-0.48l-1.88,-2.37l2.65,-2.99l2.75,-0.13l0.12,-0.03l4.82,-2.48l6.56,-0.67l0.23,-0.14l0.76,-1.27l6.33,-0.46l1.97,1.11l0.28,0.01l5.55,-2.71l4.53,0.08l0.29,-0.21l0.67,-2.18l2.29,-2.15l5.75,-2.13l3.48,1.4l-2.7,1.03l-0.19,0.31l0.26,0.26l5.47,0.78ZM871.83,65.73l0.25,-0.15l1.99,0.01l3.3,1.2l-0.08,0.22l-2.41,1.03l-5.73,0.49l-0.31,-1.0l2.99,-1.8ZM797.64,48.44l-2.22,1.51l-3.85,-0.43l-4.35,-1.85l0.42,-1.13l4.42,0.72l5.59,1.17ZM783.82,46.06l-1.71,3.25l-9.05,-0.14l-4.11,1.15l-4.64,-3.04l1.21,-3.13l3.11,-0.91l6.53,0.22l8.66,2.59ZM780.37,145.71l2.28,5.23l-3.09,-0.89l-0.37,0.19l-1.54,4.65l0.04,0.27l2.38,3.17l-0.05,1.4l-1.41,-1.41l-0.46,0.04l-1.23,1.81l-0.33,-1.86l0.28,-3.1l-0.28,-3.41l0.58,-2.46l0.11,-4.39l-0.03,-0.13l-1.44,-3.2l0.21,-4.39l2.19,-1.49l0.09,-0.41l-0.81,-1.3l0.48,-0.21l0.56,1.94l0.86,3.23l-0.05,3.36l1.03,3.35ZM780.16,57.18l-3.4,0.03l-5.06,-0.53l1.97,-1.59l2.95,-0.42l3.35,1.75l0.18,0.77ZM683.84,31.18l-13.29,1.97l4.16,-6.56l1.88,-0.58l1.77,0.34l6.08,3.02l-0.6,1.8ZM670.94,28.02l-5.18,0.65l-6.89,-1.58l-4.03,-2.07l-1.88,-3.98l-0.18,-0.16l-2.8,-0.93l5.91,-3.62l5.25,-1.29l4.73,2.88l5.63,5.44l-0.57,4.66ZM564.37,68.98l-0.85,0.23l-7.93,-0.57l-0.6,-1.84l-0.21,-0.2l-4.34,-1.18l-0.3,-2.08l2.34,-0.92l0.19,-0.29l-0.08,-2.43l4.85,-4.0l-0.12,-0.52l-1.68,-0.43l5.47,-3.94l0.11,-0.33l-0.6,-2.02l5.36,-2.55l8.22,-3.27l8.29,-0.96l4.34,-1.94l4.67,-0.65l1.45,1.72l-1.43,1.37l-8.8,2.52l-7.65,2.42l-7.92,4.84l-3.73,4.75l-3.92,4.58l-0.07,0.23l0.51,3.88l0.11,0.2l4.32,3.39ZM548.86,18.57l-3.28,0.75l-2.25,0.44l-0.22,0.19l-0.3,0.81l-2.67,0.86l-2.27,-1.14l1.2,-1.51l-0.23,-0.49l-3.14,-0.1l2.48,-0.54l3.55,-0.07l0.44,1.36l0.49,0.12l1.4,-1.35l2.2,-0.9l3.13,1.08l-0.54,0.49ZM477.5,133.25l-4.21,0.05l-2.69,-0.34l0.39,-1.03l3.24,-1.06l2.51,0.58l0.85,0.43l-0.2,0.71l-0.0,0.15l0.12,0.52Z", "name": "Russia"}, "RW": {"path": "M497.03,288.12l0.78,1.11l-0.12,1.19l-0.49,0.21l-1.25,-0.15l-0.3,0.16l-0.67,1.24l-1.01,-0.13l0.16,-0.92l0.22,-0.12l0.15,-0.24l0.09,-1.37l0.49,-0.48l0.42,0.18l0.25,-0.01l1.26,-0.65Z", "name": "Rwanda"}, "RS": {"path": "M469.75,168.65l0.21,-0.21l0.36,-1.44l-0.08,-0.29l-1.06,-1.03l0.54,-1.16l-0.28,-0.43l-0.26,0.0l0.55,-0.67l-0.01,-0.39l-0.77,-0.86l-0.45,-0.89l1.56,-0.67l1.39,0.12l1.22,1.1l0.26,0.91l0.16,0.19l1.38,0.66l0.17,1.12l0.14,0.21l1.46,0.9l0.35,-0.03l0.62,-0.54l0.09,0.06l-0.28,0.25l-0.03,0.42l0.29,0.34l-0.44,0.5l-0.07,0.26l0.22,1.12l0.07,0.14l1.02,1.1l-0.81,0.84l-0.42,0.96l0.04,0.3l0.12,0.15l-0.15,0.16l-1.04,0.04l-0.39,0.08l0.33,-0.81l-0.29,-0.41l-0.21,0.01l-0.39,-0.45l-0.13,-0.09l-0.32,-0.11l-0.27,-0.4l-0.14,-0.11l-0.4,-0.16l-0.31,-0.37l-0.34,-0.09l-0.45,0.17l-0.18,0.18l-0.29,0.84l-0.96,-0.65l-0.81,-0.33l-0.32,-0.37l-0.22,-0.18Z", "name": "Republic of Serbia"}, "LT": {"path": "M478.13,133.31l-0.14,-0.63l0.25,-0.88l-0.15,-0.35l-1.17,-0.58l-2.43,-0.57l-0.45,-2.51l2.58,-0.97l4.14,0.22l2.3,-0.32l0.26,0.54l0.22,0.17l1.26,0.22l2.25,1.6l0.19,1.23l-1.87,1.01l-0.14,0.18l-0.54,1.83l-2.54,1.21l-2.18,-0.02l-0.52,-0.91l-0.18,-0.14l-1.11,-0.32Z", "name": "Lithuania"}, "LU": {"path": "M435.95,147.99l0.33,0.49l-0.11,1.07l-0.39,0.04l-0.29,-0.15l0.21,-1.4l0.25,-0.05Z", "name": "Luxembourg"}, "LR": {"path": "M401.37,273.67l-0.32,0.01l-2.48,-1.15l-2.24,-1.89l-2.14,-1.38l-1.47,-1.42l0.44,-0.59l0.05,-0.13l0.12,-0.65l1.07,-1.3l1.08,-1.09l0.52,-0.07l0.43,-0.18l0.84,1.24l-0.15,0.89l0.07,0.25l0.49,0.54l0.22,0.1l0.71,0.01l0.27,-0.16l0.42,-0.83l0.19,0.02l-0.06,0.52l0.23,1.12l-0.5,1.03l0.06,0.35l0.73,0.69l0.14,0.08l0.71,0.15l0.92,0.91l0.06,0.76l-0.17,0.22l-0.06,0.15l-0.17,1.8Z", "name": "Liberia"}, "RO": {"path": "M477.94,155.19l1.02,-0.64l1.49,0.33l1.52,0.01l1.09,0.73l0.32,0.01l0.81,-0.46l1.8,-0.3l0.18,-0.1l0.54,-0.64l0.86,0.0l0.64,0.26l0.71,0.87l0.8,1.35l1.39,1.81l0.07,1.25l-0.26,1.3l0.01,0.15l0.45,1.42l0.15,0.18l1.12,0.57l0.25,0.01l1.05,-0.45l0.86,0.4l0.03,0.43l-0.92,0.51l-0.63,-0.24l-0.4,0.22l-0.64,3.41l-1.12,-0.24l-1.78,-1.09l-0.23,-0.04l-2.95,0.71l-1.25,0.77l-3.55,-0.16l-1.89,-0.47l-0.14,-0.0l-0.75,0.17l-0.61,-1.07l-0.3,-0.36l0.36,-0.32l-0.04,-0.48l-0.62,-0.38l-0.36,0.03l-0.62,0.54l-1.15,-0.71l-0.18,-1.14l-0.17,-0.22l-1.4,-0.67l-0.24,-0.86l-0.09,-0.14l-0.96,-0.87l1.49,-0.44l0.16,-0.11l1.51,-2.14l1.15,-2.09l1.44,-0.63Z", "name": "Romania"}, "GW": {"path": "M383.03,256.73l-1.12,-0.88l-0.14,-0.06l-0.94,-0.15l-0.43,-0.54l0.01,-0.27l-0.13,-0.26l-0.68,-0.48l-0.05,-0.16l0.99,-0.31l0.77,0.08l0.15,-0.02l0.61,-0.26l4.25,0.1l-0.02,0.44l-0.19,0.18l-0.08,0.29l0.17,0.66l-0.17,0.14l-0.44,0.0l-0.16,0.05l-0.57,0.37l-0.66,-0.04l-0.24,0.1l-0.92,1.03Z", "name": "Guinea Bissau"}, "GT": {"path": "M195.13,249.89l-1.05,-0.35l-1.5,-0.04l-1.06,-0.47l-1.19,-0.93l0.04,-0.53l0.27,-0.55l-0.03,-0.31l-0.24,-0.32l1.02,-1.77l3.04,-0.01l0.3,-0.28l0.06,-0.88l-0.19,-0.3l-0.3,-0.11l-0.23,-0.45l-0.11,-0.12l-0.9,-0.58l-0.35,-0.33l0.37,-0.0l0.3,-0.3l0.0,-1.15l4.05,0.02l-0.02,1.74l-0.2,2.89l0.3,0.32l0.67,-0.0l0.75,0.42l0.4,-0.11l-0.62,0.53l-1.17,0.7l-0.13,0.16l-0.18,0.49l0.0,0.21l0.14,0.34l-0.35,0.44l-0.49,0.13l-0.2,0.41l0.03,0.06l-0.27,0.16l-0.86,0.64l-0.12,0.22ZM199.35,245.38l0.07,-0.13l0.05,0.02l-0.13,0.11Z", "name": "Guatemala"}, "GR": {"path": "M487.2,174.55l-0.64,1.54l-0.43,0.24l-1.41,-0.08l-1.28,-0.28l-0.14,0.0l-3.03,0.77l-0.13,0.51l1.39,1.34l-0.78,0.29l-1.2,0.0l-1.23,-1.42l-0.47,0.02l-0.47,0.65l-0.04,0.27l0.56,1.76l0.06,0.11l1.02,1.12l-0.66,0.45l-0.04,0.46l1.39,1.35l1.15,0.79l0.02,1.06l-1.91,-0.63l-0.36,0.42l0.56,1.12l-1.2,0.23l-0.22,0.4l0.8,2.14l-1.15,0.02l-1.89,-1.15l-0.89,-2.19l-0.43,-1.91l-0.05,-0.11l-0.98,-1.35l-1.24,-1.62l-0.13,-0.63l1.07,-1.32l0.06,-0.14l0.13,-0.81l0.68,-0.36l0.16,-0.25l0.03,-0.54l1.4,-0.23l0.12,-0.05l0.87,-0.6l1.26,0.05l0.25,-0.11l0.34,-0.43l0.33,-0.07l1.81,0.08l0.13,-0.02l1.87,-0.77l1.64,0.97l0.19,0.04l2.28,-0.28l0.26,-0.29l0.02,-0.95l0.56,0.36ZM480.44,192.0l1.05,0.74l0.01,0.0l-1.26,-0.23l0.2,-0.51ZM481.76,192.79l1.86,-0.15l1.53,0.17l-0.02,0.19l0.34,0.3l-2.28,0.15l0.01,-0.13l-0.25,-0.31l-1.19,-0.22ZM485.65,193.28l0.65,-0.16l-0.05,0.12l-0.6,0.04Z", "name": "Greece"}, "GQ": {"path": "M444.81,282.04l-0.21,-0.17l0.74,-2.4l3.56,0.05l0.02,2.42l-3.34,-0.02l-0.76,0.13Z", "name": "Equatorial Guinea"}, "GY": {"path": "M271.34,264.25l1.43,0.81l1.44,1.53l0.06,1.19l0.28,0.28l0.84,0.05l2.13,1.92l-0.34,1.93l-1.37,0.59l-0.17,0.34l0.12,0.51l-0.43,1.21l0.03,0.26l1.11,1.82l0.26,0.14l0.56,0.0l0.32,1.29l1.25,1.78l-0.08,0.01l-1.34,-0.21l-0.24,0.06l-0.78,0.64l-1.06,0.41l-0.76,0.1l-0.22,0.15l-0.18,0.32l-0.95,-0.1l-1.38,-1.05l-0.19,-1.13l-0.6,-1.18l0.37,-1.96l0.65,-0.83l0.03,-0.32l-0.57,-1.17l-0.15,-0.14l-0.62,-0.27l0.25,-0.85l-0.08,-0.3l-0.58,-0.58l-0.24,-0.09l-1.15,0.1l-1.41,-1.58l0.48,-0.49l0.09,-0.22l-0.04,-0.92l1.31,-0.34l0.73,-0.52l0.04,-0.44l-0.75,-0.82l0.16,-0.66l1.74,-1.3Z", "name": "Guyana"}, "GE": {"path": "M525.41,174.19l0.26,-0.88l-0.0,-0.17l-0.63,-2.06l-0.1,-0.15l-1.45,-1.12l-0.11,-0.05l-1.31,-0.33l-0.66,-0.69l1.97,0.48l3.65,0.49l3.3,1.41l0.39,0.5l0.33,0.1l1.43,-0.45l2.14,0.58l0.7,1.14l0.13,0.12l1.06,0.47l-0.18,0.11l-0.08,0.43l1.08,1.41l-0.06,0.06l-1.16,-0.15l-1.82,-0.84l-0.31,0.04l-0.55,0.44l-3.29,0.44l-2.32,-1.41l-0.17,-0.04l-2.25,0.12Z", "name": "Georgia"}, "GB": {"path": "M412.82,118.6l-2.31,3.4l-0.0,0.33l0.31,0.13l2.52,-0.49l2.34,0.02l-0.56,2.51l-2.22,3.13l0.22,0.47l2.43,0.21l2.35,4.35l0.17,0.14l1.58,0.51l1.49,3.78l0.73,1.37l0.2,0.15l2.76,0.59l-0.25,1.75l-1.18,0.91l-0.08,0.39l0.87,1.49l-1.96,1.51l-3.31,-0.02l-4.15,0.88l-1.07,-0.59l-0.35,0.04l-1.55,1.44l-2.17,-0.35l-0.22,0.05l-1.61,1.15l-0.78,-0.38l3.31,-3.12l2.18,-0.7l0.21,-0.31l-0.26,-0.27l-3.78,-0.54l-0.48,-0.9l2.3,-0.92l0.13,-0.46l-1.29,-1.71l0.39,-1.83l3.46,0.29l0.32,-0.24l0.37,-1.99l-0.06,-0.24l-1.71,-2.17l-0.18,-0.11l-2.91,-0.58l-0.43,-0.68l0.82,-1.4l-0.03,-0.35l-0.82,-0.97l-0.46,0.01l-0.85,1.05l-0.11,-2.6l-0.05,-0.16l-1.19,-1.7l0.86,-3.53l1.81,-2.75l1.88,0.26l2.38,-0.24ZM406.39,132.84l-1.09,1.92l-1.65,-0.62l-1.26,0.02l0.41,-1.46l0.0,-0.16l-0.42,-1.51l1.62,-0.11l2.39,1.92Z", "name": "United Kingdom"}, "GA": {"path": "M448.76,294.47l-2.38,-2.34l-1.63,-2.04l-1.46,-2.48l0.06,-0.66l0.54,-0.81l0.61,-1.82l0.46,-1.69l0.63,-0.11l3.62,0.03l0.3,-0.3l-0.02,-2.75l0.88,-0.12l1.47,0.32l0.13,0.0l1.39,-0.3l-0.13,0.87l0.03,0.19l0.7,1.29l0.3,0.16l1.74,-0.19l0.36,0.29l-1.01,2.7l0.05,0.29l1.13,1.42l0.25,1.82l-0.3,1.56l-0.64,0.99l-1.93,-0.09l-1.26,-1.13l-0.5,0.17l-0.16,0.91l-1.48,0.27l-0.12,0.05l-0.86,0.63l-0.08,0.39l0.81,1.42l-1.48,1.08Z", "name": "Gabon"}, "GN": {"path": "M399.83,265.31l-0.69,-0.06l-0.3,0.16l-0.43,0.85l-0.39,-0.01l-0.3,-0.33l0.14,-0.87l-0.05,-0.22l-1.05,-1.54l-0.37,-0.11l-0.61,0.27l-0.84,0.12l0.02,-0.54l-0.04,-0.17l-0.35,-0.57l0.07,-0.63l-0.03,-0.17l-0.57,-1.11l-0.7,-0.9l-0.24,-0.12l-2.0,-0.0l-0.19,0.07l-0.51,0.42l-0.6,0.05l-0.21,0.11l-0.43,0.55l-0.3,0.7l-1.04,0.86l-0.91,-1.24l-1.0,-1.02l-0.69,-0.37l-0.52,-0.42l-0.3,-1.11l-0.37,-0.56l-0.1,-0.1l-0.4,-0.23l0.77,-0.85l0.62,0.04l0.18,-0.05l0.58,-0.38l0.46,-0.0l0.19,-0.07l0.39,-0.34l0.1,-0.3l-0.17,-0.67l0.15,-0.14l0.09,-0.2l0.03,-0.57l0.87,0.02l1.76,0.6l0.13,0.01l0.55,-0.06l0.22,-0.13l0.08,-0.12l1.18,0.17l0.17,-0.02l0.09,0.56l0.3,0.25l0.4,-0.0l0.14,-0.03l0.56,-0.29l0.23,0.05l0.63,0.59l0.15,0.07l1.07,0.2l0.24,-0.06l0.65,-0.52l0.77,-0.32l0.55,-0.32l0.3,0.04l0.44,0.45l0.34,0.74l0.84,0.87l-0.35,0.45l-0.06,0.15l-0.1,0.82l0.42,0.31l0.35,-0.16l0.05,0.04l-0.1,0.59l0.09,0.27l0.42,0.4l-0.06,0.02l-0.18,0.21l-0.2,0.86l0.03,0.21l0.56,1.02l0.52,1.71l-0.65,0.21l-0.15,0.12l-0.24,0.35l-0.03,0.28l0.16,0.41l-0.1,0.76l-0.12,0.0Z", "name": "Guinea"}, "GM": {"path": "M379.18,251.48l0.15,-0.55l2.51,-0.07l0.21,-0.09l0.48,-0.52l0.58,-0.03l0.91,0.58l0.16,0.05l0.78,0.01l0.14,-0.03l0.59,-0.31l0.16,0.24l-0.71,0.38l-0.94,-0.04l-1.02,-0.51l-0.3,0.01l-0.86,0.55l-0.37,0.02l-0.14,0.04l-0.53,0.31l-1.81,-0.04Z", "name": "Gambia"}, "GL": {"path": "M304.13,6.6l8.19,-3.63l8.72,0.28l0.19,-0.06l3.12,-2.28l8.75,-0.61l19.94,0.8l14.93,4.75l-3.92,2.01l-9.52,0.27l-13.48,0.6l-0.27,0.2l0.09,0.33l1.26,1.09l0.22,0.07l8.81,-0.67l7.49,2.07l0.19,-0.01l4.68,-1.78l1.76,1.84l-2.59,3.26l-0.01,0.36l0.34,0.11l6.35,-2.2l12.09,-2.32l7.31,1.14l1.17,2.13l-9.9,4.05l-1.43,1.32l-7.91,0.98l-0.26,0.31l0.29,0.29l5.25,0.25l-2.63,3.72l-2.02,3.61l-0.04,0.15l0.08,6.05l0.07,0.19l2.61,3.0l-3.4,0.2l-4.12,1.66l-0.04,0.54l4.5,2.67l0.53,3.9l-2.39,0.42l-0.19,0.48l2.91,3.83l-5.0,0.32l-0.27,0.22l0.12,0.33l2.69,1.84l-0.65,1.35l-3.36,0.71l-3.46,0.01l-0.21,0.51l3.05,3.15l0.02,1.53l-4.54,-1.79l-0.32,0.06l-1.29,1.26l0.11,0.5l3.33,1.15l3.17,2.74l0.85,3.29l-4.0,0.78l-1.83,-1.66l-3.1,-2.64l-0.36,-0.02l-0.13,0.33l0.8,2.92l-2.76,2.26l-0.09,0.33l0.28,0.2l6.59,0.19l2.47,0.18l-5.86,3.38l-6.76,3.43l-7.26,1.48l-2.73,0.02l-0.16,0.05l-2.67,1.72l-3.44,4.42l-5.28,2.86l-1.73,0.18l-3.33,1.01l-3.59,0.96l-0.15,0.1l-2.15,2.52l-0.07,0.19l-0.03,2.76l-1.21,2.49l-4.03,3.1l-0.1,0.33l0.98,2.94l-2.31,6.57l-3.21,0.21l-3.6,-3.0l-0.19,-0.07l-4.9,-0.02l-2.29,-1.97l-1.69,-3.78l-4.31,-4.86l-1.23,-2.52l-0.34,-3.58l-0.08,-0.17l-3.35,-3.67l0.85,-2.92l-0.09,-0.31l-1.5,-1.34l2.33,-4.7l3.67,-1.57l0.15,-0.13l1.02,-1.93l0.52,-3.47l-0.44,-0.31l-2.85,1.57l-1.33,0.64l-2.12,0.59l-2.81,-1.32l-0.15,-2.79l0.88,-2.17l2.09,-0.06l5.07,1.2l0.34,-0.17l-0.11,-0.37l-4.3,-2.9l-2.24,-1.58l-0.25,-0.05l-2.38,0.62l-1.7,-0.93l2.62,-4.1l-0.03,-0.36l-1.51,-1.75l-1.97,-3.3l-3.01,-5.21l-0.1,-0.11l-3.04,-1.85l0.03,-1.94l-0.18,-0.28l-6.82,-3.01l-5.35,-0.38l-6.69,0.21l-6.03,0.37l-2.81,-1.59l-3.84,-2.9l5.94,-1.5l5.01,-0.28l0.28,-0.29l-0.26,-0.31l-10.68,-1.38l-5.38,-2.1l0.27,-1.68l9.3,-2.6l9.18,-2.68l0.19,-0.16l0.97,-2.05l-0.18,-0.42l-6.29,-1.91l1.81,-1.9l8.58,-4.05l3.6,-0.63l0.23,-0.4l-0.92,-2.37l5.59,-1.5l7.66,-0.95l7.58,-0.05l2.65,1.84l0.31,0.02l6.52,-3.29l5.85,2.24l3.55,0.49l5.17,1.95l0.38,-0.16l-0.13,-0.39l-5.77,-3.16l0.29,-2.26Z", "name": "Greenland"}, "KW": {"path": "M540.87,207.81l0.41,0.94l-0.18,0.51l0.0,0.21l0.65,1.66l-1.15,0.05l-0.54,-1.12l-0.24,-0.17l-1.73,-0.2l1.44,-2.06l1.33,0.18Z", "name": "Kuwait"}, "GH": {"path": "M423.16,269.88l-3.58,1.34l-1.41,0.87l-2.13,0.69l-1.91,-0.61l0.09,-0.75l-0.03,-0.17l-1.04,-2.07l0.62,-2.7l1.04,-2.08l0.03,-0.19l-1.0,-5.46l0.05,-1.12l4.04,-0.11l1.08,0.18l0.18,-0.03l0.72,-0.36l0.75,0.13l-0.11,0.48l0.06,0.26l0.98,1.22l-0.0,1.77l0.24,1.99l0.05,0.13l0.55,0.81l-0.52,2.14l0.19,1.37l0.69,1.66l0.38,0.62Z", "name": "Ghana"}, "OM": {"path": "M568.16,231.0l-0.08,0.1l-0.84,1.61l-0.93,-0.11l-0.27,0.11l-0.58,0.73l-0.4,1.32l-0.01,0.14l0.29,1.61l-0.07,0.09l-1.0,-0.01l-0.16,0.04l-1.56,0.97l-0.14,0.2l-0.23,1.17l-0.41,0.4l-1.44,-0.02l-0.17,0.05l-0.98,0.65l-0.13,0.25l0.01,0.87l-0.97,0.57l-1.27,-0.22l-0.19,0.03l-1.63,0.84l-0.88,0.11l-2.55,-5.57l7.2,-2.49l0.19,-0.19l1.67,-5.23l-0.03,-0.25l-1.1,-1.78l0.05,-0.89l0.68,-1.03l0.05,-0.16l0.01,-0.89l0.96,-0.44l0.07,-0.5l-0.32,-0.26l0.16,-1.31l0.85,-0.01l1.03,1.67l0.09,0.09l1.4,0.96l0.11,0.05l1.82,0.34l1.37,0.45l1.75,2.32l0.13,0.1l0.7,0.26l-0.0,0.3l-1.25,2.19l-1.01,0.8ZM561.88,218.47l-0.01,0.02l-0.15,-0.29l0.3,-0.38l-0.14,0.65Z", "name": "Oman"}, "_3": {"path": "M543.2,261.06l-1.07,1.46l-1.65,1.99l-1.91,0.01l-8.08,-2.95l-0.89,-0.84l-0.9,-1.19l-0.81,-1.23l0.44,-0.73l0.76,-1.12l0.49,0.28l0.52,1.05l1.13,1.06l0.2,0.08l1.24,0.01l2.42,-0.65l2.77,-0.31l2.17,-0.78l1.31,-0.19l0.84,-0.43l1.03,-0.06l-0.01,4.54Z", "name": "Somaliland"}, "_2": {"path": "M384.23,230.37l0.07,-0.06l0.28,-0.89l0.99,-1.13l0.07,-0.13l0.8,-3.54l3.4,-2.8l0.09,-0.13l0.76,-2.17l0.07,5.5l-2.07,0.21l-0.24,0.17l-0.61,1.36l-0.02,0.16l0.43,3.46l-4.01,-0.01ZM391.82,218.2l0.07,-0.06l0.75,-1.93l1.86,-0.25l0.94,0.34l1.14,0.0l0.18,-0.06l0.73,-0.56l1.41,-0.08l-0.0,2.72l-7.08,-0.12Z", "name": "Western Sahara"}, "_1": {"path": "M472.71,172.84l-0.07,-0.43l-0.16,-0.22l-0.53,-0.27l-0.38,-0.58l0.3,-0.43l0.51,-0.19l0.18,-0.18l0.3,-0.87l0.12,-0.04l0.22,0.26l0.12,0.09l0.38,0.15l0.28,0.41l0.15,0.12l0.34,0.12l0.43,0.5l0.15,0.07l-0.12,0.3l-0.27,0.32l-0.03,0.18l-0.31,0.06l-1.48,0.47l-0.15,0.17Z", "name": "Kosovo"}, "_0": {"path": "M503.54,192.92l0.09,-0.17l0.41,0.01l-0.08,0.01l-0.42,0.15ZM504.23,192.76l1.02,0.02l0.4,-0.13l-0.09,0.29l0.03,0.08l-0.35,0.16l-0.24,-0.04l-0.06,-0.1l-0.18,-0.17l-0.19,-0.08l-0.33,-0.02Z", "name": "Northern Cyprus"}, "JO": {"path": "M510.26,200.93l0.28,-0.57l2.53,1.0l0.27,-0.02l4.57,-2.77l0.84,2.84l-0.28,0.25l-4.95,1.37l-0.14,0.49l2.24,2.48l-0.5,0.28l-0.13,0.14l-0.35,0.78l-1.76,0.35l-0.2,0.14l-0.57,0.94l-0.94,0.73l-2.45,-0.38l-0.03,-0.12l1.23,-4.32l-0.04,-1.1l0.34,-0.75l0.03,-0.12l0.0,-1.63Z", "name": "Jordan"}, "HR": {"path": "M455.49,162.73l1.53,0.09l0.24,-0.1l0.29,-0.34l0.64,0.38l0.14,0.04l0.98,0.06l0.32,-0.3l-0.01,-0.66l0.67,-0.25l0.19,-0.22l0.21,-1.11l1.72,-0.72l0.65,0.32l1.94,1.37l2.07,0.6l0.22,-0.02l0.67,-0.33l0.47,0.94l0.67,0.76l-0.63,0.77l-0.91,-0.55l-0.16,-0.04l-1.69,0.04l-2.2,-0.51l-1.17,0.07l-0.21,0.11l-0.36,0.42l-0.67,-0.53l-0.46,0.12l-0.52,1.29l0.05,0.31l1.21,1.42l0.58,0.99l1.15,1.14l0.95,0.68l0.92,1.23l0.1,0.09l1.75,0.91l-1.87,-0.89l-1.5,-1.11l-2.23,-0.88l-1.77,-1.9l0.12,-0.06l0.1,-0.47l-1.07,-1.22l-0.04,-0.94l-0.21,-0.27l-1.61,-0.49l-0.35,0.14l-0.53,0.93l-0.41,-0.57l0.04,-0.73Z", "name": "Croatia"}, "HT": {"path": "M237.82,234.68l1.35,0.1l1.95,0.37l0.18,1.15l-0.16,0.83l-0.51,0.37l-0.06,0.44l0.57,0.68l-0.02,0.22l-1.31,-0.35l-1.26,0.17l-1.49,-0.18l-0.15,0.02l-1.03,0.43l-1.02,-0.61l0.09,-0.36l2.04,0.32l1.9,0.21l0.19,-0.05l0.9,-0.58l0.05,-0.47l-1.05,-1.03l0.02,-0.86l-0.23,-0.3l-1.13,-0.29l0.18,-0.23Z", "name": "Haiti"}, "HU": {"path": "M461.96,157.92l0.68,-1.66l-0.03,-0.29l-0.15,-0.22l0.84,-0.0l0.3,-0.26l0.12,-0.84l0.88,0.57l0.98,0.38l0.16,0.01l2.1,-0.39l0.23,-0.21l0.14,-0.45l0.88,-0.1l1.06,-0.43l0.13,0.1l0.28,0.04l1.18,-0.4l0.14,-0.1l0.52,-0.67l0.63,-0.15l2.6,0.95l0.26,-0.03l0.38,-0.23l1.12,0.7l0.1,0.49l-1.31,0.57l-0.14,0.13l-1.18,2.14l-1.44,2.04l-1.85,0.55l-1.51,-0.13l-0.14,0.02l-1.92,0.82l-0.85,0.42l-1.91,-0.55l-1.83,-1.31l-0.74,-0.37l-0.44,-0.97l-0.26,-0.18Z", "name": "Hungary"}, "HN": {"path": "M202.48,251.87l-0.33,-0.62l-0.18,-0.14l-0.5,-0.15l0.13,-0.76l-0.11,-0.28l-0.34,-0.28l-0.6,-0.23l-0.18,-0.01l-0.81,0.22l-0.16,-0.24l-0.72,-0.39l-0.51,-0.48l-0.12,-0.07l-0.31,-0.09l0.24,-0.3l0.04,-0.3l-0.16,-0.4l0.1,-0.28l1.14,-0.69l1.0,-0.86l0.09,0.04l0.3,-0.05l0.47,-0.39l0.49,-0.03l0.14,0.13l0.29,0.06l0.31,-0.1l1.16,0.22l1.24,-0.08l0.81,-0.28l0.29,-0.25l0.63,0.1l0.69,0.18l0.65,-0.06l0.49,-0.2l1.04,0.32l0.38,0.06l0.7,0.44l0.71,0.56l0.92,0.41l0.1,0.11l-0.11,-0.01l-0.23,0.09l-0.3,0.3l-0.76,0.29l-0.58,0.0l-0.15,0.04l-0.45,0.26l-0.31,-0.07l-0.37,-0.34l-0.28,-0.07l-0.26,0.07l-0.18,0.15l-0.23,0.43l-0.04,-0.0l-0.33,0.28l-0.03,0.4l-0.76,0.61l-0.45,0.3l-0.15,0.16l-0.51,-0.36l-0.41,0.06l-0.45,0.56l-0.41,-0.01l-0.59,0.06l-0.27,0.31l0.04,0.96l-0.07,0.0l-0.25,0.16l-0.24,0.45l-0.42,0.06Z", "name": "Honduras"}, "PR": {"path": "M254.95,238.31l1.15,0.21l0.2,0.23l-0.36,0.36l-1.76,-0.01l-1.2,0.07l-0.09,-0.69l0.17,-0.18l1.89,0.01Z", "name": "Puerto Rico"}, "PS": {"path": "M509.66,201.06l-0.0,1.44l-0.29,0.63l-0.59,0.19l0.02,-0.11l0.52,-0.31l-0.02,-0.53l-0.41,-0.2l0.36,-1.28l0.41,0.17Z", "name": "West Bank"}, "PT": {"path": "M398.65,173.6l0.75,-0.63l0.7,-0.3l0.51,1.2l0.28,0.18l1.48,-0.0l0.2,-0.08l0.33,-0.3l1.16,0.08l0.52,1.11l-0.95,0.66l-0.13,0.24l-0.03,2.2l-0.33,0.35l-0.08,0.18l-0.08,1.17l-0.86,0.19l-0.2,0.44l0.93,1.64l-0.64,1.79l0.07,0.31l0.72,0.72l-0.24,0.56l-0.9,1.05l-0.07,0.26l0.17,0.77l-0.73,0.54l-1.18,-0.36l-0.16,-0.0l-0.85,0.21l0.31,-1.81l-0.23,-1.87l-0.23,-0.25l-0.99,-0.24l-0.49,-0.91l0.18,-1.72l0.93,-0.99l0.08,-0.16l0.17,-1.17l0.52,-1.76l-0.04,-1.36l-0.51,-1.14l-0.09,-0.8Z", "name": "Portugal"}, "PY": {"path": "M264.33,341.43l0.93,-2.96l0.07,-1.42l1.1,-2.1l4.19,-0.73l2.22,0.04l2.12,1.21l0.07,0.76l0.7,1.38l-0.16,3.48l0.24,0.31l2.64,0.5l0.19,-0.03l0.9,-0.45l1.47,0.62l0.38,0.64l0.23,2.35l0.3,1.07l0.25,0.21l0.93,0.12l0.16,-0.02l0.8,-0.37l0.61,0.33l-0.0,1.25l-0.33,1.53l-0.5,1.57l-0.39,2.26l-2.14,1.94l-1.85,0.4l-2.74,-0.4l-2.13,-0.62l2.26,-3.75l0.03,-0.24l-0.36,-1.18l-0.17,-0.19l-2.55,-1.03l-3.04,-1.95l-2.07,-0.43l-4.4,-4.12Z", "name": "Paraguay"}, "PA": {"path": "M213.65,263.79l0.18,-0.43l0.02,-0.18l-0.06,-0.28l0.23,-0.18l-0.01,-0.48l-0.4,-0.29l-0.01,-0.62l0.57,-0.13l0.68,0.69l-0.04,0.39l0.26,0.33l1.0,0.11l0.27,-0.1l0.49,0.44l0.24,0.07l1.34,-0.22l1.04,-0.62l1.49,-0.5l0.86,-0.73l0.99,0.11l0.18,0.28l1.35,0.08l1.02,0.4l0.78,0.72l0.71,0.53l-0.1,0.12l-0.05,0.3l0.53,1.34l-0.28,0.44l-0.6,-0.13l-0.36,0.22l-0.2,0.76l-0.41,-0.36l-0.44,-1.12l0.49,-0.53l-0.14,-0.49l-0.51,-0.14l-0.41,-0.72l-0.11,-0.11l-1.25,-0.7l-0.19,-0.04l-1.1,0.16l-0.22,0.15l-0.47,0.81l-0.9,0.56l-0.49,0.08l-0.22,0.17l-0.25,0.52l0.05,0.32l0.93,1.07l-0.41,0.21l-0.29,0.3l-0.81,0.09l-0.36,-1.26l-0.53,-0.1l-0.21,0.28l-0.5,-0.09l-0.44,-0.88l-0.22,-0.16l-0.99,-0.16l-0.61,-0.28l-0.13,-0.03l-1.0,0.0Z", "name": "Panama"}, "PG": {"path": "M808.4,298.6l0.62,0.46l1.19,1.56l1.04,0.77l-0.18,0.37l-0.42,0.15l-0.92,-0.82l-1.05,-1.53l-0.27,-0.96ZM804.09,296.06l-0.3,0.26l-0.36,-1.11l-0.66,-1.06l-2.55,-1.89l-1.42,-0.59l0.17,-0.15l1.16,0.6l0.85,0.55l1.01,0.58l0.97,1.02l0.9,0.76l0.24,1.03ZM796.71,297.99l0.15,0.82l0.34,0.24l1.43,-0.19l0.19,-0.11l0.68,-0.82l1.36,-0.87l0.13,-0.31l-0.21,-1.13l1.04,-0.03l0.3,0.25l-0.04,1.17l-0.74,1.34l-1.17,0.18l-0.22,0.15l-0.35,0.62l-2.51,1.13l-1.21,-0.0l-1.99,-0.71l-1.19,-0.58l0.07,-0.28l1.98,0.32l1.46,-0.2l0.24,-0.21l0.25,-0.79ZM789.24,303.52l0.11,0.15l2.19,1.62l1.6,2.62l0.27,0.14l1.09,-0.06l-0.07,0.77l0.23,0.32l1.23,0.27l-0.14,0.09l0.05,0.53l2.39,0.95l-0.11,0.28l-1.33,0.14l-0.51,-0.55l-0.18,-0.09l-4.59,-0.65l-1.87,-1.55l-1.38,-1.35l-1.28,-2.17l-0.16,-0.13l-3.27,-1.1l-0.19,0.0l-2.12,0.72l-1.58,0.85l-0.15,0.31l0.28,1.63l-1.65,0.73l-1.37,-0.4l-2.3,-0.09l-0.08,-15.65l3.95,1.57l4.58,1.42l1.67,1.25l1.32,1.19l0.36,1.39l0.19,0.21l4.06,1.51l0.39,0.85l-1.9,0.22l-0.25,0.39l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M246.44,329.21l-0.63,1.25l-1.05,0.54l-2.25,-1.33l-0.19,-0.93l-0.16,-0.21l-4.95,-2.58l-4.46,-2.79l-1.87,-1.52l-0.94,-1.91l0.33,-0.6l-0.01,-0.31l-2.11,-3.33l-2.46,-4.66l-2.36,-5.02l-1.04,-1.18l-0.77,-1.81l-0.08,-0.11l-1.95,-1.64l-1.54,-0.88l0.61,-0.85l0.02,-0.31l-1.15,-2.27l0.69,-1.56l1.59,-1.26l0.12,0.42l-0.56,0.47l-0.11,0.25l0.07,0.92l0.36,0.27l0.97,-0.19l0.85,0.23l0.99,1.19l0.41,0.05l1.42,-1.03l0.11,-0.16l0.46,-1.64l1.45,-2.06l2.92,-0.96l0.11,-0.07l2.73,-2.62l0.84,-1.72l0.02,-0.18l-0.3,-1.65l0.28,-0.1l1.49,1.06l0.77,1.14l0.1,0.09l1.08,0.6l1.43,2.55l0.21,0.15l1.86,0.31l0.18,-0.03l1.25,-0.6l0.77,0.37l0.17,0.03l1.4,-0.2l1.57,0.96l-1.45,2.29l0.23,0.46l0.63,0.05l0.66,0.7l-1.51,-0.08l-0.24,0.1l-0.27,0.31l-1.96,0.46l-2.95,1.74l-0.14,0.21l-0.17,1.1l-0.6,0.82l-0.05,0.23l0.21,1.13l-1.31,0.63l-0.17,0.27l0.0,0.91l-0.53,0.37l-0.1,0.37l1.04,2.27l1.31,1.46l-0.44,0.9l0.24,0.43l1.52,0.13l0.87,1.23l0.24,0.13l2.21,0.07l0.18,-0.06l1.55,-1.13l-0.14,3.22l0.23,0.3l1.14,0.29l0.16,-0.0l1.18,-0.36l1.97,3.71l-0.45,0.71l-0.04,0.14l-0.12,1.8l-0.05,2.07l-0.92,1.2l-0.03,0.31l0.38,0.8l-0.48,0.72l-0.02,0.3l1.01,2.02l-1.5,2.64Z", "name": "Peru"}, "PK": {"path": "M609.08,187.76l1.66,1.21l0.71,2.11l0.2,0.19l3.62,1.01l-1.98,1.95l-2.65,0.4l-3.75,-0.68l-0.26,0.08l-1.23,1.22l-0.07,0.31l0.89,2.46l0.88,1.92l0.1,0.12l1.67,1.14l-1.8,1.35l-0.12,0.25l0.04,1.85l-2.35,2.67l-1.59,2.79l-2.5,2.72l-2.76,-0.2l-0.24,0.09l-2.76,2.83l0.04,0.45l1.54,1.13l0.27,1.94l0.09,0.17l1.34,1.29l0.4,1.83l-5.14,-0.01l-0.22,0.09l-1.53,1.63l-1.52,-0.56l-0.76,-1.88l-1.93,-2.03l-0.25,-0.09l-4.6,0.5l-4.05,0.05l-3.1,0.33l0.77,-2.53l3.48,-1.33l0.19,-0.33l-0.21,-1.24l-0.19,-0.23l-1.01,-0.37l-0.06,-2.18l-0.17,-0.26l-2.32,-1.16l-0.96,-1.57l-0.56,-0.65l3.16,1.05l0.14,0.01l2.45,-0.4l1.44,0.33l0.3,-0.1l0.4,-0.47l1.58,0.22l0.14,-0.01l3.25,-1.14l0.2,-0.27l0.08,-2.23l1.23,-1.38l1.73,0.0l0.28,-0.2l0.22,-0.61l1.68,-0.32l0.86,0.24l0.27,-0.05l0.98,-0.78l0.11,-0.26l-0.13,-1.57l0.96,-1.52l1.51,-0.67l0.14,-0.41l-0.74,-1.4l1.86,0.07l0.26,-0.13l0.69,-1.01l0.05,-0.2l-0.09,-0.94l1.14,-1.09l0.09,-0.28l-0.29,-1.41l-0.51,-1.07l1.23,-1.05l2.6,-0.58l2.86,-0.33l1.33,-0.54l1.3,-0.29Z", "name": "Pakistan"}, "PH": {"path": "M737.11,263.82l0.25,1.66l0.14,1.34l-0.54,1.46l-0.64,-1.79l-0.5,-0.1l-1.17,1.28l-0.05,0.32l0.74,1.71l-0.49,0.81l-2.6,-1.28l-0.61,-1.57l0.68,-1.07l-0.07,-0.4l-1.59,-1.19l-0.42,0.06l-0.69,0.91l-1.01,-0.08l-0.21,0.06l-1.58,1.2l-0.17,-0.3l0.87,-1.88l1.48,-0.66l1.18,-0.81l0.71,0.92l0.34,0.1l1.9,-0.69l0.18,-0.18l0.34,-0.94l1.57,-0.06l0.29,-0.32l-0.1,-1.38l1.41,0.83l0.36,2.06ZM734.94,254.42l0.56,2.24l-1.41,-0.49l-0.4,0.3l0.07,0.94l0.51,1.3l-0.54,0.26l-0.08,-1.34l-0.25,-0.28l-0.56,-0.1l-0.23,-0.91l1.03,0.14l0.34,-0.31l-0.03,-0.96l-0.06,-0.18l-1.14,-1.44l1.62,0.04l0.57,0.78ZM724.68,238.33l1.48,0.71l0.33,-0.04l0.44,-0.38l0.05,0.13l-0.37,0.97l0.01,0.23l0.81,1.75l-0.59,1.92l-1.37,0.79l-0.14,0.2l-0.39,2.07l0.01,0.14l0.56,2.04l0.23,0.21l1.33,0.28l0.14,-0.0l1.0,-0.27l2.82,1.28l-0.2,1.16l0.12,0.29l0.66,0.5l-0.13,0.56l-1.54,-0.99l-0.89,-1.29l-0.49,0.0l-0.44,0.65l-1.34,-1.28l-0.26,-0.08l-2.18,0.36l-0.96,-0.44l0.09,-0.72l0.69,-0.57l-0.01,-0.47l-0.75,-0.59l-0.47,0.14l-0.15,0.43l-0.86,-1.02l-0.34,-1.02l-0.07,-1.74l0.49,0.41l0.49,-0.21l0.26,-3.99l0.73,-2.1l1.23,0.0ZM731.12,258.92l-0.82,0.75l-0.83,1.64l-0.52,0.5l-1.17,-1.33l0.36,-0.47l0.62,-0.7l0.07,-0.15l0.24,-1.35l0.73,-0.08l-0.31,1.29l0.16,0.34l0.37,-0.09l1.21,-1.6l-0.12,1.24ZM726.66,255.58l0.85,0.45l0.14,0.03l1.28,-0.0l-0.03,0.62l-1.04,0.96l-1.15,0.55l-0.05,-0.71l0.17,-1.26l-0.01,-0.13l-0.16,-0.51ZM724.92,252.06l-0.45,1.5l-0.7,-0.83l-0.95,-1.43l1.44,0.06l0.67,0.7ZM717.48,261.28l-1.87,1.35l0.21,-0.3l1.81,-1.57l1.5,-1.75l0.97,-1.84l0.23,1.08l-1.56,1.33l-1.29,1.7Z", "name": "Philippines"}, "PL": {"path": "M458.8,144.25l-0.96,-1.98l0.18,-1.06l-0.01,-0.15l-0.62,-1.8l-0.82,-1.11l0.56,-0.73l0.05,-0.28l-0.51,-1.51l1.48,-0.87l3.88,-1.58l3.06,-1.14l2.23,0.52l0.15,0.66l0.29,0.23l2.4,0.04l3.11,0.39l4.56,-0.05l1.12,0.32l0.51,0.89l0.1,1.45l0.03,0.12l0.66,1.23l-0.01,1.08l-1.33,0.61l-0.14,0.41l0.74,1.5l0.07,1.53l1.22,2.79l-0.19,0.66l-1.09,0.33l-0.14,0.09l-2.27,2.72l-0.04,0.31l0.35,0.8l-2.22,-1.16l-0.21,-0.02l-1.72,0.44l-1.1,-0.31l-0.21,0.02l-1.3,0.61l-1.11,-1.02l-0.32,-0.05l-0.81,0.35l-1.15,-1.61l-0.21,-0.12l-1.65,-0.17l-0.19,-0.82l-0.23,-0.23l-1.72,-0.37l-0.34,0.17l-0.25,0.56l-0.88,-0.44l0.12,-0.69l-0.25,-0.35l-1.78,-0.27l-1.08,-0.97Z", "name": "Poland"}, "ZM": {"path": "M502.81,308.32l1.09,1.04l0.58,1.94l-0.39,0.66l-0.5,2.05l-0.0,0.14l0.45,1.95l-0.69,0.77l-0.06,0.11l-0.76,2.37l0.15,0.36l0.62,0.31l-6.85,1.9l-0.22,0.33l0.2,1.54l-1.62,0.3l-0.12,0.05l-1.43,1.02l-0.11,0.15l-0.25,0.73l-0.73,0.17l-0.14,0.08l-2.18,2.12l-1.33,1.6l-0.65,0.05l-0.83,-0.29l-2.75,-0.28l-0.24,-0.1l-0.15,-0.27l-0.99,-0.58l-0.12,-0.04l-1.73,-0.14l-1.88,0.54l-1.5,-1.48l-1.61,-2.01l0.11,-7.73l4.92,0.03l0.29,-0.37l-0.19,-0.79l0.34,-0.86l0.0,-0.21l-0.41,-1.11l0.26,-1.14l-0.01,-0.16l-0.12,-0.36l0.18,0.01l0.1,0.56l0.31,0.25l1.14,-0.06l1.44,0.21l0.76,1.05l0.19,0.12l2.01,0.35l0.19,-0.03l1.24,-0.65l0.44,1.03l0.22,0.18l1.81,0.34l0.85,0.99l1.02,1.39l0.24,0.12l1.92,0.02l0.3,-0.32l-0.21,-2.74l-0.47,-0.23l-0.53,0.36l-1.58,-0.89l-0.51,-0.34l0.29,-2.36l0.44,-2.99l-0.03,-0.18l-0.5,-0.99l0.61,-1.38l0.53,-0.24l3.26,-0.41l0.89,0.23l1.01,0.62l1.04,0.44l1.6,0.43l1.35,0.72Z", "name": "Zambia"}, "EE": {"path": "M482.19,120.88l0.23,-1.68l-0.43,-0.31l-0.75,0.37l-1.34,-1.1l-0.18,-1.75l2.92,-0.95l3.07,-0.53l2.66,0.6l2.48,-0.1l0.18,0.31l-1.65,1.96l-0.06,0.26l0.71,3.25l-0.88,0.94l-1.85,-0.01l-2.08,-1.3l-1.14,-0.47l-0.2,-0.01l-1.69,0.51Z", "name": "Estonia"}, "EG": {"path": "M508.07,208.8l-0.66,1.06l-0.53,2.03l-0.64,1.32l-0.32,0.26l-1.74,-1.85l-1.77,-3.86l-0.48,-0.09l-0.26,0.25l-0.07,0.32l1.04,2.88l1.55,2.76l1.89,4.18l0.94,1.48l0.83,1.54l2.08,2.73l-0.3,0.28l-0.1,0.23l0.08,1.72l0.11,0.22l2.91,2.37l-28.78,0.0l0.0,-19.06l-0.73,-2.2l0.61,-1.59l0.0,-0.2l-0.34,-1.04l0.73,-1.08l3.13,-0.04l2.36,0.72l2.48,0.81l1.15,0.43l0.23,-0.01l1.93,-0.87l1.02,-0.78l2.08,-0.21l1.59,0.31l0.62,1.24l0.52,0.03l0.46,-0.71l1.86,0.59l1.95,0.16l0.17,-0.04l0.92,-0.52l1.48,4.24Z", "name": "Egypt"}, "ZA": {"path": "M467.06,373.27l-0.13,-0.29l0.01,-1.58l-0.02,-0.12l-0.71,-1.64l0.59,-0.37l0.14,-0.26l-0.07,-2.13l-0.05,-0.15l-1.63,-2.58l-1.25,-2.31l-1.71,-3.37l0.88,-0.98l0.7,0.52l0.39,1.08l0.23,0.19l1.1,0.19l1.55,0.51l0.14,0.01l1.35,-0.2l0.11,-0.04l2.24,-1.39l0.14,-0.25l0.0,-9.4l0.16,0.09l1.39,2.38l-0.22,1.53l0.04,0.19l0.56,0.94l0.3,0.14l1.79,-0.27l0.16,-0.08l1.23,-1.18l1.17,-0.79l0.1,-0.12l0.57,-1.19l1.02,-0.52l0.9,0.28l1.16,0.73l0.14,0.05l2.04,0.13l0.13,-0.02l1.6,-0.62l0.18,-0.19l0.63,-1.93l1.18,-0.19l0.19,-0.12l0.78,-1.05l0.81,-1.71l2.18,-1.91l3.44,-1.88l0.89,0.02l1.17,0.43l0.21,-0.0l0.76,-0.29l1.07,0.21l1.15,3.55l0.63,1.82l-0.44,2.9l0.1,0.52l-0.74,-0.29l-0.18,-0.01l-0.72,0.19l-0.21,0.2l-0.22,0.74l-0.66,0.97l-0.05,0.18l0.02,0.93l0.09,0.21l1.49,1.46l0.27,0.08l1.47,-0.29l0.22,-0.18l0.43,-1.01l1.29,0.02l-0.51,1.63l-0.29,2.2l-0.59,1.12l-2.2,1.78l-1.06,1.39l-0.72,1.44l-1.39,1.93l-2.81,2.84l-1.75,1.65l-1.85,1.24l-2.55,1.06l-1.23,0.14l-0.24,0.18l-0.22,0.54l-1.27,-0.35l-0.2,0.01l-1.15,0.5l-2.62,-0.52l-0.12,0.0l-1.46,0.33l-0.98,-0.14l-0.16,0.02l-2.55,1.1l-2.11,0.44l-1.59,1.07l-0.93,0.06l-0.97,-0.92l-0.19,-0.08l-0.72,-0.04l-1.0,-1.16l-0.25,0.05ZM493.72,359.24l-1.12,-0.86l-0.31,-0.03l-1.23,0.59l-1.36,1.07l-1.39,1.78l0.01,0.38l1.88,2.11l0.31,0.09l0.9,-0.27l0.18,-0.15l0.4,-0.77l1.28,-0.39l0.18,-0.16l0.42,-0.88l0.76,-1.32l-0.05,-0.37l-0.87,-0.82Z", "name": "South Africa"}, "EC": {"path": "M220.2,293.48l1.25,-1.76l0.02,-0.31l-0.54,-1.09l-0.5,-0.06l-0.78,0.94l-1.03,-0.75l0.33,-0.46l0.05,-0.23l-0.38,-2.04l0.66,-0.28l0.17,-0.19l0.45,-1.52l0.93,-1.58l0.04,-0.2l-0.13,-0.78l1.19,-0.47l1.57,-0.91l2.35,1.34l0.17,0.04l0.28,-0.02l0.52,0.91l0.21,0.15l2.12,0.35l0.2,-0.03l0.55,-0.31l1.08,0.73l0.97,0.54l0.31,1.67l-0.71,1.49l-2.64,2.54l-2.95,0.97l-0.15,0.11l-1.53,2.18l-0.49,1.68l-1.1,0.8l-0.87,-1.05l-0.15,-0.1l-1.01,-0.27l-0.13,-0.0l-0.7,0.14l-0.03,-0.43l0.6,-0.5l0.1,-0.31l-0.26,-0.91Z", "name": "Ecuador"}, "AL": {"path": "M470.27,171.7l0.38,0.19l0.45,-0.18l0.4,0.61l0.11,0.1l0.46,0.24l0.13,0.87l-0.3,0.95l-0.0,0.17l0.36,1.28l0.12,0.17l0.9,0.63l-0.03,0.44l-0.67,0.35l-0.16,0.22l-0.14,0.88l-0.96,1.18l-0.06,-0.03l-0.04,-0.48l-0.12,-0.22l-1.28,-0.92l-0.19,-1.25l0.2,-1.96l0.33,-0.89l-0.06,-0.3l-0.36,-0.41l-0.13,-0.75l0.66,-0.9Z", "name": "Albania"}, "AO": {"path": "M461.62,299.93l0.55,1.67l0.73,1.54l1.56,2.18l0.28,0.12l1.66,-0.2l0.81,-0.34l1.28,0.33l0.33,-0.14l0.39,-0.67l0.56,-1.3l1.37,-0.09l0.27,-0.21l0.07,-0.23l0.67,-0.01l-0.13,0.53l0.29,0.37l2.74,-0.02l0.04,1.29l0.03,0.13l0.46,0.87l-0.35,1.52l0.18,1.55l0.07,0.16l0.75,0.85l-0.13,2.89l0.41,0.29l0.56,-0.21l1.11,0.05l1.5,-0.37l0.9,0.12l0.18,0.53l-0.27,1.15l0.01,0.17l0.4,1.08l-0.33,0.85l-0.01,0.18l0.12,0.51l-4.83,-0.03l-0.3,0.3l-0.12,8.13l0.07,0.19l1.69,2.1l1.27,1.25l-4.03,0.92l-5.93,-0.36l-1.66,-1.19l-0.18,-0.06l-10.15,0.11l-0.34,0.13l-1.35,-1.05l-0.17,-0.06l-1.62,-0.08l-1.6,0.45l-0.88,0.36l-0.17,-1.2l0.34,-2.19l0.85,-2.32l0.14,-1.13l0.79,-2.24l0.57,-1.0l1.42,-1.64l0.82,-1.15l0.05,-0.13l0.26,-1.88l-0.13,-1.51l-0.07,-0.16l-0.72,-0.87l-1.23,-2.91l0.09,-0.37l0.73,-0.95l0.05,-0.27l-1.27,-4.12l-1.19,-1.54l0.1,-0.2l0.86,-0.28l0.78,0.03l0.83,-0.29l7.12,0.03ZM451.81,298.94l-0.17,0.07l-0.5,-1.42l0.85,-0.92l0.53,-0.29l0.48,0.44l-0.56,0.32l-0.1,0.1l-0.41,0.65l-0.05,0.14l-0.07,0.91Z", "name": "Angola"}, "KZ": {"path": "M598.42,172.08l-1.37,0.54l-3.3,2.09l-0.11,0.12l-1.01,1.97l-0.56,0.01l-0.6,-1.24l-0.26,-0.17l-2.95,-0.09l-0.46,-2.22l-0.29,-0.24l-0.91,-0.02l0.17,-2.72l-0.12,-0.26l-3.0,-2.22l-0.2,-0.06l-4.29,0.24l-2.8,0.42l-2.36,-2.7l-6.4,-3.65l-0.23,-0.03l-6.45,1.83l-0.22,0.29l0.1,10.94l-0.84,0.1l-1.65,-2.21l-0.11,-0.09l-1.69,-0.84l-0.2,-0.02l-2.84,0.63l-0.14,0.07l-0.71,0.64l-0.02,-0.11l0.57,-1.17l0.0,-0.26l-0.48,-1.05l-0.17,-0.16l-2.78,-0.99l-1.08,-2.62l-0.13,-0.15l-1.24,-0.7l-0.04,-0.48l2.07,0.25l0.34,-0.29l0.09,-2.03l1.84,-0.44l2.12,0.45l0.36,-0.25l0.45,-3.04l-0.45,-2.06l-0.31,-0.23l-2.44,0.15l-2.07,-0.75l-0.23,0.01l-2.88,1.38l-2.21,0.62l-0.96,-0.38l0.22,-1.39l-0.06,-0.23l-1.6,-2.12l-0.25,-0.12l-1.72,0.08l-1.87,-1.91l1.33,-2.24l-0.06,-0.38l-0.55,-0.5l1.72,-3.08l2.3,1.7l0.48,-0.2l0.29,-2.26l4.99,-3.48l3.76,-0.08l5.46,2.27l2.96,1.33l0.26,-0.01l2.59,-1.36l3.82,-0.06l3.13,1.67l0.38,-0.09l0.63,-0.85l3.36,0.14l0.29,-0.19l0.63,-1.57l-0.13,-0.37l-3.64,-2.05l2.0,-1.36l0.1,-0.38l-0.32,-0.62l2.09,-0.76l0.13,-0.47l-1.65,-2.13l0.89,-0.91l9.27,-1.18l0.13,-0.05l1.17,-0.82l6.2,-1.27l2.26,-1.43l4.19,0.7l0.74,3.39l0.38,0.22l2.52,-0.81l2.9,1.06l-0.18,1.63l0.32,0.33l2.52,-0.23l5.0,-2.58l0.03,0.39l3.16,2.62l5.57,8.48l0.49,0.02l1.18,-1.53l3.22,1.78l0.21,0.03l3.5,-0.83l1.21,0.52l1.16,1.82l0.15,0.12l1.67,0.61l1.01,1.32l0.28,0.11l3.04,-0.41l1.1,1.64l-1.68,1.89l-1.97,0.28l-0.26,0.29l-0.12,3.09l-1.2,1.23l-4.81,-1.01l-0.35,0.2l-1.77,5.51l-1.14,0.62l-4.92,1.23l-0.2,0.41l2.14,5.06l-1.45,0.67l-0.17,0.31l0.15,1.28l-1.05,-0.3l-1.21,-1.04l-0.17,-0.07l-3.73,-0.32l-4.15,-0.08l-0.92,0.31l-3.46,-1.24l-0.22,0.01l-1.42,0.63l-0.17,0.21l-0.32,1.49l-3.82,-0.97l-0.15,0.0l-1.65,0.43l-0.2,0.17l-0.51,1.21Z", "name": "Kazakhstan"}, "ET": {"path": "M516.0,247.63l1.21,0.92l0.3,0.04l1.3,-0.53l0.46,0.41l0.19,0.08l1.65,0.03l2.05,0.96l0.67,0.88l1.07,0.79l1.0,1.45l0.7,0.68l-0.72,0.92l-0.85,1.19l-0.04,0.25l0.19,0.67l0.04,0.74l0.29,0.28l1.4,0.04l0.55,-0.15l0.23,0.19l-0.41,0.67l0.01,0.32l0.92,1.39l0.93,1.23l0.99,0.94l0.1,0.06l8.19,2.99l1.51,0.01l-6.51,6.95l-3.14,0.11l-0.18,0.06l-2.15,1.71l-1.51,0.04l-0.22,0.1l-0.6,0.69l-1.46,-0.0l-0.93,-0.78l-0.32,-0.04l-2.29,1.05l-0.12,0.1l-0.64,0.9l-1.44,-0.17l-0.51,-0.26l-0.17,-0.03l-0.56,0.07l-0.68,-0.02l-3.1,-2.08l-0.17,-0.05l-1.62,0.0l-0.68,-0.65l0.0,-1.28l-0.21,-0.29l-1.19,-0.38l-1.42,-2.63l-0.13,-0.12l-1.05,-0.53l-0.46,-1.0l-1.27,-1.23l-0.17,-0.08l-1.08,-0.13l0.53,-0.9l1.17,-0.05l0.26,-0.17l0.37,-0.77l0.03,-0.14l-0.03,-2.23l0.7,-2.49l1.08,-0.65l0.14,-0.19l0.24,-1.0l1.03,-1.85l1.47,-1.22l0.09,-0.12l1.02,-2.51l0.36,-1.96l2.62,0.48l0.33,-0.18l0.63,-1.55Z", "name": "Ethiopia"}, "ZW": {"path": "M498.95,341.2l-1.16,-0.23l-0.16,0.01l-0.74,0.28l-1.11,-0.41l-1.02,-0.04l-1.52,-1.13l-0.12,-0.05l-1.79,-0.37l-0.65,-1.46l-0.01,-0.86l-0.22,-0.29l-0.99,-0.26l-2.74,-2.77l-0.77,-1.46l-0.52,-0.5l-0.72,-1.54l2.24,0.23l0.78,0.28l0.12,0.02l0.85,-0.06l0.21,-0.11l1.38,-1.66l2.11,-2.05l0.81,-0.18l0.22,-0.2l0.27,-0.8l1.29,-0.93l1.53,-0.28l0.11,0.66l0.3,0.25l2.02,-0.05l1.04,0.48l0.5,0.59l0.18,0.1l1.13,0.18l1.11,0.7l0.01,3.06l-0.49,1.82l-0.11,1.94l0.03,0.16l0.35,0.68l-0.24,1.3l-0.27,0.17l-0.12,0.15l-0.64,1.83l-2.49,2.8Z", "name": "Zimbabwe"}, "ES": {"path": "M398.67,172.8l0.09,-1.45l-0.06,-0.2l-0.82,-1.05l3.16,-1.96l3.01,0.54l3.33,-0.02l2.64,0.52l2.14,-0.15l3.9,0.1l0.91,1.08l0.14,0.09l4.61,1.38l0.26,-0.04l0.77,-0.55l2.66,1.29l0.17,0.03l2.59,-0.35l0.1,1.28l-2.2,1.85l-3.13,0.62l-0.23,0.23l-0.21,0.92l-1.54,1.68l-0.97,2.4l0.02,0.26l0.85,1.46l-1.27,1.14l-0.09,0.14l-0.5,1.73l-1.73,0.53l-0.15,0.1l-1.68,2.1l-3.03,0.04l-2.38,-0.05l-0.17,0.05l-1.57,1.01l-0.9,1.01l-0.96,-0.19l-0.82,-0.86l-0.69,-1.6l-0.22,-0.18l-2.14,-0.41l-0.13,-0.62l0.83,-0.97l0.39,-0.86l-0.06,-0.33l-0.73,-0.73l0.63,-1.74l-0.02,-0.25l-0.8,-1.41l0.69,-0.15l0.23,-0.27l0.09,-1.29l0.33,-0.36l0.08,-0.2l0.03,-2.16l1.03,-0.72l0.1,-0.37l-0.7,-1.5l-0.25,-0.17l-1.46,-0.11l-0.22,0.07l-0.34,0.3l-1.17,0.0l-0.55,-1.29l-0.39,-0.16l-1.02,0.44l-0.45,0.36Z", "name": "Spain"}, "ER": {"path": "M527.15,253.05l-0.77,-0.74l-1.01,-1.47l-1.14,-0.86l-0.62,-0.84l-0.11,-0.09l-2.18,-1.02l-0.12,-0.03l-1.61,-0.03l-0.52,-0.46l-0.31,-0.05l-1.31,0.54l-1.38,-1.06l-0.46,0.12l-0.69,1.68l-2.49,-0.46l-0.2,-0.76l1.06,-3.69l0.24,-1.65l0.66,-0.66l1.76,-0.4l0.16,-0.1l0.97,-1.13l1.24,2.55l0.68,2.34l0.09,0.14l1.4,1.27l3.39,2.4l1.37,1.43l2.14,2.34l0.94,0.6l-0.32,0.26l-0.85,-0.17Z", "name": "Eritrea"}, "ME": {"path": "M469.05,172.9l-0.57,-0.8l-0.1,-0.09l-0.82,-0.46l0.16,-0.33l0.35,-1.57l0.72,-0.62l0.27,-0.16l0.48,0.38l0.35,0.4l0.12,0.08l0.79,0.32l0.66,0.43l-0.43,0.62l-0.28,0.11l-0.07,-0.25l-0.53,-0.1l-1.09,1.49l-0.05,0.23l0.06,0.32Z", "name": "Montenegro"}, "MD": {"path": "M488.2,153.75l0.14,-0.11l1.49,-0.28l1.75,0.95l1.06,0.14l0.92,0.7l-0.15,0.9l0.15,0.31l0.8,0.46l0.33,1.2l0.09,0.14l0.72,0.66l-0.11,0.28l0.1,0.33l-0.06,0.02l-1.25,-0.08l-0.17,-0.29l-0.39,-0.12l-0.52,0.25l-0.16,0.36l0.13,0.42l-0.6,0.88l-0.43,1.03l-0.22,0.12l-0.32,-1.0l0.25,-1.34l-0.08,-1.38l-0.06,-0.17l-1.43,-1.87l-0.81,-1.36l-0.78,-0.95l-0.12,-0.09l-0.29,-0.12Z", "name": "Moldova"}, "MG": {"path": "M544.77,316.45l0.64,1.04l0.6,1.62l0.4,3.04l0.63,1.21l-0.22,1.07l-0.15,0.26l-0.59,-1.05l-0.52,-0.01l-0.47,0.76l-0.04,0.23l0.46,1.84l-0.19,0.92l-0.61,0.53l-0.1,0.21l-0.16,2.15l-0.97,2.98l-1.24,3.59l-1.55,4.97l-0.96,3.67l-1.08,2.93l-1.94,0.61l-2.05,1.06l-3.2,-1.53l-0.62,-1.26l-0.18,-2.39l-0.87,-2.07l-0.22,-1.8l0.4,-1.69l1.01,-0.4l0.19,-0.28l0.01,-0.79l1.15,-1.91l0.04,-0.11l0.23,-1.66l-0.03,-0.17l-0.57,-1.21l-0.46,-1.58l-0.19,-2.25l0.82,-1.36l0.33,-1.51l1.11,-0.1l1.4,-0.53l0.9,-0.45l1.03,-0.03l0.21,-0.09l1.41,-1.45l2.12,-1.65l0.75,-1.29l0.03,-0.24l-0.17,-0.56l0.53,0.15l0.32,-0.1l1.38,-1.77l0.06,-0.18l0.04,-1.44l0.54,-0.74l0.62,0.77Z", "name": "Madagascar"}, "MA": {"path": "M378.66,230.13l0.07,-0.75l0.93,-0.72l0.82,-1.37l0.04,-0.21l-0.14,-0.8l0.8,-1.74l1.33,-1.61l0.79,-0.4l0.14,-0.15l0.66,-1.55l0.08,-1.46l0.83,-1.52l1.6,-0.94l0.11,-0.11l1.56,-2.71l1.2,-0.99l2.24,-0.29l0.17,-0.08l1.95,-1.83l1.3,-0.77l2.09,-2.28l0.07,-0.26l-0.61,-3.34l0.92,-2.3l0.33,-1.44l1.52,-1.79l2.48,-1.27l1.86,-1.16l0.1,-0.11l1.67,-2.93l0.72,-1.59l1.54,0.01l1.43,1.14l0.21,0.06l2.33,-0.19l2.55,0.62l0.97,0.03l0.83,1.6l0.15,1.71l0.86,2.96l0.09,0.14l0.5,0.45l-0.31,0.73l-3.11,0.44l-0.16,0.07l-1.07,0.97l-1.36,0.23l-0.25,0.28l-0.1,1.85l-2.74,1.02l-0.14,0.11l-0.9,1.3l-1.93,0.69l-2.56,0.44l-4.04,2.01l-0.17,0.27l0.02,2.91l-0.08,0.0l-0.3,0.31l0.05,1.15l-1.25,0.07l-0.16,0.06l-0.73,0.55l-0.98,0.0l-0.85,-0.33l-0.15,-0.02l-2.11,0.29l-0.24,0.19l-0.76,1.95l-0.63,0.16l-0.21,0.19l-1.15,3.29l-3.42,2.81l-0.1,0.17l-0.81,3.57l-0.98,1.12l-0.3,0.85l-5.13,0.19Z", "name": "Morocco"}, "UZ": {"path": "M587.83,186.48l0.06,-1.46l-0.19,-0.29l-3.31,-1.24l-2.57,-1.4l-1.63,-1.38l-2.79,-1.98l-1.2,-2.98l-0.12,-0.14l-0.84,-0.54l-0.18,-0.05l-2.61,0.13l-0.76,-0.48l-0.25,-2.25l-0.17,-0.24l-3.37,-1.6l-0.32,0.04l-2.08,1.73l-2.11,1.02l-0.16,0.35l0.31,1.14l-2.14,0.03l-0.09,-10.68l6.1,-1.74l6.25,3.57l2.36,2.72l0.27,0.1l2.92,-0.44l4.17,-0.23l2.78,2.06l-0.18,2.87l0.29,0.32l0.98,0.02l0.46,2.22l0.28,0.24l3.0,0.09l0.61,1.25l0.28,0.17l0.93,-0.02l0.26,-0.16l1.06,-2.06l3.21,-2.03l1.3,-0.5l0.19,0.08l-1.75,1.62l0.05,0.48l1.85,1.12l0.27,0.02l1.65,-0.69l2.4,1.27l-2.69,1.79l-1.79,-0.27l-0.89,0.06l-0.22,-0.52l0.48,-1.26l-0.34,-0.4l-3.35,0.69l-0.22,0.18l-0.78,1.87l-1.07,1.47l-1.93,-0.13l-0.29,0.16l-0.65,1.29l0.16,0.42l1.69,0.64l0.48,1.91l-1.25,2.6l-1.64,-0.53l-1.18,-0.03Z", "name": "Uzbekistan"}, "MM": {"path": "M670.1,233.39l-1.46,1.11l-1.68,0.11l-0.26,0.19l-1.1,2.7l-0.95,0.42l-0.14,0.42l1.21,2.27l1.61,1.92l0.94,1.55l-0.82,1.99l-0.77,0.42l-0.13,0.39l0.64,1.35l1.62,1.97l0.26,1.32l-0.04,1.15l0.02,0.13l0.92,2.18l-1.3,2.23l-0.79,1.69l-0.1,-0.77l0.74,-1.87l-0.02,-0.26l-0.8,-1.42l0.2,-2.68l-0.06,-0.2l-0.98,-1.27l-0.8,-2.98l-0.45,-3.22l-1.11,-2.22l-0.45,-0.1l-1.64,1.28l-2.74,1.76l-1.26,-0.2l-1.27,-0.49l0.79,-2.93l0.0,-0.14l-0.52,-2.42l-1.93,-2.97l0.26,-0.8l-0.22,-0.39l-1.37,-0.31l-1.65,-1.98l-0.12,-1.5l0.41,0.19l0.42,-0.26l0.05,-1.7l1.08,-0.54l0.16,-0.34l-0.24,-1.0l0.5,-0.79l0.05,-0.15l0.08,-2.35l1.58,0.49l0.36,-0.15l1.12,-2.19l0.15,-1.34l1.35,-2.18l0.04,-0.17l-0.07,-1.35l2.97,-1.71l1.67,0.45l0.38,-0.33l-0.18,-1.46l0.7,-0.4l0.15,-0.32l-0.13,-0.72l0.94,-0.13l0.74,1.41l0.11,0.12l0.95,0.56l0.07,1.89l-0.09,2.08l-2.28,2.15l-0.09,0.19l-0.3,3.15l0.35,0.32l2.37,-0.39l0.53,2.17l0.2,0.21l1.3,0.42l-0.63,1.9l0.14,0.36l1.86,0.99l1.1,0.49l0.24,0.0l1.45,-0.6l0.04,0.51l-2.01,1.6l-0.56,0.96l-1.34,0.56Z", "name": "Myanmar"}, "ML": {"path": "M390.79,248.2l0.67,-0.37l0.14,-0.18l0.36,-1.31l0.51,-0.04l1.68,0.69l0.21,0.0l1.34,-0.48l0.89,0.16l0.3,-0.13l0.29,-0.44l9.89,-0.04l0.29,-0.21l0.56,-1.8l-0.11,-0.33l-0.33,-0.24l-2.37,-22.1l3.41,-0.04l8.37,5.73l8.38,5.68l0.56,1.15l0.14,0.14l1.56,0.75l0.99,0.36l0.03,1.45l0.33,0.29l2.45,-0.22l0.01,5.52l-1.3,1.64l-0.06,0.15l-0.18,1.37l-1.99,0.36l-3.4,0.22l-0.19,0.09l-0.85,0.83l-1.48,0.09l-1.49,0.01l-0.54,-0.43l-0.26,-0.05l-1.38,0.36l-2.39,1.08l-0.13,0.12l-0.44,0.73l-1.88,1.11l-0.11,0.12l-0.3,0.57l-0.86,0.42l-1.1,-0.31l-0.28,0.07l-0.69,0.62l-0.09,0.16l-0.35,1.66l-1.93,2.04l-0.08,0.23l0.05,0.76l-0.63,0.99l-0.04,0.19l0.14,1.23l-0.81,0.29l-0.32,0.17l-0.27,-0.75l-0.39,-0.18l-0.65,0.26l-0.36,-0.04l-0.29,0.14l-0.37,0.6l-1.69,-0.02l-0.63,-0.34l-0.32,0.02l-0.12,0.09l-0.47,-0.45l0.1,-0.6l-0.09,-0.27l-0.31,-0.3l-0.33,-0.05l-0.05,0.02l0.02,-0.21l0.46,-0.59l-0.02,-0.39l-0.99,-1.02l-0.34,-0.74l-0.56,-0.56l-0.17,-0.09l-0.5,-0.07l-0.19,0.04l-0.58,0.35l-0.79,0.33l-0.65,0.51l-0.85,-0.16l-0.63,-0.59l-0.14,-0.07l-0.41,-0.08l-0.2,0.03l-0.59,0.31l-0.07,0.0l-0.1,-0.63l0.11,-0.85l-0.21,-0.98l-0.11,-0.17l-0.86,-0.66l-0.45,-1.34l-0.1,-1.36Z", "name": "Mali"}, "MN": {"path": "M641.06,150.59l2.41,-0.53l4.76,-2.8l3.67,-1.49l2.06,0.96l0.12,0.03l2.5,0.05l1.59,1.45l0.19,0.08l2.47,0.12l3.59,0.81l0.27,-0.07l2.43,-2.28l0.06,-0.36l-0.93,-1.77l2.33,-3.1l2.66,1.3l2.26,0.39l2.75,0.8l0.44,2.3l0.19,0.22l3.56,1.38l0.18,0.01l2.35,-0.6l3.1,-0.42l2.4,0.41l2.37,1.52l1.49,1.63l0.23,0.1l2.29,-0.03l3.13,0.52l0.15,-0.01l2.28,-0.79l3.27,-0.53l0.11,-0.04l3.56,-2.23l1.31,0.31l1.26,1.05l0.22,0.07l2.45,-0.22l-0.98,1.96l-1.77,3.21l-0.01,0.28l0.64,1.31l0.35,0.16l1.35,-0.38l2.4,0.48l0.22,-0.04l1.78,-1.09l1.82,0.92l2.11,2.07l-0.17,0.68l-1.79,-0.31l-3.74,0.45l-1.85,0.96l-1.78,2.01l-3.74,1.18l-2.46,1.61l-2.45,-0.6l-1.42,-0.28l-0.31,0.13l-1.31,1.99l0.0,0.33l0.78,1.15l0.3,0.74l-1.58,0.93l-1.75,1.59l-2.83,1.03l-3.77,0.12l-4.05,1.05l-2.81,1.54l-0.95,-0.8l-0.19,-0.07l-2.96,0.0l-3.64,-1.8l-2.55,-0.48l-3.38,0.41l-5.13,-0.67l-2.66,0.06l-1.35,-1.65l-1.12,-2.78l-0.21,-0.18l-1.5,-0.33l-2.98,-1.89l-0.12,-0.04l-3.37,-0.43l-2.84,-0.51l-0.75,-1.13l0.93,-3.54l-0.04,-0.24l-1.73,-2.55l-0.15,-0.12l-3.52,-1.18l-1.99,-1.61l-0.54,-1.85Z", "name": "Mongolia"}, "MK": {"path": "M472.73,173.87l0.08,0.01l0.32,-0.25l0.08,-0.44l1.29,-0.41l1.37,-0.28l1.03,-0.04l1.06,0.82l0.14,1.59l-0.22,0.04l-0.17,0.11l-0.32,0.4l-1.2,-0.05l-0.18,0.05l-0.9,0.61l-1.45,0.23l-0.85,-0.59l-0.3,-1.09l0.22,-0.71Z", "name": "Macedonia"}, "MW": {"path": "M507.18,313.84l-0.67,1.85l-0.01,0.16l0.7,3.31l0.31,0.24l0.75,-0.03l0.78,0.71l0.99,1.75l0.2,3.03l-0.91,0.45l-0.14,0.15l-0.59,1.38l-1.24,-1.21l-0.17,-1.62l0.49,-1.12l0.02,-0.16l-0.15,-1.03l-0.13,-0.21l-0.99,-0.65l-0.26,-0.03l-0.53,0.18l-1.31,-1.12l-1.15,-0.59l0.66,-2.06l0.75,-0.84l0.07,-0.27l-0.47,-2.04l0.48,-1.94l0.4,-0.65l0.03,-0.24l-0.64,-2.15l-0.08,-0.13l-0.44,-0.42l1.34,0.26l1.25,1.73l0.67,3.3Z", "name": "Malawi"}, "MR": {"path": "M390.54,247.66l-1.48,-1.58l-1.51,-1.88l-0.12,-0.09l-1.64,-0.67l-1.17,-0.74l-0.17,-0.05l-1.4,0.03l-0.12,0.03l-1.14,0.52l-1.15,-0.21l-0.26,0.08l-0.44,0.43l-0.11,-0.72l0.68,-1.29l0.31,-2.43l-0.28,-2.63l-0.29,-1.27l0.24,-1.24l-0.03,-0.2l-0.65,-1.24l-1.19,-1.05l0.32,-0.51l9.64,0.02l0.3,-0.34l-0.46,-3.71l0.51,-1.12l2.17,-0.22l0.27,-0.3l-0.08,-6.5l7.91,0.13l0.31,-0.3l0.01,-3.5l8.17,5.63l-2.89,0.04l-0.29,0.33l2.42,22.56l0.12,0.21l0.26,0.19l-0.43,1.38l-9.83,0.04l-0.25,0.13l-0.27,0.41l-0.77,-0.14l-0.15,0.01l-1.3,0.47l-1.64,-0.67l-0.14,-0.02l-0.79,0.06l-0.27,0.22l-0.39,1.39l-0.53,0.29Z", "name": "Mauritania"}, "UG": {"path": "M500.74,287.17l-2.84,-0.02l-0.92,0.32l-1.37,0.71l-0.29,-0.12l0.02,-1.6l0.54,-0.89l0.04,-0.13l0.14,-1.96l0.49,-1.09l0.91,-1.24l0.97,-0.68l0.8,-0.89l-0.13,-0.49l-0.79,-0.27l0.13,-2.55l0.78,-0.52l1.45,0.51l0.18,0.01l1.97,-0.57l1.72,0.01l0.18,-0.06l1.29,-0.97l0.98,1.44l0.29,1.24l1.05,2.75l-0.84,1.68l-1.94,2.66l-0.06,0.18l0.02,2.36l-4.8,0.18Z", "name": "Uganda"}, "MY": {"path": "M717.6,273.52l-1.51,0.7l-2.13,-0.41l-2.88,-0.0l-0.29,0.21l-0.84,2.77l-0.9,0.82l-0.08,0.12l-1.23,3.34l-1.81,0.47l-2.29,-0.68l-0.14,-0.01l-1.2,0.22l-0.14,0.07l-1.36,1.18l-1.47,-0.17l-0.12,0.01l-1.46,0.46l-1.51,-1.25l-0.24,-0.97l1.26,0.59l0.2,0.02l1.93,-0.47l0.22,-0.22l0.47,-1.98l0.9,-0.4l2.97,-0.54l0.17,-0.09l1.8,-1.98l1.02,-1.32l0.9,1.03l0.48,-0.04l0.43,-0.7l1.02,0.07l0.32,-0.27l0.25,-2.72l1.84,-1.67l1.23,-1.89l0.73,-0.01l1.12,1.11l0.1,0.99l0.18,0.24l1.66,0.71l1.85,0.67l-0.09,0.51l-1.45,0.11l-0.26,0.4l0.35,0.97ZM673.78,269.53l0.17,1.14l0.35,0.25l1.65,-0.3l0.18,-0.11l0.68,-0.86l0.31,0.13l1.41,1.45l0.99,1.59l0.13,1.57l-0.26,1.09l0.0,0.15l0.24,0.84l0.18,1.46l0.11,0.2l0.82,0.64l0.92,2.08l-0.03,0.52l-1.4,0.13l-2.29,-1.79l-2.86,-1.92l-0.27,-1.16l-0.07,-0.13l-1.39,-1.61l-0.33,-1.99l-0.05,-0.12l-0.84,-1.27l0.26,-1.72l-0.03,-0.18l-0.45,-0.87l0.13,-0.13l1.71,0.92Z", "name": "Malaysia"}, "MX": {"path": "M133.41,213.83l0.61,0.09l0.27,-0.09l0.93,-1.01l0.08,-0.18l0.09,-1.22l-0.09,-0.23l-1.93,-1.94l-1.46,-0.77l-2.96,-5.62l-0.86,-2.1l2.44,-0.18l2.68,-0.25l-0.03,0.08l0.17,0.4l3.79,1.35l5.81,1.97l6.96,-0.02l0.3,-0.3l0.0,-0.84l3.91,0.0l0.87,0.93l1.27,0.87l1.44,1.17l0.79,1.37l0.62,1.49l0.12,0.14l1.35,0.85l2.08,0.82l0.35,-0.1l1.49,-2.04l1.81,-0.05l1.63,1.01l1.21,1.8l0.86,1.58l1.47,1.55l0.53,1.82l0.73,1.32l0.14,0.13l1.98,0.84l1.78,0.59l0.61,-0.03l-0.78,1.89l-0.45,1.96l-0.19,3.58l-0.24,1.27l0.01,0.14l0.43,1.43l0.78,1.31l0.49,1.98l0.06,0.12l1.63,1.9l0.61,1.51l0.98,1.28l0.16,0.11l2.58,0.67l0.98,1.02l0.31,0.08l2.17,-0.71l1.91,-0.26l1.87,-0.47l1.67,-0.49l1.59,-1.06l0.11,-0.14l0.6,-1.52l0.22,-2.21l0.35,-0.62l1.58,-0.64l2.59,-0.59l2.18,0.09l1.43,-0.2l0.39,0.36l-0.07,1.02l-1.28,1.48l-0.65,1.68l0.07,0.32l0.33,0.32l-0.79,2.49l-0.28,-0.3l-0.24,-0.09l-1.0,0.08l-0.24,0.15l-0.74,1.28l-0.19,-0.13l-0.28,-0.03l-0.3,0.12l-0.19,0.29l0.0,0.06l-4.34,-0.02l-0.3,0.3l-0.0,1.16l-0.83,0.0l-0.28,0.19l0.08,0.33l0.93,0.86l0.9,0.58l0.24,0.48l0.16,0.15l0.2,0.08l-0.03,0.38l-2.94,0.01l-0.26,0.15l-1.21,2.09l0.02,0.33l0.25,0.33l-0.21,0.44l-0.04,0.22l-2.42,-2.35l-1.36,-0.87l-2.04,-0.67l-0.13,-0.01l-1.4,0.19l-2.07,0.98l-1.14,0.23l-1.72,-0.66l-1.85,-0.48l-2.31,-1.16l-1.92,-0.38l-2.79,-1.18l-2.04,-1.2l-0.6,-0.66l-0.19,-0.1l-1.37,-0.15l-2.45,-0.78l-1.07,-1.18l-2.63,-1.44l-1.2,-1.56l-0.44,-0.93l0.5,-0.15l0.2,-0.39l-0.2,-0.58l0.46,-0.55l0.07,-0.19l0.01,-0.91l-0.06,-0.18l-0.81,-1.13l-0.25,-1.08l-0.86,-1.36l-2.21,-2.63l-2.53,-2.09l-1.2,-1.63l-0.11,-0.09l-2.08,-1.06l-0.34,-0.48l0.35,-1.53l-0.16,-0.34l-1.24,-0.61l-1.39,-1.23l-0.6,-1.81l-0.24,-0.2l-1.25,-0.2l-1.38,-1.35l-1.11,-1.25l-0.1,-0.76l-0.05,-0.13l-1.33,-2.04l-0.85,-2.02l0.04,-0.99l-0.14,-0.27l-1.81,-1.1l-0.2,-0.04l-0.74,0.11l-1.34,-0.72l-0.42,0.16l-0.4,1.12l-0.0,0.19l0.41,1.3l0.24,2.04l0.06,0.15l0.88,1.16l1.84,1.86l0.4,0.61l0.12,0.1l0.27,0.14l0.29,0.82l0.31,0.2l0.2,-0.02l0.43,1.51l0.09,0.14l0.72,0.65l0.51,0.91l1.58,1.4l0.8,2.42l0.77,1.23l0.66,1.19l0.13,1.34l0.28,0.27l1.08,0.08l0.92,1.1l0.83,1.08l-0.03,0.24l-0.88,0.81l-0.13,-0.0l-0.59,-1.42l-0.07,-0.11l-1.67,-1.53l-1.81,-1.28l-1.15,-0.61l0.07,-1.85l-0.38,-1.45l-0.12,-0.17l-2.91,-2.03l-0.39,0.04l-0.11,0.11l-0.42,-0.46l-0.11,-0.08l-1.49,-0.63l-1.09,-1.16Z", "name": "Mexico"}, "VU": {"path": "M839.92,325.66l0.78,0.73l-0.18,0.07l-0.6,-0.8ZM839.13,322.74l0.27,1.36l-0.13,-0.06l-0.21,-0.02l-0.29,0.08l-0.22,-0.43l-0.03,-1.32l0.61,0.4Z", "name": "Vanuatu"}, "FR": {"path": "M444.58,172.63l-0.68,1.92l-0.72,-0.38l-0.51,-1.79l0.43,-0.95l1.15,-0.83l0.33,2.04ZM429.71,147.03l1.77,1.57l0.26,0.07l1.16,-0.23l2.12,1.44l0.56,0.28l0.16,0.03l0.61,-0.06l1.09,0.78l0.13,0.05l3.18,0.53l-1.09,1.94l-0.3,2.16l-0.48,0.38l-1.0,-0.26l-0.37,0.32l0.07,0.66l-1.73,1.68l-0.09,0.21l-0.04,1.42l0.41,0.29l0.96,-0.4l0.67,1.07l-0.09,0.78l0.04,0.19l0.61,0.97l-0.71,0.78l-0.07,0.28l0.65,2.39l0.21,0.21l1.09,0.31l-0.2,0.95l-2.08,1.58l-4.81,-0.8l-0.13,0.01l-3.65,0.99l-0.22,0.24l-0.25,1.6l-2.59,0.35l-2.74,-1.33l-0.31,0.03l-0.79,0.57l-4.38,-1.31l-0.79,-0.94l1.16,-1.64l0.05,-0.15l0.48,-6.17l-0.06,-0.21l-2.58,-3.3l-1.89,-1.65l-0.11,-0.06l-3.64,-1.17l-0.2,-1.88l2.92,-0.63l4.14,0.82l0.35,-0.36l-0.65,-3.0l1.77,1.05l0.27,0.02l5.83,-2.54l0.17,-0.19l0.71,-2.54l1.75,-0.53l0.27,0.88l0.27,0.21l1.04,0.05l1.08,1.23ZM289.1,278.45l-0.85,0.84l-0.88,0.13l-0.25,-0.51l-0.21,-0.16l-0.56,-0.1l-0.25,0.07l-0.63,0.55l-0.62,-0.29l0.5,-0.88l0.21,-1.11l0.42,-1.05l-0.03,-0.28l-0.93,-1.42l-0.18,-1.54l1.13,-1.87l2.42,0.78l2.55,2.04l0.33,0.81l-1.4,2.16l-0.77,1.84Z", "name": "France"}, "FI": {"path": "M492.26,76.42l-0.38,3.12l0.12,0.28l3.6,2.69l-2.14,2.96l-0.01,0.33l2.83,4.61l-1.61,3.36l0.03,0.31l2.15,2.87l-0.96,2.44l0.1,0.35l3.51,2.55l-0.81,1.72l-2.28,2.19l-5.28,4.79l-4.51,0.31l-4.39,1.37l-3.87,0.75l-1.34,-1.89l-0.11,-0.09l-2.23,-1.14l0.53,-3.54l-0.01,-0.14l-1.17,-3.37l1.12,-2.13l2.23,-2.44l5.69,-4.33l1.65,-0.84l0.16,-0.31l-0.26,-1.73l-0.15,-0.22l-3.4,-1.91l-0.77,-1.47l-0.07,-6.45l-0.12,-0.24l-3.91,-2.94l-3.0,-1.92l0.97,-0.76l2.6,2.17l0.21,0.07l3.2,-0.21l2.63,1.03l0.3,-0.05l2.39,-1.94l0.09,-0.13l1.18,-3.12l3.63,-1.42l2.87,1.59l-0.98,2.87Z", "name": "Finland"}, "FJ": {"path": "M869.98,327.07l-1.31,0.44l-0.14,-0.41l0.96,-0.41l0.85,-0.17l1.43,-0.78l-0.16,0.65l-1.64,0.67ZM867.58,329.12l0.54,0.47l-0.31,1.0l-1.32,0.3l-1.13,-0.26l-0.17,-0.78l0.72,-0.66l0.98,0.27l0.25,-0.04l0.43,-0.29Z", "name": "Fiji"}, "FK": {"path": "M268.15,427.89l2.6,-1.73l1.98,0.77l0.31,-0.05l1.32,-1.17l1.58,1.18l-0.54,0.84l-3.1,0.92l-1.0,-1.04l-0.39,-0.04l-1.9,1.35l-0.86,-1.04Z", "name": "Falkland Islands"}, "NI": {"path": "M202.1,252.6l0.23,-0.0l0.12,-0.11l0.68,-0.09l0.22,-0.15l0.23,-0.43l0.2,-0.01l0.28,-0.31l-0.04,-0.97l0.29,-0.03l0.5,0.02l0.25,-0.11l0.37,-0.46l0.51,0.35l0.4,-0.06l0.23,-0.28l0.45,-0.29l0.87,-0.7l0.11,-0.21l0.02,-0.26l0.23,-0.12l0.25,-0.48l0.29,0.27l0.14,0.07l0.5,0.12l0.22,-0.03l0.48,-0.28l0.66,-0.02l0.87,-0.33l0.36,-0.32l0.21,0.01l-0.11,0.48l0.0,0.14l0.22,0.8l-0.54,0.85l-0.27,1.03l-0.09,1.18l0.14,0.72l0.05,0.95l-0.24,0.15l-0.13,0.19l-0.23,1.09l0.0,0.14l0.14,0.53l-0.42,0.53l-0.06,0.24l0.12,0.69l0.08,0.15l0.18,0.19l-0.26,0.23l-0.49,-0.11l-0.35,-0.44l-0.16,-0.1l-0.79,-0.21l-0.23,0.03l-0.45,0.26l-1.51,-0.62l-0.31,0.05l-0.17,0.15l-1.81,-1.62l-0.6,-0.9l-1.04,-0.79l-0.77,-0.71Z", "name": "Nicaragua"}, "NL": {"path": "M436.22,136.65l1.82,0.08l0.36,0.89l-0.6,2.96l-0.53,1.06l-1.32,0.0l-0.3,0.34l0.35,2.89l-0.83,-0.47l-1.56,-1.43l-0.29,-0.07l-2.26,0.67l-1.02,-0.15l0.68,-0.48l0.1,-0.12l2.14,-4.84l3.25,-1.35Z", "name": "Netherlands"}, "NO": {"path": "M491.45,67.31l7.06,3.0l-2.52,0.94l-0.11,0.49l2.43,2.49l-3.82,1.59l-1.48,0.3l0.89,-2.61l-0.14,-0.36l-3.21,-1.78l-0.25,-0.02l-3.89,1.52l-0.17,0.17l-1.2,3.17l-2.19,1.78l-2.53,-0.99l-0.13,-0.02l-3.15,0.21l-2.69,-2.25l-0.38,-0.01l-1.43,1.11l-1.47,0.17l-0.26,0.26l-0.33,2.57l-4.42,-0.65l-0.33,0.22l-0.6,2.19l-2.17,-0.01l-0.27,0.16l-4.15,7.68l-3.88,5.76l-0.0,0.33l0.81,1.23l-0.7,1.27l-2.3,-0.06l-0.28,0.18l-1.63,3.72l-0.02,0.13l0.15,5.17l0.07,0.18l1.51,1.84l-0.79,4.24l-2.04,2.5l-0.92,1.75l-1.39,-1.88l-0.44,-0.05l-4.89,4.21l-3.16,0.81l-3.24,-1.74l-0.86,-3.82l-0.78,-8.6l2.18,-2.36l6.56,-3.28l5.0,-4.16l4.63,-5.74l5.99,-8.09l4.17,-3.23l6.84,-5.49l5.39,-1.92l4.06,0.24l0.23,-0.09l3.72,-3.67l4.51,0.19l4.4,-0.89ZM484.58,19.95l4.42,1.82l-3.25,2.68l-7.14,0.65l-7.16,-0.91l-0.39,-1.37l-0.28,-0.22l-3.48,-0.1l-2.25,-2.15l7.09,-1.48l3.55,1.36l0.28,-0.03l2.42,-1.66l6.18,1.41ZM481.99,33.92l-4.73,1.85l-3.76,-1.06l1.27,-1.02l0.04,-0.43l-1.18,-1.35l4.46,-0.94l0.89,1.83l0.17,0.15l2.83,0.96ZM466.5,23.95l7.64,3.87l-5.63,1.94l-0.19,0.19l-1.35,3.88l-2.08,0.96l-0.16,0.19l-1.14,4.18l-2.71,0.18l-4.94,-2.95l1.95,-1.63l-0.08,-0.51l-3.7,-1.54l-4.79,-4.54l-1.78,-4.01l6.29,-1.88l1.25,1.81l0.25,0.13l3.57,-0.08l0.26,-0.17l0.87,-1.79l3.41,-0.18l3.08,1.94Z", "name": "Norway"}, "NA": {"path": "M461.88,357.98l-1.61,-1.77l-0.94,-1.9l-0.54,-2.58l-0.62,-1.95l-0.83,-4.05l-0.06,-3.13l-0.33,-1.5l-0.07,-0.14l-0.95,-1.06l-1.27,-2.12l-1.3,-3.1l-0.59,-1.71l-1.98,-2.46l-0.13,-1.67l0.99,-0.4l1.44,-0.42l1.48,0.07l1.42,1.11l0.31,0.03l0.32,-0.15l9.99,-0.11l1.66,1.18l0.16,0.06l6.06,0.37l4.69,-1.06l2.01,-0.57l1.5,0.14l0.63,0.37l-1.0,0.41l-0.7,0.01l-0.16,0.05l-1.38,0.88l-0.79,-0.88l-0.29,-0.09l-3.83,0.9l-1.84,0.08l-0.29,0.3l-0.07,8.99l-2.18,0.08l-0.29,0.3l-0.0,17.47l-2.04,1.27l-1.21,0.18l-1.51,-0.49l-0.99,-0.18l-0.36,-1.0l-0.1,-0.14l-0.99,-0.74l-0.4,0.04l-0.98,1.09Z", "name": "Namibia"}, "NC": {"path": "M835.87,338.68l2.06,1.63l1.01,0.94l-0.49,0.32l-1.21,-0.62l-1.76,-1.16l-1.58,-1.36l-1.61,-1.79l-0.16,-0.41l0.54,0.02l1.32,0.83l1.08,0.87l0.79,0.73Z", "name": "New Caledonia"}, "NE": {"path": "M426.67,254.17l0.03,-1.04l-0.24,-0.3l-2.66,-0.53l-0.06,-1.0l-0.07,-0.17l-1.37,-1.62l-0.3,-1.04l0.15,-0.94l1.37,-0.09l0.19,-0.09l0.85,-0.83l3.34,-0.22l2.22,-0.41l0.24,-0.26l0.2,-1.5l1.32,-1.65l0.07,-0.19l-0.01,-5.74l3.4,-1.13l7.24,-5.12l8.46,-4.95l3.76,1.08l1.35,1.39l0.36,0.05l1.39,-0.77l0.55,3.66l0.12,0.2l0.82,0.6l0.03,0.69l0.1,0.21l0.87,0.74l-0.47,0.99l-0.96,5.26l-0.13,3.25l-3.08,2.34l-0.1,0.15l-1.08,3.37l0.08,0.31l0.94,0.86l-0.01,1.51l0.29,0.3l1.25,0.05l-0.14,0.66l-0.51,0.11l-0.24,0.26l-0.06,0.57l-0.04,0.0l-1.59,-2.62l-0.21,-0.14l-0.59,-0.1l-0.23,0.05l-1.83,1.33l-1.79,-0.68l-1.42,-0.17l-0.17,0.03l-0.65,0.32l-1.39,-0.07l-0.19,0.06l-1.4,1.03l-1.12,0.05l-2.97,-1.29l-0.26,0.01l-1.12,0.59l-1.08,-0.04l-0.85,-0.88l-0.11,-0.07l-2.51,-0.95l-0.14,-0.02l-2.69,0.3l-0.16,0.07l-0.65,0.55l-0.1,0.16l-0.34,1.41l-0.69,0.98l-0.05,0.15l-0.13,1.72l-1.47,-1.13l-0.18,-0.06l-0.9,0.01l-0.2,0.08l-0.32,0.28Z", "name": "Niger"}, "NG": {"path": "M442.0,272.7l-2.4,0.83l-0.88,-0.12l-0.19,0.04l-0.89,0.52l-1.78,-0.05l-1.23,-1.44l-0.88,-1.87l-1.77,-1.66l-0.21,-0.08l-3.78,0.03l0.13,-3.75l-0.06,-1.58l0.44,-1.47l0.74,-0.75l1.21,-1.56l0.04,-0.29l-0.22,-0.56l0.44,-0.9l0.01,-0.24l-0.54,-1.44l0.26,-2.97l0.72,-1.06l0.33,-1.37l0.51,-0.43l2.53,-0.28l2.38,0.9l0.89,0.91l0.2,0.09l1.28,0.04l0.15,-0.03l1.06,-0.56l2.9,1.26l0.13,0.02l1.28,-0.06l0.16,-0.06l1.39,-1.02l1.36,0.07l0.15,-0.03l0.64,-0.32l1.22,0.13l1.9,0.73l0.28,-0.04l1.86,-1.35l0.33,0.06l1.62,2.67l0.29,0.14l0.32,-0.04l0.73,0.74l-0.19,0.37l-0.12,0.74l-2.03,1.89l-0.07,0.11l-0.66,1.62l-0.35,1.28l-0.48,0.51l-0.07,0.12l-0.48,1.67l-1.26,0.98l-0.1,0.15l-0.38,1.24l-0.58,1.07l-0.2,0.91l-1.43,0.7l-1.26,-0.93l-0.19,-0.06l-0.95,0.04l-0.2,0.09l-1.41,1.39l-0.61,0.02l-0.26,0.17l-1.19,2.42l-0.61,1.67Z", "name": "Nigeria"}, "NZ": {"path": "M857.9,379.62l1.85,3.1l0.33,0.14l0.22,-0.28l0.04,-1.41l0.57,0.4l0.35,2.06l0.17,0.22l2.02,0.94l1.78,0.26l0.22,-0.06l1.31,-1.01l0.84,0.22l-0.53,2.27l-0.67,1.5l-1.71,-0.05l-0.25,0.12l-0.67,0.89l-0.05,0.23l0.21,1.15l-0.31,0.46l-2.15,3.57l-1.6,0.99l-0.28,-0.51l-0.15,-0.13l-0.72,-0.3l1.27,-2.15l0.01,-0.29l-0.82,-1.63l-0.15,-0.14l-2.5,-1.09l0.05,-0.69l1.67,-0.94l0.15,-0.21l0.42,-2.24l-0.11,-1.95l-0.03,-0.12l-0.97,-1.85l0.05,-0.41l-0.09,-0.25l-1.18,-1.17l-1.94,-2.49l-0.86,-1.64l0.38,-0.09l1.24,1.43l0.12,0.08l1.81,0.68l0.67,2.39ZM853.93,393.55l0.57,1.24l0.44,0.12l1.51,-1.03l0.52,0.91l0.0,1.09l-0.88,1.31l-1.62,2.2l-1.26,1.2l-0.05,0.38l0.64,1.02l-1.4,0.03l-0.14,0.04l-2.14,1.16l-0.14,0.17l-0.67,2.0l-1.38,3.06l-3.07,2.19l-2.12,-0.06l-1.55,-0.99l-0.14,-0.05l-2.53,-0.2l-0.31,-0.84l1.25,-2.15l3.07,-2.97l1.62,-0.59l1.81,-1.17l2.18,-1.63l1.55,-1.65l1.08,-2.18l0.9,-0.72l0.11,-0.17l0.35,-1.56l1.37,-1.07l0.4,0.91Z", "name": "New Zealand"}, "NP": {"path": "M641.26,213.53l-0.14,0.95l0.32,1.64l-0.21,0.78l-1.83,0.04l-2.98,-0.62l-1.86,-0.25l-1.37,-1.3l-0.18,-0.08l-3.38,-0.34l-3.21,-1.49l-2.38,-1.34l-2.16,-0.92l0.84,-2.2l1.51,-1.18l0.89,-0.57l1.83,0.77l2.5,1.76l1.39,0.41l0.78,1.21l0.17,0.13l1.91,0.53l2.0,1.17l2.92,0.66l2.63,0.24Z", "name": "Nepal"}, "CI": {"path": "M413.53,272.08l-0.83,0.02l-1.79,-0.49l-1.64,0.03l-3.04,0.46l-1.73,0.72l-2.4,0.89l-0.12,-0.02l0.16,-1.7l0.19,-0.25l0.06,-0.2l-0.08,-0.99l-0.09,-0.19l-1.06,-1.05l-0.15,-0.08l-0.71,-0.15l-0.51,-0.48l0.45,-0.92l0.02,-0.19l-0.24,-1.16l0.07,-0.43l0.14,-0.0l0.3,-0.26l0.15,-1.1l-0.02,-0.15l-0.13,-0.34l0.09,-0.13l0.83,-0.27l0.19,-0.37l-0.62,-2.02l-0.55,-1.0l0.14,-0.59l0.35,-0.14l0.24,-0.16l0.53,0.29l0.14,0.04l1.93,0.02l0.26,-0.14l0.36,-0.58l0.39,0.01l0.43,-0.17l0.28,0.79l0.43,0.16l0.56,-0.31l0.89,-0.32l0.92,0.45l0.39,0.75l0.14,0.13l1.13,0.53l0.3,-0.03l0.81,-0.59l1.02,-0.08l1.49,0.57l0.62,3.33l-1.03,2.09l-0.65,2.84l0.02,0.2l1.05,2.08l-0.07,0.64Z", "name": "Ivory Coast"}, "CH": {"path": "M444.71,156.27l0.05,0.3l-0.34,0.69l0.13,0.4l1.13,0.58l1.07,0.1l-0.12,0.81l-0.87,0.42l-1.75,-0.37l-0.34,0.18l-0.47,1.1l-0.86,0.07l-0.33,-0.38l-0.41,-0.04l-1.34,1.01l-1.02,0.13l-0.93,-0.58l-0.82,-1.32l-0.37,-0.12l-0.77,0.32l0.02,-0.84l1.74,-1.69l0.09,-0.25l-0.04,-0.38l0.73,0.19l0.26,-0.06l0.6,-0.48l2.02,0.02l0.24,-0.12l0.38,-0.51l2.31,0.84Z", "name": "Switzerland"}, "CO": {"path": "M232.24,284.95l-0.94,-0.52l-1.22,-0.82l-0.31,-0.01l-0.62,0.35l-1.88,-0.31l-0.54,-0.95l-0.29,-0.15l-0.37,0.03l-2.34,-1.33l-0.15,-0.35l0.57,-0.11l0.24,-0.32l-0.1,-1.15l0.46,-0.71l1.11,-0.15l0.21,-0.13l1.05,-1.57l0.95,-1.31l-0.08,-0.43l-0.73,-0.47l0.4,-1.24l0.01,-0.16l-0.53,-2.15l0.44,-0.54l0.06,-0.24l-0.4,-2.13l-0.06,-0.13l-0.93,-1.22l0.21,-0.8l0.52,0.12l0.32,-0.13l0.47,-0.75l0.03,-0.27l-0.52,-1.32l0.09,-0.11l1.14,0.07l0.22,-0.08l1.82,-1.71l0.96,-0.25l0.22,-0.28l0.02,-0.81l0.43,-2.01l1.28,-1.04l1.48,-0.05l0.27,-0.19l0.12,-0.31l1.73,0.19l0.2,-0.05l1.96,-1.28l0.97,-0.56l1.16,-1.16l0.64,0.11l0.43,0.44l-0.31,0.55l-1.49,0.39l-0.19,0.16l-0.6,1.2l-0.97,0.74l-0.73,0.94l-0.06,0.13l-0.3,1.76l-0.68,1.44l0.23,0.43l1.1,0.14l0.27,0.97l0.08,0.13l0.49,0.49l0.17,0.85l-0.27,0.86l-0.01,0.14l0.09,0.53l0.2,0.23l0.52,0.18l0.54,0.79l0.27,0.13l3.18,-0.24l1.31,0.29l1.7,2.08l0.31,0.1l0.96,-0.26l1.75,0.13l1.41,-0.27l0.56,0.27l-0.36,1.07l-0.54,0.81l-0.05,0.13l-0.2,1.8l0.51,1.79l0.07,0.12l0.65,0.68l0.05,0.32l-1.16,1.14l0.05,0.47l0.86,0.52l0.6,0.79l0.31,1.01l-0.7,-0.81l-0.44,-0.01l-0.74,0.77l-4.75,-0.05l-0.3,0.31l0.03,1.57l0.25,0.29l1.2,0.21l-0.02,0.24l-0.1,-0.05l-0.22,-0.02l-1.41,0.41l-0.22,0.29l-0.01,1.82l0.11,0.23l1.04,0.85l0.35,1.3l-0.06,1.02l-1.02,6.26l-0.84,-0.89l-0.19,-0.09l-0.25,-0.02l1.35,-2.13l-0.1,-0.42l-1.92,-1.17l-0.2,-0.04l-1.41,0.2l-0.82,-0.39l-0.26,0.0l-1.29,0.62l-1.63,-0.27l-1.4,-2.5l-0.12,-0.12l-1.1,-0.61l-0.83,-1.2l-1.67,-1.19l-0.27,-0.04l-0.54,0.19Z", "name": "Colombia"}, "CN": {"path": "M740.32,148.94l0.22,0.21l4.3,1.03l2.84,2.2l0.99,2.92l0.28,0.2l3.8,0.0l0.15,-0.04l2.13,-1.24l3.5,-0.8l-1.05,2.29l-0.95,1.13l-0.06,0.12l-0.85,3.41l-1.56,2.81l-2.83,-0.51l-0.19,0.03l-2.15,1.09l-0.15,0.34l0.65,2.59l-0.33,3.3l-1.03,0.07l-0.28,0.3l0.01,0.75l-1.09,-1.2l-0.48,0.05l-0.94,1.6l-3.76,1.26l-0.2,0.36l0.29,1.19l-1.67,-0.08l-1.11,-0.88l-0.42,0.05l-1.69,2.08l-2.71,1.57l-2.04,1.88l-3.42,0.84l-0.11,0.05l-1.8,1.34l-1.54,0.46l0.52,-0.53l0.06,-0.33l-0.44,-0.96l1.84,-1.84l0.02,-0.41l-1.32,-1.56l-0.36,-0.08l-2.23,1.08l-2.83,2.06l-1.52,1.85l-2.32,0.13l-0.2,0.09l-1.28,1.37l-0.03,0.37l1.32,1.97l0.18,0.13l1.83,0.43l0.07,1.08l0.18,0.26l1.98,0.84l0.3,-0.03l2.66,-1.96l2.06,1.04l0.12,0.03l1.4,0.07l0.27,1.0l-3.24,0.73l-0.17,0.11l-1.13,1.5l-2.38,1.4l-0.1,0.1l-1.29,1.99l0.1,0.42l2.6,1.5l0.97,2.72l1.52,2.56l1.66,2.08l-0.03,1.76l-1.4,0.67l-0.15,0.38l0.6,1.47l0.13,0.15l1.29,0.75l-0.35,2.0l-0.58,1.96l-1.22,0.21l-0.2,0.14l-1.83,2.93l-2.02,3.51l-2.29,3.13l-3.4,2.42l-3.42,2.18l-2.75,0.3l-0.15,0.06l-1.32,1.01l-0.68,-0.67l-0.41,-0.01l-1.37,1.27l-3.42,1.28l-2.62,0.4l-0.24,0.21l-0.8,2.57l-0.95,0.11l-0.53,-1.54l0.52,-0.89l-0.19,-0.44l-3.36,-0.84l-0.17,0.01l-1.09,0.4l-2.36,-0.64l-1.0,-0.9l0.35,-1.34l-0.23,-0.37l-2.22,-0.47l-1.15,-0.94l-0.36,-0.02l-2.08,1.37l-2.35,0.29l-1.98,-0.01l-0.13,0.03l-1.32,0.63l-1.28,0.38l-0.21,0.33l0.33,2.65l-0.78,-0.04l-0.14,-0.39l-0.07,-1.04l-0.41,-0.26l-1.72,0.71l-0.96,-0.43l-1.63,-0.86l0.65,-1.95l-0.19,-0.38l-1.43,-0.46l-0.56,-2.27l-0.34,-0.22l-2.26,0.38l0.25,-2.65l2.29,-2.15l0.09,-0.2l0.1,-2.21l-0.07,-2.09l-0.15,-0.25l-1.02,-0.6l-0.8,-1.52l-0.31,-0.16l-1.42,0.2l-2.16,-0.32l0.55,-0.74l0.01,-0.35l-1.17,-1.7l-0.41,-0.08l-1.67,1.07l-1.97,-0.63l-0.25,0.03l-2.89,1.73l-2.26,1.99l-1.82,0.3l-1.0,-0.66l-0.15,-0.05l-1.28,-0.06l-1.75,-0.61l-0.24,0.02l-1.35,0.69l-0.1,0.08l-1.2,1.45l-0.14,-1.41l-0.4,-0.25l-1.46,0.55l-2.83,-0.26l-2.77,-0.61l-1.99,-1.17l-1.91,-0.54l-0.78,-1.21l-0.17,-0.13l-1.36,-0.38l-2.54,-1.79l-2.01,-0.84l-0.28,0.02l-0.89,0.56l-3.31,-1.83l-2.35,-1.67l-0.57,-2.49l1.34,0.28l0.36,-0.28l0.08,-1.42l-0.05,-0.19l-0.93,-1.34l0.24,-2.18l-0.07,-0.22l-2.69,-3.32l-0.15,-0.1l-3.97,-1.11l-0.69,-2.05l-0.11,-0.15l-1.79,-1.3l-0.39,-0.73l-0.36,-1.57l0.08,-1.09l-0.18,-0.3l-1.52,-0.66l-0.22,-0.01l-0.51,0.18l-0.52,-2.21l0.59,-0.55l0.06,-0.35l-0.22,-0.44l2.12,-1.24l1.63,-0.55l2.58,0.39l0.31,-0.16l0.87,-1.75l3.05,-0.34l0.21,-0.12l0.84,-1.12l3.87,-1.59l0.15,-0.14l0.35,-0.68l0.03,-0.17l-0.17,-1.51l1.52,-0.7l0.15,-0.39l-2.12,-5.0l4.62,-1.15l1.35,-0.72l0.14,-0.17l1.72,-5.37l4.7,0.99l0.28,-0.08l1.39,-1.43l0.08,-0.2l0.11,-2.95l1.83,-0.26l0.18,-0.1l1.85,-2.08l0.61,-0.17l0.57,1.97l0.1,0.15l2.2,1.75l3.48,1.17l1.59,2.36l-0.93,3.53l0.04,0.24l0.9,1.35l0.2,0.13l2.98,0.53l3.32,0.43l2.97,1.89l1.49,0.35l1.08,2.67l1.52,1.88l0.24,0.11l2.74,-0.07l5.15,0.67l3.36,-0.41l2.39,0.43l3.67,1.81l0.13,0.03l2.92,-0.0l1.02,0.86l0.34,0.03l2.88,-1.59l3.98,-1.03l3.81,-0.13l3.02,-1.12l1.77,-1.61l1.73,-1.01l0.13,-0.37l-0.41,-1.01l-0.72,-1.07l1.09,-1.66l1.21,0.24l2.57,0.63l0.24,-0.04l2.46,-1.62l3.78,-1.19l0.13,-0.09l1.8,-2.03l1.66,-0.84l3.54,-0.41l1.93,0.35l0.34,-0.22l0.27,-1.12l-0.08,-0.29l-2.27,-2.22l-2.08,-1.07l-0.29,0.01l-1.82,1.12l-2.36,-0.47l-0.14,0.01l-1.18,0.34l-0.46,-0.94l1.69,-3.08l1.1,-2.21l2.75,1.12l0.26,-0.02l3.53,-2.06l0.15,-0.26l-0.02,-1.35l2.18,-3.39l1.35,-1.04l0.12,-0.24l-0.03,-1.85l-0.15,-0.25l-1.0,-0.58l1.68,-1.37l3.01,-0.59l3.25,-0.09l3.67,0.99l2.08,1.18l1.51,3.3l0.95,1.45l0.85,1.99l0.92,3.19ZM697.0,237.37l-1.95,1.12l-1.74,-0.68l-0.06,-1.9l1.08,-1.03l2.62,-0.7l1.23,0.05l0.37,0.65l-1.01,1.08l-0.54,1.4Z", "name": "China"}, "CM": {"path": "M453.76,278.92l-0.26,-0.11l-0.18,-0.02l-1.42,0.31l-1.56,-0.33l-1.17,0.16l-3.7,-0.05l0.3,-1.63l-0.04,-0.21l-0.98,-1.66l-0.15,-0.13l-1.03,-0.38l-0.46,-1.01l-0.13,-0.14l-0.48,-0.27l0.02,-0.46l0.62,-1.72l1.1,-2.25l0.54,-0.02l0.2,-0.09l1.41,-1.39l0.73,-0.03l1.32,0.97l0.31,0.03l1.72,-0.85l0.16,-0.2l0.22,-1.0l0.57,-1.03l0.36,-1.18l1.26,-0.98l0.1,-0.15l0.49,-1.7l0.48,-0.51l0.07,-0.13l0.35,-1.3l0.63,-1.54l2.06,-1.92l0.09,-0.17l0.12,-0.79l0.24,-0.41l-0.04,-0.36l-0.89,-0.91l0.04,-0.45l0.28,-0.06l0.85,1.39l0.16,1.59l-0.09,1.66l0.04,0.17l1.09,1.84l-0.86,-0.02l-0.72,0.17l-1.07,-0.24l-0.34,0.17l-0.54,1.19l0.06,0.34l1.48,1.47l1.06,0.44l0.32,0.94l0.73,1.6l-0.32,0.57l-1.23,2.49l-0.54,0.41l-0.12,0.21l-0.19,1.95l0.24,1.08l-0.18,0.67l0.07,0.28l1.13,1.25l0.24,0.93l0.92,1.29l1.1,0.8l0.1,1.01l0.26,0.73l-0.12,0.93l-1.65,-0.49l-2.02,-0.66l-3.19,-0.11Z", "name": "Cameroon"}, "CL": {"path": "M246.8,429.1l-1.14,0.78l-2.25,1.21l-0.16,0.23l-0.37,2.94l-0.75,0.06l-2.72,-1.07l-2.83,-2.34l-3.06,-1.9l-0.71,-1.92l0.67,-1.84l-0.02,-0.25l-1.22,-2.13l-0.31,-5.41l1.02,-2.95l2.59,-2.4l-0.13,-0.51l-3.32,-0.8l2.06,-2.4l0.07,-0.15l0.79,-4.77l2.44,0.95l0.4,-0.22l1.31,-6.31l-0.16,-0.33l-1.68,-0.8l-0.42,0.21l-0.72,3.47l-1.01,-0.27l0.74,-4.06l0.85,-5.46l1.12,-1.96l0.03,-0.22l-0.71,-2.82l-0.19,-2.94l0.76,-0.07l0.26,-0.2l1.53,-4.62l1.73,-4.52l1.07,-4.2l-0.56,-4.2l0.73,-2.2l0.01,-0.12l-0.29,-3.3l1.46,-3.34l0.45,-5.19l0.8,-5.52l0.78,-5.89l-0.18,-4.33l-0.49,-3.47l1.1,-0.56l0.13,-0.13l0.44,-0.88l0.9,1.29l0.32,1.8l0.1,0.18l1.16,0.97l-0.73,2.33l0.01,0.21l1.33,2.91l0.97,3.6l0.35,0.22l1.57,-0.31l0.16,0.34l-0.79,2.51l-2.61,1.25l-0.17,0.28l0.08,4.36l-0.48,0.79l0.01,0.33l0.6,0.84l-1.62,1.55l-1.67,2.6l-0.89,2.47l-0.02,0.13l0.23,2.56l-1.5,2.76l-0.03,0.21l1.15,4.8l0.11,0.17l0.54,0.42l-0.01,2.37l-1.4,2.7l-0.03,0.15l0.06,2.25l-1.8,1.78l-0.09,0.21l0.02,2.73l0.71,2.63l-1.33,0.94l-0.12,0.17l-0.67,2.64l-0.59,3.03l0.4,3.55l-0.84,0.51l-0.14,0.31l0.58,3.5l0.08,0.16l0.96,0.99l-0.7,1.08l0.11,0.43l1.04,0.55l0.19,0.8l-0.89,0.48l-0.16,0.31l0.26,1.77l-0.89,4.06l-1.31,2.67l-0.03,0.19l0.28,1.53l-0.73,1.88l-1.85,1.37l-0.12,0.26l0.22,3.46l0.06,0.16l0.88,1.19l0.28,0.12l1.32,-0.17l-0.04,2.13l0.04,0.15l1.04,1.95l0.24,0.16l5.94,0.44ZM248.79,430.71l0.0,7.41l0.3,0.3l2.67,0.0l1.01,0.06l-0.54,0.91l-1.99,1.01l-1.13,-0.1l-1.42,-0.27l-1.87,-1.06l-2.57,-0.49l-3.09,-1.9l-2.52,-1.83l-2.65,-2.93l0.93,0.32l3.54,2.29l3.32,1.23l0.34,-0.09l1.29,-1.57l0.83,-2.32l2.11,-1.28l1.43,0.32Z", "name": "Chile"}, "CA": {"path": "M280.14,145.66l-1.66,2.88l0.06,0.37l0.37,0.03l1.5,-1.01l1.17,0.49l-0.64,0.83l0.13,0.46l2.22,0.89l0.28,-0.03l1.02,-0.7l2.09,0.83l-0.69,2.1l0.37,0.38l1.43,-0.45l0.27,1.43l0.74,1.88l-0.95,2.5l-0.88,0.09l-1.34,-0.48l0.49,-2.34l-0.14,-0.32l-0.7,-0.4l-0.36,0.04l-2.81,2.66l-0.63,-0.05l1.2,-1.01l-0.1,-0.52l-2.4,-0.77l-2.79,0.18l-4.65,-0.09l-0.22,-0.54l1.37,-0.99l0.01,-0.48l-0.82,-0.65l1.91,-1.79l2.57,-5.17l1.49,-1.81l2.04,-1.07l0.63,0.08l-0.27,0.51l-1.33,2.07ZM193.92,74.85l-0.01,4.24l0.19,0.28l0.33,-0.07l3.14,-3.22l2.65,2.5l-0.71,3.04l0.06,0.26l2.42,2.88l0.46,0.0l2.66,-3.14l1.83,-3.74l0.03,-0.12l0.13,-4.53l3.23,0.31l3.63,0.64l3.18,2.08l0.13,1.91l-1.79,2.22l-0.0,0.37l1.69,2.2l-0.28,1.8l-4.74,2.84l-3.33,0.62l-2.5,-1.21l-0.41,0.17l-0.73,2.05l-2.39,3.44l-0.74,1.78l-2.78,2.61l-3.48,0.26l-0.17,0.07l-1.98,1.68l-0.1,0.21l-0.15,2.33l-2.68,0.45l-0.17,0.09l-3.1,3.2l-2.75,4.38l-0.99,3.06l-0.14,4.31l0.25,0.31l3.5,0.58l1.07,3.24l1.18,2.76l0.34,0.18l3.43,-0.69l4.55,1.52l2.45,1.32l1.76,1.65l0.12,0.07l3.11,0.96l2.63,1.46l0.13,0.04l4.12,0.2l2.41,0.3l-0.36,2.81l0.8,3.51l1.81,3.78l0.08,0.1l3.73,3.17l0.34,0.03l1.93,-1.08l0.13,-0.15l1.35,-3.44l0.01,-0.18l-1.31,-5.38l-0.08,-0.14l-1.46,-1.5l3.68,-1.51l2.84,-2.46l1.45,-2.55l0.04,-0.17l-0.2,-2.39l-0.04,-0.12l-1.7,-3.07l-2.9,-2.64l2.79,-3.66l0.05,-0.27l-1.08,-3.38l-0.8,-5.75l1.45,-0.75l4.18,1.03l2.6,0.38l0.18,-0.03l1.93,-0.95l2.18,1.23l3.01,2.18l0.73,1.42l0.25,0.16l4.18,0.27l-0.06,2.95l0.83,4.7l0.22,0.24l2.19,0.55l1.75,2.08l0.38,0.07l3.63,-2.03l0.11,-0.11l2.38,-4.06l1.36,-1.43l1.76,3.01l3.26,4.68l2.68,4.19l-0.94,2.09l0.12,0.38l3.31,1.98l2.23,1.98l0.13,0.07l3.94,0.89l1.48,1.02l0.96,2.82l0.22,0.2l1.85,0.43l0.88,1.13l0.17,3.53l-1.68,1.16l-1.76,1.14l-4.08,1.17l-0.11,0.06l-3.08,2.65l-4.11,0.52l-5.35,-0.69l-3.76,-0.02l-2.62,0.23l-0.2,0.1l-2.05,2.29l-3.13,1.41l-0.11,0.08l-3.6,4.24l-2.87,2.92l-0.05,0.36l0.33,0.14l2.13,-0.52l0.15,-0.08l3.98,-4.15l5.16,-2.63l3.58,-0.31l1.82,1.3l-2.09,1.91l-0.09,0.29l0.8,3.46l0.82,2.37l0.15,0.17l3.25,1.56l0.16,0.03l4.14,-0.45l0.21,-0.12l2.03,-2.86l0.11,1.46l0.13,0.22l1.26,0.88l-2.7,1.78l-5.51,1.83l-2.52,1.26l-2.75,2.16l-1.52,-0.18l-0.08,-2.16l4.19,-2.47l0.14,-0.34l-0.3,-0.22l-4.01,0.1l-2.66,0.36l-1.45,-1.56l0.0,-4.16l-0.11,-0.23l-1.11,-0.91l-0.28,-0.05l-1.5,0.48l-0.7,-0.7l-0.45,0.02l-1.91,2.39l-0.8,2.5l-0.82,1.31l-0.95,0.43l-0.77,0.15l-0.23,0.2l-0.18,0.56l-8.2,0.02l-0.13,0.03l-1.19,0.61l-2.95,2.45l-0.78,1.13l-4.6,0.01l-0.12,0.02l-1.13,0.48l-0.13,0.44l0.37,0.55l0.2,0.82l-0.01,0.09l-3.1,1.42l-2.63,0.5l-2.84,1.57l-0.47,0.0l-0.72,-0.4l-0.18,-0.27l0.03,-0.15l0.52,-1.0l1.2,-1.71l0.73,-1.8l0.02,-0.17l-1.03,-5.47l-0.15,-0.21l-2.35,-1.32l0.16,-0.29l-0.05,-0.35l-0.37,-0.38l-0.22,-0.09l-0.56,0.0l-0.35,-0.34l-0.11,-0.65l-0.46,-0.2l-0.39,0.26l-0.2,-0.03l-0.11,-0.33l-0.48,-0.25l-0.21,-0.71l-0.15,-0.18l-3.97,-2.07l-4.8,-2.39l-0.25,-0.01l-2.19,0.89l-0.72,0.03l-3.04,-0.82l-0.14,-0.0l-1.94,0.4l-2.4,-0.98l-2.56,-0.51l-1.7,-0.19l-0.62,-0.44l-0.42,-1.67l-0.3,-0.23l-0.85,0.02l-0.29,0.3l-0.01,0.95l-69.26,-0.01l-4.77,-3.14l-1.78,-1.41l-4.51,-1.38l-1.3,-2.73l0.34,-1.96l-0.17,-0.33l-3.06,-1.37l-0.41,-2.58l-0.11,-0.18l-2.92,-2.4l-0.05,-1.53l1.32,-1.59l0.07,-0.2l-0.07,-2.21l-0.16,-0.26l-4.19,-2.22l-2.52,-4.02l-1.56,-2.6l-0.08,-0.09l-2.28,-1.64l-1.65,-1.48l-1.31,-1.89l-0.38,-0.1l-2.51,1.21l-2.28,1.92l-2.03,-2.22l-1.85,-1.71l-2.44,-1.04l-2.28,-0.12l0.03,-37.72l4.27,0.98l4.0,2.13l2.61,0.4l0.24,-0.07l2.17,-1.81l2.92,-1.33l3.63,0.53l0.18,-0.03l3.72,-1.94l3.89,-1.06l1.6,1.72l0.37,0.06l1.87,-1.04l0.14,-0.19l0.48,-1.83l1.37,0.38l4.18,3.96l0.41,0.0l2.89,-2.62l0.28,2.79l0.37,0.26l3.08,-0.73l0.17,-0.12l0.85,-1.16l2.81,0.24l3.83,1.86l5.86,1.61l3.46,0.75l2.44,-0.26l2.89,1.89l-3.12,1.89l-0.14,0.31l0.24,0.24l4.53,0.92l6.84,-0.5l2.04,-0.71l2.54,2.44l0.39,0.02l2.72,-2.16l-0.01,-0.48l-2.26,-1.61l1.27,-1.16l2.94,-0.19l1.94,-0.42l1.89,0.97l2.49,2.32l0.24,0.08l2.71,-0.33l4.35,1.9l0.17,0.02l3.86,-0.67l3.62,0.1l0.31,-0.33l-0.26,-2.44l1.9,-0.65l3.58,1.36l-0.01,3.84l0.23,0.29l0.34,-0.17l1.51,-3.23l1.81,0.1l0.31,-0.22l1.13,-4.37l-0.08,-0.29l-2.68,-2.73l-2.83,-1.76l0.19,-4.73l2.77,-3.15l3.06,0.69l2.44,1.97l3.24,4.88l-2.05,2.02l0.15,0.51l4.41,0.85ZM265.85,150.7l-0.84,0.04l-3.15,-0.99l-1.77,-1.17l0.19,-0.06l3.17,0.79l2.39,1.27l0.01,0.12ZM249.41,3.71l6.68,0.49l5.34,0.79l4.34,1.6l-0.08,1.24l-5.91,2.56l-6.03,1.21l-2.36,1.38l-0.14,0.34l0.29,0.22l4.37,-0.02l-4.96,3.01l-4.06,1.64l-0.11,0.08l-4.21,4.62l-5.07,0.92l-0.12,0.05l-1.53,1.1l-7.5,0.59l-0.28,0.28l0.24,0.31l2.67,0.54l-1.04,0.6l-0.09,0.44l1.89,2.49l-2.11,1.66l-3.83,1.52l-0.15,0.13l-1.14,2.01l-3.41,1.55l-0.16,0.36l0.35,1.19l0.3,0.22l3.98,-0.19l0.03,0.78l-6.42,2.99l-6.44,-1.41l-7.41,0.79l-3.72,-0.62l-4.48,-0.26l-0.25,-2.0l4.37,-1.13l0.21,-0.38l-1.14,-3.55l1.13,-0.28l6.61,2.29l0.35,-0.12l-0.04,-0.37l-3.41,-3.45l-0.14,-0.08l-3.57,-0.92l1.62,-1.7l4.36,-1.3l0.2,-0.18l0.71,-1.94l-0.12,-0.36l-3.45,-2.15l-0.88,-2.43l6.36,0.23l1.94,0.61l0.23,-0.02l3.91,-2.1l0.15,-0.32l-0.26,-0.24l-5.69,-0.67l-8.69,0.37l-4.3,-1.92l-2.12,-2.39l-2.82,-1.68l-0.44,-1.65l3.41,-1.06l2.93,-0.2l4.91,-0.99l3.69,-2.28l2.93,0.31l2.64,1.68l0.42,-0.1l1.84,-3.23l3.17,-0.96l4.45,-0.69l7.56,-0.26l1.26,0.64l0.18,0.03l7.2,-1.06l10.81,0.8ZM203.94,57.59l0.01,0.32l1.97,2.97l0.51,-0.01l2.26,-3.75l6.05,-1.89l4.08,4.72l-0.36,2.95l0.38,0.33l4.95,-1.36l0.11,-0.05l2.23,-1.77l5.37,2.31l3.32,2.14l0.3,1.89l0.36,0.25l4.48,-1.01l2.49,2.8l0.14,0.09l5.99,1.78l2.09,1.74l2.18,3.83l-4.29,1.91l-0.01,0.54l5.9,2.83l3.95,0.94l3.54,3.84l0.2,0.1l3.58,0.25l-0.67,2.51l-4.18,4.54l-2.84,-1.61l-3.91,-3.95l-0.26,-0.09l-3.24,0.52l-0.25,0.26l-0.32,2.37l0.1,0.26l2.63,2.38l3.42,1.89l0.96,1.0l1.57,3.8l-0.74,2.43l-2.85,-0.96l-6.26,-3.15l-0.38,0.09l0.04,0.39l3.54,3.4l2.55,2.31l0.23,0.78l-6.26,-1.43l-5.33,-2.25l-2.73,-1.73l0.67,-0.86l-0.09,-0.45l-7.38,-4.01l-0.44,0.27l0.03,0.89l-6.85,0.61l-1.8,-1.17l1.43,-2.6l4.56,-0.07l5.15,-0.52l0.23,-0.45l-0.76,-1.34l0.8,-1.89l3.21,-4.06l0.05,-0.29l-0.72,-1.95l-0.97,-1.47l-0.11,-0.1l-3.84,-2.1l-4.53,-1.33l1.09,-0.75l0.05,-0.45l-2.65,-2.75l-0.18,-0.09l-2.12,-0.24l-1.91,-1.47l-0.39,0.02l-1.27,1.25l-4.4,0.56l-9.06,-0.99l-5.28,-1.31l-4.01,-0.67l-1.72,-1.31l2.32,-1.85l0.1,-0.33l-0.28,-0.2l-3.3,-0.02l-0.74,-4.36l1.86,-4.09l2.46,-1.88l5.74,-1.15l-1.5,2.55ZM261.28,159.28l0.19,0.14l1.82,0.42l1.66,-0.05l-0.66,0.68l-0.75,0.16l-3.0,-1.25l-0.46,-0.77l0.51,-0.52l0.68,1.19ZM230.87,84.48l-2.48,0.19l-0.52,-1.74l0.96,-2.17l2.03,-0.53l1.71,1.04l0.02,1.6l-0.22,0.46l-1.5,1.16ZM229.52,58.19l0.14,0.82l-4.99,-0.22l-2.73,0.63l-0.59,-0.23l-2.61,-2.4l0.08,-1.38l0.94,-0.25l5.61,0.51l4.14,2.54ZM222.12,105.0l-0.79,1.63l-0.75,-0.22l-0.52,-0.91l0.04,-0.09l0.84,-1.01l0.74,0.06l0.44,0.55ZM183.77,38.22l2.72,1.65l0.16,0.04l4.83,-0.01l1.92,1.52l-0.51,1.75l0.18,0.36l2.84,1.14l1.56,1.19l0.16,0.06l3.37,0.22l3.65,0.42l4.07,-1.1l5.05,-0.43l3.96,0.35l2.53,1.8l0.48,1.79l-1.37,1.16l-3.6,1.03l-3.22,-0.59l-7.17,0.76l-5.1,0.09l-4.0,-0.6l-6.48,-1.56l-0.81,-2.57l-0.3,-2.49l-0.1,-0.19l-2.51,-2.25l-0.16,-0.07l-5.12,-0.63l-2.61,-1.45l0.75,-1.71l4.88,0.32ZM207.46,91.26l0.42,1.62l0.42,0.19l1.12,-0.55l1.35,0.99l2.74,1.39l2.73,1.2l0.2,1.74l0.35,0.26l1.72,-0.29l1.31,0.97l-1.72,0.96l-3.68,-0.9l-1.34,-1.71l-0.43,-0.04l-2.46,2.1l-3.23,1.85l-0.74,-1.98l-0.31,-0.19l-2.47,0.28l1.49,-1.34l0.1,-0.19l0.32,-3.15l0.79,-3.45l1.34,0.25ZM215.59,102.66l-2.73,2.0l-1.49,-0.08l-0.37,-0.7l1.61,-1.56l3.0,0.03l-0.02,0.3ZM202.79,24.07l0.11,0.12l2.54,1.53l-3.01,1.47l-4.55,4.07l-4.3,0.38l-5.07,-0.68l-2.51,-2.09l0.03,-1.72l1.86,-1.4l0.1,-0.34l-0.29,-0.2l-4.49,0.04l-2.63,-1.79l-1.45,-2.36l1.61,-2.38l1.65,-1.69l2.47,-0.4l0.19,-0.48l-0.72,-0.89l5.1,-0.26l3.1,3.05l0.13,0.07l4.21,1.25l3.99,1.06l1.92,3.65ZM187.5,59.3l-0.15,0.1l-2.59,3.4l-2.5,-0.15l-1.47,-3.92l0.04,-2.24l1.22,-1.92l2.34,-1.26l5.11,0.17l4.28,1.06l-3.36,3.86l-2.9,0.9ZM186.19,48.8l-1.15,1.63l-3.42,-0.35l-2.68,-1.15l1.11,-1.88l3.34,-1.27l2.01,1.63l0.79,1.38ZM185.78,35.41l-0.95,0.13l-4.48,-0.33l-0.4,-0.91l4.5,0.07l1.45,0.82l-0.1,0.21ZM180.76,32.56l-3.43,1.03l-1.85,-1.14l-1.01,-1.92l-0.16,-1.87l2.87,0.2l1.39,0.35l2.75,1.75l-0.55,1.6ZM181.03,76.32l-1.21,1.2l-3.19,-1.26l-0.18,-0.01l-1.92,0.45l-2.88,-1.67l1.84,-1.16l1.6,-1.77l2.45,1.17l1.45,0.77l2.05,2.28ZM169.72,54.76l2.83,0.97l0.14,0.01l4.25,-0.58l0.47,1.01l-2.19,2.16l0.07,0.48l3.61,1.95l-0.41,3.84l-3.87,1.68l-2.23,-0.36l-1.73,-1.75l-6.07,-3.53l0.03,-1.01l4.79,0.55l0.3,-0.16l-0.04,-0.34l-2.55,-2.89l2.59,-2.05ZM174.44,40.56l1.49,1.87l0.07,2.48l-1.07,3.52l-3.87,0.48l-2.41,-0.72l0.05,-2.72l-0.33,-0.3l-3.79,0.36l-0.13,-3.31l2.36,0.14l0.15,-0.03l3.7,-1.74l3.44,0.29l0.31,-0.22l0.03,-0.12ZM170.14,31.5l0.75,1.74l-3.52,-0.52l-4.19,-1.77l-4.65,-0.17l1.65,-1.11l-0.05,-0.52l-2.86,-1.26l-0.13,-1.58l4.52,0.7l6.66,1.99l1.84,2.5ZM134.64,58.08l-1.08,1.93l0.34,0.44l5.44,-1.41l3.37,2.32l0.37,-0.02l2.66,-2.28l2.03,1.38l2.01,4.53l0.53,0.04l1.26,-1.93l0.03,-0.27l-1.67,-4.55l1.82,-0.58l2.36,0.73l2.69,1.84l1.53,4.46l0.77,3.24l0.15,0.19l4.22,2.26l4.32,2.04l-0.21,1.51l-3.87,0.34l-0.19,0.5l1.45,1.54l-0.65,1.23l-4.3,-0.65l-4.4,-1.19l-2.97,0.28l-4.67,1.48l-6.31,0.65l-4.27,0.39l-1.26,-1.91l-0.15,-0.12l-3.42,-1.2l-0.16,-0.01l-2.05,0.45l-2.66,-3.02l1.2,-0.34l3.82,-0.76l3.58,0.19l3.27,-0.78l0.23,-0.29l-0.24,-0.29l-4.84,-1.06l-5.42,0.35l-3.4,-0.09l-0.97,-1.22l5.39,-1.7l0.21,-0.33l-0.3,-0.25l-3.82,0.06l-3.95,-1.1l1.88,-3.13l1.68,-1.81l6.54,-2.84l2.11,0.77ZM158.85,56.58l-1.82,2.62l-3.38,-2.9l0.49,-0.39l3.17,-0.18l1.54,0.86ZM149.71,42.7l1.0,1.87l0.37,0.14l2.17,-0.83l2.33,0.2l0.38,2.16l-1.38,2.17l-8.33,0.76l-6.34,2.15l-3.51,0.1l-0.22,-1.13l4.98,-2.12l0.17,-0.34l-0.31,-0.23l-11.27,0.6l-3.04,-0.78l3.14,-4.57l2.2,-1.35l6.87,1.7l4.4,3.0l0.14,0.05l4.37,0.39l0.27,-0.48l-3.41,-4.68l1.96,-1.62l2.28,0.53l0.79,2.32ZM145.44,29.83l-2.18,0.77l-3.79,-0.0l0.02,-0.31l2.34,-1.5l1.2,0.23l2.42,0.83ZM144.83,34.5l-4.44,1.46l-3.18,-1.48l1.6,-1.36l3.51,-0.53l3.1,0.75l-0.6,1.16ZM119.02,65.87l-6.17,2.07l-1.19,-1.82l-0.13,-0.11l-5.48,-2.32l0.92,-1.7l1.73,-3.44l2.16,-3.15l-0.02,-0.36l-2.09,-2.56l7.84,-0.71l3.59,1.02l6.32,0.27l2.35,1.37l2.25,1.71l-2.68,1.04l-6.21,3.41l-3.1,3.28l-0.08,0.21l0.0,1.81ZM129.66,35.4l-0.3,3.55l-1.77,1.67l-2.34,0.27l-4.62,2.2l-3.89,0.76l-2.83,-0.93l3.85,-3.52l5.04,-3.36l3.75,0.07l3.11,-0.7ZM111.24,152.74l-0.82,0.29l-3.92,-1.39l-0.7,-1.06l-0.12,-0.1l-2.15,-1.09l-0.41,-0.84l-0.2,-0.16l-2.44,-0.56l-0.84,-1.56l0.1,-0.36l2.34,0.64l1.53,0.5l2.28,0.34l0.78,1.04l1.24,1.55l0.09,0.08l2.42,1.3l0.81,1.39ZM88.54,134.82l0.14,0.02l2.0,-0.23l-0.67,3.48l0.06,0.24l1.78,2.22l-0.24,-0.0l-1.4,-1.42l-0.91,-1.53l-1.26,-1.08l-0.42,-1.35l0.09,-0.66l0.82,0.31Z", "name": "Canada"}, "CG": {"path": "M453.66,296.61l-0.9,-0.82l-0.35,-0.04l-0.83,0.48l-0.77,0.83l-1.65,-2.13l1.66,-1.2l0.08,-0.39l-0.81,-1.43l0.59,-0.43l1.62,-0.29l0.24,-0.24l0.1,-0.58l0.94,0.84l0.19,0.08l2.21,0.11l0.27,-0.14l0.81,-1.29l0.32,-1.76l-0.27,-1.96l-0.06,-0.15l-1.08,-1.35l1.02,-2.74l-0.09,-0.34l-0.62,-0.5l-0.22,-0.06l-1.66,0.18l-0.55,-1.03l0.12,-0.73l2.85,0.09l1.98,0.65l2.0,0.59l0.38,-0.25l0.17,-1.3l1.26,-2.24l1.34,-1.19l1.54,0.38l1.35,0.12l-0.11,1.15l-0.74,1.34l-0.5,1.61l-0.31,2.22l0.12,1.41l-0.4,0.9l-0.06,0.88l-0.24,0.67l-1.57,1.15l-1.24,1.41l-1.09,2.43l-0.03,0.13l0.08,1.95l-0.55,0.69l-1.46,1.23l-1.32,1.41l-0.61,-0.29l-0.13,-0.57l-0.29,-0.23l-1.36,-0.02l-0.23,0.1l-0.72,0.81l-0.41,-0.16Z", "name": "Republic of the Congo"}, "CF": {"path": "M459.41,266.56l1.9,-0.17l0.22,-0.12l0.36,-0.5l0.14,0.02l0.55,0.51l0.29,0.07l3.15,-0.96l0.12,-0.07l1.05,-0.97l1.29,-0.87l0.12,-0.33l-0.17,-0.61l0.38,-0.12l2.36,0.15l0.15,-0.03l2.36,-1.17l0.12,-0.1l1.78,-2.72l1.18,-0.96l1.23,-0.34l0.21,0.79l0.07,0.13l1.37,1.5l0.01,0.86l-0.39,1.0l-0.01,0.17l0.16,0.78l0.1,0.17l0.91,0.76l1.89,1.09l1.24,0.92l0.02,0.67l0.12,0.23l1.67,1.3l0.99,1.03l0.61,1.46l0.14,0.15l1.79,0.95l0.2,0.4l-0.44,0.14l-1.54,-0.06l-1.98,-0.26l-0.93,0.22l-0.19,0.14l-0.3,0.48l-0.57,0.05l-0.91,-0.49l-0.26,-0.01l-2.7,1.21l-1.04,-0.23l-0.21,0.03l-0.34,0.19l-0.12,0.13l-0.64,1.3l-1.67,-0.43l-1.77,-0.24l-1.58,-0.91l-2.06,-0.85l-0.27,0.02l-1.42,0.88l-0.97,1.27l-0.06,0.14l-0.19,1.46l-1.3,-0.11l-1.67,-0.42l-0.27,0.07l-1.55,1.41l-0.99,1.76l-0.14,-1.18l-0.13,-0.22l-1.1,-0.78l-0.86,-1.2l-0.2,-0.84l-0.07,-0.13l-1.07,-1.19l0.16,-0.59l0.0,-0.15l-0.24,-1.01l0.18,-1.77l0.5,-0.38l0.09,-0.11l1.18,-2.4Z", "name": "Central African Republic"}, "CD": {"path": "M497.85,276.25l-0.14,2.77l0.2,0.3l0.57,0.19l-0.47,0.52l-1.0,0.71l-0.96,1.31l-0.56,1.22l-0.16,2.04l-0.54,0.89l-0.04,0.15l-0.02,1.76l-0.63,0.61l-0.09,0.2l-0.08,1.33l-0.2,0.11l-0.15,0.21l-0.23,1.37l0.03,0.2l0.6,1.08l0.16,2.96l0.44,2.29l-0.24,1.25l0.01,0.15l0.5,1.46l0.07,0.12l1.41,1.37l1.09,2.56l-0.51,-0.11l-3.45,0.45l-0.67,0.3l-0.15,0.15l-0.71,1.61l0.01,0.26l0.52,1.03l-0.43,2.9l-0.31,2.55l0.13,0.29l0.7,0.46l1.75,0.99l0.31,-0.01l0.26,-0.17l0.15,1.9l-1.44,-0.02l-0.94,-1.28l-0.94,-1.1l-0.17,-0.1l-1.76,-0.33l-0.5,-1.18l-0.42,-0.15l-1.44,0.75l-1.79,-0.32l-0.77,-1.05l-0.2,-0.12l-1.59,-0.23l-0.97,0.04l-0.1,-0.53l-0.27,-0.25l-0.86,-0.06l-1.13,-0.15l-1.62,0.37l-1.04,-0.06l-0.32,0.09l0.11,-2.56l-0.08,-0.21l-0.77,-0.87l-0.17,-1.41l0.36,-1.47l-0.03,-0.21l-0.48,-0.91l-0.04,-1.52l-0.3,-0.29l-2.65,0.02l0.13,-0.53l-0.29,-0.37l-1.28,0.01l-0.28,0.21l-0.07,0.24l-1.35,0.09l-0.26,0.18l-0.62,1.45l-0.25,0.42l-1.17,-0.3l-0.19,0.01l-0.79,0.34l-1.44,0.18l-1.41,-1.96l-0.7,-1.47l-0.61,-1.86l-0.28,-0.21l-7.39,-0.03l-0.92,0.3l-0.78,-0.03l-0.78,0.25l-0.11,-0.25l0.35,-0.15l0.18,-0.26l0.07,-1.02l0.33,-0.52l0.72,-0.42l0.52,0.2l0.33,-0.08l0.76,-0.86l0.99,0.02l0.11,0.48l0.16,0.2l0.94,0.44l0.35,-0.07l1.46,-1.56l1.44,-1.21l0.68,-0.85l0.06,-0.2l-0.08,-1.99l1.04,-2.33l1.1,-1.23l1.62,-1.19l0.11,-0.14l0.29,-0.8l0.08,-0.94l0.38,-0.82l0.03,-0.16l-0.13,-1.38l0.3,-2.16l0.47,-1.51l0.73,-1.31l0.04,-0.12l0.15,-1.51l0.21,-1.66l0.89,-1.16l1.16,-0.7l1.9,0.79l1.69,0.95l1.81,0.24l1.85,0.48l0.35,-0.16l0.71,-1.43l0.16,-0.09l1.03,0.23l0.19,-0.02l2.65,-1.19l0.86,0.46l0.17,0.03l0.81,-0.08l0.23,-0.14l0.31,-0.5l0.75,-0.17l1.83,0.26l1.64,0.06l0.72,-0.21l1.39,1.9l0.16,0.11l1.12,0.3l0.24,-0.04l0.58,-0.36l1.05,0.15l0.15,-0.02l1.15,-0.44l0.47,0.84l0.08,0.09l2.08,1.57Z", "name": "Democratic Republic of the Congo"}, "CZ": {"path": "M463.29,152.22l-0.88,-0.47l-0.18,-0.03l-1.08,0.15l-1.86,-0.94l-0.21,-0.02l-0.88,0.24l-0.13,0.07l-1.25,1.17l-1.63,-0.91l-1.38,-1.36l-1.22,-0.75l-0.24,-1.24l-0.33,-0.75l1.53,-0.6l0.98,-0.84l1.74,-0.62l0.11,-0.07l0.47,-0.47l0.46,0.27l0.24,0.03l0.96,-0.3l1.06,0.95l0.15,0.07l1.57,0.24l-0.1,0.6l0.16,0.32l1.36,0.68l0.41,-0.15l0.28,-0.62l1.29,0.28l0.19,0.84l0.26,0.23l1.73,0.18l0.74,1.02l-0.17,0.0l-0.25,0.13l-0.32,0.49l-0.46,0.11l-0.22,0.23l-0.13,0.57l-0.32,0.1l-0.2,0.22l-0.03,0.14l-0.65,0.25l-1.05,-0.05l-0.28,0.17l-0.22,0.43Z", "name": "Czech Republic"}, "CY": {"path": "M505.03,193.75l-1.51,0.68l-1.0,-0.3l-0.32,-0.63l0.69,-0.06l0.41,0.13l0.19,-0.0l0.62,-0.22l0.31,0.02l0.06,0.22l0.49,0.17l0.06,-0.01Z", "name": "Cyprus"}, "CR": {"path": "M213.0,263.84l-0.98,-0.4l-0.3,-0.31l0.16,-0.24l0.05,-0.21l-0.09,-0.56l-0.1,-0.18l-0.76,-0.65l-0.99,-0.5l-0.74,-0.28l-0.13,-0.58l-0.12,-0.18l-0.66,-0.45l-0.34,-0.0l-0.13,0.31l0.13,0.59l-0.17,0.21l-0.34,-0.42l-0.14,-0.1l-0.7,-0.22l-0.23,-0.34l0.01,-0.62l0.31,-0.74l-0.14,-0.38l-0.3,-0.15l0.47,-0.4l1.48,0.6l0.26,-0.02l0.47,-0.27l0.58,0.15l0.35,0.44l0.17,0.11l0.74,0.17l0.27,-0.07l0.3,-0.27l0.52,1.09l0.97,1.02l0.77,0.71l-0.41,0.1l-0.23,0.3l0.01,1.02l0.12,0.24l0.2,0.14l-0.07,0.05l-0.11,0.3l0.08,0.37l-0.23,0.63Z", "name": "Costa Rica"}, "CU": {"path": "M215.01,226.09l2.08,0.18l1.94,0.03l2.24,0.86l0.95,0.92l0.25,0.08l2.22,-0.28l0.79,0.55l3.68,2.81l0.19,0.06l0.77,-0.03l1.18,0.42l-0.12,0.47l0.27,0.37l1.78,0.1l1.59,0.9l-0.11,0.22l-1.5,0.3l-1.64,0.13l-1.75,-0.2l-2.69,0.19l1.0,-0.86l-0.03,-0.48l-1.02,-0.68l-0.13,-0.05l-1.52,-0.16l-0.74,-0.64l-0.57,-1.42l-0.3,-0.19l-1.36,0.1l-2.23,-0.67l-0.71,-0.52l-0.14,-0.06l-3.2,-0.4l-0.42,-0.25l0.56,-0.39l0.12,-0.33l-0.27,-0.22l-2.46,-0.13l-0.2,0.06l-1.72,1.31l-0.94,0.03l-0.25,0.15l-0.29,0.53l-1.04,0.24l-0.29,-0.07l0.7,-0.43l0.1,-0.11l0.5,-0.87l1.04,-0.54l1.23,-0.49l1.86,-0.25l0.62,-0.28Z", "name": "Cuba"}, "SZ": {"path": "M500.95,353.41l-0.41,0.97l-1.16,0.23l-1.29,-1.26l-0.02,-0.71l0.63,-0.93l0.23,-0.7l0.47,-0.12l1.04,0.4l0.32,1.05l0.2,1.08Z", "name": "Swaziland"}, "SY": {"path": "M510.84,199.83l0.09,-0.11l0.07,-0.2l-0.04,-1.08l0.56,-1.4l1.3,-1.01l0.1,-0.34l-0.41,-1.11l-0.24,-0.19l-0.89,-0.11l-0.2,-1.84l0.55,-1.05l1.3,-1.22l0.09,-0.19l0.09,-1.09l0.39,0.27l0.25,0.04l2.66,-0.77l1.35,0.52l2.06,-0.01l2.93,-1.08l1.35,0.04l2.14,-0.34l-0.83,1.16l-1.31,0.68l-0.16,0.3l0.23,2.03l-0.9,3.25l-5.43,2.87l-4.79,2.91l-2.32,-0.92Z", "name": "Syria"}, "KG": {"path": "M599.04,172.15l0.38,-0.9l1.43,-0.37l4.04,1.02l0.37,-0.23l0.36,-1.64l1.17,-0.52l3.45,1.24l0.2,-0.0l0.86,-0.31l4.09,0.08l3.61,0.31l1.18,1.02l0.11,0.06l1.19,0.34l-0.13,0.26l-3.84,1.58l-0.13,0.1l-0.81,1.08l-3.08,0.34l-0.24,0.16l-0.85,1.7l-2.43,-0.37l-0.14,0.01l-1.79,0.61l-2.39,1.4l-0.12,0.39l0.25,0.49l-0.48,0.45l-4.57,0.43l-3.04,-0.94l-2.45,0.18l0.14,-1.02l2.42,0.44l0.27,-0.08l0.81,-0.81l1.76,0.27l0.21,-0.05l3.21,-2.14l-0.03,-0.51l-2.97,-1.57l-0.26,-0.01l-1.64,0.69l-1.38,-0.84l1.81,-1.67l-0.09,-0.5l-0.46,-0.18Z", "name": "Kyrgyzstan"}, "KE": {"path": "M523.3,287.04l0.06,0.17l1.29,1.8l-1.46,0.84l-0.11,0.11l-0.55,0.93l-0.81,0.16l-0.24,0.24l-0.34,1.69l-0.81,1.06l-0.46,1.58l-0.76,0.63l-3.3,-2.3l-0.16,-1.32l-0.15,-0.23l-9.35,-5.28l-0.02,-2.4l1.92,-2.63l0.91,-1.83l0.01,-0.24l-1.09,-2.86l-0.29,-1.24l-1.09,-1.63l2.93,-2.85l0.92,0.3l0.0,1.19l0.09,0.22l0.86,0.83l0.21,0.08l1.65,0.0l3.09,2.08l0.16,0.05l0.79,0.03l0.54,-0.06l0.58,0.28l1.67,0.2l0.28,-0.12l0.69,-0.98l2.04,-0.94l0.86,0.73l0.19,0.07l1.1,0.0l-1.82,2.36l-0.06,0.18l0.03,9.12Z", "name": "Kenya"}, "SS": {"path": "M505.7,261.39l0.02,1.64l-0.27,0.55l-1.15,0.05l-0.24,0.15l-0.85,1.44l0.22,0.45l1.44,0.17l1.15,1.12l0.42,0.95l0.14,0.15l1.06,0.54l1.33,2.45l-3.06,2.98l-1.44,1.08l-1.75,0.01l-1.92,0.56l-1.5,-0.53l-0.27,0.03l-0.85,0.57l-1.98,-1.5l-0.56,-1.02l-0.37,-0.13l-1.32,0.5l-1.08,-0.15l-0.2,0.04l-0.56,0.35l-0.9,-0.24l-1.44,-1.97l-0.39,-0.77l-0.13,-0.13l-1.78,-0.94l-0.65,-1.5l-1.08,-1.12l-1.57,-1.22l-0.02,-0.68l-0.12,-0.23l-1.37,-1.02l-1.17,-0.68l0.2,-0.08l0.86,-0.48l0.14,-0.18l0.63,-2.22l0.6,-1.02l1.47,-0.28l0.35,0.56l1.29,1.48l0.14,0.09l0.69,0.22l0.22,-0.02l0.83,-0.4l1.58,0.08l0.26,0.39l0.25,0.13l2.49,0.0l0.3,-0.25l0.06,-0.35l1.13,-0.42l0.18,-0.18l0.22,-0.63l0.68,-0.38l1.95,1.37l0.23,0.05l1.29,-0.26l0.19,-0.12l1.23,-1.8l1.36,-1.37l0.08,-0.25l-0.21,-1.52l-0.06,-0.15l-0.25,-0.3l0.94,-0.08l0.26,-0.21l0.1,-0.32l0.6,0.09l-0.25,1.67l0.3,1.83l0.11,0.19l1.22,0.94l0.25,0.73l-0.04,1.2l0.26,0.31l0.09,0.01Z", "name": "South Sudan"}, "SR": {"path": "M278.1,270.26l2.71,0.45l0.31,-0.14l0.19,-0.32l1.82,-0.16l2.25,0.56l-1.09,1.81l-0.04,0.19l0.2,1.72l0.05,0.13l0.9,1.35l-0.39,0.99l-0.21,1.09l-0.48,0.8l-1.2,-0.44l-0.17,-0.01l-1.12,0.24l-0.95,-0.21l-0.35,0.2l-0.25,0.73l0.05,0.29l0.3,0.35l-0.06,0.13l-1.01,-0.15l-1.42,-2.03l-0.32,-1.36l-0.29,-0.23l-0.63,-0.0l-0.95,-1.56l0.41,-1.16l0.01,-0.17l-0.08,-0.35l1.29,-0.56l0.18,-0.22l0.35,-1.97Z", "name": "Suriname"}, "KH": {"path": "M680.28,257.89l-0.93,-1.2l-1.24,-2.56l-0.56,-2.9l1.45,-1.92l3.07,-0.46l2.26,0.35l2.03,0.98l0.38,-0.11l1.0,-1.55l1.86,0.79l0.52,1.51l-0.28,2.82l-4.05,1.88l-0.12,0.45l0.79,1.1l-2.2,0.17l-2.08,0.98l-1.89,-0.33Z", "name": "Cambodia"}, "SV": {"path": "M197.02,248.89l0.18,-0.05l0.59,0.17l0.55,0.51l0.64,0.35l0.06,0.22l0.37,0.21l1.01,-0.28l0.38,0.13l0.16,0.13l-0.14,0.81l-0.18,0.38l-1.22,-0.03l-0.84,-0.23l-1.11,-0.52l-1.31,-0.15l-0.49,-0.38l0.02,-0.08l0.76,-0.57l0.46,-0.27l0.11,-0.35Z", "name": "El Salvador"}, "SK": {"path": "M468.01,150.02l0.05,0.07l0.36,0.1l0.85,-0.37l1.12,1.02l0.33,0.05l1.38,-0.65l1.07,0.3l0.16,0.0l1.69,-0.43l1.95,1.02l-0.51,0.64l-0.45,1.2l-0.32,0.2l-2.55,-0.93l-0.17,-0.01l-0.82,0.2l-0.17,0.11l-0.53,0.68l-0.94,0.32l-0.14,-0.11l-0.29,-0.04l-1.18,0.48l-0.95,0.09l-0.26,0.21l-0.15,0.47l-1.84,0.34l-0.82,-0.31l-1.14,-0.73l-0.2,-0.89l0.42,-0.84l0.91,0.05l0.12,-0.02l0.86,-0.33l0.18,-0.21l0.03,-0.13l0.32,-0.1l0.2,-0.22l0.12,-0.55l0.39,-0.1l0.18,-0.13l0.3,-0.45l0.43,-0.0Z", "name": "Slovakia"}, "KR": {"path": "M737.31,185.72l0.84,0.08l0.27,-0.12l0.89,-1.2l1.63,-0.13l1.1,-0.2l0.21,-0.16l0.12,-0.24l1.86,2.95l0.59,1.79l0.02,3.17l-0.84,1.38l-2.23,0.55l-1.95,1.14l-1.91,0.21l-0.22,-1.21l0.45,-2.07l-0.01,-0.17l-0.99,-2.67l1.54,-0.4l0.17,-0.46l-1.55,-2.24Z", "name": "South Korea"}, "SI": {"path": "M455.77,159.59l1.79,0.21l0.18,-0.04l1.2,-0.68l2.12,-0.08l0.21,-0.1l0.38,-0.42l0.1,0.01l0.28,0.62l-1.71,0.71l-0.18,0.22l-0.21,1.1l-0.71,0.26l-0.2,0.28l0.01,0.55l-0.59,-0.04l-0.79,-0.47l-0.38,0.06l-0.36,0.41l-0.84,-0.05l0.05,-0.15l-0.56,-1.24l0.21,-1.17Z", "name": "Slovenia"}, "KP": {"path": "M747.76,172.02l-0.23,-0.04l-0.26,0.08l-1.09,1.02l-0.78,1.06l-0.06,0.19l0.09,1.95l-1.12,0.57l-0.53,0.58l-0.88,0.82l-1.69,0.51l-1.09,0.79l-0.12,0.22l-0.07,1.17l-0.22,0.25l0.09,0.47l0.96,0.46l1.22,1.1l-0.19,0.37l-0.91,0.16l-1.75,0.14l-0.22,0.12l-0.87,1.18l-0.95,-0.09l-0.3,0.18l-0.97,-0.44l-0.39,0.13l-0.25,0.44l-0.29,0.09l-0.03,-0.2l-0.18,-0.23l-0.62,-0.25l-0.43,-0.29l0.52,-0.97l0.52,-0.3l0.13,-0.38l-0.18,-0.42l0.59,-1.47l0.01,-0.21l-0.16,-0.48l-0.22,-0.2l-1.41,-0.31l-0.82,-0.55l1.74,-1.62l2.73,-1.58l1.62,-1.96l0.96,0.76l0.17,0.06l2.17,0.11l0.31,-0.37l-0.32,-1.31l3.61,-1.21l0.16,-0.13l0.79,-1.34l1.25,1.38Z", "name": "North Korea"}, "SO": {"path": "M543.8,256.48l0.61,-0.05l1.14,-0.37l1.31,-0.25l0.12,-0.05l1.11,-0.81l0.57,-0.0l0.03,0.39l-0.23,1.49l0.01,1.25l-0.52,0.92l-0.7,2.71l-1.19,2.79l-1.54,3.2l-2.13,3.66l-2.12,2.79l-2.92,3.39l-2.47,2.0l-3.76,2.5l-2.33,1.9l-2.77,3.06l-0.61,1.35l-0.28,0.29l-1.22,-1.69l-0.03,-8.92l2.12,-2.76l0.59,-0.68l1.47,-0.04l0.18,-0.06l2.15,-1.71l3.16,-0.11l0.21,-0.09l7.08,-7.55l1.76,-2.12l1.14,-1.57l0.06,-0.18l0.01,-4.67Z", "name": "Somalia"}, "SN": {"path": "M379.28,250.34l-0.95,-1.82l-0.09,-0.1l-0.83,-0.6l0.62,-0.28l0.13,-0.11l1.21,-1.8l0.6,-1.31l0.71,-0.68l1.09,0.2l0.18,-0.02l1.17,-0.53l1.25,-0.03l1.17,0.73l1.59,0.65l1.47,1.83l1.59,1.7l0.12,1.56l0.49,1.46l0.1,0.14l0.85,0.65l0.18,0.82l-0.08,0.57l-0.13,0.05l-1.29,-0.19l-0.29,0.13l-0.11,0.16l-0.35,0.04l-1.83,-0.61l-5.84,-0.13l-0.12,0.02l-0.6,0.26l-0.87,-0.06l-1.01,0.32l-0.26,-1.26l1.9,0.04l0.16,-0.04l0.54,-0.32l0.37,-0.02l0.15,-0.05l0.78,-0.5l0.92,0.46l0.12,0.03l1.09,0.04l0.15,-0.03l1.08,-0.57l0.11,-0.44l-0.51,-0.74l-0.39,-0.1l-0.76,0.39l-0.62,-0.01l-0.92,-0.58l-0.18,-0.05l-0.79,0.04l-0.2,0.09l-0.48,0.51l-2.41,0.06Z", "name": "Senegal"}, "SL": {"path": "M392.19,267.53l-0.44,-0.12l-1.73,-0.97l-1.24,-1.28l-0.4,-0.84l-0.27,-1.65l1.21,-1.0l0.09,-0.12l0.27,-0.66l0.32,-0.41l0.56,-0.05l0.16,-0.07l0.5,-0.41l1.75,0.0l0.59,0.77l0.49,0.96l-0.07,0.64l0.04,0.19l0.36,0.58l-0.03,0.84l0.24,0.2l-0.64,0.65l-1.13,1.37l-0.06,0.14l-0.12,0.66l-0.43,0.58Z", "name": "Sierra Leone"}, "SB": {"path": "M826.74,311.51l0.23,0.29l-0.95,-0.01l-0.39,-0.63l0.65,0.27l0.45,0.09ZM825.01,308.52l-1.18,-1.39l-0.37,-1.06l0.24,0.0l0.82,1.84l0.49,0.6ZM823.21,309.42l-0.44,0.03l-1.43,-0.24l-0.32,-0.24l0.08,-0.5l1.29,0.31l0.72,0.47l0.11,0.18ZM817.9,303.81l2.59,1.44l0.3,0.41l-1.21,-0.66l-1.34,-0.89l-0.34,-0.3ZM813.77,302.4l0.48,0.34l0.1,0.08l-0.33,-0.17l-0.25,-0.25Z", "name": "Solomon Islands"}, "SA": {"path": "M528.24,243.1l-0.2,-0.69l-0.07,-0.12l-0.69,-0.71l-0.18,-0.94l-0.12,-0.19l-1.24,-0.89l-1.28,-2.09l-0.7,-2.08l-0.07,-0.11l-1.73,-1.79l-0.11,-0.07l-1.03,-0.39l-1.57,-2.36l-0.27,-1.72l0.1,-1.53l-0.03,-0.15l-1.44,-2.93l-1.25,-1.13l-1.34,-0.56l-0.72,-1.33l0.11,-0.49l-0.02,-0.2l-0.7,-1.38l-0.08,-0.1l-0.68,-0.56l-0.97,-1.98l-2.8,-4.03l-0.25,-0.13l-0.85,0.01l0.29,-1.11l0.12,-0.97l0.23,-0.81l2.52,0.39l0.23,-0.06l1.08,-0.84l0.6,-0.95l1.78,-0.35l0.22,-0.17l0.37,-0.83l0.74,-0.42l0.08,-0.46l-2.17,-2.4l4.55,-1.26l0.12,-0.06l0.36,-0.32l2.83,0.71l3.67,1.91l7.04,5.5l0.17,0.06l4.64,0.22l2.06,0.24l0.55,1.15l0.28,0.17l1.56,-0.06l0.9,2.15l0.14,0.15l1.14,0.57l0.39,0.85l0.11,0.13l1.59,1.06l0.12,0.91l-0.23,0.83l0.01,0.18l0.32,0.9l0.07,0.11l0.68,0.7l0.33,0.86l0.37,0.65l0.09,0.1l0.76,0.53l0.25,0.04l0.45,-0.12l0.35,0.75l0.1,0.63l0.96,2.68l0.23,0.19l7.53,1.33l0.27,-0.09l0.24,-0.26l0.87,1.41l-1.58,4.96l-7.34,2.54l-7.28,1.02l-2.34,1.17l-0.12,0.1l-1.74,2.63l-0.86,0.32l-0.49,-0.68l-0.28,-0.12l-0.92,0.12l-2.32,-0.25l-0.41,-0.23l-0.15,-0.04l-2.89,0.06l-0.63,0.2l-0.91,-0.59l-0.43,0.11l-0.66,1.27l-0.03,0.21l0.21,0.89l-0.6,0.45Z", "name": "Saudi Arabia"}, "SE": {"path": "M476.42,90.44l-0.15,0.1l-2.43,2.86l-0.07,0.24l0.36,2.31l-3.84,3.1l-4.83,3.38l-0.11,0.15l-1.82,5.45l0.03,0.26l1.78,2.68l2.27,1.99l-2.13,3.88l-2.49,0.82l-0.2,0.24l-0.95,6.05l-1.32,3.09l-2.82,-0.32l-0.3,0.16l-1.34,2.64l-2.48,0.14l-0.76,-3.15l-2.09,-4.04l-1.85,-5.01l1.03,-1.98l2.06,-2.53l0.06,-0.13l0.83,-4.45l-0.06,-0.25l-1.54,-1.86l-0.15,-5.0l1.52,-3.48l2.28,0.06l0.27,-0.16l0.87,-1.59l-0.01,-0.31l-0.8,-1.21l3.79,-5.63l4.07,-7.54l2.23,0.01l0.29,-0.22l0.59,-2.15l4.46,0.66l0.34,-0.26l0.34,-2.64l1.21,-0.14l3.24,2.08l3.78,2.85l0.06,6.37l0.03,0.14l0.67,1.29l-3.95,1.07Z", "name": "Sweden"}, "SD": {"path": "M505.98,259.75l-0.31,-0.9l-0.1,-0.14l-1.2,-0.93l-0.27,-1.66l0.29,-1.83l-0.25,-0.34l-1.16,-0.17l-0.33,0.21l-0.11,0.37l-1.3,0.11l-0.21,0.49l0.55,0.68l0.18,1.29l-1.31,1.33l-1.18,1.72l-1.04,0.21l-2.0,-1.4l-0.32,-0.02l-0.95,0.52l-0.14,0.16l-0.21,0.6l-1.16,0.43l-0.19,0.23l-0.04,0.27l-2.08,0.0l-0.25,-0.39l-0.24,-0.13l-1.81,-0.09l-0.14,0.03l-0.8,0.38l-0.49,-0.16l-1.22,-1.39l-0.42,-0.67l-0.31,-0.14l-1.81,0.35l-0.2,0.14l-0.72,1.24l-0.61,2.14l-0.73,0.4l-0.62,0.22l-0.83,-0.68l-0.12,-0.6l0.38,-0.97l0.01,-1.14l-0.08,-0.2l-1.39,-1.53l-0.25,-0.97l0.03,-0.57l-0.11,-0.25l-0.81,-0.66l-0.03,-1.34l-0.04,-0.14l-0.52,-0.98l-0.31,-0.15l-0.42,0.07l0.12,-0.44l0.63,-1.03l0.03,-0.23l-0.24,-0.88l0.69,-0.66l0.02,-0.41l-0.4,-0.46l0.58,-1.39l1.04,-1.71l1.97,0.16l0.32,-0.3l-0.12,-10.24l0.02,-0.8l2.59,-0.01l0.3,-0.3l0.0,-4.92l29.19,0.0l0.68,2.17l-0.4,0.35l-0.1,0.27l0.36,2.69l0.93,3.15l0.12,0.16l2.05,1.4l-0.99,1.15l-1.75,0.4l-0.15,0.08l-0.79,0.79l-0.08,0.17l-0.24,1.69l-1.07,3.75l-0.0,0.16l0.25,0.96l-0.38,2.1l-0.98,2.41l-1.52,1.3l-1.07,1.94l-0.25,0.99l-1.08,0.64l-0.13,0.18l-0.46,1.65Z", "name": "Sudan"}, "DO": {"path": "M241.7,234.97l0.15,-0.22l1.73,0.01l1.43,0.64l0.15,0.03l0.45,-0.04l0.36,0.74l0.28,0.17l1.02,-0.04l-0.04,0.43l0.27,0.33l1.03,0.09l0.91,0.7l-0.57,0.64l-0.99,-0.47l-0.16,-0.03l-1.11,0.11l-0.79,-0.12l-0.26,0.09l-0.38,0.4l-0.66,0.11l-0.28,-0.45l-0.38,-0.12l-0.83,0.37l-0.14,0.13l-0.85,1.49l-0.27,-0.17l-0.1,-0.58l0.05,-0.67l-0.07,-0.21l-0.44,-0.53l0.35,-0.25l0.12,-0.19l0.19,-1.0l-0.2,-1.4Z", "name": "Dominican Republic"}, "DJ": {"path": "M528.78,253.36l0.34,0.45l-0.06,0.76l-1.26,0.54l-0.05,0.53l0.82,0.53l-0.57,0.83l-0.3,-0.25l-0.27,-0.05l-0.56,0.17l-1.07,-0.03l-0.04,-0.56l-0.16,-0.56l0.76,-1.07l0.76,-0.97l0.89,0.18l0.25,-0.06l0.51,-0.42Z", "name": "Djibouti"}, "DK": {"path": "M452.4,129.07l-1.27,2.39l-2.25,-1.69l-0.26,-1.08l3.15,-1.0l0.63,1.39ZM447.87,126.25l-0.35,0.76l-0.47,-0.24l-0.38,0.09l-1.8,2.53l-0.03,0.29l0.56,1.4l-1.22,0.4l-1.68,-0.41l-0.92,-1.76l-0.07,-3.47l0.38,-0.88l0.62,-0.93l2.07,-0.21l0.19,-0.1l0.84,-0.95l1.5,-0.76l-0.06,1.26l-0.7,1.1l-0.03,0.25l0.3,1.0l0.18,0.19l1.06,0.42Z", "name": "Denmark"}, "DE": {"path": "M445.51,131.69l0.03,0.94l0.21,0.28l2.32,0.74l-0.02,1.0l0.37,0.3l2.55,-0.65l1.36,-0.89l2.63,1.27l1.09,1.01l0.51,1.51l-0.6,0.78l-0.0,0.36l0.88,1.17l0.58,1.68l-0.18,1.08l0.03,0.18l0.87,1.81l-0.66,0.2l-0.55,-0.32l-0.36,0.05l-0.58,0.58l-1.73,0.62l-0.99,0.84l-1.77,0.7l-0.16,0.4l0.42,0.94l0.26,1.34l0.14,0.2l1.25,0.76l1.22,1.2l-0.71,1.2l-0.81,0.37l-0.17,0.32l0.34,1.99l-0.04,0.09l-0.47,-0.39l-0.17,-0.07l-1.2,-0.1l-1.85,0.57l-2.15,-0.13l-0.29,0.18l-0.21,0.5l-0.96,-0.67l-0.24,-0.05l-0.67,0.16l-2.6,-0.94l-0.34,0.1l-0.42,0.57l-1.64,-0.02l0.26,-1.88l1.24,-2.15l-0.21,-0.45l-3.54,-0.58l-0.98,-0.71l0.12,-1.26l-0.05,-0.2l-0.44,-0.64l0.27,-2.18l-0.38,-3.14l1.17,-0.0l0.27,-0.17l0.63,-1.26l0.65,-3.17l-0.02,-0.17l-0.41,-1.0l0.32,-0.47l1.77,-0.16l0.37,0.6l0.47,0.06l1.7,-1.69l0.06,-0.33l-0.55,-1.24l-0.09,-1.51l1.5,0.36l0.16,-0.01l1.22,-0.4Z", "name": "Germany"}, "YE": {"path": "M553.53,242.65l-1.51,0.58l-0.17,0.16l-0.48,1.14l-0.07,0.79l-2.31,1.0l-3.98,1.19l-2.28,1.8l-0.97,0.12l-0.7,-0.14l-0.23,0.05l-1.42,1.03l-1.51,0.47l-2.07,0.13l-0.68,0.15l-0.17,0.1l-0.49,0.6l-0.57,0.16l-0.18,0.13l-0.3,0.49l-1.06,-0.05l-0.13,0.02l-0.73,0.32l-1.48,-0.11l-0.55,-1.26l0.07,-1.32l-0.04,-0.16l-0.39,-0.72l-0.48,-1.85l-0.52,-0.79l0.08,-0.02l0.22,-0.36l-0.23,-1.05l0.24,-0.39l0.04,-0.19l-0.09,-0.95l0.96,-0.72l0.11,-0.31l-0.23,-0.98l0.46,-0.88l0.75,0.49l0.26,0.03l0.63,-0.22l2.76,-0.06l0.5,0.25l2.42,0.26l0.85,-0.11l0.52,0.71l0.35,0.1l1.17,-0.43l0.15,-0.12l1.75,-2.64l2.22,-1.11l6.95,-0.96l2.55,5.58Z", "name": "Yemen"}, "AT": {"path": "M463.17,154.15l-0.14,0.99l-1.15,0.01l-0.24,0.47l0.39,0.56l-0.75,1.84l-0.36,0.4l-2.06,0.07l-0.14,0.04l-1.18,0.67l-1.96,-0.23l-3.43,-0.78l-0.5,-0.97l-0.33,-0.16l-2.47,0.55l-0.2,0.16l-0.18,0.37l-1.27,-0.38l-1.28,-0.09l-0.81,-0.41l0.25,-0.51l0.03,-0.18l-0.05,-0.28l0.35,-0.08l1.16,0.81l0.45,-0.13l0.27,-0.64l2.0,0.12l1.84,-0.57l1.05,0.09l0.71,0.59l0.47,-0.11l0.23,-0.54l0.02,-0.17l-0.32,-1.85l0.69,-0.31l0.13,-0.12l0.73,-1.23l1.61,0.89l0.35,-0.04l1.35,-1.27l0.7,-0.19l1.84,0.93l0.18,0.03l1.08,-0.15l0.81,0.43l-0.07,0.15l-0.02,0.2l0.24,1.06Z", "name": "Austria"}, "DZ": {"path": "M450.58,224.94l-8.31,4.86l-7.23,5.12l-3.46,1.13l-2.42,0.22l-0.02,-1.33l-0.2,-0.28l-1.15,-0.42l-1.45,-0.69l-0.55,-1.13l-0.1,-0.12l-8.45,-5.72l-17.72,-12.17l0.03,-0.38l-0.02,-3.21l3.84,-1.91l2.46,-0.41l2.1,-0.75l0.14,-0.11l0.9,-1.3l2.84,-1.06l0.19,-0.27l0.09,-1.81l1.21,-0.2l0.15,-0.07l1.06,-0.96l3.19,-0.46l0.23,-0.18l0.46,-1.08l-0.08,-0.34l-0.6,-0.54l-0.83,-2.85l-0.18,-1.8l-0.82,-1.57l2.13,-1.37l2.65,-0.49l0.13,-0.05l1.55,-1.15l2.34,-0.85l4.2,-0.51l4.07,-0.23l1.21,0.41l0.23,-0.01l2.3,-1.11l2.52,-0.02l0.94,0.62l0.2,0.05l1.25,-0.13l-0.36,1.03l-0.01,0.14l0.39,2.66l-0.56,2.2l-1.49,1.52l-0.08,0.24l0.22,2.12l0.11,0.2l1.94,1.58l0.02,0.54l0.12,0.23l1.45,1.06l1.04,4.85l0.81,2.42l0.13,1.19l-0.43,2.17l0.17,1.28l-0.31,1.53l0.2,1.56l-0.9,1.02l-0.01,0.38l1.43,1.88l0.09,1.06l0.04,0.13l0.89,1.48l0.37,0.12l1.03,-0.43l1.79,1.12l0.89,1.34Z", "name": "Algeria"}, "US": {"path": "M892.64,99.05l1.16,0.57l0.21,0.02l1.45,-0.38l1.92,0.99l2.17,0.47l-1.65,0.72l-1.75,-0.79l-0.93,-0.7l-0.21,-0.06l-2.11,0.22l-0.35,-0.2l0.09,-0.87ZM183.29,150.37l0.39,1.54l0.12,0.17l0.78,0.55l0.14,0.05l1.74,0.2l2.52,0.5l2.4,0.98l0.17,0.02l1.96,-0.4l3.01,0.81l0.91,-0.02l2.22,-0.88l4.67,2.33l3.86,2.01l0.21,0.71l0.15,0.18l0.33,0.17l-0.02,0.05l0.23,0.43l0.67,0.1l0.21,-0.05l0.1,-0.07l0.05,0.29l0.09,0.16l0.5,0.5l0.21,0.09l0.56,0.0l0.13,0.13l-0.2,0.36l0.12,0.41l2.49,1.39l0.99,5.24l-0.69,1.68l-1.16,1.64l-0.6,1.18l-0.06,0.31l0.04,0.22l0.28,0.43l0.11,0.1l0.85,0.47l0.15,0.04l0.63,0.0l0.14,-0.04l2.87,-1.58l2.6,-0.49l3.28,-1.5l0.17,-0.23l0.04,-0.43l-0.23,-0.93l-0.24,-0.39l0.74,-0.32l4.7,-0.01l0.25,-0.13l0.77,-1.15l2.9,-2.41l1.04,-0.52l8.35,-0.02l0.28,-0.21l0.2,-0.6l0.7,-0.14l1.06,-0.48l0.13,-0.11l0.92,-1.49l0.75,-2.39l1.67,-2.08l0.59,0.6l0.3,0.07l1.52,-0.49l0.88,0.72l-0.0,4.14l0.08,0.2l1.6,1.72l0.31,0.72l-2.42,1.35l-2.55,1.05l-2.64,0.9l-0.14,0.11l-1.33,1.81l-0.44,0.7l-0.05,0.15l-0.03,1.6l0.03,0.14l0.83,1.59l0.24,0.16l0.78,0.06l-1.15,0.33l-1.25,-0.04l-1.83,0.52l-2.51,0.29l-2.17,0.88l-0.17,0.36l0.33,0.22l3.55,-0.54l0.15,0.11l-2.87,0.73l-1.19,0.0l-0.16,-0.33l-0.36,0.06l-0.76,0.82l0.17,0.5l0.42,0.08l-0.45,1.75l-1.4,1.74l-0.04,-0.17l-0.21,-0.22l-0.48,-0.13l-0.77,-0.69l-0.36,-0.03l-0.12,0.34l0.52,1.58l0.09,0.14l0.52,0.43l0.03,0.87l-0.74,1.05l-0.39,0.63l0.05,-0.12l-0.08,-0.34l-1.19,-1.03l-0.28,-2.31l-0.26,-0.26l-0.32,0.19l-0.48,1.27l-0.01,0.19l0.39,1.33l-1.14,-0.31l-0.36,0.18l0.14,0.38l1.57,0.85l0.1,2.58l0.22,0.28l0.55,0.15l0.21,0.81l0.33,2.72l-1.46,1.94l-2.5,0.81l-0.12,0.07l-1.58,1.58l-1.15,0.17l-0.15,0.06l-1.27,1.03l-0.09,0.13l-0.32,0.85l-2.71,1.79l-1.45,1.37l-1.18,1.64l-0.05,0.12l-0.39,1.96l0.0,0.13l0.44,1.91l0.85,2.37l1.1,1.91l0.03,1.2l1.16,3.07l-0.08,1.74l-0.1,0.99l-0.57,1.48l-0.54,0.24l-0.97,-0.26l-0.34,-1.02l-0.12,-0.16l-0.89,-0.58l-2.44,-4.28l-0.34,-0.94l0.49,-1.71l-0.02,-0.21l-0.7,-1.5l-2.0,-2.35l-0.11,-0.08l-0.98,-0.42l-0.25,0.01l-2.42,1.19l-0.26,-0.08l-1.26,-1.29l-1.57,-0.68l-0.16,-0.02l-2.79,0.34l-2.18,-0.3l-1.98,0.19l-1.12,0.45l-0.14,0.44l0.4,0.65l-0.04,1.02l0.09,0.22l0.29,0.3l-0.06,0.05l-0.77,-0.33l-0.26,0.01l-0.87,0.48l-1.64,-0.08l-1.79,-1.39l-0.23,-0.06l-2.11,0.33l-1.75,-0.61l-0.14,-0.01l-1.61,0.2l-2.11,0.64l-0.11,0.06l-2.25,1.99l-2.53,1.21l-1.43,1.38l-0.58,1.22l-0.03,0.12l-0.03,1.86l0.13,1.32l0.3,0.62l-0.46,0.04l-1.71,-0.57l-1.85,-0.79l-0.63,-1.14l-0.54,-1.85l-0.07,-0.12l-1.45,-1.51l-0.86,-1.58l-1.26,-1.87l-0.09,-0.09l-1.76,-1.09l-0.17,-0.04l-2.05,0.05l-0.23,0.12l-1.44,1.97l-1.84,-0.72l-1.19,-0.76l-0.6,-1.45l-0.9,-1.52l-1.49,-1.21l-1.27,-0.87l-0.89,-0.96l-0.22,-0.1l-4.34,-0.0l-0.3,0.3l-0.0,0.84l-6.62,0.02l-5.66,-1.93l-3.48,-1.24l0.11,-0.25l-0.3,-0.42l-3.18,0.3l-2.6,0.2l-0.35,-1.19l-0.08,-0.13l-1.62,-1.61l-0.13,-0.08l-1.02,-0.29l-0.22,-0.66l-0.25,-0.2l-1.31,-0.13l-0.82,-0.7l-0.16,-0.07l-2.25,-0.27l-0.48,-0.34l-0.28,-1.44l-0.07,-0.14l-2.41,-2.84l-2.03,-3.89l0.08,-0.58l-0.1,-0.27l-1.08,-0.94l-1.87,-2.36l-0.33,-2.31l-0.07,-0.15l-1.24,-1.5l0.52,-2.4l-0.09,-2.57l-0.78,-2.3l0.96,-2.83l0.61,-5.66l-0.46,-4.26l-0.79,-2.71l-0.68,-1.4l0.13,-0.26l3.24,0.97l1.28,2.88l0.52,0.06l0.62,-0.84l0.06,-0.22l-0.4,-2.61l-0.74,-2.29l68.9,-0.0l0.3,-0.3l0.01,-0.95l0.32,-0.01ZM32.5,67.43l1.75,1.99l0.41,0.04l1.02,-0.81l3.79,0.25l-0.1,0.72l0.24,0.34l3.83,0.77l2.6,-0.44l5.21,1.41l4.84,0.43l1.9,0.57l0.15,0.01l3.25,-0.71l3.72,1.32l2.52,0.58l-0.03,38.14l0.29,0.3l2.41,0.11l2.34,1.0l1.7,1.59l2.22,2.42l0.42,0.03l2.41,-2.04l2.25,-1.08l1.23,1.76l1.71,1.53l2.24,1.62l1.54,2.56l2.56,4.09l0.11,0.11l4.1,2.17l0.06,1.93l-1.12,1.35l-1.22,-1.14l-2.08,-1.05l-0.68,-2.94l-0.09,-0.16l-3.18,-2.84l-1.32,-3.35l-0.25,-0.19l-2.43,-0.24l-3.93,-0.09l-2.85,-1.02l-5.24,-3.85l-6.77,-2.04l-3.52,0.3l-4.84,-1.7l-2.96,-1.6l-0.23,-0.02l-2.78,0.8l-0.21,0.35l0.46,2.31l-1.11,0.19l-2.9,0.78l-2.24,1.26l-2.42,0.68l-0.29,-1.79l1.07,-3.49l2.54,-1.11l0.12,-0.45l-0.69,-0.96l-0.41,-0.07l-3.19,2.12l-1.76,2.54l-3.57,2.62l-0.03,0.46l1.63,1.59l-2.14,2.38l-2.64,1.49l-2.49,1.09l-0.16,0.17l-0.58,1.48l-3.8,1.79l-0.14,0.14l-0.75,1.57l-2.75,1.41l-1.62,-0.25l-0.16,0.02l-2.35,0.98l-2.54,1.19l-2.06,1.15l-4.05,0.93l-0.1,-0.15l2.45,-1.45l2.49,-1.1l2.61,-1.88l3.03,-0.39l0.19,-0.1l1.2,-1.41l3.43,-2.11l0.61,-0.75l1.81,-1.24l0.13,-0.2l0.42,-2.7l1.24,-2.12l-0.03,-0.35l-0.34,-0.09l-2.73,1.05l-0.67,-0.53l-0.39,0.02l-1.13,1.11l-1.43,-1.62l-0.49,0.06l-0.41,0.8l-0.67,-1.31l-0.42,-0.12l-2.43,1.43l-1.18,-0.0l-0.18,-1.86l0.43,-1.3l-0.09,-0.33l-1.61,-1.33l-0.26,-0.06l-3.11,0.68l-2.0,-1.66l-1.61,-0.85l-0.01,-1.97l-0.11,-0.23l-1.76,-1.48l0.86,-1.96l2.01,-2.13l0.88,-1.94l1.79,-0.25l1.65,0.6l0.31,-0.06l1.91,-1.8l1.67,0.31l0.22,-0.04l1.91,-1.23l0.13,-0.33l-0.47,-1.82l-0.15,-0.19l-1.0,-0.52l1.51,-1.27l0.09,-0.34l-0.29,-0.19l-1.62,0.06l-2.66,0.88l-0.13,0.09l-0.62,0.72l-1.77,-0.8l-0.16,-0.02l-3.48,0.44l-3.5,-0.92l-1.06,-1.61l-2.78,-2.09l3.07,-1.51l5.52,-2.01l1.65,0.0l-0.28,1.73l0.31,0.35l5.29,-0.16l0.23,-0.49l-2.03,-2.59l-0.1,-0.08l-3.03,-1.58l-1.79,-2.12l-2.4,-1.83l-3.18,-1.27l1.13,-1.84l4.28,-0.14l0.15,-0.05l3.16,-2.0l0.13,-0.17l0.57,-2.07l2.43,-2.02l2.42,-0.52l4.67,-1.98l2.22,0.29l0.2,-0.04l3.74,-2.37l3.57,0.91ZM37.66,123.49l-2.31,1.26l-1.04,-0.75l-0.31,-1.35l2.06,-1.16l1.24,-0.51l1.48,0.22l0.76,0.81l-1.89,1.49ZM30.89,233.84l1.2,0.57l0.35,0.3l0.48,0.69l-1.6,0.86l-0.3,0.31l-0.24,-0.14l0.05,-0.54l-0.02,-0.15l-0.36,-0.83l0.05,-0.12l0.39,-0.38l0.07,-0.31l-0.09,-0.27ZM29.06,231.89l0.5,0.14l0.31,0.19l-0.46,0.1l-0.34,-0.43ZM25.02,230.13l0.2,-0.11l0.4,0.47l-0.43,-0.05l-0.17,-0.31ZM21.29,228.68l0.1,-0.07l0.22,0.02l0.02,0.21l-0.02,0.02l-0.32,-0.18ZM6.0,113.33l-1.19,0.45l-1.5,-0.64l-0.94,-0.63l1.76,-0.46l1.71,0.29l0.16,0.98Z", "name": "United States of America"}, "LV": {"path": "M473.99,127.16l0.07,-2.15l1.15,-2.11l2.05,-1.07l1.84,2.48l0.25,0.12l2.01,-0.07l0.29,-0.25l0.45,-2.58l1.85,-0.56l0.98,0.4l2.13,1.33l0.16,0.05l1.97,0.01l1.02,0.7l0.21,1.67l0.71,1.84l-2.44,1.23l-1.36,0.53l-2.28,-1.62l-0.12,-0.05l-1.18,-0.2l-0.28,-0.6l-0.31,-0.17l-2.43,0.35l-4.17,-0.23l-0.12,0.02l-2.45,0.93Z", "name": "Latvia"}, "UY": {"path": "M276.9,363.17l1.3,-0.23l2.4,2.04l0.22,0.07l0.82,-0.07l2.48,1.7l1.93,1.5l1.28,1.67l-0.95,1.14l-0.04,0.31l0.63,1.45l-0.96,1.57l-2.65,1.47l-1.73,-0.53l-0.15,-0.01l-1.25,0.28l-2.22,-1.16l-0.16,-0.03l-1.56,0.08l-1.33,-1.36l0.17,-1.58l0.48,-0.55l0.07,-0.2l-0.02,-2.74l0.66,-2.8l0.57,-2.02Z", "name": "Uruguay"}, "LB": {"path": "M510.44,198.11l-0.48,0.03l-0.26,0.17l-0.15,0.32l-0.21,-0.0l0.72,-1.85l1.19,-1.9l0.74,0.09l0.27,0.73l-1.19,0.93l-0.09,0.13l-0.54,1.36Z", "name": "Lebanon"}, "LA": {"path": "M684.87,248.8l0.61,-0.86l0.05,-0.16l0.11,-2.17l-0.08,-0.22l-1.96,-2.16l-0.15,-2.44l-0.08,-0.18l-1.9,-2.1l-0.19,-0.1l-1.89,-0.18l-0.29,0.15l-0.42,0.76l-1.21,0.06l-0.67,-0.41l-0.31,-0.0l-2.2,1.29l-0.05,-1.77l0.61,-2.7l-0.27,-0.37l-1.44,-0.1l-0.12,-1.31l-0.12,-0.21l-0.87,-0.65l0.38,-0.68l1.76,-1.41l0.08,0.22l0.27,0.2l1.33,0.07l0.31,-0.34l-0.35,-2.75l0.85,-0.25l1.32,1.88l1.11,2.36l0.27,0.17l2.89,0.02l0.78,1.82l-1.32,0.56l-0.12,0.09l-0.72,0.93l0.1,0.45l2.93,1.52l3.62,5.27l1.88,1.78l0.58,1.67l-0.38,2.11l-1.87,-0.79l-0.37,0.11l-0.99,1.54l-1.51,-0.73Z", "name": "Laos"}, "TW": {"path": "M725.6,222.5l-1.5,4.22l-0.82,1.65l-1.01,-1.7l-0.26,-1.8l1.4,-2.48l1.8,-1.81l0.76,0.53l-0.38,1.39Z", "name": "Taiwan"}, "TT": {"path": "M266.35,259.46l0.41,-0.39l0.09,-0.23l-0.04,-0.75l1.14,-0.26l0.2,0.03l-0.07,1.37l-1.73,0.23Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.25,175.38l3.63,1.17l0.14,0.01l2.88,-0.45l2.11,0.26l0.18,-0.03l2.9,-1.53l2.51,-0.13l2.25,1.37l0.36,0.88l-0.23,1.36l0.19,0.33l1.81,0.72l0.61,0.53l-1.31,0.64l-0.16,0.34l0.76,3.24l-0.44,0.8l0.01,0.3l1.19,2.02l-0.71,0.29l-0.74,-0.62l-0.15,-0.07l-2.91,-0.37l-0.15,0.02l-1.04,0.43l-2.78,0.44l-1.44,-0.03l-2.83,1.06l-1.95,0.01l-1.28,-0.52l-0.2,-0.01l-2.62,0.76l-0.7,-0.48l-0.47,0.22l-0.13,1.49l-1.01,0.94l-0.58,-0.82l0.79,-0.9l0.04,-0.34l-0.31,-0.15l-1.46,0.23l-2.03,-0.64l-0.3,0.07l-1.65,1.58l-3.58,0.3l-1.94,-1.47l-0.17,-0.06l-2.7,-0.1l-0.28,0.17l-0.51,1.06l-1.47,0.29l-2.32,-1.46l-0.17,-0.05l-2.55,0.05l-1.4,-2.7l-1.72,-1.54l1.11,-2.06l-0.07,-0.37l-1.35,-1.19l2.47,-2.51l3.74,-0.11l0.26,-0.17l0.96,-2.07l4.56,0.38l0.19,-0.05l2.97,-1.92l2.84,-0.83l4.03,-0.06l4.31,2.08ZM488.85,176.8l-1.81,1.38l-0.57,-1.01l0.02,-0.36l0.45,-0.25l0.13,-0.15l0.78,-1.87l-0.11,-0.37l-0.72,-0.47l1.91,-0.71l1.89,0.35l0.25,0.97l0.17,0.2l1.87,0.83l-0.19,0.31l-2.82,0.16l-0.18,0.07l-1.06,0.91Z", "name": "Turkey"}, "LK": {"path": "M625.44,266.07l-0.35,2.4l-0.9,0.61l-1.91,0.5l-1.04,-1.75l-0.43,-3.5l1.0,-3.6l1.34,1.09l1.13,1.72l1.16,2.52Z", "name": "Sri Lanka"}, "TN": {"path": "M444.91,206.18l-0.99,-4.57l-0.12,-0.18l-1.43,-1.04l-0.02,-0.53l-0.11,-0.22l-1.95,-1.59l-0.19,-1.85l1.44,-1.47l0.08,-0.14l0.59,-2.34l-0.38,-2.77l0.44,-1.28l2.52,-1.08l1.41,0.28l-0.06,1.2l0.43,0.28l1.81,-0.9l0.02,0.06l-1.14,1.28l-0.08,0.2l-0.02,1.32l0.11,0.24l0.74,0.6l-0.29,2.18l-1.56,1.35l-0.09,0.32l0.48,1.54l0.28,0.21l1.11,0.04l0.55,1.17l0.15,0.14l0.76,0.35l-0.12,1.79l-1.1,0.72l-0.8,0.91l-1.68,1.04l-0.13,0.32l0.25,1.08l-0.18,0.96l-0.74,0.39Z", "name": "Tunisia"}, "TL": {"path": "M734.21,307.22l0.17,-0.34l1.99,-0.52l1.72,-0.08l0.78,-0.3l0.29,0.1l-0.43,0.32l-2.57,1.09l-1.71,0.59l-0.05,-0.49l-0.19,-0.36Z", "name": "East Timor"}, "TM": {"path": "M553.16,173.51l-0.12,1.0l-0.26,-0.65l0.38,-0.34ZM553.54,173.16l0.13,-0.12l0.43,-0.09l-0.56,0.21ZM555.68,172.6l0.65,-0.14l1.53,0.76l1.71,2.29l0.27,0.12l1.27,-0.14l2.81,-0.04l0.29,-0.38l-0.35,-1.27l1.98,-0.97l1.96,-1.63l3.05,1.44l0.25,2.23l0.14,0.22l0.96,0.61l0.18,0.05l2.61,-0.13l0.68,0.44l1.2,2.97l0.1,0.13l2.85,2.03l1.67,1.41l2.66,1.45l3.13,1.17l-0.05,1.23l-0.36,-0.04l-1.12,-0.73l-0.44,0.14l-0.34,0.89l-1.96,0.52l-0.22,0.23l-0.47,2.17l-1.26,0.78l-1.93,0.42l-0.21,0.18l-0.46,1.14l-1.64,0.33l-2.3,-0.97l-0.2,-2.23l-0.28,-0.27l-1.76,-0.1l-2.78,-2.48l-0.15,-0.07l-1.95,-0.31l-2.82,-1.48l-1.78,-0.27l-0.18,0.03l-1.03,0.51l-1.6,-0.08l-0.22,0.08l-1.72,1.6l-1.83,0.46l-0.39,-1.7l0.36,-3.0l-0.16,-0.3l-1.73,-0.88l0.57,-1.77l-0.25,-0.39l-1.33,-0.14l0.41,-1.85l2.05,0.63l0.21,-0.01l2.2,-0.95l0.09,-0.49l-1.78,-1.75l-0.69,-1.66l-0.07,-0.03Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.99,178.71l-0.23,0.23l-2.57,-0.47l-0.35,0.25l-0.24,1.7l0.32,0.34l2.66,-0.22l3.15,0.95l4.47,-0.42l0.58,2.45l0.39,0.21l0.71,-0.25l1.22,0.53l-0.06,1.01l0.29,1.28l-2.19,-0.0l-1.71,-0.21l-0.23,0.07l-1.51,1.25l-1.05,0.27l-0.77,0.51l-0.71,-0.67l0.22,-2.28l-0.24,-0.32l-0.43,-0.08l0.17,-0.57l-0.16,-0.36l-1.36,-0.66l-0.34,0.05l-1.08,1.01l-0.09,0.15l-0.25,1.09l-0.24,0.26l-1.36,-0.05l-0.27,0.14l-0.65,1.06l-0.58,-0.39l-0.3,-0.02l-1.68,0.86l-0.36,-0.16l1.28,-2.65l0.02,-0.2l-0.54,-2.17l-0.18,-0.21l-1.53,-0.58l0.41,-0.82l1.89,0.13l0.26,-0.12l1.19,-1.63l0.77,-1.82l2.66,-0.55l-0.33,0.87l0.01,0.23l0.36,0.82l0.3,0.18l0.23,-0.02Z", "name": "Tajikistan"}, "LS": {"path": "M493.32,359.69l0.69,0.65l-0.65,1.12l-0.38,0.8l-1.27,0.39l-0.18,0.15l-0.4,0.77l-0.59,0.18l-1.59,-1.78l1.16,-1.5l1.3,-1.02l0.97,-0.46l0.94,0.72Z", "name": "Lesotho"}, "TH": {"path": "M677.42,253.68l-1.7,-0.88l-0.14,-0.03l-1.77,0.04l0.3,-1.64l-0.3,-0.35l-2.21,0.01l-0.3,0.28l-0.2,2.76l-2.15,5.9l-0.02,0.13l0.17,1.83l0.28,0.27l1.45,0.07l0.93,2.1l0.44,2.15l0.08,0.15l1.4,1.44l0.16,0.09l1.43,0.27l1.04,1.05l-0.58,0.73l-1.24,0.22l-0.15,-0.99l-0.15,-0.22l-2.04,-1.1l-0.36,0.06l-0.23,0.23l-0.72,-0.71l-0.41,-1.18l-0.06,-0.11l-1.33,-1.42l-1.22,-1.2l-0.5,0.13l-0.15,0.54l-0.14,-0.41l0.26,-1.48l0.73,-2.38l1.2,-2.57l1.37,-2.35l0.02,-0.27l-0.95,-2.26l0.03,-1.19l-0.29,-1.42l-0.06,-0.13l-1.65,-2.0l-0.46,-0.99l0.62,-0.34l0.13,-0.15l0.92,-2.23l-0.02,-0.27l-1.05,-1.74l-1.57,-1.86l-1.04,-1.96l0.76,-0.34l0.16,-0.16l1.07,-2.63l1.58,-0.1l0.16,-0.06l1.43,-1.11l1.24,-0.52l0.84,0.62l0.13,1.43l0.28,0.27l1.34,0.09l-0.54,2.39l0.05,2.39l0.45,0.25l2.48,-1.45l0.6,0.36l0.17,0.04l1.47,-0.07l0.25,-0.15l0.41,-0.73l1.58,0.15l1.76,1.93l0.15,2.44l0.08,0.18l1.94,2.15l-0.1,1.96l-0.66,0.93l-2.25,-0.34l-3.24,0.49l-0.19,0.12l-1.6,2.12l-0.06,0.24l0.48,2.46Z", "name": "Thailand"}, "TF": {"path": "M593.76,417.73l1.38,0.84l2.15,0.37l0.04,0.31l-0.59,1.24l-3.36,0.19l-0.05,-1.38l0.43,-1.56Z", "name": "French Southern and Antarctic Lands"}, "TG": {"path": "M425.23,269.29l-1.49,0.4l-0.43,-0.68l-0.64,-1.54l-0.18,-1.16l0.54,-2.21l-0.04,-0.24l-0.59,-0.86l-0.23,-1.9l0.0,-1.82l-0.07,-0.19l-0.95,-1.19l0.1,-0.41l1.58,0.04l-0.23,0.97l0.08,0.28l1.55,1.55l0.09,1.13l0.08,0.19l0.42,0.43l-0.11,5.66l0.52,1.53Z", "name": "Togo"}, "TD": {"path": "M457.57,252.46l0.23,-1.08l-0.28,-0.36l-1.32,-0.05l0.0,-1.35l-0.1,-0.22l-0.9,-0.82l0.99,-3.1l3.12,-2.37l0.12,-0.23l0.13,-3.33l0.95,-5.2l0.53,-1.09l-0.07,-0.36l-0.94,-0.81l-0.03,-0.7l-0.12,-0.23l-0.84,-0.61l-0.57,-3.76l2.21,-1.26l19.67,9.88l0.12,9.74l-1.83,-0.15l-0.28,0.14l-1.14,1.89l-0.68,1.62l0.05,0.31l0.33,0.38l-0.61,0.58l-0.08,0.3l0.25,0.93l-0.58,0.95l-0.29,1.01l0.34,0.37l0.67,-0.11l0.39,0.73l0.03,1.4l0.11,0.23l0.8,0.65l-0.01,0.24l-1.38,0.37l-0.11,0.06l-1.27,1.03l-1.83,2.76l-2.21,1.1l-2.34,-0.15l-0.82,0.25l-0.2,0.37l0.19,0.68l-1.16,0.79l-1.01,0.94l-2.92,0.89l-0.5,-0.46l-0.17,-0.08l-0.41,-0.05l-0.28,0.12l-0.38,0.54l-1.36,0.12l0.1,-0.18l0.01,-0.27l-0.78,-1.72l-0.35,-1.03l-0.17,-0.18l-1.03,-0.41l-1.29,-1.28l0.36,-0.78l0.9,0.2l0.14,-0.0l0.67,-0.17l1.36,0.02l0.26,-0.45l-1.32,-2.22l0.09,-1.64l-0.17,-1.68l-0.04,-0.13l-0.93,-1.53Z", "name": "Chad"}, "LY": {"path": "M457.99,226.38l-1.57,0.87l-1.25,-1.28l-0.13,-0.08l-3.85,-1.11l-1.04,-1.57l-0.09,-0.09l-1.98,-1.23l-0.27,-0.02l-0.93,0.39l-0.72,-1.2l-0.09,-1.07l-0.06,-0.16l-1.33,-1.75l0.83,-0.94l0.07,-0.24l-0.21,-1.64l0.31,-1.43l-0.17,-1.29l0.43,-2.26l-0.15,-1.33l-0.73,-2.18l0.99,-0.52l0.16,-0.21l0.22,-1.16l-0.22,-1.06l1.54,-0.95l0.81,-0.92l1.19,-0.78l0.14,-0.23l0.12,-1.76l2.57,0.84l0.16,0.01l0.99,-0.23l2.01,0.45l3.19,1.2l1.12,2.36l0.2,0.16l2.24,0.53l3.5,1.14l2.65,1.36l0.29,-0.01l1.22,-0.71l1.27,-1.32l0.07,-0.29l-0.55,-2.0l0.69,-1.19l1.7,-1.23l1.61,-0.35l3.2,0.54l0.78,1.14l0.24,0.13l0.85,0.01l0.84,0.47l2.35,0.31l0.42,0.63l-0.79,1.16l-0.04,0.26l0.35,1.08l-0.61,1.6l-0.0,0.2l0.73,2.16l0.0,24.24l-2.58,0.01l-0.3,0.29l-0.02,0.62l-19.55,-9.83l-0.28,0.01l-2.53,1.44Z", "name": "Libya"}, "AE": {"path": "M550.59,223.8l0.12,0.08l1.92,-0.41l3.54,0.15l0.23,-0.09l1.71,-1.79l1.86,-1.7l1.31,-1.36l0.26,0.5l0.28,1.72l-0.93,0.01l-0.3,0.26l-0.21,1.73l0.11,0.27l0.08,0.06l-0.7,0.32l-0.17,0.27l-0.01,0.99l-0.68,1.02l-0.05,0.15l-0.06,0.96l-0.32,0.36l-7.19,-1.27l-0.79,-2.22Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.66,256.5l0.65,0.91l-0.03,1.13l-1.05,1.39l-0.03,0.31l0.95,2.0l0.32,0.17l1.08,-0.16l0.24,-0.21l0.56,-1.83l-0.06,-0.29l-0.71,-0.81l-0.1,-1.58l2.9,-0.96l0.19,-0.37l-0.29,-1.02l0.45,-0.41l0.72,1.43l0.26,0.16l1.65,0.04l1.46,1.27l0.08,0.72l0.3,0.27l2.28,0.02l2.55,-0.25l1.34,1.06l0.14,0.06l1.92,0.31l0.2,-0.03l1.4,-0.79l0.15,-0.25l0.02,-0.36l2.82,-0.14l1.17,-0.01l-0.41,0.14l-0.14,0.46l0.86,1.19l0.22,0.12l1.93,0.18l1.73,1.13l0.37,1.9l0.31,0.24l1.21,-0.05l0.52,0.32l-1.63,1.21l-0.11,0.17l-0.22,0.92l0.07,0.27l0.63,0.69l-0.31,0.24l-1.48,0.39l-0.22,0.3l0.04,1.03l-0.59,0.6l-0.01,0.41l1.67,1.87l0.23,0.48l-0.72,0.76l-2.71,0.91l-1.78,0.39l-0.13,0.06l-0.6,0.49l-1.84,-0.58l-1.89,-0.33l-0.18,0.03l-0.47,0.23l-0.02,0.53l0.96,0.56l-0.08,1.58l0.35,1.58l0.26,0.23l1.91,0.19l0.02,0.07l-1.54,0.62l-0.18,0.2l-0.25,0.92l-0.88,0.35l-1.85,0.58l-0.16,0.13l-0.4,0.64l-1.66,0.14l-1.22,-1.18l-0.79,-2.52l-0.67,-0.88l-0.66,-0.43l0.99,-0.98l0.09,-0.26l-0.09,-0.56l-0.08,-0.16l-0.66,-0.69l-0.47,-1.54l0.18,-1.67l0.55,-0.85l0.45,-1.35l-0.15,-0.36l-0.89,-0.43l-0.19,-0.02l-1.39,0.28l-1.76,-0.13l-0.92,0.23l-1.64,-2.01l-0.17,-0.1l-1.54,-0.33l-3.05,0.23l-0.5,-0.73l-0.15,-0.12l-0.45,-0.15l-0.05,-0.28l0.28,-0.86l0.01,-0.15l-0.2,-1.01l-0.08,-0.15l-0.5,-0.5l-0.3,-1.08l-0.25,-0.22l-0.89,-0.12l0.54,-1.18l0.29,-1.73l0.66,-0.85l0.94,-0.7l0.09,-0.11l0.3,-0.6Z", "name": "Venezuela"}, "AF": {"path": "M574.42,192.1l2.24,0.95l0.18,0.02l1.89,-0.38l0.22,-0.18l0.46,-1.14l1.82,-0.4l1.5,-0.91l0.14,-0.19l0.46,-2.12l1.93,-0.51l0.2,-0.18l0.26,-0.68l0.87,0.57l0.13,0.05l0.79,0.09l1.35,0.02l1.83,0.59l0.75,0.34l0.26,-0.01l1.66,-0.85l0.7,0.46l0.42,-0.09l0.72,-1.17l1.32,0.05l0.23,-0.1l0.39,-0.43l0.07,-0.14l0.24,-1.08l0.86,-0.81l0.94,0.46l-0.2,0.64l0.23,0.38l0.49,0.09l-0.21,2.15l0.09,0.25l0.99,0.94l0.38,0.03l0.83,-0.57l1.06,-0.27l0.12,-0.06l1.46,-1.21l1.63,0.2l2.4,0.0l0.17,0.32l-1.12,0.25l-1.23,0.52l-2.86,0.33l-2.69,0.6l-0.13,0.06l-1.46,1.25l-0.07,0.36l0.58,1.18l0.25,1.21l-1.13,1.08l-0.09,0.25l0.09,0.98l-0.53,0.79l-2.22,-0.08l-0.28,0.44l0.83,1.57l-1.3,0.58l-0.13,0.11l-1.06,1.69l-0.05,0.18l0.13,1.51l-0.73,0.58l-0.78,-0.22l-0.14,-0.01l-1.91,0.36l-0.23,0.19l-0.2,0.57l-1.65,-0.0l-0.22,0.1l-1.4,1.56l-0.08,0.19l-0.08,2.13l-2.99,1.05l-1.67,-0.23l-0.27,0.1l-0.39,0.46l-1.43,-0.31l-2.43,0.4l-3.69,-1.23l1.96,-2.15l0.08,-0.24l-0.21,-1.78l-0.23,-0.26l-1.69,-0.42l-0.19,-1.62l-0.77,-2.08l0.98,-1.41l-0.14,-0.45l-0.82,-0.31l0.6,-1.79l0.93,-3.21Z", "name": "Afghanistan"}, "IQ": {"path": "M534.42,190.89l0.13,0.14l1.5,0.78l0.15,1.34l-1.13,0.87l-0.11,0.16l-0.58,2.2l0.04,0.24l1.73,2.67l0.12,0.1l2.99,1.49l1.18,1.94l-0.39,1.89l0.29,0.36l0.5,-0.0l0.02,1.17l0.08,0.2l0.83,0.86l-2.36,-0.29l-0.29,0.13l-1.74,2.49l-4.4,-0.21l-7.03,-5.49l-3.73,-1.94l-2.92,-0.74l-0.89,-3.0l5.33,-2.81l0.15,-0.19l0.95,-3.43l-0.2,-2.0l1.19,-0.61l0.11,-0.09l1.23,-1.73l0.92,-0.38l2.75,0.35l0.81,0.68l0.31,0.05l0.94,-0.38l1.5,3.17Z", "name": "Iraq"}, "IS": {"path": "M384.26,87.96l-0.51,2.35l0.08,0.28l2.61,2.58l-2.99,2.83l-7.16,2.72l-2.08,0.7l-9.51,-1.71l1.89,-1.36l-0.07,-0.53l-4.4,-1.59l3.33,-0.59l0.25,-0.32l-0.11,-1.2l-0.25,-0.27l-4.82,-0.88l1.38,-2.2l3.54,-0.57l3.8,2.74l0.33,0.01l3.68,-2.18l3.02,1.12l0.25,-0.02l4.01,-2.18l3.72,0.27Z", "name": "Iceland"}, "IR": {"path": "M556.2,187.5l2.05,-0.52l0.13,-0.07l1.69,-1.57l1.55,0.08l0.15,-0.03l1.02,-0.5l1.64,0.25l2.82,1.48l1.91,0.3l2.8,2.49l0.18,0.08l1.61,0.09l0.19,2.09l-1.0,3.47l-0.69,2.04l0.18,0.38l0.73,0.28l-0.85,1.22l-0.04,0.28l0.81,2.19l0.19,1.72l0.23,0.26l1.69,0.42l0.17,1.43l-2.18,2.39l-0.01,0.4l1.22,1.42l1.0,1.62l0.12,0.11l2.23,1.11l0.06,2.2l0.2,0.27l1.03,0.38l0.14,0.83l-3.38,1.3l-0.18,0.19l-0.87,2.85l-4.44,-0.76l-2.75,-0.62l-2.64,-0.32l-1.01,-3.11l-0.17,-0.19l-1.2,-0.48l-0.18,-0.01l-1.99,0.51l-2.42,1.25l-2.89,-0.84l-2.48,-2.03l-2.41,-0.79l-1.61,-2.47l-1.84,-3.63l-0.36,-0.15l-1.22,0.4l-1.48,-0.84l-0.37,0.06l-0.72,0.82l-1.08,-1.12l-0.02,-1.35l-0.3,-0.29l-0.43,0.0l0.34,-1.64l-0.04,-0.22l-1.29,-2.11l-0.12,-0.11l-3.0,-1.49l-1.62,-2.49l0.52,-1.98l1.18,-0.92l0.11,-0.27l-0.19,-1.66l-0.16,-0.23l-1.55,-0.81l-1.58,-3.33l-1.3,-2.2l0.41,-0.75l0.03,-0.21l-0.73,-3.12l1.2,-0.59l0.35,0.9l1.26,1.35l0.15,0.09l1.81,0.39l0.91,-0.09l0.15,-0.06l2.9,-2.13l0.7,-0.16l0.48,0.56l-0.75,1.26l0.05,0.37l1.56,1.53l0.28,0.08l0.37,-0.09l0.7,1.89l0.21,0.19l2.31,0.59l1.69,1.4l0.15,0.07l3.66,0.49l3.91,-0.76l0.23,-0.19l0.19,-0.52Z", "name": "Iran"}, "AM": {"path": "M530.51,176.08l2.91,-0.39l0.41,0.63l0.11,0.1l0.66,0.36l-0.32,0.47l0.07,0.41l1.1,0.84l-0.53,0.7l0.06,0.42l1.06,0.8l1.01,0.44l0.04,1.56l-0.44,0.04l-0.88,-1.46l0.01,-0.37l-0.3,-0.31l-0.98,0.01l-0.65,-0.69l-0.26,-0.09l-0.38,0.06l-0.97,-0.82l-1.64,-0.65l0.2,-1.2l-0.02,-0.16l-0.28,-0.69Z", "name": "Armenia"}, "IT": {"path": "M451.68,158.58l0.2,0.16l3.3,0.75l-0.22,1.26l0.02,0.18l0.35,0.78l-1.4,-0.32l-0.21,0.03l-2.04,1.1l-0.16,0.29l0.13,1.47l-0.29,0.82l0.02,0.24l0.82,1.57l0.1,0.11l2.28,1.5l1.29,2.53l2.79,2.43l0.2,0.07l1.83,-0.02l0.31,0.34l-0.46,0.39l0.06,0.5l4.06,1.97l2.06,1.49l0.17,0.36l-0.24,0.53l-1.08,-1.07l-0.15,-0.08l-2.18,-0.49l-0.33,0.15l-1.05,1.91l0.11,0.4l1.63,0.98l-0.22,1.12l-0.84,0.14l-0.22,0.15l-1.27,2.38l-0.54,0.12l0.01,-0.47l0.48,-1.46l0.5,-0.58l0.03,-0.35l-0.97,-1.69l-0.76,-1.48l-0.17,-0.15l-0.94,-0.33l-0.68,-1.18l-0.16,-0.13l-1.53,-0.52l-1.03,-1.14l-0.19,-0.1l-1.78,-0.19l-1.88,-1.3l-2.27,-1.94l-1.64,-1.68l-0.76,-2.94l-0.21,-0.21l-1.22,-0.35l-2.01,-1.0l-0.24,-0.01l-1.15,0.42l-0.11,0.07l-1.38,1.36l-0.5,0.11l0.19,-0.87l-0.21,-0.35l-1.19,-0.34l-0.56,-2.06l0.76,-0.82l0.03,-0.36l-0.68,-1.08l0.04,-0.31l0.68,0.42l0.19,0.04l1.21,-0.15l0.14,-0.06l1.18,-0.89l0.25,0.29l0.25,0.1l1.19,-0.1l0.25,-0.18l0.45,-1.04l1.61,0.34l0.19,-0.02l1.1,-0.53l0.17,-0.22l0.15,-0.95l1.19,0.35l0.35,-0.16l0.23,-0.47l2.11,-0.47l0.45,0.89ZM459.35,184.63l-0.71,1.81l0.0,0.23l0.33,0.79l-0.37,1.03l-1.6,-0.91l-1.33,-0.34l-3.24,-1.36l0.23,-0.99l2.73,0.24l3.95,-0.5ZM443.95,175.91l1.26,1.77l-0.31,3.47l-0.82,-0.13l-0.26,0.08l-0.83,0.79l-0.64,-0.52l-0.1,-3.42l-0.44,-1.34l0.91,0.1l0.21,-0.06l1.01,-0.74Z", "name": "Italy"}, "VN": {"path": "M690.8,230.21l-2.86,1.93l-2.09,2.46l-0.06,0.11l-0.55,1.8l0.04,0.26l4.26,6.1l2.31,1.63l1.46,1.97l1.12,4.62l-0.32,4.3l-1.97,1.57l-2.85,1.62l-2.09,2.14l-2.83,2.13l-0.67,-1.19l0.65,-1.58l-0.09,-0.35l-1.47,-1.14l1.67,-0.79l2.57,-0.18l0.22,-0.47l-0.89,-1.24l3.88,-1.8l0.17,-0.24l0.31,-3.05l-0.01,-0.13l-0.56,-1.63l0.44,-2.48l-0.01,-0.15l-0.63,-1.81l-0.08,-0.12l-1.87,-1.77l-3.64,-5.3l-0.11,-0.1l-2.68,-1.39l0.45,-0.59l1.53,-0.65l0.16,-0.39l-0.97,-2.27l-0.27,-0.18l-2.89,-0.02l-1.04,-2.21l-1.28,-1.83l0.96,-0.46l1.97,0.01l2.43,-0.3l0.13,-0.05l1.95,-1.29l1.04,0.85l0.13,0.06l1.98,0.42l-0.32,1.21l0.09,0.3l1.19,1.07l0.12,0.07l1.88,0.51Z", "name": "Vietnam"}, "AR": {"path": "M258.11,341.34l1.4,1.81l0.51,-0.06l0.89,-1.94l2.51,0.1l0.36,0.49l4.6,4.31l0.15,0.08l1.99,0.39l3.01,1.93l2.5,1.01l0.28,0.91l-2.4,3.97l0.17,0.44l2.57,0.74l2.81,0.41l2.09,-0.44l0.14,-0.07l2.27,-2.06l0.09,-0.17l0.38,-2.2l0.88,-0.36l1.05,1.29l-0.04,1.88l-1.98,1.4l-1.72,1.13l-2.84,2.65l-3.34,3.73l-0.07,0.12l-0.63,2.22l-0.67,2.85l0.02,2.73l-0.47,0.54l-0.07,0.17l-0.36,3.28l0.12,0.27l3.03,2.32l-0.31,1.78l0.11,0.29l1.44,1.15l-0.11,1.17l-2.32,3.57l-3.59,1.51l-4.95,0.6l-2.72,-0.29l-0.32,0.38l0.5,1.67l-0.49,2.13l0.01,0.16l0.4,1.29l-1.27,0.88l-2.41,0.39l-2.33,-1.05l-0.31,0.04l-0.97,0.78l-0.11,0.27l0.35,2.98l0.16,0.23l1.69,0.91l0.31,-0.02l1.08,-0.75l0.46,0.96l-2.1,0.88l-2.01,1.89l-0.09,0.18l-0.36,3.05l-0.51,1.42l-2.16,0.01l-0.19,0.07l-1.96,1.59l-0.1,0.15l-0.72,2.34l0.08,0.31l2.46,2.31l0.13,0.07l2.09,0.56l-0.74,2.45l-2.86,1.75l-0.12,0.14l-1.59,3.71l-2.2,1.24l-0.1,0.09l-1.03,1.54l-0.04,0.23l0.81,3.45l0.06,0.13l1.13,1.32l-2.59,-0.57l-5.89,-0.44l-0.92,-1.73l0.05,-2.4l-0.34,-0.3l-1.49,0.19l-0.72,-0.98l-0.2,-3.21l1.79,-1.33l0.1,-0.13l0.79,-2.04l0.02,-0.16l-0.27,-1.52l1.31,-2.69l0.91,-4.15l-0.23,-1.72l0.91,-0.49l0.15,-0.33l-0.27,-1.16l-0.15,-0.2l-0.87,-0.46l0.65,-1.01l-0.04,-0.37l-1.06,-1.09l-0.54,-3.2l0.83,-0.51l0.14,-0.29l-0.42,-3.6l0.58,-2.98l0.64,-2.5l1.41,-1.0l0.12,-0.32l-0.75,-2.8l-0.01,-2.48l1.81,-1.78l0.09,-0.22l-0.06,-2.3l1.39,-2.69l0.03,-0.14l0.01,-2.58l-0.11,-0.24l-0.57,-0.45l-1.1,-4.59l1.49,-2.73l0.04,-0.17l-0.23,-2.59l0.86,-2.38l1.6,-2.48l1.74,-1.65l0.04,-0.39l-0.64,-0.89l0.42,-0.7l0.04,-0.16l-0.08,-4.26l2.55,-1.23l0.16,-0.18l0.86,-2.75l-0.01,-0.22l-0.22,-0.48l1.84,-2.1l3.0,0.59ZM256.77,438.98l-2.1,0.15l-1.18,-1.14l-0.19,-0.08l-1.53,-0.09l-2.38,-0.0l-0.0,-6.28l0.4,0.65l1.25,2.55l0.11,0.12l3.26,2.07l3.19,0.8l-0.82,1.26Z", "name": "Argentina"}, "AU": {"path": "M705.55,353.06l0.09,0.09l0.37,0.05l0.13,-0.35l-0.57,-1.69l0.48,0.3l0.71,0.99l0.34,0.11l0.2,-0.29l-0.04,-1.37l-0.04,-0.14l-1.22,-2.07l-0.28,-0.9l-0.51,-0.69l0.24,-1.33l0.52,-0.7l0.34,-1.32l0.01,-0.13l-0.25,-1.44l0.51,-0.94l0.1,1.03l0.23,0.26l0.32,-0.14l1.01,-1.72l1.94,-0.84l1.27,-1.14l1.84,-0.92l1.0,-0.18l0.6,0.28l0.26,-0.0l1.94,-0.96l1.48,-0.28l0.19,-0.13l0.32,-0.49l0.51,-0.18l1.42,0.05l2.63,-0.76l0.11,-0.06l1.36,-1.15l0.08,-0.1l0.61,-1.33l1.42,-1.27l0.1,-0.19l0.11,-1.03l0.06,-1.32l1.39,-1.74l0.85,1.79l0.4,0.14l1.07,-0.51l0.11,-0.45l-0.77,-1.05l0.53,-0.84l0.86,0.43l0.43,-0.22l0.29,-1.85l1.29,-1.19l0.6,-0.98l1.16,-0.4l0.2,-0.27l0.02,-0.34l0.74,0.2l0.38,-0.27l0.03,-0.44l1.98,-0.61l1.7,1.08l1.36,1.48l0.22,0.1l1.55,0.02l1.57,0.24l0.33,-0.4l-0.48,-1.27l1.09,-1.86l1.06,-0.63l0.1,-0.42l-0.28,-0.46l0.93,-1.24l1.36,-0.8l1.16,0.27l0.14,0.0l2.1,-0.48l0.23,-0.3l-0.05,-1.3l-0.18,-0.26l-1.08,-0.49l0.44,-0.12l1.52,0.58l1.39,1.06l2.11,0.65l0.19,-0.0l0.59,-0.21l1.44,0.72l0.27,0.0l1.37,-0.68l0.84,0.2l0.26,-0.06l0.37,-0.3l0.82,0.89l-0.56,1.14l-0.84,0.91l-0.75,0.07l-0.26,0.38l0.26,0.9l-0.67,1.15l-0.88,1.24l-0.05,0.25l0.18,0.72l0.12,0.17l1.99,1.42l1.96,0.84l1.25,0.86l1.8,1.51l0.19,0.07l0.63,-0.0l1.15,0.58l0.34,0.7l0.17,0.15l2.39,0.88l0.24,-0.02l1.65,-0.88l0.14,-0.16l0.49,-1.37l0.52,-1.19l0.31,-1.39l0.75,-2.02l0.01,-0.19l-0.33,-1.16l0.16,-0.67l0.0,-0.13l-0.28,-1.41l0.3,-1.78l0.42,-0.45l0.05,-0.33l-0.33,-0.73l0.56,-1.25l0.48,-1.39l0.07,-0.69l0.58,-0.59l0.48,0.84l0.17,1.53l0.17,0.24l0.47,0.23l0.09,0.9l0.05,0.14l0.87,1.23l0.17,1.33l-0.09,0.89l0.03,0.15l0.9,2.0l0.43,0.13l1.38,-0.83l0.71,0.92l1.06,0.88l-0.22,0.96l0.0,0.14l0.53,2.2l0.38,1.3l0.15,0.18l0.52,0.26l0.62,2.01l-0.23,1.27l0.02,0.18l0.81,1.76l0.14,0.14l2.69,1.35l3.21,2.21l-0.2,0.4l0.04,0.34l1.39,1.6l0.95,2.78l0.43,0.16l0.79,-0.46l0.85,0.96l0.39,0.05l0.22,-0.15l0.36,2.33l0.09,0.18l1.78,1.63l1.16,1.01l1.9,2.1l0.67,2.05l0.06,1.47l-0.17,1.64l0.03,0.17l1.16,2.22l-0.14,2.28l-0.43,1.24l-0.68,2.44l0.04,1.63l-0.48,1.92l-1.06,2.43l-1.79,1.32l-0.1,0.12l-0.91,2.15l-0.82,1.37l-0.76,2.47l-0.98,1.46l-0.63,2.14l-0.33,2.02l0.1,0.82l-1.21,0.85l-2.71,0.1l-0.13,0.03l-2.31,1.19l-1.21,1.17l-1.34,1.11l-1.89,-1.18l-1.33,-0.46l0.32,-1.24l-0.4,-0.35l-1.46,0.61l-2.06,1.98l-1.99,-0.73l-1.43,-0.46l-1.45,-0.22l-2.32,-0.81l-1.51,-1.67l-0.45,-2.11l-0.6,-1.5l-0.07,-0.11l-1.23,-1.16l-0.16,-0.08l-1.96,-0.28l0.59,-0.99l0.03,-0.24l-0.61,-2.1l-0.54,-0.08l-1.16,1.85l-1.23,0.29l0.73,-0.88l0.06,-0.12l0.37,-1.57l0.93,-1.33l0.05,-0.2l-0.2,-2.07l-0.53,-0.17l-2.01,2.35l-1.52,0.94l-0.12,0.14l-0.82,1.93l-1.5,-0.9l0.07,-1.32l-0.06,-0.2l-1.57,-2.04l-1.15,-0.92l0.3,-0.41l-0.1,-0.44l-3.21,-1.69l-0.13,-0.03l-1.69,-0.08l-2.35,-1.31l-0.16,-0.04l-4.55,0.27l-3.24,0.99l-2.8,0.91l-2.33,-0.18l-0.17,0.03l-2.63,1.41l-2.14,0.64l-0.2,0.19l-0.47,1.42l-0.8,0.99l-1.99,0.06l-1.55,0.24l-2.27,-0.5l-1.79,0.3l-1.71,0.13l-0.19,0.09l-1.38,1.39l-0.58,-0.1l-0.21,0.04l-1.26,0.8l-1.13,0.85l-1.72,-0.1l-1.6,-0.0l-2.58,-1.76l-1.21,-0.49l0.04,-1.19l1.04,-0.32l0.16,-0.12l0.42,-0.64l0.05,-0.19l-0.09,-0.97l0.3,-2.0l-0.28,-1.64l-1.34,-2.84l-0.39,-1.49l0.1,-1.51l-0.04,-0.17l-0.96,-1.72l-0.06,-0.73l-0.09,-0.19l-1.04,-1.01l-0.3,-2.02l-0.05,-0.12l-1.23,-1.83ZM784.95,393.35l2.39,1.01l0.2,0.01l3.26,-0.96l1.19,0.16l0.16,3.19l-0.78,0.95l-0.07,0.16l-0.19,1.83l-0.43,-0.41l-0.44,0.03l-1.61,1.96l-0.4,-0.12l-1.38,-0.09l-1.43,-2.42l-0.37,-2.03l-1.4,-2.53l0.04,-0.94l1.27,0.2Z", "name": "Australia"}, "IL": {"path": "M509.04,199.22l0.71,0.0l0.27,-0.17l0.15,-0.33l0.19,-0.01l0.02,0.73l-0.27,0.34l0.02,0.08l-0.32,0.62l-0.65,-0.27l-0.41,0.19l-0.52,1.85l0.16,0.35l0.14,0.07l-0.17,0.1l-0.14,0.21l-0.11,0.73l0.39,0.33l0.81,-0.26l0.03,0.64l-0.97,3.43l-1.28,-3.67l0.62,-0.78l-0.03,-0.41l0.58,-1.16l0.5,-2.07l0.27,-0.54Z", "name": "Israel"}, "IN": {"path": "M615.84,192.58l2.4,2.97l-0.24,2.17l0.05,0.2l0.94,1.35l-0.06,0.97l-1.46,-0.3l-0.35,0.36l0.7,3.06l0.12,0.18l2.46,1.75l3.11,1.72l-1.23,0.96l-0.1,0.13l-0.97,2.55l0.16,0.38l2.41,1.02l2.37,1.33l3.27,1.52l3.43,0.37l1.37,1.3l0.17,0.08l1.92,0.25l3.0,0.62l2.15,-0.04l0.28,-0.22l0.29,-1.06l0.0,-0.13l-0.32,-1.66l0.16,-0.94l1.0,-0.37l0.23,2.28l0.18,0.24l2.28,1.02l0.2,0.02l1.52,-0.41l2.06,0.18l2.08,-0.08l0.29,-0.27l0.18,-1.66l-0.1,-0.26l-0.53,-0.44l1.38,-0.23l0.15,-0.07l2.26,-2.0l2.75,-1.65l1.97,0.63l0.25,-0.03l1.54,-0.99l0.89,1.28l-0.72,0.97l0.2,0.48l2.49,0.37l0.11,0.61l-0.69,0.39l-0.15,0.3l0.15,1.22l-1.36,-0.37l-0.23,0.03l-3.24,1.86l-0.15,0.28l0.07,1.44l-1.33,2.16l-0.04,0.13l-0.12,1.24l-0.98,1.91l-1.72,-0.53l-0.39,0.28l-0.09,2.66l-0.52,0.83l-0.04,0.23l0.21,0.89l-0.71,0.36l-1.21,-3.85l-0.29,-0.21l-0.69,0.01l-0.29,0.23l-0.28,1.17l-0.84,-0.84l0.6,-1.17l0.97,-0.13l0.23,-0.16l1.15,-2.25l-0.18,-0.42l-1.54,-0.47l-2.3,0.04l-2.13,-0.33l-0.19,-1.63l-0.26,-0.26l-1.13,-0.13l-1.93,-1.13l-0.42,0.13l-0.88,1.82l0.08,0.37l1.47,1.15l-1.21,0.77l-0.1,0.1l-0.56,0.97l0.13,0.42l1.31,0.61l-0.36,1.35l0.01,0.2l0.85,1.95l0.37,2.05l-0.26,0.68l-1.55,-0.02l-3.09,0.54l-0.25,0.32l0.13,1.84l-1.21,1.4l-3.64,1.79l-2.79,3.04l-1.86,1.61l-2.48,1.68l-0.13,0.25l-0.0,1.0l-1.07,0.55l-2.21,0.9l-1.13,0.13l-0.25,0.19l-0.75,1.96l-0.02,0.15l0.52,3.31l0.13,2.03l-1.03,2.35l-0.03,0.12l-0.01,4.03l-1.02,0.1l-0.23,0.15l-1.14,1.93l0.04,0.36l0.44,0.48l-1.83,0.57l-0.18,0.15l-0.81,1.65l-0.74,0.53l-2.14,-2.12l-1.14,-3.47l-0.96,-2.57l-0.9,-1.26l-1.3,-2.38l-0.61,-3.14l-0.44,-1.62l-2.29,-3.56l-1.03,-4.94l-0.74,-3.29l0.01,-3.12l-0.49,-2.51l-0.41,-0.22l-3.56,1.53l-1.59,-0.28l-2.96,-2.87l0.94,-0.74l0.06,-0.41l-0.74,-1.03l-2.73,-2.1l1.35,-1.43l5.38,0.01l0.29,-0.36l-0.5,-2.29l-0.09,-0.15l-1.33,-1.28l-0.27,-1.96l-0.12,-0.2l-1.36,-1.0l2.42,-2.48l2.77,0.2l0.24,-0.1l2.62,-2.85l1.59,-2.8l2.41,-2.74l0.07,-0.2l-0.04,-1.82l2.01,-1.51l-0.01,-0.49l-1.95,-1.33l-0.83,-1.81l-0.82,-2.27l0.98,-0.97l3.64,0.66l2.89,-0.42l0.17,-0.08l2.18,-2.15Z", "name": "India"}, "TZ": {"path": "M505.77,287.58l0.36,0.23l8.95,5.03l0.15,1.3l0.13,0.21l3.4,2.37l-1.07,2.88l-0.02,0.14l0.15,1.42l0.15,0.23l1.47,0.84l0.05,0.42l-0.66,1.44l-0.02,0.18l0.13,0.72l-0.16,1.16l0.03,0.19l0.87,1.57l1.03,2.48l0.12,0.14l0.53,0.32l-1.59,1.18l-2.64,0.95l-1.45,-0.04l-0.2,0.07l-0.81,0.69l-1.64,0.06l-0.68,0.3l-2.9,-0.69l-1.71,0.17l-0.65,-3.18l-0.05,-0.12l-1.35,-1.88l-0.19,-0.12l-2.41,-0.46l-1.38,-0.74l-1.63,-0.44l-0.96,-0.41l-0.95,-0.58l-1.31,-3.09l-1.47,-1.46l-0.45,-1.31l0.24,-1.34l-0.39,-1.99l0.71,-0.08l0.18,-0.09l0.91,-0.91l0.98,-1.31l0.59,-0.5l0.11,-0.24l-0.02,-0.81l-0.08,-0.2l-0.47,-0.5l-0.1,-0.67l0.51,-0.23l0.18,-0.25l0.14,-1.47l-0.05,-0.2l-0.76,-1.09l0.45,-0.15l2.71,0.03l5.01,-0.19Z", "name": "Tanzania"}, "AZ": {"path": "M539.36,175.66l0.16,0.09l1.11,0.2l0.32,-0.15l0.4,-0.71l1.22,-0.99l1.11,1.33l1.26,2.09l0.22,0.14l1.06,0.13l0.28,0.29l-1.46,0.17l-0.26,0.24l-0.43,2.26l-0.39,0.92l-0.85,0.63l-0.12,0.25l0.06,1.2l-0.22,0.05l-1.28,-1.25l0.74,-1.25l-0.03,-0.35l-0.74,-0.86l-0.3,-0.1l-1.05,0.27l-2.49,1.82l-0.04,-1.46l-0.18,-0.27l-1.09,-0.47l-0.8,-0.6l0.53,-0.7l-0.06,-0.42l-1.11,-0.84l0.34,-0.51l-0.11,-0.43l-0.89,-0.48l-0.33,-0.49l0.25,-0.2l1.78,0.81l1.35,0.18l0.25,-0.09l0.34,-0.35l0.02,-0.39l-1.04,-1.36l0.28,-0.18l0.49,0.07l1.65,1.74ZM533.53,180.16l0.63,0.67l0.22,0.09l0.8,-0.0l0.04,0.31l0.66,1.09l-0.94,-0.21l-1.16,-1.24l-0.25,-0.71Z", "name": "Azerbaijan"}, "IE": {"path": "M405.17,135.35l0.36,2.16l-1.78,2.84l-4.28,1.91l-3.02,-0.43l1.81,-3.13l0.02,-0.26l-1.23,-3.26l3.24,-2.56l1.54,-1.32l0.37,1.33l-0.49,1.77l0.3,0.38l1.49,-0.05l1.68,0.63Z", "name": "Ireland"}, "ID": {"path": "M756.56,287.86l0.69,4.02l0.15,0.21l2.59,1.5l0.39,-0.07l2.05,-2.61l2.75,-1.45l2.09,-0.0l2.08,0.85l1.85,0.89l2.52,0.46l0.08,15.44l-1.72,-1.6l-0.15,-0.07l-2.54,-0.51l-0.29,0.1l-0.53,0.62l-2.53,0.06l0.78,-1.51l1.48,-0.66l0.17,-0.34l-0.65,-2.74l-1.23,-2.19l-0.14,-0.13l-4.85,-2.13l-2.09,-0.23l-3.7,-2.28l-0.41,0.1l-0.67,1.11l-0.63,0.14l-0.41,-0.67l-0.01,-1.01l-0.14,-0.25l-1.39,-0.89l2.05,-0.69l1.73,0.05l0.29,-0.39l-0.21,-0.66l-0.29,-0.21l-3.5,-0.0l-0.9,-1.36l-0.19,-0.13l-2.14,-0.44l-0.65,-0.76l2.86,-0.51l1.28,-0.79l3.75,0.96l0.32,0.76ZM758.01,300.37l-0.79,1.04l-0.14,-1.07l0.4,-0.81l0.29,-0.47l0.24,0.31l-0.0,1.0ZM747.45,292.9l0.48,1.02l-1.45,-0.69l-2.09,-0.21l-1.45,0.16l-1.28,-0.07l0.35,-0.81l2.86,-0.1l2.58,0.68ZM741.15,285.69l-0.16,-0.25l-0.72,-3.08l0.47,-1.86l0.35,-0.38l0.1,0.73l0.25,0.26l1.28,0.19l0.18,0.78l-0.11,1.8l-0.96,-0.18l-0.35,0.22l-0.38,1.52l0.05,0.24ZM741.19,285.75l0.76,0.97l-0.11,0.05l-0.65,-1.02ZM739.18,293.52l-0.61,0.54l-1.44,-0.38l-0.25,-0.55l1.93,-0.09l0.36,0.48ZM728.4,295.87l-0.27,-0.07l-2.26,0.89l-0.37,-0.41l0.27,-0.8l-0.09,-0.33l-1.68,-1.37l0.17,-2.29l-0.42,-0.3l-1.67,0.76l-0.17,0.29l0.21,2.92l0.09,3.34l-1.22,0.28l-0.78,-0.54l0.65,-2.1l0.01,-0.14l-0.39,-2.42l-0.29,-0.25l-0.86,-0.02l-0.63,-1.4l0.99,-1.61l0.35,-1.97l1.24,-3.73l0.49,-0.96l1.95,-1.7l1.86,0.69l3.16,0.35l2.92,-0.1l0.17,-0.06l2.24,-1.65l0.11,0.14l-1.8,2.22l-1.72,0.44l-2.41,-0.48l-4.21,0.13l-2.19,0.36l-0.25,0.24l-0.36,1.9l0.08,0.27l2.24,2.23l0.4,0.02l1.29,-1.08l3.19,-0.58l-0.19,0.06l-1.04,1.4l-2.13,0.94l-0.12,0.45l2.26,3.06l-0.37,0.69l0.03,0.32l1.51,1.95ZM728.48,295.97l0.59,0.76l-0.02,1.37l-1.0,0.55l-0.64,-0.58l1.09,-1.84l-0.02,-0.26ZM728.64,286.95l0.79,-0.14l-0.07,0.39l-0.72,-0.24ZM732.38,310.1l-1.89,0.49l-0.06,-0.06l0.17,-0.64l1.0,-1.42l2.14,-0.87l0.1,0.2l0.04,0.58l-1.49,1.72ZM728.26,305.71l-0.17,0.63l-3.53,0.67l-3.02,-0.28l-0.0,-0.42l1.66,-0.44l1.47,0.71l0.16,0.03l1.75,-0.21l1.69,-0.69ZM722.98,310.33l-0.74,0.03l-2.52,-1.35l1.42,-0.3l1.19,0.7l0.72,0.63l-0.06,0.28ZM716.24,305.63l0.66,0.49l0.22,0.06l1.35,-0.18l0.31,0.53l-4.18,0.77l-0.8,-0.01l0.51,-0.86l1.2,-0.02l0.24,-0.12l0.49,-0.65ZM715.84,280.21l0.09,0.34l2.25,1.86l-2.25,0.22l-0.24,0.17l-0.84,1.71l-0.03,0.15l0.1,2.11l-2.27,1.62l-0.13,0.24l-0.06,2.46l-0.74,2.92l-0.02,-0.05l-0.39,-0.16l-2.62,1.04l-0.86,-1.33l-0.23,-0.14l-1.71,-0.14l-1.19,-0.76l-0.25,-0.03l-2.78,0.84l-0.79,-1.05l-0.26,-0.12l-1.61,0.13l-1.8,-0.25l-0.36,-3.13l-0.15,-0.23l-1.18,-0.65l-1.13,-2.02l-0.33,-2.1l0.27,-2.19l1.05,-1.17l0.28,1.12l0.1,0.16l1.71,1.41l0.28,0.05l1.55,-0.49l1.54,0.17l0.23,-0.07l1.4,-1.21l1.05,-0.19l2.3,0.68l0.16,0.0l2.04,-0.53l0.21,-0.19l1.26,-3.41l0.91,-0.82l0.09,-0.14l0.8,-2.64l2.63,0.0l1.71,0.33l-1.19,1.89l0.02,0.34l1.74,2.24l-0.37,1.0ZM692.67,302.0l0.26,0.19l4.8,0.25l0.28,-0.16l0.44,-0.83l4.29,1.12l0.85,1.52l0.23,0.15l3.71,0.45l2.37,1.15l-2.06,0.69l-2.77,-1.0l-2.25,0.07l-2.57,-0.18l-2.31,-0.45l-2.94,-0.97l-1.84,-0.25l-0.13,0.01l-0.97,0.29l-4.34,-0.98l-0.38,-0.94l-0.25,-0.19l-1.76,-0.14l1.31,-1.84l2.81,0.14l1.97,0.96l0.95,0.19l0.28,0.74ZM685.63,299.27l-2.36,0.04l-2.07,-2.05l-3.17,-2.02l-1.06,-1.5l-1.88,-2.02l-1.22,-1.85l-1.9,-3.49l-2.2,-2.11l-0.71,-2.08l-0.94,-1.99l-0.1,-0.12l-2.21,-1.54l-1.35,-2.17l-1.86,-1.39l-2.53,-2.68l-0.14,-0.81l1.22,0.08l3.76,0.47l2.16,2.4l1.94,1.7l1.37,1.04l2.35,2.67l0.22,0.1l2.44,0.04l1.99,1.62l1.42,2.06l0.09,0.09l1.67,1.0l-0.88,1.8l0.11,0.39l1.44,0.87l0.13,0.04l0.68,0.05l0.41,1.62l0.87,1.4l0.22,0.14l1.71,0.21l1.06,1.38l-0.61,3.04l-0.09,3.6Z", "name": "Indonesia"}, "UA": {"path": "M500.54,141.42l0.9,0.13l0.27,-0.11l0.52,-0.62l0.68,0.13l2.43,-0.3l1.32,1.57l-0.45,0.48l-0.07,0.26l0.21,1.03l0.27,0.24l1.85,0.15l0.76,1.22l-0.05,0.55l0.2,0.31l3.18,1.15l0.18,0.01l1.75,-0.47l1.42,1.41l0.22,0.09l1.42,-0.03l3.44,0.99l0.02,0.65l-0.97,1.62l-0.03,0.24l0.52,1.67l-0.29,0.79l-2.24,0.22l-0.14,0.05l-1.29,0.89l-0.13,0.23l-0.07,1.16l-1.75,0.22l-0.12,0.04l-1.6,0.98l-2.27,0.16l-0.12,0.04l-2.16,1.17l-0.16,0.29l0.15,1.94l0.14,0.23l1.23,0.75l0.18,0.04l2.06,-0.15l-0.22,0.51l-2.67,0.54l-3.27,1.72l-1.0,-0.45l0.45,-1.19l-0.19,-0.39l-2.34,-0.78l0.15,-0.2l2.32,-1.0l0.09,-0.49l-0.73,-0.72l-0.15,-0.08l-3.69,-0.75l-0.14,-0.96l-0.35,-0.25l-2.32,0.39l-0.21,0.15l-0.91,1.7l-1.77,2.1l-0.93,-0.44l-0.24,-0.0l-1.05,0.45l-0.48,-0.25l0.13,-0.07l0.14,-0.15l0.43,-1.04l0.67,-0.97l0.04,-0.26l-0.1,-0.31l0.04,-0.02l0.11,0.19l0.24,0.15l1.48,0.09l0.78,-0.25l0.07,-0.53l-0.27,-0.19l0.09,-0.25l-0.08,-0.33l-0.81,-0.74l-0.34,-1.24l-0.14,-0.18l-0.73,-0.42l0.15,-0.87l-0.11,-0.29l-1.13,-0.86l-0.15,-0.06l-0.97,-0.11l-1.79,-0.97l-0.2,-0.03l-1.66,0.32l-0.13,0.06l-0.52,0.41l-0.95,-0.0l-0.23,0.11l-0.56,0.66l-1.74,0.29l-0.79,0.43l-1.01,-0.68l-0.16,-0.05l-1.57,-0.01l-1.52,-0.35l-0.23,0.04l-0.71,0.45l-0.09,-0.43l-0.13,-0.19l-1.18,-0.74l0.38,-1.02l0.53,-0.64l0.35,0.12l0.37,-0.41l-0.57,-1.29l2.1,-2.5l1.16,-0.36l0.2,-0.2l0.27,-0.92l-0.01,-0.2l-1.1,-2.52l0.79,-0.09l0.13,-0.05l1.3,-0.86l1.83,-0.07l2.48,0.26l2.84,0.8l1.91,0.06l0.88,0.45l0.29,-0.01l0.72,-0.44l0.49,0.58l0.25,0.11l2.2,-0.16l0.94,0.3l0.39,-0.26l0.15,-1.57l0.61,-0.59l2.01,-0.19Z", "name": "Ukraine"}, "QA": {"path": "M548.47,221.47l-0.15,-1.72l0.59,-1.23l0.38,-0.16l0.54,0.6l0.04,1.4l-0.47,1.37l-0.41,0.11l-0.53,-0.37Z", "name": "Qatar"}, "MZ": {"path": "M507.71,314.14l1.65,-0.18l2.96,0.7l0.2,-0.02l0.6,-0.29l1.68,-0.06l0.18,-0.07l0.8,-0.69l1.5,0.02l2.74,-0.98l1.74,-1.27l0.25,0.7l-0.1,2.47l0.31,2.27l0.1,3.97l0.42,1.24l-0.7,1.71l-0.94,1.73l-1.52,1.52l-5.06,2.21l-2.88,2.8l-1.01,0.51l-1.72,1.81l-0.99,0.58l-0.15,0.23l-0.21,1.86l0.04,0.19l1.17,1.95l0.47,1.47l0.03,0.74l0.39,0.28l0.05,-0.01l-0.06,2.13l-0.39,1.19l0.1,0.33l0.42,0.32l-0.28,0.83l-0.95,0.86l-2.03,0.88l-3.08,1.49l-1.1,0.99l-0.09,0.28l0.21,1.13l0.21,0.23l0.38,0.11l-0.14,0.89l-1.39,-0.02l-0.17,-0.94l-0.38,-1.23l-0.2,-0.89l0.44,-2.91l-0.01,-0.14l-0.65,-1.88l-1.15,-3.55l2.52,-2.85l0.68,-1.89l0.29,-0.18l0.14,-0.2l0.28,-1.53l-0.03,-0.19l-0.36,-0.7l0.1,-1.83l0.49,-1.84l-0.01,-3.26l-0.14,-0.25l-1.3,-0.83l-0.11,-0.04l-1.08,-0.17l-0.47,-0.55l-0.1,-0.08l-1.16,-0.54l-0.13,-0.03l-1.83,0.04l-0.32,-2.25l7.19,-1.99l1.32,1.12l0.29,0.06l0.55,-0.19l0.75,0.49l0.11,0.81l-0.49,1.11l-0.02,0.15l0.19,1.81l0.09,0.18l1.63,1.59l0.48,-0.1l0.72,-1.68l0.99,-0.49l0.17,-0.29l-0.21,-3.29l-0.04,-0.13l-1.11,-1.92l-0.9,-0.82l-0.21,-0.08l-0.62,0.03l-0.63,-2.98l0.61,-1.67Z", "name": "Mozambique"}}, "height": 440.7063107441331, "projection": {"type": "mill", "centralMeridian": 11.5}, "width": 900.0});
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function s(s){var e=!1;return t('[data-notify="container"]').each(function(i,n){var a=t(n),o=a.find('[data-notify="title"]').text().trim(),r=a.find('[data-notify="message"]').html().trim(),l=o===t("<div>"+s.settings.content.title+"</div>").html().trim(),d=r===t("<div>"+s.settings.content.message+"</div>").html().trim(),g=a.hasClass("alert-"+s.settings.type);return l&&d&&g&&(e=!0),!e}),e}function e(e,n,a){var o={content:{message:"object"==typeof n?n.message:n,title:n.title?n.title:"",icon:n.icon?n.icon:"",url:n.url?n.url:"#",target:n.target?n.target:"-"}};a=t.extend(!0,{},o,a),this.settings=t.extend(!0,{},i,a),this._defaults=i,"-"===this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"},"number"==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),(this.settings.allow_duplicates||!this.settings.allow_duplicates&&!s(this))&&this.init()}var i={element:"body",position:null,type:"info",allow_dismiss:!0,allow_duplicates:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};String.format=function(){for(var t=arguments[0],s=1;s<arguments.length;s++)t=t.replace(RegExp("\\{"+(s-1)+"\\}","gm"),arguments[s]);return t},t.extend(e.prototype,{init:function(){var t=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),"#"!=this.settings.content.url&&this.styleURL(),this.styleDismiss(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(s,e){var i={};"string"==typeof s?i[s]=e:i=s;for(var n in i)switch(n){case"type":this.$ele.removeClass("alert-"+t.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+t.settings.type),t.settings.type=i[n],this.$ele.addClass("alert-"+i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+i[n]);break;case"icon":var a=this.$ele.find('[data-notify="icon"]');"class"===t.settings.icon_type.toLowerCase()?a.removeClass(t.settings.content.icon).addClass(i[n]):(a.is("img")||a.find("img"),a.attr("src",i[n]));break;case"progress":var o=t.settings.delay-t.settings.delay*(i[n]/100);this.$ele.data("notify-delay",o),this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i[n]).css("width",i[n]+"%");break;case"url":this.$ele.find('[data-notify="url"]').attr("href",i[n]);break;case"target":this.$ele.find('[data-notify="url"]').attr("target",i[n]);break;default:this.$ele.find('[data-notify="'+n+'"]').html(i[n])}var r=this.$ele.outerHeight()+parseInt(t.settings.spacing)+parseInt(t.settings.offset.y);t.reposition(r)},close:function(){t.close()}}},buildNotify:function(){var s=this.settings.content;this.$ele=t(String.format(this.settings.template,this.settings.type,s.title,s.message,s.url,s.target)),this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none"),(this.settings.delay<=0&&!this.settings.showProgressbar||!this.settings.showProgressbar)&&this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){"class"===this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"5px",zIndex:this.settings.z_index+2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:this.settings.z_index+1})},placement:function(){var s=this,e=this.settings.offset.y,i={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",zIndex:this.settings.z_index},n=!1,a=this.settings;switch(t('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){e=Math.max(e,parseInt(t(this).css(a.placement.from))+parseInt(t(this).outerHeight())+parseInt(a.spacing))}),this.settings.newest_on_top===!0&&(e=this.settings.offset.y),i[this.settings.placement.from]=e+"px",this.settings.placement.align){case"left":case"right":i[this.settings.placement.align]=this.settings.offset.x+"px";break;case"center":i.left=0,i.right=0}this.$ele.css(i).addClass(this.settings.animate.enter),t.each(Array("webkit-","moz-","o-","ms-",""),function(t,e){s.$ele[0].style[e+"AnimationIterationCount"]=1}),t(this.settings.element).append(this.$ele),this.settings.newest_on_top===!0&&(e=parseInt(e)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(e)),t.isFunction(s.settings.onShow)&&s.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(){n=!0}).one(this.animations.end,function(){s.$ele.removeClass(s.settings.animate.enter),t.isFunction(s.settings.onShown)&&s.settings.onShown.call(this)}),setTimeout(function(){n||t.isFunction(s.settings.onShown)&&s.settings.onShown.call(this)},600)},bind:function(){var s=this;if(this.$ele.find('[data-notify="dismiss"]').on("click",function(){s.close()}),this.$ele.mouseover(function(){t(this).data("data-hover","true")}).mouseout(function(){t(this).data("data-hover","false")}),this.$ele.data("data-hover","false"),this.settings.delay>0){s.$ele.data("notify-delay",s.settings.delay);var e=setInterval(function(){var t=parseInt(s.$ele.data("notify-delay"))-s.settings.timer;if("false"===s.$ele.data("data-hover")&&"pause"===s.settings.mouse_over||"pause"!=s.settings.mouse_over){var i=(s.settings.delay-t)/s.settings.delay*100;s.$ele.data("notify-delay",t),s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i).css("width",i+"%")}t<=-s.settings.timer&&(clearInterval(e),s.close())},s.settings.timer)}},close:function(){var s=this,e=parseInt(this.$ele.css(this.settings.placement.from)),i=!1;this.$ele.attr("data-closing","true").addClass(this.settings.animate.exit),s.reposition(e),t.isFunction(s.settings.onClose)&&s.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(){i=!0}).one(this.animations.end,function(){t(this).remove(),t.isFunction(s.settings.onClosed)&&s.settings.onClosed.call(this)}),setTimeout(function(){i||(s.$ele.remove(),s.settings.onClosed&&s.settings.onClosed(s.$ele))},600)},reposition:function(s){var e=this,i='[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])',n=this.$ele.nextAll(i);this.settings.newest_on_top===!0&&(n=this.$ele.prevAll(i)),n.each(function(){t(this).css(e.settings.placement.from,s),s=parseInt(s)+parseInt(e.settings.spacing)+t(this).outerHeight()})}}),t.notify=function(t,s){var i=new e(this,t,s);return i.notify},t.notifyDefaults=function(s){return i=t.extend(!0,{},i,s)},t.notifyClose=function(s){"warning"===s&&(s="danger"),"undefined"==typeof s||"all"===s?t("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):"success"===s||"info"===s||"warning"===s||"danger"===s?t(".alert-"+s+"[data-notify]").find('[data-notify="dismiss"]').trigger("click"):s?t(s+"[data-notify]").find('[data-notify="dismiss"]').trigger("click"):t('[data-notify-position="'+s+'"]').find('[data-notify="dismiss"]').trigger("click")},t.notifyCloseExcept=function(s){"warning"===s&&(s="danger"),"success"===s||"info"===s||"warning"===s||"danger"===s?t("[data-notify]").not(".alert-"+s).find('[data-notify="dismiss"]').trigger("click"):t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click")}});
(function(a){a.switcher=function(c){var b=a("input[type=checkbox],input[type=radio]");if(c!==undefined&&c.length){b=b.filter(c)}b.each(function(){var e=a(this).hide(),d=a(document.createElement("div")).addClass("ui-switcher").attr("aria-checked",e.is(":checked"));if("radio"===e.attr("type")){d.attr("data-name",e.attr("name"))}toggleSwitch=function(f){if(f.target.type===undefined){e.trigger(f.type)}d.attr("aria-checked",e.is(":checked"));if("radio"===e.attr("type")){a(".ui-switcher[data-name="+e.attr("name")+"]").not(d.get(0)).attr("aria-checked",false)}};d.on("click",toggleSwitch);e.on("click",toggleSwitch);d.insertBefore(e)})}})(jQuery);
$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  // -----------------------
  // - MONTHLY SALES CHART -
  // -----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d');
  // This will get the first returned node in the jQuery collection.
  var salesChart       = new Chart(salesChartCanvas);

  var salesChartData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label               : 'Electronics',
        fillColor           : 'rgb(210, 214, 222)',
        strokeColor         : 'rgb(210, 214, 222)',
        pointColor          : 'rgb(210, 214, 222)',
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        data                : [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label               : 'Digital Goods',
        fillColor           : 'rgba(60,141,188,0.9)',
        strokeColor         : 'rgba(60,141,188,0.8)',
        pointColor          : '#3b8bba',
        pointStrokeColor    : 'rgba(60,141,188,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data                : [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  var salesChartOptions = {
    // Boolean - If we should show the scale at all
    showScale               : true,
    // Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines      : false,
    // String - Colour of the grid lines
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    // Number - Width of the grid lines
    scaleGridLineWidth      : 1,
    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines  : true,
    // Boolean - Whether the line is curved between points
    bezierCurve             : true,
    // Number - Tension of the bezier curve between points
    bezierCurveTension      : 0.3,
    // Boolean - Whether to show a dot for each point
    pointDot                : false,
    // Number - Radius of each point dot in pixels
    pointDotRadius          : 4,
    // Number - Pixel width of point dot stroke
    pointDotStrokeWidth     : 1,
    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,
    // Boolean - Whether to show a stroke for datasets
    datasetStroke           : true,
    // Number - Pixel width of dataset stroke
    datasetStrokeWidth      : 2,
    // Boolean - Whether to fill the dataset with a color
    datasetFill             : true,
    // String - A legend template
    legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio     : true,
    // Boolean - whether to make the chart responsive to window resizing
    responsive              : true
  };

  // Create the line chart
  salesChart.Line(salesChartData, salesChartOptions);

  // ---------------------------
  // - END MONTHLY SALES CHART -
  // ---------------------------

  // -------------
  // - PIE CHART -
  // -------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
  var pieChart       = new Chart(pieChartCanvas);
  var PieData        = [
    {
      value    : 700,
      color    : '#f56954',
      highlight: '#f56954',
      label    : 'Chrome'
    },
    {
      value    : 500,
      color    : '#00a65a',
      highlight: '#00a65a',
      label    : 'IE'
    },
    {
      value    : 400,
      color    : '#f39c12',
      highlight: '#f39c12',
      label    : 'FireFox'
    },
    {
      value    : 600,
      color    : '#00c0ef',
      highlight: '#00c0ef',
      label    : 'Safari'
    },
    {
      value    : 300,
      color    : '#3c8dbc',
      highlight: '#3c8dbc',
      label    : 'Opera'
    },
    {
      value    : 100,
      color    : '#d2d6de',
      highlight: '#d2d6de',
      label    : 'Navigator'
    }
  ];
  var pieOptions     = {
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke    : true,
    // String - The colour of each segment stroke
    segmentStrokeColor   : '#fff',
    // Number - The width of each segment stroke
    segmentStrokeWidth   : 1,
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    // Number - Amount of animation steps
    animationSteps       : 100,
    // String - Animation easing effect
    animationEasing      : 'easeOutBounce',
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate        : true,
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale         : false,
    // Boolean - whether to make the chart responsive to window resizing
    responsive           : true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio  : false,
    // String - A legend template
    legendTemplate       : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
    // String - A tooltip template
    tooltipTemplate      : '<%=value %> <%=label%> users'
  };
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart.Doughnut(PieData, pieOptions);
  // -----------------
  // - END PIE CHART -
  // -----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
  $('#world-map-markers').vectorMap({
    map              : 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity     : 0.7,
    hoverColor       : false,
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial      : {
        fill            : 'rgba(210, 214, 222, 1)',
        'fill-opacity'  : 1,
        stroke          : 'none',
        'stroke-width'  : 0,
        'stroke-opacity': 1
      },
      hover        : {
        'fill-opacity': 0.7,
        cursor        : 'pointer'
      },
      selected     : {
        fill: 'yellow'
      },
      selectedHover: {}
    },
    markerStyle      : {
      initial: {
        fill  : '#00a65a',
        stroke: '#111'
      }
    },
    markers          : [
      { latLng: [41.90, 12.45], name: 'Vatican City' },
      { latLng: [43.73, 7.41], name: 'Monaco' },
      { latLng: [-0.52, 166.93], name: 'Nauru' },
      { latLng: [-8.51, 179.21], name: 'Tuvalu' },
      { latLng: [43.93, 12.46], name: 'San Marino' },
      { latLng: [47.14, 9.52], name: 'Liechtenstein' },
      { latLng: [7.11, 171.06], name: 'Marshall Islands' },
      { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
      { latLng: [3.2, 73.22], name: 'Maldives' },
      { latLng: [35.88, 14.5], name: 'Malta' },
      { latLng: [12.05, -61.75], name: 'Grenada' },
      { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
      { latLng: [13.16, -59.55], name: 'Barbados' },
      { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
      { latLng: [-4.61, 55.45], name: 'Seychelles' },
      { latLng: [7.35, 134.46], name: 'Palau' },
      { latLng: [42.5, 1.51], name: 'Andorra' },
      { latLng: [14.01, -60.98], name: 'Saint Lucia' },
      { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
      { latLng: [1.3, 103.8], name: 'Singapore' },
      { latLng: [1.46, 173.03], name: 'Kiribati' },
      { latLng: [-21.13, -175.2], name: 'Tonga' },
      { latLng: [15.3, -61.38], name: 'Dominica' },
      { latLng: [-20.2, 57.5], name: 'Mauritius' },
      { latLng: [26.02, 50.55], name: 'Bahrain' },
      { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
    ]
  });

  /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */

  // -----------------
  // - SPARKLINE BAR -
  // -----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type    : 'bar',
      height  : $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  // -----------------
  // - SPARKLINE PIE -
  // -----------------
  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type       : 'pie',
      height     : $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  });

  // ------------------
  // - SPARKLINE LINE -
  // ------------------
  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type     : 'line',
      height   : $this.data('height') ? $this.data('height') : '90',
      width    : '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
});

/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @author Colorlib
* @support <https://github.com/ColorlibHQ/AdminLTE/issues>
* @version 2.4.17
* @repository git://github.com/ColorlibHQ/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");!function(i){"use strict";function s(t,e){if(this.element=t,this.options=e,this.$overlay=i(e.overlayTemplate),""===e.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(),this.load()}var r="lte.boxrefresh",a={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(t){return t}},t='[data-widget="box-refresh"]';function e(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}if("string"==typeof e){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}s.prototype.load=function(){this._addOverlay(),this.options.onLoadStart.call(i(this)),i.get(this.options.source,this.options.params,function(t){this.options.loadInContent&&i(this.element).find(this.options.content).html(t),this.options.onLoadDone.call(i(this),t),this._removeOverlay()}.bind(this),""!==this.options.responseType&&this.options.responseType)},s.prototype._setUpListeners=function(){i(this.element).on("click",this.options.trigger,function(t){t&&t.preventDefault(),this.load()}.bind(this))},s.prototype._addOverlay=function(){i(this.element).append(this.$overlay)},s.prototype._removeOverlay=function(){i(this.$overlay).remove()};var o=i.fn.boxRefresh;i.fn.boxRefresh=e,i.fn.boxRefresh.Constructor=s,i.fn.boxRefresh.noConflict=function(){return i.fn.boxRefresh=o,this},i(window).on("load",function(){i(t).each(function(){e.call(i(this))})})}(jQuery),function(i){"use strict";function s(t,e){this.element=t,this.options=e,this._setUpListeners()}var r="lte.boxwidget",a={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},t=".box",e=".collapsed-box",d=".box-header",l=".box-body",c=".box-footer",h=".box-tools",f="collapsed-box",p="collapsing.boxwidget",u="collapsed.boxwidget",g="expanding.boxwidget",v="expanded.boxwidget",o="removing.boxwidget",n="removed.boxwidget";function b(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}if("string"==typeof n){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}s.prototype.toggle=function(){!i(this.element).is(e)?this.collapse():this.expand()},s.prototype.expand=function(){var t=i.Event(v),e=i.Event(g),o=this.options.collapseIcon,n=this.options.expandIcon;i(this.element).removeClass(f),i(this.element).children(d+", "+l+", "+c).children(h).find("."+n).removeClass(n).addClass(o),i(this.element).children(l+", "+c).slideDown(this.options.animationSpeed,function(){i(this.element).trigger(t)}.bind(this)).trigger(e)},s.prototype.collapse=function(){var t=i.Event(u),e=i.Event(p),o=this.options.collapseIcon,n=this.options.expandIcon;i(this.element).children(d+", "+l+", "+c).children(h).find("."+o).removeClass(o).addClass(n),i(this.element).children(l+", "+c).slideUp(this.options.animationSpeed,function(){i(this.element).addClass(f),i(this.element).trigger(t)}.bind(this)).trigger(e)},s.prototype.remove=function(){var t=i.Event(n),e=i.Event(o);i(this.element).slideUp(this.options.animationSpeed,function(){i(this.element).trigger(t),i(this.element).remove()}.bind(this)).trigger(e)},s.prototype._setUpListeners=function(){var e=this;i(this.element).on("click",this.options.collapseTrigger,function(t){return t&&t.preventDefault(),e.toggle(i(this)),!1}),i(this.element).on("click",this.options.removeTrigger,function(t){return t&&t.preventDefault(),e.remove(i(this)),!1})};var m=i.fn.boxWidget;i.fn.boxWidget=b,i.fn.boxWidget.Constructor=s,i.fn.boxWidget.noConflict=function(){return i.fn.boxWidget=m,this},i(window).on("load",function(){i(t).each(function(){b.call(i(this))})})}(jQuery),function(i){"use strict";function s(t,e){this.element=t,this.options=e,this.hasBindedResize=!1,this.init()}var r="lte.controlsidebar",a={controlsidebarSlide:!0},e=".control-sidebar",t='[data-toggle="control-sidebar"]',o=".control-sidebar-open",n=".control-sidebar-bg",d=".wrapper",l=".layout-boxed",c="control-sidebar-open",h="control-sidebar-hold-transition",f="collapsed.controlsidebar",p="expanded.controlsidebar";function u(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}"string"==typeof n&&e.toggle()})}s.prototype.init=function(){i(this.element).is(t)||i(this).on("click",this.toggle),this.fix(),i(window).resize(function(){this.fix()}.bind(this))},s.prototype.toggle=function(t){t&&t.preventDefault(),this.fix(),i(e).is(o)||i("body").is(o)?this.collapse():this.expand()},s.prototype.expand=function(){i(e).show(),this.options.controlsidebarSlide?i(e).addClass(c):i("body").addClass(h).addClass(c).delay(50).queue(function(){i("body").removeClass(h),i(this).dequeue()}),i(this.element).trigger(i.Event(p))},s.prototype.collapse=function(){this.options.controlsidebarSlide?i(e).removeClass(c):i("body").addClass(h).removeClass(c).delay(50).queue(function(){i("body").removeClass(h),i(this).dequeue()}),i(e).fadeOut(),i(this.element).trigger(i.Event(f))},s.prototype.fix=function(){i("body").is(l)&&this._fixForBoxed(i(n))},s.prototype._fixForBoxed=function(t){t.css({position:"absolute",height:i(d).height()})};var g=i.fn.controlSidebar;i.fn.controlSidebar=u,i.fn.controlSidebar.Constructor=s,i.fn.controlSidebar.noConflict=function(){return i.fn.controlSidebar=g,this},i(document).on("click",t,function(t){t&&t.preventDefault(),u.call(i(this),"toggle")})}(jQuery),function(n){"use strict";function i(t){this.element=t}var s="lte.directchat",t='[data-widget="chat-pane-toggle"]',e=".direct-chat",o="direct-chat-contacts-open";function r(o){return this.each(function(){var t=n(this),e=t.data(s);e||t.data(s,e=new i(t)),"string"==typeof o&&e.toggle(t)})}i.prototype.toggle=function(t){t.parents(e).first().toggleClass(o)};var a=n.fn.directChat;n.fn.directChat=r,n.fn.directChat.Constructor=i,n.fn.directChat.noConflict=function(){return n.fn.directChat=a,this},n(document).on("click",t,function(t){t&&t.preventDefault(),r.call(n(this),"toggle")})}(jQuery),function(i){"use strict";function s(t){this.options=t,this.init()}var r="lte.pushmenu",a={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},t=".sidebar-collapse",e=".main-sidebar",o=".content-wrapper",n=".sidebar-form .form-control",d='[data-toggle="push-menu"]',l=".sidebar-mini",c=".sidebar-expanded-on-hover",h=".fixed",f="sidebar-collapse",p="sidebar-open",u="sidebar-expanded-on-hover",g="sidebar-mini-expand-feature",v="expanded.pushMenu",b="collapsed.pushMenu";function m(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(o))}"toggle"===n&&e.toggle()})}s.prototype.init=function(){(this.options.expandOnHover||i("body").is(l+h))&&(this.expandOnHover(),i("body").addClass(g)),i(o).click(function(){i(window).width()<=this.options.collapseScreenSize&&i("body").hasClass(p)&&this.close()}.bind(this)),i(n).click(function(t){t.stopPropagation()})},s.prototype.toggle=function(){var t=i(window).width(),e=!i("body").hasClass(f);t<=this.options.collapseScreenSize&&(e=i("body").hasClass(p)),e?this.close():this.open()},s.prototype.open=function(){i(window).width()>this.options.collapseScreenSize?i("body").removeClass(f).trigger(i.Event(v)):i("body").addClass(p).trigger(i.Event(v))},s.prototype.close=function(){i(window).width()>this.options.collapseScreenSize?i("body").addClass(f).trigger(i.Event(b)):i("body").removeClass(p+" "+f).trigger(i.Event(b))},s.prototype.expandOnHover=function(){i(e).hover(function(){i("body").is(l+t)&&i(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){i("body").is(c)&&this.collapse()}.bind(this))},s.prototype.expand=function(){setTimeout(function(){i("body").removeClass(f).addClass(u)},this.options.expandTransitionDelay)},s.prototype.collapse=function(){setTimeout(function(){i("body").removeClass(u).addClass(f)},this.options.expandTransitionDelay)};var y=i.fn.pushMenu;i.fn.pushMenu=m,i.fn.pushMenu.Constructor=s,i.fn.pushMenu.noConflict=function(){return i.fn.pushMenu=y,this},i(document).on("click",d,function(t){t.preventDefault(),m.call(i(this),"toggle")}),i(window).on("load",function(){m.call(i(d))})}(jQuery),function(i){"use strict";function s(t,e){this.element=t,this.options=e,this._setUpListeners()}var r="lte.todolist",a={onCheck:function(t){return t},onUnCheck:function(t){return t}},e={data:'[data-widget="todo-list"]'},o="done";function t(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}if("string"==typeof e){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}s.prototype.toggle=function(t){t.parents(e.li).first().toggleClass(o),t.prop("checked")?this.check(t):this.unCheck(t)},s.prototype.check=function(t){this.options.onCheck.call(t)},s.prototype.unCheck=function(t){this.options.onUnCheck.call(t)},s.prototype._setUpListeners=function(){var t=this;i(this.element).on("change ifChanged","input:checkbox",function(){t.toggle(i(this))})};var n=i.fn.todoList;i.fn.todoList=t,i.fn.todoList.Constructor=s,i.fn.todoList.noConflict=function(){return i.fn.todoList=n,this},i(window).on("load",function(){i(e.data).each(function(){t.call(i(this))})})}(jQuery),function(s){"use strict";function n(t,e){this.element=t,this.options=e,s(this.element).addClass(h),s(a+o,this.element).addClass(c),this._setUpListeners()}var i="lte.tree",r={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},a=".treeview",d=".treeview-menu",l=".menu-open, .active",t='[data-widget="tree"]',o=".active",c="menu-open",h="tree",f="collapsed.tree",p="expanded.tree";function e(o){return this.each(function(){var t=s(this);if(!t.data(i)){var e=s.extend({},r,t.data(),"object"==typeof o&&o);t.data(i,new n(t,e))}})}n.prototype.toggle=function(t,e){var o=t.next(d),n=t.parent(),i=n.hasClass(c);n.is(a)&&(this.options.followLink&&"#"!==t.attr("href")||e.preventDefault(),i?this.collapse(o,n):this.expand(o,n))},n.prototype.expand=function(t,e){var o=s.Event(p);if(this.options.accordion){var n=e.siblings(l),i=n.children(d);this.collapse(i,n)}e.addClass(c),t.stop().slideDown(this.options.animationSpeed,function(){s(this.element).trigger(o),e.height("auto")}.bind(this))},n.prototype.collapse=function(t,e){var o=s.Event(f);e.removeClass(c),t.stop().slideUp(this.options.animationSpeed,function(){s(this.element).trigger(o),e.find(a).removeClass(c).find(d).hide()}.bind(this))},n.prototype._setUpListeners=function(){var e=this;s(this.element).on("click",this.options.trigger,function(t){e.toggle(s(this),t)})};var u=s.fn.tree;s.fn.tree=e,s.fn.tree.Constructor=n,s.fn.tree.noConflict=function(){return s.fn.tree=u,this},s(window).on("load",function(){s(t).each(function(){e.call(s(this))})})}(jQuery),function(a){"use strict";function i(t){this.options=t,this.bindedResize=!1,this.activate()}var s="lte.layout",r={slimscroll:!0,resetHeight:!0},d=".wrapper",l=".content-wrapper",c=".layout-boxed",h=".main-footer",f=".main-header",t=".main-sidebar",e="slimScrollDiv",p=".sidebar",u=".control-sidebar",o=".sidebar-menu",n=".main-header .logo",g="fixed",v="hold-transition";function b(n){return this.each(function(){var t=a(this),e=t.data(s);if(!e){var o=a.extend({},r,t.data(),"object"==typeof n&&n);t.data(s,e=new i(o))}if("string"==typeof n){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}i.prototype.activate=function(){this.fix(),this.fixSidebar(),a("body").removeClass(v),this.options.resetHeight&&a("body, html, "+d).css({height:"auto","min-height":"100%"}),this.bindedResize||(a(window).resize(function(){this.fix(),this.fixSidebar(),a(n+", "+p).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),a(o).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),a(o).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},i.prototype.fix=function(){a(c+" > "+d).css("overflow","hidden");var t=a(h).outerHeight()||0,e=a(f).outerHeight()||0,o=e+t,n=a(window).height(),i=a(p).outerHeight()||0;if(a("body").hasClass(g))a(l).css("min-height",n-t);else{var s;s=i+e<=n?(a(l).css("min-height",n-o),n-o):(a(l).css("min-height",i),i);var r=a(u);void 0!==r&&r.height()>s&&a(l).css("min-height",r.height())}},i.prototype.fixSidebar=function(){a("body").hasClass(g)?this.options.slimscroll&&void 0!==a.fn.slimScroll&&0===a(t).find(e).length&&a(p).slimScroll({height:a(window).height()-a(f).height()+"px"}):void 0!==a.fn.slimScroll&&a(p).slimScroll({destroy:!0}).height("auto")};var m=a.fn.layout;a.fn.layout=b,a.fn.layout.Constuctor=i,a.fn.layout.noConflict=function(){return a.fn.layout=m,this},a(window).on("load",function(){b.call(a("body"))})}(jQuery);
/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
$(function () {
    'use strict'

    /**
     * Get access to plugins
     */

    $('[data-toggle="control-sidebar"]').controlSidebar()
    $('[data-toggle="push-menu"]').pushMenu()
    var $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu')
    var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
    var $layout = $('body').data('lte.layout')
    $(window).on('load', function() {
        // Reinitialize variables on load
        $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu')
        $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
        $layout = $('body').data('lte.layout')
    })

    /**
     * List of all the available skins
     *
     * @type Array
     */
    var mySkins = [
        'skin-blue',
        'skin-black',
        'skin-red',
        'skin-yellow',
        'skin-purple',
        'skin-green',
        'skin-blue-light',
        'skin-black-light',
        'skin-red-light',
        'skin-yellow-light',
        'skin-purple-light',
        'skin-green-light'
    ]

    /**
     * Get a prestored setting
     *
     * @param String name Name of of the setting
     * @returns String The value of the setting | null
     */
    function get(name) {
        if (typeof (Storage) !== 'undefined') {
            return localStorage.getItem(name)
        } else {
            window.alert('Please use a modern browser to properly view this template!')
        }
    }

    /**
     * Store a new settings in the browser
     *
     * @param String name Name of the setting
     * @param String val Value of the setting
     * @returns void
     */
    function store(name, val) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem(name, val)
        } else {
            window.alert('Please use a modern browser to properly view this template!')
        }
    }

    /**
     * Toggles layout classes
     *
     * @param String cls the layout class to toggle
     * @returns void
     */
    function changeLayout(cls) {
        $('body').toggleClass(cls)
        $layout.fixSidebar()
        if ($('body').hasClass('fixed') && cls == 'fixed') {
            $pushMenu.expandOnHover()
            $layout.activate()
        }
        $controlSidebar.fix()
    }

    /**
     * Replaces the old skin with the new skin
     * @param String cls the new skin class
     * @returns Boolean false to prevent link's default action
     */
    function changeSkin(cls) {
        $.each(mySkins, function (i) {
            $('body').removeClass(mySkins[i])
        })

        $('body').addClass(cls)
        store('skin', cls)
        return false
    }

    /**
     * Retrieve default settings and apply them to the template
     *
     * @returns void
     */
    function setup() {
        var tmp = get('skin')
        if (tmp && $.inArray(tmp, mySkins))
            changeSkin(tmp)

        // Add the change skin listener
        $('[data-skin]').on('click', function (e) {
            if ($(this).hasClass('knob'))
                return
            e.preventDefault()
            changeSkin($(this).data('skin'))
        })

        // Add the layout manager
        $('[data-layout]').on('click', function () {
            changeLayout($(this).data('layout'))
        })

        $('[data-controlsidebar]').on('click', function () {
            changeLayout($(this).data('controlsidebar'))
            var slide = !$controlSidebar.options.slide

            $controlSidebar.options.slide = slide
            if (!slide)
                $('.control-sidebar').removeClass('control-sidebar-open')
        })

        $('[data-sidebarskin="toggle"]').on('click', function () {
            var $sidebar = $('.control-sidebar')
            if ($sidebar.hasClass('control-sidebar-dark')) {
                $sidebar.removeClass('control-sidebar-dark')
                $sidebar.addClass('control-sidebar-light')
            } else {
                $sidebar.removeClass('control-sidebar-light')
                $sidebar.addClass('control-sidebar-dark')
            }
        })

        $('[data-enable="expandOnHover"]').on('click', function () {
            $(this).attr('disabled', true)
            $pushMenu.expandOnHover()
            if (!$('body').hasClass('sidebar-collapse'))
                $('[data-layout="sidebar-collapse"]').click()
        })

        //  Reset options
        if ($('body').hasClass('fixed')) {
            $('[data-layout="fixed"]').attr('checked', 'checked')
        }
        if ($('body').hasClass('layout-boxed')) {
            $('[data-layout="layout-boxed"]').attr('checked', 'checked')
        }
        if ($('body').hasClass('sidebar-collapse')) {
            $('[data-layout="sidebar-collapse"]').attr('checked', 'checked')
        }

    }

    // Create the new tab
    var $tabPane = $('<div />', {
        'id': 'control-sidebar-theme-demo-options-tab',
        'class': 'tab-pane active'
    })

    // Create the tab button
    var $tabButton = $('<li />', {'class': 'active'})
        .html('<a href=\'#control-sidebar-theme-demo-options-tab\' data-toggle=\'tab\'>'
            + '<i class="fa fa-wrench"></i>'
            + '</a>')

    // Add the tab button to the right sidebar tabs
    $('[href="#control-sidebar-home-tab"]')
        .parent()
        .before($tabButton)

    // Create the menu
    var $demoSettings = $('<div />')

    // Layout options
    $demoSettings.append(
        '<h4 class="control-sidebar-heading">'
        + 'Layout Options'
        + '</h4>'
        // Fixed layout
        + '<div class="form-group">'
        + '<label class="control-sidebar-subheading">'
        + '<input type="checkbox"data-layout="fixed"class="pull-right"/> '
        + 'Fixed layout'
        + '</label>'
        + '<p>Activate the fixed layout. You can\'t use fixed and boxed layouts together</p>'
        + '</div>'
        // Boxed layout
        + '<div class="form-group">'
        + '<label class="control-sidebar-subheading">'
        + '<input type="checkbox"data-layout="layout-boxed" class="pull-right"/> '
        + 'Boxed Layout'
        + '</label>'
        + '<p>Activate the boxed layout</p>'
        + '</div>'
        // Sidebar Toggle
        + '<div class="form-group">'
        + '<label class="control-sidebar-subheading">'
        + '<input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> '
        + 'Toggle Sidebar'
        + '</label>'
        + '<p>Toggle the left sidebar\'s state (open or collapse)</p>'
        + '</div>'
        // Sidebar mini expand on hover toggle
        + '<div class="form-group">'
        + '<label class="control-sidebar-subheading">'
        + '<input type="checkbox"data-enable="expandOnHover"class="pull-right"/> '
        + 'Sidebar Expand on Hover'
        + '</label>'
        + '<p>Let the sidebar mini expand on hover</p>'
        + '</div>'
        // Control Sidebar Toggle
        + '<div class="form-group">'
        + '<label class="control-sidebar-subheading">'
        + '<input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> '
        + 'Toggle Right Sidebar Slide'
        + '</label>'
        + '<p>Toggle between slide over content and push content effects</p>'
        + '</div>'
        // Control Sidebar Skin Toggle
        + '<div class="form-group">'
        + '<label class="control-sidebar-subheading">'
        + '<input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> '
        + 'Toggle Right Sidebar Skin'
        + '</label>'
        + '<p>Toggle between dark and light skins for the right sidebar</p>'
        + '</div>'
    )
    var $skinsList = $('<ul />', {'class': 'list-unstyled clearfix'})

    // Dark sidebar skins
    var $skinBlue =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin">Blue</p>')
    $skinsList.append($skinBlue)
    var $skinBlack =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin">Black</p>')
    $skinsList.append($skinBlack)
    var $skinPurple =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin">Purple</p>')
    $skinsList.append($skinPurple)
    var $skinGreen =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin">Green</p>')
    $skinsList.append($skinGreen)
    var $skinRed =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin">Red</p>')
    $skinsList.append($skinRed)
    var $skinYellow =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin">Yellow</p>')
    $skinsList.append($skinYellow)

    // Light sidebar skins
    var $skinBlueLight =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin" style="font-size: 12px">Blue Light</p>')
    $skinsList.append($skinBlueLight)
    var $skinBlackLight =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin" style="font-size: 12px">Black Light</p>')
    $skinsList.append($skinBlackLight)
    var $skinPurpleLight =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin" style="font-size: 12px">Purple Light</p>')
    $skinsList.append($skinPurpleLight)
    var $skinGreenLight =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin" style="font-size: 12px">Green Light</p>')
    $skinsList.append($skinGreenLight)
    var $skinRedLight =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin" style="font-size: 12px">Red Light</p>')
    $skinsList.append($skinRedLight)
    var $skinYellowLight =
        $('<li />', {style: 'float:left; width: 33.33333%; padding: 5px;'})
            .append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'
                + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'
                + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'
                + '</a>'
                + '<p class="text-center no-margin" style="font-size: 12px">Yellow Light</p>')
    $skinsList.append($skinYellowLight)

    $demoSettings.append('<h4 class="control-sidebar-heading">Skins</h4>')
    $demoSettings.append($skinsList)

    $tabPane.append($demoSettings)
    $('#control-sidebar-home-tab').after($tabPane)

    setup()

    $('[data-toggle="tooltip"]').tooltip()
})

!function(){"use strict";function e(e){return JSON.parse(JSON.stringify(e))}function t(e){for(var t=y(e);"ÿà"<=t[1].slice(0,2)&&t[1].slice(0,2)<="ÿï";)t=[t[0]].concat(t.slice(2));return t.join("")}function a(e){return s(">"+p("B",e.length),e)}function i(e){return s(">"+p("H",e.length),e)}function n(e){return s(">"+p("L",e.length),e)}function r(e,t,r){var o,l,m,y,c="",S="";if("Byte"==t)o=e.length,4>=o?S=a(e)+p("\x00",4-o):(S=s(">L",[r]),c=a(e));else if("Short"==t)o=e.length,2>=o?S=i(e)+p("\x00\x00",2-o):(S=s(">L",[r]),c=i(e));else if("Long"==t)o=e.length,1>=o?S=n(e):(S=s(">L",[r]),c=n(e));else if("Ascii"==t)l=e+"\x00",o=l.length,o>4?(S=s(">L",[r]),c=l):S=l+p("\x00",4-o);else if("Rational"==t){if("number"==typeof e[0])o=1,m=e[0],y=e[1],l=s(">L",[m])+s(">L",[y]);else{o=e.length,l="";for(var f=0;o>f;f++)m=e[f][0],y=e[f][1],l+=s(">L",[m])+s(">L",[y])}S=s(">L",[r]),c=l}else if("SRational"==t){if("number"==typeof e[0])o=1,m=e[0],y=e[1],l=s(">l",[m])+s(">l",[y]);else{o=e.length,l="";for(var f=0;o>f;f++)m=e[f][0],y=e[f][1],l+=s(">l",[m])+s(">l",[y])}S=s(">L",[r]),c=l}else"Undefined"==t&&(o=e.length,o>4?(S=s(">L",[r]),c=e):S=e+p("\x00",4-o));var h=s(">L",[o]);return[h,S,c]}function o(e,t,a){var i,n=8,o=Object.keys(e).length,l=s(">H",[o]);i=["0th","1st"].indexOf(t)>-1?2+12*o+4:2+12*o;var m,p="",y="";for(var m in e)if("string"==typeof m&&(m=parseInt(m)),!("0th"==t&&[34665,34853].indexOf(m)>-1||"Exif"==t&&40965==m||"1st"==t&&[513,514].indexOf(m)>-1)){var c=e[m],S=s(">H",[m]),f=u[t][m].type,h=s(">H",[g[f]]);"number"==typeof c&&(c=[c]);var d=n+i+a+y.length,P=r(c,f,d),C=P[0],R=P[1],L=P[2];p+=S+h+C+R,y+=L}return[l+p,y]}function l(e){var t,a;if("ÿØ"==e.slice(0,2))t=y(e),a=c(t),a?this.tiftag=a.slice(10):this.tiftag=null;else if(["II","MM"].indexOf(e.slice(0,2))>-1)this.tiftag=e;else{if("Exif"!=e.slice(0,4))throw"Given file is neither JPEG nor TIFF.";this.tiftag=e.slice(6)}}function s(e,t){if(!(t instanceof Array))throw"'pack' error. Got invalid type argument.";if(e.length-1!=t.length)throw"'pack' error. "+(e.length-1)+" marks, "+t.length+" elements.";var a;if("<"==e[0])a=!0;else{if(">"!=e[0])throw"";a=!1}for(var i="",n=1,r=null,o=null,l=null;o=e[n];){if("b"==o.toLowerCase()){if(r=t[n-1],"b"==o&&0>r&&(r+=256),r>255||0>r)throw"'pack' error.";l=String.fromCharCode(r)}else if("H"==o){if(r=t[n-1],r>65535||0>r)throw"'pack' error.";l=String.fromCharCode(Math.floor(r%65536/256))+String.fromCharCode(r%256),a&&(l=l.split("").reverse().join(""))}else{if("l"!=o.toLowerCase())throw"'pack' error.";if(r=t[n-1],"l"==o&&0>r&&(r+=4294967296),r>4294967295||0>r)throw"'pack' error.";l=String.fromCharCode(Math.floor(r/16777216))+String.fromCharCode(Math.floor(r%16777216/65536))+String.fromCharCode(Math.floor(r%65536/256))+String.fromCharCode(r%256),a&&(l=l.split("").reverse().join(""))}i+=l,n+=1}return i}function m(e,t){if("string"!=typeof t)throw"'unpack' error. Got invalid type argument.";for(var a=0,i=1;i<e.length;i++)if("b"==e[i].toLowerCase())a+=1;else if("h"==e[i].toLowerCase())a+=2;else{if("l"!=e[i].toLowerCase())throw"'unpack' error. Got invalid mark.";a+=4}if(a!=t.length)throw"'unpack' error. Mismatch between symbol and string length. "+a+":"+t.length;var n;if("<"==e[0])n=!0;else{if(">"!=e[0])throw"'unpack' error.";n=!1}for(var r=[],o=0,l=1,s=null,m=null,p=null,y="";m=e[l];){if("b"==m.toLowerCase())p=1,y=t.slice(o,o+p),s=y.charCodeAt(0),"b"==m&&s>=128&&(s-=256);else if("H"==m)p=2,y=t.slice(o,o+p),n&&(y=y.split("").reverse().join("")),s=256*y.charCodeAt(0)+y.charCodeAt(1);else{if("l"!=m.toLowerCase())throw"'unpack' error. "+m;p=4,y=t.slice(o,o+p),n&&(y=y.split("").reverse().join("")),s=16777216*y.charCodeAt(0)+65536*y.charCodeAt(1)+256*y.charCodeAt(2)+y.charCodeAt(3),"l"==m&&s>=2147483648&&(s-=4294967296)}r.push(s),o+=p,l+=1}return r}function p(e,t){for(var a="",i=0;t>i;i++)a+=e;return a}function y(e){if("ÿØ"!=e.slice(0,2))throw"Given data isn't JPEG.";for(var t=2,a=["ÿØ"];;){if("ÿÚ"==e.slice(t,t+2)){a.push(e.slice(t));break}var i=m(">H",e.slice(t+2,t+4))[0],n=t+i+2;if(a.push(e.slice(t,n)),t=n,t>=e.length)throw"Wrong JPEG data."}return a}function c(e){for(var t,a=0;a<e.length;a++)if(t=e[a],"ÿá"==t.slice(0,2)&&"Exif\x00\x00"==t.slice(4,10))return t;return null}function S(e,t){return"ÿà"==e[1].slice(0,2)&&"ÿá"==e[2].slice(0,2)&&"Exif\x00\x00"==e[2].slice(4,10)?t?(e[2]=t,e=["ÿØ"].concat(e.slice(2))):e=null==t?e.slice(0,2).concat(e.slice(3)):e.slice(0).concat(e.slice(2)):"ÿà"==e[1].slice(0,2)?t&&(e[1]=t):"ÿá"==e[1].slice(0,2)&&"Exif\x00\x00"==e[1].slice(4,10)?t?e[1]=t:null==t&&(e=e.slice(0).concat(e.slice(2))):t&&(e=[e[0],t].concat(e.slice(1))),e.join("")}var f={};if(f.version="1.03",f.remove=function(e){var t=!1;if("ÿØ"==e.slice(0,2));else{if("data:image/jpeg;base64,"!=e.slice(0,23)&&"data:image/jpg;base64,"!=e.slice(0,22))throw"Given data is not jpeg.";e=d(e.split(",")[1]),t=!0}var a=y(e);if("ÿá"==a[1].slice(0,2)&&"Exif\x00\x00"==a[1].slice(4,10))a=[a[0]].concat(a.slice(2));else{if("ÿá"!=a[2].slice(0,2)||"Exif\x00\x00"!=a[2].slice(4,10))throw"Exif not found.";a=a.slice(0,2).concat(a.slice(3))}var i=a.join("");return t&&(i="data:image/jpeg;base64,"+h(i)),i},f.insert=function(e,t){var a=!1;if("Exif\x00\x00"!=e.slice(0,6))throw"Given data is not exif.";if("ÿØ"==t.slice(0,2));else{if("data:image/jpeg;base64,"!=t.slice(0,23)&&"data:image/jpg;base64,"!=t.slice(0,22))throw"Given data is not jpeg.";t=d(t.split(",")[1]),a=!0}var i="ÿá"+s(">H",[e.length+2])+e,n=y(t),r=S(n,i);return a&&(r="data:image/jpeg;base64,"+h(r)),r},f.load=function(e){var t;if("string"!=typeof e)throw"'load' gots invalid type argument.";if("ÿØ"==e.slice(0,2))t=e;else if("data:image/jpeg;base64,"==e.slice(0,23)||"data:image/jpg;base64,"==e.slice(0,22))t=d(e.split(",")[1]);else{if("Exif"!=e.slice(0,4))throw"'load' gots invalid file data.";t=e.slice(6)}var a={"0th":{},Exif:{},GPS:{},Interop:{},"1st":{},thumbnail:null},i=new l(t);if(null===i.tiftag)return a;"II"==i.tiftag.slice(0,2)?i.endian_mark="<":i.endian_mark=">";var n=m(i.endian_mark+"L",i.tiftag.slice(4,8))[0];a["0th"]=i.get_ifd(n,"0th");var r=a["0th"].first_ifd_pointer;if(delete a["0th"].first_ifd_pointer,34665 in a["0th"]&&(n=a["0th"][34665],a.Exif=i.get_ifd(n,"Exif")),34853 in a["0th"]&&(n=a["0th"][34853],a.GPS=i.get_ifd(n,"GPS")),40965 in a.Exif&&(n=a.Exif[40965],a.Interop=i.get_ifd(n,"Interop")),"\x00\x00\x00\x00"!=r&&(n=m(i.endian_mark+"L",r)[0],a["1st"]=i.get_ifd(n,"1st"),513 in a["1st"]&&514 in a["1st"])){var o=a["1st"][513]+a["1st"][514],s=i.tiftag.slice(a["1st"][513],o);a.thumbnail=s}return a},f.dump=function(a){var i,n,r,l,m,p=8,y=e(a),c="Exif\x00\x00MM\x00*\x00\x00\x00\b",S=!1,h=!1,d=!1,u=!1;i="0th"in y?y["0th"]:{},"Exif"in y&&Object.keys(y.Exif).length||"Interop"in y&&Object.keys(y.Interop).length?(i[34665]=1,S=!0,n=y.Exif,"Interop"in y&&Object.keys(y.Interop).length?(n[40965]=1,d=!0,r=y.Interop):Object.keys(n).indexOf(f.ExifIFD.InteroperabilityTag.toString())>-1&&delete n[40965]):Object.keys(i).indexOf(f.ImageIFD.ExifTag.toString())>-1&&delete i[34665],"GPS"in y&&Object.keys(y.GPS).length?(i[f.ImageIFD.GPSTag]=1,h=!0,l=y.GPS):Object.keys(i).indexOf(f.ImageIFD.GPSTag.toString())>-1&&delete i[f.ImageIFD.GPSTag],"1st"in y&&"thumbnail"in y&&null!=y.thumbnail&&(u=!0,y["1st"][513]=1,y["1st"][514]=1,m=y["1st"]);var P,C,R,L,x,I=o(i,"0th",0),D=I[0].length+12*S+12*h+4+I[1].length,G="",A=0,v="",b=0,T="",k=0,w="";if(S&&(P=o(n,"Exif",D),A=P[0].length+12*d+P[1].length),h&&(C=o(l,"GPS",D+A),v=C.join(""),b=v.length),d){var F=D+A+b;R=o(r,"Interop",F),T=R.join(""),k=T.length}if(u){var F=D+A+b+k;if(L=o(m,"1st",F),x=t(y.thumbnail),x.length>64e3)throw"Given thumbnail is too large. max 64kB"}var B="",E="",M="",O="\x00\x00\x00\x00";if(S){var N=p+D,U=s(">L",[N]),_=34665,H=s(">H",[_]),j=s(">H",[g.Long]),V=s(">L",[1]);B=H+j+V+U}if(h){var N=p+D+A,U=s(">L",[N]),_=34853,H=s(">H",[_]),j=s(">H",[g.Long]),V=s(">L",[1]);E=H+j+V+U}if(d){var N=p+D+A+b,U=s(">L",[N]),_=40965,H=s(">H",[_]),j=s(">H",[g.Long]),V=s(">L",[1]);M=H+j+V+U}if(u){var N=p+D+A+b+k;O=s(">L",[N]);var J=N+L[0].length+24+4+L[1].length,X="\x00\x00\x00\x00"+s(">L",[J]),z="\x00\x00\x00\x00"+s(">L",[x.length]);w=L[0]+X+z+"\x00\x00\x00\x00"+L[1]+x}var Y=I[0]+B+E+O+I[1];return S&&(G=P[0]+M+P[1]),c+Y+G+v+T+w},l.prototype={get_ifd:function(e,t){var a,i={},n=m(this.endian_mark+"H",this.tiftag.slice(e,e+2))[0],r=e+2;a=["0th","1st"].indexOf(t)>-1?"Image":t;for(var o=0;n>o;o++){e=r+12*o;var l=m(this.endian_mark+"H",this.tiftag.slice(e,e+2))[0],s=m(this.endian_mark+"H",this.tiftag.slice(e+2,e+4))[0],p=m(this.endian_mark+"L",this.tiftag.slice(e+4,e+8))[0],y=this.tiftag.slice(e+8,e+12),c=[s,p,y];l in u[a]&&(i[l]=this.convert_value(c))}return"0th"==t&&(e=r+12*n,i.first_ifd_pointer=this.tiftag.slice(e,e+4)),i},convert_value:function(e){var t,a=null,i=e[0],n=e[1],r=e[2];if(1==i)n>4?(t=m(this.endian_mark+"L",r)[0],a=m(this.endian_mark+p("B",n),this.tiftag.slice(t,t+n))):a=m(this.endian_mark+p("B",n),r.slice(0,n));else if(2==i)n>4?(t=m(this.endian_mark+"L",r)[0],a=this.tiftag.slice(t,t+n-1)):a=r.slice(0,n-1);else if(3==i)n>2?(t=m(this.endian_mark+"L",r)[0],a=m(this.endian_mark+p("H",n),this.tiftag.slice(t,t+2*n))):a=m(this.endian_mark+p("H",n),r.slice(0,2*n));else if(4==i)n>1?(t=m(this.endian_mark+"L",r)[0],a=m(this.endian_mark+p("L",n),this.tiftag.slice(t,t+4*n))):a=m(this.endian_mark+p("L",n),r);else if(5==i)if(t=m(this.endian_mark+"L",r)[0],n>1){a=[];for(var o=0;n>o;o++)a.push([m(this.endian_mark+"L",this.tiftag.slice(t+8*o,t+4+8*o))[0],m(this.endian_mark+"L",this.tiftag.slice(t+4+8*o,t+8+8*o))[0]])}else a=[m(this.endian_mark+"L",this.tiftag.slice(t,t+4))[0],m(this.endian_mark+"L",this.tiftag.slice(t+4,t+8))[0]];else if(7==i)n>4?(t=m(this.endian_mark+"L",r)[0],a=this.tiftag.slice(t,t+n)):a=r.slice(0,n);else{if(10!=i)throw"Exif might be wrong. Got incorrect value type to decode. type:"+i;if(t=m(this.endian_mark+"L",r)[0],n>1){a=[];for(var o=0;n>o;o++)a.push([m(this.endian_mark+"l",this.tiftag.slice(t+8*o,t+4+8*o))[0],m(this.endian_mark+"l",this.tiftag.slice(t+4+8*o,t+8+8*o))[0]])}else a=[m(this.endian_mark+"l",this.tiftag.slice(t,t+4))[0],m(this.endian_mark+"l",this.tiftag.slice(t+4,t+8))[0]]}return a instanceof Array&&1==a.length?a[0]:a}},"undefined"!=typeof window&&"function"==typeof window.btoa)var h=window.btoa;if("undefined"==typeof h)var h=function(e){for(var t,a,i,n,r,o,l,s="",m=0,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";m<e.length;)t=e.charCodeAt(m++),a=e.charCodeAt(m++),i=e.charCodeAt(m++),n=t>>2,r=(3&t)<<4|a>>4,o=(15&a)<<2|i>>6,l=63&i,isNaN(a)?o=l=64:isNaN(i)&&(l=64),s=s+p.charAt(n)+p.charAt(r)+p.charAt(o)+p.charAt(l);return s};if("undefined"!=typeof window&&"function"==typeof window.atob)var d=window.atob;if("undefined"==typeof d)var d=function(e){var t,a,i,n,r,o,l,s="",m=0,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");m<e.length;)n=p.indexOf(e.charAt(m++)),r=p.indexOf(e.charAt(m++)),o=p.indexOf(e.charAt(m++)),l=p.indexOf(e.charAt(m++)),t=n<<2|r>>4,a=(15&r)<<4|o>>2,i=(3&o)<<6|l,s+=String.fromCharCode(t),64!=o&&(s+=String.fromCharCode(a)),64!=l&&(s+=String.fromCharCode(i));return s};var g={Byte:1,Ascii:2,Short:3,Long:4,Rational:5,Undefined:7,SLong:9,SRational:10},u={Image:{11:{name:"ProcessingSoftware",type:"Ascii"},254:{name:"NewSubfileType",type:"Long"},255:{name:"SubfileType",type:"Short"},256:{name:"ImageWidth",type:"Long"},257:{name:"ImageLength",type:"Long"},258:{name:"BitsPerSample",type:"Short"},259:{name:"Compression",type:"Short"},262:{name:"PhotometricInterpretation",type:"Short"},263:{name:"Threshholding",type:"Short"},264:{name:"CellWidth",type:"Short"},265:{name:"CellLength",type:"Short"},266:{name:"FillOrder",type:"Short"},269:{name:"DocumentName",type:"Ascii"},270:{name:"ImageDescription",type:"Ascii"},271:{name:"Make",type:"Ascii"},272:{name:"Model",type:"Ascii"},273:{name:"StripOffsets",type:"Long"},274:{name:"Orientation",type:"Short"},277:{name:"SamplesPerPixel",type:"Short"},278:{name:"RowsPerStrip",type:"Long"},279:{name:"StripByteCounts",type:"Long"},282:{name:"XResolution",type:"Rational"},283:{name:"YResolution",type:"Rational"},284:{name:"PlanarConfiguration",type:"Short"},290:{name:"GrayResponseUnit",type:"Short"},291:{name:"GrayResponseCurve",type:"Short"},292:{name:"T4Options",type:"Long"},293:{name:"T6Options",type:"Long"},296:{name:"ResolutionUnit",type:"Short"},301:{name:"TransferFunction",type:"Short"},305:{name:"Software",type:"Ascii"},306:{name:"DateTime",type:"Ascii"},315:{name:"Artist",type:"Ascii"},316:{name:"HostComputer",type:"Ascii"},317:{name:"Predictor",type:"Short"},318:{name:"WhitePoint",type:"Rational"},319:{name:"PrimaryChromaticities",type:"Rational"},320:{name:"ColorMap",type:"Short"},321:{name:"HalftoneHints",type:"Short"},322:{name:"TileWidth",type:"Short"},323:{name:"TileLength",type:"Short"},324:{name:"TileOffsets",type:"Short"},325:{name:"TileByteCounts",type:"Short"},330:{name:"SubIFDs",type:"Long"},332:{name:"InkSet",type:"Short"},333:{name:"InkNames",type:"Ascii"},334:{name:"NumberOfInks",type:"Short"},336:{name:"DotRange",type:"Byte"},337:{name:"TargetPrinter",type:"Ascii"},338:{name:"ExtraSamples",type:"Short"},339:{name:"SampleFormat",type:"Short"},340:{name:"SMinSampleValue",type:"Short"},341:{name:"SMaxSampleValue",type:"Short"},342:{name:"TransferRange",type:"Short"},343:{name:"ClipPath",type:"Byte"},344:{name:"XClipPathUnits",type:"Long"},345:{name:"YClipPathUnits",type:"Long"},346:{name:"Indexed",type:"Short"},347:{name:"JPEGTables",type:"Undefined"},351:{name:"OPIProxy",type:"Short"},512:{name:"JPEGProc",type:"Long"},513:{name:"JPEGInterchangeFormat",type:"Long"},514:{name:"JPEGInterchangeFormatLength",type:"Long"},515:{name:"JPEGRestartInterval",type:"Short"},517:{name:"JPEGLosslessPredictors",type:"Short"},518:{name:"JPEGPointTransforms",type:"Short"},519:{name:"JPEGQTables",type:"Long"},520:{name:"JPEGDCTables",type:"Long"},521:{name:"JPEGACTables",type:"Long"},529:{name:"YCbCrCoefficients",type:"Rational"},530:{name:"YCbCrSubSampling",type:"Short"},531:{name:"YCbCrPositioning",type:"Short"},532:{name:"ReferenceBlackWhite",type:"Rational"},700:{name:"XMLPacket",type:"Byte"},18246:{name:"Rating",type:"Short"},18249:{name:"RatingPercent",type:"Short"},32781:{name:"ImageID",type:"Ascii"},33421:{name:"CFARepeatPatternDim",type:"Short"},33422:{name:"CFAPattern",type:"Byte"},33423:{name:"BatteryLevel",type:"Rational"},33432:{name:"Copyright",type:"Ascii"},33434:{name:"ExposureTime",type:"Rational"},34377:{name:"ImageResources",type:"Byte"},34665:{name:"ExifTag",type:"Long"},34675:{name:"InterColorProfile",type:"Undefined"},34853:{name:"GPSTag",type:"Long"},34857:{name:"Interlace",type:"Short"},34858:{name:"TimeZoneOffset",type:"Long"},34859:{name:"SelfTimerMode",type:"Short"},37387:{name:"FlashEnergy",type:"Rational"},37388:{name:"SpatialFrequencyResponse",type:"Undefined"},37389:{name:"Noise",type:"Undefined"},37390:{name:"FocalPlaneXResolution",type:"Rational"},37391:{name:"FocalPlaneYResolution",type:"Rational"},37392:{name:"FocalPlaneResolutionUnit",type:"Short"},37393:{name:"ImageNumber",type:"Long"},37394:{name:"SecurityClassification",type:"Ascii"},37395:{name:"ImageHistory",type:"Ascii"},37397:{name:"ExposureIndex",type:"Rational"},37398:{name:"TIFFEPStandardID",type:"Byte"},37399:{name:"SensingMethod",type:"Short"},40091:{name:"XPTitle",type:"Byte"},40092:{name:"XPComment",type:"Byte"},40093:{name:"XPAuthor",type:"Byte"},40094:{name:"XPKeywords",type:"Byte"},40095:{name:"XPSubject",type:"Byte"},50341:{name:"PrintImageMatching",type:"Undefined"},50706:{name:"DNGVersion",type:"Byte"},50707:{name:"DNGBackwardVersion",type:"Byte"},50708:{name:"UniqueCameraModel",type:"Ascii"},50709:{name:"LocalizedCameraModel",type:"Byte"},50710:{name:"CFAPlaneColor",type:"Byte"},50711:{name:"CFALayout",type:"Short"},50712:{name:"LinearizationTable",type:"Short"},50713:{name:"BlackLevelRepeatDim",type:"Short"},50714:{name:"BlackLevel",type:"Rational"},50715:{name:"BlackLevelDeltaH",type:"SRational"},50716:{name:"BlackLevelDeltaV",type:"SRational"},50717:{name:"WhiteLevel",type:"Short"},50718:{name:"DefaultScale",type:"Rational"},50719:{name:"DefaultCropOrigin",type:"Short"},50720:{name:"DefaultCropSize",type:"Short"},50721:{name:"ColorMatrix1",type:"SRational"},50722:{name:"ColorMatrix2",type:"SRational"},50723:{name:"CameraCalibration1",type:"SRational"},50724:{name:"CameraCalibration2",type:"SRational"},50725:{name:"ReductionMatrix1",type:"SRational"},50726:{name:"ReductionMatrix2",type:"SRational"},50727:{name:"AnalogBalance",type:"Rational"},50728:{name:"AsShotNeutral",type:"Short"},50729:{name:"AsShotWhiteXY",type:"Rational"},50730:{name:"BaselineExposure",type:"SRational"},50731:{name:"BaselineNoise",type:"Rational"},50732:{name:"BaselineSharpness",type:"Rational"},50733:{name:"BayerGreenSplit",type:"Long"},50734:{name:"LinearResponseLimit",type:"Rational"},50735:{name:"CameraSerialNumber",type:"Ascii"},50736:{name:"LensInfo",type:"Rational"},50737:{name:"ChromaBlurRadius",type:"Rational"},50738:{name:"AntiAliasStrength",type:"Rational"},50739:{name:"ShadowScale",type:"SRational"},50740:{name:"DNGPrivateData",type:"Byte"},50741:{name:"MakerNoteSafety",type:"Short"},50778:{name:"CalibrationIlluminant1",type:"Short"},50779:{name:"CalibrationIlluminant2",type:"Short"},50780:{name:"BestQualityScale",type:"Rational"},50781:{name:"RawDataUniqueID",type:"Byte"},50827:{name:"OriginalRawFileName",type:"Byte"},50828:{name:"OriginalRawFileData",type:"Undefined"},50829:{name:"ActiveArea",type:"Short"},50830:{name:"MaskedAreas",type:"Short"},50831:{name:"AsShotICCProfile",type:"Undefined"},50832:{name:"AsShotPreProfileMatrix",type:"SRational"},50833:{name:"CurrentICCProfile",type:"Undefined"},50834:{name:"CurrentPreProfileMatrix",type:"SRational"},50879:{name:"ColorimetricReference",type:"Short"},50931:{name:"CameraCalibrationSignature",type:"Byte"},50932:{name:"ProfileCalibrationSignature",type:"Byte"},50934:{name:"AsShotProfileName",type:"Byte"},50935:{name:"NoiseReductionApplied",type:"Rational"},50936:{name:"ProfileName",type:"Byte"},50937:{name:"ProfileHueSatMapDims",type:"Long"},50938:{name:"ProfileHueSatMapData1",type:"Float"},50939:{name:"ProfileHueSatMapData2",type:"Float"},50940:{name:"ProfileToneCurve",type:"Float"},50941:{name:"ProfileEmbedPolicy",type:"Long"},50942:{name:"ProfileCopyright",type:"Byte"},50964:{name:"ForwardMatrix1",type:"SRational"},50965:{name:"ForwardMatrix2",type:"SRational"},50966:{name:"PreviewApplicationName",type:"Byte"},50967:{name:"PreviewApplicationVersion",type:"Byte"},50968:{name:"PreviewSettingsName",type:"Byte"},50969:{name:"PreviewSettingsDigest",type:"Byte"},50970:{name:"PreviewColorSpace",type:"Long"},50971:{name:"PreviewDateTime",type:"Ascii"},50972:{name:"RawImageDigest",type:"Undefined"},50973:{name:"OriginalRawFileDigest",type:"Undefined"},50974:{name:"SubTileBlockSize",type:"Long"},50975:{name:"RowInterleaveFactor",type:"Long"},50981:{name:"ProfileLookTableDims",type:"Long"},50982:{name:"ProfileLookTableData",type:"Float"},51008:{name:"OpcodeList1",type:"Undefined"},51009:{name:"OpcodeList2",type:"Undefined"},51022:{name:"OpcodeList3",type:"Undefined"}},Exif:{33434:{name:"ExposureTime",type:"Rational"},33437:{name:"FNumber",type:"Rational"},34850:{name:"ExposureProgram",type:"Short"},34852:{name:"SpectralSensitivity",type:"Ascii"},34855:{name:"ISOSpeedRatings",type:"Short"},34856:{name:"OECF",type:"Undefined"},34864:{name:"SensitivityType",type:"Short"},34865:{name:"StandardOutputSensitivity",type:"Long"},34866:{name:"RecommendedExposureIndex",type:"Long"},34867:{name:"ISOSpeed",type:"Long"},34868:{name:"ISOSpeedLatitudeyyy",type:"Long"},34869:{name:"ISOSpeedLatitudezzz",type:"Long"},36864:{name:"ExifVersion",type:"Undefined"},36867:{name:"DateTimeOriginal",type:"Ascii"},36868:{name:"DateTimeDigitized",type:"Ascii"},37121:{name:"ComponentsConfiguration",type:"Undefined"},37122:{name:"CompressedBitsPerPixel",type:"Rational"},37377:{name:"ShutterSpeedValue",type:"SRational"},37378:{name:"ApertureValue",type:"Rational"},37379:{name:"BrightnessValue",type:"SRational"},37380:{name:"ExposureBiasValue",type:"SRational"},37381:{name:"MaxApertureValue",type:"Rational"},37382:{name:"SubjectDistance",type:"Rational"},37383:{name:"MeteringMode",type:"Short"},37384:{name:"LightSource",type:"Short"},37385:{name:"Flash",type:"Short"},37386:{name:"FocalLength",type:"Rational"},37396:{name:"SubjectArea",type:"Short"},37500:{name:"MakerNote",type:"Undefined"},37510:{name:"UserComment",type:"Ascii"},37520:{name:"SubSecTime",type:"Ascii"},37521:{name:"SubSecTimeOriginal",type:"Ascii"},37522:{name:"SubSecTimeDigitized",type:"Ascii"},40960:{name:"FlashpixVersion",type:"Undefined"},40961:{name:"ColorSpace",type:"Short"},40962:{name:"PixelXDimension",type:"Long"},40963:{name:"PixelYDimension",type:"Long"},40964:{name:"RelatedSoundFile",type:"Ascii"},40965:{name:"InteroperabilityTag",type:"Long"},41483:{name:"FlashEnergy",type:"Rational"},41484:{name:"SpatialFrequencyResponse",type:"Undefined"},41486:{name:"FocalPlaneXResolution",type:"Rational"},41487:{name:"FocalPlaneYResolution",type:"Rational"},41488:{name:"FocalPlaneResolutionUnit",type:"Short"},41492:{name:"SubjectLocation",type:"Short"},41493:{name:"ExposureIndex",type:"Rational"},41495:{name:"SensingMethod",type:"Short"},41728:{name:"FileSource",type:"Undefined"},41729:{name:"SceneType",type:"Undefined"},41730:{name:"CFAPattern",type:"Undefined"},41985:{name:"CustomRendered",type:"Short"},41986:{name:"ExposureMode",type:"Short"},41987:{name:"WhiteBalance",type:"Short"},41988:{name:"DigitalZoomRatio",type:"Rational"},41989:{name:"FocalLengthIn35mmFilm",type:"Short"},41990:{name:"SceneCaptureType",type:"Short"},41991:{name:"GainControl",type:"Short"},41992:{name:"Contrast",type:"Short"},41993:{name:"Saturation",type:"Short"},41994:{name:"Sharpness",type:"Short"},41995:{name:"DeviceSettingDescription",type:"Undefined"},41996:{name:"SubjectDistanceRange",type:"Short"},42016:{name:"ImageUniqueID",type:"Ascii"},42032:{name:"CameraOwnerName",type:"Ascii"},42033:{name:"BodySerialNumber",type:"Ascii"},42034:{name:"LensSpecification",type:"Rational"},42035:{name:"LensMake",type:"Ascii"},42036:{name:"LensModel",type:"Ascii"},42037:{name:"LensSerialNumber",type:"Ascii"},42240:{name:"Gamma",type:"Rational"}},GPS:{0:{name:"GPSVersionID",type:"Byte"},1:{name:"GPSLatitudeRef",type:"Ascii"},2:{name:"GPSLatitude",type:"Rational"},3:{name:"GPSLongitudeRef",type:"Ascii"},4:{name:"GPSLongitude",type:"Rational"},5:{name:"GPSAltitudeRef",type:"Byte"},6:{name:"GPSAltitude",type:"Rational"},7:{name:"GPSTimeStamp",type:"Rational"},8:{name:"GPSSatellites",type:"Ascii"},9:{name:"GPSStatus",type:"Ascii"},10:{name:"GPSMeasureMode",type:"Ascii"},11:{name:"GPSDOP",type:"Rational"},12:{name:"GPSSpeedRef",type:"Ascii"},13:{name:"GPSSpeed",type:"Rational"},14:{name:"GPSTrackRef",type:"Ascii"},15:{name:"GPSTrack",type:"Rational"},16:{name:"GPSImgDirectionRef",type:"Ascii"},17:{name:"GPSImgDirection",type:"Rational"},18:{name:"GPSMapDatum",type:"Ascii"},19:{name:"GPSDestLatitudeRef",type:"Ascii"},20:{name:"GPSDestLatitude",type:"Rational"},21:{name:"GPSDestLongitudeRef",type:"Ascii"},22:{name:"GPSDestLongitude",type:"Rational"},23:{name:"GPSDestBearingRef",type:"Ascii"},24:{name:"GPSDestBearing",type:"Rational"},25:{name:"GPSDestDistanceRef",type:"Ascii"},26:{name:"GPSDestDistance",type:"Rational"},27:{name:"GPSProcessingMethod",type:"Undefined"},28:{name:"GPSAreaInformation",type:"Undefined"},29:{name:"GPSDateStamp",type:"Ascii"},30:{name:"GPSDifferential",type:"Short"},31:{name:"GPSHPositioningError",type:"Rational"}},Interop:{1:{name:"InteroperabilityIndex",type:"Ascii"}}};u["0th"]=u.Image,u["1st"]=u.Image,f.TAGS=u,f.ImageIFD={ProcessingSoftware:11,NewSubfileType:254,SubfileType:255,ImageWidth:256,ImageLength:257,BitsPerSample:258,Compression:259,PhotometricInterpretation:262,Threshholding:263,CellWidth:264,CellLength:265,FillOrder:266,DocumentName:269,ImageDescription:270,Make:271,Model:272,StripOffsets:273,Orientation:274,SamplesPerPixel:277,RowsPerStrip:278,StripByteCounts:279,XResolution:282,YResolution:283,PlanarConfiguration:284,GrayResponseUnit:290,GrayResponseCurve:291,T4Options:292,T6Options:293,ResolutionUnit:296,TransferFunction:301,Software:305,DateTime:306,Artist:315,HostComputer:316,Predictor:317,WhitePoint:318,PrimaryChromaticities:319,ColorMap:320,HalftoneHints:321,TileWidth:322,TileLength:323,TileOffsets:324,TileByteCounts:325,SubIFDs:330,InkSet:332,InkNames:333,NumberOfInks:334,DotRange:336,TargetPrinter:337,ExtraSamples:338,SampleFormat:339,SMinSampleValue:340,SMaxSampleValue:341,TransferRange:342,ClipPath:343,XClipPathUnits:344,YClipPathUnits:345,Indexed:346,JPEGTables:347,OPIProxy:351,JPEGProc:512,JPEGInterchangeFormat:513,JPEGInterchangeFormatLength:514,JPEGRestartInterval:515,JPEGLosslessPredictors:517,JPEGPointTransforms:518,JPEGQTables:519,JPEGDCTables:520,JPEGACTables:521,YCbCrCoefficients:529,YCbCrSubSampling:530,YCbCrPositioning:531,ReferenceBlackWhite:532,XMLPacket:700,Rating:18246,RatingPercent:18249,ImageID:32781,CFARepeatPatternDim:33421,CFAPattern:33422,BatteryLevel:33423,Copyright:33432,ExposureTime:33434,ImageResources:34377,ExifTag:34665,InterColorProfile:34675,GPSTag:34853,Interlace:34857,TimeZoneOffset:34858,SelfTimerMode:34859,FlashEnergy:37387,SpatialFrequencyResponse:37388,Noise:37389,FocalPlaneXResolution:37390,FocalPlaneYResolution:37391,FocalPlaneResolutionUnit:37392,ImageNumber:37393,SecurityClassification:37394,ImageHistory:37395,ExposureIndex:37397,TIFFEPStandardID:37398,SensingMethod:37399,XPTitle:40091,XPComment:40092,XPAuthor:40093,XPKeywords:40094,XPSubject:40095,PrintImageMatching:50341,DNGVersion:50706,DNGBackwardVersion:50707,UniqueCameraModel:50708,LocalizedCameraModel:50709,CFAPlaneColor:50710,CFALayout:50711,LinearizationTable:50712,BlackLevelRepeatDim:50713,BlackLevel:50714,BlackLevelDeltaH:50715,BlackLevelDeltaV:50716,WhiteLevel:50717,DefaultScale:50718,DefaultCropOrigin:50719,DefaultCropSize:50720,ColorMatrix1:50721,ColorMatrix2:50722,CameraCalibration1:50723,CameraCalibration2:50724,ReductionMatrix1:50725,ReductionMatrix2:50726,AnalogBalance:50727,AsShotNeutral:50728,AsShotWhiteXY:50729,BaselineExposure:50730,BaselineNoise:50731,BaselineSharpness:50732,BayerGreenSplit:50733,LinearResponseLimit:50734,CameraSerialNumber:50735,LensInfo:50736,ChromaBlurRadius:50737,AntiAliasStrength:50738,ShadowScale:50739,DNGPrivateData:50740,MakerNoteSafety:50741,CalibrationIlluminant1:50778,CalibrationIlluminant2:50779,BestQualityScale:50780,RawDataUniqueID:50781,OriginalRawFileName:50827,OriginalRawFileData:50828,ActiveArea:50829,MaskedAreas:50830,AsShotICCProfile:50831,AsShotPreProfileMatrix:50832,CurrentICCProfile:50833,CurrentPreProfileMatrix:50834,ColorimetricReference:50879,CameraCalibrationSignature:50931,ProfileCalibrationSignature:50932,AsShotProfileName:50934,NoiseReductionApplied:50935,ProfileName:50936,ProfileHueSatMapDims:50937,ProfileHueSatMapData1:50938,ProfileHueSatMapData2:50939,ProfileToneCurve:50940,ProfileEmbedPolicy:50941,ProfileCopyright:50942,ForwardMatrix1:50964,ForwardMatrix2:50965,PreviewApplicationName:50966,PreviewApplicationVersion:50967,PreviewSettingsName:50968,PreviewSettingsDigest:50969,PreviewColorSpace:50970,PreviewDateTime:50971,RawImageDigest:50972,OriginalRawFileDigest:50973,SubTileBlockSize:50974,RowInterleaveFactor:50975,ProfileLookTableDims:50981,ProfileLookTableData:50982,OpcodeList1:51008,OpcodeList2:51009,OpcodeList3:51022,NoiseProfile:51041},f.ExifIFD={ExposureTime:33434,FNumber:33437,ExposureProgram:34850,SpectralSensitivity:34852,ISOSpeedRatings:34855,OECF:34856,SensitivityType:34864,StandardOutputSensitivity:34865,RecommendedExposureIndex:34866,ISOSpeed:34867,ISOSpeedLatitudeyyy:34868,ISOSpeedLatitudezzz:34869,ExifVersion:36864,DateTimeOriginal:36867,DateTimeDigitized:36868,ComponentsConfiguration:37121,CompressedBitsPerPixel:37122,ShutterSpeedValue:37377,ApertureValue:37378,BrightnessValue:37379,ExposureBiasValue:37380,MaxApertureValue:37381,SubjectDistance:37382,MeteringMode:37383,LightSource:37384,Flash:37385,FocalLength:37386,SubjectArea:37396,MakerNote:37500,UserComment:37510,SubSecTime:37520,SubSecTimeOriginal:37521,SubSecTimeDigitized:37522,FlashpixVersion:40960,ColorSpace:40961,PixelXDimension:40962,PixelYDimension:40963,RelatedSoundFile:40964,InteroperabilityTag:40965,FlashEnergy:41483,SpatialFrequencyResponse:41484,FocalPlaneXResolution:41486,FocalPlaneYResolution:41487,FocalPlaneResolutionUnit:41488,SubjectLocation:41492,ExposureIndex:41493,SensingMethod:41495,FileSource:41728,SceneType:41729,CFAPattern:41730,CustomRendered:41985,ExposureMode:41986,WhiteBalance:41987,DigitalZoomRatio:41988,FocalLengthIn35mmFilm:41989,SceneCaptureType:41990,GainControl:41991,Contrast:41992,Saturation:41993,Sharpness:41994,DeviceSettingDescription:41995,SubjectDistanceRange:41996,ImageUniqueID:42016,CameraOwnerName:42032,BodySerialNumber:42033,LensSpecification:42034,LensMake:42035,LensModel:42036,LensSerialNumber:42037,Gamma:42240},f.GPSIFD={GPSVersionID:0,GPSLatitudeRef:1,GPSLatitude:2,GPSLongitudeRef:3,GPSLongitude:4,GPSAltitudeRef:5,GPSAltitude:6,GPSTimeStamp:7,GPSSatellites:8,GPSStatus:9,GPSMeasureMode:10,GPSDOP:11,GPSSpeedRef:12,GPSSpeed:13,GPSTrackRef:14,GPSTrack:15,GPSImgDirectionRef:16,GPSImgDirection:17,GPSMapDatum:18,GPSDestLatitudeRef:19,GPSDestLatitude:20,GPSDestLongitudeRef:21,GPSDestLongitude:22,GPSDestBearingRef:23,GPSDestBearing:24,GPSDestDistanceRef:25,GPSDestDistance:26,GPSProcessingMethod:27,GPSAreaInformation:28,GPSDateStamp:29,GPSDifferential:30,GPSHPositioningError:31},f.InteropIFD={InteroperabilityIndex:1},f.GPSHelper={degToDmsRational:function(e){var t=e%1*60,a=t%1*60,i=Math.floor(e),n=Math.floor(t),r=Math.round(100*a);return[[i,1],[n,1],[r,100]]}},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=f),exports.piexif=f):window.piexif=f}();
!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&void 0!==module.exports?module.exports=t():window.KvSortable=t()}(function(){"use strict";function t(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"KvSortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=n=g({},n),e[U]=this;var i={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"kvsortable-ghost",chosenClass:"kvsortable-chosen",dragClass:"kvsortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"kvsortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==t.supportPointer};for(var r in i)!(r in n)&&(n[r]=i[r]);rt(n);for(var a in this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!n.forceFallback&&Z,o(e,"mousedown",this._onTapStart),o(e,"touchstart",this._onTapStart),n.supportPointer&&o(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(o(e,"dragover",this),o(e,"dragenter",this)),ot.push(this._onDragOver),n.store&&this.sort(n.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),w&&w.state!==e&&(a(w,"display",e?"none":""),e||w.state&&(t.options.group.revertClone?(T.insertBefore(w,C),t._animate(_,w)):T.insertBefore(w,_)),w.state=e)}function n(t,e,n){if(t){n=n||W;do{if(">*"===e&&t.parentNode===n||f(t,e))return t}while(t=function(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}(t))}return null}function o(t,e,n){t.addEventListener(e,n,G)}function i(t,e,n){t.removeEventListener(e,n,G)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(L," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(L," ")}}function a(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return W.defaultView&&W.defaultView.getComputedStyle?n=W.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function s(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function l(t,e,n,o,i,r,a,s){t=t||e[U];var l=W.createEvent("Event"),c=t.options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);l.initEvent(n,!0,!0),l.to=i||e,l.from=r||e,l.item=o||e,l.clone=w,l.oldIndex=a,l.newIndex=s,e.dispatchEvent(l),c[d]&&c[d].call(t,l)}function c(t,e,n,o,i,r,a,s){var l,c,d=t[U],h=d.options.onMove;return(l=W.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=o,l.related=i||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function d(t){t.draggable=!1}function h(){$=!1}function u(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!f(t,e)||n++;return n}function f(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(o)||[]).length!=e.length)}return!1}function p(t,e){var n,o;return function(){void 0===n&&(n=arguments,o=this,q(function(){1===n.length?t.call(o,n[0]):t.apply(o,n),n=void 0},e))}}function g(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function v(t){return z&&z.dom?z.dom(t).cloneNode(!0):V?V(t).clone(!0)[0]:t.cloneNode(!0)}function m(t){return q(t,0)}function b(t){return clearTimeout(t)}if("undefined"==typeof window||!window.document)return function(){throw new Error("KvSortable.js requires a window with a document")};var _,D,y,w,T,C,S,E,k,x,N,B,P,Y,O,X,I,R,A,M,j={},L=/\s+/g,F=/left|right|inline/,U="KvSortable"+(new Date).getTime(),H=window,W=H.document,K=H.parseInt,q=H.setTimeout,V=H.jQuery||H.Zepto,z=H.Polymer,G=!1,Q=!1,Z="draggable"in W.createElement("div"),J=function(t){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(t=W.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),$=!1,tt=Math.abs,et=Math.min,nt=[],ot=[],it=p(function(t,e,n){if(n&&e.scroll){var o,i,r,a,s,l,c=n[U],d=e.scrollSensitivity,h=e.scrollSpeed,u=t.clientX,f=t.clientY,p=window.innerWidth,g=window.innerHeight;if(k!==n&&(E=e.scroll,k=n,x=e.scrollFn,!0===E)){E=n;do{if(E.offsetWidth<E.scrollWidth||E.offsetHeight<E.scrollHeight)break}while(E=E.parentNode)}E&&(o=E,i=E.getBoundingClientRect(),r=(tt(i.right-u)<=d)-(tt(i.left-u)<=d),a=(tt(i.bottom-f)<=d)-(tt(i.top-f)<=d)),r||a||(a=(g-f<=d)-(f<=d),((r=(p-u<=d)-(u<=d))||a)&&(o=H)),j.vx===r&&j.vy===a&&j.el===o||(j.el=o,j.vx=r,j.vy=a,clearInterval(j.pid),o&&(j.pid=setInterval(function(){if(l=a?a*h:0,s=r?r*h:0,"function"==typeof x)return x.call(c,s,l,t);o===H?H.scrollTo(H.pageXOffset+s,H.pageYOffset+l):(o.scrollTop+=l,o.scrollLeft+=s)},24)))}},30),rt=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,o){var i=o.options.group.name;return e?t:t&&(t.join?t.indexOf(i)>-1:i==t)}}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){G={capture:!1,passive:Q=!1}}}))}catch(t){}return t.prototype={constructor:t,_onTapStart:function(t){var e,o=this,i=this.el,r=this.options,a=r.preventOnFilter,s=t.type,c=t.touches&&t.touches[0],d=(c||t).target,h=t.target.shadowRoot&&t.path&&t.path[0]||d,f=r.filter;if(function(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&nt.push(o)}}(i),!_&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&!h.isContentEditable&&(d=n(d,r.draggable,i))&&S!==d){if(e=u(d,r.draggable),"function"==typeof f){if(f.call(this,t,d,this))return l(o,h,"filter",d,i,i,e),void(a&&t.preventDefault())}else if(f&&(f=f.split(",").some(function(t){if(t=n(h,t.trim(),i))return l(o,t,"filter",d,i,i,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(h,r.handle,i)||this._prepareDragStart(t,c,d,e)}},_prepareDragStart:function(t,e,n,i){var a,c=this,h=c.el,u=c.options,f=h.ownerDocument;n&&!_&&n.parentNode===h&&(R=t,T=h,D=(_=n).parentNode,C=_.nextSibling,S=n,X=u.group,Y=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,_.style["will-change"]="all",a=function(){c._disableDelayedDrag(),_.draggable=c.nativeDraggable,r(_,u.chosenClass,!0),c._triggerDragStart(t,e),l(c,T,"choose",_,T,T,Y)},u.ignore.split(",").forEach(function(t){s(_,t.trim(),d)}),o(f,"mouseup",c._onDrop),o(f,"touchend",c._onDrop),o(f,"touchcancel",c._onDrop),o(f,"selectstart",c),u.supportPointer&&o(f,"pointercancel",c._onDrop),u.delay?(o(f,"mouseup",c._disableDelayedDrag),o(f,"touchend",c._disableDelayedDrag),o(f,"touchcancel",c._disableDelayedDrag),o(f,"mousemove",c._disableDelayedDrag),o(f,"touchmove",c._disableDelayedDrag),u.supportPointer&&o(f,"pointermove",c._disableDelayedDrag),c._dragStartTimer=q(a,u.delay)):a())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),i(t,"mouseup",this._disableDelayedDrag),i(t,"touchend",this._disableDelayedDrag),i(t,"touchcancel",this._disableDelayedDrag),i(t,"mousemove",this._disableDelayedDrag),i(t,"touchmove",this._disableDelayedDrag),i(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){(e=e||("touch"==t.pointerType?t:null))?(R={target:_,clientX:e.clientX,clientY:e.clientY},this._onDragStart(R,"touch")):this.nativeDraggable?(o(_,"dragend",this),o(T,"dragstart",this._onDragStart)):this._onDragStart(R,!0);try{W.selection?m(function(){W.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(T&&_){var e=this.options;r(_,e.ghostClass,!0),r(_,e.dragClass,!1),t.active=this,l(this,T,"start",_,T,T,Y)}else this._nulling()},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,J||a(y,"display","none");var t=W.elementFromPoint(A.clientX,A.clientY),e=t,n=ot.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(A.clientX,A.clientY)),e)do{if(e[U]){for(;n--;)ot[n]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);J||a(y,"display","")}},_onTouchMove:function(e){if(R){var n=this.options,o=n.fallbackTolerance,i=n.fallbackOffset,r=e.touches?e.touches[0]:e,s=r.clientX-R.clientX+i.x,l=r.clientY-R.clientY+i.y,c=e.touches?"translate3d("+s+"px,"+l+"px,0)":"translate("+s+"px,"+l+"px)";if(!t.active){if(o&&et(tt(r.clientX-this._lastX),tt(r.clientY-this._lastY))<o)return;this._dragStarted()}this._appendGhost(),M=!0,A=r,a(y,"webkitTransform",c),a(y,"mozTransform",c),a(y,"msTransform",c),a(y,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!y){var t,e=_.getBoundingClientRect(),n=a(_),o=this.options;r(y=_.cloneNode(!0),o.ghostClass,!1),r(y,o.fallbackClass,!0),r(y,o.dragClass,!0),a(y,"top",e.top-K(n.marginTop,10)),a(y,"left",e.left-K(n.marginLeft,10)),a(y,"width",e.width),a(y,"height",e.height),a(y,"opacity","0.8"),a(y,"position","fixed"),a(y,"zIndex","100000"),a(y,"pointerEvents","none"),o.fallbackOnBody&&W.body.appendChild(y)||T.appendChild(y),t=y.getBoundingClientRect(),a(y,"width",2*e.width-t.width),a(y,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,s=n.options;n._offUpEvents(),X.checkPull(n,n,_,t)&&((w=v(_)).draggable=!1,w.style["will-change"]="",a(w,"display","none"),r(w,n.options.chosenClass,!1),n._cloneId=m(function(){T.insertBefore(w,_),l(n,T,"clone",_)})),r(_,s.dragClass,!0),e?("touch"===e?(o(W,"touchmove",n._onTouchMove),o(W,"touchend",n._onDrop),o(W,"touchcancel",n._onDrop),s.supportPointer&&(o(W,"pointermove",n._onTouchMove),o(W,"pointerup",n._onDrop))):(o(W,"mousemove",n._onTouchMove),o(W,"mouseup",n._onDrop)),n._loopId=setInterval(n._emulateDragOver,50)):(i&&(i.effectAllowed="move",s.setData&&s.setData.call(n,i,_)),o(W,"drop",n),n._dragStartId=m(n._dragStarted))},_onDragOver:function(o){var i,r,s,l,d=this.el,u=this.options,f=u.group,p=t.active,g=X===f,v=!1,m=u.sort;if(void 0!==o.preventDefault&&(o.preventDefault(),!u.dragoverBubble&&o.stopPropagation()),!_.animated&&(M=!0,p&&!u.disabled&&(g?m||(l=!T.contains(_)):I===this||(p.lastPullMode=X.checkPull(this,p,_,o))&&f.checkPut(this,p,_,o))&&(void 0===o.rootEl||o.rootEl===this.el))){if(it(o,u,this.el),$)return;if(i=n(o.target,u.draggable,d),r=_.getBoundingClientRect(),I!==this&&(I=this,v=!0),l)return e(p,!0),D=T,void(w||C?T.insertBefore(_,w||C):m||T.appendChild(_));if(0===d.children.length||d.children[0]===y||d===o.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(d,o)){if(0!==d.children.length&&d.children[0]!==y&&d===o.target&&(i=d.lastElementChild),i){if(i.animated)return;s=i.getBoundingClientRect()}e(p,g),!1!==c(T,d,_,r,i,s,o)&&(_.contains(d)||(d.appendChild(_),D=d),this._animate(r,_),i&&this._animate(s,i))}else if(i&&!i.animated&&i!==_&&void 0!==i.parentNode[U]){N!==i&&(N=i,B=a(i),P=a(i.parentNode));var b=(s=i.getBoundingClientRect()).right-s.left,S=s.bottom-s.top,E=F.test(B.cssFloat+B.display)||"flex"==P.display&&0===P["flex-direction"].indexOf("row"),k=i.offsetWidth>_.offsetWidth,x=i.offsetHeight>_.offsetHeight,Y=(E?(o.clientX-s.left)/b:(o.clientY-s.top)/S)>.5,O=i.nextElementSibling,R=!1;if(E){var A=_.offsetTop,j=i.offsetTop;R=A===j?i.previousElementSibling===_&&!k||Y&&k:i.previousElementSibling===_||_.previousElementSibling===i?(o.clientY-s.top)/S>.5:j>A}else v||(R=O!==_&&!x||Y&&x);var L=c(T,d,_,r,i,s,o,R);!1!==L&&(1!==L&&-1!==L||(R=1===L),$=!0,q(h,30),e(p,g),_.contains(d)||(R&&!O?d.appendChild(_):i.parentNode.insertBefore(_,R?O:i)),D=_.parentNode,this._animate(r,_),this._animate(s,i))}}},_animate:function(t,e){var n=this.options.animation;if(n){var o=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),a(e,"transition","none"),a(e,"transform","translate3d("+(t.left-o.left)+"px,"+(t.top-o.top)+"px,0)"),e.offsetWidth,a(e,"transition","all "+n+"ms"),a(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=q(function(){a(e,"transition",""),a(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;i(W,"touchmove",this._onTouchMove),i(W,"pointermove",this._onTouchMove),i(t,"mouseup",this._onDrop),i(t,"touchend",this._onDrop),i(t,"pointerup",this._onDrop),i(t,"touchcancel",this._onDrop),i(t,"pointercancel",this._onDrop),i(t,"selectstart",this)},_onDrop:function(e){var n=this.el,o=this.options;clearInterval(this._loopId),clearInterval(j.pid),clearTimeout(this._dragStartTimer),b(this._cloneId),b(this._dragStartId),i(W,"mouseover",this),i(W,"mousemove",this._onTouchMove),this.nativeDraggable&&(i(W,"drop",this),i(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(M&&(e.preventDefault(),!o.dropBubble&&e.stopPropagation()),y&&y.parentNode&&y.parentNode.removeChild(y),T!==D&&"clone"===t.active.lastPullMode||w&&w.parentNode&&w.parentNode.removeChild(w),_&&(this.nativeDraggable&&i(_,"dragend",this),d(_),_.style["will-change"]="",r(_,this.options.ghostClass,!1),r(_,this.options.chosenClass,!1),l(this,T,"unchoose",_,D,T,Y),T!==D?(O=u(_,o.draggable))>=0&&(l(null,D,"add",_,D,T,Y,O),l(this,T,"remove",_,D,T,Y,O),l(null,D,"sort",_,D,T,Y,O),l(this,T,"sort",_,D,T,Y,O)):_.nextSibling!==C&&(O=u(_,o.draggable))>=0&&(l(this,T,"update",_,D,T,Y,O),l(this,T,"sort",_,D,T,Y,O)),t.active&&(null!=O&&-1!==O||(O=Y),l(this,T,"end",_,D,T,Y,O),this.save()))),this._nulling()},_nulling:function(){T=_=D=y=C=w=S=E=k=R=A=M=O=N=B=I=X=t.active=null,nt.forEach(function(t){t.checked=!0}),nt.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":_&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)n(t=o[i],a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||function(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t){var e={},o=this.el;this.toArray().forEach(function(t,i){var r=o.children[i];n(r,this.options.draggable,o)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(o.removeChild(e[t]),o.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&rt(n)},destroy:function(){var t=this.el;t[U]=null,i(t,"mousedown",this._onTapStart),i(t,"touchstart",this._onTapStart),i(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(i(t,"dragover",this),i(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),ot.splice(ot.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},o(W,"touchmove",function(e){t.active&&e.preventDefault()}),t.utils={on:o,off:i,css:a,find:s,is:function(t,e){return!!n(t,e,t)},extend:g,throttle:p,closest:n,toggleClass:r,clone:v,index:u,nextTick:m,cancelNextTick:b},t.create=function(e,n){return new t(e,n)},t.version="1.7.0",t}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";t.fn.kvsortable=function(e){var n,o=arguments;return this.each(function(){var i=t(this),r=i.data("kvsortable");r||!(e instanceof Object)&&e||(r=new KvSortable(this,e),i.data("kvsortable",r)),r&&("widget"===e?n=r:"destroy"===e?(r.destroy(),i.removeData("kvsortable")):"function"==typeof r[e]?n=r[e].apply(r,[].slice.call(o,1)):e in r.options&&(n=r.option.apply(r,o)))}),void 0===n?this:n}});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e}function t(e){var t={},n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var x=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A(),S=function(e){return r(e)};if(S.version="1.0.7",S.removed=[],!x||!x.document||9!==x.document.nodeType)return S.isSupported=!1,S;var k=x.document,w=!1,L=!1,E=x.document,O=x.DocumentFragment,M=x.HTMLTemplateElement,N=x.Node,_=x.NodeFilter,D=x.NamedNodeMap,C=void 0===D?x.NamedNodeMap||x.MozNamedAttrMap:D,R=x.Text,F=x.Comment,z=x.DOMParser;if("function"==typeof M){var H=E.createElement("template");H.content&&H.content.ownerDocument&&(E=H.content.ownerDocument)}var I=E,j=I.implementation,P=I.createNodeIterator,W=I.getElementsByTagName,U=I.createDocumentFragment,B=k.importNode,G={};S.isSupported=j&&void 0!==j.createHTMLDocument&&9!==E.documentMode;var q=m,V=p,Y=h,K=g,X=v,$=b,J=y,Q=null,Z=e({},[].concat(n(o),n(i),n(a),n(l),n(s))),ee=null,te=e({},[].concat(n(c),n(d),n(u),n(f))),ne=null,re=null,oe=!0,ie=!0,ae=!1,le=!1,se=!1,ce=!1,de=!1,ue=!1,fe=!1,me=!1,pe=!1,he=!0,ge=!0,ye=!1,ve={},be=e({},["audio","head","math","script","style","template","svg","video"]),Te=e({},["audio","video","img","source","image"]),Ae=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),xe=null,Se=E.createElement("form"),ke=function(r){"object"!==(void 0===r?"undefined":T(r))&&(r={}),Q="ALLOWED_TAGS"in r?e({},r.ALLOWED_TAGS):Z,ee="ALLOWED_ATTR"in r?e({},r.ALLOWED_ATTR):te,ne="FORBID_TAGS"in r?e({},r.FORBID_TAGS):{},re="FORBID_ATTR"in r?e({},r.FORBID_ATTR):{},ve="USE_PROFILES"in r&&r.USE_PROFILES,oe=!1!==r.ALLOW_ARIA_ATTR,ie=!1!==r.ALLOW_DATA_ATTR,ae=r.ALLOW_UNKNOWN_PROTOCOLS||!1,le=r.SAFE_FOR_JQUERY||!1,se=r.SAFE_FOR_TEMPLATES||!1,ce=r.WHOLE_DOCUMENT||!1,fe=r.RETURN_DOM||!1,me=r.RETURN_DOM_FRAGMENT||!1,pe=r.RETURN_DOM_IMPORT||!1,ue=r.FORCE_BODY||!1,he=!1!==r.SANITIZE_DOM,ge=!1!==r.KEEP_CONTENT,ye=r.IN_PLACE||!1,J=r.ALLOWED_URI_REGEXP||J,se&&(ie=!1),me&&(fe=!0),ve&&(Q=e({},[].concat(n(s))),ee=[],!0===ve.html&&(e(Q,o),e(ee,c)),!0===ve.svg&&(e(Q,i),e(ee,d),e(ee,f)),!0===ve.svgFilters&&(e(Q,a),e(ee,d),e(ee,f)),!0===ve.mathMl&&(e(Q,l),e(ee,u),e(ee,f))),r.ADD_TAGS&&(Q===Z&&(Q=t(Q)),e(Q,r.ADD_TAGS)),r.ADD_ATTR&&(ee===te&&(ee=t(ee)),e(ee,r.ADD_ATTR)),r.ADD_URI_SAFE_ATTR&&e(Ae,r.ADD_URI_SAFE_ATTR),ge&&(Q["#text"]=!0),ce&&e(Q,["html","head","body"]),Q.table&&e(Q,["tbody"]),Object&&"freeze"in Object&&Object.freeze(r),xe=r},we=function(e){S.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Le=function(e,t){try{S.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){S.removed.push({attribute:null,from:t})}t.removeAttribute(e)},Ee=function(t){var n=void 0;if(ue&&(t="<remove></remove>"+t),w)try{n=(new z).parseFromString(t,"text/html")}catch(e){}if(L&&e(ne,["title"]),!n||!n.documentElement){var r=(n=j.createHTMLDocument("")).body;r.parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=t}return W.call(n,ce?"html":"body")[0]};S.isSupported&&(function(){try{Ee('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">').querySelector("svg img")&&(w=!0)}catch(e){}}(),function(){try{Ee("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").textContent.match(/<\/title/)&&(L=!0)}catch(e){}}());var Oe=function(e){return P.call(e.ownerDocument||e,e,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT,function(){return _.FILTER_ACCEPT},!1)},Me=function(e){return!(e instanceof R||e instanceof F)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof C&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Ne=function(e){return"object"===(void 0===N?"undefined":T(N))?e instanceof N:e&&"object"===(void 0===e?"undefined":T(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},_e=function(e,t,n){G[e]&&G[e].forEach(function(e){e.call(S,t,n,xe)})},De=function(e){var t=void 0;if(_e("beforeSanitizeElements",e,null),Me(e))return we(e),!0;var n=e.nodeName.toLowerCase();if(_e("uponSanitizeElement",e,{tagName:n,allowedTags:Q}),!Q[n]||ne[n]){if(ge&&!be[n]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return we(e),!0}return!le||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(S.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),se&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(q," ")).replace(V," "),e.textContent!==t&&(S.removed.push({element:e.cloneNode()}),e.textContent=t)),_e("afterSanitizeElements",e,null),!1},Ce=function(e,t,n){if(he&&("id"===t||"name"===t)&&(n in E||n in Se))return!1;if(se&&(n=(n=n.replace(q," ")).replace(V," ")),ie&&Y.test(t));else if(oe&&K.test(t));else{if(!ee[t]||re[t])return!1;if(Ae[t]);else if(J.test(n.replace($,"")));else if("src"!==t&&"xlink:href"!==t||0!==n.indexOf("data:")||!Te[e]){if(ae&&!X.test(n.replace($,"")));else if(n)return!1}else;}return!0},Re=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;_e("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(i=a.length;i--;){var s=(t=a[i]).name;if(n=t.value.trim(),r=s.toLowerCase(),l.attrName=r,l.attrValue=n,l.keepAttr=!0,_e("uponSanitizeAttribute",e,l),n=l.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=Array.prototype.slice.apply(a),Le("id",e),Le(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&(ee[r]||!re[r]))continue;"id"===s&&e.setAttribute(s,""),Le(s,e)}if(l.keepAttr){var c=e.nodeName.toLowerCase();if(Ce(c,r,n))try{e.setAttribute(s,n),S.removed.pop()}catch(e){}}}_e("afterSanitizeAttributes",e,null)}},Fe=function e(t){var n=void 0,r=Oe(t);for(_e("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_e("uponSanitizeShadowNode",n,null),De(n)||(n.content instanceof O&&e(n.content),Re(n));_e("afterSanitizeShadowDOM",t,null)};return S.sanitize=function(e,t){var n=void 0,r=void 0,o=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ne(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!S.isSupported){if("object"===T(x.toStaticHTML)||"function"==typeof x.toStaticHTML){if("string"==typeof e)return x.toStaticHTML(e);if(Ne(e))return x.toStaticHTML(e.outerHTML)}return e}if(de||ke(t),S.removed=[],ye);else if(e instanceof N)1===(r=(n=Ee("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:n.appendChild(r);else{if(!fe&&!ce&&-1===e.indexOf("<"))return e;if(!(n=Ee(e)))return fe?null:""}n&&ue&&we(n.firstChild);for(var l=Oe(ye?e:n);o=l.nextNode();)3===o.nodeType&&o===i||De(o)||(o.content instanceof O&&Fe(o.content),Re(o),i=o);if(ye)return e;if(fe){if(me)for(a=U.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return pe&&(a=B.call(k,a,!0)),a}return ce?n.outerHTML:n.innerHTML},S.setConfig=function(e){ke(e),de=!0},S.clearConfig=function(){xe=null,de=!1},S.isValidAttribute=function(e,t,n){xe||ke({});var r=e.toLowerCase(),o=t.toLowerCase();return Ce(r,o,n)},S.addHook=function(e,t){"function"==typeof t&&(G[e]=G[e]||[],G[e].push(t))},S.removeHook=function(e){G[e]&&G[e].pop()},S.removeHooks=function(e){G[e]&&(G[e]=[])},S.removeAllHooks=function(){G={}},S}var o=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],i=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],a=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"],l=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],s=["#text"],c=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],d=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],u=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],f=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"],m=/\{\{[\s\S]*|[\s\S]*\}\}/gm,p=/<%[\s\S]*|[\s\S]*%>/gm,h=/^data-[\-\w.\u00B7-\uFFFF]/,g=/^aria-[\-\w]+$/,y=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,v=/^(?:\w+script|data):/i,b=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(){return"undefined"==typeof window?null:window};return r()});
/*!
 * bootstrap-fileinput v5.0.5
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2019, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";e.fn.fileinputLocales={},e.fn.fileinputThemes={},String.prototype.setTokens=function(e){var t,i,a=this.toString();for(t in e)e.hasOwnProperty(t)&&(i=new RegExp("{"+t+"}","g"),a=a.replace(i,e[t]));return a};var t,i;t={FRAMES:".kv-preview-thumb",SORT_CSS:"file-sortable",INIT_FLAG:"init-",OBJECT_PARAMS:'<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',DEFAULT_PREVIEW:'<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',MODAL_ID:"kvFileinputModal",MODAL_EVENTS:["show","shown","hide","hidden","loaded"],logMessages:{ajaxError:"{status}: {error}. Error Details: {text}.",badDroppedFiles:"Error scanning dropped files!",badExifParser:"Error loading the piexif.js library. {details}",badInputType:'The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.',exifWarning:'To avoid this warning, either set "autoOrientImage" to "false" OR ensure you have loaded the "piexif.js" library correctly on your page before the "fileinput.js" script.',invalidChunkSize:'Invalid upload chunk size: "{chunkSize}". Resumable uploads are disabled.',invalidThumb:'Invalid thumb frame with id: "{id}".',noResumableSupport:"The browser does not support resumable or chunk uploads.",noUploadUrl:'The "uploadUrl" is not set. Ajax uploads and resumable uploads have been disabled.',retryStatus:"Retrying upload for chunk # {chunk} for {filename}... retry # {retry}."},objUrl:window.URL||window.webkitURL,now:function(){return new Date},round:function(e){return e=parseFloat(e),isNaN(e)?0:Math.floor(Math.round(e))},getFileRelativePath:function(e){return String(e.relativePath||e.webkitRelativePath||t.getFileName(e)||null)},getFileId:function(e,i){var a=t.getFileRelativePath(e);return"function"==typeof i?i(e):e&&a?e.size+"_"+a.replace(/\s/gim,"_"):null},getFrameSelector:function(e,t){return t=t||"",'[id="'+e+'"]'+t},getZoomSelector:function(e,t){return t=t||"",'[id="zoom-'+e+'"]'+t},getFrameElement:function(e,i,a){return e.find(t.getFrameSelector(i,a))},getZoomElement:function(e,i,a){return e.find(t.getZoomSelector(i,a))},getElapsed:function(t){var i=t,a="",r={},n={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};return Object.keys(n).forEach(function(e){r[e]=Math.floor(i/n[e]),i-=r[e]*n[e]}),e.each(r,function(e,t){t>0&&(a+=(a?" ":"")+t+e.substring(0,1))}),a},debounce:function(e,t){var i;return function(){var a=arguments,r=this;clearTimeout(i),i=setTimeout(function(){e.apply(r,a)},t)}},stopEvent:function(e){e.stopPropagation(),e.preventDefault()},getFileName:function(e){return e?e.fileName||e.name||"":""},createObjectURL:function(e){return t.objUrl&&t.objUrl.createObjectURL&&e?t.objUrl.createObjectURL(e):""},revokeObjectURL:function(e){t.objUrl&&t.objUrl.revokeObjectURL&&e&&t.objUrl.revokeObjectURL(e)},compare:function(e,t,i){return void 0!==e&&(i?e===t:e.match(t))},isIE:function(e){var t,i;return"Microsoft Internet Explorer"!==navigator.appName?!1:10===e?new RegExp("msie\\s"+e,"i").test(navigator.userAgent):(t=document.createElement("div"),t.innerHTML="<!--[if IE "+e+"]> <i></i> <![endif]-->",i=t.getElementsByTagName("i").length,document.body.appendChild(t),t.parentNode.removeChild(t),i)},canAssignFilesToInput:function(){var e=document.createElement("input");try{return e.type="file",e.files=null,!0}catch(t){return!1}},getDragDropFolders:function(e){var t,i,a=e?e.length:0,r=0;if(a>0&&e[0].webkitGetAsEntry())for(t=0;a>t;t++)i=e[t].webkitGetAsEntry(),i&&i.isDirectory&&r++;return r},initModal:function(t){var i=e("body");i.length&&t.appendTo(i)},isEmpty:function(t,i){return void 0===t||null===t||0===t.length||i&&""===e.trim(t)},isArray:function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},ifSet:function(e,t,i){return i=i||"",t&&"object"==typeof t&&e in t?t[e]:i},cleanArray:function(e){return e instanceof Array||(e=[]),e.filter(function(e){return void 0!==e&&null!==e})},spliceArray:function(t,i,a){var r,n,o=0,l=[];if(!(t instanceof Array))return[];for(n=e.extend(!0,[],t),a&&n.reverse(),r=0;r<n.length;r++)r!==i&&(l[o]=n[r],o++);return a&&l.reverse(),l},getNum:function(e,t){return t=t||0,"number"==typeof e?e:("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?t:e)},hasFileAPISupport:function(){return!(!window.File||!window.FileReader)},hasDragDropSupport:function(){var e=document.createElement("div");return!t.isIE(9)&&(void 0!==e.draggable||void 0!==e.ondragstart&&void 0!==e.ondrop)},hasFileUploadSupport:function(){return t.hasFileAPISupport()&&window.FormData},hasBlobSupport:function(){try{return!!window.Blob&&Boolean(new Blob)}catch(e){return!1}},hasArrayBufferViewSupport:function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}},hasResumableUploadSupport:function(){return t.hasFileUploadSupport()&&t.hasBlobSupport()&&t.hasArrayBufferViewSupport()&&(!!Blob.prototype.webkitSlice||!!Blob.prototype.mozSlice||!!Blob.prototype.slice||!1)},dataURI2Blob:function(e){var i,a,r,n,o,l,s=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,d=t.hasBlobSupport(),c=(d||s)&&window.atob&&window.ArrayBuffer&&window.Uint8Array;if(!c)return null;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),a=new ArrayBuffer(i.length),r=new Uint8Array(a),n=0;n<i.length;n+=1)r[n]=i.charCodeAt(n);return o=e.split(",")[0].split(":")[1].split(";")[0],d?new Blob([t.hasArrayBufferViewSupport()?r:a],{type:o}):(l=new s,l.append(a),l.getBlob(o))},arrayBuffer2String:function(e){if(window.TextDecoder)return new TextDecoder("utf-8").decode(e);var t,i,a,r,n=Array.prototype.slice.apply(new Uint8Array(e)),o="",l=0;for(t=n.length;t>l;)switch(i=n[l++],i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:a=n[l++],o+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=n[l++],r=n[l++],o+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&r)<<0)}return o},isHtml:function(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes,a=i.length;a--;)if(1===i[a].nodeType)return!0;return!1},isSvg:function(e){return e.match(/^\s*<\?xml/i)&&(e.match(/<!DOCTYPE svg/i)||e.match(/<svg/i))},getMimeType:function(e,t,i){switch(e){case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":return"image/jpeg";case"89504E47":return"image/png";case"47494638":return"image/gif";case"49492a00":return"image/tiff";case"52494646":return"image/webp";case"66747970":return"video/3gp";case"4f676753":return"video/ogg";case"1a45dfa3":return"video/mkv";case"000001ba":case"000001b3":return"video/mpeg";case"3026b275":return"video/wmv";case"25504446":return"application/pdf";case"25215053":return"application/ps";case"504b0304":case"504b0506":case"504b0508":return"application/zip";case"377abcaf":return"application/7z";case"75737461":return"application/tar";case"7801730d":return"application/dmg";default:switch(e.substring(0,6)){case"435753":return"application/x-shockwave-flash";case"494433":return"audio/mp3";case"425a68":return"application/bzip";default:switch(e.substring(0,4)){case"424d":return"image/bmp";case"fffb":return"audio/mp3";case"4d5a":return"application/exe";case"1f9d":case"1fa0":return"application/zip";case"1f8b":return"application/gzip";default:return t&&!t.match(/[^\u0000-\u007f]/)?"application/text-plain":i}}}},addCss:function(e,t){e.removeClass(t).addClass(t)},getElement:function(i,a,r){return t.isEmpty(i)||t.isEmpty(i[a])?r:e(i[a])},uniqId:function(){return Math.round((new Date).getTime())+"_"+Math.round(100*Math.random())},htmlEncode:function(e,t){return void 0===e?t||null:e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},replaceTags:function(t,i){var a=t;return i?(e.each(i,function(e,t){"function"==typeof t&&(t=t()),a=a.split(e).join(t)}),a):a},cleanMemory:function(e){var i=e.is("img")?e.attr("src"):e.find("source").attr("src");t.revokeObjectURL(i)},findFileName:function(e){var t=e.lastIndexOf("/");return-1===t&&(t=e.lastIndexOf("\\")),e.split(e.substring(t,t+1)).pop()},checkFullScreen:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},toggleFullScreen:function(e){var i=document,a=i.documentElement;a&&e&&!t.checkFullScreen()?a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.exitFullscreen?i.exitFullscreen():i.msExitFullscreen?i.msExitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.webkitExitFullscreen&&i.webkitExitFullscreen()},moveArray:function(t,i,a,r){var n=e.extend(!0,[],t);if(r&&n.reverse(),a>=n.length)for(var o=a-n.length;o--+1;)n.push(void 0);return n.splice(a,0,n.splice(i,1)[0]),r&&n.reverse(),n},cleanZoomCache:function(e){var t=e.closest(".kv-zoom-cache-theme");t.length||(t=e.closest(".kv-zoom-cache")),t.remove()},closeButton:function(e){return e=e?"close "+e:"close",'<button type="button" class="'+e+'" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n</button>'},getRotation:function(e){switch(e){case 2:return"rotateY(180deg)";case 3:return"rotate(180deg)";case 4:return"rotate(180deg) rotateY(180deg)";case 5:return"rotate(270deg) rotateY(180deg)";case 6:return"rotate(90deg)";case 7:return"rotate(90deg) rotateY(180deg)";case 8:return"rotate(270deg)";default:return""}},setTransform:function(e,t){e&&(e.style.transform=t,e.style.webkitTransform=t,e.style["-moz-transform"]=t,e.style["-ms-transform"]=t,e.style["-o-transform"]=t)}},i=function(i,a){var r=this;r.$element=e(i),r.$parent=r.$element.parent(),r._validate()&&(r.isPreviewable=t.hasFileAPISupport(),r.isIE9=t.isIE(9),r.isIE10=t.isIE(10),(r.isPreviewable||r.isIE9)&&(r._init(a),r._listen()),r.$element.removeClass("file-loading"))},i.prototype={constructor:i,_cleanup:function(){var e=this;e.reader=null,e.clearFileStack(),e.fileBatchCompleted=!0,e.isError=!1,e.cancelling=!1,e.paused=!1,e.lastProgress=0,e._initAjax()},_initAjax:function(){var e=this;e.ajaxQueue=[],e.ajaxRequests=[],e.ajaxQueueIntervalId=null,e.ajaxCurrentThreads=0,e.ajaxAborted=!1},_init:function(i,a){var r,n,o,l,s=this,d=s.$element;s.options=i,e.each(i,function(e,i){switch(e){case"minFileCount":case"maxFileCount":case"minFileSize":case"maxFileSize":case"maxFilePreviewSize":case"resizeImageQuality":case"resizeIfSizeMoreThan":case"progressUploadThreshold":case"initialPreviewCount":case"zoomModalHeight":case"minImageHeight":case"maxImageHeight":case"minImageWidth":case"maxImageWidth":s[e]=t.getNum(i);break;default:s[e]=i}}),s.rtl&&(l=s.previewZoomButtonIcons.prev,s.previewZoomButtonIcons.prev=s.previewZoomButtonIcons.next,s.previewZoomButtonIcons.next=l),!isNaN(s.maxAjaxThreads)&&s.maxAjaxThreads<s.resumableUploadOptions.maxThreads&&(s.resumableUploadOptions.maxThreads=s.maxAjaxThreads),s._initFileManager(),"function"==typeof s.autoOrientImage&&(s.autoOrientImage=s.autoOrientImage()),"function"==typeof s.autoOrientImageInitial&&(s.autoOrientImageInitial=s.autoOrientImageInitial()),a||s._cleanup(),s.$form=d.closest("form"),s._initTemplateDefaults(),s.uploadFileAttr=t.isEmpty(d.attr("name"))?"file_data":d.attr("name"),o=s._getLayoutTemplate("progress"),s.progressTemplate=o.replace("{class}",s.progressClass),s.progressInfoTemplate=o.replace("{class}",s.progressInfoClass),s.progressPauseTemplate=o.replace("{class}",s.progressPauseClass),s.progressCompleteTemplate=o.replace("{class}",s.progressCompleteClass),s.progressErrorTemplate=o.replace("{class}",s.progressErrorClass),s.isDisabled=d.attr("disabled")||d.attr("readonly"),s.isDisabled&&d.attr("disabled",!0),s.isClickable=s.browseOnZoneClick&&s.showPreview&&(s.dropZoneEnabled||!t.isEmpty(s.defaultPreviewContent)),s.isAjaxUpload=t.hasFileUploadSupport()&&!t.isEmpty(s.uploadUrl),s.dropZoneEnabled=t.hasDragDropSupport()&&s.dropZoneEnabled,s.isAjaxUpload||(s.dropZoneEnabled=s.dropZoneEnabled&&t.canAssignFilesToInput()),s.slug="function"==typeof i.slugCallback?i.slugCallback:s._slugDefault,s.mainTemplate=s.showCaption?s._getLayoutTemplate("main1"):s._getLayoutTemplate("main2"),s.captionTemplate=s._getLayoutTemplate("caption"),s.previewGenericTemplate=s._getPreviewTemplate("generic"),!s.imageCanvas&&s.resizeImage&&(s.maxImageWidth||s.maxImageHeight)&&(s.imageCanvas=document.createElement("canvas"),s.imageCanvasContext=s.imageCanvas.getContext("2d")),t.isEmpty(d.attr("id"))&&d.attr("id",t.uniqId()),s.namespace=".fileinput_"+d.attr("id").replace(/-/g,"_"),void 0===s.$container?s.$container=s._createContainer():s._refreshContainer(),n=s.$container,s.$dropZone=n.find(".file-drop-zone"),s.$progress=n.find(".kv-upload-progress"),s.$btnUpload=n.find(".fileinput-upload"),s.$captionContainer=t.getElement(i,"elCaptionContainer",n.find(".file-caption")),s.$caption=t.getElement(i,"elCaptionText",n.find(".file-caption-name")),t.isEmpty(s.msgPlaceholder)||(r=d.attr("multiple")?s.filePlural:s.fileSingle,s.$caption.attr("placeholder",s.msgPlaceholder.replace("{files}",r))),s.$captionIcon=s.$captionContainer.find(".file-caption-icon"),s.$previewContainer=t.getElement(i,"elPreviewContainer",n.find(".file-preview")),s.$preview=t.getElement(i,"elPreviewImage",n.find(".file-preview-thumbnails")),s.$previewStatus=t.getElement(i,"elPreviewStatus",n.find(".file-preview-status")),s.$errorContainer=t.getElement(i,"elErrorContainer",s.$previewContainer.find(".kv-fileinput-error")),s._validateDisabled(),t.isEmpty(s.msgErrorClass)||t.addCss(s.$errorContainer,s.msgErrorClass),a?s._errorsExist()||s.$errorContainer.hide():(s.$errorContainer.hide(),s.previewInitId="thumb-"+d.attr("id"),s._initPreviewCache(),s._initPreview(!0),s._initPreviewActions(),s.$parent.hasClass("file-loading")&&(s.$container.insertBefore(s.$parent),s.$parent.remove())),s._setFileDropZoneTitle(),d.attr("disabled")&&s.disable(),s._initZoom(),s.hideThumbnailContent&&t.addCss(s.$preview,"hide-content")},_initFileManager:function(){var i=this;i.fileManager={stack:{},processed:[],errors:[],loadedImages:{},totalImages:0,totalFiles:null,totalSize:null,uploadedSize:0,stats:{},initStats:function(e){var a={started:t.now().getTime()};e?i.fileManager.stats[e]=a:i.fileManager.stats=a},getUploadStats:function(e,a,r){var n=i.fileManager,o=e?n.stats[e]&&n.stats[e].started||null:null;o||(o=t.now().getTime());var l=(t.now().getTime()-o)/1e3,s=["B/s","KB/s","MB/s","GB/s","TB/s","PB/s","EB/s","ZB/s","YB/s"],d=l?a/l:0,c=i._getSize(d,s),u=r-a,p={fileId:e,started:o,elapsed:l,loaded:a,total:r,bps:d,bitrate:c,pendingBytes:u};return e?n.stats[e]=p:n.stats=p,p},exists:function(t){return-1!==e.inArray(t,i.fileManager.getIdList())},count:function(){return i.fileManager.getIdList().length},total:function(){var e=i.fileManager;return e.totalFiles||(e.totalFiles=e.count()),e.totalFiles},getTotalSize:function(){var t=i.fileManager;return t.totalSize?t.totalSize:(t.totalSize=0,e.each(i.fileManager.stack,function(e,i){var a=parseFloat(i.size);t.totalSize+=isNaN(a)?0:a}),t.totalSize)},add:function(e,a){a||(a=i.fileManager.getId(e)),a&&(i.fileManager.stack[a]={file:e,name:t.getFileName(e),relativePath:t.getFileRelativePath(e),size:e.size,nameFmt:i._getFileName(e,""),sizeFmt:i._getSize(e.size)})},remove:function(e){var t=e.attr("data-fileid");t&&i.fileManager.removeFile(t)},removeFile:function(e){delete i.fileManager.stack[e],delete i.fileManager.loadedImages[e]},move:function(t,a){var r={},n=i.fileManager.stack;(t||a)&&t!==a&&(e.each(n,function(e,i){e!==t&&(r[e]=i),e===a&&(r[t]=n[t])}),i.fileManager.stack=r)},list:function(){var t=[];return e.each(i.fileManager.stack,function(e,i){i&&i.file&&t.push(i.file)}),t},isPending:function(t){return-1===e.inArray(t,i.fileManager.processed)&&i.fileManager.exists(t)},isProcessed:function(){var t=!0,a=i.fileManager;return e.each(a.stack,function(e){a.isPending(e)&&(t=!1)}),t},clear:function(){var e=i.fileManager;e.totalFiles=null,e.totalSize=null,e.uploadedSize=0,e.stack={},e.errors=[],e.processed=[],e.stats={},e.clearImages()},clearImages:function(){i.fileManager.loadedImages={},i.fileManager.totalImages=0},addImage:function(e,t){i.fileManager.loadedImages[e]=t},removeImage:function(e){delete i.fileManager.loadedImages[e]},getImageIdList:function(){return Object.keys(i.fileManager.loadedImages)},getImageCount:function(){return i.fileManager.getImageIdList().length},getId:function(e){return i._getFileId(e)},getIndex:function(e){return i.fileManager.getIdList().indexOf(e)},getThumb:function(t){var a=null;return i._getThumbs().each(function(){var i=e(this);i.attr("data-fileid")===t&&(a=i)}),a},getThumbIndex:function(e){var t=e.attr("data-fileid");return i.fileManager.getIndex(t)},getIdList:function(){return Object.keys(i.fileManager.stack)},getFile:function(e){return i.fileManager.stack[e]||null},getFileName:function(e,t){var a=i.fileManager.getFile(e);return a?t?a.nameFmt||"":a.name||"":""},getFirstFile:function(){var e=i.fileManager.getIdList(),t=e&&e.length?e[0]:null;return i.fileManager.getFile(t)},setFile:function(e,t){i.fileManager.getFile(e)?i.fileManager.stack[e].file=t:i.fileManager.add(t,e)},setProcessed:function(e){i.fileManager.processed.push(e)},getProgress:function(){var e=i.fileManager.total(),t=i.fileManager.processed.length;return e?Math.ceil(t/e*100):0},setProgress:function(e,t){var a=i.fileManager.getFile(e);!isNaN(t)&&a&&(a.progress=t)}}},_setUploadData:function(i,a){var r=this;e.each(a,function(e,a){var n=r.uploadParamNames[e]||e;t.isArray(a)?i.append(n,a[0],a[1]):i.append(n,a)})},_initResumableUpload:function(){var i=this,a=i.resumableUploadOptions,r=t.logMessages;if(i.enableResumableUpload){if(a.fallback!==!1&&"function"!=typeof a.fallback&&(a.fallback=function(e){e._log(r.noResumableSupport),e.enableResumableUpload=!1}),!t.hasResumableUploadSupport()&&a.fallback!==!1)return void a.fallback(i);if(!i.uploadUrl&&i.enableResumableUpload)return i._log(r.noUploadUrl),void(i.enableResumableUpload=!1);if(a.chunkSize=parseFloat(a.chunkSize),a.chunkSize<=0||isNaN(a.chunkSize))return i._log(r.invalidChunkSize,{chunkSize:a.chunkSize}),void(i.enableResumableUpload=!1);i.resumableManager={init:function(e,t,a){var r=i.resumableManager,n=i.fileManager;r.currThreads=0,r.logs=[],r.stack=[],r.error="",r.chunkIntervalId=null,r.id=e,r.file=t.file,r.fileName=t.name,r.fileIndex=a,r.completed=!1,r.testing=!1,r.lastProgress=0,i.showPreview&&(r.$thumb=n.getThumb(e)||null,r.$progress=r.$btnDelete=null,r.$thumb&&r.$thumb.length&&(r.$progress=r.$thumb.find(".file-thumb-progress"),r.$btnDelete=r.$thumb.find(".kv-file-remove"))),r.chunkSize=1024*i.resumableUploadOptions.chunkSize,r.chunkCount=r.getTotalChunks()},logAjaxError:function(e,t,a){i.resumableUploadOptions.showErrorLog&&i._log(r.ajaxError,{status:e.status,error:a,text:e.responseText||""})},reset:function(){var e=i.resumableManager;e.processed={}},setProcessed:function(e){var t,a=i.resumableManager,r=i.fileManager,n=a.id,o=a.$thumb,l=a.$progress,s=o&&o.length,d={id:s?o.attr("id"):"",index:r.getIndex(n),fileId:n};a.completed=!0,a.lastProgress=0,r.uploadedSize+=a.file.size,s&&o.removeClass("file-uploading"),"success"===e?(i.showPreview&&(i._setProgress(101,l),i._setThumbStatus(o,"Success"),i._initUploadSuccess(a.processed[n].data,o)),i.fileManager.removeFile(n),delete a.processed[n],i._raise("fileuploaded",[d.id,d.index,d.fileId]),r.isProcessed()&&i._setProgress(101)):(i.showPreview&&(i._setThumbStatus(o,"Error"),i._setPreviewError(o,!0),i._setProgress(101,l,i.msgProgressError),i._setProgress(101,i.$progress,i.msgProgressError),i.cancelling=!0),i.$errorContainer.find('li[data-file-id="'+d.fileId+'"]').length||(t=i.msgResumableUploadRetriesExceeded.setTokens({file:a.fileName,max:i.resumableUploadOptions.maxRetries,error:a.error}),i._showFileError(t,d))),r.isProcessed()&&a.reset()},check:function(){var t=i.resumableManager,a=!0;e.each(t.logs,function(e,t){return t?void 0:(a=!1,!1)}),a&&(clearInterval(t.chunkIntervalId),t.setProcessed("success"))},processedResumables:function(){var e,t=i.resumableManager.logs,a=0;if(!t||!t.length)return 0;for(e=0;e<t.length;e++)t[e]===!0&&a++;return a},getUploadedSize:function(){var e=i.resumableManager,t=e.processedResumables()*e.chunkSize;return t>e.file.size?e.file.size:t},getTotalChunks:function(){var e=i.resumableManager,t=parseFloat(e.chunkSize);return!isNaN(t)&&t>0?Math.ceil(e.file.size/t):0},getProgress:function(){var e=i.resumableManager,t=e.processedResumables(),a=e.chunkCount;return 0===a?0:Math.ceil(t/a*100)},checkAborted:function(e){(i.paused||i.cancelling)&&(clearInterval(e),i.unlock())},upload:function(){var e,a=i.resumableManager,r=i.fileManager,n=r.getIdList(),o="new";e=setInterval(function(){var l;if(a.checkAborted(e),"new"===o&&(i.lock(),o="processing",l=n.shift(),r.initStats(l),r.stack[l]&&(a.init(l,r.stack[l],r.getIndex(l)),a.testUpload(),a.uploadResumable())),!r.isPending(l)&&a.completed&&(o="new"),r.isProcessed()){var s=i.$preview.find(".file-preview-initial");s.length&&(t.addCss(s,t.SORT_CSS),i._initSortable()),clearInterval(e),i._clearFileInput(),i.unlock(),setTimeout(function(){var e=i.previewCache.data;e&&(i.initialPreview=e.content,i.initialPreviewConfig=e.config,i.initialPreviewThumbTags=e.tags),i._raise("filebatchuploadcomplete",[i.initialPreview,i.initialPreviewConfig,i.initialPreviewThumbTags,i._getExtraData()])},i.processDelay)}},i.processDelay)},uploadResumable:function(){var e,t=i.resumableManager,a=t.chunkCount;for(e=0;a>e;e++)t.logs[e]=!(!t.processed[t.id]||!t.processed[t.id][e]);for(e=0;a>e;e++)t.pushAjax(e,0);t.chunkIntervalId=setInterval(t.loopAjax,i.queueDelay)},testUpload:function(){var a,r,n,o,l,s,d,c=i.resumableManager,u=i.resumableUploadOptions,p=i.fileManager,f=c.id;return u.testUrl?(c.testing=!0,a=new FormData,r=p.stack[f],i._setUploadData(a,{fileId:f,fileName:r.fileName,fileSize:r.size,fileRelativePath:r.relativePath,chunkSize:c.chunkSize,chunkCount:c.chunkCount}),n=function(e){d=i._getOutData(a,e),i._raise("filetestbeforesend",[f,p,c,d])},o=function(r,n,o){d=i._getOutData(a,o,r);var l=i.uploadParamNames,s=l.chunksUploaded||"chunksUploaded",u=[f,p,c,d];r[s]&&t.isArray(r[s])?(c.processed[f]||(c.processed[f]={}),e.each(r[s],function(e,t){c.logs[t]=!0,c.processed[f][t]=!0}),c.processed[f].data=r,i._raise("filetestsuccess",u)):i._raise("filetesterror",u),c.testing=!1},l=function(e,t,r){d=i._getOutData(a,e),i._raise("filetestajaxerror",[f,p,c,d]),c.logAjaxError(e,t,r),c.testing=!1},s=function(){i._raise("filetestcomplete",[f,p,c,i._getOutData(a)]),c.testing=!1},void i._ajaxSubmit(n,o,s,l,a,f,c.fileIndex,u.testUrl)):void(c.testing=!1)},pushAjax:function(e,t){i.resumableManager.stack.push([e,t])},sendAjax:function(e,a){var n,o=i.fileManager,l=i.resumableManager,s=i.resumableUploadOptions,d=l.chunkSize,c=l.id,u=l.file,p=l.$thumb,f=l.$btnDelete;if(!l.processed[c]||!l.processed[c][e]){if(l.currThreads++,a>s.maxRetries)return void l.setProcessed("error");var g,m,v,h,w,b,_=u.slice?"slice":u.mozSlice?"mozSlice":u.webkitSlice?"webkitSlice":"slice",C=u[_](d*e,d*(e+1));g=new FormData,n=o.stack[c],i._setUploadData(g,{chunkCount:l.chunkCount,chunkIndex:e,chunkSize:d,chunkSizeStart:d*e,fileBlob:[C,l.fileName],fileId:c,fileName:l.fileName,fileRelativePath:n.relativePath,fileSize:u.size,retryCount:a}),l.$progress&&l.$progress.length&&l.$progress.show(),v=function(r){m=i._getOutData(g,r),i.showPreview&&(p.hasClass("file-preview-success")||(i._setThumbStatus(p,"Loading"),t.addCss(p,"file-uploading")),f.attr("disabled",!0)),i._raise("filechunkbeforesend",[c,e,a,o,l,m])},h=function(t,n,s){m=i._getOutData(g,s,t);var d=i.uploadParamNames,u=d.chunkIndex||"chunkIndex",p=i.resumableUploadOptions,f=[c,e,a,o,l,m];l.currThreads--,t.error?(p.showErrorLog&&i._log(r.retryStatus,{retry:a+1,filename:l.fileName,chunk:e}),l.pushAjax(e,a+1),l.error=t.error,i._raise("filechunkerror",f)):(l.logs[t[u]]=!0,l.processed[c]||(l.processed[c]={}),l.processed[c][t[u]]=!0,l.processed[c].data=t,i._raise("filechunksuccess",f),l.check())},w=function(t,r,n){m=i._getOutData(g,t),l.currThreads--,l.error=n,l.logAjaxError(t,r,n),i._raise("filechunkajaxerror",[c,e,a,o,l,m]),l.pushAjax(e,a+1)},b=function(){i._raise("filechunkcomplete",[c,e,a,o,l,i._getOutData(g)])},i._ajaxSubmit(v,h,b,w,g,c,l.fileIndex)}},loopAjax:function(){var e=i.resumableManager;if(e.currThreads<i.resumableUploadOptions.maxThreads&&!e.testing){var t,a=e.stack.shift();"undefined"!=typeof a&&(t=a[0],e.processed[e.id]&&e.processed[e.id][t]?e.processedResumables()>=e.getTotalChunks()&&(e.setProcessed("success"),clearInterval(e.chunkIntervalId)):e.sendAjax(t,a[1]))}}},i.resumableManager.reset()}},_initTemplateDefaults:function(){var i,a,r,n,o,l,s,d,c,u,p,f,g,m,v,h,w,b,_,C,y,x,T,I,P,F,E,S,k,A,z,D,M,U,$,j,R,O,B,L,Z,N=this;i='{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="input-group {class}">\n  {caption}\n<div class="input-group-btn input-group-append">\n      {remove}\n      {cancel}\n      {pause}\n      {upload}\n      {browse}\n    </div>\n</div>',a='{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',r='<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',o=t.closeButton("fileinput-remove"),n='<i class="glyphicon glyphicon-file"></i>',l='<div class="file-caption form-control {class}" tabindex="500">\n  <span class="file-caption-icon"></span>\n  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n</div>',s='<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>',d='<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>',c='<div tabindex="500" class="{css}" {status}>{icon} {label}</div>',u='<div id="'+t.MODAL_ID+'" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="'+t.MODAL_ID+'Label"></div>',p='<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n',f='<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>{stats}',Z='<div class="text-info file-upload-stats"><span class="pending-time">{pendingTime}</span> <span class="upload-speed">{uploadSpeed}</span></div>',g=" <samp>({sizeText})</samp>",m='<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>',v='<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>',h='<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n',w='<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>',b='<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>',_='<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>',C='<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>',y='<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>',x='<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-fileid="{fileid}" data-template="{template}"',T=x+'><div class="kv-file-content">\n',I=x+' title="{caption}"><div class="kv-file-content">\n',P="</div>{footer}\n</div>\n",F="{content}\n",O=" {style}",E='<div class="kv-preview-data file-preview-html" title="{caption}"'+O+">{data}</div>\n",S='<img src="{data}" class="file-preview-image kv-preview-data" title="{title}" alt="{alt}"'+O+">\n",k='<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly'+O+">{data}</textarea>\n",A='<iframe class="kv-preview-data file-preview-office" src="https://view.officeapps.live.com/op/embed.aspx?src={data}"'+O+"></iframe>",z='<iframe class="kv-preview-data file-preview-gdocs" src="https://docs.google.com/gview?url={data}&embedded=true"'+O+"></iframe>",D='<video class="kv-preview-data file-preview-video" controls'+O+'>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</video>\n",M='<!--suppress ALL --><audio class="kv-preview-data file-preview-audio" controls'+O+'>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</audio>\n",U='<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash"'+O+">\n",j='<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf"'+O+">\n",$='<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}"'+O+'>\n<param name="movie" value="{caption}" />\n'+t.OBJECT_PARAMS+" "+t.DEFAULT_PREVIEW+"\n</object>\n",R='<div class="kv-preview-data file-preview-other-frame"'+O+">\n"+t.DEFAULT_PREVIEW+"\n</div>\n",B='<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>',L={width:"100%",height:"100%","min-height":"480px"},N._isPdfRendered()&&(j=N.pdfRendererTemplate.replace("{renderer}",N._encodeURI(N.pdfRendererUrl))),N.defaults={layoutTemplates:{main1:i,main2:a,preview:r,close:o,fileIcon:n,caption:l,modalMain:u,modal:p,progress:f,stats:Z,size:g,footer:m,indicator:y,actions:v,actionDelete:h,actionUpload:w,actionDownload:b,actionZoom:_,actionDrag:C,btnDefault:s,btnLink:d,btnBrowse:c,zoomCache:B},previewMarkupTags:{tagBefore1:T,tagBefore2:I,tagAfter:P},previewContentTemplates:{generic:F,html:E,image:S,text:k,office:A,gdocs:z,video:D,audio:M,flash:U,object:$,pdf:j,other:R},allowedPreviewTypes:["image","html","text","video","audio","flash","pdf","object"],previewTemplates:{},previewSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"213px",height:"160px"},text:{width:"213px",height:"160px"},office:{width:"213px",height:"160px"},gdocs:{width:"213px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"100%",height:"30px"},flash:{width:"213px",height:"160px"},object:{width:"213px",height:"160px"},pdf:{width:"100%",height:"160px"},other:{width:"213px",height:"160px"}},previewSettingsSmall:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"100%",height:"160px"},text:{width:"100%",height:"160px"},office:{width:"100%",height:"160px"},gdocs:{width:"100%",height:"160px"},video:{width:"100%",height:"auto"},audio:{width:"100%",height:"30px"},flash:{width:"100%",height:"auto"},object:{width:"100%",height:"auto"},pdf:{width:"100%",height:"160px"},other:{width:"100%",height:"160px"}},previewZoomSettings:{image:{width:"auto",height:"auto","max-width":"100%",
                "max-height":"100%"},html:L,text:L,office:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},gdocs:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},video:{width:"auto",height:"100%","max-width":"100%"},audio:{width:"100%",height:"30px"},flash:{width:"auto",height:"480px"},object:{width:"auto",height:"100%","max-width":"100%","min-height":"480px"},pdf:L,other:{width:"auto",height:"100%","min-height":"480px"}},mimeTypeAliases:{"video/quicktime":"video/mp4"},fileTypeSettings:{image:function(e,i){return t.compare(e,"image.*")&&!t.compare(e,/(tiff?|wmf)$/i)||t.compare(i,/\.(gif|png|jpe?g)$/i)},html:function(e,i){return t.compare(e,"text/html")||t.compare(i,/\.(htm|html)$/i)},office:function(e,i){return t.compare(e,/(word|excel|powerpoint|office)$/i)||t.compare(i,/\.(docx?|xlsx?|pptx?|pps|potx?)$/i)},gdocs:function(e,i){return t.compare(e,/(word|excel|powerpoint|office|iwork-pages|tiff?)$/i)||t.compare(i,/\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i)},text:function(e,i){return t.compare(e,"text.*")||t.compare(i,/\.(xml|javascript)$/i)||t.compare(i,/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)},video:function(e,i){return t.compare(e,"video.*")&&(t.compare(e,/(ogg|mp4|mp?g|mov|webm|3gp)$/i)||t.compare(i,/\.(og?|mp4|webm|mp?g|mov|3gp)$/i))},audio:function(e,i){return t.compare(e,"audio.*")&&(t.compare(i,/(ogg|mp3|mp?g|wav)$/i)||t.compare(i,/\.(og?|mp3|mp?g|wav)$/i))},flash:function(e,i){return t.compare(e,"application/x-shockwave-flash",!0)||t.compare(i,/\.(swf)$/i)},pdf:function(e,i){return t.compare(e,"application/pdf",!0)||t.compare(i,/\.(pdf)$/i)},object:function(){return!0},other:function(){return!0}},fileActionSettings:{showRemove:!0,showUpload:!0,showDownload:!0,showZoom:!0,showDrag:!0,removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",removeErrorClass:"btn btn-sm btn-kv btn-danger",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",uploadTitle:"Upload file",uploadRetryIcon:'<i class="glyphicon glyphicon-repeat"></i>',uploadRetryTitle:"Retry upload",downloadIcon:'<i class="glyphicon glyphicon-download"></i>',downloadClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",downloadTitle:"Download file",zoomIcon:'<i class="glyphicon glyphicon-zoom-in"></i>',zoomClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",zoomTitle:"View Details",dragIcon:'<i class="glyphicon glyphicon-move"></i>',dragClass:"text-info",dragTitle:"Move / Rearrange",dragSettings:{},indicatorNew:'<i class="glyphicon glyphicon-plus-sign text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hourglass text-muted"></i>',indicatorPaused:'<i class="glyphicon glyphicon-pause text-primary"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ...",indicatorPausedTitle:"Upload Paused"}},e.each(N.defaults,function(t,i){return"allowedPreviewTypes"===t?void(void 0===N.allowedPreviewTypes&&(N.allowedPreviewTypes=i)):void(N[t]=e.extend(!0,{},i,N[t]))}),N._initPreviewTemplates()},_initPreviewTemplates:function(){var i,a=this,r=a.previewMarkupTags,n=r.tagAfter;e.each(a.previewContentTemplates,function(e,o){t.isEmpty(a.previewTemplates[e])&&(i=r.tagBefore2,"generic"!==e&&"image"!==e&&"html"!==e&&"text"!==e||(i=r.tagBefore1),a._isPdfRendered()&&"pdf"===e&&(i=i.replace("kv-file-content","kv-file-content kv-pdf-rendered")),a.previewTemplates[e]=i+o+n)})},_initPreviewCache:function(){var i=this;i.previewCache={data:{},init:function(){var e=i.initialPreview;e.length>0&&!t.isArray(e)&&(e=e.split(i.initialPreviewDelimiter)),i.previewCache.data={content:e,config:i.initialPreviewConfig,tags:i.initialPreviewThumbTags}},count:function(e){if(!i.previewCache.data||!i.previewCache.data.content)return 0;if(e){var t=i.previewCache.data.content.filter(function(e){return null!==e});return t.length}return i.previewCache.data.content.length},get:function(a,r){var n,o,l,s,d,c,u,p=t.INIT_FLAG+a,f=i.previewCache.data,g=f.config[a],m=f.content[a],v=t.ifSet("previewAsData",g,i.initialPreviewAsData),h=g?{title:g.title||null,alt:g.alt||null}:{title:null,alt:null},w=function(e,a,r,n,o,l,s,d){var c=" file-preview-initial "+t.SORT_CSS+(s?" "+s:""),u=i.previewInitId+"-"+l,p=g&&g.fileId||u;return i._generatePreviewTemplate(e,a,r,n,u,p,!1,null,c,o,l,d,h,g&&g.zoomData||a)};return m&&m.length?(r=void 0===r?!0:r,l=t.ifSet("type",g,i.initialPreviewFileType||"generic"),d=t.ifSet("filename",g,t.ifSet("caption",g)),c=t.ifSet("filetype",g,l),s=i.previewCache.footer(a,r,g&&g.size||null),u=t.ifSet("frameClass",g),n=v?w(l,m,d,c,s,p,u):w("generic",m,d,c,s,p,u,l).setTokens({content:f.content[a]}),f.tags.length&&f.tags[a]&&(n=t.replaceTags(n,f.tags[a])),t.isEmpty(g)||t.isEmpty(g.frameAttr)||(o=e(document.createElement("div")).html(n),o.find(".file-preview-initial").attr(g.frameAttr),n=o.html(),o.remove()),n):""},clean:function(e){e.content=t.cleanArray(e.content),e.config=t.cleanArray(e.config),e.tags=t.cleanArray(e.tags),i.previewCache.data=e},add:function(e,a,r,n){var o=i.previewCache.data,l=e.length-1;return e&&e.length?(t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),n?(l=o.content.push(e[0])-1,o.config[l]=a,o.tags[l]=r):(o.content=e,o.config=a,o.tags=r),i.previewCache.clean(o),l):l},set:function(e,a,r,n){var o,l,s=i.previewCache.data;if(e&&e.length&&(t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),l=e.filter(function(e){return null!==e}),l.length)){if(void 0===s.content&&(s.content=[]),void 0===s.config&&(s.config=[]),void 0===s.tags&&(s.tags=[]),n){for(o=0;o<e.length;o++)e[o]&&s.content.push(e[o]);for(o=0;o<a.length;o++)a[o]&&s.config.push(a[o]);for(o=0;o<r.length;o++)r[o]&&s.tags.push(r[o])}else s.content=e,s.config=a,s.tags=r;i.previewCache.clean(s)}},unset:function(a){var r=i.previewCache.count(),n=i.reversePreviewOrder;if(r){if(1===r)return i.previewCache.data.content=[],i.previewCache.data.config=[],i.previewCache.data.tags=[],i.initialPreview=[],i.initialPreviewConfig=[],void(i.initialPreviewThumbTags=[]);i.previewCache.data.content=t.spliceArray(i.previewCache.data.content,a,n),i.previewCache.data.config=t.spliceArray(i.previewCache.data.config,a,n),i.previewCache.data.tags=t.spliceArray(i.previewCache.data.tags,a,n);var o=e.extend(!0,{},i.previewCache.data);i.previewCache.clean(o)}},out:function(){var e,t,a,r="",n=i.previewCache.count();if(0===n)return{content:"",caption:""};for(t=0;n>t;t++)a=i.previewCache.get(t),r=i.reversePreviewOrder?a+r:r+a;return e=i._getMsgSelected(n),{content:r,caption:e}},footer:function(e,a,r){var n=i.previewCache.data||{};if(t.isEmpty(n.content))return"";(t.isEmpty(n.config)||t.isEmpty(n.config[e]))&&(n.config[e]={}),a=void 0===a?!0:a;var o,l=n.config[e],s=t.ifSet("caption",l),d=t.ifSet("width",l,"auto"),c=t.ifSet("url",l,!1),u=t.ifSet("key",l,null),p=t.ifSet("fileId",l,null),f=i.fileActionSettings,g=i.initialPreviewShowDelete||!1,m=i.initialPreviewDownloadUrl?i.initialPreviewDownloadUrl+"?key="+u+(p?"&fileId="+p:""):"",v=l.downloadUrl||m,h=l.filename||l.caption||"",w=!!v,b=t.ifSet("showRemove",l,t.ifSet("showRemove",f,g)),_=t.ifSet("showDownload",l,t.ifSet("showDownload",f,w)),C=t.ifSet("showZoom",l,t.ifSet("showZoom",f,!0)),y=t.ifSet("showDrag",l,t.ifSet("showDrag",f,!0)),x=c===!1&&a;return _=_&&l.downloadUrl!==!1&&!!v,o=i._renderFileActions(l,!1,_,b,C,y,x,c,u,!0,v,h),i._getLayoutTemplate("footer").setTokens({progress:i._renderThumbProgress(),actions:o,caption:s,size:i._getSize(r),width:d,indicator:""})}},i.previewCache.init()},_isPdfRendered:function(){var e=this,t=e.usePdfRenderer,i="function"==typeof t?t():!!t;return i&&e.pdfRendererUrl},_handler:function(e,t,i){var a=this,r=a.namespace,n=t.split(" ").join(r+" ")+r;e&&e.length&&e.off(n).on(n,i)},_encodeURI:function(e){var t=this;return t.encodeUrl?encodeURI(e):e},_log:function(e,t){var i=this,a=i.$element.attr("id");i.showConsoleLogs&&(a&&(e='"'+a+'": '+e),e="bootstrap-fileinput: "+e,"object"==typeof t&&(e=e.setTokens(t)),window.console&&"undefined"!=typeof window.console.log?window.console.log(e):window.alert(e))},_validate:function(){var e=this,i="file"===e.$element.attr("type");return i||e._log(t.logMessages.badInputType),i},_errorsExist:function(){var t,i=this,a=i.$errorContainer.find("li");return a.length?!0:(t=e(document.createElement("div")).html(i.$errorContainer.html()),t.find(".kv-error-close").remove(),t.find("ul").remove(),!!e.trim(t.text()).length)},_errorHandler:function(e,t){var i=this,a=e.target.error,r=function(e){i._showError(e.replace("{name}",t))};r(a.code===a.NOT_FOUND_ERR?i.msgFileNotFound:a.code===a.SECURITY_ERR?i.msgFileSecured:a.code===a.NOT_READABLE_ERR?i.msgFileNotReadable:a.code===a.ABORT_ERR?i.msgFilePreviewAborted:i.msgFilePreviewError)},_addError:function(e){var t=this,i=t.$errorContainer;e&&i.length&&(i.html(t.errorCloseButton+e),t._handler(i.find(".kv-error-close"),"click",function(){setTimeout(function(){t.showPreview&&!t.getFrames().length&&t.clear(),i.fadeOut("slow")},t.processDelay)}))},_setValidationError:function(e){var i=this;e=(e?e+" ":"")+"has-error",i.$container.removeClass(e).addClass("has-error"),t.addCss(i.$captionContainer,"is-invalid")},_resetErrors:function(e){var t=this,i=t.$errorContainer;t.isError=!1,t.$container.removeClass("has-error"),t.$captionContainer.removeClass("is-invalid"),i.html(""),e?i.fadeOut("slow"):i.hide()},_showFolderError:function(e){var t,i=this,a=i.$errorContainer;e&&(i.isAjaxUpload||i._clearFileInput(),t=i.msgFoldersNotAllowed.replace("{n}",e),i._addError(t),i._setValidationError(),a.fadeIn(800),i._raise("filefoldererror",[e,t]))},_showFileError:function(e,t,i){var a=this,r=a.$errorContainer,n=i||"fileuploaderror",o=t&&t.fileId||"",l=t&&t.id?'<li data-thumb-id="'+t.id+'" data-file-id="'+o+'">'+e+"</li>":"<li>"+e+"</li>";return 0===r.find("ul").length?a._addError("<ul>"+l+"</ul>"):r.find("ul").append(l),r.fadeIn(800),a._raise(n,[t,e]),a._setValidationError("file-input-new"),!0},_showError:function(e,t,i){var a=this,r=a.$errorContainer,n=i||"fileerror";return t=t||{},t.reader=a.reader,a._addError(e),r.fadeIn(800),a._raise(n,[t,e]),a.isAjaxUpload||a._clearFileInput(),a._setValidationError("file-input-new"),a.$btnUpload.attr("disabled",!0),!0},_noFilesError:function(e){var t=this,i=t.minFileCount>1?t.filePlural:t.fileSingle,a=t.msgFilesTooLess.replace("{n}",t.minFileCount).replace("{files}",i),r=t.$errorContainer;t._addError(a),t.isError=!0,t._updateFileDetails(0),r.fadeIn(800),t._raise("fileerror",[e,a]),t._clearFileInput(),t._setValidationError()},_parseError:function(t,i,a,r){var n,o=this,l=e.trim(a+""),s=void 0!==i.responseJSON&&void 0!==i.responseJSON.error?i.responseJSON.error:i.responseText;return o.cancelling&&o.msgUploadAborted&&(l=o.msgUploadAborted),o.showAjaxErrorDetails&&s&&(s=e.trim(s.replace(/\n\s*\n/g,"\n")),n=s.length?"<pre>"+s+"</pre>":"",l+=l?n:s),l||(l=o.msgAjaxError.replace("{operation}",t)),o.cancelling=!1,r?"<b>"+r+": </b>"+l:l},_parseFileType:function(e,i){var a,r,n,o,l=this,s=l.allowedPreviewTypes||[];if("application/text-plain"===e)return"text";for(o=0;o<s.length;o++)if(n=s[o],a=l.fileTypeSettings[n],r=a(e,i)?n:"",!t.isEmpty(r))return r;return"other"},_getPreviewIcon:function(t){var i,a=this,r=null;return t&&t.indexOf(".")>-1&&(i=t.split(".").pop(),a.previewFileIconSettings&&(r=a.previewFileIconSettings[i]||a.previewFileIconSettings[i.toLowerCase()]||null),a.previewFileExtSettings&&e.each(a.previewFileExtSettings,function(e,t){return a.previewFileIconSettings[e]&&t(i)?void(r=a.previewFileIconSettings[e]):void 0})),r||a.previewFileIcon},_parseFilePreviewIcon:function(e,t){var i=this,a=i._getPreviewIcon(t),r=e;return r.indexOf("{previewFileIcon}")>-1&&(r=r.setTokens({previewFileIconClass:i.previewFileIconClass,previewFileIcon:a})),r},_raise:function(t,i){var a=this,r=e.Event(t);if(void 0!==i?a.$element.trigger(r,i):a.$element.trigger(r),r.isDefaultPrevented()||r.result===!1)return!1;switch(t){case"filebatchuploadcomplete":case"filebatchuploadsuccess":case"fileuploaded":case"fileclear":case"filecleared":case"filereset":case"fileerror":case"filefoldererror":case"fileuploaderror":case"filebatchuploaderror":case"filedeleteerror":case"filecustomerror":case"filesuccessremove":break;default:a.ajaxAborted||(a.ajaxAborted=r.result)}return!0},_listenFullScreen:function(e){var t,i,a=this,r=a.$modal;r&&r.length&&(t=r&&r.find(".btn-fullscreen"),i=r&&r.find(".btn-borderless"),t.length&&i.length&&(t.removeClass("active").attr("aria-pressed","false"),i.removeClass("active").attr("aria-pressed","false"),e?t.addClass("active").attr("aria-pressed","true"):i.addClass("active").attr("aria-pressed","true"),r.hasClass("file-zoom-fullscreen")?a._maximizeZoomDialog():e?a._maximizeZoomDialog():i.removeClass("active").attr("aria-pressed","false")))},_listen:function(){var i,a=this,r=a.$element,n=a.$form,o=a.$container;a._handler(r,"click",function(e){r.hasClass("file-no-browse")&&(r.data("zoneClicked")?r.data("zoneClicked",!1):e.preventDefault())}),a._handler(r,"change",e.proxy(a._change,a)),a.showBrowse&&a._handler(a.$btnFile,"click",e.proxy(a._browse,a)),a._handler(o.find(".fileinput-remove:not([disabled])"),"click",e.proxy(a.clear,a)),a._handler(o.find(".fileinput-cancel"),"click",e.proxy(a.cancel,a)),a._handler(o.find(".fileinput-pause"),"click",e.proxy(a.pause,a)),a._initDragDrop(),a._handler(n,"reset",e.proxy(a.clear,a)),a.isAjaxUpload||a._handler(n,"submit",e.proxy(a._submitForm,a)),a._handler(a.$container.find(".fileinput-upload"),"click",e.proxy(a._uploadClick,a)),a._handler(e(window),"resize",function(){a._listenFullScreen(screen.width===window.innerWidth&&screen.height===window.innerHeight)}),i="webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",a._handler(e(document),i,function(){a._listenFullScreen(t.checkFullScreen())}),a._autoFitContent(),a._initClickable(),a._refreshPreview()},_autoFitContent:function(){var t,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=this,r=400>i?a.previewSettingsSmall||a.defaults.previewSettingsSmall:a.previewSettings||a.defaults.previewSettings;e.each(r,function(e,i){t=".file-preview-frame .file-preview-"+e,a.$preview.find(t+".kv-preview-data,"+t+" .kv-preview-data").css(i)})},_scanDroppedItems:function(e,i,a){a=a||"";var r,n,o,l=this,s=function(e){l._log(t.logMessages.badDroppedFiles),l._log(e)};e.isFile?e.file(function(e){i.push(e)},s):e.isDirectory&&(n=e.createReader(),(o=function(){n.readEntries(function(t){if(t&&t.length>0){for(r=0;r<t.length;r++)l._scanDroppedItems(t[r],i,a+e.name+"/");o()}return null},s)})())},_initDragDrop:function(){var t=this,i=t.$dropZone;t.dropZoneEnabled&&t.showPreview&&(t._handler(i,"dragenter dragover",e.proxy(t._zoneDragEnter,t)),t._handler(i,"dragleave",e.proxy(t._zoneDragLeave,t)),t._handler(i,"drop",e.proxy(t._zoneDrop,t)),t._handler(e(document),"dragenter dragover drop",t._zoneDragDropInit))},_zoneDragDropInit:function(e){e.stopPropagation(),e.preventDefault()},_zoneDragEnter:function(i){var a=this,r=i.originalEvent.dataTransfer,n=e.inArray("Files",r.types)>-1;return a._zoneDragDropInit(i),a.isDisabled||!n?(i.originalEvent.dataTransfer.effectAllowed="none",void(i.originalEvent.dataTransfer.dropEffect="none")):void(a._raise("fileDragEnter",{sourceEvent:i,files:r.types.Files})&&t.addCss(a.$dropZone,"file-highlighted"))},_zoneDragLeave:function(e){var t=this;t._zoneDragDropInit(e),t.isDisabled||t._raise("fileDragLeave",{sourceEvent:e})&&t.$dropZone.removeClass("file-highlighted")},_zoneDrop:function(e){var i,a=this,r=a.$element,n=e.originalEvent.dataTransfer,o=n.files,l=n.items,s=t.getDragDropFolders(l),d=function(){a.isAjaxUpload?a._change(e,o):(a.changeTriggered=!0,r.get(0).files=o,setTimeout(function(){a.changeTriggered=!1,r.trigger("change"+a.namespace)},a.processDelay)),a.$dropZone.removeClass("file-highlighted")};if(e.preventDefault(),!a.isDisabled&&!t.isEmpty(o)&&a._raise("fileDragDrop",{sourceEvent:e,files:o}))if(s>0){if(!a.isAjaxUpload)return void a._showFolderError(s);for(o=[],i=0;i<l.length;i++){var c=l[i].webkitGetAsEntry();c&&a._scanDroppedItems(c,o)}setTimeout(function(){d()},500)}else d()},_uploadClick:function(e){var i,a=this,r=a.$container.find(".fileinput-upload"),n=!r.hasClass("disabled")&&t.isEmpty(r.attr("disabled"));if(!e||!e.isDefaultPrevented()){if(!a.isAjaxUpload)return void(n&&"submit"!==r.attr("type")&&(i=r.closest("form"),i.length&&i.trigger("submit"),e.preventDefault()));e.preventDefault(),n&&a.upload()}},_submitForm:function(){var e=this;return e._isFileSelectionValid()&&!e._abort({})},_clearPreview:function(){var i=this,a=i.showUploadedThumbs?i.getFrames(":not(.file-preview-success)"):i.getFrames();a.each(function(){var a=e(this),r=a.attr("id"),n=i._getZoom(r);a.remove(),t.cleanZoomCache(n)}),i.getFrames().length&&i.showPreview||i._resetUpload(),i._validateDefaultPreview()},_initSortable:function(){var i,a=this,r=a.$preview,n="."+t.SORT_CSS,o=a.reversePreviewOrder;window.KvSortable&&0!==r.find(n).length&&(i={handle:".drag-handle-init",dataIdAttr:"data-preview-id",scroll:!1,draggable:n,onSort:function(i){var r=i.oldIndex,n=i.newIndex,l=0;a.initialPreview=t.moveArray(a.initialPreview,r,n,o),a.initialPreviewConfig=t.moveArray(a.initialPreviewConfig,r,n,o),a.previewCache.init(),a.getFrames(".file-preview-initial").each(function(){e(this).attr("data-fileindex",t.INIT_FLAG+l),l++}),a._raise("filesorted",{previewId:e(i.item).attr("id"),oldIndex:r,newIndex:n,stack:a.initialPreviewConfig})}},r.data("kvsortable")&&r.kvsortable("destroy"),e.extend(!0,i,a.fileActionSettings.dragSettings),r.kvsortable(i))},_setPreviewContent:function(e){var t=this;t.$preview.html(e),t._autoFitContent()},_initPreviewImageOrientations:function(){var t=this,i=0;t.autoOrientImageInitial&&t.getFrames(".file-preview-initial").each(function(){var a,r,n,o=e(this),l=t.initialPreviewConfig[i];l&&l.exif&&l.exif.Orientation&&(n=o.attr("id"),a=o.find(">.kv-file-content img"),r=t._getZoom(n," >.kv-file-content img"),t.setImageOrientation(a,r,l.exif.Orientation,o)),i++})},_initPreview:function(e){var i,a=this,r=a.initialCaption||"";return a.previewCache.count(!0)?(i=a.previewCache.out(),r=e&&a.initialCaption?a.initialCaption:i.caption,a._setPreviewContent(i.content),a._setInitThumbAttr(),a._setCaption(r),a._initSortable(),t.isEmpty(i.content)||a.$container.removeClass("file-input-new"),void a._initPreviewImageOrientations()):(a._clearPreview(),void(e?a._setCaption(r):a._initCaption()))},_getZoomButton:function(e){var t=this,i=t.previewZoomButtonIcons[e],a=t.previewZoomButtonClasses[e],r=' title="'+(t.previewZoomButtonTitles[e]||"")+'" ',n=r+("close"===e?' data-dismiss="modal" aria-hidden="true"':"");return"fullscreen"!==e&&"borderless"!==e&&"toggleheader"!==e||(n+=' data-toggle="button" aria-pressed="false" autocomplete="off"'),'<button type="button" class="'+a+" btn-"+e+'"'+n+">"+i+"</button>"},_getModalContent:function(){var e=this;return e._getLayoutTemplate("modal").setTokens({rtl:e.rtl?" kv-rtl":"",zoomFrameClass:e.frameClass,heading:e.msgZoomModalHeading,prev:e._getZoomButton("prev"),next:e._getZoomButton("next"),toggleheader:e._getZoomButton("toggleheader"),fullscreen:e._getZoomButton("fullscreen"),borderless:e._getZoomButton("borderless"),close:e._getZoomButton("close")})},_listenModalEvent:function(e){var i=this,a=i.$modal,r=function(e){return{sourceEvent:e,previewId:a.data("previewId"),modal:a}};a.on(e+".bs.modal",function(n){var o=a.find(".btn-fullscreen"),l=a.find(".btn-borderless");i._raise("filezoom"+e,r(n)),"shown"===e&&(l.removeClass("active").attr("aria-pressed","false"),o.removeClass("active").attr("aria-pressed","false"),a.hasClass("file-zoom-fullscreen")&&(i._maximizeZoomDialog(),t.checkFullScreen()?o.addClass("active").attr("aria-pressed","true"):l.addClass("active").attr("aria-pressed","true")))})},_initZoom:function(){var i,a=this,r=a._getLayoutTemplate("modalMain"),n="#"+t.MODAL_ID;a.showPreview&&(a.$modal=e(n),a.$modal&&a.$modal.length||(i=e(document.createElement("div")).html(r).insertAfter(a.$container),a.$modal=e(n).insertBefore(i),i.remove()),t.initModal(a.$modal),a.$modal.html(a._getModalContent()),e.each(t.MODAL_EVENTS,function(e,t){a._listenModalEvent(t)}))},_initZoomButtons:function(){var t,i,a=this,r=a.$modal.data("previewId")||"",n=a.getFrames().toArray(),o=n.length,l=a.$modal.find(".btn-prev"),s=a.$modal.find(".btn-next");return n.length<2?(l.hide(),void s.hide()):(l.show(),s.show(),void(o&&(t=e(n[0]),i=e(n[o-1]),l.removeAttr("disabled"),s.removeAttr("disabled"),t.length&&t.attr("id")===r&&l.attr("disabled",!0),i.length&&i.attr("id")===r&&s.attr("disabled",!0))))},_maximizeZoomDialog:function(){var t=this,i=t.$modal,a=i.find(".modal-header:visible"),r=i.find(".modal-footer:visible"),n=i.find(".modal-body"),o=e(window).height(),l=0;i.addClass("file-zoom-fullscreen"),a&&a.length&&(o-=a.outerHeight(!0)),r&&r.length&&(o-=r.outerHeight(!0)),n&&n.length&&(l=n.outerHeight(!0)-n.height(),o-=l),i.find(".kv-zoom-body").height(o)},_resizeZoomDialog:function(e){var i=this,a=i.$modal,r=a.find(".btn-fullscreen"),n=a.find(".btn-borderless");if(a.hasClass("file-zoom-fullscreen"))t.toggleFullScreen(!1),e?r.hasClass("active")||(a.removeClass("file-zoom-fullscreen"),i._resizeZoomDialog(!0),n.hasClass("active")&&n.removeClass("active").attr("aria-pressed","false")):r.hasClass("active")?r.removeClass("active").attr("aria-pressed","false"):(a.removeClass("file-zoom-fullscreen"),i.$modal.find(".kv-zoom-body").css("height",i.zoomModalHeight));else{if(!e)return void i._maximizeZoomDialog();t.toggleFullScreen(!0)}a.focus()},_setZoomContent:function(i,a){var r,n,o,l,s,d,c,u,p,f,g=this,m=i.attr("id"),v=g._getZoom(m),h=g.$modal,w=h.find(".btn-fullscreen"),b=h.find(".btn-borderless"),_=h.find(".btn-toggleheader");n=v.attr("data-template")||"generic",r=v.find(".kv-file-content"),o=r.length?r.html():"",p=i.data("caption")||"",f=i.data("size")||"",l=p+" "+f,h.find(".kv-zoom-title").attr("title",e("<div/>").html(l).text()).html(l),s=h.find(".kv-zoom-body"),h.removeClass("kv-single-content"),a?(u=s.addClass("file-thumb-loading").clone().insertAfter(s),s.html(o).hide(),u.fadeOut("fast",function(){s.fadeIn("fast",function(){s.removeClass("file-thumb-loading")}),u.remove()})):s.html(o),c=g.previewZoomSettings[n],c&&(d=s.find(".kv-preview-data"),t.addCss(d,"file-zoom-detail"),e.each(c,function(e,t){d.css(e,t),(d.attr("width")&&"width"===e||d.attr("height")&&"height"===e)&&d.removeAttr(e)})),h.data("previewId",m),g._handler(h.find(".btn-prev"),"click",function(){g._zoomSlideShow("prev",m)}),g._handler(h.find(".btn-next"),"click",function(){g._zoomSlideShow("next",m)}),g._handler(w,"click",function(){g._resizeZoomDialog(!0)}),g._handler(b,"click",function(){g._resizeZoomDialog(!1)}),g._handler(_,"click",function(){var e,t=h.find(".modal-header"),i=h.find(".modal-body .floating-buttons"),a=t.find(".kv-zoom-actions"),r=function(e){var i=g.$modal.find(".kv-zoom-body"),a=g.zoomModalHeight;h.hasClass("file-zoom-fullscreen")&&(a=i.outerHeight(!0),e||(a-=t.outerHeight(!0))),i.css("height",e?a+e:a)};t.is(":visible")?(e=t.outerHeight(!0),t.slideUp("slow",function(){a.find(".btn").appendTo(i),r(e)})):(i.find(".btn").appendTo(a),t.slideDown("slow",function(){r()})),h.focus()}),g._handler(h,"keydown",function(t){var i=t.which||t.keyCode,a=e(this).find(".btn-prev"),r=e(this).find(".btn-next"),n=e(this).data("previewId"),o=g.rtl?39:37,l=g.rtl?37:39;i===o&&a.length&&!a.attr("disabled")&&g._zoomSlideShow("prev",n),i===l&&r.length&&!r.attr("disabled")&&g._zoomSlideShow("next",n)})},_zoomPreview:function(e){var i,a=this,r=a.$modal;if(!e.length)throw"Cannot zoom to detailed preview!";t.initModal(r),r.html(a._getModalContent()),i=e.closest(t.FRAMES),a._setZoomContent(i),r.modal("show"),a._initZoomButtons()},_zoomSlideShow:function(t,i){var a,r,n,o=this,l=o.$modal.find(".kv-zoom-actions .btn-"+t),s=o.getFrames().toArray(),d=s.length;if(!l.attr("disabled")){for(r=0;d>r;r++)if(e(s[r]).attr("id")===i){n="prev"===t?r-1:r+1;break}0>n||n>=d||!s[n]||(a=e(s[n]),a.length&&o._setZoomContent(a,!0),o._initZoomButtons(),o._raise("filezoom"+t,{previewId:i,modal:o.$modal}))}},_initZoomButton:function(){var t=this;t.$preview.find(".kv-file-zoom").each(function(){var i=e(this);t._handler(i,"click",function(){t._zoomPreview(i)})})},_inputFileCount:function(){return this.$element.get(0).files.length},_refreshPreview:function(){var t,i=this;(i._inputFileCount()||i.isAjaxUpload)&&i.showPreview&&i.isPreviewable&&(i.isAjaxUpload&&i.fileManager.count()>0?(t=e.extend(!0,{},i.fileManager.stack),i.fileManager.clear(),i._clearFileInput()):t=i.$element.get(0).files,t&&t.length&&(i.readFiles(t),i._setFileDropZoneTitle()))},_clearObjects:function(t){t.find("video audio").each(function(){this.pause(),e(this).remove()}),t.find("img object div").each(function(){e(this).remove()})},_clearFileInput:function(){var t,i,a,r=this,n=r.$element;r._inputFileCount()&&(t=n.closest("form"),i=e(document.createElement("form")),a=e(document.createElement("div")),n.before(a),t.length?t.after(i):a.after(i),i.append(n).trigger("reset"),a.before(n).remove(),i.remove())},_resetUpload:function(){var e=this;e.uploadCache={content:[],config:[],tags:[],append:!0},e.$btnUpload.removeAttr("disabled"),e._setProgress(0),e.$progress.hide(),e._resetErrors(!1),e._initAjax(),e.fileManager.clearImages(),e._resetCanvas(),e.cacheInitialPreview={},e.overwriteInitial&&(e.initialPreview=[],e.initialPreviewConfig=[],e.initialPreviewThumbTags=[],e.previewCache.data={content:[],config:[],tags:[]})},_resetCanvas:function(){var e=this;e.canvas&&e.imageCanvasContext&&e.imageCanvasContext.clearRect(0,0,e.canvas.width,e.canvas.height)},_hasInitialPreview:function(){var e=this;return!e.overwriteInitial&&e.previewCache.count(!0)},_resetPreview:function(){var e,t,i=this;i.previewCache.count(!0)?(e=i.previewCache.out(),i._setPreviewContent(e.content),i._setInitThumbAttr(),t=i.initialCaption?i.initialCaption:e.caption,i._setCaption(t)):(i._clearPreview(),i._initCaption()),i.showPreview&&(i._initZoom(),i._initSortable())},_clearDefaultPreview:function(){var e=this;e.$preview.find(".file-default-preview").remove()},_validateDefaultPreview:function(){var e=this;e.showPreview&&!t.isEmpty(e.defaultPreviewContent)&&(e._setPreviewContent('<div class="file-default-preview">'+e.defaultPreviewContent+"</div>"),e.$container.removeClass("file-input-new"),e._initClickable())},_resetPreviewThumbs:function(e){var t,i=this;return e?(i._clearPreview(),void i.clearFileStack()):void(i._hasInitialPreview()?(t=i.previewCache.out(),i._setPreviewContent(t.content),i._setInitThumbAttr(),i._setCaption(t.caption),i._initPreviewActions()):i._clearPreview())},_getLayoutTemplate:function(e){var i=this,a=i.layoutTemplates[e];return t.isEmpty(i.customLayoutTags)?a:t.replaceTags(a,i.customLayoutTags)},_getPreviewTemplate:function(e){var i=this,a=i.previewTemplates[e];return t.isEmpty(i.customPreviewTags)?a:t.replaceTags(a,i.customPreviewTags)},_getOutData:function(e,t,i,a){var r=this;return t=t||{},i=i||{},a=a||r.fileManager.list(),{formdata:e,files:a,filenames:r.filenames,filescount:r.getFilesCount(),extra:r._getExtraData(),response:i,reader:r.reader,jqXHR:t}},_getMsgSelected:function(e){var t=this,i=1===e?t.fileSingle:t.filePlural;return e>0?t.msgSelected.replace("{n}",e).replace("{files}",i):t.msgNoFilesSelected},_getFrame:function(e,i){var a=this,r=t.getFrameElement(a.$preview,e,i);return r.length||a._log(t.logMessages.invalidThumb,{id:e}),r},_getZoom:function(e,i){var a=this,r=t.getZoomElement(a.$preview,e,i);return r.length||a._log(t.logMessages.invalidThumb,{id:e}),r},_getThumbs:function(e){return e=e||"",this.getFrames(":not(.file-preview-initial)"+e)},_getThumbId:function(e){var t=this;return t.previewInitId+"-"+e},_getExtraData:function(e,t){var i=this,a=i.uploadExtraData;return"function"==typeof i.uploadExtraData&&(a=i.uploadExtraData(e,t)),a},_initXhr:function(e,i,a){var r=this,n=r.fileManager,o=function(e){var o=0,l=e.total,s=e.loaded||e.position,d=n.getUploadStats(i,s,l);e.lengthComputable&&!r.enableResumableUpload&&(o=t.round(s/l*100)),i?r._setFileUploadStats(i,o,a,d):r._setProgress(o,null,null,r._getStats(d)),r._raise("fileajaxprogress",[d])};return e.upload&&(r.progressDelay&&(o=t.debounce(o,r.progressDelay)),e.upload.addEventListener("progress",o,!1)),e},_initAjaxSettings:function(){var t=this;t._ajaxSettings=e.extend(!0,{},t.ajaxSettings),t._ajaxDeleteSettings=e.extend(!0,{},t.ajaxDeleteSettings)},_mergeAjaxCallback:function(e,t,i){var a,r=this,n=r._ajaxSettings,o=r.mergeAjaxCallbacks;"delete"===i&&(n=r._ajaxDeleteSettings,o=r.mergeAjaxDeleteCallbacks),a=n[e],o&&"function"==typeof a?"before"===o?n[e]=function(){a.apply(this,arguments),t.apply(this,arguments)}:n[e]=function(){t.apply(this,arguments),a.apply(this,arguments)}:n[e]=t},_ajaxSubmit:function(t,i,a,r,n,o,l,s){var d,c,u,p,f=this;f._raise("filepreajax",[n,o,l])&&(n.append("initialPreview",JSON.stringify(f.initialPreview)),n.append("initialPreviewConfig",JSON.stringify(f.initialPreviewConfig)),n.append("initialPreviewThumbTags",JSON.stringify(f.initialPreviewThumbTags)),f._initAjaxSettings(),f._mergeAjaxCallback("beforeSend",t),f._mergeAjaxCallback("success",i),f._mergeAjaxCallback("complete",a),f._mergeAjaxCallback("error",r),s=s||f.uploadUrlThumb||f.uploadUrl,"function"==typeof s&&(s=s()),u=f._getExtraData(o,l)||{},"object"==typeof u&&e.each(u,function(e,t){n.append(e,t)}),c={xhr:function(){var t=e.ajaxSettings.xhr();return f._initXhr(t,o,f.fileManager.count())},url:f._encodeURI(s),type:"POST",dataType:"json",data:n,cache:!1,processData:!1,contentType:!1},d=e.extend(!0,{},c,f._ajaxSettings),f.ajaxQueue.push(d),p=function(){var t,i;f.ajaxCurrentThreads<f.maxAjaxThreads&&(t=f.ajaxQueue.shift(),"undefined"!=typeof t&&(f.ajaxCurrentThreads++,i=e.ajax(t).done(function(){clearInterval(f.ajaxQueueIntervalId),f.ajaxCurrentThreads--}),f.ajaxRequests.push(i)))},f.ajaxQueueIntervalId=setInterval(p,f.queueDelay))},_mergeArray:function(e,i){var a=this,r=t.cleanArray(a[e]),n=t.cleanArray(i);a[e]=r.concat(n)},_initUploadSuccess:function(i,a,r){var n,o,l,s,d,c,u,p,f,g=this;g.showPreview&&"object"==typeof i&&!e.isEmptyObject(i)&&void 0!==i.initialPreview&&i.initialPreview.length>0&&(g.hasInitData=!0,c=i.initialPreview||[],u=i.initialPreviewConfig||[],p=i.initialPreviewThumbTags||[],n=void 0===i.append||i.append,c.length>0&&!t.isArray(c)&&(c=c.split(g.initialPreviewDelimiter)),c.length&&(g._mergeArray("initialPreview",c),g._mergeArray("initialPreviewConfig",u),g._mergeArray("initialPreviewThumbTags",p)),void 0!==a?r?(f=a.attr("data-fileindex"),g.uploadCache.content[f]=c[0],g.uploadCache.config[f]=u[0]||[],g.uploadCache.tags[f]=p[0]||[],g.uploadCache.append=n):(l=g.previewCache.add(c[0],u[0],p[0],n),o=g.previewCache.get(l,!1),s=e(document.createElement("div")).html(o).hide().insertAfter(a),d=s.find(".kv-zoom-cache"),d&&d.length&&d.insertAfter(a),a.fadeOut("slow",function(){var e=s.find(".file-preview-frame");e&&e.length&&e.insertBefore(a).fadeIn("slow").css("display:inline-block"),g._initPreviewActions(),g._clearFileInput(),t.cleanZoomCache(g._getZoom(a.attr("id"))),a.remove(),s.remove(),g._initSortable()})):(g.previewCache.set(c,u,p,n),g._initPreview(),g._initPreviewActions()))},_initSuccessThumbs:function(){var i=this;i.showPreview&&i._getThumbs(t.FRAMES+".file-preview-success").each(function(){var a=e(this),r=a.find(".kv-file-remove");r.removeAttr("disabled"),i._handler(r,"click",function(){var e=a.attr("id"),r=i._raise("filesuccessremove",[e,a.attr("data-fileindex")]);t.cleanMemory(a),r!==!1&&a.fadeOut("slow",function(){t.cleanZoomCache(i._getZoom(e)),a.remove(),i.getFrames().length||i.reset()})})})},_updateInitialPreview:function(){var e,i,a=this,r=a.uploadCache,n=0,o=a.cacheInitialPreview;
        if(o&&o.content&&(n=o.content.length),a.showPreview){if(a.previewCache.set(r.content,r.config,r.tags,r.append),n){for(e=0;e<r.content.length;e++)i=e+n,o.content[i]=r.content[e],o.config.length&&(o.config[i]=r.config[e]),o.tags.length&&(o.tags[i]=r.tags[e]);a.initialPreview=t.cleanArray(o.content),a.initialPreviewConfig=t.cleanArray(o.config),a.initialPreviewThumbTags=t.cleanArray(o.tags)}else a.initialPreview=r.content,a.initialPreviewConfig=r.config,a.initialPreviewThumbTags=r.tags;a.cacheInitialPreview={},a.hasInitData&&(a._initPreview(),a._initPreviewActions())}},_uploadSingle:function(i,a,r){var n,o,l,s,d,c,u,p,f,g,m,v,h,w=this,b=w.fileManager,_=b.count(),C=new FormData,y=w._getThumbId(a),x=_>0||!e.isEmptyObject(w.uploadExtraData),T=w.ajaxOperations.uploadThumb,I=b.getFile(a),P={id:y,index:i,fileId:a},F=w.fileManager.getFileName(a,!0);w.enableResumableUpload||(w.showPreview&&(o=w.fileManager.getThumb(a),u=o.find(".file-thumb-progress"),s=o.find(".kv-file-upload"),d=o.find(".kv-file-remove"),u.show()),0===_||!x||w.showPreview&&s&&s.hasClass("disabled")||w._abort(P)||(h=function(){c?b.errors.push(a):b.removeFile(a),b.setProcessed(a),b.isProcessed()&&(w.fileBatchCompleted=!0)},l=function(){var e;w.fileBatchCompleted&&setTimeout(function(){var i=0===b.count(),a=b.errors.length;w._updateInitialPreview(),w.unlock(i),i&&w._clearFileInput(),e=w.$preview.find(".file-preview-initial"),w.uploadAsync&&e.length&&(t.addCss(e,t.SORT_CSS),w._initSortable()),w._raise("filebatchuploadcomplete",[b.stack,w._getExtraData()]),w.retryErrorUploads&&0!==a||b.clear(),w._setProgress(101),w.ajaxAborted=!1},w.processDelay)},p=function(l){n=w._getOutData(C,l),b.initStats(a),w.fileBatchCompleted=!1,r||(w.ajaxAborted=!1),w.showPreview&&(o.hasClass("file-preview-success")||(w._setThumbStatus(o,"Loading"),t.addCss(o,"file-uploading")),s.attr("disabled",!0),d.attr("disabled",!0)),r||w.lock(),-1!==b.errors.indexOf(a)&&delete b.errors[a],w._raise("filepreupload",[n,y,i]),e.extend(!0,P,n),w._abort(P)&&(l.abort(),r||(w._setThumbStatus(o,"New"),o.removeClass("file-uploading"),s.removeAttr("disabled"),d.removeAttr("disabled"),w.unlock()),w._setProgressCancelled())},g=function(l,d,p){var g=w.showPreview&&o.attr("id")?o.attr("id"):y;n=w._getOutData(C,p,l),e.extend(!0,P,n),setTimeout(function(){t.isEmpty(l)||t.isEmpty(l.error)?(w.showPreview&&(w._setThumbStatus(o,"Success"),s.hide(),w._initUploadSuccess(l,o,r),w._setProgress(101,u)),w._raise("fileuploaded",[n,g,i]),r?h():w.fileManager.remove(o)):(c=!0,f=w._parseError(T,p,w.msgUploadError,w.fileManager.getFileName(a)),w._showFileError(f,P),w._setPreviewError(o,!0),w.retryErrorUploads||s.hide(),r&&h(),w._setProgress(101,w._getFrame(g).find(".file-thumb-progress"),w.msgUploadError))},w.processDelay)},m=function(){setTimeout(function(){w.showPreview&&(s.removeAttr("disabled"),d.removeAttr("disabled"),o.removeClass("file-uploading")),r?l():(w.unlock(!1),w._clearFileInput()),w._initSuccessThumbs()},w.processDelay)},v=function(t,i,n){f=w._parseError(T,t,n,w.fileManager.getFileName(a)),c=!0,setTimeout(function(){r&&h(),w.fileManager.setProgress(a,100),w._setPreviewError(o,!0),w.retryErrorUploads||s.hide(),e.extend(!0,P,w._getOutData(C,t)),w._setProgress(101,u,w.msgAjaxProgressError.replace("{operation}",T)),w._setProgress(101,o.find(".file-thumb-progress"),w.msgUploadError),w._showFileError(f,P)},w.processDelay)},C.append(w.uploadFileAttr,I.file,F),w._setUploadData(C,{fileId:a}),w._ajaxSubmit(p,g,m,v,C,a,i)))},_uploadBatch:function(){var i,a,r,n,o,l,s=this,d=s.fileManager,c=d.total(),u={},p=c>0||!e.isEmptyObject(s.uploadExtraData),f=new FormData,g=s.ajaxOperations.uploadBatch;if(0!==c&&p&&!s._abort(u)){l=function(){s.fileManager.clear(),s._clearFileInput()},i=function(i){s.lock(),d.initStats();var a=s._getOutData(f,i);s.ajaxAborted=!1,s.showPreview&&s._getThumbs().each(function(){var i=e(this),a=i.find(".kv-file-upload"),r=i.find(".kv-file-remove");i.hasClass("file-preview-success")||(s._setThumbStatus(i,"Loading"),t.addCss(i,"file-uploading")),a.attr("disabled",!0),r.attr("disabled",!0)}),s._raise("filebatchpreupload",[a]),s._abort(a)&&(i.abort(),s._getThumbs().each(function(){var t=e(this),i=t.find(".kv-file-upload"),a=t.find(".kv-file-remove");t.hasClass("file-preview-loading")&&(s._setThumbStatus(t,"New"),t.removeClass("file-uploading")),i.removeAttr("disabled"),a.removeAttr("disabled")}),s._setProgressCancelled())},a=function(i,a,r){var n=s._getOutData(f,r,i),d=0,c=s._getThumbs(":not(.file-preview-success)"),u=t.isEmpty(i)||t.isEmpty(i.errorkeys)?[]:i.errorkeys;t.isEmpty(i)||t.isEmpty(i.error)?(s._raise("filebatchuploadsuccess",[n]),l(),s.showPreview?(c.each(function(){var t=e(this);s._setThumbStatus(t,"Success"),t.removeClass("file-uploading"),t.find(".kv-file-upload").hide().removeAttr("disabled")}),s._initUploadSuccess(i)):s.reset(),s._setProgress(101)):(s.showPreview&&(c.each(function(){var t=e(this);t.removeClass("file-uploading"),t.find(".kv-file-upload").removeAttr("disabled"),t.find(".kv-file-remove").removeAttr("disabled"),0===u.length||-1!==e.inArray(d,u)?(s._setPreviewError(t,!0),s.retryErrorUploads||(t.find(".kv-file-upload").hide(),s.fileManager.remove(t))):(t.find(".kv-file-upload").hide(),s._setThumbStatus(t,"Success"),s.fileManager.remove(t)),t.hasClass("file-preview-error")&&!s.retryErrorUploads||d++}),s._initUploadSuccess(i)),o=s._parseError(g,r,s.msgUploadError),s._showFileError(o,n,"filebatchuploaderror"),s._setProgress(101,s.$progress,s.msgUploadError))},n=function(){s.unlock(),s._initSuccessThumbs(),s._clearFileInput(),s._raise("filebatchuploadcomplete",[s.fileManager.stack,s._getExtraData()])},r=function(t,i,a){var r=s._getOutData(f,t);o=s._parseError(g,t,a),s._showFileError(o,r,"filebatchuploaderror"),s.uploadFileCount=c-1,s.showPreview&&(s._getThumbs().each(function(){var t=e(this);t.removeClass("file-uploading"),s.fileManager.getFile(t.attr("data-fileid"))&&s._setPreviewError(t)}),s._getThumbs().removeClass("file-uploading"),s._getThumbs(" .kv-file-upload").removeAttr("disabled"),s._getThumbs(" .kv-file-delete").removeAttr("disabled"),s._setProgress(101,s.$progress,s.msgAjaxProgressError.replace("{operation}",g)))};var m=0;e.each(s.fileManager.stack,function(e,i){t.isEmpty(i.file)||f.append(s.uploadFileAttr,i.file,i.nameFmt||"untitled_"+m),m++}),s._ajaxSubmit(i,a,n,r,f)}},_uploadExtraOnly:function(){var e,i,a,r,n,o=this,l={},s=new FormData,d=o.ajaxOperations.uploadExtra;o._abort(l)||(e=function(e){o.lock();var t=o._getOutData(s,e);o._raise("filebatchpreupload",[t]),o._setProgress(50),l.data=t,l.xhr=e,o._abort(l)&&(e.abort(),o._setProgressCancelled())},i=function(e,i,a){var r=o._getOutData(s,a,e);t.isEmpty(e)||t.isEmpty(e.error)?(o._raise("filebatchuploadsuccess",[r]),o._clearFileInput(),o._initUploadSuccess(e),o._setProgress(101)):(n=o._parseError(d,a,o.msgUploadError),o._showFileError(n,r,"filebatchuploaderror"))},a=function(){o.unlock(),o._clearFileInput(),o._raise("filebatchuploadcomplete",[o.fileManager.stack,o._getExtraData()])},r=function(e,t,i){var a=o._getOutData(s,e);n=o._parseError(d,e,i),l.data=a,o._showFileError(n,a,"filebatchuploaderror"),o._setProgress(101,o.$progress,o.msgAjaxProgressError.replace("{operation}",d))},o._ajaxSubmit(e,i,a,r,s))},_deleteFileIndex:function(i){var a=this,r=i.attr("data-fileindex"),n=a.reversePreviewOrder;r.substring(0,5)===t.INIT_FLAG&&(r=parseInt(r.replace(t.INIT_FLAG,"")),a.initialPreview=t.spliceArray(a.initialPreview,r,n),a.initialPreviewConfig=t.spliceArray(a.initialPreviewConfig,r,n),a.initialPreviewThumbTags=t.spliceArray(a.initialPreviewThumbTags,r,n),a.getFrames().each(function(){var i=e(this),a=i.attr("data-fileindex");a.substring(0,5)===t.INIT_FLAG&&(a=parseInt(a.replace(t.INIT_FLAG,"")),a>r&&(a--,i.attr("data-fileindex",t.INIT_FLAG+a)))}),(a.uploadAsync||a.enableResumableUpload)&&(a.cacheInitialPreview=a.getPreview()))},_initFileActions:function(){var i=this;i.showPreview&&(i._initZoomButton(),i.getFrames(" .kv-file-remove").each(function(){var a,r,n,o,l=e(this),s=l.closest(t.FRAMES),d=s.attr("id"),c=s.attr("data-fileindex");i._handler(l,"click",function(){return o=i._raise("filepreremove",[d,c]),o!==!1&&i._validateMinCount()?(a=s.hasClass("file-preview-error"),t.cleanMemory(s),void s.fadeOut("slow",function(){t.cleanZoomCache(i._getZoom(d)),i.fileManager.remove(s),i._clearObjects(s),s.remove(),d&&a&&i.$errorContainer.find('li[data-thumb-id="'+d+'"]').fadeOut("fast",function(){e(this).remove(),i._errorsExist()||i._resetErrors()}),i._clearFileInput();var o,l=i.previewCache.count(!0),u=i.fileManager.count(),p=i.showPreview&&i.getFrames().length;0!==u||0!==l||p?(r=l+u,r>1?n=i._getMsgSelected(r):(o=i.fileManager.getFirstFile(),n=o?o.nameFmt:"_"),i._setCaption(n)):i.reset(),i._raise("fileremoved",[d,c])})):!1})}),i.getFrames(" .kv-file-upload").each(function(){var a=e(this);i._handler(a,"click",function(){var e=a.closest(t.FRAMES),r=e.attr("data-fileid");i.$progress.hide(),e.hasClass("file-preview-error")&&!i.retryErrorUploads||i._uploadSingle(i.fileManager.getIndex(r),r,!1)})}))},_initPreviewActions:function(){var i=this,a=i.$preview,r=i.deleteExtraData||{},n=t.FRAMES+" .kv-file-remove",o=i.fileActionSettings,l=o.removeClass,s=o.removeErrorClass,d=function(){var e=i.isAjaxUpload?i.previewCache.count(!0):i._inputFileCount();i.getFrames().length||e||(i._setCaption(""),i.reset(),i.initialCaption="")};i._initZoomButton(),a.find(n).each(function(){var a,n,o,c,u=e(this),p=u.data("url")||i.deleteUrl,f=u.data("key"),g=i.ajaxOperations.deleteThumb;if(!t.isEmpty(p)&&void 0!==f){"function"==typeof p&&(p=p());var m,v,h,w,b,_=u.closest(t.FRAMES),C=i.previewCache.data,y=_.attr("data-fileindex");y=parseInt(y.replace(t.INIT_FLAG,"")),h=t.isEmpty(C.config)&&t.isEmpty(C.config[y])?null:C.config[y],b=t.isEmpty(h)||t.isEmpty(h.extra)?r:h.extra,w=h.filename||h.caption||"","function"==typeof b&&(b=b()),v={id:u.attr("id"),key:f,extra:b},n=function(e){i.ajaxAborted=!1,i._raise("filepredelete",[f,e,b]),i._abort()?e.abort():(u.removeClass(s),t.addCss(_,"file-uploading"),t.addCss(u,"disabled "+l))},o=function(e,r,n){var o,c;return t.isEmpty(e)||t.isEmpty(e.error)?(_.removeClass("file-uploading").addClass("file-deleted"),void _.fadeOut("slow",function(){y=parseInt(_.attr("data-fileindex").replace(t.INIT_FLAG,"")),i.previewCache.unset(y),i._deleteFileIndex(_),o=i.previewCache.count(!0),c=o>0?i._getMsgSelected(o):"",i._setCaption(c),i._raise("filedeleted",[f,n,b]),t.cleanZoomCache(i._getZoom(_.attr("id"))),i._clearObjects(_),_.remove(),d()})):(v.jqXHR=n,v.response=e,a=i._parseError(g,n,i.msgDeleteError,w),i._showFileError(a,v,"filedeleteerror"),_.removeClass("file-uploading"),u.removeClass("disabled "+l).addClass(s),void d())},c=function(e,t,a){var r=i._parseError(g,e,a,w);v.jqXHR=e,v.response={},i._showFileError(r,v,"filedeleteerror"),_.removeClass("file-uploading"),u.removeClass("disabled "+l).addClass(s),d()},i._initAjaxSettings(),i._mergeAjaxCallback("beforeSend",n,"delete"),i._mergeAjaxCallback("success",o,"delete"),i._mergeAjaxCallback("error",c,"delete"),m=e.extend(!0,{},{url:i._encodeURI(p),type:"POST",dataType:"json",data:e.extend(!0,{},{key:f},b)},i._ajaxDeleteSettings),i._handler(u,"click",function(){return i._validateMinCount()?(i.ajaxAborted=!1,i._raise("filebeforedelete",[f,b]),void(i.ajaxAborted instanceof Promise?i.ajaxAborted.then(function(t){t||e.ajax(m)}):i.ajaxAborted||e.ajax(m))):!1})}})},_hideFileIcon:function(){var e=this;e.overwriteInitial&&e.$captionContainer.removeClass("icon-visible")},_showFileIcon:function(){var e=this;t.addCss(e.$captionContainer,"icon-visible")},_getSize:function(t,i){var a,r,n=this,o=parseFloat(t),l=n.fileSizeGetter;return e.isNumeric(t)&&e.isNumeric(o)?("function"==typeof l?r=l(o):0===o?r="0.00 B":(a=Math.floor(Math.log(o)/Math.log(1024)),i||(i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"]),r=1*(o/Math.pow(1024,a)).toFixed(2)+" "+i[a]),n._getLayoutTemplate("size").replace("{sizeText}",r)):""},_getFileType:function(e){var t=this;return t.mimeTypeAliases[e]||e},_generatePreviewTemplate:function(i,a,r,n,o,l,s,d,c,u,p,f,g,m){var v,h,w,b=this,_=b.slug(r),C="",y="",x=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,T=_,I=_,P="type-default",F=u||b._renderFileFooter(i,_,d,"auto",s),E=b.preferIconicPreview,S=b.preferIconicZoomPreview,k=E?"other":i;return h=400>x?b.previewSettingsSmall[k]||b.defaults.previewSettingsSmall[k]:b.previewSettings[k]||b.defaults.previewSettings[k],h&&e.each(h,function(e,t){y+=e+":"+t+";"}),w=function(a,s,d,u){var m=d?"zoom-"+o:o,v=b._getPreviewTemplate(a),h=(c||"")+" "+u;return b.frameClass&&(h=b.frameClass+" "+h),d&&(h=h.replace(" "+t.SORT_CSS,"")),v=b._parseFilePreviewIcon(v,r),"text"===a&&(s=t.htmlEncode(s)),"object"!==i||n||e.each(b.defaults.fileTypeSettings,function(e,t){"object"!==e&&"other"!==e&&t(r,n)&&(P="type-"+e)}),t.isEmpty(g)||(void 0!==g.title&&null!==g.title&&(T=g.title),void 0!==g.alt&&null!==g.alt&&(T=g.alt)),v.setTokens({previewId:m,caption:_,title:T,alt:I,frameClass:h,type:b._getFileType(n),fileindex:p,fileid:l||"",typeCss:P,footer:F,data:s,template:f||i,style:y?'style="'+y+'"':""})},p=p||o.slice(o.lastIndexOf("-")+1),b.fileActionSettings.showZoom&&(C=w(S?"other":i,m?m:a,!0,"kv-zoom-thumb")),C="\n"+b._getLayoutTemplate("zoomCache").replace("{zoomContent}",C),"function"==typeof b.sanitizeZoomCache&&(C=b.sanitizeZoomCache(C)),v=w(E?"other":i,a,!1,"kv-preview-thumb"),v+C},_addToPreview:function(e,t){var i=this;return i.reversePreviewOrder?e.prepend(t):e.append(t)},_previewDefault:function(e,i){var a=this,r=a.$preview;if(a.showPreview){var n,o=t.getFileName(e),l=e?e.type:"",s=e.size||0,d=a._getFileName(e,""),c=i===!0&&!a.isAjaxUpload,u=t.createObjectURL(e),p=a.fileManager.getId(e),f=a._getThumbId(p);a._clearDefaultPreview(),n=a._generatePreviewTemplate("other",u,o,l,f,p,c,s),a._addToPreview(r,n),a._setThumbAttr(f,d,s),i===!0&&a.isAjaxUpload&&a._setThumbStatus(a._getFrame(f),"Error")}},_previewFile:function(e,i,a,r,n){if(this.showPreview){var o,l=this,s=t.getFileName(i),d=n.type,c=n.name,u=l._parseFileType(d,s),p=l.$preview,f=i.size||0,g="text"===u||"html"===u||"image"===u?a.target.result:r,m=l.fileManager.getId(i),v=l._getThumbId(m);"html"===u&&l.purifyHtml&&window.DOMPurify&&(g=window.DOMPurify.sanitize(g)),o=l._generatePreviewTemplate(u,g,s,d,v,m,!1,f),l._clearDefaultPreview(),l._addToPreview(p,o);var h=l._getFrame(v);l._validateImageOrientation(h.find("img"),i,v,m,c,d,f,g),l._setThumbAttr(v,c,f),l._initSortable()}},_setThumbAttr:function(e,t,i){var a=this,r=a._getFrame(e);r.length&&(i=i&&i>0?a._getSize(i):"",r.data({caption:t,size:i}))},_setInitThumbAttr:function(){var e,i,a,r,n=this,o=n.previewCache.data,l=n.previewCache.count(!0);if(0!==l)for(var s=0;l>s;s++)e=o.config[s],r=n.previewInitId+"-"+t.INIT_FLAG+s,i=t.ifSet("caption",e,t.ifSet("filename",e)),a=t.ifSet("size",e),n._setThumbAttr(r,i,a)},_slugDefault:function(e){return t.isEmpty(e)?"":String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,"_")},_updateFileDetails:function(e){var i,a,r,n,o,l=this,s=l.$element,d=t.isIE(9)&&t.findFileName(s.val())||s[0].files[0]&&s[0].files[0].name;!d&&l.fileManager.count()>0?(o=l.fileManager.getFirstFile(),i=o.nameFmt):i=d?l.slug(d):"_",a=l.isAjaxUpload?l.fileManager.count():e,n=l.previewCache.count(!0)+a,r=1===a?i:l._getMsgSelected(n),l.isError?(l.$previewContainer.removeClass("file-thumb-loading"),l.$previewStatus.html(""),l.$captionContainer.removeClass("icon-visible")):l._showFileIcon(),l._setCaption(r,l.isError),l.$container.removeClass("file-input-new file-input-ajax-new"),1===arguments.length&&l._raise("fileselect",[e,i]),l.previewCache.count(!0)&&l._initPreviewActions()},_setThumbStatus:function(e,t){var i=this;if(i.showPreview){var a="indicator"+t,r=a+"Title",n="file-preview-"+t.toLowerCase(),o=e.find(".file-upload-indicator"),l=i.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-paused file-preview-loading"),"Success"===t&&e.find(".file-drag-handle").remove(),o.html(l[a]),o.attr("title",l[r]),e.addClass(n),"Error"!==t||i.retryErrorUploads||e.find(".kv-file-upload").attr("disabled",!0)}},_setProgressCancelled:function(){var e=this;e._setProgress(101,e.$progress,e.msgCancelled)},_setProgress:function(e,i,a,r){var n=this;if(i=i||n.$progress,i.length){var o,l=Math.min(e,100),s=n.progressUploadThreshold,d=100>=e?n.progressTemplate:n.progressCompleteTemplate,c=100>l?n.progressTemplate:a?n.paused?n.progressPauseTemplate:n.progressErrorTemplate:d;e>=100&&(r=""),t.isEmpty(c)||(o=s&&l>s&&100>=e?c.setTokens({percent:s,status:n.msgUploadThreshold}):c.setTokens({percent:l,status:e>100?n.msgUploadEnd:l+"%"}),r=r||"",o=o.setTokens({stats:r}),i.html(o),a&&i.find('[role="progressbar"]').html(a))}},_setFileDropZoneTitle:function(){var e,i=this,a=i.$container.find(".file-drop-zone"),r=i.dropZoneTitle;i.isClickable&&(e=t.isEmpty(i.$element.attr("multiple"))?i.fileSingle:i.filePlural,r+=i.dropZoneClickTitle.replace("{files}",e)),a.find("."+i.dropZoneTitleClass).remove(),!i.showPreview||0===a.length||i.fileManager.count()>0||!i.dropZoneEnabled||!i.isAjaxUpload&&i.$element.files||(0===a.find(t.FRAMES).length&&t.isEmpty(i.defaultPreviewContent)&&a.prepend('<div class="'+i.dropZoneTitleClass+'">'+r+"</div>"),i.$container.removeClass("file-input-new"),t.addCss(i.$container,"file-input-ajax-new"))},_getStats:function(e){var i,a,r=this;return r.showUploadStats&&e&&e.bitrate?(a=r._getLayoutTemplate("stats"),i=e.elapsed&&e.bps?r.msgPendingTime.setTokens({time:t.getElapsed(Math.ceil(e.pendingBytes/e.bps))}):r.msgCalculatingTime,a.setTokens({uploadSpeed:e.bitrate,pendingTime:i})):""},_setResumableProgress:function(e,t,i){var a=this,r=a.resumableManager,n=i?r:a,o=i?i.find(".file-thumb-progress"):null;0===n.lastProgress&&(n.lastProgress=e),e<n.lastProgress&&(e=n.lastProgress),a._setProgress(e,o,null,a._getStats(t)),n.lastProgress=e},_setFileUploadStats:function(i,a,r,n){var o=this,l=o.$progress;if(o.showPreview||l&&l.length){var s,d=o.fileManager,c=d.getThumb(i),u=o.resumableManager,p=0,f=d.getTotalSize(),g=e.extend(!0,{},n);if(o.enableResumableUpload){var m,v=n.loaded,h=u.getUploadedSize(),w=u.file.size;v+=h,m=d.uploadedSize+v,a=t.round(100*v/w),n.pendingBytes=w-h,o._setResumableProgress(a,n,c),s=Math.floor(100*m/f),g.pendingBytes=f-m,o._setResumableProgress(s,g)}else d.setProgress(i,a),l=c&&c.length?c.find(".file-thumb-progress"):null,o._setProgress(a,l,null,o._getStats(n)),e.each(d.stats,function(e,t){p+=t.loaded}),g.pendingBytes=f-p,s=t.round(p/f*100),o._setProgress(s,null,null,o._getStats(g))}},_validateMinCount:function(){var e=this,t=e.isAjaxUpload?e.fileManager.count():e._inputFileCount();return e.validateInitialCount&&e.minFileCount>0&&e._getFileCount(t-1)<e.minFileCount?(e._noFilesError({}),!1):!0},_getFileCount:function(e){var t=this,i=0;return t.validateInitialCount&&!t.overwriteInitial&&(i=t.previewCache.count(!0),e+=i),e},_getFileId:function(e){return t.getFileId(e,this.generateFileId)},_getFileName:function(e,i){var a=this,r=t.getFileName(e);return r?a.slug(r):i},_getFileNames:function(e){var t=this;return t.filenames.filter(function(t){return e?void 0!==t:void 0!==t&&null!==t})},_setPreviewError:function(e,t){var i=this,a=i.removeFromPreviewOnError&&!i.retryErrorUploads;if(t&&!a||i.fileManager.remove(e),i.showPreview){if(a)return void e.remove();i._setThumbStatus(e,"Error"),i._refreshUploadButton(e)}},_refreshUploadButton:function(e){var t=this,i=e.find(".kv-file-upload"),a=t.fileActionSettings,r=a.uploadIcon,n=a.uploadTitle;i.length&&(t.retryErrorUploads&&(r=a.uploadRetryIcon,n=a.uploadRetryTitle),i.attr("title",n).html(r))},_checkDimensions:function(e,i,a,r,n,o,l){var s,d,c,u,p=this,f="Small"===i?"min":"max",g=p[f+"Image"+o];!t.isEmpty(g)&&a.length&&(c=a[0],d="Width"===o?c.naturalWidth||c.width:c.naturalHeight||c.height,u="Small"===i?d>=g:g>=d,u||(s=p["msgImage"+o+i].setTokens({name:n,size:g}),p._showFileError(s,l),p._setPreviewError(r)))},_getExifObj:function(e){var i=this,a=null,r=t.logMessages.exifWarning;if("data:image/jpeg;base64,"!==e.slice(0,23)&&"data:image/jpg;base64,"!==e.slice(0,22))return void(a=null);try{a=window.piexif?window.piexif.load(e):null}catch(n){a=null,r=n&&n.message||""}return a||i._log(t.logMessages.badExifParser,{details:r}),a},setImageOrientation:function(i,a,r,n){var o,l,s,d=this,c=!i||!i.length,u=!a||!a.length,p=!1,f=c&&n&&"image"===n.attr("data-template");c&&u||(s="load.fileinputimageorient",f?(i=a,a=null,i.css(d.previewSettings.image),l=e(document.createElement("div")).appendTo(n.find(".kv-file-content")),o=e(document.createElement("span")).insertBefore(i),i.css("visibility","hidden").removeClass("file-zoom-detail").appendTo(l)):p=!i.is(":visible"),i.off(s).on(s,function(){p&&(d.$preview.removeClass("hide-content"),n.find(".kv-file-content").css("visibility","hidden"));var e=i.get(0),s=a&&a.length?a.get(0):null,c=e.offsetHeight,u=e.offsetWidth,g=t.getRotation(r);if(p&&(n.find(".kv-file-content").css("visibility","visible"),d.$preview.addClass("hide-content")),i.data("orientation",r),s&&a.data("orientation",r),5>r)return t.setTransform(e,g),void t.setTransform(s,g);var m=Math.atan(u/c),v=Math.sqrt(Math.pow(c,2)+Math.pow(u,2)),h=v?c/Math.cos(Math.PI/2+m)/v:1,w=" scale("+Math.abs(h)+")";t.setTransform(e,g+w),t.setTransform(s,g+w),f&&(i.css("visibility","visible").insertAfter(o).addClass("file-zoom-detail"),o.remove(),l.remove())}))},_validateImageOrientation:function(i,a,r,n,o,l,s,d){var c,u,p=this,f=p.autoOrientImage,g=t.getZoomSelector(r," img");return c=f?p._getExifObj(d):null,(u=c?c["0th"][piexif.ImageIFD.Orientation]:null)?(p.setImageOrientation(i,e(g),u,p._getFrame(r)),p._raise("fileimageoriented",{$img:i,file:a}),void p._validateImage(r,n,o,l,s,d,c)):void p._validateImage(r,n,o,l,s,d,c)},_validateImage:function(t,i,a,r,n,o,l){var s,d,c,u=this,p=u.$preview,f=u._getFrame(t),g=f.attr("data-fileindex"),m=f.find("img");a=a||"Untitled",m.one("load",function(){d=f.width(),c=p.width(),d>c&&m.css("width","100%"),s={ind:g,id:t,fileId:i},u._checkDimensions(g,"Small",m,f,a,"Width",s),u._checkDimensions(g,"Small",m,f,a,"Height",s),u.resizeImage||(u._checkDimensions(g,"Large",m,f,a,"Width",s),u._checkDimensions(g,"Large",m,f,a,"Height",s)),u._raise("fileimageloaded",[t]),u.fileManager.addImage(i,{ind:g,img:m,thumb:f,pid:t,typ:r,siz:n,validated:!1,imgData:o,exifObj:l}),f.data("exif",l),u._validateAllImages()}).one("error",function(){u._raise("fileimageloaderror",[t])}).each(function(){this.complete?e(this).trigger("load"):this.error&&e(this).trigger("error")})},_validateAllImages:function(){var t,i=this,a={val:0},r=i.fileManager.getImageCount(),n=i.resizeIfSizeMoreThan;r===i.fileManager.totalImages&&(i._raise("fileimagesloaded"),i.resizeImage&&e.each(i.fileManager.loadedImages,function(e,o){o.validated||(t=o.siz,t&&t>1e3*n&&i._getResizedImage(e,o,a,r),o.validated=!0)}))},_getResizedImage:function(i,a,r,n){var o,l,s,d,c,u,p,f,g,m,v=this,h=e(a.img)[0],w=h.naturalWidth,b=h.naturalHeight,_=1,C=v.maxImageWidth||w,y=v.maxImageHeight||b,x=!(!w||!b),T=v.imageCanvas,I=v.imageCanvasContext,P=a.typ,F=a.pid,E=a.ind,S=a.thumb,k=a.exifObj;if(c=function(e,t,i){v.isAjaxUpload?v._showFileError(e,t,i):v._showError(e,t,i),v._setPreviewError(S)},f=v.fileManager.getFile(i),g={id:F,index:E,fileId:i},m=[i,F,E],(!f||!x||C>=w&&y>=b)&&(x&&f&&v._raise("fileimageresized",m),r.val++,r.val===n&&v._raise("fileimagesresized"),!x))return void c(v.msgImageResizeError,g,"fileimageresizeerror");P=P||v.resizeDefaultImageType,l=w>C,s=b>y,_="width"===v.resizePreference?l?C/w:s?y/b:1:s?y/b:l?C/w:1,v._resetCanvas(),w*=_,b*=_,T.width=w,T.height=b;try{I.drawImage(h,0,0,w,b),d=T.toDataURL(P,v.resizeQuality),k&&(p=window.piexif.dump(k),d=window.piexif.insert(p,d)),o=t.dataURI2Blob(d),v.fileManager.setFile(i,o),v._raise("fileimageresized",m),r.val++,r.val===n&&v._raise("fileimagesresized",[void 0,void 0]),o instanceof Blob||c(v.msgImageResizeError,g,"fileimageresizeerror")}catch(A){r.val++,r.val===n&&v._raise("fileimagesresized",[void 0,void 0]),u=v.msgImageResizeException.replace("{errors}",A.message),c(u,g,"fileimageresizeexception")}},_initBrowse:function(e){var i=this,a=i.$element;i.showBrowse?i.$btnFile=e.find(".btn-file").append(a):(a.appendTo(e).attr("tabindex",-1),t.addCss(a,"file-no-browse"))},_initClickable:function(){var i,a,r=this;r.isClickable&&(i=r.$dropZone,r.isAjaxUpload||(a=r.$preview.find(".file-default-preview"),a.length&&(i=a)),t.addCss(i,"clickable"),i.attr("tabindex",-1),r._handler(i,"click",function(t){var a=e(t.target);e(r.elErrorContainer+":visible").length||a.parents(".file-preview-thumbnails").length&&!a.parents(".file-default-preview").length||(r.$element.data("zoneClicked",!0).trigger("click"),i.blur())}))},_initCaption:function(){var e=this,i=e.initialCaption||"";return e.overwriteInitial||t.isEmpty(i)?(e.$caption.val(""),!1):(e._setCaption(i),!0)},_setCaption:function(i,a){var r,n,o,l,s,d,c=this;if(c.$caption.length){if(c.$captionContainer.removeClass("icon-visible"),a)r=e("<div>"+c.msgValidationError+"</div>").text(),l=c.fileManager.count(),l?(d=c.fileManager.getFirstFile(),s=1===l&&d?d.nameFmt:c._getMsgSelected(l)):s=c._getMsgSelected(c.msgNo),n=t.isEmpty(i)?s:i,o='<span class="'+c.msgValidationErrorClass+'">'+c.msgValidationErrorIcon+"</span>";else{if(t.isEmpty(i))return;r=e("<div>"+i+"</div>").text(),n=r,o=c._getLayoutTemplate("fileIcon")}c.$captionContainer.addClass("icon-visible"),c.$caption.attr("title",r).val(n),c.$captionIcon.html(o)}},_createContainer:function(){var t=this,i={"class":"file-input file-input-new"+(t.rtl?" kv-rtl":"")},a=e(document.createElement("div")).attr(i).html(t._renderMain());return a.insertBefore(t.$element),t._initBrowse(a),t.theme&&a.addClass("theme-"+t.theme),a},_refreshContainer:function(){var e=this,t=e.$container,i=e.$element;i.insertAfter(t),t.html(e._renderMain()),e._initBrowse(t),e._validateDisabled()},_validateDisabled:function(){var e=this;e.$caption.attr({readonly:e.isDisabled})},_renderMain:function(){var e=this,t=e.dropZoneEnabled?" file-drop-zone":"file-drop-disabled",i=e.showClose?e._getLayoutTemplate("close"):"",a=e.showPreview?e._getLayoutTemplate("preview").setTokens({"class":e.previewClass,dropClass:t}):"",r=e.isDisabled?e.captionClass+" file-caption-disabled":e.captionClass,n=e.captionTemplate.setTokens({"class":r+" kv-fileinput-caption"});return e.mainTemplate.setTokens({"class":e.mainClass+(!e.showBrowse&&e.showCaption?" no-browse":""),preview:a,close:i,caption:n,upload:e._renderButton("upload"),remove:e._renderButton("remove"),cancel:e._renderButton("cancel"),pause:e._renderButton("pause"),browse:e._renderButton("browse")})},_renderButton:function(e){var i=this,a=i._getLayoutTemplate("btnDefault"),r=i[e+"Class"],n=i[e+"Title"],o=i[e+"Icon"],l=i[e+"Label"],s=i.isDisabled?" disabled":"",d="button";switch(e){case"remove":if(!i.showRemove)return"";break;case"cancel":if(!i.showCancel)return"";r+=" kv-hidden";break;case"pause":if(!i.showPause)return"";r+=" kv-hidden";break;case"upload":if(!i.showUpload)return"";i.isAjaxUpload&&!i.isDisabled?a=i._getLayoutTemplate("btnLink").replace("{href}",i.uploadUrl):d="submit";break;case"browse":if(!i.showBrowse)return"";a=i._getLayoutTemplate("btnBrowse");break;default:return""}return r+="browse"===e?" btn-file":" fileinput-"+e+" fileinput-"+e+"-button",t.isEmpty(l)||(l=' <span class="'+i.buttonLabelClass+'">'+l+"</span>"),a.setTokens({type:d,css:r,title:n,status:s,icon:o,label:l})},_renderThumbProgress:function(){var e=this;return'<div class="file-thumb-progress kv-hidden">'+e.progressInfoTemplate.setTokens({percent:101,status:e.msgUploadBegin,stats:""})+"</div>"},_renderFileFooter:function(e,i,a,r,n){var o,l,s=this,d=s.fileActionSettings,c=d.showRemove,u=d.showDrag,p=d.showUpload,f=d.showZoom,g=s._getLayoutTemplate("footer"),m=s._getLayoutTemplate("indicator"),v=n?d.indicatorError:d.indicatorNew,h=n?d.indicatorErrorTitle:d.indicatorNewTitle,w=m.setTokens({indicator:v,indicatorTitle:h});return a=s._getSize(a),l={type:e,caption:i,size:a,width:r,progress:"",indicator:w},s.isAjaxUpload?(l.progress=s._renderThumbProgress(),l.actions=s._renderFileActions(l,p,!1,c,f,u,!1,!1,!1)):l.actions=s._renderFileActions(l,!1,!1,!1,f,u,!1,!1,!1),o=g.setTokens(l),o=t.replaceTags(o,s.previewThumbTags)},_renderFileActions:function(e,t,i,a,r,n,o,l,s,d,c,u){var p=this;if(!e.type&&d&&(e.type="image"),p.enableResumableUpload?t=!1:"function"==typeof t&&(t=t(e)),"function"==typeof i&&(i=i(e)),"function"==typeof a&&(a=a(e)),"function"==typeof r&&(r=r(e)),"function"==typeof n&&(n=n(e)),!(t||i||a||r||n))return"";var f,g=l===!1?"":' data-url="'+l+'"',m="",v="",h=s===!1?"":' data-key="'+s+'"',w="",b="",_="",C=p._getLayoutTemplate("actions"),y=p.fileActionSettings,x=p.otherActionButtons.setTokens({dataKey:h,key:s}),T=o?y.removeClass+" disabled":y.removeClass;return a&&(w=p._getLayoutTemplate("actionDelete").setTokens({removeClass:T,removeIcon:y.removeIcon,removeTitle:y.removeTitle,dataUrl:g,dataKey:h,key:s})),t&&(b=p._getLayoutTemplate("actionUpload").setTokens({uploadClass:y.uploadClass,uploadIcon:y.uploadIcon,uploadTitle:y.uploadTitle})),i&&(_=p._getLayoutTemplate("actionDownload").setTokens({downloadClass:y.downloadClass,downloadIcon:y.downloadIcon,downloadTitle:y.downloadTitle,downloadUrl:c||p.initialPreviewDownloadUrl}),_=_.setTokens({filename:u,key:s})),r&&(m=p._getLayoutTemplate("actionZoom").setTokens({zoomClass:y.zoomClass,zoomIcon:y.zoomIcon,zoomTitle:y.zoomTitle})),n&&d&&(f="drag-handle-init "+y.dragClass,v=p._getLayoutTemplate("actionDrag").setTokens({dragClass:f,dragTitle:y.dragTitle,dragIcon:y.dragIcon})),C.setTokens({"delete":w,upload:b,download:_,zoom:m,drag:v,other:x})},_browse:function(e){var t=this;e&&e.isDefaultPrevented()||!t._raise("filebrowse")||(t.isError&&!t.isAjaxUpload&&t.clear(),t.$captionContainer.focus())},_change:function(i){var a=this;if(!a.changeTriggered){var r,n,o,l=a.$element,s=arguments.length>1,d=a.isAjaxUpload,c=s?arguments[1]:l.get(0).files,u=!d&&t.isEmpty(l.attr("multiple"))?1:a.maxFileCount,p=a.fileManager.count(),f=t.isEmpty(l.attr("multiple")),g=f&&p>0,m=function(t,i,r,n){var o=e.extend(!0,{},a._getOutData(null,{},{},c),{id:r,index:n}),l={id:r,index:n,file:i,files:c};return d?a._showFileError(t,o):a._showError(t,l)},v=function(e,t){var i=a.msgFilesTooMany.replace("{m}",t).replace("{n}",e);a.isError=m(i,null,null,null),a.$captionContainer.removeClass("icon-visible"),a._setCaption("",!0),a.$container.removeClass("file-input-new file-input-ajax-new")};if(a.reader=null,a._resetUpload(),a._hideFileIcon(),a.dropZoneEnabled&&a.$container.find(".file-drop-zone ."+a.dropZoneTitleClass).remove(),d||(c=i.target&&void 0===i.target.files?i.target.value?[{name:i.target.value.replace(/^.+\\/,"")}]:[]:i.target.files||{}),r=c,t.isEmpty(r)||0===r.length)return d||a.clear(),void a._raise("fileselectnone");if(a._resetErrors(),o=r.length,n=a._getFileCount(d?a.fileManager.count()+o:o),u>0&&n>u){if(!a.autoReplace||o>u)return void v(a.autoReplace&&o>u?o:n,u);n>u&&a._resetPreviewThumbs(d)}else!d||g?(a._resetPreviewThumbs(!1),g&&a.clearFileStack()):!d||0!==p||a.previewCache.count(!0)&&!a.overwriteInitial||a._resetPreviewThumbs(!0);a.readFiles(r)}},_abort:function(t){var i,a=this;return a.ajaxAborted&&"object"==typeof a.ajaxAborted&&void 0!==a.ajaxAborted.message?(i=e.extend(!0,{},a._getOutData(null),t),i.abortData=a.ajaxAborted.data||{},i.abortMessage=a.ajaxAborted.message,a._setProgress(101,a.$progress,a.msgCancelled),a._showFileError(a.ajaxAborted.message,i,"filecustomerror"),a.cancel(),!0):!!a.ajaxAborted},_resetFileStack:function(){var t=this,i=0;t._getThumbs().each(function(){var a=e(this),r=a.attr("data-fileindex"),n=a.attr("id");"-1"!==r&&-1!==r&&(t.fileManager.getFile(a.attr("data-fileid"))?a.attr({"data-fileindex":"-1"}):(a.attr({"data-fileindex":i}),i++),t._getZoom(n).attr({"data-fileindex":a.attr("data-fileindex")}))})},_isFileSelectionValid:function(e){var t=this;return e=e||0,t.required&&!t.getFilesCount()?(t.$errorContainer.html(""),t._showFileError(t.msgFileRequired),!1):t.minFileCount>0&&t._getFileCount(e)<t.minFileCount?(t._noFilesError({}),
        !1):!0},_canPreview:function(e){var i=this;if(!(e&&i.showPreview&&i.$preview&&i.$preview.length))return!1;var a,r,n,o,l=e.name||"",s=e.type||"",d=(e.size||0)/1e3,c=i._parseFileType(s,l),u=i.allowedPreviewTypes,p=i.allowedPreviewMimeTypes,f=i.allowedPreviewExtensions||[],g=i.disabledPreviewTypes,m=i.disabledPreviewMimeTypes,v=i.disabledPreviewExtensions||[],h=i.maxFilePreviewSize&&parseFloat(i.maxFilePreviewSize)||0,w=new RegExp("\\.("+f.join("|")+")$","i"),b=new RegExp("\\.("+v.join("|")+")$","i");return a=!u||-1!==u.indexOf(c),r=!p||-1!==p.indexOf(s),n=!f.length||t.compare(l,w),o=g&&-1!==g.indexOf(c)||m&&-1!==m.indexOf(s)||v.length&&t.compare(l,b)||h&&!isNaN(h)&&d>h,!o&&(a||r||n)},clearFileStack:function(){var e=this;return e.fileManager.clear(),e._initResumableUpload(),e.enableResumableUpload?(null===e.showPause&&(e.showPause=!0),null===e.showCancel&&(e.showCancel=!1)):(e.showPause=!1,null===e.showCancel&&(e.showCancel=!0)),e.$element},getFileStack:function(){return this.fileManager.stack},getFileList:function(){return this.fileManager.list()},getFilesCount:function(){var e=this,t=e.isAjaxUpload?e.fileManager.count():e._inputFileCount();return e._getFileCount(t)},readFiles:function(i){this.reader=new FileReader;var a,r=this,n=r.$element,o=r.reader,l=r.$previewContainer,s=r.$previewStatus,d=r.msgLoading,c=r.msgProgress,u=r.previewInitId,p=i.length,f=r.fileTypeSettings,g=r.fileManager.count(),m=r.allowedFileTypes,v=m?m.length:0,h=r.allowedFileExtensions,w=t.isEmpty(h)?"":h.join(", "),b=function(t,n,o,l,s,d){var c=e.extend(!0,{},r._getOutData(null,{},{},i),{id:o,index:l,fileId:s}),u=r._getFrame(o),f={id:o,index:l,fileId:s,file:n,files:i};d||r._previewDefault(n,!0),r.isAjaxUpload?setTimeout(function(){a(l+1)},r.processDelay):p=0,d||(r._initFileActions(),u.remove()),r.isError=r.isAjaxUpload?r._showFileError(t,c):r._showError(t,f),r._updateFileDetails(p)};r.fileManager.clearImages(),e.each(i,function(e,t){var i=r.fileTypeSettings.image;i&&i(t.type)&&r.fileManager.totalImages++}),a=function(_){if(t.isEmpty(n.attr("multiple"))&&(p=1),_>=p)return r.isAjaxUpload&&r.fileManager.count()>0?r._raise("filebatchselected",[r.fileManager.stack]):r._raise("filebatchselected",[i]),r.unlock(),l.removeClass("file-thumb-loading"),void s.html("");r.lock(!0);var C,y,x,T,I,P,F,E,S,k,A,z,D,M=g+_,U=u+"-"+M,$=i[_],j=f.text,R=f.image,O=f.html,B=r._getFileName($,""),L=($&&$.size||0)/1e3,Z="",N=t.createObjectURL($),H=0,W="",q=0,V=function(){var e=c.setTokens({index:_+1,files:p,percent:50,name:B});setTimeout(function(){s.html(e),r._updateFileDetails(p),a(_+1)},r.processDelay),r._raise("fileloaded",[$,U,_,o])};if($){if(E=r.fileManager.getId($),v>0)for(y=0;v>y;y++)P=m[y],F=r.msgFileTypes[P]||P,W+=0===y?F:", "+F;if(B===!1)return void a(_+1);if(0===B.length)return x=r.msgInvalidFileName.replace("{name}",t.htmlEncode(t.getFileName($),"[unknown]")),void b(x,$,U,_,E);if(t.isEmpty(h)||(Z=new RegExp("\\.("+h.join("|")+")$","i")),C=L.toFixed(2),r.isAjaxUpload&&r.fileManager.exists(E)||r._getFrame(U).length)return x=r.msgDuplicateFile.setTokens({name:B,size:C}),b(x,$,U,_,E,!0),void(r.isAjaxUpload||(r._clearFileInput(),r.reset()));if(r.maxFileSize>0&&L>r.maxFileSize)return x=r.msgSizeTooLarge.setTokens({name:B,size:C,maxSize:r.maxFileSize}),void b(x,$,U,_,E);if(null!==r.minFileSize&&L<=t.getNum(r.minFileSize))return x=r.msgSizeTooSmall.setTokens({name:B,size:C,minSize:r.minFileSize}),void b(x,$,U,_,E);if(!t.isEmpty(m)&&t.isArray(m)){for(y=0;y<m.length;y+=1)T=m[y],S=f[T],H+=S&&"function"==typeof S&&S($.type,t.getFileName($))?1:0;if(0===H)return x=r.msgInvalidFileType.setTokens({name:B,types:W}),void b(x,$,U,_,E)}if(0===H&&!t.isEmpty(h)&&t.isArray(h)&&!t.isEmpty(Z)&&(I=t.compare(B,Z),H+=t.isEmpty(I)?0:I.length,0===H))return x=r.msgInvalidFileExtension.setTokens({name:B,extensions:w}),void b(x,$,U,_,E);if(!r._canPreview($))return r.isAjaxUpload&&r.fileManager.add($),r.showPreview&&(l.addClass("file-thumb-loading"),r._previewDefault($),r._initFileActions()),void setTimeout(function(){r._updateFileDetails(p),a(_+1),r._raise("fileloaded",[$,U,_])},10);k=j($.type,B),A=O($.type,B),z=R($.type,B),s.html(d.replace("{index}",_+1).replace("{files}",p)),l.addClass("file-thumb-loading"),o.onerror=function(e){r._errorHandler(e,B)},o.onload=function(i){var a,n,l,s,d,c,u=[],p=function(e){var t=new FileReader;t.onerror=function(e){r._errorHandler(e,B)},t.onload=function(e){r._previewFile(_,$,e,N,n),r._initFileActions(),V()},e?t.readAsText($,r.textEncoding):t.readAsDataURL($)};if(n={name:B,type:$.type},e.each(f,function(e,t){"object"!==e&&"other"!==e&&"function"==typeof t&&t($.type,B)&&q++}),0===q){for(l=new Uint8Array(i.target.result),y=0;y<l.length;y++)s=l[y].toString(16),u.push(s);if(a=u.join("").toLowerCase().substring(0,8),c=t.getMimeType(a,"",""),t.isEmpty(c)&&(d=t.arrayBuffer2String(o.result),c=t.isSvg(d)?"image/svg+xml":t.getMimeType(a,d,$.type)),n={name:B,type:c},k=j(c,""),A=O(c,""),z=R(c,""),D=k||A,D||z)return void p(D)}r._previewFile(_,$,i,N,n),r._initFileActions(),V()},o.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100,i=Math.ceil(t);x=c.setTokens({index:_+1,files:p,percent:i,name:B}),setTimeout(function(){s.html(x)},r.processDelay)}},k||A?o.readAsText($,r.textEncoding):z?o.readAsDataURL($):o.readAsArrayBuffer($),r.fileManager.add($)}},a(0),r._updateFileDetails(p,!1)},lock:function(e){var t=this,i=t.$container;return t._resetErrors(),t.disable(),i.addClass("is-locked"),!e&&t.showCancel&&i.find(".fileinput-cancel").show(),!e&&t.showPause&&i.find(".fileinput-pause").show(),t._raise("filelock",[t.fileManager.stack,t._getExtraData()]),t.$element},unlock:function(e){var t=this,i=t.$container;return void 0===e&&(e=!0),t.enable(),i.removeClass("is-locked"),t.showCancel&&i.find(".fileinput-cancel").hide(),t.showPause&&i.find(".fileinput-pause").hide(),e&&t._resetFileStack(),t._raise("fileunlock",[t.fileManager.stack,t._getExtraData()]),t.$element},resume:function(){var e=this,t=!1,i=e.$progress,a=e.resumableManager;return e.enableResumableUpload?(e.paused?i.html(e.progressPauseTemplate.setTokens({percent:101,status:e.msgUploadResume,stats:""})):t=!0,e.paused=!1,t&&i.html(e.progressInfoTemplate.setTokens({percent:101,status:e.msgUploadBegin,stats:""})),setTimeout(function(){a.upload()},e.processDelay),e.$element):e.$element},pause:function(){var t,i=this,a=i.resumableManager,r=i.ajaxRequests,n=r.length,o=a.getProgress(),l=i.fileActionSettings;if(!i.enableResumableUpload)return i.$element;if(a.chunkIntervalId&&clearInterval(a.chunkIntervalId),i.ajaxQueueIntervalId&&clearInterval(i.ajaxQueueIntervalId),i._raise("fileuploadpaused",[i.fileManager,a]),n>0)for(t=0;n>t;t+=1)i.paused=!0,r[t].abort();return i.showPreview&&i._getThumbs().each(function(){var t,a=e(this),r=a.attr("data-fileid"),n=i._getLayoutTemplate("stats"),s=a.find(".file-upload-indicator");a.removeClass("file-uploading"),s.attr("title")===l.indicatorLoadingTitle&&(i._setThumbStatus(a,"Paused"),t=n.setTokens({pendingTime:i.msgPaused,uploadSpeed:""}),i.paused=!0,i._setProgress(o,a.find(".file-thumb-progress"),o+"%",t)),i.fileManager.getFile(r)||a.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")}),i._setProgress(101,i.$progress,i.msgPaused),i.$element},cancel:function(){var t,i=this,a=i.ajaxRequests,r=i.resumableManager,n=a.length;if(i.enableResumableUpload&&r.chunkIntervalId?(clearInterval(r.chunkIntervalId),r.reset(),i._raise("fileuploadcancelled",[i.fileManager,r])):i._raise("fileuploadcancelled",[i.fileManager]),i.ajaxQueueIntervalId&&clearInterval(i.ajaxQueueIntervalId),i._initAjax(),n>0)for(t=0;n>t;t+=1)i.cancelling=!0,a[t].abort();return i._getThumbs().each(function(){var t=e(this),a=t.attr("data-fileid"),r=t.find(".file-thumb-progress");t.removeClass("file-uploading"),i._setProgress(0,r),r.hide(),i.fileManager.getFile(a)||(t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"),t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")),i.unlock()}),setTimeout(function(){i._setProgressCancelled()},i.processDelay),i.$element},clear:function(){var i,a=this;if(a._raise("fileclear"))return a.$btnUpload.removeAttr("disabled"),a._getThumbs().find("video,audio,img").each(function(){t.cleanMemory(e(this))}),a._clearFileInput(),a._resetUpload(),a.clearFileStack(),a._resetErrors(!0),a._hasInitialPreview()?(a._showFileIcon(),a._resetPreview(),a._initPreviewActions(),a.$container.removeClass("file-input-new")):(a._getThumbs().each(function(){a._clearObjects(e(this))}),a.isAjaxUpload&&(a.previewCache.data={}),a.$preview.html(""),i=!a.overwriteInitial&&a.initialCaption.length>0?a.initialCaption:"",a.$caption.attr("title","").val(i),t.addCss(a.$container,"file-input-new"),a._validateDefaultPreview()),0===a.$container.find(t.FRAMES).length&&(a._initCaption()||a.$captionContainer.removeClass("icon-visible")),a._hideFileIcon(),a.$captionContainer.focus(),a._setFileDropZoneTitle(),a._raise("filecleared"),a.$element},reset:function(){var e=this;if(e._raise("filereset"))return e.lastProgress=0,e._resetPreview(),e.$container.find(".fileinput-filename").text(""),t.addCss(e.$container,"file-input-new"),(e.getFrames().length||e.dropZoneEnabled)&&e.$container.removeClass("file-input-new"),e.clearFileStack(),e._setFileDropZoneTitle(),e.$element},disable:function(){var e=this;return e.isDisabled=!0,e._raise("filedisabled"),e.$element.attr("disabled","disabled"),e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),e.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",!0),t.addCss(e.$container.find(".btn-file"),"disabled"),e._initDragDrop(),e.$element},enable:function(){var e=this;return e.isDisabled=!1,e._raise("fileenabled"),e.$element.removeAttr("disabled"),e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),e.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"),e.$container.find(".btn-file").removeClass("disabled"),e._initDragDrop(),e.$element},upload:function(){var i,a,r,n=this,o=n.fileManager,l=o.count(),s=!e.isEmptyObject(n._getExtraData());if(n.isAjaxUpload&&!n.isDisabled&&n._isFileSelectionValid(l)){if(n.lastProgress=0,n._resetUpload(),0===l&&!s)return void n._showFileError(n.msgUploadEmpty);if(n.cancelling=!1,n.$progress.show(),n.lock(),r=o.count(),0===l&&s)return n._setProgress(2),void n._uploadExtraOnly();if(n.enableResumableUpload)return n.resume();if(n.uploadAsync||n.enableResumableUpload){for(a=n._getOutData(null),n._raise("filebatchpreupload",[a]),n.fileBatchCompleted=!1,n.uploadCache={content:[],config:[],tags:[],append:!0},i=0;r>i;i++)n.uploadCache.content[i]=null,n.uploadCache.config[i]=null,n.uploadCache.tags[i]=null;n.$preview.find(".file-preview-initial").removeClass(t.SORT_CSS),n._initSortable(),n.cacheInitialPreview=n.getPreview()}return n._setProgress(2),n.hasInitData=!1,n.uploadAsync?(i=0,void e.each(o.stack,function(e){n._uploadSingle(i,e,!0),i++})):(n._uploadBatch(),n.$element)}},destroy:function(){var t=this,i=t.$form,a=t.$container,r=t.$element,n=t.namespace;return e(document).off(n),e(window).off(n),i&&i.length&&i.off(n),t.isAjaxUpload&&t._clearFileInput(),t._cleanup(),t._initPreviewCache(),r.insertBefore(a).off(n).removeData(),a.off().remove(),r},refresh:function(i){var a=this,r=a.$element;return i="object"!=typeof i||t.isEmpty(i)?a.options:e.extend(!0,{},a.options,i),a._init(i,!0),a._listen(),r},zoom:function(e){var i=this,a=i._getFrame(e),r=i.$modal;a&&(t.initModal(r),r.html(i._getModalContent()),i._setZoomContent(a),r.modal("show"),i._initZoomButtons())},getExif:function(e){var t=this,i=t._getFrame(e);return i&&i.data("exif")||null},getFrames:function(i){var a,r=this;return i=i||"",a=r.$preview.find(t.FRAMES+i),r.reversePreviewOrder&&(a=e(a.get().reverse())),a},getPreview:function(){var e=this;return{content:e.initialPreview,config:e.initialPreviewConfig,tags:e.initialPreviewThumbTags}}},e.fn.fileinput=function(a){if(t.hasFileAPISupport()||t.isIE(9)){var r=Array.apply(null,arguments),n=[];switch(r.shift(),this.each(function(){var o,l=e(this),s=l.data("fileinput"),d="object"==typeof a&&a,c=d.theme||l.data("theme"),u={},p={},f=d.language||l.data("language")||e.fn.fileinput.defaults.language||"en";s||(c&&(p=e.fn.fileinputThemes[c]||{}),"en"===f||t.isEmpty(e.fn.fileinputLocales[f])||(u=e.fn.fileinputLocales[f]||{}),o=e.extend(!0,{},e.fn.fileinput.defaults,p,e.fn.fileinputLocales.en,u,d,l.data()),s=new i(this,o),l.data("fileinput",s)),"string"==typeof a&&n.push(s[a].apply(s,r))}),n.length){case 0:return this;case 1:return n[0];default:return n}}},e.fn.fileinput.defaults={language:"en",showCaption:!0,showBrowse:!0,showPreview:!0,showRemove:!0,showUpload:!0,showUploadStats:!0,showCancel:null,showPause:null,showClose:!0,showUploadedThumbs:!0,showConsoleLogs:!0,browseOnZoneClick:!1,autoReplace:!1,autoOrientImage:function(){var e=window.navigator.userAgent,t=!!e.match(/WebKit/i),i=!!e.match(/iP(od|ad|hone)/i),a=i&&t&&!e.match(/CriOS/i);return!a},autoOrientImageInitial:!0,required:!1,rtl:!1,hideThumbnailContent:!1,encodeUrl:!0,generateFileId:null,previewClass:"",captionClass:"",frameClass:"krajee-default",mainClass:"file-caption-main",mainTemplate:null,purifyHtml:!0,fileSizeGetter:null,initialCaption:"",initialPreview:[],initialPreviewDelimiter:"*$$*",initialPreviewAsData:!1,initialPreviewFileType:"image",initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:!0,initialPreviewDownloadUrl:"",removeFromPreviewOnError:!1,deleteUrl:"",deleteExtraData:{},overwriteInitial:!0,sanitizeZoomCache:function(t){var i=e(document.createElement("div")).append(t);return i.find("input,select,.file-thumbnail-footer").remove(),i.html()},previewZoomButtonIcons:{prev:'<i class="glyphicon glyphicon-triangle-left"></i>',next:'<i class="glyphicon glyphicon-triangle-right"></i>',toggleheader:'<i class="glyphicon glyphicon-resize-vertical"></i>',fullscreen:'<i class="glyphicon glyphicon-fullscreen"></i>',borderless:'<i class="glyphicon glyphicon-resize-full"></i>',close:'<i class="glyphicon glyphicon-remove"></i>'},previewZoomButtonClasses:{prev:"btn btn-navigate",next:"btn btn-navigate",toggleheader:"btn btn-sm btn-kv btn-default btn-outline-secondary",fullscreen:"btn btn-sm btn-kv btn-default btn-outline-secondary",borderless:"btn btn-sm btn-kv btn-default btn-outline-secondary",close:"btn btn-sm btn-kv btn-default btn-outline-secondary"},previewTemplates:{},previewContentTemplates:{},preferIconicPreview:!1,preferIconicZoomPreview:!1,allowedFileTypes:null,allowedFileExtensions:null,allowedPreviewTypes:void 0,allowedPreviewMimeTypes:null,allowedPreviewExtensions:null,disabledPreviewTypes:void 0,disabledPreviewExtensions:["msi","exe","com","zip","rar","app","vb","scr"],disabledPreviewMimeTypes:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:"file-other-icon",previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:"hidden-xs",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',browseClass:"btn btn-primary",removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-default btn-secondary",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:"btn btn-default btn-secondary",pauseIcon:'<i class="glyphicon glyphicon-pause"></i>',pauseClass:"btn btn-default btn-secondary",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-default btn-secondary",uploadUrl:null,uploadUrlThumb:null,uploadAsync:!0,uploadParamNames:{chunkCount:"chunkCount",chunkIndex:"chunkIndex",chunkSize:"chunkSize",chunkSizeStart:"chunkSizeStart",chunksUploaded:"chunksUploaded",fileBlob:"fileBlob",fileId:"fileId",fileName:"fileName",fileRelativePath:"fileRelativePath",fileSize:"fileSize",retryCount:"retryCount"},maxAjaxThreads:5,processDelay:100,queueDelay:10,progressDelay:0,enableResumableUpload:!1,resumableUploadOptions:{fallback:null,testUrl:null,chunkSize:2048,maxThreads:4,maxRetries:3,showErrorLog:!0},uploadExtraData:{},zoomModalHeight:480,minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:!1,resizePreference:"width",resizeQuality:.92,resizeDefaultImageType:"image/jpeg",resizeIfSizeMoreThan:0,minFileSize:0,maxFileSize:0,maxFilePreviewSize:25600,minFileCount:0,maxFileCount:0,validateInitialCount:!1,msgValidationErrorClass:"text-danger",msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:"file-error-message",progressThumbClass:"progress-bar progress-bar-striped active",progressClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressInfoClass:"progress-bar bg-info progress-bar-info progress-bar-striped active",progressCompleteClass:"progress-bar bg-success progress-bar-success",progressPauseClass:"progress-bar bg-primary progress-bar-primary progress-bar-striped active",progressErrorClass:"progress-bar bg-danger progress-bar-danger",progressUploadThreshold:99,previewFileType:"image",elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:t.closeButton("kv-error-close"),slugCallback:null,dropZoneEnabled:!0,dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{},otherActionButtons:"",textEncoding:"UTF-8",ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:!0,mergeAjaxCallbacks:!1,mergeAjaxDeleteCallbacks:!1,retryErrorUploads:!0,reversePreviewOrder:!1,usePdfRenderer:function(){var e=!!window.MSInputMethodContext&&!!document.documentMode;return!!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i)||e},pdfRendererUrl:"",pdfRendererTemplate:'<iframe class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}></iframe>'},e.fn.fileinputLocales.en={fileSingle:"file",filePlural:"files",browseLabel:"Browse &hellip;",removeLabel:"Remove",removeTitle:"Clear all unprocessed files",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",pauseLabel:"Pause",pauseTitle:"Pause ongoing upload",uploadLabel:"Upload",uploadTitle:"Upload selected files",msgNo:"No",msgNoFilesSelected:"No files selected",msgCancelled:"Cancelled",msgPaused:"Paused",msgPlaceholder:"Select {files}...",msgZoomModalHeading:"Detailed Preview",msgFileRequired:"You must select a file to upload.",msgSizeTooSmall:'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:"You must select at least <b>{n}</b> {files} to upload.",msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileName:'Invalid or unsupported characters in file name "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgFileTypes:{image:"image",html:"HTML",text:"text",video:"video",audio:"audio",flash:"flash",pdf:"PDF",object:"object"},msgUploadAborted:"The file upload was aborted",msgUploadThreshold:"Processing...",msgUploadBegin:"Initializing...",msgUploadEnd:"Done",msgUploadResume:"Resuming upload...",msgUploadEmpty:"No valid data available for upload.",msgUploadError:"Upload Error",msgDeleteError:"Delete Error",msgProgressError:"Error",msgValidationError:"Validation Error",msgLoading:"Loading file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} {files} selected",msgFoldersNotAllowed:"Drag & drop files only! {n} folder(s) dropped were skipped.",msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:"Could not get the image dimensions to resize.",msgImageResizeException:"Error while resizing the image.<pre>{errors}</pre>",msgAjaxError:"Something went wrong with the {operation} operation. Please try again later!",msgAjaxProgressError:"{operation} failed",msgDuplicateFile:'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',msgResumableUploadRetriesExceeded:"Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>",msgPendingTime:"{time} remaining",msgCalculatingTime:"calculating time remaining",ajaxOperations:{deleteThumb:"file delete",uploadThumb:"file upload",uploadBatch:"batch file upload",uploadExtra:"form data upload"},dropZoneTitle:"Drag & drop files here &hellip;",dropZoneClickTitle:"<br>(or click to select {files})",previewZoomButtonTitles:{prev:"View previous file",next:"View next file",toggleheader:"Toggle header",fullscreen:"Toggle full screen",borderless:"Toggle borderless mode",close:"Close detailed preview"}},e.fn.fileinput.Constructor=i,e(document).ready(function(){var t=e("input.file[type=file]");t.length&&t.fileinput()})});
/*!
 * bootstrap-fileinput v5.0.5
 * http://plugins.krajee.com/file-input
 *
 * Font Awesome icon theme configuration for bootstrap-fileinput. Requires font awesome assets to be loaded.
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2019, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */!function(a){"use strict";a.fn.fileinputThemes.fa={fileActionSettings:{removeIcon:'<i class="fa fa-trash"></i>',uploadIcon:'<i class="fa fa-upload"></i>',uploadRetryIcon:'<i class="fa fa-repeat"></i>',downloadIcon:'<i class="fa fa-download"></i>',zoomIcon:'<i class="fa fa-search-plus"></i>',dragIcon:'<i class="fa fa-arrows"></i>',indicatorNew:'<i class="fa fa-plus-circle text-warning"></i>',indicatorSuccess:'<i class="fa fa-check-circle text-success"></i>',indicatorError:'<i class="fa fa-exclamation-circle text-danger"></i>',indicatorLoading:'<i class="fa fa-hourglass text-muted"></i>',indicatorPaused:'<i class="fa fa-pause text-info"></i>'},layoutTemplates:{fileIcon:'<i class="fa fa-file kv-caption-icon"></i> '},previewZoomButtonIcons:{prev:'<i class="fa fa-caret-left fa-lg"></i>',next:'<i class="fa fa-caret-right fa-lg"></i>',toggleheader:'<i class="fa fa-fw fa-arrows-v"></i>',fullscreen:'<i class="fa fa-fw fa-arrows-alt"></i>',borderless:'<i class="fa fa-fw fa-external-link"></i>',close:'<i class="fa fa-fw fa-remove"></i>'},previewFileIcon:'<i class="fa fa-file"></i>',browseIcon:'<i class="fa fa-folder-open"></i>',removeIcon:'<i class="fa fa-trash"></i>',cancelIcon:'<i class="fa fa-ban"></i>',pauseIcon:'<i class="fa fa-pause"></i>',uploadIcon:'<i class="fa fa-upload"></i>',msgValidationErrorIcon:'<i class="fa fa-exclamation-circle"></i> '}}(window.jQuery);
/*!
 * FileInput <_LANG_> Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['_LANG_'] = {
        fileSingle: 'file',
        filePlural: 'files',
        browseLabel: 'Browse &hellip;',
        removeLabel: 'Remove',
        removeTitle: 'Clear selected files',
        cancelLabel: 'Cancel',
        cancelTitle: 'Abort ongoing upload',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Upload',
        uploadTitle: 'Upload selected files',
        msgNo: 'No',
        msgNoFilesSelected: 'No files selected',
        msgPaused: 'Paused',
        msgCancelled: 'Cancelled',
        msgPlaceholder: 'Select {files}...',
        msgZoomModalHeading: 'Detailed Preview',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'You must select at least <b>{n}</b> {files} to upload.',
        msgFilesTooMany: 'Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.',
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgFileTypes: {
            'image': 'image',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'The file upload was aborted',
        msgUploadThreshold: 'Processing...',
        msgUploadBegin: 'Initializing...',
        msgUploadEnd: 'Done',
        msgUploadResume: 'Resuming upload...',
        msgUploadEmpty: 'No valid data available for upload.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Error',
        msgValidationError: 'Validation Error',
        msgLoading: 'Loading file {index} of {files} &hellip;',
        msgProgress: 'Loading file {index} of {files} - {name} - {percent}% completed.',
        msgSelected: '{n} {files} selected',
        msgFoldersNotAllowed: 'Drag & drop files only! Skipped {n} dropped folder(s).',
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: 'Could not get the image dimensions to resize.',
        msgImageResizeException: 'Error while resizing the image.<pre>{errors}</pre>',
        msgAjaxError: 'Something went wrong with the {operation} operation. Please try again later!',
        msgAjaxProgressError: '{operation} failed',
        msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
        msgResumableUploadRetriesExceeded:  'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'calculating time remaining',
        ajaxOperations: {
            deleteThumb: 'file delete',
            uploadThumb: 'file upload',
            uploadBatch: 'batch file upload',
            uploadExtra: 'form data upload'
        },
        dropZoneTitle: 'Drag & drop files here &hellip;',
        dropZoneClickTitle: '<br>(or click to select {files})',
        fileActionSettings: {
            removeTitle: 'Remove file',
            uploadTitle: 'Upload file',
            uploadRetryTitle: 'Retry upload',
            downloadTitle: 'Download file',
            zoomTitle: 'View details',
            dragTitle: 'Move / Rearrange',
            indicatorNewTitle: 'Not uploaded yet',
            indicatorSuccessTitle: 'Uploaded',
            indicatorErrorTitle: 'Upload Error',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle:  'Uploading ...'
        },
        previewZoomButtonTitles: {
            prev: 'View previous file',
            next: 'View next file',
            toggleheader: 'Toggle header',
            fullscreen: 'Toggle full screen',
            borderless: 'Toggle borderless mode',
            close: 'Close detailed preview'
        }
    };
})(window.jQuery);