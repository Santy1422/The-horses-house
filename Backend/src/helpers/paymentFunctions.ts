
import pruebasSchema from "../databases/mongodb/schemas/pruebasSchema"
import professionalsSchema from "../databases/mongodb/schemas/professionalsSchema"
import premiosSchema from "../databases/mongodb/schemas/premiosSchema"
import paymentSchema from "../databases/mongodb/schemas/paymentSchema"
import inscriptosSchema from "../databases/mongodb/schemas/inscriptosSchema"
import horseSchema from "../databases/mongodb/schemas/horseSchema"
import federadoSchema from "../databases/mongodb/schemas/federadoSchema"
import ClubSchema from "../databases/mongodb/schemas/ClubSchema"
import eventSchema from "../databases/mongodb/schemas/eventSchema"
import usersSchema from "../databases/mongodb/schemas/usersSchema"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"



const inscribirseAEventoEfectivo = async( body, categoriaId, usuario, caballoInscritos, ) => {
  const tipoRegistro = body.tipoRegistro;
  const categoriaFound = await pruebasSchema.findById(categoriaId)
  const eventoFound =   await eventSchema.findOne({categorias: categoriaId})

  if(!categoriaFound) return "La categoria no existe"
  // Generar un código único para el pago en efectivo
  const codigoPago = uuidv4();

  calcularPago(body.monto);

  const { comision, total } = await calcularPago(body.monto);  

      // Crear una nueva entrada en el modelo Payment para registrar el pago en efectivo
      const nuevoPago = new paymentSchema({
        creadoPor: usuario,
        categorias: categoriaFound._id,
        costoEvento: body.monto,  
        comision: comision,
        totalPagar: total,
        estadoPago: 'pendiente', 
        detallesPago: body.detallesPago, 
        metodoPago: body.metodoPago,
        codigoPagoEfectivo: codigoPago,
        clubRepresenta: body.clubRepresenta,
    });
    await nuevoPago.save();
    const nuevoInscripto  = new inscriptosSchema({
      usuario: usuario,
      pago: nuevoPago._id,
      caballoInscritos: caballoInscritos,

  });
  await nuevoInscripto.save();

  categoriaFound.inscriptos.push(nuevoInscripto._id)
    await categoriaFound.save();

return eventoFound
  }


const registrarFederado = async (tipoRegistro, requestBody, reqUserId) => {
    if (tipoRegistro) {
      const nuevoRegistro = new federadoSchema({ tipoRegistro });
  
      Object.keys(requestBody).forEach((key) => {
        if (nuevoRegistro.schema.paths[key]) {
          nuevoRegistro[key] = requestBody[key];
        }
      });

  
      await nuevoRegistro.save();
      return nuevoRegistro; 
    }
  };


  const calcularPago = async (monto) => {
    
    const PORCENTAJE_COMISION = 0.1;
    const comision = monto * PORCENTAJE_COMISION;
    const total = monto + comision;
  
    return { comision, total };
  };


  const datosTransferencia = async () => {
    
    const CBU_TRANSFERIR = '123456789'; // pasar a variable de entorno

  
    return CBU_TRANSFERIR;
  }




  const accessToken = 'TEST-5255874391147184-122213-dd5b887bebe1f9521436e0947cc54013-772470493';

const crearUsuarioEnMercadoPago = async (email) => {
  try {
    const response = await axios.post(
      'https://api.mercadopago.com/v1/customers',
      {
        email: email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 201) {
      const mercadoPagoUserId = response.data.id;
      return mercadoPagoUserId;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al crear el usuario en MercadoPago:', error);
    return null;
  }
};
const agregarTarjetaAlCliente = async (customerId, cardToken) => {
  try {
    const response = await axios.post(
      `https://api.mercadopago.com/v1/customers/${customerId}/cards`,
      {
        token: cardToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Verifica si la respuesta tiene éxito
    if (response.status === 201) {
      const cardId = response.data.id;
      console.log('Tarjeta agregada al cliente con ID:', cardId);
      return cardId;
    } else {
      console.error('Error al agregar la tarjeta al cliente:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error al agregar la tarjeta al cliente:', error);
    return null;
  }
};

  export { registrarFederado, calcularPago, datosTransferencia, inscribirseAEventoEfectivo, crearUsuarioEnMercadoPago, agregarTarjetaAlCliente };


