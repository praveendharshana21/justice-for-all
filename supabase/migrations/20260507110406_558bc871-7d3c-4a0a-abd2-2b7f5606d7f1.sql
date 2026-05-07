
CREATE OR REPLACE FUNCTION public.signatures_count()
RETURNS bigint
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
STABLE
AS $$
  SELECT count(*)::bigint FROM public.signatures_public;
$$;
