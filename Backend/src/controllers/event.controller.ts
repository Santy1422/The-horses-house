
import pruebasSchema from "../databases/mongodb/schemas/pruebasSchema"

import inscriptosSchema from "../databases/mongodb/schemas/inscriptosSchema"
import eventSchema from "../databases/mongodb/schemas/eventSchema"
import usersSchema from "../databases/mongodb/schemas/usersSchema"

import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});


const newEvent = async (req, res) => {

        const {
          nombreEvento,
          clubesPatrocinadores,
          fechaInicio,
          horaInicio,
          fechaFinalizacion,
          HoraFinalizacion,
          fechaInicioInscripcion,
          horaInicioInscripcion,
          fechaFinInscripcion,
          horaFinInscripcion,
          tipoConcurso,
          ubicacion,
          descripcionEvento,
          autoridadesConcurso,
          emailContacto,
          tipoDeConcurso,
          categoria
        } = req.body;
        const categoriasCreadas = await pruebasSchema.insertMany(categoria);
        // Crear el evento
        const evento = new eventSchema({
          creadorId: req.user.id,
          nombreEvento,
          clubesPatrocinadores,
          fechaInicio,
          horaInicio,
          fechaFinalizacion,
          HoraFinalizacion,
          fechaInicioInscripcion,
          horaInicioInscripcion,
          fechaFinInscripcion,
          horaFinInscripcion,
          tipoConcurso,
          tipoDeConcurso,
          ubicacion,
          descripcionEvento,
          autoridadesConcurso,
          emailContacto,
          categorias: categoriasCreadas.map(categoria => categoria._id),
          profesional: req.user.id,
          estadoEvento: "borrador"
        });
        
        await evento.save();

        const promises = evento.categorias.map((ele) => pruebasSchema.findById(ele));
        res.status(201).json({evento: evento})
    }


const publicarEvent  = async (req,res) => {
  let event = await eventSchema.findById(req.params.eventId)
  if(!event) res.status(400).send("El evento no existe")
  event.estadoEvento = "publicado"

  await event.save()

  const promises = event.categorias.map((ele) => pruebasSchema.findById(ele));

  const categorias = await Promise.all(promises);
  res.status(201).json(JSON.stringify({event, categorias}))
}

const OpenInscription  = async (req,res) => {
  let event = await eventSchema.findById(req.params.eventId)
  if(!event) res.status(400).send("El evento no existe")
  event.inscripciones = true
  await event.save()
  const promises = event.categorias.map((ele) => pruebasSchema.findById(ele));

const categorias = await Promise.all(promises);
res.status(201).json(JSON.stringify({event, categorias}))
}





const closeInscriotion  = async (req,res) => {
  let event = await eventSchema.findById(req.params.eventId)
  if(!event) res.status(400).send("El evento no existe")
  event.inscripciones = false
  await event.save()
  const promises = event.categorias.map((ele) => pruebasSchema.findById(ele));

  const categorias = await Promise.all(promises);
  res.status(201).json(JSON.stringify({event, categorias}))}

  const allEvents = async (req, res) => {
    try {
        const eventos = await eventSchema.find();

        const myevents = await eventSchema.find({ creadorId: req.user.id });

        const myeventsBorradores = myevents.filter(evento => evento.estadoEvento === "borrador");
        const MyEventsPublicados = myevents.filter(evento => evento.estadoEvento === "publicado");

        res.status(200).send({ allEvents: eventos || [], myEvents: myevents || [], borrador: myeventsBorradores || [], publicados: MyEventsPublicados || [] });
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener los eventos', error: error });
    }
}

const myEvents = async (req, res) => {
  try {    
    const eventos = await eventSchema.find({ 
      creadorId: req.user.id, 
    });
      const enrichedEventos = await Promise.all(eventos.map(async (evento) => {
      const categorias = await Promise.all(
        evento.categorias.map(categoriaId => pruebasSchema.findById(categoriaId))
      );
      const categoriasConInscriptos = await Promise.all(categorias.map(async (categoria) => {
        if (categoria && categoria.inscriptos) {
          const inscriptos = await Promise.all(
            categoria.inscriptos.map(inscriptoId => inscriptosSchema.findById(inscriptoId))
          );
          return { ...categoria.toObject(), inscriptos };
        } else {
          return { ...categoria.toObject(), inscriptos: [] };
        }
      }));
      return { ...evento.toObject(), categorias: categoriasConInscriptos };
    }));

    res.status(200).json({ eventos: enrichedEventos });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al obtener los eventos.', error: error.message });
  }
};


