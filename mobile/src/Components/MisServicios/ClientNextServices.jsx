import { Image, TouchableOpacity } from "react-native"
import { Text, View } from "react-native"
import { G, Path, Svg } from "react-native-svg"


const horses = [
    {
        name: 'Llevaneras Chelco',
        img: require('../../../assets/horsePP.png')
    },
    {
        name: 'Okita Z',
        img: { uri: 'https://t3.ftcdn.net/jpg/06/00/89/90/360_F_600899005_i9BNWdJSIsqdrJNGKKl67nJPrNbfhPq7.jpg' }
    }
]

const ClientNextServices = () => {
    return (
        <View className="my-[10]">
            {/* Calendar */}
            <View className="bg-white rounded-[10px] border border-gray-300 py-[16] px-[24]">
                <View className="flex-row justify-between items-center">
                    <View className="p-[10]">
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-left">
                                <Path id="angle-left_2" d="M12.4998 16.4582C12.3398 16.4582 12.1798 16.3974 12.0581 16.2749L6.22475 10.4415C5.98058 10.1974 5.98058 9.80152 6.22475 9.55735L12.0581 3.72402C12.3023 3.47985 12.6981 3.47985 12.9423 3.72402C13.1864 3.96819 13.1864 4.36405 12.9423 4.60821L7.55064 9.99986L12.9423 15.3915C13.1864 15.6357 13.1864 16.0315 12.9423 16.2757C12.8198 16.3974 12.6598 16.4582 12.4998 16.4582Z" fill="#6D6E6D" />
                            </G>
                        </Svg>
                    </View>
                    <Text className="text-base font-latoRegular text-labelDarkBlue">January 2022</Text>
                    <View className="p-[10]">
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="angle-right">
                                <Path id="angle-right_2" d="M7.49982 16.4581C7.33982 16.4581 7.17979 16.3973 7.05813 16.2748C6.81396 16.0307 6.81396 15.6348 7.05813 15.3906L12.4498 9.999L7.05813 4.60736C6.81396 4.36319 6.81396 3.96733 7.05813 3.72316C7.30229 3.479 7.69815 3.479 7.94232 3.72316L13.7757 9.5565C14.0198 9.80066 14.0198 10.1965 13.7757 10.4407L7.94232 16.274C7.81982 16.3974 7.65982 16.4581 7.49982 16.4581Z" fill="#6D6E6D" />
                            </G>
                        </Svg>
                    </View>
                </View>
                <View className="flex-row justify-between">
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Lun</Text>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">2</Text>
                    </View>
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Mar</Text>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">3</Text>
                    </View>
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Mie</Text>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">4</Text>
                    </View>
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Jue</Text>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">5</Text>
                    </View>
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Vie</Text>
                        <Text className="py-[8] px-[8] mt-[2] text-center text-sm font-latoRegular text-white rounded-full bg-labelDarkBlue">6</Text>
                    </View>
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Sab</Text>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">7</Text>
                    </View>
                    <View>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">Dom</Text>
                        <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue">8</Text>
                    </View>

                </View>
            </View>
            {/* Service cards */}

            {
                horses?.map(horse => {
                    return (
                        <View key={horse.name} className="bg-white p-[24] rounded-[10px] border items-start border-gray-300 mt-[10]">
                            <Image
                                source={horse.img}
                                alt="imagen de un caballo"
                                className="z-10 w-[48px] h-[48px] rounded-full"
                            />
                            <View className=" my-[12]">
                                <View>
                                    <Text className="text-xl text-labelDarkBlue font-latoBold">{horse.name}</Text>
                                </View>
                                <View className="flex-row mt-[12]">
                                    <Text className="text-zinc-700 text-sm font-latoRegular">Clinica General</Text>
                                    <View className="flex-row items-center ml-[12]">
                                        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M9 0.9375C4.554 0.9375 0.9375 4.554 0.9375 9C0.9375 13.446 4.554 17.0625 9 17.0625C13.446 17.0625 17.0625 13.446 17.0625 9C17.0625 4.554 13.446 0.9375 9 0.9375ZM9 15.9375C5.17425 15.9375 2.0625 12.8258 2.0625 9C2.0625 5.17425 5.17425 2.0625 9 2.0625C12.8258 2.0625 15.9375 5.17425 15.9375 9C15.9375 12.8258 12.8258 15.9375 9 15.9375ZM11.6475 10.8525C11.8673 11.0722 11.8673 11.4285 11.6475 11.6483C11.538 11.7578 11.394 11.8132 11.25 11.8132C11.106 11.8132 10.962 11.7585 10.8525 11.6483L8.60248 9.39825C8.49673 9.2925 8.4375 9.14923 8.4375 9.00073V5.25073C8.4375 4.94023 8.6895 4.68823 9 4.68823C9.3105 4.68823 9.5625 4.94023 9.5625 5.25073V8.76746L11.6475 10.8525Z" fill="#494949" />
                                        </Svg>
                                        <Text className="horario font-latoRegular text-sm leading-5 text-zinc-700 ml-1">10:00</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="flex-row gap-x-[12]">
                                <TouchableOpacity className="flex-grow flex-row h-11 bg-white rounded border border-gray-300 justify-center items-center">
                                    <Text className="text-sm font-latoRegular text-labelDarkBlue mr-[8]">Editar</Text>
                                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="pen-line">
                                            <Path id="pen-line_2" d="M14.3438 5.01935C14.3444 4.55935 14.1657 4.12685 13.8401 3.80185L12.4475 2.40941C12.1219 2.08441 11.6907 1.90502 11.23 1.90564C10.77 1.90627 10.3381 2.08623 10.0144 2.41185L2.29312 10.1687C2.205 10.2569 2.15625 10.3756 2.15625 10.4994V13.6244C2.15625 13.8831 2.36625 14.0931 2.625 14.0931H5.75C5.87375 14.0931 5.99316 14.0438 6.08066 13.9569L13.8375 6.23502C14.1637 5.91127 14.3431 5.47935 14.3438 5.01935ZM5.55621 13.1563H3.09375V10.6938L8.71433 5.0475L11.2032 7.5356L5.55621 13.1563ZM13.1763 5.57126L11.8676 6.87436L9.37564 4.38313L10.6787 3.07378C10.8262 2.92565 11.0225 2.84438 11.2319 2.84375H11.2325C11.4412 2.84375 11.6375 2.92498 11.7856 3.07248L13.1781 4.465C13.3256 4.61312 13.4069 4.80936 13.4069 5.01874C13.4062 5.22749 13.3244 5.42376 13.1763 5.57126ZM14.3438 13.625C14.3438 13.8838 14.1338 14.0938 13.875 14.0938H9.5C9.24125 14.0938 9.03125 13.8838 9.03125 13.625C9.03125 13.3663 9.24125 13.1563 9.5 13.1563H13.875C14.1338 13.1563 14.3438 13.3663 14.3438 13.625Z" fill="#25314C" />
                                        </G>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-grow h-11 bg-white justify-center items-center">
                                    <Text className="text-sm font-latoBold text-labelDarkBlue">Comentario</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}
export default ClientNextServices