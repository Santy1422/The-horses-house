import React from "react";

const FrameInfoContactDelete = ({ nombre, email }) => {
  return (
    <div className="flex items-center justify-between border-[1px] border-gray-300 rounded p-3">
      <div className="flex items-center self-start">
        <div className="flex gap-1 items-center">
          <img className="w-8 h-8" src="/img/avatar4.png" />
          <div className="flex flex-col">
            <p className="w-[174.44px] text-zinc-900 text-sm font-bold font-lato leading-tight">
              {nombre}
            </p>
            <p className="w-[180.96px] text-zinc-600 text-xs font-normal font-lato leading-[18px]">
              {email}
            </p>
          </div>
        </div>
      </div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="times">
          <path
            id="times_2"
            d="M15.9415 14.558C16.1856 14.8021 16.1856 15.198 15.9415 15.4422C15.8198 15.5638 15.6598 15.6255 15.4998 15.6255C15.3398 15.6255 15.1798 15.5647 15.0581 15.4422L10.4998 10.8838L5.94146 15.4422C5.81979 15.5638 5.65979 15.6255 5.49979 15.6255C5.33979 15.6255 5.17979 15.5647 5.05813 15.4422C4.81396 15.198 4.81396 14.8021 5.05813 14.558L9.61646 9.99965L5.05813 5.44134C4.81396 5.19718 4.81396 4.80132 5.05813 4.55715C5.30229 4.31298 5.69813 4.31298 5.9423 4.55715L10.5006 9.11551L15.059 4.55715C15.3031 4.31298 15.699 4.31298 15.9431 4.55715C16.1873 4.80132 16.1873 5.19718 15.9431 5.44134L11.3848 9.99965L15.9415 14.558Z"
            fill="#36363E"
          />
        </g>
      </svg>
    </div>
  );
};

export default FrameInfoContactDelete;
