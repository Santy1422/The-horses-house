import Image from "next/image";
import React, { useState } from "react";
//import SelectDropdown from 'react-native-select-dropdown';
//import ChevronSVG from '../../../assets/icons/ChevronSVG';
//import DefaultAvatarSVG from '../../../assets/icons/DefaultAvatarSVG';

const Dropdown = ({
  options,
  value,
  setValue,
  onlineStatus,
  profilePic,
  defaultPic,
}) => {
  const [selected, setSelected] = useState(value);
  const [divBlue, setDivBlue] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  function IsOnlineIcon() {
    return (
      <div className="w-2 h-2 rounded-full bg-[#5CC941]">
        <div className=" bg-[#5CC941] rounded-full"></div>
      </div>
    );
  }

  // Componente dependiente de la prop se renderiza en el select y en las opciones
  function ButtonIcon(className) {
    if (onlineStatus) {
      return <IsOnlineIcon />;
    }
    if (profilePic) {
      return (
        <Image
          source={require("../../../public/img/minus.png")}
          width={25}
          height={25}
          className={className}
        ></Image>
      );
    }
    if (defaultPic) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="#101828"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    }
  }

  const handleSelect = (event) => {
    const selectedOption = event.target.value;
    setValue(selectedOption);
  };

  return (
    <div className="w-full flex flex-col items-end ">
      <div
        className={`flex flex-col h-auto px-3.5 py-2.5 bg-white border rounded items-end gap-2  w-full ${
          divBlue ? "border-blue-300" : ""
        } ${error ? "border-red-300" : text ? "border-green-300" : ""}`}
      >
        <select
          value={value}
          onChange={handleSelect}
          className="focus:outline-none"
        >
          {options.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
