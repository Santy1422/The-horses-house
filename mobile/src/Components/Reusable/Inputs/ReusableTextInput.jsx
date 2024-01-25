import { useEffect, useState } from "react"
import { Text, TextInput, TouchableHighlight, View } from "react-native"

export default ReusableTextInput = ({value, setValue, label, hintp, hideHint, number, placeholder, errorMessage}) => {
    const [hint, setHint] = useState('This a hint text to help user')
    const [visible, setVisible] = useState('invisible') 
    const [error, setError] = useState('')
    const [divBlue, setDivBlue] = useState(false)
    useEffect(() => {
        setError(errorMessage)
    }, [errorMessage])

    if(hintp){setHint(hintp)}
    const showHint = () => {
        if (visible == 'invisible') setVisible('visible')
        if (visible == 'visible') setVisible('invisible')
    };

    const onFocusDivBlue = (e) => {
        if (error) return
        setDivBlue(!divBlue)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
      }

      const onChange = (text) => {    
        setValue(text)
    };
    
    return (
        <View className="flex  items-start  mt-4">
        <Text className='w-full h-7 font-latoRegular text-base md:text-[22px] leading-6 text-[#23254C] pb-1 md:mb-[10px]'>{label}</Text>
            <View className={`flex flex-row relative h-[44px] md:h-14 w-full  bg-white border rounded  justify-between items-center  ${divBlue ? "border-blue-300" : 'border-gray-300'} ${error ? "border-red-300" : ''}`}>
                <TextInput
                    value={value}
                    keyboardType={number ? "numeric" : "default"}
                    onChangeText={onChange}
                    placeholder={placeholder ? placeholder : label}
                    className="pl-3 w-full text-[#23254C] text-base md:text-[22px] font-normal font-lato leading-normal"

                    onBlur={((e) => onBlurDivBlue(e))}
                    onFocus={((e) => onFocusDivBlue(e))}
                    maxLength={40}      
                    />
                {error  ? <View className="absolute right-[14] top-0 h-full justify-center"><ErrorExclSVG/></View> : null }
                {!hideHint ? <TouchableHighlight onPress={() =>showHint()} underlayColor={'#FFFFF'} className='relative right-8' accessible={true} accessibilityLabel="hint for the user"><QuestionMarkSVG onPress={() => showHint()}/></TouchableHighlight> : null}
              </View>
            {error ? <Text className="w-48  h-6 text-sm md:text-[18px] font-latoLight leading-6 font-primary text-red-500 ">{error}</Text> : ( !visible && (<Text className="w-48 h-6 text-gray-500 text-sm font-latoLight leading-6 ">{hint}</Text>))}
    </View>
    )
}