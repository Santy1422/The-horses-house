import { Text, View } from "react-native"

export default MdText = ({ini}) => {
    return (
        <>
        <View className="w-24 h-24 py-[30px] bg-indigo-900 rounded-[200px] shadow border-4 border-white justify-center items-center inline-flex ">
            <Text className="w-24 text-center text-white text-[28px] font-latoBold leading-9">{ini}</Text>
        </View>
        </>
    )
}