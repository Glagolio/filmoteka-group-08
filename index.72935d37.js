function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("7EEHk",(function(e,t){})),a.register("1TPJ0",(function(t,o){e(t.exports,"movieCards",(function(){return v})),e(t.exports,"loadStoragePage",(function(){return f}));var n=a("5uEKZ"),i=a("ijW3m");const s=document.querySelector(".form-field"),r=document.querySelector(".home-list"),d=document.querySelector(".spinner-loader"),l=document.querySelector(".search-result");let c="",u=1;function v(e){return e.map((({id:e,poster_path:t,title:o,original_title:n,genres_ids:a,release_date:i})=>`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster"}" alt="${o}">\n                    <h2 class="card-info__title">${n}</h2>\n                    <p class="card-info_descr">\n                        <span>${a}</span>\n                        |\n                        <span>${new Date(i).getFullYear()}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`)).join("")}async function m(e,t){const o=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${o}&page=${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({movies:e.results})))}function f(){if(l.classList.add("is-hidden"),d.classList.remove("is-hidden"),c=null===i.storageLastSearchText||void 0===i.storageLastSearchText?void 0:i.storageLastSearchText.movie,u=null===i.storagePage||void 0===i.storagePage?void 0:i.storagePage.value,""===c)return d.classList.add("is-hidden"),alert("Empty field");m(c,u).then((({movies:e})=>{if(0===e.length)return d.classList.add("is-hidden"),void l.classList.remove("is-hidden");n.default.save("movies",e),r.innerHTML=v(e),d.classList.add("is-hidden")}))}null==s||s.addEventListener("submit",(e=>{if(e.preventDefault(),l.classList.add("is-hidden"),d.classList.remove("is-hidden"),c=s.elements.query.value.trim(),""===c)return d.classList.add("is-hidden"),alert("Empty field");m(c).then((({movies:e})=>{if(0===e.length)return d.classList.add("is-hidden"),void l.classList.remove("is-hidden");n.default.save(i.STORAGE_MOVIES_SEARCH,{movie:c}),n.default.save("movies",e),r.innerHTML=v(e),d.classList.add("is-hidden"),setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3)}))}))})),a.register("5uEKZ",(function(t,o){e(t.exports,"default",(function(){return n}));var n={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}}})),a.register("ijW3m",(function(t,o){e(t.exports,"STORAGE_MOVIES_SEARCH",(function(){return r})),e(t.exports,"storagePage",(function(){return d})),e(t.exports,"storageLastSearchText",(function(){return l}));var n=a("5uEKZ"),i=a("2nhTy");const s="last visit page",r="last visit search",d=n.default.load(s),l=n.default.load(r);n.default.save(s,{value:i.currentPage})})),a.register("2nhTy",(function(t,o){e(t.exports,"currentPage",(function(){return r}));document.querySelector(".js-card");const n=document.getElementById("pagination"),a=document.querySelector(".arrow_left"),i=document.querySelector(".arrow_right");document.querySelector(".header-warning");let s,r=2;function d(e){1===r?a.classList.add("disabled-arrow"):a.classList.remove("disabled-arrow"),r===e?i.classList.add("disabled-arrow"):i.classList.remove("disabled-arrow")}null==n||n.addEventListener("click",(function(e){if("BUTTON"!=e.target.tagName)return;d(s)}))})),a.register("5RajV",(function(e,t){})),a.register("bTcpz",(function(e,t){var o=a("5uEKZ");const n=document.querySelector("[data-modal]"),i=document.querySelector("[data-modal-close]");function s(e){"Escape"===e.code&&d()}function r(e,t){var n;return null===(n=o.default.load(t))||void 0===n?void 0:n.find((t=>t.id.toString()===e))}function d(){document.addEventListener("keydown",s),document.body.style.overflow="",n.classList.add("is-hidden")}function l(e,t){var n;return null===(n=o.default.load(e))||void 0===n?void 0:n.some((e=>e.id.toString()===t))}(document.querySelector(".home-container")||document.querySelector(".library-container")).addEventListener("click",(e=>{e.target.closest(".js-modal-open")&&(e.preventDefault(),function(e){document.addEventListener("keydown",s),n.querySelector(".modal-movie").dataset.modalMovieId=e,n.querySelector(".modal-movie").innerHTML=function(e){const{poster_path:t,title:o,original_title:n,genres_ids:a,release_date:i,vote_average:s,vote_count:d,popularity:c,overview:u}=r(e,"movies")||r(e,"watched-list")||r(e,"queue-list");let v=l("watched-list",(e=e.toString()).toString())?"added":"";const m=`<div class="modal-movie__btn movie-btn movie-btn--watched ${v}" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>`;v=l("queue-list",e.toString())?"added":"";const f=`<div class="modal-movie__btn movie-btn movie-btn--queue ${v}" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>`;return`<div class="modal-movie__poster">\n            <img src='https://image.tmdb.org/t/p/w500${t}' alt="${o}" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${o}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">${s.toFixed(1)}</span>\n                            <span>/</span>\n                            <span class="votes">${d}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${c.toFixed(0)}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${n}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">${a}</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${u}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ${m}\n                    ${f}\n                </div>\n                </div>\n            </div>`}(e),document.body.style.overflow="hidden",n.classList.remove("is-hidden");const{vote_average:t}=r(e,"movies")||r(e,"watched-list")||r(e,"queue-list");!function(e,t){const o=2500,n=.1;let a=document.querySelector("#out"),i=0,s=Math.round(o/(e/n)),r=setInterval((()=>{i+=n,i>=e&&clearInterval(r),a.innerHTML=i.toFixed(1)}),s)}(t)}(e.target.closest(".js-modal-open").dataset.cardMovieId))})),i.addEventListener("click",d),n.addEventListener("click",(function(e){if(e.currentTarget===e.target)return void d();"BUTTON"===e.target.nodeName&&function(e){var t,n;const a=(null===(t=e.dataset)||void 0===t?void 0:t.modalAddTo)+"-list",i=e.closest(".modal-movie").dataset.modalMovieId,s=null===(n=o.default.load("movies"))||void 0===n?void 0:n.find((e=>e.id.toString()===i));let r=o.default.load(a)||[];o.default.load(a)&&l(a,s.id.toString())?(e.classList.remove("added"),r=r.filter((e=>e.id.toString()!=s.id))):(r.push(s),e.classList.add("added"));o.default.save(a,r)}(e.target.closest(".movie-btn"))}))}));
//# sourceMappingURL=index.72935d37.js.map
