import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { calendarIcon } from '../../../utils/svgIcons';



const MiCalendario = ({ label, setDate, errorMessage }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarHide, setCalendarHide] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setError(errorMessage)
}, [errorMessage])

  const onDayPress = (day) => {
    const fechaSeleccionada = new Date(day.dateString);
    fechaSeleccionada.setDate(fechaSeleccionada.getDate() + 1); //le suma 1 al día
    const formattedDate = format(fechaSeleccionada, 'dd-MM-yyyy');
    setSelectedDate(formattedDate)
    setCalendarHide(false);
  };

  const showCalendar = () => {
    setCalendarHide(!calendarHide)
  }

  useEffect(() => {
    setDate(selectedDate)
  }, [selectedDate])

  return (

    <View className='main w-full'>
      <Text className='titulo font-latoRegular text-base text-[#23254C] mb-[6px]'>{label}</Text>
      <TouchableOpacity onPress={() => showCalendar()} className=''>
        <View className={`flex bg-white flex-row border rounded px-[8px] py-[10px] items-center justify-start h-11 ${calendarHide ? "border-blue-300 mb-[4]" : 'border-gray-300'} ${error ? "border-red-300" : ''}`}>
          {calendarIcon}
      
          { selectedDate ? 
          <Text className='input ml-2 font-latoRegular text-[#23254C] w-full'>{selectedDate}</Text>
          :
          <Text className='input ml-2 font-latoRegular text-[#A1A0A0] w-full'>01-01-2023</Text>
        }
        </View>
      </TouchableOpacity>
      {error && <Text className="w-48  h-6 text-sm md:text-[18px] font-latoLight leading-6 font-primary text-red-500 ">{error}</Text>}
      {calendarHide &&
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#23254C',
              selectedTextColor: 'white',
            },
          }}
        />}
    </View>
  );
};

export default MiCalendario;
