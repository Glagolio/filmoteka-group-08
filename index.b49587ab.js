!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequired7c6=i),i.register("fJh0j",(function(t,e){})),i.register("kitKc",(function(r,n){e(r.exports,"movieCards",(function(){return m})),e(r.exports,"loadStoragePage",(function(){return y}));var o=i("bpxeT"),a=i("2TvXO"),c=i("jzQFI"),s=i("qikvZ"),l=document.querySelector(".form-field"),u=document.querySelector(".home-list"),d=document.querySelector(".spinner-loader"),f=document.querySelector(".search-result"),v="",h=1;function m(t){return t.map((function(t){var e=t.id,r=t.poster_path,n=t.title,o=t.original_title,i=t.genres_ids,a=t.release_date,c=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster",s=new Date(a).getFullYear();return'<li class="home-card js-modal-open placeholdify" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(c,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(i,"</span>\n                        |\n                        <span>").concat(s,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}function p(t,e){return g.apply(this,arguments)}function g(){return(g=t(o)(t(a).mark((function e(r,n){var o;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:r}),t.abrupt("return",fetch("https://api.themoviedb.org/3/search/movie?".concat(o,"&page=").concat(n)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})).then((function(t){return{movies:t.results}})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function y(){if(f.classList.add("is-hidden"),d.classList.remove("is-hidden"),v=null===s.storageLastSearchText||void 0===s.storageLastSearchText?void 0:s.storageLastSearchText.movie,h=null===s.storagePage||void 0===s.storagePage?void 0:s.storagePage.value,""===v)return d.classList.add("is-hidden"),alert("Empty field");p(v,h).then((function(t){var e=t.movies;if(0===e.length)return d.classList.add("is-hidden"),void f.classList.remove("is-hidden");c.default.save("movies",e),u.innerHTML=m(e),d.classList.add("is-hidden")}))}null==l||l.addEventListener("submit",(function(t){if(t.preventDefault(),f.classList.add("is-hidden"),d.classList.remove("is-hidden"),""===(v=l.elements.query.value.trim()))return d.classList.add("is-hidden"),alert("Empty field");p(v).then((function(t){var e=t.movies;if(0===e.length)return d.classList.add("is-hidden"),void f.classList.remove("is-hidden");c.default.save(s.STORAGE_MOVIES_SEARCH,{movie:v}),c.default.save("movies",e),u.innerHTML=m(e),d.classList.add("is-hidden"),setTimeout((function(){document.querySelectorAll(".placeholdify").forEach((function(t){return t.classList.remove("placeholdify")}))}),2e3)}))}))})),i.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}})),i.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=d;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",v="executing",h="completed",m={};function p(){}function g(){}function y(){}var _={};s(_,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(q([])));w&&w!==r&&n.call(w,i)&&(_=w);var L=y.prototype=p.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function q(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=y,s(L,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:q(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("jzQFI",(function(t,r){e(t.exports,"default",(function(){return n}));var n={save:function(t,e){try{var r=JSON.stringify(e);localStorage.setItem(t,r)}catch(t){console.error("Set state error: ",t.message)}},load:function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},remove:function(t){try{null!==localStorage.getItem(t)&&localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}}})),i.register("qikvZ",(function(t,r){e(t.exports,"STORAGE_MOVIES_SEARCH",(function(){return c})),e(t.exports,"storagePage",(function(){return s})),e(t.exports,"storageLastSearchText",(function(){return l}));var n=i("jzQFI"),o=i("jcFG7"),a="last visit page",c="last visit search",s=n.default.load(a),l=n.default.load(c);n.default.save(a,{value:o.currentPage})})),i.register("jcFG7",(function(t,r){e(t.exports,"currentPage",(function(){return c}));document.querySelector(".js-card");var n,o=document.getElementById("pagination"),i=document.querySelector(".arrow_left"),a=document.querySelector(".arrow_right"),c=(document.querySelector(".header-warning"),2);function s(t){1===c?i.classList.add("disabled-arrow"):i.classList.remove("disabled-arrow"),c===t?a.classList.add("disabled-arrow"):a.classList.remove("disabled-arrow")}null==o||o.addEventListener("click",(function(t){if("BUTTON"!=t.target.tagName)return;s(n)}))})),i.register("6c9nX",(function(t,e){})),i.register("5xtVg",(function(t,e){var r=i("jzQFI"),n=document.querySelector("[data-modal]"),o=document.querySelector("[data-modal-close]");function a(t){"Escape"===t.code&&s()}function c(t,e){var n;return null===(n=r.default.load(e))||void 0===n?void 0:n.find((function(e){return e.id.toString()===t}))}function s(){document.addEventListener("keydown",a),document.body.style.overflow="",n.classList.add("is-hidden")}function l(t,e){var n;return null===(n=r.default.load(t))||void 0===n?void 0:n.some((function(t){return t.id.toString()===e}))}(document.querySelector(".home-container")||document.querySelector(".library-container")).addEventListener("click",(function(t){var e;t.target.closest(".js-modal-open")&&(t.preventDefault(),e=t.target.closest(".js-modal-open").dataset.cardMovieId,document.addEventListener("keydown",a),n.querySelector(".modal-movie").dataset.modalMovieId=e,n.querySelector(".modal-movie").innerHTML=function(t){var e=c(t,"movies")||c(t,"watched-list")||c(t,"queue-list"),r=e.poster_path,n=e.title,o=e.original_title,i=e.genres_ids,a=(e.release_date,e.vote_average),s=e.vote_count,u=e.popularity,d=e.overview,f=l("watched-list",(t=t.toString()).toString())?"added":"",v='<div class="modal-movie__btn movie-btn movie-btn--watched '.concat(f,'" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>');f=l("queue-list",t.toString())?"added":"";var h='<div class="modal-movie__btn movie-btn movie-btn--queue '.concat(f,'" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>');return'<div class="modal-movie__poster">\n            <img src=\'https://image.tmdb.org/t/p/w500'.concat(r,"' alt=\"").concat(n,'" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">').concat(n,'</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">').concat(a.toFixed(1),'</span>\n                            <span>/</span>\n                            <span class="votes">').concat(s,'</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">').concat(u.toFixed(0),'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">').concat(o,'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">').concat(i,'</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">').concat(d,'</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ').concat(v,"\n                    ").concat(h,"\n                </div>\n                </div>\n            </div>")}(e),document.body.style.overflow="hidden",n.classList.remove("is-hidden"),function(t,e){var r=2500,n=.1,o=document.querySelector("#out"),i=0,a=Math.round(r/(t/n)),c=setInterval((function(){(i+=n)>=t&&clearInterval(c),o.innerHTML=i.toFixed(1)}),a)}((c(e,"movies")||c(e,"watched-list")||c(e,"queue-list")).vote_average))})),o.addEventListener("click",s),n.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void s();"BUTTON"===t.target.nodeName&&function(t){var e,n,o=(null===(e=t.dataset)||void 0===e?void 0:e.modalAddTo)+"-list",i=t.closest(".modal-movie").dataset.modalMovieId,a=null===(n=r.default.load("movies"))||void 0===n?void 0:n.find((function(t){return t.id.toString()===i})),c=r.default.load(o)||[];r.default.load(o)&&l(o,a.id.toString())?(t.classList.remove("added"),c=c.filter((function(t){return t.id.toString()!=a.id}))):(c.push(a),t.classList.add("added"));r.default.save(o,c)}(t.target.closest(".movie-btn"))}))}))}();
//# sourceMappingURL=index.b49587ab.js.map
