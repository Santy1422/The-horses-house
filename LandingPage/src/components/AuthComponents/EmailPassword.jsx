import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginWithBack } from "../../../peticiones/auth";
import { authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import auth from "../../../peticiones/firebase";
import { useDispatch } from "react-redux";



const EmailPassword = (email, password, dispatch, router) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) =>  {
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
    })
}

export default EmailPassword