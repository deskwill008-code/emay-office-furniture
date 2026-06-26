import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { useBlogPosts, getBlogPostBySlug } from '../hooks/useCMSData';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading } = useBlogPosts();

  const post = slug ? getBlogPostBySlug(posts, slug) : undefined;

  if (loading) {
    return (
      <div className="container-wide py-24 text-center">
        <div className="w-8 h-8 border-2 border-brand-900 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-2xl font-bold text-brand-900 mb-4">Article Not Found</h1>
        <p className="text-surface-600 mb-6">The article you are looking for does not exist.</p>
        <Link to="/blog" className="btn-gold">
          Back to Blog
        </Link>
      </div>
    );
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        keywords={`${post.category}, office furniture, ${post.title}, Ningbo Emay Tech`}
      />

      <div className="bg-surface-50 border-b border-surface-100">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-surface-500">
            <Link to="/" className="hover:text-brand-700 transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand-700 transition-colors duration-300">Blog</Link>
            <span>/</span>
            <span className="text-brand-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      <section className="bg-white pt-12 pb-8">
        <div className="container-wide max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 text-sm text-surface-500 mb-4">
              <span className="flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">{post.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="aspect-[21/9] bg-surface-100 rounded-sm overflow-hidden max-w-5xl mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-wide max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-neutral max-w-none"
          >
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold text-brand-900 mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-surface-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-surface-50 border-t border-surface-100">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-brand-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group block bg-white rounded-sm overflow-hidden shadow-sm card-hover"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-surface-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-surface-500 mb-2">
                      <span>{p.category}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bg-white border-t border-surface-100">
        <div className="container-wide py-6">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors duration-300">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
