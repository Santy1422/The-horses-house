import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { calendarIcon } from '../../../../utils/svgIcons';

const DatePickerAlt = ({ label, date, setDate, errorMessage }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState('')
    const [selectedDate, setSelectedDate] = useState('')

    useEffect(() => {
        setError(errorMessage)
    }, [errorMessage])

    useEffect(() => {
        if (selectedDate !== date) {
            setSelectedDate(date)
        }
    },[date])

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleCancel = () => {
        setSelectedDate('')
        setIsOpen(!isOpen)
    }

    const handleConfirm = () => {
        setDate(selectedDate)
        setIsOpen(!isOpen)
    }
    const onChange = (selectedDate) => {
        if (selectedDate !== undefined) {
            let dateParts = selectedDate.split('/')
            setSelectedDate(`${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`);
        }
    };

    return (
        <View className='main w-full'>
            <Text className='titulo font-latoRegular text-base text-[#23254C] mb-[6px]'>{label}</Text>
            <TouchableOpacity onPress={handleIsOpen} className=''>
                <View className={`flex bg-white flex-row border rounded px-[8px] py-[10px] items-center justify-start h-11 ${isOpen ? "border-blue-300 mb-[4]" : 'border-gray-300'} ${error ? "border-red-300" : ''}`}>
                    {calendarIcon}

                    {selectedDate ?
                        <Text className='input ml-2 font-latoRegular text-[#23254C] w-full'>{selectedDate}</Text>
                        :
                        <Text className='input ml-2 font-latoRegular text-[#A1A0A0] w-full'>01/01/2023</Text>
                    }
                </View>
            </TouchableOpacity>
            {error && <Text className="w-48  h-6 text-sm md:text-[18px] font-latoLight leading-6 font-primary text-red-500 ">{error}</Text>}

            {isOpen &&
                <View className='bg-white rounded'>
                    <DatePicker
                        options={{
                            backgroundColor: '#ffffff',
                            textHeaderColor: '#23254C',
                            textDefaultColor: '#23254C',
                            selectedTextColor: '#fff',
                            mainColor: '#23254C',
                            textSecondaryColor: '#23254C',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                        selected={selectedDate}
                        mode="calendar"
                        style={{ borderRadius: 10 }}
                        onDateChanged={(date) => console.log(date)}
                        onSelectedChange={(date) => onChange(date)}
                    />
                    <View className='w-full items-center flex-row justify-center pb-[12] px-[24]'>
                        <TouchableOpacity className='py-[10px] mr-[4] flex-grow rounded items-center border border-[#23254C] justify-center bg-[#ffffff]' onPress={handleCancel}>
                            <Text className='text-[#23254C]'>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='py-[10px] ml-[4] flex-grow rounded items-center border border-[#23254C] justify-center bg-[#23254C]' onPress={handleConfirm}>
                            <Text className='text-white'>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }

        </View>
    )
}
export default DatePickerAlt