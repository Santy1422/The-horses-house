import { signOut , getAuth } from "firebase/auth";
import auth from "../../../peticiones/firebase";
import { useRouter } from "next/router";




const Desloguearse = (router) => {
       
    signOut(auth).then(() => {
        router?.push('/')
        localStorage.removeItem("token")    
        console.log('Sign-out successful')
    }).catch((error) => {
        console.log('An error happened.', error)
    });
    
}
export default Desloguearse
    