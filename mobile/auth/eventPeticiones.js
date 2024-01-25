import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const eventGetAll = async ({ succes, error, loading}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get('/event/all', { headers: headers })              
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        }
}

export const eventGetId = async ({ succes, error, loading, id}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/event/findEventById/${id}`, { headers: headers }) 
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        } 
    }

    export const eventGetIdDetailCard = async ({ succes, error, loading, id}) => {
        try{
            const token = await AsyncStorage.getItem("token");
            
            const headers = {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            };
            loading(true)
            
            const response = await axios.get(`/event/findEventByIdDetailCard/${id}`, { headers: headers }) 
                
                succes(response.data)
                loading(false)
                }
            catch(err) {
                loading(false)
                error(err)
            } 
        }

export const eventGetIdWithInscriptionDetail = async ({ succes, error, loading, id}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/event/findEventWithInscriptionDetailById/${id}`, { headers: headers }) 
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        } 
    }
export const getEventPhotos = async ({ succes, error, loading, id}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get(`/fotografo/fotoseventos/${id}`, { headers: headers }) 
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        } 
    }

export const getEventsforTime = async ({ succes, error, loading}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get('/event/allEventsByStatus', { headers: headers })              
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        }
}

export const getPastEvents = async ({ succes, error, loading}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get('/event/pastEvent', { headers: headers })              
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        }
}

export const getCurrentEvents = async ({ succes, error, loading}) => {
    try{
        const token = await AsyncStorage.getItem("token");
        
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        loading(true)
        
        const response = await axios.get('/event/currentEvent', { headers: headers })              
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        }
}

export const getPruebaInscriptos = async ({id, success, error, loading }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      loading(true);
      const response = await axios.get(`/resultados/recibirInscriptos/${id}`, { headers: headers });      
      success(response.data);
      
      loading(false);
    } catch (err) {
      loading(false);
      error(err);
    }
  };
  
