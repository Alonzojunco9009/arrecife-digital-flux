-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

-- Create a more secure INSERT policy with basic validation
-- This ensures that required fields are not empty and email has basic format
CREATE POLICY "Anyone can submit contact form with valid data" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (
  -- Ensure name is not empty
  length(trim(name)) > 0 AND
  -- Ensure email is not empty and has basic email format
  length(trim(email)) > 0 AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
  -- Ensure message is not empty
  length(trim(message)) > 0
);