import { horseAddHorse } from "../../../utils/svgIcons"
import {View, Text} from "react-native"
import Button from "./Button"
import { useNavigation } from "@react-navigation/native"

export const EmptyStateHorses = () => {
const navigation = useNavigation()

    return(
        <View className="flex flex-col items-center w-[100%]">
            <View className="w-[70px] h-[70px] bg-neutral-200 rounded-full flex items-center justify-center">
            <View className="w-8 h-8 relative">
                {horseAddHorse}
            </View>
            </View>

            <View className="my-4">
                <Text className="text-center text-zinc-500 text-lg font-bold font-Lato leading-relaxed">Tus caballos</Text>
                <Text className="mt-2 w-[275.99px] text-center text-zinc-700 text-sm font-normal font-Lato leading-tight">Todavía no tienes ningún caballo agregado a tu perfil.</Text>
            </View>

            <Button onPress={() => navigation.navigate("AddHorses")} type={"primary"} label={"Agregar caballo"} extra={"w-[100%]"} ></Button>

        </View>
    )
}