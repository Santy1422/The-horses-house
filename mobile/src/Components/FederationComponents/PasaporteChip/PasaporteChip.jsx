import { View, Text, ScrollView } from "react-native"
import ArrowFunction from "../../Reusable/ArrowFunction"
import { useFederation } from "../../../CustomHooks.jsx/useFederation"
import Seleccionar from "./Seleccionar"
import { useState } from "react"
import IngresoCaballo from "../FeiFederacion/IngresoCaballo"
import { useSelector } from "react-redux"
import ModalEnvio from "../CaballoFederation/ModalEnvio"
import { LinearGradient } from "expo-linear-gradient"


const PasaporteChip = ({steps, setSteps}) => {
    
    const {caballo, setCaballo, receptorCredencial, setReceptorCredencial} = useFederation()
    const [mostrar, setMostrar] = useState({seleccionar: true, personalmente: false, correo: false, modalCorreo: false})
    const revisar = useSelector((state)=> state.ReducerCart.federarCaballo)
    console.log(revisar)

    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">
            <ScrollView className="h-full">
                <View className="contenedorForm flex flex-col px-6">
                    <View className="header flex flex-row items-center mt-[27] justify-between">
                        <ArrowFunction onPress={()=> setSteps(0)} />
                        {/* <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text> */}
                        <View className=" w-11 h-11"/>                          
                    </View>
                    <Text className="caballo font-latoBold text-2xl leading-8 text-[#23254C] mt-[27]">{(mostrar.personalmente || mostrar.correor) ? 'Últimos datos requeridos' : 'Solicitar chip o Pasaporte'}</Text>    
                    {mostrar.seleccionar && <Text className="pasos font-latoRegular text-base text-[#23254C] ">Paso 1/2</Text>}
                    {(mostrar.personalmente || mostrar.correo) && <Text className="pasos font-latoRegular text-base text-[#23254C] ">Paso 2/2</Text>}
                    {mostrar.seleccionar && <Seleccionar caballo={caballo} setCaballo={setCaballo} receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} setMostrar={setMostrar} mostrar={mostrar} />} 
                    {mostrar.personalmente && !mostrar.correo && <IngresoCaballo mostrar={mostrar} chip={caballo.solicitaChip} pasaporte={caballo.solicitaPasaporte} receptorCredencial={receptorCredencial}  />}
                    {mostrar.modalCorreo && <ModalEnvio receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} mostrar={mostrar} setMostrar={setMostrar}/>}
                    {mostrar.correo && !mostrar.personalmente && <IngresoCaballo mostrar={mostrar} chip={caballo.solicitaChip} pasaporte={caballo.solicitaPasaporte} receptorCredencial={receptorCredencial} setMostrar={setMostrar}  />}
                </View>
            </ScrollView>
        </LinearGradient>     
    )
}

export default PasaporteChip