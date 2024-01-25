import { useEffect, useState } from "react";
import Premio from "./Premio";

const tipoDePremio = [
  "Cucardas",
  "Talabartería",
  "Productos para el caballo",
  "Monetario",
  "Otro"
];
const categorias = [
  "Primera categoría",
  "Segunda categoría",
  "Tercera categoría",
  "Junior",
  "Pre junior",
  "Children",
  "Escuela",
];

const PremiosGenerales = ({
  setPremio,
  setCantidadPremio,
  cantidadPremio,
  isGeneral
}) => {
  const [premiosTotales, setPremiosTotales] = useState([]);

  useEffect(() => {
    setPremio(premiosTotales);
  }, [premiosTotales]);

  return (
    <div className={`contenedor container bg-white ${isGeneral ? "border rounded-lg border-gray-300 py-12 px-16 flex flex-col gap-4" : ""}`}>
      {isGeneral &&
        <>
          <div className="titulo text-2xl font-bold leading-8 text-[#23254C] mb-4">
            Premios generales
          </div>
          <div className="descripcion font-lato text-base font-normal leading-6 text-[#6D6E6D]">
            Premios asignados a las distintas categorías independientemente de la prueba que estén realizando.
          </div>
        </>
      }
      <div className="autoridad ">
        {Array.from({ length: cantidadPremio }, (_, i) => (
          <Premio
            label={"Premio " + (i + 1)}
            setValue={setPremiosTotales}
            setCantidadPremio={setCantidadPremio}
            cantidadPremio={cantidadPremio}
            premiosTotales={premiosTotales}
            tipoDePremio={tipoDePremio}
            categorias={categorias}
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
            onClick={() => setCantidadPremio(cantidadPremio + 1)}
          >
            Agregar premio
          </div>

        </div>
      </div>
    </div>
  )
}
export default PremiosGenerales