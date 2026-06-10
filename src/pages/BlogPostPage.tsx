import {useEffect, useState} from 'react'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {sanityClient, urlFor, POST_BY_SLUG_QUERY, type Post} from '../lib/sanity'

const components: PortableTextComponents = {
  types: {
    image: ({value}) => (
      <img
        src={urlFor(value).width(1200).url()}
        alt={value?.alt || ''}
        loading="lazy"
        className="rounded-xl my-6 w-full"
      />
    ),
  },
  block: {
    h2: ({children}) => <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-oxford-blue-1 mt-10 mb-4">{children}</h2>,
    h3: ({children}) => <h3 className="font-montserrat font-semibold text-xl text-oxford-blue-1 mt-8 mb-3">{children}</h3>,
    blockquote: ({children}) => <blockquote className="border-l-4 border-carolina-blue pl-4 italic my-6 text-sonic-silver">{children}</blockquote>,
    normal: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
  marks: {
    link: ({value, children}) => (
      <a href={value?.href} className="text-carolina-blue underline hover:text-royal-blue-light" target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">{children}</ol>,
  },
}

const BlogPostPage = ({slug}: {slug: string}) => {
  const [post, setPost] = useState<Post | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    sanityClient
      .fetch<Post | null>(POST_BY_SLUG_QUERY, {slug})
      .then((p) => {
        if (!p) setError('Post not found')
        else setPost(p)
      })
      .catch((e) => setError(e.message || 'Failed to load post'))
  }, [slug])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {error && (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">{error}</h1>
          <a href="/blog" className="text-carolina-blue underline">← Back to blog</a>
        </div>
      )}

      {!post && !error && (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center text-gray-500">Loading…</div>
      )}

      {post && (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <a href="/blog" className="text-carolina-blue hover:underline text-sm mb-6 inline-block">← Back to blog</a>

          <time className="block text-sm text-sonic-silver mb-2">
            {new Date(post.publishedAt).toLocaleDateString('en-IN', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </time>
          <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-oxford-blue-1 mb-8 leading-tight">
            {post.title}
          </h1>

          {!!post.coverImage && (
            <img
              src={urlFor(post.coverImage).width(1600).height(900).fit('crop').url()}
              alt={(post.coverImage as any)?.alt || post.title}
              className="rounded-2xl w-full mb-10 shadow-lg"
            />
          )}

          {!!post.body && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} components={components} />
            </div>
          )}
        </article>
      )}

      <Footer />
    </div>
  )
}

export default BlogPostPage
