console.log('Portfolio-2.0');

$(document).ready(function(){  

  // smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });

  $('body').css('overflow-y', 'hidden');
  let vpW = $(window).width();
  console.log('vp width: ', vpW);
  $('body').css('overflow-y', 'visible');

  let projImgW = $('.projects img').width();
  let projImgH = $('.projects img').height();
  $(window).on('load', function() {
    let projImgW = $('.projects img').width();
    let projImgH = $('.projects img').height();
    $('.img-overlay').css('width', projImgW);
    $('.img-overlay').css('height', projImgH);
  });

  let headerHt = $('header').outerHeight();  
  
  $(window).scroll(function() {    
    if ($(window).scrollTop() >= headerHt) {
      $('#sticky-header').css('top', 0);
    } else {
      $('#sticky-header').css('top', -200);
    }
  });

  $('#navicon p').click(function() {
    $('#mobile-nav-menu').css('transform', 'none');
  });

  $('#mobile-nav-menu p.close-x, #mobile-nav-menu a').click(function() {
    $('#mobile-nav-menu').css('transform', 'translateX(200%)');
  });

  let alignMobProjCap = ((vpW - (projImgW - 2)) / 2) - 24;
  $('.mobile-project-caption').css('width', projImgW);


  function updateContainer() {
    $('body').css('overflow-y', 'hidden');
    let vpW = $(window).width();
    console.log('vp width: ', vpW);
    $('body').css('overflow-y', 'visible');

    let projImgW = $('.projects img').width();
    let projImgH = $('.projects img').height();  
    $('.img-overlay').css('width', projImgW);
    $('.img-overlay').css('height', projImgH);

    let alignMobProjCap = ((vpW - (projImgW - 2)) / 2) - 26;
    $('.mobile-project-caption').css('width', projImgW);

    $('.wrapper').css('display', 'none');    
  }

  $(window).resize(function() {
    updateContainer();
  });

});