import { useEffect, useState } from "react";
import axios from "axios";
import PruebaCard from "./PruebaCard";
import { parseISO, format } from "date-fns";
import { Filtros } from "./Filtros";
import Modal from "./Modal";
import VentanaModalEventDetails from "./VentanaModalEventDetails";

const AllEventList = (props) => {
  let evento = props.evento;
  // console.log('el evento en allevent', evento)
  const [isModalOpen, setIsModalOpen] = useState(false); //Ventana modal del ojito

  const autoridades = evento.autoridadesConcurso.filter((aut) => aut !== null);

  const [eventDetails, setEventDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openPruebas, setOpenPruebas] = useState("");
  const [showPrueba, setShowPrueba] = useState(false);

  // const fechaInicio = parseISO(evento?.fechaInicio);
  // const fechaFin = parseISO(evento?.fechaFinalizacion);

  // // formateo fecha al pedido
  // const formatoFechaInicio = "dd MMMM yyyy";
  // const formatoFechaFinalizacion = "dd MMMM yyyy";
  // const fechaInicioFormateada = format(fechaInicio, formatoFechaInicio);
  // const fechaFinalizacionFormateada =  format(  fechaFin,  formatoFechaFinalizacion);

  //Filtrado y renderizado de las pruebas
  const [pruebas, setPruebas] = useState([]); //renderizado
  // console.log("pruebas", pruebas);
  const [filterOptions, setfilterOptions] = useState([]); //filtrado
  const [sinResultadosMessage, setSinResultadosMessage] = useState(""); //BUSQUEDA SIN RESULTADOS

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get(`/event/findEventById/${evento.id}`, {
          headers: headers,
        });
        setEventDetails(response.data);
        setPruebas(response.data.inscriptosPorCategoria);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetails();
  }, []);

  // FILTROS
  const inscriptos = eventDetails?.inscriptosPorCategoria;
  const handleFilter = () => {
    let resultadosFiltrados = [...inscriptos];
    if (filterOptions.length) {
      filterOptions.forEach((opcion) => {
        resultadosFiltrados = resultadosFiltrados.filter((el) =>
          el.categoria.categoria.includes(opcion)
        );
      });

      if (!resultadosFiltrados?.length) {
        setSinResultadosMessage("La búsqueda no arrojó resultados");
        setTimeout(() => {
          setSinResultadosMessage("");
          setfilterOptions([]);
          setPruebas(inscriptos); // Recargar toda la información sin filtrar
        }, 2000);
      } else {
        setPruebas(resultadosFiltrados);
      }
    } else setPruebas(resultadosFiltrados);
  };

  useEffect(() => {
    if (inscriptos?.length) {
      handleFilter();
    }
    return () => {
      setPruebas(inscriptos);
    };
  }, [filterOptions]);

  //cantidad de inscriptos
  const cantidadDeInscriptos = eventDetails?.inscriptosPorCategoria?.map(
    (cat) => cat.inscriptos.length
  );
  const initialValue = 0;
  // Filtra los elementos nulos o indefinidos del array
  const inscriptosValidos = cantidadDeInscriptos?.filter(
    (value) => value !== undefined && value !== null
  );

  const inscriptosSuma = inscriptosValidos?.reduce(
    (acc, currentValue) => acc + currentValue,
    initialValue
  );

  const handlePruebaClick = (pruebaId) => {
    setOpenPruebas(pruebaId);
  };

  const estadoDelEvento = () => {
    if (evento.estado === "Progreso") return "En curso";
    if (evento.estado === "Pendiente") return "Próximo";
    if (evento.estado === "Pasado") return "Finalizado";
  };

  //styles para el estado del evento
  const estado = estadoDelEvento();
  const getEstadoStyles = (estado) => {
    switch (estado) {
      case "En curso":
        return "bg-green-50 text-teal-800";
      case "Próximo":
        return "bg-orange-50 text-yellow-700";
      case "Finalizado":
        return "bg-red-50 text-red-600";
      default:
        return "";
    }
  };

  // Ventana modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clubIcon = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 27.9891C14.9033 27.9891 14.8066 27.9733 14.7136 27.9419C12.7935 27.3015 3.21875 23.6052 3.21875 13.6558V6.54119C3.21875 6.10981 3.52328 5.73631 3.94741 5.65293C9.84408 4.4736 11.9345 3.43697 14.582 2.12351C14.8369 1.99664 15.1764 1.97982 15.4301 2.1067C18.0389 3.42257 20.1003 4.46151 26.0538 5.65293C26.4779 5.73751 26.7824 6.10981 26.7824 6.54119V13.657C26.7824 23.6064 17.2077 27.3027 15.2876 27.9431C15.1934 27.9733 15.0967 27.9891 15 27.9891ZM5.03125 7.28076V13.6558C5.03125 21.951 12.7863 25.3284 15 26.1223C17.2137 25.3284 24.9688 21.9498 24.9688 13.6558V7.28076C19.6243 6.16184 17.3779 5.11401 15.018 3.92864C12.5083 5.16959 10.3298 6.17392 5.03125 7.28076ZM17.7695 20.1494C17.529 20.1494 17.2886 20.0914 17.0638 19.9742L15 18.8977L12.9362 19.9742C12.419 20.2448 11.804 20.1979 11.3364 19.8535C10.8675 19.5115 10.6378 18.9447 10.7369 18.3732L11.1284 16.1064L9.40792 14.4426C9.00071 14.0486 8.8557 13.4699 9.0309 12.931C9.20611 12.3908 9.66288 12.0054 10.226 11.9244L12.6111 11.5798L13.6406 9.5101C13.898 8.99172 14.42 8.66904 15.0012 8.66904C15.5812 8.66904 16.1032 8.99172 16.3617 9.5101L17.3913 11.5798L19.7779 11.9244C20.3397 12.0042 20.7975 12.3908 20.9715 12.931C21.1467 13.4699 21.0004 14.0486 20.5944 14.4426L18.874 16.1064L19.2666 18.3755C19.3645 18.9483 19.1337 19.5139 18.6648 19.8559C18.3966 20.0504 18.0849 20.1494 17.7695 20.1494ZM15 17.0427C15.2344 17.0427 15.4699 17.0985 15.6838 17.2109L17.3745 18.0929L17.0529 16.2379C16.9708 15.7558 17.1302 15.2653 17.483 14.9258L18.833 13.6207L16.955 13.3502C16.4753 13.2801 16.0597 12.9803 15.8434 12.5477L14.9976 10.8465L14.153 12.5454C13.9355 12.9792 13.5209 13.2801 13.0412 13.3502L11.1623 13.6207L12.5146 14.9281C12.865 15.2653 13.0257 15.7558 12.9424 16.2368L12.6208 18.0929L14.3112 17.2109C14.5299 17.0997 14.7656 17.0427 15 17.0427ZM11.2579 16.232C11.2579 16.232 11.2579 16.2332 11.2591 16.2332L11.2579 16.232ZM18.7448 16.2297C18.7436 16.2309 18.7448 16.2309 18.7448 16.2297V16.2297ZM19.5168 13.7186H19.5289H19.5168ZM14.7366 10.3172L14.7377 10.3184L14.7366 10.3172Z"
        fill="#25314C"
      />
    </svg>
  );

  return (
    <>
      <div
        className={`eventos flex flex-row items-center  py-4 border-t ${
          isOpen ? "border-b-0" : "border-b"
        } border-x-0 w-full`}
      >
        <div className="contenedorClub flex items-center justify-start w-[34%] ">
          <div
            className=" cursor-pointer contenedorSvg flex justify-start items-center h-5 w-5"
            onClick={() => {
              !isOpen ? setIsOpen(true) : setIsOpen(false);
            }}
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M8.00007 3.33318C7.78674 3.33318 7.57338 3.41482 7.41088 3.57732C7.08505 3.90315 7.08505 4.42987 7.41088 4.75571L12.655 9.99985L7.41088 15.244C7.08505 15.5698 7.08505 16.0965 7.41088 16.4224C7.73671 16.7482 8.26343 16.7482 8.58926 16.4224L14.4226 10.589C14.7484 10.2632 14.7484 9.73649 14.4226 9.41065L8.58926 3.57732C8.42676 3.41482 8.2134 3.33318 8.00007 3.33318Z"
                  fill="#23254C"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99978 8.74978C7.80778 8.74978 7.61575 8.67681 7.46975 8.52981L0.46975 1.52981C0.17675 1.23681 0.17675 0.761773 0.46975 0.468773C0.76275 0.175773 1.23779 0.175773 1.53079 0.468773L8.00076 6.93874L14.4707 0.468773C14.7637 0.175773 15.2388 0.175773 15.5318 0.468773C15.8248 0.761773 15.8248 1.23681 15.5318 1.52981L8.53176 8.52981C8.38376 8.67681 8.19178 8.74978 7.99978 8.74978Z"
                  fill="#23254C"
                />
              </svg>
            )}
          </div>

          <div className="contenedorImagen w-12 h-12 px-auto py-auto bg-zinc-100 rounded-full flex text-center items-center justify-center mx-2">
            {clubIcon}
          </div>

          <div className="nombreClub flex flex-col">
            <div className="labelNombreClub w-[174.44px] text-neutral-700 text-sm font-normal font-lato leading-tight">
              {evento.nombreEvento}
            </div>
            <div className="emailClub w-[180.96px] text-zinc-500 text-sm font-normal font-lato leading-tight">
              {evento.emailContacto}
            </div>
          </div>
        </div>
        <div className="iconoEvento flex justify-center items-center w-[8%] ">
          {evento.tipoDeConcurso === "Concurso" ? (
            <div className="w-[98px] h-6 pl-2 pr-2.5 py-0.5 bg-zinc-100 rounded-2xl justify-center items-center gap-1 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M20.1657 6.38288L19.7715 5.99148C19.695 5.91394 19.6506 5.81059 19.6506 5.70105V5.14963C19.6506 3.17166 18.0347 1.56166 16.0496 1.56166H15.4961C15.3874 1.56166 15.2811 1.51729 15.2045 1.44221L14.8118 1.04961C13.4097 -0.348638 11.1255 -0.351099 9.71845 1.04961L9.32577 1.44101C9.24918 1.51732 9.14284 1.56166 9.03413 1.56166H8.4807C6.49551 1.56166 4.87964 3.17166 4.87964 5.14963V5.70105C4.87964 5.81059 4.83653 5.91397 4.7587 5.99028L4.36452 6.38408C2.96118 7.78233 2.96118 10.0595 4.36452 11.4589L4.7587 11.8503C4.8353 11.9279 4.87964 12.0312 4.87964 12.1408V12.6922C4.87964 14.2 5.81975 15.4875 7.14403 16.018L5.19722 22.822C5.10087 23.1605 5.20584 23.5249 5.46896 23.7613C5.72962 23.9963 6.10393 24.0641 6.43377 23.9324L9.85326 22.5674C11.4098 21.9495 13.1217 21.9495 14.6758 22.5674L18.0977 23.9336C18.2101 23.9779 18.3275 24 18.4424 24C18.6685 24 18.8895 23.9188 19.0625 23.7625C19.3256 23.5261 19.4306 23.1631 19.3342 22.8234L17.3874 16.0192C18.7117 15.4887 19.6518 14.2012 19.6518 12.6934V12.142C19.6518 12.0324 19.6949 11.929 19.7728 11.8527L20.1669 11.4601C20.1669 11.4601 20.1669 11.4602 20.1669 11.4589C21.569 10.0595 21.5691 7.78236 20.1657 6.38288ZM15.3628 20.8515C13.3677 20.0588 11.1675 20.0576 9.16381 20.8515L7.49599 21.5174L8.99462 16.2802H9.03172C9.14043 16.2802 9.24647 16.3245 9.32306 16.3996L9.71604 16.7922C10.4177 17.4913 11.3393 17.8422 12.2633 17.8422C13.1849 17.8422 14.1077 17.4926 14.8106 16.7922L15.2033 16.4008C15.2799 16.3245 15.3862 16.2802 15.4949 16.2802H15.532L17.0303 21.5174L15.3628 20.8515ZM18.8562 10.153L18.4623 10.5456C18.0337 10.9714 17.7988 11.5389 17.7988 12.1408V12.6922C17.7988 13.6522 17.0143 14.4339 16.0508 14.4339H15.4973C14.9007 14.4339 14.3165 14.6751 13.8953 15.096L13.5023 15.4874C12.8414 16.1447 11.6901 16.1447 11.0292 15.4874L10.6362 15.0948C10.215 14.6751 9.63203 14.4339 9.03413 14.4339H8.4807C7.51714 14.4339 6.73265 13.6522 6.73265 12.6922V12.1408C6.73265 11.5376 6.4981 10.9715 6.06944 10.5444L5.67525 10.153C4.99458 9.47353 4.99458 8.36705 5.67525 7.68886L6.06944 7.29625C6.4981 6.87038 6.73265 6.30293 6.73265 5.70105V5.14963C6.73265 4.18957 7.51714 3.40793 8.4807 3.40793H9.03413C9.6308 3.40793 10.215 3.16673 10.6362 2.74578L11.0292 2.35438C11.6901 1.6971 12.8414 1.6971 13.5023 2.35438L13.8953 2.74698C14.3165 3.1667 14.8994 3.40793 15.4973 3.40793H16.0508C17.0143 3.40793 17.7988 4.18957 17.7988 5.14963V5.70105C17.7988 6.30416 18.0337 6.87035 18.4623 7.29745L18.8562 7.68886C19.5369 8.36828 19.5369 9.47353 18.8562 10.153ZM12.2645 4.92065C10.0508 4.92065 8.24968 6.71523 8.24968 8.92091C8.24968 11.1266 10.0508 12.9212 12.2645 12.9212C14.4782 12.9212 16.2794 11.1266 16.2794 8.92091C16.2794 6.71523 14.4782 4.92065 12.2645 4.92065ZM12.2645 11.0749C11.0724 11.0749 10.1027 10.1087 10.1027 8.92091C10.1027 7.73314 11.0724 6.76692 12.2645 6.76692C13.4566 6.76692 14.4264 7.73314 14.4264 8.92091C14.4264 10.1087 13.4566 11.0749 12.2645 11.0749Z"
                  fill="#23254C"
                />
              </svg>
              <span className="text-center text-indigo-950 text-sm font-bold font-lato leading-tight">
                {" "}
                Concurso
              </span>
            </div>
          ) : (
            <div className="w-[98px] h-6 pl-2 pr-2.5 py-0.5 bg-zinc-100 rounded-2xl justify-center items-center gap-1 inline-flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.38 0.75H3.15C4.05 0.75 4.78 1.54 4.78 2.52V16.98C4.78 17.96 4.05 18.75 3.15 18.75H2.36C1.47 18.75 0.75 17.97 0.75 17V2.52C0.75 1.54 1.48 0.75 2.38 0.75Z"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.50977 5.30005H9.82977H14.1498"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.50977 8.36011H14.1498"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M8.06982 8.36005V5.30005"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.38 0.75H17.15C18.05 0.75 18.78 1.54 18.78 2.52V16.98C18.78 17.96 18.05 18.75 17.15 18.75H16.36C15.47 18.75 14.75 17.97 14.75 17V2.52C14.75 1.54 15.48 0.75 16.38 0.75Z"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.4502 11.04H9.7702H14.0902"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.4502 14.1001H14.0902"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M11.1802 14.1V11.04"
                  stroke="#26324D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
              <span className="text-center text-indigo-950 text-sm font-bold font-lato leading-tight">
                {" "}
                Pasada
              </span>
            </div>
          )}
        </div>

        {/* <div class="Fecha w-[14%] h-9 justify-start items-center gap-1 inline-flex">
          <div class="w-4 h-4 relative items-center justify-center ml-6">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9482 2.5H12.1149V2C12.1149 1.724 11.8909 1.5 11.6149 1.5C11.3389 1.5 11.1149 1.724 11.1149 2V2.5H6.78158V2C6.78158 1.724 6.55758 1.5 6.28158 1.5C6.00558 1.5 5.78158 1.724 5.78158 2V2.5H4.94824C3.33624 2.5 2.44824 3.388 2.44824 5V12C2.44824 13.612 3.33624 14.5 4.94824 14.5H12.9482C14.5602 14.5 15.4482 13.612 15.4482 12V5C15.4482 3.388 14.5602 2.5 12.9482 2.5ZM4.94824 3.5H5.78158V4C5.78158 4.276 6.00558 4.5 6.28158 4.5C6.55758 4.5 6.78158 4.276 6.78158 4V3.5H11.1149V4C11.1149 4.276 11.3389 4.5 11.6149 4.5C11.8909 4.5 12.1149 4.276 12.1149 4V3.5H12.9482C13.9996 3.5 14.4482 3.94867 14.4482 5V5.5H3.44824V5C3.44824 3.94867 3.89691 3.5 4.94824 3.5ZM12.9482 13.5H4.94824C3.89691 13.5 3.44824 13.0513 3.44824 12V6.5H14.4482V12C14.4482 13.0513 13.9996 13.5 12.9482 13.5Z"
                fill="#231D43"
              />
            </svg>
          </div>
          <div class="w-[117.62px] text-zinc-700 text-xs font-normal font-lato leading-[18px]">
            {/* <p>{fechaInicioFormateada}</p>
            <p>{fechaFinalizacionFormateada}</p> */}
          {/* </div>
        </div>  */}

        <div className="autoridadesEvento flex justify-center items-center w-[10%]">
          <div className="flex-row justify-center">
            {autoridades.map((aut, index) => {
              return (
                <p
                  key={index}
                  className="text-center text-zinc-700 text-xs font-normal font-lato leading-[18px]"
                >
                  {aut.nombre}
                </p>
              );
            })}
          </div>
        </div>
        <div className="estadoContenedor flex justify-center w-[12%]">
          <div
            className={`rounded-2xl w-[89px] text-center font-lato text-sm font-bold leading-5 ${getEstadoStyles(
              estado
            )}`}
          >
            {estadoDelEvento()}
          </div>
        </div>

        <div className="participantesEvento flex justify-end items-center w-[12%] text-center">
          {inscriptosSuma !== 0 ? (
            <div className="contenedorImgenParticipantes flex justify-center">
              <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6" />
              <img
                src="/img/faq-avatar.png"
                alt=""
                className="foto w-6 h-6 relative right-2"
              />
              <div className="totalParticipantes bg-[#C8F7E7] rounded-full text-xs text-center w-6 h-6 py-1 font-primary font-semibold relative right-4 text-[#476BC8]">
                +{inscriptosSuma}
              </div>
            </div>
          ) : null}
        </div>

        {/* icono del ojo */}
        <div className="w-[10%] flex justify-center items-center">
          <div
            className="w-6 h-6 relative cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7355 10.1379C20.4225 7.93894 17.4754 4.25 12.5004 4.25C7.52536 4.25 4.57825 7.93894 3.26525 10.1379C2.57825 11.2859 2.57825 12.7131 3.26525 13.8621C4.57825 16.0611 7.52536 19.75 12.5004 19.75C17.4754 19.75 20.4225 16.0611 21.7355 13.8621C22.4225 12.7131 22.4225 11.2869 21.7355 10.1379ZM20.4484 13.092C19.2984 15.018 16.7354 18.25 12.5004 18.25C8.26536 18.25 5.70236 15.019 4.55236 13.092C4.15036 12.418 4.15036 11.581 4.55236 10.907C5.70236 8.98098 8.26536 5.74902 12.5004 5.74902C16.7354 5.74902 19.2984 8.97998 20.4484 10.907C20.8514 11.582 20.8514 12.418 20.4484 13.092ZM12.5004 7.75C10.1564 7.75 8.25036 9.657 8.25036 12C8.25036 14.343 10.1564 16.25 12.5004 16.25C14.8444 16.25 16.7504 14.343 16.7504 12C16.7504 9.657 14.8444 7.75 12.5004 7.75ZM12.5004 14.75C10.9834 14.75 9.75036 13.517 9.75036 12C9.75036 10.483 10.9834 9.25 12.5004 9.25C14.0174 9.25 15.2504 10.483 15.2504 12C15.2504 13.517 14.0174 14.75 12.5004 14.75Z"
                fill="#6D6E6D"
              />
            </svg>
          </div>
        </div>

        {/* VISTA DE PRUEBAS */}
      </div>
      {isOpen ? (
        <div>
          <div className="flex h-26 flex-row justify-between items-center w-[100%]">
            <div className="ml-5 py-3">
              <p className="text-indigo-950 text-lg font-bold font-lato leading-relaxed">
                Pruebas
              </p>
            </div>
            <div className="w-auto mr-5 py-3">
              <Filtros
                filterOptions={filterOptions}
                setfilterOptions={setfilterOptions}
              />
            </div>
          </div>

          {sinResultadosMessage && (
            <div className="mx-auto my-[50px] w-[30%] px-4 flex items-center justify-center h-[100px] rounded-xl bg-stone-50">
              <p className="text-indigo-950 text-sm font-semibold text-center">
                {sinResultadosMessage}
              </p>
            </div>
          )}

          {!sinResultadosMessage
            ? pruebas &&
              pruebas.map((prueba) => {
                return (
                  <div key={prueba.categoria.id} className="flex-col mb-3">
                    <div
                      key={prueba.categoria.id}
                      className={`flex flex-row items-center justify-start w-[100%] h-[72px] p-6 bg-stone-50 ${
                        showPrueba && openPruebas === prueba.categoria.id
                          ? "rounded-t-[10px]"
                          : "rounded-[10px]"
                      }`}
                    >
                      <div
                        className="contenedorSvg cursor-pointer flex justify-start items-center w-5 h-5"
                        onClick={() => {
                          handlePruebaClick(prueba.categoria.id);
                          !showPrueba
                            ? setShowPrueba(true)
                            : setShowPrueba(false);
                        }}
                      >
                        {showPrueba && openPruebas === prueba.categoria.id ? (
                          <svg
                            width="16"
                            height="9"
                            viewBox="0 0 16 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99978 8.74978C7.80778 8.74978 7.61575 8.67681 7.46975 8.52981L0.46975 1.52981C0.17675 1.23681 0.17675 0.761773 0.46975 0.468773C0.76275 0.175773 1.23779 0.175773 1.53079 0.468773L8.00076 6.93874L14.4707 0.468773C14.7637 0.175773 15.2388 0.175773 15.5318 0.468773C15.8248 0.761773 15.8248 1.23681 15.5318 1.52981L8.53176 8.52981C8.38376 8.67681 8.19178 8.74978 7.99978 8.74978Z"
                              fill="#23254C"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M8.00007 3.33318C7.78674 3.33318 7.57338 3.41482 7.41088 3.57732C7.08505 3.90315 7.08505 4.42987 7.41088 4.75571L12.655 9.99985L7.41088 15.244C7.08505 15.5698 7.08505 16.0965 7.41088 16.4224C7.73671 16.7482 8.26343 16.7482 8.58926 16.4224L14.4226 10.589C14.7484 10.2632 14.7484 9.73649 14.4226 9.41065L8.58926 3.57732C8.42676 3.41482 8.2134 3.33318 8.00007 3.33318Z"
                              fill="#23254C"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-row ml-3 items-center">
                        <div className="w-5 h-5 relative">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.0838 5.31907L16.7553 4.9929C16.6915 4.92828 16.6546 4.84216 16.6546 4.75087V4.29136C16.6546 2.64305 15.308 1.30138 13.6537 1.30138H13.1925C13.1019 1.30138 13.0133 1.26441 12.9495 1.20184L12.6222 0.874672C11.4538 -0.290531 9.5503 -0.292583 8.37776 0.874672L8.05053 1.20084C7.9867 1.26443 7.89808 1.30138 7.80749 1.30138H7.3463C5.69198 1.30138 4.34542 2.64305 4.34542 4.29136V4.75087C4.34542 4.84216 4.30949 4.9283 4.24464 4.9919L3.91615 5.32007C2.7467 6.48527 2.7467 8.38288 3.91615 9.54911L4.24464 9.87527C4.30847 9.93989 4.34542 10.026 4.34542 10.1173V10.5768C4.34542 11.8333 5.12884 12.9062 6.23241 13.3483L4.61007 19.0184C4.52978 19.3004 4.61725 19.6041 4.83652 19.801C5.05374 19.997 5.36566 20.0534 5.64053 19.9437L8.49011 18.8061C9.78721 18.2912 11.2138 18.2912 12.5089 18.8061L15.3605 19.9447C15.4541 19.9816 15.552 20 15.6477 20C15.8361 20 16.0203 19.9323 16.1645 19.802C16.3837 19.6051 16.4712 19.3026 16.3909 19.0195L14.7686 13.3493C15.8721 12.9072 16.6556 11.8343 16.6556 10.5778V10.1183C16.6556 10.027 16.6915 9.94087 16.7563 9.87728L17.0848 9.55011C17.0848 9.55011 17.0848 9.55013 17.0848 9.54911C18.2533 8.38288 18.2533 6.4853 17.0838 5.31907ZM13.0814 17.3763C11.4188 16.7157 9.58533 16.7147 7.91556 17.3763L6.52571 17.9312L7.77457 13.5668H7.80548C7.89607 13.5668 7.98444 13.6038 8.04827 13.6663L8.37575 13.9935C8.96048 14.5761 9.72846 14.8685 10.4985 14.8685C11.2664 14.8685 12.0355 14.5771 12.6212 13.9935L12.9484 13.6673C13.0123 13.6037 13.1009 13.5668 13.1915 13.5668H13.2224L14.471 17.9312L13.0814 17.3763ZM15.9926 8.4608L15.6643 8.78796C15.3071 9.14286 15.1114 9.61573 15.1114 10.1173V10.5768C15.1114 11.3769 14.4577 12.0282 13.6547 12.0282H13.1935C12.6963 12.0282 12.2095 12.2292 11.8584 12.58L11.5309 12.9062C10.9802 13.4539 10.0208 13.4539 9.47004 12.9062L9.14256 12.579C8.79152 12.2293 8.30575 12.0282 7.80749 12.0282H7.3463C6.54333 12.0282 5.88959 11.3769 5.88959 10.5768V10.1173C5.88959 9.61471 5.69414 9.14288 5.33692 8.78696L5.00843 8.4608C4.44121 7.89461 4.44121 6.97254 5.00843 6.40738L5.33692 6.08021C5.69414 5.72532 5.88959 5.25244 5.88959 4.75087V4.29136C5.88959 3.49131 6.54333 2.83994 7.3463 2.83994H7.80749C8.30472 2.83994 8.79152 2.63894 9.14256 2.28815L9.47004 1.96198C10.0208 1.41425 10.9802 1.41425 11.5309 1.96198L11.8584 2.28915C12.2095 2.63892 12.6952 2.83994 13.1935 2.83994H13.6547C14.4577 2.83994 15.1114 3.49131 15.1114 4.29136V4.75087C15.1114 5.25347 15.3071 5.72529 15.6643 6.08121L15.9926 6.40738C16.5598 6.97357 16.5598 7.89461 15.9926 8.4608ZM10.4995 4.10054C8.65472 4.10054 7.15378 5.59602 7.15378 7.43409C7.15378 9.27215 8.65472 10.7676 10.4995 10.7676C12.3443 10.7676 13.8452 9.27215 13.8452 7.43409C13.8452 5.59602 12.3443 4.10054 10.4995 4.10054ZM10.4995 9.22907C9.50607 9.22907 8.69795 8.42389 8.69795 7.43409C8.69795 6.44428 9.50607 5.6391 10.4995 5.6391C11.4929 5.6391 12.301 6.44428 12.301 7.43409C12.301 8.42389 11.4929 9.22907 10.4995 9.22907Z"
                              fill="#BEBDBD"
                            />
                          </svg>
                        </div>
                        <p className="text-indigo-950 text-base font-normal font-lato leading-normal ml-2">
                          Prueba {prueba.categoria.nombre}
                        </p>
                      </div>
                    </div>

                    {openPruebas === prueba.categoria.id
                      ? showPrueba && (
                          <div>
                            <PruebaCard
                              prueba={prueba}
                              creadorId={evento.creadorId}
                            />
                          </div>
                        )
                      : null}
                  </div>
                );
              })
            : null}
        </div>
      ) : null}

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        inscriptos={inscriptosSuma}
      >
        <VentanaModalEventDetails
          evento={evento}
          closeModal={closeModal}
          inscriptos={inscriptosSuma}
        />
      </Modal>
    </>
  );
};

export default AllEventList;
