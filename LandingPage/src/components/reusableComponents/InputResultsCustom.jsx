import { useEffect, useState } from "react"


const InputsResultsCustom = ({value, setValue}) => {
      
    
    const [minutos, setMinutos] = useState(value ? Math.floor(value/60) : null  )
    const [segundos, setSegundos] = useState(value ? value % 60 : null )
    const [primerRender, setPrimerRender] = useState(true)
    

    const handleNumberChange = (e) => {       
        if (e.target.name === 'segundos') {            
            if (e.target.value > 59) {
                setSegundos(prevState => {
                    return prevState
                })
            } else {
                setSegundos(e.target.value)
            }
        }
        if (e.target.name === 'minutos') {
            setMinutos(e.target.value)
        }
    }

    useEffect(()=> {        
        
        if (primerRender) {
            setPrimerRender(false)
            return
        } 
        if (!primerRender) {
            const segundosAguardar = Number(minutos * 60) + Number(segundos)        
            setValue(Number(segundosAguardar))
        }
    },[minutos, segundos])

    
    return (
        <>
            <div className="main container ">
                <div className="contenedor flex w-full h-full items-center justify-center flex-row gap-x-[2px]  ">
                    <input 
                        type='number'
                        
                        name="minutos"
                        value={minutos}
                        onChange={(e) => handleNumberChange(e)}
                        placeholder={"00'"}
                        className="input text-center outline-none h-[34px] w-[34px] border rounded border-[#D1DADA] bg-transparent font-primary text-xs leading-[18px] font-normal text-[#6D6E6D] appearance-none "
                    />
                    <div>:</div>
                    <input 
                        type='number'
                        name="segundos"
                        value={segundos}
                        onChange={(e) => handleNumberChange(e)}
                        placeholder={"00''"}
                        className="input text-center outline-none h-[34px] w-[34px] border rounded border-[#D1DADA]  bg-transparent font-primary text-xs leading-[18px] font-normal text-[#6D6E6D] appearance-none "
                    />
                </div>
            </div>
        </>
    )
}

export default InputsResultsCustom