<template>
  <div class="">

    <div class=" bg-main-primary">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="flex items-center h-20 justify-between">

          <div class="flex items-center gap-4"><span class="font-bold text-white text-[36px]">+150</span><p class="text-gray-100 text-sm">Сотрудников</p></div>
          <div class="flex items-center gap-4"><span class="font-bold text-white text-[36px]">+3500</span><p class="text-gray-100 text-sm">Реализованных проектов</p></div>
          <div class="flex items-center gap-4"><span class="font-bold text-white text-[36px]">+560 Га</span><p class="text-gray-100 text-sm">Площадь производства</p></div>
          <div class="flex items-center gap-4"><span class="font-bold text-white text-[36px]">+200</span><p class="text-gray-100 text-sm">Волнистых попугаев</p></div>

        </div>

      </div>
    </div>


    <div class="bg-white py-1">
      <div class="container mx-auto  lg:max-w-7xl lg:px-8">
        <p v-for="i in 15" :key="i" class="my-4">hallo welt</p>
      </div>      
    </div>


    <div class="">
      <div class="bg-white">

        <div class="bg-[url('images/rails-bg.jpg')] h-[480px] bg-no-repeat bg-left-bottom bg-cover">
          <div class="bg-main-primary/70 hover:bg-main-primary/80 backdrop-blur-sm transition-all duration-1000 h-full relative">
            <div class="absolute w-full h-full">

              <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 h-full">
                <div class="flex items-center justify-center h-full">
                  <div class="grid grid-cols-1 gap-2">
                    <p class="text-slate-200 font-black text-[36px] uppercase">Ищете надежное и эффективное решение для сварки рельсов?</p>
                    <p class="text-3xl text-white uppercase">У нас есть идеальное предложение для вас!</p>                
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="bg-white/80 py-1">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <p v-for="i in 15" :key="i" class="my-4">hallo welt</p>
      </div>      
    </div>


  </div>



</template>