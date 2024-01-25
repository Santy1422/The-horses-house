import { View, Text  } from "react-native"
import Button from "../../Reusable/Button"
import DropdownPics from "../../Reusable/Inputs/DropdownPics"
import { useSelector, useDispatch } from "react-redux"
import { useFederation } from "../../../CustomHooks.jsx/useFederation"
import ReusableTextInput from "../../Reusable/Inputs/ReusableTextInput"
import { useState, useEffect } from "react"
import { Svg, Path } from "react-native-svg"
import EmailInput from "../../Reusable/Inputs/EmailInput"
import PhoneInput from "../../Reusable/Inputs/PhoneInput"
import Dropdown from "../../Reusable/Inputs/Dropdown"
import { useNavigation } from "@react-navigation/native"
import { setearCaballo } from "../../../Redux/ReducerCart"

const diciplinas = ['Adiestramiento', 'Atalajes', 'Concurso completo', 'Endurance', "Para-ecuestre", "Pony & Iniciados", "Rienda", "Salto", "Volteo"]

const RenovacionCaballo = ({mostrar}) => {
    
    const myHorse = useSelector((state) => state.ReducerHorse.myHorse)
    const [horseAndPics, setHorseAndPics] = useState(null)
    const {caballo, setCaballo, numeroCelular, setNumeroCelular} = useFederation()
    const [selectedOption, setSelectedOption] = useState('Seleccionar una diciplina');
    const navigation = useNavigation()
    const dispatch = useDispatch()
    

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
        setCaballo({ ...caballo, disciplinaCaballo: option })
        setSelectedOption(option)
        
    }

    const guardarEnRedux = () => {
        caballo.renovacion = true                
        dispatch(setearCaballo(caballo))
        navigation.navigate('CheckoutScreen')   
            
    }
    
    return (
        <View className="main container">
            <View className="contenedorForm flex flex-col " >
                <View className="jinete flex flex-row px-[10] gap-x-[6] mt-[27]">
                    <Text className="jinete font-latoBold text-sm  text-[#23254C] ">{mostrar.CheckoutTodas? 'Renovación' : 'Caballo'}</Text>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <Path d="M14.5 4.82129C14.5007 4.33062 14.3101 3.86929 13.9627 3.52263L12.4774 2.03736C12.13 1.69069 11.67 1.49934 11.1787 1.5C10.688 1.50067 10.2273 1.69263 9.882 2.03996L1.646 10.314C1.552 10.408 1.5 10.5347 1.5 10.6667V14C1.5 14.276 1.724 14.5 2 14.5H5.33333C5.46533 14.5 5.5927 14.4473 5.68603 14.3547L13.96 6.118C14.308 5.77267 14.4993 5.31196 14.5 4.82129ZM5.12663 13.5007H2.5V10.874L8.49528 4.85132L11.1501 7.50529L5.12663 13.5007ZM13.2547 5.41L11.8587 6.79997L9.20068 4.14266L10.5907 2.74601C10.748 2.58801 10.9573 2.50132 11.1807 2.50065H11.1813C11.404 2.50065 11.6133 2.5873 11.7713 2.74463L13.2567 4.22998C13.414 4.38798 13.5007 4.59731 13.5007 4.82064C13.5 5.04331 13.4127 5.25266 13.2547 5.41ZM14.5 14.0007C14.5 14.2767 14.276 14.5007 14 14.5007H9.33333C9.05733 14.5007 8.83333 14.2767 8.83333 14.0007C8.83333 13.7247 9.05733 13.5007 9.33333 13.5007H14C14.276 13.5007 14.5 13.7247 14.5 14.0007Z" fill="#25314C"/>
                    </Svg>
                </View>

                <View className="nombre ">
                    <DropdownPics label={'Caballo a federar'} options={horseAndPics} onSelect={(option)=> setCaballo({...caballo, nombreCaballo: option})} selectedOption={caballo.nombreCaballo}/>
                </View>

                <View className="numeroFederacion ">
                        <ReusableTextInput
                            value={caballo.numeroFederacionNacional}
                            setValue={(text) => setCaballo({ ...caballo, numeroFederacionNacional: text })}
                            label={'Número de Federación Nacional'}
                        />
                    </View>

                {!mostrar.CheckoutTodas && <View className="email mt-4">
                    <EmailInput
                        setValue={(text) => setCaballo({ ...caballo, emailOwner: text })}
                        label={'Email'}
                    />
                </View>}
          

                {!mostrar.CheckoutTodas && <View className="telefono ">
                    <PhoneInput value={numeroCelular} setValue={setNumeroCelular} />
                </View>}
                <View className={`disciplina ${mostrar.CheckoutTodas? 'mt-[40]' : ''}`}>
                    <Dropdown  options={diciplinas} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Diciplina'}/>

                </View>

            </View>

            <View className={`flex items-center mt-10 ${mostrar.CheckoutTodas? ' mt-[200]' : ''}`}>
                <Button onPress={guardarEnRedux} label="Continuar con el pago" extra="w-full mt-4"/>
            </View>
        </View>
    )
}

export default RenovacionCaballo