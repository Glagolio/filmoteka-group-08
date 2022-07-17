var e={save:(e,t)=>{try{const a=JSON.stringify(t);localStorage.setItem(e,a)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};const t=document.querySelector(".form-field"),a=document.querySelector(".home-list"),o=document.querySelector(".spinner-loader");let n="";t.addEventListener("submit",(s=>{if(s.preventDefault(),o.classList.remove("is-hidden"),n=t.elements.query.value.trim(),""===n)return o.classList.add("is-hidden"),alert("Empty field");(function(e){const t=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({movies:e.results})))})(n).then((({movies:t})=>{e.save("movies",t),a.innerHTML=function(e){return e.map((({id:e,poster_path:t,title:a,original_title:o,genres_ids:n,release_date:s})=>`<li class="home-card js-modal-open" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${a}">\n                    <h2 class="card-info__title">${o}</h2>\n                    <p class="card-info_descr">\n                        <span>${n}</span>\n                        |\n                        <span>${s}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`)).join("")}(t),o.classList.add("is-hidden")}))}));(async function(e,t,a){return(await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${e}&media_type=${t}&time_window=${a}`)).json()})("659c146febfafc17fd54baa17527f7fa","movie","week").then((({results:t})=>{e.save("movies",t)}));e.load("Start on last visit page?");const s=document.querySelector("[data-modal]"),i=document.querySelector("[data-modal-close]");function d(e){"Escape"===e.code&&l()}function l(){document.addEventListener("keydown",d),s.classList.add("is-hidden")}document.querySelector(".home-container").addEventListener("click",(t=>{var a;t.target.closest(".js-modal-open")&&(a=t.target.closest(".js-modal-open").dataset.cardMovieId,document.addEventListener("keydown",d),s.querySelector(".modal-movie").dataset.modalMovieId=a,s.querySelector(".modal-movie").innerHTML=function(t){var a;const{poster_path:o,title:n,original_title:s,genres_ids:i,release_date:d,vote_average:l,vote_count:r,popularity:c,overview:m}=null===(a=e.load("movies"))||void 0===a?void 0:a.find((e=>e.id.toString()===t));return`<img class="modal-movie__poster" src='https://image.tmdb.org/t/p/w500${o}' alt="${n}" />\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">${n}</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span class="vote">${l}</span>\n                            <span>/</span>\n                            <span class="votes">${r}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">${s}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Genre</td>\n                        <td class="movie-table__info">${i}</td>\n                    </tr>\n                </table>\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">${m}</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    <button class="modal-movie__watched" data-modal-add-to="watched">ADD TO<br>WATCHED</button>\n                    <button class="modal-movie__queue" data-modal-add-to="queue">ADD TO <br> QUEUE</button>\n                </div>\n            </div>`}(a),s.classList.remove("is-hidden"))})),i.addEventListener("click",l),s.addEventListener("click",(function(t){if(t.currentTarget===t.target)return void l();"BUTTON"===t.target.nodeName&&function(t){var a,o;const n=(null===(a=t.dataset)||void 0===a?void 0:a.modalAddTo)+"-list",s=t.closest(".modal-movie").dataset.modalMovieId,i=null===(o=e.load("movies"))||void 0===o?void 0:o.find((e=>e.id.toString()===s));let d=e.load(n)||[];console.dir(d),e.load(n)&&e.load(n).some((e=>e.id===i.id))?(console.log("has"),d=d.filter((e=>e.id.toString()!=i.id))):(console.log("add"),d.push(i));e.save(n,d)}(t.target)}));
//# sourceMappingURL=index.5c02acc2.js.map
