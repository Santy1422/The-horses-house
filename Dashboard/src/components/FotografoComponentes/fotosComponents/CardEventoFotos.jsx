import React from 'react'
import empty from "../../../../public/img/defaultImg.png"
import Button from '@/components/reusableComponents/Button';
import { useState, useEffect } from 'react';
import { getEventImages } from '../../../../peticiones/fotografo';
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CalendarIcon from "../../images/icons/calendarIcon.svg"
import MapIcon from "../../images/icons/mapIcon.svg"
import { setImagenesDelEvento, setVideosDelEvento } from '@/redux/reducer/reducerFotografo';

const CardEventoFotos = ({
  evento,
  setEventId,
  setModalOpen,
  setModalCargaMultimedia,
  misEventos,
}) => {
  const { push } = useRouter()
  const dispatch = useDispatch()

  const fechaInicio = new Date(evento?.fechaInicio);
  const fechaFin = new Date(evento?.fechaFinalizacion);
  const formatoFechaInicio = { day: 'numeric' };
  const formatoFechaFinalizacion = { day: 'numeric', month: 'long', year: 'numeric' };
  const [mapear, setMapear] = useState(null) 

  // Obtén la fecha de inicio en formato deseado
  const fechaInicioFormateada = fechaInicio.toLocaleDateString(undefined, formatoFechaInicio);

  // Obtén la fecha de finalización en formato deseado con el mes en castellano
  const fechaFinalizacionFormateada = fechaFin.toLocaleDateString('es-ES', formatoFechaFinalizacion).toLocaleUpperCase();
  const eventId = evento?.video //USER FOTOGRAFO
  const event = evento?.id //ID DEL EVENTO
  const [tieneMultimedia, setTieneMultimedia] = useState(false)

  const getPictures = async () => {
    try {
      await getEventImages({
        eventId: event,
        success: (v) => {
          const { videos, fotos } = v;
          const videosTransformados = videos.map((video) => ({ url: video, type: "video" }));
          const fotosTransformadas = fotos.map((foto) => ({ url: foto, type: "foto" }));
          const mapearConcatenado = videosTransformados.concat(fotosTransformadas);
          const fotoAndVideos = {
            videos: videosTransformados,
            fotos: fotosTransformadas,
          }

          setMapear(fotoAndVideos?.videos?.concat(fotoAndVideos?.fotos));
          dispatch(setVideosDelEvento(videosTransformados));
          dispatch(setImagenesDelEvento(fotosTransformadas));
          if (videosTransformados.length || fotosTransformadas.length) {
            setTieneMultimedia(true)
          }

        },
        error: (e) => console.log("error", e),
        loading: (l) => dispatch(authSetLoading(l)),
      })

    } catch (error) {
      console.log("Error al solicitar las fotos", error);
    }
  }

  useEffect(() => {
    getPictures()
  }, [])

  return (
    <div className="relative w-[392px] min-w-[392px] h-[445px] rounded-[10px] border border-zinc-300 absolute">
      <div className="rounded-t-[10px]">
        <img src={empty.src} alt="empty state" className='rounded-t-[10px] h-[40%]' />
      </div>
      <section className='w-full p-6 gap-2'>
        <p className=' text-indigo-950 text-xl font-medium font-Lato leading-[20px]'>{evento?.nombreEvento}</p>
        <div className='flex flex-row gap-2 items-center w-full mt-3'>
          <CalendarIcon />
          <p className='text-zinc-700 text-sm font-normal font-Lato leading-tight'>{fechaInicioFormateada} AL {fechaFinalizacionFormateada}</p>
        </div>
        <div className='flex flex-row gap-2 items-center w-full mt-3'>
          <MapIcon />
          <p className='text-zinc-700 text-sm font-normal font-Lato leading-tight'>{evento?.ubicacion}</p>
        </div>
      </section>
      <section className='bottom-5 absolute w-full flex flex-row px-4 gap-2'>
        <Button variant={"primary"} descripcion={"Cargar Multimedia"} customStyle={"rounded px-2 py-1.5 text-[9px]"}
          action={() => { setEventId(event); setModalOpen(true); }}>
        </Button>

        <Button
          variant={"primary-alt"}
          descripcion={"Ver Multimedia"}
          customStyle={`${!tieneMultimedia && "bg-zinc-300 border-transparent text-white cursor-default"
            } rounded px-2 py-1.5 text-[9px]`}
          action={() => {
              push({
                pathname: `/dashboardPh/eventosPh/${evento.id}`,
                query: { event },
              });
            
          }}
        ></Button>
      </section>

    </div>
  )
}

export default CardEventoFotos