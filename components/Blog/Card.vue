<template>
  <div>
    <div>
      <NuxtLink :to="$props.post.slug">
        <UCard
          :ui="{
            base: 'group',
            body: { padding: 'p-0 sm:p-0' },
            ring: 'hover:ring-primary-500 dark:hover:ring-primary-700',
            footer: { base: 'flex justify-center' },
          }"
        >
          <template #header>
            <h1 class="group-hover:text-primary-400 mb-3 text-lg font-bold">
              {{ $props.post.title }}
            </h1>

            <p class="text-sm">
              {{ $props.post.subtitle }}
            </p>
            <div v-if="$props.post.categories" class="mt-3 flex flex-row gap-2">
              <div
                v-for="categories in $props.post.categories"
                :key="categories.documentId"
              >
                <UBadge :label="categories.name" size="sm" />
              </div>
            </div>
            <UTooltip
              class="mt-5"
              :text="
                $dayjs().locale($i18n.locale).to($dayjs($props.post.createdAt))
              "
              :popper="{
                placement: 'top',
                offsetDistance: 5,
                strategy: 'fixed',
              }"
            >
              <span class="flex items-center gap-2 text-xs text-neutral-500">
                <UIcon name="ph:calendar-dots-duotone" class="size-5" />{{
                  $dayjs($props.post.createdAt)
                    .locale($i18n.locale)
                    .format('D MMMM YYYY - HH:mm')
                }}
              </span>
            </UTooltip>
          </template>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StrapiBlogs } from '~/types/StrapiBlogs'

defineProps<{ post: StrapiBlogs }>()
</script>

<style scoped></style>
