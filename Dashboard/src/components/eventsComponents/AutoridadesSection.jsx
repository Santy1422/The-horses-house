import Button from "@/components/reusableComponents/Button";
import React, { useEffect, useState } from "react";
import MyAuthorities from "./AutoridadesSection/MyAuthorities";
import InputSearch from "@/components/reusableComponents/InputSearch";
import { useEvento } from "@/customHooks/useEvento";
import { updateDataEvent } from "../../../peticiones/event";

const AutoridadesSection = ({ event }) => {
  const { Autoridades, setAutoridades, id } = useEvento(event);

  const sendData = () => {
    try {
      updateDataEvent({
        eventId: id,
        data: {
          autoridadesConcurso: Autoridades,
        },
        succes: () => console.log("200"),
        error: (e) => console.log(e),
        loading: (l) => console.log(l),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendData();
  }, [Autoridades]);

  return (
    <div className="w-[93%] flex flex-col gap-7 border-b border-zinc-100">
      <div className="flex justify-between pt-0.5 items-center">
        <div className="flex gap-4 justify-start items-center">
          <Button
            variant="other-style-alt-2"
            px="px-3.5"
            py="py-2"
            rounded="rounded-[32px]"
            descripcion={"Mas filtros"}
            />            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="sliders-horizontal-alt">
                <path
                  id="sliders-horizontal-alt_2"
                  d="M5.5 3.19824C3.77667 3.19824 2.375 4.59991 2.375 6.32324C2.375 8.04658 3.77667 9.44824 5.5 9.44824C7.22333 9.44824 8.625 8.04658 8.625 6.32324C8.625 4.59991 7.22333 3.19824 5.5 3.19824ZM5.5 8.19824C4.46583 8.19824 3.625 7.35741 3.625 6.32324C3.625 5.28908 4.46583 4.44824 5.5 4.44824C6.53417 4.44824 7.375 5.28908 7.375 6.32324C7.375 7.35741 6.53417 8.19824 5.5 8.19824ZM15.5 11.5316C13.7767 11.5316 12.375 12.9332 12.375 14.6566C12.375 16.3799 13.7767 17.7816 15.5 17.7816C17.2233 17.7816 18.625 16.3799 18.625 14.6566C18.625 12.9332 17.2233 11.5316 15.5 11.5316ZM15.5 16.5316C14.4658 16.5316 13.625 15.6907 13.625 14.6566C13.625 13.6224 14.4658 12.7816 15.5 12.7816C16.5342 12.7816 17.375 13.6224 17.375 14.6566C17.375 15.6907 16.5342 16.5316 15.5 16.5316ZM13 6.94824H18C18.345 6.94824 18.625 6.66824 18.625 6.32324C18.625 5.97824 18.345 5.69824 18 5.69824H13C12.655 5.69824 12.375 5.97824 12.375 6.32324C12.375 6.66824 12.655 6.94824 13 6.94824ZM8 14.0316H3C2.655 14.0316 2.375 14.3116 2.375 14.6566C2.375 15.0016 2.655 15.2816 3 15.2816H8C8.345 15.2816 8.625 15.0016 8.625 14.6566C8.625 14.3116 8.345 14.0316 8 14.0316Z"
                  fill="#231D43"
                />
              </g>
            </svg>
          
          <Button
            variant="other-style-alt-2"
            px="px-3.5"
            py="py-2"
            rounded="rounded-[32px]"
            descripcion={"Ordenar"}
            />            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="sliders-horizontal-alt">
                <path
                  id="sliders-horizontal-alt_2"
                  d="M5.5 3.19824C3.77667 3.19824 2.375 4.59991 2.375 6.32324C2.375 8.04658 3.77667 9.44824 5.5 9.44824C7.22333 9.44824 8.625 8.04658 8.625 6.32324C8.625 4.59991 7.22333 3.19824 5.5 3.19824ZM5.5 8.19824C4.46583 8.19824 3.625 7.35741 3.625 6.32324C3.625 5.28908 4.46583 4.44824 5.5 4.44824C6.53417 4.44824 7.375 5.28908 7.375 6.32324C7.375 7.35741 6.53417 8.19824 5.5 8.19824ZM15.5 11.5316C13.7767 11.5316 12.375 12.9332 12.375 14.6566C12.375 16.3799 13.7767 17.7816 15.5 17.7816C17.2233 17.7816 18.625 16.3799 18.625 14.6566C18.625 12.9332 17.2233 11.5316 15.5 11.5316ZM15.5 16.5316C14.4658 16.5316 13.625 15.6907 13.625 14.6566C13.625 13.6224 14.4658 12.7816 15.5 12.7816C16.5342 12.7816 17.375 13.6224 17.375 14.6566C17.375 15.6907 16.5342 16.5316 15.5 16.5316ZM13 6.94824H18C18.345 6.94824 18.625 6.66824 18.625 6.32324C18.625 5.97824 18.345 5.69824 18 5.69824H13C12.655 5.69824 12.375 5.97824 12.375 6.32324C12.375 6.66824 12.655 6.94824 13 6.94824ZM8 14.0316H3C2.655 14.0316 2.375 14.3116 2.375 14.6566C2.375 15.0016 2.655 15.2816 3 15.2816H8C8.345 15.2816 8.625 15.0016 8.625 14.6566C8.625 14.3116 8.345 14.0316 8 14.0316Z"
                  fill="#231D43"
                />
              </g>
            </svg>
       
        </div>
        <div className="w-[30%] flex-col justify-start items-center gap-1.5 inline-flex">
          <InputSearch placeholder="Buscar" />
        </div>
      </div>
      <div className="contenedorEventos rounded-2xl flex flex-col w-full h-full border border-zinc-100">
        <div className="flex flex-row w-full items-center justify-between border border-zinc-100">
          <div className="w-[57px] h-[42px] px-4 py-3 border-b border-zinc-100" />
          <div className="text-[#494949] text-xs font-normal font-lato leading-[18px] w-[541.50px]">
            Nombre
          </div>
          <div className="text-[#494949] text-xs font-normal font-lato leading-[18px] w-[541.50px]">
            Cargo
          </div>
          <div className="w-[49px] h-[42px] px-4 py-3 border-b border-zinc-100" />
        </div>
        <div className="eventosContenedor h-full flex flex-col pb-4 items-center w-full justify-between ">
          <div className="eventos flex flex-col w-full overflow-y-scroll min-h-[450px]">
            {Autoridades.map((autoridad, index) => {
              if (autoridad.nombre === null) return null;
              return (
                <MyAuthorities
                  key={index}
                  {...autoridad}
                  id={index + 1}
                  setValue={setAutoridades}
                />
              );
            })}
          </div>
          <div className="divisor border border-gray-300 w-full border-b-0"></div>
          <div className="navegarEventos flex flex-row justify-between w-full items-center py-2 px-5">
            <div className="flex flex-row gap-3">
              <Button
                variant="secondary-alt"
                px="px-3.5"
                py="py-2"
                rounded="rounded"
                customStyle="border border-black border-opacity-20"
               descripcion={"Anterior"}
              />
              <Button
                variant="secondary-alt"
                px="px-3.5"
                py="py-2"
                rounded="rounded"
                customStyle="border border-black border-opacity-20"
                descripcion={"Siguiente"}
              />
              
            </div>
            <p className="numeroPagina font-lato text-sm font-normal left-5 text-[#494949] ">
              Pagina 1 de 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoridadesSection;
