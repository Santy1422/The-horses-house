import { closeCard, calendarEmpty } from '@/pages/dashboard/icons'
import React from 'react'

const ModalConfirmacionEvento = () => {
  return (
    <div className='bg-[#23254CB2] w-[100%] h-screen flex items-center justify-center backdrop-filter backdrop-blur-[6px]'>
      <div className='w-[518px] h-[228px] bg-[#FFFFFF] p-6 rounded-[10px]'>
        <div className='w-[100%] flex items-center justify-between'>
          <p className='text-[#23254C] text-[24px] font-semibold'>¿Querés participar de este concurso?</p>
          <span>{closeCard}</span>
        </div>
        <div className='flex flex-col mt-3 gap-4'>
          <div className='flex gap-[6px]'>
            <span>{calendarEmpty}</span>
            <p className='text-[#23254C]'>06 de octubre de 2023 - 07 de octubre de 2023</p>
          </div>
          <p className='text-[#6D6E6D]'>Su evento se agregará al calendario y podrá ver detalladamante el evento.</p>
        </div>
        <div className='w-[100%] flex justify-end gap-4 mt-1'>
          <button className='w-[120px] h-[44px] bg-[white] text-[#23254C] border border-[#23254C] rounded-[4px]'>Cancelar</button>
          <button className='w-[120px] h-[44px] bg-[#23254C] text-white rounded-[4px]'>Aceptar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmacionEvento