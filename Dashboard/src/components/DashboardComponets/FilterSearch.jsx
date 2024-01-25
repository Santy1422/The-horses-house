

const FilterSearch = () => {
 /*EN PROGRESO, INCOMPLETO*/  
   
    return(
        <>
        <div className="FiltrosYbuscar flex flex-row w-full justify-between">
                <div className="Filtros flex flex-row justify-between gap-3">
                  <div className="botonMisEventos hover:cursor-pointer w-[132px] h-9 flex flex-row py-2 px-[14px] bg-[#23254C] rounded items-center gap-2">
                    <div className="etiqueteMisEventos text-white text-sm font-medium  font-primary leading-5">
                      Mis eventos
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M15.9415 14.5585C16.1856 14.8026 16.1856 15.1985 15.9415 15.4426C15.8198 15.5643 15.6598 15.626 15.4998 15.626C15.3398 15.626 15.1798 15.5651 15.0581 15.4426L10.4998 10.8843L5.94146 15.4426C5.81979 15.5643 5.65979 15.626 5.49979 15.626C5.33979 15.626 5.17979 15.5651 5.05813 15.4426C4.81396 15.1985 4.81396 14.8026 5.05813 14.5585L9.61646 10.0001L5.05813 5.44183C4.81396 5.19767 4.81396 4.8018 5.05813 4.55764C5.30229 4.31347 5.69813 4.31347 5.9423 4.55764L10.5006 9.116L15.059 4.55764C15.3031 4.31347 15.699 4.31347 15.9431 4.55764C16.1873 4.8018 16.1873 5.19767 15.9431 5.44183L11.3848 10.0001L15.9415 14.5585Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="botonMisEventos hover:cursor-pointer w-[132px] h-9 flex flex-row py-2 px-[14px] bg-white rounded border border-gray-300 items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M5.5 2.70825C3.77667 2.70825 2.375 4.10992 2.375 5.83325C2.375 7.55659 3.77667 8.95825 5.5 8.95825C7.22333 8.95825 8.625 7.55659 8.625 5.83325C8.625 4.10992 7.22333 2.70825 5.5 2.70825ZM5.5 7.70825C4.46583 7.70825 3.625 6.86742 3.625 5.83325C3.625 4.79909 4.46583 3.95825 5.5 3.95825C6.53417 3.95825 7.375 4.79909 7.375 5.83325C7.375 6.86742 6.53417 7.70825 5.5 7.70825ZM15.5 11.0416C13.7767 11.0416 12.375 12.4433 12.375 14.1666C12.375 15.8899 13.7767 17.2916 15.5 17.2916C17.2233 17.2916 18.625 15.8899 18.625 14.1666C18.625 12.4433 17.2233 11.0416 15.5 11.0416ZM15.5 16.0416C14.4658 16.0416 13.625 15.2008 13.625 14.1666C13.625 13.1324 14.4658 12.2916 15.5 12.2916C16.5342 12.2916 17.375 13.1324 17.375 14.1666C17.375 15.2008 16.5342 16.0416 15.5 16.0416ZM13 6.45825H18C18.345 6.45825 18.625 6.17825 18.625 5.83325C18.625 5.48825 18.345 5.20825 18 5.20825H13C12.655 5.20825 12.375 5.48825 12.375 5.83325C12.375 6.17825 12.655 6.45825 13 6.45825ZM8 13.5416H3C2.655 13.5416 2.375 13.8216 2.375 14.1666C2.375 14.5116 2.655 14.7916 3 14.7916H8C8.345 14.7916 8.625 14.5116 8.625 14.1666C8.625 13.8216 8.345 13.5416 8 13.5416Z"
                        fill="#231D43"
                      />
                    </svg>
                    <div className="etiqueteMisEventos text-[#231D43] text-sm font-semibold font-primary leading-5">
                      Más filtros
                    </div>
                  </div>
                </div>
                <div className="Buscar w-80 h-11 border rounded border-gray-300 px-[10px] py-[14px] flex flex-row justify-start items-center gap-2">
                  <div className="iconoLupa h-5 w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M18 17.5L14.375 13.875M16.3333 9.16667C16.3333 12.8486 13.3486 15.8333 9.66667 15.8333C5.98477 15.8333 3 12.8486 3 9.16667C3 5.48477 5.98477 2.5 9.66667 2.5C13.3486 2.5 16.3333 5.48477 16.3333 9.16667Z"
                        stroke="#BEBDBD"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="buscar bg-none  outline-none "
                    placeholder="Buscar"
                  />
                </div>
              </div>
        </>
    )
}

export default FilterSearch