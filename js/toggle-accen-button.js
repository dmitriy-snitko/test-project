(() => {
  const pricing = document.querySelector('.pricing')
  const label = pricing.querySelectorAll('label')
  const buttons = pricing.querySelectorAll('button')
  const input = pricing.querySelectorAll('input')

  label.forEach(item => {
    item.addEventListener('click', () => {
      const button = item.querySelector('button')
      removeAccentBtn()
      button.classList.add('button--accent')
    })
  })

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      input[idx].checked = true
    })
  })

  function removeAccentBtn() {
    buttons.forEach(button => {
      button.classList.remove('button--accent')
    })
  }
})()
