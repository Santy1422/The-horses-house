import { horseImg } from "@/iconos/icons"

const EmptyStateMyEvents = () => {

    return (
        <div className="mt-6 bg-white w-[100%] min-h-[464px] p-2.5 rounded-[10px] justify-center items-center gap-2.5 flex flex-col">
            {horseImg}

            <div className="flex flex-col gap-2 items-center justify-center mt-4">
                <p className="text-neutral-500 text-xl font-bold font-Lato leading-[30px]">Sin eventos</p>
                <p className="w-[316.77px] text-center text-neutral-400 text-base font-normal font-Lato leading-normal">Todavía no creaste ningún evento. Una vez creados podrás verlos acá.</p>
            </div>
        </div>
    )
}

export default EmptyStateMyEvents