import React, { useState } from 'react';

const PrimaryButton = ({onClick, text, disabled, size}) => {
  
  let buttonClasses = '';
  if(size === 'small') {
    buttonClasses = 'text-sm px-[14px] py-[8px]'
  } else if(size === 'medium') {
    buttonClasses = 'text-base px-[16px] py-[10px]'
  } else if(size === 'large') {
    buttonClasses = 'text-lg px-[18px] py-[10px]'
  }

  return (
    <button className={`bg-[#7b61FF] rounded-md  text-white p-2 cursor-pointer ${buttonClasses}
     focus:bg-[#2483D3] focus:ring-2 focus:outline-none 
     ${disabled ? 'bg-gray-200 text-[#BEBDBD]' 
     : 'hover:bg-[#24183D] active:bg-[#251431]'} `} 
     disabled={disabled} 
     onClick= {onClick}>
      {text}
    </button>
  )
}

export default PrimaryButton;