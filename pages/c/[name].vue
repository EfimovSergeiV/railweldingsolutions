<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()
  const router = useRouter()

</script>


<template>
  <div class="grid grid-cols-1 gap-4 my-10 bg-white">
    <p>{{ route }}</p>
  </div>
</template>