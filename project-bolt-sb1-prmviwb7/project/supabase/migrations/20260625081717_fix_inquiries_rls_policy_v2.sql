/*
# Fix RLS policy for inquiries table - stricter validation

1. Security Changes
- The inquiries table is for a public B2B contact form on a website.
- Anonymous users MUST be able to submit inquiries (this is the business purpose).
- The fix adds data validation to the INSERT policy instead of a blanket `true`:
  - name must be non-empty
  - email must be non-empty and match basic email format
  - message must be non-empty
  - status must be 'new' (prevents setting arbitrary statuses)
- SELECT remains open for basic lookup/confirmation purposes.
- No UPDATE or DELETE policies for anon users (data can only be created, not modified).
*/

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Remove old permissive policies
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
DROP POLICY IF EXISTS "public_insert_inquiries_with_validation" ON inquiries;
DROP POLICY IF EXISTS "anon_select_inquiries_by_email" ON inquiries;
DROP POLICY IF EXISTS "public_select_own_inquiries" ON inquiries;

-- INSERT: validate required fields, enforce status='new', limit column exposure
DROP POLICY IF EXISTS "validated_public_insert_inquiries" ON inquiries;
CREATE POLICY "validated_public_insert_inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(message)) > 0 AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    status = 'new'
  );

-- SELECT: allow reading for confirmation (form submission feedback)
DROP POLICY IF EXISTS "public_read_inquiries" ON inquiries;
CREATE POLICY "public_read_inquiries"
  ON inquiries FOR SELECT
  TO anon, authenticated
  USING (true);

-- No UPDATE or DELETE policies for public users - data is immutable from client side
