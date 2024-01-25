import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tabla from "./componentes/Tabla";
import NavAnidada from "./componentes/NavAnidada";
import EmptyState from "./componentes/EmptyState";
import MisEventosFotografo from "./componentes/MisEventosFotografo";
import CalendarIndex from "../../DashboardComponets/Calendario/CalendarIndex";
import Calendario from "../../DashboardComponets/Calendario/CalendarIndex";


const VistaCalendarioTabla = ({
  setModalConfirmacion,
  setPasos,
  eventDetails,
  setModalCancelacion,
}) => {

  const eventAllPublicados = useSelector(
    (state) => state.reducerEventAll.eventAll
  );

  const eventosPasados = useSelector(
    (state) => state.reducerEventAll.filterEventosPasados
  );
  const eventosFuturos = useSelector(
    (state) => state.reducerEventAll.filterEventosFuturos
  );
  const eventosEnCurso = useSelector(
    (state) => state.reducerEventAll.filterEventosEnCurso
  );
  // const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [selectedNav, setSelectedNav] = useState("Listado");

  const handleNavClick = (selectedNav) => {
    setSelectedNav(selectedNav);
  };

  const misEventos = useSelector((state) => state.reducerFotografo.misEventos);

  return (
    <div className="w-full h-screen flex-1 pb-10 bg-gradient-to-b from-slate-50 to-white">
      <div>
        <NavAnidada handleNavClick={handleNavClick} />

        {selectedNav === "Listado" && (
          <Tabla
            eventDetails={eventDetails}
            setPasos={setPasos}
            setModalConfirmacion={setModalConfirmacion}
            eventosEnCurso={eventosEnCurso}
            eventosFuturos={eventosFuturos}
            eventosPasados={eventosPasados}
            misEventos={misEventos}
          />
        )}
        {selectedNav === "calendario" && (
          <div className="mt-5 h-[300px]">
          <Calendario eventAllPublicados={eventAllPublicados} />
        </div>
        )}
        
        {selectedNav === "misEventos" &&
          (misEventos.length ? (
            <MisEventosFotografo
            eventDetails={eventDetails}
              misEventos={misEventos}
              setModalCancelacion={setModalCancelacion}
            />
          ) : (
            <EmptyState />
          ))}


      </div>
    </div>
  );
};

export default VistaCalendarioTabla;
