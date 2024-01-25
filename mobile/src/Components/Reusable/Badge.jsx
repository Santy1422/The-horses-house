import { Image, Text, View } from "react-native"
import CrossSVG from "../../../assets/icons/CrossSVG"


export default Badge = ({color, label , removable, addBadge, icon, iconType, labelClass, badgeClass, style}) => {


    let textClass = labelClass || ` font-latoBold text-[${color}]-600 `
    let containerClass = badgeClass || `rounded-full bg-[${color}]-300 w-24 mt-4 flex text-center items-center justify-around py-2 flex-row  `
    function Icon() {
        if( iconType !== 'img') {
            return icon
        } else {
            return <Image source={icon} width={25} height={25} ></Image>
        }
    }

    return (
        <View className={containerClass} style={style && style}>
            {icon ?  <Icon/> : null}
            <Text className={textClass}>{label}</Text>
            {removable ? <CrossSVG color={color} /> : null}
        </View>
    )
}