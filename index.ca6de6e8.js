var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("7EEHk");var i=a("5uEKZ");i=a("5uEKZ");const s=i.default.load("last visit popular"),o=i.default.load("last visit page"),r=i.default.load("last visit search");function d(){setTimeout((()=>{document.querySelectorAll(".placeholdify").forEach((e=>e.classList.remove("placeholdify")))}),2e3)}var c=a("bTcpz");i=a("5uEKZ"),c=a("bTcpz");const l=document.querySelector(".home-list"),u=document.querySelector(".spinner-loader");async function m(e){return(await fetch(`${e}`)).json()}function h(e){l.innerHTML="",i.default.save("last visit popular",e),m(`https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa&page=${e}`).then((({results:e})=>{const t=e.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:i,release_date:s,original_name:o,first_air_date:r})=>{let d=s,l=r;s&&(d=d.slice(0,4)),r&&(l=l.slice(0,4));return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${n}">\n                    <h2 class="card-info__title">${a||o}</h2>\n                    <p class="card-info_descr">\n                        <span>${(0,c.getGenres)(i,3)}</span>\n                        \n                        |\n                        <span>${d||l}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");u.classList.remove("is-hidden"),setTimeout((()=>{u.classList.add("is-hidden")}),2e3),d(),i.default.save("movies",e),l.insertAdjacentHTML("beforeend",t)}))}(async function(){return(await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=659c146febfafc17fd54baa17527f7fa&language=en-US")).json()})().then((({genres:e})=>{const t=[...e];localStorage.setItem("arrow",JSON.stringify(t))})),m("https://api.themoviedb.org/3/trending/movie/week?api_key=659c146febfafc17fd54baa17527f7fa").then((({results:e})=>{e.poster_path;const t=e.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:i,release_date:s,original_name:o,first_air_date:r})=>{let d=s,l=r;s&&(d=d.slice(0,4)),r&&(l=l.slice(0,4));return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${`https://image.tmdb.org/t/p/w500${t}`}" alt="${n}">\n                    <h2 class="card-info__title">${a||o}</h2>\n                    <p class="card-info_descr">\n                        <span>${(0,c.getGenres)(i,3)}</span>\n                        \n                        |\n                        <span>${d||l}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("");u.classList.remove("is-hidden"),setTimeout((()=>{u.classList.add("is-hidden")}),2e3),d(),i.default.save("movies",e),l.insertAdjacentHTML("beforeend",t)}));const p=document.querySelector(".js-search-form"),f=document.querySelector(".js-card-library"),g=document.querySelector('[data-index="1"]'),v=document.querySelector('[data-index="2"]'),x=document.querySelector('[data-index="3"]'),b=document.querySelector('[data-index="4"]'),C=document.querySelector('[data-index="5"]'),y=document.querySelector(".first-button"),L=document.querySelector(".last-button"),_=document.querySelector(".pagination-container"),N=document.querySelector(".arrow-right"),E=document.querySelector(".arrow-left"),S=document.querySelector("#previous"),q=document.querySelector("#after");_.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(k=Number(e.target.textContent)),S.hidden=!0,q.hidden=!0,e.target.classList.contains("pagination-button")&&(T.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&k<1e3&&(T.forEach((e=>e.classList.remove("pagination--current"))),g.classList.add("pagination--current"),g.textContent=Number(g.textContent)+5,v.textContent=Number(v.textContent)+5,x.textContent=Number(x.textContent)+5,b.textContent=Number(b.textContent)+5,C.textContent=Number(C.textContent)+5,k=g.textContent),e.target.classList.contains("arrow-left")&&k>=5&&(T.forEach((e=>e.classList.remove("pagination--current"))),g.textContent=Number(g.textContent)-5,v.textContent=Number(v.textContent)-5,x.textContent=Number(x.textContent)-5,b.textContent=Number(b.textContent)-5,C.textContent=Number(C.textContent)-5,C.classList.add("pagination--current"),k=C.textContent),e.target.classList.contains("first-button")&&(T.forEach((e=>e.classList.remove("pagination--current"))),g.textContent=1,v.textContent=2,x.textContent=3,b.textContent=4,C.textContent=5,g.classList.add("pagination--current"),k=g.textContent,E.hidden=!0,S.hidden=!0,y.hidden=!0),e.target.classList.contains("last-button")&&(T.forEach((e=>e.classList.remove("pagination--current"))),g.textContent=Number(L.textContent)-4,v.textContent=Number(L.textContent)-3,x.textContent=Number(L.textContent)-2,b.textContent=Number(L.textContent)-1,C.textContent=L.textContent,C.classList.add("pagination--current"),k=C.textContent,N.hidden=!0,q.hidden=!0),Number(k)>5?(E.hidden=!1,S.hidden=!1,y.hidden=!1):(E.hidden=!0,S.hidden=!0,y.hidden=!0),Number(k)<996&&(N.hidden=!1,q.hidden=!1),null!=f&&(f.innerHTML=""),window.scrollTo({top:0,behavior:"smooth"}),""!==p.value?H(k):h(k))}));let k=1,T=document.querySelectorAll(".pagination-button");S.hidden=!0,E.hidden=!0,y.hidden=!0;const $=e=>{Number(e)>5?(T.forEach((e=>e.classList.remove("pagination--current"))),g.textContent=Number(e)-2,v.textContent=Number(e)-1,x.textContent=Number(e),b.textContent=Number(e)+1,C.textContent=Number(e)+2,x.classList.add("pagination--current"),E.hidden=!1,S.hidden=!1,y.hidden=!1):(T.forEach((e=>e.classList.remove("pagination--current"))),2==Number(e)&&(v.textContent=2,v.classList.add("pagination--current")),3==Number(e)&&(v.textContent=3,x.classList.add("pagination--current")),4==Number(e)&&(v.textContent=4,b.classList.add("pagination--current")),5==Number(e)&&(v.textContent=5,C.classList.add("pagination--current")),E.hidden=!0,S.hidden=!0,y.hidden=!0)},w=document.querySelector(".form-field"),j=document.querySelector(".home-list"),B=document.querySelector(".spinner-loader"),M=document.querySelector(".search-result");let z="";function F(e){return e.map((({id:e,poster_path:t,title:n,original_title:a,genre_ids:i,release_date:s})=>{const o=t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/395x574/FFFFFF/FF001B?text=No+poster",r=new Date(s).getFullYear();return`<li class="home-card js-modal-open placeholdify" data-card-movie-id="${e}">\n            <a href="#" class="home-card__link">\n                <div class="card-info">\n                    <img class="home-card__img" src="${o}" alt="${n}">\n                    <h2 class="card-info__title">${a}</h2>\n                    <p class="card-info_descr">\n                        <span>${(0,c.getGenres)(i,3)}</span>\n                        |\n                        <span>${r}</span>\n                    </p>\n                </div>\n            </a>\n        </li>`})).join("")}async function O(e,t){const n=new URLSearchParams({api_key:"659c146febfafc17fd54baa17527f7fa",language:"en-US",query:e});return fetch(`https://api.themoviedb.org/3/search/movie?${n}&page=${t}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>({movies:e.results})))}function H(e){if(M.classList.add("is-hidden"),B.classList.remove("is-hidden"),z=null==r?void 0:r.movie,i.default.save("last visit page",e),""===z)return B.classList.add("is-hidden"),alert("Empty field");O(z,e).then((({movies:e})=>{if(0===e.length)return B.classList.add("is-hidden"),alert("Empty field");i.default.save("movies",e),j.innerHTML=F(e),setTimeout((()=>{B.classList.add("is-hidden")}),2e3),d()}))}null==w||w.addEventListener("submit",(e=>{if(e.preventDefault(),M.classList.add("is-hidden"),B.classList.remove("is-hidden"),z=w.elements.query.value.trim(),i.default.remove("last visit popular"),""===z)return B.classList.add("is-hidden"),alert("Empty field");O(z).then((({movies:e})=>{if(0===e.length)return B.classList.add("is-hidden"),void M.classList.remove("is-hidden");i.default.save("last visit search",{movie:z}),i.default.save("movies",e),j.innerHTML=F(e),setTimeout((()=>{B.classList.add("is-hidden")}),2e3),d(),T.forEach((e=>e.classList.remove("pagination--current"))),g.textContent=1,v.textContent=2,x.textContent=3,b.textContent=4,C.textContent=5,g.classList.add("pagination--current"),k=g.textContent,E.hidden=!0,S.hidden=!0,y.hidden=!0}))})),a("5RajV"),a("bTcpz"),a("5R1Ed"),a("5uEKZ");const U={comeBackBtn:document.querySelector("button.js-visit-back-btn"),visitModal:document.querySelector("[data-modal].dialog"),visitCloseBtn:document.querySelector("button.js-visit-close-btn")};let R;U.comeBackBtn.addEventListener("click",K),U.visitCloseBtn.addEventListener("click",G);const A=sessionStorage.getItem("mark");function G(){U.visitModal.classList.toggle("is-hidden"),!0===U.visitModal.classList.value.includes("hidden")&&(clearTimeout(R),U.comeBackBtn.removeEventListener("click",K),U.visitCloseBtn.removeEventListener("click",G))}function K(){let e=1;U.visitModal.classList.toggle("is-hidden"),s>1?(e=s,h(e),$(e)):(e=o,H(e),$(e),document.querySelector(".js-search-form").value=null==r?void 0:r.movie),!0===U.visitModal.classList.value.includes("hidden")&&(clearTimeout(R),U.comeBackBtn.removeEventListener("click",K),U.visitCloseBtn.removeEventListener("click",G))}if(console.log(A),null!==A||(G(),sessionStorage.setItem("mark",JSON.stringify("mark")),R=setTimeout((()=>{G()}),15e3)),"loading"in HTMLImageElement.prototype){console.log("Браузер підтримує lazyload");document.querySelectorAll('image[loading="lazy"]').forEach((e=>{e.src=e.dataset.src}))}else{console.log("Браузер не підтримує lazyload");const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",e.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",e.crossOrigin="anonymous",e.referrerpolicy="no-referrer",document.body.appendChild(e)}const Z=document.querySelectorAll("image[data-src]");function D(e){console.log("Зображення завантажилось")}console.log(Z),Z.forEach((e=>{e.addEventListener("load",D,{once:!0})}));
//# sourceMappingURL=index.ca6de6e8.js.map
