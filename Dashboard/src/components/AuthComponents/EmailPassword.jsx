import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginWithBack } from "../../../peticiones/auth";
import { authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import auth from "../../../peticiones/firebase";
import { useDispatch } from "react-redux";



const EmailPassword = (name, lastName, email, password, dispatch, router, userDataOnboarding) => {
  
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) =>  {
        const token = userCredential.user.accessToken        
        console.log(token) 
        localStorage.setItem("firebaseToken", token)
        await LoginWithBack({
          name: name,
          email,
          lastName: lastName,
          professions: [userDataOnboarding.profesion] || ["ninguna"],
          answers: userDataOnboarding.answers || null,
            succes: async (v) => {
              await localStorage.setItem('token', v.newToken);
              dispatch(authSetUser(v.user))
              console.log('v', v)
              if(v.user?.rol?.profesion === 'fotografo') router.push('/dashboardPh')
              if(v.user?.rol?.profesion === 'videoMaker') router.push('/dashboardPh')
              else router.push("/dashboard")
              // router.push("/dashboard")
            },
            error: (e) => console.log(e),
            loading: (l) => dispatch(authSetLoading()),
          })
    })
}

export default EmailPassword