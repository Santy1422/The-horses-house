import { useEffect, useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import EnvelopeSVG from "../../../../assets/icons/EnvelopeSVG";
import ErrorExclSVG from "../../../../assets/icons/ErrorExclSVG";
import QuestionMarkSVG from "../../../../assets/icons/QuestionMarkSVG";

const EmailInput = ({ setValue , value, label, hintText }) => {
    
  const [hint, setHint] = useState(hintText ? hintText : 'Agregue su email')
  const [email,setEmail] = useState(value)
  const [visible, setVisible] = useState(true) 
  const [error, setError] = useState('')    
  const [isValid, setIsValid] = useState(true)
  /* se puede usar un estado local y solo enviar por setValue un email correcto
  const [email, setEmail] = useState('')  
  
  luego value del inputbox email seria email y no value de props
  y en onChange haria un setEmail() y si pasa el validate, haria un setValue() de props
  */
 
 const showHint = () => {
   setVisible(!visible)
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const onChange = (e) => {     
    setEmail(e.nativeEvent.text)
    const newEmail = e.nativeEvent.text;
    setIsValid(validateEmail(newEmail));
  };

  useEffect(() => {
    if (isValid) {
      setError('')
      setValue(email)
    } else  {
      setError('El email ingresado no es correcto')
      setValue('')
    }
  },[isValid, email])

  return (
    <View className="flex w-full items-start gap-1.5">        
        <Text className="w-full h-5 font-latoRegular text-base md:text-[22px] leading-6 text-[#23254C] md:mb-[10px]">{label}</Text>
        <View className={`flex flex-row w-full pr-2 flex-initial h-11 md:h-14 justify-around  bg-white border rounded items-center ${error ? "border-red-300" : "border-gray-300"}`}>
          <View className="absolute pl-3.5">
            <EnvelopeSVG />
          </View>
          <TextInput
            value={email}
            onChange={((e) => onChange(e))}
            placeholder={'johndoe@blackstallion.com'}
            className="w-full h-full text-[#23254C] text-base font-lato md:text-[20px] pl-[40] md:pl-[50]"  
            maxLength={50}              
            />
            <View className="error right-2">
              {error ? <ErrorExclSVG /> : <TouchableHighlight className="relative" onPress={() =>showHint()} underlayColor={'#FFFFF'} accessible={true} accessibilityLabel="hint for the user"><QuestionMarkSVG /></TouchableHighlight> }

            </View>
        </View>        
          {error ? <Text className="w-auto h-5 text-sm md:text-[18px] font-latoLight leading-6 text-red-500">{error}</Text> : ( !visible && (<Text className="w-full h-6 text-gray-500 text-sm font-latoLight leading-6">{hint}</Text>))}
      </View>
    );
  };
  
  export default EmailInput;
  
  
  
  
  
  