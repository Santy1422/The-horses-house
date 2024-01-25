import { View, Text, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import RadioButton from "../../Reusable/RadioButton"


const Seleccionar = ({caballo, setCaballo, receptorCredencial, setReceptorCredencial, setMostrar, mostrar}) => {
    
    const handleSiguiente = () => {
        if (receptorCredencial.personalmente) {
            setMostrar({...mostrar, seleccionar: false, personalmente: true})
        }
        if (receptorCredencial.envioCorreo) {
            setMostrar({...mostrar, seleccionar: false, modalCorreo: true})
        }
    }
    
    return (
        <View>
            <Text className="seleccionaLabel font-latoRegular text-base text-[#23254C] mt-6">Seleccioná la opción que necesites</Text>
                    <Text className="seleccionarlabel2 font-latoRegular text-sm text-[#666666] ">(podés seleccionar los dos)</Text>
            
                    <View className="adicionales flex flex-col gap-y-[6px] mt-4">
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
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <Path d="M14.7012 9.5H13.8678V6.5H14.7012C14.9772 6.5 15.2012 6.276 15.2012 6C15.2012 5.724 14.9772 5.5 14.7012 5.5H13.8678V5.33333C13.8678 3.72133 12.9798 2.83333 11.3678 2.83333H11.2012V2C11.2012 1.724 10.9772 1.5 10.7012 1.5C10.4252 1.5 10.2012 1.724 10.2012 2V2.83333H7.20117V2C7.20117 1.724 6.97717 1.5 6.70117 1.5C6.42517 1.5 6.20117 1.724 6.20117 2V2.83333H6.03451C4.42251 2.83333 3.53451 3.72133 3.53451 5.33333V5.5H2.70117C2.42517 5.5 2.20117 5.724 2.20117 6C2.20117 6.276 2.42517 6.5 2.70117 6.5H3.53451V9.5H2.70117C2.42517 9.5 2.20117 9.724 2.20117 10C2.20117 10.276 2.42517 10.5 2.70117 10.5H3.53451V10.6667C3.53451 12.2787 4.42251 13.1667 6.03451 13.1667H6.20117V14C6.20117 14.276 6.42517 14.5 6.70117 14.5C6.97717 14.5 7.20117 14.276 7.20117 14V13.1667H10.2012V14C10.2012 14.276 10.4252 14.5 10.7012 14.5C10.9772 14.5 11.2012 14.276 11.2012 14V13.1667H11.3678C12.9798 13.1667 13.8678 12.2787 13.8678 10.6667V10.5H14.7012C14.9772 10.5 15.2012 10.276 15.2012 10C15.2012 9.724 14.9772 9.5 14.7012 9.5ZM12.8678 10.6667C12.8678 11.718 12.4192 12.1667 11.3678 12.1667H6.03451C4.98317 12.1667 4.53451 11.718 4.53451 10.6667V5.33333C4.53451 4.282 4.98317 3.83333 6.03451 3.83333H11.3678C12.4192 3.83333 12.8678 4.282 12.8678 5.33333V10.6667ZM10.0345 5.16667H7.36784C6.42851 5.16667 5.86784 5.72733 5.86784 6.66667V9.33333C5.86784 10.2727 6.42851 10.8333 7.36784 10.8333H10.0345C10.9738 10.8333 11.5345 10.2727 11.5345 9.33333V6.66667C11.5345 5.72733 10.9738 5.16667 10.0345 5.16667ZM10.5345 9.33333C10.5345 9.726 10.4272 9.83333 10.0345 9.83333H7.36784C6.97517 9.83333 6.86784 9.726 6.86784 9.33333V6.66667C6.86784 6.274 6.97517 6.16667 7.36784 6.16667H10.0345C10.4272 6.16667 10.5345 6.274 10.5345 6.66667V9.33333Z" fill="#25314C"/>
                                    </Svg>
                                </View>
                                <Text className="label font-latoRegular leading-5 text-[#23254C] ">Solicitar chip</Text>
                            </View>
                            <RadioButton selected={caballo.solicitaChip} />                            
                        </TouchableOpacity>

                    </View>

                    <Text className="obtenerlo font-latoRegular text-base text-[#23254C] mt-6 mb-4">¿Cómo querés obtenerlo?</Text>

                    <View className="adicionales flex flex-col gap-y-[6px]">
                        <TouchableOpacity className="pasaporte bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setReceptorCredencial({...receptorCredencial, personalmente: !receptorCredencial.personalmente, envioCorreo: receptorCredencial.personalmente})}>
                            <View className="iconoLabel flex flex-row items-center">
                                <RadioButton selected={receptorCredencial.personalmente} />
                                <Text className="label font-latoRegular leading-5 text-[#23254C] pl-2 ">Retirar personalmente en sede</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="chip bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setReceptorCredencial({...receptorCredencial, envioCorreo: !receptorCredencial.envioCorreo, personalmente: receptorCredencial.envioCorreo})}>
                            <View className="iconoLabel flex flex-row items-center">                                

                                <RadioButton  selected={receptorCredencial.envioCorreo}/>                            
                                <Text className="label font-latoRegular leading-5 text-[#23254C] pl-2 ">Envio por correo</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                                    
                    <View className={`flex items-center mt-[42px] mb-[38px]` }>
                        <Button onPress={handleSiguiente} label="Siguiente" extra=" w-full"/> 
                    </View>

        </View>
    )
}

export default Seleccionar