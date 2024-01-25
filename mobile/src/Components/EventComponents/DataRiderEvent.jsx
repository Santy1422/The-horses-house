import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import EmailInput from "../Reusable/Inputs/EmailInput"
import ReusableTextInput from "../Reusable/Inputs/ReusableTextInput"
import Dropdown from "../Reusable/Inputs/Dropdown"
import CustomToggle from "../Reusable/CustomToggle"
import DropdownSearchAlt from "../Reusable/Inputs/DropdownSearchAlt"


const options = [
    'Primera',
    'Segunda',
    'Tercera',
    'Amateur',
    'Junior',
    'Pre-junior',
    'Children',
    'Escuela Mayor',
    'Escuela Menor',
    'Iniciados',
    'Ponys',
    'U-25'
];

export const DataRiderEvent = ({ setValue, name, email }) => {

    const [emailRider, setEmailRider] = useState(email)
    const [nameRider, setnameRider] = useState(name)
    const [selectedOption, setSelectedOption] = useState('Seleccionar categoría');
    const [isToggled, setIsToggled] = useState(false);


    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setTimeout(() => {
            setIsToggled(false)

        }, 1000)
    }

    const handleToggle = () => {
        setIsToggled(previousState => !previousState);
    }

    useEffect(() => {
        setValue(selectedOption)
    }, [selectedOption])


    return (
        <View className="Container flex pt-11 w-full mb-4 ">
            <TouchableOpacity onPress={() => setIsToggled(!isToggled)} className="ClubTitle flex-row justify-between items-center z-20">
                <View className="contenedorLabel flex flex-row gap-x-[16px]">
                    <Text className="DatosLabel font-latoBold text-lg leading-[25px] text-[#23254C] md:text-[34px] md:pt-[10px]">Sobre el jinete o amazonas</Text>
                    {emailRider && nameRider && selectedOption !== 'Seleccionar categoría' && <View className="px-2.5 py-0.5 bg-emerald-50 rounded-full justify-center items-center"><Text className="DatosLabel font-latoBold text-sm text-[#1C694E] md:text-[18px]">Completo</Text></View>}
                </View>
                <CustomToggle onToggle={handleToggle} value={isToggled} />
            </TouchableOpacity>
            {isToggled &&
                <View className=" flex">
                    <View>
                        <ReusableTextInput label={'Nombre y Apellido'} value={nameRider} />
                    </View>
                    <View className="EmailContainer mt-4 ">
                        <EmailInput setValue={setEmailRider} value={emailRider} label={'Correo electrónico'} />
                    </View>
                    <DropdownSearchAlt options={options} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Categoría'} />
                </View>
            }
        </View>
    )
}