import FrameInfoContact from "@/components/reusableComponents/FrameInfoContact";
import React from "react";

const ContentCardEditContact = ({ email, nombre, clubes }) => {
  return (
    <div className="flex flex-col gap-6">
      {clubes.map((club, index) => {
        return <FrameInfoContact key={index} nombre={club} email={email} />;
      })}
      <div className="flex justify-start items-center gap-[6px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="envelope">
            <path
              id="envelope_2"
              d="M15 17.2881H5C2.985 17.2881 1.875 16.1781 1.875 14.1631V6.66309C1.875 4.64809 2.985 3.53809 5 3.53809H15C17.015 3.53809 18.125 4.64809 18.125 6.66309V14.1631C18.125 16.1781 17.015 17.2881 15 17.2881ZM5 4.78809C3.68583 4.78809 3.125 5.34892 3.125 6.66309V14.1631C3.125 15.4773 3.68583 16.0381 5 16.0381H15C16.3142 16.0381 16.875 15.4773 16.875 14.1631V6.66309C16.875 5.34892 16.3142 4.78809 15 4.78809H5ZM10.8575 10.9789L14.9508 8.00225C15.2299 7.79975 15.2916 7.40809 15.0883 7.12892C14.8858 6.85059 14.4959 6.78725 14.2151 6.99142L10.1217 9.96809C10.0483 10.0214 9.95086 10.0214 9.87752 9.96809L5.7841 6.99142C5.50243 6.78725 5.11339 6.85142 4.91089 7.12892C4.70756 7.40809 4.76925 7.79891 5.04842 8.00225L9.14164 10.9797C9.39831 11.1664 9.69919 11.2589 9.99919 11.2589C10.2992 11.2589 10.6017 11.1656 10.8575 10.9789Z"
              fill="#BEBDBD"
            />
          </g>
        </svg>
        <p className="w-[265px] text-indigo-950 text-base font-normal font-lato leading-normal">
          {email}
        </p>
      </div>
    </div>
  );
};

export default ContentCardEditContact;
