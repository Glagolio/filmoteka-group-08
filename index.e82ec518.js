!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o("fJh0j");var i={};function a(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}};var c={},s=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return F()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=N(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=d(t,e,n);if("normal"===s.type){if(r=n.done?m:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",m="completed",p={};function v(){}function g(){}function y(){}var b={};s(b,i,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(j([])));L&&L!==n&&r.call(L,i)&&(b=L);var w=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,i,a,c){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function N(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=d(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=y,s(w,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(C.prototype),s(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new C(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(c);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var u=o("jzQFI"),d=(u=o("jzQFI"),"last visit page"),l="last visit search",f="last visit popular",h=u.default.load(f),m=u.default.load(d),p=u.default.load(l);function v(){setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(t){return t.classList.remove("placeholdify")}))}),2e3)}var g=o("5xtVg"),y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(t){return b.default(t)||x.default(t)||w.default(t)||L.default()};var b=_(o("kMC0W")),x=_(o("7AJDX")),L=_(o("8CtQK")),w=_(o("auk6i"));function _(t){return t&&t.__esModule?t:{default:t}}u=o("jzQFI"),g=o("5xtVg");var C=document.querySelector(".btn-to-top");function N(){var t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&C.classList.add("btn-to-top--visible"),t<e&&C.classList.remove("btn-to-top--visible")}function E(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",N),C.addEventListener("click",E);u=o("jzQFI");var k=o("1Vkri"),S=document.querySelector(".genres-container"),j="genre-span-active",F=document.querySelector(".homeList"),q=u.default.load("arrow").map((function(t){return'<button type="button" class="'.concat("genre-span-style"," genre-span\" id='").concat(t.id,"'>").concat(t.name,"</button>")})).join("");function T(t){return O.apply(this,arguments)}function O(){return(O=t(i)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u.default.load("movies"),F.innerHTML=(0,k.markUpWithGenres)(r.filter((function(t){return t.genre_ids.includes(n)})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}S.innerHTML=q,S.addEventListener("click",(function(t){if(u.default.load("genre")==t.target.id){t.target.classList.remove(j),u.default.save("genre",null);var e=u.default.load("movies");return void(F.innerHTML=(0,k.markUpWithGenres)(e))}document.querySelectorAll(".genre-span-active").forEach((function(t){return t.classList.remove(j)})),t.target.classList.add(j),u.default.save("genre",t.target.id),T(Number(t.target.id))}));var M="659c146febfafc17fd54baa17527f7fa",P=document.querySelector(".home-list"),I="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(M),A=document.querySelector(".spinner-loader");function B(t){return G.apply(this,arguments)}function G(){return(G=t(i)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=t(i)(t(c).mark((function e(){var n;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(M,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function H(t){P.innerHTML="",u.default.save(f,t),B("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(M,"&page=").concat(t)).then((function(e){var n=e.results;at(t,1e3);var r=n.map((function(t){var e=t.id,n=t.poster_path,r=t.title,o=t.original_title,i=t.genre_ids,a=t.release_date,c=t.original_name,s=(t.first_air_date,a?"<span>".concat(new Date(a).getFullYear(),"</span>"):""),u=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster";return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(u,'" alt="').concat(r,'">\n                    <h2 class="card-info__title">').concat(o||c,'</h2>\n                    <p class="card-info_descr">\n                        ').concat(i.length?"<span>".concat((0,g.getGenres)(i,3),"</span>"):"","\n                        \n                        ").concat(i.length&&s?" | ":"","\n                        ").concat(s||"","\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("");A.classList.remove("is-hidden"),setTimeout((function(){A.classList.add("is-hidden")}),2e3),v(),u.default.save("movies",n),console.log(u.default.load("genre"),n),null!==u.default.load("genre")?T(Number(u.default.load("genre"))):P.insertAdjacentHTML("beforeend",r)}))}N(),E(),function(){return z.apply(this,arguments)}().then((function(e){var n=e.genres,r=t(y)(n);localStorage.setItem("arrow",JSON.stringify(r))})),B(I).then((function(t){var e=t.results;e.poster_path;var n=e.map((function(t){var e=t.id,n=t.poster_path,r=t.title,o=t.original_title,i=t.genre_ids,a=t.release_date,c=t.original_name,s=(t.first_air_date,a?"<span>".concat(new Date(a).getFullYear(),"</span>"):""),u=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster";return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(u,'" alt="').concat(r,'">\n                    <h2 class="card-info__title">').concat(o||c,'</h2>\n                    <p class="card-info_descr">\n                        ').concat(i.length?"<span>".concat((0,g.getGenres)(i,3),"</span>"):"","\n                        \n                       ").concat(i.length&&s?" | ":"","\n                        ").concat(s||"","\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("");A.classList.remove("is-hidden"),setTimeout((function(){A.classList.add("is-hidden")}),2e3),v(),u.default.save("movies",e),P.insertAdjacentHTML("beforeend",n)}));var U=document.querySelector('[data-index="1"]'),Q=document.querySelector('[data-index="2"]'),D=document.querySelector('[data-index="3"]'),R=document.querySelector('[data-index="4"]'),J=document.querySelector('[data-index="5"]'),Y=document.querySelector(".first-button"),V=document.querySelector(".last-button"),X=document.querySelector(".pagination-container"),W=document.querySelector(".arrow-right"),K=document.querySelector(".arrow-left"),Z=document.querySelector("#previous"),$=document.querySelector("#after"),tt=document.querySelector(".js-search-form"),et=document.querySelector(".js-card-library"),nt=[U,Q,D,R,J];X.addEventListener("click",(function(t){"BUTTON"===t.target.tagName&&(Number(t.target.textContent)&&(rt=Number(t.target.textContent)),Z.hidden=!0,$.hidden=!0,t.target.classList.contains("pagination-button")&&(ot.forEach((function(t){return t.classList.remove("pagination--current")})),t.target.classList.add("pagination--current")),t.target.classList.contains("arrow-right")&&rt<1e3&&(ot.forEach((function(t){return t.classList.remove("pagination--current")})),U.classList.add("pagination--current"),U.textContent=Number(U.textContent)+1,Q.textContent=Number(Q.textContent)+1,D.textContent=Number(D.textContent)+1,R.textContent=Number(R.textContent)+1,J.textContent=Number(J.textContent)+1,rt=Number(rt)+1),t.target.classList.contains("arrow-left")&&rt>=5&&(ot.forEach((function(t){return t.classList.remove("pagination--current")})),U.textContent=Number(U.textContent)-1,Q.textContent=Number(Q.textContent)-1,D.textContent=Number(D.textContent)-1,R.textContent=Number(R.textContent)-1,J.textContent=Number(J.textContent)-1,J.classList.add("pagination--current"),rt=Number(rt)-1),t.target.classList.contains("first-button")&&(ot.forEach((function(t){return t.classList.remove("pagination--current")})),U.textContent=1,Q.textContent=2,D.textContent=3,R.textContent=4,J.textContent=5,U.classList.add("pagination--current"),rt=U.textContent,K.hidden=!0,Z.hidden=!0,Y.hidden=!0),t.target.classList.contains("last-button")&&(ot.forEach((function(t){return t.classList.remove("pagination--current")})),U.textContent=Number(V.textContent)-4,Q.textContent=Number(V.textContent)-3,D.textContent=Number(V.textContent)-2,R.textContent=Number(V.textContent)-1,J.textContent=V.textContent,J.classList.add("pagination--current"),rt=J.textContent,W.hidden=!0,$.hidden=!0,V.hidden=!0),Number(rt)>5?(K.hidden=!1,Z.hidden=!1,Y.hidden=!1):(K.hidden=!0,Z.hidden=!0,Y.hidden=!0),Number(rt)<996&&(W.hidden=!1,$.hidden=!1,V.hidden=!1),null!=et&&(et.innerHTML=""),window.scrollTo({top:0,behavior:"smooth"}),""!==tt.value?gt(rt):H(rt))}));var rt=1,ot=document.querySelectorAll(".pagination-button");Z.hidden=!0,K.hidden=!0,Y.hidden=!0;var it=function(t){Number(t)>5?(ot.forEach((function(t){return t.classList.remove("pagination--current")})),U.textContent=Number(t)-2,Q.textContent=Number(t)-1,D.textContent=Number(t),R.textContent=Number(t)+1,J.textContent=Number(t)+2,D.classList.add("pagination--current"),K.hidden=!1,Z.hidden=!1,Y.hidden=!1):(ot.forEach((function(t){return t.classList.remove("pagination--current")})),2==Number(t)&&(Q.textContent=2,Q.classList.add("pagination--current")),3==Number(t)&&(Q.textContent=3,D.classList.add("pagination--current")),4==Number(t)&&(Q.textContent=4,R.classList.add("pagination--current")),5==Number(t)&&(Q.textContent=5,J.classList.add("pagination--current")),K.hidden=!0,Z.hidden=!0,Y.hidden=!0)};function at(t,e){(Number(t)===e||nt.find((function(t){return Number(t.textContent)===e})))&&(W.hidden=!0,$.hidden=!0,V.hidden=!0),nt.forEach((function(t){Number(t.textContent)>e&&(t.hidden=!0)})),Number(t)>=5&&Number(t)<e-2&&(nt.forEach((function(t){return t.classList.remove("pagination--current")})),D.textContent=Number(t),D.classList.add("pagination--current"),Q.textContent=Number(t)-1,U.textContent=Number(t)-2,R.textContent=Number(t)+1,J.textContent=Number(t)+2,Y.hidden=!1,K.hidden=!1,Z.hidden=!1),Number(t)>=Number(e)-3&&(W.hidden=!0,$.hidden=!0),nt.forEach((function(t){Number(t.textContent)<1&&(t.hidden=!0)})),Number(t)<=4&&(nt.forEach((function(t){return t.classList.remove("pagination--current")})),U.textContent=1,Q.textContent=2,D.textContent=3,R.textContent=4,J.textContent=5,K.hidden=!0,Y.hidden=!0,Z.hidden=!0,W.hidden=!1,V.hidden=!1,$.hidden=!1,4===Number(t)&&(R.classList.add("pagination--current"),W.hidden=!1,V.hidden=!1,$.hidden=!1),3===Number(t)&&D.classList.add("pagination--current"),2===Number(t)&&Q.classList.add("pagination--current"),1===Number(t)&&U.classList.add("pagination--current"))}function ct(t){t<=5&&(V.hidden=!0,W.hidden=!0,K.hidden=!0,Z.hidden=!0,$.hidden=!0,t<=4&&(J.hidden=!0,t<=3&&(R.hidden=!0,t<=2&&(D.hidden=!0,t<=1&&(Q.hidden=!0)))))}var st=document.querySelector(".form-field"),ut=document.querySelector(".home-list"),dt=document.querySelector(".spinner-loader"),lt=document.querySelector(".search-result"),ft="",ht=[U,Q,D,R,J,Y,V,W,K,Z,$];function mt(t){return t.map((function(t){var e=t.id,n=t.poster_path,r=t.title,o=t.original_title,i=t.genre_ids,a=t.release_date,c=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster",s=a?"<span>".concat(new Date(a).getFullYear(),"</span>"):"";return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(c,'" alt="').concat(r,'">\n                    <h2 class="card-info__title">').concat(o,'</h2>\n                    <p class="card-info_descr">\n                        ').concat(i.length?"<span>".concat((0,g.getGenres)(i,3),"</span>"):"","\n                        ").concat(i.length&&s?" | ":"","\n                        ").concat(s||"","\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}function pt(t,e){return vt.apply(this,arguments)}function vt(){return(vt=t(i)(t(c).mark((function e(n,r){var o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:n}),t.abrupt("return",fetch("https://api.themoviedb.org/3/search/movie?".concat(o,"&page=").concat(r)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})).then((function(t){return{lastPage:t.total_pages,movies:t.results}})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function gt(t){if(lt.classList.add("search-result--hidden"),dt.classList.remove("is-hidden"),ft=u.default.load(l),u.default.save(d,t),""===ft)return dt.classList.add("is-hidden"),alert("Empty field");pt(ft,t).then((function(e){var n=e.movies,r=e.lastPage;if(ht.forEach((function(t){return t.hidden=!1})),0===n.length)return dt.classList.add("is-hidden"),alert("Empty field");u.default.save("movies",n),V.textContent=r,at(t,r),ct(r),Number(U.textContent)===Number(t)&&1!==Number(U.textContent)&&(K.hidden=!1,Z.hidden=!1,Y.hidden=!1),ut.innerHTML=mt(n),setTimeout((function(){dt.classList.add("is-hidden")}),2e3),v()}))}null==st||st.addEventListener("submit",(function(t){S.classList.add("hide"),ht.forEach((function(t){return t.hidden=!1}));if(t.preventDefault(),lt.classList.add("search-result--hidden"),dt.classList.remove("is-hidden"),ft=st.elements.query.value.trim(),u.default.remove(f),""===ft)return dt.classList.add("is-hidden"),lt.classList.remove("search-result--hidden"),void setTimeout((function(){return lt.classList.add("search-result--hidden")}),4e3);pt(ft,1).then((function(t){var e=t.movies,n=t.lastPage;if(0===e.length)return dt.classList.add("is-hidden"),lt.classList.remove("search-result--hidden"),void setTimeout((function(){return lt.classList.add("search-result--hidden")}),4e3);u.default.save(l,ft),u.default.save("movies",e),V.textContent=n,ct(n),ut.innerHTML=mt(e),setTimeout((function(){dt.classList.add("is-hidden")}),2e3),v(),ot.forEach((function(t){return t.classList.remove("pagination--current")})),U.textContent=1,Q.textContent=2,D.textContent=3,R.textContent=4,J.textContent=5,U.classList.add("pagination--current"),rt=U.textContent,K.hidden=!0,Z.hidden=!0,Y.hidden=!0}))})),o("5xtVg"),o("gXLk6"),o("jzQFI");var yt,bt={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};function xt(){bt.visitModal.classList.toggle("is-hidden"),!0===bt.visitModal.classList.value.includes("hidden")&&(clearTimeout(yt),bt.comeBackBtn.removeEventListener("click",Lt),bt.visitCloseBtn.removeEventListener("click",xt))}function Lt(){var t=1;bt.visitModal.classList.toggle("is-hidden"),h>1?(H(t=h),it(t)):(gt(t=m),it(t),document.querySelector(".js-search-form").value=p),!0===bt.visitModal.classList.value.includes("hidden")&&(clearTimeout(yt),bt.comeBackBtn.removeEventListener("click",Lt),bt.visitCloseBtn.removeEventListener("click",xt))}if(bt.comeBackBtn.addEventListener("click",Lt),bt.visitCloseBtn.addEventListener("click",xt),null!==sessionStorage.getItem("mark")||(xt(),sessionStorage.setItem("mark",JSON.stringify("mark")),yt=setTimeout((function(){xt()}),15e3)),"loading"in HTMLImageElement.prototype){document.querySelectorAll('image[loading="lazy"]').forEach((function(t){t.src=t.dataset.src}))}else{var wt=document.createElement("script");wt.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",wt.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",wt.crossOrigin="anonymous",wt.referrerpolicy="no-referrer",document.body.appendChild(wt)}document.querySelectorAll("image[data-src]").forEach((function(t){t.addEventListener("load",onImageLoaded,{once:!0})})),o("9VC5X")}();
//# sourceMappingURL=index.e82ec518.js.map
