import React from 'react'

const ButtonRounded = ({children}) => {
    return (
        <button className='rounded-[32px] px-3.5 py-2 text-sm border border-black border-opacity-20 bg-white font-normal font-["Lato"] leading-tight text-indigo-950 justify-start items-start inline-flex'>
            {children}
        </button>
    )
}

export default ButtonRounded