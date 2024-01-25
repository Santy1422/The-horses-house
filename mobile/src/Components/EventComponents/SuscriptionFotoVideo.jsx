import { View, Text, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import { useState } from "react"

const SuscriptionFotoVideo = ({setIsVisible, fotosVideos}) => {
    
        
    return(
        <>
        <View className="main container">
            <View className={`card w-full h-[158px] p-4 rounded-lg  flex flex-col ${fotosVideos === 'evento' ? 'bg-[#8BD5E9]' : fotosVideos === 'mensual' ? 'bg-[#576DC3]' : 'bg-[#4E3B8E]' }`}>
                <View className="icon flex flex-row justify-between ">
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M10.0003 1.04199C5.06033 1.04199 1.04199 5.06116 1.04199 10.0003C1.04199 14.9395 5.06033 18.9587 10.0003 18.9587C14.9403 18.9587 18.9587 14.9395 18.9587 10.0003C18.9587 5.06116 14.9403 1.04199 10.0003 1.04199ZM10.0003 17.7087C5.74949 17.7087 2.29199 14.2512 2.29199 10.0003C2.29199 5.74949 5.74949 2.29199 10.0003 2.29199C14.2512 2.29199 17.7087 5.74949 17.7087 10.0003C17.7087 14.2512 14.2512 17.7087 10.0003 17.7087ZM13.3587 7.61365C13.6028 7.85781 13.6028 8.25368 13.3587 8.49784L9.4695 12.387C9.34783 12.5087 9.18783 12.5703 9.02783 12.5703C8.86783 12.5703 8.70783 12.5095 8.58617 12.387L6.64199 10.4428C6.39783 10.1987 6.39783 9.8028 6.64199 9.55863C6.88616 9.31447 7.282 9.31447 7.52616 9.55863L9.02867 11.0612L12.4753 7.61451C12.7195 7.37035 13.1145 7.37031 13.3587 7.61365Z" fill={fotosVideos === 'evento' ? `#231D43` : '#FFFFFF'}/>
                    </Svg>
                    <View className="cerrar flex items-center justify-center">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <Path d="M15.4415 14.558C15.6856 14.8021 15.6856 15.198 15.4415 15.4422C15.3198 15.5638 15.1598 15.6255 14.9998 15.6255C14.8398 15.6255 14.6798 15.5647 14.5581 15.4422L9.99979 10.8838L5.44146 15.4422C5.31979 15.5638 5.15979 15.6255 4.99979 15.6255C4.83979 15.6255 4.67979 15.5647 4.55813 15.4422C4.31396 15.198 4.31396 14.8021 4.55813 14.558L9.11646 9.99965L4.55813 5.44134C4.31396 5.19718 4.31396 4.80132 4.55813 4.55715C4.80229 4.31298 5.19813 4.31298 5.4423 4.55715L10.0006 9.11551L14.559 4.55715C14.8031 4.31298 15.199 4.31298 15.4431 4.55715C15.6873 4.80132 15.6873 5.19718 15.4431 5.44134L10.8848 9.99965L15.4415 14.558Z" fill={fotosVideos === 'evento' ? `#231D43` : '#FFFFFF'}/>
                        </Svg>
                    </View>
                </View>
                <Text className={`suscripcion mt-3 font-latoBold text-xs leading-[20] ${fotosVideos === 'evento' ? 'text-[#231D43]' : 'text-white'}`}>Suscripción Exitosa</Text>
                <Text className={`preadquiriste font-latoRegular text-sm ${fotosVideos === 'evento' ? 'text-[#231D43]' : 'text-white'} mt-1`}>{ ` ${fotosVideos === 'evento' ? 'Ya pre-adquiriste el pack evento. ' : fotosVideos === 'mensual' ? 'Ya adquiriste la suscripción mensual.' : 'Ya adquiriste la suscripción anual.'  } Inscríbete en el evento y continua con el pago.`}</Text>
                <TouchableOpacity onPress={() => setIsVisible(true)} className="Editar flex flex-row mt-3 items-center">
                    <Text className={`editar font-latoBold text-sm text-[#231D43] mr-2 ${fotosVideos === 'evento' ? 'text-[#231D43]' : 'text-white'}`}>Editar Pack</Text>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M18.0766 10.2392C18.0449 10.3159 17.9992 10.385 17.9417 10.4425L12.1084 16.2758C11.9867 16.3975 11.8267 16.4591 11.6667 16.4591C11.5067 16.4591 11.3466 16.3983 11.225 16.2758C10.9808 16.0317 10.9808 15.6358 11.225 15.3916L15.9916 10.625H2.5C2.155 10.625 1.875 10.345 1.875 9.99998C1.875 9.65498 2.155 9.37498 2.5 9.37498H15.9908L11.2242 4.60834C10.98 4.36417 10.98 3.96831 11.2242 3.72414C11.4683 3.47997 11.8642 3.47997 12.1084 3.72414L17.9417 9.55747C17.9992 9.61497 18.0449 9.68405 18.0766 9.76072C18.1399 9.91405 18.1399 10.0859 18.0766 10.2392Z" fill={fotosVideos === 'evento' ? `#231D43` : '#FFFFFF'}/>
                    </Svg>
                </TouchableOpacity >
            </View>
            
        </View>
        </>
    )
}

export default SuscriptionFotoVideo