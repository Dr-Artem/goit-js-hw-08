import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery')

const imgEl = galleryItems
	.map(({preview, original, description}) => 
		`
			<a class="gallery__item" href="${original}">
				<img class="gallery__image" src=${preview} data-source="${original}" alt=${description}></img>
			</a>
		`)
	.join("");

gallery.insertAdjacentHTML("beforeend", imgEl);


new SimpleLightbox('.gallery a', {
	captionsData: "alt", captionDelay: 250,
});
