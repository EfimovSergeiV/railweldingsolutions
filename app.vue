
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :color="'repeating-linear-gradient(to right,#38bdf8 0% ,#0369a1 100%)'" :height="2" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">

  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(0.1rem);
  }
</style>
