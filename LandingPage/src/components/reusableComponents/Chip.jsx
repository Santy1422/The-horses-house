import React from "react";

const Chip = ({ text, i, setValue }) => {
  return (
    <div className="w-[81px] pl-2.5 pr-2 py-0.5 bg-zinc-100 rounded-2xl justify-center items-center gap-1 inline-flex">
      <div className="text-center text-indigo-950 text-[12px] font-normal font-lato leading-[18px]">
        {text}
      </div>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setValue(i)}
      >
        <g id="cancel">
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.8982 3.20141C4.04465 3.05496 4.28209 3.05496 4.42853 3.20141L6.78469 5.55756L9.14084 3.20141C9.28729 3.05496 9.52473 3.05496 9.67118 3.20141C9.81762 3.34785 9.81762 3.58529 9.67118 3.73174L7.31502 6.08789L9.67118 8.44405C9.81762 8.59049 9.81762 8.82793 9.67118 8.97438C9.52473 9.12082 9.28729 9.12082 9.14084 8.97438L6.78469 6.61822L4.42853 8.97438C4.28209 9.12082 4.04465 9.12082 3.8982 8.97438C3.75176 8.82793 3.75176 8.59049 3.8982 8.44405L6.25436 6.08789L3.8982 3.73174C3.75176 3.58529 3.75176 3.34785 3.8982 3.20141Z"
            fill="#23254C"
          />
        </g>
      </svg>
    </div>
  );
};

export default Chip;
