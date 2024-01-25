

const PruebasTotales = ({pruebasDelEvento}) => {
    
        
    return (
        <div className="hojaDeRuta flex h-fit flex-col mt-[20px]  ">       
            {(pruebasDelEvento.length === 0) ?
                <div className="main flex flex-row bg-white border border-gray-300 rounded items-center justify-center h-[200px] mr-[60px]">
                    <div className="label font-lato text-base font-normal leading-6 text-[#494949]">Todavía no agregaste ninguna prueba</div>        
                </div>            
                :
                <div className="bg-white border rounded-lg border-gray-300">
                <table className="w-full"> 
                    <tr className="rounded-[10px] border-b border-gray-300">
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Número</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Fecha</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Hora</th>
                        
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Categoría</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Tipo</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Altura</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Definición</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Caballos</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Artículo</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Valor</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Observ.</th>
                        <th className="text-left px-4 py-3 text-zinc-700 text-xs font-normal">Pista</th>
                        
                    </tr>    
                    {/* <tbody className="contenedorPruebas flex flex-col h-fit"> */}
                        {pruebasDelEvento.map((prueba, i) => {
                            return (
                                <tr key={i} className="rounded-[10px]">
                                    {Object.keys(prueba).map((clave, i) => (
                                        <>
                                        {
                                            clave !== "premios" &&
                                            <td key={i} className="text-left px-4 py-3 text-zinc-700 text-xs font-normal border-b border-gray-300">
                                            {prueba[clave]}
                                        </td>
                                        }
                                        </>
                                    ))}       
                                </tr>
                            )                                                     
                        })}
                    {/* </tbody> */}
                </table>
                </div>
            }

        </div>
    )
}

export default PruebasTotales