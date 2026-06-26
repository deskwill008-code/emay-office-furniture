import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Factory,
  Globe2,
  Package,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import SEO from '../components/SEO';
import { useProducts } from '../hooks/useCMSData';
import { testimonials } from '../data/testimonials';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const stats = [
  { label: 'Years Experience', value: '15+', icon: TrendingUp },
  { label: 'Countries Served', value: '50+', icon: Globe2 },
  { label: 'Factory Area', value: '50K m²', icon: Factory },
  { label: 'Annual Output', value: '200K+', icon: Package },
];

const certifications = [
  { name: 'ISO 9001', desc: 'Quality Management System' },
  { name: 'BIFMA', desc: 'Furniture Durability Standard' },
  { name: 'CE Certified', desc: 'European Conformity' },
  { name: 'FSC', desc: 'Responsible Forestry' },
  { name: 'UL Listed', desc: 'Safety Certification' },
  { name: 'SGS', desc: 'Product Testing & Inspection' },
];

const faqs = [
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'Our standard MOQ is 20 units per product type for wholesale orders. For container-load orders (FCL), we offer better pricing and can mix products. Sample orders of 1-5 units are available for quality evaluation.',
  },
  {
    question: 'Do you offer OEM and custom branding?',
    answer: 'Yes, we provide full OEM services including custom colors, finishes, logo engraving, and packaging design. Our design team can also develop custom products based on your specifications with NDA protection.',
  },
  {
    question: 'What are your typical lead times?',
    answer: 'Standard products: 25-35 days after order confirmation. Custom products: 45-60 days depending on complexity. We maintain buffer stock for our bestselling items, enabling faster fulfillment for repeat orders.',
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We offer a 5-year warranty on structural components and motors, 3 years on mechanisms and upholstery, and 1 year on electrical components. Extended warranty options are available for large-volume contracts.',
  },
  {
    question: 'How do you handle shipping and logistics?',
    answer: 'We ship FOB Ningbo by default and can arrange CIF/DDP delivery to major ports worldwide. Our logistics team coordinates with trusted freight forwarders and provides real-time shipment tracking.',
  },
];

export default function Home() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <SEO
        title="Professional Furniture Manufacturer & Exporter"
        description="Ningbo Emay Tech Co., Ltd - Professional furniture manufacturer & exporter with 15+ years experience. Quality craftsmanship, global delivery to 50+ countries. ISO9001 certified."
        keywords="furniture manufacturer, furniture exporter, office furniture, height adjustable desk, ergonomic chair, B2B furniture, Ningbo furniture factory"
      />

      <section className="relative bg-brand-900 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/uploads/hero-factory.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-900/60" />
        <div className="relative container-wide py-24 md:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-sm font-medium rounded-sm mb-6 border border-gold-500/30">
                Professional Furniture Manufacturer & Exporter
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                Quality Craftsmanship, Global Delivery
              </h1>
              <p className="text-lg md:text-xl text-surface-200 mb-8 leading-relaxed text-balance">
                15+ years of manufacturing excellence. Exporting premium office furniture to 50+ countries worldwide with ISO9001 certified quality assurance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-gold">
                  Explore Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-sm transition-all duration-300 hover:bg-white/10">
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      <section className="bg-white border-b border-surface-100">
        <div className="container-wide py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700">
                  <stat.icon size={22} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-900">{stat.value}</div>
                  <div className="text-sm text-surface-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">Built for Performance</h2>
              <p className="text-surface-600 mt-3 max-w-xl">Precision-engineered office furniture combining ergonomic innovation with industrial durability.</p>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 inline-flex items-center text-brand-700 font-medium hover:text-brand-900 transition-colors duration-300">
              View All Products <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {featuredProducts.length === 0 ? (
            <div className="text-center py-12 text-surface-500">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <Link to={`/products/${product.slug}`} className="group block bg-white rounded-sm overflow-hidden shadow-sm card-hover">
                    <div className="aspect-[4/3] overflow-hidden bg-surface-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-gold-600 uppercase tracking-wider">{product.category}</span>
                      <h3 className="text-lg font-semibold text-brand-900 mt-1 group-hover:text-brand-700 transition-colors duration-300">{product.name}</h3>
                      <p className="text-sm text-surface-500 mt-2 line-clamp-2">{product.shortDescription}</p>
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
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">The Emay Tech Advantage</h2>
            <p className="text-surface-600 mt-3">What sets us apart in the competitive global furniture market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: 'Vertical Integration', desc: 'From steel processing to final assembly under one roof. Full control over quality, cost, and lead times.' },
              { icon: ShieldCheck, title: 'Certified Quality', desc: 'ISO 9001, BIFMA, CE, and UL certified manufacturing processes with 0.3% defect rate.' },
              { icon: Zap, title: 'Rapid Prototyping', desc: 'New product samples ready in 7-14 days. Fast iteration based on your feedback and market demands.' },
              { icon: Users, title: 'Dedicated Account Team', desc: 'Each client receives a dedicated account manager fluent in English for seamless communication.' },
              { icon: Globe2, title: 'Global Logistics', desc: 'Experienced in FCL, LCL, and DDP shipping to 50+ countries with customs documentation support.' },
              { icon: Award, title: '5-Year Warranty', desc: 'Industry-leading warranty on structural components and motors, backed by spare parts inventory.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-6 bg-surface-50 rounded-sm hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-900">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-400 uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Internationally Certified</h2>
            <p className="text-surface-300 mt-3">Our products meet the strictest global standards for safety, durability, and environmental responsibility.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-5 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-10 h-10 mx-auto bg-gold-500/20 rounded-sm flex items-center justify-center text-gold-400 mb-3">
                  <CheckCircle2 size={20} />
                </div>
                <div className="font-semibold text-white text-sm">{cert.name}</div>
                <div className="text-xs text-surface-300 mt-1">{cert.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">Trusted by Clients Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-6 rounded-sm shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={idx < t.rating ? 'text-gold-400 fill-gold-400' : 'text-surface-200'}
                    />
                  ))}
                </div>
                <p className="text-surface-700 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900 text-sm">{t.name}</div>
                    <div className="text-xs text-surface-500">{t.title}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2 mb-4">Common Questions</h2>
              <p className="text-surface-600 mb-8">Everything you need to know about ordering from Ningbo Emay Tech. Cannot find your answer? Reach out to our team directly.</p>
              <Link to="/contact" className="btn-gold">
                Contact Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-800">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Product Line?</h2>
            <p className="text-surface-200 text-lg mb-8">Get a competitive quote for bulk orders, request samples, or discuss custom OEM projects with our team.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Request a Quote
              </Link>
              <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-sm transition-all duration-300 hover:bg-white/10">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="border border-surface-200 rounded-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-surface-50 hover:bg-white transition-colors duration-300"
      >
        <span className="font-medium text-brand-900 text-sm pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`text-surface-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-surface-600 leading-relaxed border-t border-surface-100 pt-4">
          {answer}
        </div>
      )}
    </motion.div>
  );
}
