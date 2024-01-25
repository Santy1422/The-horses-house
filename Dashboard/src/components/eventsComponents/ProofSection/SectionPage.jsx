const SectionPage = ({ title, active, onClick }) => (
    <div
      className={`flex-col justify-center cursor-pointer items-center inline-flex ${
        active ? "border-b-2 border-indigo-950" : ""
      }`}
      onClick={onClick}
    >
      <div className="px-1 py-[9px] justify-center items-center pb-1 gap-2 inline-flex">
        <h4
          className={`text-${
            active ? "indigo-950" : "zinc-500"
          } text-sm font-normal font-lato leading-tight`}
        >
          {title}
        </h4>
      </div>
    </div>
  )

  export default SectionPage