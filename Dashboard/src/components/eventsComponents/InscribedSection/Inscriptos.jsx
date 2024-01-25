import { useEffect } from "react";
import HeaderInscriptosPruebas from "../../DashboardComponets/HeaderInscriptosPruebas";
import { getPruebaInscriptos } from "../../../../peticiones/event";
import { setInscriptosPorPrueba } from "@/redux/reducer/reducerEventAll";
import { useDispatch, useSelector } from "react-redux";
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import horsePic from "../../../../public/img/profilehorse.png";

const Inscriptos = ({ prueba, creadorId }) => {
  const dispatch = useDispatch();
  const inscriptosState = useSelector(
    (state) => state.reducerEventAll.inscriptosPorPrueba
  );
  const user = useSelector((state) => state.reducerAuth.usuarioAuth.id);
  console.log("inscriptosState", inscriptosState);
  const inscriptos = inscriptosState?.inscriptos;
  let id = prueba;

  console.log("inscriptos", inscriptosState);
  // console.log("creador", creadorId);

  useEffect(() => {
    getPruebaInscriptos({
      id,
      success: (v) => {
        dispatch(setInscriptosPorPrueba(v));
      },
      error: (e) => console.log("error", e),
      loading: (l) => dispatch(authSetLoading(l)),
    });

    return () => {
      dispatch(setInscriptosPorPrueba([]));
    };
  }, [id]);

  return (
    <div className="w-[100%]">
      <HeaderInscriptosPruebas user={user} creadorId={creadorId} />
      <div className="flex flex-col w-[100%] h-auto">
        {inscriptos &&
          inscriptos.map((inscripto, index) => {
            let nombre =
              inscripto.jineteLastName.charAt(0).toUpperCase() +
              inscripto.jineteLastName.slice(1).toLowerCase();
            let apellido =
              inscripto.Jinete.charAt(0).toUpperCase() +
              inscripto.Jinete.slice(1).toLowerCase();
            let inicialNombre = inscripto?.Jinete.slice(0, 1).toUpperCase();
            let inicialApellido = inscripto?.jineteLastName
              .slice(0, 1)
              .toUpperCase();
            let iniciales = inicialApellido + inicialNombre;
            let fotoCaballo = inscripto?.FotoCaballo
              ? inscripto.FotoCaballo
              : horsePic.src;

            const iconoClub = (
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 27.9891C14.9033 27.9891 14.8066 27.9733 14.7136 27.9419C12.7935 27.3015 3.21875 23.6052 3.21875 13.6558V6.54119C3.21875 6.10981 3.52328 5.73631 3.94741 5.65293C9.84408 4.4736 11.9345 3.43697 14.582 2.12351C14.8369 1.99664 15.1764 1.97982 15.4301 2.1067C18.0389 3.42257 20.1003 4.46151 26.0538 5.65293C26.4779 5.73751 26.7824 6.10981 26.7824 6.54119V13.657C26.7824 23.6064 17.2077 27.3027 15.2876 27.9431C15.1934 27.9733 15.0967 27.9891 15 27.9891ZM5.03125 7.28076V13.6558C5.03125 21.951 12.7863 25.3284 15 26.1223C17.2137 25.3284 24.9688 21.9498 24.9688 13.6558V7.28076C19.6243 6.16184 17.3779 5.11401 15.018 3.92864C12.5083 5.16959 10.3298 6.17392 5.03125 7.28076ZM17.7695 20.1494C17.529 20.1494 17.2886 20.0914 17.0638 19.9742L15 18.8977L12.9362 19.9742C12.419 20.2448 11.804 20.1979 11.3364 19.8535C10.8675 19.5115 10.6378 18.9447 10.7369 18.3732L11.1284 16.1064L9.40792 14.4426C9.00071 14.0486 8.8557 13.4699 9.0309 12.931C9.20611 12.3908 9.66288 12.0054 10.226 11.9244L12.6111 11.5798L13.6406 9.5101C13.898 8.99172 14.42 8.66904 15.0012 8.66904C15.5812 8.66904 16.1032 8.99172 16.3617 9.5101L17.3913 11.5798L19.7779 11.9244C20.3397 12.0042 20.7975 12.3908 20.9715 12.931C21.1467 13.4699 21.0004 14.0486 20.5944 14.4426L18.874 16.1064L19.2666 18.3755C19.3645 18.9483 19.1337 19.5139 18.6648 19.8559C18.3966 20.0504 18.0849 20.1494 17.7695 20.1494ZM15 17.0427C15.2344 17.0427 15.4699 17.0985 15.6838 17.2109L17.3745 18.0929L17.0529 16.2379C16.9708 15.7558 17.1302 15.2653 17.483 14.9258L18.833 13.6207L16.955 13.3502C16.4753 13.2801 16.0597 12.9803 15.8434 12.5477L14.9976 10.8465L14.153 12.5454C13.9355 12.9792 13.5209 13.2801 13.0412 13.3502L11.1623 13.6207L12.5146 14.9281C12.865 15.2653 13.0257 15.7558 12.9424 16.2368L12.6208 18.0929L14.3112 17.2109C14.5299 17.0997 14.7656 17.0427 15 17.0427ZM11.2579 16.232C11.2579 16.232 11.2579 16.2332 11.2591 16.2332L11.2579 16.232ZM18.7448 16.2297C18.7436 16.2309 18.7448 16.2309 18.7448 16.2297V16.2297ZM19.5168 13.7186H19.5289H19.5168ZM14.7366 10.3172L14.7377 10.3184L14.7366 10.3172Z"
                  fill="#25314C"
                />
              </svg>
            );

            return (
              <div
                key={index}
                className="flex flex-row h-[78px] w-[95%] border-b border-gray-300 justify-start items-center gap-3 mx-auto"
              >
                <div className="w-[2%] px-2">
                  <span className="text-indigo-950 text-sm font-semibold font-lato leading-tight">
                    {index + 1}
                  </span>
                </div>

                <div className="w-[20%] flex flex-row">
                  <div className="w-8 h-8 py-1.5 bg-teal-200 rounded-[200px] flex items-center justify-center ">
                    <p className="text-center text-indigo-800 text-sm font-normal font-lato leading-tight">
                      {" "}
                      {iniciales}
                    </p>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-zinc-900 text-sm font-bold font-lato leading-tight">
                      {nombre}
                      {"  "}
                      {apellido}
                    </p>
                    <p className="text-zinc-600 text-xs font-normal font-lato leading-[18px]">
                      {inscripto.emailJinete
                        ? inscripto.emailJinete
                        : "Inscripto manualmente"}
                    </p>
                  </div>
                </div>

                <div className="w-[15%] flex flex-row gap-2 items-center justify-center">
                  <img
                    src={fotoCaballo}
                    alt="horse icon"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="w-[63.54px] text-neutral-700 text-xs font-normal font-lato leading-[18px]">
                    {inscripto.nombreDelCaballo}
                  </p>
                </div>

                <div className="w-[15%] h-[78px] px-4 py-3 flex justify-center items-center gap-3">
                  <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">
                    {inscripto.categoria}
                  </p>
                </div>

                <div className="w-[18%] h-[78px] justify-center items-center gap-2 flex flex-row">
                  <div className="bg-stone-200 rounded-[200px] flex justify-center p-1.5">
                    {iconoClub}
                  </div>
                  <p className="w-[82px] text-neutral-700 text-xs font-normal font-lato leading-[18px]">
                    {inscripto.clubRepresenta}
                  </p>
                </div>

                {/* el pago */}

                {user === creadorId && (
                  <div className="h-[72px] p-4 justify-center items-center gap-3 inline-flex px-6 w-auto">
                    {inscripto.tipodepago === undefined && (
                      <div className="flex flex-row items-center w-auto h-6 px-2 py-0.5 bg-green-50 rounded-2xl justify-center gap-1">
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 5.50016C7.12133 5.50016 6 6.6215 6 8.00016C6 9.37883 7.12133 10.5002 8.5 10.5002C9.87867 10.5002 11 9.37883 11 8.00016C11 6.6215 9.87867 5.50016 8.5 5.50016ZM8.5 9.50016C7.67267 9.50016 7 8.8275 7 8.00016C7 7.17283 7.67267 6.50016 8.5 6.50016C9.32733 6.50016 10 7.17283 10 8.00016C10 8.8275 9.32733 9.50016 8.5 9.50016ZM12.5 2.8335H4.5C2.888 2.8335 2 3.7215 2 5.3335V10.6668C2 12.2788 2.888 13.1668 4.5 13.1668H12.5C14.112 13.1668 15 12.2788 15 10.6668V5.3335C15 3.7215 14.112 2.8335 12.5 2.8335ZM14 10.6668C14 11.7182 13.5513 12.1668 12.5 12.1668H4.5C3.44867 12.1668 3 11.7182 3 10.6668V5.3335C3 4.28216 3.44867 3.8335 4.5 3.8335H12.5C13.5513 3.8335 14 4.28216 14 5.3335V10.6668ZM5.16667 8.00016C5.16667 8.36816 4.868 8.66683 4.5 8.66683C4.132 8.66683 3.83333 8.36816 3.83333 8.00016C3.83333 7.63216 4.132 7.3335 4.5 7.3335C4.868 7.3335 5.16667 7.63216 5.16667 8.00016ZM13.1667 8.00016C13.1667 8.36816 12.868 8.66683 12.5 8.66683C12.132 8.66683 11.8333 8.36816 11.8333 8.00016C11.8333 7.63216 12.132 7.3335 12.5 7.3335C12.868 7.3335 13.1667 7.63216 13.1667 8.00016Z"
                            fill="#1C694E"
                          />
                        </svg>
                        <p className="text-teal-800 text-xs font-semibold font-lato leading-[18px]">
                          Pagó en efectivo
                        </p>
                      </div>
                    )}

                    {inscripto.tipodePago === "transferencia" && (
                      <div className="flex flex-row items-center w-auto h-6 px-2 py-0.5 bg-green-50 rounded-2xl justify-center gap-1">
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.14664 5.02004C2.10064 4.97404 2.06407 4.91861 2.03873 4.85727C1.98807 4.73527 1.98807 4.59728 2.03873 4.47528C2.06407 4.41394 2.10064 4.35868 2.14664 4.31268L4.81331 1.64601C5.00864 1.45068 5.32533 1.45068 5.52067 1.64601C5.716 1.84135 5.716 2.15804 5.52067 2.35337L3.70735 4.16668H11.8333C12.1093 4.16668 12.3333 4.39068 12.3333 4.66668C12.3333 4.94268 12.1093 5.16668 11.8333 5.16668H3.70735L5.52067 6.98C5.716 7.17533 5.716 7.49202 5.52067 7.68735C5.42333 7.78469 5.29531 7.834 5.16731 7.834C5.03931 7.834 4.91129 7.78535 4.81396 7.68735L2.14664 5.02004ZM14.9613 11.1419C14.9359 11.0806 14.8993 11.0253 14.8533 10.9793L12.1867 8.31268C11.9913 8.11735 11.6747 8.11735 11.4793 8.31268C11.284 8.50801 11.284 8.8247 11.4793 9.02004L13.2926 10.8333H5.16666C4.89066 10.8333 4.66666 11.0573 4.66666 11.3333C4.66666 11.6093 4.89066 11.8333 5.16666 11.8333H13.2926L11.4793 13.6467C11.284 13.842 11.284 14.1587 11.4793 14.354C11.5767 14.4514 11.7047 14.5007 11.8327 14.5007C11.9607 14.5007 12.0887 14.452 12.186 14.354L14.8527 11.6874C14.8987 11.6414 14.9353 11.5861 14.9606 11.5248C15.0119 11.4021 15.0119 11.2646 14.9613 11.1419Z"
                            fill="#1C694E"
                          />
                        </svg>

                        <p className="text-teal-800 text-xs font-semibold  font-lato leading-[18px]">
                          Pago con transferencia
                        </p>
                      </div>
                    )}

                    {inscripto.tipodePago === "tarjeta" && (
                      <div className="flex flex-row items-center w-auto h-6 px-2 py-0.5 bg-green-50 rounded-2xl justify-center gap-1">
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.8335H4.5C2.888 2.8335 2 3.7215 2 5.3335V10.6668C2 12.2788 2.888 13.1668 4.5 13.1668H12.5C14.112 13.1668 15 12.2788 15 10.6668V5.3335C15 3.7215 14.112 2.8335 12.5 2.8335ZM14 10.6668C14 11.7182 13.5513 12.1668 12.5 12.1668H4.5C3.44867 12.1668 3 11.7182 3 10.6668V7.16683H14V10.6668ZM14 6.16683H3V5.3335C3 4.28216 3.44867 3.8335 4.5 3.8335H12.5C13.5513 3.8335 14 4.28216 14 5.3335V6.16683ZM4.66667 10.0002C4.66667 9.72416 4.89067 9.50016 5.16667 9.50016H7.16667C7.44267 9.50016 7.66667 9.72416 7.66667 10.0002C7.66667 10.2762 7.44267 10.5002 7.16667 10.5002H5.16667C4.89067 10.5002 4.66667 10.2762 4.66667 10.0002Z"
                            fill="#1C694E"
                          />
                        </svg>

                        <p className="text-teal-800 text-xs font-semibold  font-lato leading-[18px]">
                          Pago con tarjeta
                        </p>
                      </div>
                    )}

                    {inscripto.estadoDePago === "nopago" && (
                      <div className="flex flex-row items-center w-auto h-6 px-2 py-0.5 bg-white rounded-2xl justify-center gap-1">
                        <p className="text-indigo-950 text-xs font-semibold  font-lato leading-[18px]">
                          No pagó
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Inscriptos;
