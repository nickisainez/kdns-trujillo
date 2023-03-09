import { createClient } from "@supabase/supabase-js";

interface ICondition {
  value: string | number | boolean;
  key: string;
}

const supabase = createClient(
  import.meta.env.ASTRO_SUPABASE_URL ??
    "https://jjewtbfjeftwhfadmwcp.supabase.co",
  import.meta.env.ASTRO_SUPABASE_PUBLIC_KEY ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZXd0YmZqZWZ0d2hmYWRtd2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMTA3NTEsImV4cCI6MTk5Mzg4Njc1MX0.W_DmZmkDsG8xAB7P7atWKzXmOnsRK8nWWXA1ZjG2JgU"
);

export async function getDataFromTable(
  table: string,
  condition: ICondition | null = null,
  select: string = "*"
): Promise<any | null> {
  const { data } = await supabase
    .from(table)
    .select(select)
    .order("id", { ascending: true });

  return data;
}

export async function getProjects(proyecto_id: string) {
  const { data, error } = await supabase
    .from("proyectos")
    .select("*")
    .eq("id", proyecto_id);

  return data;
}

export default supabase;
