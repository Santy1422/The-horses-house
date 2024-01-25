import { useEffect, useState } from "react";
import EmailInput from "../reusableComponents/EmailInput";
import Search from "../reusableComponents/Search";
import Autoridad from "./Autoridad";

const clubes = [
  "club campo haras del sur",
  "club campo la martona",
  "club campo los pinguinos",
  "club campo san diego",
];
const autoridades = [
  "Marcos",
  "Santy",
  "Facundo",
  "Yein",
  "Agustina",
  "Evelyn",
  "Sabrina",
  "Mariana",
];
const cargos = [
  "Asistencia medica",
  "Cronometrista",
  "Delegado/a Tecnico/a",
  "Guardia Herreria",
  "Guardia Veterinaria",
];

const ResponsableEvento = ({
  setClubes,
  setEmail,
  setAutoridad,
  setCantidadAutoridad,
  cantidadAutoridad,
}) => {
  const [autoridadesTotales, setAutoridadesTotales] = useState([]);

  useEffect(() => {
    setAutoridad(autoridadesTotales);
  }, [autoridadesTotales]);

  return (
    <div className="contenedor container bg-white border rounded-lg border-gray-300 py-12 px-16 flex flex-col gap-4">
      <div className="titulo font-lato text-2xl font-bold leading-8 text-[#23254C] mt-4">
        Responsables del evento
      </div>
      <div className="club">
        <Search
          setValue={setClubes}
          label={"Clubes"}
          placeholder={"Buscar clubes organizadores"}
          itemsAbuscar={clubes}
        />
      </div>
      <div className="email">
        <EmailInput setValue={setEmail} label={"Correo de contacto"} />
      </div>
      <div className="autoridad ">
        {Array.from({ length: cantidadAutoridad }, (_, i) => (
          <Autoridad
            label={"Autoridad " + (i + 1)}
            setValue={setAutoridadesTotales}
            setCantidadAutoridad={setCantidadAutoridad}
            cantidadAutoridad={cantidadAutoridad}
            autoridadesTotales={autoridadesTotales}
            autoridades={autoridades}
            cargos={cargos}
            key={i}
            index={i}
          />
        ))}
      </div>
      <div className="boton flex flex-row gap-3">
        <div className="botonAgregarAutoridad hover:cursor-pointer w-[170px] h-[36px] border rounded border-[#23254C] flex flex-row justify-center items-center">
          <div className="icono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M16.9587 10.0003C16.9587 10.3453 16.6787 10.6253 16.3337 10.6253H11.1253V15.8337C11.1253 16.1787 10.8453 16.4587 10.5003 16.4587C10.1553 16.4587 9.87533 16.1787 9.87533 15.8337V10.6253H4.66699C4.32199 10.6253 4.04199 10.3453 4.04199 10.0003C4.04199 9.65533 4.32199 9.37533 4.66699 9.37533H9.87533V4.16699C9.87533 3.82199 10.1553 3.54199 10.5003 3.54199C10.8453 3.54199 11.1253 3.82199 11.1253 4.16699V9.37533H16.3337C16.6787 9.37533 16.9587 9.65533 16.9587 10.0003Z"
                fill="#23254C"
              />
            </svg>
          </div>
          <div
            className="label font-lato text-sm font-bold leading-5 text-[#23254C] "
            onClick={() => setCantidadAutoridad(cantidadAutoridad + 1)}
          >
            Agregar autoridad
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResponsableEvento;
