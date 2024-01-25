import React, { useState, useEffect } from "react";
import { clubIconCalendar, arrowNext, arrowPrev, CardGpsHubicationIcon } from "@/iconos/icons";

const VistaCalendario = ({
  selectedDate,
  handleEventstoShowByMonth,
  events,
}) => {
  const [currentDate, setCurrentDate] = useState(selectedDate);

  useEffect(() => {
    setCurrentDate(selectedDate);
    handleEventstoShowByMonth();
  }, [selectedDate]);

  const nextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const daysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const dayNames = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  return (
    <div className="bg-white w-[100%] mt-4 rounded-[10px] border overflow-hidden">
      <div className="flex items-center gap-4 w-full p-4 rounded-[10px]">
        <p className="ml-7 text-[#23254C] text-[24px] w-[200px] text-center font-semibold">
          {`${currentDate.toLocaleString("default", { month: "long" }).charAt(0).toUpperCase()}${currentDate.toLocaleString("default", { month: "long" }).slice(1).toLowerCase()} ${currentDate.getFullYear()}`}
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="border w-9 h-9 rounded-[4px] flex items-center justify-center" onClick={prevMonth}>
            {arrowPrev}
          </button>
          <button className="border w-9 h-9 rounded-[4px] flex items-center justify-center" onClick={nextMonth}>
            {arrowNext}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 border border-x-transparent">
        {dayNames.map((day, index) => (
          <div
            className={`w-[150.49px] h-[40px] flex items-center justify-center text-zinc-700 text-xs font-normal font-Lato leading-[18px] ${index === 0 && "border-l-transparent"
              } border-l`}
            key={`day-${index}`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border">
        {[...Array(firstDayOfMonth()).keys()].map((_, index) => (
          <div
            className={`w-[full] h-[168px] border-b border-r bg-gray-50`}
            key={`empty-${index}`}
          />
        ))}

        {[...Array(daysInMonth()).keys()].map((day, index) => {
          const matchingEvents = events.filter((ev) => {
            const eventStartDate = new Date(ev.fechaInicio);
            const eventEndDate = new Date(ev.fechaFinalizacion);

            return (
              index + 1 >= eventStartDate.getDate() &&
              index + 1 <= eventEndDate.getDate() &&
              currentDate.getMonth() === eventStartDate.getMonth()
            );
          });

          return (
            <div
              className={`relative w-100% h-[168px] z-5 flex flex-col justify-start p-1 text-[12px] text-zinc-700 text-xs font-normal font-Lato leading-[18px]`}
              key={`day-${index + 1}`}
            >
              <div className="bg-white w-[100%] h-11 text-center top-1 p-2">
                {index + 1}
              </div>

              {matchingEvents.map((ev, eventIndex) => {
                const { fechaInicio, fechaFinalizacion, estado, nombreEvento, clubesPatrocinadores, ubicacion } = ev;
                const eventStartDate = new Date(fechaInicio);
                const eventEndDate = new Date(fechaFinalizacion);
                const eventDay = eventStartDate.getDate();
                const isStartDay = index + 1 === eventDay;
                const isEndDay = index + 1 === eventEndDate.getDate();
                const interval = [...Array(daysInMonth()).keys()].slice(eventDay + 1, eventEndDate.getDate());
                const length = (interval.length / daysInMonth()) * 100;
                const isInterval = interval.some((el) => el === index + 1);

                const estadoDelEvento = () => {
                  if (estado === "Progreso") return "En curso";
                  if (estado === "Pendiente") return "Próximo";
                  if (estado === "Pasado") return "Finalizado";
                };

                const estadoStyles = {
                  "En curso": "bg-[#1C694E]-50 text-[#1C694E]",
                  "Próximo": "bg-[#4E3B8E]-50 text-[#4E3B8E]",
                  "Finalizado": "text-red-600 bg-red-50",
                };

                const estadoEvento = estadoDelEvento();

                return (
                  <>
                    {isStartDay && (
                      <div
                        key={`event-${eventIndex}`}
                        className={`absolute px-3 py-1 z-100 bottom-0 w-full ${estadoStyles[estadoEvento]} rounded-l overflow-visible`}
                      >
                        <p className={`w-fit py-1 px-2.5 rounded-2xl z-100 text-center font-lato text-sm font-bold leading-3 justify-stretch`}>
                          {estadoDelEvento()}
                        </p>

                        <div className="flex flex-row my-2">
                          <div className="w-8 h-8 gap-2 rounded-full ">
                            {clubIconCalendar}
                          </div>
                          <p className={`${estadoStyles[estadoEvento]} w-full relative z-50 text-[10px] font-lato font-semibold`}>
                            {`${nombreEvento} - `}
                            <span className="font-normal">{clubesPatrocinadores[0]}</span>
                          </p>
                        </div>

                        <div className="flex flex-row items-center w-[200%] z-200 h-8">
                          <div className="w-8 h-8 gap-2">
                            {CardGpsHubicationIcon}
                          </div>
                          <p className={`${estadoStyles[estadoEvento]} z-200 font-lato text-[10px]`}>
                            {ubicacion}
                          </p>
                        </div>
                      </div>
                    )}

                    {isInterval && (
                      <div
                        key={`event-${eventIndex}`}
                        className={`absolute bottom-0 h-[125px] z-10 w-full ${estadoStyles[estadoEvento]}`}
                      ></div>
                    )}

                    {isEndDay && (
                      <div
                        key={`event-${eventIndex}`}
                        style={{
                          width: `${length}%`,
                        }}
                        className={`absolute bottom-0 h-[125px] z-10 rounded-r ${estadoStyles[estadoEvento]}`}
                      ></div>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VistaCalendario;
