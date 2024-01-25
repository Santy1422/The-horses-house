import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  passwordClear,
  passwordEye,
  passwordKey,
} from "../../../../utils/svgIcons";

export default PasswordInput = ({ value, setValue }) => {
  const [hint, setHint] = useState("Escribe una contraseña");
  const [visible, setVisible] = useState("invisible");
  const [error, setError] = useState("");
  const [divBlue, setDivBlue] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const showHint = () => {
    if (visible == "invisible") setVisible("visible");
    if (visible == "visible") setVisible("invisible");
  };

  const onFocusDivBlue = (e) => {
    setDivBlue(!divBlue);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };

  const onChange = (e) => {
    let value = e.nativeEvent.text;
    setValue(value);
  };

    return (
        <View className="flex  items-start">
            <Text className='w-15 h-5 font-latoRegular text-base md:text-[22px] text-[#23254C] mb-1.5'>Contraseña</Text>
            <View className={`flex flex-row w-full h-11 md:h-14 pr-2 justify-between bg-white border rounded items-center  ${divBlue ? "border-blue-300" : 'border-gray-300'} ${error ? "border-red-300" : ''}`}>
                <View className="absolute pl-2">
                    {passwordKey}
                </View>
                <TextInput
                    secureTextEntry={secureText}
                    value={value}
                    onChange={((e) => onChange(e))}
                    placeholder='Contraseña'
                    className="w-full h-full text-[#23254C] text-base pl-[40] md:pl-[50] md:text-[18px] font-lato"
                    onBlur={((e) => onBlurDivBlue(e))}
                    onFocus={((e) => onFocusDivBlue(e))}
                    
                />
                <View className={`absolute flex flex-row ${value ? "justify-center" : "justify-end mr-1"} w-[18%] right-1`}>
                <TouchableOpacity className="" onPress={() => setSecureText(!secureText)}>
                {passwordEye}
</TouchableOpacity>
{
    value?
<TouchableOpacity className="relative" onPress={() => { setValue(''); setError('')}}>
{passwordClear}

</TouchableOpacity> : null
}
</View>

                {/* {error ? <ErrorExclSVG /> : null} */}
            </View>
            {error ? <Text className="w-[100%] h-5 text-sm md:text-18px font-latoLight leading-6 text-red-400 ">{error}</Text> : (!visible && (<Text className="w-[100%] h-6 text-gray-500 text-sm font-latoLight leading-6 ">{hint}</Text>))}
       
      
      {error ? (
        <Text className="w-[100%] h-5 text-sm font-latoLight leading-6 text-red-400 ">
          {error}
        </Text>
      ) : (
        !visible && (
          <Text className="w-[100%] h-6 text-gray-500 text-sm font-latoLight leading-6 ">
            {hint}
          </Text>
        )
      )}
    </View>
  );
};
