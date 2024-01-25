import { useEffect, useState } from "react";
import Modal from "./Modal";
import Paso1 from "../CreateEventComponents/crear_evento_pasos/paso_1";
import Paso2 from "../CreateEventComponents/crear_evento_pasos/paso_2";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import AllEvent from "./AllEvent";
import Header from "./Header";
import MyEvents from "./MyEvents";
import TabSelector from "../reusableComponents/TabSelector";
import FiltrosySearchbar from "./FiltrosYSearchBar";
import LoadingComponent from "../reusableComponents/LoadingComponent";
import EmptyStateMyEvents from "./EmptyStateMyEvents";
import Calendario from "./Calendario/CalendarIndex";
import { useRouter } from "next/router";
import { useRef } from "react";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pasos, setPasos] = useState(1);
  const [tabSelected, setTabSelected] = useState("Listado");
  const [filterOptions, setFilterOption] = useState([]);
  const [searchBarString, setSearchBarString] = useState("");
  // console.log('searchBarString', searchBarString)


  // para enrutar el calendario
  const router = useRouter();
  const { asPath } = router;
  const calendarRef = useRef(null);

  // Desplazarse al calendario
  const scrollToCalendar = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (asPath.includes("#") && asPath.split("#")[1] === "calendar") {
      setTabSelected("Calendario");
      scrollToCalendar();
    } else setTabSelected('Listado')
  }, [asPath]);


  //PARA FILTRADO
  const eventosPasados = useSelector(
    (state) => state.reducerEventAll.filterEventosPasados
  );
  const eventosFuturos = useSelector(
    (state) => state.reducerEventAll.filterEventosFuturos
  );
  const eventosEnCurso = useSelector(
    (state) => state.reducerEventAll.filterEventosEnCurso
  );

  const { loadingAuth, usuarioAuth } = useSelector(
    (state) => state.reducerAuth
  );

  console.log('user', usuarioAuth)

  const { eventAll, borradores, publicados } = useSelector(
    (state) => state.reducerEventAll
  );

  const myEvent = useSelector((state) => state.reducerEventAll.myEvents);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const eventAllPublicados = eventAll?.filter(
    (ev) => ev.estadoEvento.toLowerCase() === "publicado"
  );

  //FUNCION QUE MANEJA LOS FILTROS
  const handleFilters = () => {
    let eventos = [];

    if (eventos.length === 0) {
      if (filterOptions.includes("En curso"))
        eventos = eventos.concat(eventosEnCurso);
      if (filterOptions.includes("Finalizados"))
        eventos = eventos.concat(eventosPasados);
      if (filterOptions.includes("Próximos"))
        eventos = eventos.concat(eventosFuturos);
    }

    if (filterOptions.includes("Mis eventos")) {
      // Filtra eventos solo si ya hay eventos en el array
      if (eventos.length > 0) {
        eventos = eventos.filter((ev) => ev.creadorId === usuarioAuth.id);
      } else {
        // Si no hay eventos en el array, devuelve solo mis eventos
        return myEvent;
      }
    }

    if (eventos.length === 0) {
      if (filterOptions.includes("Concursos")) {
        eventos = eventAllPublicados.filter(
          (ev) => ev.tipoDeConcurso === "Concurso"
        );
      }
      if (filterOptions.includes("Pasada")) {
        eventos = eventAllPublicados.filter(
          (ev) => ev.tipoDeConcurso === "Pasada"
        );
      }
    } else {
      if (filterOptions.includes("Concursos")) {
        eventos = eventos.filter((ev) => ev.tipoDeConcurso === "Concurso");
      }
      if (filterOptions.includes("Pasadas")) {
        eventos = eventos.filter((ev) => ev.tipoDeConcurso === "Pasada");
      }
    }
    // Si no hay eventos en el array, devuelve todos los eventos publicados
    return eventos.length > 0 ? eventos : eventAllPublicados;
  };

  const eventos = handleFilters();

  return (
    <div className="w-full h-full">
      {loadingAuth && <LoadingComponent />}
      <div className="absolute flex flex-row bg-[#23254C] w-full">
        <SideBar />

        <div className="content w-full md:w-[1175px] overflow-scroll h-screen relative bg-gradient-to-b from-slate-50 to-white  flex flex-col rounded-l-[40px] flex-1 pt-16 pb-10 md:pt-10 md:pb-0 px-4 md:px-[47.5px]">
          <div className="header w-full">
            <Header usuarioAuth={usuarioAuth} openModal={openModal} />
          </div>

          {myEvent && myEvent.length ? (
            <div className="myEvents mt-6">
              <MyEvents myEvents={myEvent} />
            </div>
          ) : (
            <EmptyStateMyEvents />
          )}

          <div className="mt-8">
            <TabSelector
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
            />
          </div>

          <div ref={calendarRef}>
            {tabSelected === "Listado" ? (
              <>
                <div>
                  <FiltrosySearchbar
                    filterOptions={filterOptions}
                    setFilterOption={setFilterOption}
                    setSearchBarString={setSearchBarString}
                    // handleSearch={handleSearch}
                  />
                </div>
                <div className="allEvents mt-5">
                  <AllEvent handleFilters={handleFilters} />
                </div>
              </>
            ) : (
              <div className="mt-5 h-[300px]">
                <Calendario eventAllPublicados={eventAllPublicados} />
              </div>
            )}
          </div>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} setPasos={setPasos}>
          {pasos === 1 && <Paso1 closeModal={closeModal} setPasos={setPasos} />}
          {pasos === 2 && <Paso2 closeModal={closeModal} setPasos={setPasos} />}
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
