const Card = () => {
    return (
        <> 
        <div className="w-[592px] h-[286px] p-6 bg-[#FFF] rounded-[10px] border border-black border-opacity-20 justify-start items-start gap-6 inline-flex">
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[170px] flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch text-gray-800 text-sm font-normal font-['Lato'] leading-tight">Design</div>
      <div className="self-stretch h-[138px] flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 text-indigo-950 text-xl font-bold font-['Lato'] leading-[30px]">UX review presentations</div>
          <div className="pt-1 flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start flex">
              <div className="w-5 h-5 relative" />
            </div>
          </div>
        </div>
        <div className="self-stretch text-gray-800 text-base font-normal font-['Lato'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-11 rounded justify-start items-start flex">
        <div className="grow shrink basis-0 h-11 px-4 py-2.5 bg-white rounded border-2 border-indigo-950 justify-center items-center gap-2 flex">
          <button className="text-indigo-950 text-base font-bold font-['Lato'] leading-normal">Button CTA</button>
        </div>
      </div>
      <div className="grow shrink basis-0 h-11 rounded justify-start items-start flex">
        <div className="grow shrink basis-0 h-11 px-4 py-2.5 bg-indigo-950 rounded justify-center items-center gap-2 flex">
          <button className="text-white text-base font-bold font-['Lato'] leading-normal">Button CTA</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
        
    )
}

export default Card
