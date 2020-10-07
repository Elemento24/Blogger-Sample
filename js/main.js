$(document).ready(() => {

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // Click Event on Toggle Menu
  $toggleCollapse.click(() => {
    $nav.toggleClass('collapse');
  });

  // Owl-Carousel for Blog
  $('.owl-carousel').owlCarousel();

});