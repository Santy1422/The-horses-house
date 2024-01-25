import CardEventoFotos from "./CardEventoFotos"
import { useState } from "react"
import { useRouter } from "next/router"

const CardContainer = ({ 
    misEventos, 
    setModalCargaMultimedia, 
    setModalOpen, 
    setEventId,
    }) => {
    const { push } = useRouter()
    const primerosTres = misEventos.length > 3 && misEventos?.slice(0, 3)
    const uniqueEventIds = new Set();
    return (
        <section className="w-full mt-4 z-[0]">
            <div className="flex flex-row justify-between items-end w-full">
                <p className="text-indigo-950 text-2xl font-bold font-Lato leading-loose">Tus eventos</p>
                <p onClick={() => push('/dashboardPh/eventosPh')} className="cursor-pointer text-indigo-950 text-lg font-bold font-Lato leading-7">Ver todos</p>
            </div>

            {/* //mis eventos */}
            <section className="mt-3 h-[464px] flex flex-row gap-6 w-full min-w-[full]">
{          

misEventos?.map((ev, i) => {
  // Verificar si el ID del evento ya está en el conjunto
  if (!uniqueEventIds.has(ev.id)) {
    // Si no está en el conjunto, agregarlo y renderizar la tarjeta
    uniqueEventIds.add(ev.id);

    return (
      <CardEventoFotos
        key={ev.id}
        evento={ev}
        setModalOpen={setModalOpen}
        setEventId={setEventId}
      />
    );
  }

  // Si el ID ya está en el conjunto, no renderizar la tarjeta
  return null;
})}

            </section>
        </section>



    )
}

export default CardContainer