const deleteEventById = async (req, res) => {
  
    const eventId = req.params.id;
    const event = await eventSchema.findById(eventId.toString()); 
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    };
    const categoriaIds = event.categorias;
    await event.remove();
    if (categoriaIds && categoriaIds.length > 0) {
            await pruebasSchema.deleteMany({ _id: { $in: categoriaIds } });
          }
    res.status(200).json({ message: 'Evento eliminado con éxito' }); 
  };



  const findEventById = async (req, res) => {
    const eventId = req.params.id;
 
  const event = await eventSchema.findById(eventId.toString())
    const categoriasPromises = event.categorias.map(categoriaId => 
      pruebasSchema.findById(categoriaId)
    );
    const categorias = await Promise.all(categoriasPromises);
    const inscriptosPromises = categorias.map(async categoria => {
      if (categoria && categoria.inscriptos) {
        const inscriptos = await Promise.all(
          categoria.inscriptos.map(async inscriptoId => {
            const inscripto = await inscriptosSchema.findById(inscriptoId);
            
            const usuariId = inscripto.usuarioId; 
            const pagoId = inscripto.pagoId; 
            const nombreCaballo = inscripto.caballoInscritos;
            const tipodePago = inscripto.tipodePago; 
            const estadoDePago = inscripto.estadoDePago; 
            const Jinete = inscripto.Jinete; 
            const clubRepresenta = inscripto.clubRepresenta;    
            return {
              nombreUsuario: usuariId,
              estadoPago: pagoId,
              nombreCaballo: nombreCaballo,
              tipodePago:tipodePago,
              estadoDePago:estadoDePago,
              Jinete:Jinete,
              clubRepresenta:clubRepresenta,
            };
          })
        );
        return { categoria: categoria, inscriptos: inscriptos };
      } else {
        return { categoria: categoria, inscriptos: [] };
      }
    });
    const inscriptosCategorias = await Promise.all(inscriptosPromises);
    res.status(200).json({ event: event, categorias: categorias, inscriptosPorCategoria: inscriptosCategorias });
  }

  const editEventCategoria = async (req, res) => {
    const {  categoriaId, ...eventData } = req.body;
    const eventoId = req.params.id;
    const eventoActualizado = await eventSchema.findByIdAndUpdate(eventoId, eventData, { new: true });

    if (!eventoActualizado) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    const categoriaActualizada = await pruebasSchema.findByIdAndUpdate(categoriaId, eventData.categoria, { new: true });
    
    if (!categoriaActualizada) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    return res.json({ evento: eventoActualizado, categoria: categoriaActualizada });  
};




const getEventoPublicadosById = async (req, res) => {
  try {
    const userId = req.user.id;

    const publishedEvents = await eventSchema.find({ estadoEvento: 'publicado', creadoPor: userId });

    if (publishedEvents.length === 0) {
      return res.status(404).json({ message: 'No se encontraron eventos publicados para este usuario.' });
    }

    const enrichedEvents = await Promise.all(publishedEvents.map(async (event) => {
      const categorias = await Promise.all(event.categorias.map(categoriaId => 
        pruebasSchema.findById(categoriaId)
      ));

      const categoriasConInscriptos = await Promise.all(categorias.map(async (categoria) => {
        if (categoria && categoria.inscriptos) {
          const inscriptos = await Promise.all(
            categoria.inscriptos.map(inscriptoId => 
              inscriptosSchema.findById(inscriptoId)
            )
          );
          return { ...categoria.toObject(), inscriptos };
        } else {
          return { ...categoria.toObject(), inscriptos: [] };
        }
      }));

      return { ...event.toObject(), categorias: categoriasConInscriptos };
    }));

    return res.status(200).json({ publishedEvents: enrichedEvents });
  } catch (error) {
    return res.status(500).json({ message: 'Hubo un error al obtener los eventos publicados para este usuario.', error: error.message });
  }
};


