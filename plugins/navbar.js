export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      const scrollPosition = document.documentElement.scrollTop
      // const navBar = document.querySelector('#navbar')
      const navMenu = document.getElementById('navbar')
      const writeUs = document.getElementById('write-us')

      if (scrollPosition > 600) {
        /// Отображение навбара
        navMenu.classList.remove('bg-white/60', 'absolute')
        navMenu.classList.add('bg-white', 'fixed')
        /// Отображение врайт закладки

        // writeUs.classList.remove('invisible')
        // writeUs.classList.add('visible')
        
      } else {
        /// Отображение навбара
        navMenu.classList.remove('bg-white', 'fixed')
        navMenu.classList.add('bg-white/60', 'absolute')
        /// Отображение врайт закладки
        // writeUs.classList.remove('visible')
        // writeUs.classList.add('invisible')
      }

      // if (scrollPosition > 200) {
      //   navMenu.classList.add('fixed', 'bg-white')

      // } else {
      //   navMenu.classList.remove('fixed', 'bg-white')
      // }

    })    
  }
})
