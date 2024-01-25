import { Text, TouchableOpacity, View } from "react-native"
import ToggleSwitch from "../Reusable/ToggleSwitch"
import { useState } from "react"
import { G, Path, Svg } from "react-native-svg"
import ContestSVG from "../../../assets/icons/ContestSVG"

export const ContentCard = ({ icon, title, supporting, buttonText, children, h, toggle, dropdown, onPress, isOpenValue, value , id, recibirInscriptos}) => {
    const [isToggled, setIsToggled] = useState(false)
    const [isOpen, setIsOpen] = useState(isOpenValue)
console.log(id)
    const handleDropdown = () => {
        if (isOpen.includes(value)) {
            let newArr = isOpen.filter(openItem => openItem !== value)
            setIsOpen(newArr)
            onPress(value)
            if(recibirInscriptos) recibirInscriptos(id)
        } else {
            setIsOpen([...isOpen, value])
            onPress(value)
            if(recibirInscriptos) recibirInscriptos(id)

        }
    }

    return (
        <View className={`w-full ${h && `h-[${h}] md:h-fit`} bg-white px-[16] py-[22] flex-col justify-between border border-[#D1DADA] rounded-md mt-[26]`}>
            <View className="w-full">
                <View className="flex-row justify-between items-center">

                    <View className="flex-row">
                        {icon && <ContestSVG />}
                        <View>
                            <Text className="font-latoBold text-xl md:text-[30px] md:pt-[10px] leading-5 text-[#23254C]">{title}</Text>
                            {supporting && <Text className="font-latoRegular text-zinc-700 text-sm md:text-[18px]">{supporting}</Text>}
                        </View>
                    </View>

{onPress && 
                            <TouchableOpacity onPress={() =>onPress()}>

                   { buttonText && <Text className="googleLabel font-latoBold text-sm leading-5 text-[#23254C] md:text-[18px]">{buttonText}</Text>}
                    </TouchableOpacity>
|| 
 buttonText && <Text className="googleLabel font-latoBold text-sm leading-5 text-[#23254C]">{buttonText}</Text>
                }
                    {toggle && <ToggleSwitch value={isToggled} onToggle={setIsToggled} />}
                    {dropdown && <TouchableOpacity onPress={handleDropdown}>
                        {isOpen.includes(value) ?
                            <Svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="nav-arrow-up">
                                    <Path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 12.9419C4.80214 13.186 5.19786 13.186 5.44194 12.9419L10 8.38388L14.5581 12.9419C14.8021 13.186 15.1979 13.186 15.4419 12.9419C15.686 12.6979 15.686 12.3021 15.4419 12.0581L10.4419 7.05806C10.1979 6.81398 9.80214 6.81398 9.55806 7.05806L4.55806 12.0581C4.31398 12.3021 4.31398 12.6979 4.55806 12.9419Z" fill="#25314C" />
                                </G>
                            </Svg>
                            :
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="angle-down">
                                    <Path id="angle-down_2" d="M11.9998 16.7498C11.8078 16.7498 11.6157 16.6768 11.4697 16.5298L4.46975 9.52981C4.17675 9.23681 4.17675 8.76177 4.46975 8.46877C4.76275 8.17577 5.23779 8.17577 5.53079 8.46877L12.0008 14.9387L18.4707 8.46877C18.7637 8.17577 19.2388 8.17577 19.5318 8.46877C19.8248 8.76177 19.8248 9.23681 19.5318 9.52981L12.5318 16.5298C12.3838 16.6768 12.1918 16.7498 11.9998 16.7498Z" fill="#25314C" />
                                </G>
                            </Svg>
                        }
                    </TouchableOpacity>}
                </View>
                {children && <View className="w-full h-[1] my-[17] bg-[#D1DADA] opacity-50"></View>}
            </View>
            {children}
        </View>
    )
}
