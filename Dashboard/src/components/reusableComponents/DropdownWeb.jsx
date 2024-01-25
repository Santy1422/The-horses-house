import { useState } from "react";
import CustomToggle from "./CustomToggle";

const DropdownWeb = ({ options, selectedOption, onSelect, label, placeholder }) => {
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
    <div className="flex flex-col">
      <p className=" font-lato text-base font-normal leading-6 pb-2 text-[#23254C]">
        {label}
      </p>
      <div
        className=" px-[14px] py-[10px] border border-gray-300 rounded flex flex-row justify-between items-center hover:cursor-pointer h-12"
        onClick={toggleDropdown}
      >
        <p
          className={`font-lato text-base font-normal leading-6  ${
            options?.includes(selectedOption)
              ? "text-[#23254C]"
              : "text-gray-400"
          }`}
        >
          {selectedOption ? selectedOption : placeholder}
        </p>
        <CustomToggle onToggle={toggleDropdown} value={isToggled} />
      </div>
      {isOpen && (
        <div className="flex relative z-50">
          <div className=" overflow-y-auto mt-2 max-h-[200px] border rounded border-gray-300 absolute w-full hover:cursor-pointer bg-white">
            {options?.map((option, index) => (
              <div
                key={index}
                className=" font-lato text-sm font-normal leading-5 text-[#23254C] p-[10px]"
                onClick={() => handleOptionClick(option)}
              >
                <p>{option}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWeb;
