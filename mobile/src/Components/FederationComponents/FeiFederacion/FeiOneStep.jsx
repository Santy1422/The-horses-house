import { View, ScrollView, Text } from "react-native"
import ArrowFunction from "../../Reusable/ArrowFunction"
import Button from "../../Reusable/Button"
import OpcionesFei from "./OpcionesFei"
import { useState } from "react"
import Jinete from "./Jinete"
import ModalCaballo from "./ModalCaballo"
import RenovacionCaballo from "./RenovacionCaballo"
import IngresoCaballo from "./IngresoCaballo"
import FotoCaballo from "./FotoCaballo"
import Entrenador from "./Entrenador"
import Todas from "./Todas"
import { LinearGradient } from "expo-linear-gradient"

export const FeiOneStep = ({setSteps}) => {
        
    const [seleccion, setSeleccion] = useState({ Jinete: false, Caballo: false, Entrenador: false})
    const [mostrar, setMostrar] = useState({ Todas: false,  Jinete: false, Caballo: {modal: false, renovacion: false, ingreso: false, foto: false }, Entrenador: false, Opciones: true, CheckoutTodas: false})  
    
    
    const handleSiguiente = () => {
        setMostrar(prevMostrar => {
            let updatedMostrar = { ...prevMostrar }
    
            if (seleccion.Caballo || seleccion.Entrenador || seleccion.Jinete) {
                updatedMostrar.Opciones = false;
            }
            if (seleccion.Caballo && seleccion.Entrenador && seleccion.Jinete) {
                updatedMostrar.Todas = true
                
            }
            if (seleccion.Jinete && !seleccion.Caballo && !seleccion.Entrenador ) {
                updatedMostrar.Jinete = true
            }
            if (seleccion.Caballo && !seleccion.Jinete && !seleccion.Entrenador) {
                updatedMostrar.Caballo.modal = true
            }
            if (seleccion.Entrenador && !seleccion.Jinete && !seleccion.Caballo) {
                updatedMostrar.Entrenador = true
            }


            return updatedMostrar
        })
    }
    
    
    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">
            <ScrollView className="h-full">
                <View className="contenedorForm flex flex-col px-6">
                    <View className="header flex flex-row items-center mt-[27] justify-between">
                        <ArrowFunction onPress={()=> setSteps(0)} />
                        <Text className="titulo font-latoBold text-lg leading-normal text-[#191720]">Federación</Text>
                        <View className=" w-11 h-11"/>                          
                    </View>
                    <Text className="caballo font-latoBold text-2xl leading-8 text-[#23254C] mt-[27]">{mostrar.Caballo.renovacion  && !mostrar.CheckoutTodas ? 'Renovación' : mostrar.Caballo.ingreso && !mostrar.CheckoutTodas?  'Ingreso' : mostrar.Caballo.foto? 'Para terminar' : 'Registro FEI'}</Text>    
                    {mostrar.Todas && <Text className="pasos font-latoRegular text-base text-[#23254C] ">Paso 1/2</Text>}
                    {mostrar.CheckoutTodas && <Text className="pasos font-latoRegular text-base text-[#23254C] ">Paso 2/2</Text>}

                    {mostrar.Opciones && <OpcionesFei setSeleccion={setSeleccion} seleccion={seleccion} />}
                    {mostrar.Jinete && <Jinete mostrar={mostrar} />  }
                    {mostrar.Caballo.modal  && <ModalCaballo setMostrar={setMostrar} mostrar={mostrar}/>}
                    {mostrar.Caballo.renovacion  && <RenovacionCaballo mostrar={mostrar}/>}
                    {mostrar.Caballo.ingreso  && <IngresoCaballo setMostrar={setMostrar} mostrar={mostrar}/>}
                    {mostrar.Caballo.foto  && <FotoCaballo />}
                    {mostrar.Entrenador  && <Entrenador mostrar={mostrar}/>}
                    {mostrar.Todas && <Todas mostrar={mostrar} setMostrar={setMostrar} />} 
                    
                                         
                    <View className={`flex items-center mt-[42px] mb-[38px] ${mostrar.Opciones ? '' : 'hidden'}` }>
                        <Button onPress={handleSiguiente} label="Siguiente" extra=" w-full mt-[240] "/> 
                    </View>

                </View>
            </ScrollView>
        </LinearGradient>     
    )
}