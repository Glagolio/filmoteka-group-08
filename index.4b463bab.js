var e={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};const t=document.querySelector(".form-field"),n=document.querySelector(".home-list"),a=document.querySelector(".spinner-loader");let o="";t.addEventListener("submit",(i=>{if(i.preventDefault(),a.classList.remove("is-hidden"),o=t.elements.query.value.trim(),""===o)return a.classList.add("is-hidden"),alert("Empty field");(async function(e){const t=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({movies:e.results})))})(o).then((({movies:t})=>{e.save("movies",t),n.innerHTML=function(e){return e.map((({id:e,poster_path:t,title:n,original_title:a,genres_ids:o,release_date:i})=>`<li class="home-card js-modal-open" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${n}">\n                    <h2 class="card-info__title">${a}</h2>\n                    <p class="card-info_descr">\n                        <span>${o}</span>\n                        |\n                        <span>${new Date(i).getFullYear()}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`)).join("")}(t),a.classList.add("is-hidden")}))}));const i=document.querySelector(".home-list");(async function(){return(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=659c146febfafc17fd54baa17527f7fa&language=en-US")).json()})().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))})),async function(e,t,n){return(await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${e}&media_type=${t}&time_window=${n}`)).json()}("659c146febfafc17fd54baa17527f7fa","movie","week").then((({results:t})=>{t.poster_path;const n=t.map((({id:t,poster_path:n,title:a,original_title:o,genre_ids:i,release_date:s,original_name:d,first_air_date:r})=>{e.load("arrow").find((e=>{}));let l=s,c=r;s&&(l=l.slice(0,4)),r&&(c=c.slice(0,4));return`<li class="home-card js-modal-open" data-card-movie-id="${t}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${n}`}" alt="${a}">\n                    <h2 class="card-info__title">${o||d}</h2>\n                    <p class="card-info_descr">\n                        <span>${i}</span>\n                        |\n                        <span>${l||c}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");e.save("movies",t),i.insertAdjacentHTML("beforeend",n)}));const s=e.load("last visit page");currentPage=2,currentPage>1&&currentPage!==(null==s?void 0:s.value)&&(e.remove("last visit page"),e.save("last visit page",{value:currentPage}));const d=document.querySelector("[data-modal]"),r=document.querySelector("[data-modal-close]");function l(e){"Escape"===e.code&&c()}function c(){document.addEventListener("keydown",l),document.body.style.overflow="",d.classList.add("is-hidden")}function v(t,n){var a;return null===(a=e.load(t))||void 0===a?void 0:a.some((e=>e.id.toString()===n))}document.querySelector(".home-container").addEventListener("click",(t=>{var n;t.target.closest(".js-modal-open")&&(t.preventDefault(),n=t.target.closest(".js-modal-open").dataset.cardMovieId,document.addEventListener("keydown",l),d.querySelector(".modal-movie").dataset.modalMovieId=n,d.querySelector(".modal-movie").innerHTML=function(t){var n;const{poster_path:a,title:o,original_title:i,genres_ids:s,release_date:d,vote_average:r,vote_count:l,popularity:c,overview:m}=null===(n=e.load("movies"))||void 0===n?void 0:n.find((e=>e.id.toString()===t));let u=v("watched-list",(t=t.toString()).toString())?"added":"";const _=`<div class="modal-movie__btn movie-btn movie-btn--watched ${u}" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>`;return u=v("queue-list",t.toString())?"added":"",`<div class="modal-movie__poster">\n            <img src='https://image.tmdb.org/t/p/w500${a}' alt="${o}" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${o}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span class="vote">${r}</span>\n                            <span>/</span>\n                            <span class="votes">${l}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${i}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">${s}</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${m}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ${_}\n                    <div class="modal-movie__btn movie-btn movie-btn--queue ${u}" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>\n                </div>\n                </div>\n            </div>`}(n),document.body.style.overflow="hidden",d.classList.remove("is-hidden"))})),r.addEventListener("click",c),d.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void c();"BUTTON"===t.target.nodeName&&function(t){var n,a;const o=(null===(n=t.dataset)||void 0===n?void 0:n.modalAddTo)+"-list",i=t.closest(".modal-movie").dataset.modalMovieId,s=null===(a=e.load("movies"))||void 0===a?void 0:a.find((e=>e.id.toString()===i));let d=e.load(o)||[];e.load(o)&&v(o,s.id.toString())?(t.classList.remove("added"),d=d.filter((e=>e.id.toString()!=s.id))):(d.push(s),t.classList.add("added"));e.save(o,d)}(t.target.closest(".movie-btn"))}));const m={comeBackButton:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitClose:document.querySelector("button.js-dialog-close"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};function u(){currentPage=s.value,_()}function _(){m.visitModal.classList.toggle("is-hidden"),!0===m.visitModal.classList.value.includes("hidden")&&(clearTimeout(timerId),m.comeBackButton.removeEventListener("click",u),m.visitClose.removeEventListener("click",_),m.visitCloseBtn.removeEventListener("click",_))}m.comeBackButton.addEventListener("click",u),m.visitClose.addEventListener("click",_),m.visitCloseBtn.addEventListener("click",_),1===currentPage||void 0===s||(_(),timerId=setTimeout((()=>{_()}),15e3));
//# sourceMappingURL=index.4b463bab.js.map
