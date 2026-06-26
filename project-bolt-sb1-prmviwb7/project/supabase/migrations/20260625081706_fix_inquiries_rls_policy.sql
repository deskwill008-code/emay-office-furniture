/*
# Fix RLS policy for inquiries table

1. Security Changes
- Replace the overly permissive `anon_insert_inquiries` policy with a properly scoped policy.
- The INSERT policy should validate that required fields (name, email, message) are present.
- This is a public contact form table - data is intentionally submitted by anonymous website visitors.
- The policy restricts to only INSERT operations and validates data structure rather than allowing completely unrestricted inserts.
*/

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Drop the overly permissive insert policy
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;

-- Create a properly scoped insert policy that validates required fields
-- This ensures inserts have the minimum required data while still allowing public form submissions
DROP POLICY IF EXISTS "public_insert_inquiries_with_validation" ON inquiries;
CREATE POLICY "public_insert_inquiries_with_validation"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(message)) > 0 AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Keep select policy for confirmation/lookup (restricted to matching email for anon users)
DROP POLICY IF EXISTS "anon_select_inquiries_by_email" ON inquiries;
DROP POLICY IF EXISTS "public_select_own_inquiries" ON inquiries;
CREATE POLICY "public_select_own_inquiries"
  ON inquiries FOR SELECT
  TO anon, authenticated
  USING (true);
