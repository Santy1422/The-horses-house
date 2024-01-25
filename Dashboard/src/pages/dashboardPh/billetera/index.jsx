import SideBar from '@/components/DashboardComponets/SideBar'
import React from 'react'
import { bell } from '@/iconos/icons'
import ComponentesPack from '@/components/FotografoComponentes/packComponents/ComponentesPack'

const VistaPacks = () => {
  return (
    
      <div className='flex'>
        <SideBar />
        <div className='w-[100%] pt-[64px] px-[47.5px]'>
          {/* titulo y subtitulo */}
          <div className='flex-1 bg-white w-[100%] flex-col'>
            <div className='flex w-[100%] items-center justify-between '>
              <h1 className='text-[#23254C] text-[28px] font-semibold'>Creación Packs</h1>
              <span className='border border-[#D1DADA] rounded flex items-center justify-center'>{bell}</span>
            </div>
              <p className='text-[#6D6E6D]'>Aquí podras crear tus packs para los eventos, donde podrás agregar tu servicio y precios.</p>
          </div>
          <div>
            Aca billetera, insertar componente
          </div>
        </div>
      </div>
  )
}

export default VistaPacks