export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Chen',
    title: 'Procurement Director',
    company: 'OfficePlus GmbH, Germany',
    content: 'We have been sourcing from Emay Tech for 3 years. Their height adjustable desks consistently meet our quality standards, and their lead times are among the most reliable in the industry. The dedicated account manager makes communication seamless.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Williams',
    title: 'CEO',
    company: 'Workspace Solutions Ltd, UK',
    content: 'The ergonomic chairs we ordered exceeded our expectations. The BIFMA certification gave our clients confidence, and the 5-year warranty is a major selling point. Emay Tech is now our primary furniture supplier.',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Park',
    title: 'Operations Manager',
    company: 'Pacific Office Supply, Australia',
    content: 'From sample approval to full container delivery, the process was transparent and professional. The custom branding options allowed us to create a unique product line that differentiates us in the market.',
    rating: 5,
  },
];
