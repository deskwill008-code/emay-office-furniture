import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, Search, SlidersHorizontal, X } from 'lucide-react';
import SEO from '../components/SEO';
import { useProducts, getAllCategories, getAllMaterials, getAllStyles } from '../hooks/useCMSData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const },
  }),
};

export default function Products() {
  const { products, loading } = useProducts();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMaterial, setActiveMaterial] = useState('All');
  const [activeStyle, setActiveStyle] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = useMemo(() => getAllCategories(products), [products]);
  const materials = useMemo(() => ['All', ...getAllMaterials(products)], [products]);
  const styles = useMemo(() => ['All', ...getAllStyles(products)], [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchMaterial = activeMaterial === 'All' || p.material === activeMaterial;
      const matchStyle = activeStyle === 'All' || p.style === activeStyle;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchMaterial && matchStyle && matchSearch;
    });
  }, [products, activeCategory, activeMaterial, activeStyle, searchQuery]);

  const activeFilterCount = [activeCategory, activeMaterial, activeStyle].filter((f) => f !== 'All').length;

  const clearFilters = () => {
    setActiveCategory('All');
    setActiveMaterial('All');
    setActiveStyle('All');
    setSearchQuery('');
  };

  return (
    <>
      <SEO
        title="Office Furniture Products"
        description="Browse our complete range of office furniture including height adjustable desks, ergonomic chairs, filing cabinets, and conference tables. Filter by category, material, and style."
        keywords="office furniture products, height adjustable desk, ergonomic chair, filing cabinet, conference table, wholesale office furniture"
      />

      {/* Page Header */}
      <section className="bg-brand-900 py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gold-400 uppercase tracking-wider">Product Catalog</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Our Products</h1>
            <p className="text-surface-200 max-w-xl text-lg">
              Precision-engineered office furniture designed for durability, ergonomics, and modern aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white border-b border-surface-100 sticky top-[73px] z-30">
        <div className="container-wide py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brand-900 text-white'
                      : 'bg-surface-50 text-surface-700 hover:bg-surface-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-surface-50 text-surface-700 rounded-sm text-sm font-medium"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-gold-500 text-white text-xs px-1.5 py-0.5 rounded-sm">{activeFilterCount}</span>
              )}
            </button>

            <div className="relative w-full sm:w-auto">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 bg-surface-50 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {mobileFilterOpen && (
            <div className="lg:hidden mt-4 pb-2 space-y-4">
              <div>
                <span className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2 block">Category</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all duration-300 ${
                        activeCategory === cat
                          ? 'bg-brand-900 text-white'
                          : 'bg-surface-50 text-surface-700 hover:bg-surface-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2 block">Material</span>
                <div className="flex flex-wrap gap-2">
                  {materials.map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveMaterial(m)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all duration-300 ${
                        activeMaterial === m
                          ? 'bg-brand-900 text-white'
                          : 'bg-surface-50 text-surface-700 hover:bg-surface-100'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2 block">Style</span>
                <div className="flex flex-wrap gap-2">
                  {styles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveStyle(s)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all duration-300 ${
                        activeStyle === s
                          ? 'bg-brand-900 text-white'
                          : 'bg-surface-50 text-surface-700 hover:bg-surface-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-brand-700 font-medium hover:underline flex items-center gap-1"
                >
                  <Filter size={14} /> Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Desktop Sidebar + Grid */}
      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-sm shadow-sm p-5 sticky top-28">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-brand-900 text-sm">Filters</h3>
                  {activeFilterCount > 0 && (
                    <button onClick={clearFilters} className="text-xs text-brand-700 hover:underline">
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2 block">Category</span>
                    <div className="space-y-1.5">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-all duration-300 ${
                            activeCategory === cat
                              ? 'bg-brand-50 text-brand-900 font-medium'
                              : 'text-surface-600 hover:bg-surface-50'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-surface-100 pt-4">
                    <span className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2 block">Material</span>
                    <div className="space-y-1.5">
                      {materials.map((m) => (
                        <button
                          key={m}
                          onClick={() => setActiveMaterial(m)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-all duration-300 ${
                            activeMaterial === m
                              ? 'bg-brand-50 text-brand-900 font-medium'
                              : 'text-surface-600 hover:bg-surface-50'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-surface-100 pt-4">
                    <span className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2 block">Style</span>
                    <div className="space-y-1.5">
                      {styles.map((s) => (
                        <button
                          key={s}
                          onClick={() => setActiveStyle(s)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-all duration-300 ${
                            activeStyle === s
                              ? 'bg-brand-50 text-brand-900 font-medium'
                              : 'text-surface-600 hover:bg-surface-50'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              {loading ? (
                <div className="text-center py-20">
                  <div className="w-8 h-8 border-2 border-brand-900 border-t-transparent rounded-full animate-spin mx-auto" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-sm">
                  <p className="text-surface-500 text-lg">No products match your criteria.</p>
                  <button onClick={clearFilters} className="mt-4 text-brand-700 font-medium hover:underline">
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.id}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <Link
                        to={`/products/${product.slug}`}
                        className="group block bg-white rounded-sm overflow-hidden shadow-sm card-hover"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-surface-100 relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-brand-900 rounded-sm">
                              {product.category}
                            </span>
                          </div>
                          <div className="absolute bottom-3 right-3">
                            <span className="px-2.5 py-1 bg-brand-900/90 backdrop-blur-sm text-xs font-medium text-white rounded-sm">
                              MOQ: {product.moq}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-sm text-surface-500 mt-2 line-clamp-2">{product.shortDescription}</p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-surface-400">
                            <span>{product.material}</span>
                            <span className="w-1 h-1 bg-surface-300 rounded-full" />
                            <span>{product.style}</span>
                          </div>
                          <div className="mt-4 flex items-center text-sm font-medium text-brand-700">
                            View Details <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
