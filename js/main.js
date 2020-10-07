const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
}

$(document).ready(() => {

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // Click Event on Toggle Menu
  $toggleCollapse.click(() => {
    $nav.toggleClass('collapse');
  });

  // Owl-Carousel for Blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive
  });

  // Click to Scroll Top
  $('.move-up span').click(() => {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

});