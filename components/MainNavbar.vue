<template>
  <div>
    <UCard
      :ui="{
        body: {
          padding: 'p-2 sm:p-3',
          base: 'flex flex-row justify-between items-center',
        },
      }"
    >
      <NuxtLink to="/">
        <h1 class="text-lg font-bold">
          <span class="text-emerald-500">Nuxt</span> i18n +
          <span class="text-indigo-500">Strapi 5</span> i18n
        </h1>
      </NuxtLink>
      <section class="flex flex-row items-center gap-3">
        <ColorScheme>
          <USelect
            v-model="$colorMode.preference"
            :options="['system', 'light', 'dark']"
          />
        </ColorScheme>
        <LangSwitch />
      </section>
    </UCard>
  </div>
</template>
