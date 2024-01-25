import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const searchClubsByName = async ({loading, error, succes, clubName}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/club/searchClubsByName/${clubName}`, { headers: headers })
        console.log(response.data)
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }

export const getClubsById = async ({loading, error, succes, clubId}) => {
    const token = await AsyncStorage.getItem("token");
     try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/club/getClubsById/${clubId}`, { headers: headers })
        console.log(response.data)
            succes(response.data)
            loading(false)
            }
    catch(err) {
        loading(false)
        error(err)
    }
  }