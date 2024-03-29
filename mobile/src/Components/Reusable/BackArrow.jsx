import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"
import { Path, Svg } from "react-native-svg"

export const BackArrow = ({position, destination}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity className={`absolute  ${position} z-10 w-[48px] h-[48px] md:w-16 md:h-16 bg-white rounded border border-stone-300 justify-center items-center inline-flex`} onPress={() => {destination ? navigation.navigate(destination) : navigation.goBack()}} accessible={true} accessibilityLabel="Go Back">
                <Svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                    <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C" />
                </Svg>
        </TouchableOpacity>
    )
}