import DropdownWebAlt from "@/components/reusableComponents/DropdownWebAlt";
import React, { useState } from "react";
import InfoUser from "./InfoUser";

const MyAuthorities = ({
  nombre = "Adriana portiglia",
  email = "portiadri@gmail.com",
  img,
  cargo: cargoAut = "Asistencia médica",
  id,
  setValue,
}) => {
  const [cargo, setCargo] = useState(cargoAut);

  const optionsCargo = [
    "Asistencia medica",
    "Cronometrista",
    "Delegado/a Tecnico/a",
    "Guardia Herreria",
    "Guardia Veterinaria",
  ];

  const handleSelect = (option) => {
    setCargo(option);
    setValue((prevState) => {
      const nuevoEstado = [...prevState];
      nuevoEstado[id - 1] = { nombre: nombre, cargo: option };
      return nuevoEstado;
    });
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="h-[92px] w-[57px] px-6 py-4 flex items-center justify-center">
        <p className="text-indigo-950 text-sm font-normal font-lato leading-tight">
          {id}
        </p>
      </div>
      <InfoUser name={nombre} email={email} img={img} />
      <div className="flex justify-start items-center flex-1">
        <DropdownWebAlt
          label=""
          onSelect={(option) => handleSelect(option)}
          selectedOption={cargo}
          options={optionsCargo}
        />
      </div>
      <div className="h-[92px] w-[49px] flex items-center justify-center">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="more-vertical">
            <path
              id="more-vertical_2"
              d="M12.0206 6.41211C11.1916 6.41211 10.5156 5.74111 10.5156 4.91211C10.5156 4.08311 11.1826 3.41211 12.0106 3.41211H12.0206C12.8496 3.41211 13.5206 4.08311 13.5206 4.91211C13.5206 5.74111 12.8496 6.41211 12.0206 6.41211ZM13.5206 12.9121C13.5206 12.0831 12.8496 11.4121 12.0206 11.4121H12.0106C11.1826 11.4121 10.5156 12.0831 10.5156 12.9121C10.5156 13.7411 11.1916 14.4121 12.0206 14.4121C12.8496 14.4121 13.5206 13.7411 13.5206 12.9121ZM13.5206 20.9121C13.5206 20.0831 12.8496 19.4121 12.0206 19.4121H12.0106C11.1826 19.4121 10.5156 20.0831 10.5156 20.9121C10.5156 21.7411 11.1916 22.4121 12.0206 22.4121C12.8496 22.4121 13.5206 21.7411 13.5206 20.9121Z"
              fill="#80807F"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MyAuthorities;
