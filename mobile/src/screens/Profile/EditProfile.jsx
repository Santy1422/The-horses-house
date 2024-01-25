import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "react-native-animatable"
import { useDispatch, useSelector } from "react-redux"
import { useImage } from "../../CustomHooks.jsx/useImage"
import { useProfile } from "../../CustomHooks.jsx/useProfile"
import { useEffect, useState } from "react"
import ReusableTextInput from "../../Components/Reusable/Inputs/ReusableTextInput"
import ToggleSwitch from "../../Components/Reusable/ToggleSwitch"
import Button from "../../Components/Reusable/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { updateUser } from "../../../auth/userPeticiones"
import { authSetUser } from "../../Redux/ReducerAuth"
import { LinearGradient } from "expo-linear-gradient"
import { BackArrow } from "../../Components/Reusable/BackArrow"
import { editarIconSmall } from "../../../utils/svgIcons"
import CustomToggle from "../../Components/Reusable/CustomToggle"
import Checkbox from "../../Components/Reusable/Checkbox"
import { setProfesiones } from "../../Redux/ReducerProfesion"

export const EditProfile = ({ }) => {
    // Temporal Local States 
    const [isMounting, setIsMounting] = useState(false)
    const [hasCaballeriza, setHasCaballeriza] = useState(false)
    const [lfClients, setLfClients] = useState(false)
    const [isFederado, setIsFederado] = useState(false)

    // Professions states & functions

    const [isOpen, setIsOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsToggled(previousState => !previousState);
    };


    // Tools
    const user = useSelector((state) => state.ReducerAuth.profile)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    // Custom Hooks
    const [profilePic, setProfilePic] = useState(user?.profilePic ? user?.profilePic : "")
    const [firstName, setFirstName] = useState(user?.firstName ? user?.firstName : "")
    const [lastName, setLastName] = useState(user?.lastName ? user?.lastName : "")
    const [email, setEmail] = useState(user?.email ? user?.email : "")
    const [phoneNumber, setPhoneNumber] = useState(user?.cellPhone ? user?.cellPhone : "")
    const [birthday, setBirthday] = useState(user?.birthday ? user?.birthday : "")

    const { url, uploadImage } = useImage()
    // Uploads image and sets it
    const handleImageUpload = async () => {
        await uploadImage();
        setProfilePic(url)
    };
    useEffect(() => {
        setProfilePic(url)

    }, [url])

    // Sets all values
    async function setEditedProfile() {
        let newProfession = []
        professions.map(prof => {
            if (prof.selected) {
                newProfession.push(prof.name)
            }
        })
        try {
            let editedUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                cellPhone: phoneNumber,
                birthday: birthday,
                profilePic: url ? url : user?.profilePic,
                nationality: 'Argentinian',
                country: 'Argentina',
                province: 'Buenos Aires',
                city: 'Tandil',
                zipCode: 7000,
                professions: newProfession.length > 0 ? newProfession : null
            }
            await updateUser({
                editedUser,
                succes: ((s) => { console.log(s), dispatch(authSetUser(s.payload.user)), dispatch(setProfesiones(s.payload.profesiones))}),
                loading: (l) => console.log(l),
                error: (e) => console.log(e)
            })
            navigation.navigate("ProfileIndex")
        } catch (e) { console.log(e) }
    }
    return (
        <ScrollView className="bg-white h-full">
            <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="w-full px-[24px] md:px-[100px]">
                <BackArrow position={'top-[71] left-[24]'}></BackArrow>

                <Text className="text-center text-lg text-labelDarkBlue font-latoBold mt-[78px] mb-[41px] md:text-[34px] md:mb-[61px] md:pt-[6px] md:mt-[90px]">Editar</Text>
                <View className="flex flex-col justify-center items-center">
                    <View className="h-[80px] w-[80px] md:w-[113px] md:h-[113px] shadow-black bg-white rounded-full flex justify-center items-center" style={{
                        shadowColor: 'rgba(0, 0, 0, .5)',
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 12,
                        elevation: 12,
                    }}>
                        <View className="absolute z-50 self-end top-1 right-[-5]">

                            <TouchableOpacity className=" rounded-full bg-[#D1DADA] h-[23px] w-[23px] md:w-[33px] md:h-[33px] flex justify-center items-center" >
                                <View className="w-[14] h-[14] md:w-[22] md:h-[22]">
                                    {editarIconSmall}
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="w-[80px] h-[80px] md:w-[113px] md:h-[113px] bg-[#6597DD] border-4 border-white rounded-full justify-center items-center">

                            <TouchableOpacity onPress={handleImageUpload} className="w-full h-full justify-center items-center">

                                {url ? (
                                    <Image source={{ uri: url }} className="w-full h-full rounded-full" />
                                ) : (
                                    <Image source={{ uri: user?.profilePic }} className="w-full h-full rounded-full" />
                                )}
                            </TouchableOpacity>


                            {/* <Svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="user">
                                        <Path id="Icon" d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3334 20H10.6667C9.25222 20 7.89567 20.5619 6.89547 21.5621C5.89528 22.5623 5.33337 23.9188 5.33337 25.3333V28M21.3334 9.33333C21.3334 12.2789 18.9456 14.6667 16 14.6667C13.0545 14.6667 10.6667 12.2789 10.6667 9.33333C10.6667 6.38781 13.0545 4 16 4C18.9456 4 21.3334 6.38781 21.3334 9.33333Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </G>
                                </Svg> */}
                        </View>
                    </View>
                    <Text className="font-latoRegular text-[16px] mt-[12px] md:text-[34px] md:pt-[5px] md:my-[10px]">{user.firstName}{user.lastName ? ` ${user.lastName}` : ''}</Text>
                </View>
                <View className="md:my-[26px]">
                    <View className="md:mb-[18px]">
                        <ReusableTextInput label={'Nombre'} hideHint={true} value={firstName} setValue={setFirstName} />
                    </View>
                    <View className="md:mb-[18px]">
                        <ReusableTextInput label={'Apellido'} hideHint={true} value={lastName} setValue={setLastName} />
                    </View>
                    {/*  Profesiones  */}
                    <View className="md:mb-[18px]">
                        <View className='flex-col pt-4 w-[100%]'>
                            <Text className='w-full h-7 font-latoRegular text-base leading-6 text-[#23254C] pb-2'>Profesiones</Text>
                            <TouchableOpacity className='w-[100%] bg-white p-[10] border border-gray-300 rounded flex-row justify-between items-center' onPress={toggleDropdown}>
                                {<Text className='text-[#A1A0A0] text-base md:text-[22px] font-normal font-lato leading-normal'>Seleccionar</Text>}
                                {/* {selectedOption && <Text>{selectedOption}</Text>} */}
                                <CustomToggle onToggle={toggleDropdown} value={isToggled} />
                            </TouchableOpacity>
                        </View>
                        {isOpen &&
                            <View className="w-full bg-white mt-[4] rounded border border-gray-300">
                                {/* Rider Profesional */}
                                {
                                    professions[1].selected || professions[4].selected || professions[5].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 pt-4 justify-center">
                                            <Checkbox label={professions[0].name} setValue={() => handleSelection(professions[0].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded px-4 py-2 pt-4 justify-center">
                                            <Checkbox label={professions[0].name} setValue={() => handleSelection(professions[0].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Rider No Profesional */}
                                {
                                    professions[0].selected || professions[4].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[1].name} setValue={() => handleSelection(professions[1].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[1].name} setValue={() => handleSelection(professions[1].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Rider Domador */}
                                {
                                    professions[3].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[7].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[2].name} setValue={() => handleSelection(professions[2].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[2].name} setValue={() => handleSelection(professions[2].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Dueño de Haras */}
                                {
                                    professions[2].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[3].name} setValue={() => handleSelection(professions[3].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[3].name} setValue={() => handleSelection(professions[3].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Herrero */}
                                {
                                    professions[0].selected || professions[1].selected || professions[2].selected || professions[3].selected || professions[5].selected || professions[6].selected || professions[7].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[4].name} setValue={() => handleSelection(professions[4].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[4].name} setValue={() => handleSelection(professions[4].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Veterinario */}
                                {
                                    professions[0].selected || professions[2].selected || professions[3].selected || professions[4].selected || professions[7].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[5].name} setValue={() => handleSelection(professions[5].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[5].name} setValue={() => handleSelection(professions[5].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Transportista */}
                                {
                                    professions[2].selected || professions[3].selected || professions[4].selected || professions[7].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[6].name} setValue={() => handleSelection(professions[6].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[6].name} setValue={() => handleSelection(professions[6].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Criador */}
                                {
                                    professions[2].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[8].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[7].name} setValue={() => handleSelection(professions[7].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[7].name} setValue={() => handleSelection(professions[7].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                                {/* Caballerizo */}
                                {
                                    professions[0].selected || professions[1].selected || professions[3].selected || professions[4].selected || professions[5].selected || professions[6].selected || professions[7].selected ?
                                        (<View className="w-full bg-white rounded p-4 py-2 justify-center">
                                            <Checkbox label={professions[8].name} setValue={() => handleSelection(professions[8].name)} pasaString={true} mt={'0'} disabled />
                                        </View>)
                                        :
                                        (<View className="w-full bg-white rounded p-4 py-2 pb-4 justify-center">
                                            <Checkbox label={professions[8].name} setValue={() => handleSelection(professions[8].name)} pasaString={true} mt={'0'} />
                                        </View>)
                                }
                            </View>

                        }
                    </View>
                    <View className="md:mb-[18px]">
                        <ReusableTextInput label={'Fecha de nacimiento'} hideHint={true} value={birthday} setValue={setBirthday} />
                    </View>
                    <View>
                        <ReusableTextInput label={'Email'} hideHint={true} value={email} setValue={setEmail} />
                    </View>
                </View>
                <View className="">
                    <Text className=" self-start font-latoBold text-[18px] my-[14px] md:text-[34px] md:mb-[20px]">Opciones adicionales</Text>
                    <View className="flex justify-between flex-row mb-[14px] md:mb-[20px]">
                        <Text className=" font-latoRegular text-sm md:text-[20px]">¿ Montas actualmente ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px] md:mr-[6px] md:text-[20px]">No</Text>
                            <ToggleSwitch onToggle={setIsMounting} value={isMounting} />
                            <Text className="ml-[2px] md:ml-[6px] md:text-[20px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px] md:mb-[20px]">
                        <Text className=" font-latoRegular text-sm md:text-[20px]">¿ Estas buscando clientes ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px] md:mr-[6px] md:text-[20px]">No</Text>
                            <ToggleSwitch onToggle={setLfClients} value={lfClients} />
                            <Text className="ml-[2px] md:ml-[6px] md:text-[20px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px] md:mb-[20px]">
                        <Text className=" font-latoRegular text-sm md:text-[20px]">¿ Sos dueño de una caballeriza ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px] md:mr-[6px] md:text-[20px]">No</Text>
                            <ToggleSwitch onToggle={setHasCaballeriza} value={hasCaballeriza} />
                            <Text className="ml-[2px] md:ml-[6px] md:text-[20px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px] md:mb-[20px]">
                        <Text className=" font-latoRegular text-sm md:text-[20px]">¿ Estas federado ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px] md:mr-[6px] md:text-[20px]">No</Text>
                            <ToggleSwitch onToggle={setIsFederado} value={isFederado} />
                            <Text className="ml-[2px] md:ml-[6px] md:text-[20px]">Si</Text>
                        </View>
                    </View>
                </View>
                <View className="w-full justify-center my-5  bottom-0 self-center md:mb-[20px]">
                    <Button label={'Guardar'} extra={'w-full h-[44px] md:h-16'} onPress={() => setEditedProfile()} />
                </View>
            </LinearGradient>
        </ScrollView>
    )
}