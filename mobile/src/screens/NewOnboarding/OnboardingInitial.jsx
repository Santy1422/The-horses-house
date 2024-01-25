import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import ProgressBar from "../../Components/Reusable/ProgressBar"
import Button from "../../Components/Reusable/Button"
import Checkbox from "../../Components/Reusable/Checkbox"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { G, Path, Svg } from "react-native-svg"

export const OnboardingInitial = ({ steps, setSteps, setProfession, profession, localProfession, setLocalProfession }) => {

    const [professions, setProfessions] = useState([
        { name: 'Rider Profesional', selected: false },
        { name: 'Rider No Profesional', selected: false },
        { name: 'Rider Domador', selected: false },
        { name: 'Dueño de Haras', selected: false },
        { name: 'Herrero', selected: false },
        { name: 'Veterinario', selected: false },
        { name: 'Transportista', selected: false },
        { name: 'Criador', selected: false },
        { name: 'Caballerizo', selected: false },
    ])

    const navigation = useNavigation()

    const handleSelection = (name) => {
        let newProfessions = []
        professions.map(prof => {
            if (prof.name === name) {
                newProfessions.push({ name, selected: !prof.selected })
            } else {
                newProfessions.push(prof)
            }
        })

        setProfessions(newProfessions)
    }

    const setSelectedProfessions = () => {
        let newProfession = []
        professions.map(prof => {
            if (prof.selected) {
                newProfession.push(prof.name)
            }
        })
        if (newProfession.length > 0) {
            setProfession(newProfession)
            setSteps(1)
        }
    }

    return (
        <>
            <ScrollView className="bg-white">
                <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="px-[24px] pt-[44px] pb-[100] items-start relative h-full">
                    <ProgressBar progress={steps / 2} />
                    <TouchableOpacity className="w-[48px] h-[48px] my-[8] md:w-16 md:h-16 bg-white rounded border border-[#D1DADA] justify-center items-center flex" onPress={() => navigation.goBack()} accessible={true} accessibilityLabel="Go Back">
                        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="arrow left">
                                <Path id="XMLID 1536" d="M26.1397 16.0001C26.1397 16.5868 25.6597 17.0668 25.073 17.0668H9.49971L14.3264 21.9201C14.753 22.3468 14.753 23.0135 14.3264 23.4401C14.113 23.6535 13.8464 23.7601 13.5797 23.7601C13.313 23.7601 13.0197 23.6535 12.833 23.4401L6.19305 16.7735C5.76638 16.3468 5.76638 15.6801 6.19305 15.2801L12.833 8.61345C13.2597 8.18679 13.9264 8.18679 14.353 8.61345C14.7797 9.04012 14.7797 9.70679 14.353 10.1335L9.49971 14.9335H25.073C25.6597 14.9335 26.1397 15.4135 26.1397 16.0001Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </TouchableOpacity>
                    <Text className="text-neutral-800 font-latoBold text-xl pb-[20px]">¿Qué tipo de usuario sos?</Text>
                    <View>
                        <Text className="text-neutral-800 text-base font-latoRegular">Podés elegir más de una opción.</Text>
                    </View>
                    <View className="w-full">
                        {/* Rider Profesional */}
                        {
                            professions[1].selected || professions[4].selected || professions[5].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[0].name} setValue={() => handleSelection(professions[0].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[0].name} setValue={() => handleSelection(professions[0].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'}/>
                                </View>)
                        }
                        {/* Rider No Profesional */}
                        {
                            professions[0].selected || professions[4].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[1].name} setValue={() => handleSelection(professions[1].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[1].name} setValue={() => handleSelection(professions[1].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Rider Domador */}
                        {
                            professions[3].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[7].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[2].name} setValue={() => handleSelection(professions[2].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[2].name} setValue={() => handleSelection(professions[2].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Dueño de Haras */}
                        {
                            professions[2].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[3].name} setValue={() => handleSelection(professions[3].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[3].name} setValue={() => handleSelection(professions[3].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Herrero */}
                        {
                            professions[0].selected || professions[1].selected || professions[2].selected || professions[3].selected || professions[5].selected || professions[6].selected || professions[7].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[4].name} setValue={() => handleSelection(professions[4].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[4].name} setValue={() => handleSelection(professions[4].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Veterinario */}
                        {
                            professions[0].selected || professions[2].selected || professions[3].selected || professions[4].selected || professions[7].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[5].name} setValue={() => handleSelection(professions[5].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[5].name} setValue={() => handleSelection(professions[5].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Transportista */}
                        {
                            professions[2].selected || professions[3].selected || professions[4].selected || professions[7].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[6].name} setValue={() => handleSelection(professions[6].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[6].name} setValue={() => handleSelection(professions[6].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Criador */}
                        {
                            professions[2].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[8].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[7].name} setValue={() => handleSelection(professions[7].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[7].name} setValue={() => handleSelection(professions[7].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                        {/* Caballerizo */}
                        {
                            professions[0].selected || professions[1].selected || professions[3].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[7].selected ?
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[8].name} setValue={() => handleSelection(professions[8].name)} pasaString={true} mt={'0'} disabled />
                                </View>)
                                :
                                (<View className="w-full bg-white mt-3.5 h-[54px] px-4 rounded border-2 border-stone-300 flex justify-center">
                                    <Checkbox label={professions[8].name} setValue={() => handleSelection(professions[8].name)} pasaString={true} mt={'0'} extra={'w-full h-full justify-center'} />
                                </View>)
                        }
                    </View>


                    {/* <Button onPress={() => navigation.navigate("Register", { profesion: profession })} label="Siguente" extra="w-full mt-9 mb-4" /> */}

                </LinearGradient>
            </ScrollView>
            <View className="px-[24px] absolute bottom-0 left-0 w-full">
                <Button onPress={() => setSelectedProfessions()} label="Siguente" extra="w-full mt-9 mb-4" />
            </View>
        </>
    )
}