import React from "react";
import Button from "./Button";

const ModalWeb = ({
  title,
  subtitle,
  textAccept,
  textReject,
  close,
  onAccept,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col fixed inset-0 backdrop-blur backdrop-brightness-75 backdrop-saturate-100">
      <div className="flex flex-col bg-white rounded-[10px] items-center justify-center gap-5 shadow p-6">
        <div className="self-stretch flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch justify-center items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-center gap-4 flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center inline-flex">
                <p className="self-stretch text-indigo-950 text-2xl font-bold font-lato leading-loose">
                  {title}
                </p>
              </div>
            </div>
            <div
              className="p-3 justify-center items-center gap-2.5 flex"
              onClick={() => close()}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="times">
                  <path
                    id="times_2"
                    d="M18.5297 17.96C18.8227 18.253 18.8227 18.728 18.5297 19.021C18.3837 19.167 18.1917 19.241 17.9997 19.241C17.8077 19.241 17.6158 19.168 17.4698 19.021L11.9997 13.551L6.52975 19.021C6.38375 19.167 6.19175 19.241 5.99975 19.241C5.80775 19.241 5.61575 19.168 5.46975 19.021C5.17675 18.728 5.17675 18.253 5.46975 17.96L10.9398 12.49L5.46975 7.02004C5.17675 6.72704 5.17675 6.25201 5.46975 5.95901C5.76275 5.66601 6.23775 5.66601 6.53075 5.95901L12.0008 11.429L17.4707 5.95901C17.7637 5.66601 18.2387 5.66601 18.5317 5.95901C18.8247 6.25201 18.8247 6.72704 18.5317 7.02004L13.0617 12.49L18.5297 17.96Z"
                    fill="#25314C"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="self-stretch h-12 flex-col justify-start items-center flex">
            <p className="self-stretch text-neutral-500 text-base font-normal font-lato leading-normal">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="self-stretch justify-end items-center gap-3 inline-flex">
          <Button
            variant="primary_alt"
            px="px-4"
            py="py-2.5"
            rounded="rounded"
            action={() => close()}
            customStyle="max-w-[33%]"
          >
            <p className="text-indigo-950 text-base font-bold font-lato leading-normal">
              {textReject}
            </p>
          </Button>
          <Button
            variant="primary"
            px="px-4"
            py="py-2.5"
            rounded="rounded"
            customStyle="max-w-[33%]"
            action={() => onAccept()}
          >
            <p className="text-white text-base font-bold font-lato leading-normal">
              {textAccept}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalWeb;
