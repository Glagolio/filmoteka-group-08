var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n("7EEHk"),n("1TPJ0"),n("5RajV");var o=n("5uEKZ");const a=document.querySelector(".home-list");(async function(){return(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=659c146febfafc17fd54baa17527f7fa&language=en-US")).json()})().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))}));const s=o.default.load("arrow");(async function(e){return(await fetch(`${e}`)).json()})("https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa").then((({results:e})=>{e.poster_path;const t=e.map((({id:e,poster_path:t,title:i,original_title:n,genre_ids:o,release_date:a,original_name:l,first_air_date:r})=>{const c=[];let d="";for(const e of o)for(const t of s)e===t.id&&(c.push(t.name),o.length>2&&(d=",Other"));let f=a,u=r;a&&(f=f.slice(0,4)),r&&(u=u.slice(0,4));return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${i}">\n                    <h2 class="card-info__title">${n||l}</h2>\n                    <p class="card-info_descr">\n                        <span>${c.splice(0,3)}  ${d}</span>\n                        \n                        |\n                        <span>${f||u}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3),o.default.save("movies",e),a.insertAdjacentHTML("beforeend",t)})),n("ijW3m"),n("bTcpz"),n("2nhTy"),n("5R1Ed"),n("5uEKZ");var l=n("ijW3m"),r=n("2nhTy"),c=n("1TPJ0");const d={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};let f;function u(){d.visitModal.classList.toggle("is-hidden"),!0===d.visitModal.classList.value.includes("hidden")&&(clearTimeout(f),d.comeBackBtn.removeEventListener("click",v),d.visitCloseBtn.removeEventListener("click",u))}function v(){d.visitModal.classList.toggle("is-hidden"),(0,c.loadStoragePage)(),!0===d.visitModal.classList.value.includes("hidden")&&(clearTimeout(f),d.comeBackBtn.removeEventListener("click",v),d.visitCloseBtn.removeEventListener("click",u))}d.comeBackBtn.addEventListener("click",v),d.visitCloseBtn.addEventListener("click",u),1==r.currentPage||void 0===(null===l.storagePage||void 0===l.storagePage?void 0:l.storagePage.value)||(u(),f=setTimeout((()=>{u()}),15e3));
//# sourceMappingURL=index.059ed0e1.js.map