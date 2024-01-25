import React from "react";

const InfoUser = ({ img, name, email }) => {
  return (
    <div className="flex gap-1 items-center justify-start flex-1">
      <img className="w-8 h-8 rounded-[200px]" src="/img/avatar4.png" />
      <div className="flex-col justify-start items-start inline-flex">
        <p className="text-zinc-900 text-sm font-bold font-lato leading-tight">
          {name}
        </p>
        <p className="text-zinc-600 text-xs font-normal font-lato leading-[18px]">
          {email}
        </p>
      </div>
    </div>
  );
};

export default InfoUser;
