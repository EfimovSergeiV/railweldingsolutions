<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex gap-4 items-center justify-end">
		<button @click="swiper.slideNext()" class="mdi mdi-arrow-left-bold mdi-24px"></button>
		<button @click="swiper.slidePrev()" class="mdi mdi-arrow-right-bold mdi-24px"></button>		
	</div>

</template>
