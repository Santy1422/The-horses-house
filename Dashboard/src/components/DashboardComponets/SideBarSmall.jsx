import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  logoIconSmallSidebar,
  nextArrowSidebar,
  LupaIconSidebar,
  panelDeControlIcon,
  calendarIconSidebar,
  eventosIconSidebar,
  clientesIconSidebar,
  billeteraIconSidebar,
  estadisticasIconSidebar,
  supportIconSidebar,
  configuracionIconSidebar,
  logoutIconSidebar
} from "@/iconos/icons";

const SideBarSmall = ({ open, usuario, handleDesloguearse }) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(router.pathname);

  let tipoUser =
    usuario?.rol?.profesion === "fotografo" ? "Allfoto" :
      usuario?.rol?.profesion === "videoMaker" ? "Allvideo" :
        "admin";

  console.log('tipo user', tipoUser);

  return (
    <div className="flex flex-col pl-4 pb-6 pr-4 items-center justify-between h-[100%] fixed left-0 top-0 bg-[#23254C] z-20">
      <div className="grupoIconos h-[75%] flex flex-col gap-1 pt-8 ">
        {/* Logo  */}
        <Link  href={`${tipoUser === 'admin' ? "/dashboard" : "/dashboardPh"}`}>
          <div className="logo flex justify-center items-center h-8">
            {logoIconSmallSidebar}
          </div>
        </Link>

        {/* Expand Sidebar Button */}
        <button
          className="iconoAtras w-10 h-10 p-2.5 mx-auto mt-4 rounded border border-gray-400 justify-center items-center inline-flex"
          onClick={() => open()}
        >
          {nextArrowSidebar}
        </button>

        {/* Search Button */}
        {/* <div
          className="iconoBuscar flex justify-center items-center h-10 w-10 mx-auto p-2.5 rounded  cursor-pointer"
          onClick={() => open()}
        >
          {LupaIconSidebar}
        </div> */}

        {/* Panel de control Button */}
        <Link href={`${tipoUser === 'admin' ? "/dashboard" : "/dashboardPh"}`}>
          <div
            className={`iconoHome mx-auto bg-transparent flex justify-center items-center h-10 w-10 p-2.5 rounded ${selectedOption === "/dashboard" && "bg-indigo-700"} ${selectedOption === "/dashboardPh" && "bg-indigo-700"}`}
            onClick={() => setSelectedOption(!tipoUser ? "/dashboard" : "/dashboardPh")}
          >
            {panelDeControlIcon}
          </div>
        </Link>

        {/* Calendar Button */}
        <Link href={`${tipoUser === 'admin' ? "/dashboard#calendar" : "/dashboardPh/calendario"}`}>
          <div
            onClick={() => setSelectedOption(!tipoUser ? "/dashboard#calendar" : "/dashboardPh/calendario")}
            className={`mx-auto flex justify-center items-center h-10 w-10 p-2.5 rounded bg-transparent  ${selectedOption === "/dashboard#calendar" && "bg-indigo-700"} ${selectedOption === "/dashboardPh/calendario" && "bg-indigo-700"}`}
          >
            {calendarIconSidebar}
          </div>
        </Link>

        {/* Events Button */}
        <Link href={`${tipoUser === 'admin' ? "/dashboard/events" : "/dashboardPh/eventosPh"}`}>
          <div
            onClick={() => setSelectedOption(!tipoUser ? "/dashboard/events" : "/dashboardPh/eventosPh")}
            className={`iconoCompetencia flex justify-center items-center h-10 w-10 mx-auto p-2.5 rounded ${selectedOption === "/dashboard/events" && "bg-indigo-700"}
            ${selectedOption === "/dashboardPh/eventosPh" && "bg-indigo-700"}`}
          >
            {eventosIconSidebar}
          </div>
        </Link>
      </div>



      <div className="h-[25%] flex flex-col pt-8">
        {/* Support Button */}
        <Link href=''>
          <div className="iconoHerramienta flex justify-center items-center h-10 w-10 mx-auto p-2.5 rounded  ">
            {supportIconSidebar}
          </div>
        </Link>

        {/* Configuration Button */}
        <Link href='/dashboard/profile'>
          <div className="iconoConfiguracion flex justify-center items-center h-10 w-10 mx-auto p-2.5 rounded ">
            {configuracionIconSidebar}
          </div>
        </Link>

        {/*  Logout Button */}
        <div
          className="iconocerrarsesion flex justify-center items-center h-10 w-10 mx-auto p-2.5 rounded cursor-pointer"
          onClick={() => handleDesloguearse()}
        >
          {logoutIconSidebar}
        </div>

        <div className="divisor border border-gray-300 border-b-0 border-x-0 my-4 "></div>
        <div className="imagenUsuario w-[40px] h-[40px] flex justify-center items-center pt-6">
          <Link href={"/dashboard/profile"}>
            <img src={usuario?.profilePic} className="rounded-full" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarSmall;
