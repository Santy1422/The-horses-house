import React from "react";

const FrameInfoContact = ({ nombre, email }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="w-[38px] h-[52px] py-1.5 flex-col justify-center items-center inline-flex">
        <img className="w-10 h-10" src="/img/image-club-example.png" />
      </div>
      <div className="flex-col justify-start items-start inline-flex">
        <p className="w-[174.44px] text-zinc-900 text-sm font-bold font-lato leading-tight">
          {nombre}
        </p>
        <p className="w-[180.96px] text-zinc-600 text-xs font-normal font-lato leading-[18px]">
          {email}
        </p>
      </div>
    </div>
  );
};

export default FrameInfoContact;
