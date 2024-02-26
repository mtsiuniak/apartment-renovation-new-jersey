import"./assets/modulepreload-polyfill-3cfb730f.js";import{C as l}from"./assets/vendor-fab6ff31.js";const i="/apartment-renovation-new-jersey/assets/1-fe490b8e.jpg",o=[{original:i,description:"Hokkaido Flower"},{original:i,description:"Container Haulage Freight"},{original:i,description:"Aerial Beach View"},{original:"../img/gallery-pictures/IMG_3545.jpg",description:"Flower Blooms"},{original:"img/gallery-pictures/IMG_3546.jpg",description:"Alpine Mountains"},{original:"img/gallery-pictures/IMG_3547.jpg",description:"Mountain Lake Sailing"},{original:"img/gallery-pictures/IMG_3548.jpg",description:"Alpine Spring Meadows"},{original:"img/gallery-pictures/IMG_3549.jpg",description:"Nature Landscape"},{original:"img/gallery-pictures/IMG_3550.jpg",description:"Lighthouse Coast Sea"},{original:"img/gallery-pictures/IMG_3551.jpg",description:"Lighthouse Coast Sea"},{original:"img/gallery-pictures/IMG_3552.jpg",description:"Lighthouse Coast Sea"},{original:i,description:"Lighthouse Coast Sea"}],n=document.querySelector(".gallery"),t=o.map(({original:e,description:a})=>`
    <li class="gallery-item">
	<a class="gallery-link" data-fancybox="gallery" href=${e}>
		<img 
			class="gallery-image" 
			src=${e} 
			alt=${a}
			/>
	</a>
    </li>
  `).join("");n.innerHTML=t;l.bind(".gallery a",{loop:!0,animationEffect:"fade",hideScrollbar:!1,Carousel:{transition:"slide"},caption:function(e,a){var r;return((r=a.thumbEl)==null?void 0:r.alt)||""}});
//# sourceMappingURL=commonHelpers.js.map
