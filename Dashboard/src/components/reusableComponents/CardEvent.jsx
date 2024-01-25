import React from "react";
import Button from "./Button";
import { format, isBefore, isWithinInterval, parseISO } from "date-fns";
import HeaderCardEvent from "./HeaderCardEvent";
import FooterCardEvent from "./FooterCardEvent";
import defaultImage from "../../../public/img/defaultImg.png"
import { useSelector } from "react-redux";
import { calendar, CardCalendarIcon, CardGpsHubicationIcon, CardClockIcon } from "@/iconos/icons";

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
  const fechaActual = new Date();
  const finFecha = fechaFinalizacion ? parseISO(fechaFinalizacion) : parseISO("2023-12-11T00:00:00.000+00:00");
  const inicioFecha = fechaInicio ? parseISO(fechaInicio) : parseISO("2023-12-11T00:00:00.000+00:00");
  const isEventFinish = isBefore(finFecha, fechaActual);
  const isEventOn = isWithinInterval(fechaActual, {
    start: inicioFecha,
    end: finFecha,
  });
  const isEventComing = !isEventOn && !isEventFinish;

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
    <div className="w-[346px] sm:w-[250px] h-[376px] bg-white rounded-[10px] flex-col justify-start items-start inline-flex border-gray-300">
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
        <div className="flex ml-1 items-center justify-center">
          <div className={`pl-2 pr-2 py-0.5 ml-[5px] ${estadoEvento === "publicado" ? "bg-green-100" : "bg-white"} rounded-2xl justify-center items-center gap-1 flex`}>
            <div className="w-1.5 h-1.5 relative">
              <div className={`w-1.5 h-1.5 left-[1px] top-[1px] absolute ${estadoEvento === "publicado" ? "bg-teal-800" : null} rounded-full`}/>
            </div>
            <p className={`text-center ${estadoEvento === "publicado" ? "text-teal-800" : "text-indigo-950" } text-sm font-bold font-lato leading-tight`}>
              {estadoEvento ? estadoEvento : "publicado"}
            </p>
          </div>
        </div>
      </div>

      <div className="self-stretch p-6 rounded-bl-[10px] rounded-br-[10px] border-l border-r border-b border-gray-300 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <h4 className="w-[298.67px] text-indigo-950 text-xl font-bold font-lato file:leading-[30px] truncate">
            {nombreEvento}
          </h4>
        </div>
        <div className="self-stretch h-[52px] flex-col justify-center items-start gap-3 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              {CardCalendarIcon}
              <div className="text-zinc-700 text-xs font-normal font-lato leading-tight">
                {fecha}
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              {CardClockIcon}
              <div className="text-zinc-700 text-xs font-normal font-lato leading-tight">
                {horaInicio}
              </div>
            </div>
          </div>
          <div className="self-stretch mb-3 justify-start items-center gap-1 inline-flex">
            {CardGpsHubicationIcon}
            <div className="grow shrink basis-0 text-zinc-700 text-xs font-normal font-lato leading-tight truncate">
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
