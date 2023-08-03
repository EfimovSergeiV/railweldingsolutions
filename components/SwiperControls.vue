<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex gap-4 items-center justify-end">
		<button @click="swiper.slideNext()" class="mdi mdi-transfer-left text-sky-950 mdi-36px rounded-full w-10 h-10 transition-all"></button>
		<button @click="swiper.slidePrev()" class="mdi mdi-transfer-right text-sky-950 mdi-36px rounded-full w-10 h-10 transition-all"></button>		
	</div>

</template>