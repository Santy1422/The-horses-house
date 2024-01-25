import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../peticiones/firebase";
import { LoginWithBack } from "../../../peticiones/auth";
import { authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import { useDispatch } from "react-redux";


const EmailPasswordLogin = async (email, password, dispatch, router) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = userCredential.user.accessToken;
    localStorage.setItem("firebaseToken", token);

    await LoginWithBack({
      succes: async (v) => {
        await localStorage.setItem('token', v.newToken);
        console.log("USER  PROFESION", v.user?.rol?.profesion)
        const dashboardRoute = v.user?.rol?.profesion === 'fotografo' || v.user?.rol?.profesion === 'videoMaker' ? '/dashboardPh' : '/dashboard';
        dispatch(authSetUser(v.user));
        router.push(dashboardRoute);
      },
      error: console.log,
      loading: () => dispatch(authSetLoading()),
    });
  } catch (error) {
    console.error(error.message);
  }
}

export default EmailPasswordLogin