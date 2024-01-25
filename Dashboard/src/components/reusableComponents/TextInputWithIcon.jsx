import { useEffect, useState } from "react"


const TextInputWithIcon = ({label, setValue, value, icon, placeholder}) => {
    
    const [textEnter, setTextEnter] = useState(null)

    useEffect(() => {
        setTextEnter(value)
    },[value])

    const handleTextEnter = (e) => {
        setTextEnter(e.target.value)
    }
    
    useEffect( () => {
        if (textEnter) setValue(textEnter)
    },[textEnter])
     
    return (
        <div className="main container">
            <div className="body flex flex-col w-full ">
                <div className="label font-lato text-base font-normal text-[#23254C] mb-2">{label}</div>
                <div className="input flex flex-row px-[14px] py-[10px] items-center justify-start border rounded border-[#D1DADA]  ">
                    <div className="icon w-5 h-5 mr-2">
                        {icon}
                    </div>
                    <div className="input">
                        <input 
                            type="text"
                            placeholder={placeholder}
                            value={textEnter}
                            onChange={handleTextEnter}
                            className="input outline-none w-full font-lato text-base font-normal text-#23254C"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextInputWithIcon