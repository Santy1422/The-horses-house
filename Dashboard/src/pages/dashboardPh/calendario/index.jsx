import SideBar from "@/components/DashboardComponets/SideBar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import VistaCalendarioTabla from "@/components/FotografoComponentes/vistacalendarComponent/VistaCalendarioTabla";
import Modal from "../../../components/DashboardComponets/Modal"
import Paso1InscripcionFotografo from "../../../components/FotografoComponentes/modalfotografo/Paso1InscripcionFotografo"
import Paso2InscripcionFotografo from "@/components/FotografoComponentes/modalfotografo/Paso2InscripcionFotografo";
import Paso3InscripcionFotografo from "@/components/FotografoComponentes/modalfotografo/Paso3InscripcionFotografo";
import CancelarInscripcion from "@/components/FotografoComponentes/modalfotografo/CancelarInscripcion";
import Button from "@/components/reusableComponents/Button";
import Breadcrumb from "@/components/reusableComponents/Breadcrumb";
import { bell2, bell } from '../../../iconos/icons';



const VistaCalendario = () => {
  const misEventos = useSelector(state => state.reducerFotografo.misEventos)
  const [modalConfirmacion, setModalConfirmacion] = useState(false);
  const [modalCancelacion, setModalCancelacion] = useState(false)
  const [pasosInscripcion, setPasosInscripcion] = useState(0)
  const [eventDetails, setEventDetails] = useState([])
  const [dataInscripcion, setDataInscripcion] = useState({
    price: '',
    videoAmount: ''
  })

  const user = useSelector(state => state.reducerAuth.usuarioAuth.user)
  // console.log('user', user)

  //obj para la inscripcion
  const data = {
    user: user?.id,
    eventId: eventDetails.id,
    precio: dataInscripcion.price,
    descripcion: dataInscripcion.videoAmount
  }

  const plusIcon = (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.4557 10.0013C16.4557 10.3463 16.1757 10.6263 15.8307 10.6263H10.6224V15.8346C10.6224 16.1796 10.3424 16.4596 9.9974 16.4596C9.6524 16.4596 9.3724 16.1796 9.3724 15.8346V10.6263H4.16406C3.81906 10.6263 3.53906 10.3463 3.53906 10.0013C3.53906 9.6563 3.81906 9.3763 4.16406 9.3763H9.3724V4.16797C9.3724 3.82297 9.6524 3.54297 9.9974 3.54297C10.3424 3.54297 10.6224 3.82297 10.6224 4.16797V9.3763H15.8307C16.1757 9.3763 16.4557 9.6563 16.4557 10.0013Z" fill="white" />
  </svg>
  )

  return (
    <div className="flex w-[100%]  bg-[#23254C]">
      <SideBar />
      <section className="overflow-scroll pl-8 h-screen relative bg-gradient-to-b from-slate-50 to-white  flex flex-col rounded-l-[40px] flex-1 pt-8 pb-10">
        <Breadcrumb />
        <div className="flex flex-row w-full items-end justify-between px-3">
          <div className="mt-[45px] flex flex-col w-[75%]">
            <p className="text-indigo-950 text-[28px] font-bold font-Lato leading-9">Calendario</p>
            <p className="text-neutral-500 text-base font-normal font-Lato leading-normal">Aquí podrás ver todos los concursos, organizar tu agenda y adherirte a ellos.</p>
          </div>
          <div className="flex flex-row gap-1.5">
            {/* {misEventos && misEventos.length > 0 &&
              <Button
                action={() => {
                  abrirModalUno();
                }}
                customStyle={"p-3  h-11 px-4 py-2.5 rounded mr-2 text-sm"}
                variant={"primary"}
                descripcion={"Cargar multimedia del evento"}
              ></Button>
            } */}



            <span className="border border-[#D1DADA] bg-white rounded flex items-center justify-center w-[44px] h-[44px] cursor-pointer hover:bg-slate-50">
              {bell}
            </span>

          </div>

        </div>
        <VistaCalendarioTabla setModalConfirmacion={setModalConfirmacion} setPasos={setPasosInscripcion} eventDetails={setEventDetails} setModalCancelacion={setModalCancelacion} />
      </section>


      {modalConfirmacion &&
        <Modal isOpen={modalConfirmacion} setPasos={setPasosInscripcion} eventDetails={eventDetails} setModalConfirmacion={setModalConfirmacion} setDataInscripcion={setDataInscripcion}>
          {pasosInscripcion === 1 && <Paso1InscripcionFotografo setPasos={setPasosInscripcion} eventDetails={eventDetails} setModalConfirmacion={setModalConfirmacion} />}
          {pasosInscripcion === 2 && <Paso2InscripcionFotografo setPasos={setPasosInscripcion} setModalConfirmacion={setModalConfirmacion} dataInscripcion={dataInscripcion} setDataInscripcion={setDataInscripcion} />}
          {pasosInscripcion === 3 && <Paso3InscripcionFotografo setPasos={setPasosInscripcion} setModalConfirmacion={setModalConfirmacion} dataInscripcion={dataInscripcion} objInscripcion={data} />}
        </Modal>}

      {modalCancelacion &&
        <Modal isOpen={modalCancelacion} setModalCancelacion={setModalCancelacion} evento={eventDetails.nombreEvento}>
          <CancelarInscripcion setModalCancelacion={setModalCancelacion} evento={eventDetails.nombreEvento} />
        </Modal>}
    </div>
  );
};

export default VistaCalendario;
