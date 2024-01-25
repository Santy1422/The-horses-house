import DateInput from "../reusableComponents/DateInput"
import HourInput from "../reusableComponents/HourInput"

const FechaEvento = ( {setFechaInicio , setHoraInicio, setHoraFin, setFechaFin}) => {
    
    return (
        <div className="main container bg-white flex flex-col border border-gray-300 rounded-md py-12 px-16 gap-4 ">
            <div className="titulo font-lato text-2xl font-bold leading-8 text-[#23254C] mb-4">Fechas del evento</div>
            <div className="descripcion font-lato text-base font-normal leading-6 text-[#6D6E6D]">Días en que se llevarán a cabo las pruebas de la competencia.</div>
            <div className="inputs flex flex-col">
                <div className="desde flex flex-row gap-[20px]">
                    <DateInput setValue={setFechaInicio} dateLabel={'Desde'} />
                    <HourInput setValue={setHoraInicio}/>
                </div >
                <div className="hasta flex flex-row gap-[20px]">
                    <DateInput setValue={setFechaFin} dateLabel={'Hasta'} />
                    <HourInput setValue={setHoraFin}/>
                </div>
            </div>
        </div>
    )
}

export default FechaEvento