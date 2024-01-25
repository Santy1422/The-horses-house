import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView  } from 'react-native';
import CustomToggle from '../CustomToggle';

const DropdownSearchAlt = ({ options, selectedOption, onSelect, label, placeholder, errorMessage }) => {
  /en progreso/
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setError(errorMessage)
  },[errorMessage])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsToggled(previousState => !previousState);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (

    <View className='flex-col pt-4 w-[100%]'>
      <Text className='w-full h-7 font-latoRegular text-base leading-6 text-[#23254C] pb-2'>{label}</Text>
      <TouchableOpacity className={`w-[100%] bg-white p-[10] border rounded flex-row justify-between items-center ${error ? 'border-red-300' : 'border-gray-300'}`} onPress={toggleDropdown}>
        {placeholder && !selectedOption && <Text className='text-[#A1A0A0] text-sm font-latoRegular'>{placeholder}</Text>}
        {selectedOption && <Text>{selectedOption}</Text>}
        <CustomToggle onToggle={toggleDropdown} value={isToggled} />
      </TouchableOpacity>
      {error && <Text className="w-48  h-6 text-sm md:text-[18px] font-latoLight leading-6 font-primary text-red-500 ">{error}</Text>}
      {isOpen && (
        <View className='z-80 relative bg-white flex border border-gray-300 rounded max-h-auto w-[100%]'>
          <ScrollView
          showsVerticalScrollIndicator={true} >
          {options.map((option, index) => (
            <TouchableOpacity
            key={index}
            className='p-[10px]'
            onPress={() => handleOptionClick(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
      )}
    </View>

  )
}

export default DropdownSearchAlt;