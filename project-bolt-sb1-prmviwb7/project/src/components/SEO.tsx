import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = 'Ningbo Emay Tech Co., Ltd - Professional Furniture Manufacturer & Exporter',
  description = 'Professional furniture manufacturer & exporter with 15+ years experience. Quality craftsmanship, global delivery to 50+ countries. ISO9001 certified.',
  keywords = 'furniture manufacturer, furniture exporter, office furniture, B2B furniture, Ningbo furniture factory',
  ogImage = '/uploads/og-image.jpg',
  ogType = 'website',
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://cnemay.cn${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setProperty('og:title', title);
    setProperty('og:description', description);
    setProperty('og:type', ogType);
    setProperty('og:url', canonicalUrl);
    setProperty('og:image', ogImage);
    setProperty('twitter:card', 'summary_large_image');
    setProperty('twitter:title', title);
    setProperty('twitter:description', description);
    setProperty('twitter:image', ogImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    return () => {
      // cleanup not needed for SPA navigation
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}
