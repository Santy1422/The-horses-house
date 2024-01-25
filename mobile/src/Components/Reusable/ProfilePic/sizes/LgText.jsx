
import { Text, View } from "react-native"

export default LgText = ({ini}) => {
    return (
        <>
        <View className="w-40 h-40 bg-indigo-900 rounded-[200px] shadow border-4 border-white justify-center items-center inline-flex">
                <Text className="w-40 text-center text-white text-5xl font-latoBold leading-9">{ini}</Text>
        </View>
        </>
    )
}