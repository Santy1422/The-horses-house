import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import SelectDropdown from "react-native-select-dropdown"


export default MoneyInput = ({value, setValue}) => {
    
    const [hint, setHint] = useState('This a hint text to help user')
    const [visible, setVisible] = useState('invisible') 
    const [error, setError] = useState('')
    const [currency, setCurrency] = useState(['USD'])    
    const [isValid, setIsValid] = useState(true)
    const [divBlue, setDivBlue] = useState(false)
    const [amount, setAmount] = useState('')

    const currencyList = ['USD', 'ARS']


    const onFocusDivBlue = (e) => {
        if (error) return
        setDivBlue(!divBlue)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
      }

    const showHint = () => {
        if (visible == 'invisible') setVisible('visible')
        if (visible == 'visible') setVisible('invisible')
    };

    const validateNumber = (number) => {        
        return number > 0
      }

    useEffect(()=>{
        if(isValid) {
            setError('')
            setValue(amount)
        } else {
            setError('please enter a correct number')
            setValue('')
            setDivBlue(false)
        }
    },[isValid, amount])

    const onChange = (e) => {    
        setAmount(e.nativeEvent.text)
        setIsValid(validateNumber(e.nativeEvent.text))
       
    };

    return ( 
        <View  className="flex flex-col w-80 h-32 items-start gap-1.5 my-2">  
            <Text className=' font-latoRegular'>Amount</Text>
            <View className={`flex flex-row bg-white border rounded items-center  ${divBlue ? "border-blue-300" : ''} ${error ? "border-red-300" : amount ? 'border-green-300' : ''}`}>
            <TextInput
                type="number"
                value={amount}
                onChange={((e) => onChange(e))}
                placeholder='$1.000'
                className=" w-48 px-3 font-latoLight"
                onBlur={((e) => onBlurDivBlue(e) )}
                onFocus={((e) => onFocusDivBlue(e))}                 
            />
            {error ? <ErrorExclSVG/> : <TouchableHighlight onPress={() =>showHint()} underlayColor={'#FFFFF'} className='px-3'><QuestionMarkSVG onPress={() => showHint()}/></TouchableHighlight> }
            <SelectDropdown
                  data={currencyList}
                  defaultValueByIndex={0}
                  onSelect={(selectedItem, index) => {
                     setCurrency(selectedItem);
                   }}
                  buttonStyle={error ? styles.dropdown3BtnStyleError : styles.dropdown3BtnStyle}
                  renderCustomizedButtonChild={(selectedItem, index) => {
                     return (
                        <View className='flex flex-row justify-start items-center px-2'>
                           <Text className='text-black text-center text-base mx-2'>{selectedItem}</Text>
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
                           <Text className='text-black text-center text-base mx-2 font-latoRegular'>{item}</Text>
                        </View>
                     );
                  }}
               />
            </View>
            {error ? <Text className="w-48  h-6 text-sm font-latoLight leading-6 font-primary text-red-500 ">{error}</Text> : ( !visible && (<Text className="w-48 h-6 text-gray-500 text-sm font-latoLight leading-6 ">{hint}</Text>))}
        </View>
    )
}


const styles = StyleSheet.create({
    cajaTextStyle: {
       width: '10%',
    },
    dropdown3BtnStyle: {
         display: 'flex',
         width: 87,
         height: 44,
         justifyContent: 'space-between',
         backgroundColor: 'white',
         borderWidth: 1,
         borderColor: 'rgb(209,213,219)'
         
    },
    dropdown3BtnStyleError: {
     display: 'flex',
     width: 87,
     height: 44,
     justifyContent: 'space-between',
     backgroundColor: 'white',
     borderWidth: 1,
     borderRightColor: 'white',
     borderColor: 'rgb(252 165 165)'
     
 },
    dropdown3DropdownStyle: {
       backgroundColor: 'white',
       width: 100,
    },
    dropdown3RowStyle: {
       backgroundColor: 'white',
       borderBottomColor: 'rgb(209,213,219)',
       width: 100,
       height: 44,
    },
    dropdown1SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
    dropdown3searchInputStyleStyle: {
       backgroundColor: 'slategray',
       width: 200,
       borderBottomWidth: 1,
       borderBottomColor: '#FFFFFF',
    },
 });