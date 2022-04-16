// jQueary Libery  
(function($) {
/*
var clickMe = $('.lines'),
    scroll = $('.nav-menu'),
    block = $('.block');


clickMe.on('click', function() {
    if( scroll.css('right') == '-350px' ) {
        scroll.animate({right: 0}, 400);
        block.css({ backgroundColor: '#fff' });
        clickMe.addClass('toggle-change');
        clickMe.animate({right: 300}, 400)
    }
    else {
        scroll.animate({right: -350}, 400);
        block.css({ backgroundColor: '#6a097d' });
        clickMe.removeClass('toggle-change');
        clickMe.animate({right: 0}, 400);
    }
});
*/

var menu = $('.navigation'),
    icon = $('.bar'),
    overlay = $('<div/>', { class: 'overlay'});

overlay.appendTo('body').hide();

$('.icons').on('click', function() {
    $(this).toggleClass('change');
  });
  
  $('.icons').on('click', function() {
    if( $('.icons').hasClass('change') ) {
      menu.animate({right: 0 }, 350);
      $('.icons').animate({right: 180}, 350);
      icon.css({backgroundColor: '#BE3D3D' });
       overlay.fadeIn(600);
    }
    else {
      menu.animate({right: -350 }, 350);
      $('.icons').animate({right: 0}, 350);
      icon.css({backgroundColor: '#e19600' });
      overlay.fadeOut(600);
    }
  });









    


})(jQuery);
