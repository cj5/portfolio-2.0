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
  $('.img-overlay').css('width', projImgW);
  $('.img-overlay').css('height', projImgH);

  let headerHt = $('header').outerHeight();
  // console.log('headerHt: ' ,headerHt);
  
  $(window).scroll(function() {
    // console.log('px scrolled from top: ', $(window).scrollTop());
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

  $('#mobile-nav-menu p.close-x, #mobile-nav-menu a').click(function() {
    $('#mobile-nav-menu').css('transform', 'translateX(200%)');
  });

  let alignMobProjCap = ((vpW - (projImgW - 2)) / 2) - 24;
  console.log('proj img W: ', projImgW);
  console.log('align cap: ', alignMobProjCap);
  // $('.mobile-project-caption').css('left', alignMobProjCap);
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
    console.log('proj img W: ', projImgW);
    console.log('align cap: ', alignMobProjCap);
    // $('.mobile-project-caption').css('left', alignMobProjCap);
    $('.mobile-project-caption').css('width', projImgW);
  }

  $(window).resize(function() {
    updateContainer();
  });

});