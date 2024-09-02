(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="a7d2ec52ab2717b6be947c1334145223",l="https://api.themoviedb.org/3";async function _(){const r=`${l}/movie/popular?api_key=${c}&sort_by=release_date.desc&page=1`;return await(await fetch(r)).json()}async function v(){const r=`${l}/genre/movie/list?api_key=${c}`;return await(await fetch(r)).json()}let i=null;async function y(r){i&&i.abort(),i=new AbortController;const{genreId:s,page:n}=r,a=`${l}/discover/movie?api_key=${c}&with_genres=${s}&page=${n}`,t=await(await fetch(a,{signal:i.signal})).json();return i=null,t}const f="https://image.tmdb.org/t/p/w300";function g(r){return r?`${f}${r}`:"./img/default_img.svg"}function p(r,s){const{title:n,poster_path:a,vote_average:e}=r,t=g(a),o=Math.round(e*10)/10;return s({name:n,img:t,rating:o})}function m(r){const{img:s,name:n,rating:a}=r;return`<li class="card">
            <img
              class="card__img"
              src='${s||"./img/default_img.jpg"}'
              alt="img of ${n}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${n}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${a/.1}%" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${a!==0?a:"no rating"}</p>
              </div>
            </div>
          </li>`}async function h(r,s,n=m){const a=await r(s),{results:e,total_results:t}=a;return{cards:e.map(u=>p(u,n)),maxFilms:t}}const d=document.querySelector(".contentLoad-loaderWrapper");function b(){setTimeout(()=>{d&&d.removeAttribute("active"),document.body.removeAttribute("lock")},1500)}export{y as a,v as b,h as c,_ as f,g,b as r};
