import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { useBlogPosts } from '../hooks/useCMSData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function Blog() {
  const { posts, loading } = useBlogPosts();

  if (loading) {
    return (
      <div className="container-wide py-24 text-center">
        <div className="w-8 h-8 border-2 border-brand-900 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Industry insights, buying guides, and manufacturing updates from Ningbo Emay Tech - your source for office furniture knowledge."
        keywords="office furniture blog, ergonomic workspace, furniture buying guide, manufacturing insights"
      />

      <section className="bg-brand-900 py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gold-400 uppercase tracking-wider">Blog & Insights</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Industry Insights</h1>
            <p className="text-surface-200 max-w-xl text-lg">
              Expert perspectives on office furniture trends, ergonomic design, and manufacturing innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group block bg-surface-50 rounded-sm overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-surface-100">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-surface-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Tag size={14} />
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featured.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-900 group-hover:text-brand-700 transition-colors duration-300 mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-surface-600 leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center text-sm font-medium text-brand-700">
                      Read Article <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.div
                key={post.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-sm overflow-hidden shadow-sm card-hover h-full flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-surface-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Tag size={12} />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-surface-600 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-brand-700">
                      Read More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
