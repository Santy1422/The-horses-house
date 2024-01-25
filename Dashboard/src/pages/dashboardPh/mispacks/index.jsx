import SideBar from '@/components/DashboardComponets/SideBar'
import React, { useState } from 'react'
import { bell, iconEvent, optionsBtn, filterIcon, closeCard } from '../../../iconos/icons'

const MisPacks = () => {

  const [showDelete, setShowDelete] = useState(false)

  return (
    
      <div className='flex'>
        <SideBar />
        <div className='w-[100%] pt-[64px] px-[47.5px] bg-[#F9F8FD]'>
          {/* titulo y subtitulo */}
          <div className='flex-1 w-[100%] flex-col'>
            <div className='flex w-[100%] items-center justify-between '>
              <h1 className='text-[#23254C] text-[28px] font-semibold'>Mis packs</h1>
              <span className='border border-[#D1DADA] rounded flex items-center justify-center'>{bell}</span>
            </div>
              <p className='text-[#6D6E6D]'>Aquí podrás ver tus servicios creados, donde los puedes modificar o eliminar de tus servicios.</p>
          </div>
          <div className='flex justify-end gap-3 mt-[24px]'>
           <button className='flex items-center justify-center gap-2 border border-[#23254C] bg-white w-[95px] h-[36px] py-2 px-4 rounded-[32px]'>
              <p className='text-[#23254C]'>Estado</p>
              <span className='text-[#23254C]'>{closeCard}</span>
            </button>
            <button className='flex items-center justify-center gap-2 border border-[#23254C] bg-white w-[95px] h-[36px] py-2 px-4 rounded-[32px]'>
              <p className='text-[#23254C]'>Filtrar</p>
              <span className='text-[#23254C]'>{filterIcon}</span>
            </button>
          </div>
          <div className='mt-[24px] bg-white'>
            <table className='w-[100%]'>
                <thead className='w-[100%]'>
                    <tr className=''>
                        <th className='w-[336px] text-[12px] text-[#494949] text-start py-3 px-6'>Pack</th>
                        <th className='w-[83.53px] text-[12px] text-[#494949] py-3 px-6 text-left'>Evento</th>
                        <th className='w-[132px] text-[12px] text-[#494949] py-3 px-6 text-left'>Estado</th>
                        <th className='w-[137px] text-[12px] text-[#494949] py-3 px-6 text-left'>Clientes</th>
                        <th className='w-[327px] text-[12px] text-[#494949] py-3 px-6 text-left'>Lugar</th>
                    </tr>
                </thead>
                <tbody className='border overflow-y-auto'>
                    <tr>
                        <th className='w-[336px] text-[12px] text-[#494949] text-start py-4 px-6 border-b-[1px]'>Pack evento</th>
                        <th className='w-[83.53px] text-[12px] text-[#494949] text-center py-4 px-6 border-b-[1px]'>{iconEvent}</th>
                        <th className='w-[132px] text-[12px] text-[#1C694E] text-left py-4 px-6 border-b-[1px]'>
                            <p className='bg-[#EFFBF4] rounded-full text-center px-2 py-[2px] border-b-[1px]'>En curso</p>
                        </th>
                        <th className='w-[137px] text-[12px] text-[#494949] text-left py-4 px-6 border-b-[1px]'>
                            <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6" />
                        </th>
                        <th className='w-[327px] text-left py-4 px-6 border-b-[1px] flex justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-[#353535] text-[14px] font-normal'>Club de Campo jockey Club</p>
                                <p className='text-[#80807F] text-[14px] font-normal'>Del 10/11 al 12/11</p>
                            </div>
                            <span className='flex items-center'>{optionsBtn}</span>
                        </th>
                    </tr>
                     <tr>
                        <th className='w-[336px] text-[12px] text-[#494949] text-start py-4 px-6 border-b-[1px]'>Pack evento</th>
                        <th className='w-[83.53px] text-[12px] text-[#494949] text-center py-4 px-6 border-b-[1px]'>{iconEvent}</th>
                        <th className='w-[132px] text-[12px] text-[#1C694E] text-left py-4 px-6 border-b-[1px]'>
                            <p className='bg-[#EFFBF4] rounded-full text-center px-2 py-[2px] border-b-[1px]'>En curso</p>
                        </th>
                        <th className='w-[137px] text-[12px] text-[#494949] text-left py-4 px-6 border-b-[1px]'>
                            <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6" />
                        </th>
                        <th className='w-[327px] text-left py-4 px-6 border-b-[1px] flex justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-[#353535] text-[14px] font-normal'>Club de Campo jockey Club</p>
                                <p className='text-[#80807F] text-[14px] font-normal'>Del 10/11 al 12/11</p>
                            </div>
                            <span className='flex items-center'>{optionsBtn}</span>
                        </th>
                    </tr>
                     <tr>
                        <th className='w-[336px] text-[12px] text-[#494949] text-start py-4 px-6 border-b-[1px]'>Pack evento</th>
                        <th className='w-[83.53px] text-[12px] text-[#494949] text-center py-4 px-6 border-b-[1px]'>{iconEvent}</th>
                        <th className='w-[132px] text-[12px] text-[#1C694E] text-left py-4 px-6 border-b-[1px]'>
                            <p className='bg-[#EFFBF4] rounded-full text-center px-2 py-[2px] border-b-[1px]'>En curso</p>
                        </th>
                        <th className='w-[137px] text-[12px] text-[#494949] text-left py-4 px-6 border-b-[1px]'>
                            <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6" />
                        </th>
                        <th className='w-[327px] text-left py-4 px-6 border-b-[1px] flex justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-[#353535] text-[14px] font-normal'>Club de Campo jockey Club</p>
                                <p className='text-[#80807F] text-[14px] font-normal'>Del 10/11 al 12/11</p>
                            </div>
                            <span className='flex items-center'>{optionsBtn}</span>
                        </th>
                    </tr>
                     <tr>
                        <th className='w-[336px] text-[12px] text-[#494949] text-start py-4 px-6 border-b-[1px]'>Pack evento</th>
                        <th className='w-[83.53px] text-[12px] text-[#494949] text-center py-4 px-6 border-b-[1px]'>{iconEvent}</th>
                        <th className='w-[132px] text-[12px] text-[#1C694E] text-left py-4 px-6 border-b-[1px]'>
                            <p className='bg-[#EFFBF4] rounded-full text-center px-2 py-[2px] border-b-[1px]'>En curso</p>
                        </th>
                        <th className='w-[137px] text-[12px] text-[#494949] text-left py-4 px-6 border-b-[1px]'>
                            <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6" />
                        </th>
                        <th className='w-[327px] text-left py-4 px-6 border-b-[1px] flex justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-[#353535] text-[14px] font-normal'>Club de Campo jockey Club</p>
                                <p className='text-[#80807F] text-[14px] font-normal'>Del 10/11 al 12/11</p>
                            </div>
                            <span className='flex items-center'>{optionsBtn}</span>
                        </th>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default MisPacks