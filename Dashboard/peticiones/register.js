import axios from "axios"


export const registerUser = ({token, succes, error, loading}) => {
try{
    loading(true)
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    }
    const response =  axios.post('/user/authGoogle',{'Nada': `Nada por body`},config)          
        succes(response.data)
        loading(false)
        }
    catch(err) {
        loading(false)
        error(err)
    }
}
