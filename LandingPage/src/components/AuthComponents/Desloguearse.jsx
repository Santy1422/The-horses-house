import { signOut , getAuth } from "firebase/auth";
import auth from "../../../peticiones/firebase";



const Desloguearse = () => {
    
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
    
}
export default Desloguearse
    