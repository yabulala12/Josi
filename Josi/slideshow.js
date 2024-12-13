const images = [
  'IMG_20241209_202047_524.jpg',
  'IMG_20241209_202046_783.jpg',
  'IMG_20241209_202046_858.jpg',
  'IMG_20241209_202047_214.jpg',
  'IMG_20241209_202047_371.jpg',
  'IMG_20241209_202046_923.jpg',
  'IMG_20241209_202057_328.jpg',
  'IMG_20241209_202047_341.jpg',
  'IMG_20241209_202057_249.jpg',
  'IMG_20241209_202047_349.jpg',
  'IMG_20241209_202057_160.jpg',

];

let currentIndex = 0;

const slideshow = document.getElementById('slideshow');
slideshow.style.backgroundImage = `url(${images[currentIndex]})`;

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
});
