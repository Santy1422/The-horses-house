import { View, TextInput } from "react-native"
import { useEffect, useState } from "react"
import { Svg, Path } from "react-native-svg"


const Search = ({placeholder, setValue}) => {
    
    const [text, setText] = useState(null)
    
    const handlerInput = (text) => { 
        setText(text)
    }

    useEffect( () => {
        setValue(text)
    },[text])
    
    return (
        <View className="main bg-white w-full flex">
            <View className="contenedorSearch flex flex-row border border-[#CCCCCC] rounded h-11 items-center w-full flex-initial ml-0 mt-0 px-[14px] py-[10px]  ">
                <View className="containerIcon flex">
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#BEBDBD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                </View>                
                <TextInput
                    value={text}
                    onChange={handlerInput}
                    placeholder={placeholder}
                    className="text flex font-latoRegular text-base leading-6 text-[#6D6E6D] w-full self-center ml-2"
                />                
            </View>    
        </View>
    )
}

export default Search