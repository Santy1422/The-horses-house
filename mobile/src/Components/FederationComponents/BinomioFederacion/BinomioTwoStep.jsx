import React, { useEffect, useState } from "react";
import {  ScrollView, Text,  TouchableOpacity, View } from "react-native"
import {  Path, Svg } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux";
import EmailInput from "../../Reusable/Inputs/EmailInput";
import PhoneInput from "../../Reusable/Inputs/PhoneInput";
import Dropdown from "../../Reusable/Inputs/Dropdown";
import ArrowFunction from "../../Reusable/ArrowFunction";
import DropdownPics from "../../Reusable/Inputs/DropdownPics";
import RadioButton from "../../Reusable/RadioButton";
import ModalBinomioEnvio from "./ModalBinomioEnvio";
import ModalBinomioEnvioConfirmacion from "./ModalBinomioEnvioConfirmacion";
import ModalBinomioPasaporteChip from "./ModalBinomioPasaporteChip";
import { LinearGradient } from "expo-linear-gradient";

const diciplinas = ['Adiestramiento', 'Atalajes', 'Concurso completo', 'Endurance', "Para-ecuestre", "Pony & Iniciados", "Rienda", "Salto", "Volteo"]
const clubs = ['Hipico Argentino', 'otro club']

export const BinomioTwoStep = ({setSteps, caballo, setCaballo, jinete, numeroCelular, setNumeroCelular, receptorCredencial, setReceptorCredencial }) => {
    const navigation = useNavigation()
    const myHorse = useSelector((state) => state.ReducerHorse.myHorse)
    const [horseAndPics, setHorseAndPics] = useState(null)    
    const [selectedOption, setSelectedOption] = useState('Seleccionar una diciplina');
    const [selectedClub, setSelectedClub] = useState('Buscar club o ubicación');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalEnvioDatos, setModalEnvioDatos] = useState(false)
    const [modalEnvioConfirmacion , setModalEnvioConfirmacion ] = useState(false)
    
    
    useEffect(() => {
        const caballos = myHorse.map(caballo => {
            return (
                {
                    name: caballo.name,
                    pics: caballo.horsePic                    
                }
            )
        })
        setHorseAndPics(caballos)                
    },[myHorse])


    const handleSelectOption = (option) => {
        setCaballo({ ...caballo, disciplinaCaballo: option });
        setSelectedOption(option)
    }
    const handleSelectClub = (option) => {
        setCaballo({...caballo, club: option});
        setSelectedClub(option)
    }

    const handleModal = () => {
        if (caballo.solicitaPasaporte || caballo.solicitaChip) {
            setModalVisible(true)
            return
        }
        setSteps(3)    
    }


    
    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">

            <ScrollView className="h-full">
                <View className="contenedorForm flex flex-col px-6">
                    <View className="header flex flex-row items-center mt-[27] justify-between">
                        <ArrowFunction onPress={()=> setSteps(1)} />
                        <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text>
                        <View className=" w-11 h-11"/>                        
                    </View>
                    
                    {/* <TouchableOpacity className="absolute top-2 left-2" onPress={() =>  setSteps(0)}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C"/>
                        </Svg>
                    </TouchableOpacity> */}
                    <Text className="caballo font-latoBold text-2xl leading-8 text-[#23254C] mt-[27]">Binomio</Text>
                    <Text className="paso1 font-latoRegular text-base leading-6 text-[#23254C] mb-[26px]">Paso 2/2: sobre el caballo</Text>                    
                    
                    <View className="nombre ">
                        <DropdownPics label={'Caballo a federar'} options={horseAndPics} onSelect={(option)=> setCaballo({...caballo, nombreCaballo: option})} selectedOption={caballo.nombreCaballo}/>
                    </View>

                    <View className="primeraVez? flex flex-col gap-y-4 mt-4 ">
                        <Text className="label font-latoRegular text-base leading-6">Primera ves en federarse?</Text>
                        <View className="botones flex flex-row h-[52px] gap-x-4">
                            <TouchableOpacity className="si bg-white flex flex-row p-4 justify-start items-center flex-1 rounded border border-[#BEBDBD]" onPress={()=> setCaballo({...caballo, primeraVez: true})}  >
                                <RadioButton selected={caballo.primeraVez ? true : false }/>
                                <Text className="si font-latoRegular text-sm leading-5 text-[#191720] ml-2">Si</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="no bg-white flex flex-row p-4 justify-start items-center flex-1 rounded border border-[#BEBDBD]" onPress={()=> setCaballo({...caballo, primeraVez: false})} >
                                <RadioButton selected={!caballo.primeraVez ? true : false }/>        
                                <Text className="no font-latoRegular text-sm leading-5 text-[#191720] ml-2">No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                                
                    <Dropdown options={diciplinas} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Diciplina del caballo'}/>

                    <Dropdown options={clubs} selectedOption={selectedClub} onSelect={handleSelectClub} label={'Club'}/>

                    <Text className="opcional font-latoRegular text-base leading-6 text-[#23254C] mt-[42px] mb-4">Adicionales (opcional)</Text>
                    
                    <View className="adicionales flex flex-col gap-y-[6px]">
                        <TouchableOpacity className="pasaporte bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setCaballo({...caballo, solicitaPasaporte: !caballo.solicitaPasaporte})}>
                            <View className="iconoLabel flex flex-row items-center">
                                <View className="icono h-8 w-8 justify-center">
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <Path d="M11.3333 1.5H5C3.388 1.5 2.5 2.388 2.5 4V4.83333H2C1.724 4.83333 1.5 5.05733 1.5 5.33333C1.5 5.60933 1.724 5.83333 2 5.83333H2.5V10.1667H2C1.724 10.1667 1.5 10.3907 1.5 10.6667C1.5 10.9427 1.724 11.1667 2 11.1667H2.5V12C2.5 13.612 3.388 14.5 5 14.5H11.3333C12.9453 14.5 13.8333 13.612 13.8333 12V4C13.8333 2.388 12.9453 1.5 11.3333 1.5ZM12.8333 12C12.8333 13.0513 12.3847 13.5 11.3333 13.5H5C3.94867 13.5 3.5 13.0513 3.5 12V11.1667H4C4.276 11.1667 4.5 10.9427 4.5 10.6667C4.5 10.3907 4.276 10.1667 4 10.1667H3.5V5.83333H4C4.276 5.83333 4.5 5.60933 4.5 5.33333C4.5 5.05733 4.276 4.83333 4 4.83333H3.5V4C3.5 2.94867 3.94867 2.5 5 2.5H11.3333C12.3847 2.5 12.8333 2.94867 12.8333 4V12ZM10 4.16667H6.66667C5.94733 4.16667 5.5 4.61333 5.5 5.33333V7.33333C5.5 8.05333 5.94733 8.5 6.66667 8.5H10C10.7193 8.5 11.1667 8.05333 11.1667 7.33333V5.33333C11.1667 4.61333 10.7193 4.16667 10 4.16667ZM10.1667 7.33333C10.1667 7.43733 10.1473 7.47603 10.1486 7.47803C10.1433 7.48069 10.104 7.5 10 7.5H6.66667C6.566 7.5 6.52596 7.48202 6.52262 7.48202C6.52196 7.48202 6.52197 7.48202 6.52197 7.48202C6.51931 7.47602 6.5 7.43733 6.5 7.33333V5.33333C6.5 5.22933 6.5194 5.19064 6.51807 5.18864C6.5234 5.18597 6.56267 5.16667 6.66667 5.16667H10C10.1213 5.16667 10.1447 5.18532 10.1447 5.18465C10.1474 5.19065 10.1667 5.22933 10.1667 5.33333V7.33333Z" fill="#25314C"/>
                                    </Svg>
                                </View>
                                <Text className="label font-latoRegular leading-5 text-[#23254C] ">Solicitar pasaporte</Text>
                            </View>
                            <RadioButton selected={caballo.solicitaPasaporte} />                            
                        </TouchableOpacity>
                        <TouchableOpacity className="chip bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setCaballo({...caballo, solicitaChip: !caballo.solicitaChip})}>
                            <View className="iconoLabel flex flex-row items-center">
                                <View className="icono h-8 w-8 justify-center">
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <Path d="M11.3333 1.5H5C3.388 1.5 2.5 2.388 2.5 4V4.83333H2C1.724 4.83333 1.5 5.05733 1.5 5.33333C1.5 5.60933 1.724 5.83333 2 5.83333H2.5V10.1667H2C1.724 10.1667 1.5 10.3907 1.5 10.6667C1.5 10.9427 1.724 11.1667 2 11.1667H2.5V12C2.5 13.612 3.388 14.5 5 14.5H11.3333C12.9453 14.5 13.8333 13.612 13.8333 12V4C13.8333 2.388 12.9453 1.5 11.3333 1.5ZM12.8333 12C12.8333 13.0513 12.3847 13.5 11.3333 13.5H5C3.94867 13.5 3.5 13.0513 3.5 12V11.1667H4C4.276 11.1667 4.5 10.9427 4.5 10.6667C4.5 10.3907 4.276 10.1667 4 10.1667H3.5V5.83333H4C4.276 5.83333 4.5 5.60933 4.5 5.33333C4.5 5.05733 4.276 4.83333 4 4.83333H3.5V4C3.5 2.94867 3.94867 2.5 5 2.5H11.3333C12.3847 2.5 12.8333 2.94867 12.8333 4V12ZM10 4.16667H6.66667C5.94733 4.16667 5.5 4.61333 5.5 5.33333V7.33333C5.5 8.05333 5.94733 8.5 6.66667 8.5H10C10.7193 8.5 11.1667 8.05333 11.1667 7.33333V5.33333C11.1667 4.61333 10.7193 4.16667 10 4.16667ZM10.1667 7.33333C10.1667 7.43733 10.1473 7.47603 10.1486 7.47803C10.1433 7.48069 10.104 7.5 10 7.5H6.66667C6.566 7.5 6.52596 7.48202 6.52262 7.48202C6.52196 7.48202 6.52197 7.48202 6.52197 7.48202C6.51931 7.47602 6.5 7.43733 6.5 7.33333V5.33333C6.5 5.22933 6.5194 5.19064 6.51807 5.18864C6.5234 5.18597 6.56267 5.16667 6.66667 5.16667H10C10.1213 5.16667 10.1447 5.18532 10.1447 5.18465C10.1474 5.19065 10.1667 5.22933 10.1667 5.33333V7.33333Z" fill="#25314C"/>
                                    </Svg>
                                </View>
                                <Text className="label font-latoRegular leading-5 text-[#23254C] ">Solicitar chip</Text>
                            </View>
                            <RadioButton selected={caballo.solicitaChip} />                            
                        </TouchableOpacity>

                    </View>


                    <View className="flex items-center mt-[42px] mb-[38px]">
                        <Button onPress={handleModal} label="Siguiente" extra=" w-full "/> 
                    </View>
                    <ModalBinomioPasaporteChip modalVisible={modalVisible} setModalVisible={setModalVisible} receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} setModalEnvioDatos={setModalEnvioDatos} setSteps={setSteps} caballo={caballo} jinete={jinete}/>    
                    <ModalBinomioEnvio modalEnvioDatos={modalEnvioDatos} setModalEnvioDatos={setModalEnvioDatos} receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} setModalVisible={setModalVisible} setModalEnvioConfirmacion={setModalEnvioConfirmacion}/>
                    <ModalBinomioEnvioConfirmacion setModalEnvioConfirmacion={setModalEnvioConfirmacion} modalEnvioConfirmacion={modalEnvioConfirmacion} caballo={caballo} receptorCredencial={receptorCredencial} jinete={jinete} setSteps={setSteps}/>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}