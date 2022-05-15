(() => {
  const menuBtn = document.getElementById('menu-btn')
  const siteNav = document.getElementById('site-nav')
  const body = document.querySelector('body')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open')
    siteNav.classList.toggle('is-open')
    body.classList.toggle('is-open')
  })
})()