const navToggler = document.querySelector('.nav__toggler')
const navMenu = document.querySelector('.nav__menu')

navToggler.addEventListener('click', function() {
  navMenu.classList.toggle('open')
})
