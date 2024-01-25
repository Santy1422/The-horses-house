import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const CustomToggle = ({ onToggle, value }) => {
  return (
    <div onClick={onToggle} style={{ cursor: "pointer" }}>
      {value ? (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="angle-down">
            <path
              id="angle-down_2"
              d="M7.99855 12.0783C7.87055 12.0783 7.74253 12.0297 7.6452 11.9317L2.97853 7.26499C2.7832 7.06966 2.7832 6.75297 2.97853 6.55763C3.17386 6.3623 3.49055 6.3623 3.68589 6.55763L7.9992 10.8709L12.3125 6.55763C12.5078 6.3623 12.8245 6.3623 13.0199 6.55763C13.2152 6.75297 13.2152 7.06966 13.0199 7.26499L8.35321 11.9317C8.25454 12.0297 8.12655 12.0783 7.99855 12.0783Z"
              fill="#23254C"
            />
          </g>
        </svg>
      ) : (
        <BsChevronUp size={12} color="gray" />
      )}
    </div>
  );
};

export default CustomToggle;
