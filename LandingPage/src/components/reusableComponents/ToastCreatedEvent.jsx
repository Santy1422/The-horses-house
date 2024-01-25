import React from "react";

const ToastCreatedEvent = ({ variant, close }) => {
  return (
    <div className="w-[93%] p-4 bg-lime-100 rounded-lg border border-lime-500 justify-start items-start gap-3 inline-flex">
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="check-circle">
          <path
            id="check-circle_2"
            d="M10.5013 1.04199C5.5613 1.04199 1.54297 5.06116 1.54297 10.0003C1.54297 14.9395 5.5613 18.9587 10.5013 18.9587C15.4413 18.9587 19.4596 14.9395 19.4596 10.0003C19.4596 5.06116 15.4413 1.04199 10.5013 1.04199ZM10.5013 17.7087C6.25047 17.7087 2.79297 14.2512 2.79297 10.0003C2.79297 5.74949 6.25047 2.29199 10.5013 2.29199C14.7521 2.29199 18.2096 5.74949 18.2096 10.0003C18.2096 14.2512 14.7521 17.7087 10.5013 17.7087ZM13.8596 7.61365C14.1038 7.85781 14.1038 8.25368 13.8596 8.49784L9.97047 12.387C9.84881 12.5087 9.68881 12.5703 9.52881 12.5703C9.36881 12.5703 9.20881 12.5095 9.08714 12.387L7.14297 10.4428C6.8988 10.1987 6.8988 9.8028 7.14297 9.55863C7.38714 9.31447 7.78297 9.31447 8.02714 9.55863L9.52965 11.0612L12.9763 7.61451C13.2205 7.37035 13.6155 7.37031 13.8596 7.61365Z"
            fill="#24824D"
          />
        </g>
      </svg>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-green-700 text-xs font-normal font-lato leading-[18px]">
            {variant === "publicated"
              ? "Publicaste el evento"
              : "Creaste el evento"}
          </div>
          <div className="self-stretch text-green-700 text-sm font-bold font-lato leading-tight">
            {variant === "publicated"
              ? "Todos los usuarios pueden visualizarlo desde la aplicación."
              : "Podés visualizarlo, seguir editándolo y publicarlo cuando esté listo."}
          </div>
        </div>
        {variant === "publicated" ? (
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="rounded justify-start items-start flex">
              <div className="justify-center items-center gap-2 flex">
                <p className="text-green-700 text-sm font-bold font-lato leading-tight">
                  Deshacer
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <button
        className="w-5 h-5 justify-center items-center flex"
        onClick={() => close()}
      >
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
      </button>
    </div>
  );
};

export default ToastCreatedEvent;
