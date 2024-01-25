import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from "./firebase";

export const loginFunc = async ({email, password, succes, error, loading}) => {
    try {
      loading(true)
      // Llama a la función de inicio de sesión de Firebase con el correo electrónico y la contraseña
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // userCredential.user contiene información del usuario, si es necesario
      succes(userCredential.user)
      const user = userCredential.user.accessToken
      await AsyncStorage.setItem('token', userCredential.user.accessToken);
      loading(false)
    } catch (err) {
      error(err) ; // Lanza el error para manejarlo en la llamada al método
      loading(false)
  
    }
  };