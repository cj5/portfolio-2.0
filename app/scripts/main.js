// console.log('Portfolio-2.0');

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
  // console.log('vp width: ', vpW);
  $('body').css('overflow-y', 'visible');

  let projImgW = $('.projects img').width();
  let projImgH = $('.projects img').height();
  projImgW = $('.projects img').width();
  projImgH = $('.projects img').height();
  $('.img-overlay').css('width', projImgW);
  $('.img-overlay').css('height', projImgH);

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
    // console.log('vp width: ', vpW);
    $('body').css('overflow-y', 'visible');

    let projImgW = $('.projects img').width();
    let projImgH = $('.projects img').height();
    $('.img-overlay').css('width', projImgW);
    $('.img-overlay').css('height', projImgH);

    alignMobProjCap = ((vpW - (projImgW - 2)) / 2) - 26;
    $('.mobile-project-caption').css('width', projImgW);

    $('.wrapper').css('display', 'none');
  }

  $(window).resize(function() {
    updateContainer();
  });

});

// ////////////////////
// // cellular automaton

let randomBinary = () => {
  return Math.round(Math.random())
}
randomBinary()

const row = document.querySelector('.row')

//creates first row with random class true or false
for (let i = 0; i <= 200; i++) {
  let div = document.createElement('div')
  document.querySelector('.row').appendChild(div)
  div.classList.add(randomBinary() ? 'true' : 'false')
  // console.log('row width: ', row.offsetWidth)
  // console.log('window width: ', window.innerWidth)
  if (row.offsetWidth >= window.innerWidth - 10) {
    break
  }
}

const duplicateRow = () => {
  let allRows = document.querySelectorAll('.row')
  let lastRow = allRows[allRows.length - 1]
  let cloneLastRow = lastRow.cloneNode(true)
  document.querySelector('.wrapper').appendChild(cloneLastRow)

  automatizeRow(lastRow, cloneLastRow)

  let wrapperHt = document.querySelector('.wrapper').offsetHeight
  // console.log('wrapperHt: ', wrapperHt)
  if (wrapperHt >= 500) {
    clearInterval(duplicateInterval)
  }
}
let duplicateInterval = setInterval(duplicateRow, 100)

function automatizeRow(prevRow, newRow) {
  for (let i = 0; i < prevRow.childNodes.length; i++) {
    let newDiv = newRow.childNodes[i]
    // console.log('—— newDiv_' + `${i}`, newDiv)
    let prevMid = prevRow.childNodes[i]
    let prevLeft = prevRow.childNodes[i - 1] || prevRow.childNodes[prevRow.childNodes.length - 1]
    let prevRight = prevRow.childNodes[i + 1] || prevRow.childNodes[0]
    // console.log('prevLeft', prevLeft)
    // console.log('prevMid', prevMid)
    // console.log('prevRight', prevRight)

    // ~~~~~~~~~~~~~~~~~~~~~~~
    // RULE 150
    if (prevLeft.classList.contains('true') &&
      prevMid.classList.contains('true') &&
      prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('true') &&
      prevMid.classList.contains('true') &&
      prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('true') &&
      prevMid.classList.contains('false') &&
      prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('true') &&
      prevMid.classList.contains('false') &&
      prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false') &&
      prevMid.classList.contains('true') &&
      prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false') &&
      prevMid.classList.contains('true') &&
      prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false') &&
      prevMid.classList.contains('false') &&
      prevRight.classList.contains('true')
    ) {
      newDiv.classList.add('true')
      newDiv.classList.remove('false')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
    if (prevLeft.classList.contains('false') &&
      prevMid.classList.contains('false') &&
      prevRight.classList.contains('false')
    ) {
      newDiv.classList.add('false')
      newDiv.classList.remove('true')
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~
  }
}