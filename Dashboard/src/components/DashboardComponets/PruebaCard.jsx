import EncabezadoTablaPruebas from "@/components/reusableComponents/TablaPruebasEncabezado";
import { useState } from "react";
import Inscriptos from "../eventsComponents/InscribedSection/Inscriptos";

const PruebaCard = ({ prueba, creadorId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fecha = prueba.categoria.dia
    ?.split("T")[0]
    .split("-")
    .reverse()
    .splice(0, 2)
    .join("/");

  const inscriptos = prueba.inscriptos.length;

  const premios = prueba.categoria.premios.length
    ? prueba.categoria.premios.map((pre) => pre)
    : "No especifica";

  return (
    <div className="w-full h-auto">
      <EncabezadoTablaPruebas />
      <div className="bg-stone-50 rounded-b-[10px] pb-6">
        <div className="px-10 w-full h-[72px] p-4 justify-center items-center flex flex-row gap-4">
          <div className="fechaYHora flex-row w-[9%]">
            <div className="inline-flex ">
              <div className="h-5 w-5">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2.5H11.6667V2C11.6667 1.724 11.4427 1.5 11.1667 1.5C10.8907 1.5 10.6667 1.724 10.6667 2V2.5H6.33333V2C6.33333 1.724 6.10933 1.5 5.83333 1.5C5.55733 1.5 5.33333 1.724 5.33333 2V2.5H4.5C2.888 2.5 2 3.388 2 5V12C2 13.612 2.888 14.5 4.5 14.5H12.5C14.112 14.5 15 13.612 15 12V5C15 3.388 14.112 2.5 12.5 2.5ZM4.5 3.5H5.33333V4C5.33333 4.276 5.55733 4.5 5.83333 4.5C6.10933 4.5 6.33333 4.276 6.33333 4V3.5H10.6667V4C10.6667 4.276 10.8907 4.5 11.1667 4.5C11.4427 4.5 11.6667 4.276 11.6667 4V3.5H12.5C13.5513 3.5 14 3.94867 14 5V5.5H3V5C3 3.94867 3.44867 3.5 4.5 3.5ZM12.5 13.5H4.5C3.44867 13.5 3 13.0513 3 12V6.5H14V12C14 13.0513 13.5513 13.5 12.5 13.5Z"
                    fill="#494949"
                  />
                </svg>
              </div>

              <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
                {fecha || ""}
              </p>
            </div>

            <div className="flex">
              <div className="h-5 w-5">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50004 0.833496C4.54804 0.833496 1.33337 4.04816 1.33337 8.00016C1.33337 11.9522 4.54804 15.1668 8.50004 15.1668C12.452 15.1668 15.6667 11.9522 15.6667 8.00016C15.6667 4.04816 12.452 0.833496 8.50004 0.833496ZM8.50004 14.1668C5.09937 14.1668 2.33337 11.4008 2.33337 8.00016C2.33337 4.5995 5.09937 1.8335 8.50004 1.8335C11.9007 1.8335 14.6667 4.5995 14.6667 8.00016C14.6667 11.4008 11.9007 14.1668 8.50004 14.1668ZM10.8534 9.64681C11.0487 9.84214 11.0487 10.1588 10.8534 10.3542C10.7561 10.4515 10.628 10.5008 10.5 10.5008C10.372 10.5008 10.244 10.4522 10.1467 10.3542L8.14669 8.35417C8.05269 8.26017 8.00004 8.13281 8.00004 8.00081V4.66748C8.00004 4.39148 8.22404 4.16748 8.50004 4.16748C8.77604 4.16748 9.00004 4.39148 9.00004 4.66748V7.79346L10.8534 9.64681Z"
                    fill="#494949"
                  />
                </svg>
              </div>
              <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
                {prueba.categoria.hora}
              </p>
            </div>
          </div>

          <div className=" h-[auto] justify-center items-center flex-col px-6 w-[12%]">
            {prueba.categoria &&
              prueba.categoria.categoria.map((el, i) => (
                <p
                  key={i}
                  className="text-zinc-700 text-xs font-normal font-lato leading-[18px]"
                >
                  {el}
                </p>
              ))}
          </div>

          <div className="h-[72px] justify-center items-center gap-2 inline-flex px-6 w-[8%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
              {prueba.categoria.tipoPrueba}
            </p>
          </div>

          <div className="  h-[72px] p-4 justify-center items-center inline-flex px-6 w-[11%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
              {prueba.categoria.altura}
            </p>
          </div>

          <div className=" h-[72px] p-4 justify-center items-center inline-flex px-6 w-[12%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
              {prueba.categoria.definicion}
            </p>
          </div>

          {/* //tiempoacordado */}
          <div className=" h-[72px] p-4 justify-center items-center gap-3 flex flex-row px-8 w-[10%]">
            <div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5374 5.30868L13.1595 4.68669C13.3548 4.49135 13.3548 4.17466 13.1595 3.97933C12.9642 3.784 12.6475 3.784 12.4521 3.97933L11.8001 4.63135C10.8748 3.92468 9.7235 3.5 8.47217 3.5C5.4395 3.5 2.97217 5.96733 2.97217 9C2.97217 12.0327 5.4395 14.5 8.47217 14.5C11.5048 14.5 13.9722 12.0327 13.9722 9C13.9722 7.57867 13.4254 6.28601 12.5374 5.30868ZM8.47217 13.5C5.99083 13.5 3.97217 11.4813 3.97217 9C3.97217 6.51867 5.99083 4.5 8.47217 4.5C10.9535 4.5 12.9722 6.51867 12.9722 9C12.9722 11.4813 10.9535 13.5 8.47217 13.5ZM10.1055 9.60002C10.3261 9.76602 10.3709 10.0793 10.2049 10.3C10.1076 10.4306 9.95687 10.5 9.8042 10.5C9.7002 10.5 9.59488 10.4673 9.50488 10.4L8.17155 9.39998C8.04622 9.30532 7.97152 9.15733 7.97152 9V6.66667C7.97152 6.39067 8.19552 6.16667 8.47152 6.16667C8.74752 6.16667 8.97152 6.39067 8.97152 6.66667V8.75L10.1055 9.60002ZM6.3055 2C6.3055 1.724 6.5295 1.5 6.8055 1.5H10.1388C10.4148 1.5 10.6388 1.724 10.6388 2C10.6388 2.276 10.4148 2.5 10.1388 2.5H6.8055C6.5295 2.5 6.3055 2.276 6.3055 2Z"
                  fill="#23254C"
                />
              </svg>
            </div>

            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
              No especifica
            </p>
          </div>

          <div className="h-[72px] p-4 justify-center items-center gap-3 inline-flex px-6 w-[12%]">
            <ul>
              {prueba.caballos &&
                prueba.caballos.map((el, i) => (
                  <li
                    key={i}
                    className="text-zinc-700 text-xs font-normal font-lato leading-[18px] w-[50px]"
                  >
                    {el}
                  </li>
                ))}
            </ul>
          </div>

          <div className="h-[72px] p-4 justify-center items-center gap-3 inline-flex px-6 w-[12%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px] w-[50px]">
              {prueba.categoria.articulo}
            </p>
          </div>

          <div className=" h-[72px] p-4 justify-center items-center gap-3 inline-flex px-6 w-[10%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px] w-[50px] flex flex-col">
              $ {prueba.categoria.arancelInscripcion}
            </p>
          </div>

          <div className=" h-[72px]  p-4 justify-start items-center flex px-6 w-[10%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px] w-[40px]">
              {prueba.categoria.pista}
            </p>
          </div>

          <div className=" h-[72px]  p-4 justify-start items-center flex px-6 w-[10%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px] w-[50px]">
              {premios}
            </p>
          </div>

          <div className="h-[72px] p-4 justify-start items-center flex w-[10%]">
            <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
              {prueba.categoria.observaciones}
            </p>
          </div>
        </div>

        <div
          className={`ml-7 mt-4 w-[95%] ${
            isOpen ? "h-auto" : "h-[78px]"
          } px-6 py-3 bg-zinc-100 rounded-[10px] flex-col justify-center items-start inline-flex`}
        >
          <section
            title="Total de inscriptos"
            className="rounded-md h-[78px] flex justify-center items-center gap-3 flex-col"
          >
            <div className="flex flex-row items-center">
              <div
                className="contenedorSvg cursor-pointer flex justify-start items-center  h-5"
                onClick={() => {
                  !isOpen ? setIsOpen(true) : setIsOpen(false);
                }}
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M8.00007 3.33318C7.78674 3.33318 7.57338 3.41482 7.41088 3.57732C7.08505 3.90315 7.08505 4.42987 7.41088 4.75571L12.655 9.99985L7.41088 15.244C7.08505 15.5698 7.08505 16.0965 7.41088 16.4224C7.73671 16.7482 8.26343 16.7482 8.58926 16.4224L14.4226 10.589C14.7484 10.2632 14.7484 9.73649 14.4226 9.41065L8.58926 3.57732C8.42676 3.41482 8.2134 3.33318 8.00007 3.33318Z"
                      fill="#23254C"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99978 8.74978C7.80778 8.74978 7.61575 8.67681 7.46975 8.52981L0.46975 1.52981C0.17675 1.23681 0.17675 0.761773 0.46975 0.468773C0.76275 0.175773 1.23779 0.175773 1.53079 0.468773L8.00076 6.93874L14.4707 0.468773C14.7637 0.175773 15.2388 0.175773 15.5318 0.468773C15.8248 0.761773 15.8248 1.23681 15.5318 1.52981L8.53176 8.52981C8.38376 8.67681 8.19178 8.74978 7.99978 8.74978Z"
                      fill="#23254C"
                    />
                  </svg>
                )}
              </div>

              <p className="text-neutral-700 text-sm font-semibold font-lato leading-tight items-center ml-3">
                Total de inscriptos{" "}
                <span className="ml-4 items-center bg-white px-2.5 py-0.5 rounded-2xl text-indigo-950 font-Lato text-center text-sm font-bold leading-tight">
                  {inscriptos} jinetes
                </span>
              </p>
            </div>
          </section>

          {prueba.inscriptos.length && isOpen ? (
            <Inscriptos prueba={prueba.categoria.id} creadorId={creadorId} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PruebaCard;
