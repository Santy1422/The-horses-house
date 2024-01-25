import SearchBarDashboard from "./SearchbarDashboard";
import { useState } from "react";
import Button from "../reusableComponents/Button";
import { useSelector } from "react-redux";

const FiltrosySearchbar = ({ filterOptions, setFilterOption, setSearchBarString, handleSearch }) => {
  const [showFiltros, setShowFiltros] = useState(false);
  const [filtros, setFiltros] = useState([]);

  const options = [
    "Mis eventos",
    "En curso",
    "Próximos",
    "Finalizados",
    "Concursos",
    "Pasadas",
  ];

  //agregar un filtro
  const handleFiltrosSeleccionados = (f) => {
    if (filtros.includes(f)) return null;
    else {
      setFiltros([...filtros, f]);
      setFilterOption([...filtros, f]);
    }
  };

  //eliminar un filtro
  const handleFilterDelete = (f) => {
    const deletedfiltro = filtros.filter((op) => op !== f);
    setFiltros(deletedfiltro);
    const deletefiltrostate = filterOptions.filter((op) => op !== f);
    setFilterOption(deletefiltrostate);
  };

  return (
    <div className="inline-flex items-center w-[100%] gap-1 ">
      <div className="flex flex-row mt-4 justify-start gap-1.5 w-[75%]">
        {/* BOTON DE FILTROS */}
        <div className="relative flex flex-col">
          <Button
            variant="other-style-alt-2"
            px="px-3.5"
            py="py-2"
            rounded="rounded-[32px]"
            action={() =>
              !showFiltros ? setShowFiltros(true) : setShowFiltros(false)
            }
          >
            <svg
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

            {filtros.length ? (
              <p className="text-indigo-950 text-sm font-normal font-lato leading-tight">
                Más filtros{" "}
              </p>
            ) : (
              <p className="text-indigo-950 text-sm font-normal font-lato leading-tight">
                Filtrar
              </p>
            )}
          </Button>
          {showFiltros ? (
            <div className="absolute z-50 w-[230%] h-auto mt-10  bg-white rounded-sm border border-black border-opacity-20 shadow flex flex-col">
              {options &&
                options.map((op, i) => {
                  return (
                    <div key={i} className="hover:bg-zinc-100 cursor-pointer w-full h-11 px-3 py-2.5 justify-start items-center gap-2 inline-flex">
                      <p
                        className=" text-indigo-950 text-sm font-normal font-lato leading-tight"
                        onClick={() => handleFiltrosSeleccionados(op)}
                      >
                        {op}
                      </p>
                    </div>
                  );
                })}
            </div>
          ) : null}
        </div>

        <div className="w-auto flex items-center gap-1.5">
          {filtros &&
            filtros.map((f, i) => {
              return (
                <Button
                  variant="other-style-alt-2"
                  px="px-3.5"
                  py="py-2"
                  rounded="rounded-[32px]"
                  action={() => handleFilterDelete(f)}
                  key={i}
                >
                  <p className="text-indigo-950 text-sm font-normal font-lato leading-tight">
                    {f}
                  </p>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="times">
                      <path
                        id="times_2"
                        d="M15.9415 15.0482C16.1856 15.2924 16.1856 15.6882 15.9415 15.9324C15.8198 16.0541 15.6598 16.1157 15.4998 16.1157C15.3398 16.1157 15.1798 16.0549 15.0581 15.9324L10.4998 11.374L5.94146 15.9324C5.81979 16.0541 5.65979 16.1157 5.49979 16.1157C5.33979 16.1157 5.17979 16.0549 5.05813 15.9324C4.81396 15.6882 4.81396 15.2924 5.05813 15.0482L9.61646 10.4899L5.05813 5.93158C4.81396 5.68741 4.81396 5.29155 5.05813 5.04738C5.30229 4.80322 5.69813 4.80322 5.9423 5.04738L10.5006 9.60574L15.059 5.04738C15.3031 4.80322 15.699 4.80322 15.9431 5.04738C16.1873 5.29155 16.1873 5.68741 15.9431 5.93158L11.3848 10.4899L15.9415 15.0482Z"
                        fill="#25314C"
                      />
                    </g>
                  </svg>
                </Button>
              );
            })}
        </div>
      </div>


        <div className="flex mt-4 justify-end w-[25%]">
        <SearchBarDashboard setSearchBarString={setSearchBarString} 
        // handleSearch={handleSearch}
        />
      </div>
    
    

    </div>
  );
};

export default FiltrosySearchbar;
