import React from "react";
import Button from "./Button";
import { format, isBefore, isWithinInterval, parseISO } from "date-fns";
import HeaderCardEvent from "./HeaderCardEvent";
import FooterCardEvent from "./FooterCardEvent";
import defaultImage from "../../../public/img/defaultImg.png"
import { useSelector } from "react-redux";

const CardEvent = ({
  nombreEvento,
  etiqueta,
  fechaInicio,
  horaInicio,
  ubicacion,
  fechaFinalizacion,
  imagen,
  id,
  estadoEvento,
  tipoConcurso,
  creadorId
}) => {
  const user = useSelector((state) => state.reducerAuth.usuarioAuth.id)
  // console.log('user', user)
  // console.log('creadorId', creadorId)
  //chequeo si estamos en fecha del evento
  const fechaActual = new Date();
  const finFecha = fechaFinalizacion ? parseISO(fechaFinalizacion) : parseISO("2023-12-11T00:00:00.000+00:00");
  const inicioFecha = fechaInicio ? parseISO(fechaInicio) : parseISO("2023-12-11T00:00:00.000+00:00");
  const isEventFinish = isBefore(finFecha, fechaActual);
  const isEventOn = isWithinInterval(fechaActual, {
    start: inicioFecha,
    end: finFecha,
  });
  const isEventComing = !isEventOn && !isEventFinish;
  // formateo fecha al pedido
  const formatoFechaInicio = "d";
  const formatoFechaFinalizacion = "dd MMMM yyyy";
  const fechaInicioFormateada = format(inicioFecha, formatoFechaInicio);
  const fechaFinalizacionFormateada = format(
    finFecha,
    formatoFechaFinalizacion
  );

  const fecha = `${fechaInicioFormateada} AL ${fechaFinalizacionFormateada}`;

  const portada = !imagen ? defaultImage.src : imagen



  return (
    <div className="w-[346.67px] h-[376px] bg-white rounded-[10px] flex-col justify-start items-start inline-flex border-gray-300">
      <div
        className="w-[344] h-[178px] self-stretch relative grow shrink basis-0 pb-2 rounded-tl-[12px] rounded-tr-[12px] border-l border-r border-t  flex-col justify-end items-start flex"
        style={{
          backgroundImage: `url(${portada})`,
          backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100%',
        height: '376px'
        }}
      >
        {/* <HeaderCardEvent
          isEventFinish={isEventFinish}
          isEventOn={isEventOn}
          estadoEvento={estadoEvento}
        /> */}
        <div className="flex ml-1 items-center justify-center">
          <div
            className={`pl-2 pr-2 py-0.5 ml-[5px] ${
              estadoEvento === "publicado" ? "bg-green-100" : "bg-white"
            } rounded-2xl justify-center items-center gap-1 flex`}
          >
            <div className="w-1.5 h-1.5 relative">
              <div
                className={`w-1.5 h-1.5 left-[1px] top-[1px] absolute ${
                  estadoEvento === "publicado" ? "bg-teal-800" : null
                } rounded-full`}
              />
            </div>
            <p
              className={`text-center ${
                estadoEvento === "publicado"
                  ? "text-teal-800"
                  : "text-indigo-950"
              } text-sm font-bold font-lato leading-tight`}
            >
              {estadoEvento ? estadoEvento : "publicado"}
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch p-6 rounded-bl-[10px] rounded-br-[10px] border-l border-r border-b border-gray-300 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <h4 className="w-[298.67px] text-indigo-950 text-xl font-bold font-lato file:leading-[30px]">
            {nombreEvento}
          </h4>
        </div>
        <div className="self-stretch h-[52px] flex-col justify-center items-start gap-3 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="calendar-empty-alt">
                  <path
                    id="calendar-empty-alt_2"
                    d="M13.6665 3.30273H12.729V2.74023C12.729 2.42973 12.477 2.17773 12.1665 2.17773C11.856 2.17773 11.604 2.42973 11.604 2.74023V3.30273H6.729V2.74023C6.729 2.42973 6.477 2.17773 6.1665 2.17773C5.856 2.17773 5.604 2.42973 5.604 2.74023V3.30273H4.6665C2.853 3.30273 1.854 4.30173 1.854 6.11523V13.9902C1.854 15.8037 2.853 16.8027 4.6665 16.8027H13.6665C15.48 16.8027 16.479 15.8037 16.479 13.9902V6.11523C16.479 4.30173 15.48 3.30273 13.6665 3.30273ZM4.6665 4.42773H5.604V4.99023C5.604 5.30073 5.856 5.55273 6.1665 5.55273C6.477 5.55273 6.729 5.30073 6.729 4.99023V4.42773H11.604V4.99023C11.604 5.30073 11.856 5.55273 12.1665 5.55273C12.477 5.55273 12.729 5.30073 12.729 4.99023V4.42773H13.6665C14.8493 4.42773 15.354 4.93248 15.354 6.11523V6.67773H2.979V6.11523C2.979 4.93248 3.48375 4.42773 4.6665 4.42773ZM13.6665 15.6777H4.6665C3.48375 15.6777 2.979 15.173 2.979 13.9902V7.80273H15.354V13.9902C15.354 15.173 14.8493 15.6777 13.6665 15.6777Z"
                    fill="#494949"
                  />
                </g>
              </svg>
              <div className="text-zinc-700 text-sm font-normal font-lato leading-tight">
                {fecha}
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="clock">
                  <path
                    id="clock_2"
                    d="M9.1665 1.42773C4.7205 1.42773 1.104 5.04423 1.104 9.49023C1.104 13.9362 4.7205 17.5527 9.1665 17.5527C13.6125 17.5527 17.229 13.9362 17.229 9.49023C17.229 5.04423 13.6125 1.42773 9.1665 1.42773ZM9.1665 16.4277C5.34075 16.4277 2.229 13.316 2.229 9.49023C2.229 5.66448 5.34075 2.55273 9.1665 2.55273C12.9923 2.55273 16.104 5.66448 16.104 9.49023C16.104 13.316 12.9923 16.4277 9.1665 16.4277ZM11.814 11.3427C12.0338 11.5625 12.0338 11.9187 11.814 12.1385C11.7045 12.248 11.5605 12.3035 11.4165 12.3035C11.2725 12.3035 11.1285 12.2487 11.019 12.1385L8.76898 9.88849C8.66323 9.78274 8.604 9.63947 8.604 9.49097V5.74097C8.604 5.43047 8.856 5.17847 9.1665 5.17847C9.477 5.17847 9.729 5.43047 9.729 5.74097V9.25769L11.814 11.3427Z"
                    fill="#494949"
                  />
                </g>
              </svg>
              <div className="text-zinc-700 text-sm font-normal font-lato leading-tight">
                {horaInicio}
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="location-pin">
                <path
                  id="location-pin_2"
                  d="M9.1665 2.17773C5.54775 2.17773 2.604 5.12148 2.604 8.74023C2.604 12.5787 6.12675 14.9052 8.45775 16.4449L8.8545 16.7083C8.949 16.7713 9.05775 16.8027 9.1665 16.8027C9.27525 16.8027 9.384 16.7713 9.4785 16.7083L9.87526 16.4449C12.2063 14.9052 15.729 12.5787 15.729 8.74023C15.729 5.12148 12.7853 2.17773 9.1665 2.17773ZM9.25576 15.506L9.1665 15.5653L9.07725 15.506C6.81975 14.015 3.729 11.9735 3.729 8.74023C3.729 5.74173 6.168 3.30273 9.1665 3.30273C12.165 3.30273 14.604 5.74173 14.604 8.74023C14.604 11.9735 11.5125 14.0157 9.25576 15.506ZM9.1665 6.30273C7.8225 6.30273 6.729 7.39623 6.729 8.74023C6.729 10.0842 7.8225 11.1777 9.1665 11.1777C10.5105 11.1777 11.604 10.0842 11.604 8.74023C11.604 7.39623 10.5105 6.30273 9.1665 6.30273ZM9.1665 10.0527C8.44275 10.0527 7.854 9.46398 7.854 8.74023C7.854 8.01648 8.44275 7.42773 9.1665 7.42773C9.89025 7.42773 10.479 8.01648 10.479 8.74023C10.479 9.46398 9.89025 10.0527 9.1665 10.0527Z"
                  fill="#494949"
                />
              </g>
            </svg>
            <div className="grow shrink basis-0 text-zinc-700 text-sm font-normal font-lato leading-tight">
              {ubicacion}
            </div>
          </div>
        </div>
        <FooterCardEvent
          isEventFinish={isEventFinish}
          isEventOn={isEventOn}
          isEventOnComing={isEventComing}
          id={id}
          user={user}
          creadorId={creadorId}
        />
      </div>
    </div>
  );
};

export default CardEvent;
