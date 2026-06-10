import { useEffect, useState } from 'react';
import { sanityClient, urlFor, type Post } from '../../lib/sanity';

const navigateTo = (path: string) => {
  if (typeof (window as any).navigateTo === 'function') {
    (window as any).navigateTo(path);
  } else {
    window.location.href = path;
  }
};

const LATEST_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...2] {
  _id, title, slug, excerpt, coverImage, publishedAt
}`;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const BlogCard = ({ post }: { post: Post }) => {
  const imgUrl = post.coverImage
    ? urlFor(post.coverImage).width(1180).height(800).fit('crop').url()
    : null;
  const altText = (post.coverImage as { alt?: string } | undefined)?.alt || post.title;

  return (
    <article
      onClick={() => navigateTo(`/blog/${post.slug.current}`)}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={altText}
            loading="lazy"
            decoding="async"
            width="1180"
            height="800"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200" />
        )}
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2 text-sm">
          <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2z" />
          </svg>
          <time className="text-sonic-silver font-medium">{formatDate(post.publishedAt)}</time>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-oxford-blue-1 mb-3 line-clamp-2 group-hover:text-carolina-blue transition-colors duration-200">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-sonic-silver leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="text-carolina-blue font-medium flex items-center gap-2">
            <span className="text-sm">Read more</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch<Post[]>(LATEST_POSTS_QUERY)
      .then(setPosts)
      .catch(() => setError(true));
  }, []);

  if (error || (posts && posts.length === 0)) return null;

  return (
    <section id="blog" className="section-padding bg-cultured">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
            Dental Health Insights
          </p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
            Latest from Wonder Smiles
          </h2>
          <div className="w-20 h-1 bg-carolina-blue mx-auto rounded-full mb-6"></div>
          <p className="text-sonic-silver max-w-2xl mx-auto leading-relaxed">
            Expert dental care insights and updates from Dr. Chandrama Patil and the Wonder Smiles team in Bavdhan, Pune.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts === null
            ? Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                  <div className="w-full h-64 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))
            : posts.map((post) => <BlogCard key={post._id} post={post} />)}
        </div>

        {posts && posts.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => navigateTo('/blog')}
              className="inline-flex items-center gap-2 text-carolina-blue hover:text-royal-blue-light font-semibold"
            >
              View all posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-oxford-blue-1 mb-4">
              Ready to Experience Wonder Smiles Care?
            </h3>
            <p className="text-sonic-silver mb-6">
              Book your appointment today and discover why families in Bavdhan choose Wonder Smiles for their dental care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#appointment" className="btn-primary">
                Book Appointment
              </a>
              <a
                href="tel:+919270418061"
                className="border border-carolina-blue text-carolina-blue hover:bg-carolina-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Call: +91 92704 18061
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
