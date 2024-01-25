import React from "react";

const NoEditableFormProofs = ({
  categoria,
  altura,
  definicion,
  caballos,
  articulo,
  arancelInscripcion,
  observaciones,
  tipoPrueba,
  dia,
  hora,
  id,
}) => {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const day = date.getDate() +1;
    const month = date.getMonth() + 1;

    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}`;

    return formattedDate;
  };

  return (
    <div className="flex flex-row w-full items-center mb-5 ">
      <div className="flex flex-col gap-1 p-4 basis-[100px] justify-start">
        <div className="flex">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="calendar-empty-alt">
              <path
                id="calendar-empty-alt_2"
                d="M12.5 2.58789H11.6667V2.08789C11.6667 1.81189 11.4427 1.58789 11.1667 1.58789C10.8907 1.58789 10.6667 1.81189 10.6667 2.08789V2.58789H6.33333V2.08789C6.33333 1.81189 6.10933 1.58789 5.83333 1.58789C5.55733 1.58789 5.33333 1.81189 5.33333 2.08789V2.58789H4.5C2.888 2.58789 2 3.47589 2 5.08789V12.0879C2 13.6999 2.888 14.5879 4.5 14.5879H12.5C14.112 14.5879 15 13.6999 15 12.0879V5.08789C15 3.47589 14.112 2.58789 12.5 2.58789ZM4.5 3.58789H5.33333V4.08789C5.33333 4.36389 5.55733 4.58789 5.83333 4.58789C6.10933 4.58789 6.33333 4.36389 6.33333 4.08789V3.58789H10.6667V4.08789C10.6667 4.36389 10.8907 4.58789 11.1667 4.58789C11.4427 4.58789 11.6667 4.36389 11.6667 4.08789V3.58789H12.5C13.5513 3.58789 14 4.03656 14 5.08789V5.58789H3V5.08789C3 4.03656 3.44867 3.58789 4.5 3.58789ZM12.5 13.5879H4.5C3.44867 13.5879 3 13.1392 3 12.0879V6.58789H14V12.0879C14 13.1392 13.5513 13.5879 12.5 13.5879Z"
                fill="#494949"
              />
            </g>
          </svg>
          <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px] ml-2">
            {formatDate(dia)}
          </p>
        </div>
        <div className="flex">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="clock">
              <path
                id="clock_2"
                d="M8.4987 0.920898C4.5467 0.920898 1.33203 4.13557 1.33203 8.08757C1.33203 12.0396 4.5467 15.2542 8.4987 15.2542C12.4507 15.2542 15.6654 12.0396 15.6654 8.08757C15.6654 4.13557 12.4507 0.920898 8.4987 0.920898ZM8.4987 14.2542C5.09803 14.2542 2.33203 11.4882 2.33203 8.08757C2.33203 4.6869 5.09803 1.9209 8.4987 1.9209C11.8994 1.9209 14.6654 4.6869 14.6654 8.08757C14.6654 11.4882 11.8994 14.2542 8.4987 14.2542ZM10.8521 9.73421C11.0474 9.92955 11.0474 10.2462 10.8521 10.4416C10.7547 10.5389 10.6267 10.5882 10.4987 10.5882C10.3707 10.5882 10.2427 10.5396 10.1453 10.4416L8.14535 8.44157C8.05135 8.34757 7.9987 8.22022 7.9987 8.08822V4.75488C7.9987 4.47888 8.2227 4.25488 8.4987 4.25488C8.7747 4.25488 8.9987 4.47888 8.9987 4.75488V7.88086L10.8521 9.73421Z"
                fill="#494949"
              />
            </g>
          </svg>
          <p className="text-zinc-700 text-xs font-normal font-primary ml-2 leading-[18px]">
            {hora}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4 basis-[126px] justify-start ">
        {categoria.map((cat) => {
          return (
            <p
              key={cat}
              className="text-zinc-700 text-xs font-normal font-primary leading-[18px]"
            >
              {cat}
            </p>
          );
        })}
      </div>
      <div className="flex p-4 basis-[91px] justify-start">
        <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px]">
          {tipoPrueba}
        </p>
      </div>
      <div className="flex p-4 basis-[100px] justify-start">
        <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px]">
          {altura}
        </p>
      </div>
      <div className="flex p-4 basis-[125px] justify-start">
        <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px]">
          {definicion}
        </p>
      </div>
      <div className="flex pl-4 basis-[110px] justify-start ">
        
        <p className="text-zinc-700 text-xs font-semibold font-primary leading-[18px]">
          S.L
        </p>
      </div>
      
      <div className="flex p-4 basis-[105px] justify-start">
        <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px]">
          {articulo}
        </p>
      </div>
      <div className="flex p-4 basis-[110px] justify-start">
        <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px]">
          $ {arancelInscripcion}
        </p>
      </div>
      <div className="flex p-4 basis-[95px] justify-start">
        <p className="text-zinc-700 text-xs font-semibold font-primary leading-[18px]">
          Ingresar
        </p>
      </div>
      <div className="flex flex-col p-4 ">
        <p className="text-zinc-700 text-xs font-semibold font-primary leading-[18px]">
          Ingresar
        </p>
        {/* <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
          
        </p> */}
      </div>
      <div className="flex p-4 ">
        <p className="text-zinc-700 text-xs font-normal font-primary leading-[18px]">
          {observaciones}
        </p>
      </div>
    </div>
  );
};

export default NoEditableFormProofs;
