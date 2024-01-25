import { Image, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import FacebookSVG from "../../../assets/icons/FacebookSVG"
import GoogleSVG from "../../../assets/icons/GoogleSVG"
import AppleSVG from "../../../assets/icons/AppleSVG"



export default Button = ({onPress, type, label, extra, sinFondo, texColor, component, socialMedia, disabled}) => {
    let buttonClass
    let labelClass

    if(type !== 'secondary') {
        defaultButtonClass =`flex justify-center items-center rounded  px-4 py-[10px] w-60 ${disabled ? `bg-[#F3F2F2]` : `bg-[#23254C]` } ${extra && extra}`
        defaultLabelClass = `text-base md:text-[25px] text-white font-latoBold  ${disabled ? `text-[#BEBDBD]` : `text-white`}`
    } else {
        buttonClass = `flex justify-center items-center rounded  px-4 py-[10px] w-60 ${disabled && `bg-[#F3F2F2]` } ${!sinFondo && "bg-white"} ${extra && extra} `
        labelClass = `${texColor && texColor || " text-labelDarkBlue"} text-base md:text-[25px] font-latoBold`
    }


if(socialMedia) {
return (
    <TouchableOpacity className={buttonClass || defaultButtonClass} onPress={onPress} disabled={false || disabled} >
                {socialMedia !== 'google' ? socialMedia !== 'facebook' ?  <AppleSVG/>  :  <FacebookSVG/>  : <GoogleSVG/> }
                <Text className={labelClass || defaultLabelClass}>{label}</Text>
                {component}
    </TouchableOpacity>
        )
} else {
    return (
        <TouchableOpacity className={buttonClass || defaultButtonClass} onPress={onPress} disabled={false || disabled} >
                <Text className={labelClass || defaultLabelClass}>{label}</Text>
                {component}
        </TouchableOpacity>
    )
}
}