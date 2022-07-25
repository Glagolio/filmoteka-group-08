!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("fJh0j",(function(e,t){})),a.register("6c9nX",(function(e,t){})),a.register("5xtVg",(function(t,n){e(t.exports,"getGenres",(function(){return m}));var o=a("jzQFI"),r=a("7lxfF"),i=document.querySelector("[data-modal]"),l=document.querySelector("[data-modal-close]");function d(e){"Escape"===e.code&&s()}function c(e,t){var n;return null===(n=o.default.load(t))||void 0===n?void 0:n.find((function(t){return t.id.toString()===e}))}function s(){o.default.remove("current-movie"),document.addEventListener("keydown",d),document.body.style.overflow="",i.classList.add("is-hidden"),(0,r.checkWhatToLoad)(o.default.load("activeInStorage"))}function u(e,t,n){var a=o.default.load(e)||[];n.classList.remove("added"),a=a.filter((function(e){return e.id.toString()!=t.id})),o.default.save(e,a)}function v(e,t){var n;return null===(n=o.default.load(e))||void 0===n?void 0:n.some((function(e){return e.id.toString()===t}))}function m(e,t){for(var n=o.default.load("arrow"),a=[],r=0;r<e.length&&r<t;r++){var i=!0,l=!1,d=void 0;try{for(var c,s=n[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;e[r]===u.id&&a.push(u.name)}}catch(e){l=!0,d=e}finally{try{i||null==s.return||s.return()}finally{if(l)throw d}}}return e.length>t&&(a[t-1]="Other"),a.join(", ")}document.querySelector(".movies-container").addEventListener("click",(function(e){var t;e.target.closest(".js-modal-open")&&(e.preventDefault(),t=e.target.closest(".js-modal-open").dataset.cardMovieId,document.addEventListener("keydown",d),i.querySelector(".modal-movie").dataset.modalMovieId=t,i.querySelector(".modal-movie").innerHTML=function(e){var t=c(e,"movies")||c(e,"watched-list")||c(e,"queue-list");o.default.save("current-movie",t);var n=t.poster_path,a=t.title,r=t.original_title,i=t.genre_ids,l=(t.release_date,t.vote_average),d=t.vote_count,s=t.popularity,u=t.overview;e=e.toString();var f=n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",g=v("watched-list",e.toString())?"added":"",_='<div class="modal-movie__btn movie-btn movie-btn--watched '.concat(g,'" data-modal-add-to="watched">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>WATCHED</button>\n                            <button class="add">ADD TO<br>WATCHED</button>\n                          </div>\n                        </div>');g=v("queue-list",e.toString())?"added":"";var p='<div class="modal-movie__btn movie-btn movie-btn--queue '.concat(g,'" data-modal-add-to="queue">\n                          <div class="movie-btn__inner">\n                            <button class="remove">REMOVE FROM<br>QUEUE</button>\n                            <button class="add">ADD TO<br>QUEUE</button>\n                          </div>\n                        </div>');return'<div class="modal-movie__poster">\n            <img src=\''.concat(f,"' alt=\"").concat(a,'" />\n          </div>\n            <div class="modal-movie__info">\n                <h2 class="modal-movie__title">').concat(a,'</h2>\n                <table class="movie-table">\n                    <tr>\n                        <td class="movie-table__title">Vote / Votes</td>\n                        <td class="movie-table__info">\n                            <span id="out" class="vote">').concat(l.toFixed(1),"</span>\n                            ").concat(d?' <span>/</span><span class="votes">'.concat(d,"</span>"):"",'\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Popularity</td>\n                        <td class="movie-table__info">').concat(s.toFixed(0),'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie-table__title">Original Title</td>\n                        <td class="movie-table__info">').concat(r,"</td>\n                    </tr>\n                    <tr>\n                        ").concat(i.length?'<td class="movie-table__title">Genre</td>\n                            <td class="movie-table__info">'.concat(m(i,i.length),"</td>"):"",'\n                    </tr>\n                </table>\n                <div class="modal-movie__box">\n                <div class="modal-movie__about">\n                    <p class="modal-movie__description">ABOUT</p>\n                    <p class="modal-movie__text">').concat(u||"no description.",'</p>\n                </div>\n                <div class="modal-movie__buttons">\n                    ').concat(_,"\n                    ").concat(p,"\n                </div>\n                </div>\n            </div>")}(t),document.body.style.overflow="hidden",i.classList.remove("is-hidden"),function(e,t){var n=2500,o=.1,a=document.querySelector("#out"),r=0,i=Math.round(n/(e/o)),l=setInterval((function(){(r+=o)>=e&&clearInterval(l),a.innerHTML=r.toFixed(1)}),i)}(i.querySelector("#out").textContent))})),l.addEventListener("click",s),i.addEventListener("click",(function(e){if(e.currentTarget===e.target)return void s();"BUTTON"===e.target.nodeName&&(t=e.target.closest(".movie-btn"),a=(null===(n=t.dataset)||void 0===n?void 0:n.modalAddTo)+"-list",r="current-movie",i=o.default.load(r),o.default.load(a)&&v(a,i.id.toString())?u(a,i,t):(a.includes("watch")&&v("queue-list",i.id.toString())&&(console.log("already in queue"),u("queue-list",i,t.parentElement.querySelector(".movie-btn--queue"))),function(e,t,n){var a=o.default.load(e)||[];a.push(t),n.classList.add("added"),o.default.save(e,a)}(a,i,t)));var t,n,a,r,i}))})),a.register("jzQFI",(function(t,n){e(t.exports,"default",(function(){return o}));var o={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{null!==localStorage.getItem(e)&&localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}}})),a.register("7lxfF",(function(t,n){e(t.exports,"checkWhatToLoad",(function(){return m}));var o=a("1Vkri"),r=a("jzQFI"),i=document.querySelector(".library-list"),l=(document.querySelector(".spinner-loader"),"header__btn-active"),d=document.querySelector(".js-watched-btn"),c=document.querySelector(".js-queue-btn"),s=document.querySelector(".library-container"),u="queue-list",v="watched-list";function m(e){s&&(console.log(r.default.load("activeInStorage")),"q"==e&&(c.classList.add(l),f(),p()),"w"==e&&(d.classList.add(l),g(),p()))}function f(){b(u,c),c.classList.add(l),d.classList.remove(l),r.default.save("activeInStorage","q")}function g(){b(v,d),c.classList.remove(l),d.classList.add(l),r.default.save("activeInStorage","w")}r.default.save("activeInStorage","q"),m(r.default.load("activeInStorage")),p(),null==c||c.addEventListener("click",f),null==d||d.addEventListener("click",g);localStorage.getItem("queue-list"),localStorage.getItem("watched-list");var _=localStorage.getItem("arrow");JSON.parse(_);function p(){s&&(console.log(null==i.firstChild),null==i.firstChild?s.classList.add("lib-bg-img"):s.classList.remove("lib-bg-img"))}function b(e,t){var n;console.log(t,e),s&&(void 0===r.default.load(e)||0===r.default.load(e).length?(t.classList.remove(".header__btn-active"),t.classList.add(".header__btn-noactive"),i.innerHTML=""):(t.classList.add(".header__btn-active"),n=e,i.innerHTML=(0,o.markUpWithGenres)(r.default.load(n))),p())}})),a.register("1Vkri",(function(t,n){e(t.exports,"markUpWithGenres",(function(){return r}));var o=a("5xtVg");function r(e){return e.map((function(e){var t=e.id,n=e.poster_path,a=e.title,r=e.original_title,i=e.genre_ids,l=e.release_date,d=e.original_name,c=e.first_air_date,s=l,u=c;l&&(s=s.slice(0,4)),c&&(u=u.slice(0,4));var v="https://image.tmdb.org/t/p/w500".concat(n);return'<li class="home-card js-modal-open" data-card-movie-id="'.concat(t,'">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="').concat(v,'" alt="').concat(a,'">\n                    <h2 class="card-info__title">').concat(r||d,'</h2>\n                    <p class="card-info_descr">\n                        ').concat(i.length?"<span>".concat((0,o.getGenres)(i,3),"</span>"):"","\n                        \n                        |\n                        <span>").concat(s||u,"</span>\n                    </p>\n                </div>\n            </a>\n        </li>")})).join("")}a("7lxfF")})),a.register("gXLk6",(function(e,t){var n={modal:document.querySelector("[data-modal-team]"),closeBtn:document.querySelector(".modal__closeBtn"),openModalTeam:document.querySelector(".footer__rights-link")};function o(e){"Escape"===e.code&&a()}function a(){document.removeEventListener("keydown",o),n.modal.classList.add("is-hidden")}console.log(n.openModalTeam),n.openModalTeam.addEventListener("click",(function(e){e.preventDefault(),n.modal.classList.toggle("is-hidden"),document.addEventListener("keydown",o)})),n.closeBtn.addEventListener("click",a),n.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}))}))}();
//# sourceMappingURL=library.a4968b90.js.map