import React from "react";

const ContentCardClimate = () => {
  return (
    <div className="w-[279px] justify-between items-center inline-flex py-3">
      <div className="justify-start items-center gap-1.5 flex">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="cloud">
            <path
              id="cloud_2"
              d="M13.3333 16.4505H7.91667C4.585 16.4505 1.875 13.7405 1.875 10.4089C1.875 7.07719 4.585 4.36719 7.91667 4.36719C9.38667 4.36719 10.8034 4.90217 11.9067 5.87384C12.2517 6.17801 12.5592 6.51971 12.8267 6.89221C12.9942 6.87471 13.1617 6.86637 13.3333 6.86637C15.9758 6.86637 18.125 9.01554 18.125 11.658C18.125 14.3005 15.9758 16.4505 13.3333 16.4505ZM7.91667 5.61719C5.27417 5.61719 3.125 7.76635 3.125 10.4089C3.125 13.0514 5.27417 15.2005 7.91667 15.2005H13.3333C15.2867 15.2005 16.875 13.6122 16.875 11.6589C16.875 9.70552 15.2867 8.11719 13.3333 8.11719C13.0975 8.11719 12.8708 8.13804 12.6408 8.18138C12.3891 8.22971 12.1292 8.11553 11.9942 7.89553C11.7442 7.49136 11.4366 7.12637 11.0799 6.8122C10.2057 6.04137 9.08167 5.61719 7.91667 5.61719Z"
              fill="#BEBDBD"
            />
          </g>
        </svg>
        <div className="text-indigo-950 text-base font-normal font-lato leading-normal">
          Nublado
        </div>
      </div>
      <div className="text-indigo-950 text-base font-normal font-lato leading-normal">
        8°C
      </div>
      <div className="text-indigo-950 text-base font-normal font-lato leading-normal">
        13°C
      </div>
    </div>
  );
};

export default ContentCardClimate;
