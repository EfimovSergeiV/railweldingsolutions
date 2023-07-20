export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      const scrollPosition = document.documentElement.scrollTop
      // const navBar = document.querySelector('#navbar')
      const navMenu = document.getElementById('navbar')

      if (scrollPosition > 200) {
        navMenu.classList.remove('bg-white/60', 'absolute')
        navMenu.classList.add('bg-white', 'fixed')
        
      } else {
        navMenu.classList.remove('bg-white', 'fixed')
        navMenu.classList.add('bg-white/60', 'absolute')
      }

      // if (scrollPosition > 200) {
      //   navMenu.classList.add('fixed', 'bg-white')

      // } else {
      //   navMenu.classList.remove('fixed', 'bg-white')
      // }

    })    
  }
})
