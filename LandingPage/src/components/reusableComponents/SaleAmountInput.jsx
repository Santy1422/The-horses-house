import { useEffect, useState } from "react"


const SaleAmountInput = ({label, setValue}) => {
    
    const [hint, setHint] = useState('This a hint text to help user')
    const [visible, setVisible] = useState('invisible') 
    const [error, setError] = useState('')
    const [currency, serCurrency] = useState(['USD', 'ARG'])    
    const [isValid, setIsValid] = useState(true)
    const [divBlue, setDivBlue] = useState(false)
    const [amount, setAmount] = useState('')

    const onFocusDivBlue = (e) => {
        if (error) return
        setDivBlue(!divBlue)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
      }

    const showHint = () => {
        if (visible == 'invisible') setVisible('visible')
        if (visible == 'visible') setVisible('invisible')
    };

    const validateNumber = (number) => {        
        return number > 0
      }

    useEffect(()=>{
        if(isValid) {
            setError('')
            setValue(amount)
        } else {
            setError('please enter a correct number')
            setValue('')
            setDivBlue(false)
        }
    },[isValid, amount])

    const onChange = (e) => {    
        setAmount(e.target.value)
        setIsValid(validateNumber(e.target.value))
       
    };
    
    return (
        <div className="flex flex-col w-full items-start gap-1.5">        
          
          <label className="w-full h-5 font-primary text-base font-normal leading-6 text-[#23254C] ">{label}</label>          
          <div className={`flex w-full h-11 px-3.5 py-2.5 bg-white border border-gray-300 rounded items-center gap-2    ${divBlue ? "border-blue-300" : ''} ${error ? "border-red-300" : amount ? 'border-green-300' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M13.4505 15.4508C12.8171 16.0842 11.9813 16.435 11.0921 16.4525V17.5C11.0921 17.845 10.8121 18.125 10.4671 18.125C10.1221 18.125 9.84214 17.845 9.84214 17.5V16.4458C8.15297 16.38 6.7538 15.0992 6.56297 13.4033C6.52464 13.06 6.7713 12.7508 7.1138 12.7125C7.45963 12.6692 7.7663 12.9208 7.80464 13.2633C7.92964 14.3725 8.86297 15.2083 9.97547 15.2083H11.0255C11.6055 15.2083 12.153 14.9808 12.5663 14.5658C12.9813 14.1517 13.2088 13.605 13.2088 13.0242C13.2088 12.0234 12.5288 11.1517 11.5555 10.905L9.14213 10.3058C8.39713 10.1166 7.73214 9.68254 7.26631 9.08254C6.80131 8.49337 6.54297 7.74418 6.54297 6.97418C6.54297 5.12668 8.01297 3.62585 9.84297 3.55418V2.5C9.84297 2.155 10.123 1.875 10.468 1.875C10.813 1.875 11.093 2.155 11.093 2.5V3.54746C12.8121 3.58163 14.2455 4.87751 14.4388 6.59668C14.4771 6.94001 14.2305 7.24916 13.888 7.2875C13.5371 7.32833 13.2355 7.07915 13.1971 6.73665C13.0721 5.62749 12.1388 4.79167 11.0263 4.79167H9.9763C8.77214 4.79167 7.79298 5.77083 7.79298 6.975C7.79298 7.46416 7.95547 7.93915 8.24963 8.31248C8.5488 8.69831 8.97297 8.97414 9.4463 9.09414L11.8605 9.6933C13.3921 10.0816 14.4596 11.4517 14.4596 13.025C14.4588 13.9392 14.1005 14.8008 13.4505 15.4508Z" fill="#BEBDBD"/>
            </svg>       
            
            <input
              type='number'
              value={amount}
              onChange={((e) => onChange(e))}
              placeholder='1.000'
              className="w-full outline-0"
              onFocus={((e) => onFocusDivBlue(e))}  
              onBlur={((e) => onBlurDivBlue(e) )}                    
            />
            {error ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1089_57477)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 4.16659C8.27582 4.16659 8.49967 4.39044 8.49967 4.66659V8.66659C8.49967 8.94273 8.27582 9.16659 7.99967 9.16659C7.72353 9.16659 7.49967 8.94273 7.49967 8.66659V4.66659C7.49967 4.39044 7.72353 4.16659 7.99967 4.16659Z" fill="#F76174"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34082 10.9609C8.54608 11.1456 8.56272 11.4617 8.37799 11.667L8.37132 11.6744C8.18659 11.8797 7.87045 11.8963 7.66519 11.7116C7.45994 11.5268 7.4433 11.2107 7.62803 11.0054L7.63469 10.998C7.81942 10.7928 8.13557 10.7761 8.34082 10.9609Z" fill="#F76174"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z" fill="#F76174"/>
                </g>
                <defs>
                <clipPath id="clip0_1089_57477">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg> 
                :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showHint} className="hover:cursor-pointer">
                <g clip-path="url(#clip0_1089_57423)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z" fill="#939697"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89608 5.06867C6.66643 5.26353 6.49967 5.5606 6.49967 5.99993C6.49967 6.27607 6.27582 6.49993 5.99967 6.49993C5.72353 6.49993 5.49967 6.27607 5.49967 5.99993C5.49967 5.27258 5.79125 4.69465 6.2491 4.30616C6.69608 3.92691 7.27424 3.74992 7.83301 3.74992C8.39177 3.74992 8.96993 3.92691 9.41691 4.30617C9.87477 4.69465 10.1663 5.27258 10.1663 5.99993C10.1663 6.51051 10.0356 6.89957 9.82195 7.21998C9.64245 7.48923 9.40919 7.69739 9.22567 7.86116C9.20563 7.87904 9.1862 7.89638 9.16748 7.91322C8.9627 8.09752 8.80835 8.24944 8.69522 8.44932C8.58698 8.64053 8.49967 8.90767 8.49967 9.33321C8.49967 9.60936 8.27582 9.83321 7.99967 9.83321C7.72353 9.83321 7.49967 9.60936 7.49967 9.33321C7.49967 8.75876 7.6207 8.31757 7.82496 7.95671C8.02433 7.60451 8.28665 7.36061 8.49853 7.16992C8.51497 7.15512 8.53102 7.14071 8.54668 7.12664C8.74684 6.94688 8.88473 6.82304 8.9899 6.66527C9.08879 6.51694 9.16634 6.32268 9.16634 5.99993C9.16634 5.56061 8.99958 5.26353 8.76993 5.06868C8.52942 4.8646 8.19091 4.74992 7.83301 4.74992C7.47511 4.74992 7.1366 4.8646 6.89608 5.06867Z" fill="#939697"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34082 11.6275C8.54608 11.8123 8.56272 12.1284 8.37799 12.3337L8.37132 12.3411C8.18659 12.5463 7.87045 12.563 7.66519 12.3782C7.45994 12.1935 7.4433 11.8774 7.62803 11.6721L7.63469 11.6647C7.81942 11.4594 8.13557 11.4428 8.34082 11.6275Z" fill="#939697"/>
                </g>
                <defs>
                <clipPath id="clip0_1089_57423">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            }
                 <select 
                name="" 
                id=""                         
            >                    
                {currency.map((curr, i) => {
                    return(
                        <option key={i}>{curr}</option>
                    )
                })}
            </select>   

          </div>        
          {error ? <span className="w-full h-4 text-sm font-light leading-6 font-primary text-red-500 ">{error}</span> : <span className={`w-full h-4 text-sm font-light leading-6 font-primary text-gray-400 ${visible} `} >{hint}</span>}
        </div>
    )  
}

export default SaleAmountInput