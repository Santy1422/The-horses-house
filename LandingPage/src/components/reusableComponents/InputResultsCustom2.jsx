import { useEffect, useState } from "react"


const InputsResultsCustom = ({value, setValue}) => {
      
    
    const [number, setNumber] = useState(value)    
    const [primerRender, setPrimerRender] = useState(true)
    

    const handleNumberChange = (e) => {       
        if (e.target.value < 0) return
        setNumber(e.target.value)
    }

    useEffect(()=> {      
        
        if (primerRender) {
            setPrimerRender(false)
            return
        } 
        if (!primerRender) {                    
            setValue(number)
        }

    },[number])

    
    return (
        <>
            <div className="main container ">
                <div className="contenedor flex w-full h-full items-center justify-center flex-row gap-x-[2px]  ">
                    <input 
                        type='number'                        
                        name="name"
                        value={number}
                        onChange={(e) => handleNumberChange(e)}
                        placeholder={""}
                        className="input text-center outline-none h-[34px] w-[34px] border rounded border-[#D1DADA] bg-transparent font-primary text-xs leading-[18px] font-normal text-[#6D6E6D] appearance-none "
                    />                    
                </div>
            </div>
        </>
    )
}

export default InputsResultsCustom