import React from "react";

const CardEditInfoEvent = ({
  title,
  children,
  setIsEditing,
  isEditing,
  showButton = true,
}) => {
  return (
    <div className="px-8 py-6 bg-white rounded-[10px] border border-gray-300 flex-col w-full gap-4 inline-flex">
      <div className="self-stretch flex-col gap-2 flex">
        <div className="self-stretch pb-2 border-b-[1px] gap-4 inline-flex">
          <div className="grow shrink basis-0 text-indigo-950 text-xl font-bold font-lato leading-[30px]">
            {title}
          </div>
          {showButton && (
            <button
              className={`p-2 rounded justify-start items-center gap-2.5 flex 
              ${isEditing ? "bg-zinc-100" : ""} 
              hover:border`}
              onClick={() => setIsEditing()}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="pen-line">
                  <path
                    id="pen-line_2"
                    d="M22.0195 7.23096C22.0205 6.49496 21.7346 5.80296 21.2136 5.28296L18.9856 3.05506C18.4646 2.53506 17.7746 2.24803 17.0376 2.24903C16.3016 2.25003 15.6105 2.53796 15.0925 3.05896L2.73853 15.47C2.59753 15.611 2.51953 15.801 2.51953 15.999V20.999C2.51953 21.413 2.85553 21.749 3.26953 21.749H8.26953C8.46753 21.749 8.65858 21.67 8.79858 21.531L21.2095 9.17603C21.7315 8.65803 22.0185 7.96696 22.0195 7.23096ZM7.95947 20.25H4.01953V16.3101L13.0125 7.276L16.9946 11.257L7.95947 20.25ZM20.1516 8.11402L18.0576 10.199L14.0706 6.21302L16.1555 4.11804C16.3915 3.88104 16.7055 3.751 17.0405 3.75H17.0415C17.3755 3.75 17.6895 3.87997 17.9265 4.11597L20.1545 6.344C20.3905 6.581 20.5205 6.89498 20.5205 7.22998C20.5195 7.56398 20.3886 7.87802 20.1516 8.11402ZM22.0195 21C22.0195 21.414 21.6835 21.75 21.2695 21.75H14.2695C13.8555 21.75 13.5195 21.414 13.5195 21C13.5195 20.586 13.8555 20.25 14.2695 20.25H21.2695C21.6835 20.25 22.0195 20.586 22.0195 21Z"
                    fill="#23254C"
                  />
                </g>
              </svg>
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardEditInfoEvent;
