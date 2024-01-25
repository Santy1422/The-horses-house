const TabSelector = ({tabSelected, setTabSelected}) => {


    return(
        <div className="w-[100%] h-10 relative">
        <div className="w-[100%] h-px left-0 top-[39px] absolute bg-gray-200"></div>
        <div className="left-0 top-0 absolute justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-center items-center inline-flex">
            <div onClick={() => setTabSelected('Listado')} className="cursor-pointer marker:px-1 py-[9px] justify-center items-center gap-2 inline-flex">
              <p className={`${tabSelected === 'Listado' ? "text-indigo-950" :"text-zinc-500"} text-sm font-normal font-lato leading-tight`}>Listado</p>
            </div>
            <div className={`self-stretch h-0.5 ${tabSelected === 'Listado' ? " bg-indigo-950" : "bg-transparent" }`}></div>
          </div>
          <div className="flex-col justify-center items-center inline-flex">
            <div onClick={() => setTabSelected('Calendario')} className="cursor-pointer px-1 py-[9px] justify-center items-center gap-2 inline-flex">
              <p className={`${tabSelected === 'Calendario' ? "text-indigo-950" : "text-zinc-500"} text-sm font-normal font-lato leading-tight`}>Calendario</p>
            </div>
            <div className={`self-stretch h-0.5 ${tabSelected === 'Calendario' ? "bg-indigo-950" : "bg-transparent"}`}></div>
          </div>
        </div>
      </div>
    )
}

export default TabSelector