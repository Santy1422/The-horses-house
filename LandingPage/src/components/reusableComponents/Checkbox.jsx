import Image from 'next/image';
import React, { useState } from 'react';

const Checkbox = ({value, setValue, label, error, disabled, icon, shape  }) => {
    const [isChecked, setChecked] = useState(false)

    const handleValueCheck = () => {
        setValue(!value)
        setChecked(!isChecked)
    }

    let uncheckedBoxStyle = ''
    if (error) {
      uncheckedBoxStyle ='w-6 h-6 border-2 border-red-400 rounded mr-2 justify-center items-center bg-white hover:bg-gray-200'
    } else { uncheckedBoxStyle ='w-6 h-6 border-2 border-gray-300 rounded mr-2 justify-center items-center  bg-white hover:bg-gray-200'}

    let uncheckedBoxStyleRound = ''
    if (error) {
      uncheckedBoxStyleRound ='w-6 h-6 border-2 border-red-400 rounded-full mr-2 justify-center items-center bg-white hover:bg-gray-200'
    } else { uncheckedBoxStyleRound ='w-6 h-6 border-2 border-gray-300 rounded-full mr-2 justify-center items-center bg-white hover:bg-gray-200'}

    
    
    const checkedBoxStyle = 'w-6 h-6 border-2 border-blue-600 rounded mr-2 justify-center items-center bg-gray-200'
    const checkedBoxStyleRound = 'w-6 h-6 border-2 border-blue-600 rounded-full mr-2 justify-center items-center bg-gray-200'

 if(!disabled) {
  if(shape != 'circle') {
    return (
      <button 
      onClick={() => handleValueCheck()}>
          <div className='flex flex-row'>
            <div className={isChecked ? checkedBoxStyle : uncheckedBoxStyle}>
              {isChecked && (
                // picks the icon type (prop)
                <div className="w-5 h-5 rounded-sm bg-gray-200">
                  {(icon == 'dash') && (
                    <Image src={'/img/minus.png'} width={20} height={20} className='w-5 h-5'></Image>
                    ) 
                  }
                  {(icon != 'dash') && (
                    <Image src={'/img/checkb.png'}  width={20} height={20}  className='w-5 h-5'></Image>
                    )}
                </div>
                )}
            </div>
            <div className='flex'>
            <p className='text-sm font-normal leading-5'>{label}</p>
                {!isChecked && (error) && (
                  <p className='text-red-600 text-xs font-light leading-normal'>{error}</p>
                  )}
              </div>
          </div>
          </button>
      );
    } else {
      return (
        <button 
          onClick={() => handleValueCheck()}>
            <div className='flex flex-row'>

              <div className={isChecked ? checkedBoxStyleRound : uncheckedBoxStyleRound}>
                {isChecked && (
                  // picks the icon type (prop)
                  <div className="w-2 h-2 rounded-full bg-neutral-500">
                    <div className=' bg-neutral-500 rounded-full'></div>
                  </div>
                  )}
              </div>
              <div className='flex'>
              <p className='text-sm font-normal leading-5'>{label}</p>
                  {!isChecked && (error) && (
                    <p className='text-red-600 text-xs font-light leading-normal'>{error}</p>
                    )}
                </div>
            </div>
          </button>
        );
    }
} else {
  // Disabled version of the checkbox
    return (
      <div className='flex flex-row'>
          <div className={'w-6 h-6 rounded mr-2 justify-center items-center'}>
              <div className="w-4 h-4 rounded-sm bg-zinc-100">
                  <Image src={'/img/checkb.png'} width={20} height={20} className='w-4 h-4'></Image>
              </div>
          </div>
          <div className='flex'>
            <p className='text-sm font-normal leading-5 text-zinc-300'>{label}</p>
          </div>
        </div>
    )
  }
  }


export default Checkbox;