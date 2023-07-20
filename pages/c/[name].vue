<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()
  const router = useRouter()

</script>


<template>
  <div class="">
    <div class="min-h-screen grid grid-cols-1 content-between bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]">

      <div></div>

      <div class="">

        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
          <div class="flex">
            <div class="bg-white/50 backdrop-blur-sm px-16 py-4 border-l-4 border-main-primary/80">
              <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-800 text-[40px] md:text-[80px] uppercase se lect-none">{{ $t('title-1') }}</p>
              <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-600 text-[40px] md:text-[70px] uppercase se lect-none">{{ $t('title-2') }}</p>          
              <div class="py-3">
                <p class="text-2xl md:text-lg text-sky-800 se lect-none font-opensans font-extrabold">{{ $t('slogan') }}</p>
              </div>          
            </div>
          </div>
        </div>

      </div>


      <div class="">
        <div class="">

          <div class="bg-gradient-to-br from-sky-950/95 to-sky-800/95 backdrop-blur-sm border-t border-sky-950/40 py- 2">
            <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 py-4">
              <div class="flex items-end justify-between">
                <div class="">
                  <p class="text-white font-black text-xl my-4">{{ $t('pages.index.chooseUs-title') }}</p>
                  <div class="grid grid-cols-3 gap-4 text-gray-100">
                    <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> <span class="mx-1">{{ $t('pages.index.chooseUs-1') }}</span> </p></div>
                    <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> <span class="mx-1">{{ $t('pages.index.chooseUs-2') }}</span></p></div>
                    <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> <span class="mx-1">{{ $t('pages.index.chooseUs-3') }}</span></p></div>
                    <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> <span class="mx-1">{{ $t('pages.index.chooseUs-4') }}</span></p></div>
                    <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> <span class="mx-1">{{ $t('pages.index.chooseUs-5') }}</span></p></div>
                    <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> <span class="mx-1">{{ $t('pages.index.chooseUs-6') }}</span></p></div>
                  </div>                  
                </div>
                <div class="grid grid-cols-1 gap-2 text-right">
                  <div class="grid grid-cols-1 gap-1">
                    <p class="text-gray-100 font-semibold">info@railwelding.ru</p>
                    <p class="text-white font-semibold text-xl">+49 (123) 000 45 45</p>
                  </div>
                  <div class="">
                    <button class="bg-gradient-to-tr from-white via-gray-200 to-gray-200 font-semibold text-main-secondary w-60 py-2 rounded-md shadow-xl shadow-main-secondary mt-2">{{ $t('requestCall') }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


    <div class=" bg-sky-950 border-t border-sky-950/20 border-white">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="flex items-center h-20 justify-between">

          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+150</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.employees') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+3500</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.complProjects') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+560Ha</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.prodArea') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+200</span><p class="text-gray-100 text-base font-semibold"> Волнистых попугаев</p></div>

        </div>

      </div>
    </div>


    <div class="bg-white/80">
      <p>{{ route }}</p>
      <p v-for="i in 100" :key="i">Hallo welt</p>
      <nuxt-link :to="localePath({ name: 'index' })"> На главную</nuxt-link>
    </div>





  </div>
</template>