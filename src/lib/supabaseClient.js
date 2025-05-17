import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(https://tlrprckoxtkvrmtmhphs.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscnByY2tveHRrdnJtdG1ocGhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MDI1NjIsImV4cCI6MjA2MzA3ODU2Mn0.pE-wUItFEzqdtF27NmBvUMon5Svg3VmSynQAPpOlDcs);
