import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./auth.slice";

export const checkingAuthentication = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
  }
}


export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await signInWithGoogle()
  }
}