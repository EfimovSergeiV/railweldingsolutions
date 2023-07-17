<script setup>
  const colorMode = useColorMode()
  // const route = useRoute()

  // const { data: widebanners } = await useFetch('http://127.0.0.1:8000/c/widebanners/')
  // console.log(route.params.id)
</script>


<template>

  <div class="h-screen grid grid-cols-1 justify-between">

    <div class="h-[56px]">
      <div id="navbar" class="border-b border-main-primary/40 shadow-sm shadow-main-primary/40 w-full z-50 backdrop-blur-sm h-[56px] duration-700 transition-all">
        <div class=" container mx-auto px-4 lg:max-w-7xl lg:px-8 flex items-center justify-between gap-12 h-full">
          <div class="py-1">
            <nuxt-link to="#">
              <img src="logo.png" class=" h-6" />
            </nuxt-link>                
          </div>
          <div class="flex gap-4 items-center px-4">
            <div class="flex items-center justify-center py-1">
              <p class="text-sm text-center text-main-primary font-semibold">Рельсосварочное оборудование</p>
            </div>
            <div class="flex items-center justify-center py-1">
              <p class="text-sm text-center text-main-primary font-semibold">Испытательное оборудование</p>
            </div>
            <div class="flex items-center justify-center py-1">
              <p class="text-sm text-center text-main-primary font-semibold">Услуги</p>
            </div>
            <div class="flex items-center justify-center py-1">
              <p class="text-sm text-center text-main-primary font-semibold">О компании</p>
            </div>
            <div class="flex items-center justify-center py-1">
              <p class="text-sm text-center text-main-primary font-semibold">Язык</p>
            </div>                
          </div>
        </div>

      </div>


    </div>



    <div class=" ">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
          
        <div class="">
          
          <div class="border-b border-black/30 dark:border-white/30 py-4">
            <p class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-900 text-[40px] md:text-[80px] uppercase select-none">RailWelding</p>
            <p class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-900 text-[40px] md:text-[70px] uppercase select-none">Solutions</p>          
          </div>
          
          <div class="py-4">
            <p class="text-sm md:text-lg select-none">Development and production of rail welding machines</p>
          </div>
        
        
        </div>

      </div>      
    </div>



    <div class="bg-gradient-to-br from-main-primary/90 via-main-primary/80 to-main-secondary/60 backdrop-blur-sm border-t border-main-primary/40 py-8">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 h-0">
        
        <div class="flex items-end justify-between">
          <div class="">
            <p class="text-white font-black text-xl my-4">Почему выбирают нас ?</p>
            <div class="grid grid-cols-3 gap-4 text-gray-100">
              <div class=""><p class="text-sm mdi mdi-brightness-1"> Более 17 лет успешной работы</p></div>
              <div class=""><p class="text-sm mdi mdi-brightness-1"> Собственное конструкторское бюро</p></div>
              <div class=""><p class="text-sm mdi mdi-brightness-1"> Полный производственный цикл</p></div>
              <div class=""><p class="text-sm mdi mdi-brightness-1"> Сервисное обслуживание и поддержка</p></div>
              <div class=""><p class="text-sm mdi mdi-brightness-1"> Персональный менеджер</p></div>
              <div class=""><p class="text-sm mdi mdi-brightness-1"> Решение нестандартных задач</p></div>
            </div>                  
          </div>
          <div class="grid grid-cols-1 gap-2 text-right">
            <div class="grid grid-cols-1 gap-1">
              <p class="text-gray-100">info@railwelding.ru</p>
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


</template>