import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// =============== render markup ===============

const galleryEl = document.querySelector('.gallery');

const markupImage = createImageMarkup(galleryItems);

function createImageMarkup(images) {
    return images.map(image => `
    <li class='gallery__item'>
    <a class='gallery__link' href='${image.original}'>
    <img class ='gallery__image'
    src=${image.preview}
    alt='${image.description}'>
    </a>
    </li>`).join('');
}

galleryEl.innerHTML = markupImage;

// =============== /render markup ===============

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
     captionDelay: 250 
});