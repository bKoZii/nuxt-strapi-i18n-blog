<template>
  <div>
    <UContainer :ui="{ constrained: 'max-w-[1200px]', padding: 'py-3' }">
      <nav class="sticky top-0 z-10">
        <MainNavbar />
      </nav>
      <div class="mt-5">
        <slot />
      </div>
    </UContainer>
  </div>
</template>
