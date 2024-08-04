const filters = document.querySelector('.img-filters');
const defaultSortingButton = filters.querySelector('#filter-default');
const randomSortingButton = filters.querySelector('#filter-random');
const discussSortingButton = filters.querySelector('#filter-discussed');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};


export {showFilters};
