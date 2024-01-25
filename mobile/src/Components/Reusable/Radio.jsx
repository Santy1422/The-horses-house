import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

export const Radio = ({ options, value, setValue }) => {
    const [checked, setChecked] = useState(value)

    const handleCheck = (option) => {
        if (option === checked) {
            setChecked('')
            setValue('')
        } else {
            setChecked(option)
            setValue(option)
        }
        
    }
    return (
        <View className={`w-full`}>
            {
                options.map((option, i) => {
                    return (
                        <View key={i} className={`w-full ${checked === option.label ? 'bg-zinc-100' : 'bg-white'} mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center`}>
                            <TouchableOpacity
                                onPress={() => handleCheck(option.label)}
                                className={`h-full justify-center`}>
                                <View className='flex flex-row'>
                                    <View className={`border border-neutral-500 mr-2 w-4 h-4 rounded-full justify-center items-center`}>
                                        {checked === option.label && (
                                            <View className="w-2 h-2 rounded-full bg-neutral-500">
                                                <View className=' bg-neutral-500 rounded-full'></View>
                                            </View>
                                        )}
                                    </View>
                                    <View className='flex'>
                                        <Text className='text-sm leading-5 font-latoRegular'>{option.label}</Text>
                                        {option.supporting && <Text className="text-zinc-600 text-sm font-latoRegular">{option.supporting}</Text>}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}