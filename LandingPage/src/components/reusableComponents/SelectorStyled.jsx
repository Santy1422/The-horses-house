import React, { useState } from "react";

const SelectorStyled = ({ optionDefault, options, setValue }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-[51px] h-[22px] justify-center absolute items-end flex flex-col">
      <div
        className="pl-2.5 pr-2 py-0.5 bg-zinc-100 rounded-2xl justify-center items-center gap-1 flex"
        onClick={() => setisOpen(!isOpen)}
      >
        <p className="text-center whitespace-nowrap text-indigo-950 text-[12px] font-normal font-lato leading-[18px]">
          {optionDefault}
        </p>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="angle-down">
            <path
              id="angle-down_2"
              d="M6.64442 8.46327C6.54842 8.46327 6.45241 8.42678 6.37941 8.35328L2.87941 4.85328C2.73291 4.70678 2.73291 4.46927 2.87941 4.32277C3.02591 4.17627 3.26342 4.17627 3.40992 4.32277L6.64491 7.55775L9.87989 4.32277C10.0264 4.17627 10.2639 4.17627 10.4104 4.32277C10.5569 4.46927 10.5569 4.70678 10.4104 4.85328L6.91041 8.35328C6.83641 8.42678 6.74042 8.46327 6.64442 8.46327Z"
              fill="#23254C"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center relative bottom-[-20px]">
        <ul className={`dropdown-menu ${isOpen ? "block" : "hidden"}`}>
          {options.map((tipo, index) => (
            <li
              key={index}
              className="dropdown-item pl-2.5 pr-2 py-0.5 justify-center items-center gap-1 flex"
              onClick={() => setValue(tipo)}
            >
              {tipo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectorStyled;
