// DEPRECATED: Products are now loaded from /public/data/products.json via useCMSData hook
// This file is kept for backward compatibility during migration
// Please use src/hooks/useCMSData.ts for all product data access

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
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
}
