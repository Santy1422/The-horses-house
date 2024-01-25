import axios from "axios";
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