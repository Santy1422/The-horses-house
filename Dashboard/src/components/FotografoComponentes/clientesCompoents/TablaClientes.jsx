import React from 'react'
import { creditcard, iconAdd } from '@/iconos/icons'

const TablaClientes = () => {
  return (
    <div className='flex items-center justify-center overflow-y-auto'>
      <table className='bg-white w-[100%]'>
        <thead className='w-[100%] flex text-[12px]'>
          <tr className='w-[100%] flex items-center justify-center'>
            <th className='w-[57px] py-3 px-4'></th>
            <th className='w-[265px] py-3 px-4 text-left'>Jinete</th>
            <th className='w-[183px] py-3 px-4 text-left'>Pack</th>
            <th className='w-[243px] py-3 px-4 text-left'>Pago</th>
            <th className='w-[224px] py-3 px-4 text-left'>Fotos</th>
          </tr>
        </thead>
        <tbody className='w-[100%]'>
          <tr className='flex items-center justify-center'>
            <td className='w-[57px] py-3 px-4 flex items-center justify-center'>1</td>
            <td className='w-[265px] py-3 px-4 flex items-center gap-2.5'>
              <div className='w-8 h-8 bg-green-400 rounded-full'></div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-semibold text-[#191720]'>Marina Pia Gomez</p>
                <p className='text-[#55565C] text-[14px]'>maria@mail.com</p>
              </div>
            </td>
            <td className='w-[183px] text-[12px] py-3 px-4 text-left flex items-center'>Pack evento</td>
            <td className='w-[243px] py-3 px-4 flex items-center gap-1'>
              <div className='flex bg-[#EFFBF4] px-2 py-[2px] rounded-[16px] items-center justify-center gap-1'>
                <span className='text-[#1C694E]'>{creditcard}</span>
                <p className='text-[#1C694E] text-[14px] font-medium'>Pagó con tarjeta</p>
              </div>
            </td>
            <td className='w-[224px] py-3 px-4 gap-4 flex items-center'>
              <span>{iconAdd}</span>
              <p className='text-[#494949] text-[12px]'>Agregar </p>
            </td>
          </tr>
          <tr className='flex items-center justify-center'>
            <td className='w-[57px] py-3 px-4 flex items-center justify-center'>1</td>
            <td className='w-[265px] py-3 px-4 flex items-center gap-2.5'>
              <div className='w-8 h-8 bg-green-400 rounded-full'></div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-semibold text-[#191720]'>Marina Pia Gomez</p>
                <p className='text-[#55565C] text-[14px]'>maria@mail.com</p>
              </div>
            </td>
            <td className='w-[183px] text-[12px] py-3 px-4 text-left flex items-center'>Pack evento</td>
            <td className='w-[243px] py-3 px-4 flex items-center gap-1'>
              <div className='flex bg-[#EFFBF4] px-2 py-[2px] rounded-[16px] items-center justify-center gap-1'>
                <span className='text-[#1C694E]'>{creditcard}</span>
                <p className='text-[#1C694E] text-[14px] font-medium'>Pagó con tarjeta</p>
              </div>
            </td>
            <td className='w-[224px] py-3 px-4 gap-4 flex items-center'>
              <span>{iconAdd}</span>
              <p className='text-[#494949] text-[12px]'>Agregar </p>
            </td>
          </tr>
          <tr className='flex items-center justify-center'>
            <td className='w-[57px] py-3 px-4 flex items-center justify-center'>1</td>
            <td className='w-[265px] py-3 px-4 flex items-center gap-2.5'>
              <div className='w-8 h-8 bg-green-400 rounded-full'></div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-semibold text-[#191720]'>Marina Pia Gomez</p>
                <p className='text-[#55565C] text-[14px]'>maria@mail.com</p>
              </div>
            </td>
            <td className='w-[183px] text-[12px] py-3 px-4 text-left flex items-center'>Pack evento</td>
            <td className='w-[243px] py-3 px-4 flex items-center gap-1'>
              <div className='flex bg-[#EFFBF4] px-2 py-[2px] rounded-[16px] items-center justify-center gap-1'>
                <span className='text-[#1C694E]'>{creditcard}</span>
                <p className='text-[#1C694E] text-[14px] font-medium'>Pagó con tarjeta</p>
              </div>
            </td>
            <td className='w-[224px] py-3 px-4 gap-4 flex items-center'>
              <span>{iconAdd}</span>
              <p className='text-[#494949] text-[12px]'>Agregar </p>
            </td>
          </tr>
          <tr className='flex items-center justify-center'>
            <td className='w-[57px] py-3 px-4 flex items-center justify-center'>1</td>
            <td className='w-[265px] py-3 px-4 flex items-center gap-2.5'>
              <div className='w-8 h-8 bg-green-400 rounded-full'></div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-semibold text-[#191720]'>Marina Pia Gomez</p>
                <p className='text-[#55565C] text-[14px]'>maria@mail.com</p>
              </div>
            </td>
            <td className='w-[183px] text-[12px] py-3 px-4 text-left flex items-center'>Pack evento</td>
            <td className='w-[243px] py-3 px-4 flex items-center gap-1'>
              <div className='flex bg-[#EFFBF4] px-2 py-[2px] rounded-[16px] items-center justify-center gap-1'>
                <span className='text-[#1C694E]'>{creditcard}</span>
                <p className='text-[#1C694E] text-[14px] font-medium'>Pagó con tarjeta</p>
              </div>
            </td>
            <td className='w-[224px] py-3 px-4 gap-4 flex items-center'>
              <span>{iconAdd}</span>
              <p className='text-[#494949] text-[12px]'>Agregar </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TablaClientes