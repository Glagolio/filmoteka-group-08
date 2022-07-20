function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("7EEHk",(function(e,t){})),a.register("1TPJ0",(function(t,n){e(t.exports,"movieCards",(function(){return c}));var o=a("5uEKZ");const r=document.querySelector(".form-field"),i=document.querySelector(".home-list"),d=document.querySelector(".spinner-loader"),s=document.querySelector(".search-result");let l="";function c(e){return e.map((({id:e,poster_path:t,title:n,original_title:o,genres_ids:a,release_date:r})=>`<li class="home-card js-modal-open" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster"}" alt="${n}">\n                    <h2 class="card-info__title">${o}</h2>\n                    <p class="card-info_descr">\n                        <span>${a}</span>\n                        |\n                        <span>${new Date(r).getFullYear()}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`)).join("")}null==r||r.addEventListener("submit",(e=>{if(e.preventDefault(),s.classList.add("is-hidden"),d.classList.remove("is-hidden"),l=r.elements.query.value.trim(),""===l)return d.classList.add("is-hidden"),alert("Empty field");(async function(e){const t=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({movies:e.results})))})(l).then((({movies:e})=>{if(0===e.length)return d.classList.add("is-hidden"),void s.classList.remove("is-hidden");o.default.save("movies",e),i.innerHTML=c(e),d.classList.add("is-hidden")}))}))})),a.register("5uEKZ",(function(t,n){e(t.exports,"default",(function(){return o}));var o={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}}})),a.register("5RajV",(function(e,t){})),a.register("ijW3m",(function(t,n){e(t.exports,"storagePage",(function(){return d}));var o=a("5uEKZ"),r=a("2nhTy");console.log(r.currentPage);const i="last visit page",d=o.default.load(i);r.currentPage>1&&r.currentPage!==(null==d?void 0:d.value)&&(o.default.remove(i),o.default.save(i,{value:r.currentPage}))})),a.register("2nhTy",(function(t,n){e(t.exports,"currentPage",(function(){return d}));document.querySelector(".js-card");const o=document.getElementById("pagination"),a=document.querySelector(".arrow_left"),r=document.querySelector(".arrow_right");document.querySelector(".header-warning");let i,d=2;function s(e){1===d?a.classList.add("disabled-arrow"):a.classList.remove("disabled-arrow"),d===e?r.classList.add("disabled-arrow"):r.classList.remove("disabled-arrow")}null==o||o.addEventListener("click",(function(e){if("BUTTON"!=e.target.tagName)return;s(i)}))})),a.register("bTcpz",(function(e,t){var n=a("5uEKZ");const o=document.querySelector("[data-modal]"),r=document.querySelector("[data-modal-close]");function i(e){"Escape"===e.code&&s()}function d(e,t){var o;return null===(o=n.default.load(t))||void 0===o?void 0:o.find((t=>t.id.toString()===e))}function s(){document.addEventListener("keydown",i),document.body.style.overflow="",o.classList.add("is-hidden")}function l(e,t){var o;return null===(o=n.default.load(e))||void 0===o?void 0:o.some((e=>e.id.toString()===t))}(document.querySelector(".home-container")||document.querySelector(".library-container")).addEventListener("click",(e=>{e.target.closest(".js-modal-open")&&(e.preventDefault(),function(e){document.addEventListener("keydown",i),o.querySelector(".modal-movie").dataset.modalMovieId=e,o.querySelector(".modal-movie").innerHTML=function(e){const{poster_path:t,title:n,original_title:o,genres_ids:a,release_date:r,vote_average:i,vote_count:s,popularity:c,overview:u}=d(e,"movies")||d(e,"watched-list")||d(e,"queue-list");let v=l("watched-list",(e=e.toString()).toString())?"added":"";const m=`<div class="modal-movie__btn movie-btn movie-btn--watched ${v}" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>`;v=l("queue-list",e.toString())?"added":"";const f=`<div class="modal-movie__btn movie-btn movie-btn--queue ${v}" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>`;return`<div class="modal-movie__poster">\n            <img src='https://image.tmdb.org/t/p/w500${t}' alt="${n}" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${n}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">${i.toFixed(1)}</span>\n                            <span>/</span>\n                            <span class="votes">${s}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${c.toFixed(0)}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${o}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">${a}</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${u}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ${m}\n                    ${f}\n                </div>\n                </div>\n            </div>`}(e),document.body.style.overflow="hidden",o.classList.remove("is-hidden");const{vote_average:t}=d(e,"movies")||d(e,"watched-list")||d(e,"queue-list");!function(e,t){const n=2500,o=.1;let a=document.querySelector("#out"),r=0,i=Math.round(n/(e/o)),d=setInterval((()=>{r+=o,r>=e&&clearInterval(d),a.innerHTML=r.toFixed(1)}),i)}(t)}(e.target.closest(".js-modal-open").dataset.cardMovieId))})),r.addEventListener("click",s),o.addEventListener("click",(function(e){if(e.currentTarget===e.target)return void s();"BUTTON"===e.target.nodeName&&function(e){var t,o;const a=(null===(t=e.dataset)||void 0===t?void 0:t.modalAddTo)+"-list",r=e.closest(".modal-movie").dataset.modalMovieId,i=null===(o=n.default.load("movies"))||void 0===o?void 0:o.find((e=>e.id.toString()===r));let d=n.default.load(a)||[];n.default.load(a)&&l(a,i.id.toString())?(e.classList.remove("added"),d=d.filter((e=>e.id.toString()!=i.id))):(d.push(i),e.classList.add("added"));n.default.save(a,d)}(e.target.closest(".movie-btn"))}))}));
//# sourceMappingURL=index.c3419906.js.map
