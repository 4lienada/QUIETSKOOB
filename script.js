var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 7,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

