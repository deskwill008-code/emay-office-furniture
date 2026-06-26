import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardList,
  Download,
  Mail,
  MessageCircle,
  Package,
  Clock,
  Box,
  Layers,
} from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { useProducts, getProductBySlug } from '../hooks/useCMSData';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { products, loading } = useProducts();
  const [activeImage, setActiveImage] = useState(0);

  const product = slug ? getProductBySlug(products, slug) : undefined;

  if (loading) {
    return (
      <div className="container-wide py-24 text-center">
        <div className="w-8 h-8 border-2 border-brand-900 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-2xl font-bold text-brand-900 mb-4">Product Not Found</h1>
        <p className="text-surface-600 mb-6">The product you are looking for does not exist.</p>
        <Link to="/products" className="btn-gold">
          Back to Products
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <SEO
        title={product.seoTitle || product.name}
        description={product.seoDescription || product.shortDescription}
        keywords={`${product.name}, office furniture, ${product.category.toLowerCase()}, B2B furniture, Ningbo Emay Tech`}
      />

      <div className="bg-surface-50 border-b border-surface-100">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-surface-500">
            <Link to="/" className="hover:text-brand-700 transition-colors duration-300">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-brand-700 transition-colors duration-300">Products</Link>
            <ChevronRight size={14} />
            <span className="text-brand-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/3] bg-surface-100 rounded-sm overflow-hidden mb-4">
                <img
                  src={product.gallery[activeImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === idx ? 'border-gold-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2 mb-4">{product.name}</h1>
              <p className="text-surface-600 leading-relaxed mb-6">{product.fullDescription}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="bg-surface-50 p-3 rounded-sm text-center">
                  <Package size={18} className="mx-auto text-gold-600 mb-1" />
                  <div className="text-xs text-surface-500">MOQ</div>
                  <div className="text-sm font-semibold text-brand-900">{product.moq}</div>
                </div>
                <div className="bg-surface-50 p-3 rounded-sm text-center">
                  <Clock size={18} className="mx-auto text-gold-600 mb-1" />
                  <div className="text-xs text-surface-500">Lead Time</div>
                  <div className="text-sm font-semibold text-brand-900">{product.leadTime}</div>
                </div>
                <div className="bg-surface-50 p-3 rounded-sm text-center">
                  <Box size={18} className="mx-auto text-gold-600 mb-1" />
                  <div className="text-xs text-surface-500">Material</div>
                  <div className="text-sm font-semibold text-brand-900">{product.material}</div>
                </div>
                <div className="bg-surface-50 p-3 rounded-sm text-center">
                  <Layers size={18} className="mx-auto text-gold-600 mb-1" />
                  <div className="text-xs text-surface-500">Style</div>
                  <div className="text-sm font-semibold text-brand-900">{product.style}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="/contact" className="btn-gold">
                  <ClipboardList size={18} className="mr-2" />
                  Request Quote
                </Link>
                <a
                  href="https://wa.me/8657488888888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-sm transition-colors duration-300"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp Inquiry
                </a>
                <a
                  href={`mailto:info@cnemay.cn?subject=Inquiry: ${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-surface-200 text-surface-700 font-medium rounded-sm hover:border-brand-900 hover:text-brand-900 transition-all duration-300"
                >
                  <Mail size={18} className="mr-2" />
                  Email Us
                </a>
                {product.pdfCatalog && (
                  <a
                    href={product.pdfCatalog}
                    download
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-900 text-brand-900 font-medium rounded-sm hover:bg-brand-900 hover:text-white transition-all duration-300"
                  >
                    <Download size={18} className="mr-2" />
                    Download Catalog
                  </a>
                )}
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-brand-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-surface-600">
                      <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-brand-900 mb-3">Specifications</h3>
                <div className="border border-surface-200 rounded-sm overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between px-4 py-3 text-sm ${
                        idx % 2 === 0 ? 'bg-surface-50' : 'bg-white'
                      }`}
                    >
                      <span className="text-surface-500">{key}</span>
                      <span className="font-medium text-brand-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-5 bg-surface-50 rounded-sm">
                <h3 className="font-semibold text-brand-900 mb-3">Packaging & Logistics</h3>
                <div className="space-y-2 text-sm text-surface-600">
                  <p><strong>Packaging:</strong> {product.packaging}</p>
                  <p><strong>Lead Time:</strong> {product.leadTime}</p>
                  <p><strong>MOQ:</strong> {product.moq}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-surface-50 border-t border-surface-100">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-brand-900">Related Products</h2>
              <Link to="/products" className="flex items-center text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors duration-300">
                View All <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.slug}`}
                  className="group block bg-white rounded-sm overflow-hidden shadow-sm card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-300">{p.name}</h3>
                    <p className="text-sm text-surface-500 mt-1 line-clamp-2">{p.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bg-white border-t border-surface-100">
        <div className="container-wide py-6">
          <Link to="/products" className="inline-flex items-center text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors duration-300">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Products
          </Link>
        </div>
      </div>
    </>
  );
}
