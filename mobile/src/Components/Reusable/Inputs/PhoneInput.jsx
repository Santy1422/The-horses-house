import react, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ChevronSVG from '../../../../assets/icons/ChevronSVG'
import ErrorExclSVG from '../../../../assets/icons/ErrorExclSVG';
import QuestionMarkSVG from '../../../../assets/icons/QuestionMarkSVG';

const countries = [
  {name: 'AR', code: '+54'},
  {name: 'US', code: '+1'},
  {name: 'BR', code: '+55'}
]


const validateTelephone = (telephone) => {
  const telephoneRegex = /^[0-9]+$/
  return telephoneRegex.test(telephone);
};


const PhoneInput = ({value, setValue, hintp}) => {
  const [hint, setHint] = useState('Ingresa un número de teléfono para contactarte.')
  const [phone, setPhone] = useState('')
  const [visible, setVisible] = useState(true) 
  const [error, setError] = useState('')    
  const [prefix, setPrefix] = useState(['+54'])
  const [isValid, setIsValid] = useState(true)

  if(hintp) {setHint(hintp)}
  const showHint = () => {
    setVisible(!visible)
   };

  const onChange = (e) => {  
    const newTelephone = e;    
    setIsValid(validateTelephone(newTelephone));
    if (isValid) {
      setError('')
      setPhone(e)
      setValue(prefix + ' ' + e)
    } else  {
      setError('Ingresa un número de teléfono válido')
      setPhone(e)
    }
  };

   return (
      <View className='flex w-[100%] items-start gap-1.5 mt-3'>
         <Text className='titulo w-full h-6 font-latoRegular text-base text-[#23254C]'>Número de teléfono</Text>
            <View className={`flex-row w-[100%] items-center  bg-white border ${error ? "border-red-300" : "border-gray-300"} rounded`}>
               <SelectDropdown
                  data={countries}
                  defaultValueByIndex={0}
                  onSelect={(selectedItem, index) => {
                     setPrefix(selectedItem.code); // Establece el código de área en el prefijo
                  }}
                  buttonStyle={error ? styles.dropdown3BtnStyleError : styles.dropdown3BtnStyle}
                  renderCustomizedButtonChild={(selectedItem, index) => {
                     return (
                        <View className='flex flex-row justify-start items-center'>
                           <Text className='text-[#23254C] text-base font-normal font-lato leading-normal pr-1'>{selectedItem ? selectedItem.code : 'Select country'}</Text>
                           <ChevronSVG/>
                        </View>
                     );
                  }}
                  dropdownStyle={styles.dropdown3DropdownStyle}
                  rowStyle={styles.dropdown3RowStyle}
                  selectedRowStyle={styles.dropdown1SelectedRowStyle}
                  renderCustomizedRowChild={(item, index) => {
                     return (
                        <View className='flex w- flex-row justify-start items-center px-2'>
                           <Text className='w-[194px] text-neutral-400 text-base font-normal font-lato leading-normal'>{item.name + ' ' + item.code}</Text>
                        </View>
                     );
                  }}
               />
               <TextInput
                  onChangeText={((e) => onChange(e))}
                  className={`w-full h-11 font-latoLight outline-0 items-center p-2 px-3.5 py-2.5`}
                  placeholder='(11) 4567-1212'
                  value={phone}
                  textContentType='telephoneNumber'
               />
               <View className='icono right-7'>
                  {error ? <ErrorExclSVG/> : <TouchableHighlight onPress={() =>showHint()} underlayColor={'#FFFFF'} className=''><QuestionMarkSVG onPress={() => showHint()}/></TouchableHighlight> }
               </View>
            </View>
         {error ? <Text className="w-48 h-6 text-sm font-latoLight leading-6 font-primary text-red-500 ">{error}</Text> : ( !visible && (<Text className="w-full h-6 text-gray-500 text-sm font-latoLight leading-6 ">{hint}</Text>))}
      </View>
   );
};

export default PhoneInput;

const styles = StyleSheet.create({
   cajaTextStyle: {
      width: '10%',
   },
   dropdown3BtnStyle: {
        display: 'flex',
        width: 90,
        height: 44,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        
        
   },
   dropdown3BtnStyleError: {
    display: 'flex',
    width: 90,
    height: 44,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    
    
},
   dropdown3DropdownStyle: {
      backgroundColor: 'white',
      width: 100,
   },
   dropdown3RowStyle: {
      backgroundColor: 'white',
      
      width: 100,
      height: 44,
   },
   dropdown1SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
   dropdown3searchInputStyleStyle: {
      backgroundColor: 'slategray',
      width: 200,
      
   },
});