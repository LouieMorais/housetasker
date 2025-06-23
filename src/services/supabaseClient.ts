// src/services/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase env vars missing:', { supabaseUrl, supabaseAnonKey })
  throw new Error('Supabase environment variables are not defined.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
