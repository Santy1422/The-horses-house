import Search from "../reusableComponents/Search";
import DropdownWeb from "../reusableComponents/DropdownWeb";
import { useEffect, useState } from "react";

const Autoridad = ({
  label,
  setValue,
  autoridades,
  cargos,
  autoridadesTotales,
  index,
  setCantidadAutoridad,
  cantidadAutoridad,
}) => {
  const [selectedOption, setSelectedOption] = useState("Seleccionar cargo");
  const [autoridadEnviada, setAutoridadEnviada] = useState({});
  const [nombre, setNombre] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [nombre2, setNombre2] = useState(false)

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setCargo(option);
    setNombre2(!nombre2)
  };
  useEffect(() => {

    setValue(() => [...autoridadesTotales, { nombre: nombre, cargo: cargo }]);
  }, [nombre2]);

  return (
    <div className="main container flex flex-col gap-4 pb-6  ">
      <div className="titulo flex flex-row gap-3 items-center justify-between">
        <div className="titulo font-lato text-lg font-bold leading-6 text-[#23254C] ">
          {label}
        </div>
        <div className="botonSacarAutoridad hover:cursor-pointer w-7 h-7 p-[6.22px] bg-white rounded-[3.11px] border border-red-500 flex justify-center items-center">
          <div
            className="label font-lato text-sm font-bold leading-5 text-[#23254C] "
            onClick={() => {
              setCantidadAutoridad(cantidadAutoridad - 1);
              setValue(autoridadesTotales.filter((aut, i) => i != index));
            }}
          >
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="minus">
                <path id="minus_2" d="M13.0372 8.6442H3.96309C3.60531 8.6442 3.31494 8.35383 3.31494 7.99605C3.31494 7.63827 3.60531 7.3479 3.96309 7.3479H13.0372C13.3949 7.3479 13.6853 7.63827 13.6853 7.99605C13.6853 8.35383 13.3949 8.6442 13.0372 8.6442Z" fill="#FF4136" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Search
        label={"Nombre"}
        placeholder={"Seleccionar autoridad"}
        setValue={setNombre}
        itemsAbuscar={autoridades}
      />
      <DropdownWeb
        label={"Cargo"}
        options={cargos}
        selectedOption={selectedOption}
        onSelect={handleSelectOption}
      />
    </div>
  );
};

export default Autoridad;
