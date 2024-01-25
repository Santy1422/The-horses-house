import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Checkbox = ({ value, setValue, label, error, disabled, icon, shape, w, h, pasaString, mt, setCheck, stringValue, checked, extra }) => {


  const [isChecked, setChecked] = useState(false)

  useEffect(()=>{
    if (checked === true) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  },[])

  if (setCheck) { setChecked(!isChecked) }
  // max height: 5
  let height = h || 4
  // max width: 5
  let width = w || 4
  // margin-top
  let margin = mt || 4
  const handleValueCheck = (value) => {
    if (pasaString) {
      if (!isChecked) {
        setValue(stringValue || label)
        setChecked(true)
      } else {
        setValue(false);
        setChecked(false);
      }
    }
    else {
      setChecked(!isChecked)
      setValue(!value)
    }
  }

  let boxStyle = `w-${4} h-${4} border rounded-[1px] mr-2 justify-center items-center bg-white`
  let boxStyleClass = `${boxStyle} ${!isChecked ? error ? "border-red-400" : "border-neutral-400" : "border-neutral-400"}`

  if (!disabled) {
    if (shape != 'circle') {
      // Picks shape (prop(other || 'circle'))
      return (
        <TouchableOpacity
          onPress={() => handleValueCheck(pasaString && value)} className={`${extra && extra}`}>
          <View className={`flex flex-row mt-${margin}`}>
            <View className={boxStyleClass}>
              {isChecked && (
                <View className={`w-${height} h-${width} bg-gray-200`}>
                  {(icon == 'dash') && (
                    // Picks icon type (prop(other || 'dash'))
                    <Image source={require('../../../assets/img/minus.png')} className={`w-${height} h-${width}`}></Image>
                  )
                  }
                  {(icon != 'dash') && (
                    <Image source={require('../../../assets/img/checkb.png')} className={`w-${height} h-${width}`}></Image>
                  )}
                </View>
              )}
            </View>
            <View className='flex  w-full justify-start'>
              <Text className='w-full text-zinc-900 text-sm font-normal font-latoRegular leading-tight'>{label}</Text>
              {!isChecked && (error) && (
                <Text className='text-red-600 text-xs font-latoLight leading-normal '>{error}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        // Circle type checkbox
        <TouchableOpacity
          onPress={() => handleValueCheck()}>
            <View className='flex flex-row'>
              <View className={`${boxStyleClass} rounded-full`}>
                {isChecked && (
                  <View className="w-2 h-2 rounded-full bg-neutral-500">
                    <View className=' bg-neutral-500 rounded-full'></View>
                  </View>
                  )}
              </View>
              <View className='flex'>
              <Text className='text-sm leading-5 font-latoRegular'>{label}</Text>
                  {!isChecked && (error) && (
                    <Text className='text-red-600 text-xs font-latoLight leading-normal'>{error}</Text>
                    )}
                </View>
            </View>
          </TouchableOpacity>
        );
    }
  } else {
    // Disabled version of the checkbox
    return (
      <View className='flex flex-row'>
        <View className={'rounded mr-2 justify-center items-center'}>
          <View className=" bg-zinc-100">
            {checked ? <Image source={require('../../../assets/img/checkb.png')} className='w-4 h-4'></Image>
            :
            <View className='disabled w-[17] h-[16] border border-gray-100 bg-gray-300'></View>  
            }
          </View>
        </View>
        <View className='flex'>
          <Text className='text-sm font-latoRegular leading-5 text-zinc-300'>{label}</Text>
        </View>
      </View>
    )
  }
}

export default Checkbox;
