<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()
  const router = useRouter()

</script>


<template>
  <div class="grid grid-cols-1 gap-4 bg-white py-4">
    <p>{{ route }}</p>
    <p v-for="i in 100" :key="i">Hallo welt</p>
    <nuxt-link :to="localePath({ name: 'index' })"> На главную</nuxt-link>
  </div>
</template>