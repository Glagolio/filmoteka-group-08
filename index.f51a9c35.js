!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},r.parcelRequired7c6=a),a.register("fJh0j",(function(t,e){})),a.register("kitKc",(function(r,n){e(r.exports,"movieCards",(function(){return f}));var o=a("bpxeT"),i=a("2TvXO"),c=a("jzQFI"),s=document.querySelector(".form-field"),l=document.querySelector(".home-list"),u=document.querySelector(".spinner-loader"),d="";function f(t){return t.map((function(t){var e=t.id,r=t.poster_path,n=t.title,o=t.original_title,a=t.genres_ids,i=t.release_date,c="https://image.tmdb.org/t/p/w500".concat(r),s=new Date(i).getFullYear();return'<li class="home-card js-modal-open" data-card-movie-id="'.concat(e,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(c,'" alt="').concat(n,'">\n                    <h2 class="card-info__title">').concat(o,'</h2>\n                    <p class="card-info_descr">\n                        <span>').concat(a,"</span>\n                        |\n                        <span>").concat(s,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}function h(){return(h=t(o)(t(i).mark((function e(r){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:r}),t.abrupt("return",fetch("https://api.themoviedb.org/3/search/movie?".concat(n)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})).then((function(t){return{movies:t.results}})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}s.addEventListener("submit",(function(t){if(t.preventDefault(),u.classList.remove("is-hidden"),""===(d=s.elements.query.value.trim()))return u.classList.add("is-hidden"),alert("Empty field");(function(t){return h.apply(this,arguments)})(d).then((function(t){var e=t.movies;c.default.save("movies",e),l.innerHTML=f(e),u.classList.add("is-hidden")}))}))})),a.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",v="completed",p={};function m(){}function g(){}function y(){}var _={};s(_,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(M([])));b&&b!==r&&n.call(b,a)&&(_=b);var L=y.prototype=m.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return g.prototype=y,s(L,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("jzQFI",(function(t,r){e(t.exports,"default",(function(){return n}));var n={save:function(t,e){try{var r=JSON.stringify(e);localStorage.setItem(t,r)}catch(t){console.error("Set state error: ",t.message)}},load:function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},remove:function(t){try{null!==localStorage.getItem(t)&&localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}}})),a.register("6c9nX",(function(t,e){})),a.register("qikvZ",(function(t,e){var r=a("jzQFI"),n="Start on last visit page?";r.default.load(n)})),a.register("5xtVg",(function(t,e){var r=a("jzQFI"),n=document.querySelector("[data-modal]"),o=document.querySelector("[data-modal-close]");function i(t){"Escape"===t.code&&c()}function c(){document.addEventListener("keydown",i),n.classList.add("is-hidden")}function s(t,e){var n;return null===(n=r.default.load(t))||void 0===n?void 0:n.some((function(t){return t.id.toString()===e}))}document.querySelector(".home-container").addEventListener("click",(function(t){var e;t.target.closest(".js-modal-open")&&(t.preventDefault(),e=t.target.closest(".js-modal-open").dataset.cardMovieId,document.addEventListener("keydown",i),n.querySelector(".modal-movie").dataset.modalMovieId=e,n.querySelector(".modal-movie").innerHTML=function(t){var e,n=null===(e=r.default.load("movies"))||void 0===e?void 0:e.find((function(e){return e.id.toString()===t})),o=n.poster_path,a=n.title,i=n.original_title,c=n.genres_ids,l=(n.release_date,n.vote_average),u=n.vote_count,d=n.popularity,f=n.overview,h=s("watched-list",t.toString())?'<button class="modal-movie__watched added" data-modal-add-to="watched">REMOVE FROM<br>WATCHED</button>':'<button class="modal-movie__watched" data-modal-add-to="watched">ADD TO<br>WATCHED</button>',v=s("queue-list",t.toString())?'<button class="modal-movie__queue added" data-modal-add-to="queue">REMOVE FROM<br>QUEUE</button>':'<button class="modal-movie__queue" data-modal-add-to="queue">ADD TO<br>QUEUE</button>';return'<img class="modal-movie__poster" src=\'https://image.tmdb.org/t/p/w500'.concat(o,"' alt=\"").concat(a,'" />\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">').concat(a,'</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span class="vote">').concat(l,'</span>\n                            <span>/</span>\n                            <span class="votes">').concat(u,'</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">').concat(d,'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">').concat(i,'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">').concat(c,'</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">').concat(f,'</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ').concat(h,"\n                    ").concat(v,"\n                </div>\n                </div>\n            </div>")}(e),n.classList.remove("is-hidden"))})),o.addEventListener("click",c),n.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void c();"BUTTON"===t.target.nodeName&&function(t){var e,n,o=(null===(e=t.dataset)||void 0===e?void 0:e.modalAddTo)+"-list",a=t.closest(".modal-movie").dataset.modalMovieId,i=null===(n=r.default.load("movies"))||void 0===n?void 0:n.find((function(t){return t.id.toString()===a})),c=r.default.load(o)||[];r.default.load(o)&&s(o,i.id.toString())?(t.classList.remove("added"),console.log(t.innerHTML),t.innerHTML=t.innerHTML.replace("REMOVE FROM","ADD TO"),c=c.filter((function(t){return t.id.toString()!=i.id}))):(c.push(i),console.log(t.innerHTML),t.innerHTML=t.innerHTML.replace("ADD TO","REMOVE FROM"),t.classList.add("added"));r.default.save(o,c)}(t.target)}))}))}();
//# sourceMappingURL=index.f51a9c35.js.map
