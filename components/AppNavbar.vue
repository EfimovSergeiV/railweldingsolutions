<script setup>
  // const { data: cts } = await useFetch('http://127.0.0.1:8000/c/ct/')

</script>


<template>
  <div class="container">
    <div class="mx-auto my-4 px-4 lg:max-w-7xl lg:px-8">

      <nav class="">
        <div class="
          from-white
          via-gray-100
          to-white
          border-gray-200


          border rounded-sm
          dark:border-gray-700
          py-4 md:px-4 relative
          bg-gradient-to-r
          dark:from-gray-800
          dark:via-gray-700
          dark:to-gray-800
          background-animate
          ">

          <div id="mobile" class="md:hidden">
            <div class="flex justify-center md:justify-end text-sm">
              <nuxt-link :to="{ name: 'index' }" class="mx-2 mdi mdi-home"> Главная</nuxt-link>
              <nuxt-link :to="{ name: 'cts' }" class="mx-2 mdi mdi-book-open-page-variant md:hidden"> Каталог</nuxt-link>
              <nuxt-link :to="{ name: 'cart' }" class="mx-2 mdi mdi-cart"> Корзина</nuxt-link>
              <nuxt-link :to="{ name: 'about' }" class="mx-2 mdi mdi-store-marker"> Магазины</nuxt-link>
            </div>
          </div>

          <div class="grid justify-items-end mx-auto max-w-screen-xl">

            <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
              <ul class="flex flex-col mt-4 text-sm md:flex-row md:space-x-4 md:mt-0">

                <li>
                  <nuxt-link :to="{ name: 'index' }" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 mdi mdi-home text-base" aria-current="page"> Главная</nuxt-link>
                </li>


                <li id="navabar-menu" class=" group">

                  <nuxt-link :to="{ name: 'cts' }" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 items-center border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 mdi mdi-book-open-page-variant text-base"> Каталог</nuxt-link>

                  <div class="absolute top-0 left-0 transition group-hover:translate-y-7 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">

                    <div class="menu-section pt-7">
                      <div id="mega-menu-full-dropdown" class="bg-white border-gray-200 shadow-sm border dark:bg-gray-800 dark:border-gray-600 p-2">

                        <div class="columns-3 lg:columns-4">
                          <div v-for="ct in cts" :key="ct.id" class="break-inside-avoid-column">
                            <div class="">

                              <div class="p-2">
                                <div class="mb-1">
                                  <nuxt-link :to="{ name: 'prods', query: { ct: ct.id } }" class="font-bold text-gray-700 dark:text-gray-300 text-base">{{ ct.name }}</nuxt-link>              
                                </div>

                                <div>
                                  <ul>
                                    <li v-for="sct in ct.inserted" :key="sct.id" class="inline-block mr-3 my-1">
                                      <nuxt-link :to="{ name: 'prods', query: { ct: sct.id } }" class="text-gray-700 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{{ sct.name }}</nuxt-link>
                                    </li>
                                  </ul>
                                </div>              
                              </div>


                            </div>
                          </div>
                        </div>
                        
                        <div class="px-10 py-4">
                          <nuxt-link to="/cts" class="text-right">
                            <h3>Перейти в каталог</h3>
                          </nuxt-link>
                        </div> 
                      </div>
                    </div>
                    
                  </div>
                </li>

                <li class="relative px-2">
                  <nuxt-link :to="{ name: 'cart' }" class="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mdi mdi-cart text-base"> Корзина</nuxt-link>
                  <!-- <div v-if="cart.length > 0" class="absolute top-0 right-0">
                    <span class="flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                  </div> -->
                    
                </li>
                <li>
                  <nuxt-link :to="{ name: 'about' }" class="block border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mdi mdi-store-marker text-base"> Магазины</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>