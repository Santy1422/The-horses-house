import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView  } from 'react-native';
import CustomToggle from '../CustomToggle';
import Checkbox from '../Checkbox';
import {Svg, Path} from "react-native-svg"
import { ModalAgregarCaballo } from '../../ModalComponents/ModalAgregarCaballo';
import LoadingScreen from '../LoadingScreen';


const DropdownSearch = ({ options, label, setValue, value, modalVisible, setModalVisible}) => {
  console.log('options', options)
  /*Dropdown hecho a medida, no modificar*/
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [pruebas, setPruebas] = useState([])  


  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsToggled(previousState => !previousState);
    
  };

  useEffect( () => {
    setValue(pruebas)  
  },[pruebas])
  
  const handleOptionClick = (option) => {    
    if (pruebas.includes(option._id)) {      
      setPruebas(pruebas.filter(prueba => prueba !== option._id))      
    } else {
      setPruebas([...pruebas, option._id ])
    }
  }

  const handleModalVisible = () => {
    if(modalVisible){
      setModalVisible(false)
    }
  }


  return (
    <>
   {(Array.isArray(options) && options.length > 0) || options === null ?
    
    <View className='flex-col pt-[19px] w-[100%]'>
      <Text className='w-full h-7 font-latoRegular text-base leading-6 text-[#23254C]'>{label}</Text>
      <TouchableOpacity className='w-[100%] p-[10] border border-gray-300 rounded flex-row justify-between items-center bg-white' onPress={toggleDropdown}>
        <Text className='pruebasLabel font-latoRegular text-base leading-6 text-[#23254C]'>{`${pruebas.length + ' caballos seleccionados'}` }</Text>
        <CustomToggle onToggle={toggleDropdown} value={isToggled} />
      </TouchableOpacity>
      {isOpen && (
        <View className='bg-white flex mt-2 max-h-[280px] border border-gray-300 rounded w-[100%]'>
          <ScrollView>
          {options?.map((option, index) => (
            <TouchableOpacity
            key={index}
            className=' p-[10px] '            
            >
              <View className='contendedorOpciones flex flex-row gap-2 pl-2'>
                <Checkbox label={option.name} setValue={() => handleOptionClick(option)} checked={value.includes(option._id)} disabled={pruebas.length === 2 && !pruebas.includes(option._id)}  />                
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <View className='w-[276px] flex flex-row h-10 items-center' >
            <View className='p-2'>
          <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M16.4587 10.0003C16.4587 10.3453 16.1787 10.6253 15.8337 10.6253H10.6253V15.8337C10.6253 16.1787 10.3453 16.4587 10.0003 16.4587C9.65533 16.4587 9.37533 16.1787 9.37533 15.8337V10.6253H4.16699C3.82199 10.6253 3.54199 10.3453 3.54199 10.0003C3.54199 9.65533 3.82199 9.37533 4.16699 9.37533H9.37533V4.16699C9.37533 3.82199 9.65533 3.54199 10.0003 3.54199C10.3453 3.54199 10.6253 3.82199 10.6253 4.16699V9.37533H15.8337C16.1787 9.37533 16.4587 9.65533 16.4587 10.0003Z" fill="#4949A9" />
                    </Svg>
                    </View>  
                  
            <Text className='text-[#23254C] text-sm font-normal font-Lato leading-tight'>Añadir un nuevo caballo...</Text>
            
          </View>
          </TouchableOpacity>

          </ScrollView>
        </View>
      )}

      {
        modalVisible ? 
        <ModalAgregarCaballo modalVisible={modalVisible} handleModalVisible={handleModalVisible}/>
        : null
      }
    </View>
    : <LoadingScreen /> }
    </>
    
  )
}

export default DropdownSearch;