const getEventosBorrador = async (req, res) => {
  try {
    const draftEvents = await eventSchema.find({ estadoEvento: 'borrador' });

    if (draftEvents.length === 0) {
      return res.status(404).json({ message: 'No se encontraron eventos en estado de borrador.' });
    }

    const enrichedDraftEvents = await Promise.all(draftEvents.map(async (event) => {
      const categorias = await Promise.all(event.categorias.map(categoriaId => 
        pruebasSchema.findById(categoriaId)
      ));

      const categoriasConInscriptos = await Promise.all(categorias.map(async (categoria) => {
        if (categoria && categoria.inscriptos) {
          const inscriptos = await Promise.all(
            categoria.inscriptos.map(inscriptoId => 
              inscriptosSchema.findById(inscriptoId)
            )
          );
          return { ...categoria.toObject(), inscriptos };
        } else {
          return { ...categoria.toObject(), inscriptos: [] };
        }
      }));

      return { ...event.toObject(), categorias: categoriasConInscriptos };
    }));

    return res.status(200).json({ draftEvents: enrichedDraftEvents });
  } catch (error) {
    return res.status(500).json({ message: 'Hubo un error al obtener los eventos en estado de borrador.', error: error.message });
  }
};


const getEventosBorradorByUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const draftEvents = await eventSchema.find({ estadoEvento: 'borrador', creadoPor: userId });

    if (draftEvents.length === 0) {
      return res.status(404).json({ message: 'No se encontraron eventos en estado de borrador para este usuario.' });
    }

    const enrichedDraftEvents = await Promise.all(draftEvents.map(async (event) => {
      const categorias = await Promise.all(event.categorias.map(categoriaId => 
        pruebasSchema.findById(categoriaId)
      ));

      const categoriasConInscriptos = await Promise.all(categorias.map(async (categoria) => {
        if (categoria && categoria.inscriptos) {
          const inscriptos = await Promise.all(
            categoria.inscriptos.map(inscriptoId => 
              inscriptosSchema.findById(inscriptoId)
            )
          );
          return { ...categoria.toObject(), inscriptos };
        } else {
          return { ...categoria.toObject(), inscriptos: [] };
        }
      }));

      return { ...event.toObject(), categorias: categoriasConInscriptos };
    }));

    return res.status(200).json({ draftEvents: enrichedDraftEvents });
  } catch (error) {
    return res.status(500).json({ message: 'Hubo un error al obtener los eventos en estado de borrador para este usuario.', error: error.message });
  }
};
const CurrentEvents = async (req, res) => {

  const pastEvents = await eventSchema.find({estado: "Progreso", estadoEvento:"publicado"})

  if (pastEvents.length === 0) {
    return res.status(404).json({ message: 'No se encontraron eventos pasados.' });
  }
  const enrichedPastEvents = await Promise.all(pastEvents.map(async event => {
    const categorias = await Promise.all(event.categorias.map(async categoriaId => {
      const categoria = await pruebasSchema.findById(categoriaId);

      if (categoria && categoria.inscriptos) {
        const inscriptos = await Promise.all(
          categoria.inscriptos.map(inscriptoId => inscriptosSchema.findById(inscriptoId))
        );
        return { ...categoria.toObject(), inscriptos };
      } else {
        return { ...categoria.toObject(), inscriptos: [] };
      }
    }));

    return { ...event.toObject(), categorias };
  }));

  res.status(200).json({ pastEvents: enrichedPastEvents });
};


const deleteEvent = async (req, res) => {

  const event = await eventSchema.findOne({ inscriptos: req.user.id, id: req.params.id });
  if(!event) "el evento no existe"
event.estadoEvento = "eliminado"
event.save()
  res.status(200).json({ event: event });
};



