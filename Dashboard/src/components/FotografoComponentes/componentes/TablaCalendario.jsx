import React, { useState } from 'react';
import { arrowPrev, arrowNext } from '@/pages/dashboard/icons'; //

const VistaCalendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const daysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <div className='bg-white w-[100%] mt-8'>
      <div className='flex items-center gap-4 w-full p-4 border rounded-tl-[10px] rounded-tr-[10px]'>
        <p className='text-[#23254C] text-[24px] w-[200px] text-center font-semibold'>
          {`${currentDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase()}${currentDate.toLocaleString('default', { month: 'long' }).slice(1).toLowerCase()} ${currentDate.getFullYear()}`}
        </p>
        <div className='flex items-center justify-center gap-2'>
          <button className='border w-9 h-9 rounded-[4px] flex items-center justify-center' onClick={prevMonth}>
            {arrowPrev}
          </button>
          <button className='border w-9 h-9 rounded-[4px] flex items-center justify-center' onClick={nextMonth}>
            {arrowNext}
          </button>
        </div>
      </div>

      {/* Renderizar los días de la semana */}
      <div className='grid grid-cols-7'>
        {dayNames.map((day, index) => (
          <div className='w-[150.49px] h-[40px] flex items-center justify-center text-[12px]' key={`day-${index}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Renderizar los días del mes actual */}
      <div className='grid grid-cols-7'>
        {[...Array(firstDayOfMonth()).keys()].map((_, index) => (
          <div className='w-[150.49px] h-[168px]' key={`empty-${index}`} />
        ))}
        {[...Array(daysInMonth()).keys()].map((day, index) => (
          <button className='w-[150.49px] h-[168px] flex justify-center p-1 text-[12px]' key={`day-${index + 1}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VistaCalendario;