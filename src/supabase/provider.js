import { supabase } from "./config";



export async function signInWithGoogleSupabse() {
  const { user, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  
  console.log({user, error})
}