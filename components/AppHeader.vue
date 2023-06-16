<script setup>
  const colorMode = useColorMode()
  // const route = useRoute()

  // const { data: widebanners } = await useFetch('http://127.0.0.1:8000/c/widebanners/')
  // console.log(route.params.id)
</script>


<template>
  <div class="mx-auto max-w-7xl px-4 lg:max-w-7xl lg:px-8 relative">

    <div class="absolute top-0 w-full">
      <div class="py-4">
        <a href="mailto:info@railweldingsolutions.com" class=" text-gray-300 hover:text-gray-100 transition-all duration-1000">info@railweldingsolutions.com</a>
        <!-- <select
          v-model="colorMode.preference"
          class=" text-gray-900 text-sm rounded-sm focus:border-white/0 block dark:bg-gray-700/0 dark:text-gray-700 dark:border-gray-600/0 dark:placeholder-gray-400 focus:ring-white/0 dark:focus:border-white/0"
        >
          <option value="system" class="text-gray-700 dark:text-gray-300">System</option>
          <option value="light" class="text-gray-700 dark:text-gray-300">Light</option>
          <option value="dark" class="text-gray-700 dark:text-gray-300">Dark</option>
        </select> -->

      </div>
    </div>

  </div>
</template>