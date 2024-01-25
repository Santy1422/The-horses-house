import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Header } from "react-native/Libraries/NewAppScreen";


//ejemplo de peticion
export const checkRegister = async ({ userName, succes, loading, error }) => {
    try {
        loading(true)
      const response = await axios.get(`/v1/user/checkRegister?register=${userName}`);
      succes(response.data.payload)
      loading(false)
    } catch (err) {
error(err)
        loading(false)

    }
  };

  export const login = async ({email, password, succes, error, loading}) => {
    try {
      loading(true)
      // Llama a la función de inicio de sesión de Firebase con el correo electrónico y la contraseña
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // userCredential.user contiene información del usuario, si es necesario
      succes(userCredential.user) ;
      loading(false)
    } catch (err) {
      error(err) ; // Lanza el error para manejarlo en la llamada al método
      loading(false)
  
    }
  };

  export const LoginWithBack = async ({professions, name, lastname, loading, error, succes, code}) => {
try{
    loading(true)
    let token = await AsyncStorage.getItem("firebaseToken");
    let headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    let response = await axios.post("/user/authGoogle", {professions, name, lastname, code}, { headers: headers });

    succes(response.data)
    loading(false)
  }
  catch(err){
    error(err)
    loading(false)
  }
  }

  export const realodadUser = async ({ token, loading, error, succes}) => {
    try{
      loading(true)

        let headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        
        let response = await axios.get("/user/getUserById", { headers: headers });
        succes(response.data)
        loading(false)
      }
      catch(err){
        error(err)
        loading(false)

      }
      }
    