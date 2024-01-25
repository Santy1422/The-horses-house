import { Image, View } from "react-native"
import { Path, Svg } from "react-native-svg"

export default LgPlaceholder = ({}) => {
    return (
        <>
        <View className="w-40 h-40 p-10 bg-blue-400 rounded-[200px] shadow border-4 border-white justify-center items-center inline-flex">
                <View className="w-20 h-20 relative flex-col justify-start items-start flex ">
                <Image source={require('../../../../../assets/icons/userLG.png')} height={80} width={80} />
                </View>
            </View>
        </>
    )
}