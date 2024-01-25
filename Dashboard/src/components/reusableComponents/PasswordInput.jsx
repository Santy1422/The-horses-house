import { useEffect, useState } from "react";
import styles from "../../styles/Landing.module.css"

const PasswordInput = ({ setValue, title, reconfirm, passwordCheck, hintText }) => {
    
    const [hint, setHint] = useState(reconfirm ? 'Reingresa tu contrasena' : hintText)
    const [visible, setVisible] = useState('visible') 
    const [error, setError] = useState('')    
    const [isValid, setIsValid] = useState(true)
    const [divBlue, setDivBlue] = useState(false)   
    const [password, setPassword] = useState('')  
    const [showPassword, setShowPassword] = useState(false);
 
    const onFocusDivBlue = (e) => {
        if (error) return
        setDivBlue(true)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
    }
   

    const clearPassword = () => {
        setPassword('')
        setValue('') 
        setError('Enter a correct password')  
    }

  
    const validatePassword = (password) => {
        if (reconfirm) {
            return password === passwordCheck
        }
         // Esta expresión regular aceptará al menos una letra mayúscula, un número y opcionalmente un carácter especial (incluyendo el punto, la coma y el asterisco)
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&.,#]*$/;
        return passwordRegex.test(password);
    }
    
    useEffect(() => {    
        if (isValid) {
            setError('')  
            setValue(password)       
        } else  {
            setError('Contraseña incorrecta')          
            setDivBlue(false)
            setValue('')
        }
    },[isValid, password])

     const onChange = (e) => {    
        setPassword(e.target.value)
        const newEmail = e.target.value;    
        setIsValid(validatePassword(newEmail));    
    }

  return (
    <div className={`flex flex-col w-full items-start gap-1.5`}>        
        
        <label className={`w-full h-5 ${styles["text-font-lato"]} text-base font-normal leading-6 text-[#23254C]`}>{title || 'Password'}</label>
        
        <div className={`flex w-full h-11 px-3.5 py-2.5 bg-white border rounded items-center gap-2  ${divBlue ? " shadow-focus shadow-shadow-focus " : ''} ${error ? "border-red-300" : password ? 'border-green-300' : 'border-stone-300'} `}>

            <div className="w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2.25C11.278 2.25 8.25 5.278 8.25 9C8.25 9.515 8.3081 10.0231 8.4231 10.5171L2.46997 16.47C2.32897 16.611 2.25 16.802 2.25 17V21C2.25 21.414 2.586 21.75 3 21.75H7C7.414 21.75 7.75 21.414 7.75 21V18.75H10C10.199 18.75 10.39 18.671 10.53 18.53L13.4829 15.5769C13.9759 15.6919 14.484 15.75 15 15.75C18.722 15.75 21.75 12.722 21.75 9C21.75 5.278 18.722 2.25 15 2.25ZM15 14.25C14.479 14.25 13.967 14.1739 13.481 14.0229C13.214 13.9399 12.925 14.012 12.729 14.21L9.68896 17.25H7C6.586 17.25 6.25 17.586 6.25 18V20.25H3.75V17.311L9.79004 11.271C9.98604 11.074 10.0591 10.785 9.97705 10.52C9.82705 10.034 9.75 9.52198 9.75 9.00098C9.75 6.10598 12.105 3.75098 15 3.75098C17.895 3.75098 20.25 6.10598 20.25 9.00098C20.25 11.896 17.895 14.25 15 14.25ZM17.27 8C17.27 8.69 16.71 9.25 16.02 9.25C15.331 9.25 14.7649 8.69 14.7649 8C14.7649 7.31 15.32 6.75 16.01 6.75H16.02C16.71 6.75 17.27 7.31 17.27 8Z" fill="#939697"/>
                </svg>
            </div>
            
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={((e) => onChange(e))}
                placeholder={'Escribí tu contraseña'}
                className={`w-full outline-0 ${styles["text-font-lato"]} ${showPassword ? '' : 'text-2xl'} ${password ? '' : 'text-base'} `}
                onFocus={((e) => onFocusDivBlue(e))}  
                onBlur={((e) => onBlurDivBlue(e) )}                       
            /> 

            {
                !showPassword ?    
                <div className="w-6 h-6">
                    <svg onClick={()=>setShowPassword(!showPassword)} className="hover:cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75ZM9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z" fill="#656579"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.92845 12.0469C4.80026 13.3204 5.94562 14.5632 7.25485 15.515C8.71857 16.579 10.345 17.25 12 17.25C13.655 17.25 15.2815 16.579 16.7452 15.515C18.0544 14.5632 19.1998 13.3204 20.0716 12.0469C17.829 9.30551 15.4205 6.75 12 6.75C8.57957 6.75 6.17106 9.30554 3.92845 12.0469ZM2.41688 11.5283C4.67148 8.74092 7.57988 5.25 12 5.25C16.4202 5.25 19.3286 8.74087 21.5831 11.5283C21.7852 11.7781 21.8057 12.1288 21.6342 12.4004C20.6462 13.9651 19.2632 15.539 17.6272 16.7283C15.9926 17.9165 14.0634 18.75 12 18.75C9.93668 18.75 8.00742 17.9165 6.37286 16.7283C4.73681 15.539 3.35379 13.9651 2.36584 12.4004C2.19433 12.1288 2.21485 11.7781 2.41688 11.5283Z" fill="#656579"/>
                    </svg> 
                </div>
                :
                <div className="w-6 h-6">
                    <svg onClick={()=>setShowPassword(!showPassword)} className="hover:cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.46967 2.46967C2.76257 2.17678 3.23744 2.17678 3.53033 2.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z" fill="#656579"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9963 10.1148C11.3069 10.3889 11.3364 10.8628 11.0623 11.1734C10.8674 11.3942 10.75 11.6825 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.3175 13.25 12.6058 13.1326 12.8266 12.9377C13.1372 12.6636 13.6111 12.6931 13.8852 13.0037C14.1593 13.3143 14.1298 13.7882 13.8192 14.0623C13.3349 14.4898 12.6969 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 11.3031 9.51022 10.6651 9.9377 10.1808C10.2118 9.87024 10.6858 9.84068 10.9963 10.1148Z" fill="#656579"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.97605 7.13065C8.21377 7.46987 8.13148 7.93756 7.79227 8.17527C6.34994 9.18602 5.10922 10.6018 3.92836 12.0468C4.80018 13.3203 5.94557 14.5632 7.25485 15.515C8.71857 16.579 10.345 17.25 12 17.25C13.3792 17.25 14.7385 16.7845 16.0036 16.0109C16.357 15.7948 16.8186 15.9061 17.0347 16.2595C17.2508 16.6129 17.1395 17.0745 16.7861 17.2906C15.3482 18.1699 13.7207 18.75 12 18.75C9.93668 18.75 8.00742 17.9165 6.37286 16.7283C4.73681 15.539 3.35379 13.9651 2.36584 12.4004C2.19433 12.1288 2.21485 11.7781 2.41688 11.5283C3.68966 9.95476 5.15131 8.19434 6.93144 6.94687C7.27065 6.70916 7.73834 6.79144 7.97605 7.13065Z" fill="#656579"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C16.4201 5.25 19.3286 8.74087 21.5831 11.5283C21.7851 11.7781 21.8057 12.1288 21.6342 12.4004C21.2998 12.9299 20.9213 13.4589 20.5044 13.9726C20.2433 14.2942 19.771 14.3434 19.4494 14.0824C19.1278 13.8213 19.0786 13.349 19.3396 13.0274C19.6012 12.7051 19.8458 12.3767 20.0715 12.0469C17.829 9.30551 15.4204 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6Z" fill="#656579"/>
                    </svg>
                </div>
            }

            {
                password &&
                <div className="w-6 h-6">
                    <svg className="hover:cursor-pointer" onClick={(()=>clearPassword())} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1479_2077)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.18874 7.18919C7.43282 6.94511 7.82854 6.94511 8.07262 7.18919L11.9995 11.1161L15.9265 7.18919C16.1706 6.94511 16.5663 6.94511 16.8104 7.18919C17.0544 7.43327 17.0544 7.829 16.8104 8.07307L12.8834 12L16.8104 15.9269C17.0544 16.171 17.0544 16.5667 16.8104 16.8108C16.5663 17.0549 16.1706 17.0549 15.9265 16.8108L11.9995 12.8839L8.07262 16.8108C7.82854 17.0549 7.43282 17.0549 7.18874 16.8108C6.94466 16.5667 6.94466 16.171 7.18874 15.9269L11.1157 12L7.18874 8.07307C6.94466 7.829 6.94466 7.43327 7.18874 7.18919Z" fill="#656579"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1479_2077">
                    <rect width="24" height="24" rx="12" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>            
                </div>
            }   
            
        </div>        
        {error && <span className={`w-full h-4 text-sm font-light leading-6  ${styles["text-font-lato"]} text-red-500`}>{error}</span>}
        {hint && !error && <span className={`w-full h-4 text-sm font-light leading-6  ${styles["text-font-lato"]} text-gray-400 ${visible} `}>{hint}</span>}
    </div>
    );
  };
  
  export default PasswordInput;