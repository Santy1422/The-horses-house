import { Text, View } from "react-native"
import CrossSVG from "../../../assets/icons/CrossSVG"
import WarningSVG from "../../../assets/icons/WarningSVG"

export const StatusMesssage = ({ type, text }) => {
    let containerStyle
    let textStyle
    if (type === 'warning') {
        containerStyle = 'bg-[#FCF5F0] border-amber-600'
        textStyle = 'text-[#7B4100]'
    } else if (type === 'error') {

    } else {

    }
    return (
        <View className={`w-full my-2 p-4 border rounded-lg ${containerStyle}`}>
            <View className="flex-row justify-between">
                {
                    type === 'warning' ?

                        <WarningSVG />

                        :

                        type === 'error' ?

                            errorIcon

                            :

                            successIcon
                }
                <CrossSVG color={type === 'warning' ? '#7B4100' : type === 'error' ? '' : ''} size={'20'}/>
            </View>
            <Text className={`text-xs mt-[12] font-latoRegular ${textStyle}`}>
                {text}
            </Text>
        </View>
    )
}