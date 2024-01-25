import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity, View } from "react-native"
import { Path, Svg } from "react-native-svg"
import Button from "../Components/Reusable/Button"
import { useState } from "react"
import { UnsubscribeModal } from "../Components/EventComponents/UnsubscribeModal"
import DropdownCheckbox from "../Components/Reusable/DropdownCheckbox"
import { Radio } from "../Components/Reusable/Radio"

const radioOptions = [
    {
        label: 'Motivos medicos',
        supporting: 'Se requiere certificado médico'
    },
    {
        label: 'Otros',
        supporting: 'Penalización igual al valor de inscripción'
    }
]

export const ScreenEventUnsubscribe = () => {
    const [answer, setAnswer] = useState('')
    const [visible, setVisible] = useState(false)
    const [unsubscribeFrom, setUnsubscribeFrom] = useState('')
    const navigation = useNavigation()
    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="h-full">
            <TouchableOpacity className="absolute left-[24px] top-[27px] w-11 h-11 bg-white rounded border border-stone-300 justify-center items-center inline-flex" onPress={() => navigation.goBack()}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C" />
                </Svg>
            </TouchableOpacity>
            <View className='h-11 justify-center items-center mt-[27px]'>
                <Text className='text-black text-lg font-latoBold'>Darse de baja</Text>
            </View>

            <View className="px-[20]">

                <View className="w-full mt-[40]">
                    <Text className="text-labelDarkBlue text-base font-latoRegular mb-3.5">Seleccioná la o las pruebas en las que querés darte de baja</Text>
                    <DropdownCheckbox options={['Prueba 1', 'Prueba 2']} value={unsubscribeFrom} setValue={() => setUnsubscribeFrom()} />
                </View>

                <View className="w-full mt-[40]">
                    <Text className="text-labelDarkBlue text-base font-latoRegular">Seleccioná los motivos</Text>
                    <Radio options={radioOptions} value={answer} setValue={setAnswer}/>
                </View>

            </View>

            <View className="w-full absolute px-[20] bottom-8">
                <Button label={'Continuar'} extra={'w-full'} onPress={() => setVisible(!visible)} disabled={answer === '' ? true : false}/>
            </View>
            <UnsubscribeModal visible={visible} setVisible={setVisible} selection={answer}/>
        </LinearGradient>
    )
}