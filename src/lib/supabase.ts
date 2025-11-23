// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface EmployerJobSubmission {
  id?: string;
  created_at?: string;
  company: string;
  contact_name: string;
  email: string;
  phone?: string;
  job_title: string;
  employment_type: string;
  category: string;
  city: string;
  area?: string;
  region: string;
  base_salary_min?: number;
  base_salary_max?: number;
  description: string;
  english_friendly?: boolean;
  external_url?: string;
  logo_url?: string;
  logo_alt?: string;
  plan?: string;
  plan_price_eur?: string;
  status?: string;
  reviewed_at?: string;
  reviewed_by?: string;
  notes?: string;
}

