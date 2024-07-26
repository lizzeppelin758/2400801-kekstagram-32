import { EFFECT_PARAMETERS } from './constants.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const effectValue = imgUploadForm.querySelector('.effect-level__value');
const EFFECT__START_VALUE = 100;


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: EFFECT__START_VALUE,
  step: 1,
  connect: 'lower',
});

