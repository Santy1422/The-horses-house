import { LinearGradient } from "expo-linear-gradient"
import { Dimensions, Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { BackArrow } from "../../Reusable/BackArrow"
import { useEffect, useState } from "react";
import { G, Path, Svg } from "react-native-svg";
import { BlurView } from "expo-blur";

const FotosDetail = ({ setIsFotoModalVisible, isFotoModalVisible, selectedImg, nombreEvento }) => {

    const [imageHeight, setImageHeight] = useState();

    useEffect(() => {
        const screenWidth = Dimensions.get('window').width;
        const imageWidth = screenWidth;

        const fetchImageHeights = async () => {
            const { width, height } = await getImageSize(selectedImg);
            const aspectRatio = imageWidth / (width + 48);
            const calculatedHeight = height * aspectRatio;
            setImageHeight(calculatedHeight);
        };
        fetchImageHeights();
    }, []);

    const getImageSize = (imageUrl) => {
        return new Promise((resolve, reject) => {
            Image.getSize(imageUrl, (width, height) => {
                resolve({ width, height });
            }, reject);
        });
    };
    return (
        <Modal
            animationType='fade'
            visible={isFotoModalVisible}
            className='w-full h-full'

        >
            <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="flex h-full w-full">
                <TouchableOpacity onPress={() => setIsFotoModalVisible(false)} className="absolute top-[71] left-[24] z-10 w-11 h-11 md:w-16 md:h-16 bg-white rounded border border-stone-300 justify-center items-center inline-flex">
                    <Svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                        <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C" />
                    </Svg>
                </TouchableOpacity>
                <View className="w-full items-center justify-center h-11  mt-[71] md:mt-[90]">
                    <Text className="font-latoBold center text-[18px] md:text-[34px] text-labelDarkBlue">Imagen Digital</Text>
                </View>
                <ScrollView className="w-full">
                    <View className="w-full px-[24] mt-[27] relative">
                        <Image
                            className="rounded-[10px]"
                            source={{ uri: selectedImg }}
                            style={{
                                width: '100%',
                                height: imageHeight,
                                marginBottom: 8,
                            }} />
                        {
                            // !blured ?
                                <View className="absolute rounded w-full h-full justify-center items-center top-0 left-[24]">
                                    <Image className="w-[200px] h-[71px]" source={require('../../../images/marca-de-agua.png')} />
                                </View>
                                // :

                                // <BlurView intensity={5} className="absolute rounded w-full h-full justify-center items-center top-0 left-[24]">
                                //     <Image className="w-[200px] h-[71px]" source={require('../../../images/marca-de-agua.png')} />
                                // </BlurView>
                        }
                    </View>
                    <View className="w-full px-[24] mt-[19] mb-[50]">
                        <Text className="text-labelDarkBlue text-lg font-latoBold">{nombreEvento}</Text>
                        <View className="w-full bg-white rounded-[10px] h-10 pl-[15px] pr-6 py-2 mt-[24] flex-row items-center">
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="calendar">
                                    <Path id="calendar_2" d="M17.624 3.75H16.4001V3C16.4001 2.586 16.0712 2.25 15.6658 2.25C15.2605 2.25 14.9315 2.586 14.9315 3V3.75H8.5673V3C8.5673 2.586 8.23832 2.25 7.83297 2.25C7.42763 2.25 7.09865 2.586 7.09865 3V3.75H5.87477C3.50729 3.75 2.20312 5.082 2.20312 7.5V18C2.20312 20.418 3.50729 21.75 5.87477 21.75H17.624C19.9915 21.75 21.2957 20.418 21.2957 18V7.5C21.2957 5.082 19.9915 3.75 17.624 3.75ZM5.87477 5.25H7.09865V6C7.09865 6.414 7.42763 6.75 7.83297 6.75C8.23832 6.75 8.5673 6.414 8.5673 6V5.25H14.9315V6C14.9315 6.414 15.2605 6.75 15.6658 6.75C16.0712 6.75 16.4001 6.414 16.4001 6V5.25H17.624C19.1681 5.25 19.827 5.923 19.827 7.5V8.25H3.67178V7.5C3.67178 5.923 4.33072 5.25 5.87477 5.25ZM17.624 20.25H5.87477C4.33072 20.25 3.67178 19.577 3.67178 18V9.75H19.827V18C19.827 19.577 19.1681 20.25 17.624 20.25ZM8.83168 13C8.83168 13.552 8.39402 14 7.85258 14C7.31211 14 6.86845 13.552 6.86845 13C6.86845 12.448 7.30231 12 7.84278 12H7.85258C8.39304 12 8.83168 12.448 8.83168 13ZM12.7481 13C12.7481 13.552 12.3104 14 11.769 14C11.2285 14 10.7849 13.552 10.7849 13C10.7849 12.448 11.2187 12 11.7592 12H11.769C12.3095 12 12.7481 12.448 12.7481 13ZM16.6645 13C16.6645 13.552 16.2269 14 15.6854 14C15.1449 14 14.7013 13.552 14.7013 13C14.7013 12.448 15.1351 12 15.6756 12H15.6854C16.2259 12 16.6645 12.448 16.6645 13ZM8.83168 17C8.83168 17.552 8.39402 18 7.85258 18C7.31211 18 6.86845 17.552 6.86845 17C6.86845 16.448 7.30231 16 7.84278 16H7.85258C8.39304 16 8.83168 16.448 8.83168 17ZM12.7481 17C12.7481 17.552 12.3104 18 11.769 18C11.2285 18 10.7849 17.552 10.7849 17C10.7849 16.448 11.2187 16 11.7592 16H11.769C12.3095 16 12.7481 16.448 12.7481 17ZM16.6645 17C16.6645 17.552 16.2269 18 15.6854 18C15.1449 18 14.7013 17.552 14.7013 17C14.7013 16.448 15.1351 16 15.6756 16H15.6854C16.2259 16 16.6645 16.448 16.6645 17Z" fill="#231D43" />
                                </G>
                            </Svg>
                            <Text className="pl-[7.5] text-base font-latoRegular">Fecha</Text>
                        </View>
                        <View className="w-full bg-white rounded-[10px] h-10 pl-[15px] pr-6 py-2 mt-[10] flex-row items-center">
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="image">
                                    <Path id="image_2" d="M17.624 3.25H5.87477C3.50729 3.25 2.20312 4.582 2.20312 7V17C2.20312 19.418 3.50729 20.75 5.87477 20.75H17.624C19.9915 20.75 21.2957 19.418 21.2957 17V7C21.2957 4.582 19.9915 3.25 17.624 3.25ZM5.87477 4.75H17.624C19.1681 4.75 19.827 5.423 19.827 7V13.189L15.9008 9.17993C15.2546 8.51893 14.1188 8.51893 13.4726 9.17993L8.81208 13.939L8.06795 13.1799C7.42174 12.5189 6.286 12.5189 5.63979 13.1799L3.67178 15.1899V7C3.67178 5.423 4.33072 4.75 5.87477 4.75ZM17.624 19.25H5.87477C4.43352 19.25 3.77162 18.654 3.68839 17.293L6.67758 14.24C6.80193 14.114 6.90474 14.114 7.02909 14.24L7.94855 15.179C8.40579 15.647 9.21746 15.646 9.67274 15.179L14.5095 10.239C14.6338 10.113 14.7366 10.113 14.861 10.239L19.8251 15.3091V17C19.827 18.577 19.1681 19.25 17.624 19.25ZM6.60909 9C6.60909 8.31 7.15739 7.75 7.83297 7.75C8.50856 7.75 9.05686 8.31 9.05686 9C9.05686 9.69 8.50856 10.25 7.83297 10.25C7.15739 10.25 6.60909 9.69 6.60909 9Z" fill="#25314C" />
                                </G>
                            </Svg>
                            <Text className="pl-[7.5] text-base font-latoRegular">Imagen.jpg</Text>
                        </View>
                        <View className="w-full bg-white rounded-[10px] h-10 pl-[15px] pr-6 py-2 mt-[10] flex-row items-center">
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="camera">
                                    <Path id="camera_2" d="M17.624 6.25H16.1946L15.7186 4.78906C15.4181 3.86906 14.578 3.25 13.6282 3.25H9.87054C8.92081 3.25 8.08073 3.86906 7.78015 4.78906L7.30422 6.25H5.87477C3.50729 6.25 2.20312 7.582 2.20312 10V18C2.20312 20.418 3.50729 21.75 5.87477 21.75H17.624C19.9915 21.75 21.2957 20.418 21.2957 18V10C21.2957 7.582 19.9915 6.25 17.624 6.25ZM19.827 18C19.827 19.577 19.1681 20.25 17.624 20.25H5.87477C4.33072 20.25 3.67178 19.577 3.67178 18V10C3.67178 8.423 4.33072 7.75 5.87477 7.75H7.83297C8.14923 7.75 8.42917 7.54306 8.53001 7.23706L9.17446 5.26196C9.27433 4.95496 9.55429 4.74902 9.87054 4.74902H13.6282C13.9445 4.74902 14.2245 4.95496 14.3243 5.26196L14.9688 7.23608C15.0696 7.54208 15.3496 7.74902 15.6658 7.74902H17.624C19.1681 7.74902 19.827 8.42202 19.827 9.99902V18ZM11.7494 10.25C9.72558 10.25 8.07775 11.932 8.07775 14C8.07775 16.068 9.72558 17.75 11.7494 17.75C13.7732 17.75 15.421 16.068 15.421 14C15.421 11.932 13.7732 10.25 11.7494 10.25ZM11.7494 16.25C10.5353 16.25 9.54641 15.241 9.54641 14C9.54641 12.759 10.5353 11.75 11.7494 11.75C12.9635 11.75 13.9524 12.759 13.9524 14C13.9524 15.241 12.9635 16.25 11.7494 16.25ZM18.1136 10.5C18.1136 11.052 17.6749 11.5 17.1345 11.5C16.594 11.5 16.1554 11.052 16.1554 10.5C16.1554 9.948 16.594 9.5 17.1345 9.5C17.6749 9.5 18.1136 9.948 18.1136 10.5Z" fill="#25314C" />
                                </G>
                            </Svg>
                            <Text className="pl-[7.5] text-base font-latoRegular">Camara</Text>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </Modal>
    )
}
export default FotosDetail