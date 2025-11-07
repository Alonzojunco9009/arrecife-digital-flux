-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Create policy to allow admins to view all submissions (for future admin panel)
CREATE POLICY "Service role can view all submissions"
ON public.contact_submissions
FOR SELECT
USING (true);

-- Add index for created_at for efficient querying
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);