$('.navbar__burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('navbar__burger-active');
    $('.navbar__links').toggleClass('navbar__links-active');
    $('.navbar').toggleClass('navbar-active')
  });