import { useRouter } from "next/router";



const Card = ({nombre, estado, horaInicio, fechaInicio, ubicacion,id}) => {
    
    const { push } = useRouter();

    let fechaFormateada    
    let dia
    let mes
    
    if (fechaInicio) {
        const fecha = new Date(fechaInicio)
        const opciones = { day: 'numeric', month: 'long', year:'numeric' }        
        fechaFormateada = fecha.toLocaleDateString('es-ES', opciones) 
        dia = fecha.getDate()
        mes = fecha.toLocaleDateString('es-ES', {month:'short'})
        mes = mes.toUpperCase().replace('.','')
    }

    return (
        <>
        <div className="w-[346px] h-[376px] bg-white rounded-[10px] border border-gray-300 flex-col justify-start items-start inline-flex">
            <div className="imagen w-[344px] h-[178px] relative rounded-t-[10px] bg-cover " style={{background: 'url("/img/card_default.png")'}}>
                <div className="w-[344px] h-6 left-[24px] top-[142px] absolute justify-between items-end inline-flex " >
                    <div className="grow shrink basis-0 h-6 justify-start items-start flex " >
                        <div className="pl-2 pr-2.5 py-0.5 bg-green-50 rounded-2xl justify-center items-center gap-1.5 flex">
                            <div className="w-2 h-2 relative">
                                <div className="w-1.5 h-1.5 left-[1px] top-[1px] absolute bg-teal-800 rounded-full" />
                            </div>
                            <div className="text-center text-teal-800 text-sm font-bold font-['Lato'] leading-tight">{estado}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-[198px] p-6 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[94px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-indigo-950 text-xl font-bold font-['Lato'] leading-[30px]">{nombre}</div>
                </div>
                <div className="self-stretch h-[52px] flex-col justify-center items-start gap-3 flex">
                    <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                        <div className="w-[18px] h-[18px] relative" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M14.3335 2.8125H13.396V2.25C13.396 1.9395 13.144 1.6875 12.8335 1.6875C12.523 1.6875 12.271 1.9395 12.271 2.25V2.8125H7.396V2.25C7.396 1.9395 7.144 1.6875 6.8335 1.6875C6.523 1.6875 6.271 1.9395 6.271 2.25V2.8125H5.3335C3.52 2.8125 2.521 3.8115 2.521 5.625V13.5C2.521 15.3135 3.52 16.3125 5.3335 16.3125H14.3335C16.147 16.3125 17.146 15.3135 17.146 13.5V5.625C17.146 3.8115 16.147 2.8125 14.3335 2.8125ZM5.3335 3.9375H6.271V4.5C6.271 4.8105 6.523 5.0625 6.8335 5.0625C7.144 5.0625 7.396 4.8105 7.396 4.5V3.9375H12.271V4.5C12.271 4.8105 12.523 5.0625 12.8335 5.0625C13.144 5.0625 13.396 4.8105 13.396 4.5V3.9375H14.3335C15.5162 3.9375 16.021 4.44225 16.021 5.625V6.1875H3.646V5.625C3.646 4.44225 4.15075 3.9375 5.3335 3.9375ZM14.3335 15.1875H5.3335C4.15075 15.1875 3.646 14.6827 3.646 13.5V7.3125H16.021V13.5C16.021 14.6827 15.5162 15.1875 14.3335 15.1875Z" fill="#494949"/>
                            </svg>
                        </div>
                        <div className="text-zinc-700 text-sm font-normal font-['Lato'] leading-tight">{fechaFormateada}</div>
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="w-[18px] h-[18px] relative" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M9.8335 0.9375C5.3875 0.9375 1.771 4.554 1.771 9C1.771 13.446 5.3875 17.0625 9.8335 17.0625C14.2795 17.0625 17.896 13.446 17.896 9C17.896 4.554 14.2795 0.9375 9.8335 0.9375ZM9.8335 15.9375C6.00775 15.9375 2.896 12.8258 2.896 9C2.896 5.17425 6.00775 2.0625 9.8335 2.0625C13.6592 2.0625 16.771 5.17425 16.771 9C16.771 12.8258 13.6592 15.9375 9.8335 15.9375ZM12.481 10.8525C12.7008 11.0722 12.7008 11.4285 12.481 11.6483C12.3715 11.7578 12.2275 11.8132 12.0835 11.8132C11.9395 11.8132 11.7955 11.7585 11.686 11.6483L9.43597 9.39825C9.33022 9.2925 9.271 9.14923 9.271 9.00073V5.25073C9.271 4.94023 9.523 4.68823 9.8335 4.68823C10.144 4.68823 10.396 4.94023 10.396 5.25073V8.76746L12.481 10.8525Z" fill="#494949"/>
                            </svg>
                        </div>
                        <div className="text-zinc-700 text-sm font-normal font-['Lato'] leading-tight">{horaInicio}</div>
                    </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="w-[18px] h-[18px] relative" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M9.8335 1.6875C6.21475 1.6875 3.271 4.63125 3.271 8.25C3.271 12.0885 6.79374 14.415 9.12474 15.9547L9.5215 16.218C9.616 16.281 9.72475 16.3125 9.8335 16.3125C9.94225 16.3125 10.051 16.281 10.1455 16.218L10.5423 15.9547C12.8733 14.415 16.396 12.0885 16.396 8.25C16.396 4.63125 13.4522 1.6875 9.8335 1.6875ZM9.92275 15.0157L9.8335 15.0751L9.74424 15.0157C7.48674 13.5247 4.396 11.4832 4.396 8.25C4.396 5.2515 6.835 2.8125 9.8335 2.8125C12.832 2.8125 15.271 5.2515 15.271 8.25C15.271 11.4832 12.1795 13.5255 9.92275 15.0157ZM9.8335 5.8125C8.4895 5.8125 7.396 6.906 7.396 8.25C7.396 9.594 8.4895 10.6875 9.8335 10.6875C11.1775 10.6875 12.271 9.594 12.271 8.25C12.271 6.906 11.1775 5.8125 9.8335 5.8125ZM9.8335 9.5625C9.10975 9.5625 8.521 8.97375 8.521 8.25C8.521 7.52625 9.10975 6.9375 9.8335 6.9375C10.5572 6.9375 11.146 7.52625 11.146 8.25C11.146 8.97375 10.5572 9.5625 9.8335 9.5625Z" fill="#494949"/>
                        </svg>
                    </div>
                    <div className="grow shrink basis-0 text-zinc-700 text-sm font-normal font-['Lato'] leading-tight">{ubicacion}</div>
                    </div>
                </div>
                </div>
                <div className="self-stretch justify-start items-center inline-flex">
                <div className="grow shrink basis-0 h-11 justify-start items-start gap-3 flex">
                    <div onClick={() => push(`/dashboard/events/${id}`)} className="grow shrink basis-0 h-11 rounded justify-start items-start flex hover:cursor-pointer">
                    <div  className="grow shrink basis-0 h-11 px-4 py-2.5 bg-white rounded border border-indigo-950 justify-center items-center gap-2 flex">
                        <div className="text-indigo-950 text-base font-bold font-['Lato'] leading-normal ">Editar</div>
                        <div className="w-5 h-5 relative" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M18.6252 6.02564C18.6261 5.4123 18.3878 4.83564 17.9537 4.40231L16.097 2.54572C15.6628 2.11238 15.0878 1.87319 14.4736 1.87403C13.8603 1.87486 13.2844 2.11481 12.8527 2.54897L2.55774 12.8915C2.44024 13.009 2.37524 13.1674 2.37524 13.3324V17.499C2.37524 17.844 2.65524 18.124 3.00024 18.124H7.16691C7.33191 18.124 7.49112 18.0582 7.60779 17.9423L17.9502 7.64653C18.3852 7.21486 18.6244 6.63897 18.6252 6.02564ZM6.90853 16.8748H3.62524V13.5916L11.1193 6.06317L14.4378 9.38064L6.90853 16.8748ZM17.0686 6.76152L15.3236 8.49898L12.0011 5.17735L13.7386 3.43154C13.9352 3.23404 14.1969 3.12567 14.4761 3.12484H14.4769C14.7552 3.12484 15.0169 3.23315 15.2144 3.42981L17.0711 5.2865C17.2678 5.484 17.3761 5.74566 17.3761 6.02482C17.3752 6.30316 17.2661 6.56485 17.0686 6.76152ZM18.6252 17.4998C18.6252 17.8448 18.3452 18.1248 18.0002 18.1248H12.1669C11.8219 18.1248 11.5419 17.8448 11.5419 17.4998C11.5419 17.1548 11.8219 16.8748 12.1669 16.8748H18.0002C18.3452 16.8748 18.6252 17.1548 18.6252 17.4998Z" fill="#231D43"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                    <div className="grow shrink basis-0 h-11 rounded justify-start items-start flex hover:cursor-pointer">
                    <div className="grow shrink basis-0 h-11 px-4 py-2.5 bg-indigo-950 rounded justify-center items-center gap-2 flex">
                        <div className="text-white text-base font-bold font-primary leading-normal ">Ver evento</div>
                        <div className="w-5 h-5 relative" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M18.4101 10.2392C18.3784 10.3159 18.3327 10.385 18.2752 10.4425L12.4419 16.2758C12.3202 16.3975 12.1602 16.4591 12.0002 16.4591C11.8402 16.4591 11.6801 16.3983 11.5585 16.2758C11.3143 16.0317 11.3143 15.6358 11.5585 15.3916L16.3251 10.625H2.8335C2.4885 10.625 2.2085 10.345 2.2085 9.99998C2.2085 9.65498 2.4885 9.37498 2.8335 9.37498H16.3243L11.5577 4.60834C11.3135 4.36417 11.3135 3.96831 11.5577 3.72414C11.8018 3.47997 12.1977 3.47997 12.4419 3.72414L18.2752 9.55747C18.3327 9.61497 18.3784 9.68405 18.4101 9.76072C18.4734 9.91405 18.4734 10.0859 18.4101 10.2392Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card