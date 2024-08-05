const getData = (onSuccess, onError) => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })

    .catch(() => {
      onError();
    });
};

const sendForm = (onSucces, onError, data) => {
  fetch(
    'https://32.javascript.htmlacadem.pro/kekstagram',
    {
      method: 'POST',
      body: data,
    },
  ).then((response) => {
    if (response.ok) {
      onSucces();
    } else {
      throw new Error();
    }
  })
    .catch(() => {
      onError();
    });
};


export {getData, sendForm};
