import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

interface ICondition {
  value: string | number | boolean;
  key: string;
}

const URL = <string>process.env.SUPABASE_URL;
const KEY = <string>process.env.SUPABASE_PUBLIC_KEY;

const supabase = createClient(URL, KEY);

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
