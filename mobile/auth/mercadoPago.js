import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const agregarTarjetaAMercadoPago = async (cardData, succes, error, loading) => {
    try {
      // Configura los datos de la tarjeta
      const data = {
        card_number: cardData.cardNum,
        cardholder: cardData.name,
        expiration_month: cardData.expiricy.split('/')[0],
        expiration_year: `20${cardData.expiricy.split('/')[1]}`,
        security_code: cardData.cvv,
      };
  
      const response = await fetch('https://api.mercadopago.com/v1/card_tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer TEST-5255874391147184-122213-dd5b887bebe1f9521436e0947cc54013-772470493`,
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
        console.log('Respuesta de Mercado Pago al agregar tarjeta:', responseData);
  
      return responseData;
    } catch (error) {
      console.error('Error al agregar tarjeta en Mercado Pago:', error);
      throw error; 
    }
  };

  export const addCardtoBack = async ({cardToken, loading, error, succes}) => {
    try {
        loading(true)
        const token2 = await AsyncStorage.getItem("token");
  
        let headers = {
            'Authorization': `Bearer ${token2}`,
            'Content-Type': 'application/json'
          };
          
        let response = await axios.post('/mercadopago/addCard', cardToken, {headers: headers})
        succes(response.data)
        loading(false)
      }
      catch(err){
        error(err)
        loading(false)
    } 
  }

  export const suscribirse = async ({planId, token, loading, error, succes}) => {
    try {
        loading(true)
        const token2 = await AsyncStorage.getItem("token");
  let data = {
    planId, token
  }
        // let headers = {
        //     'Authorization': `Bearer ${token2}`,
        //     'Content-Type': 'application/json'
        //   };
          const response = await axios.post('https://api.mercadopago.com/preapproval', {
    preapproval_plan_id: planId,
    reason: "Plan Simple",
    external_reference: "hr-1234",
    payer_email: "mdefensa@blackstallion.com.ar",
    card_token_id: token,
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      start_date: "2020-06-02T13:07:14.260Z",
      end_date: "2022-07-20T15:59:52.581Z",
      transaction_amount: 10,
      currency_id: "ARS"
    },
    back_url: "https://horse-riders-house-production-34bb.up.railway.app/mercadopago/webhook",
    status: "authorized"
  }, {
    headers: {
      'Authorization': 'Bearer APP_USR-6747593468863374-010413-d58c1570a73729d4eed4e8c35eb31480-772470493', // Reemplaza YOUR_ACCESS_TOKEN con tu token de acceso real
      'Content-Type': 'application/json'
    }
  });
console.log(response)
        // let response = await axios.post('/mercadopago/suscribirse', data, {headers: headers})
        succes(response.data)
        loading(false)
      }
      catch(err){
        error(err)
        loading(false)
    } 
  }