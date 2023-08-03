<script setup>
  const colorMode = useColorMode()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()

  // const route = useRoute()

  const railmachines = ref([
    { 'id': 1, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-60', 'path': 'fbm-60' },
    { 'id': 2, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140', 'path': 'fbm-140' },
    { 'id': 3, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140', 'path': 'fbm-140' },
    { 'id': 4, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140', 'path': 'fbm-140' },
    { 'id': 5, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140', 'path': 'fbm-140' },
  ])
  // console.log(route.params.id)
</script>


<template>

  <div class="">
    <!-- <nuxt-link :to="localePath({ name: 'index'})" class=" font-semibold text-2xl">JKHJSDHDKJSHKJHJKDSHKJDJKSHDJKD</nuxt-link>
    <nuxt-link :to="localePath({ name: 'c-name', params: { name: 'thispath'} })" class=" font-semibold text-2xl">J KHJSDHDKJSHKJHJKDSHKJDJKSHDJKD</nuxt-link> -->

    <div class=" ">
      <div id="navbar" class="bg-white/60 border-b border-main-primary/40 shadow-sm shadow-main-primary/40 w-full absolute z-50 backdrop-blur-sm duration-700 transition-all">
        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 flex items-center justify-between gap-12 h-full">
          <div class="py-1">
            <nuxt-link :to="localePath('index')">
              <img src="/railwelding-logo.webp" class=" h-6" />
            </nuxt-link>                
          </div>
          <div class="flex gap-6 items-center">
            <div class="relative group">
              <nuxt-link :to="localePath({ name: 'index'})" class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('railWeldingEquipment') }}</nuxt-link>
              <div class="absolute right-0 invisible group-hover:visible ease-in-out transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div class="py-1">
                  <div class="bg-gray-100 border border-main-primary/40 shadow-sm shadow-black/30 rounded-sm w-[460px]">
                    <div class="grid grid-cols-1 gap-2 py-2">
                      
                      <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: machine.path } })" v-for="(machine, pk) in railmachines" :key="pk" class="">
                        <div class="px-2 py-2">
                          <p class="text-right text-sm text-main-primary font-semibold py-1">{{  machine.name }}</p>
                        </div>
                        <div v-if="pk + 1 !== railmachines.length" class="border-t border-sky-950/30"></div>                      
                      </nuxt-link>

                      <!-- <nuxt-link :to="localePath({ name: 'c-name', params: { name: 'fbm-140'} })" class="text-right text-sm text-main-primary font-semibold py-1">МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140</nuxt-link>
                      <nuxt-link :to="localePath({ name: 'c-name', params: { name: 'fbm-140'} })" class="text-right text-sm text-main-primary font-semibold py-1">МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140</nuxt-link>
                      <nuxt-link :to="localePath({ name: 'c-name', params: { name: 'fbm-140'} })" class="text-right text-sm text-main-primary font-semibold py-1">МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140</nuxt-link> -->
                    </div>
                  </div>
                </div>
              </div>
            
            
            </div>
            <div class="relative group">
              <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'thispath'} })" class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('testEquipment') }}</nuxt-link>
              <div class="absolute right-0 invisible group-hover:visible ease-in-out transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div class="py-1">
                  <div class="bg-gray-100 border border-main-primary/40 shadow-sm shadow-black/30 rounded-sm w-[460px]">
                    <div class="grid grid-cols-1 gap-2 px-10 py-2">
                      <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Прес тестировычный</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <!-- <div class="relative group">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('services') }}</p>
              <div class="absolute right-0 invisible group-hover:visible ease-in-out transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div class="py-1">
                  <div class="bg-gray-100 border border-main-primary/40 shadow-sm shadow-black/30 rounded-xl w-[460px]">
                    <div class="grid grid-cols-1 gap-2 px-10 py-2">
                      <nuxt-link :to="localePath({ name: 'index', hash: '#learn' })" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Обучение и тех. поддержка</nuxt-link>
                      <nuxt-link :to="localePath({ name: 'index', hash: '#repair' })" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Капитальный ремонт</nuxt-link>
                      <nuxt-link :to="localePath({ name: 'index', hash: '#service' })" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Обслуживание и устранение неполадок</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            
            </div> -->
            
            <div class="relative group">
              <p class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center cursor-pointer">{{ $t('language') }}</p>
              <div class="absolute right-0 invisible group-hover:visible ease-in-out transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div class="py-1">
                  <div class="bg-gray-100 border border-main-primary/40 shadow-sm shadow-black/30 rounded-sm w-[260px]">
                    <div class="grid grid-cols-1 gap-2 px-10 py-2">
                      <nuxt-link :to="switchLocalePath('ru')" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Русский</nuxt-link>
                      <nuxt-link :to="switchLocalePath('en')" class="text-right text-sm text-main-primary font-semibold px-2 py-2">English</nuxt-link>
                      <nuxt-link :to="switchLocalePath('pt')" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Português</nuxt-link>
                      <nuxt-link :to="switchLocalePath('de')" class="text-right text-sm text-main-primary font-semibold px-2 py-2">Deutsch</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>

      </div>      
    </div>

    

    <!-- <div class="">

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

    </div> -->

  </div>

</template>