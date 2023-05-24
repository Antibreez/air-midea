$('.header__burger').on('click', function() {
  $('.header__top').addClass('js-show');
  $('body').addClass('body_modal')
})

let supportToggleMenu = false;

$('.app-nav__item-list.js-nav-list > a').on('click', function(e) {
  if ($(window).outerWidth() < 769) {
    e.preventDefault()
    supportToggleMenu ? $(this).parent().removeClass('app-nav__item-list--active') : $(this).parent().addClass('app-nav__item-list--active')
    supportToggleMenu = !supportToggleMenu
  }
})

$('.header__top-nav-close').on('click', function() {
  $('.header__top').removeClass('js-show');
  $('body').removeClass('body_modal')
})

$('.header__button-catalog').on('click', function() {
  if (!$(this).hasClass('header__button-catalog--active')) {
    $('body').addClass('body_modal')
  } else {
    $('body').removeClass('body_modal')
  }
})