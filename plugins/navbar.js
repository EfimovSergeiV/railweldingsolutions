export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      const scrollPosition = document.documentElement.scrollTop
      // const navBar = document.querySelector('#navbar')
      const navMenu = document.getElementById('navbar')

      if (scrollPosition > 100) {
        navMenu.classList.remove('bg-white/50')
        navMenu.classList.add('bg-white', 'fixed')
        
      } else {
        navMenu.classList.remove('bg-white', 'fixed')
        navMenu.classList.add('bg-white/50')
      }

      // if (scrollPosition > 200) {
      //   navMenu.classList.add('fixed', 'bg-white')

      // } else {
      //   navMenu.classList.remove('fixed', 'bg-white')
      // }

    })    
  }
})

// handleScroll () {
//   const navMenu = document.getElementById('navbar')
//   const navContainer = document.getElementById('nav-container')
//   if (window.scrollY > 50) {
//     navMenu.classList.add('bg-white/60')
//     navContainer.classList.add('fixed')
//     // this.show = true
//   } else {
//     // this.show = false
//     navMenu.classList.remove('bg-white/60')
//     navContainer.classList.remove('fixed')
//   }
// }