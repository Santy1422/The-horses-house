import eventSchema from "../eventSchema"

export const updateEventStatus = async () => {
    const now = new Date();
  
    // Encuentra eventos cuya inscripción debería estar abierta
    const eventsToOpenInscriptions = await eventSchema.find({
      fechaInicioInscripcion: { $lte: now },
      fechaFinInscripcion: { $gte: now },
      estadoEvento: 'publicado',
      inscripciones: false // Solo considera eventos con inscripciones cerradas
    });
  
    // Actualiza estos eventos para marcar las inscripciones como abiertas
    for (const event of eventsToOpenInscriptions) {
      event.inscripciones = true;
      await event.save();
    }
  
    // Encuentra eventos cuya inscripción debería estar cerrada
    const eventsToCloseInscriptions = await eventSchema.find({
      fechaFinInscripcion: { $lt: now },
      inscripciones: true // Solo considera eventos con inscripciones abiertas
    });
  
    // Actualiza estos eventos para marcar las inscripciones como cerradas
    for (const event of eventsToCloseInscriptions) {
      event.inscripciones = false;
      await event.save();
    }
  
    // Actualiza el estado general del evento (Pendiente, Progreso, Pasado)
    const eventsToUpdateStatus = await eventSchema.find({
        $or: [
          { fechaInicio: { $lte: now }, fechaFinalizacion: { $gte: now } }, // Eventos en curso
          { fechaInicio: { $gt: now } }, // Eventos próximos
          { fechaFinalizacion: { $lt: now } } // Eventos pasados
        ]
      });
  
    for (const event of eventsToUpdateStatus) {
        if (now >= event.fechaInicio && now <= event.fechaFinalizacion) {
            event.estado = "Progreso"; 
        } else if (now < event.fechaInicio) {
            event.estado = "Pendiente"; 
        } else if (now > event.fechaFinalizacion) {
            event.estado = "Pasado"; 
        }
        await event.save();
    }
  };