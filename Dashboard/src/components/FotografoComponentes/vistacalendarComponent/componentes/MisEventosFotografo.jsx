import React, { useEffect, useState } from "react";
import { arrowPrev, arrowNext, filterIcon } from "@/iconos/icons";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import EmptyState from "./EmptyState";

const MisEventosFotografo = ({ misEventos, setModalCancelacion, eventDetails }) => {
  const [meses, setMeses] = useState([]);
  const [mesActual, setMesActual] = useState(new Date());
  const [eventosDelMes, setEventosDelMes] = useState([]);


  const obtenerMesActual = () => {
    const options = { month: "long", year: "numeric" };
    const mesActualTexto =
      mesActual.toLocaleDateString("es-ES", options).charAt(0).toUpperCase() +
      mesActual.toLocaleDateString("es-ES", options).slice(1).toLowerCase();
    setMeses([mesActualTexto]);
  };

  const eventosDelMesEnCurso = () => {
    let eventosMes = misEventos?.filter(
      (ev) =>
        new Date(ev?.fechaInicio).getMonth() + 1 === mesActual.getMonth() + 1
    );
    if (eventosMes) setEventosDelMes(eventosMes);
  };

  useEffect(() => {
    obtenerMesActual();
    eventosDelMesEnCurso();
  }, [mesActual]);

  const avanzarMes = () => {
    const nuevoMes = new Date(mesActual);
    nuevoMes.setMonth(mesActual.getMonth() + 1);
    setMesActual(nuevoMes);
  };

  const retrocederMes = () => {
    const nuevoMes = new Date(mesActual);
    nuevoMes.setMonth(mesActual.getMonth() - 1);
    setMesActual(nuevoMes);
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
    <div className="w-[100%] bg-white h-[746px] mt-[16px] rounded-t-[10px] border border-zinc-200">
      <div className={`flex items-center px-4 py-5 justify-between ${!eventosDelMes.length && "border-b border-b-zinc-200"}`}>
        <div className="flex gap-4 w-[30%]">
          <div className="w-[70%]">
            <span className="text-[#23254C] text-[24px] font-semibold pl-1">
              {meses}
            </span>
          </div>
          <div className="flex gap-2 w-[30%]">
            <button
              onClick={retrocederMes}
              className="border w-[36px] h-[36px] bg-white flex items-center justify-center rounded"
            >
              {arrowPrev}
            </button>
            <button
              onClick={avanzarMes}
              className="border w-[36px] h-[36px] bg-white flex items-center justify-center rounded"
            >
              {arrowNext}
            </button>
          </div>
        </div>
        <div>
          <button className="w-[95px] h-[36px] text-[#23254C] text-[14px] border gap-2 rounded-[32px] flex items-center justify-center">
            <p className="font-semilbold">Filtrar</p>
            <span>{filterIcon}</span>
          </button>
        </div>
      </div>
      {/* tabla */}
      {eventosDelMes.length ?
        <table className="w-[100%] flex flex-col h-[594px]">
          <thead className="w-[100%] h-[42px]">
            <tr className="flex items-center h-[42px]">
              <th className="text-[#494949] w-[20%] text-[12px] font-normal border-b-[1px] px-6 py-5 text-left">
                Club
              </th>
              <th className="text-[#494949] w-[15%] text-[12px] font-normal border-b-[1px] px-6 py-5 text-left">
                Fecha
              </th>
              <th className="text-[#494949] w-[10%] text-[12px] font-normal border-b-[1px] px-6 py-5 text-left">
                Hora
              </th>
              <th className="text-[#494949] w-[35%] text-[12px] font-normal border-b-[1px] px-6 py-5 text-left">
                Dirección
              </th>
              <th className="text-[#494949] w-[10%] text-[12px] font-normal border-b-[1px] px-6 py-5 text-left">
                Estado
              </th>
              <th className="text-[#494949] w-[10%] text-[12px] font-normal border-b-[1px] px-6 py-5 text-left">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="w-[100%] min-h-[594px] overflow-y-hidden">
            {eventosDelMes &&
              eventosDelMes?.map((ev, index) => {
                let diaInicio = ev.fechaInicio.split("T")[0].split("-")[2];
                let fechaFin = new Date(ev.fechaFinalizacion);
                let numeroDia = fechaFin.getDate();
                let nombreMes = fechaFin.toLocaleDateString("es-ES", {
                  month: "long",
                });
                let finalizacion = numeroDia + " " + nombreMes;

                const estadoDelEvento = () => {
                  if (ev.estado === "Progreso") return "En curso";
                  if (ev.estado === "Pendiente") return "Próximo";
                  if (ev.estado === "Pasado") return "Finalizado";
                };

                //styles para el estado del evento
                const estado = estadoDelEvento();
                const getEstadoStyles = (estado) => {
                  switch (estado) {
                    case "En curso":
                      return "bg-green-50 text-teal-800";
                    case "Próximo":
                      return "bg-violet-50 text-violet-700";
                    case "Finalizado":
                      return "bg-red-50 text-red-600";
                    default:
                      return "";
                  }
                };

                return (
                  <tr key={index} className="flex items-start h-[92px]">
                    <th className="text-[#191720] w-[23.48%] text-[12px] border-b-[1px] px-6 py-5 h-[92px] flex items-center">
                      <div className="flex gap-2.5 items-center">
                        <div className="bg-zinc-100 rounded-full p-1.5">
                          {clubIcon}
                        </div>
                        <div className="flex flex-col items-start">
                          <p className="text-zinc-900 text-left text-sm font-bold font-Lato leading-tight">
                            {ev.clubesPatrocinadores[0]}
                          </p>
                          <p className="text-zinc-600 text-left text-xs font-normal font-Lato leading-[18px]">
                            {ev.emailContacto}
                          </p>
                        </div>
                      </div>
                    </th>
                    <th className="text-[#23254C] w-[16.23%] text-base border-b-[1px] px-6 py-5 h-[92px] leading-normal font-normal font-lato flex items-center">
                      {diaInicio} al {finalizacion}
                    </th>
                    <th className="text-[#23254C] w-[13.29%] text-base font-normal border-b-[1px] px-6 py-5 h-[92px] leading-normal flex items-center">
                      {ev.horaInicio}
                    </th>
                    <th className="text-[#23254C] w-[35.45%] text-base font-normal border-b-[1px] px-6 py-5 text-left leading-normal h-[92px] flex items-center">
                      {ev.ubicacion}
                    </th>
                    <th className="w-[23.08%] text-[12px] border-b-[1px] px-6 py-5 text-left h-[92px] flex items-center justify-between">
                      <button
                        className={`w-[72px] h-[24px]  rounded-[32px]  ${getEstadoStyles(
                          estado
                        )}`}
                      >
                        {estadoDelEvento()}
                      </button>

                      <button
                        onClick={() => {
                          eventDetails(ev);
                          setModalCancelacion(true)
                        }}
                        className={`${ev.estado === "Pasado" && "bg-zinc-100 text-stone-400 border-transparent"
                          } bg-white text-red-600  w-[92px] h-[36px] rounded border border-red-500 text-sm font-bold font-lato`}
                      // disabled={ev.estado === "Pasado" ? true : false}
                      >
                        No asistiré
                      </button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
        :
        <EmptyState />}
      <Pagination />
    </div>
  );
};

export default MisEventosFotografo