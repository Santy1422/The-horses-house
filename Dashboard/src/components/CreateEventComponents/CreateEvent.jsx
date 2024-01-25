import { useState } from "react";
import DatosBasicos from "./DatosBasicos";
import ResponsableEvento from "./ResponsableEvento";
import FechaEvento from "./FechaEvento";
import FechaInscripcion from "./FechaInscripcion";
import HojaRuta from "./HojaRuta";
import PruebasTotales from "./PruebasTotales";
import DatosPrueba from "./DatosPrueba";
import { eventGetAll, eventPeticion } from "../../../peticiones/event";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../DashboardComponets/SideBar";
import { eventAllSetEvents, setBorradores, setMyEvent, setPublicados } from "@/redux/reducer/reducerEventAll";
import { useRouter } from "next/router";
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import PremiosGenerales from "./PremiosGenerales";


const CreateEvent = () => {
  const [nombre, setNombre] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [clubes, setClubes] = useState(null);
  const [email, setEmail] = useState(null);
  const [autoridad, setAutoridad] = useState([]);
  // const [premio, setPremio] = useState([]);
  const [fechaInicio, setFechaInicio] = useState(null);
  const [horaInicio, setHoraInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);
  const [horaFin, setHoraFin] = useState(null);
  const [fechaInscripcionInicio, setFechaInscripcionInicio] = useState(null);
  const [horaInscripcionInicio, setHoraInscripcionInicio] = useState(null);
  const [fechaInscripcionFin, setFechaInscripcionFin] = useState(null);
  const [horaInscripcionFin, setHoraInscripcionFin] = useState(null);
  const [pruebasDelEvento, setPruebasDelEvento] = useState([]);
  const dispatch = useDispatch();
  const { push } = useRouter();


  const [paso, setPaso] = useState(1);
  const [cantidadAutoridad, setCantidadAutoridad] = useState(1);

  const value = useSelector((state) => state.reducerEventAll.other);

  const guardarEventoBackend = async () => {
    if (pruebasDelEvento.length === 0) return;
    const eventData = {
      nombreEvento: nombre,
      tipoConcurso: categoria,
      descripcionEvento: descripcion,
      ubicacion: direccion,
      clubesPatrocinadores: [clubes],
      emailContacto: email,
      autoridadesConcurso: autoridad,
      fechaInicio,
      horaInicio,
      fechaFinalizacion: fechaFin,
      horaFinalizacion: horaFin,
      fechaInicioInscripcion: fechaInscripcionInicio,
      horaInicioInscripcion: horaInscripcionInicio,
      fechaFinInscripcion: fechaInscripcionFin,
      horaFinInscripcion: horaInscripcionFin,
      categoria: pruebasDelEvento,
      tipoDeConcurso: value,
      // premios: premio
    };


    await eventPeticion({
      eventData,
      succes: async (v) => {
        try {
          // Realiza una solicitud adicional con eventGetAll
          await eventGetAll({
            success: (v) => {
              console.log('ver', v)
              dispatch(eventAllSetEvents(v.allEvents));
              dispatch(setMyEvent(v.myEvents));
              dispatch(setBorradores(v.borrador));
              dispatch(setPublicados(v.publicados));
            },
            error: (e) => console.log("error", e),
            loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
          });

          push(`/dashboard/events/${v}`);
        } catch (error) {
          console.log("Error al obtener eventos", error);
        }
      },
      error: (e) => console.log("Error en eventPeticion", e),
      loading: (l) => console.log("Cargando en eventPeticion", l),
    });



    // 
  };

  return (
    <div className="main container flex flex-row bg-[#23254C]">
      <SideBar />
      <div className="formulario bg-slate-50 rounded-l-3xl h-[1024px] w-full px-[76px] pt-8 flex flex-col">
        <div className="contenedorFlecha flex h-14 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28.9998 15.9995C28.9998 16.5515 28.5518 16.9995 27.9998 16.9995H6.41453L14.0412 24.6262C14.4318 25.0168 14.4318 25.6502 14.0412 26.0409C13.8465 26.2356 13.5905 26.3342 13.3345 26.3342C13.0785 26.3342 12.8224 26.2369 12.6277 26.0409L3.29441 16.7076C3.20241 16.6156 3.12926 16.505 3.07859 16.3824C2.97726 16.1384 2.97726 15.8624 3.07859 15.6184C3.12926 15.4957 3.20241 15.3848 3.29441 15.2928L12.6277 5.9595C13.0184 5.56884 13.6518 5.56884 14.0425 5.9595C14.4331 6.35017 14.4331 6.98355 14.0425 7.37422L6.41583 15.0008H27.9998C28.5518 14.9995 28.9998 15.4475 28.9998 15.9995Z"
              fill="#231D43"
            />
          </svg>
        </div>
        <div className="breadcrum flex flex-row h-4 gap-3 items-center mt-6">
          <div className="iconoHome h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12 14.4998H9.16667V10.9998C9.16667 10.3565 8.64333 9.83318 8 9.83318C7.35667 9.83318 6.83333 10.3565 6.83333 10.9998V14.4998H4C2.388 14.4998 1.5 13.6118 1.5 11.9998V7.76653C1.5 6.3512 1.89066 5.95584 2.52799 5.42718L6.60799 2.00652C7.41399 1.32986 8.58601 1.32986 9.39201 2.00652L13.472 5.42718C14.1093 5.95584 14.5 6.35187 14.5 7.76653V11.9998C14.5 13.6118 13.612 14.4998 12 14.4998ZM10.1667 13.4998H12C13.0513 13.4998 13.5 13.0512 13.5 11.9998V7.76653C13.5 6.7492 13.332 6.60988 12.834 6.19655L8.75 2.77256C8.31533 2.40856 7.68467 2.40856 7.25 2.77256L3.16602 6.19655C2.66802 6.60988 2.5 6.7492 2.5 7.76653V11.9998C2.5 13.0512 2.94867 13.4998 4 13.4998H5.83333V10.9998C5.83333 9.80518 6.80533 8.83318 8 8.83318C9.19467 8.83318 10.1667 9.80518 10.1667 10.9998V13.4998Z"
                fill="#25314C"
              />
            </svg>
          </div>
          <div className="iconoFlecha h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L9.29289 8L5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645Z"
                fill="#C3C3CB"
              />
            </svg>
          </div>
          <div className="texto font-lato text-xs font-normal leading-4 text-[#353535]">
            Evento nuevo
          </div>
          <div className="iconoFlecha h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L9.29289 8L5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645Z"
                fill="#C3C3CB"
              />
            </svg>
          </div>
          <div className="texto font-lato text-xs font-normal leading-4 text-[#353535]">
            Concurso
          </div>
          <div className="iconoFlecha h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L9.29289 8L5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645Z"
                fill="#C3C3CB"
              />
            </svg>
          </div>
          <div className="texto font-lato text-xs font-normal leading-4 text-[#BEBDBD]">
            Carga manual
          </div>
        </div>
        <div className="contenedorCrearPaso flex flex-row w-full">
          <div
            className={`crear flex flex-col mt-4 mr-6 ${paso === 1 && "w-[40%]"} ${pruebasDelEvento.length === 0 ? "w-2/5" : "w-[70%]"
              } `}
          >
            <div className="titulo flex flex-row gap-3 items-center">
              <div className="icono  p-[20px] bg-white rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M24.5012 5H22.8345V4C22.8345 3.448 22.3865 3 21.8345 3C21.2825 3 20.8345 3.448 20.8345 4V5H12.1679V4C12.1679 3.448 11.7199 3 11.1679 3C10.6159 3 10.1679 3.448 10.1679 4V5H8.50119C5.27719 5 3.50119 6.776 3.50119 10V24C3.50119 27.224 5.27719 29 8.50119 29H24.5012C27.7252 29 29.5012 27.224 29.5012 24V10C29.5012 6.776 27.7252 5 24.5012 5ZM8.50119 7H10.1679V8C10.1679 8.552 10.6159 9 11.1679 9C11.7199 9 12.1679 8.552 12.1679 8V7H20.8345V8C20.8345 8.552 21.2825 9 21.8345 9C22.3865 9 22.8345 8.552 22.8345 8V7H24.5012C26.6039 7 27.5012 7.89733 27.5012 10V11H5.50119V10C5.50119 7.89733 6.39852 7 8.50119 7ZM24.5012 27H8.50119C6.39852 27 5.50119 26.1027 5.50119 24V13H27.5012V24C27.5012 26.1027 26.6039 27 24.5012 27ZM12.5279 17.3333C12.5279 18.0693 11.9319 18.6667 11.1945 18.6667C10.4585 18.6667 9.85438 18.0693 9.85438 17.3333C9.85438 16.5973 10.4452 16 11.1812 16H11.1945C11.9305 16 12.5279 16.5973 12.5279 17.3333ZM17.8612 17.3333C17.8612 18.0693 17.2652 18.6667 16.5279 18.6667C15.7919 18.6667 15.1877 18.0693 15.1877 17.3333C15.1877 16.5973 15.7785 16 16.5145 16H16.5279C17.2639 16 17.8612 16.5973 17.8612 17.3333ZM23.1945 17.3333C23.1945 18.0693 22.5986 18.6667 21.8612 18.6667C21.1252 18.6667 20.521 18.0693 20.521 17.3333C20.521 16.5973 21.1119 16 21.8479 16H21.8612C22.5972 16 23.1945 16.5973 23.1945 17.3333ZM12.5279 22.6667C12.5279 23.4027 11.9319 24 11.1945 24C10.4585 24 9.85438 23.4027 9.85438 22.6667C9.85438 21.9307 10.4452 21.3333 11.1812 21.3333H11.1945C11.9305 21.3333 12.5279 21.9307 12.5279 22.6667ZM17.8612 22.6667C17.8612 23.4027 17.2652 24 16.5279 24C15.7919 24 15.1877 23.4027 15.1877 22.6667C15.1877 21.9307 15.7785 21.3333 16.5145 21.3333H16.5279C17.2639 21.3333 17.8612 21.9307 17.8612 22.6667ZM23.1945 22.6667C23.1945 23.4027 22.5986 24 21.8612 24C21.1252 24 20.521 23.4027 20.521 22.6667C20.521 21.9307 21.1119 21.3333 21.8479 21.3333H21.8612C22.5972 21.3333 23.1945 21.9307 23.1945 22.6667Z"
                    fill="#494949"
                  />
                </svg>
              </div>
              <div className="titulo font-lato text-[34px] font-bold leading-10 ">
                Crear evento
              </div>
            </div>
            <div className="iconoYtipo w-fit bg-white rounded-full flex flex-row items-center px-[10px] gap-[6px] mt-2">
              <div className="icono ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M13.7683 4.25525L13.5055 3.99432C13.4544 3.94262 13.4248 3.87373 13.4248 3.8007V3.43309C13.4248 2.11444 12.3476 1.04111 11.0241 1.04111H10.6552C10.5827 1.04111 10.5118 1.01153 10.4608 0.961473L10.199 0.699737C9.26423 -0.232425 7.74143 -0.234066 6.8034 0.699737L6.54161 0.960672C6.49055 1.01155 6.41966 1.04111 6.34718 1.04111H5.97823C4.65477 1.04111 3.57753 2.11444 3.57753 3.43309V3.8007C3.57753 3.87373 3.54879 3.94264 3.4969 3.99352L3.23411 4.25606C2.29855 5.18822 2.29855 6.7063 3.23411 7.63929L3.4969 7.90022C3.54796 7.95192 3.57753 8.02081 3.57753 8.09384V8.46145C3.57753 9.46665 4.20426 10.325 5.08712 10.6786L3.78925 15.2147C3.72501 15.4403 3.79499 15.6833 3.97041 15.8408C4.14418 15.9976 4.39372 16.0427 4.61361 15.9549L6.89327 15.0449C7.93096 14.633 9.07225 14.633 10.1083 15.0449L12.3896 15.9557C12.4645 15.9853 12.5428 16 12.6194 16C12.7701 16 12.9175 15.9458 13.0328 15.8416C13.2082 15.6841 13.2782 15.4421 13.2139 15.2156L11.9161 10.6794C12.7989 10.3258 13.4256 9.46745 13.4256 8.46226V8.09464C13.4256 8.02161 13.4544 7.9527 13.5063 7.90182L13.7691 7.64009C13.7691 7.64009 13.7691 7.64011 13.7691 7.63929C14.7038 6.7063 14.7038 5.18824 13.7683 4.25525ZM10.5663 13.901C9.23626 13.3726 7.76945 13.3717 6.43364 13.901L5.32176 14.3449L6.32085 10.8534H6.34558C6.41805 10.8534 6.48874 10.883 6.5398 10.9331L6.80179 11.1948C7.26957 11.6609 7.88396 11.8948 8.49998 11.8948C9.11435 11.8948 9.72956 11.6617 10.1982 11.1948L10.4599 10.9339C10.511 10.883 10.5819 10.8534 10.6544 10.8534H10.6791L11.678 14.3449L10.5663 13.901ZM12.8952 6.76864L12.6326 7.03037C12.3469 7.31429 12.1903 7.69259 12.1903 8.09384V8.46145C12.1903 9.1015 11.6673 9.62259 11.0249 9.62259H10.656C10.2582 9.62259 9.86877 9.78339 9.58793 10.064L9.32595 10.325C8.88534 10.7631 8.11783 10.7631 7.67722 10.325L7.41524 10.0632C7.1344 9.78341 6.74579 9.62259 6.34718 9.62259H5.97823C5.33586 9.62259 4.81287 9.1015 4.81287 8.46145V8.09384C4.81287 7.69177 4.6565 7.31431 4.37073 7.02957L4.10794 6.76864C3.65416 6.31568 3.65416 5.57804 4.10794 5.1259L4.37073 4.86417C4.6565 4.58025 4.81287 4.20195 4.81287 3.8007V3.43309C4.81287 2.79305 5.33586 2.27195 5.97823 2.27195H6.34718C6.74496 2.27195 7.1344 2.11115 7.41524 1.83052L7.67722 1.56959C8.11783 1.1314 8.88534 1.1314 9.32595 1.56959L9.58793 1.83132C9.86877 2.11113 10.2574 2.27195 10.656 2.27195H11.0249C11.6673 2.27195 12.1903 2.79305 12.1903 3.43309V3.8007C12.1903 4.20278 12.3469 4.58023 12.6326 4.86497L12.8952 5.1259C13.349 5.57886 13.349 6.31568 12.8952 6.76864ZM8.50078 3.28043C7.02496 3.28043 5.82422 4.47682 5.82422 5.94727C5.82422 7.41772 7.02496 8.61411 8.50078 8.61411C9.9766 8.61411 11.1773 7.41772 11.1773 5.94727C11.1773 4.47682 9.9766 3.28043 8.50078 3.28043ZM8.50078 7.38326C7.70605 7.38326 7.05955 6.73912 7.05955 5.94727C7.05955 5.15542 7.70605 4.51128 8.50078 4.51128C9.29551 4.51128 9.94201 5.15542 9.94201 5.94727C9.94201 6.73912 9.29551 7.38326 8.50078 7.38326Z"
                    fill="#23254C"
                  />
                </svg>
              </div>
              <div className="tipo font-lato text-sm font-bold leading-5 text-[#23254C]">
                Concurso
              </div>
            </div>
            {paso === 1 && <HojaRuta />}
            {paso === 2 && (
              <PruebasTotales pruebasDelEvento={pruebasDelEvento} />
            )}           </div>
          <div
            className={`paso flex flex-col mt-8 ${paso === 1 && "w-[60%]"} ${
              pruebasDelEvento.length === 0 ? "w-3/5" : "w-[30%]"
            }`}
          >
            <div className="titulo flex flex-row justify-between items-center h-[72px] mb-8 ">
              <div className="paso flex flex-col">
                <div className="titulo font-lato text-2xl font-bold leading-8 text-[#23254C]">{`Paso ${paso} de 2`}</div>
                <div className="descripcion font-lato text-base font-normal leading-6 text-[#6D6E6D]">{`Completá el formulario con los datos ${paso === 1 ? "generales del evento." : "de cada prueba."
                  } `}</div>
              </div>
              <div className="flechas flex flex-row items-end gap-3">
                <div
                  className="izq flex justify-center items-center h-11 w-11 hover:cursor-pointer"
                  onClick={() => setPaso(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M22.2499 11.9998C22.2499 12.4138 21.9139 12.7498 21.4999 12.7498H5.31091L11.0309 18.4698C11.3239 18.7628 11.3239 19.2378 11.0309 19.5308C10.8849 19.6768 10.6928 19.7508 10.5008 19.7508C10.3088 19.7508 10.1168 19.6778 9.97082 19.5308L2.97082 12.5308C2.90182 12.4618 2.84695 12.3789 2.80895 12.2869C2.73295 12.1039 2.73295 11.8969 2.80895 11.7139C2.84695 11.6219 2.90182 11.5387 2.97082 11.4697L9.97082 4.46975C10.2638 4.17675 10.7389 4.17675 11.0319 4.46975C11.3249 4.76275 11.3249 5.23779 11.0319 5.53079L5.31188 11.2508H21.4999C21.9139 11.2498 22.2499 11.5858 22.2499 11.9998Z"
                      fill="#BEBDBD"
                    />
                  </svg>
                </div>
                {paso === 1 ? (
                  <div
                    className="der flex justify-center items-center h-11 w-11 hover:cursor-pointer"
                    onClick={() => setPaso(2)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M22.1919 12.2869C22.1539 12.3789 22.099 12.4618 22.03 12.5308L15.03 19.5308C14.884 19.6768 14.692 19.7508 14.5 19.7508C14.308 19.7508 14.116 19.6778 13.97 19.5308C13.677 19.2378 13.677 18.7628 13.97 18.4698L19.6899 12.7498H3.5C3.086 12.7498 2.75 12.4138 2.75 11.9998C2.75 11.5858 3.086 11.2498 3.5 11.2498H19.689L13.969 5.52981C13.676 5.23681 13.676 4.76177 13.969 4.46877C14.262 4.17577 14.737 4.17577 15.03 4.46877L22.03 11.4688C22.099 11.5378 22.1539 11.6207 22.1919 11.7127C22.2679 11.8967 22.2679 12.1029 22.1919 12.2869Z"
                        fill="#BEBDBD"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    className={`guardarEvento w-[128px] h-11 flex justify-center items-center rounded ${pruebasDelEvento.length > 0
                        ? "bg-[#231D43] hover:cursor-pointer"
                        : "bg-[#F3F2F2] hover:cursor-default"
                      }`}
                    onClick={guardarEventoBackend}
                  >
                    <div
                      className={`label font-lato text-sm font-semibold leading-5 text-[#BEBDBD] ${pruebasDelEvento.length > 0 && " text-white"
                        }`}
                    >
                      Guardar evento
                    </div>
                  </div>
                )}
              </div>
            </div>
            {paso === 1 && (
              <div className="contenedorInputs h-[650px] overflow-y-scroll flex flex-col gap-4">
                <DatosBasicos
                  setNombre={setNombre}
                  setCategoria={setCategoria}
                  setDescripcion={setDescripcion}
                  setDireccion={setDireccion}
                />
                <ResponsableEvento
                  setClubes={setClubes}
                  setEmail={setEmail}
                  autoridad={autoridad}
                  setAutoridad={setAutoridad}
                  setCantidadAutoridad={setCantidadAutoridad}
                  cantidadAutoridad={cantidadAutoridad}
                />
                <FechaEvento
                  setFechaInicio={setFechaInicio}
                  setHoraInicio={setHoraInicio}
                  setFechaFin={setFechaFin}
                  setHoraFin={setHoraFin}
                />
                <FechaInscripcion
                  setFechaInscripcionInicio={setFechaInscripcionInicio}
                  setHoraInscripcionInicio={setHoraInscripcionInicio}
                  setFechaInscripcionFin={setFechaInscripcionFin}
                  setHoraInscripcionFin={setHoraInscripcionFin}
                />
                {/* <PremiosGenerales
                  premio={premio}
                  setPremio={setPremio}
                  setCantidadPremio={setCantidadPremio}
                  cantidadPremio={cantidadPremio}
                  isGeneral
                /> */}
                <div className="botonContenedor flex flex-row-reverse w-full py-4  ">
                  <div
                    className="boton h-[44px] w-[153px] bg-[#23254C] flex justify-center items-center rounded mr-4 hover:cursor-pointer"
                    onClick={() => setPaso(2)}
                  >
                    <div className="label font-lato text-sm font-semibold leading-5 text-white">
                      Aceptar y continuar
                    </div>
                  </div>
                </div>
              </div>
            )}
            {paso === 2 && (
              <div className="contenedorPruebas h-[650px] overflow-y-scroll flex flex-col gap-4">
                <DatosPrueba
                  fechaInicio={fechaInicio}
                  pruebasDelEvento={pruebasDelEvento}
                  setPruebasDelEvento={setPruebasDelEvento}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
