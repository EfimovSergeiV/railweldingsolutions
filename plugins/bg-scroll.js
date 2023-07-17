export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      const scrollTop = (window.pageYOffset || document.documentElement.scrollTop)/500;
      const background = document.querySelector('#background-page');

      if (background) {
        background.style.backgroundPositionY = `${0 + scrollTop}px`;
      }
    })    
  }
})
