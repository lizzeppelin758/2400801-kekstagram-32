import { isEscapeKey } from './utils.js';

const ERROR_SHOW_TIMER = 5000;
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const loadErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const loadSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');


const dataErrorMessage = dataErrorTemplate.cloneNode(true);
const loadErrorMessage = loadErrorTemplate.cloneNode(true);
const loadSuccessMessage = loadSuccessTemplate.cloneNode(true);

const loadErrorButton = loadErrorMessage.querySelector('.error__button');
const loadSuccessButton = loadSuccessMessage.querySelector('.success__button');


const closeErrorByEscape = (returnedHandler) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      loadSuccessMessage.remove();
      loadErrorMessage.remove();
      returnedHandler();
    }
  });
};

const closeSuccessByEscape = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      loadSuccessMessage.remove();
      loadErrorMessage.remove();
    }
  });
};

const showDataError = () => {
  body.append(dataErrorMessage);
  setTimeout(() => {
    dataErrorMessage.remove();
  }, ERROR_SHOW_TIMER);
};

const showLoadError = (cancellHandler, returnHandler) => {
  body.append(loadErrorMessage);
  cancellHandler();
  closeErrorByEscape(returnHandler);
};

const showLoadSuccess = () => {
  body.append(loadSuccessMessage);
  closeSuccessByEscape();
};

loadSuccessMessage.addEventListener('click', (evt) => {
  if (evt.target === loadSuccessMessage || evt.target === loadSuccessButton) {
    loadSuccessMessage.remove();
  }
}
);

loadErrorMessage.addEventListener('click', (evt) => {
  if (evt.target === loadErrorMessage || evt.target === loadErrorButton) {
    loadErrorMessage.remove();
  }
}
);

export {showDataError, showLoadError, showLoadSuccess};
