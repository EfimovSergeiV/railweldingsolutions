<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()
  const router = useRouter()

  definePageMeta({
    title: 'pages.title.about'
  })

  useHead({
    meta: [{ property: "og:title", content: "this is og title for about page" }]
  })

  const { data: widebanner } = await useFetch(`${ config.public.baseURL }c/widebanners/`)
  const { data: banners } = await useFetch(`${ config.public.baseURL }c/mainbanner/`)
  const { data: brands } = await useFetch(`${ config.public.baseURL }c/brands/`)
  const { data: esab } = await useFetch(`${ config.public.baseURL }c/prods/?brnd=3`)
  const { data: latest } = await useFetch(`${ config.public.baseURL }c/neues/`)
  
  const advantages = ref([  
    { "id": 1, "text": "Мощные сварочные трансформаторы, что позволяет вести сварку на более жестких режимах" },
    { "id": 2, "text": "Наличие цилиндров зажатия с мультипликационным давлением, которое исключает проскальзывание рельсов при осадке" },
    { "id": 3, "text": "Горизонтальное расположение цилиндров зажатия для создания постоянного, не зависящего от износа губок, усилия" },
    { "id": 4, "text": "Съём грата выполняется автоматически, сразу после сварки, накидным гратоснимателем с помощью встроенных автономных гидроцилиндров гратосьема" },
    { "id": 5, "text": "Грат снимается по всему периметру профиля рельса" },
    { "id": 6, "text": "Большой ресурс работы ножей накидного гратоснимателя за счет наплавленных режущих кромок" },
    { "id": 7, "text": "Ход цилиндров осадки составляет 100мм, при необходимости по спец. заказу может быть увеличен" },
    { "id": 8, "text": "Возможность, за счет увеличенного усилия осадки – 120 т., сваривать длинномерные рельсовые плети в пути (производить подтяжку плетей)" },
    { "id": 9, "text": "Центрирование рельса не зависящее от износа зажимных губок" },
    { "id": 10, "text": "Наличие пневмогидроаккумулятора, который служит для накопления энергии давления в гидросистеме в период пауз ее потребления гидроагрегатами и выдачи ее в систему при увеличении секундного расхода масла в момент осадки" },
  ])

  const specifications = ref([
    { "id": 1, "key": "Напряжение питающей сети, В", "value": "380" },
    { "id": 1, "key": "Частота, Гц", "value": "50" },
    { "id": 1, "key": "Номинальный длительный вторичный ток, кА", "value": "24" },
    { "id": 1, "key": "Наибольший вторичный ток, кА, не менее", "value": "67" },
    { "id": 1, "key": "Наибольшая мощность короткого замыкания, кВА", "value": "500" },
    { "id": 1, "key": "Сопротивление вторичного контура машины вторичному току, мкОм, не более", "value": "20" },
    { "id": 1, "key": "Номинальная мощность, потребляемая машиной из сети при ПВ=50%, кВА", "value": "258" },
    { "id": 1, "key": "Наибольшее усилие осадки Кн при наибольшем давлении в гидросистеме", "value": "1400" },
    { "id": 1, "key": "Наибольшее рабочее давление в гидросистеме, Мпа, не более", "value": "" },
    { "id": 1, "key": "Привод механизма зажатия осадки", "value": "Гидравлический" },
    { "id": 1, "key": "Расход охлаждающей жидкости при давлении 0,15 МПа, л/мин", "value": "20" },
    { "id": 1, "key": "Масса комплекта поставки, кг", "value": "5000" },
    { "id": 1, "key": "Габаритные размеры, мм:", "value": null },
    { "id": 1, "key": "сварочной машины", "value": "1860x1050x1300" },
    { "id": 1, "key": "насосной станции", "value": "1270x740x1530" },
    { "id": 1, "key": "шкафа управления", "value": "1200x600x1600" },
  ])

  const materials = ref([
    { "id": 1, 'title': "Видеообзор 1", "link": "#", },
    { "id": 2, 'title': "Видеообзор 2", "link": "#", },
    { "id": 2, 'title': "Видеообзор 3", "link": "#", },
    { "id": 2, 'title': "Видеообзор 4", "link": "#", },
    { "id": 3, 'title': "Инструкция по эксплуатации", "link": "#", },
    { "id": 4, 'title': "Сертификат", "link": "#", },
  ])


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
                    <button class="bg-gradient-to-tr from-white via-gray-200 to-gray-200 font-semibold text-main-secondary w-60 py-2 rounded-sm shadow-xl shadow-main-secondary mt-2">{{ $t('requestCall') }}</button>
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
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+200</span><p class="text-gray-100 text-base font-semibold"> Клиентов</p></div>

        </div>

      </div>
    </div>


    <div id="product-description" class="bg-gray-300 grid grid-cols-1 content-center ">
      <div class="container mx-auto lg:max-w-7xl lg:px-8">
        <div class="my-4">
            <div class="flex items-center justify-start">
              <div class="flex gap-1 text-sm font-semibold text-sky-950 text-center"><nuxt-link :to="localePath({ name: 'index' })" class="uppercase">Главная</nuxt-link></div>
              <div class="flex gap-1 text-sm font-semibold text-sky-950 text-center mdi mdi-chevron-double-right"><nuxt-link :to="localePath({ name: 'c', hash: '#products' })" class="uppercase">Оборудование для сварки рельсов</nuxt-link></div>
              <div class="flex gap-1 text-sm font-semibold text-sky-950 text-center mdi mdi-chevron-double-right"><p class="uppercase">FBM-60</p></div>
            </div>
          </div>
      </div>
    </div>


    <div class="bg-white py-2 grid grid-cols-1 content-center">
      <div class="container mx-auto lg:max-w-7xl lg:px-8">

        <div class="">

          <div class="flex items-center gap-8 py-2">
            <div class="flex-none">
              <div class="bg-white w-[400px] flex items-center justify-center">
                <img src="/prod/fbm-140.png" class=" w-40 py-4" />
              </div>
            </div>               
            <div class="grid grid-cols-1 content-between ">
              <div class="flex items-center justify-start">
                <p class="text-lg font-semibold text-sky-950 text-center">{{ $t('pages.index.prod-name-1') }}</p>
              </div>
              
              <div class="py-4">
                <p class="text-base text-sky-950">
                  The machine is designed for flash butt welding of rails with cross-sectional area of from 6,500 mm to 10,000 mm in field conditions, through continuous or pulsating flashing, and removes flash immediately after welding. Due to the increased upsetting force of 140 tons, the welding machine is capable of welding long rail strings into tracks and tightening the strings. The welding machine can hold the welded joint within the time necessary for the joint to cool down after welding and removing flash. The welding machine is equipped with a welding process control system, which allows monitoring the welding process and and issues data sheets for every welded joint.
                </p>                
              </div>

              <div class="flex items-end justify-between gap-4 py-4">
                <div class="">
                  <div class="">
                    <div class="">
                      <p class="text-sky-900 text-sm font-semibold">Вариант исполнения:</p>
                      <div class="flex gap-1 my-2">
                        <div class="bg-gray-100 px-1 py-1 rounded-2xl flex items-center justify-center border border-sky-950/10">
                          <input id="var"  type="radio" value="archive" name="default-radio" class="text-xs text-sky-800 bg-gray-100 border-gray-300 focus:ring-sky-500/0  focus:ring-0">
                          <label for="var" class="text-xs mx-2 font-semibold text-sky-800 cursor-pointer"> Грузовой автомобиль</label>
                        </div>
                        <div class="bg-gray-100 px-1 py-1 rounded-2xl flex items-center justify-center border border-sky-950/10">
                          <input id="var"  type="radio" value="file" name="default-radio" class="text-xs text-sky-800 bg-gray-100 border-gray-300 focus:ring-sky-500/0 focus:ring-0">
                          <label for="var" class="text-xs mx-2 font-semibold text-sky-800 cursor-pointer"> ЖД платформа</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="">
                    <div class="bg-white flex items-center gap-2 cursor-pointer">
                      <img src="/pngegg.webp" class="w-10 opacity-95" />
                      <div class="grid grid-cols-1 items-center gap-0.5">
                        <p class="text-sky-900 text-sm font-semibold uppercase"> FBM-140 RAIL WELDING MACHINE</p>
                        <p class="text-sky-950 text-sm">.PDF</p>
                      </div>
                    </div>                    
                  </div> -->
                </div>

                <button class=" py-3 shadow-lg shadow-black/30 px-16 bg-sky-800 text-gray-100 text-sm font-semibold uppercase">Заказать</button>
              </div>
            </div>
          </div>

          <div class="flex gap-4 py-2">
            <div class="bg-white px-4 py-2"><img src="/prod/fbm-140.png" class="w-20" /></div>
            <div class="bg-white px-4 py-2"><img src="/prod/fbm-140.png" class="w-20" /></div>
            <div class="bg-white px-4 py-2"><img src="/prod/fbm-140.png" class="w-20" /></div>
            <div class="bg-white px-4 py-2"><img src="/prod/fbm-140.png" class="w-20" /></div>
            <div class="bg-white px-4 py-2"><img src="/prod/fbm-140.png" class="w-20" /></div>
          </div>

        </div>
      </div>


      <!-- <div class=" bg-white py-4">
        <div class="">

          <div class="container mx-auto lg:max-w-7xl lg:px-8 py-4 ">
            <div class="flex items-center justify-start py-4">
              <p class="text-lg font-semibold text-sky-950 uppercase">Преимущества:</p>
            </div>
            <div class=" columns-2 gap-4">

              <div class="my-2 break-inside-avoid-column" v-for="(advantage, pk) in advantages" :key="pk">
                <div class="px-2 py-4 bg-gradient-to-br from-gray-100/95 to-gray-50/90 border-l-8 border-sky-800/90 shadow-lg shadow-black/10">
                  <p class="text-sm font-semibold text-sky-900">{{ advantage.text }}</p>
                </div>
              </div>                

            </div>            
          </div>

        </div>
      </div> -->
    </div>


    <div class=" bg-white grid grid-cols-1 content-center py-2">
      <div id="product-property" class="container mx-auto lg:max-w-7xl lg:px-8">
        <div class=" flex gap-8 py-8">
          <div class=" w-1/3">
            <div class="my-2">
              <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">Материалы:</p>
            </div>
            
            <div class="py-2 ">
              <div class="grid grid-cols-1 gap-2 text-sky-950">
                <div v-for="material in materials" :key="material.id" class="">
                  <a :href="material.link">
                    <div class="flex items-center gap-1">
                      <div class="mdi mdi-open-in-new"></div>
                      <p class=" text-sm">{{ material.title }}</p>
                    </div>
                    
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full text-sm">
            <div class="my-2">
              <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">Технические параметры:</p>
            </div>
            <div class=" grid grid-cols-1 gap-2 py-4">
              <div v-for="specification in specifications" :key="specification.id" class="">
                <div v-if="specification.value" class="">
                  <div class="flex items-center justify-between text-sm border-b border-sky-950/30 hover:border-sky-950/50 transition-all duration-300">
                    <p class="text-sky-950 se lect-none font-opensans">{{ specification.key }}</p>
                    <p class="text-sky-950 se lect-none font-opensans font-semibold">{{ specification.value }}</p>
                  </div>                
                </div>
                <div v-else class="">
                  <div class="flex items-center justify-start text-sm mt-6">
                    <p class="text-sky-950 se lect-none font-opensans font-semibold">{{ specification.key }}:</p>
                  </div>
                </div>

              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>

    <div class=" bg-sky-950 grid grid-cols-1 content-center py-4 border-t border-black/10">
      <div id="product-property" class="container mx-auto lg:max-w-7xl lg:px-8">
      

        <div class="flex items-center justify-start py-4">
          <p class="text-lg font-semibold text-gray-100 uppercase">Преимущества машины</p>
        </div>
        <div class=" columns-2 gap-4">

          <div class="my-2 break-inside-avoid-column" v-for="(advantage, pk) in advantages" :key="pk">
            <div class="py-1">
              <p class="text-sm text-gray-200">{{ advantage.text }}</p>
            </div>
          </div>                

        </div>            

      
      </div>
    </div>


  </div>
</template>