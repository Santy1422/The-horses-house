import Link from "next/link";
import React from "react";
import {
  theHorseHouseIconSidebar,
  backArrowSidebar,
  LupaIconSidebar,
  panelDeControlIcon,
  calendarIconSidebar,
  eventosIconSidebar,
  billeteraIconSidebar,
  clientesIconSidebar,
  concursosIconSidebar,
  clubEquitacionIconSidebar,
  pasadasIconSidebar,
  configuracionIconSidebar,
  supportIconSidebar,
  estadisticasIconSidebar,
  logoutIconSidebar,
  arrowConcursosSidebar1,
  arrowConcursosSidebar2,
  arrowPasadasSidebar1,
  arrowPasadasSidebar2
} from "@/iconos/icons";

const SideBarLarge = ({
  isToggleContest,
  isTogglePasadas,
  close,
  handlePasadas,
  handleContests,
  usuario,
  handleDesloguearse
}) => {

  let tipoUser =
    usuario?.rol?.profesion === "fotografo" ? "Allfoto" :
      usuario?.rol?.profesion === "videoMaker" ? "Allvideo" :
        "admin";

  console.log('tipo user', tipoUser);



  return (
    <div className="flex flex-col h-[100%] fixed left-0 top-0 bg-[#23254C] z-20">

      <div className="flex flex-col mt-7 px-6">
        <div className="logoAndBackButton flex justify-between items-center ">
          <Link href="/dashboard">
            {theHorseHouseIconSidebar}
          </Link>
          <div className="cursor-pointer justify-center items-center  inline-flex w-10 h-10 p-2.5 rounded border border-gray-400" onClick={() => close()}>
            {backArrowSidebar}
          </div>
        </div>
        {/* Search Bar */}
        {/* <div className="w-full h-11 mt-6 px-3.5 py-2.5 mb-4 bg-white rounded-lg shadow border justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="w-5 h-5 relative ">
              {LupaIconSidebar}
            </div>
            <input type="text" name="" id="" className="text-black text-base font-normal font-lato leading-normal bg-white outline-0 placeholder:text-neutral-500 " placeholder="Buscar" />
          </div>
        </div> */}
      </div>

      {/* Sidebar Items */}
      <div className=" flex flex-col px-6 justify-between flex-1 mt-10">
        <div className=" flex flex-col">
          {tipoUser === 'admin' && (
            <>
              {/* Panel de control */}
              <div className="w-full h-10 mb-1 px-3 py-2 justify-start items-center gap-28 inline-flex hover:cursor-pointer bg-[#4D50B1] rounded ">
                <Link href="/dashboard">
                  <div className="justify-start items-center gap-3 flex w-full h-full">
                    {panelDeControlIcon}
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Panel de control
                    </div>
                  </div>
                </Link>
              </div>

              {/* Calendario */}
              <div className="w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer">
                <Link href="/dashboard#calendar">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                      {calendarIconSidebar}
                    </div>
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Calendario
                    </div>
                  </div>
                </Link>
              </div>

              {/* Concursos */}
              <div onClick={handleContests} className="w-full mb-1 px-3 py-2 justify-start items-center gap-28 flex-col hover:cursor-pointer">
                <div className="flex items-center justify-between w-full ">
                  <div className="containerIconConcursos flex gap-2">
                    <div className="w-6 h-6 relative">
                      {concursosIconSidebar}
                    </div>
                    <Link href="/dashboard/events">
                      <div className="text-white text-base font-normal font-lato leading-normal">
                        Concursos
                      </div>
                    </Link>
                  </div>
                  {isToggleContest ? (
                     arrowConcursosSidebar1 
                  ) : (
                    arrowConcursosSidebar2 
                  )}
                </div>
                {isToggleContest && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] pt-3 text-sm">
                      Pasados
                    </div>
                  </Link>
                )}
                {isToggleContest && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] py-3 text-sm">
                      Futuros
                    </div>
                  </Link>
                )}
              </div>

              {/* Pasadas */}
              <div onClick={handlePasadas} className="w-full mb-1 px-3 py-3 justify-start items-center gap-28 flex-col hover:cursor-pointer">
                {!tipoUser &&
                  <div className="flex items-center justify-between w-full ">
                    <Link href="/dashboard/events">
                      <div className="containerIconConcursos flex gap-2">
                        <div className="w-6 h-6 relative">
                          {pasadasIconSidebar}
                        </div>
                        <div className="text-white text-base font-normal font-lato leading-normal">
                          Pasadas
                        </div>
                      </div>
                    </Link>

                    {isTogglePasadas ? (
                       arrowPasadasSidebar1 
                    ) : (

                       arrowPasadasSidebar2 
                    )}
                  </div>
                }

                {isTogglePasadas && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] pt-3 text-sm">
                      Pasados
                    </div>
                  </Link>
                )}
                {isTogglePasadas && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] py-3 text-sm">
                      Futuros
                    </div>
                  </Link>
                )}
              </div>



              {/*  Clubes de equitación */}
              <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-[105px] inline-flex hover:cursor-pointer">

                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {clubEquitacionIconSidebar}
                  </div>
                  <div className="text-white text-base font-normal font-lato leading-normal">
                    Clubes de equitación <span className=" bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[9px] font-lato leading-tight">Próximamente</span>
                  </div>
                </div>

              </div>


              {/* Miembros */}
              <div className="w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {clientesIconSidebar}
                  </div>
                  <div className="text-white text-base font-normal font-lato leading-normal">
                    Miembros <span className=" bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {tipoUser === 'Allfoto' || tipoUser === 'Allvideo' && (
            <>
              {/* Panel de control PH */}
              <div className="w-full mb-5 h-4 px-3 py-1 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {panelDeControlIcon}
                  </div>
                  <Link href={"/dashboardPh"}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Panel de control
                  </div>
                  </Link>
                </div>
              </div>

              {/* Calendario PH */}
              <div className="w-full mb-5 h-4 px-3 py-2 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {calendarIconSidebar}
                  </div>
                  <Link href={"/dashboardPh/calendario"}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Calendario
                  </div>
                  </Link>
                </div>
              </div>

              {/* Eventos PH */}
              <div className="w-full mb-5 h-4 px-3 py-2 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {eventosIconSidebar}
                  </div>
                  <Link href={"/dashboardPh/eventosPh"}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Eventos
                  </div>
                  </Link>
                </div>
              </div>

              {/* Clientes PH */}
              <div className="w-full mb-5 h-4 px-3 py-2 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {clientesIconSidebar}
                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Clientes
                    <span className="ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div>

              {/* Billetera PH */}
              <div className="w-full mb-5 h-4 px-3 py-1 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {billeteraIconSidebar}
                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Billetera
                    <span className="ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div>

              {/* Estadisticas PH */}
             {/*  <div className="w-full mb-5 h-4 px-3 py-1 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {estadisticasIconSidebar}

                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Estadísticas
                    <span className="ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div> */}

              {/* Mis packs PH */}
              {/* <div className="w-full mb-5 h-4 px-3 py-2 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {billeteraIconSidebar}

                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Mis packs
                    <span className=" ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div> */}
            </>
          )}
        </div>

        <div className=" flex flex-col">

          {/* Soporte técnico */}
          <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-28 inline-flex hover:cursor-pointer">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                {supportIconSidebar}
              </div>
              <div className="text-white text-base font-normal font-lato leading-normal">
                Soporte técnico <span className=" bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
              </div>
            </div>
          </div>

          {/* Configuración */}
          <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-28 inline-flex hover:cursor-pointer">
          <Link href={"/dashboard/profile"}>

            <div className="justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                {configuracionIconSidebar}
              </div>
              <div className="text-white text-base font-normal font-lato leading-normall">
                Configuración
              </div>
            </div>
            </Link>

          </div>

          {/* Cerrar sesión */}
          <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-28 inline-flex hover:cursor-pointer"
            onClick={() => handleDesloguearse()}>
            <div className="justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                {logoutIconSidebar}
              </div>
              <div className="text-white text-base font-normal font-lato leading-normall">
                Cerrar sesión
              </div>
            </div>
          </div>

          <div className=" my-6">
            <div className="w-full border border-slate-400 border-b-0 "></div>
          </div>
          <div className=" px-2 pb-6">
            <div className="w-60 h-10 justify-between items-start inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <Link href="/dashboard/profile">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={usuario?.profilePic}
                  />
                </Link>
                <div className="flex-col justify-start items-start flex-1 flex">
                  <div className="text-white text-sm font-semibold font-lato leading-tight">
                    {usuario?.firstName}
                  </div>
                  <div className="text-gray-100 text-sm font-normal font-lato leading-tight">
                    {usuario?.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarLarge;
