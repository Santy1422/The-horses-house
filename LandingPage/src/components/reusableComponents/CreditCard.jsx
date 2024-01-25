import { useEffect, useState } from "react"


const CreditCardInput = ({ setValue }) => {
   
    const [hint, setHint] = useState('This is a hint text to help users')
    const [visible, setVisible] = useState('invisible') 
    const [error, setError] = useState('')
    const [isValid, setIsValid] = useState(true) 
    const [divBlue, setDivBlue] = useState(false)
    const [card, setCard] = useState('')

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

    const validateCard = (card) => {        
        const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        /*
        Esta expresión regular permite los siguientes formatos de tarjetas de crédito:
        Visa: Comienza con "4" y tiene 13 o 16 dígitos.
        MasterCard: Comienza con "5" seguido de un dígito entre 1 y 5, seguido de 14 dígitos.
        Discover: Comienza con "6011" o "65" seguido de 12 dígitos.
        American Express: Comienza con "34" o "37" seguido de 13 dígitos.
        Diners Club: Comienza con "30", "36", "38" seguido de 11 dígitos.
        JCB: Comienza con "2131", "1800" o "35" seguido de 11 dígitos.        
        */
        return cardRegex.test(card.replace(/\s+/g, ''));
      }
    
    useEffect(()=>{
        if(isValid) {
            setError('')
            setValue(Number(card.replace(/\D/g, '')))
        } else {
            setError('please enter a correct number')
            setValue('')
            setDivBlue(false)
        }
    },[isValid, card])

    const formatCreditCardNumber = (value) => {
        if (!value) return '';
      
        // Elimina todos los caracteres no numéricos
        const numericValue = value.replace(/\D/g, '');
      
        // Divide el número en grupos de 4 caracteres y los une con un espacio
        const formattedValue = numericValue
          .match(/.{1,4}/g)
          .join(' ')
          .trim();
      
        return formattedValue;
      };

    const onChange = (e) => {    
        
        setCard((formatCreditCardNumber(e.target.value)))        
        setIsValid(validateCard(e.target.value))          
    };  
    
    
    return (
        <div className="flex flex-col w-80 items-start gap-1.5 ">        
          <label className="w-10 h-5 font-primary">Card Number</label>
          <div className={`flex w-80 h-11 px-3.5 py-2.5 bg-white border border-gray-300 rounded items-center gap-2 inline-flex  ${divBlue ? "border-blue-300" : ''} ${error ? "border-red-300" : card ? 'border-green-300' : ''}`}>

            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 3C0.25 1.48122 1.48122 0.25 3 0.25H19C20.5188 0.25 21.75 1.48122 21.75 3V13C21.75 14.5188 20.5188 15.75 19 15.75H3C1.48122 15.75 0.25 14.5188 0.25 13V3ZM3 1.75C2.30964 1.75 1.75 2.30964 1.75 3V13C1.75 13.6904 2.30964 14.25 3 14.25H19C19.6904 14.25 20.25 13.6904 20.25 13V5.75H5C4.58579 5.75 4.25 5.41421 4.25 5C4.25 4.58579 4.58579 4.25 5 4.25H20.25V3C20.25 2.30964 19.6904 1.75 19 1.75H3Z" fill="#74767A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 9.75C16.3074 9.75 16.1334 9.82159 16.0002 9.9408C15.6915 10.217 15.2174 10.1908 14.9411 9.88213C14.6649 9.57349 14.6912 9.09934 14.9998 8.8231C15.3974 8.46726 15.9242 8.25 16.5 8.25C17.7426 8.25 18.75 9.25736 18.75 10.5C18.75 11.7426 17.7426 12.75 16.5 12.75C15.9242 12.75 15.3974 12.5327 14.9998 12.1769C14.6912 11.9007 14.6649 11.4265 14.9411 11.1179C15.2174 10.8092 15.6915 10.783 16.0002 11.0592C16.1334 11.1784 16.3074 11.25 16.5 11.25C16.9142 11.25 17.25 10.9142 17.25 10.5C17.25 10.0858 16.9142 9.75 16.5 9.75Z" fill="#74767A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.75C14.6926 9.75 14.8666 9.82159 14.9998 9.9408C15.3085 10.217 15.7826 10.1908 16.0589 9.88213C16.3351 9.57349 16.3088 9.09934 16.0002 8.8231C15.6026 8.46726 15.0758 8.25 14.5 8.25C13.2574 8.25 12.25 9.25736 12.25 10.5C12.25 11.7426 13.2574 12.75 14.5 12.75C15.0758 12.75 15.6026 12.5327 16.0002 12.1769C16.3088 11.9007 16.3351 11.4265 16.0589 11.1179C15.7826 10.8092 15.3085 10.783 14.9998 11.0592C14.8666 11.1784 14.6926 11.25 14.5 11.25C14.0858 11.25 13.75 10.9142 13.75 10.5C13.75 10.0858 14.0858 9.75 14.5 9.75Z" fill="#74767A"/>
            </svg>
         
            
            <input
              type='text'
              value={card}
              onChange={((e) => onChange(e))}
              placeholder='Card number'
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
              </svg> :  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showHint} className="hover:cursor-pointer">
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
            </svg>}        
          </div>        
          {error ? <span className="w-full h-4 text-gray-500 text-sm font-light leading-6 font-primary text-red-500 ">{error}</span> : <span className={`w-full h-4 text-gray-500 text-sm font-light leading-6 font-primary text-gray-400 ${visible}`} >{hint}</span>}
        </div>
    
    )
}

export default CreditCardInput