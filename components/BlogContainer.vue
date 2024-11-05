<template>
  <div v-if="blogs">
    <section>
      <UInput
        v-model="searchInput"
        size="lg"
        icon="ph:magnifying-glass-duotone"
        :placeholder="$t('blog.searchPlaceholder')"
      />
    </section>
    <section
      v-if="blogs?.meta.pagination.total >= 1"
      class="mt-5 flex flex-col flex-nowrap gap-5"
    >
      <div v-for="blogData in blogs?.data" :key="blogData.documentId">
        <BlogCard :post="blogData" />
      </div>
    </section>
    <section v-else>
      <div
        v-if="status == 'success' && blogs?.meta.pagination.total == 0"
        class="my-3"
      >
        <UAlert
          :title="$t('blog.notFound')"
          color="red"
          variant="subtle"
          icon="ph:warning-circle-duotone"
          :description="$t('blog.notFoundDetail', { searchInput: searchInput })"
        />
      </div>
    </section>
    <UDivider class="my-5" />
    <section
      v-if="blogs.meta.pagination.total >= 1"
      class="mt-5 flex justify-center"
    >
      <UPagination
        v-model="currentPage"
        size="lg"
        :page-count="pageCount"
        :total="blogs.meta.pagination.total"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { StrapiBlogs } from '~/types/StrapiBlogs'

const searchInput = ref('')
const pageCount = 5
const loading = ref(false)
const currentPage = ref(1)
const { locale } = useI18n()
const { find } = useStrapi()

const constructSearchFilters = (searchInput: string) => {
  const keywords = searchInput.split(' ')
  const filters = keywords.map((keyword) => ({
    $or: [
      { title: { $containsi: keyword } },
      { subtitle: { $containsi: keyword } },
    ],
  }))
  return { $and: filters }
}

const {
  data: blogs,
  refresh,
  status,
} = useAsyncData(
  'allBlogs',
  () =>
    find<StrapiBlogs>('blogs', {
      locale: locale.value,
      sort: 'publishedAt:desc',
      pagination: { pageSize: pageCount, page: currentPage.value },
      populate: {
        categories: {
          fields: ['name'],
        },
      },
      filters: constructSearchFilters(searchInput.value),
    }),
  {
    watch: [locale, currentPage],
    deep: false,
  },
)

// Watch Search Input to refresh the blog list when the search input changes
watch(searchInput, () => {
  loading.value = true
  currentPage.value = 1
  search()
  loading.value = false
  if (searchInput.value === '') {
    refresh()
  }
})
// Debounce the search function to prevent multiple API calls
const search = useDebounceFn(() => {
  if (searchInput.value.length >= 3 && searchInput.value !== '') {
    refresh()
  }
}, 500)
</script>
