import Button from "@/components/reusableComponents/Button";
import { clubIcon, closeCard, IconCalendarModalStep1, IconClockModalStep1, IconGpsModalStep1 } from "@/iconos/icons";
import { useDispatch } from 'react-redux';

const Paso1InscripcionFotografo = ({
  eventDetails,
  setPasos,
  setModalConfirmacion,
}) => {
  const dispatch = useDispatch()
  console.log("event", eventDetails);
  let diaInicio = eventDetails.fechaInicio.split("T")[0].split("-")[2];
  let fechaFin = new Date(eventDetails.fechaFinalizacion);
  let numeroDia = fechaFin.getDate();
  let nombreMes = fechaFin.toLocaleDateString("es-ES", {
    month: "long",
  });
  let finalizacion = (numeroDia + " " + nombreMes).toUpperCase();

  const handleButtonClick = () => {
    setPasos(2);
  };

  return (
    <div className="bg-white w-[474px] h-[367px] rounded-xl p-6 relative">
      {/* titulo */}
      <section className="flex flex-row justify-between items-center">
        <div className="bg-zinc-100 rounded-full p-2.5 items-center ">
          {clubIcon}
        </div>

        <p className="text-indigo-950 text-xl font-semibold font-Lato leading-8 w-[70%]">
          {eventDetails.nombreEvento} -{" "}
          <span className="font-lato leading-[10px] font-normal text-xl text-indigo-950">
            {eventDetails.clubesPatrocinadores[0]}
          </span>
        </p>

        <div className="w-8 h-8 relative items-start cursor-pointer"
          onClick={() => { setPasos(0), setModalConfirmacion(false) }}>
          {closeCard}
        </div>
      </section>

      <div className="border-t border-t-gray-100 w-full mt-5"></div>

      {/* cuerpo */}
      <section className="mt-6">
        {/* fecha */}
        <div className="flex flex-row gap-2 items-center">
          <div className="w-5 h-5 relative">
            {IconCalendarModalStep1}
          </div>
          <div className="w-auto">
            <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">
              Del {diaInicio} AL {finalizacion}
            </p>
          </div>
        </div>

        {/* hora */}
        <div className="hora flex flex-row gap-2 mt-3 items-center">
          <div className="w-5 h-5 relative">
            {IconClockModalStep1}
          </div>

          <div className="w-auto">
            <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">
              {eventDetails.horaInicio}
            </p>
          </div>
        </div>
        {/* ubicacion */}
        <div className="flex flex-row gap-2 mt-3">
          <div className="w-5 h-5 relative">
            {IconGpsModalStep1}
          </div>

          <div className="w-auto pr-1">
            <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">
              {eventDetails.ubicacion}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-row gap-3 h-11 absolute bottom-4 w-[90%]">
        <Button
          variant={"primary-alt"}
          descripcion={"Cancelar"}
          action={() => {
            setPasos(0);
            setModalConfirmacion(false);
          }}
          customStyle={"w-[50%] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-semibold font-Lato leading-normal"}
        ></Button>

        <Button
          variant={"primary"}
          descripcion={"Inscribirse"}
          action={() => handleButtonClick()}
          customStyle={"w-[50%] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-normal font-Lato leading-normal"}
        ></Button>
      </section>
    </div>
  );
};

export default Paso1InscripcionFotografo;
