// form
$('.auth__block').on('click', function (e) {
    e.preventDefault();
    $('.form').toggleClass('form-active');
  });

$('form').submit(function (e) {
    e.preventDefault();
});
  
// slider
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
    });
});

