import { format, parse } from "date-fns";
import React from "react";
import esLocale from "date-fns/locale/es";

const ContentCardEditInscription = ({
  publicado,
  fechaFinInscripcion,
  fechaInicioInscripcion,
}) => {
  // Parsea las fechas
  const fechaInicioParsed = parse(
    fechaInicioInscripcion,
    "dd/MM/yyyy",
    new Date()
  );
  const fechaFinParsed = parse(fechaFinInscripcion, "dd/MM/yyyy", new Date());

  // Formatea las fechas en el nuevo formato
  const fechaInicioFormateada = format(fechaInicioParsed, "'Del' d 'AL' ", {
    locale: esLocale,
  });
  const fechaFinFormateada = format(fechaFinParsed, "d MMMM", {
    locale: esLocale,
  });
  
  const fechaFormateada = `${fechaInicioFormateada} ${fechaFinFormateada}`;

  return (
    <div className="w-[207px] h-16 flex-col justify-start items-start gap-4 inline-flex">
      <div className="justify-start items-start inline-flex">
        <div
          className={`pl-2 pr-2.5 py-0.5 ${
            publicado ? "bg-green-50" : "bg-zinc-100"
          } rounded-2xl justify-center items-center gap-1.5 flex`}
        >
          <div className="w-2 h-2 relative">
            <div
              className={`w-1.5 h-1.5 left-[1px] top-[1px] absolute ${
                publicado ? "bg-teal-800" : "bg-gray-800"
              }  rounded-full`}
            />
          </div>
          <div
            className={`text-center ${
              publicado ? "text-teal-800" : "text-indigo-950"
            } text-sm font-bold font-lato leading-tight`}
          >
            {publicado ? "Inscripciones abiertas" : "Inscripciones sin abrir"}
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="calendar-empty-alt">
            <path
              id="calendar-empty-alt_2"
              d="M15.5 3.125H14.4583V2.5C14.4583 2.155 14.1783 1.875 13.8333 1.875C13.4883 1.875 13.2083 2.155 13.2083 2.5V3.125H7.79167V2.5C7.79167 2.155 7.51167 1.875 7.16667 1.875C6.82167 1.875 6.54167 2.155 6.54167 2.5V3.125H5.5C3.485 3.125 2.375 4.235 2.375 6.25V15C2.375 17.015 3.485 18.125 5.5 18.125H15.5C17.515 18.125 18.625 17.015 18.625 15V6.25C18.625 4.235 17.515 3.125 15.5 3.125ZM5.5 4.375H6.54167V5C6.54167 5.345 6.82167 5.625 7.16667 5.625C7.51167 5.625 7.79167 5.345 7.79167 5V4.375H13.2083V5C13.2083 5.345 13.4883 5.625 13.8333 5.625C14.1783 5.625 14.4583 5.345 14.4583 5V4.375H15.5C16.8142 4.375 17.375 4.93583 17.375 6.25V6.875H3.625V6.25C3.625 4.93583 4.18583 4.375 5.5 4.375ZM15.5 16.875H5.5C4.18583 16.875 3.625 16.3142 3.625 15V8.125H17.375V15C17.375 16.3142 16.8142 16.875 15.5 16.875Z"
              fill="#BEBDBD"
            />
          </g>
        </svg>
        <div className="text-indigo-950 text-base font-normal font-lato leading-normal">
          {fechaFormateada}{" "}
        </div>
      </div>
    </div>
  );
};

export default ContentCardEditInscription;
