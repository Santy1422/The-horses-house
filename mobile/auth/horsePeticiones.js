import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Header } from "react-native/Libraries/NewAppScreen";



  export const addNewHorse = async ({  token,  newHorse, loading, error, succes}) => {
    try{
      loading(true)

        let headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        
        let response = await axios.post("/horse/newHorse", {newHorse}, { headers: headers });
        succes(response.data)
        loading(false)
      }
      catch(err){
        error(err)
        loading(false)

      }
      }

  export const getAllHorses = async ({loading, error, succes}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get('/horse/myHorse', { headers: headers })
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }

  export const searchHorseByName = async ({loading, error, succes, horsesName}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/horse/searchHorseByName/${horsesName}`, { headers: headers })
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }

  export const selectHorseById = async ({loading, error, succes, horsesId}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/horse/selectHorseById/${horsesId}`, { headers: headers })
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }

  export const claimHorse = async ({loading, error, succes, horsesId, horseData}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.post(`/horse/claimHorse/${horsesId}`, {horseData}, { headers: headers })
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }
  export const editHorse = async ({loading, error, succes, horsesId, horseData}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.post(`/horse/editHorse/${horsesId}`, {horseData}, { headers: headers })
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }
    