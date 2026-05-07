
CREATE TABLE public.signatures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  reason text,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.signatures ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a signature
CREATE POLICY "Anyone can sign"
  ON public.signatures FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent = true);

-- Public view exposing only non-sensitive fields
CREATE VIEW public.signatures_public
WITH (security_invoker = true) AS
SELECT id, full_name, country, reason, created_at
FROM public.signatures;

GRANT SELECT ON public.signatures_public TO anon, authenticated;

-- Allow read of own signatures only via base table (no general select policy = denied)
-- Count function for total signatures
CREATE OR REPLACE FUNCTION public.signatures_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT count(*)::bigint FROM public.signatures;
$$;

GRANT EXECUTE ON FUNCTION public.signatures_count() TO anon, authenticated;
