import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Circle, Svg} from 'react-native-svg';

const ToggleSwitch = ({ value, onToggle }) => {
  const [toggleValue, setToggleValue] = useState(value);

  const handleToggle = () => {
    const newValue = !toggleValue;
    setToggleValue(newValue);
    onToggle(newValue);
  };

  return (
    <TouchableOpacity className='flex flex-row items-center' onPress={handleToggle}>
      <View className={`flex w-[36px] h-[20px] p-0.5  rounded-[12px] ${value ? `bg-[#231D43] items-end` : `bg-[#7F7F91] items-start`}`} >
        <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Circle cx="8" cy="8" r="8" fill="white"/>
        </Svg>    
        </View>
    </TouchableOpacity>
  );
};


export default ToggleSwitch;