import Button from "@/components/reusableComponents/Button"
import { horseImg, plusIcon } from "@/iconos/icons"

const EmptyStateSinEventos = () => {
    return (
        <div className="mt-4 w-full h-[464px] p-2.5 bg-white rounded-[10px] justify-center items-center gap-2.5 flex flex-col">

            {horseImg}
            <div className="text-center">
                <p className="text-neutral-500 text-xl font-bold font-Lato">
                    Sin eventos
                </p>
                <p className="text-center text-neutral-400 text-base font-normal font-Lato leading-normal">
                    Todavía no estás suscrito a ningún evento. Una vez suscrito podrás verlos aquí.
                </p>
                <div className="flex justify-center items-center text-center mt-5 px-20"> {/* Añadí la clase text-left aquí para alinear el botón a la izquierda */}
                    {/* <Button
                        variant={"primary"}
                        customStyle={"rounded flex justify-center items-center font-lato px-5 text-center py-2"}
                        descripcion={"Inscribirse al evento"}
                        icon={plusIcon}
                        >
                    </Button> */}
                </div>
            </div>
        </div>
    )
}

export default EmptyStateSinEventos
