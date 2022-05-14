(() => {
  const closeBtn = document.querySelector('.warn-box__close-btn')
  const warnBox = document.querySelector('.warn-box')

  closeBtn.addEventListener('click', () => {
    warnBox.style.display = 'none'
  })
})()
