import pruebasSchema from "../databases/mongodb/schemas/pruebasSchema"
import paymentSchema from "../databases/mongodb/schemas/paymentSchema"
import inscriptosSchema from "../databases/mongodb/schemas/inscriptosSchema"
import eventSchema from "../databases/mongodb/schemas/eventSchema"
import usersSchema from "../databases/mongodb/schemas/usersSchema"
import Horse from "../databases/mongodb/schemas/horseSchema";
import Pruebas from "../databases/mongodb/schemas/pruebasSchema";
const mongoose = require('mongoose');




const pagoEnEfectivo = async (req, res) => {
  try {
    const { prueba1, categoria, prueba2, emailJiete, jineteLastName, caballoPrueba1, caballoPrueba2, precio, club, evento, jinete } = req.body.payment;
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
      if(searchPrueba.recorridos.length) {
        let searchPrueba2 = await Pruebas.findOne({name: searchPrueba.recorridos[0]});
        crearInscripto(searchPrueba2, caballoId)

      }
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
      creadoPor: req.user.id,
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
};



const controller = {

  pagoEnEfectivo,
}


export default controller
