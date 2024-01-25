import React, { useState } from 'react';
import { pen, okcheck, unlock } from '@/iconos/icons';

// Reemplazar esta data por el endpoint que viene del backend con esto


const PackCreado = ({handleEdit, handleBlock, data}) => {

    const [disabledButton, setDisabledButton] = useState(false)
    
    return (
    <div className='flex flex-col gap-2'>
      {data?.map((item, index) => (
        <div key={index} className='border-[1px] border-[#BEBDBD] bg-white w-[565px] h-[215px] rounded-[10px] py-4 px-6'>
          <div className='flex items-center w-[100%] justify-between'>
            <h2 className='text-[#23254C] text-[20px] font-semibold leading-7.5'>{item.namePack}</h2>
            <div className='flex items-center gap-2'>
              <span onClick={handleBlock} className='cursor-pointer hover:bg-slate-50 border bg-white rounded-[4px] w-[40px] h-[40px] flex items-center justify-center'>{unlock}</span>
              <span onClick={() => handleEdit(item)} className='cursor-pointer hover:bg-slate-50 border bg-white rounded-[4px] w-[40px] h-[40px] flex items-center justify-center'>{pen}</span>
            </div>
          </div>
          <div className='flex items-end gap-2 relative bottom-3'>
            <span className='text-[#23254C] text-[24px] font-semibold'>ARS</span>
            <span className='text-[#23254C] text-[45px] font-semibold relative top-2'>{item.precio}</span>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <span className='w-[32px] h-[32px] bg-[#F3F2F2] flex items-center justify-center rounded-full'>{okcheck}</span>
              <p className='text-[#666666] text-[14px]'>{item.fotos}</p>
            </div>
            <div className='flex mt-2 items-center gap-2'>
              <span className='w-[32px] h-[32px] bg-[#F3F2F2] flex items-center justify-center rounded-full'>{okcheck}</span>
              <span className='text-[#666666] text-[14px]'>{item.videos} Videos</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackCreado;
