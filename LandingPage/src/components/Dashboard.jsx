import { useEffect, useState } from "react";
import Modal from "./DashboardComponets/Modal";
import Paso1 from "./DashboardComponets/crear_evento_pasos/paso_1";
import Paso2 from "./DashboardComponets/crear_evento_pasos/paso_2";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./DashboardComponets/SideBar";
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import AllEvent from "./DashboardComponets/AllEvent";
import Header from "./DashboardComponets/Header";
import MyEvents from "./DashboardComponets/MyEvents";
import LoadingComponent from "./landingReusableComponents/LoadingComponent";
import TabSelector from "./reusableComponents/TabSelector";
import FiltrosySearchbar from "./DashboardComponets/FiltrosYSearchBar";
import { Alert } from "@material-tailwind/react";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pasos, setPasos] = useState(1);
  const [tabSelected, setTabSelected] = useState("Listado");
  const [filterOptions, setFilterOption] = useState([]);
  const [searchBarString, setSearchBarString] = useState('')
  console.log('searchBarString', searchBarString)

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

  const { eventAll, myEvent, borradores, publicados } = useSelector(
    (state) => state.reducerEventAll
  );
  //  console.log('user auth', usuarioAuth)
  // console.log('eventall', eventAll)
  // console.log('my events', myEvent)
  // console.log('borradores', borradores)
  // console.log('publicados', publicados)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  //para mostrar solo los eventos que esten publicados, no los borradores
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


  const eventos= handleFilters()

  // const handleSearch=() => {
  //   let busqueda = eventos.filter(el => Object.values(el).filter(searchBarString))
  //   console.log(busqueda)
    // if(busqueda) {
    //   return busqueda
    // } else return null
    // }

  

  return (
    <>
      {loadingAuth && <LoadingComponent />}
      <div className="main container absolute flex flex-row bg-[#23254C] ">
        <SideBar />

        <div className="content w-[1175px] overflow-scroll selection:h-screen relative bg-gradient-to-b from-slate-50 to-white  flex flex-col rounded-l-[40px] flex-1 pt-16 pb-10 px-[47.5px] ">
          <div className="header w-full">
            <Header usuarioAuth={usuarioAuth} openModal={openModal} />
          </div>

          {myEvent ? (
            <div className="myEvents mt-6">
              <MyEvents myEvents={myEvent} />
            </div>
          ) : null}

          <div className="mt-8">
            <TabSelector
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
            />
          </div>
          <div>
            <FiltrosySearchbar
              filterOptions={filterOptions}
              setFilterOption={setFilterOption}
              setSearchBarString={setSearchBarString}
              // handleSearch={handleSearch}
            />
          </div>

          {tabSelected === "Listado" ? (
            <div className="allEvents mt-5">
              <AllEvent handleFilters={handleFilters} />
            </div>
          ) : (
            <div className="mt-5 h-[300px]">
              <p>Acá se va a mostrar el calendario</p>
            </div>
          )}
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} setPasos={setPasos}>
          {pasos === 1 && <Paso1 closeModal={closeModal} setPasos={setPasos} />}
          {pasos === 2 && <Paso2 closeModal={closeModal} setPasos={setPasos} />}
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
