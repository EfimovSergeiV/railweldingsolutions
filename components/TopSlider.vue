<script setup>

  const { data: widebanners } = await useFetch('http://127.0.0.1:8000/c/widebanners/')
  const countStore = useCountStore()

</script>


<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 my-4">
    
    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide v-for="slide in widebanners" :key="slide.id">
        <div class="relative">

          <img
            :src="slide.image"
            style="width: 100%;"
            width="1024px"
            height="320px"
            class="rounded-sm"
            :alt="slide.name"
            onerror="this.src='./noimage-960-540.jpg'"
          />

          <nuxt-link v-if="slide.path" :to="slide.path">  
            <div class="absolute top-0 right-0 z-50 w-full h-full">
              <div class="flex justify-end">
                <div class="relative mx-2 md:mx-4 md:my-2">
                  <span class="mdi mdi-16px mdi-link-variant text-whitw shadow-2xl"></span>
                </div>
              </div>
            </div>
          </nuxt-link>

          <a :href="slide.link" target="blank" v-if="slide.link">  
            <div class="absolute top-0 right-0 z-50 w-full h-full">
              <div class="flex justify-end">
                <div class="relative mx-2 md:mx-4 md:my-2">
                  <span class="mdi mdi-16px mdi-link-variant text-whitw shadow-2xl"></span>
                </div>
              </div>
            </div>
          </a>

        </div> 
        
      </SwiperSlide>

      <SwiperControls />
    </Swiper>

    <!-- <p class="text-xs text-gray-700">{{ widebanners }}</p> -->

  </div>
</template>

<style>
/* .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
} */
</style>