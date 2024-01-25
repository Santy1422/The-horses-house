import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { CreditCardInput } from "react-native-credit-card-input";
import { useSelector } from 'react-redux';
import { addCardtoBack, suscribirse } from '../../../auth/mercadoPago';

const AddCard = ({selected}) => {
  const [cardData, setCardData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector((state) => state.ReducerAuth.profile);

  const handleCardDataChange = (formData) => {
    setCardData(formData.values);
  };
//   const handleCreateSubscription = async (token) => {
//     console.log(token)
//     try {
//         const response = await axios.post('https://api.mercadopago.com/preapproval', {
//             preapproval_plan_id: selected,
//             reason: "Plan Simple",
//             external_reference: "hr-1234",
//             payer_email: user.email,
//             card_token_id: token,
//             auto_recurring: {
//               frequency: 1,
//               frequency_type: "months",
//               start_date: "2020-06-02T13:07:14.260Z",
//               end_date: "2022-07-20T15:59:52.581Z",
//               transaction_amount: 7000,
//               currency_id: "ARS"
//             },
//             back_url: "https://horse-riders-house-production-34bb.up.railway.app/mercadopago/webhook",
//             status: "authorized"
//           }, {
//             headers: {
//               'Authorization': 'Bearer TEST-6747593468863374-010413-6c35f7fdfcf8b096d1687d725f05b012-772470493', // Reemplaza YOUR_ACCESS_TOKEN con tu token de acceso real
//               'Content-Type': 'application/json'
//             }
//           });
    
//         console.log( response.data);
//       } catch (error) {
//         console.log('Error al crear la suscripción:', error);
//         // Maneja aquí el error
//       }
//   };

  const obtenerTokenMercadoPago = async (datosTarjeta) => {
    try {
      const response = await axios.post('https://api.mercadopago.com/v1/card_tokens', datosTarjeta, {
        headers: {
          'Authorization': 'Bearer TEST-6747593468863374-010413-6c35f7fdfcf8b096d1687d725f05b012-772470493', // Reemplaza con tu token de acceso real
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)

      return response.data.id; // Retorna el token
    } catch (error) {
      console.log('Error al obtener el token de MercadoPago:', error);
      throw error; // Relanza el error para manejarlo en la función llamadora
    }
  };

  const handleSaveCard = async () => {
    try {
      setIsLoading(true);
      const token = await obtenerTokenMercadoPago(cardData); // Obtener el token
    //await addCardtoBack({cardToken: token, loading: (e) => console.log(e), error: (e) => console.log(e), succes: (e) => console.log(e)})
        console.log(token)
      await suscribirse({planId: selected, token:token, loading: (e) => console.log(e), error: (e) => console.log(e), succes: (e) => console.log(e)})
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <View style={{ marginTop: 80 }}>
      <TouchableOpacity onPress={handleSaveCard} disabled={isLoading}>
        <Text>Guardar Tarjeta</Text>
      </TouchableOpacity>
      <Text>Ingresa los datos de la tarjeta</Text>
      <CreditCardInput onChange={handleCardDataChange} />

      {isLoading && <Text>Cargando...</Text>}
      {successMessage !== '' && <Text style={{ color: 'green' }}>{successMessage}</Text>}
      {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
    </View>
  );
};

export default AddCard;