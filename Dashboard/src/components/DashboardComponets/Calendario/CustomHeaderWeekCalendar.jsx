import React from 'react';
import moment from 'moment';
import 'moment/locale/es';



const CustomHeaderWeekCalendar = ({ children, value, date }) => {
  const today = moment();
  date = moment(date);
  const isToday = today.isSame(date, 'day');

  // Configurar el idioma español para moment
  moment.locale('es');


  return (
    <div className={`
          flex-col 
          h-[50px] 
          flex 
          items-center 
          justify-center
        text-zinc-700 
          text-xs 
          font-normal 
          font-Lato 
          leading-[18px]`}
        style={{
          zIndex: isToday? 1000 : 100,
        }}
    >
      <div className='font-bold'>{date.format('dddd')}</div>
      <div 
        className={`rounded-full font-bold  ${isToday ? 'bg-indigo-950 text-white' : ''}`}
        style={{ 
          padding: "3px 5px"
          }}
        >
          {date.format('D')}
      </div>
    </div>
  );
};

export default CustomHeaderWeekCalendar;
