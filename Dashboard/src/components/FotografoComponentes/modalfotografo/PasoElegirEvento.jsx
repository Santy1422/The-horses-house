import { useState } from "react";
import DropdownWeb from "@/components/reusableComponents/DropdownWeb";
import Button from "@/components/reusableComponents/Button";
import CloseIcon from "../../images/icons/closeIcon.svg";
import { cupIcon } from '../../../iconos/icons';


const PasoElegirEvento = ({ eventos,
           setModalCargaMultimedia, 
           setEventDetails, 
           setPasosCargaMultimedia, 
           pasosCargaMultimedia, 
           setModalOpen,
           setEventId 
          }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const eventsNames = eventos?.map((ev, index) => ev.nombreEvento)

  const handleEventSelection = () => {
    const getEvent = eventos?.find(ev => ev.nombreEvento === selectedOption)
    console.log('get event', getEvent)
    setEventDetails(getEvent)
    setEventId(getEvent.id)
    setPasosCargaMultimedia(2)
  }

  const cerrarModal = () => {
    setPasosCargaMultimedia(2);
    setModalCargaMultimedia(false);
  };


  return (
    <div className="w-[600px] h-[398px] sm:w-[360px] sm:h-[350px] bg-white rounded-[10px] p-6">
      <section className="flex flex-row justify-between items-center">
        <div className="p-5 bg-zinc-100 rounded-full">
          {cupIcon}
        </div>

        <p className="w-[392px] text-indigo-950 text-2xl sm:text-lg md:text-lg font-bold font-Lato leading-loose">
          Selecciona el evento
        </p>

        <div
          className="w-8 h-8 items-start cursor-pointer mb-4"
          onClick={() => {
            cerrarModal();
          }}
        >
          <CloseIcon/>
        </div>
      </section>

      <p className="text-indigo-950 text-base font-normal font-Lato leading-normal mt-3">Haz click en el evento que deseas adjuntar las fotos/Videos</p>

      <div className="h-[74px] w-[100%] gap-1.5 mt-[20px] relative ">
        <DropdownWeb
          options={eventsNames}
          onSelect={setSelectedOption}
          selectedOption={selectedOption}
          placeholder={"Seleccionar evento"}
        />
      </div>

      <div className="w-[550px] sm:w-[300px] h-36 sm:h-20 flex items-end absolute z-10 ">
        <section className="flex flex-row gap-3 h-11 w-full">
          <Button
            variant={"primary-alt"}
            descripcion={"Cancelar"}
            action={() => {
              cerrarModal();
            }}
            customStyle={"w-[120px] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-semibold font-Lato leading-normal"}
          ></Button>

          <Button
            variant={"primary"}
            descripcion={"Aceptar"}
            action={() => handleEventSelection()}

            customStyle={"w-[120px] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-normal font-Lato leading-normal"}
          ></Button>
        </section>
      </div>




    </div>
  )
}

export default PasoElegirEvento