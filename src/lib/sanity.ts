import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string
const dataset = (import.meta.env.VITE_SANITY_DATASET as string) || 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: SanityImageSource) => builder.image(source)

export type Post = {
  _id: string
  title: string
  slug: {current: string}
  excerpt?: string
  coverImage: SanityImageSource & {alt?: string}
  publishedAt: string
  body?: unknown
}

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, excerpt, coverImage, publishedAt
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, excerpt, coverImage, publishedAt, body
}`
