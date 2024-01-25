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


function generarCodigo() {
  const longitud = 4;
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
  }

  return codigo
}

export const sendEmailVerificationBrevo = async (email, success) => {
  try {
    console.log("asdsad", email);
let codigo = generarCodigo()
console.log("asdsad", codigo);

    const apiKey = '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';
    const data = {
      sender: {
        email: 'mdefensa@blackstallion.com.ar',
        name: 'Black Stallion'
      },
      "to":[  
        {email: email}
     ],
      templateId: 2,
      params: {
        code: codigo
      }
    };
    const headers = {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    };

    let sendEmail = await axios.post('https://api.brevo.com/v3/smtp/email', data, { headers });
    success(codigo);
  } catch (err) {
    if (err.response) {
      console.error(JSON.stringify(err.response.data, null, 2));
    } else {
      console.error(err.message); // Otra opción, mostrar el mensaje de error directamente
    }  }
};

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