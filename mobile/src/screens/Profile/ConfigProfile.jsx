import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { Text, View, TouchableOpacity } from "react-native"
import { BackArrow } from "../../Components/Reusable/BackArrow"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
// import ToggleSwitch from "../../Components/Reusable/ToggleSwitch"
import { signOut } from "firebase/auth"
import auth from "../../../auth/firebase"
import Informacion from "../../Components/ModalComponents/Informacion"
import TerminosYCondiciones from "../../Components/ModalComponents/TerminosYCondiciones"
import DeleteAccountModal from "../../Components/ModalComponents/DeleteAccount"
import { cerrarSesionIcon, configuracionIcon, informacionIcon, tachobasuraIcon, terminosycondicionesIcon, toggleArrowSmall } from "../../../utils/svgIcons"
import { G, Path, Svg } from "react-native-svg"

export const ConfigProfile = ({ }) => {
    const [isToggled, setIsToggled] = useState(false)
    const navigation = useNavigation()
    const [informacion, setInformacion] = useState(false)
    const [terminos, setTerminos] = useState(false)
    const [deleteAccount, setDeleteAccount] = useState(false)



    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="w-full h-full items-center px-[24]">
            <BackArrow position={'top-[71] left-[24]'}></BackArrow>
            <Text className="font-latoBold center text-[18px] md:text-[34px] text-labelDarkBlue mt-[84] md:mt-[90]">Configuración</Text>
            <View className="w-full bg-white mt-[36] md:mt-[106] py-[14] px-1.5 md:px-4 rounded-xl">
                {/* <TouchableOpacity className="flex-row w-full justify-between items-center"> */}
                {/* <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="question mark circle">
                            <Path id="XMLID 982" d="M15.5276 7.89981C16.1542 8.61981 16.4479 9.5998 16.3109 10.6398C16.0759 12.5598 14.7052 13.2398 13.4912 13.2398C13.4325 13.2398 13.3933 13.2398 13.3933 13.2398V13.7198C13.3933 14.1598 13.0409 14.5198 12.6101 14.5198C12.1793 14.5198 11.8269 14.1598 11.8269 13.7198V13.0798C11.8269 12.4198 12.101 11.6398 13.4912 11.6398C14.2549 11.6398 14.6465 11.2398 14.7444 10.4398C14.7836 10.1798 14.8032 9.47982 14.3332 8.95982C13.9612 8.53981 13.3542 8.3198 12.5318 8.3198C10.7695 8.3198 10.7108 9.4998 10.7108 9.6198C10.7108 10.0598 10.3583 10.4198 9.92753 10.4198C9.49675 10.4198 9.14429 10.0598 9.14429 9.6198C9.14429 8.8198 9.75128 6.7198 12.5318 6.7198C14.157 6.7198 15.0577 7.35981 15.5276 7.89981ZM12.5513 15.1998C12.2968 15.1998 12.0422 15.2998 11.866 15.4998C11.6898 15.6798 11.5723 15.9398 11.5723 16.1998C11.5723 16.4598 11.6702 16.7198 11.866 16.8998C12.0422 17.0798 12.2968 17.1998 12.5513 17.1998C12.8059 17.1998 13.0604 17.0998 13.2367 16.8998C13.4129 16.7198 13.5304 16.4598 13.5304 16.1998C13.5304 15.9398 13.4325 15.6798 13.2367 15.4998C13.08 15.3198 12.8255 15.1998 12.5513 15.1998ZM21.6173 11.9998C21.6173 17.0798 17.5836 21.1998 12.6101 21.1998C7.63656 21.1998 3.60291 17.0798 3.60291 11.9998C3.60291 6.91981 7.63656 2.7998 12.6101 2.7998C17.5836 2.7998 21.6173 6.91981 21.6173 11.9998ZM20.0508 11.9998C20.0508 7.79981 16.7221 4.3998 12.6101 4.3998C8.49811 4.3998 5.16937 7.79981 5.16937 11.9998C5.16937 16.1998 8.49811 19.5998 12.6101 19.5998C16.7221 19.5998 20.0508 16.1998 20.0508 11.9998Z" fill="#25314C" />
                        </G>
                    </Svg> */}
                {/* <Text className="ml-[22.65] flex-grow text-black text-base text-latoRegular">Ayuda</Text>
                    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="angle-right-small">
                            <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                        </G>
                    </Svg> */}
                {/* </TouchableOpacity> */}
                {/* <View className="w-full h-[1] ml-[44] mt-[8] mb-[14] bg-slate-100"></View> */}

                <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} className="flex-row w-full md:h-[54px] justify-between items-center">
                    <View className="w-[24] h-[24] md:w-[34] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="settings">
                                <Path id="settings_2" d="M12 8.24997C9.93205 8.24997 8.25005 9.93197 8.25005 12C8.25005 14.068 9.93205 15.75 12 15.75C14.068 15.75 15.75 14.068 15.75 12C15.75 9.93197 14.068 8.24997 12 8.24997ZM12 14.25C10.759 14.25 9.75005 13.241 9.75005 12C9.75005 10.759 10.759 9.74997 12 9.74997C13.241 9.74997 14.25 10.759 14.25 12C14.25 13.241 13.241 14.25 12 14.25ZM21.2081 13.953C20.5141 13.551 20.082 12.803 20.081 12C20.08 11.199 20.5091 10.452 21.2121 10.045C21.7271 9.74598 21.9031 9.08296 21.6051 8.56696L19.9331 5.68097C19.6351 5.16597 18.972 4.98898 18.456 5.28598C17.757 5.68898 16.8881 5.68898 16.1871 5.28198C15.4961 4.88098 15.0661 4.13598 15.0661 3.33698C15.0661 2.73798 14.578 2.25098 13.979 2.25098H10.024C9.42403 2.25098 8.93706 2.73798 8.93706 3.33698C8.93706 4.13598 8.50704 4.88097 7.81404 5.28397C7.11504 5.68897 6.24705 5.68996 5.54805 5.28696C5.03105 4.98896 4.36906 5.16698 4.07106 5.68198L2.39705 8.57098C2.09905 9.08598 2.27604 9.74796 2.79604 10.05C3.48904 10.451 3.92105 11.198 3.92305 11.999C3.92505 12.801 3.49504 13.55 2.79304 13.957C2.54304 14.102 2.36305 14.335 2.28905 14.615C2.21505 14.894 2.25306 15.185 2.39806 15.436L4.06905 18.32C4.36705 18.836 5.03005 19.015 5.54805 18.716C6.24705 18.313 7.11405 18.314 7.80305 18.713L7.80504 18.714C7.80804 18.716 7.81105 18.718 7.81505 18.72C8.50605 19.121 8.93504 19.866 8.93404 20.666C8.93404 21.265 9.42103 21.752 10.02 21.752H13.979C14.578 21.752 15.065 21.265 15.065 20.667C15.065 19.867 15.495 19.122 16.189 18.719C16.887 18.314 17.755 18.312 18.455 18.716C18.971 19.014 19.6331 18.837 19.9321 18.322L21.606 15.433C21.903 14.916 21.7261 14.253 21.2081 13.953ZM18.831 17.227C17.741 16.752 16.476 16.817 15.434 17.42C14.401 18.019 13.7191 19.078 13.5871 20.25H10.41C10.28 19.078 9.59603 18.017 8.56303 17.419C7.52303 16.816 6.25605 16.752 5.16905 17.227L3.89305 15.024C4.84805 14.321 5.42504 13.193 5.42104 11.993C5.41804 10.801 4.84204 9.68097 3.89204 8.97797L5.16905 6.77396C6.25705 7.24796 7.52405 7.18396 8.56605 6.57996C9.59805 5.98196 10.28 4.92198 10.412 3.75098H13.5871C13.7181 4.92298 14.4011 5.98197 15.4361 6.58197C16.475 7.18497 17.742 7.24896 18.831 6.77496L20.108 8.97797C19.155 9.67997 18.579 10.806 18.581 12.004C18.582 13.198 19.1581 14.32 20.1091 15.025L18.831 17.227Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                    <Text className="ml-[22.65] flex-grow text-black text-base md:text-[22px] text-latoRegular">Configuración</Text>
                    <View className="w-[25] h-[24] md:w-[35] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right-small">
                                <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                            </G>
                        </Svg>
                    </View>
                </TouchableOpacity>

                <View className="w-full h-[1] ml-[44] mt-[8] mb-[14] bg-slate-100"></View>
                <TouchableOpacity onPress={() => setInformacion(true)} className="flex-row w-full md:h-[54px] justify-between items-center">
                    <View className="w-[24] h-[24] md:w-[34] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="info-circle">
                                <Path id="info-circle_2" d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.899 2.75 2.75 6.899 2.75 12C2.75 17.101 6.899 21.25 12 21.25C17.101 21.25 21.25 17.101 21.25 12C21.25 6.899 17.101 2.75 12 2.75ZM12.75 16.5V11.929C12.75 11.515 12.414 11.179 12 11.179C11.586 11.179 11.25 11.515 11.25 11.929V16.5C11.25 16.914 11.586 17.25 12 17.25C12.414 17.25 12.75 16.914 12.75 16.5ZM13.02 8.5C13.02 7.948 12.573 7.5 12.02 7.5H12.01C11.458 7.5 11.0149 7.948 11.0149 8.5C11.0149 9.052 11.468 9.5 12.02 9.5C12.572 9.5 13.02 9.052 13.02 8.5Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                    <Text className="ml-[22.65] flex-grow text-black text-base md:text-[22px] text-latoRegular">Información</Text>
                    <View className="w-[25] h-[24] md:w-[35] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right-small">
                                <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                            </G>
                        </Svg>
                    </View>
                </TouchableOpacity>
                
                <View className="w-full h-[1] ml-[44] mt-[8] mb-[14] bg-slate-100"></View>
                {/* <TouchableOpacity className="flex-row w-full justify-between items-center">
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="bell-notification">
                            <Path id="bell-notification_2" d="M12.0059 21.75C11.0179 21.75 10.1289 21.237 9.62791 20.377C9.41991 20.019 9.54091 19.56 9.89891 19.352C10.2559 19.143 10.7159 19.264 10.9239 19.623C11.3819 20.408 12.6289 20.41 13.0879 19.623C13.2969 19.265 13.7569 19.145 14.1139 19.353C14.4719 19.561 14.5929 20.021 14.3839 20.379C13.8819 21.237 12.9939 21.75 12.0059 21.75ZM20.6769 18.325C20.8019 18.065 20.7669 17.757 20.5869 17.532C20.5689 17.509 18.7519 15.206 18.7519 12.501V10C18.7519 9.586 18.4159 9.25 18.0019 9.25C17.5879 9.25 17.2519 9.586 17.2519 10V12.5C17.2519 14.436 17.9999 16.158 18.6169 17.25H5.38791C6.00491 16.158 6.75291 14.436 6.75291 12.5V9C6.75291 6.105 9.10791 3.75 12.0029 3.75C12.4169 3.75 12.7529 3.414 12.7529 3C12.7529 2.586 12.4169 2.25 12.0029 2.25C8.28091 2.25 5.25291 5.278 5.25291 9V12.5C5.25291 15.189 3.43491 17.509 3.41691 17.532C3.23791 17.757 3.20292 18.066 3.32892 18.325C3.45392 18.584 3.71592 18.75 4.00392 18.75H20.0039C20.2889 18.75 20.5519 18.585 20.6769 18.325ZM19.7509 5C19.7509 3.484 18.5179 2.25 17.0009 2.25C15.4839 2.25 14.2509 3.484 14.2509 5C14.2509 6.516 15.4839 7.75 17.0009 7.75C18.5179 7.75 19.7509 6.516 19.7509 5ZM18.2509 5C18.2509 5.689 17.6899 6.25 17.0009 6.25C16.3119 6.25 15.7509 5.689 15.7509 5C15.7509 4.311 16.3119 3.75 17.0009 3.75C17.6899 3.75 18.2509 4.311 18.2509 5Z" fill="#25314C" />
                        </G>
                    </Svg>
                    <Text className="ml-[22.65] flex-grow text-black text-base text-latoRegular">Notificaciones</Text>
                    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="angle-right-small">
                            <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                        </G>
                    </Svg>
                </TouchableOpacity> */}
                {/* <View className="w-full h-[1] ml-[44] mt-[8] mb-[14] bg-slate-100"></View> */}
                <TouchableOpacity onPress={() => setTerminos(true)} className="flex-row w-full md:h-[54px] justify-between items-center">
                    <View className="w-[24] h-[24] md:w-[34] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="note-text">
                                <Path id="note-text_2" d="M17 21.75H7C4.582 21.75 3.25 20.418 3.25 18V6C3.25 3.582 4.582 2.25 7 2.25H17C19.418 2.25 20.75 3.582 20.75 6V18C20.75 20.418 19.418 21.75 17 21.75ZM7 3.75C5.423 3.75 4.75 4.423 4.75 6V18C4.75 19.577 5.423 20.25 7 20.25H17C18.577 20.25 19.25 19.577 19.25 18V6C19.25 4.423 18.577 3.75 17 3.75H7ZM16.75 12C16.75 11.586 16.414 11.25 16 11.25H8C7.586 11.25 7.25 11.586 7.25 12C7.25 12.414 7.586 12.75 8 12.75H16C16.414 12.75 16.75 12.414 16.75 12ZM13.75 16C13.75 15.586 13.414 15.25 13 15.25H8C7.586 15.25 7.25 15.586 7.25 16C7.25 16.414 7.586 16.75 8 16.75H13C13.414 16.75 13.75 16.414 13.75 16ZM16.75 8C16.75 7.586 16.414 7.25 16 7.25H8C7.586 7.25 7.25 7.586 7.25 8C7.25 8.414 7.586 8.75 8 8.75H16C16.414 8.75 16.75 8.414 16.75 8Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                    <Text className="ml-[22.65] flex-grow text-black text-base md:text-[22px] text-latoRegular">Términos y condiciones</Text>
                    <View className="w-[25] h-[24] md:w-[35] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right-small">
                                <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                            </G>
                        </Svg>
                    </View>
                </TouchableOpacity>
                <View className="w-full h-[1] ml-[44] mt-[8] mb-[14] bg-slate-100"></View>

                <TouchableOpacity onPress={() => setDeleteAccount(true)} className="flex-row w-full md:h-[54px] justify-between items-center">
                    <View className="w-[25] h-[24] md:w-[35] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right-small">
                                <Path d="M21 5.25H17.441C16.54 5.25 16.502 5.136 16.255 4.396L16.053 3.789C15.746 2.869 14.889 2.25 13.919 2.25H10.081C9.11099 2.25 8.253 2.868 7.947 3.789L7.745 4.396C7.498 5.137 7.46 5.25 6.559 5.25H3C2.586 5.25 2.25 5.586 2.25 6C2.25 6.414 2.586 6.75 3 6.75H4.298L5.065 18.249C5.213 20.474 6.57701 21.75 8.80701 21.75H15.194C17.423 21.75 18.787 20.474 18.936 18.249L19.703 6.75H21C21.414 6.75 21.75 6.414 21.75 6C21.75 5.586 21.414 5.25 21 5.25ZM9.37 4.263C9.473 3.956 9.75799 3.75 10.081 3.75H13.919C14.242 3.75 14.528 3.956 14.63 4.263L14.832 4.87C14.876 5.001 14.92 5.128 14.968 5.25H9.03C9.078 5.127 9.12301 5 9.16701 4.87L9.37 4.263ZM17.438 18.149C17.343 19.582 16.629 20.25 15.193 20.25H8.806C7.37 20.25 6.657 19.583 6.561 18.149L5.801 6.75H6.558C6.683 6.75 6.787 6.737 6.899 6.729C6.933 6.734 6.964 6.75 6.999 6.75H16.999C17.035 6.75 17.065 6.734 17.099 6.729C17.211 6.737 17.315 6.75 17.44 6.75H18.197L17.438 18.149ZM14.75 11V16C14.75 16.414 14.414 16.75 14 16.75C13.586 16.75 13.25 16.414 13.25 16V11C13.25 10.586 13.586 10.25 14 10.25C14.414 10.25 14.75 10.586 14.75 11ZM10.75 11V16C10.75 16.414 10.414 16.75 10 16.75C9.586 16.75 9.25 16.414 9.25 16V11C9.25 10.586 9.586 10.25 10 10.25C10.414 10.25 10.75 10.586 10.75 11Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                    <Text className="ml-[22.65] flex-grow text-black text-base md:text-[22px] text-latoRegular">Eliminar cuenta</Text>
                    <View className="w-[25] h-[24] md:w-[35] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right-small">
                                <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                            </G>
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <View className="w-full bg-white mt-[36] py-[14] pl-[15] pr-[19] rounded-xl">
                <TouchableOpacity className="flex-row w-full justify-between items-center">
                    <Text className="flex-grow text-black text-base text-latoRegular">Notificaciones</Text>
                    <ToggleSwitch value={isToggled} onToggle={setIsToggled} />
                </TouchableOp
                acity>
            </View> */}
            {deleteAccount &&

                <DeleteAccountModal onClose={() => setDeleteAccount(false)} />

            }
            {
                informacion &&
                <Informacion onClose={() => setInformacion(false)} />
            }
            {
                terminos &&
                <TerminosYCondiciones onClose={() => setTerminos(false)} />
            }

            <View className="w-full bg-white mt-[36] py-[14] px-1.5 rounded-xl">
                <TouchableOpacity onPress={async () => {
                    await signOut(auth)
                    await AsyncStorage.clear()
                    navigation.navigate('AuthScreen')
                }} className="flex-row w-full md:h-[54px] justify-between items-center">
                    <View className="w-[24] h-[24] md:w-[34] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="log-out">
                                <Path id="log-out_2" d="M15.75 17V18C15.75 20.418 14.418 21.75 12 21.75H6C3.582 21.75 2.25 20.418 2.25 18V6C2.25 3.582 3.582 2.25 6 2.25H12C14.418 2.25 15.75 3.582 15.75 6V7C15.75 7.414 15.414 7.75 15 7.75C14.586 7.75 14.25 7.414 14.25 7V6C14.25 4.423 13.577 3.75 12 3.75H6C4.423 3.75 3.75 4.423 3.75 6V18C3.75 19.577 4.423 20.25 6 20.25H12C13.577 20.25 14.25 19.577 14.25 18V17C14.25 16.586 14.586 16.25 15 16.25C15.414 16.25 15.75 16.586 15.75 17ZM21.692 12.287C21.768 12.104 21.768 11.897 21.692 11.714C21.654 11.622 21.599 11.539 21.53 11.47L18.53 8.47C18.237 8.177 17.762 8.177 17.469 8.47C17.176 8.763 17.176 9.23801 17.469 9.53101L19.189 11.251H8C7.586 11.251 7.25 11.587 7.25 12.001C7.25 12.415 7.586 12.751 8 12.751H19.189L17.469 14.471C17.176 14.764 17.176 15.239 17.469 15.532C17.615 15.678 17.807 15.752 17.999 15.752C18.191 15.752 18.383 15.679 18.529 15.532L21.529 12.532C21.599 12.461 21.654 12.378 21.692 12.287Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                    <Text className="ml-[22.65] flex-grow text-black text-base md:text-[22px] text-latoRegular">Cerrar Sesión</Text>
                    <View className="w-[25] h-[24] md:w-[35] md:h-[34]">
                        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right-small">
                                <Path id="angle-right-small_2" d="M10.549 16.7498C10.3616 16.7498 10.1742 16.6768 10.0316 16.5298C9.74564 16.2368 9.74564 15.7618 10.0316 15.4688L13.4187 11.9988L10.0316 8.52883C9.74564 8.23583 9.74564 7.7608 10.0316 7.4678C10.3176 7.1748 10.7813 7.1748 11.0673 7.4678L14.9718 11.4678C15.2578 11.7608 15.2578 12.2358 14.9718 12.5288L11.0673 16.5288C10.9238 16.6768 10.7364 16.7498 10.549 16.7498Z" fill="#BBC3CE" />
                            </G>
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}