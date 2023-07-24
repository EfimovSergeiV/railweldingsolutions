export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      const scrollTop = (window.pageYOffset || document.documentElement.scrollTop)/100;
      const background = document.querySelector('#repair');

      if (background) {
        background.style.backgroundPositionY = `${0 + scrollTop}px`;
      }
    })    
  }
})
