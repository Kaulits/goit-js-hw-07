import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

// =============== render markup ===============

// for version (canceled)
// for (let i = 0; i < 9; i += 1) {
//     markup += `<li class='gallery__item js_item'></li>`;
// }
// /for version

const galleryEl = document.querySelector('.gallery');

const markupImage = createImageMarkup(galleryItems);

function createImageMarkup(images) {
    return images.map(image => `
    <li class='gallery__item'>
    <a class='gallery__link' href='#'>
    <img class ='gallery__image'
    src=${image.preview}
    data-source=${image.original}
    alt=${image.description}>
    </a>
    </li>`).join('');
}

galleryEl.innerHTML = markupImage;

// =============== /render markup ===============

// =============== delegate the gallery + bigImage ===============


galleryEl.addEventListener('click', onImageClick);


function onImageClick(e) {
    e.preventDefault();
     const bigImage = e.target.dataset.source;
    const instance = basicLightbox.create(`
     <img src="${bigImage}" width="1280" height="855">
`)
    if (e.target.classList.contains('gallery__image')) {
instance.show()
    }

    document.addEventListener('keydown', escapeImg);

    function escapeImg(e) {
        if (e.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', escapeImg);
        }
    }
}

// =============== /delegate the gallery + bigImage ===============

