
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://cjfvtzrmnnudncfhmjld.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqZnZ0enJtbm51ZG5jZmhtamxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxOTc3ODQsImV4cCI6MjAyMzc3Mzc4NH0.PuEb6JiA18Dc7PQLVu4n4195EgKbS8YZQwcj3w4kw40')