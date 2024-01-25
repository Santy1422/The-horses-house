import React, { useEffect, useState } from "react";
import EditableFormProofs from "./EditableFormProofs";
import NoEditableFormProofs from "./NoEditableFormProofs";
import ProofsInscripted from "./ProofsInscripted";
import { io } from "socket.io-client";
import InputsResultsCustom2 from "../../reusableComponents/InputResultsCustom2";
import InputsResultsCustom from "../../reusableComponents/InputResultsCustom";
import index from "@/pages/dashboard/events";
import { updatePrueba } from "../../../../peticiones/event";

const MyProofs = ({ prueba, setValue, sendNewData }) => {
  
  
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [tiempoAcordado1, setTiempoAcordado1] = useState(prueba.tiempoAcordadoR1);
  const [tiempoAcordado2, setTiempoAcordado2] = useState(prueba.tiempoAcordadoR2);
  const [tiempoOptimo, setTiempoOptimo] = useState(prueba.tiempoOptimo);
  const [vallas1, setVallas1] = useState(prueba.VallasR1);
  const [vallas2, setvallas2] = useState(prueba.VallasR2);
  const [corralDoble1, setDobleCorral1] = useState(prueba.corralDobleR1);
  const [corralDoble2, setDobleCorral2] = useState(prueba.corralDobleR2);
  const [corralTriple1, setTripleCorral1] = useState(prueba.corralTripleR1);
  const [corralTriple2, setTripleCorral2] = useState(prueba.corralTripleR2);
  const [numeroDeVallas1, setNumerosDeVallas1] = useState([]);
  const [numeroDeVallas2, setNumerosDeVallas2] = useState([]);

  useEffect(() => {
    setNumerosDeVallas1(
      Array.from(
        { length: vallas1 },
        (_, index) => "Valla " + (index + 1)
      ).concat(
        Array.from(
          { length: corralDoble1 * 2 },
          (_, index) => "Corral doble valla " + (index + 1)
        ),
        Array.from(
          { length: corralTriple1 * 3 },
          (_, index) => "Corral triple valla " + (index + 1)
        )
      )
    );
    setNumerosDeVallas2(
      Array.from(
        { length: vallas2 },
        (_, index) => "Valla " + (index + 1)
      ).concat(
        Array.from(
          { length: corralDoble2 * 2 },
          (_, index) => "Corral doble valla " + (index + 1)
        ),
        Array.from(
          { length: corralTriple2 * 3 },
          (_, index) => "Corral triple valla " + (index + 1)
        )
      )
    );
  }, [
    vallas1,
    corralDoble1,
    corralTriple1,
    vallas2,
    corralDoble2,
    corralTriple2,
  ]);

  const topHeaderTable = [
    "Fecha",
    "Categorias",
    "Tipo",
    "Altura",
    "Definición",
    "Caballos",
    "Artículo",
    "Arancel",
    "Pista",
    "Premios",
    "Observ.",
  ];

  const handleActualizarPropiedadesPrueba = () => {
    updatePrueba({
      eventId: prueba.id,
      succes: (res) => console.log(res),
      error: (error) => console.log(error),
      loading: (load) => console.log(load),
      data:{ 
        tiempoAcordado1,
        tiempoAcordado2,
        vallas1,
        vallas2,
        corralDoble1,
        corralDoble2,
        corralTriple1,
        corralTriple2,
        tiempoOptimo
      },
    })

  }

  return (
    <div className="flex flex-col w-full items-center gap-1 p-6 justify-start border-b border-zinc-100">
      <div className="flex justify-between items-center w-full">
        <div
          className="flex self-start"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsEditing(false);
          }}
        >
          <div>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="angle-right">
                <path
                  id="angle-right_2"
                  d="M8.00154 3.33342C7.7882 3.33342 7.57484 3.41506 7.41234 3.57756C7.08651 3.9034 7.08651 4.43012 7.41234 4.75595L12.6565 10.0001L7.41234 15.2442C7.08651 15.5701 7.08651 16.0968 7.41234 16.4226C7.73818 16.7485 8.2649 16.7485 8.59073 16.4226L14.4241 10.5893C14.7499 10.2635 14.7499 9.73673 14.4241 9.4109L8.59073 3.57756C8.42823 3.41506 8.21487 3.33342 8.00154 3.33342Z"
                  fill="#23254C"
                />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-start gap-1 flex-1">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="award">
                <path
                  id="award_2"
                  d="M17.0838 5.31907L16.7553 4.9929C16.6915 4.92828 16.6546 4.84216 16.6546 4.75087V4.29136C16.6546 2.64305 15.308 1.30138 13.6537 1.30138H13.1925C13.1019 1.30138 13.0133 1.26441 12.9495 1.20184L12.6222 0.874672C11.4538 -0.290531 9.5503 -0.292583 8.37776 0.874672L8.05053 1.20084C7.9867 1.26443 7.89808 1.30138 7.80749 1.30138H7.3463C5.69198 1.30138 4.34542 2.64305 4.34542 4.29136V4.75087C4.34542 4.84216 4.30949 4.9283 4.24464 4.9919L3.91615 5.32007C2.7467 6.48527 2.7467 8.38288 3.91615 9.54911L4.24464 9.87527C4.30847 9.93989 4.34542 10.026 4.34542 10.1173V10.5768C4.34542 11.8333 5.12884 12.9062 6.23241 13.3483L4.61007 19.0184C4.52978 19.3004 4.61725 19.6041 4.83652 19.801C5.05374 19.997 5.36566 20.0534 5.64053 19.9437L8.49011 18.8061C9.78721 18.2912 11.2138 18.2912 12.5089 18.8061L15.3605 19.9447C15.4541 19.9816 15.552 20 15.6477 20C15.8361 20 16.0203 19.9323 16.1645 19.802C16.3837 19.6051 16.4712 19.3026 16.3909 19.0195L14.7686 13.3493C15.8721 12.9072 16.6556 11.8343 16.6556 10.5778V10.1183C16.6556 10.027 16.6915 9.94087 16.7563 9.87728L17.0848 9.55011C17.0848 9.55011 17.0848 9.55013 17.0848 9.54911C18.2533 8.38288 18.2533 6.4853 17.0838 5.31907ZM13.0814 17.3763C11.4188 16.7157 9.58533 16.7147 7.91556 17.3763L6.52571 17.9312L7.77457 13.5668H7.80548C7.89607 13.5668 7.98444 13.6038 8.04827 13.6663L8.37575 13.9935C8.96048 14.5761 9.72846 14.8685 10.4985 14.8685C11.2664 14.8685 12.0355 14.5771 12.6212 13.9935L12.9484 13.6673C13.0123 13.6037 13.1009 13.5668 13.1915 13.5668H13.2224L14.471 17.9312L13.0814 17.3763ZM15.9926 8.4608L15.6643 8.78796C15.3071 9.14286 15.1114 9.61573 15.1114 10.1173V10.5768C15.1114 11.3769 14.4577 12.0282 13.6547 12.0282H13.1935C12.6963 12.0282 12.2095 12.2292 11.8584 12.58L11.5309 12.9062C10.9802 13.4539 10.0208 13.4539 9.47004 12.9062L9.14256 12.579C8.79152 12.2293 8.30575 12.0282 7.80749 12.0282H7.3463C6.54333 12.0282 5.88959 11.3769 5.88959 10.5768V10.1173C5.88959 9.61471 5.69414 9.14288 5.33692 8.78696L5.00843 8.4608C4.44121 7.89461 4.44121 6.97254 5.00843 6.40738L5.33692 6.08021C5.69414 5.72532 5.88959 5.25244 5.88959 4.75087V4.29136C5.88959 3.49131 6.54333 2.83994 7.3463 2.83994H7.80749C8.30472 2.83994 8.79152 2.63894 9.14256 2.28815L9.47004 1.96198C10.0208 1.41425 10.9802 1.41425 11.5309 1.96198L11.8584 2.28915C12.2095 2.63892 12.6952 2.83994 13.1935 2.83994H13.6547C14.4577 2.83994 15.1114 3.49131 15.1114 4.29136V4.75087C15.1114 5.25347 15.3071 5.72529 15.6643 6.08121L15.9926 6.40738C16.5598 6.97357 16.5598 7.89461 15.9926 8.4608ZM10.4995 4.10054C8.65472 4.10054 7.15378 5.59602 7.15378 7.43409C7.15378 9.27215 8.65472 10.7676 10.4995 10.7676C12.3443 10.7676 13.8452 9.27215 13.8452 7.43409C13.8452 5.59602 12.3443 4.10054 10.4995 4.10054ZM10.4995 9.22907C9.50607 9.22907 8.69795 8.42389 8.69795 7.43409C8.69795 6.44428 9.50607 5.6391 10.4995 5.6391C11.4929 5.6391 12.301 6.44428 12.301 7.43409C12.301 8.42389 11.4929 9.22907 10.4995 9.22907Z"
                  fill="#BEBDBD"
                />
              </g>
            </svg>
            <p className="text-indigo-950 text-base font-normal font-lato leading-normal">
              {`Prueba ${prueba.nombre}`}
            </p>
          </div>
        </div>
        <button
          className={`p-2 rounded justify-start items-center gap-2.5 flex 
          ${isEditing ? "bg-gray-200" : ""} 
          hover:border focus:border-gray-300`}
          // onClick={() => setIsEditing(!isEditing)}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="pen-line">
              <path
                id="pen-line_2"
                d="M22.0195 7.23096C22.0205 6.49496 21.7346 5.80296 21.2136 5.28296L18.9856 3.05506C18.4646 2.53506 17.7746 2.24803 17.0376 2.24903C16.3016 2.25003 15.6105 2.53796 15.0925 3.05896L2.73853 15.47C2.59753 15.611 2.51953 15.801 2.51953 15.999V20.999C2.51953 21.413 2.85553 21.749 3.26953 21.749H8.26953C8.46753 21.749 8.65858 21.67 8.79858 21.531L21.2095 9.17603C21.7315 8.65803 22.0185 7.96696 22.0195 7.23096ZM7.95947 20.25H4.01953V16.3101L13.0125 7.276L16.9946 11.257L7.95947 20.25ZM20.1516 8.11402L18.0576 10.199L14.0706 6.21302L16.1555 4.11804C16.3915 3.88104 16.7055 3.751 17.0405 3.75H17.0415C17.3755 3.75 17.6895 3.87997 17.9265 4.11597L20.1545 6.344C20.3905 6.581 20.5205 6.89498 20.5205 7.22998C20.5195 7.56398 20.3886 7.87802 20.1516 8.11402ZM22.0195 21C22.0195 21.414 21.6835 21.75 21.2695 21.75H14.2695C13.8555 21.75 13.5195 21.414 13.5195 21C13.5195 20.586 13.8555 20.25 14.2695 20.25H21.2695C21.6835 20.25 22.0195 20.586 22.0195 21Z"
                fill="#23254C"
              />
            </g>
          </svg>
        </button>
      </div>

      {isOpen && isEditing === false && (
        <div className="flex flex-col w-full ">
          <div className="contenedorRecorridos flex justify-around w-full mb-4">
            <div className="contenedorSetUp flex flex-col w-full ">
              <div className="contenedorInputsR1 flex flex-row items-center gap-x-2 ">
                <div className="label font-primary text-sm font-normal text-[#494949] w-max pr-4">
                  Recorrido 1:{" "}
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.82733 0.617188H3.55758C4.40271 0.617188 5.09194 1.26539 5.09194 2.06949V13.9341C5.09194 14.7382 4.40271 15.3864 3.55758 15.3864H2.81092C1.97399 15.3864 1.29297 14.7464 1.29297 13.9505V2.06949C1.29297 1.26539 1.9822 0.617188 2.82733 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8195 0.617188H14.5498C15.3949 0.617188 16.0841 1.26539 16.0841 2.06949V13.9341C16.0841 14.7382 15.3949 15.3864 14.5498 15.3864H13.8031C12.9662 15.3864 12.2852 14.7464 12.2852 13.9505V2.06949C12.2852 1.26539 12.9744 0.617188 13.8195 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 4.34375H8.69409H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 6.85156H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 9.07812H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 11.5859H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="font-primary text-sm font-normal text-[#494949] ">
                  Vallas:{" "}
                </div>
                <InputsResultsCustom2 value={vallas1} setValue={setVallas1} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.82733 0.617188H3.55758C4.40271 0.617188 5.09194 1.26539 5.09194 2.06949V13.9341C5.09194 14.7382 4.40271 15.3864 3.55758 15.3864H2.81092C1.97399 15.3864 1.29297 14.7464 1.29297 13.9505V2.06949C1.29297 1.26539 1.9822 0.617188 2.82733 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8195 0.617188H14.5498C15.3949 0.617188 16.0841 1.26539 16.0841 2.06949V13.9341C16.0841 14.7382 15.3949 15.3864 14.5498 15.3864H13.8031C12.9662 15.3864 12.2852 14.7464 12.2852 13.9505V2.06949C12.2852 1.26539 12.9744 0.617188 13.8195 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 4.34375H8.69409H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 6.85156H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 9.07812H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 11.5859H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="font-primary text-sm font-normal text-[#494949] ">
                  Corrales Dobles:{" "}
                </div>
                <InputsResultsCustom2
                  value={corralDoble1}
                  setValue={setDobleCorral1}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.82733 0.617188H3.55758C4.40271 0.617188 5.09194 1.26539 5.09194 2.06949V13.9341C5.09194 14.7382 4.40271 15.3864 3.55758 15.3864H2.81092C1.97399 15.3864 1.29297 14.7464 1.29297 13.9505V2.06949C1.29297 1.26539 1.9822 0.617188 2.82733 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8195 0.617188H14.5498C15.3949 0.617188 16.0841 1.26539 16.0841 2.06949V13.9341C16.0841 14.7382 15.3949 15.3864 14.5498 15.3864H13.8031C12.9662 15.3864 12.2852 14.7464 12.2852 13.9505V2.06949C12.2852 1.26539 12.9744 0.617188 13.8195 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 4.34375H8.69409H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 6.85156H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 9.07812H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 11.5859H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="font-primary text-sm font-normal text-[#494949] ">
                  Corrales Triples:{" "}
                </div>
                <InputsResultsCustom2
                  value={corralTriple1}
                  setValue={setTripleCorral1}
                />

                <div className="tiempoAcordado flex  py-2 items-center gap-x-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M11.9315 5.30868L12.5546 4.68669C12.7502 4.49135 12.7502 4.17466 12.5546 3.97933C12.3589 3.784 12.0418 3.784 11.8461 3.97933L11.1931 4.63135C10.2663 3.92468 9.11328 3.5 7.86002 3.5C4.82269 3.5 2.35156 5.96733 2.35156 9C2.35156 12.0327 4.82269 14.5 7.86002 14.5C10.8974 14.5 13.3685 12.0327 13.3685 9C13.3685 7.57867 12.8209 6.28601 11.9315 5.30868ZM7.86002 13.5C5.37487 13.5 3.3531 11.4813 3.3531 9C3.3531 6.51867 5.37487 4.5 7.86002 4.5C10.3452 4.5 12.3669 6.51867 12.3669 9C12.3669 11.4813 10.3452 13.5 7.86002 13.5ZM9.49584 9.60002C9.71684 9.76602 9.76169 10.0793 9.59544 10.3C9.49795 10.4306 9.34701 10.5 9.19411 10.5C9.08995 10.5 8.98447 10.4673 8.89433 10.4L7.55894 9.39998C7.43342 9.30532 7.3586 9.15733 7.3586 9V6.66667C7.3586 6.39067 7.58295 6.16667 7.85937 6.16667C8.1358 6.16667 8.36014 6.39067 8.36014 6.66667V8.75L9.49584 9.60002ZM5.69002 2C5.69002 1.724 5.91437 1.5 6.19079 1.5H9.52926C9.80568 1.5 10.03 1.724 10.03 2C10.03 2.276 9.80568 2.5 9.52926 2.5H6.19079C5.91437 2.5 5.69002 2.276 5.69002 2Z"
                      fill="#23254C"
                    />
                  </svg>
                  <div className="label font-primary text-sm font-normal text-[#494949] w-max mr-2">
                    Tiempo acordado:
                  </div>
                  <InputsResultsCustom2
                    value={tiempoAcordado1}
                    setValue={setTiempoAcordado1}
                  />
                  {!tiempoAcordado1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7940_248847)">
                        <path
                          d="M8.17839 5.33594V8.0026M8.17839 10.6693H8.18505M14.8451 8.0026C14.8451 11.6845 11.8603 14.6693 8.17839 14.6693C4.49649 14.6693 1.51172 11.6845 1.51172 8.0026C1.51172 4.32071 4.49649 1.33594 8.17839 1.33594C11.8603 1.33594 14.8451 4.32071 14.8451 8.0026Z"
                          stroke="#E68928"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7940_248847">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.179688)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>

                <div className="tiempoOptimo flex px-4 py-2 items-center justify-center gap-x-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M11.9315 5.30868L12.5546 4.68669C12.7502 4.49135 12.7502 4.17466 12.5546 3.97933C12.3589 3.784 12.0418 3.784 11.8461 3.97933L11.1931 4.63135C10.2663 3.92468 9.11328 3.5 7.86002 3.5C4.82269 3.5 2.35156 5.96733 2.35156 9C2.35156 12.0327 4.82269 14.5 7.86002 14.5C10.8974 14.5 13.3685 12.0327 13.3685 9C13.3685 7.57867 12.8209 6.28601 11.9315 5.30868ZM7.86002 13.5C5.37487 13.5 3.3531 11.4813 3.3531 9C3.3531 6.51867 5.37487 4.5 7.86002 4.5C10.3452 4.5 12.3669 6.51867 12.3669 9C12.3669 11.4813 10.3452 13.5 7.86002 13.5ZM9.49584 9.60002C9.71684 9.76602 9.76169 10.0793 9.59544 10.3C9.49795 10.4306 9.34701 10.5 9.19411 10.5C9.08995 10.5 8.98447 10.4673 8.89433 10.4L7.55894 9.39998C7.43342 9.30532 7.3586 9.15733 7.3586 9V6.66667C7.3586 6.39067 7.58295 6.16667 7.85937 6.16667C8.1358 6.16667 8.36014 6.39067 8.36014 6.66667V8.75L9.49584 9.60002ZM5.69002 2C5.69002 1.724 5.91437 1.5 6.19079 1.5H9.52926C9.80568 1.5 10.03 1.724 10.03 2C10.03 2.276 9.80568 2.5 9.52926 2.5H6.19079C5.91437 2.5 5.69002 2.276 5.69002 2Z"
                      fill="#23254C"
                    />
                  </svg>
                  <div className="label font-primary text-sm font-normal text-[#494949] w-max mr-2">
                    Tiempo Optimo:{" "}
                  </div>
                  <InputsResultsCustom2
                    value={tiempoOptimo}
                    setValue={setTiempoOptimo}
                  />
                  {!tiempoOptimo && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7940_248847)">
                        <path
                          d="M8.17839 5.33594V8.0026M8.17839 10.6693H8.18505M14.8451 8.0026C14.8451 11.6845 11.8603 14.6693 8.17839 14.6693C4.49649 14.6693 1.51172 11.6845 1.51172 8.0026C1.51172 4.32071 4.49649 1.33594 8.17839 1.33594C11.8603 1.33594 14.8451 4.32071 14.8451 8.0026Z"
                          stroke="#E68928"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7940_248847">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.179688)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
              <div className="contenedorInputsR2 flex flex-row items-center gap-x-2">
                <div className="label font-primary text-sm font-normal text-[#494949] w-max pr-4">
                  Recorrido 2:{" "}
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.82733 0.617188H3.55758C4.40271 0.617188 5.09194 1.26539 5.09194 2.06949V13.9341C5.09194 14.7382 4.40271 15.3864 3.55758 15.3864H2.81092C1.97399 15.3864 1.29297 14.7464 1.29297 13.9505V2.06949C1.29297 1.26539 1.9822 0.617188 2.82733 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8195 0.617188H14.5498C15.3949 0.617188 16.0841 1.26539 16.0841 2.06949V13.9341C16.0841 14.7382 15.3949 15.3864 14.5498 15.3864H13.8031C12.9662 15.3864 12.2852 14.7464 12.2852 13.9505V2.06949C12.2852 1.26539 12.9744 0.617188 13.8195 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 4.34375H8.69409H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 6.85156H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 9.07812H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 11.5859H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="font-primary text-sm font-normal text-[#494949] ">
                  Vallas:{" "}
                </div>
                <InputsResultsCustom2 value={vallas2} setValue={setvallas2} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.82733 0.617188H3.55758C4.40271 0.617188 5.09194 1.26539 5.09194 2.06949V13.9341C5.09194 14.7382 4.40271 15.3864 3.55758 15.3864H2.81092C1.97399 15.3864 1.29297 14.7464 1.29297 13.9505V2.06949C1.29297 1.26539 1.9822 0.617188 2.82733 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8195 0.617188H14.5498C15.3949 0.617188 16.0841 1.26539 16.0841 2.06949V13.9341C16.0841 14.7382 15.3949 15.3864 14.5498 15.3864H13.8031C12.9662 15.3864 12.2852 14.7464 12.2852 13.9505V2.06949C12.2852 1.26539 12.9744 0.617188 13.8195 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 4.34375H8.69409H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 6.85156H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 9.07812H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 11.5859H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="font-primary text-sm font-normal text-[#494949] ">
                  Corrales Dobles:{" "}
                </div>
                <InputsResultsCustom2
                  value={corralDoble2}
                  setValue={setDobleCorral2}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.82733 0.617188H3.55758C4.40271 0.617188 5.09194 1.26539 5.09194 2.06949V13.9341C5.09194 14.7382 4.40271 15.3864 3.55758 15.3864H2.81092C1.97399 15.3864 1.29297 14.7464 1.29297 13.9505V2.06949C1.29297 1.26539 1.9822 0.617188 2.82733 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.8195 0.617188H14.5498C15.3949 0.617188 16.0841 1.26539 16.0841 2.06949V13.9341C16.0841 14.7382 15.3949 15.3864 14.5498 15.3864H13.8031C12.9662 15.3864 12.2852 14.7464 12.2852 13.9505V2.06949C12.2852 1.26539 12.9744 0.617188 13.8195 0.617188Z"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 4.34375H8.69409H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 6.85156H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 9.07812H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.69922 11.5859H11.6808"
                    stroke="#23254C"
                    stroke-width="1.28828"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="font-primary text-sm font-normal text-[#494949] ">
                  Corrales Triples:{" "}
                </div>
                <InputsResultsCustom2
                  value={corralTriple2}
                  setValue={setTripleCorral2}
                />

                <div className="tiempoAcordado flex  py-2 items-center gap-x-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M11.9315 5.30868L12.5546 4.68669C12.7502 4.49135 12.7502 4.17466 12.5546 3.97933C12.3589 3.784 12.0418 3.784 11.8461 3.97933L11.1931 4.63135C10.2663 3.92468 9.11328 3.5 7.86002 3.5C4.82269 3.5 2.35156 5.96733 2.35156 9C2.35156 12.0327 4.82269 14.5 7.86002 14.5C10.8974 14.5 13.3685 12.0327 13.3685 9C13.3685 7.57867 12.8209 6.28601 11.9315 5.30868ZM7.86002 13.5C5.37487 13.5 3.3531 11.4813 3.3531 9C3.3531 6.51867 5.37487 4.5 7.86002 4.5C10.3452 4.5 12.3669 6.51867 12.3669 9C12.3669 11.4813 10.3452 13.5 7.86002 13.5ZM9.49584 9.60002C9.71684 9.76602 9.76169 10.0793 9.59544 10.3C9.49795 10.4306 9.34701 10.5 9.19411 10.5C9.08995 10.5 8.98447 10.4673 8.89433 10.4L7.55894 9.39998C7.43342 9.30532 7.3586 9.15733 7.3586 9V6.66667C7.3586 6.39067 7.58295 6.16667 7.85937 6.16667C8.1358 6.16667 8.36014 6.39067 8.36014 6.66667V8.75L9.49584 9.60002ZM5.69002 2C5.69002 1.724 5.91437 1.5 6.19079 1.5H9.52926C9.80568 1.5 10.03 1.724 10.03 2C10.03 2.276 9.80568 2.5 9.52926 2.5H6.19079C5.91437 2.5 5.69002 2.276 5.69002 2Z"
                      fill="#23254C"
                    />
                  </svg>
                  <div className="label font-primary text-sm font-normal text-[#494949] w-max mr-2">
                    Tiempo acordado:{" "}
                  </div>
                  <InputsResultsCustom2
                    value={tiempoAcordado2}
                    setValue={setTiempoAcordado2}
                  />
                  {!tiempoAcordado1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7940_248847)">
                        <path
                          d="M8.17839 5.33594V8.0026M8.17839 10.6693H8.18505M14.8451 8.0026C14.8451 11.6845 11.8603 14.6693 8.17839 14.6693C4.49649 14.6693 1.51172 11.6845 1.51172 8.0026C1.51172 4.32071 4.49649 1.33594 8.17839 1.33594C11.8603 1.33594 14.8451 4.32071 14.8451 8.0026Z"
                          stroke="#E68928"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7940_248847">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.179688)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
                <div>
                  <button className="botonActualizar border border-gray-300 text-[#494949] px-2 py-2 text-sm rounded font-primary mr-11" onClick={() => handleActualizarPropiedadesPrueba()}>Actualizar prueba</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full items-center border-b border-b-zinc-100 justify-between">
            {topHeaderTable.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-[#494949] text-xs font-normal text-start font-lato leading-[18px] px-4 py-3"
                >
                  {item}
                </p>
              );
            })}
          </div>
          <NoEditableFormProofs {...prueba} />
          <ProofsInscripted
            id={prueba.id}
            inscriptos={prueba.inscriptos}
            numeroDeVallas1={numeroDeVallas1}
            numeroDeVallas2={numeroDeVallas2}
            tiempoAcordado1={tiempoAcordado1}
            tiempoAcordado2={tiempoAcordado2}
          />
        </div>
      )}
      {/* {isOpen && isEditing === true && (
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full items-center justify-between border-b border-b-zinc-100">
            {topHeaderTable.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-[#494949] text-xs flex-1 font-normal text-start font-lato leading-[18px] px-4 py-3"
                >
                  {item}
                </p>
              );
            })}
          </div>
          <EditableFormProofs
            {...prueba}
            setValue={setValue}
            sendData={sendNewData}
          />
        </div>
      )} */}
    </div>
  );
};

export default MyProofs;
