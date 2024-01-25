import { View, Text, ScrollView } from "react-native"
import EmailInput from "../../Reusable/Inputs/EmailInput"
import ArrowFunction from "../../Reusable/ArrowFunction"
import Dropdown from "../../Reusable/Inputs/Dropdown"
import { useState } from "react"
import ReusableTextInput from "../../Reusable/Inputs/ReusableTextInput"
import PhoneInput from "../../Reusable/Inputs/PhoneInput"
import { useFederation } from "../../../CustomHooks.jsx/useFederation"
import Button from "../../Reusable/Button"
import { setearClub } from "../../../Redux/ReducerCart"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

const diciplinas = ['Especial', 'Primera', 'Segunda', 'Tercera', 'Cuarte' , 'Adherente deportivo (no organiza concursos)', "Iniciados y pony (organiza concursos)", "Iniciados y pony ( no organiza concursos)", "Endurance novicios y nacionales", 'Para-ecuestre (Organiza y no organiza concursos)' ]

const Club = ({setSteps}) => {

    const [selectedOption, setSelectedOption] = useState('Seleccionar una diciplina');
    const {club, setClub} = useFederation()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    

    const handleSelectOption = (option) => {
        setClub({ ...club, categoria: option });
        setSelectedOption(option)
    }

    const confirmarEnRedux = () => {       
        
        dispatch(setearClub({club, precio: 10000}))
        // navigation.navigate('CheckoutScreen')        
         alert('Funcion no implementada')

    }   

    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full px-6 h-full">
            <ScrollView className="scroll flex flex-col ">
                <View className="header flex flex-row items-center mt-[20] justify-between">
                    <ArrowFunction onPress={()=> setSteps(0)} />
                    <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text>
                    <View className=" w-11 h-11"/>                        
                </View>

                <Text className="club font-latoBold text-2xl text-[#23254C] mt-8 mb-[10px]">Club</Text>

                <View className="nombre">
                    <ReusableTextInput value={club.nombre} setValue={(text) =>  setClub({...club, nombre: text})} label={'Nombre del club'}/>
                </View>

                <View className="categoria">
                    <Dropdown options={diciplinas} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Categoría'}/>
                </View>

                <View className="email mt-4">
                    <EmailInput label={'Email'} value={club.email} setValue={(email) =>  setClub({...club, email: email})}/>
                </View>

                <View className="telefono">
                    <PhoneInput value={club.telefono} setValue={(telefono) => setClub({...club, telefono: telefono})} />
                </View>

                <View className="flex items-center mt-[180px] ">
                    <Button onPress={confirmarEnRedux} label="Siguiente" extra=" w-full "/> 
                </View>

            </ScrollView>

        </LinearGradient>
    )
}

export default Club