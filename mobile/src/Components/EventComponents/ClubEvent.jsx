import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import { useEffect, useState } from "react"
import CustomToggle from "../Reusable/CustomToggle"

const clubes = ['Asoc.C.Ecu.De Endurance Y P.De Fondo Noa','Centro Ecuestre Portal Andino','Centro Hipico Aires De La Patagonia','Establecimiento Ecuestre El Nogal']

export const ClubEvent = ({setValue}) => {
      
    const [text, setText] = useState('')
    const [isToggled, setIsToggled] = useState(false);
    const [onFocus, setOnFocus] = useState(false)
    

    const handlerChange = (textInput) => {
        setText(textInput)        
    }

    const handlerFocus = () => {
        setOnFocus(true)
    }

    const handlerSelected = (club) => {
        setText(club)
        setOnFocus(false)
        setTimeout(()=> {
            setIsToggled(false) 

        },1000)
    }

    const handleToggle = () => {
        setIsToggled(previousState => !previousState);
    }

    useEffect(()=> {
        setValue(text)
    },[text])

    return (
        <View className="Container w-[100%] pt-9">
            <TouchableOpacity onPress={() => setIsToggled(!isToggled)}className="ClubTitle flex-row justify-between items-center z-20 w-[100%]">
                <View className="contenedorLabel flex flex-row gap-x-[16px]">
                    <Text className="DatosLabel font-latoBold text-lg leading-[25px] text-[#23254C] md:text-[34px] md:pt-[10px]">Sobre el club</Text>
                    {text && <View className="px-2.5 py-0.5 bg-emerald-50 rounded-full justify-center items-center"><Text className="DatosLabel font-latoBold text-sm  text-[#1C694E] md:text-[18px]">Completo</Text></View>}
                </View>
                <CustomToggle onToggle={handleToggle} value={isToggled} />       
            </TouchableOpacity>
            {isToggled &&
                <View className=" flex-col">
                    <View className="labelClub mt-[10px] mb-[6px] z-10 md:mt-[24px] md:mb-[12px]">
                        <Text className="labelClub font-latoRegular text-base leading-6 text-[#23254C] md:text-[22px]">Club que representás </Text>
                    </View>
                    <View className={`Search flex-row bg-white w-full px-[14px] py-[10px] items-center border border-[#CCC] rounded-md z-10 shadow-sm ${onFocus ? 'border-[#6597DD] ' : 'border-[#CCC]'}` } >
                        {!text &&  <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <Path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#BEBDBD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>}
                        <TextInput  onFocus={handlerFocus} onChangeText={handlerChange} value={text} className="inputSearch pl-2 md:text-[18px]" placeholder="Buscar club o ubicación" ></TextInput>
                    </View>                        
                        {onFocus && 
                            <View className="contenedorClubRecordatorio ">
                                <View className="contenedorClubs bg-white border border-gray-300 rounded px-[14px] pb-[10px] mb-6 flex flex-col gap-[20px] mt-2 ml-0 pl-0">
                                    {clubes.filter((club) => club.includes(text))
                                        .map((club, index) => (
                                            <TouchableOpacity key={index} onPress={() => handlerSelected(club)}>
                                                <Text className="club font-latoRegular text-sm font-normal leading-5 text-[#23254C] md:text-[18px]">
                                                {club}
                                                </Text>
                                            </TouchableOpacity>
                                    )   )   }
                                </View>

                            </View>
                        }                        
                    <View className="containerLabelClub flex mt-[6px]">
                        <Text className="labelClub font-latoRegular text-sm leading-5 text-[#838383] md:text-[18px]">Debe estar registrado en la Federación Ecuestre Argentina. </Text>
                    </View>
                </View>
                }
        </View>
    )
}