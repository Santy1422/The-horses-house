import { useEffect, useState } from "react";
import CustomToggle from "./CustomToggle"
import CheckboxWeb from "./CheckboxWeb";


const InputsVallas = ({options, setValue, value}) => {
    
    const [vallas, setVallas] = useState(value || null)
    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsToggled((previousState) => !previousState);
    }

    useEffect( () => {
        setValue(vallas)
    },[vallas] )
    
    return (
        <div className="mainInputsVallas flex flex-col relative justify-start w-full  ">
            <div className="contenedorToggle h-[34px] w-[34px] border rounded border-[#D1DADA] flex justify-center items-center">
                <CustomToggle onToggle={toggleDropdown} value={isToggled} />
            </div>
            {isOpen && 
                 <div className="absolute top-full  left-0 flex bg-white mt-2.5 shadow-md max-h-[250px] pl-2 z-30 w-[160px]  border border-stone-300 rounded">
                    <div className="overflow-y-auto w-full hover:cursor-pointer flex flex-col gap-2 justify-start items-start">
                        <CheckboxWeb opciones={options} setValue={setVallas} selectedValues={vallas} value={vallas} />
                    </div>
             </div>
            }
        </div>
    )
}

export default InputsVallas