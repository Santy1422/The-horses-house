import axios from "axios";

export const getWeather = async ({ succes, error, loading, latitude, longitude}) => {
    try{
        loading(true)
        const API_KEY = '9340af4fc9fbaaef1d2010ccde7bffc4'
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        const response = await axios.get(API_URL) 
            
            succes(response.data)
            loading(false)
            }
        catch(err) {
            loading(false)
            error(err)
        } 
    }