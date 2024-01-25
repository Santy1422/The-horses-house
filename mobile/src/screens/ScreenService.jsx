import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { NavBottom } from "../Components/EventComponents/NavBottom"
import { Svg, Path } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"


export const ScreenService = ({route}) => {
    
    const {screen} = route.params
    const navigation = useNavigation()

    return (
        <>
        <ScrollView className="main container px-6 py-10 gap-y-6">
            <View className="iconContainer flex-row justify-between w-full">
                <View className="notificationIcon border border-gray-300 rounded-md w-11 h-11 justify-center items-center">
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M11.9992 21.75C11.0112 21.75 10.1232 21.237 9.62122 20.378C9.41322 20.02 9.53323 19.561 9.89122 19.352C10.2472 19.144 10.7072 19.264 10.9172 19.622C11.3762 20.409 12.6222 20.409 13.0812 19.622C13.2902 19.264 13.7502 19.144 14.1072 19.352C14.4652 19.56 14.5862 20.02 14.3772 20.378C13.8752 21.237 12.9872 21.75 11.9992 21.75ZM20.6742 18.325C20.7992 18.065 20.7642 17.757 20.5852 17.532C20.5662 17.509 18.7442 15.189 18.7442 12.5V8.995C18.7442 5.276 15.7182 2.25 11.9992 2.25C8.28023 2.25 5.25422 5.276 5.25422 8.995V12.5C5.25422 15.189 3.43223 17.509 3.41323 17.532C3.23423 17.757 3.19922 18.066 3.32422 18.325C3.44922 18.584 3.71123 18.75 3.99923 18.75H19.9992C20.2872 18.75 20.5492 18.584 20.6742 18.325ZM6.75422 12.5V8.995C6.75422 6.103 9.10723 3.75 11.9992 3.75C14.8912 3.75 17.2442 6.103 17.2442 8.995V12.5C17.2442 14.436 17.9942 16.158 18.6122 17.25H5.38523C6.00423 16.158 6.75422 14.436 6.75422 12.5Z" fill="#25314C"/>
                    </Svg>    
                </View>
                <TouchableOpacity className="notificationIcon border border-gray-300 rounded-md w-11 h-11 justify-center items-center" onPress={() =>  navigation.navigate('OnboardingIndex')}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M12.009 10.75C9.66503 10.75 7.75903 8.843 7.75903 6.5C7.75903 4.157 9.66503 2.25 12.009 2.25C14.353 2.25 16.259 4.157 16.259 6.5C16.259 8.843 14.353 10.75 12.009 10.75ZM12.009 3.75C10.492 3.75 9.25903 4.983 9.25903 6.5C9.25903 8.017 10.492 9.25 12.009 9.25C13.526 9.25 14.759 8.017 14.759 6.5C14.759 4.983 13.525 3.75 12.009 3.75ZM15.9969 21.75H8.00305C5.58305 21.75 4.25 20.425 4.25 18.019C4.25 15.358 5.756 12.25 10 12.25H14C18.244 12.25 19.75 15.357 19.75 18.019C19.75 20.425 18.4169 21.75 15.9969 21.75ZM10 13.75C6.057 13.75 5.75 17.017 5.75 18.019C5.75 19.583 6.42405 20.25 8.00305 20.25H15.9969C17.5759 20.25 18.25 19.583 18.25 18.019C18.25 17.018 17.943 13.75 14 13.75H10Z" fill="#25314C"/>
                    </Svg>                    
                </TouchableOpacity>
            </View>
            
            <View className="containerMensajeServicio flex-1">
                <Text className="mensajeServicio font-latoBold text-3xl">¿Qué servicio necesitás, Sebastián?</Text>
            </View>

            <View className="caballerizo flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>caballerizo</Text>
            </View>
            <View className="domador flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>domador</Text>
            </View>
            <View className="herrero flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>herrero</Text>
            </View>
            <View className="profesores/as flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>profesores/as</Text>
            </View>
            <View className="domador flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>domador</Text>
            </View>
            <View className="proveedores flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>proveedores</Text>
            </View>
            <View className="derecho flex border border-gray-300 rounded py-2 justify-center items-center">
                <Text>derecho</Text>
            </View>
        </ScrollView>
        <NavBottom screen={screen}/>
        </>
    )
}