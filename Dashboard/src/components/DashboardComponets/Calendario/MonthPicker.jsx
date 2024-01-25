import { useState } from "react";

const MonthPicker = ({
  selectedMonth,
  onMonthChange,
  selectedYear,
  setSelectedYear,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const nextYear = (selectedYear) => {
    setSelectedYear(selectedYear + 1);
  };

  const prevYear = (selectedYear) => {
    setSelectedYear(selectedYear - 1);
  };

  const monthFormatted = selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1).toLowerCase();

  return (
    <div className="bg-white w-40 relative h-11 rounded flex items-center border">
      <div
        className="cursor-pointer flex flex-row w-[full] p-2 gap-2"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div className="w-5 h-5 relative ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.75H14.75V1C14.75 0.586 14.414 0.25 14 0.25C13.586 0.25 13.25 0.586 13.25 1V1.75H6.75V1C6.75 0.586 6.414 0.25 6 0.25C5.586 0.25 5.25 0.586 5.25 1V1.75H4C1.582 1.75 0.25 3.082 0.25 5.5V16C0.25 18.418 1.582 19.75 4 19.75H16C18.418 19.75 19.75 18.418 19.75 16V5.5C19.75 3.082 18.418 1.75 16 1.75ZM4 3.25H5.25V4C5.25 4.414 5.586 4.75 6 4.75C6.414 4.75 6.75 4.414 6.75 4V3.25H13.25V4C13.25 4.414 13.586 4.75 14 4.75C14.414 4.75 14.75 4.414 14.75 4V3.25H16C17.577 3.25 18.25 3.923 18.25 5.5V6.25H1.75V5.5C1.75 3.923 2.423 3.25 4 3.25ZM16 18.25H4C2.423 18.25 1.75 17.577 1.75 16V7.75H18.25V16C18.25 17.577 17.577 18.25 16 18.25ZM7.02002 11C7.02002 11.552 6.57302 12 6.02002 12C5.46802 12 5.01489 11.552 5.01489 11C5.01489 10.448 5.45801 10 6.01001 10H6.02002C6.57202 10 7.02002 10.448 7.02002 11ZM11.02 11C11.02 11.552 10.573 12 10.02 12C9.46802 12 9.01489 11.552 9.01489 11C9.01489 10.448 9.45801 10 10.01 10H10.02C10.572 10 11.02 10.448 11.02 11ZM15.02 11C15.02 11.552 14.573 12 14.02 12C13.468 12 13.0149 11.552 13.0149 11C13.0149 10.448 13.458 10 14.01 10H14.02C14.572 10 15.02 10.448 15.02 11ZM7.02002 15C7.02002 15.552 6.57302 16 6.02002 16C5.46802 16 5.01489 15.552 5.01489 15C5.01489 14.448 5.45801 14 6.01001 14H6.02002C6.57202 14 7.02002 14.448 7.02002 15ZM11.02 15C11.02 15.552 10.573 16 10.02 16C9.46802 16 9.01489 15.552 9.01489 15C9.01489 14.448 9.45801 14 10.01 14H10.02C10.572 14 11.02 14.448 11.02 15ZM15.02 15C15.02 15.552 14.573 16 14.02 16C13.468 16 13.0149 15.552 13.0149 15C13.0149 14.448 13.458 14 14.01 14H14.02C14.572 14 15.02 14.448 15.02 15Z"
              fill="#25314C"
            />
          </svg>
        </div>
        <p className="font-lato text-sm font-semibold leading-normal">
          {monthFormatted} {selectedYear}
        </p>
      </div>

      {dropdownOpen && (
        <div className="bg-white  top-1 z-50 w-[110%] max-h-[280px] overflow-scroll mt-10 absolute flex flex-col justify-start border rounded ">
          <div className=" flex items-center justify-between bg-stone-50 py-2 px-0.5">
            {/* flecha izquierda */}
            <div
              onClick={() => prevYear(selectedYear)}
              className=" rounded w-5 h-5 relative cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5001 16.4583C12.3401 16.4583 12.1801 16.3975 12.0585 16.275L6.22512 10.4417C5.98095 10.1975 5.98095 9.80164 6.22512 9.55747L12.0585 3.72414C12.3026 3.47997 12.6985 3.47997 12.9426 3.72414C13.1868 3.96831 13.1868 4.36417 12.9426 4.60834L7.551 9.99998L12.9426 15.3916C13.1868 15.6358 13.1868 16.0317 12.9426 16.2758C12.8201 16.3975 12.6601 16.4583 12.5001 16.4583Z"
                  fill="#6D6E6D"
                />
              </svg>
            </div>

            <p className="font-lato text-sm font-semibold leading-loose">
              {selectedYear}
            </p>

            {/* flecha derecha */}
            <div
              onClick={() => nextYear(selectedYear)}
              className="rounded w-5 h-5 relative cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49982 16.4581C7.33982 16.4581 7.17979 16.3973 7.05813 16.2748C6.81396 16.0307 6.81396 15.6348 7.05813 15.3906L12.4498 9.999L7.05813 4.60736C6.81396 4.36319 6.81396 3.96733 7.05813 3.72316C7.30229 3.479 7.69815 3.479 7.94232 3.72316L13.7757 9.5565C14.0198 9.80066 14.0198 10.1965 13.7757 10.4407L7.94232 16.274C7.81982 16.3974 7.65982 16.4581 7.49982 16.4581Z"
                  fill="#6D6E6D"
                />
              </svg>
            </div>
          </div>

          {months.map((month, i) => {
            return (
              <div
                key={i}
                className="px-2 py-2 hover:bg-zinc-100 cursor-pointer"
                onClick={() => {
                  onMonthChange(i);
                  setDropdownOpen(false);
                }}
              >
                <p className="text-indigo-950 font-lato leading-normal text-sm">
                  {month} 
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MonthPicker;
