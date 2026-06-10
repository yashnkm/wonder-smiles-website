import {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {sanityClient, urlFor, POSTS_QUERY, type Post} from '../lib/sanity'

const navigateTo = (path: string) => {
  if (typeof (window as any).navigateTo === 'function') {
    (window as any).navigateTo(path)
  } else {
    window.location.href = path
  }
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    sanityClient
      .fetch<Post[]>(POSTS_QUERY)
      .then(setPosts)
      .catch((e) => setError(e.message || 'Failed to load posts'))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white">
      <Header />

      <section className="relative py-24 bg-oxford-blue-1">
        <div className="container-custom text-center text-white">
          <nav className="mb-6">
            <ol className="flex justify-center items-center space-x-2 text-sm">
              <li>
                <a href="/" className="hover:text-carolina-blue transition-colors">Home</a>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-carolina-blue">Blog</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">Blog</h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Dental health insights from Dr. Chandrama Patil and the Wonder Smiles team.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {error && (
          <div className="text-center text-red-600">Failed to load posts: {error}</div>
        )}

        {!posts && !error && (
          <div className="text-center text-gray-500">Loading posts…</div>
        )}

        {posts && posts.length === 0 && (
          <div className="text-center text-gray-500">No posts yet. Check back soon!</div>
        )}

        {posts && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post._id}
                onClick={() => navigateTo(`/blog/${post.slug.current}`)}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                  {post.coverImage && (
                    <img
                      src={urlFor(post.coverImage).width(800).height(600).fit('crop').url()}
                      alt={(post.coverImage as any)?.alt || post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <time className="text-sm text-sonic-silver">
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </time>
                  <h2 className="font-montserrat font-bold text-xl text-oxford-blue-1 mt-2 mb-3 line-clamp-2 group-hover:text-carolina-blue transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sonic-silver line-clamp-3">{post.excerpt}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default BlogPage
