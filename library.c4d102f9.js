!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return i[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,i){t[e]=i},e.parcelRequired7c6=n),n("fJh0j"),n("6c9nX"),n("qikvZ"),n("5xtVg");var r=n("kitKc"),l=document.querySelector(".library-container"),o=document.querySelector(".library-list"),s="header__btn-active";function a(e,i){var t=localStorage.getItem(e);if(!t)return function(){var e=l.classList.contains("lib-bg-img");if(o.firstChild||e){if(!o.firstChild&&e)return;l.classList.remove("lib-bg-img")}else l.classList.add("lib-bg-img")}(),void alert("Your list is empty, please fill it");var n=JSON.parse(t);i.innerHTML=(0,r.movieCards)(n)}function c(e){e.classList.contains(s)||e.classList.add(s)}function d(e){e.innerHTML=""}var u=document.querySelector(".js-watched-btn"),f=document.querySelector(".js-queue-btn");a("queue-list",o),f.addEventListener("click",(function(){d(o),a("queue-list",o),c(f)})),u.addEventListener("click",(function(){d(o),a("watched-list",o),c(u)}))}();
//# sourceMappingURL=library.c4d102f9.js.map