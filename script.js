
const slides = document.querySelector('.slides');
let index = 0;

document.querySelector('.prev').addEventListener('click', () => {
  index = (index === 0) ? 2 : index - 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
  index = (index === 2) ? 0 : index + 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
});
