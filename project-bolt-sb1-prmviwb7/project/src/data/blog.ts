// DEPRECATED: Blog posts are now loaded from /public/data/blogs.json via useCMSData hook
// This file is kept for backward compatibility during migration
// Please use src/hooks/useCMSData.ts for all blog data access

export interface BlogPost {
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
}
