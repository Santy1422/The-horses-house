import { TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"


const ArrowFunction = ({onPress}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity className="w-11 h-11 md:w-16 md:h-16 bg-white rounded border border-[#D1DADA] justify-center items-center flex" onPress={onPress}>
           <Svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                <Path d="M20.7499 11.9998C20.7499 12.4138 20.4139 12.7498 19.9999 12.7498H5.81091L8.53088 15.4698C8.82388 15.7628 8.82388 16.2378 8.53088 16.5308C8.38488 16.6768 8.19285 16.7508 8.00085 16.7508C7.80885 16.7508 7.61682 16.6778 7.47082 16.5308L3.47082 12.5308C3.40182 12.4618 3.34695 12.3789 3.30895 12.2869C3.23295 12.1039 3.23295 11.8969 3.30895 11.7139C3.34695 11.6219 3.40182 11.5387 3.47082 11.4697L7.47082 7.46975C7.76382 7.17675 8.23885 7.17675 8.53185 7.46975C8.82485 7.76275 8.82485 8.23779 8.53185 8.53079L5.81188 11.2508H19.9999C20.4139 11.2498 20.7499 11.5858 20.7499 11.9998Z" fill="#25314C"/>
            </Svg>
        </TouchableOpacity>
    )
}


export default ArrowFunction