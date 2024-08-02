$(window).on('scroll', function() {
  let header = $('header');
  if ($(this).scrollTop() > 0) {
      header.addClass('bg-body-tertiary border-bottom border-dark ');
  } else {
      header.removeClass('bg-body-tertiary border-bottom border-dark');
  }
});
$(`.hamburger-menu`).on("click", function () {
  $(`.hamburger-menu`).toggleClass('change');
  $(`.menu-header`).toggleClass('menu-header-close');
})
$(window).on('load', function(){
  $('.banner-content-left').slick({
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    pauseOnFocus: false,
    loop: true,
    autoplaySpeed: 2000,
  });
})

		