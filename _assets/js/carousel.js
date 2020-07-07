//global variables
var bottomLink = document.querySelector('.invisible-link--bottom');
var topLink = document.querySelector('.invisible-link--top');
var main = document.querySelector('main')
var sideNav = document.querySelectorAll('.anchors ul li')
var counter = 1;

//always bring page to top scroll position when browser refreshed.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


//click and move down
bottomLink.addEventListener('click', function() {
  counter++;
  scrollDown();
  counterCheck();
  sideNavActive();
})

//click and move up
topLink.addEventListener('click', function() {
  counter--;
  scrollUp();
  counterCheck();
  sideNavActive();
})







//change the active state on the side nav
function sideNavActive() {
  //remove active from any sideNav
  for(var i = 0; i < sideNav.length; i++) {
    sideNav[i].classList.remove('active');
  }
  //add active to correct sideNav
    sideNav[counter - 1].classList.add('active');
}


//check the counter to see if there is a next/prev slide
function counterCheck() {
  if(counter <= 1) {
   topLink.style.display = 'none';
  }

  else {
     topLink.style.display = 'block';
  }

  if(counter >= 3) {
   bottomLink.style.display = 'none';
  }

  else {
    bottomLink.style.display = 'block';
  }
}


//scroll page up a full page height amount
function scrollUp() {
  window.scrollBy({
    top: -window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}


//scroll page down a full page height amount
function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}
