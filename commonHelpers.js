import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as r}from"./assets/vendor-870f0eb5.js";const a=[{original:"./img/gallery-pictures/IMG_3542.jpg",description:"Hokkaido Flower"},{original:"./img/gallery-pictures/IMG_3543.jpg",description:"Container Haulage Freight"},{original:"./img/gallery-pictures/IMG_3544.jpg",description:"Aerial Beach View"},{original:"./img/gallery-pictures/IMG_3545.jpg",description:"Flower Blooms"},{original:"./img/gallery-pictures/IMG_3546.jpg",description:"Alpine Mountains"},{original:"./img/gallery-pictures/IMG_3547.jpg",description:"Mountain Lake Sailing"},{original:"./img/gallery-pictures/IMG_3548.jpg",description:"Alpine Spring Meadows"},{original:"./img/gallery-pictures/IMG_3549.jpg",description:"Nature Landscape"},{original:"./img/gallery-pictures/IMG_3550.jpg",description:"Lighthouse Coast Sea"},{original:"./img/gallery-pictures/IMG_3551.jpg",description:"Lighthouse Coast Sea"},{original:"./img/gallery-pictures/IMG_3552.jpg",description:"Lighthouse Coast Sea"},{original:"./img/gallery-pictures/IMG_3553.jpg",description:"Lighthouse Coast Sea"}],l=document.querySelector(".gallery"),g=a.map(({original:i,description:e})=>`
    <li class="gallery-item">
	<a class="gallery-link" href=${i}>
		<img 
			class="gallery-image" 
			src=${i} 
			alt=${e}
			/>
	</a>
    </li>
  `).join("");l.innerHTML=g;new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
