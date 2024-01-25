import mercadopago from "mercadopago"
import pruebasSchema from "../databases/mongodb/schemas/pruebasSchema";
import eventSchema from "../databases/mongodb/schemas/eventSchema";
import paymentSchema from "../databases/mongodb/schemas/paymentSchema";
import inscriptosSchema from "../databases/mongodb/schemas/inscriptosSchema";
import Horse from "../databases/mongodb/schemas/horseSchema";
import Pruebas from "../databases/mongodb/schemas/pruebasSchema";
import usersSchema from "../databases/mongodb/schemas/usersSchema";
import { agregarTarjetaAlCliente } from "../helpers/paymentFunctions";
import axios from "axios";

const mongoose = require('mongoose');

mercadopago.configure({
  access_token: "TEST-6747593468863374-010413-6c35f7fdfcf8b096d1687d725f05b012-772470493", // SANTY
});

const mercadopagoController = async (req, res) => {
  console.log("asadsa")
  try {
    const { prueba1, categoria, prueba2, emailJiete, jineteLastName, caballoPrueba1, caballoPrueba2, precio, club, evento, jinete } = req.body.payment;
    const metadata = {
      ...req.body.metadata,
      userId: req.user.id,
    };
    console.log(precio)
    const mpresponse = await mercadopago.preferences.create({
      items: [
        {
          title: "Horses Houses",
          unit_price: Number(precio),
          quantity: 1,
          currency_id: 'ARS',
        },
      ],
      notification_url: "https://horse-riders-house-production-34bb.up.railway.app/mercadopago/webhook",
      metadata: metadata
    });

    res.status(200).json(mpresponse)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
};

 const encontrarPago = async (id) => {
  const pago = await mercadopago.payment.findById(id);
};

 const webhook = async (req, res) => {
  console.log(req.body.metadata.payment)
  try {
    const query = req.query;

    if (query['data.id'] && query.type === 'payment') {
      const pago = await mercadopago.payment.findById(query['data.id']);

      if (pago.body.status === 'approved') {

        try {
          const { prueba1, categoria, prueba2, emailJiete, jineteLastName, caballoPrueba1, caballoPrueba2, precio, club, evento, jinete } = req.body.metadata.payment;
          if (!prueba1 && !prueba2) {
            return res.status(400).json({ message: "No se proporcionó ninguna prueba" });
          }
      
          let user = await usersSchema.findById(req.user.id);
        
          // Función auxiliar para crear un inscripto
          const crearInscripto = async (pruebaId, caballoId) => {
            if (!mongoose.Types.ObjectId.isValid(caballoId)) {
              // Manejar caso de caballoId no válido
              throw new Error(`ID de caballo no válido: ${caballoId}`);
            }
      
            let caballo = await Horse.findById(caballoId);
            if (!caballo) {
              throw new Error(`Caballo no encontrado con ID: ${caballoId}`);
            }
            caballo.competiciones.push(pruebaId)
            await caballo.save()
            let searchPrueba = await Pruebas.findById(pruebaId);
            if (!searchPrueba) {
              throw new Error(`Prueba no encontrada con ID: ${pruebaId}`);
            }
            
      
            const nuevoInscripto = new inscriptosSchema({
              usuarioId: req.user.id,
              pagoId: nuevoPago._id,
              caballoInscritos: [caballoId],
              Jinete: jinete,
              estadoPago: "pendiente",
              clubRepresenta: club,
              pruebaId: pruebaId,
              nombreDelCaballo: caballo.name,
              FotoCaballo: caballo.horsePic,
              emailJinete: emailJiete,
              jineteLastName: jineteLastName || "No proporciono apellido",
              definicion: searchPrueba.definicion,
              categoria: categoria,
              pista: searchPrueba.pista,
              altura: searchPrueba.altura
            });
            await nuevoInscripto.save();
      
            return nuevoInscripto;
          };
      
          let categorias = [];
          if (prueba1) {
            categorias.push(await pruebasSchema.findById(prueba1));
          let eventoAParticipar = await  eventSchema.findOne({categorias: prueba1})
          eventoAParticipar.inscriptos.push(req.user.id)
         await  eventoAParticipar.save()
          }
          if (prueba2) {
            categorias.push(await pruebasSchema.findById(prueba2));
          }
      
          const nuevoPago = new paymentSchema({
            creadoPor: req.body.metadata.userId,
            categorias: categorias.filter(Boolean),
            costoEvento: precio,
            comision: 0,
            totalPagar: precio,
            estadoPago: 'pendiente',
            detallesPago: evento,
            metodoPago: "efectivo",
            codigoPagoEfectivo: req.body.codigoPago,
            clubRepresenta: club,
          });
          await nuevoPago.save();
      
          // Crear inscripto para cada prueba y caballo
          if (prueba1 && caballoPrueba1) {
            for (const caballoId of caballoPrueba1) {
              const inscripto1 = await crearInscripto(prueba1, caballoId);
              categorias[0].inscriptos.push(inscripto1._id);
            }
          }
          if (prueba2 && caballoPrueba2) {
            for (const caballoId of caballoPrueba2) {
              const inscripto2 = await crearInscripto(prueba2, caballoId);
              categorias[1].inscriptos.push(inscripto2._id);
            }
          }
      
          // Guardar las categorías actualizadas
          for (const categoria of categorias) {
            await categoria.save();
          }
      
          user.eventos.push(nuevoPago._id);
          await user.save();
      
          res.status(200).json({ message: "Inscripción realizada con éxito", pagoId: nuevoPago._id });
        } catch (error) {
          console.error(`Error en pagoEnEfectivo: ${error}`);
          res.status(500).json({ error: error.message });
        }
      


      } else {
        res.status(400).json("error")
      }
    } else {
      res.status(400).json("error")
    }
  } catch (error) {
    console.log('LINEA 71', error);
    res.status(400).json(error)
  }
};

const addNewCard = async (req, res) => {
  try {
    let user = await usersSchema.findById(req.user.id)
    if(!user) res.status(400).send("usuario no existe")
    let customerId = user.mercadoPagoId
   let cardToken = req.body.cardToken
    let saveNewCard = await agregarTarjetaAlCliente(customerId, cardToken)
    user.cardsToken.push(saveNewCard)
    await user.save()
    res.status(200).json(user)

  } catch (error) {
    console.log('LINEA 71', error);
    res.status(400).json(error)
  }
};

const subscription = async (req, res) => {

  const response = await axios.post('https://api.mercadopago.com/preapproval', {
    preapproval_plan_id: req.body.planId,
    reason: "Plan Simple",
    external_reference: "hr-1234",
    payer_email: "mdefensa@blackstallion.com.ar",
    card_token_id: req.body.token,
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      start_date: "2020-06-02T13:07:14.260Z",
      end_date: "2022-07-20T15:59:52.581Z",
      transaction_amount: 7000,
      currency_id: "ARS"
    },
    back_url: "https://horse-riders-house-production-34bb.up.railway.app/mercadopago/webhook",
    status: "active"
  }, {
    headers: {
      'Authorization': 'Bearer TEST-6747593468863374-010413-6c35f7fdfcf8b096d1687d725f05b012-772470493', // Reemplaza YOUR_ACCESS_TOKEN con tu token de acceso real
      'Content-Type': 'application/json'
    }
  });
console.log(response)
res.status(200).send(response)
} 


const controller = {
  addNewCard,
  mercadopagoController,
  encontrarPago,
  webhook,
  subscription
}


export default controller
