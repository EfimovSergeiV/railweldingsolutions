<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()
  const router = useRouter()

  const { data: widebanner } = await useFetch(`${ config.public.baseURL }c/widebanners/`)
  const { data: banners } = await useFetch(`${ config.public.baseURL }c/mainbanner/`)
  const { data: brands } = await useFetch(`${ config.public.baseURL }c/brands/`)
  const { data: esab } = await useFetch(`${ config.public.baseURL }c/prods/?brnd=3`)
  const { data: latest } = await useFetch(`${ config.public.baseURL }c/neues/`)
  

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

          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+230</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.employees') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+500</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.complProjects') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+460Ha</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.prodArea') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+200</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.clients') }}</p></div>

        </div>

      </div>
    </div>


    <div class="bg-gray-300 grid grid-cols-1 content-center ">
      <div class="container mx-auto lg:max-w-7xl lg:px-8">
        <div class="my-4">
            <div class="flex items-center justify-start">
              <div class="flex gap-1 text-sm font-semibold text-sky-950 text-center"><nuxt-link :to="localePath({ name: 'index' })" class="uppercase">Главная</nuxt-link></div>
              <div class="flex gap-1 text-sm font-semibold text-sky-950 text-center mdi mdi-chevron-double-right"><p class="">ОБОРУДОВАНИЕ ДЛЯ СВАРКИ РЕЛЬСОВ</p></div>
            </div>
          </div>
      </div>
    </div>


    <div class="bg-white py-10 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto  lg:max-w-7xl lg:px-8">
        <nuxt-link :to="localePath({ name: 'c' })" class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-700 uppercase se lect-none">
          {{ $t('pages.index.readySolutions') }}
        </nuxt-link>

        <div class="my-4">
          <div v-for="f in 3" :key="f" class="">
            <div class="">
              <div class="flex items-center justify-end border-b border-sky-950/20">
                <p class="text-sm text-sky-950 font-semibold">Welding machines {{ f }}</p>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="i in 5 - f" :key="i" class="my-2">
                  <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })">
                    <div class="flex items-center justify-center bg-white border border-sky-950/20">
                      <img src="/prod/fbm-140.png" class=" w-40 py-4" />
                    </div>
                    <div class="my-2">
                      <p class="text-sm font-semibold text-sky-950 text-center">{{ $t('pages.index.prod-name-1') }}</p>
                    </div>
                    <div>
                      <p class="text-xs text-sky-950">
                        The machine is designed for flash butt welding of rails with cross-sectional area of from 6,500 mm to 10,000 mm in field conditions, through continuous or pulsating flashing, and removes flash immediately after welding. Due to the increased upsetting force of 140 tons, the welding machine is capable of welding long rail strings into tracks and tightening the strings. The welding machine can hold the welded joint within the time necessary for the joint to cool down after welding and removing flash. The welding machine is equipped with a welding process control system, which allows monitoring the welding process and and issues data sheets for every welded joint.
                      </p>
                    </div>                  
                  </nuxt-link>
                  <div class="my-4 flex items-center justify-between">
                    <button class="text-sm text-sky-950 font-semibold uppercase">Request price</button>
                    <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })" class="text-sm text-sky-950 font-semibold uppercase">Open cart</nuxt-link>
                  </div>
                </div>
              </div>
            </div>            
          </div>          
        </div>
      </div>      
    </div>


  </div>
</template>