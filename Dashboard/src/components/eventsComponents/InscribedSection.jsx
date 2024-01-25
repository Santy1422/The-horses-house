import CardEditInfoEvent from "@/components/reusableComponents/CardEditInfoEvent";
import React, { useState } from "react";
import ContentCardEditInscription from "./GeneralDataSection/ContentCardEditInscription";
import { useEvento } from "@/customHooks/useEvento";
import DateInput from "@/components/reusableComponents/DateInput";
import Button from "@/components/reusableComponents/Button";

const InscribedSection = ({ inscriptos, publicado, event }) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    fechaInicioInscripcion,
    fechaFinInscripcion,
    setFechaFinInscripcion,
    setFechaInicioInscripcion,
    estadoEvento,
  } = useEvento(event);

  return (
    <div className="flex flex-col gap-8 justify-center items-center overflow-y-scroll w-[94%] py-3">
      <CardEditInfoEvent
        title="Inscripciones"
        setIsEditing={() => setIsEditing(!isEditing)}
        isEditing={isEditing}
      >
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <DateInput
              dateLabel="Desde"
              value={fechaInicioInscripcion}
              setValue={setFechaInicioInscripcion}
            />
            <DateInput
              dateLabel="Hasta"
              value={fechaFinInscripcion}
              setValue={setFechaFinInscripcion}
            />
            <Button
              variant="secondary_alt"
              px="px-4"
              py="py-3"
              rounded="rounded"
              action={() => setIsEditing(false)}
              customStyle="self-end"
            >
              <p className="text-indigo-950 text-sm font-bold font-lato leading-tight">
                Guardar cambios
              </p>
            </Button>
          </div>
        ) : (
          <ContentCardEditInscription
            publicado={estadoEvento === "Publicado"}
            fechaInicioInscripcion={fechaInicioInscripcion}
            fechaFinInscripcion={fechaFinInscripcion}
          />
        )}
      </CardEditInfoEvent>
      <div className="bg-white w-full flex h-[338px] items-center justify-center rounded-[10px] border border-gray-300">
        <p className="text-zinc-700 text-base font-normal font-lato leading-normal">
          Todavía no hay inscriptos
        </p>
      </div>
    </div>
  );
};

export default InscribedSection;
