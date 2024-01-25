
import Event from "../databases/mongodb/schemas/eventSchema";
import Fotografos from "../databases/mongodb/schemas/fotografosSchema";
import Inscriptos from "../databases/mongodb/schemas/inscriptosSchema";
import usersSchema from "../databases/mongodb/schemas/usersSchema"
import { s3delete, uploadPhoto} from "../helpers/udploadImagetoAWS"


const inscribirseEvento = async (req, res) => {
    try {
        const user = await usersSchema.findById(req.user.id);
        console.log(user)

        if (!user) {
            return res.status(400).send("El usuario no existe.");
        }

        if (user.rol.profesion !== "fotografo" && user.rol.profesion !== "videoMaker") {
            return res.status(400).send("El usuario no tiene los roles de fotografo o videoMaker asignados.");
        }

        const evento = await Event.findOne({_id: req.body.eventId});

        if (!evento) {
            return res.status(400).send("El ID del evento no existe.");
        }

        // Verificar si el usuario ya está inscrito en este evento
        const yaInscrito = await Fotografos.findOne({ fotografoId: req.user.id, evento: req.body.eventId });

        if (yaInscrito) {
            return res.status(400).send("El usuario ya está inscrito en este evento.");
        }

        const fotografo = new Fotografos({
            fotografoId: req.user.id,
            evento: req.body.eventId,
            precio: req.body.precio[0],
            descripcion: req.body.descripcion
        });

        await fotografo.save();

        if (user.rol.profesion === "fotografo") {
            user.rol.trabajos.push(fotografo._id);
            await user.save();
            evento.fotografo = fotografo._id;
        } else if (user.rol.profesion === "videoMaker") {
            user.rol.trabajos.push(fotografo._id);
            await user.save();
            evento.video = fotografo._id;
        }

        await evento.save();

        const fotos = await Fotografos.find({fotografoId: req.user.id});

        if (!fotos || fotos.length === 0) {
            return res.status(400).send("El fotografo no esta inscripto a ningun evento.");
        }

        const eventosPromises = fotos.map(foto => Event.findById(foto.evento));
        const eventos = await Promise.all(eventosPromises);

        res.status(200).send(eventos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor.");
    }
};



const fotografoAllEvents = async (req, res) => {
    try {
      let fotos = await Fotografos.find({ fotografoId: req.user.id.toString() });
  
      if (!fotos || fotos.length === 0) {
        return res.status(400).send("El fotógrafo no está inscrito a ningún evento.");
      }
  
      const eventosInscritosPromises = fotos.map(async (foto) => {
        const evento = await Event.findById(foto.evento).populate('categorias');
  
        if (evento !== null) {
          return evento;
        }
  
        return null;
      });
      const eventosInscritos = await Promise.all(eventosInscritosPromises);
      const eventosInscritosFiltered = eventosInscritos.filter((evento) => evento !== null);
  
      const eventosInscritosIds = eventosInscritosFiltered.map((evento) => evento._id);
  
      const eventosNoInscritos = await Event.find({ _id: { $nin: eventosInscritosIds } });
  
      res.status(200).send({
        eventosInscritos: eventosInscritosFiltered,
        eventosNoInscritos,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  




const udpload = async (req, res) => {
  let fotografo = await Fotografos.findOne({ evento: req.params.eventId });
  let user = await usersSchema.findOne({_id: req.user.id})
  if (!fotografo) {
      return res.status(404).json({ message: "Fotógrafo no encontrado" });
  }
  console.log(fotografo)
  if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded." });
  }

  try {
      let urls = [];
      for (const file of req.files) {
          const url = await uploadPhoto(file);
          urls.push(url);
          if(user.rol.profesion === "fotografo"){
              fotografo.fotos.push(url);
          }
          else{
              fotografo.videos.push(url);
          }
      }

      await fotografo.save();
      res.status(200).json({
          message: "Files uploaded successfully",
          data: urls
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({
          message: "An error occurred.",
          error: error.message
      });
  }
};

const deteleImages = async (req, res) => {
    try {
        let fotografo = await Fotografos.findOne({ evento: req.body.eventId });
        
        if (!fotografo)return res.status(400).send("El fotografo no existe");


        let user = await usersSchema.findById(req.user.id);

        if (user.rol.profesion === "fotografo") {
            const indexToRemove = fotografo.fotos.findIndex(url => url === req.body.url);
            
            if (indexToRemove === -1) {
                return res.status(404).json({ message: "URL no encontrada en el array" });
            }
            
            fotografo.fotos.splice(indexToRemove, 1);
        } else {
            const indexToRemove = fotografo.videos.findIndex(url => url === req.body.url);
            
            if (indexToRemove === -1) {
                return res.status(404).json({ message: "URL no encontrada en el array" });
            }
            
            fotografo.videos.splice(indexToRemove, 1);
        }

        await fotografo.save();
        // await s3delete(req.body.url)

        res.status(200).json({
            message: "URL eliminada correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Ocurrió un error",
            error: error.message,
        });
    }
};

const allFotografo = async (req, res) => {
    console.log(req.params.eventId)
    let fotografo = await Fotografos.findOne({evento: req.params.eventId });
    if (!fotografo) {
        return res.status(304).send("No existen fotos");
    }
    console.log(fotografo)
    res.status(200).send(fotografo);
}
const controller = {
    inscribirseEvento,
    udpload,
    fotografoAllEvents,
    allFotografo,
    deteleImages
}


export default controller
function fileparser(file: any) {
    throw new Error("Function not implemented.");
}

