import LocomotiveScroll from 'locomotive-scroll'

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    draggingClass: 'has-scroll-dragging',
    repeat: true,
  })
})
