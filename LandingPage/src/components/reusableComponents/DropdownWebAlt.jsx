import React, { useState } from "react";
import CustomToggle from "./CustomToggle";

const DropdownWebAlt = ({ options, selectedOption, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsToggled((previousState) => !previousState);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-start relative">
      <div
        className="flex flex-row bg-zinc-100 gap-2 max-w-[180px] h-[25px] justify-between p-1.5 rounded-2xl items-center hover:cursor-pointer"
        onClick={toggleDropdown}
      >
        <p
          className={`font-primary text-base font-normal whitespace-nowrap leading-6  ${
            options.includes(selectedOption)
              ? "text-[#23254C]"
              : "text-gray-400"
          }`}
        >
          {selectedOption}
        </p>
        <CustomToggle onToggle={toggleDropdown} value={isToggled} />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 flex bg-white mt-2.5 shadow-md max-h-[180px] z-30 w-fit border border-stone-300 rounded">
          <div className="overflow-y-auto w-full hover:cursor-pointer flex flex-col gap-2 justify-start items-start">
            {options.map((option) => (
              <div
                key={option}
                className="font-primary bg-white leading-5 px-2.5 py-2 text-[#23254C] "
                onClick={() => handleOptionClick(option)}
              >
                <p className="rounded-2xl bg-zinc-100 px-3 py-2.5 text-sm font-normal">
                  {option}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWebAlt;
