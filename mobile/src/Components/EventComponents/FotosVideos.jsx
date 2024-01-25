import { View, Text, Image, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import { LinearGradient } from "expo-linear-gradient"


const FotosVideos = ({setIsVisible, hasEnded}) => {
    
    
    return (
        <>
            <View className="main w-full">
                <LinearGradient colors={['#1D1F3F','#23254C']} className="content flex flex-row h-[126px] md:h-[180px] w-full pl-4 rounded-[10px] overflow-hidden">
                    <View className="Texto flex flex-col w-1/2 md:w-[60%] py-4 gap-y-3 pr-10 md:justify-between">
                        <Text className="label font-latoBold text-base text-white md:text-[25px] md:leading-[35px]">Todas las Fotos y videos del evento</Text>
                        <TouchableOpacity className="boton flex justify-center items-center h-[32] bg-[#F3F2F2] md:h-14 rounded w-full" onPress={ ()=> setIsVisible(true)} >
                            <Text className="label font-latoBold text-sm text-[#231D43] md:text-[25px] md:pt-[3px]">{hasEnded ? "Adquirir" : "Preadquirir"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="containerImages w-1/2  md:w-[40%] pt-[9] pb-[20] flex flex-row-reverse">
                        <View className="badge flex flex-row justify-center items-center rounded-full h-5 bg-white px-2 absolute z-20 right-[6] md:right-[-14] top-6">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <Path d="M12.5 2.9248H4.16667C2.4875 2.9248 1.5625 3.8498 1.5625 5.52897V12.4734C1.5625 14.1526 2.4875 15.0776 4.16667 15.0776H12.5C14.1792 15.0776 15.1042 14.1526 15.1042 12.4734V5.52897C15.1042 3.8498 14.1792 2.9248 12.5 2.9248ZM4.16667 3.96647H12.5C13.5951 3.96647 14.0625 4.43383 14.0625 5.52897V9.82686L11.2778 7.04281C10.8194 6.58378 10.0139 6.58378 9.55556 7.04281L6.25 10.3477L5.72222 9.82059C5.26388 9.36156 4.45834 9.36156 4.00001 9.82059L2.60417 11.2164V5.52897C2.60417 4.43383 3.07153 3.96647 4.16667 3.96647ZM12.5 14.0359H4.16667C3.14444 14.0359 2.67498 13.622 2.61595 12.6769L4.73607 10.5567C4.82427 10.4692 4.89719 10.4692 4.98539 10.5567L5.63753 11.2088C5.96183 11.5338 6.53752 11.5331 6.86044 11.2088L10.291 7.77829C10.3791 7.69079 10.4521 7.69079 10.5403 7.77829L14.0611 11.2992V12.4734C14.0625 13.5686 13.5951 14.0359 12.5 14.0359ZM4.6875 6.91786C4.6875 6.43869 5.07639 6.0498 5.55556 6.0498C6.03472 6.0498 6.42361 6.43869 6.42361 6.91786C6.42361 7.39703 6.03472 7.78592 5.55556 7.78592C5.07639 7.78592 4.6875 7.39703 4.6875 6.91786Z" fill="#23254C"/>
                            </Svg>
                        </View>
                        <View className="badge flex flex-row justify-center items-center rounded-full h-6 bg-white px-[10] absolute z-20 left-8 bottom-2">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <Path d="M14.6875 1.875H5.3125C3.09583 1.875 1.875 3.09583 1.875 5.3125V14.6875C1.875 16.9042 3.09583 18.125 5.3125 18.125H14.6875C16.9042 18.125 18.125 16.9042 18.125 14.6875V5.3125C18.125 3.09583 16.9042 1.875 14.6875 1.875ZM16.875 5.3125V6.875H13.125V3.125H14.6875C16.2208 3.125 16.875 3.77917 16.875 5.3125ZM8.125 6.875V3.125H11.875V6.875H8.125ZM5.3125 3.125H6.875V6.875H3.125V5.3125C3.125 3.77917 3.77917 3.125 5.3125 3.125ZM14.6875 16.875H5.3125C3.77917 16.875 3.125 16.2208 3.125 14.6875V8.125H16.875V14.6875C16.875 16.2208 16.2208 16.875 14.6875 16.875ZM12.4775 10.9292L9.85413 9.32332C9.41913 9.05666 8.87251 9.04669 8.42834 9.29586C7.97751 9.54836 7.70915 10.0066 7.70915 10.5225V13.6442C7.70915 14.16 7.97751 14.6183 8.42834 14.8708C8.64251 14.9908 8.88003 15.0509 9.11753 15.0509C9.37337 15.0509 9.62829 14.9817 9.85413 14.8433L12.4767 13.2383C12.8825 12.99 13.125 12.5583 13.125 12.0833C13.125 11.6083 12.8825 11.1767 12.4775 10.9292ZM11.8241 12.1716L9.20085 13.7775C9.13251 13.8183 9.07587 13.8009 9.0392 13.7809C9.00254 13.7601 8.95833 13.72 8.95833 13.6442V10.5225C8.95833 10.4475 9.00254 10.4066 9.0392 10.3857C9.0592 10.3741 9.08668 10.3642 9.11835 10.3642C9.14335 10.3642 9.17166 10.3709 9.20166 10.3892L11.825 11.995C11.825 11.995 11.825 11.995 11.8259 11.995C11.8584 12.015 11.8758 12.045 11.8758 12.0825C11.8758 12.12 11.8575 12.1516 11.8241 12.1716Z" fill="#23254C"/>
                            </Svg>
                        </View>
                        <Image source={require( '../../images/FotosVideos.png')} className="imagen w-[144] md:w-[270px] h-full z-10 " />
                        <View className="elipse rounded-full h-[142] w-[142] bg-[#3F4865] z-0 right-[175] bottom-4 "/>

                        
                        
                    </View>
                </LinearGradient>

            </View>
        </>
    )
}

export default FotosVideos