const horizontalScroll = document.querySelector('main')
const sections = document.querySelectorAll('section').length
let scrollValue = 0
let isCtrlPressed = false
window.addEventListener('wheel', (event) => {
  const scrollSpeed = horizontalScroll.clientWidth / sections
  if (event.deltaY > 0) {
    window.scroll(window.scrollX + 500, 0)
  } else {
   
    window.scroll(window.scrollX - 500, 0)
  }
})

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  header.style.transform = `translateX(${window.scrollX}px)`
  footer.style.transform = `translateX(${window.scrollX}px)`
})
