import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronUp, Factory } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Factory', path: '/factory' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-brand-900 text-white text-sm">
        <div className="container-wide py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+8657488888888" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-300">
              <Phone size={14} />
              <span className="hidden sm:inline">+86 574 8888 8888</span>
            </a>
            <a href="mailto:info@cnemay.cn" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-300">
              <Mail size={14} />
              <span className="hidden sm:inline">info@cnemay.cn</span>
            </a>
          </div>
          <a
            href="https://wa.me/8657488888888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-sm transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="container-wide py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-900 rounded-sm flex items-center justify-center">
              <Factory size={20} className="text-gold-400" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-brand-900 text-lg tracking-tight">NINGBO EMAY TECH</div>
              <div className="text-[10px] text-surface-500 tracking-[0.15em] uppercase font-medium">Professional Furniture Manufacturer</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-brand-900 bg-gold-50'
                    : 'text-surface-600 hover:text-brand-900 hover:bg-surface-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex btn-gold text-sm py-2.5">
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-surface-600 hover:text-brand-900"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl animate-slide-in-right">
            <div className="p-4 flex items-center justify-between border-b border-surface-100">
              <span className="font-semibold text-brand-900">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} className="text-surface-500" />
              </button>
            </div>
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-sm text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-gold-50 text-brand-900'
                      : 'text-surface-600 hover:bg-surface-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 btn-gold text-sm"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white">
        <div className="container-wide py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center">
                  <Factory size={20} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-bold text-lg">NINGBO EMAY TECH</div>
                  <div className="text-[10px] text-surface-300 tracking-[0.15em] uppercase">Professional Furniture Manufacturer</div>
                </div>
              </div>
              <p className="text-surface-300 text-sm leading-relaxed">
                Professional furniture manufacturer & exporter serving global B2B clients with quality craftsmanship and reliable global delivery since 2006.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-surface-300 hover:text-gold-400 text-sm transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-2.5">
                <li><Link to="/products" className="text-surface-300 hover:text-gold-400 text-sm transition-colors duration-300">Height Adjustable Desk</Link></li>
                <li><Link to="/products" className="text-surface-300 hover:text-gold-400 text-sm transition-colors duration-300">Office Desk</Link></li>
                <li><Link to="/products" className="text-surface-300 hover:text-gold-400 text-sm transition-colors duration-300">Office Chair</Link></li>
                <li><Link to="/products" className="text-surface-300 hover:text-gold-400 text-sm transition-colors duration-300">Filing Cabinet</Link></li>
                <li><Link to="/products" className="text-surface-300 hover:text-gold-400 text-sm transition-colors duration-300">Conference Table</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm text-surface-300">
                <li className="flex items-start gap-2">
                  <span>No. 168 Innovation Road, Ningbo High-Tech Zone, Zhejiang, China</span>
                </li>
                <li>
                  <a href="tel:+8657488888888" className="hover:text-gold-400 transition-colors duration-300">+86 574 8888 8888</a>
                </li>
                <li>
                  <a href="mailto:info@cnemay.cn" className="hover:text-gold-400 transition-colors duration-300">info@cnemay.cn</a>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://wa.me/8657488888888" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-600 rounded-sm flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-wide py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-surface-400">
            <span>&copy; {new Date().getFullYear()} Ningbo Emay Tech Co., Ltd. All rights reserved.</span>
            <span>ISO 9001 Certified | BIFMA Compliant | CE Marked</span>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-10 h-10 bg-brand-900 text-white rounded-sm shadow-lg flex items-center justify-center hover:bg-brand-800 transition-colors duration-300 z-40"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
