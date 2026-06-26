import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const { error: dbError } = await supabase.from('inquiries').insert([
        {
          name: form.name,
          email: form.email,
          company: form.company || null,
          country: form.country || null,
          phone: form.phone || null,
          product_interest: form.product || null,
          quantity: form.quantity || null,
          message: form.message,
        },
      ]);

      if (dbError) {
        setError('Failed to submit. Please try again or contact us directly.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Ningbo Emay Tech for product inquiries, quotes, and partnership opportunities. We serve B2B clients worldwide."
        keywords="contact Ningbo Emay Tech, office furniture inquiry, B2B furniture quote, furniture manufacturer contact"
      />

      {/* Hero */}
      <section className="bg-brand-900 py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gold-400 uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Us</h1>
            <p className="text-surface-200 max-w-xl text-lg">
              Ready to discuss your project? Our team is here to provide quotes, samples, and partnership proposals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white border-b border-surface-100">
        <div className="container-wide py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4 p-5 bg-surface-50 rounded-sm"
            >
              <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 text-sm">Phone</h3>
                <a href="tel:+8657488888888" className="text-surface-600 text-sm hover:text-brand-700 transition-colors duration-300">
                  +86 574 8888 8888
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start gap-4 p-5 bg-surface-50 rounded-sm"
            >
              <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 text-sm">Email</h3>
                <a href="mailto:info@cnemay.cn" className="text-surface-600 text-sm hover:text-brand-700 transition-colors duration-300">
                  info@cnemay.cn
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-4 p-5 bg-surface-50 rounded-sm"
            >
              <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 text-sm">Address</h3>
                <p className="text-surface-600 text-sm">
                  No. 168 Innovation Road, Ningbo High-Tech Zone, Zhejiang, China
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 md:p-12 rounded-sm shadow-sm text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-900 mb-3">Inquiry Submitted</h2>
                  <p className="text-surface-600 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your inquiry and respond within 24 business hours.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href="https://wa.me/8657488888888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-sm transition-colors duration-300"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Chat on WhatsApp
                    </a>
                    <Link
                      to="/products"
                      className="inline-flex items-center px-5 py-2.5 border border-surface-200 text-surface-700 text-sm font-medium rounded-sm hover:border-brand-900 hover:text-brand-900 transition-all duration-300"
                    >
                      Browse Products
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 md:p-8 rounded-sm shadow-sm"
                >
                  <h2 className="text-xl font-bold text-brand-900 mb-1">Send an Inquiry</h2>
                  <p className="text-sm text-surface-500 mb-6">Fill out the form below and we will get back to you within 24 hours.</p>
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-sm text-sm text-red-700">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-900 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-900 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-brand-900 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-brand-900 mb-1.5">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-brand-900 mb-1.5">
                          Product Interest
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400 bg-white"
                        >
                          <option value="">Select a product</option>
                          <option value="height-adjustable-desk">Height Adjustable Desk</option>
                          <option value="office-desk">Office Desk</option>
                          <option value="office-chair">Office Chair</option>
                          <option value="filing-cabinet">Filing Cabinet</option>
                          <option value="conference-table">Conference Table</option>
                          <option value="multiple">Multiple Products</option>
                          <option value="custom">Custom Project</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Estimated Quantity
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400 bg-white"
                      >
                        <option value="">Select quantity</option>
                        <option value="1-20">1 - 20 units</option>
                        <option value="21-100">21 - 100 units</option>
                        <option value="101-500">101 - 500 units</option>
                        <option value="500+">500+ units</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-surface-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400 resize-none"
                        placeholder="Tell us about your project, requirements, timeline, and any custom needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={16} className="mr-2" />
                      {submitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-sm shadow-sm"
              >
                <h3 className="font-semibold text-brand-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/8657488888888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-sm transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-sm flex items-center justify-center text-white shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-brand-900 text-sm">WhatsApp</div>
                      <div className="text-xs text-surface-500">Fastest response</div>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-surface-400" />
                  </a>
                  <a
                    href="mailto:info@cnemay.cn"
                    className="flex items-center gap-3 p-3 bg-surface-50 hover:bg-surface-100 rounded-sm transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-brand-900 text-sm">Email</div>
                      <div className="text-xs text-surface-500">info@cnemay.cn</div>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-surface-400" />
                  </a>
                  <a
                    href="tel:+8657488888888"
                    className="flex items-center gap-3 p-3 bg-surface-50 hover:bg-surface-100 rounded-sm transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-brand-900 text-sm">Phone</div>
                      <div className="text-xs text-surface-500">+86 574 8888 8888</div>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-surface-400" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-brand-900 p-6 rounded-sm text-white"
              >
                <h3 className="font-semibold mb-3">Why Work With Us?</h3>
                <ul className="space-y-2.5 text-sm text-surface-200">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 text-gold-400 shrink-0" />
                    15+ years manufacturing experience
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 text-gold-400 shrink-0" />
                    ISO 9001 & BIFMA certified
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 text-gold-400 shrink-0" />
                    5-year warranty on all products
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 text-gold-400 shrink-0" />
                    Custom OEM & ODM services
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 text-gold-400 shrink-0" />
                    MOQ from 20 units
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
