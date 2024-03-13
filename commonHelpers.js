import"./assets/mob-menu-82f1e644.js";import{C as i}from"./assets/vendor-1e6f2856.js";const o="/assets/IMG_3542-3179e25a.jpg",t="/assets/IMG_3543-030f8f67.jpg",n="/assets/IMG_3544-ef55b624.jpg",g="/assets/IMG_3545-50475299.jpg",r="/assets/IMG_3546-1f42defa.jpg",c="/assets/IMG_3547-47ff4e04.jpg",l="/assets/IMG_3548-e0db446d.jpg",p="/assets/IMG_3549-7a70edfe.jpg",d="/assets/IMG_3550-3cb682f2.jpg",m="/assets/IMG_3551-5443b2c3.jpg",h="/assets/IMG_3552-8dc43dbc.jpg",f="/assets/IMG_3553-a48d4f17.jpg",M="/assets/IMG_3554-17c9ab4f.jpg",u="/assets/IMG_3555-8fe1b69d.jpg",j="/assets/IMG_3556-a8496d58.jpg",G="/assets/IMG_3557-bc802224.jpg",I=[{original:o,description:"Hokkaido Flower"},{original:t,description:"Container Haulage Freight"},{original:n,description:"Aerial Beach View"},{original:g,description:"Flower Blooms"},{original:r,description:"Alpine Mountains"},{original:c,description:"Mountain Lake Sailing"},{original:l,description:"Alpine Spring Meadows"},{original:p,description:"Nature Landscape"},{original:d,description:"Lighthouse Coast Sea"},{original:m,description:"Lighthouse Coast Sea"},{original:h,description:"Lighthouse Coast Sea"},{original:f,description:"Lighthouse Coast Sea"},{original:M,description:"Lighthouse Coast Sea"},{original:u,description:"Lighthouse Coast Sea"},{original:j,description:"Lighthouse Coast Sea"},{original:G,description:"Lighthouse Coast Sea"}],b=document.querySelector(".photos-gallery"),_=I.map(({original:s})=>`
    <li class="gallery-item">
	<a class="gallery-link" data-fancybox="gallery" href=${s}>
		<img 
			class="gallery-image" 
			src=${s} 
			alt=""
			/>
	</a>
    </li>
  `).join("");try{b.insertAdjacentHTML("beforeend",_)}catch{console.log("not a problem")}i.bind("[data-fancybox]",{loop:!0,animationEffect:"fade",hideScrollbar:!1,Carousel:{transition:"slide"},caption:function(s,e){var a;return((a=e.thumbEl)==null?void 0:a.alt)||""}});
//# sourceMappingURL=commonHelpers.js.map
