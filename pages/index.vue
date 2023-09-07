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
  

  const mashineDescription = ref('The machine is designed for flash butt welding of rails with cross-sectional area of from 6,500 mm to 10,000 mm in field conditions, through continuous or pulsating flashing, and removes flash immediately after welding. Due to the increased upsetting force of 140 tons, the welding machine is capable of welding long rail strings into tracks and tightening the strings. The welding machine can hold the welded joint within the time necessary for the joint to cool down after welding and removing flash. The welding machine is equipped with a welding process control system, which allows monitoring the welding process and and issues data sheets for every welded joint.')

</script>



<template>
  <div class="">

    <div class="min-h-screen grid grid-cols-1 content-between">
      <div></div>

      <div class="absolute h-screen   -z-10">
        <img src="/backgrounds/bg-5.webp" class="h-screen object-cover" />
      </div>

      <div class="">

        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
          <div class="flex">
            <div class="bg-white/50 backdrop-blur-sm px-16 py-4 border-l-8 border-sky-800/90">
              <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-800 text-[40px] md:text-[70px] uppercase se lect-none">{{ $t('title-1') }}</p>
              <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-600 text-[40px] md:text-[60px] uppercase se lect-none">{{ $t('title-2') }}</p>          
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
                    <div class="flex items-center gap-1 mdi mdi-brightness-1"><p class="text-sm text-gray-200 font-semibold ">{{ $t('pages.index.chooseUs-1') }}</p></div>
                    <div class="flex items-center gap-1 mdi mdi-brightness-1"><p class="text-sm text-gray-200 font-semibold ">{{ $t('pages.index.chooseUs-2') }}</p></div>
                    <div class="flex items-center gap-1 mdi mdi-brightness-1"><p class="text-sm text-gray-200 font-semibold ">{{ $t('pages.index.chooseUs-3') }}</p></div>
                    <div class="flex items-center gap-1 mdi mdi-brightness-1"><p class="text-sm text-gray-200 font-semibold ">{{ $t('pages.index.chooseUs-4') }}</p></div>
                    <div class="flex items-center gap-1 mdi mdi-brightness-1"><p class="text-sm text-gray-200 font-semibold ">{{ $t('pages.index.chooseUs-5') }}</p></div>
                    <div class="flex items-center gap-1 mdi mdi-brightness-1"><p class="text-sm text-gray-200 font-semibold "> {{ $t('pages.index.chooseUs-6') }}</p></div>
                  </div>                  
                </div>
                <div class="grid grid-cols-1 gap-2 text-right">
                  <div class="grid grid-cols-1 gap-1">
                    <p class="text-gray-100 font-semibold">info@railwelding.ru</p>
                    <p class="text-white font-semibold text-xl">+49 (123) 000 45 45</p>
                  </div>
                  <div class=" shadow-xl shadow-gray-900/10">
                    <button class="bg-gradient-to-tr from-white via-gray-200 to-gray-200 font-semibold text-main-secondary w-60 py-2 mt-2 cut-corners">{{ $t('requestCall') }}</button>
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
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+200</span><p class="text-gray-100 text-base font-semibold">Клиентов</p></div>

        </div>

      </div>
    </div>


    <div class="bg-white py-10 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto  lg:max-w-7xl lg:px-8">
        <nuxt-link :to="localePath({ name: 'c' })" class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-br from-sky-950 to-sky-900 uppercase se lect-none">
          {{ $t('pages.index.readySolutions') }}
        </nuxt-link>

        <div class="my-4">



          <div class="">
            <div class="">
              <div class="flex items-center justify-end border-b border-sky-950/20">
                <p class="text-xl text-sky-950">Стационарные рельсосварочные машины</p>
              </div>
              <div class="grid grid-cols-3 gap-8">
                <div v-for="i, pk in ['МСР-65.01', 'МСО-120.01', 'МСО-120.01',]" :key="pk" class="my-2">

                  
                  <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })">
                    <div class="flex items-center justify-center bg-white">
                      <img src="/prod/fbm-140.png" class=" w-40 py-4" />
                    </div>

                    <div class="my-2">
                      <p class="text-sm font-semibold text-sky-950 ">{{ i }}</p>
                    </div>
                    <div>
                      <p class="text-xs text-sky-950">
                      
                      {{ mashineDescription.slice(0, 200) }}<span class="">...</span>
                      </p>
                      <!-- <div class="flex justify-end">
                        <p class="text-xs text-sky-950 font-semibold">Read more</p>
                      </div> -->
                    </div>                  
                  </nuxt-link>


                  <div class="my-4 flex items-center gap-4 py-1">
                    <button class="text-sm shadow-md shadow-black/50 bg-sky-800 text-gray-100 px-4 py-2 font-semibold uppercase cut-corners">Request price</button>
                    <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })" class="text-sm text-sky-800 font-semibold">Read more</nuxt-link>
                  </div>
                </div>
              </div>

              
            </div>            
          </div>
          

          <div class="">
            <div class="">
              <div class="flex items-center justify-end border-b border-sky-950/20">
                <p class="text-xl text-sky-950">Мобильные рельсосварочные машины</p>
              </div>
              <div class="grid grid-cols-3 gap-8">
                <div v-for="i, pk in ['FBM-60', 'FBM-140',]" :key="pk" class="my-2">

                  
                  <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })">
                    <div class="flex items-center justify-center bg-white">
                      <img src="/prod/fbm-140.png" class=" w-40 py-4" />
                    </div>

                    <div class="my-2">
                      <p class="text-sm font-semibold text-sky-950 ">{{ i }}</p>
                    </div>
                    <div>
                      <p class="text-xs text-sky-950">
                      
                      {{ mashineDescription.slice(0, 200) }}<span class="">...</span>
                      </p>
                      <!-- <div class="flex justify-end">
                        <p class="text-xs text-sky-950 font-semibold">Read more</p>
                      </div> -->
                    </div>                  
                  </nuxt-link>

                  <div class="py-4">
                    <p class="text-sky-900 text-xs font-semibold">Вариант исполнения:</p>
                    <div class="flex gap-1 my-2">
                      <div class="bg-gray-100 px-1 py-1 rounded-2xl flex items-center justify-center border border-sky-950/10">
                        <input :id="`var${pk}`"  type="radio" value="archive" name="default-radio" class="text-xs text-sky-800 bg-gray-100 border-gray-300 focus:ring-sky-500/0  focus:ring-0">
                        <label :for="`var${pk}`" class="text-xs mx-2 font-semibold text-sky-800 cursor-pointer"> Грузовой автомобиль</label>
                      </div>
                      <div class="bg-gray-100 px-1 py-1 rounded-2xl flex items-center justify-center border border-sky-950/10">
                        <input :id="`var${pk}`"  type="radio" value="file" name="default-radio" class="text-xs text-sky-800 bg-gray-100 border-gray-300 focus:ring-sky-500/0 focus:ring-0">
                        <label :for="`var${pk}`" class="text-xs mx-2 font-semibold text-sky-800 cursor-pointer"> ЖД платформа</label>
                      </div>
                    </div>
                  </div>




                  <div class="flex items-center gap-4 py-1">
                    <button class="text-sm shadow-md shadow-black/50 bg-sky-800 text-gray-100 px-4 py-2 font-semibold uppercase cut-corners">Request price</button>
                    <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })" class="text-sm text-sky-800 font-semibold">Read more</nuxt-link>
                  </div>
                </div>
              </div>

              
            </div>            
          </div>



          <div class="">
            <div class="">
              <div class="flex items-center justify-end border-b border-sky-950/20">
                <p class="text-xl text-sky-950">Испытательное оборудование</p>
              </div>
              <div class="grid grid-cols-3 gap-8">
                <div v-for="i in 1" :key="i" class="my-2">

                  
                  <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })">
                    <div class="flex items-center justify-center bg-white">
                      <img src="/prod/fbm-140.png" class=" w-40 py-4" />
                    </div>

                    <div class="my-2">
                      <p class="text-sm font-semibold text-sky-950 ">ПРЕСС ГЕРКУЛЕС 300</p>
                    </div>
                    <div>
                      <p class="text-xs text-sky-950">
                      
                      {{ mashineDescription.slice(0, 200) }}<span class="">...</span>
                      </p>
                      <!-- <div class="flex justify-end">
                        <p class="text-xs text-sky-950 font-semibold">Read more</p>
                      </div> -->
                    </div>                  
                  </nuxt-link>


                  <div class="my-4 flex items-center gap-4 py-1">
                    <button class="text-sm shadow-md shadow-black/50 bg-sky-800 text-gray-100 px-4 py-2 font-semibold uppercase cut-corners">Request price</button>
                    <nuxt-link :to="localePath({ name: 'c-name', hash: '#product-description', params: { name: 'fbm-140'} })" class="text-sm text-sky-800 font-semibold">Read more</nuxt-link>
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
                <div class="grid grid-cols-1 gap-8">
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

    <div class="bg-sky-950 border-t border-b border-white/20">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="">
          <a href="#" class="flex items-center justify-center gap-2 py-6">
            <div class="mdi mdi-24px mdi-book-open-page-variant text-gray-100"></div>
            <p class="text-xl text-gray-100">Скачать каталог</p>
          </a>
        </div>
      </div>
    </div>


    <!-- <div id="learn" class="bg-white/80 my-10 min-h-screen grid grid-cols-1 content-center">
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
    </div> -->


