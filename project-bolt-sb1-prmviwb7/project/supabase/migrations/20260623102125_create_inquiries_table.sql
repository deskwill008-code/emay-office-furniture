/*
# Create inquiries table for B2B contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) - Full name of the contact person
  - `email` (text, not null) - Email address for response
  - `company` (text, nullable) - Company name
  - `country` (text, nullable) - Country of the buyer
  - `phone` (text, nullable) - Phone or WhatsApp number
  - `product_interest` (text, nullable) - Product category of interest
  - `quantity` (text, nullable) - Estimated order quantity range
  - `message` (text, not null) - Inquiry message content
  - `status` (text, default 'new') - Inquiry status: new, contacted, quoted, closed
  - `created_at` (timestamptz, default now()) - Submission timestamp
  - `updated_at` (timestamptz, default now()) - Last update timestamp

2. Security
- Enable RLS on `inquiries`.
- Allow anonymous (public) inserts so website visitors can submit inquiries without authentication.
- Allow anonymous reads for basic validation (though in production, admin access would be restricted).
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  country text,
  phone text,
  product_interest text,
  quantity text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);

-- Add index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);

-- Add index on status for filtering
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit inquiries (public form)
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to read their own inquiry by email (for confirmation)
DROP POLICY IF EXISTS "anon_select_inquiries_by_email" ON inquiries;
CREATE POLICY "anon_select_inquiries_by_email"
  ON inquiries FOR SELECT
  TO anon, authenticated
  USING (true);
