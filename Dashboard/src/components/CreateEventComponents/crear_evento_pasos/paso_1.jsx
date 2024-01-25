import { setOther } from "@/redux/reducer/reducerEventAll"
import { useState } from "react"
import { useDispatch } from "react-redux"


const Paso1 = ({closeModal, setPasos, setConcursoTipo}) => {
    
    const [isChecked, setIsChecked] = useState(false)
const dispatch = useDispatch()
    const handleIsChecked = (event) => {
        setIsChecked(event.target.value)
       dispatch(setOther(event.target.value))
    }

    const handlePasos = () => {
        setPasos(2)
    }
    
    return (
        <div className="MainContenedor flex flex-col p-6 w-[600px] h-[428px] gap-5 "> 
            <div className="tituloNuevoEvento flex flex-row justify-between " >
                <div className="tituloIcono flex flex-row">
                    <div className="icono w-[72px] h-[72px] p-5 bg-zinc-100 rounded-full justify-center items-center gap-2.5 inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <path d="M24 5.49023H22.3333V4.49023C22.3333 3.93823 21.8853 3.49023 21.3333 3.49023C20.7813 3.49023 20.3333 3.93823 20.3333 4.49023V5.49023H11.6667V4.49023C11.6667 3.93823 11.2187 3.49023 10.6667 3.49023C10.1147 3.49023 9.66667 3.93823 9.66667 4.49023V5.49023H8C4.776 5.49023 3 7.26623 3 10.4902V24.4902C3 27.7142 4.776 29.4902 8 29.4902H24C27.224 29.4902 29 27.7142 29 24.4902V10.4902C29 7.26623 27.224 5.49023 24 5.49023ZM8 7.49023H9.66667V8.49023C9.66667 9.04223 10.1147 9.49023 10.6667 9.49023C11.2187 9.49023 11.6667 9.04223 11.6667 8.49023V7.49023H20.3333V8.49023C20.3333 9.04223 20.7813 9.49023 21.3333 9.49023C21.8853 9.49023 22.3333 9.04223 22.3333 8.49023V7.49023H24C26.1027 7.49023 27 8.38757 27 10.4902V11.4902H5V10.4902C5 8.38757 5.89733 7.49023 8 7.49023ZM24 27.4902H8C5.89733 27.4902 5 26.5929 5 24.4902V13.4902H27V24.4902C27 26.5929 26.1027 27.4902 24 27.4902ZM12.0267 17.8236C12.0267 18.5596 11.4307 19.1569 10.6934 19.1569C9.95736 19.1569 9.35319 18.5596 9.35319 17.8236C9.35319 17.0876 9.94401 16.4902 10.68 16.4902H10.6934C11.4294 16.4902 12.0267 17.0876 12.0267 17.8236ZM17.36 17.8236C17.36 18.5596 16.764 19.1569 16.0267 19.1569C15.2907 19.1569 14.6865 18.5596 14.6865 17.8236C14.6865 17.0876 15.2773 16.4902 16.0133 16.4902H16.0267C16.7627 16.4902 17.36 17.0876 17.36 17.8236ZM22.6934 17.8236C22.6934 18.5596 22.0974 19.1569 21.36 19.1569C20.624 19.1569 20.0199 18.5596 20.0199 17.8236C20.0199 17.0876 20.6107 16.4902 21.3467 16.4902H21.36C22.096 16.4902 22.6934 17.0876 22.6934 17.8236ZM12.0267 23.1569C12.0267 23.8929 11.4307 24.4902 10.6934 24.4902C9.95736 24.4902 9.35319 23.8929 9.35319 23.1569C9.35319 22.4209 9.94401 21.8236 10.68 21.8236H10.6934C11.4294 21.8236 12.0267 22.4209 12.0267 23.1569ZM17.36 23.1569C17.36 23.8929 16.764 24.4902 16.0267 24.4902C15.2907 24.4902 14.6865 23.8929 14.6865 23.1569C14.6865 22.4209 15.2773 21.8236 16.0133 21.8236H16.0267C16.7627 21.8236 17.36 22.4209 17.36 23.1569ZM22.6934 23.1569C22.6934 23.8929 22.0974 24.4902 21.36 24.4902C20.624 24.4902 20.0199 23.8929 20.0199 23.1569C20.0199 22.4209 20.6107 21.8236 21.3467 21.8236H21.36C22.096 21.8236 22.6934 22.4209 22.6934 23.1569Z" fill="#494949"/>
                        </svg>
                    </div>
                    <div className="tituloPaso flex flex-col h-[72px] justify-center pl-4">
                        <div className="titulo w-[392px] text-indigo-950 text-2xl font-bold font-lato leading-loose">Nuevo Evento</div>
                        <div className="paso w-[392px] text-neutral-500 text-base font-normal font-lato leading-normal">Paso 1/2</div>                                                                 
                    </div>
                </div>
                <div onClick={closeModal} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18.5297 17.96C18.8227 18.253 18.8227 18.728 18.5297 19.021C18.3837 19.167 18.1917 19.241 17.9997 19.241C17.8077 19.241 17.6158 19.168 17.4698 19.021L11.9997 13.551L6.52975 19.021C6.38375 19.167 6.19175 19.241 5.99975 19.241C5.80775 19.241 5.61575 19.168 5.46975 19.021C5.17675 18.728 5.17675 18.253 5.46975 17.96L10.9398 12.49L5.46975 7.02004C5.17675 6.72704 5.17675 6.25201 5.46975 5.95901C5.76275 5.66601 6.23775 5.66601 6.53075 5.95901L12.0008 11.429L17.4707 5.95901C17.7637 5.66601 18.2387 5.66601 18.5317 5.95901C18.8247 6.25201 18.8247 6.72704 18.5317 7.02004L13.0617 12.49L18.5297 17.96Z" fill="#25314C"/>
                    </svg>
                </div>
            </div>
            <div className="tituloTipoEvento flex flex-col ">
                <div className="titulo w-[552px] text-indigo-950 text-base font-normal font-lato leading-normal" >Seleccioná el tipo de evento que querés crear</div>
                <div className="seleccion font-lato text-sm font-normal leading-5 text-[#6D6E6D]">(podés seleccionar los dos)</div>
            </div>
            <div className={`concurso flex flex-row justify-between border rounded ${isChecked === 'Concurso' ? "bg-[#F3F2F2]" : "bg-white"} border-gray-300 p-4 items-center h-[72px]`} >
                <div className="tituloIcono flex flex-row gap-4">
                    <div className="icono flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17" fill="none">
                            <path d="M13.2671 4.74549L13.0043 4.48455C12.9532 4.43286 12.9236 4.36396 12.9236 4.29093V3.92332C12.9236 2.60467 11.8464 1.53134 10.5229 1.53134H10.154C10.0815 1.53134 10.0106 1.50176 9.95956 1.45171L9.69778 1.18997C8.76304 0.257809 7.24024 0.256168 6.30221 1.18997L6.04042 1.45091C5.98936 1.50178 5.91847 1.53134 5.84599 1.53134H5.47704C4.15358 1.53134 3.07634 2.60467 3.07634 3.92332V4.29093C3.07634 4.36396 3.0476 4.43288 2.99571 4.48375L2.73292 4.74629C1.79736 5.67845 1.79736 7.19654 2.73292 8.12952L2.99571 8.39045C3.04677 8.44215 3.07634 8.51105 3.07634 8.58408V8.95169C3.07634 9.95688 3.70307 10.8152 4.58593 11.1689L3.28806 15.7049C3.22382 15.9306 3.2938 16.1735 3.46922 16.3311C3.64299 16.4878 3.89253 16.533 4.11242 16.4452L6.39208 15.5351C7.42977 15.1232 8.57106 15.1232 9.6071 15.5351L11.8884 16.446C11.9633 16.4755 12.0416 16.4902 12.1182 16.4902C12.2689 16.4902 12.4163 16.4361 12.5316 16.3319C12.707 16.1743 12.777 15.9323 12.7127 15.7058L11.4149 11.1697C12.2977 10.816 12.9245 9.95768 12.9245 8.95249V8.58488C12.9245 8.51185 12.9532 8.44293 13.0051 8.39206L13.2679 8.13032C13.2679 8.13032 13.2679 8.13034 13.2679 8.12952C14.2026 7.19654 14.2026 5.67847 13.2671 4.74549ZM10.0651 14.3912C8.73507 13.8628 7.26826 13.862 5.93245 14.3912L4.82057 14.8352L5.81966 11.3437H5.84439C5.91686 11.3437 5.98755 11.3732 6.03861 11.4233L6.3006 11.685C6.76838 12.1511 7.38276 12.385 7.99879 12.385C8.61316 12.385 9.22837 12.1519 9.69697 11.685L9.95876 11.4241C10.0098 11.3732 10.0807 11.3437 10.1532 11.3437H10.1779L11.1768 14.8352L10.0651 14.3912ZM12.394 7.25887L12.1315 7.52061C11.8457 7.80452 11.6891 8.18282 11.6891 8.58408V8.95169C11.6891 9.59173 11.1661 10.1128 10.5237 10.1128H10.1548C9.75702 10.1128 9.36758 10.2736 9.08674 10.5543L8.82476 10.8152C8.38415 11.2534 7.61664 11.2534 7.17603 10.8152L6.91405 10.5535C6.63321 10.2736 6.2446 10.1128 5.84599 10.1128H5.47704C4.83467 10.1128 4.31168 9.59173 4.31168 8.95169V8.58408C4.31168 8.182 4.15531 7.80454 3.86954 7.51981L3.60675 7.25887C3.15296 6.80592 3.15296 6.06827 3.60675 5.61614L3.86954 5.3544C4.15531 5.07049 4.31168 4.69219 4.31168 4.29093V3.92332C4.31168 3.28328 4.83467 2.76219 5.47704 2.76219H5.84599C6.24377 2.76219 6.63321 2.60139 6.91405 2.32075L7.17603 2.05982C7.61664 1.62164 8.38415 1.62164 8.82476 2.05982L9.08674 2.32156C9.36758 2.60137 9.75619 2.76219 10.1548 2.76219H10.5237C11.1661 2.76219 11.6891 3.28328 11.6891 3.92332V4.29093C11.6891 4.69301 11.8457 5.07047 12.1315 5.3552L12.394 5.61614C12.8478 6.06909 12.8478 6.80592 12.394 7.25887ZM7.99959 3.77067C6.52377 3.77067 5.32303 4.96705 5.32303 6.4375C5.32303 7.90796 6.52377 9.10434 7.99959 9.10434C9.47541 9.10434 10.6762 7.90796 10.6762 6.4375C10.6762 4.96705 9.47541 3.77067 7.99959 3.77067ZM7.99959 7.87349C7.20486 7.87349 6.55836 7.22935 6.55836 6.4375C6.55836 5.64566 7.20486 5.00151 7.99959 5.00151C8.79432 5.00151 9.44082 5.64566 9.44082 6.4375C9.44082 7.22935 8.79432 7.87349 7.99959 7.87349Z" fill="#23254C"/>
                        </svg>
                    </div>
                    <div className="tituloPaso flex flex-col justify-center">
                        <div className="concurso w-[456px] text-indigo-950 text-sm font-normal font-lato leading-tight ">Concurso</div>
                        <div className="competicion w-[456px] text-zinc-500 text-sm font-normal font-lato leading-tight">Competición formal</div>                                                                 
                    </div>
                </div>
                <div>
                <input type='radio' name="competicion" onChange={handleIsChecked} value={'Concurso'}/>
            </div>
            </div>
            <div className={`pasada flex flex-row justify-between border ${isChecked === 'Pasada' ? "bg-[#F3F2F2]" : "bg-white"} rounded border-gray-300 p-4 items-center h-[72px]`} >
                <div className="tituloIcono flex flex-row gap-4">
                    <div className="icono flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17" fill="none">
                            <path d="M1.94964 1.10547H2.58046C3.31779 1.10547 3.91585 1.75367 3.91585 2.55778V14.4224C3.91585 15.2265 3.31779 15.8747 2.58046 15.8747H1.93325C1.20412 15.8747 0.614258 15.2347 0.614258 14.4388V2.55778C0.614258 1.75367 1.21231 1.10547 1.94964 1.10547Z" stroke="#23254C" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M4.51367 4.83887H8.05284H11.592" stroke="#23254C" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M4.51367 7.34961H11.592" stroke="#23254C" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M13.4194 1.10547H14.0502C14.7875 1.10547 15.3856 1.75367 15.3856 2.55778V14.4224C15.3856 15.2265 14.7875 15.8747 14.0502 15.8747H13.403C12.6738 15.8747 12.084 15.2347 12.084 14.4388V2.55778C12.084 1.75367 12.682 1.10547 13.4194 1.10547Z" stroke="#23254C" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M4.46484 9.54834H8.00401H11.5432" stroke="#23254C" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M4.46484 12.0591H11.5432" stroke="#23254C" stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                    <div className="tituloPaso flex flex-col justify-center">
                        <div className="concurso w-[456px] text-indigo-950 text-sm font-normal font-lato leading-tight">Pasada</div>
                        <div className="competicion w-[456px] text-zinc-500 text-sm font-normal font-lato leading-tight">Sesión de entrenamiento</div>                                                                 
                    </div>
                </div>
            <div>
                <input type='radio' name="competicion" onChange={handleIsChecked} value={'Pasada'} />
            </div>
            </div>
            <div className="contenedorBotones flex w-full flex-row-reverse gap-3">
                <button  onClick={handlePasos} disabled={!isChecked} className={`siguiente shadow-sm shadow-black bg-[#23254C] text-gray-300 w-[120px] h-[44px] justify-center items-center flex border rounded border-[#23254C] text-sm font-lato font-medium leading-5 ${!isChecked ? 'bg-[#F3F2F2]   ' : ''}`} >Siguiente</button>
                <button  className="cancelar shadow-sm shadow-black w-[120px] h-[44px] justify-center items-center flex border rounded border-[#23254C] text-[#23254C] text-sm font-lato font-medium leading-5 " onClick={closeModal}>Cancelar</button>
            </div>
    </div> 
    )
}
       
export default Paso1    