import { useSelector } from "react-redux";
import AllEventList from "./AllEventList";

const AllEvent = ({ handleFilters }) => {
  const eventos = handleFilters();

  
  
  const { loadingAuth, usuarioAuth } = useSelector(
    (state) => state.reducerAuth
  );
  return (
    <div className="border bg-white border-gray-300 rounded-xl flex flex-col w-[100%] h-full">
      <div className="titulosContenedor flex flex-row  pt-3 pl-5 justify-start items-center ">
        <div className="clubes text-xs  leading-5 font-lato font-normal text-[#494949] w-[33%] ">
          Evento
        </div>
        <div className="eventos text-xs leading-5 font-lato font-normal text-[#494949] w-[10%] text-start">
          Tipo
        </div>
        <div className="organizadores text-xs leading-5 font-lato font-normal text-[#494949] w-[14%] text-start">
          Fecha
        </div>
        <div className="estados text-xs leading-5 font-lato font-normal text-[#494949] w-[12%] text-start">
          Autoridades
        </div>
        <div className="participantes text-xs leading-5 font-lato font-normal text-[#494949] w-[12%] text-start">
          Estado
        </div>
        <div className="acerca text-xs leading-5 font-lato font-normal text-[#494949] w-[12%] text-start">
          Inscriptos
        </div>
      </div>
      <div className="eventosContenedor h-full flex flex-col py-4 items-center justify-between">
        <div className="eventos flex flex-col overflow-y-scroll h-[800px] max-h-[800px] min-h-[800px] overflow-scroll w-full px-2">
          {eventos &&
            eventos?.map((ele, i) => (
              <AllEventList key={i} evento={ele} />
            ))}
        </div>
        
        <div className="divisor border border-gray-300 w-[100%] border-b-0"></div>

        <div className="navegarEventos flex flex-row justify-between w-full items-center pt-2 px-5">
          <div className="botonesNavegadorContenedor flex flex-row gap-3">
            <div className="anterior hover:cursor-pointer w-[85px] h-[36px] border border-gray-300 rounded flex justify-center items-center">
              <div className="labelAnterior font-primary text-sm font-normal leading-5 text-[#23254C]">
                Anterior
              </div>
            </div>
            <div className="anterior hover:cursor-pointer w-[85px] h-[36px] border border-gray-300 rounded flex justify-center items-center">
              <div className="labelAnterior font-primary text-sm font-normal leading-5 text-[#23254C]">
                Siguiente
              </div>
            </div>
          </div>
          <div className="numeroPagina font-primary text-sm font-normal left-5 text-[#494949] ">
            Pagina 1 de 10
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvent;
