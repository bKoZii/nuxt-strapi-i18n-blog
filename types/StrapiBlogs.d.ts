export interface StrapiBlogs {
  id: number
  documentId: string
  title: string
  subtitle: string
  slug: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  categories: Category[]
}

export interface Category {
  id: number
  documentId: string
  name: string
}
