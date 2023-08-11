<script setup>
  const colorMode = useColorMode()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()

  // const route = useRoute()

  const railmachines = ref([
    { 'id': 1, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-60', 'path': 'fbm-60' },
    { 'id': 2, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-140', 'path': 'fbm-140' },
    { 'id': 3, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-150', 'path': 'fbm-150' },
    { 'id': 4, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-160', 'path': 'fbm-160' },
    { 'id': 5, 'name': 'МАШИНА ДЛЯ СВАРКИ РЕЛЬСОВ FBM-170', 'path': 'fbm-170' },
  ])

  const mashineDescription = ref('The machine is designed for flash butt welding of rails with cross-sectional area of from 6,500 mm to 10,000 mm in field conditions, through continuous or pulsating flashing, and removes flash immediately after welding. Due to the increased upsetting force of 140 tons, the welding machine is capable of welding long rail strings into tracks and tightening the strings. The welding machine can hold the welded joint within the time necessary for the joint to cool down after welding and removing flash. The welding machine is equipped with a welding process control system, which allows monitoring the welding process and and issues data sheets for every welded joint.')

</script>


<template>

  <div class="">
    <!-- <nuxt-link :to="localePath({ name: 'index'})" class=" font-semibold text-2xl">JKHJSDHDKJSHKJHJKDSHKJDJKSHDJKD</nuxt-link>
    <nuxt-link :to="localePath({ name: 'c-name', params: { name: 'thispath'} })" class=" font-semibold text-2xl">J KHJSDHDKJSHKJHJKDSHKJDJKSHDJKD</nuxt-link> -->

    <div class=" ">
      <div id="navbar" class="bg-white/60 border-b border-main-primary/40 shadow-sm shadow-main-primary/40 w-full absolute z-50 backdrop-blur-sm duration-700 transition-all">
        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 flex items-center justify-between gap-12 h-full relative">
          <div class="py-1">
            <nuxt-link :to="localePath('index')">
              <img src="/railwelding-logo.webp" class=" h-6" />
            </nuxt-link>                
          </div>
          <div class="flex gap-6 items-center">
            <div class="group">
              <nuxt-link :to="localePath({ name: 'index'})" class="text-sm text-center text-sky-900 font-semibold h-[56px] flex items-center">{{ $t('railWeldingEquipment') }}</nuxt-link>
              <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 absolute w-full right-0 inv isible group-hover:visible ease-in-out transition-opacity duration-300 op acity-0 group-hover:opacity-100">
                <div class="py-1">
                  <div class="bg-gray-100 border border-sky-800/10 shadow-sm shadow-black/30 rounded-sm w-full">

                    <div class="flex justify-end">

                      <div class="px-2 py-4 w-full">

                        <div class="">
                          <div class="border-b border-sky-950/50">
                            <p class="text-sky-900 text-sm font-semibold">Стационарные рельсосварочные машины</p>
                          </div>
                          
                          <div class="grid grid-cols-2 gap-2">
                            <div v-for="machine in railmachines.slice(0, 2)" :key="machine.id" class="">
                              <div class="">
                                <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: machine.path } })" class="">
                                  <div class="px-2 py-2">
                                    <div class="flex items-center gap-2">
                                      <div class="px-4 py-2">
                                        <img src="/prod/fbm-140.png" class=" w-14" />
                                      </div>
                                      
                                      <div class=" grid grid-cols-1">
                                        <p class=" text-sm text-sky-950 py-1">{{  machine.name }}</p>
                                        <div class="flex justify-start">
                                          <p class="text-xs text-sky-950">перейти к машине</p>
                                        </div>
                                      </div>
                                      

                                    </div>

                                    <div>


                                    </div>

                                  </div>
                                </nuxt-link>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div class="">
                          <div class="border-b border-sky-950/50">
                            <p class="text-sky-900 text-sm font-semibold">Мобильные рельсосварочные машины</p>
                          </div>
                          
                          <div class="grid grid-cols-2 gap-2">
                            <div v-for="machine in railmachines.slice(0, 2)" :key="machine.id" class="">
                              <div class="">
                                <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: machine.path } })" class="">
                                  <div class="px-2 py-2">
                                    <div class="flex items-center gap-2">
                                      <div class="px-4 py-2">
                                        <img src="/prod/fbm-140.png" class=" w-14" />
                                      </div>
                                      
                                      <div class=" grid grid-cols-1">
                                        <p class=" text-sm text-sky-950 py-1">{{  machine.name }}</p>
                                        <div class="flex justify-start">
                                          <p class="text-xs text-sky-950">перейти к машине</p>
                                        </div>
                                      </div>
                                      

                                    </div>

                                    <div>


                                    </div>

                                  </div>
                                </nuxt-link>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="border-b border-sky-950/50">
                            <p class="text-sky-900 text-sm font-semibold">Испытательное оборудование</p>
                          </div>
                          
                          <div class="grid grid-cols-2 gap-2">
                            <div v-for="machine in railmachines.slice(0, 1)" :key="machine.id" class="">
                              <div class="">
                                <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: machine.path } })" class="">
                                  <div class="px-2 py-2">
                                    <div class="flex items-center gap-2">
                                      <div class="px-4 py-2">
                                        <img src="/prod/fbm-140.png" class=" w-14" />
                                      </div>
                                      
                                      <div class=" grid grid-cols-1">
                                        <p class=" text-sm text-sky-950 py-1">ГЕРКУЛЕС 300</p>
                                        <div class="flex justify-start">
                                          <p class="text-xs text-sky-950">перейти к машине</p>
                                        </div>
                                      </div>
                                      

                                    </div>

                                    <div>


                                    </div>

                                  </div>
                                </nuxt-link>
                              </div>

                            </div>
                          </div>
                        </div>


                      </div>
                      <div class="px-4 bg-sky-800 w-[540px] py-4 flex items-center">
                        <div class="">
                          <div class="">
                            <p class="text-white font-semibold text-2xl">Рельсосварочое оборудование</p>
                          </div>
                          <div class="my-4 py-4 border-t border-white/50">
                            <p class="text-sm text-gray-100">Представляем вашему вниманию наши решения для сварки рельсов. Наше оборудование является сертифицированным по самим жёстким стандартам и проверенное временем</p>
                          </div>
                        </div>
                      </div>

                    </div>
                    
                    
                    <!-- <div class="grid grid-cols-1 gap-2 py-2">
                      <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: machine.path } })" v-for="(machine, pk) in railmachines" :key="pk" class="">
                        <div class="px-2 py-2">
                          <div class="flex items-center gap-2">
                            <div class="px-4 py-2">
                              <img src="/prod/fbm-140.png" class=" w-14" />
                            </div>
                            
                            <p class="text-right text-sm text-main-primary font-semibold py-1">{{  machine.name }}</p>                            
                          </div>

                        </div>
                        <div v-if="pk + 1 !== railmachines.length" class="border-t border-sky-950/30"></div>                      
                      </nuxt-link>
                    </div> -->


                  </div>
                </div>
              </div>
            </div>

            <div class="relative group">
              <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'thispath'} })" class="text-sm text-center text-main-primary font-semibold h-[56px] flex items-center">{{ $t('about') }}</nuxt-link>
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