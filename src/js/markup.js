import galleryItems from '../menu.json';
import itemsTemplate from '../templates/gallery_item.hbs';

const refs = {
  galleryList: document.querySelector('.js-menu'),
};
const markup = itemsTemplate(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', markup);
