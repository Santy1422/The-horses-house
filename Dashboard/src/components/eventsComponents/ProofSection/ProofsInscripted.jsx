import { useEffect, useState } from "react";
import ProofsInscriptedList from "./ProofsInscriptedList";
import { getPruebaInscriptos } from "../../../../peticiones/event";

// const ProofsInscripted = ({pruebaID ,  inscriptos, numeroDeVallas1, numeroDeVallas2, tiempoAcordado1, tiempoAcordado2}) => {
const ProofsInscripted = ({
  id,
  numeroDeVallas1,
  numeroDeVallas2,
  tiempoAcordado1,
  tiempoAcordado2,
}) => {
  const [inscriptos, setInscriptos] = useState([]);

  const traerIncriptos = async () => {
    await getPruebaInscriptos({
      success: async (v) => {
        setInscriptos(v.inscriptos);
      },
      error: (e) => console.log(e),
      loading: (l) => console.log(l),
      id,
    });
  };

  useEffect(() => {
    traerIncriptos();
  }, [id]);

  console.log("ProofsInscripted", inscriptos);
  return (
    <>
      <div className="main container">
        {/* Titulo */}
        <div className="tituloOredenar flex flex-row justify-between h-10">
          <div className="title flex flex-row items-center hover:cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M16.5159 6.82789C16.3025 6.82789 16.0892 6.90953 15.9267 7.07203L10.6825 12.3162L5.43839 7.07203C5.11255 6.7462 4.58583 6.7462 4.26 7.07203C3.93417 7.39786 3.93417 7.92458 4.26 8.25042L10.0933 14.0838C10.4192 14.4096 10.9459 14.4096 11.2717 14.0838L17.1051 8.25042C17.4309 7.92458 17.4309 7.39786 17.1051 7.07203C16.9426 6.90953 16.7292 6.82789 16.5159 6.82789Z"
                fill="#23254C"
              />
            </svg>
            <div className="labelTotal font-primary font-normal leading-5 text-sm text-[#353535] ml-[10px] mr-[18px]">
              Total de inscriptos
            </div>
            <div className="jinetesTotal font-primary text-sm font-bold text[#23254C]-">
              {inscriptos.length} jinetes
            </div>
          </div>
          {/* <div className="ordenar py-2 px-4 border rounded-full border-[#CCCCCC] flex flex-row justify-center items-center gap-x-2">
                    <div className="ordenar font-primary text-sm font-normal text-[#23254C] hover:cursor-pointer ">Ordenar</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M16.8278 5.81076C16.7183 5.92026 16.5743 5.97573 16.4303 5.97573C16.2863 5.97573 16.1422 5.92101 16.0327 5.81076L13.9928 3.77078V12.9132C13.9928 13.2237 13.7408 13.4757 13.4303 13.4757C13.1198 13.4757 12.8678 13.2237 12.8678 12.9132V3.77151L10.8278 5.81149C10.608 6.03124 10.2518 6.03124 10.032 5.81149C9.81225 5.59174 9.81225 5.23546 10.032 5.01571L13.032 2.01571C13.0838 1.96396 13.1459 1.92281 13.2149 1.89431C13.3522 1.83731 13.5074 1.83731 13.6447 1.89431C13.7137 1.92281 13.776 1.96396 13.8278 2.01571L16.8278 5.01571C17.0475 5.23546 17.0475 5.59101 16.8278 5.81076ZM8.53273 12.5157L6.49275 14.5557V5.41323C6.49275 5.10273 6.24075 4.85073 5.93025 4.85073C5.61975 4.85073 5.36775 5.10273 5.36775 5.41323V14.555L3.32778 12.515C3.10803 12.2952 2.75175 12.2952 2.532 12.515C2.31225 12.7347 2.31225 13.091 2.532 13.3108L5.532 16.3108C5.58375 16.3625 5.64594 16.4037 5.71419 16.4322C5.78244 16.4607 5.85602 16.4757 5.92952 16.4757C6.00302 16.4757 6.07567 16.4607 6.14467 16.4322C6.21367 16.4037 6.27529 16.3625 6.32704 16.3108L9.32704 13.3108C9.54679 13.091 9.54679 12.7347 9.32704 12.515C9.10729 12.2952 8.75248 12.296 8.53273 12.5157Z" fill="#23254C"/>
                    </svg>    
                    </div>
                </div> */}
        </div>
        {/* Titulos de las columnas de la lista */}
        <div className="TituloColumna flex flex-row items-center">
          <div className="labels1 w-[32px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]"></div>
          <div className="labels2 w-[208px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Jinete
          </div>
          <div className="labels3 w-[208px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Caballo
          </div>
          <div className="labels4 w-[83px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Categoria
          </div>
          <div className="labels5 w-[57px]  px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Club
          </div>
          <div className="labels6 w-[104px]  px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Vallas R1
          </div>
          <div className="labels7 w-[108px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Tiempo R1
          </div>
          <div className="labels8 w-[104px]  px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Vallas R2
          </div>
          <div className="labels9 w-[108px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Tiempo R2
          </div>
          <div className="labels10 w-[131px] px-4 py-3 font-primary text-xs leading-[18px] font-normal text-[#494949]">
            Estado
          </div>
        </div>

        {/*Lista dinamica de inscriptos*/}
        {inscriptos?.map((inscripto, index) => {
          return (
            <ProofsInscriptedList
              {...inscripto}
              index={index}
              key={index}
              numeroDeVallas1={numeroDeVallas1}
              numeroDeVallas2={numeroDeVallas2}
              tiempoAcordado1={tiempoAcordado1}
              tiempoAcordado2={tiempoAcordado2}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProofsInscripted;
