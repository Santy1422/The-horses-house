const ViewTypePicker = ({viewType, setViewType}) => {

    return(
        <div className="w-[237px] h-[40px] justify-start items-start flex flex-row">
            <button className={`${viewType === 'Day' ? "bg-zinc-100" : "bg-white"} border h-11 w-[79px] rounded-l`}
            onClick={() => setViewType('Day')}>
                <p className="text-indigo-950 text-sm font-bold font-Lato leading-tight">Día</p>
            </button>
            <button className={`${viewType === 'Week' ? "bg-zinc-100" : "bg-white"} border-y h-11 w-[79px]`}
            onClick={() => setViewType('Week')}>
                <p className="text-indigo-950 text-sm font-bold font-Lato leading-tight">Semana</p>
            </button>
            <button className={`${viewType === 'Month' ? "bg-zinc-100" : "bg-white"} border h-11 w-[79px] rounded-r`}
            onClick={() => setViewType('Month')}>
                <p className="text-indigo-950 text-sm font-bold font-Lato leading-tight">Mes</p>
            </button>

        </div>
    )
}

export default ViewTypePicker