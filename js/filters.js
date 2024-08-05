import { renderThumbnails } from './thumbnail.js';
import { getRandomArrayElement } from './utils.js';

const filters = document.querySelector('.img-filters');
const defaultSortingButton = filters.querySelector('#filter-default');
const randomSortingButton = filters.querySelector('#filter-random');
const discussSortingButton = filters.querySelector('#filter-discussed');
const RANDOM_LENGTH = 10;

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const showDefaultSorting = (pictures) => {
  defaultSortingButton.classList.add('img-filters__button--active');
  discussSortingButton.classList.remove('img-filters__button--active');
  randomSortingButton.classList.remove('img-filters__button--active');
  renderThumbnails(pictures);
};

const showRandomSorting = (pictures) => {
  console.log(pictures);
  defaultSortingButton.classList.remove('img-filters__button--active');
  discussSortingButton.classList.remove('img-filters__button--active');
  randomSortingButton.classList.add('img-filters__button--active');
  const randomPictures = [];
  for (let i = 0; i < RANDOM_LENGTH; i++) {
    randomPictures.push(getRandomArrayElement(pictures));
  }
  console.log(randomPictures);
  renderThumbnails(randomPictures);
};


const showDiscussSorting = (pictures) => {
  defaultSortingButton.classList.remove('img-filters__button--active');
  discussSortingButton.classList.add('img-filters__button--active');
  randomSortingButton.classList.remove('img-filters__button--active');
  const quantityComments = pictures.map((picture) => ({id:picture.id, comments: picture.comments.length}));
  const sortedQuantityComments = quantityComments.sort((a,b) => {
    if (a.comments > b.comments) {
      return -1;
    }
    if (a.comments < b.comments) {
      return 1;
    }
    return 0;
  });
  console.log(sortedQuantityComments);
  const popularPictures = sortedQuantityComments.map((picture) => pictures[picture.id]);
  console.log(popularPictures);
  renderThumbnails(popularPictures);
};

const setFilterClick = (pictures) => {
  console.log(pictures);
  filters.addEventListener('click', (evt) => {
    if (evt.target === defaultSortingButton) {
      showDefaultSorting(pictures);
    }
    if (evt.target === randomSortingButton) {
      showRandomSorting(pictures);
    }
    if (evt.target === discussSortingButton) {
      showDiscussSorting(pictures);
    }
  });
};


export {showFilters, setFilterClick};
