import { GoogleAuthProvider, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  
    console.log('eeeeeee')
    await signInWithRedirect(firebaseAuth, googleProvider);


    
    const result = await getRedirectResult(firebaseAuth)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
  
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log({user, token});

    
}


const lastSingInWithGoogle = async() => {
  await signInWithPopup(firebaseAuth, googleProvider);
}