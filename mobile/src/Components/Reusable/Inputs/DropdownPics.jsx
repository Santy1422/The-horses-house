import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image  } from 'react-native';
import CustomToggle from '../CustomToggle';

const DropdownPics = ({ options,  onSelect, label }) => {
  //en options pasar un array de objetos con keys de name y pics, ej [{name: nombre,pics: pics},{name: nombre,pics: pics}]
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsToggled(previousState => !previousState);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
    setSelectedOption(option)
  };  

  return (
    
    <View className='w-full flex-col pt-4'>
      <Text className='font-latoRegular text-base leading-6 pb-1 text-[#23254C]  '>{label}</Text>
      <TouchableOpacity className='bg-white p-[10] border border-gray-300 rounded flex-row justify-between items-center' onPress={toggleDropdown}>
        <View className='label flex flex-row justify-center items-start gap-x-1'>
          {selectedOption && <Image source={{uri:selectedOption.pics}} className="imagen flex w-[24px] h-[24px] rounded-full"></Image>}
          <Text className='textSelected font-latoRegular text-base leading-6 text-[#23254C]'>{selectedOption ? selectedOption.name: 'Selecciona el profesional'}</Text>
        </View>
        
        <CustomToggle className="bg-white" onToggle={toggleDropdown} value={isToggled} />
      </TouchableOpacity>
      {isOpen && (
        <View className='flex mt-2 max-h-32 border border-gray-300 bg-white rounded z-50'>
          <ScrollView style={{backgroundColor: 'white'}}>
          {options.map((option, index) => (
            <TouchableOpacity
            key={index}
            className='bg-white p-[10px] flex flex-row gap-x-1 items-center justify-start '
            onPress={() => handleOptionClick(option)}
            
            >
              <Image source={{uri: option.pics}} className="imagen flex w-[24px] h-[24px] rounded-full"></Image>
              <Text className='option font-latoRegular text-sm leading-5 text-[#23254C]' >{option.name}</Text>              
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
      )}
    </View>
    
  )
}

export default DropdownPics;
