import SideBar from "@/components/DashboardComponets/SideBar";
import CardEventoFotos from "@/components/FotografoComponentes/fotosComponents/CardEventoFotos";
import ModalCargaFotos from "@/components/FotografoComponentes/fotosComponents/ModalCargaFotos";
import Button from "@/components/reusableComponents/Button";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "@/components/DashboardComponets/Modal";
import Breadcrumb from "@/components/reusableComponents/Breadcrumb";
import PasoElegirEvento from "@/components/FotografoComponentes/modalfotografo/PasoElegirEvento";
import { bell2, bell } from '../../../iconos/icons';


const EventosFotografo = () => {
  const misEventos = useSelector(state => state.reducerFotografo.misEventos)
  const [modalOpen, setModalOpen] = useState(false)
  const [eventId, setEventId] = useState('')
  const [eventDetails, setEventDetails] = useState([])
  const [pasosCargaMultimedia, setPasosCargaMultimedia] = useState(2)


  const abrirModalUno = (evento) => {
    setPasosCargaMultimedia(1); // <-- Cambiado de 1 a 2
    setModalOpen(true);
  };
  
  const abrirModalDos = (evento) => {
    setPasosCargaMultimedia(1); // <-- Cambiado de 2 a 1
    setModalOpen(true);
  };



  return (
    <div className="flex w-[100%]  bg-[#23254C]">
      <SideBar />
      <div className="w-full max-w-full overflow-y-scroll h-screen bg-gradient-to-b from-slate-50 to-white rounded-l-[40px] flex-1 pt-12 pb-10 px-[47.5px]">
        <Breadcrumb />
        
        <section className="flex flex-row justify-between w-full items-end mt-4">
          <div className="flex flex-col w-[60%]">
            <p className="text-indigo-950 text-[28px] font-bold font-Lato leading-9">
              Eventos
            </p>
            <p className="text-neutral-500 text-base font-normal font-lato leading-normal">
              Aqui puedes ver todos tus servicios en cada evento que
              participaste.
            </p>
          </div>

          <div className="flex flex-row">

          {misEventos && misEventos.length > 0 &&
            <Button
              action={() => {
                abrirModalUno();
              }}
              customStyle={"p-3  h-11 px-4 py-2.5 rounded mr-2 text-sm"}
              variant={"primary"}
              descripcion={"Cargar multimedia del evento"}
            ></Button>
            }


            <span className="border border-[#D1DADA] bg-white rounded flex items-center justify-center w-[44px] h-[44px] cursor-pointer hover:bg-slate-50">
              {bell}
            </span>

          </div>
        </section>

        <section className="flex flex-row w-full gap-5 mt-6 justify-start flex-wrap max-w-full">
          {misEventos && misEventos.map((ev, index) => {
            return (
              <CardEventoFotos 
                key={index}
                evento={ev}
                setModalOpen={setModalOpen}
                setEventId={setEventId}  
              />
            );
          })}
        </section>
      </div>

      {modalOpen &&
        <Modal isOpen={modalOpen} setPasos={setPasosCargaMultimedia} eventos={misEventos} setEventDetails={setEventDetails} eventId={eventId} setEventId={setEventId}>
          {pasosCargaMultimedia === 1 && <PasoElegirEvento setPasosCargaMultimedia={setPasosCargaMultimedia} setModalCargaMultimedia={setModalOpen} eventos={misEventos} setEventDetails={setEventDetails} setEventId={setEventId}/>}
          {pasosCargaMultimedia === 2 && <ModalCargaFotos setModalOpen={setModalOpen} eventId={eventId} pasosCargaMultimedia={pasosCargaMultimedia} setPasosCargaMultimedia={setPasosCargaMultimedia} />}
        </Modal>
      }
    </div>
  );
};

export default EventosFotografo;
