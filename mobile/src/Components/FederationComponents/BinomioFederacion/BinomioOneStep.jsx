import React, { useState } from "react";
import {  ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ReusableTextInput from "../../Reusable/Inputs/ReusableTextInput";
import EmailInput from "../../Reusable/Inputs/EmailInput";
import PhoneInput from "../../Reusable/Inputs/PhoneInput";
import Dropdown from "../../Reusable/Inputs/Dropdown";
import ArrowFunction from "../../Reusable/ArrowFunction";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const diciplinas = ['Adiestramiento', 'Atalajes', 'Concurso completo', 'Endurance', "Para-ecuestre", "Pony & Iniciados", "Rienda", "Salto", "Volteo"]

export const BinomioOneStep = ({setSteps, jinete, setJinete, numeroCelular, setNumeroCelular, club, setClub}) => {
    
    const navigation = useNavigation()
    const revisar = useSelector((state) => state.ReducerCart.federarBinomio)
    

    const [selectedOption, setSelectedOption] = useState('Seleccionar una diciplina');

    const handleSelectOption = (option) => {
        setJinete({ ...jinete, disciplinaJinete: option });
        
    }
        
    return(
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">

            <ScrollView className="h-full">
                <View className="contenedorForm flex flex-col px-6">
                    <View className="header flex flex-row items-center mt-[27] justify-between">
                        <ArrowFunction onPress={() =>  setSteps(0)}/>
                        <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text>
                        <View className=" w-11 h-11"/>                        
                    </View>                    
                    
                    <Text className="jinete font-latoBold text-2xl leading-8 text-[#23254C] mt-[27]">Binomio</Text>
                    <Text className="paso1 font-latoRegular text-base leading-6 text-[#23254C] mb-[26px]">Paso 1/2: sobre el jinete</Text>                    
                    
                    <View className="nombre ">
                        <ReusableTextInput
                            value={jinete.nombreApellido}
                            setValue={(text) => setJinete({ ...jinete, nombreApellido: text })}
                            label={'Nombre y apellido'}
                        />
                    </View>

                    <View className="email mt-4">                        
                        <EmailInput
                            value={jinete.emailJinete}
                            setValue={(text) => setJinete({ ...jinete, emailJinete: text })}
                            label={'Email'}
                        />                        
                    </View>
                    
                    <View className="dni ">
                        <ReusableTextInput
                            value={jinete.dni}
                            setValue={(text) => setJinete({ ...jinete, dni: text })}
                            label={'Nª Dni'}
                            number={true}
                        />
                    </View>
                    
                    <View className="telefono ">
                        <PhoneInput value={numeroCelular} setValue={setNumeroCelular} />
                    </View>
            
                    <Dropdown  options={diciplinas} selectedOption={jinete.disciplinaJinete} onSelect={handleSelectOption} label={'Diciplina'}/>
            
                    <View className="flex items-center mt-14">
                        <Button onPress={() => setSteps(2)} label="Siguiente" extra="w-full mt-4"/> 
                    </View>
                </View>

            </ScrollView>
        </LinearGradient>
    )
}