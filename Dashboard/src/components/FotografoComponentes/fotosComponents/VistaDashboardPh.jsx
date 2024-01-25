// import Button from "@/components/reusableComponents/Button"
import { bell } from "@/iconos/icons"
import { useDispatch, useSelector } from "react-redux"
import CardContainer from "./CardContainer"
import VistaCalendarioTabla from "../vistacalendarComponent/VistaCalendarioTabla"
import { useEffect, useState } from "react"
import Modal from "../../../components/DashboardComponets/Modal"
import PasoElegirEvento from "../modalfotografo/PasoElegirEvento"
import Paso1InscripcionFotografo from "@/components/FotografoComponentes/modalfotografo/Paso1InscripcionFotografo"
import Paso2InscripcionFotografo from "@/components/FotografoComponentes/modalfotografo/Paso2InscripcionFotografo";
import Paso3InscripcionFotografo from "@/components/FotografoComponentes/modalfotografo/Paso3InscripcionFotografo";
import CancelarInscripcion from "@/components/FotografoComponentes/modalfotografo/CancelarInscripcion";
import EmptyStateSinEventos from "../componentes/EmptyStateSinEventos"
import Button from "@/components/reusableComponents/Button";
import ModalCargaFotos from "./ModalCargaFotos";
import { eventGetAll, myEventsPeticion, getEventsforTime } from "../../../../peticiones/event";
import { getMyEvents } from "../../../../peticiones/fotografo";
import { eventAllSetEvents, setBorradores, setMyEvent, setPublicados } from "@/redux/reducer/reducerEventAll";
import { authSetLoading } from "@/redux/reducer/reducerAuth";

const VistaDashboardPh = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const user = useSelector(state => state.reducerAuth.usuarioAuth);
  const misEventos = useSelector(state => state.reducerFotografo.misEventos);
  console.log('mis eventos', misEventos)

  const [eventId, setEventId] = useState("");
  const dispatch = useDispatch()
  //PARA LA CARGA DE MULTIMEDIA
  const [modalCargaMultimedia, setModalCargaMultimedia] = useState(false)
  const [pasosCargaMultimedia, setPasosCargaMultimedia] = useState(2)

  //PARA LA INSCRIPCION A UN EVENTO
  const [modalConfirmacion, setModalConfirmacion] = useState(false);
  const [modalCancelacion, setModalCancelacion] = useState(false)
  const [pasosInscripcion, setPasosInscripcion] = useState(0)
  const [eventDetails, setEventDetails] = useState([])
  const [dataInscripcion, setDataInscripcion] = useState({
    price: '',
    videoAmount: ''
  })


  const data = {
    user: user?.id,
    eventId: eventDetails.id,
    precio: dataInscripcion.price,
    descripcion: dataInscripcion.videoAmount
  }

  const abrirModalUno = (evento) => {
    setPasosCargaMultimedia(1); // <-- Cambiado de 1 a 2
    setModalOpen(true);
  };

  const abrirModalDos = (evento) => {
    setPasosCargaMultimedia(1); // <-- Cambiado de 2 a 1
    setModalOpen(true);
  };


  return (
    <div style={{ zIndex: 0 }} className="w-[100vw] relative overflow-scroll h-screen bg-gradient-to-b from-slate-50 to-white rounded-l-[40px] flex-1 pt-16 pb-10 px-[47.5px]">
      <div className="flex w-[100%] flex-col">

        <div className="flex w-[100%] items-center justify-between ">
          <h1 className="w-[858px] text-indigo-950 text-[28px] font-bold font-Lato leading-9">
            ¡Bienvenido, {user?.firstName}!
          </h1>
          <div className="flex gap-2">


            <Button
              variant={"primary"}
              descripcion={'Cargar multimedia del evento'}
              customStyle={`${!misEventos.length && "bg-zinc-300 border-transparent"} rounded px-2 py-1.5 font-lato text-sm`}
              action={() => { misEventos?.length ? abrirModalUno() : null }}

            >
            </Button>


            <span className="border border-[#D1DADA] bg-white rounded flex items-center justify-center w-[44px] h-[44px] cursor-pointer hover:bg-slate-50">
              {bell}
            </span>
          </div>
        </div>

        <p className="text-neutral-500 text-base font-normal font-Lato leading-">
          Aquí podrás ver todos los concursos, organizar tu agenda y adherirte a ellos.
        </p>
      </div>

      {modalOpen &&
        <Modal isOpen={modalOpen} setPasos={setPasosCargaMultimedia} eventos={misEventos} setEventDetails={setEventDetails} eventId={eventId} setEventId={setEventId}>
          {pasosCargaMultimedia === 1 && <PasoElegirEvento setPasosCargaMultimedia={setPasosCargaMultimedia} setModalCargaMultimedia={setModalOpen} eventos={misEventos} setEventDetails={setEventDetails} setEventId={setEventId} />}
          {pasosCargaMultimedia === 2 && <ModalCargaFotos setModalOpen={setModalOpen} eventId={eventId} pasosCargaMultimedia={pasosCargaMultimedia} setPasosCargaMultimedia={setPasosCargaMultimedia} />}
        </Modal>
      }


      <div className="z-[0]">

        {misEventos && misEventos.length ?

          <CardContainer setEventId={setEventId} misEventos={misEventos} setModalOpen={setModalOpen} setModalCargaMultimedia={setModalCargaMultimedia} /> : <EmptyStateSinEventos />

        }
      </div>

      <VistaCalendarioTabla setModalConfirmacion={setModalConfirmacion} setPasos={setPasosInscripcion} eventDetails={setEventDetails} setModalCancelacion={setModalCancelacion} />

      {modalConfirmacion &&
        <Modal isOpen={modalConfirmacion} setPasos={setPasosInscripcion} eventDetails={eventDetails} setModalConfirmacion={setModalConfirmacion} setDataInscripcion={setDataInscripcion}>
          {pasosInscripcion === 1 && <Paso1InscripcionFotografo setPasos={setPasosInscripcion} eventDetails={eventDetails} setModalConfirmacion={setModalConfirmacion} />}
          {pasosInscripcion === 2 && <Paso2InscripcionFotografo setPasos={setPasosInscripcion} setModalConfirmacion={setModalConfirmacion} dataInscripcion={dataInscripcion} setDataInscripcion={setDataInscripcion} />}
          {pasosInscripcion === 3 && <Paso3InscripcionFotografo setPasos={setPasosInscripcion} setModalConfirmacion={setModalConfirmacion} dataInscripcion={dataInscripcion} objInscripcion={data} eventDetails={eventDetails} />}
        </Modal>}

      {modalCancelacion &&
        <Modal isOpen={modalCancelacion} setModalCancelacion={setModalCancelacion} evento={eventDetails.nombreEvento}>
          <CancelarInscripcion setModalCancelacion={setModalCancelacion} evento={eventDetails.nombreEvento} />
        </Modal>}




    </div>
  )
}

export default VistaDashboardPh