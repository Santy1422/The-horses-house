import Image from "next/image"
import CrossSVG from "../../../../mobile/assets/icons/CrossSVG"


const Badge = ({color, label , removable, icon, iconType, labelClass, badgeClass}) => {

    let bgColor = `bg-[${color}]`
    let textColor = `text-[${color}]`

    let textClass = labelClass || ` font-latoBold ${textColor} opacity-100`
    let containerClass = badgeClass || `rounded-full ${bgColor} opacity-30 w-24 mt-4 flex text-center items-center justify-around py-2 flex-row  `
    function Icon() {
        if( iconType !== 'img') {
            return <div className={`w-3 h-3 rounded-full ${bgColor}`}><div className={`${bgColor} rounded-full`}></div></div>
        } else {
            return <Image src={icon} width={25} height={25} ></Image>
        }
    }

    return (
        <div className={containerClass}>
            {icon ?  <Icon/> : null}
            <p className={textClass}>{label}</p>
            {removable ? <CrossSVG color={color} /> : null}
        </div>
    )
}

export default Badge