import SideBar from '@/components/DashboardComponets/SideBar'
import React, { useState } from 'react'
import { bell } from '../../../iconos/icons'
import ComponentesPack from '../../../components/FotografoComponentes/packComponents/ComponentesPack'
import PackCreado from '../../../components/FotografoComponentes/packComponents/PackCreado'
import ModalConfirmacionPack from '../../../components/FotografoComponentes/packComponents/ModalConfirmacionPack'





const VistaPacks = () => {

  const [showPack, setShowPack] = useState(false)
  const [editPackId, setPackId] = useState(null)

  const data = [
    {
      id: 1,
      namePack: 'Suscripción evento',
      precio: '7000',
      fotos: '3 Fotos',
      videos: '1'
    },
    {
      id: 2,
      namePack: 'Suscripción mensual',
      precio: '12000',
      fotos: '20 Fotos de eventos del mes',
      videos: '1'
    },
    {
      id: 3,
      namePack: 'Suscripción anual',
      precio: '100000',
      fotos: 'Fotografías ilimitadas',
      videos: 'Ilimitados'
    }
  ];

  const handleEdit = (data) => {
    setPackId(data)
    console.log(data);
  }

  const handleBlock = () => {
    console.log('block');
  }


  const handleChange = (event) => {
    setPack(prevPack => ({
      ...prevPack,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(pack);
    setShowPack(true)
  }
  
  return (
    
      <div className='flex'>
        <SideBar />
        <div className='w-[100%] pt-[64px] px-[47.5px] bg-[#f9f8fd]'>
          {/* titulo y subtitulo */}
          <div className='flex-1 w-[100%] flex-col'>
            <div className='flex w-[100%] items-center justify-between '>
              <h1 className='text-[#23254C] text-[28px] font-semibold leading-9'>Mis servicios</h1>
              <span className='border border-[#D1DADA] bg-white hover:bg-slate-50 cursor-pointer rounded flex items-center justify-center w-[44px] h-[44px]'>{bell}</span>
            </div>
              <p className='text-[#6D6E6D] leading-6'>Aquí podrás editar o deshabilitar tus packs cuando sea necesario.</p>
          </div>
          {showPack && <ModalConfirmacionPack />}
          {/* container form y card para mostrar creacion pack */}
          <div className='flex w-[100%] gap-5 pt-[21.5px]'>
              <PackCreado data={data} handleEdit={handleEdit} handleBlock={handleBlock} />
              <ComponentesPack editPackId={editPackId} />
          </div>
        </div>
      </div>
  )
}

export default VistaPacks