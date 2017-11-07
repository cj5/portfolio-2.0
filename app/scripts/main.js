console.log('Portfolio-2.0');

$(document).ready(function(){  

  // smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });

  let projectImageWidth = $('.projects img').width();
  let projectImageHeight = $('.projects img').height();
  $('.img-overlay').css('width', projectImageWidth);
  $('.img-overlay').css('height', projectImageHeight);

  let headerHt = $('header').outerHeight();
  console.log('headerHt: ' ,headerHt);
  
  $(window).scroll(function() {
    console.log('px scrolled from top: ', $(window).scrollTop());
    if ($(window).scrollTop() >= headerHt) {
      $('#sticky-header').css('top', 0);
    } else {
      $('#sticky-header').css('top', -200);
    }
  });

  // for navicon transition
  // $('.lines-button').click(function() {
  //     $(this).toggleClass('close');
  //     $('.menu').toggleClass('open');           
  // });

  $('#navicon p').click(function() {
    $('#mobile-nav-menu').css('transform', 'none');
  });

  $('#mobile-nav-menu p.close, #mobile-nav-menu a').click(function() {
    $('#mobile-nav-menu').css('transform', 'translateX(200%)');
  });

  function updateContainer() {
    let projectImageWidth = $('.projects img').width();
    let projectImageHeight = $('.projects img').height();  
    $('.img-overlay').css('width', projectImageWidth);
    $('.img-overlay').css('height', projectImageHeight);
  }

  $(window).resize(function() {
    updateContainer();
  });

});