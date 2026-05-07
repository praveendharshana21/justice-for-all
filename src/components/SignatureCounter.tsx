import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/lang-context";

export function SignatureCounter() {
  const { t } = useLang();
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    const { data, error } = await supabase.rpc("signatures_count");
    if (!error && typeof data === "number") setCount(data);
  };

  useEffect(() => {
    fetchCount();
    const channel = supabase
      .channel("sig-count")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "signatures" }, () => {
        fetchCount();
      })
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const display = (count ?? 0).toLocaleString();

  return (
    <div className="text-center">
      <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-primary leading-none counter-glow">
        {display}
      </div>
      <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90">
        {t.counter_suffix}
      </p>
    </div>
  );
}
