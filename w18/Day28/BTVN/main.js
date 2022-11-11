const $prev = $('.prev');
const $next = $('.next');
const $images = $('.item');
const $dots = $('.dot')
const totalImages = $images.length;
let index = 0;

$prev.click(function() {
    nextImage('prev');
})

$next.click(function() {
    nextImage('next');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
  setStyle(index)
}

function dotControl(n) {
    index = n
    setStyle(index)
}

function setStyle(index) {
    for(let i = 0; i < $images.length; i++) {
        $images.removeClass('main')
  }
  $images[index].classList.add('main');

  for (let i = 0; i < $dots.length; i++) {
    $dots.removeClass('active')
  }
  $dots[index].classList.add('active')
}



