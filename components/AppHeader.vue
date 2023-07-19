<script setup>
  const colorMode = useColorMode()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()

  // const route = useRoute()

  // const { data: widebanners } = await useFetch('http://127.0.0.1:8000/c/widebanners/')
  // console.log(route.params.id)
</script>


<template>

  <div class="min-h-screen grid grid-cols-1 content-between">

    <div class="">
      <div id="navbar" class="bg-white/60 border-b border-main-primary/40 shadow-sm shadow-main-primary/40 w-full z-50 backdrop-blur-sm duration-700 transition-all">
        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 flex items-center justify-between gap-12 h-full">
          <div class="py-1">
            <nuxt-link :to="localePath('index')">
              <img src="/logo.png" class=" h-6" />
            </nuxt-link>                
          </div>
          <div class="flex gap-4 items-center px-4 ">
            <div class="">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('railWeldingEquipment') }}</p>
            </div>
            <div class="">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('testEquipment') }}</p>
            </div>
            <div class="">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('about') }}</p>
            </div>
            <div class="">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('services') }}</p>
            </div>
            
            <div class="relative group">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center cursor-pointer">{{ $t('language') }}</p>
              <div class="absolute right-0 invisible group-hover:visible ease-in-out transition-opacity duration-100 opacity-0 group-hover:opacity-100">
                <div class="py-1">
                  <div class="bg-gray-100 border border-main-primary/40 shadow-sm shadow-black/30 rounded-sm w-[160px]">
                    <div class="grid grid-cols-1 gap-2 px-4 py-2">
                      <nuxt-link :to="switchLocalePath('en')" class="text-right text-sm text-main-primary font-semibold px-2 py-2">English</nuxt-link>
                      <nuxt-link :to="switchLocalePath('ru')" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Русский</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>

      </div>      
    </div>

    

    <div class="">

      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="flex">
          <div class="bg-white/50 backdrop-blur-sm px-16 py-4 border-l-4 border-main-primary/80">
            <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-800 text-[40px] md:text-[80px] uppercase se lect-none">{{ $t('title-1') }}</p>
            <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-600 text-[40px] md:text-[70px] uppercase se lect-none">{{ $t('title-2') }}</p>          
            <div class="py-3">
              <p class="text-2xl md:text-lg text-sky-950 se lect-none font-opensans font-extrabold">{{ $t('slogan') }}</p>
            </div>          
          </div>
        </div>
      </div>

    </div>


    <div class="">
      <div class="">

        <div class="bg-gradient-to-br from-sky-950/95 to-sky-800/95 backdrop-blur-sm border-t border-main-primary/40 py-8">
          <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 py-4">
            <div class="flex items-end justify-between">
              <div class="">
                <p class="text-white font-black text-xl my-4">Почему выбирают нас ?</p>
                <div class="grid grid-cols-3 gap-4 text-gray-100">
                  <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> Более 17 лет успешной работы</p></div>
                  <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> Собственное конструкторское бюро</p></div>
                  <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> Полный производственный цикл</p></div>
                  <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> Сервисное обслуживание и поддержка</p></div>
                  <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> Персональный менеджер</p></div>
                  <div class=""><p class="text-sm text-gray-200 font-semibold mdi mdi-brightness-1"> Решение нестандартных задач</p></div>
                </div>                  
              </div>
              <div class="grid grid-cols-1 gap-2 text-right">
                <div class="grid grid-cols-1 gap-1">
                  <p class="text-gray-100 font-semibold">info@railwelding.ru</p>
                  <p class="text-white font-semibold text-xl">+49 (123) 000 45 45</p>
                </div>
                <div class="">
                  <button class="bg-gradient-to-tr from-white via-gray-200 to-gray-200 font-semibold text-main-secondary px-12 py-2 rounded-md shadow-xl shadow-main-secondary mt-2">Заказать звонок</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

</template>