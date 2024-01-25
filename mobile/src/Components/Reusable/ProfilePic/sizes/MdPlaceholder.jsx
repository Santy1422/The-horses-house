import { Image, View } from "react-native"
import { Path, Svg } from "react-native-svg"

export default MdPlaceholder = ({}) => {
    return (
        <>
        <View className="w-24 h-24 p-6 bg-[#6597DD] rounded-[200px] border-4 border-white justify-center items-center inline-flex">
                <View className="w-12 h-12 relative flex-col justify-start items-start flex">
                <Image source={require('../../../../../assets/icons/userMD.png')} height={48} width={48} />
                </View>
            </View>
        </>
    )
}