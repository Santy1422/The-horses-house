import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ChevronSVG from '../../../assets/icons/ChevronSVG';
import { G, Path, Svg } from 'react-native-svg';

const DropdownCheckbox = ({ options, value, setValue, extraStyle }) => {
    const [selected, setSelected] = useState([])
    const [allSelected, setAllSelected] = useState(false)
    const [show, setShow] = useState(false)

    const handleSelectAll = () => {
        if (allSelected) {
            setSelected([])
            setAllSelected(false)
        } else {
            setSelected(options)
            setAllSelected(true)
        }
    }

    const handleSelect = (option) => {
        if (selected.includes(option)) {
            let newArr = selected.filter(item => item !== option)
            setSelected(newArr)
        } else {
            setSelected([...selected, option])
        }
    };

    return (
        <View className='w-full relative'>
            <TouchableOpacity className='w-full flex-row justify-between px-3.5 py-2.5 bg-white rounded border border-[#CCCCCC]' onPress={() => setShow(!show)}>
                <Text className='text-labelDarkBlue text-base font-latoRegular'>Seleccione una prueba</Text>
                {show ?
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="nav-arrow-up">
                            <Path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 12.9419C4.80214 13.186 5.19786 13.186 5.44194 12.9419L10 8.38388L14.5581 12.9419C14.8021 13.186 15.1979 13.186 15.4419 12.9419C15.686 12.6979 15.686 12.3021 15.4419 12.0581L10.4419 7.05806C10.1979 6.81398 9.80214 6.81398 9.55806 7.05806L4.55806 12.0581C4.31398 12.3021 4.31398 12.6979 4.55806 12.9419Z" fill="#25314C" />
                        </G>
                    </Svg>
                    :
                    <ChevronSVG />
                }
            </TouchableOpacity>
            {show &&
                <View className='w-full bg-white border border-[#CCCCCC] rounded absolute top-14 z-20' style={{ elevation: 8, shadowColor: 'rgba(0, 0, 0, .5)' }}>
                    <TouchableOpacity onPress={() => handleSelectAll()} className='w-full flex-row border-b-1 border-[#CCCCCC] items-center px-3.5 py-2.5'>
                        <View className={`w-4 h-4 border border-neutral-400 ${allSelected ? "bg-gray-200" : "bg-white"} items-center justify-center`}>
                            {allSelected &&
                                <Image source={require('../../../assets/img/checkb.png')} className={`w-4 h-4`}></Image>
                            }
                        </View>
                        <Text className='pl-2'>Seleccionar todas</Text>
                    </TouchableOpacity>
                    {
                        options && options.map(option => {
                            return (
                                <TouchableOpacity key={option} onPress={() => handleSelect(option)} className='w-full flex-row items-center px-3.5 py-2.5'>
                                    <View className={`w-4 h-4 border border-neutral-400 ${selected.includes(option) ? "bg-gray-200" : "bg-white"} items-center justify-center`}>
                                        {selected.includes(option) &&
                                            <Image source={require('../../../assets/img/checkb.png')} className={`w-4 h-4`}></Image>
                                        }
                                    </View>
                                    <Text className='pl-2'>{option}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>}
        </View>
    );
};


export default DropdownCheckbox;