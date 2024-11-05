<template>
  <Body class="bg-slate-200 dark:bg-neutral-950" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} [Nuxt 3 + Strapi 5 i18n]` : 'Nuxt 3 + Strapi 5 i18n'
  },
})
</script>

<style>
@media (min-width: 400px) and (prefers-reduced-motion: no-preference) {
  .page-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .page-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-20px);
  }
  .layout-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .layout-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
