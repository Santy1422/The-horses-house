
const HojaRuta = () => {


    return (

        // <div className="hojaDeRuta flex flex-col mt-[84px] ml-[49px]">
        //     <div className="datos h-[78px] flex flex-row gap-4">
        //         <div className="contenedorConector flex flex-col items-center">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        //                 <rect width="32" height="32" rx="16" fill="#23254C"/>
        //                 <circle cx="16" cy="16" r="5" fill="white"/>
        //             </svg>
        //             <div className="conector border h-[34px] border-[#7F7F91] w-[2px] mt-1 "></div>
        //         </div>
        //         <div className="titulo font-lato text-base font-normal leading-6 pt-1">Datos básicos</div>
        //     </div>
        //     <div className="datos h-[78px] flex flex-row gap-4">
        //         <div className="contenedorConector flex flex-col items-center">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        //                     <circle cx="16" cy="16" r="5" fill="#CCCCCC"/>
        //             </svg>
        //             <div className="conector border h-[34px] border-[#7F7F91] w-[2px] mt-1 "></div>
        //         </div>
        //         <div className="titulo font-lato text-base font-normal leading-6 pt-1">Responsable del evento</div>
        //     </div>
        //     <div className="datos h-[78px] flex flex-row gap-4">
        //         <div className="contenedorConector flex flex-col items-center">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        //                 <circle cx="16" cy="16" r="5" fill="#CCCCCC"/>
        //             </svg>
        //             <div className="conector border h-[34px] border-[#7F7F91] w-[2px] mt-1 "></div>
        //         </div>
        //         <div className="titulo font-lato text-base font-normal leading-6 pt-1">Fecha del evento</div>
        //     </div>
        //     <div className="datos h-[78px] flex flex-row gap-4">
        //         <div className="contenedorConector flex flex-col items-center">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        //                 <circle cx="16" cy="16" r="5" fill="#CCCCCC"/>
        //             </svg>
        //             <div className="conector border h-[34px] border-[#7F7F91] w-[2px] mt-1 "></div>
        //         </div>
        //         <div className="titulo font-lato text-base font-normal leading-6 pt-1">Fecha de inscripción</div>
        //     </div>
        //     <div className="datos h-[78px] flex flex-row gap-4">
        //         <div className="contenedorConector flex flex-col items-center">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        //                 <circle cx="16" cy="16" r="5" fill="#CCCCCC"/>
        //             </svg>                                    
        //         </div>
        //         <div className="titulo font-lato text-base font-normal leading-6 pt-1">Premios generales</div>
        //     </div>
        // </div>
        <div className="w-full max-w-[215px] flex flex-row h-[332px] mt-[84px] ml-[49px]">
            {/* Check column */}
            <div className="w-10 h-[332px] p-1 bg-white rounded-[28px] flex flex-col justify-start items-center gap-y-8">
                <div className="w-8 h-8 px-[10.36px] py-[2.55px] bg-indigo-950 rounded-2xl flex justify-center items-center">
                    <div className="w-[11.28px] h-[26.91px] text-white text-lg font-bold font-lato">1</div>
                </div>
                <div className="w-5 h-[196px] flex flex-col justify-start items-center gap-y-6">
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-[7.32px] h-[7.32px] bg-indigo-950 rounded-full"></div>
                    </div>
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-[7.32px] h-[7.32px] bg-indigo-950 rounded-full"></div>
                    </div>
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-[7.32px] h-[7.32px] bg-indigo-950 rounded-full"></div>
                    </div>
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-[7.32px] h-[7.32px] bg-indigo-950 rounded-full"></div>
                    </div>
                    <div className="w-5 h-5 flex justify-center items-center">
                        <div className="w-[7.32px] h-[7.32px] bg-indigo-950 rounded-full"></div>
                    </div>
                </div>
                <div className="w-8 h-8 px-[10.36px] py-[2.55px] bg-[#CCCCCC] rounded-2xl flex justify-center items-center">
                    <div className="w-[11.28px] h-[26.91px] text-black text-opacity-20 text-lg font-bold font-lato leading-normal">2</div>
                </div>
            </div>
            {/* Section column */}
            <div className="h-[332px] flex flex-col gap-y-8">

                <p className="pl-[8px] pb-[4px] mt-[8.55px] font-lato text-neutral-700 text-sm font-normal leading-normal">Datos generales</p>

                <div className="pl-[22.06px] h-[196px] flex flex-col justify-start items-start gap-y-6">
                    <p className="font-lato text-neutral-700 text-sm font-normal leading-normal">Datos básicos</p>
                    <p className="font-lato text-neutral-700 text-sm font-normal leading-normal">Responsables del evento</p>
                    <p className="font-lato text-neutral-700 text-sm font-normal leading-normal">Fecha del evento</p>
                    <p className="font-lato text-neutral-700 text-sm font-normal leading-normal">Fecha de inscripción</p>
                    <p className="font-lato text-neutral-700 text-sm font-normal leading-normal">Premios generales</p>
                </div>

                <p className="pl-[8px] mt-[8.55px] font-lato text-neutral-700 text-sm font-normal leading-normal">Datos por prueba</p>

            </div>
        </div>
    )
}

export default HojaRuta