import React from "react";

const NumericInput = ({ value, setValue, label, width, height }) => {
  return (
    <div className="flex items-center justify-center w-full gap-0.5">
      {label !== "" && (
        <label
          htmlFor="isInput"
          className="text-zinc-700 text-sm font-normal font-lato leading-[18px]"
        >
          {label}
        </label>
      )}
      <div
        className={`p-2 bg-white rounded border border-black border-opacity-20 gap-2 flex items-center justify-center w-full h-[${height}] w-[${width}]`}
      >
        <input
          type="number"
          value={value}
          id="idInput"
          onChange={(e) => setValue(e.target.value)}
          className="outline-none border-none bg-transparent text-zinc-700 text-xs font-normal font-lato w-full appearance-none "
          
        />
      </div>
    </div>
  );
};

export default NumericInput;
