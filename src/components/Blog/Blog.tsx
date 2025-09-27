interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, image, date, readTime }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          width="1180"
          height="800"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2 text-sm">
          <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2z" />
          </svg>
          <time className="text-sonic-silver font-medium">{date}</time>
        </div>
        <div className="absolute top-4 right-4 bg-carolina-blue text-white px-3 py-1 rounded-full text-sm font-medium">
          {readTime}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-oxford-blue-1 mb-3 line-clamp-2 group-hover:text-carolina-blue transition-colors duration-200">
          <a href="#" className="hover:text-carolina-blue transition-colors duration-200">
            {title}
          </a>
        </h3>
        
        <p className="text-sonic-silver leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-carolina-blue font-medium hover:text-royal-blue-light transition-colors duration-200 flex items-center gap-2"
          >
            Read More
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <div className="flex items-center gap-2 text-sm text-sonic-silver">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>245</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Guide to Dental Hygiene: Best Practices for Healthy Teeth",
      excerpt: "Discover essential daily habits and professional tips to maintain optimal oral health. Learn about proper brushing techniques, flossing methods, and preventive care strategies that will keep your smile bright and healthy for years to come.",
      image: "./assets/images/blog-1.jpg",
      date: "Mar 24, 2024",
      readTime: "5 min read"
    },
    {
      title: "Understanding Root Canal Treatment: What to Expect During the Procedure",
      excerpt: "Demystify root canal treatment with our comprehensive guide. Learn about the process, pain management, recovery tips, and why this procedure is often the best way to save your natural tooth and maintain your smile.",
      image: "./assets/images/blog-2.jpg",
      date: "Mar 20, 2024",
      readTime: "7 min read"
    },
    {
      title: "Modern Orthodontics: Invisible Aligners vs Traditional Braces Comparison",
      excerpt: "Explore the latest orthodontic options available today. Compare the benefits, costs, and treatment timelines of clear aligners versus traditional braces to make an informed decision about straightening your teeth.",
      image: "./assets/images/blog-3.jpg",
      date: "Mar 18, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "Preventive Care", count: 12 },
    { name: "Cosmetic Dentistry", count: 8 },
    { name: "Orthodontics", count: 6 },
    { name: "Oral Surgery", count: 4 },
    { name: "Pediatric Dentistry", count: 7 }
  ];

  return (
    <section id="blog" className="section-padding bg-cultured">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
            Our Blog
          </p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
            Latest Blog & News
          </h2>
          <div className="w-20 h-1 bg-carolina-blue mx-auto rounded-full mb-6"></div>
          <p className="text-sonic-silver max-w-2xl mx-auto leading-relaxed">
            Stay informed about the latest developments in dental care, oral health tips, 
            and insights from our experienced dental professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <a href="#" className="btn-primary">
                Load More Articles
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-montserrat font-bold text-oxford-blue-1 mb-4">Search Articles</h3>
              <div className="relative">
                <input 
                  type="search" 
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-carolina-blue focus:border-transparent"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-sonic-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-montserrat font-bold text-oxford-blue-1 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between text-sonic-silver hover:text-carolina-blue transition-colors duration-200"
                    >
                      <span>{category.name}</span>
                      <span className="bg-cultured text-oxford-blue-1 px-2 py-1 rounded-full text-sm font-medium">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-dentelo-gradient rounded-lg p-6 text-white">
              <h3 className="font-montserrat font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-white/90 mb-4 text-sm">
                Subscribe to our newsletter for the latest dental health tips and updates.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  required
                  className="w-full px-3 py-2 rounded-lg text-oxford-blue-1 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button type="submit" className="w-full bg-white text-carolina-blue font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-montserrat font-bold text-oxford-blue-1 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                <article className="flex gap-3">
                  <img 
                    src="./assets/images/blog-1.jpg" 
                    alt="Popular post"
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium text-oxford-blue-1 text-sm mb-1 line-clamp-2">
                      <a href="#" className="hover:text-carolina-blue transition-colors">Essential Dental Care Tips</a>
                    </h4>
                    <p className="text-sonic-silver text-xs">Mar 15, 2024</p>
                  </div>
                </article>
                <article className="flex gap-3">
                  <img 
                    src="./assets/images/blog-2.jpg" 
                    alt="Popular post"
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium text-oxford-blue-1 text-sm mb-1 line-clamp-2">
                      <a href="#" className="hover:text-carolina-blue transition-colors">Modern Orthodontic Solutions</a>
                    </h4>
                    <p className="text-sonic-silver text-xs">Mar 12, 2024</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;