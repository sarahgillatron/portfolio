let testimonialBlocks = document.querySelectorAll('.testimonial')
let prev = document.querySelector('.carousel-nav__prev')
let next = document.querySelector('.carousel-nav__next')
let dots = document.querySelectorAll('.anchors.notfixed li')

let slideCounter = 0;


prev.addEventListener('click', function() {
  counterDown();
  slideActivation();
})

next.addEventListener('click', function() {
  counterUp();
  slideActivation();
})



function slideActivation() {
  for(let i = 0; i < testimonialBlocks.length; i++) {
    testimonialBlocks[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  testimonialBlocks[slideCounter].classList.add('active');
  dots[slideCounter].classList.add('active')

}



function counterUp() {
  slideCounter++

  if(slideCounter >= testimonialBlocks.length) {
    slideCounter = 0;
  }
}

function counterDown() {
  slideCounter--

  if(slideCounter < 0) {
    slideCounter = testimonialBlocks.length - 1;
  }
}