const allEventsByStatus = async (req, res) => {
  try {
    const eventosPasados = await eventSchema.find({
      fechaFinalizacion: { $lt: new Date() },
      estadoEvento: 'publicado',
    }).exec();

    const eventosEnCurso = await eventSchema.find({
      fechaInicio: { $lte: new Date() },
      fechaFinalizacion: { $gte: new Date() },
      estadoEvento: 'publicado',
    }).exec();

    const eventosFuturos = await eventSchema.find({
      fechaInicio: { $gt: new Date() },
      estadoEvento: 'publicado' || "Progreso",
    }).exec();
    const concurso = await eventSchema.find({
      tipoDeConcurso: 'Concurso',
    }).exec();
    const pasada = await eventSchema.find({
      tipoDeConcurso: 'Pasada',
    }).exec();
    
    const misEventos = await eventSchema.find({
      inscriptos: req.user.id,
    }).exec();
    

    // Envía una respuesta JSON con los resultados
    res.status(200).json({
      pasados: eventosPasados || [],
      enCurso: eventosEnCurso || [],
      futuros: eventosFuturos || [],
      concurso: concurso || [],
      pasada: pasada || [],
      misEventos: misEventos || []
    });
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la búsqueda de eventos
    console.error("Error al obtener eventos:", error);
    res.status(500).json({ error: "Error al obtener eventos" });
  }
}


const findEventWithInscriptions = async (req, res) => {
  const eventId = req.params.id
  const evento = await eventSchema
  .findById(eventId)
  .populate({
    path: 'categorias',
    populate: [
      {
        path: 'inscriptos',
        model: 'Inscriptos',
        populate: {
          path: 'caballoInscritos',
          model: 'Horse'
        }
      }
    ]
  })


  res.status(200).json({ evento });
  }

const ponerResultados = async (req, res) => {
let inscriptoId = req.body.inscriptoId.toString()
  const inscripto = await inscriptosSchema.findById(inscriptoId );

  inscripto.faltas = req.body.faltas
  inscripto.faltas2 = req.body.faltas2 || 0
  inscripto.PEncontra = req.body.PEncontra
  inscripto.tiempo = req.body.tiempo
  inscripto.tiempo2  = req.body.tiempo2 || 0
  res.status(200).json( inscripto)
};




const inscriptoManual = async (req,res) => {

  const nuevoInscripto = await new inscriptosSchema({

    Jinete: req.body.Jinete,
    estadoPago: req.body.estadoPago,
    clubRepresenta: req.body.clubRepresenta,
    pruebaId: req.body.pruebaId,
    nombreDelCaballo: req.body.nombreDelCaballo,
    jineteLastName: req.body.jineteLastName || "No proporciono apellido",
    definicion: req.body.definicion,
    categoria: req.body.categoria,
    altura: req.body.altura
  });

  await nuevoInscripto.save()
 let searchPrueba = await pruebasSchema.findOne({_id: req.body.pruebaId})

 if(!searchPrueba) return res.status(400).send("No existe la prueba")
 searchPrueba.inscriptos.push(nuevoInscripto._id)
 await searchPrueba.save()

  res.status(200).send("Guardado correctamente")
}

const findEventDetailCard = async (req, res) => {
  try {
    const eventId = req.params.id;

    const event = await eventSchema.findById(eventId.toString()).select("categorias fechaInicio fechaFinalizacion tipoDeConcurso nombreEvento horaInicio ubicacion estado");

    if (!event) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }

    const categoriasPromises = event.categorias?.map(categoria => 
      pruebasSchema.findById(categoria._id).select("dia hora definicion arancelInscripcion pista premios altura nombre categoria")
    ) || [];
    const categorias = await Promise.all(categoriasPromises);
    res.status(200).json({ event: event, categorias: categorias });
  } catch (error) {
    console.error("Error en findEventDetailCard:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



const controller = {
    newEvent,
    myEvents,
    allEvents,
    deleteEventById,
    findEventById,
    editEventCategoria,
    getEventoPublicadosById,
    getEventosBorrador,
    getEventosBorradorByUser,
    publicarEvent,
    OpenInscription,
    closeInscriotion,
    CurrentEvents,
    allEventsByStatus,
    deleteEvent,
    findEventWithInscriptions,
    ponerResultados,
    inscriptoManual,
    findEventDetailCard
}


export default controller
