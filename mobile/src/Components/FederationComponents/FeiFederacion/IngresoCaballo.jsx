import { View, Text, TouchableOpacity  } from "react-native"
import Button from "../../Reusable/Button"
import DropdownPics from "../../Reusable/Inputs/DropdownPics"
import { useSelector, useDispatch } from "react-redux"
import { useFederation } from "../../../CustomHooks.jsx/useFederation"
import { useState, useEffect } from "react"
import { Svg, Path } from "react-native-svg"
import EmailInput from "../../Reusable/Inputs/EmailInput"
import PhoneInput from "../../Reusable/Inputs/PhoneInput"
import Dropdown from "../../Reusable/Inputs/Dropdown"
import { useNavigation } from "@react-navigation/native"
import { setearCaballo } from "../../../Redux/ReducerCart"


const diciplinas = ['Adiestramiento', 'Atalajes', 'Concurso completo', 'Endurance', "Para-ecuestre", "Pony & Iniciados", "Rienda", "Salto", "Volteo"]
const clubs = ['Hipico Argentino', 'otro club']

const IngresoCaballo = ({mostrar, setMostrar, chip, pasaporte, receptorCredencial}) => {
    
    const myHorse = useSelector((state) => state.ReducerHorse.myHorse)
    const [horseAndPics, setHorseAndPics] = useState(null)
    const {caballo, setCaballo, numeroCelular, setNumeroCelular} = useFederation()
    const [selectedOption, setSelectedOption] = useState('Seleccionar una diciplina');
    const [selectedClub, setSelectedClub] = useState('Buscar club o ubicación');

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
        const setear = {
            ...caballo,
            solicitaPasaporte: pasaporte,
            solicitaChip: chip
        }        
        
        if (!mostrar.personalmente && !mostrar.correo) (caballo.ingreso = true)                
        if (!mostrar.personalmente && !mostrar.correo) setMostrar({...mostrar, Caballo: {...mostrar.Caballo, modal: false, renovacion: false, ingreso: false, foto: true }, Opciones: false })
        if (mostrar.personalmente || mostrar.correo) dispatch(setearCaballo({caballo: setear, receptorCredencial}))   
        if (mostrar.personalmente || mostrar.correo) {
            // navigation.navigate('CheckoutScreen')
            alert('Funcion no implementada')

        }
    }

    const handleSelectClub = (option) => {
        setCaballo({...caballo, club: option});
        setSelectedClub(option)
    }
    
    return (
        <View className="main container">
            <View className="contenedorForm flex flex-col " >
                {mostrar && (!mostrar.personalmente && !mostrar.correo ) && <View className="jinete flex flex-row px-[10] gap-x-[6] mt-[27]">
                    <Text className="jinete font-latoBold text-sm  text-[#23254C] ">{mostrar && mostrar.CheckoutTodas? 'Ingreso' : 'Caballo'}</Text>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <Path d="M14.5 4.82129C14.5007 4.33062 14.3101 3.86929 13.9627 3.52263L12.4774 2.03736C12.13 1.69069 11.67 1.49934 11.1787 1.5C10.688 1.50067 10.2273 1.69263 9.882 2.03996L1.646 10.314C1.552 10.408 1.5 10.5347 1.5 10.6667V14C1.5 14.276 1.724 14.5 2 14.5H5.33333C5.46533 14.5 5.5927 14.4473 5.68603 14.3547L13.96 6.118C14.308 5.77267 14.4993 5.31196 14.5 4.82129ZM5.12663 13.5007H2.5V10.874L8.49528 4.85132L11.1501 7.50529L5.12663 13.5007ZM13.2547 5.41L11.8587 6.79997L9.20068 4.14266L10.5907 2.74601C10.748 2.58801 10.9573 2.50132 11.1807 2.50065H11.1813C11.404 2.50065 11.6133 2.5873 11.7713 2.74463L13.2567 4.22998C13.414 4.38798 13.5007 4.59731 13.5007 4.82064C13.5 5.04331 13.4127 5.25266 13.2547 5.41ZM14.5 14.0007C14.5 14.2767 14.276 14.5007 14 14.5007H9.33333C9.05733 14.5007 8.83333 14.2767 8.83333 14.0007C8.83333 13.7247 9.05733 13.5007 9.33333 13.5007H14C14.276 13.5007 14.5 13.7247 14.5 14.0007Z" fill="#25314C"/>
                    </Svg>
                </View>}

                {mostrar && mostrar.correo && <View className="dirreccionEnvio border border-[#D1DADA] rounded px-4 py-[22px] mt-[24px] mb-[12px]">
                    <Text className="label font-latoRegular text-xs leading-[18px] text-[#23254C] mb-[14px] items-center">El chip y/o pasaporte se enviará a:</Text>
                    <View className="direccionEditar flex flex-row justify-between items-center">
                        <View className="direccion flex flex-row">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <Path d="M9.70166 1.6875C6.08291 1.6875 3.13916 4.63125 3.13916 8.25C3.13916 12.0885 6.6619 14.415 8.9929 15.9547L9.38966 16.218C9.48416 16.281 9.59291 16.3125 9.70166 16.3125C9.81041 16.3125 9.91916 16.281 10.0137 16.218L10.4104 15.9547C12.7414 14.415 16.2642 12.0885 16.2642 8.25C16.2642 4.63125 13.3204 1.6875 9.70166 1.6875ZM9.79091 15.0157L9.70166 15.0751L9.61241 15.0157C7.35491 13.5247 4.26416 11.4832 4.26416 8.25C4.26416 5.2515 6.70316 2.8125 9.70166 2.8125C12.7002 2.8125 15.1392 5.2515 15.1392 8.25C15.1392 11.4832 12.0477 13.5255 9.79091 15.0157ZM9.70166 5.8125C8.35766 5.8125 7.26416 6.906 7.26416 8.25C7.26416 9.594 8.35766 10.6875 9.70166 10.6875C11.0457 10.6875 12.1392 9.594 12.1392 8.25C12.1392 6.906 11.0457 5.8125 9.70166 5.8125ZM9.70166 9.5625C8.97791 9.5625 8.38916 8.97375 8.38916 8.25C8.38916 7.52625 8.97791 6.9375 9.70166 6.9375C10.4254 6.9375 11.0142 7.52625 11.0142 8.25C11.0142 8.97375 10.4254 9.5625 9.70166 9.5625Z" fill="#23254C"/>
                            </Svg>
                            <View className="ubicacion flex flex-row ml-2">
                                <Text>{receptorCredencial.domicilio},</Text>
                                <Text> {receptorCredencial.localidad},</Text>
                                <Text> {receptorCredencial.codigopostal}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setMostrar({...mostrar, correo: false, modalCorreo: true})}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <Path d="M15.2012 4.82129C15.2018 4.33062 15.0112 3.86929 14.6639 3.52263L13.1785 2.03736C12.8312 1.69069 12.3712 1.49934 11.8799 1.5C11.3892 1.50067 10.9285 1.69263 10.5832 2.03996L2.34717 10.314C2.25317 10.408 2.20117 10.5347 2.20117 10.6667V14C2.20117 14.276 2.42517 14.5 2.70117 14.5H6.0345C6.1665 14.5 6.29387 14.4473 6.38721 14.3547L14.6611 6.118C15.0091 5.77267 15.2005 5.31196 15.2012 4.82129ZM5.8278 13.5007H3.20117V10.874L9.19645 4.85132L11.8512 7.50529L5.8278 13.5007ZM13.9559 5.40999L12.5599 6.79997L9.90185 4.14266L11.2918 2.74601C11.4492 2.58801 11.6585 2.50132 11.8818 2.50065H11.8825C12.1052 2.50065 12.3145 2.5873 12.4725 2.74463L13.9578 4.22998C14.1152 4.38798 14.2018 4.59731 14.2018 4.82064C14.2012 5.04331 14.1139 5.25266 13.9559 5.40999ZM15.2012 14.0007C15.2012 14.2767 14.9772 14.5007 14.7012 14.5007H10.0345C9.7585 14.5007 9.5345 14.2767 9.5345 14.0007C9.5345 13.7247 9.7585 13.5007 10.0345 13.5007H14.7012C14.9772 13.5007 15.2012 13.7247 15.2012 14.0007Z" fill="#23254C"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>}

                <View className="nombre ">
                    <DropdownPics label={'Caballo a federar'} options={horseAndPics} onSelect={(option)=> setCaballo({...caballo, nombreCaballo: option})} selectedOption={caballo.nombreCaballo}/>
                </View>

                
                {mostrar && (mostrar.personalmente || mostrar.correo) && <View className="numeroFederacion ">
                        <ReusableTextInput
                            value={caballo.numeroFederacionNacional}
                            setValue={(text) => setCaballo({ ...caballo, numeroFederacionNacional: text })}
                            label={'Número de Federación Nacional'}
                        />
                </View>}


                {mostrar && !mostrar.CheckoutTodas && <View className="email mt-4">
                    <EmailInput
                        setValue={(text) => setCaballo({ ...caballo, emailOwner: text })}
                        label={'Email'}
                    />
                </View>}

          

                {mostrar && !mostrar.CheckoutTodas && <View className="telefono ">
                    <PhoneInput value={numeroCelular} setValue={setNumeroCelular} />
                </View>}
                <View className={`disciplina ${mostrar && mostrar.CheckoutTodas? 'mt-[40]' : ''}`}>
                    <Dropdown options={diciplinas} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Diciplina'}/>
                
                </View>

                {mostrar && (mostrar.personalmente || mostrar.correo) && <View className="club">
                    <Dropdown options={clubs} selectedOption={selectedClub} onSelect={handleSelectClub} label={'Club'}/>    
                </View>}
                    

            </View>

            <View className={`flex items-center mt-10 ${mostrar && mostrar.CheckoutTodas? ' mt-[300]' : ''}`}>
                <Button onPress={guardarEnRedux} label="Continuar" extra="w-full mt-4"/>
            </View>
        </View>
    )
}

export default IngresoCaballo