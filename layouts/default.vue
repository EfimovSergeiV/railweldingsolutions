<script setup>
  // define page meta for layouts/default.vue
  definePageMeta({
    title: 'pages.title.about'
  })

  useHead({
    meta: [{ property: "og:title", content: "this is og title for about page" }]
  })

  const policy_cookies = ref(false)


</script>


<template>
  <div>
    <!-- <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]"> -->
    <div>
      <AppHeader />
      <slot />

      <!-- <h2>{{ $t('pages.about.description') }}</h2> -->
      
      <AppFooter />

    </div>

    <transition name="fade">
      <div v-if="policy_cookies" class="fixed z-50 bottom-0 w-full">
        <div class="bg-sky-950 text-gray-100 px-6 py-4 border-t border-white/50">
          
          <div class="flex items-center gap-4 justify-between">
            <p class="text-base">
              Railwelding Ltd uses cookies to ensure that we give you the best experience on our website.
            </p>

            <div class="">
              <button @click="policy_cookies = false" class="font-semibold text-sm px-8 py-2 border border-white">ACCEPT</button>
            </div>

          </div>

        </div>
      </div>      
    </transition>


    <!-- <div id="write-us" class="invisible ease-in-out transition-opacity duration-300 opacity-100">
      <div class="px-1 fixed bottom-56 left-0 w-0">
        <div class=" rotate-90">
          <div class="">

            <div class="">
              <div class=" w-[200px] h-14"> 
                <nuxt-link :to="localePath({ name: 'index', hash: '#contact-us' })" class="w-[200px] px-4 py-1 transition-all text-center text-sm font- semibold text-gray-200 hover:text-white bg-gradient-to-r from-sky-900 via-sky-900/90 to-sky-900  border border-sky-700 disabled:border-sky-500 disabled:from-sky-600 disabled:via-sky-600/90 disabled:to-sky-600 rounded-t-lg cursor-pointer flex gap-2 items-center justify-center duration-700 font-semibold " @click="BuildProject"><span class="mdi mdi-message-text text-xl -rotate-90"></span> {{ $t('write-us') }}</nuxt-link>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>