import{S as n}from"./vendor-c9def49e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const s=[{original:"./img/gallery-pictures/IMG_3542.jpg",description:"Hokkaido Flower"},{original:"./img/gallery-pictures/IMG_3543.jpg",description:"Container Haulage Freight"},{original:"./img/gallery-pictures/IMG_3544.jpg",description:"Aerial Beach View"},{original:"./img/gallery-pictures/IMG_3545.jpg",description:"Flower Blooms"},{original:"./img/gallery-pictures/IMG_3546.jpg",description:"Alpine Mountains"},{original:"./img/gallery-pictures/IMG_3547.jpg",description:"Mountain Lake Sailing"},{original:"./img/gallery-pictures/IMG_3548.jpg",description:"Alpine Spring Meadows"},{original:"./img/gallery-pictures/IMG_3549.jpg",description:"Nature Landscape"},{original:"./img/gallery-pictures/IMG_3550.jpg",description:"Lighthouse Coast Sea"},{original:"./img/gallery-pictures/IMG_3551.jpg",description:"Lighthouse Coast Sea"},{original:"./img/gallery-pictures/IMG_3552.jpg",description:"Lighthouse Coast Sea"},{original:"./img/gallery-pictures/IMG_3553.jpg",description:"Lighthouse Coast Sea"}],g=document.querySelector(".gallery"),c=s.map(({original:t,description:r})=>`
    <li class="gallery-item">
	<a class="gallery-link" href=${t}>
		<img 
			class="gallery-image" 
			src=${t} 
			alt=${r}
			/>
	</a>
    </li>
  `).join("");g.innerHTML=c;new n(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=gallery-c7c49a33.js.map
