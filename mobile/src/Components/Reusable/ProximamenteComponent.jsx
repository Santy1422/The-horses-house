import { configuracionIcon } from "../../../utils/svgIcons"
import { View, Text } from "react-native"

export const ProximamenteComponent = () => {

    return (
        <View className="w-full py-[20] px-[32] mt-[24px] md:mt-[44px]">
            <View className="items-center">
                <View className="w-14 h-14 rounded-full items-center justify-center bg-gray-300 border-8 border-gray-400 md:w-[90px] md:h-[90px] md:border-[13px]">
                    <View className="w-[24] h-[24] md:w-[37] md:h-[37]">
                        {configuracionIcon}
                    </View>
                </View>
            </View>
            <View className="mb-[24px] md:mt-[16px] md:mb-[100px]">
                <Text className="text-gray-900 text-center text-lg md:text-[34px] md:pt-[5px] font-latoBold mt-[8px] mb-[6px] md:mb-[12px]">Próximamente</Text>
                <View className="flex-row w-full justify-center">
                    <Text className="text-center text-gray-500 text-sm md:text-[20px] font-latoRegular">¡Estamos trabajando para traerte nuevas funcionalidades en nuestra aplicación!</Text>
                </View>
            </View>
        </View>
    )
}