import { TouchableOpacity } from "react-native"
import { View, Text } from "react-native-animatable"
import { Svg, Path, G } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"
import io from 'socket.io-client';
import { useEffect } from "react";
import Badge from "../../Reusable/Badge";
//const socket = io('https://crabby-muscle-production.up.railway.app/'); 


const Pruebas = ({ nombre, altura, definicion, id, tiempoAcordadoR1, tiempoAcordadoR2, categoria, tiempoOptimo }) => {

    const navigation = useNavigation()
    const recibirInscriptos = (id) => {
        socket.emit('recibir-inscriptos', { categoriaId: id });

    }

    //     useEffect(() => {
    //         socket.on('connect', () => {
    //             console.log('Conectado al servidor Socket.IO');
    //           });
    //           recibirInscriptos()
    //         socket.on('message-received', (data) => {

    // console.log(data)
    //         });

    //       }, []);
    // useEffect(() => {
    //     const handleResultadosActualizados = (data) => {
    //       console.log(data);
    //     };
    //     socket.on('resultadosActualizados', handleResultadosActualizados);
    //     return () => {
    //       socket.off('resultadosActualizados', handleResultadosActualizados);
    //     };
    //   }, []);



    return (
        <>
            <View className="main w-full">
                <TouchableOpacity onPress={() => navigation.navigate('ScreenResultados', { id, nombre, altura, definicion, tiempoAcordadoR1, tiempoAcordadoR2, categoria, tiempoOptimo })} className="content w-full h-[76px] md:h-[96px] px-4 items-center flex flex-row bg-white justify-between mb-[10px] rounded-[10px] border border-gray-300">
                    <View className="textos items-start">
                        <View className="mb-[4] flex-row items-center">
                            <Text className="prueba font-latoBold text-base md:text-[22px] text-[#23254C] mx-2">{nombre}</Text>
                            <Badge label={'Finalizado'} badgeClass={`m-0 bg-[#EFFBF4] px-2.5 rounded-full h-6 justify-center`} labelClass={`text-teal-800 font-latoBold text-sm`}/>
                        </View>
                        <View className="flex-row">
                            <Text className="definicion font-latoRegular text-base md:text-[22px] text-[#23254C] px-2 border-r-1 border-gray-200">{definicion}</Text>
                            <Text className="altura font-latoRegular text-base md:text-[22px] text-[#23254C] mx-2">{altura}</Text>
                        </View>


                        {/* <Text className="altura font-latoRegular text-base md:text-[22px] text-[#23254C] mx-2">{categoria == 'Escuela Mayor' ? 'E Mayor' : categoria == 'Escuela Menor' ? "E Menor" : categoria}</Text> */}

                    </View>
                    <View className="flecha">
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right">
                                <Path id="angle-right_2" d="M8.99978 19.7498C8.80778 19.7498 8.61575 19.6768 8.46975 19.5298C8.17675 19.2368 8.17675 18.7618 8.46975 18.4688L14.9397 11.9988L8.46975 5.52883C8.17675 5.23583 8.17675 4.7608 8.46975 4.4678C8.76275 4.1748 9.23779 4.1748 9.53079 4.4678L16.5308 11.4678C16.8238 11.7608 16.8238 12.2358 16.5308 12.5288L9.53079 19.5288C9.38379 19.6768 9.19178 19.7498 8.99978 19.7498Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Pruebas