import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import ProgressBar from "../../Components/Reusable/ProgressBar"
import Button from "../../Components/Reusable/Button"
import Checkbox from "../../Components/Reusable/Checkbox"
import { LinearGradient } from "expo-linear-gradient"
import { G, Path, Svg } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Radio } from "../../Components/Reusable/Radio"
import ReusableTextInput from "../../Components/Reusable/Inputs/ReusableTextInput"

export const Onboarding = ({ steps, setSteps, setAnswers, answers, profession, text, supporting, items, totalSteps, type }) => {
    const navigation = useNavigation()
    const [localAnswer, setLocalAnswer] = useState('')
    const [otroValue, setOtroValue] = useState('')

    const handleLocalAnswer = (item) => {
        setLocalAnswer(item)
    }

    const handleNextStep = () => {
        if (localAnswer) {
            setAnswers([...answers, localAnswer === "Otro" ? `${localAnswer}: ${otroValue}` : localAnswer])
            if (totalSteps === steps) {
                navigation.navigate("Login", { profesion: profession, answers: [...answers, localAnswer] })
            } else {
                setSteps(steps + 1)
            }
        }
        console.log(answers)
    }

    const handleGoBack = () => {
        answers.pop()
        setAnswers([...answers])
        setSteps(steps - 1)
    }

    return (
        <>
            <ScrollView className="bg-white">
                <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="px-[24px] pt-[44px] items-start relative h-full">
                    <ProgressBar progress={steps / totalSteps} />
                    <TouchableOpacity className="w-[48px] h-[48px] my-[8] md:w-16 md:h-16 bg-white rounded border border-[#D1DADA] justify-center items-center flex" onPress={() => handleGoBack()} accessible={true} accessibilityLabel="Go Back">
                        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="arrow left">
                                <Path id="XMLID 1536" d="M26.1397 16.0001C26.1397 16.5868 25.6597 17.0668 25.073 17.0668H9.49971L14.3264 21.9201C14.753 22.3468 14.753 23.0135 14.3264 23.4401C14.113 23.6535 13.8464 23.7601 13.5797 23.7601C13.313 23.7601 13.0197 23.6535 12.833 23.4401L6.19305 16.7735C5.76638 16.3468 5.76638 15.6801 6.19305 15.2801L12.833 8.61345C13.2597 8.18679 13.9264 8.18679 14.353 8.61345C14.7797 9.04012 14.7797 9.70679 14.353 10.1335L9.49971 14.9335H25.073C25.6597 14.9335 26.1397 15.4135 26.1397 16.0001Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </TouchableOpacity>
                    <Text className="text-neutral-800 font-latoBold text-xl pb-[20px]">{text}</Text>
                    {/* <View>
                        <Text className="text-neutral-800 text-base font-latoRegular">{supporting}</Text>
                    </View> */}
                    <View className="w-full">
                        {
                            type === 'radio' ?
                                <View className="w-full">
                                    <Radio options={[{ label: items[0] }, { label: items[1] }]} value={localAnswer} setValue={setLocalAnswer} />
                                </View>
                                :


                                items.map((item) => (
                                    <View className="w-full bg-white h-[54px] mt-3.5 px-4 rounded border-2 border-stone-300 flex justify-center" key={item}>
                                        <Checkbox label={item} setValue={(item) => handleLocalAnswer(item)} value={item} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'}/>
                                    </View>
                                ))

                        }
                        {
                            localAnswer === "Otro" && 
                            <View className="w-full">
                                <ReusableTextInput value={otroValue} setValue={setOtroValue} label={'Otra categoría (requerido)'}/>
                            </View>
                        }
                    </View>
                </LinearGradient>
            </ScrollView>
            <View className="px-[24px] absolute bottom-0 left-0 w-full">
                <Button onPress={() => handleNextStep()} label="Siguente" extra="w-full mt-9 mb-4" />
            </View>
        </>
    )
}

// async function handleOptionStep() {
//     setProfession([...options, { lfCaballerizo: localOption }])
//     try {
//         let proffessionObj = {
//             name: profession,
//             category: category,
//             subcategory: '',
//             options: options
//         }
//         let JSONproffesion = JSON.stringify(proffessionObj)
//         await AsyncStorage.setItem('UserProfession', JSONproffesion)
//         let obj = await AsyncStorage.getItem('UserProfession')
//         console.log(obj)
//         navigation.navigate("Register")
//     } catch (e) { console.log(e) }
// }