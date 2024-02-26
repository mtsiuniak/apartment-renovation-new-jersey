import"./assets/modulepreload-polyfill-3cfb730f.js";import{C as n}from"./assets/vendor-fab6ff31.js";const i="/apartment-renovation-new-jersey/assets/IMG_3542-3179e25a.jpg",r=[{original:i,description:"Hokkaido Flower"},{original:i,description:"Container Haulage Freight"},{original:i,description:"Aerial Beach View"},{original:i,description:"Flower Blooms"},{original:i,description:"Alpine Mountains"},{original:i,description:"Mountain Lake Sailing"},{original:i,description:"Alpine Spring Meadows"},{original:i,description:"Nature Landscape"},{original:i,description:"Lighthouse Coast Sea"},{original:i,description:"Lighthouse Coast Sea"},{original:i,description:"Lighthouse Coast Sea"},{original:i,description:"Lighthouse Coast Sea"}],t=document.querySelector(".gallery"),l=r.map(({original:a,description:e})=>`
    <li class="gallery-item">
	<a class="gallery-link" data-fancybox="gallery" href=${a}>
		<img 
			class="gallery-image" 
			src=${a} 
			alt=${e}
			/>
	</a>
    </li>
  `).join("");t.innerHTML=l;n.bind("[data-fancybox]",{loop:!0,animationEffect:"fade",hideScrollbar:!1,Carousel:{transition:"slide"},caption:function(a,e){var o;return((o=e.thumbEl)==null?void 0:o.alt)||""}});
//# sourceMappingURL=commonHelpers.js.map
