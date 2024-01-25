import { useEffect, useState } from "react"
import CheckboxWeb from "./CheckboxWeb"
import CustomToggle from "./CustomToggle"

const DropdownCheckbox = ({ opciones, setValue, label, placeholder }) => {

    const [categoriasElegidas, setCategoriasElegidas] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsToggled((previousState) => !previousState);
    }

    useEffect(() => {
        setValue(categoriasElegidas)
    }, [categoriasElegidas])

    return (

        <div className="flex flex-col relative">
            <p className="font-lato text-base font-normal leading-6 pb-1 text-[#23254C]">{label}</p>
            {categoriasElegidas?.length > 0 &&
                    <div className="absolute top-[35px] left-3 w-fit flex flex-row gap-x-3 z-20">
                        {
                            categoriasElegidas?.map((p, i) => {
                                return (
                                    <button key={i} className="flex flex-row pl-[5px] pr-1 py-0.5 bg-white rounded-sm border border-black border-opacity-20" onClick={() => setCategoriasElegidas(categoriasElegidas.filter(cat => cat !== p))}>
                                        <span>{p}</span>
                                        <div className="h-full pl-[3px] w-4 h-4 p-0.5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.61305 3.11351C3.75949 2.96707 3.99693 2.96707 4.14338 3.11351L6.49953 5.46967L8.85569 3.11351C9.00214 2.96707 9.23957 2.96707 9.38602 3.11351C9.53247 3.25996 9.53247 3.4974 9.38602 3.64384L7.02986 6L9.38602 8.35616C9.53247 8.5026 9.53247 8.74004 9.38602 8.88649C9.23957 9.03293 9.00214 9.03293 8.85569 8.88649L6.49953 6.53033L4.14338 8.88649C3.99693 9.03293 3.75949 9.03293 3.61305 8.88649C3.4666 8.74004 3.4666 8.5026 3.61305 8.35616L5.9692 6L3.61305 3.64384C3.4666 3.4974 3.4666 3.25996 3.61305 3.11351Z" fill="#251431" />
                                        </svg>
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
                }
            <div className=" px-[14px] py-[10px] border h-11 border-gray-300 rounded flex flex-row justify-between items-center hover:cursor-pointer overflow-hidden" onClick={toggleDropdown}>
                
                {placeholder ? <p className={`font-lato text-base font-normal leading-6  text-[#23254C]`}>{placeholder}</p> : <p></p>}
                <CustomToggle onToggle={toggleDropdown} value={isToggled} />
            </div>
            {isOpen && (
                <div className="flex mt-2 max-h-[200px] border border-gray-300 rounded pr-2 pl-[14px]">
                    <div className=" overflow-y-auto w-full hover:cursor-pointer">
                        <CheckboxWeb opciones={opciones} setValue={setCategoriasElegidas} selectedValues={categoriasElegidas} />
                    </div>
                </div>
            )}
        </div>
    );


}

export default DropdownCheckbox