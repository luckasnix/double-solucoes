const mySiema = new Siema({
  duration: 800,
  easing: 'ease-out'
})
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
prevBtn.addEventListener(
  'click',
  () => {
    mySiema.prev()
  }
)
nextBtn.addEventListener(
  'click',
  () => {
    mySiema.next()
  }
)

const menu = document.querySelector('.header-wrapper .menu')
const hamburger = document.querySelector('.header-wrapper .hamburger')

let isOpen = false

function toggleMenu() {
  if (isOpen) {
    menu.classList.remove('menu-opened')
    isOpen = false
  } else {
    menu.classList.add('menu-opened')
    isOpen = true
  }
}

hamburger.addEventListener('click', toggleMenu)

function navigation(evt) {
  if (evt.target.tagName == 'A') {
    toggleMenu()
  }
}

menu.addEventListener('click', navigation)