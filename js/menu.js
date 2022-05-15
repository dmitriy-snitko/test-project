(() => {
  const menuBtn = document.getElementById('menu-btn')
  const siteNav = document.getElementById('site-nav')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open')
    siteNav.classList.toggle('is-open')
  })
})()