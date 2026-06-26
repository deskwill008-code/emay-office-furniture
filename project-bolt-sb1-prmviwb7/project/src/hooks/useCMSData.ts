import { useState, useEffect } from 'react';

export interface CMSProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
  gallery: string[];
  moq: string;
  leadTime: string;
  packaging: string;
  material: string;
  style: string;
  pdfCatalog?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CMSCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface CMSBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  seoTitle?: string;
  seoDescription?: string;
}

interface ProductsData {
  products: CMSProduct[];
}

interface CategoriesData {
  categories: CMSCategory[];
}

interface BlogsData {
  posts: CMSBlogPost[];
}

export function useProducts() {
  const [data, setData] = useState<CMSProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((json: ProductsData) => {
        setData(json.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products: data, loading, error };
}

export function useCategories() {
  const [data, setData] = useState<CMSCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/categories.json')
      .then((res) => res.json())
      .then((json: CategoriesData) => {
        setData(json.categories || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { categories: data, loading };
}

export function useBlogPosts() {
  const [data, setData] = useState<CMSBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/blogs.json')
      .then((res) => res.json())
      .then((json: BlogsData) => {
        setData(json.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { posts: data, loading, error };
}

export function getProductBySlug(products: CMSProduct[], slug: string): CMSProduct | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBlogPostBySlug(posts: CMSBlogPost[], slug: string): CMSBlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllCategories(products: CMSProduct[]): string[] {
  const cats = new Set(products.map((p) => p.category));
  return ['All', ...Array.from(cats)];
}

export function getAllMaterials(products: CMSProduct[]): string[] {
  const mats = new Set(products.map((p) => p.material));
  return Array.from(mats);
}

export function getAllStyles(products: CMSProduct[]): string[] {
  const styles = new Set(products.map((p) => p.style));
  return Array.from(styles);
}
