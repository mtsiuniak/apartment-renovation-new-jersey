import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    original:
      "../img/gallery-pictures/IMG_3542.jpg",
    description: 'Hokkaido Flower',
  },
  {
    original:
     "./img/gallery-pictures/IMG_3543.jpg",
    description: 'Container Haulage Freight',
  },
  {
    original:
      "/src/img/gallery-pictures/IMG_3544.jpg",
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
      'img/gallery-pictures/IMG_3553.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// const galleryContainer = document.querySelector('.gallery');

// const galleryItemsHTML = images.map(({ original, description }) => {
//   return `
//     <li class="gallery-item">
// 	<a class="gallery-link" href=${original}>
// 		<img 
// 			class="gallery-image" 
// 			src=${original} 
// 			alt=${description}
// 			/>
// 	</a>
//     </li>
//   `;
// }).join('');

// galleryContainer.innerHTML = galleryItemsHTML;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});