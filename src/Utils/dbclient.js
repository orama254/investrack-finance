import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// const supabaseUrl = process.env.VITE_SUPABASE_URL;
// const supabaseKey = process.env.VITE_SUPABASE_KEY;

export const supabase = createClient(
   supabaseUrl,
   supabaseKey
)