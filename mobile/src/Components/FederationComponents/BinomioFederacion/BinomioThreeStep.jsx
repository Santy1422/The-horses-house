import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Path, Svg } from "react-native-svg"
import Button from "../../Reusable/Button";
import { useImage } from "../../../CustomHooks.jsx/useImage";
import FotoComponent from "../FotoComponent";
import Arrow from "../../Reusable/Arrow";
import ArrowFunction from "../../Reusable/ArrowFunction";
import { LinearGradient } from "expo-linear-gradient";

export const BinomioThreeStep = ({setSteps, steps, jinete, setJinete, caballo, setCaballo}) => {
  
   
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

    return(
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">

            <ScrollView className="scroll h-full">
                <View className="contenedorForm flex flex-col px-6">
                    <View className="header flex flex-row items-center mt-[27] justify-between">
                        <ArrowFunction onPress={()=> setSteps(2)}/>
                        <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text>
                        <View className=" w-11 h-11"/>                        
                    </View>
                    
                    <Text className="jinete font-latoBold text-2xl leading-8 text-[#23254C] mt-[27]">Para terminar...</Text>  
                                                             
                    <Text className="necesitamos mt-[22] font-latoRegular text-base leading-6 text-[#191720]">Necesitamos una foto de:</Text>
                    <Text className="necesitamos mt-[22] font-latoRegular text-base leading-6 text-[#191720]">- El frente y del dorso de su DNI.</Text>
                    {caballo.solicitaPasaporte === false && <Text className="necesitamos mt-[22] font-latoRegular text-base leading-6 text-[#191720]">- La página 1, 24 y 25 del pasaporte del caballo</Text>}
                        
                    
                    <Text className="recomendacion font-latoBold text-base leading-6 text-[#23254C] mt-[42px]">Te recomendamos:</Text>
                    
                    <View className="camara flex-row items-center w-full mt-[22px]">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <Path d="M21 7.29102H19.2967L18.7296 5.58659C18.3714 4.51326 17.3704 3.79102 16.2388 3.79102H11.7612C10.6296 3.79102 9.62855 4.51326 9.27039 5.58659L8.70329 7.29102H7C4.179 7.29102 2.625 8.84502 2.625 11.666V20.9993C2.625 23.8203 4.179 25.3743 7 25.3743H21C23.821 25.3743 25.375 23.8203 25.375 20.9993V11.666C25.375 8.84502 23.821 7.29102 21 7.29102ZM23.625 20.9993C23.625 22.8392 22.8398 23.6243 21 23.6243H7C5.16017 23.6243 4.375 22.8392 4.375 20.9993V11.666C4.375 9.82618 5.16017 9.04102 7 9.04102H9.33333C9.71017 9.04102 10.0437 8.79959 10.1639 8.44259L10.9318 6.13831C11.0508 5.78014 11.3844 5.53988 11.7612 5.53988H16.2388C16.6156 5.53988 16.9492 5.78014 17.0682 6.13831L17.8361 8.44145C17.9563 8.79845 18.2898 9.03988 18.6667 9.03988H21C22.8398 9.03988 23.625 9.82504 23.625 11.6649V20.9993ZM14 11.9577C11.5885 11.9577 9.625 13.92 9.625 16.3327C9.625 18.7453 11.5885 20.7077 14 20.7077C16.4115 20.7077 18.375 18.7453 18.375 16.3327C18.375 13.92 16.4115 11.9577 14 11.9577ZM14 18.9577C12.5533 18.9577 11.375 17.7805 11.375 16.3327C11.375 14.8848 12.5533 13.7077 14 13.7077C15.4467 13.7077 16.625 14.8848 16.625 16.3327C16.625 17.7805 15.4467 18.9577 14 18.9577ZM21.5833 12.2493C21.5833 12.8933 21.0607 13.416 20.4167 13.416C19.7727 13.416 19.25 12.8933 19.25 12.2493C19.25 11.6053 19.7727 11.0827 20.4167 11.0827C21.0607 11.0827 21.5833 11.6053 21.5833 12.2493Z" fill="#25314C"/>
                        </Svg>
                        <Text className="camara flex-1 font-latoRegular text-base leading-6 text-[#191720] ml-2 ">Asegurarse de que la cámara de su celular esté limpia</Text>
                    </View>

                    <View className="iluminacion flex-row items-center w-full mt-[22px]">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <Path d="M14 8.45833C10.9445 8.45833 8.45833 10.9445 8.45833 14C8.45833 17.0555 10.9445 19.5417 14 19.5417C17.0555 19.5417 19.5417 17.0555 19.5417 14C19.5417 10.9445 17.0555 8.45833 14 8.45833ZM14 17.7917C11.9093 17.7917 10.2083 16.0907 10.2083 14C10.2083 11.9093 11.9093 10.2083 14 10.2083C16.0907 10.2083 17.7917 11.9093 17.7917 14C17.7917 16.0907 16.0907 17.7917 14 17.7917ZM13.125 5.83333V3.5C13.125 3.017 13.517 2.625 14 2.625C14.483 2.625 14.875 3.017 14.875 3.5V5.83333C14.875 6.31633 14.483 6.70833 14 6.70833C13.517 6.70833 13.125 6.31633 13.125 5.83333ZM14.875 22.1667V24.5C14.875 24.983 14.483 25.375 14 25.375C13.517 25.375 13.125 24.983 13.125 24.5V22.1667C13.125 21.6837 13.517 21.2917 14 21.2917C14.483 21.2917 14.875 21.6837 14.875 22.1667ZM5.83333 14.875H3.5C3.017 14.875 2.625 14.483 2.625 14C2.625 13.517 3.017 13.125 3.5 13.125H5.83333C6.31633 13.125 6.70833 13.517 6.70833 14C6.70833 14.483 6.31633 14.875 5.83333 14.875ZM25.375 14C25.375 14.483 24.983 14.875 24.5 14.875H22.1667C21.6837 14.875 21.2917 14.483 21.2917 14C21.2917 13.517 21.6837 13.125 22.1667 13.125H24.5C24.983 13.125 25.375 13.517 25.375 14ZM5.95699 7.19365C5.61515 6.85182 5.61515 6.29768 5.95699 5.95585C6.29882 5.61401 6.85299 5.61401 7.19482 5.95585L8.84449 7.60551C9.18633 7.94735 9.18633 8.50148 8.84449 8.84332C8.67416 9.01365 8.45016 9.09999 8.22616 9.09999C8.00216 9.09999 7.77816 9.01482 7.60783 8.84332L5.95699 7.19365ZM22.043 20.8064C22.3848 21.1482 22.3848 21.7023 22.043 22.0442C21.8727 22.2145 21.6487 22.3008 21.4247 22.3008C21.2007 22.3008 20.9767 22.2157 20.8064 22.0442L19.1567 20.3945C18.8148 20.0527 18.8148 19.4985 19.1567 19.1567C19.4985 18.8148 20.0527 18.8148 20.3945 19.1567L22.043 20.8064ZM8.84449 19.1555C9.18633 19.4973 9.18633 20.0515 8.84449 20.3933L7.19482 22.043C7.02449 22.2133 6.80049 22.2997 6.57649 22.2997C6.35249 22.2997 6.12849 22.2145 5.95816 22.043C5.61633 21.7012 5.61633 21.147 5.95816 20.8052L7.60783 19.1555C7.9485 18.8137 8.50266 18.8137 8.84449 19.1555ZM19.1555 8.84449C18.8137 8.50266 18.8137 7.94849 19.1555 7.60665L20.8052 5.95699C21.147 5.61515 21.7012 5.61515 22.043 5.95699C22.3848 6.29882 22.3848 6.85299 22.043 7.19482L20.3933 8.84449C20.223 9.01483 19.999 9.10116 19.775 9.10116C19.551 9.10116 19.327 9.01483 19.1555 8.84449Z" fill="#25314C"/>
                        </Svg>
                        <Text className="iluminacion flex-1 font-latoRegular text-base leading-6 text-[#191720] ml-2 ">Buscar un lugar con buena iluminación</Text>
                    </View>
                
                    <View className="fondo flex-row items-center w-full mt-[22px]">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <Path d="M24.5 10.2083C24.017 10.2083 23.625 9.81633 23.625 9.33333V5.25C23.625 4.56283 23.4372 4.375 22.75 4.375H18.6667C18.1837 4.375 17.7917 3.983 17.7917 3.5C17.7917 3.017 18.1837 2.625 18.6667 2.625H22.75C24.3938 2.625 25.375 3.60617 25.375 5.25V9.33333C25.375 9.81633 24.983 10.2083 24.5 10.2083ZM4.375 9.33333V5.25C4.375 4.56283 4.56283 4.375 5.25 4.375H9.33333C9.81633 4.375 10.2083 3.983 10.2083 3.5C10.2083 3.017 9.81633 2.625 9.33333 2.625H5.25C3.60617 2.625 2.625 3.60617 2.625 5.25V9.33333C2.625 9.81633 3.017 10.2083 3.5 10.2083C3.983 10.2083 4.375 9.81633 4.375 9.33333ZM10.2083 24.5C10.2083 24.017 9.81633 23.625 9.33333 23.625H5.25C4.56283 23.625 4.375 23.4372 4.375 22.75V18.6667C4.375 18.1837 3.983 17.7917 3.5 17.7917C3.017 17.7917 2.625 18.1837 2.625 18.6667V22.75C2.625 24.3938 3.60617 25.375 5.25 25.375H9.33333C9.81633 25.375 10.2083 24.983 10.2083 24.5ZM25.375 22.75V18.6667C25.375 18.1837 24.983 17.7917 24.5 17.7917C24.017 17.7917 23.625 18.1837 23.625 18.6667V22.75C23.625 23.4372 23.4372 23.625 22.75 23.625H18.6667C18.1837 23.625 17.7917 24.017 17.7917 24.5C17.7917 24.983 18.1837 25.375 18.6667 25.375H22.75C24.3938 25.375 25.375 24.3938 25.375 22.75ZM17.605 9.72184C17.605 7.73851 15.9903 6.125 14.007 6.125C12.0236 6.125 10.4101 7.73851 10.4101 9.72184C10.4101 11.7052 12.0236 13.3187 14.007 13.3187C15.9903 13.3187 17.605 11.7063 17.605 9.72184ZM15.855 9.72184C15.855 10.7403 15.0255 11.5687 14.007 11.5687C12.9885 11.5687 12.1601 10.7403 12.1601 9.72184C12.1601 8.70334 12.9885 7.875 14.007 7.875C15.0255 7.875 15.855 8.70334 15.855 9.72184ZM20.3198 18.6806C20.3198 16.4768 19.0727 13.902 15.5552 13.902H12.4448C8.92732 13.902 7.68018 16.4768 7.68018 18.6806C7.68018 20.7106 8.85029 21.875 10.8908 21.875H17.1092C19.1497 21.875 20.3198 20.7106 20.3198 18.6806ZM15.5552 15.6532C18.2758 15.6532 18.5698 17.7706 18.5698 18.6818C18.5698 19.7481 18.1884 20.1261 17.1092 20.1261H10.8908C9.81162 20.1261 9.43018 19.7481 9.43018 18.6818C9.43018 17.7718 9.72416 15.6532 12.4448 15.6532H15.5552Z" fill="#25314C"/>
                        </Svg>
                        <Text className="fondo flex-1 font-latoRegular text-base leading-6 text-[#191720] ml-2 ">Utilizar un fondo uniforme</Text>
                    </View>

                    <View className="reflejos flex-row items-center w-full mt-[22px]">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <Path d="M14 25.375C13.6092 25.375 13.2662 25.116 13.1588 24.7403L12.25 21.5588C11.4415 18.7297 9.26916 16.5573 6.44116 15.75L3.25967 14.8412C2.88401 14.7338 2.625 14.3908 2.625 14C2.625 13.6092 2.88401 13.2662 3.25967 13.1588L6.44116 12.25C9.27033 11.4415 11.4415 9.27033 12.25 6.44116L13.1588 3.25967C13.2662 2.88401 13.6092 2.625 14 2.625C14.3908 2.625 14.7338 2.88401 14.8412 3.25967L15.75 6.44116C16.5585 9.27033 18.7308 11.4427 21.5588 12.25L24.7403 13.1588C25.116 13.2662 25.375 13.6092 25.375 14C25.375 14.3908 25.116 14.7338 24.7403 14.8412L21.5588 15.75C18.7297 16.5585 16.5585 18.7297 15.75 21.5588L14.8412 24.7403C14.7338 25.116 14.3908 25.375 14 25.375ZM6.68501 14L6.92185 14.0677C10.3355 15.043 12.957 17.6645 13.9335 21.0793L14.0012 21.315L14.0688 21.0793C15.0453 17.6645 17.6657 15.0442 21.0805 14.0677L21.315 14L21.0781 13.9323C17.6645 12.957 15.043 10.3355 14.0665 6.92067L14 6.68615L13.9323 6.92185C12.9558 10.3367 10.3355 12.957 6.92067 13.9335L6.68501 14Z" fill="#25314C"/>
                        </Svg>
                        <Text className="reflejos flex-1 font-latoRegular text-base leading-6 text-[#191720] ml-2 ">Evitar reflejos o brillos</Text>
                    </View>
                    
                    <View>                   
                        <View  className="flex flex-col items-center mt-[115px]">
                            <Button onPress={() => alert('Funcion no implementada')} label="Sacar foto" extra="w-full " />
                            <Button onPress={() => setSteps(2)} label="No puedo en este momento" extra="w-full mt-4 " type="secondary"/> 

                        </View>
                        <FotoComponent modalVisible={modalVisible} setModalVisible={setModalVisible} jinete={jinete} setJinete={setJinete} caballo={caballo} setCaballo={setCaballo}/>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>    
    )
}