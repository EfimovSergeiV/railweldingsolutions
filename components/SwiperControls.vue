<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex gap-4 items-center justify-end">
		<button @click="swiper.slideNext()" class="mdi mdi-transfer-left text-sky-950"></button>
		<button @click="swiper.slidePrev()" class="mdi mdi-transfer-right text-sky-950"></button>		
	</div>
</template>