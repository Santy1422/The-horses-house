import React from 'react'
import { checkOk, closeCard } from '@/iconos/icons'

const ModalConfirmacionPack = () => {
  return (
    <div className='w-[100%] border border-[#5CC941] bg-[#DCEFC0] h-[74px] flex flex-col p-4 rounded-[4px] mt-4'>
      <div className='flex w-[100%] justify-between'>
        <div className='flex gap-3'>
          <span>{checkOk}</span>
          <p className='text-[#24824D] text-[12px] leading-4.5'>Creaste el servicio: Pack evento.</p>
        </div>
        <span>{closeCard}</span>
      </div>
        <p className='text-[#24824D] text-[14px] pl-8 leading-5 font-semibold'>Podés visualizarlo, editarlo o eliminarlo desde tu panel.</p>
    </div>
  )
}

export default ModalConfirmacionPack