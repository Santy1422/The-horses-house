import { authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import auth from "../../../peticiones/firebase";
import { FacebookAuthProvider, signInWithPopup} from "firebase/auth";
import { LoginWithBack } from "../../../peticiones/auth";
import { useDispatch } from "react-redux";

const Facebook = (dispatch, router) => {
    
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then(async (result) => {
        // The signed-in user info.                
        const user = result.user;        
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);     
        localStorage.setItem('Facebook',  JSON.stringify(result.user))       
        const accessToken = credential.accessToken;
        localStorage.setItem("firebaseToken", accessToken)
        await LoginWithBack({
            succes: async (v) => {
              await localStorage.setItem('token', v.newToken);
              dispatch(authSetUser(v.user)), 
              router.push("/dashboard")
            },
            error: (e) => console.log(e),
            loading: (l) => dispatch(authSetLoading()),

     })        // ...
        })
        .catch((error) => {
        console.log(error)
            // Handle Errors here.
        const errorCode = error.code;        
        const errorMessage = error.message;        
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}

export default Facebook