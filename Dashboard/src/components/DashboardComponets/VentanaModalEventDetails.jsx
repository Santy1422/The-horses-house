import image from "../../../public/img/competicion.png"
import { format, isBefore, isWithinInterval, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


const VentanaModalEventDetails = ({evento, closeModal, inscriptos}) => {
  const userLogueado = useSelector((state) => state.reducerAuth.usuarioAuth.id);
  const usercreadordelEvento = evento.creadorId

    console.log('evento', evento)
    const { push } = useRouter();

    const fechaInicio = parseISO(evento?.fechaInicio);
  const fechaFin = parseISO(evento?.fechaFinalizacion);
  const fechaInicioInscripcion = parseISO(evento?.fechaInicioInscripcion)
  const fechaFinInscripcion = parseISO(evento?.fechaFinInscripcion)

   const formatoFechaInicio = "dd";
   const formatoFechaFinalizacion = "dd MMMM yyyy";
   const fechaInicioFormateada = format(fechaInicio, formatoFechaInicio).toUpperCase()
   const fechaFinalizacionFormateada = format(
     fechaFin,
     formatoFechaFinalizacion
   ).toUpperCase()
   const formatoFechaInicioInscr = "dd MMMM";
   const fechaInicioInscripcionFormateada = format(fechaInicioInscripcion, formatoFechaInicioInscr).toUpperCase()
   const fechaFinInscripcionFormateada = format(fechaFinInscripcion, formatoFechaFinalizacion).toUpperCase()

//saber si inscripciones estan abiertas o no
   const fechaActual = new Date();
   const isInscriptionFinish = isBefore(fechaFinInscripcion, fechaActual); //inscripciones cerradas
   const isInscriptionOn = isWithinInterval(fechaActual, {
     start: fechaInicioInscripcion,
     end: fechaFinInscripcion,
   }); //inscripcionesabiertas
   const isInscriptionComing = !isInscriptionOn && !isInscriptionFinish;  //proximamente


    return(
        <div className="bg-white w-[474px] h-[715px] p-5 flex-col justify-start items-center gap-4 inline-flex rounded-[10px] rounded-r-[10px] overflow-scroll">
            <div className="flex items-center gap-4 justify-between">
                <div className="w-10 h-10 relative pl-2 bg-zinc-100 rounded-full p-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 27.9891C14.9033 27.9891 14.8066 27.9733 14.7136 27.9419C12.7935 27.3015 3.21875 23.6052 3.21875 13.6558V6.54119C3.21875 6.10981 3.52328 5.73631 3.94741 5.65293C9.84408 4.4736 11.9345 3.43697 14.582 2.12351C14.8369 1.99664 15.1764 1.97982 15.4301 2.1067C18.0389 3.42257 20.1003 4.46151 26.0538 5.65293C26.4779 5.73751 26.7824 6.10981 26.7824 6.54119V13.657C26.7824 23.6064 17.2077 27.3027 15.2876 27.9431C15.1934 27.9733 15.0967 27.9891 15 27.9891ZM5.03125 7.28076V13.6558C5.03125 21.951 12.7863 25.3284 15 26.1223C17.2137 25.3284 24.9688 21.9498 24.9688 13.6558V7.28076C19.6243 6.16184 17.3779 5.11401 15.018 3.92864C12.5083 5.16959 10.3298 6.17392 5.03125 7.28076ZM17.7695 20.1494C17.529 20.1494 17.2886 20.0914 17.0638 19.9742L15 18.8977L12.9362 19.9742C12.419 20.2448 11.804 20.1979 11.3364 19.8535C10.8675 19.5115 10.6378 18.9447 10.7369 18.3732L11.1284 16.1064L9.40792 14.4426C9.00071 14.0486 8.8557 13.4699 9.0309 12.931C9.20611 12.3908 9.66288 12.0054 10.226 11.9244L12.6111 11.5798L13.6406 9.5101C13.898 8.99172 14.42 8.66904 15.0012 8.66904C15.5812 8.66904 16.1032 8.99172 16.3617 9.5101L17.3913 11.5798L19.7779 11.9244C20.3397 12.0042 20.7975 12.3908 20.9715 12.931C21.1467 13.4699 21.0004 14.0486 20.5944 14.4426L18.874 16.1064L19.2666 18.3755C19.3645 18.9483 19.1337 19.5139 18.6648 19.8559C18.3966 20.0504 18.0849 20.1494 17.7695 20.1494ZM15 17.0427C15.2344 17.0427 15.4699 17.0985 15.6838 17.2109L17.3745 18.0929L17.0529 16.2379C16.9708 15.7558 17.1302 15.2653 17.483 14.9258L18.833 13.6207L16.955 13.3502C16.4753 13.2801 16.0597 12.9803 15.8434 12.5477L14.9976 10.8465L14.153 12.5454C13.9355 12.9792 13.5209 13.2801 13.0412 13.3502L11.1623 13.6207L12.5146 14.9281C12.865 15.2653 13.0257 15.7558 12.9424 16.2368L12.6208 18.0929L14.3112 17.2109C14.5299 17.0997 14.7656 17.0427 15 17.0427ZM11.2579 16.232C11.2579 16.232 11.2579 16.2332 11.2591 16.2332L11.2579 16.232ZM18.7448 16.2297C18.7436 16.2309 18.7448 16.2309 18.7448 16.2297V16.2297ZM19.5168 13.7186H19.5289H19.5168ZM14.7366 10.3172L14.7377 10.3184L14.7366 10.3172Z"
                  fill="#25314C"
                />
              </svg>
              </div>
            <div className="w-[85%]">
            <p className="text-indigo-950 text-md font-normal font-Lato leading-tight"><span className="font-semibold">{evento.nombreEvento}</span> - {evento.clubesPatrocinadores[0]}</p>

            </div>

            <div className="w-8 h-8 relative cursor-pointer" onClick={closeModal} >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5297 17.4698C18.8227 17.7628 18.8227 18.2378 18.5297 18.5308C18.3837 18.6768 18.1917 18.7508 17.9997 18.7508C17.8077 18.7508 17.6158 18.6778 17.4698 18.5308L11.9997 13.0608L6.52975 18.5308C6.38375 18.6768 6.19175 18.7508 5.99975 18.7508C5.80775 18.7508 5.61575 18.6778 5.46975 18.5308C5.17675 18.2378 5.17675 17.7628 5.46975 17.4698L10.9398 11.9998L5.46975 6.52981C5.17675 6.23681 5.17675 5.76177 5.46975 5.46877C5.76275 5.17577 6.23775 5.17577 6.53075 5.46877L12.0008 10.9388L17.4707 5.46877C17.7637 5.17577 18.2387 5.17577 18.5317 5.46877C18.8247 5.76177 18.8247 6.23681 18.5317 6.52981L13.0617 11.9998L18.5297 17.4698Z" fill="#25314C"/>
</svg>

            </div>

            </div>

            <div className="mx-auto w-[100%] h-[127px] rounded-[3px]">
              <img src={image.src} alt="horse competition" className="rounded-[3px]"/>
            </div>

            <div className="w-[100%] flex flex-row">
            <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5838 5.55344L16.2553 5.22727C16.1915 5.16266 16.1546 5.07654 16.1546 4.98525V4.52573C16.1546 2.87742 14.808 1.53576 13.1537 1.53576H12.6925C12.6019 1.53576 12.5133 1.49878 12.4495 1.43622L12.1222 1.10905C10.9538 -0.0561563 9.0503 -0.0582077 7.87776 1.10905L7.55053 1.43521C7.4867 1.49881 7.39808 1.53576 7.30749 1.53576H6.8463C5.19198 1.53576 3.84542 2.87742 3.84542 4.52573V4.98525C3.84542 5.07654 3.80949 5.16268 3.74464 5.22627L3.41615 5.55444C2.2467 6.71965 2.2467 8.61725 3.41615 9.78348L3.74464 10.1096C3.80847 10.1743 3.84542 10.2604 3.84542 10.3517V10.8112C3.84542 12.0677 4.62884 13.1406 5.73241 13.5827L4.11007 19.2527C4.02978 19.5348 4.11725 19.8385 4.33652 20.0354C4.55374 20.2313 4.86566 20.2878 5.14053 20.178L7.99011 19.0405C9.28721 18.5256 10.7138 18.5256 12.0089 19.0405L14.8605 20.179C14.9541 20.216 15.052 20.2344 15.1477 20.2344C15.3361 20.2344 15.5203 20.1667 15.6645 20.0364C15.8837 19.8395 15.9712 19.537 15.8909 19.2539L14.2686 13.5837C15.3721 13.1416 16.1556 12.0687 16.1556 10.8122V10.3527C16.1556 10.2614 16.1915 10.1752 16.2563 10.1117L16.5848 9.78448C16.5848 9.78448 16.5848 9.78451 16.5848 9.78348C17.7533 8.61725 17.7533 6.71967 16.5838 5.55344ZM12.5814 17.6106C10.9188 16.9501 9.08533 16.9491 7.41556 17.6106L6.02571 18.1656L7.27457 13.8012H7.30548C7.39607 13.8012 7.48444 13.8381 7.54827 13.9007L7.87575 14.2279C8.46048 14.8105 9.22846 15.1028 9.99848 15.1028C10.7664 15.1028 11.5355 14.8115 12.1212 14.2279L12.4484 13.9017C12.5123 13.8381 12.6009 13.8012 12.6915 13.8012H12.7224L13.971 18.1656L12.5814 17.6106ZM15.4926 8.69517L15.1643 9.02234C14.8071 9.37723 14.6114 9.85011 14.6114 10.3517V10.8112C14.6114 11.6112 13.9577 12.2626 13.1547 12.2626H12.6935C12.1963 12.2626 11.7095 12.4636 11.3584 12.8144L11.0309 13.1406C10.4802 13.6883 9.52079 13.6883 8.97004 13.1406L8.64256 12.8134C8.29152 12.4636 7.80575 12.2626 7.30749 12.2626H6.8463C6.04333 12.2626 5.38959 11.6112 5.38959 10.8112V10.3517C5.38959 9.84908 5.19414 9.37726 4.83692 9.02134L4.50843 8.69517C3.94121 8.12898 3.94121 7.20692 4.50843 6.64175L4.83692 6.31458C5.19414 5.95969 5.38959 5.48682 5.38959 4.98525V4.52573C5.38959 3.72568 6.04333 3.07432 6.8463 3.07432H7.30749C7.80472 3.07432 8.29152 2.87332 8.64256 2.52252L8.97004 2.19636C9.52079 1.64863 10.4802 1.64863 11.0309 2.19636L11.3584 2.52353C11.7095 2.87329 12.1952 3.07432 12.6935 3.07432H13.1547C13.9577 3.07432 14.6114 3.72568 14.6114 4.52573V4.98525C14.6114 5.48784 14.8071 5.95967 15.1643 6.31559L15.4926 6.64175C16.0598 7.20794 16.0598 8.12898 15.4926 8.69517ZM9.99949 4.33492C8.15472 4.33492 6.65378 5.8304 6.65378 7.66846C6.65378 9.50653 8.15472 11.002 9.99949 11.002C11.8443 11.002 13.3452 9.50653 13.3452 7.66846C13.3452 5.8304 11.8443 4.33492 9.99949 4.33492ZM9.99949 9.46345C9.00607 9.46345 8.19795 8.65827 8.19795 7.66846C8.19795 6.67866 9.00607 5.87348 9.99949 5.87348C10.9929 5.87348 11.801 6.67866 11.801 7.66846C11.801 8.65827 10.9929 9.46345 9.99949 9.46345Z" fill="#BEBDBD"/>
</svg>

<p className="font-lato leading-tight font-normal text-md ml-2 text-indigo-950">{evento.nombreEvento}</p>
            </div>

            <div className="w-[100%] text-left">
              <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">{evento.descripcionEvento}</p>
            </div>

            <div className="divisor border border-gray-100 w-[100%] mt-2"></div>

            <div className="w-[100%] text-left mt-2 ">
              <div className="flex flex-row items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3.35938H13.9583V2.73438C13.9583 2.38938 13.6783 2.10938 13.3333 2.10938C12.9883 2.10938 12.7083 2.38938 12.7083 2.73438V3.35938H7.29167V2.73438C7.29167 2.38938 7.01167 2.10938 6.66667 2.10938C6.32167 2.10938 6.04167 2.38938 6.04167 2.73438V3.35938H5C2.985 3.35938 1.875 4.46937 1.875 6.48438V15.2344C1.875 17.2494 2.985 18.3594 5 18.3594H15C17.015 18.3594 18.125 17.2494 18.125 15.2344V6.48438C18.125 4.46937 17.015 3.35938 15 3.35938ZM5 4.60938H6.04167V5.23438C6.04167 5.57938 6.32167 5.85938 6.66667 5.85938C7.01167 5.85938 7.29167 5.57938 7.29167 5.23438V4.60938H12.7083V5.23438C12.7083 5.57938 12.9883 5.85938 13.3333 5.85938C13.6783 5.85938 13.9583 5.57938 13.9583 5.23438V4.60938H15C16.3142 4.60938 16.875 5.17021 16.875 6.48438V7.10938H3.125V6.48438C3.125 5.17021 3.68583 4.60938 5 4.60938ZM15 17.1094H5C3.68583 17.1094 3.125 16.5485 3.125 15.2344V8.35938H16.875V15.2344C16.875 16.5485 16.3142 17.1094 15 17.1094Z" fill="#BEBDBD"/>
</svg>

<p className="ml-2 text-indigo-950 text-base font-normal font-Lato leading-normal ">Del {fechaInicioFormateada} al {fechaFinalizacionFormateada}</p>
              </div>

              <div className="flex flex-row mt-3  items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 1.27588C5.06008 1.27588 1.04175 5.29421 1.04175 10.2342C1.04175 15.1742 5.06008 19.1925 10.0001 19.1925C14.9401 19.1925 18.9584 15.1742 18.9584 10.2342C18.9584 5.29421 14.9401 1.27588 10.0001 1.27588ZM10.0001 17.9425C5.74925 17.9425 2.29175 14.485 2.29175 10.2342C2.29175 5.98338 5.74925 2.52588 10.0001 2.52588C14.2509 2.52588 17.7084 5.98338 17.7084 10.2342C17.7084 14.485 14.2509 17.9425 10.0001 17.9425ZM12.9418 12.2925C13.1859 12.5367 13.1859 12.9326 12.9418 13.1767C12.8201 13.2984 12.6601 13.36 12.5001 13.36C12.3401 13.36 12.1801 13.2992 12.0584 13.1767L9.55839 10.6767C9.44089 10.5592 9.37508 10.4 9.37508 10.235V6.06836C9.37508 5.72336 9.65508 5.44336 10.0001 5.44336C10.3451 5.44336 10.6251 5.72336 10.6251 6.06836V9.97583L12.9418 12.2925Z" fill="#BEBDBD"/>
</svg>
<p className="ml-2 text-indigo-950 text-base font-normal font-Lato leading-normal ">{evento.horaInicio}</p>
              </div>

              <div className="flex flex-row mt-3 ">
              <svg width="32" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99992 2.10938C5.97909 2.10938 2.70825 5.38021 2.70825 9.40104C2.70825 13.666 6.62241 16.251 9.21241 17.9618L9.65325 18.2544C9.75825 18.3244 9.87909 18.3594 9.99992 18.3594C10.1208 18.3594 10.2416 18.3244 10.3466 18.2544L10.7874 17.9618C13.3774 16.251 17.2916 13.666 17.2916 9.40104C17.2916 5.38021 14.0208 2.10938 9.99992 2.10938ZM10.0991 16.9185L9.99992 16.9845L9.90075 16.9185C7.39242 15.2619 3.95825 12.9935 3.95825 9.40104C3.95825 6.06938 6.66825 3.35938 9.99992 3.35938C13.3316 3.35938 16.0416 6.06938 16.0416 9.40104C16.0416 12.9935 12.6066 15.2627 10.0991 16.9185ZM9.99992 6.69271C8.50659 6.69271 7.29158 7.90771 7.29158 9.40104C7.29158 10.8944 8.50659 12.1094 9.99992 12.1094C11.4933 12.1094 12.7083 10.8944 12.7083 9.40104C12.7083 7.90771 11.4933 6.69271 9.99992 6.69271ZM9.99992 10.8594C9.19575 10.8594 8.54158 10.2052 8.54158 9.40104C8.54158 8.59687 9.19575 7.94271 9.99992 7.94271C10.8041 7.94271 11.4583 8.59687 11.4583 9.40104C11.4583 10.2052 10.8041 10.8594 9.99992 10.8594Z" fill="#BEBDBD"/>
</svg>

<p className="ml-2 text-indigo-950 text-base font-normal font-Lato leading-normal ">{evento.ubicacion}</p>
              </div>
            </div>

            <div className="divisor border border-gray-100 w-[100%] mt-2"></div>

            <div className="w-[100%] text-left mt-2 ">
              {isInscriptionOn && 
              <li className="bg-green-50 text-teal-800 w-fit py-0.5 px-2 rounded-2xl font-lato font-semibold">Inscripciones abiertas</li>
              }
              {isInscriptionFinish && 
              <li className="bg-red-50 text-red-500 w-fit py-0.5 px-2 rounded-2xl font-lato font-semibold">Inscripciones cerradas</li>}
              {isInscriptionComing && 
              <li className="bg-orange-50 text-orange-500 w-fit py-0.5 px-2 rounded-2xl font-lato font-semibold">Inscripciones próximamente</li>}
              <div className="flex flex-row mt-3  items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3.35938H13.9583V2.73438C13.9583 2.38938 13.6783 2.10938 13.3333 2.10938C12.9883 2.10938 12.7083 2.38938 12.7083 2.73438V3.35938H7.29167V2.73438C7.29167 2.38938 7.01167 2.10938 6.66667 2.10938C6.32167 2.10938 6.04167 2.38938 6.04167 2.73438V3.35938H5C2.985 3.35938 1.875 4.46937 1.875 6.48438V15.2344C1.875 17.2494 2.985 18.3594 5 18.3594H15C17.015 18.3594 18.125 17.2494 18.125 15.2344V6.48438C18.125 4.46937 17.015 3.35938 15 3.35938ZM5 4.60938H6.04167V5.23438C6.04167 5.57938 6.32167 5.85938 6.66667 5.85938C7.01167 5.85938 7.29167 5.57938 7.29167 5.23438V4.60938H12.7083V5.23438C12.7083 5.57938 12.9883 5.85938 13.3333 5.85938C13.6783 5.85938 13.9583 5.57938 13.9583 5.23438V4.60938H15C16.3142 4.60938 16.875 5.17021 16.875 6.48438V7.10938H3.125V6.48438C3.125 5.17021 3.68583 4.60938 5 4.60938ZM15 17.1094H5C3.68583 17.1094 3.125 16.5485 3.125 15.2344V8.35938H16.875V15.2344C16.875 16.5485 16.3142 17.1094 15 17.1094Z" fill="#BEBDBD"/>
</svg>

              <p className="ml-2 text-indigo-950 text-base font-normal font-Lato leading-normal ">Del {fechaInicioInscripcionFormateada} al {fechaFinInscripcionFormateada}</p>
              </div>
              <p className=" text-indigo-950 text-base font-normal font-Lato leading-normal mt-2 flex flex-row ">Total de inscriptos: <span className="ml-3 px-2.5 py-0.5 bg-violet-50 rounded-2xl justify-center items-center gap-1.5 flex text-center text-violet-900 text-sm font-bold font-Lato leading-tight">{inscriptos}</span></p>
            </div>

            <div className="divisor border border-gray-100 w-[100%]  mt-2"></div>

            <div className="text-left w-[100%]">
              <p className="text-indigo-950 text-base font-bold font-Lato leading-normal">Contacto</p>

              <section className="mt-3 w-[100%] flex flex-row justify-start items-center">
              <div className="w-10 h-10 relative pl-2 bg-zinc-100 rounded-full p-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 27.9891C14.9033 27.9891 14.8066 27.9733 14.7136 27.9419C12.7935 27.3015 3.21875 23.6052 3.21875 13.6558V6.54119C3.21875 6.10981 3.52328 5.73631 3.94741 5.65293C9.84408 4.4736 11.9345 3.43697 14.582 2.12351C14.8369 1.99664 15.1764 1.97982 15.4301 2.1067C18.0389 3.42257 20.1003 4.46151 26.0538 5.65293C26.4779 5.73751 26.7824 6.10981 26.7824 6.54119V13.657C26.7824 23.6064 17.2077 27.3027 15.2876 27.9431C15.1934 27.9733 15.0967 27.9891 15 27.9891ZM5.03125 7.28076V13.6558C5.03125 21.951 12.7863 25.3284 15 26.1223C17.2137 25.3284 24.9688 21.9498 24.9688 13.6558V7.28076C19.6243 6.16184 17.3779 5.11401 15.018 3.92864C12.5083 5.16959 10.3298 6.17392 5.03125 7.28076ZM17.7695 20.1494C17.529 20.1494 17.2886 20.0914 17.0638 19.9742L15 18.8977L12.9362 19.9742C12.419 20.2448 11.804 20.1979 11.3364 19.8535C10.8675 19.5115 10.6378 18.9447 10.7369 18.3732L11.1284 16.1064L9.40792 14.4426C9.00071 14.0486 8.8557 13.4699 9.0309 12.931C9.20611 12.3908 9.66288 12.0054 10.226 11.9244L12.6111 11.5798L13.6406 9.5101C13.898 8.99172 14.42 8.66904 15.0012 8.66904C15.5812 8.66904 16.1032 8.99172 16.3617 9.5101L17.3913 11.5798L19.7779 11.9244C20.3397 12.0042 20.7975 12.3908 20.9715 12.931C21.1467 13.4699 21.0004 14.0486 20.5944 14.4426L18.874 16.1064L19.2666 18.3755C19.3645 18.9483 19.1337 19.5139 18.6648 19.8559C18.3966 20.0504 18.0849 20.1494 17.7695 20.1494ZM15 17.0427C15.2344 17.0427 15.4699 17.0985 15.6838 17.2109L17.3745 18.0929L17.0529 16.2379C16.9708 15.7558 17.1302 15.2653 17.483 14.9258L18.833 13.6207L16.955 13.3502C16.4753 13.2801 16.0597 12.9803 15.8434 12.5477L14.9976 10.8465L14.153 12.5454C13.9355 12.9792 13.5209 13.2801 13.0412 13.3502L11.1623 13.6207L12.5146 14.9281C12.865 15.2653 13.0257 15.7558 12.9424 16.2368L12.6208 18.0929L14.3112 17.2109C14.5299 17.0997 14.7656 17.0427 15 17.0427ZM11.2579 16.232C11.2579 16.232 11.2579 16.2332 11.2591 16.2332L11.2579 16.232ZM18.7448 16.2297C18.7436 16.2309 18.7448 16.2309 18.7448 16.2297V16.2297ZM19.5168 13.7186H19.5289H19.5168ZM14.7366 10.3172L14.7377 10.3184L14.7366 10.3172Z"
                  fill="#25314C"
                />
              </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="ml-2 text-zinc-900 text-sm font-bold font-Lato leading-tight">{evento.clubesPatrocinadores[0]}</p>
                <p className="ml-2 text-zinc-600 text-xs font-normal font-Lato leading-[18px]">{evento.emailContacto}</p>
                </div>
              </section>
            </div>

            <div className="divisor border border-gray-100 w-[100%] mt-2"></div>

            <section className="text-left w-[100%]">
              <p className="text-indigo-950 text-base font-bold font-Lato leading-normal">Clima</p>

             
            </section>

            <section className="w-[100%] justify-between flex flex-row gap-3">
              {/* boton editar solo disponible para el creador del evento*/}
              {
                userLogueado === usercreadordelEvento ?
            <div
                    className="grow shrink basis-0  rounded justify-start items-start flex hover:cursor-pointer w-[40%]"
                    // onClick={openModal}
                  >
                    <div className="px-3.5 py-2 bg-white border border-indigo-950 h-11 w-[100%] rounded justify-center items-center gap-6 flex">
                     
                      <div className="text-indigo-950 text-md font-regular font-lato leading-normal">
                        Editar
                      </div>
                      <div className="w-5 h-5 relative">
                      <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.75 7.96533C21.751 7.22933 21.4651 6.53734 20.9441 6.01734L18.7161 3.78943C18.1951 3.26943 17.5051 2.9824 16.7681 2.9834C16.0321 2.9844 15.341 3.27234 14.823 3.79334L2.46899 16.2043C2.32799 16.3453 2.25 16.5354 2.25 16.7334V21.7334C2.25 22.1474 2.586 22.4834 3 22.4834H8C8.198 22.4834 8.38905 22.4044 8.52905 22.2654L20.9399 9.9104C21.4619 9.3924 21.749 8.70133 21.75 7.96533ZM7.68994 20.9844H3.75V17.0444L12.7429 8.01038L16.7251 11.9913L7.68994 20.9844ZM19.8821 8.84839L17.7881 10.9334L13.801 6.94739L15.886 4.85242C16.122 4.61542 16.436 4.48538 16.771 4.48438H16.772C17.106 4.48438 17.42 4.61434 17.657 4.85034L19.885 7.07837C20.121 7.31537 20.251 7.62936 20.251 7.96436C20.25 8.29836 20.1191 8.61239 19.8821 8.84839ZM21.75 21.7344C21.75 22.1484 21.414 22.4844 21 22.4844H14C13.586 22.4844 13.25 22.1484 13.25 21.7344C13.25 21.3204 13.586 20.9844 14 20.9844H21C21.414 20.9844 21.75 21.3204 21.75 21.7344Z" fill="#23254C"/>
</svg>

                      </div>
                    </div>
                  </div> 
                  : null

              }

                     {/* boton verevento */}
            <div
                    className="grow shrink basis-0  rounded justify-start items-start flex hover:cursor-pointer w-[40%]"
                    onClick={() => push(`/dashboard/events/${evento.id}`)}
                    // onClick={openModal}
                  >
                    <div className="px-3.5 py-2 bg-indigo-950 border border-indigo-950 h-11 w-[100%] rounded justify-center items-center gap-6 flex">
                     
                      <div className="text-white text-md font-regular font-lato leading-normal">
                        Ver evento
                      </div>
                      <div className="w-5 h-5 relative">
                      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6919 13.0213C21.6539 13.1133 21.599 13.1962 21.53 13.2652L14.53 20.2652C14.384 20.4112 14.192 20.4851 14 20.4851C13.808 20.4851 13.616 20.4122 13.47 20.2652C13.177 19.9722 13.177 19.4971 13.47 19.2041L19.1899 13.4842H3C2.586 13.4842 2.25 13.1482 2.25 12.7342C2.25 12.3202 2.586 11.9842 3 11.9842H19.189L13.469 6.26418C13.176 5.97118 13.176 5.49615 13.469 5.20315C13.762 4.91015 14.237 4.91015 14.53 5.20315L21.53 12.2031C21.599 12.2721 21.6539 12.355 21.6919 12.447C21.7679 12.631 21.7679 12.8373 21.6919 13.0213Z" fill="white"/>
</svg>


                      </div>
                    </div>
                  </div>
            </section>



        </div>
    )
}

export default VentanaModalEventDetails