$(document).ready(() => {

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // Click Event on Toggle Menu
  $toggleCollapse.click(() => {
    $nav.toggleClass('collapse');
  });

});