import auth from "../../../peticiones/firebase";
import { GoogleAuthProvider, signInWithPopup ,getAuth } from "firebase/auth";

import { LoginWithBack } from "../../../peticiones/auth";
import { authSetUser, authSetLoading } from "@/redux/reducer/reducerAuth";
import { useDispatch } from "react-redux";



const Google = ( dispatch, router) => {
    
    const provider = new GoogleAuthProvider();  

    signInWithPopup(auth, provider)
        .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        localStorage.setItem('Google',  JSON.stringify(result.user))       
        const token = result._tokenResponse.idToken;        

        localStorage.setItem("firebaseToken", token)
        await LoginWithBack({
            succes: async (v) => {
                await localStorage.setItem('token', v.newToken);
                dispatch(authSetUser(v.user)), 
                router.push("/dashboard")
            },
            error: (e) => console.log(e),
            loading: (l) => dispatch(authSetLoading()),
        })
        // ...
    }).catch((error) => {
        console.log(error)
        const errorCode = error.code;        
        const errorMessage = error.message;        
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
  });
}

export default Google