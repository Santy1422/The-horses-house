import React from "react";
import { Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { Mask, Path, Rect, Svg } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux";
import Arrow from "../Reusable/Arrow";
import { LinearGradient } from "expo-linear-gradient";

export const FirstFederationView = ({setTipoRegistro, setSteps}) => {
    const navigation = useNavigation()

const nextStep = (value) => {
    setTipoRegistro(value)
    setSteps(1)
}

    return(
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="main w-full">
            <ScrollView className=" h-full">
                <View className="flex flex-col px-6 pt-[27] h-full">
                    <View className="containerArrow flex flex-row justify-start">
                        <Arrow/>
                    </View>
                    
                    <View className="contenedorTitulo mt-[27px] flex-1 w-[265]">
                        <Text className="titulo font-latoBold text-2xl leading-8 text-[#23254C] ">Registro de federación o re-federación</Text>
                    </View>

                    <View className="contenedorCuadrados flex flex-col mt-7 w-full">
                        <View className=" flex flex-row w-fit gap-x-4" >
                            
                            <TouchableOpacity onPress={() => nextStep('jinete')} className="h-[188] bg-white w-1/3 flex flex-1 flex-col justify-center items-start border border-[#D1DADA] rounded p-4 " >
                                <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <Path d="M13.0094 11.6458C10.47 11.6458 8.40521 9.57992 8.40521 7.04167C8.40521 4.50342 10.47 2.4375 13.0094 2.4375C15.5487 2.4375 17.6135 4.50342 17.6135 7.04167C17.6135 9.57992 15.5487 11.6458 13.0094 11.6458ZM13.0094 4.0625C11.366 4.0625 10.0302 5.39825 10.0302 7.04167C10.0302 8.68508 11.366 10.0208 13.0094 10.0208C14.6528 10.0208 15.9885 8.68508 15.9885 7.04167C15.9885 5.39825 14.6517 4.0625 13.0094 4.0625ZM17.3296 23.5625H8.66957C6.0479 23.5625 4.60376 22.1271 4.60376 19.5206C4.60376 16.6379 6.23526 13.2708 10.8329 13.2708H15.1663C19.7639 13.2708 21.3954 16.6368 21.3954 19.5206C21.3954 22.1271 19.9513 23.5625 17.3296 23.5625ZM10.8329 14.8958C6.56134 14.8958 6.22876 18.4351 6.22876 19.5206C6.22876 21.215 6.95898 21.9375 8.66957 21.9375H17.3296C19.0402 21.9375 19.7704 21.215 19.7704 19.5206C19.7704 18.4362 19.4378 14.8958 15.1663 14.8958H10.8329Z" fill="#25314C"/>
                                </Svg>
                                <Text className="label font-latoBold text-sm leading-5 text-[#23254C] mt-3">Jinete</Text>                           
                            </TouchableOpacity>
                            
                            <View className=" flex flex-col w-2/3 h-[204] gap-y-4">
                                <View className=" flex flex-row h-1/2 flex-1 gap-x-4">
                                    
                                        <TouchableOpacity  onPress={() => nextStep('caballo')} className="h-full bg-white flex-1 w-1/2 flex flex-col justify-center items-start border border-[#D1DADA] rounded p-4">
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <Path d="M10.3663 0C10.5313 0 10.6965 0 10.8615 0C10.8839 0.0102832 10.9053 0.0258984 10.9289 0.029707C12.6027 0.3104 13.6871 1.57752 13.6718 3.27272C13.6688 3.61321 13.7667 3.8402 14.0112 4.08814C15.4809 5.57959 16.9373 7.08398 18.3712 8.60971C19.0956 9.38057 19.379 10.3262 19.243 11.3827C19.0054 13.2295 17.0542 14.4079 15.3049 13.7646C14.6758 13.5335 14.1886 13.124 13.8352 12.5935C13.5248 12.8498 13.2468 13.1541 12.9044 13.3419C12.565 13.5277 12.4672 13.7604 12.4215 14.1207C12.1107 16.5613 10.2936 18.6313 7.92008 19.2669C7.52437 19.3728 7.11419 19.4238 6.71047 19.5H5.79641C5.57171 19.4642 5.347 19.4307 5.12267 19.3918C2.25899 18.8956 0.0492442 16.3259 0.0126817 13.4242C-0.00636122 11.9076 -0.00217177 10.3906 0.0134435 8.87402C0.0248692 7.76306 0.264811 6.69246 0.752692 5.69385C2.03733 3.06592 4.12673 1.51049 7.02392 1.05536C7.33585 1.00623 7.34727 1.00928 7.33508 0.696211C7.32137 0.355342 7.46115 0.125684 7.7765 0C7.94141 0 8.10671 0 8.27162 0C8.2998 0.0114258 8.32722 0.0289453 8.35655 0.0331348C8.85966 0.100928 9.31441 0.291357 9.73107 0.577002C9.79125 0.618135 9.84952 0.662314 9.94549 0.731631C9.90474 0.352295 10.0658 0.131016 10.3663 0ZM11.2922 13.9562C10.9776 13.9379 10.6733 13.9364 10.3728 13.9002C8.61782 13.6877 7.17436 12.0233 7.20902 10.2626C7.21549 9.92481 7.45772 9.67307 7.77764 9.67154C8.10175 9.66964 8.32989 9.90996 8.35388 10.2539C8.3695 10.474 8.39007 10.6987 8.44719 10.9109C8.73969 11.9936 9.7185 12.7706 10.8059 12.798C11.9987 12.8281 12.9863 12.1311 13.3641 10.9927C13.4844 10.6294 13.6932 10.474 14.0131 10.5087C14.3006 10.5395 14.488 10.7638 14.515 11.1085C14.5836 11.9826 15.2177 12.6594 16.0884 12.7877C16.8908 12.9062 17.7379 12.3924 18.0148 11.5819C18.3107 10.7151 18.0696 9.9469 17.4602 9.30363C16.072 7.83885 14.6689 6.38777 13.2632 4.93937C12.7124 4.37188 12.0387 4.00131 11.2743 3.79755C11.2176 3.78231 11.1582 3.77584 11.1022 3.76594C11.0923 3.79983 11.0858 3.81164 11.0858 3.82383C11.0843 4.0969 11.0846 4.3696 11.0824 4.64268C11.0793 5.02734 10.8489 5.28937 10.5118 5.2928C10.1729 5.29661 9.94207 5.03801 9.94054 4.64915C9.93902 4.16051 9.95235 3.6711 9.93712 3.18284C9.90931 2.30153 9.49151 1.66893 8.68637 1.29987C8.62772 1.27321 8.56297 1.25988 8.48033 1.2336V1.47431C8.48033 2.50263 8.48033 3.53095 8.47995 4.55927C8.47995 4.64153 8.47995 4.72494 8.46852 4.80606C8.43158 5.0681 8.21868 5.26728 7.95703 5.29128C7.70147 5.31451 7.45087 5.14884 7.36822 4.89976C7.3507 4.84682 7.34004 4.79121 7.32366 4.72685C6.63621 4.84225 6.01236 5.09628 5.45859 5.5038C4.18081 6.44452 3.53487 7.71545 3.52763 9.30249C3.52078 10.8195 3.52611 12.3364 3.52611 13.8534C3.52611 14.3782 3.32425 14.582 2.80552 14.5823C2.3801 14.5823 1.95506 14.5823 1.52964 14.5827C1.46909 14.5827 1.40815 14.5877 1.34455 14.5907C1.78025 16.4463 3.69331 18.4812 6.49453 18.349C9.23557 18.2196 11.0504 16.0586 11.2922 13.9566V13.9562ZM7.33623 2.15871C7.102 2.19718 6.90052 2.22193 6.70286 2.26421C3.42366 2.9688 1.15564 5.77269 1.14993 9.1292C1.14764 10.487 1.14993 11.8447 1.14993 13.2025V13.4272H2.38391C2.38391 13.3396 2.38391 13.265 2.38391 13.1899C2.38391 11.8958 2.37744 10.6012 2.38544 9.30706C2.39724 7.39553 3.15668 5.84391 4.66602 4.66972C5.4106 4.09081 6.26182 3.74461 7.19036 3.58274C7.2433 3.5736 7.32937 3.51647 7.33051 3.47991C7.34042 3.0503 7.33699 2.62069 7.33699 2.15909L7.33623 2.15871ZM11.0911 1.24922V2.551C11.5748 2.70372 12.0463 2.85264 12.5159 3.00079C12.4942 2.21736 11.8277 1.38709 11.0911 1.24922Z" fill="#25314C"/>
                                                <Path d="M11.9614 7.16836C11.9614 6.99088 11.9576 6.8134 11.9625 6.6363C11.9709 6.3179 12.2021 6.07758 12.5079 6.06311C12.8034 6.04902 13.0807 6.28058 13.0963 6.59289C13.115 6.97222 13.1146 7.35346 13.0971 7.7328C13.0818 8.05653 12.8072 8.282 12.4946 8.26448C12.1903 8.24696 11.9686 8.00664 11.9621 7.68176C11.9587 7.51076 11.9614 7.33975 11.9617 7.16836H11.9614Z" fill="#25314C"/>
                                            </Svg>
                                        <Text className="label font-latoBold text-sm leading-5 text-[#23254C] mt-3">Caballo</Text>
                                        </TouchableOpacity>
                                    
                                    
                                        <TouchableOpacity onPress={() => nextStep('binomio')}  className="h-full bg-white flex-1 w-1/2 flex flex-col justify-center items-start border border-[#D1DADA] rounded p-4">
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <Path d="M13.0094 11.6458C10.47 11.6458 8.40521 9.57992 8.40521 7.04167C8.40521 4.50342 10.47 2.4375 13.0094 2.4375C15.5487 2.4375 17.6135 4.50342 17.6135 7.04167C17.6135 9.57992 15.5487 11.6458 13.0094 11.6458ZM13.0094 4.0625C11.366 4.0625 10.0302 5.39825 10.0302 7.04167C10.0302 8.68508 11.366 10.0208 13.0094 10.0208C14.6528 10.0208 15.9885 8.68508 15.9885 7.04167C15.9885 5.39825 14.6517 4.0625 13.0094 4.0625ZM17.3296 23.5625H8.66957C6.0479 23.5625 4.60376 22.1271 4.60376 19.5206C4.60376 16.6379 6.23526 13.2708 10.8329 13.2708H15.1663C19.7639 13.2708 21.3954 16.6368 21.3954 19.5206C21.3954 22.1271 19.9513 23.5625 17.3296 23.5625ZM10.8329 14.8958C6.56134 14.8958 6.22876 18.4351 6.22876 19.5206C6.22876 21.215 6.95898 21.9375 8.66957 21.9375H17.3296C19.0402 21.9375 19.7704 21.215 19.7704 19.5206C19.7704 18.4362 19.4378 14.8958 15.1663 14.8958H10.8329Z" fill="#25314C"/>
                                            </Svg>
                                            <Text className="label font-latoBold text-sm leading-5 text-[#23254C] mt-3">Binomio</Text>
                                        </TouchableOpacity> 
                                    
                                </View>
                                <View className=" flex flex-row h-1/2 flex-1">
                                    <TouchableOpacity onPress={() => nextStep('fei')} className="h-full bg-white flex-1 w-full flex flex-col justify-center items-start border border-[#D1DADA] rounded p-4">
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <Path d="M13.0094 11.6458C10.47 11.6458 8.40521 9.57992 8.40521 7.04167C8.40521 4.50342 10.47 2.4375 13.0094 2.4375C15.5487 2.4375 17.6135 4.50342 17.6135 7.04167C17.6135 9.57992 15.5487 11.6458 13.0094 11.6458ZM13.0094 4.0625C11.366 4.0625 10.0302 5.39825 10.0302 7.04167C10.0302 8.68508 11.366 10.0208 13.0094 10.0208C14.6528 10.0208 15.9885 8.68508 15.9885 7.04167C15.9885 5.39825 14.6517 4.0625 13.0094 4.0625ZM17.3296 23.5625H8.66957C6.0479 23.5625 4.60376 22.1271 4.60376 19.5206C4.60376 16.6379 6.23526 13.2708 10.8329 13.2708H15.1663C19.7639 13.2708 21.3954 16.6368 21.3954 19.5206C21.3954 22.1271 19.9513 23.5625 17.3296 23.5625ZM10.8329 14.8958C6.56134 14.8958 6.22876 18.4351 6.22876 19.5206C6.22876 21.215 6.95898 21.9375 8.66957 21.9375H17.3296C19.0402 21.9375 19.7704 21.215 19.7704 19.5206C19.7704 18.4362 19.4378 14.8958 15.1663 14.8958H10.8329Z" fill="#25314C"/>
                                            </Svg>
                                            <Text className="label font-latoBold text-sm leading-5 text-[#23254C] mt-3">Registro fei</Text>
                                    </TouchableOpacity> 
                                </View>
                            </View>
                        </View>    
                        
                        <View className=" flex-row h-[86] mt-4 w-fit gap-x-4  ">

                            <TouchableOpacity  onPress={() => nextStep('federarClub')} className="h-full bg-white flex-1 w-1/2 flex flex-col justify-center items-start border border-[#D1DADA]  rounded p-4">
                                <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <Path d="M13 24.6463C12.9133 24.6463 12.8266 24.6322 12.7432 24.604C11.0218 24.0299 2.4375 20.7159 2.4375 11.7958V5.41718C2.4375 5.03043 2.71053 4.69556 3.09078 4.62081C8.37745 3.56348 10.2516 2.63409 12.6252 1.45651C12.8549 1.34276 13.1581 1.32768 13.3856 1.44143C15.7267 2.62118 17.5759 3.55373 22.9103 4.62081C23.2905 4.69665 23.5636 5.03043 23.5636 5.41718V11.7968C23.5636 20.717 14.9793 24.0309 13.2579 24.6051C13.1734 24.6322 13.0867 24.6463 13 24.6463ZM4.0625 6.08024V11.7958C4.0625 19.2329 11.0153 22.2609 13 22.9727C14.9847 22.2609 21.9375 19.2318 21.9375 11.7958V6.08024C17.1481 5.07816 15.1341 4.13764 13.0161 3.07489C10.7661 4.18748 8.81292 5.08791 4.0625 6.08024Z" fill="#25314C"/>
                                </Svg>
                                <Text className=" label font-latoBold text-sm leading-5 text-[#23254C] mt-3">Club</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity  onPress={() => nextStep('pasaporteChip')}  className="h-full bg-white w-1/2 flex-1 flex flex-col justify-center items-start border border-[#D1DADA] rounded p-4">
                                <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <Path d="M22.75 15.4375H21.3958V10.5625H22.75C23.1985 10.5625 23.5625 10.1985 23.5625 9.75C23.5625 9.3015 23.1985 8.9375 22.75 8.9375H21.3958V8.66667C21.3958 6.04717 19.9528 4.60417 17.3333 4.60417H17.0625V3.25C17.0625 2.8015 16.6985 2.4375 16.25 2.4375C15.8015 2.4375 15.4375 2.8015 15.4375 3.25V4.60417H10.5625V3.25C10.5625 2.8015 10.1985 2.4375 9.75 2.4375C9.3015 2.4375 8.9375 2.8015 8.9375 3.25V4.60417H8.66667C6.04717 4.60417 4.60417 6.04717 4.60417 8.66667V8.9375H3.25C2.8015 8.9375 2.4375 9.3015 2.4375 9.75C2.4375 10.1985 2.8015 10.5625 3.25 10.5625H4.60417V15.4375H3.25C2.8015 15.4375 2.4375 15.8015 2.4375 16.25C2.4375 16.6985 2.8015 17.0625 3.25 17.0625H4.60417V17.3333C4.60417 19.9528 6.04717 21.3958 8.66667 21.3958H8.9375V22.75C8.9375 23.1985 9.3015 23.5625 9.75 23.5625C10.1985 23.5625 10.5625 23.1985 10.5625 22.75V21.3958H15.4375V22.75C15.4375 23.1985 15.8015 23.5625 16.25 23.5625C16.6985 23.5625 17.0625 23.1985 17.0625 22.75V21.3958H17.3333C19.9528 21.3958 21.3958 19.9528 21.3958 17.3333V17.0625H22.75C23.1985 17.0625 23.5625 16.6985 23.5625 16.25C23.5625 15.8015 23.1985 15.4375 22.75 15.4375ZM19.7708 17.3333C19.7708 19.0417 19.0417 19.7708 17.3333 19.7708H8.66667C6.95825 19.7708 6.22917 19.0417 6.22917 17.3333V8.66667C6.22917 6.95825 6.95825 6.22917 8.66667 6.22917H17.3333C19.0417 6.22917 19.7708 6.95825 19.7708 8.66667V17.3333ZM15.1667 8.39583H10.8333C9.30692 8.39583 8.39583 9.30692 8.39583 10.8333V15.1667C8.39583 16.6931 9.30692 17.6042 10.8333 17.6042H15.1667C16.6931 17.6042 17.6042 16.6931 17.6042 15.1667V10.8333C17.6042 9.30692 16.6931 8.39583 15.1667 8.39583ZM15.9792 15.1667C15.9792 15.8048 15.8048 15.9792 15.1667 15.9792H10.8333C10.1953 15.9792 10.0208 15.8048 10.0208 15.1667V10.8333C10.0208 10.1953 10.1953 10.0208 10.8333 10.0208H15.1667C15.8048 10.0208 15.9792 10.1953 15.9792 10.8333V15.1667Z" fill="#25314C"/>
                                </Svg>
                                <Text className="label font-latoBold text-sm leading-5 text-[#23254C] mt-3">pasaporte CHIP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}