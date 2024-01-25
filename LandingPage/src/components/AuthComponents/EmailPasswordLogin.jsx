import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../peticiones/firebase";
import { LoginWithBack } from "../../../peticiones/auth";
import { authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import { useDispatch } from "react-redux";


const EmailPasswordLogin = (email, password, dispatch, router) => {    


  signInWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const token = userCredential.user.accessToken         

    localStorage.setItem("firebaseToken", token)
    await LoginWithBack({
        succes: async (v) => {
          await localStorage.setItem('token', v.newToken);
          dispatch(authSetUser(v)), 
          router.push("/dashboard")
        },
        error: (e) => console.log(e),
        loading: (l) => dispatch(authSetLoading()),
      })
      // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export default EmailPasswordLogin