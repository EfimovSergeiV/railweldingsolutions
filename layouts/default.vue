<template>
  <div class=" bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300">
    <div id="background-page" class=" bg-fixed bg-no-repeat bg-[center_100px] bg-cover bg-[url('images/footer-bg.webp')] dark:bg-[url('images/footer-dark-bg.webp')] min-h-screen">
      <div class="container mx-auto">
        <AppHeader />
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>