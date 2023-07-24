<script setup>
 const localePath = useLocalePath()
 const config = useRuntimeConfig()
  // const colorMode = useColorMode()
  // const route = useRoute()

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

          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+150</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.employees') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+3500</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.complProjects') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+560Ha</span><p class="text-gray-100 text-base font-semibold"> {{ $t('pages.index.prodArea') }}</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+200</span><p class="text-gray-100 text-base font-semibold"> Волнистых попугаев</p></div>

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


    <div class="">
      <div class="bg-white">

        <div class="bg-[url('images/rails-bg.jpg')] h-[380px] bg-no-repeat bg-left-bottom bg-cover">
          <div class="bg-sky-950/70 hover:bg-sky-950/80 backdrop-blur-sm transition-all duration-1000 h-full relative">
            <div class="absolute w-full h-full">

              <div class="flex items-center justify-center h-full">
                <div class="grid grid-cols-1 gap-2">
                  <p class="text-slate-200 font-semibold text-xl uppercase">
                    {{ $t('pages.index.quest-title') }}
                  </p>
                  <p class="text-4xl text-white uppercase">
                    {{ $t('pages.index.quest-text') }}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="learn" class="bg-white/80 my-10 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="">
          <div class="my-2">
            <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
              {{ $t('pages.index.learn-title') }}
            </p>
          </div>
          
          <p class="text-base text-sky-950 se lect-none font-opensans">
            {{ $t('pages.index.learn-text') }}
          </p>
        </div>

        <div class="">

          <div class="flex gap-4 items-center justify-end my-14">
            <div v-for="i in 4" :key="i" class="">
              <img src="/teh-support.png" class="h-28 rounded-lg"/>
            </div>
            

          </div>

        </div>




      </div>
    </div>


<!-- <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]"> -->
    <!-- <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center"> -->
    <div id="repair" class="bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]">
      <div class="bg-white/80 py-8 min-h-screen grid grid-cols-1 content-center border-t border-b border-sky-950/20">
        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

          <div class="my-2">
            <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
              {{ $t('pages.index.repair-title') }}
            </p>
          </div>
          
          <p class="text-base text-sky-950 se lect-none font-opensans">
            {{ $t('pages.index.repair-text') }}
          </p>

          <div class="">
            <div class="flex gap-4 items-center justify-end my-14">
              <div v-for="i in 4" :key="i" class="">
                <img src="/teh-support.png" class="h-28 rounded-lg"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



    <div id="service" class="bg-white/80 py-8 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">


        <div class="my-2">
          <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
            {{ $t('pages.index.service-title') }}
          </p>
        </div>

        <p class="text-base text-sky-950 se lect-none font-opensans">
          {{ $t('pages.index.service-1') }}
        </p>
        
        <div class="flex my-8">
          <div class=" grid grid-cols-1 gap-2">
            
            <div class="flex items-center w-10/12 gap-4 text-sky-950/50 mdi mdi-brightness-1">
              <p class="text-base text-sky-900 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-2') }}</p>
            </div>
            <div class="flex items-center w-10/12 gap-4 text-sky-950/50 mdi mdi-brightness-1">
              <p class="text-base text-sky-900 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-3') }}</p>
            </div>
            <div class="flex items-center w-10/12 gap-4 text-sky-950/50 mdi mdi-brightness-1">
              <p class="text-base text-sky-900 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-4') }}</p>
            </div>
            <div class="flex items-center w-10/12 gap-4 text-sky-950/50 mdi mdi-brightness-1">
              <p class="text-base text-sky-900 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-5') }}</p>
            </div>

          </div>
        </div>

        <div class="my-4">
          <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">
            {{ $t('pages.index.service-6') }}
          </p>
        </div>


      </div>
    </div>


    
    <div id="contact-us" class="bg-sky-950 py-8 bg-gradient-to-r from-sky-950 via-sky-900 to-sky-950 min-h-screen grid grid-cols-1 content-center border-t border-white">


      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-center text-center">
          <div class="my-2">
            <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 uppercase se lect-none">
              {{ $t('pages.index.aboutus-title') }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center text-center">
          <div class="">
            <p class="text-base text-gray-100 se lect-none font-opensans">
              {{ $t('pages.index.aboutus-text') }}
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-center justify-between my-4">
          <div class="">
            <div class="flex items-center justify-center my-4 border-b border-gray-100/20">
              <p class="text-gray-100 font-semibold">
                {{ $t('pages.index.partners') }}
              </p>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/2.png" class="h-14"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Kazakh Railways</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/1.png" class="h-14"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Lithuanian Railways</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/3.png" class="h-14"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Ozbekiston temir yollari</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/4.png" class="h-14"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Belarusian railways</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[30em]">

            <div class="flex items-center justify-center my-4 border-b border-gray-100/20">
              <p class="text-gray-100 font-semibold ">
                {{ $t('pages.index.contactus') }}
              </p>
            </div>

            <div class="grid grid-cols-1 gap-2">

              <div class="relative">
                <p class="absolute px-2 mdi mdi-24px mdi-account-tie text-sky-950/90"></p>
                <input type="text" id="person" class="bg-gray-50 shadow-md shadow-black/50 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-10 py-1.5 " :placeholder="$t('pages.index.yorname')" />
              </div>

              <div class="relative">
                <p class="absolute px-2 mdi mdi-24px mdi-at text-sky-950/90"></p>
                <input type="text" id="person" class="bg-gray-50 shadow-md shadow-black/50 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-10 p-1.5 " :placeholder="$t('pages.index.youremail')" />
              </div>

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-24px mdi-text-long text-sky-950/90"></p>
                <textarea type="text" id="person" rows="4" class="bg-gray-50 shadow-md shadow-black/50 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-10 p-2.5 " :placeholder="$t('pages.index.yourmess')"></textarea>
              </div>
            
              <button class="bg-sky-900 text-gray-50 font-semibold py-1 rounded-sm rounded-b-2xl shadow-lg shadow-black/50">{{ $t('pages.index.send') }}</button>
            
            </div>

          </div>
        </div>
      

        <div class="flex items-center justify-center py-2 mt-8 px-10">
          <p class="text-base text-gray-100 se lect-none font-opensans">{{ $t('pages.index.aboutus-promo') }}</p>
        </div>

        <div class="flex items-center justify-center py-4">
          <img src="/logo-white.png" class=" h-8"/>
        </div>
      </div>
      
    </div>


  </div>

</template>