//global variables
var bottomLink = document.querySelector('.invisible-link--bottom');
var topLink = document.querySelector('.invisible-link--top');
var main = document.querySelector('main')
var sideNav = document.querySelectorAll('.anchors ul li')
var counter = 1;

if(bottomLink) {

if ('ontouchstart' in window) {

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;


    bottomLink.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    topLink.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    bottomLink.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false);

    topLink.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false);

    function handleGesture() {

        if (touchendY < touchstartY) {
          counter++;
          scrollDown();
          counterCheck();
          console.log('Swiped up');
        }

        if (touchendY > touchstartY) {
          counter--;
          scrollUp();
          counterCheck();
          console.log('Swiped down');
        }

    }
  }



else {
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

}
//always bring page to top scroll position when browser refreshed.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}




var mq = window.matchMedia( "(min-width: 550px)" );
if (mq.matches) {
//change the active state on the side nav
function sideNavActive() {
  //remove active from any sideNav
  for(var i = 0; i < sideNav.length; i++) {
    sideNav[i].classList.remove('active');
  }
  //add active to correct sideNav
    sideNav[counter - 1].classList.add('active');
}
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
}
