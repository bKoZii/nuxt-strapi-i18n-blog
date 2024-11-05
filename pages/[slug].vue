<template>
  <div>
    <article v-if="blogSlug">
      <section
        class="prose prose-sm prose-neutral max-w-none xl:prose-sm dark:prose-invert"
      >
        <h1 class="text-pretty">
          {{ blogSlug?.title }}
        </h1>
        <p>
          {{ blogSlug?.subtitle }}
        </p>
        <span class="flex items-center gap-2 text-xs"><UIcon name="ph:calendar-dots-duotone" class="size-5" />{{
          $dayjs(blogSlug.createdAt)
            .locale($i18n.locale)
            .format('D MMMM YYYY - HH:mm')
        }}</span>

        <span class="flex items-center gap-2 text-xs"><UIcon name="ph:clock-clockwise-duotone" class="size-5" />{{
          $dayjs(blogSlug.updatedAt)
            .locale($i18n.locale)
            .format('D MMMM YYYY - HH:mm')
        }}</span>

        <div v-if="blogSlug.categories" class="mt-3 flex flex-row gap-2">
          <div
            v-for="categories in blogSlug.categories"
            :key="categories.documentId"
          >
            <UBadge :label="categories.name" size="sm" />
          </div>
        </div>
      </section>
      <UDivider class="my-10" label="Content" />
      <section
        v-if="blogSlug?.content"
        class="prose prose-neutral max-w-none dark:prose-invert"
      >
        <MDC :value="blogSlug?.content" />
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { StrapiBlogs } from '~/types/StrapiBlogs'

const { locale } = useI18n()
const route: RouteLocationNormalized = useRoute()
const { findOne } = useStrapi()
const { data: blogSlug } = await useAsyncData(
  'blogSlug',
  () =>
    findOne<StrapiBlogs>('blogs', route.params.slug as string, {
      fields: ['title', 'subtitle', 'content', 'createdAt', 'updatedAt'],
      locale: locale.value,
      populate: {
        categories: {
          fields: ['name'],
        },
      },
    }),
  {
    watch: [locale],
    deep: false,
    transform: (data) => data.data,
  },
)
useHead({
  title: () => (blogSlug.value ? blogSlug.value.title : ''),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: blogSlug?.value?.subtitle,
    },
  ],
})
</script>
