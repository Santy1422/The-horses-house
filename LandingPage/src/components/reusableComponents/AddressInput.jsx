import { useEffect, useState } from "react";

const AddressInput = ({
  setValue,
  placeholder,
  label,
  hintEditable,
  height,
  value = "",
}) => {
  /*
    Se puede editar por props el placeholder, el titulo, y el hint.
    */

  const [hint, setHint] = useState(hintEditable);
  const [visible, setVisible] = useState("invisible");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [text, setText] = useState(value);

  const onFocusDivBlue = (e) => {
    if (error) return;
    setDivBlue(!divBlue);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };

  const showHint = () => {
    setVisible(visible === "invisible" ? "visible" : "invisible");
  };

  const validateText = (text) => {
    return text;
  };

  useEffect(() => {
    if (isValid) {
      setError("");
      setValue(text);
    } else {
      setError("please enter a correct text");
      setValue("");
      setDivBlue(false);
    }
  }, [isValid, text]);

  const onChange = (e) => {
    setText(e.target.value);
    setIsValid(validateText(e.target.value));
  };

  return (
    <div className={`flex flex-col w-full items-start gap-1.5 `}>
      <label className="w-15 h-5 font-lato text-base font-normal leading-6 text-[#23254C]">
        {label}
      </label>
      <div
        className={`flex h-11 px-3.5 py-2.5 items-center bg-white border rounded gap-2  w-full h-[${height}] ${
          divBlue ? "border-blue-300" : ""
        } ${error ? "border-red-300" : text ? "border-green-300" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.4999 1.875C6.47909 1.875 3.20825 5.14583 3.20825 9.16667C3.20825 13.4317 7.12241 16.0166 9.71241 17.7275L10.1533 18.02C10.2583 18.09 10.3791 18.125 10.4999 18.125C10.6208 18.125 10.7416 18.09 10.8466 18.02L11.2874 17.7275C13.8774 16.0166 17.7916 13.4317 17.7916 9.16667C17.7916 5.14583 14.5208 1.875 10.4999 1.875ZM10.5991 16.6842L10.4999 16.7501L10.4007 16.6842C7.89242 15.0275 4.45825 12.7592 4.45825 9.16667C4.45825 5.835 7.16825 3.125 10.4999 3.125C13.8316 3.125 16.5416 5.835 16.5416 9.16667C16.5416 12.7592 13.1066 15.0283 10.5991 16.6842ZM10.4999 6.45833C9.00659 6.45833 7.79158 7.67333 7.79158 9.16667C7.79158 10.66 9.00659 11.875 10.4999 11.875C11.9933 11.875 13.2083 10.66 13.2083 9.16667C13.2083 7.67333 11.9933 6.45833 10.4999 6.45833ZM10.4999 10.625C9.69575 10.625 9.04158 9.97083 9.04158 9.16667C9.04158 8.3625 9.69575 7.70833 10.4999 7.70833C11.3041 7.70833 11.9583 8.3625 11.9583 9.16667C11.9583 9.97083 11.3041 10.625 10.4999 10.625Z"
            fill="#BEBDBD"
          />
        </svg>

        <input
          type="text"
          value={text}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className="w-full outline-0 self-start"
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
          className={`w-full h-4  text-sm font-light leading-6 font-primary text-gray-400 ${visible}`}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export default AddressInput;
