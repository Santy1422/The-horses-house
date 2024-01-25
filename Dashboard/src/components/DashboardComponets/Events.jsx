import Modal from "@/components/DashboardComponets/Modal";
import SideBar from "@/components/DashboardComponets/SideBar";
import Paso1 from "@/components/CreateEventComponents/crear_evento_pasos/paso_1";
import Paso2 from "@/components/CreateEventComponents/crear_evento_pasos/paso_2";
import Button from "@/components/reusableComponents/Button";
import CardEvent from "@/components/reusableComponents/CardEvent";
import { eventAllSetEvents } from "@/redux/reducer/reducerEventAll";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventGetAll } from "../../../peticiones/event";
import { bell2, iconHelperHidden } from "@/iconos/icons";

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pasos, setPasos] = useState(1);
  const dispatch = useDispatch();
  const [scrollPositionComing, setScrollPositionComing] = useState(0);
  const [scrollPositionFinish, setScrollPositionFinish] = useState(0);
  const [showFiltros, setShowFiltros] = useState(false);
  const [filtros, setFiltros] = useState([]);

  const filterOptions = ['Mis eventos', 'En curso', 'Futuros', 'Pasados']

  const handleScrollComing = (scrollValue) => {
    setScrollPositionComing(scrollValue);
  };

  const handleScrollFinish = (scrollValue) => {
    setScrollPositionFinish(scrollValue);
  };

  const handleNextClickComing = () => {
    const newScrollPosition = Math.min(
      scrollPositionComing + 1,
      events.length - 3
    );
    handleScrollComing(newScrollPosition);
  };

  const handlePrevClickComing = () => {
    const newScrollPosition = Math.max(0, scrollPositionComing - 1);
    handleScrollComing(newScrollPosition);
  };

  const handleNextClickFinish = () => {
    const newScrollPosition = Math.min(
      scrollPositionFinish + 1,
      events.length - 3
    );
    handleScrollFinish(newScrollPosition);
  };

  const handlePrevClickFinish = () => {
    const newScrollPosition = Math.max(0, scrollPositionFinish - 1);
    handleScrollFinish(newScrollPosition);
  };

  const allEventState = useSelector((state) => state.reducerEventAll);
  const { eventAll: events } = allEventState;

  useEffect(() => {
    eventGetAll({
      succes: (v) => dispatch(eventAllSetEvents(v)),
      error: (e) => console.log(e),
      loading: (l) => console.log(l),
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  //agregar un filtro
  const handleFiltrosSeleccionados = (f) => {
    if (filtros.includes(f)) return null
    else setFiltros([...filtros, f])
  }

  //eliminar un filtro
  const handleFilterDelete = (f) => {
    const deletedfiltro = filtros.filter(op => op !== f)
    setFiltros(deletedfiltro)
  }

  return (
    <div className="main w-full flex flex-row bg-[#23254C] ">
      <SideBar />
      {/* breadcrumbs */}
      <div className="h-[100%] first-line:w-[100%] bg-white rounded-l-3xl px-[76px] pt-8 flex flex-col flex-1 pb-7">
        <div className="flex-col justify-start w-full items-start gap-5 inline-flex h-full">


          <div className="rounded-md justify-start items-center gap-3 inline-flex">
            <div className="justify-center items-center gap-1.5 flex">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="award">
                  <path
                    id="award_2"
                    d="M13.7671 4.74549L13.5043 4.48455C13.4532 4.43286 13.4236 4.36396 13.4236 4.29093V3.92332C13.4236 2.60467 12.3464 1.53134 11.0229 1.53134H10.654C10.5815 1.53134 10.5106 1.50176 10.4596 1.45171L10.1978 1.18997C9.26304 0.257809 7.74024 0.256168 6.80221 1.18997L6.54042 1.45091C6.48936 1.50178 6.41847 1.53134 6.34599 1.53134H5.97704C4.65358 1.53134 3.57634 2.60467 3.57634 3.92332V4.29093C3.57634 4.36396 3.5476 4.43288 3.49571 4.48375L3.23292 4.74629C2.29736 5.67845 2.29736 7.19654 3.23292 8.12952L3.49571 8.39045C3.54677 8.44215 3.57634 8.51105 3.57634 8.58408V8.95169C3.57634 9.95688 4.20307 10.8152 5.08593 11.1689L3.78806 15.7049C3.72382 15.9306 3.7938 16.1735 3.96922 16.3311C4.14299 16.4878 4.39253 16.533 4.61242 16.4452L6.89208 15.5351C7.92977 15.1232 9.07106 15.1232 10.1071 15.5351L12.3884 16.446C12.4633 16.4755 12.5416 16.4902 12.6182 16.4902C12.7689 16.4902 12.9163 16.4361 13.0316 16.3319C13.207 16.1743 13.277 15.9323 13.2127 15.7058L11.9149 11.1697C12.7977 10.816 13.4245 9.95768 13.4245 8.95249V8.58488C13.4245 8.51185 13.4532 8.44293 13.5051 8.39206L13.7679 8.13032C13.7679 8.13032 13.7679 8.13034 13.7679 8.12952C14.7026 7.19654 14.7026 5.67847 13.7671 4.74549ZM10.5651 14.3912C9.23507 13.8628 7.76826 13.862 6.43245 14.3912L5.32057 14.8352L6.31966 11.3437H6.34439C6.41686 11.3437 6.48755 11.3732 6.53861 11.4233L6.8006 11.685C7.26838 12.1511 7.88276 12.385 8.49879 12.385C9.11316 12.385 9.72837 12.1519 10.197 11.685L10.4588 11.4241C10.5098 11.3732 10.5807 11.3437 10.6532 11.3437H10.6779L11.6768 14.8352L10.5651 14.3912ZM12.894 7.25887L12.6315 7.52061C12.3457 7.80452 12.1891 8.18282 12.1891 8.58408V8.95169C12.1891 9.59173 11.6661 10.1128 11.0237 10.1128H10.6548C10.257 10.1128 9.86758 10.2736 9.58674 10.5543L9.32476 10.8152C8.88415 11.2534 8.11664 11.2534 7.67603 10.8152L7.41405 10.5535C7.13321 10.2736 6.7446 10.1128 6.34599 10.1128H5.97704C5.33467 10.1128 4.81168 9.59173 4.81168 8.95169V8.58408C4.81168 8.182 4.65531 7.80454 4.36954 7.51981L4.10675 7.25887C3.65296 6.80592 3.65296 6.06827 4.10675 5.61614L4.36954 5.3544C4.65531 5.07049 4.81168 4.69219 4.81168 4.29093V3.92332C4.81168 3.28328 5.33467 2.76219 5.97704 2.76219H6.34599C6.74377 2.76219 7.13321 2.60139 7.41405 2.32075L7.67603 2.05982C8.11664 1.62164 8.88415 1.62164 9.32476 2.05982L9.58674 2.32156C9.86758 2.60137 10.2562 2.76219 10.6548 2.76219H11.0237C11.6661 2.76219 12.1891 3.28328 12.1891 3.92332V4.29093C12.1891 4.69301 12.3457 5.07047 12.6315 5.3552L12.894 5.61614C13.3478 6.06909 13.3478 6.80592 12.894 7.25887ZM8.49959 3.77067C7.02377 3.77067 5.82303 4.96705 5.82303 6.4375C5.82303 7.90796 7.02377 9.10434 8.49959 9.10434C9.97541 9.10434 11.1762 7.90796 11.1762 6.4375C11.1762 4.96705 9.97541 3.77067 8.49959 3.77067ZM8.49959 7.87349C7.70486 7.87349 7.05836 7.22935 7.05836 6.4375C7.05836 5.64566 7.70486 5.00151 8.49959 5.00151C9.29432 5.00151 9.94082 5.64566 9.94082 6.4375C9.94082 7.22935 9.29432 7.87349 8.49959 7.87349Z"
                    fill="#353535"
                  />
                </g>
              </svg>
            </div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="nav-arrow-right">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.14645 4.13668C5.95118 4.33194 5.95118 4.64853 6.14645 4.84379L9.79289 8.49023L6.14645 12.1367C5.95118 12.3319 5.95118 12.6485 6.14645 12.8438C6.34171 13.039 6.65829 13.039 6.85355 12.8438L10.8536 8.84379C11.0488 8.64852 11.0488 8.33194 10.8536 8.13668L6.85355 4.13668C6.65829 3.94142 6.34171 3.94142 6.14645 4.13668Z"
                  fill="#C3C3CB"
                />
              </g>
            </svg>
            <div className="justify-center items-center gap-1.5 flex">
              <div className="text-neutral-700 text-xs font-normal font-lato leading-[18px]">
                Concursos
              </div>
            </div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Basic/chevron-right">
                <path
                  id="Icon"
                  d="M6.5 12.4902L10.5 8.49023L6.5 4.49023"
                  stroke="#C3C3CB"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <div className="justify-center items-center gap-1.5 flex">
              <div className="text-stone-300 text-xs font-normal font-lato leading-[18px]">
                Próximos
              </div>
            </div>
          </div>


          <section className="flex flex-row justify-between w-full items-end mt-4">
            <div className="flex flex-col w-[60%]">
              <p className="text-indigo-950 text-[28px] font-bold font-Lato leading-9">
              Concursos
              </p>
              <p className="text-neutral-500 text-base font-normal font-lato leading-normal">
              Accedé a la información detallada sobre los concursos que ya se
                realizaron, los que están en curso y los próximos.
              </p>
            </div>

            <div className="flex flex-row">
              <Button
                action={openModal}
                customStyle={"p-3  h-11 px-4 py-2.5 rounded mr-2 text-sm"}
                variant={"primary"}
                descripcion={"Crear evento"}
              ></Button>
              <div>
                {bell2}
              </div>

            </div>
          </section>

          <div className="w-[100%] flex-col justify-start items-start gap-3 inline-flex mt-5">
            
            <div className="w-full h-11 justify-between items-end inline-flex">
              <div className="h-8 justify-start items-center gap-2 flex">
                <h3 className="text-indigo-950 text-2xl font-bold font-lato leading-loose">
                  Próximos
                </h3>
                <div className="justify-start items-start flex">
                  <div className="px-2.5 py-0.5 bg-orange-50 rounded-2xl justify-center items-center gap-1.5 flex">
                    <div className="text-center text-yellow-700 text-sm font-bold font-lato leading-tight">
                      {events
                        .filter(
                          (event) => new Date(event.fechaInicio) > new Date()
                        )
                        .reduce((acumulador, evento) => {
                          if (evento.estadoEvento === "borrador") {
                            return acumulador + 1;
                          }
                          return acumulador;
                        }, 0)}{" "}
                      borrador
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-3 flex">
                {
                  filtros && filtros.map((f, i) => {
                    return (
                      <Button
                        variant="other-style-alt-2"
                        px="px-3.5"
                        py="py-2"
                        rounded="rounded-[32px]"
                        action={() => handleFilterDelete(f)}
                        key={i}
                      >
                        <p className="text-indigo-950 text-sm font-normal font-lato leading-tight">
                          {f}
                        </p>
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="times">
                            <path
                              id="times_2"
                              d="M15.9415 15.0482C16.1856 15.2924 16.1856 15.6882 15.9415 15.9324C15.8198 16.0541 15.6598 16.1157 15.4998 16.1157C15.3398 16.1157 15.1798 16.0549 15.0581 15.9324L10.4998 11.374L5.94146 15.9324C5.81979 16.0541 5.65979 16.1157 5.49979 16.1157C5.33979 16.1157 5.17979 16.0549 5.05813 15.9324C4.81396 15.6882 4.81396 15.2924 5.05813 15.0482L9.61646 10.4899L5.05813 5.93158C4.81396 5.68741 4.81396 5.29155 5.05813 5.04738C5.30229 4.80322 5.69813 4.80322 5.9423 5.04738L10.5006 9.60574L15.059 5.04738C15.3031 4.80322 15.699 4.80322 15.9431 5.04738C16.1873 5.29155 16.1873 5.68741 15.9431 5.93158L11.3848 10.4899L15.9415 15.0482Z"
                              fill="#25314C"
                            />
                          </g>
                        </svg>
                      </Button>
                    )
                  })

                }
                {/* BOTON DE FILTROS */}
                <div className="relative flex flex-col">
                  <Button
                    variant="other-style-alt-2"
                    px="px-3.5"
                    py="py-2"
                    rounded="rounded-[32px]"
                    action={() =>
                      !showFiltros
                        ? setShowFiltros(true)
                        : setShowFiltros(false)
                    }
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="sliders-horizontal-alt">
                        <path
                          id="sliders-horizontal-alt_2"
                          d="M5.5 3.19824C3.77667 3.19824 2.375 4.59991 2.375 6.32324C2.375 8.04658 3.77667 9.44824 5.5 9.44824C7.22333 9.44824 8.625 8.04658 8.625 6.32324C8.625 4.59991 7.22333 3.19824 5.5 3.19824ZM5.5 8.19824C4.46583 8.19824 3.625 7.35741 3.625 6.32324C3.625 5.28908 4.46583 4.44824 5.5 4.44824C6.53417 4.44824 7.375 5.28908 7.375 6.32324C7.375 7.35741 6.53417 8.19824 5.5 8.19824ZM15.5 11.5316C13.7767 11.5316 12.375 12.9332 12.375 14.6566C12.375 16.3799 13.7767 17.7816 15.5 17.7816C17.2233 17.7816 18.625 16.3799 18.625 14.6566C18.625 12.9332 17.2233 11.5316 15.5 11.5316ZM15.5 16.5316C14.4658 16.5316 13.625 15.6907 13.625 14.6566C13.625 13.6224 14.4658 12.7816 15.5 12.7816C16.5342 12.7816 17.375 13.6224 17.375 14.6566C17.375 15.6907 16.5342 16.5316 15.5 16.5316ZM13 6.94824H18C18.345 6.94824 18.625 6.66824 18.625 6.32324C18.625 5.97824 18.345 5.69824 18 5.69824H13C12.655 5.69824 12.375 5.97824 12.375 6.32324C12.375 6.66824 12.655 6.94824 13 6.94824ZM8 14.0316H3C2.655 14.0316 2.375 14.3116 2.375 14.6566C2.375 15.0016 2.655 15.2816 3 15.2816H8C8.345 15.2816 8.625 15.0016 8.625 14.6566C8.625 14.3116 8.345 14.0316 8 14.0316Z"
                          fill="#231D43"
                        />
                      </g>
                    </svg>
                    <p className="text-indigo-950 text-sm font-normal font-lato leading-tight">
                      Más filtros
                    </p>
                  </Button>
                  {showFiltros ? (
                    <div className="absolute z-50 w-[100%] h-auto mt-10 p-2 bg-white border border-stone-300 rounded-lg flex flex-col">
                      {filterOptions && filterOptions.map((op, i) => {
                        return (

                          <p key={i} className="cursor-pointer text-indigo-950 font-lato text-sm leading-tight p-1.5" onClick={() => handleFiltrosSeleccionados(op)}>
                            {op}
                          </p>
                        )
                      })}
                    </div>
                  ) : null}
                </div>

                {/* SEARCH BAR */}
                <div className="w-80 flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded shadow border border-black border-opacity-20 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Basic/search">
                            <path
                              id="Icon"
                              d="M18 17.9902L14.375 14.3652M16.3333 9.6569C16.3333 13.3388 13.3486 16.3236 9.66667 16.3236C5.98477 16.3236 3 13.3388 3 9.6569C3 5.975 5.98477 2.99023 9.66667 2.99023C13.3486 2.99023 16.3333 5.975 16.3333 9.6569Z"
                              stroke="#BEBDBD"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                        <input type="text" placeholder="Buscar" className="placeholder-slate-500 focus:border-transparent focus:outline-none text-neutral-500 text-base font-normal font-lato leading-normal">

                        </input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center relative gap-4 max-w-[98%]">
              <Button
                variant="other-style-alt-2"
                px="px-[14.6px]"
                py="py-[14.6px]"
                rounded="rounded-[50%]"
                customStyle={`z-10 absolute left-[-70px] h-35 w-30 flex justify-center  ${scrollPositionComing === 0 ? "hidden" : ""}`}
                action={() => handlePrevClickComing()}
                icon={iconHelperHidden}
              ></Button>

              {events
                .filter((event) => new Date(event.fechaInicio) > new Date())
                .slice(scrollPositionComing, scrollPositionComing + 3)
                .map((event) => {
                  return <CardEvent key={event.id} {...event} />;
                })}
                
              <Button
                variant="other-style-alt-2"
                px="px-[14.6px]"
                py="py-[14.6px]"
                rounded="rounded-[50%]"
                icon={<svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="angle-right">
                    <path
                      id="angle-right_2"
                      d="M8.2498 18.5947C8.0738 18.5947 7.89777 18.5278 7.76394 18.393C7.49535 18.1245 7.49535 17.689 7.76394 17.4204L13.6947 11.4896L7.76394 5.55882C7.49535 5.29024 7.49535 4.85479 7.76394 4.5862C8.03252 4.31762 8.46797 4.31762 8.73655 4.5862L15.1532 11.0029C15.4218 11.2715 15.4218 11.7069 15.1532 11.9755L8.73655 18.3922C8.6018 18.5278 8.4258 18.5947 8.2498 18.5947Z"
                      fill="#23254C"
                    />
                  </g>
                </svg>}
                customStyle={`z-10 absolute right-[-70px] ${events.filter(
                  (event) => new Date(event.fechaInicio) > new Date()
                ).length -
                    3 <=
                    scrollPositionComing
                    ? "hidden"
                    : ""
                  }`}
                action={() => handleNextClickComing()}
              >
              </Button>
            </div>
          </div>

          <div className="w-[100%] flex flex-col justify-start">
            <div className="flex items-start justify-start">
              <h3 className="text-indigo-950 text-2xl font-bold font-lato leading-loose">
                Finalizados
              </h3>
            </div>
            <div className="flex items-center relative gap-4">
              <Button
                variant="other-style-alt-2"
                px="px-[14.6px]"
                py="py-[14.6px]"
                rounded="rounded-[50%]"
                customStyle={`z-10 absolute left-[-70px] ${scrollPositionFinish === 0 ? "hidden" : ""
                  }`}
                action={() => handlePrevClickFinish()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.4997 16.4581C12.3397 16.4581 12.1796 16.3973 12.058 16.2748L6.22463 10.4414C5.98046 10.1973 5.98046 9.8014 6.22463 9.55723L12.058 3.7239C12.3021 3.47973 12.698 3.47973 12.9422 3.7239C13.1863 3.96806 13.1863 4.36393 12.9422 4.60809L7.55052 9.99973L12.9422 15.3914C13.1863 15.6355 13.1863 16.0314 12.9422 16.2756C12.8197 16.3972 12.6597 16.4581 12.4997 16.4581Z"
                    fill="#23254C"
                  />
                </svg>
              </Button>
              {events
                .filter(
                  (event) => new Date(event.fechaFinalizacion) < new Date()
                )
                .slice(scrollPositionFinish, scrollPositionFinish + 3)
                .map((event) => {
                  return <CardEvent key={event.id} {...event} />;
                })}
              <Button
                variant="other-style-alt-2"
                px="px-[14.6px]"
                py="py-[14.6px]"
                rounded="rounded-[50%]"
                customStyle={`z-10 absolute right-[-70px] ${events.filter(
                  (event) => new Date(event.fechaFinalizacion) < new Date()
                ).length -
                    3 <=
                    scrollPositionFinish
                    ? "hidden"
                    : ""
                  }`}
                action={() => handleNextClickFinish()}
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="angle-right">
                    <path
                      id="angle-right_2"
                      d="M8.2498 18.5947C8.0738 18.5947 7.89777 18.5278 7.76394 18.393C7.49535 18.1245 7.49535 17.689 7.76394 17.4204L13.6947 11.4896L7.76394 5.55882C7.49535 5.29024 7.49535 4.85479 7.76394 4.5862C8.03252 4.31762 8.46797 4.31762 8.73655 4.5862L15.1532 11.0029C15.4218 11.2715 15.4218 11.7069 15.1532 11.9755L8.73655 18.3922C8.6018 18.5278 8.4258 18.5947 8.2498 18.5947Z"
                      fill="#23254C"
                    />
                  </g>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} setPasos={setPasos}>
        {pasos === 1 && <Paso1 closeModal={closeModal} setPasos={setPasos} />}
        {pasos === 2 && <Paso2 closeModal={closeModal} setPasos={setPasos} />}
      </Modal>
    </div>
  );
};

export default Events;