import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import image123 from "../img/gallery-pictures/IMG_3542.jpg"



        // let gallery = new SimpleLightbox('.gallery-item a', {
        //     captionsData: 'alt',
        //     captionDelay: 250
        // });




    
const images = [
  {
    original:
      image123,
    description: 'Hokkaido Flower',
  },
  {
    original:
      image123,
    description: 'Container Haulage Freight',
  },
  {
    original:
       image123,
    description: 'Aerial Beach View',
  },
  {
    original:
      image123,
    description: 'Flower Blooms',
  },
  {
    original:
      image123,
    description: 'Alpine Mountains',
  },
  {
    original:
     image123,
    description: 'Mountain Lake Sailing',
  },
  {
    original:
      image123,
    description: 'Alpine Spring Meadows',
  },
  {
    original:
      image123,
    description: 'Nature Landscape',
  },
  {
    original:
      image123,
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      image123,
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      image123,
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      image123,
    description: 'Lighthouse Coast Sea',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryItemsHTML = images.map(({ original, description }) => {
  return `
    <li class="gallery-item">
	<a class="gallery-link" data-fancybox="gallery" href=${original}>
		<img 
			class="gallery-image" 
			src=${original} 
			alt=${description}
			/>
	</a>
    </li>
  `;
}).join('');

galleryContainer.innerHTML = galleryItemsHTML;

Fancybox.bind("[data-fancybox]", {
        loop: true,
        animationEffect: "fade",
        hideScrollbar: false,
        Carousel: {
            transition: "slide",
        },
        caption: function (fancybox, slide) {
            return slide.thumbEl?.alt || "";
        },
    }
    )


// let gallery = new SimpleLightbox('.gallery-item a', {
//   captionsData: 'alt',
//   captionDelay: 250
// });