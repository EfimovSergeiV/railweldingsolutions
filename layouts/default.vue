<script setup>
  // define page meta for layouts/default.vue
  definePageMeta({
    title: 'pages.title.about'
  })

  useHead({
    meta: [{ property: "og:title", content: "this is og title for about page" }]
  })
</script>


<template>
  <div class="">
    <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]">

      <AppHeader />
      <slot />

      <!-- <h2>{{ $t('pages.about.description') }}</h2> -->
      
      <AppFooter />

    </div>
  </div>
</template>