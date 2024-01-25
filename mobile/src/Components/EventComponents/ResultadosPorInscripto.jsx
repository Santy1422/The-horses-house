import { Text, View } from "react-native"
import { G, Path, Svg } from "react-native-svg"
import Badge from "../Reusable/Badge"

const ResultadosPorInscripto = ({ jinete, caballo, clubInitials, tiempoOptimo, tiempo, faltas, tiempo1, faltas1, posicion, i, td, to, dosf, dr, sd, desem, estadoCompeticion }) => {
  
    return (
        <View className="flex-row items-center py-[14] md:py-[26] border-b-1 border-gray-300 w-full">
            <View>
                <Text className={`text-labelDarkBlue text-[28px] md:text-[44px] font-latoBold ${i === 0 && 'text-yellow-600'} ${i === 1 && 'text-stone-400'} ${i === 2 && 'text-yellow-700'} ${i > 2 && i < 8 && 'text-orange-400'}`}>{i + 1}</Text>
            </View>
            <View className="px-[16] w-full">
                <View className="flex-row justify-between items-center">
                    <Text className="text-labelDarkBlue text-base md:text-[24px] font-latoBold">{`${jinete ? jinete : "Sin nombre"}`}</Text>
                    <Badge label={estadoCompeticion ? estadoCompeticion : 'R. Parcial'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#EFFBF4]`} labelClass={`font-latoBold text-[14px] md:text-[20px] text-[#1C694E]`} />
                </View>

                <View className="flex-row my-[6]  md:my-[16px]">
                    <Text className="text-zinc-700 text-sm md:text-[22px] font-latoRegular">{caballo.length > 15 ? `${caballo.slice(0, 15)}...`: caballo}</Text>
                    <Text className="text-zinc-700 text-sm md:text-[22px] font-latoRegular border-x-1 border-[#D1DADA] px-[12] mx-[12] md:px-[16] md:mx-[16]">{posicion}</Text>
                    <Text className="text-zinc-700 text-sm md:text-[22px] font-latoRegular">{clubInitials?.length > 15 ? `${clubInitials.slice(0, 15)}...`: clubInitials}</Text>
                </View>
                {(to || td) &&
                    <View className="flex-row justify-between">
                        <View className="flex-row">
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">Recorrido</Text>
                            <View className="flex-row pl-[6] items-center">
                            <View className="w-[16] h-[16] md:w-[24] md:h-[24] md:top-[-2]">
                                <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="stopwatch">
                                        <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                    </G>
                                </Svg>
                                </View>
                                <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo}</Text>
                                <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6]">F {faltas}</Text>
                            </View>
                        </View>
                        {to &&
                            <View className="flex-row items-center">
                                <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular pr-[6]">TO</Text>
                                <View className="w-[16] h-[16] md:w-[24] md:h-[24] md:top-[-2]">
                                    <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="stopwatch">
                                            <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                        </G>
                                    </Svg>
                                </View>
                                <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempoOptimo}</Text>
                            </View>
                        }
                    </View>
                }
                {
                    dr &&
                    <View className="flex-row">
                        <View className="flex-row items-center">
                        <View className="w-[16] h-[16] md:w-[24] md:h-[24] md:top-[-2]">
                            <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="stopwatch">
                                    <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                </G>
                            </Svg>
                            </View>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo}</Text>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6]">F {faltas}</Text>
                        </View>
                        <View className="flex-row items-center ml-[32]">
                            <View className="w-[16] h-[16] md:w-[24] md:h-[24] md:top-[-2]">
                                <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="stopwatch">
                                        <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                    </G>
                                </Svg>
                            </View>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo1}</Text>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6]">F {faltas1}</Text>
                        </View>
                    </View>
                }
                {
                    dosf &&
                    <View>
                        <View className="flex-row items-center">
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular pr-[6] md:pr-[14]">Fase 1</Text>
                            <View className="w-[16] h-[16] md:w-[24] md:h-[24] md:top-[-2]">
                                <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="stopwatch">
                                        <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                    </G>
                                </Svg>
                            </View>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo}</Text>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6] md:ml-[14] md:pl-[14]">F {faltas}</Text>
                        </View>
                        <View className="flex-row items-center mt-[6] md:mt-[16px]">
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular pr-[6] md:pr-[14]">Fase 2</Text>
                            <View className="w-[16] h-[16] md:w-[24] md:h-[24] md:top-[-2]">
                                <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="stopwatch">
                                        <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                    </G>
                                </Svg>
                            </View>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo1}</Text>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6] md:ml-[14] md:pl-[14]">F {faltas1}</Text>
                        </View>
                    </View>
                }
                {
                    desem &&
                    <View className="flex-row">
                        <View className="flex-row items-center">
                            <Text className="text-labelDarkBlue text-sm font-latoRegular pr-[6]">Inic.</Text>
                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="stopwatch">
                                    <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                </G>
                            </Svg>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo}</Text>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6]">F {faltas}</Text>
                        </View>
                        <View className="flex-row items-center ml-[16]">
                            <Text className="text-labelDarkBlue text-sm font-latoRegular pr-[6]">Desemp.</Text>
                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="stopwatch">
                                    <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                </G>
                            </Svg>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo1}</Text>
                            <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6]">F {faltas1}</Text>
                        </View>
                    </View>
                }
                {sd &&
                    <View className="flex-row justify-between">
                        <View className="flex-row">
                            <View className="flex-row items-center">
                                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="stopwatch">
                                        <Path id="stopwatch_2" d="M11.7323 5.30868L12.3543 4.68669C12.5497 4.49135 12.5497 4.17466 12.3543 3.97933C12.159 3.784 11.8423 3.784 11.647 3.97933L10.995 4.63135C10.0696 3.92468 8.91833 3.5 7.66699 3.5C4.63433 3.5 2.16699 5.96733 2.16699 9C2.16699 12.0327 4.63433 14.5 7.66699 14.5C10.6997 14.5 13.167 12.0327 13.167 9C13.167 7.57867 12.6203 6.28601 11.7323 5.30868ZM7.66699 13.5C5.18566 13.5 3.16699 11.4813 3.16699 9C3.16699 6.51867 5.18566 4.5 7.66699 4.5C10.1483 4.5 12.167 6.51867 12.167 9C12.167 11.4813 10.1483 13.5 7.66699 13.5ZM9.30029 9.60002C9.52096 9.76602 9.56574 10.0793 9.39974 10.3C9.30241 10.4306 9.15169 10.5 8.99902 10.5C8.89502 10.5 8.78971 10.4673 8.69971 10.4L7.36637 9.39998C7.24104 9.30532 7.16634 9.15733 7.16634 9V6.66667C7.16634 6.39067 7.39034 6.16667 7.66634 6.16667C7.94234 6.16667 8.16634 6.39067 8.16634 6.66667V8.75L9.30029 9.60002ZM5.50033 2C5.50033 1.724 5.72433 1.5 6.00033 1.5H9.33366C9.60966 1.5 9.83366 1.724 9.83366 2C9.83366 2.276 9.60966 2.5 9.33366 2.5H6.00033C5.72433 2.5 5.50033 2.276 5.50033 2Z" fill="#23254C" />
                                    </G>
                                </Svg>
                                <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular">{tiempo}</Text>
                                <Text className="text-labelDarkBlue text-sm md:text-[22px] font-latoRegular border-l-1 border-[#D1DADA] ml-[6] pl-[6]">F {faltas}</Text>
                            </View>
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}
export default ResultadosPorInscripto