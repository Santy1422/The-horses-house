import { View, Text, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { calendarIconBlack, concursoIcon, locationIcon, watchBlackIcon } from "../../../utils/svgIcons"



export const CardEvent = ({nombre, etiqueta, fecha, horario, dia, mes, ubicacion, imagen, id, futuro, bandera, misEventos, enCurso, concurso}) => {
    
    const navigation = useNavigation()
    console.log(id)
    return (          
            <TouchableOpacity className="w-full md:w-[48%]" onPress={() =>  {
                 if (bandera) navigation.navigate('DetailEventFinish', {id})
                 if (misEventos) navigation.navigate('EventInscripted', {id})
                 if (enCurso) navigation.navigate('DetailEventFinish', {id})
                 if (futuro || concurso)  navigation.navigate('DetailEvent', {id})
                }}>
            <View className="w-full bg-white flex h-auto mt-2 border border-gray-300 rounded-[10px] mb-4">                
                {/* {futuro && <View className="absolute top-0 left-0 w-full bg-[#FBF1EF] rounded-t-[10px] flex items-center z-20 justify-center py-[11px]">
                    <Text className="text font-latoBold text-sm leading-5 text-[#C70117] ">Inscripciones cerradas</Text>
                </View>} */}
                
                <View className="w-full h-36">
                    <View className="badge flex flex-row bottom-3 left-6 absolute z-10 bg-white border border-white rounded-3xl px-[10px] items-center">
                        {concursoIcon}
                        <Text className="etiqueta text-sm font-latoBold ml-[6px] leading-5">{etiqueta}</Text>
                    </View>
                    <Image className="w-full h-full rounded-t-[10px]" source={require('../../images/event_default.jpeg')}></Image> 
                </View>
                <View className=" w-full p-6 flex-col">
                    <View className=" w-full inline-flex overflow-hidden">
                        <Text className="titulo font-latoBold text-xl leading-[30px] text-[#23254C]" numberOfLines={1}  >
                            {nombre}
                        </Text>
                    </View>
                    <View className=" w-full flex-row pt-3">
                        <View className=" flex-col ">
                            <View className="contenedorFechaHora flex flex-row mb-3">                            
                                <View className=" flex-row items-center mr-3 ">                               
                                    {calendarIconBlack}                    
                                    <Text className="fecha font-latoRegular text-sm leading-5 text-[#494949] ml-1">{fecha}</Text>                           
                                </View>
                                <View className=" flex-row items-center "> 
                                    {watchBlackIcon}
                                    <Text className="horario font-latoRegular text-sm leading-5 text-[#494949] ml-1">{horario}</Text>                                
                                </View>
                            </View>
                            <View className="w-full flex-row items-center">
                                {locationIcon}
                                <Text numberOfLines={2} ellipsizeMode="tail" className="ubicacion font-latoRegular text-sm leading-5 text-[#494949] ml-1">{ubicacion}</Text>
                            </View>
                        </View>

                        
                    </View>
                </View>
            </View>   
            </TouchableOpacity>
    )
}