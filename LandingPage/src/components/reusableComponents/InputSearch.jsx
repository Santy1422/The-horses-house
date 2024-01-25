import { useState } from "react";

const InputSearch = ({ label = "", placeholder, setValue, itemsAbuscar }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelected = (club) => {
    setSearch(club);
    setValue(club);
  };

  return (
    <div className="main container flex flex-col ">
      <div className="titulo font-lato text-base font-normal leading-6 text-[#23254C]">
        {label}
      </div>
      <div className="buscador flex flex-row gap-2 py-[10px] px-[14px] border border-gray-300 rounded">
        <div className="icono w-5 h-5 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M18 18L14.375 14.375M16.3333 9.66667C16.3333 13.3486 13.3486 16.3333 9.66667 16.3333C5.98477 16.3333 3 13.3486 3 9.66667C3 5.98477 5.98477 3 9.66667 3C13.3486 3 16.3333 5.98477 16.3333 9.66667Z"
              stroke="#BEBDBD"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="buscador w-full">
          <input
            type="text"
            value={search}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            className="w-full outline-0 self-start font-lato text-base font-normal leading-6 text-[#251431]"
          />
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
