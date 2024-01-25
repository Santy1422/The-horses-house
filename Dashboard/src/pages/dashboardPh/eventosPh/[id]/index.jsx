import { useSelector } from "react-redux";
import SideBar from "@/components/DashboardComponets/SideBar";
import { useRouter } from "next/router";
import Spinner from "@/components/reusableComponents/Spinner";
import Breadcrumb from "@/components/reusableComponents/Breadcrumb";
import Modal from "@/components/DashboardComponets/Modal";
import { useEffect, useState } from "react";
import VisorFotografias from "@/components/FotografoComponentes/fotosComponents/VisorFotografias";
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import { useDispatch } from "react-redux";
import { eliminarMedia, getEventImages } from "../../../../../peticiones/fotografo";
import { setMultimediaDelEvento } from "@/redux/reducer/reducerFotografo";
import { useMemo } from "react";
import { closeCircle } from "@/iconos/icons";
import VideoThumbnail from 'react-video-thumbnail';


const Multimedia = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { event, eventId } = router.query;
  const [modalOpen, setModalOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [mapear, setMapear] = useState([]);
  //const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false)
  const misEventos = useSelector((state) => state.reducerFotografo.misEventos);
  const multimediaEvent = useSelector((state) => state.reducerFotografo.multimedia);
  const evento = misEventos?.find((ev) => ev?.id === eventId);
  const fechaInicio = new Date(evento?.fechaInicio);
  const fechaFin = new Date(evento?.fechaFinalizacion);
  const formatoFechaInicio = { day: "numeric" };
  const formatoFechaFinalizacion = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const user = useSelector(state => state.reducerAuth.usuarioAuth?.user)

  const fetchEventImages = async () => {
    try {
      setLoading(true);
      const response = await getEventImages({
        eventId: eventId && eventId || event,
        success: (v) => {
          const { videos, fotos } = v;
          const videosTransformados = videos.map((video, i) => ({ key: i, url: video, type: "video" }));
          const fotosTransformadas = fotos.map((foto, i) => ({ key: i, url: foto, type: "foto" }));
          const fotoAndVideos = {
            videos: videosTransformados,
            fotos: fotosTransformadas,
          }
          const multimedia = fotoAndVideos?.videos?.concat(fotoAndVideos?.fotos)
          setMapear(multimedia);
          dispatch(setMultimediaDelEvento(multimedia));

        },
        error: (e) => {
          // Manejar el error si es necesario
        },
        loading: (l) => setLoading(l),
      });
    } catch (error) {
      // Manejar el error si es necesario
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventImages();
  }, []);


  const fechaInicioFormateada = fechaInicio.toLocaleDateString(
    undefined,
    formatoFechaInicio
  );

  const fechaFinalizacionFormateada = fechaFin
    .toLocaleDateString("es-ES", formatoFechaFinalizacion)
    .toLocaleUpperCase();

  const fecha = fechaInicioFormateada + ' AL ' + fechaFinalizacionFormateada

  const eliminarMediaHandler = async (media) => {
    try {
      // Eliminar media en la base de datos (aquí deberías llamar a tu función eliminarMedia)
      await eliminarMedia({ url: media.url, eventId: eventId && eventId || event });

      // Eliminar media del estado en Redux
      const newMultimedia = multimediaEvent.filter((m) => m.url !== media.url);
      dispatch(setMultimediaDelEvento(newMultimedia));
    } catch (error) {
      console.error("Error al eliminar media:", error);
    }
  };


  return (

    <div className="flex w-[100%]  bg-[#23254C]">
      <SideBar />
      {loading && <p> Cargando</p>}

      <div className="w-[100vw] overflow-scroll h-screen bg-gradient-to-b from-slate-50 to-white rounded-l-[40px] flex-1 pt-12 pb-10 px-[47.5px]">

        <Breadcrumb />
        <p className="w-[858px] text-indigo-950 text-[28px] font-bold font-Lato leading-9 mt-4">
          {evento && evento?.nombreEvento}
        </p>
        <div className="flex flex-row gap-3.5 mt-3 mb-6 items-center">
          <div className="flex flex-row gap-1.5 items-center">


            <p className="text-zinc-700 text-sm font-normal font-Lato leading-tight">
              {fechaInicioFormateada && fechaInicioFormateada} AL {fechaFinalizacionFormateada && fechaFinalizacionFormateada}
            </p>
          </div>
          <div className="flex flex-row gap-1.5 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.6875C5.38125 1.6875 2.4375 4.63125 2.4375 8.25C2.4375 12.0885 5.96024 14.415 8.29124 15.9547L8.688 16.218C8.7825 16.281 8.89125 16.3125 9 16.3125C9.10875 16.3125 9.2175 16.281 9.312 16.218L9.70876 15.9547C12.0398 14.415 15.5625 12.0885 15.5625 8.25C15.5625 4.63125 12.6187 1.6875 9 1.6875ZM9.08925 15.0157L9 15.0751L8.91075 15.0157C6.65325 13.5247 3.5625 11.4832 3.5625 8.25C3.5625 5.2515 6.0015 2.8125 9 2.8125C11.9985 2.8125 14.4375 5.2515 14.4375 8.25C14.4375 11.4832 11.346 13.5255 9.08925 15.0157ZM9 5.8125C7.656 5.8125 6.5625 6.906 6.5625 8.25C6.5625 9.594 7.656 10.6875 9 10.6875C10.344 10.6875 11.4375 9.594 11.4375 8.25C11.4375 6.906 10.344 5.8125 9 5.8125ZM9 9.5625C8.27625 9.5625 7.6875 8.97375 7.6875 8.25C7.6875 7.52625 8.27625 6.9375 9 6.9375C9.72375 6.9375 10.3125 7.52625 10.3125 8.25C10.3125 8.97375 9.72375 9.5625 9 9.5625Z"
                fill="#494949"
              />
            </svg>

            <p className="text-zinc-700 text-sm font-normal font-Lato leading-tight">
              {evento && evento?.ubicacion}
            </p>
          </div>
        </div>

        {loading ? <Spinner /> :

          <div className="grid sm:grid-cols-1 grid-cols-4 gap-6">



            {multimediaEvent?.map((media, index) => (
              <div
                key={index}
                className="rounded cursor-pointer overflow-hidden relative bg-gradient-to-b from-black to-black border-gray-200 border-1 my-3"
                style={{ width: '270px', height: '278px' }}
                onClick={() => { setModalOpen(true); setIndex(index) }}
              >
                {media.type === "video" ? (
                  <VideoThumbnail
                    videoUrl={media.url}
                  />
                  
                ) : (
                  <img
                    src={media.url}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    alt="imagen equitación"
                  />
                )}
                <button
                  className="absolute top-2 right-2 text-white cursor-pointer transition-transform transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    eliminarMediaHandler(media);
                  }}
                >
                  {closeCircle}
                </button>

              </div>
            ))}

          </div>
        }
      </div>
      {modalOpen &&
        <Modal isOpen={modalOpen} onClose={setModalOpen} index={index} fecha={fecha}>
          <VisorFotografias mediaPLayer={mapear} onClose={setModalOpen} index={index} fecha={fecha} club={evento?.clubesPatrocinadores[0]} />
        </Modal>}

    </div>
  );
};

export default Multimedia;


/* <video
    src={media.url}
    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
    muted
  /> 
*/