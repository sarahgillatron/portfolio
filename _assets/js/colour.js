const sectionColourChange = document.querySelectorAll('section.colourChange')
const sectionPink = document.querySelector('section.pink')
const sectionYellow = document.querySelector('section.yellow')
const sectionOrange = document.querySelector('section.orange')

let ccOffset = [];

for(let i = 0; i < sectionColourChange.length; i++) {
  ccOffset.push(sectionColourChange[i].offsetTop - (window.innerHeight / 2))
}

document.addEventListener('scroll', function() {

  let pixels = window.pageYOffset;

  for(let i = 0; i < ccOffset.length; i++) {

    if(pixels >= ccOffset[i]) {

      if(sectionColourChange[i].classList.contains('pink')) {
        document.documentElement.style.setProperty('--main-colour', '248, 197, 193');
      }

      else if(sectionColourChange[i].classList.contains('yellow')) {
        document.documentElement.style.setProperty('--main-colour', '255, 176, 0');
      }

      else if(sectionColourChange[i].classList.contains('orange')) {
        document.documentElement.style.setProperty('--main-colour', '255, 137, 0');
      }
    }

  }

})
