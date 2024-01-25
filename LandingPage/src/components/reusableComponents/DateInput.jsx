import { useEffect, useState } from "react";

const DateInput = ({
  setValue = () => {},
  dateLabel,
  hintEditable = true,
  value = "",
}) => {
  const [hint, setHint] = useState(hintEditable);
  const [visible, setVisible] = useState("invisible");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [date, setdate] = useState(value);

  const showHint = () => {
    if (visible == "invisible") setVisible("visible");
    if (visible == "visible") setVisible("invisible");
  };

  const onFocusDivBlue = (e) => {
    if (error) return;
    setDivBlue(true);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };

  const validatedate = (date) => {
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return dateRegex.test(date);
  };

  useEffect(() => {
    if (isValid) {
      setError("");
      setValue(date);
    } else {
      setError("Enter a correct date");
      setDivBlue(false);
      setValue("");
    }
  }, [isValid, date]);

  const onChange = (e) => {
    setdate(e.target.value);
    const newEmail = e.target.value;
    setIsValid(validatedate(newEmail));
  };

  return (
    <div className={`flex flex-col w-full items-start gap-1.5`}>
      <label className="w-full h-5 font-lato">{dateLabel}</label>

      <div
        className={`flex h-11 px-3.5 py-2.5 bg-white border rounded items-center gap-2  w-full ${
          divBlue ? "border-blue-300" : "border-gray-300"
        } ${error ? "border-red-300" : date ? "border-green-300" : ""} `}
      >
        {!divBlue && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="calendar-empty-alt">
              <path
                id="calendar-empty-alt_2"
                d="M15.5 3.125H14.4583V2.5C14.4583 2.155 14.1783 1.875 13.8333 1.875C13.4883 1.875 13.2083 2.155 13.2083 2.5V3.125H7.79167V2.5C7.79167 2.155 7.51167 1.875 7.16667 1.875C6.82167 1.875 6.54167 2.155 6.54167 2.5V3.125H5.5C3.485 3.125 2.375 4.235 2.375 6.25V15C2.375 17.015 3.485 18.125 5.5 18.125H15.5C17.515 18.125 18.625 17.015 18.625 15V6.25C18.625 4.235 17.515 3.125 15.5 3.125ZM5.5 4.375H6.54167V5C6.54167 5.345 6.82167 5.625 7.16667 5.625C7.51167 5.625 7.79167 5.345 7.79167 5V4.375H13.2083V5C13.2083 5.345 13.4883 5.625 13.8333 5.625C14.1783 5.625 14.4583 5.345 14.4583 5V4.375H15.5C16.8142 4.375 17.375 4.93583 17.375 6.25V6.875H3.625V6.25C3.625 4.93583 4.18583 4.375 5.5 4.375ZM15.5 16.875H5.5C4.18583 16.875 3.625 16.3142 3.625 15V8.125H17.375V15C17.375 16.3142 16.8142 16.875 15.5 16.875Z"
                fill="#BEBDBD"
              />
            </g>
          </svg>
        )}

        <input
          type={divBlue ? "date" : "text"}
          value={date}
          onChange={(e) => onChange(e)}
          placeholder={"01/01/2023"}
          className="w-full outline-0 cursor-pointer"
          onFocus={(e) => onFocusDivBlue(e)}
          onBlur={(e) => onBlurDivBlue(e)}
        />
        {error ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1089_57477)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99967 4.16659C8.27582 4.16659 8.49967 4.39044 8.49967 4.66659V8.66659C8.49967 8.94273 8.27582 9.16659 7.99967 9.16659C7.72353 9.16659 7.49967 8.94273 7.49967 8.66659V4.66659C7.49967 4.39044 7.72353 4.16659 7.99967 4.16659Z"
                fill="#F76174"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.34082 10.9609C8.54608 11.1456 8.56272 11.4617 8.37799 11.667L8.37132 11.6744C8.18659 11.8797 7.87045 11.8963 7.66519 11.7116C7.45994 11.5268 7.4433 11.2107 7.62803 11.0054L7.63469 10.998C7.81942 10.7928 8.13557 10.7761 8.34082 10.9609Z"
                fill="#F76174"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z"
                fill="#F76174"
              />
            </g>
            <defs>
              <clipPath id="clip0_1089_57477">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={showHint}
            className="hover:cursor-pointer"
          >
            <g clip-path="url(#clip0_1089_57423)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z"
                fill="#939697"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.89608 5.06867C6.66643 5.26353 6.49967 5.5606 6.49967 5.99993C6.49967 6.27607 6.27582 6.49993 5.99967 6.49993C5.72353 6.49993 5.49967 6.27607 5.49967 5.99993C5.49967 5.27258 5.79125 4.69465 6.2491 4.30616C6.69608 3.92691 7.27424 3.74992 7.83301 3.74992C8.39177 3.74992 8.96993 3.92691 9.41691 4.30617C9.87477 4.69465 10.1663 5.27258 10.1663 5.99993C10.1663 6.51051 10.0356 6.89957 9.82195 7.21998C9.64245 7.48923 9.40919 7.69739 9.22567 7.86116C9.20563 7.87904 9.1862 7.89638 9.16748 7.91322C8.9627 8.09752 8.80835 8.24944 8.69522 8.44932C8.58698 8.64053 8.49967 8.90767 8.49967 9.33321C8.49967 9.60936 8.27582 9.83321 7.99967 9.83321C7.72353 9.83321 7.49967 9.60936 7.49967 9.33321C7.49967 8.75876 7.6207 8.31757 7.82496 7.95671C8.02433 7.60451 8.28665 7.36061 8.49853 7.16992C8.51497 7.15512 8.53102 7.14071 8.54668 7.12664C8.74684 6.94688 8.88473 6.82304 8.9899 6.66527C9.08879 6.51694 9.16634 6.32268 9.16634 5.99993C9.16634 5.56061 8.99958 5.26353 8.76993 5.06868C8.52942 4.8646 8.19091 4.74992 7.83301 4.74992C7.47511 4.74992 7.1366 4.8646 6.89608 5.06867Z"
                fill="#939697"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.34082 11.6275C8.54608 11.8123 8.56272 12.1284 8.37799 12.3337L8.37132 12.3411C8.18659 12.5463 7.87045 12.563 7.66519 12.3782C7.45994 12.1935 7.4433 11.8774 7.62803 11.6721L7.63469 11.6647C7.81942 11.4594 8.13557 11.4428 8.34082 11.6275Z"
                fill="#939697"
              />
            </g>
            <defs>
              <clipPath id="clip0_1089_57423">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      {error ? (
        <span className="w-full h-4 text-sm font-light leading-6 font-lato text-red-500 ">
          {error}
        </span>
      ) : (
        <span
          className={`w-full h-4  text-sm font-light leading-6 font-lato text-gray-400 ${visible} `}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export default DateInput;
