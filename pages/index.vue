<template>
  <div class="">

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
        <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-700/70 uppercase se lect-none">
          {{ $t('pages.index.readySolutions') }}
        </p>


        <div class="my-4">
          <div class="grid grid-cols-3 gap-4">

            <div v-for="i in 15" :key="i" class="my-2">
            
              <div class="flex items-center justify-center bg-white border border-sky-950">
                <img src="/prod/fbm-140.png" class=" w-40" />
              </div>
              <div class="my-2">
                <p class="text-sm font-semibold text-sky-950 text-center">{{ $t('pages.index.prod-name-1') }}</p>
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

    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">
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

          <div class="flex gap-4 items-center justify-end my-8">
            <div v-for="i in 4" :key="i" class="">
              <img src="/teh-support.png" class="h-28 rounded-lg"/>
            </div>
            

          </div>

        </div>




      </div>
    </div>



    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="my-2">
          <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
            {{ $t('pages.index.service-title') }}
          </p>
        </div>

        <p class="text-base text-sky-950 se lect-none font-opensans">
          {{ $t('pages.index.service-1') }}
        </p>
        
        <div class="flex my-4">
          <div class=" grid grid-cols-1 gap-4">
            
            <div class="flex items-center w-10/12 gap-4 text-sky-950/80 mdi mdi-brightness-1">
              <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-2') }}</p>
            </div>
            <div class="flex items-center w-10/12 gap-4 text-sky-950/80 mdi mdi-brightness-1">
              <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-3') }}</p>
            </div>
            <div class="flex items-center w-10/12 gap-4 text-sky-950/80 mdi mdi-brightness-1">
              <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-4') }}</p>
            </div>
            <div class="flex items-center w-10/12 gap-4 text-sky-950/80 mdi mdi-brightness-1">
              <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">{{ $t('pages.index.service-5') }}</p>
            </div>

          </div>
        </div>

        <div class="my-8">
          <p class="text-base text-sky-950 se lect-none font-opensans font-semibold">
            {{ $t('pages.index.service-6') }}
          </p>
        </div>


          
      </div>
    </div>



    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="my-2">
          <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
            {{ $t('pages.index.repair-title') }}
          </p>
        </div>
         
        <p class="text-base text-sky-950 se lect-none font-opensans">
          {{ $t('pages.index.repair-text') }}
        </p>
      </div>
    </div>


    
    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">


      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-center text-center">
          <div class="my-2">
            <p class="font-opensans font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-900 to-sky-800 uppercase se lect-none">
              {{ $t('pages.index.aboutus-title') }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center text-center">
          <div class="">
            <p class="text-base text-sky-950 se lect-none font-opensans">
              {{ $t('pages.index.aboutus-text') }}
            </p>
          </div>
        </div>
      

      <div class="flex items-center justify-center py-2 mt-8 px-10">
        <p class="text-base text-sky-950 se lect-none font-opensans">{{ $t('pages.index.aboutus-promo') }}</p>
      </div>

      <div class="flex items-center justify-center py-4">
        <img src="/logo.png" class=" h-8"/>
      </div>
      </div>
      
    </div>


  </div>

</template>