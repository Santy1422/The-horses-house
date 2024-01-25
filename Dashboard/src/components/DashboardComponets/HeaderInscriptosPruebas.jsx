const HeaderInscriptosPruebas = ({user, creadorId}) => {
    const match = user === creadorId

    const campos = ['Jinete', 'Caballo', 'Categoría', 'Club', 'Pago']

    return(

    <div className="bg-zinc-100 flex flex-row justify-start items-center w-auto border border-b-gray-300 border-t-0 border-x-0 pb-2 pl-16 pr-10">
       
                <div className="w-[24%] items-center justify-start px-2">
                <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">Jinete</p>
                </div>

                <div className="w-[19%] items-center justify-start px-2" >
                <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">Caballo</p>
                </div>

                <div className="w-[15%] items-center justify-start px-2" >
                <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">Categoría</p>
                </div>

                <div className="w-[20%] items-center justify-start px-2">
                <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">Club</p>
                </div>

                <div className="w-[20%] items-center justify-start px-2" >
                    <div hidden={`${match ? 'true' : 'false'}`}>
                <p className="text-zinc-700 text-xs font-normal font-lato leading-[18px]">Pago</p>
                    </div>
                </div>
                
    </div>
    )
}

export default HeaderInscriptosPruebas