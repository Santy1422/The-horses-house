import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateUser = async ({  editedUser, loading, error, succes}) => {

    try {
        loading(true)
        const token2 = await AsyncStorage.getItem("token");

        let headers = {
            'Authorization': `Bearer ${token2}`,
            'Content-Type': 'application/json'
          };
        let response = await axios.post('/user/editUser', {editedUser}, {headers: headers})
        succes(response.data)
        loading(false)
      }
      catch(err){
        error(err)
        loading(false)
    } 
}
export const getUserClubs = async ({ loading, error, succes}) => {

    try {
        loading(true)
        const token2 = await AsyncStorage.getItem("token");

        let headers = {
            'Authorization': `Bearer ${token2}`,
            'Content-Type': 'application/json'
          };
        let response = await axios.get('/user/getClubs', {headers: headers})
        succes(response.data)
        loading(false)
      }
      catch(err){
        error(err)
        loading(false)
    } 
}
export const deleteAccounttoBack = async ({loading, error, succes}) => {
  try {
      loading(true)
      const token2 = await AsyncStorage.getItem("token");

      let headers = {
          'Authorization': `Bearer ${token2}`,
          'Content-Type': 'application/json'
        };
      let response = await axios.delete('/user/delete', {headers: headers})
      succes(response.data)
      loading(false)
    }
    catch(err){
      error(err)
      loading(false)
  } 
}
export const saveTokenToServer = async ({  token, loading, error, succes}) => {
  try {
    const token2 = await AsyncStorage.getItem("token");

      loading(true)
      let headers = {
          'Authorization': `Bearer ${token2}`,
          'Content-Type': 'application/json'
        };
      let response = await axios.post('/user/savedevicetoken', {token: token}, {headers: headers})
      succes(response.data)
      loading(false)
    }
    catch(err){
      error(err)
      loading(false)
  } 
}
export const updateCode = async ({  code, loading, error, succes}) => {
  try {
    const token2 = await AsyncStorage.getItem("token");

      loading(true)
      let headers = {
          'Authorization': `Bearer ${token2}`,
          'Content-Type': 'application/json'
        };
      let response = await axios.post('/user/updatecode', {code: code}, {headers: headers})
      succes(response.data)
      loading(false)
    }
    catch(err){
      error(err)
      loading(false)
  } 
}