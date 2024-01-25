import { useEffect, useState } from "react"
import styles from "../../styles/Landing.module.css"


const TextInput = ({value, setValue, placeholder, label, hintEditable, weight, height}) => {
    /*
    Se puede editar por props el placeholder, el titulo, y el hint.
    */

    const [hint, setHint] = useState(hintEditable)
    const [visible, setVisible] = useState('invisible') 
    const [error, setError] = useState('')
    const [isValid, setIsValid] = useState(true) 
    const [divBlue, setDivBlue] = useState(false)
    const [text, setText] = useState('')

    const onFocusDivBlue = (e) => {
        if (error) return
        setDivBlue(!divBlue)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
      }

      const showHint = () => {
        setVisible(visible === 'invisible' ? 'visible' : 'invisible');
      };

    const validateText = (text) => {        
      const textRegex = /^[a-zA-Z\sáéíóúÁÉÍÓÚ0-9]+$/u
        return textRegex.test(text);
      }
    
    useEffect(()=>{
      if(isValid) {
        setError('')
        setValue(text)
    } else {
        setError('Debe ingresar información')
        setValue('')
        setDivBlue(false)
    }
    },[isValid, text])


    const onChange = (e) => {    
      setText(e.target.value)  
      setIsValid(validateText(e.target.value))
    
    };  
    
    return (
        <div className={`flex flex-col w-full  items-start gap-1.5 `}>        
          <label className={`w-full h-5 ${styles["text-font-lato"]}  text-base font-normal leading-6 text-[#23254C]`}>{label}</label>
          <div className={`flex h-11 px-3.5 py-2.5 bg-white border border-gray-300 rounded gap-2  w-full h-[${height}] ${divBlue ? "border-blue-300" : ''} ${error ? "border-red-300" : text ? 'border-green-300' : ''}`}>
                     
            <input
            name="videoAmount"
              type='text'
              value={text}
              onChange={((e) => onChange(e))}
              placeholder={placeholder}
              className="w-full outline-0 self-start"
              onFocus={((e) => onFocusDivBlue(e))}  
              onBlur={((e) => onBlurDivBlue(e) )}
                                            
            />
          
          </div>        
          {error ? <span className="w-full h-4  text-sm font-light leading-6 font-lato text-red-500 ">{error}</span> : <span className={`w-full h-4  text-sm font-light leading-6 font-primary text-gray-400 ${visible}`} >{hint}</span>}
        </div>
        
    
    )
}

export default TextInput