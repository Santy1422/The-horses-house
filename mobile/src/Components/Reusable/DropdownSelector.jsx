import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ChevronSVG from '../../../assets/icons/ChevronSVG';
import DefaultAvatarSVG from '../../../assets/icons/DefaultAvatarSVG';

const Dropdown = ({ options, value, setValue , onlineStatus, profilePic, defaultPic }) => {
  const [selected, setSelected] = useState(value)
  function IsOnlineIcon() { return <View className="w-2 h-2 rounded-full bg-[#5CC941]"><View className=' bg-[#5CC941] rounded-full'></View></View>}
 function ButtonIcon(className) { if (onlineStatus) { return <IsOnlineIcon/>}
                         if (profilePic) {return <Image source={require('../../images/smallAvatar.png')} width={25} height={25} className={className}></Image> }
                         if (defaultPic) {return <DefaultAvatarSVG/>}}


  const handleSelect = (option) => {
    setSelected(option)
    setValue(option);
  };

  return (
    <View className='flex flex-row items-center justify-around mt-4'>
      <SelectDropdown
      data={options}
      defaultValue={selected}
      onSelect={(picked, i) => {handleSelect(picked.username)}}
      buttonStyle={styles.dropdown3BtnStyle}
      dropdownStyle={styles.dropdown3DropdownStyle}
      rowStyle={styles.dropdown3RowStyle}
      selectedRowStyle={styles.dropdown1SelectedRowStyle}
      renderCustomizedButtonChild={(picked, index) => {
        return (
          <View className='flex flex-row justify-start items-center'>
            <ButtonIcon  />
            <Text className='text-black text-center text-base pl-2 mr-auto'>{picked?.username} <Text className='text-gray-400'>{picked?.userid}</Text></Text>
            <ChevronSVG />
          </View>
          )
      }}
      renderCustomizedRowChild={(picked, index) => {
        return (
          <View className='flex flex-row items-center justify-start'>
            <ButtonIcon />
            <Text className='text-black text-center text-base pl-2 mr-auto'>{picked.username} <Text className='text-gray-400'>{picked.userid}</Text></Text>
            {picked.username == value && <Image source={require('../../../assets/img/checkb.png')} className=' h-5 w-5 '></Image>}
        </View>
        );
     }}
      >
      </SelectDropdown>
    </View>
  );
};


export default Dropdown;


const styles = StyleSheet.create({
  cajaTextStyle: {
     width: '10%',
  },
  dropdown3BtnStyle: {
       display: 'flex',
       width: 250,
       height: 44,
       justifyContent: 'space-between',
       backgroundColor: 'white',    
       borderWidth: 1,
       borderRadius: 4,
       borderBottomLeftRadius:4,
       borderColor: 'rgb(209,213,219)'
       
  },
  dropdown3BtnStyleError: {
   display: 'flex',
   width: 250,
   height: 44,
   justifyContent: 'space-between',
   backgroundColor: 'white',
   borderRightWidth:0,
   borderWidth: 1,
   borderTopLeftRadius: 4,
   borderBottomLeftRadius:4,
   borderRightColor: 'white',
   borderColor: 'rgb(252 165 165)'
   
},
  dropdown3DropdownStyle: {
     backgroundColor: 'white',
     width: 250,
  },
  dropdown3RowStyle: {
     backgroundColor: 'white',
     display: 'flex',
     justifyContent: 'space-between',
     borderBottomColor: 'rgb(209,213,219)',
     width: 250,
     height: 44,
     paddingLeft: 5
  },
  dropdown1SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
  dropdown3searchInputStyleStyle: {
     backgroundColor: 'slategray',
     width: 250,
     borderBottomWidth: 1,
     borderBottomColor: '#FFFFFF',
  },
});