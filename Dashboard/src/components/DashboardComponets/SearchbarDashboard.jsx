import { useState } from "react";


const SearchBarDashboard = ({ setSearchBarString, handleSearch}) => {
  const [onChange, setOnChange] = useState('')

  const handleOnChange = (e) => {
    const searchString = e.target.value
    setOnChange(searchString)

    setTimeout(() => {
      setSearchBarString(searchString);
    }, 2000);
   };
   
  //  const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     // Si la tecla presionada es "Enter", realiza la búsqueda
  //     handleSearch()
  //   }
  // };




  return (
    <div className="w-80 flex-col justify-start items-start gap-1.5 inline-flex">
      <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
        <div className="self-stretch px-3.5 py-2.5 bg-white rounded shadow border border-black border-opacity-20 justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Basic/search">
                <path
                  id="Icon"
                  d="M18 17.9902L14.375 14.3652M16.3333 9.6569C16.3333 13.3388 13.3486 16.3236 9.66667 16.3236C5.98477 16.3236 3 13.3388 3 9.6569C3 5.975 5.98477 2.99023 9.66667 2.99023C13.3486 2.99023 16.3333 5.975 16.3333 9.6569Z"
                  stroke="#BEBDBD"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <input
              value={onChange}
              type="text"
              placeholder="Buscar"
              className="placeholder-slate-500 focus:border-transparent focus:outline-none text-neutral-500 text-base font-normal font-lato leading-normal"
              onChange={(e) => handleOnChange(e)}
              // onKeyPress={(e) => handleKeyPress(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarDashboard;
