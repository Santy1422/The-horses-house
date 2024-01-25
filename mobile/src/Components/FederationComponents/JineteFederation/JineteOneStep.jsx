import React, { useState } from "react";
import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ReusableTextInput from "../../Reusable/Inputs/ReusableTextInput";
import EmailInput from "../../Reusable/Inputs/EmailInput";
import PhoneInput from "../../Reusable/Inputs/PhoneInput";
import Dropdown from "../../Reusable/Inputs/Dropdown";
import ArrowFunction from "../../Reusable/ArrowFunction";
import { LinearGradient } from "expo-linear-gradient";

export const JineteOneStep = ({setSteps, jinete, setJinete, numeroCelular, setNumeroCelular, club, setClub}) => {
    
    const navigation = useNavigation()

    const updateValues = (campo, valor) => {
        setJinete(prevJinete => ({
            ...prevJinete,
            [campo]: valor,
        }));}
    

const [selectedOption, setSelectedOption] = useState('Seleccionar una diciplina');
const [selectedClub, setSelectedClub] = useState('Buscar club o ubicación');

const diciplinas = ['Adiestramiento', 'Atalajes', 'Concurso completo', 'Endurance', "Para-ecuestre", "Pony & Iniciados", "Rienda", "Salto", "Volteo"]
const clubs = ['Hipico Argentino', 'otro club']

  const handleSelectOption = (option) => {
    setJinete({ ...jinete, disciplinaJinete: option });
}
const handleSelectClub = (option) => {
    setClub(option);
}
    return(
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">

            <ScrollView className="h-full">
                <View className="contenedorForm flex flex-col px-6">
                    <View className="header flex flex-row items-center mt-[27] justify-between">
                        <ArrowFunction onPress={()=> setSteps(0)} />
                        <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text>
                        <View className=" w-11 h-11"/>                        
                    </View>
                    
                    {/* <TouchableOpacity className="absolute top-2 left-2" onPress={() =>  setSteps(0)}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C"/>
                        </Svg>
                    </TouchableOpacity> */}
                    <Text className="jinete font-latoBold text-2xl leading-8 text-[#23254C] mt-[27]">Jinete</Text>                    
                    
                    <View className="nombre ">
                        <ReusableTextInput
                            value={jinete.nombreApellido}
                            setValue={(text) => setJinete({ ...jinete, nombreApellido: text })}
                            label={'Nombre y apellido'}
                        />
                    </View>

                    <View className="email mt-4">                        
                        <EmailInput
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
            
                    <Dropdown options={diciplinas} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Diciplina'}/>

                    <Dropdown options={clubs} selectedOption={selectedClub} onSelect={handleSelectClub} label={'Club'}/>

                </View>

                <View className="flex items-center mt-10">
                    <Button onPress={() => setSteps(2)} label="Siguiente" extra="w-auto h-12 mt-4"/> 
                </View>

            </ScrollView>
        </LinearGradient>
    )
}