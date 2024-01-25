import { format, parse, parseISO } from "date-fns";
import esLocale from "date-fns/locale/es";
import React from "react";

const ContentCardEditTimeEvent = ({
  fechaFin,
  fechaInicio,
  horaInicio,
  ubicacion,
}) => {
  
  // Parsea las fechas
  const fechaInicioParsed = parse(fechaInicio, "dd/MM/yyyy", new Date());
  const fechaFinParsed = parse(fechaFin, "dd/MM/yyyy", new Date());

  // Formatea las fechas en el nuevo formato
  const fechaInicioFormateada = format(fechaInicioParsed, "'Del' dd 'AL' ", {
    locale: esLocale,
  });
  const fechaFinFormateada = format(fechaFinParsed, "dd 'de' MMMM", {
    locale: esLocale,
  });

  const fechaFormateada = `${fechaInicioFormateada} ${fechaFinFormateada}`;

  return (
    <div className="flex-col justify-start items-start gap-8 flex py-0.5">
      <div className="flex-col justify-center items-start gap-5 flex">
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
          <div className="grow shrink basis-0 text-indigo-950 text-base font-normal font-lato leading-normal">
            {fechaFormateada}{" "}
          </div>
        </div>
        <div className="justify-start items-center gap-1.5 inline-flex">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="clock">
              <path
                id="clock_2"
                d="M10.5013 1.04199C5.5613 1.04199 1.54297 5.06033 1.54297 10.0003C1.54297 14.9403 5.5613 18.9587 10.5013 18.9587C15.4413 18.9587 19.4596 14.9403 19.4596 10.0003C19.4596 5.06033 15.4413 1.04199 10.5013 1.04199ZM10.5013 17.7087C6.25047 17.7087 2.79297 14.2512 2.79297 10.0003C2.79297 5.74949 6.25047 2.29199 10.5013 2.29199C14.7521 2.29199 18.2096 5.74949 18.2096 10.0003C18.2096 14.2512 14.7521 17.7087 10.5013 17.7087ZM13.443 12.0586C13.6872 12.3028 13.6872 12.6987 13.443 12.9428C13.3213 13.0645 13.1613 13.1261 13.0013 13.1261C12.8413 13.1261 12.6813 13.0653 12.5596 12.9428L10.0596 10.4428C9.94211 10.3253 9.8763 10.1661 9.8763 10.0011V5.83447C9.8763 5.48947 10.1563 5.20947 10.5013 5.20947C10.8463 5.20947 11.1263 5.48947 11.1263 5.83447V9.74194L13.443 12.0586Z"
                fill="#BEBDBD"
              />
            </g>
          </svg>
          <div className="text-indigo-950 text-base font-normal font-lato leading-normal">
            {horaInicio}
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-1.5 inline-flex">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="location-pin">
              <path
                id="location-pin_2"
                d="M10.4987 1.875C6.47786 1.875 3.20703 5.14583 3.20703 9.16667C3.20703 13.4317 7.12119 16.0166 9.71119 17.7275L10.152 18.02C10.257 18.09 10.3779 18.125 10.4987 18.125C10.6195 18.125 10.7404 18.09 10.8454 18.02L11.2862 17.7275C13.8762 16.0166 17.7904 13.4317 17.7904 9.16667C17.7904 5.14583 14.5195 1.875 10.4987 1.875ZM10.5979 16.6842L10.4987 16.7501L10.3995 16.6842C7.8912 15.0275 4.45703 12.7592 4.45703 9.16667C4.45703 5.835 7.16703 3.125 10.4987 3.125C13.8304 3.125 16.5404 5.835 16.5404 9.16667C16.5404 12.7592 13.1054 15.0283 10.5979 16.6842ZM10.4987 6.45833C9.00536 6.45833 7.79036 7.67333 7.79036 9.16667C7.79036 10.66 9.00536 11.875 10.4987 11.875C11.992 11.875 13.207 10.66 13.207 9.16667C13.207 7.67333 11.992 6.45833 10.4987 6.45833ZM10.4987 10.625C9.69453 10.625 9.04036 9.97083 9.04036 9.16667C9.04036 8.3625 9.69453 7.70833 10.4987 7.70833C11.3029 7.70833 11.957 8.3625 11.957 9.16667C11.957 9.97083 11.3029 10.625 10.4987 10.625Z"
                fill="#BEBDBD"
              />
            </g>
          </svg>
          <div className="w-[272.77px] text-indigo-950 text-base font-normal font-lato leading-normal">
            {ubicacion}
          </div>
        </div>
      </div>
      <div className="self-stretch h-[134px] flex-col justify-start items-start gap-[6.42px] flex">
        <div className="w-[298.77px] h-[134px] relative">
          <div className="z-10 left-0 top-0 absolute rounded-lg border border-black border-opacity-20">
        <iframe
                loading="lazy"
            width="100%"
            height="100%"
            title="map"
            className="z-30 rounded-lg"
            src={`https://www.google.com/maps/embed/v1/place?q=${ubicacion}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          />
          </div>

          {/* <img
            className="w-[298.77px] h-[134px] left-0 top-0 absolute rounded-lg border border-black border-opacity-20"
            src="/img/ubication-img.png"
          />
          <div className="w-[22.47px] h-[42.53px] left-[267.37px] top-[81.84px] absolute">
            <div className="w-[22.47px] h-[42.53px] left-0 top-0 absolute bg-white rounded-sm shadow" />
            <img
              className="w-2 h-2 left-[7.22px] top-[6.42px] absolute"
              src="https://via.placeholder.com/8x8"
            />
            <img
              className="w-2 h-[1.60px] left-[7.22px] top-[31.29px] absolute"
              src="https://via.placeholder.com/8x2"
            />
            <div className="w-4 h-[0.80px] left-[3.21px] top-[20.86px] absolute bg-neutral-200" />
          </div>
          <div className="w-[19.26px] h-[25.68px] left-[130.13px] top-[56.17px] absolute flex-col justify-center items-center inline-flex">
            <div className="w-[19.26px] h-[25.68px] relative flex-col justify-start items-start flex">
              <div className="w-[19.26px] h-[25.68px] relative">
                <div className="w-[6.42px] h-[3.21px] left-[6.42px] top-[21.66px] absolute bg-black bg-opacity-10 rounded-full blur-[1.60px]" />
                <img
                  className="w-4 h-[20.86px] left-[1.60px] top-[1.61px] absolute border border-white"
                  src="https://via.placeholder.com/16x21"
                />
              </div>
              <div className="w-[6.42px] h-[6.42px] bg-black bg-opacity-40 rounded-full" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContentCardEditTimeEvent;