<!-- <div id="background-page" class="bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]"> -->
    <!-- <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center"> -->
    <div id="repair" class="bg-fixed bg-no-repeat bg-[center_0px] bg-cover bg-[url('bg/bg-1.jpg')]">
      <div class="bg-white/80 py-8 grid grid-cols-1 content-center border-t border-b border-sky-950/20">
        <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

          <div class="flex items-center justify-end my-4">
            <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
              Наши услуги
            </p>
          </div>

          <dv class="grid grid-cols-2 gap-8">
            <div class="">
              <div class="flex">
                <div class="bg-sky-800 z-20 rounded-sm px-8 py-2">
                  <p class=" font-opensans font-semibold text-transparent text-lg bg-clip-text bg-gradient-to-r from-white to-gray-200 uppercase">
                    {{ $t('pages.index.repair-title') }}
                  </p>                  
                </div>
              </div>
              <div class="bg-gradient-to-br z-10 from-white/70 to-white/40 backdrop-blur-sm border border-sky-950/10 shadow-xl shadow-black/10 rounded-md -mt-6 py-8 ">

                <div class="py-2 px-4">
                  <p class="text-sky-900 uppercase text-sm font-semibold"> Мы имеем:</p>

                  <div class="grid grid-cols-1 gap-1 my-2">
                    <div class="flex items-center gap-2 text-sky-900/30 mdi mdi-brightness-1 text-xs">
                      <p class="text-sm text-sky-950"> Собственное современное производство</p>
                    </div>
                    <div class="flex items-center gap-2 text-sky-900/30 mdi mdi-brightness-1 text-xs">
                      <p class="text-sm text-sky-950"> Собственный конструкторский отдел</p>
                    </div>
                    <div class="flex items-center gap-2 text-sky-900/30 mdi mdi-brightness-1 text-xs">
                      <p class="text-sm text-sky-950"> Проверенных поставщиков материалов</p>
                    </div>            
                  </div>

                  
                </div>

                <div class="bg-sky-800 px-6 py-2">
                  <p class="text-sm text-white font-opensans">
                    {{ $t('pages.index.repair-text-1') }}
                  </p>                  
                </div>

                <div class="px-4">
                  <p class="text-sm text-sky-900 font-semibold se lect-none font-opensans my-4">
                    {{ $t('pages.index.repair-text-2') }}
                  </p>
                </div>
               
              </div>
            </div>


            <div class="mt-8">
              <div class="flex">
                <div class="bg-sky-800 z-20 rounded-sm px-8 py-2">
                  <p class=" font-opensans font-semibold text-transparent text-lg bg-clip-text bg-gradient-to-r from-white to-gray-200 uppercase">
                    {{ $t('pages.index.learn-title') }}
                  </p>                  
                </div>
              </div>
              <div class="bg-gradient-to-br z-10 from-white/70 to-white/40 backdrop-blur-sm border border-sky-950/10 shadow-xl shadow-black/10 rounded-md -mt-6 py-8 ">

                <div class="py-2 px-4">
                  <p class="text-sm text-sky-950 se lect-none font-opensans">
                    Мы предлагаем специализированное техническое обучение и консультации по электросварке рельсов.
                  </p>
                </div>

                <div class="py-2 px-4">
                  <p class="text-sm text-sky-950 se lect-none font-opensans">
                    Наша команда состоит из опытных инженеров и квалифицированных рабочих, которые всегда готовы и рады поделиться своими знаниями с другими профессионалами в этой области. 
                  </p>
                </div>
              
                <div class="bg-sky-800 px-6 py-2 rounded-sm">
                  <p class="text-sm text-gray-100 font-opensans">
                    Сервисная служба компании Railwelding уделяет много внимания качественной передаче знаний, постоянному сопровождению и обеспечению устойчивого производства без необходимости частого технического обслуживания. Такой комплексный подход к клиентскому сервису является залогом долгосрочного плодотворного сотрудничества.
                  </p>                  
                </div>

                <div class="py-2 px-4">
                  <p class="text-sm font-semibold text-sky-900 se lect-none font-opensans">
                    Мы охотно обучим и проконсультируем вас по всем вопросам эксплуатации и обслуживания выпускаемого нами оборудования.                  </p>
                </div>
        
              </div>
            </div>
          </dv>

        </div>
      </div>
    </div>



    <div id="service" class="bg-white/80 py-8 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="flex">
          <div class="bg-sky-800 z-20 rounded-sm px-8 py-2 ">
            <p class=" font-opensans font-semibold text-transparent text-lg bg-clip-text bg-gradient-to-r from-white to-gray-200 uppercase">
              Ремонт и обслуживание оборудования
            </p>                  
          </div>
          <!-- <p class="font-opensans font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
            Ремонт и обслуживание оборудования
          </p> -->
        </div>


        <div class="grid grid-cols-1 gap-8">


          <div class="">
            <div class="grid grid-cols-2 gap-8 py-8">
              <div class="bg-gradient-to-br from-gray-100/95 to-gray-50/90 border-l-8 border-sky-800/90 shadow-lg shadow-black/10 px-4">
                <div class=" h-[6rem] flex items-center py-2">
                  <p class="text-md text-sky-800 font-opensans">{{ $t('pages.index.service-2') }}</p>

                </div>
              </div>
            
              <div class="bg-gradient-to-br from-gray-100/95 to-gray-50/90 border-l-8 border-sky-800/90 shadow-lg shadow-black/10 px-4">
                <div class="h-[6rem] flex items-center py-2">
                  <p class="text-md text-sky-800 font-opensans">{{ $t('pages.index.service-3') }}</p>

                </div>
              </div>

              <div class="bg-gradient-to-br from-gray-100/95 to-gray-50/90 border-l-8 border-sky-800/90 shadow-lg shadow-black/10 px-4">
                <div class="h-[6rem] flex items-center py-2">
                  <p class="text-md text-sky-800 font-opensans">{{ $t('pages.index.service-4') }}</p>

                </div>
              </div>

              <div class="bg-gradient-to-br from-gray-100/95 to-gray-50/90 border-l-8 border-sky-800/90 shadow-lg shadow-black/10 px-4">
                <div class="h-[6rem] flex items-center py-2">
                  <p class="text-md text-sky-800 font-opensans">{{ $t('pages.index.service-5') }}</p>

                </div>
              </div>
            </div>

          </div>
        </div>



        <div class=" grid grid-cols-2 gap-8 py-8">

          <div class="flex items-end">
            <div class="">
              <p class="text-xl font-semibold text-sky-900 se lect-none font-opensans uppercase py-1">Почему выбирают нас?</p>
              <p class="text-sm text-sky-950 se lect-none font-opensans py-1">
                {{ $t('pages.index.service-1' ) }}
              </p>
              <div class="my-4">
                <p class="text-base text-sky-950 se lect-none font-opensans">
                  {{ $t('pages.index.service-6') }}
                </p>
              </div>              
            </div>
          </div>

          <div class="">

            <!-- <div class="flex mb-4">
              <div class="bg-sky-800 z-20 rounded-sm px-8 py-2 ">
                <p class=" font-opensans font-semibold text-transparent text-lg bg-clip-text bg-gradient-to-r from-white to-gray-200 uppercase">
                  {{ $t('pages.index.contactus') }}
                </p>                  
              </div>
            </div> -->

            <div class="flex items-center justify-start mb-2">
              <p class="text-xl font-semibold text-sky-900 se lect-none font-opensans uppercase py-1">
                {{ $t('pages.index.contactus') }}
              </p>
            </div>

            <div class="grid grid-cols-1 gap-2">

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-16px mdi-account-tie text-sky-950/90"></p>
                <input type="text" id="person" class="bg-gray-50 shadow-lg shadow-black/10 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-8 py-1.5 " :placeholder="$t('pages.index.yorname')" />
              </div>

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-16px mdi-at text-sky-950/90"></p>
                <input type="text" id="person" class="bg-gray-50 shadow-lg shadow-black/10 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-8 p-1.5 " :placeholder="$t('pages.index.youremail')" />
              </div>

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-16px mdi-text-long text-sky-950/90"></p>
                <textarea type="text" id="person" rows="4" class="bg-gray-50 shadow-lg shadow-black/10 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-8 p-1.5 " :placeholder="$t('pages.index.yourmess')"></textarea>
              </div>

              <div class="grid grid-cols-2 gap-8 items-center">
                <div class="">
                  <input id="agreement" v-model="newFileCustomDateStatus" type="checkbox" class="rounded text-sky-800 focus:ring-white/0 focus:ring-offset-0 focus:outline-none">
                  <label for="agreement" class="text-xs text-gray-600 mx-2 cursor-pointer select-none"> Согласен на обработку данных</label>
                </div>
                <button class="bg-sky-800 text-gray-50 font-semibold py-2 shadow-lg shadow-black/30">{{ $t('pages.index.send') }}</button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>


    <div class="border-t border-sky-950/30">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-4 py-2">
          
          <div class="text-sky-900 flex items-center gap-4">
            <div>
              <div class="mdi mdi-36px mdi-map-marker text-sky-900"></div>
            </div>
            <div>
              <p class="font-semibold text-sm">Railwelding GmbH</p>
              <div class="py-1 grid grid-cols-1 gap-0.5">
                <p class="text-xs">Axel Springer Neubau</p>
                <p class="text-xs">Zimmerstraße 50, 10117 Berlin</p>                  
              </div>              
            </div>
          </div>

          <div class="text-sky-900 flex items-center gap-8">
            <div>
              <div class="mdi mdi-36px mdi-phone-classic text-sky-900"></div>
            </div>
            <div>
              <p class="font-semibold text-sm">+ 49 (123) 000 45 45</p>
              <div class="py-1 grid grid-cols-1 gap-0.5">
                <p class="text-xs">info@railwelding.com</p>
                <p class="text-xs">order@railwelding.com</p>              
              </div>              
            </div>
          </div>

          <div class="text-sky-900 flex items-center gap-8">
            <div>
              <div class="mdi mdi-36px mdi-book-open-page-variant text-sky-900"></div>
            </div>
            <div>
              <p class="font-semibold text-sm">Cкачать каталог</p>
              <div class="py-1 grid grid-cols-1 gap-1">

                <a href="#" class="text-xs cursor-pointer">catalog-railwelding.pdf</a>
                <a href="#" class="text-xs cursor-pointer">catalog-railwelding.docx</a>
      
              </div>              
            </div>
          </div>

          <div class="text-sky-900 flex items-center gap-8">
            <div>
              <div class="mdi mdi-36px mdi-train text-sky-900"></div>
            </div>
            <div>
              <p class="font-semibold text-sm">Материалы</p>
              <div class="py-1 grid grid-cols-1 gap-0.5">
                <p class="text-xs cursor-pointer">Документы</p>
                <p class="text-xs cursor-pointer">Видеоматериалы</p>              
              </div>              
            </div>
          </div>

        </div>
      </div>
    </div>


    
    <div id="contact-us" class=" bg-gradient-to-br from-sky-950 via-sky-900 to-sky-950 min-h- screen grid grid-cols-1 content-center border-t border-white py-8">


      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="">
          <div class="grid grid-cols-2 gap-12 py-8">
            <div class="grid grid-cols-1 content-between">
              <div class="">
                <div class="flex items-start justify-start border-b border-gray-100/20">
                  <div class="">
                    <p class="text-base text-gray-100 se lect-none font-semibold">
                      {{ $t('pages.index.aboutus-title') }}
                    </p>
                  </div>
                </div>
                <div class="my-2">
                  <p class="text-sm text-gray-100 se lect-none font-opensans">
                    {{ $t('pages.index.aboutus-text') }}
                  </p>                  
                </div>
              </div>
              <div class="">
                <div class="flex items-center justify-center py-4">
                  <p class="text-center text-sm text-gray-100 se lect-none font-opensans">{{ $t('pages.index.aboutus-promo') }}</p>
                </div>
                <div class="flex items-end justify-center">
                  <img src="/logo-white.png" class=" h-6"/>
                </div>
              </div>
            </div>
            <div class="border border-white/50 shadow-lg shadow-black/50 rounded-sm">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.632374104829!2d13.388066589832308!3d52.50834305015572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d7b48083ff%3A0x39d44292c4df2659!2sAxel%20Springer%20Neubau!5e1!3m2!1sru!2sru!4v1691392224183!5m2!1sru!2sru" width="100%" height="300" class=" rounded-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>          
          </div>


          <div class="">

            <div class="flex items-center justify-center py-6">
              <p class="text-white text-sm">Нашими партнёрами уже стали</p>
            </div>

            <div class="grid grid-cols-4 gap-2">
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/2.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Kazakh Railways</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/1.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Lithuanian Railways</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/3.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Ozbekiston temir yollari</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/4.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Belarusian railways</p>
                </div>
              </div>
            </div>
          </div>



        </div>

        
        <!-- <div class="flex gap-4 items-center justify-between py-12 hidden">
          <div class="">
            <div class="flex items-center justify-start my-4 border-b border-gray-100/20">
              <p class="text-gray-100 font-semibold">
                {{ $t('pages.index.partners') }}
              </p>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/2.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Kazakh Railways</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/1.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Lithuanian Railways</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/3.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Ozbekiston temir yollari</p>
                </div>
              </div>
              <div class="px-8">
                <div class="flex items-center justify-center py-2">
                  <img src="/partners/4.png" class="h-12"/>
                </div>
                <div class="flex items-center justify-center py-2">
                  <p class="text-gray-100 text-xs">Belarusian railways</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[30em]">

            <div class="flex items-center justify-start my-4 border-b border-gray-100/20">
              <p class="text-gray-100 font-semibold ">
                {{ $t('pages.index.contactus') }}
              </p>
            </div>

            <div class="grid grid-cols-1 gap-2">

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-16px mdi-account-tie text-sky-950/90"></p>
                <input type="text" id="person" class="bg-gray-50 shadow-md shadow-black/50 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-8 py-1.5 " :placeholder="$t('pages.index.yorname')" />
              </div>

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-16px mdi-at text-sky-950/90"></p>
                <input type="text" id="person" class="bg-gray-50 shadow-md shadow-black/50 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-8 p-1.5 " :placeholder="$t('pages.index.youremail')" />
              </div>

              <div class="relative">
                <p class="absolute px-2 py-1 mdi mdi-16px mdi-text-long text-sky-950/90"></p>
                <textarea type="text" id="person" rows="4" class="bg-gray-50 shadow-md shadow-black/50 border border-gray-300 focus:border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500/0 focus:border-blue-500/0 block w-full pl-8 p-1.5 " :placeholder="$t('pages.index.yourmess')"></textarea>
              </div>
            
              <button class="bg-sky-900 text-gray-50 font-semibold py-1 rounded-sm rounded-b-xl shadow-lg shadow-black/50">{{ $t('pages.index.send') }}</button>
            
            </div>

          </div>
        </div> -->
      


      </div>
      
    </div>


  </div>

</template>


<style>
  .cut-corners {
    clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px, 10px 0);
  }
</style>