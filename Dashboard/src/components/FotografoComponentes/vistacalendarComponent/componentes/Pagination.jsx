import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between w-[100%] mt-8 px-4'>
        <div className='flex gap-3'>
            <button className='border border-[#CCCCCC] bg-white text-[#23254C] w-[85px] h-[36px] rounded'>Anterior</button>
            <button className='border border-[#CCCCCC] bg-white text-[#23254C] w-[85px] h-[36px] rounded'>Siguiente</button>
        </div>
        <div className='flex text-[14px]'>
            <span>Página 1 de 10</span>
        </div>
    </div>
  )
}

export default Pagination