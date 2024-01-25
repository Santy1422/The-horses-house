import { View } from "react-native"



const DropdownNoUsar = () => {
    // dropdown search en progreso
    
    return (
        <View>
            <Text className="labelCaballo font-latoRegular text-base leading-6 text-[#23254C] pb-1">Caballo para competir</Text>
                    <View className="Search flex-row w-full px-[14px] py-[10px] items-center border border-gray-300 rounded-md ">
                        {horse === null ?
                            <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <Path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#BEBDBD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            :                        
                            <Image source={{uri: horse.horsePic}} className="imagen flex w-[24px] h-[24px] rounded-full"></Image>
                        }
                        <TextInput onFocus={handlerFocus} onChangeText={handlerChange} value={horse ?  horse.name : '' } className="inputSearch font-latoRegular text-base leading-6 text-[#23254C] pl-2" placeholder="Buscar caballo" ></TextInput>
                        
                    </View>
                    {onFocus && 
                            <View className="contenedorClubRecordatorio ">
                                <View className="contenedorClubs border border-gray-300 rounded px-[14px] py-[10px] mb-6 flex flex-col mt-2">                             
                                    {horses.map((horse,index) => {
                                        
                                        return (
                                            <TouchableOpacity onPress={() => handlerSelectedHorse(horse) }>
                                                <View className="contenedorHorse flex flex-row items-center mb-[10px]">

                                                    <Image source={{uri: horse.horsePic}} className="imagen flex w-[24px] h-[24px] rounded-full"></Image>
                                                    <Text className="club font-latoRegular text-sm font-normal leading-5 text-[#23254C]  ml-2" key={index} >{horse.name} </Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })} 
                                    <View className="nuevoCaballo flex flex-row pt-[10px]">
                                        <View className="contenedorIcono">
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path d="M19.75 12C19.75 12.414 19.414 12.75 19 12.75H12.75V19C12.75 19.414 12.414 19.75 12 19.75C11.586 19.75 11.25 19.414 11.25 19V12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H11.25V5C11.25 4.586 11.586 4.25 12 4.25C12.414 4.25 12.75 4.586 12.75 5V11.25H19C19.414 11.25 19.75 11.586 19.75 12Z" fill="#25314C"/>
                                            </Svg>
                                        </View>
                                        <Text className="text font-latoRegular text-sm leading-5 text-[#23254C] ml-2">Añadír un nuevo caballo...</Text>
                                    </View>
                                </View>
                                <Text className="recordatorio font-latoRegular text-sm font-normal leading-5 text-[#6D6E6D] mt-2">Debe estar registrado en la Federación Ecuestre Argentina. </Text>
                            </View>
                        }                                                
        </View>
    )
}

export default DropdownNoUsar