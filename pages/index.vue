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


    <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
      <p v-for="i in 150" :key="i" class="my-4">hallo welt</p>
    </div>


  </div>



</template>