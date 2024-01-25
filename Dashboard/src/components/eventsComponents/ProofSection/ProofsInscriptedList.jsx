import React, { useState, useEffect } from "react";
import DropdownWebAlt from "@/components/reusableComponents/DropdownWebAlt";
import InputsResultsCustom from "@/components/reusableComponents/InputResultsCustom";
import caballo from "../../images/caballo.png";
import InputsVallas from "../../reusableComponents/InputsVallas";
import { sendResults } from "../../../../peticiones/event";

const faltasOpciones = [
  "Valla 1",
  "Valla 2",
  "Valla 3",
  "Valla 4",
  "Valla 5",
  "Valla 6",
  "Valla 7",
];
const estados = [
  "En Prueba",
  "Eliminado",
  "No participa",
  "Descalificado",
  "Finalizado",
];

const ProofsInscriptedList = ({
  nombreDelCaballo,
  index,
  Jinete,
  clubRepresenta,
  id,
  pruebaId,
  tiempo,
  tiempo2,
  PEncontra,
  faltas,
  faltas2,
  FotoCaballo, //no esta llegando
  jineteLastName,
  emailJinete, // no esta llegando
  categoria,
  numeroDeVallas1,
  numeroDeVallas2,
  tiempoAcordado1,
  tiempoAcordado2,
  vallas,
  vallas2,
}) => {
  const [estado, setEstado] = useState("En competición");
  const [data, setData] = useState({
    categoriaId: null,
    InscriptoId: null,
    vallas: vallas,
    vallas2: vallas2,
    tiempo: tiempo,
    tiempo2: tiempo2,
    tiempoAcordado: null,
    tiempoAcordado2: null,
    estadoCompeticion: 'Finalizado',
  });

  const enviarResultados = () => {
    sendResults({
      data,
      succes: () => console.log("resultados enviados"),
      error: (e) => console.log(e),
      loading: (l) => console.log(l),
    });
  };

  return (
    <div className="main h-full w-full">
      <div className="lista flex flex-col">
        <div className="lineainscripto flex flex-row py-5 items-center border rounded">
          <div className="numero font-primary text-sm font-normal text-[#231D43] basis-[32px] flex justify-center">
            {index + 1}
          </div>
          <div className="jinete flex flex-row basis-[208px] py-5 px-3 gap-x-[10px] items-center">
            <div className="nombreEmail flex flex-col">
              <div className="nombre font-primary text-sm font-bold text-[#191720]">
                {jineteLastName && jineteLastName} {Jinete}
              </div>
              <div className="email font-primary text-xs leading-[18px] font-normal text-[#55565C]">
                {(emailJinete && emailJinete) || "example@thehorseshouse.com"}
              </div>
            </div>
          </div>
          <div className="caballo flex flex-row gap-x-[10px] w-[208px] px-3 items-center ">
            <img
              className="h-12 w-12"
              src={FotoCaballo || caballo?.src}
              alt="Foto del caballo"
            />
            <div className="nombreCaballo font-primary text-xs leading-[18px] text-[#353535] font-normal  ">
              {nombreDelCaballo}
            </div>
          </div>
          <div className="categotia basis-[83px] px-4 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            {categoria && categoria}
          </div>
          <div className="club basis-[57px] px-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            {clubRepresenta?.slice(0, 3)}
          </div>

          <div className="faltasDropdown flex justify-center items-center w-[104px] h-[22px] border-none  ">
            <InputsVallas
              options={numeroDeVallas1 || []}
              value={data.vallas}
              setValue={(text) =>
                setData({
                  ...data,
                  vallas: text,
                  categoriaId: pruebaId,
                  InscriptoId: id,
                  tiempoAcordado: tiempoAcordado1,
                  tiempoAcordado2: tiempoAcordado2,
                })
              }
            />
          </div>

          <div className="tiempo flex flex-row items-center basis-[108px] h-[78px] px-4 py-3">
            <InputsResultsCustom
              setValue={(text) =>
                setData({
                  ...data,
                  tiempo: text,
                  categoriaId: pruebaId,
                  InscriptoId: id,
                  tiempoAcordado: tiempoAcordado1,
                  tiempoAcordado2: tiempoAcordado2,
                })
              }
              value={data.tiempo}
            />
          </div>

          <div className="faltasDropdown flex justify-center items-center w-[104px] h-[22px] border-none  ">
            <InputsVallas
              options={numeroDeVallas2 || []}
              value={data.vallas2}
              setValue={(text) =>
                setData({
                  ...data,
                  vallas2: text,
                  categoriaId: pruebaId,
                  InscriptoId: id,
                  tiempoAcordado: tiempoAcordado1,
                  tiempoAcordado2: tiempoAcordado2,
                })
              }
            />
          </div>

          <div className="tiempo2 flex flex-row basis-[108px] px-4 items-center">
            <InputsResultsCustom
              setValue={(text) =>
                setData({
                  ...data,
                  tiempo2: text,
                  categoriaId: pruebaId,
                  InscriptoId: id,
                  tiempoAcordado: tiempoAcordado1,
                  tiempoAcordado2: tiempoAcordado2,
                })
              }
              value={data.tiempo2}
            />
          </div>

          <div className="estado flex items-center">
            <DropdownWebAlt
              data1={data}
              enviarResultados={enviarResultados}
              actualizarEstado={"actualizarEstado"}
              options={estados}
              selectedOption={estado ? estado : "Seleccionar"}
              onSelect={(option) => setEstado(option)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofsInscriptedList;
