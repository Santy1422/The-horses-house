import auth from "../../../peticiones/firebase";
import { GoogleAuthProvider, signInWithPopup ,getAuth } from "firebase/auth";

import { LoginWithBack } from "../../../peticiones/auth";
import { authSetUser, authSetLoading } from "@/redux/reducer/reducerAuth";
import { useDispatch } from "react-redux";



const Google = (succes) => {
    // console.log('success en google', succes.succes)
    
    const provider = new GoogleAuthProvider();  

    signInWithPopup(auth, provider)
        .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        localStorage.setItem('Google',  JSON.stringify(result.user))       
        const token = result._tokenResponse.idToken;  
        console.log('result user', result.user)      

        localStorage.setItem("firebaseToken", token)
        succes()
        // ...
    }).catch((error) => {
        console.log('EERRROORRR', error)
        const errorCode = error?.code;        
        const errorMessage = error?.message;        
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
  });
}

export default Google