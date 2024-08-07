const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const pictureUploadInput = document.querySelector('.img-upload__input');
const picturePreview = document.querySelector('.img-upload__preview img');
const effectPreview = document.querySelectorAll('.effects__preview');

pictureUploadInput.addEventListener('change', () => {
  const file = pictureUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    const fileSource = URL.createObjectURL(file);
    picturePreview.src = fileSource;
    effectPreview.forEach((preview) => {
      preview.style.backgroundImage = `url(${fileSource})`;
    });
  }
});
