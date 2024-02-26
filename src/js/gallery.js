import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import image123 from "../img/large-pictures/1.jpg"



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
      "../img/gallery-pictures/IMG_3545.jpg",
    description: 'Flower Blooms',
  },
  {
    original:
      'img/gallery-pictures/IMG_3546.jpg',
    description: 'Alpine Mountains',
  },
  {
    original:
     'img/gallery-pictures/IMG_3547.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    original:
      'img/gallery-pictures/IMG_3548.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    original:
      'img/gallery-pictures/IMG_3549.jpg',
    description: 'Nature Landscape',
  },
  {
    original:
      'img/gallery-pictures/IMG_3550.jpg',
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      'img/gallery-pictures/IMG_3551.jpg',
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      'img/gallery-pictures/IMG_3552.jpg',
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

Fancybox.bind(".gallery a", {
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