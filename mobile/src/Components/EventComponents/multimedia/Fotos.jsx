import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { useEffect, useState } from "react";
import { Dimensions, Image, View, Text, TouchableOpacity } from "react-native"
import { G, Path, Svg } from "react-native-svg";
import { useSelector } from "react-redux";

const Fotos = ({ images, nombreEvento, setSelectedImg, setIsFotoModalVisible }) => {
    const [columns, setColumns] = useState(2);
    const [imageHeights, setImageHeights] = useState([]);
    const navigation = useNavigation()

    const user = useSelector((state) => state.ReducerAuth.profile)

    // --------- Acomodado de imagenes para respetar el aspect ratio ----------

    useEffect(() => {
        const screenWidth = Dimensions.get('window').width;
        const imageWidth = screenWidth / columns;

        const fetchImageHeights = async () => {
            const heights = [];
            for (const img of images) {
                const { width, height } = await getImageSize(img);
                const aspectRatio = imageWidth / width;
                const calculatedHeight = height * aspectRatio;
                heights.push(calculatedHeight);
            }
            setImageHeights(heights);
        };
        fetchImageHeights();
    }, [images, columns]);

    const getImageSize = (imageUrl) => {
        return new Promise((resolve, reject) => {
            Image.getSize(imageUrl, (width, height) => {
                resolve({ width, height });
            }, reject);
        });
    };


    // --------------- Renderizado de imagenes segun tipo de usuario -----------

    const renderImages = () => {
        let column1 = [];
        let column2 = [];
        if (user.userType === "free") {
            images?.forEach((img, i) => {
                const image = (
                    // <TouchableOpacity onPress={() => navigation.navigate("FotosDetail")} key={i} className="relative">
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedImg(img)
                            setIsFotoModalVisible(true)
                        }}
                        key={i}
                        className="relative">
                        <Image
                            className="rounded"
                            source={{ uri: img }}
                            style={{
                                width: '100%',
                                height: imageHeights[i],
                                marginBottom: 8,
                            }}
                        />
                        {
                            i < 3 ?
                                <View className="absolute rounded w-full h-full justify-center items-center top-0 left-0">
                                    <Image className="w-[118.87px] h-[41px]" source={require('../../../images/marca-de-agua.png')} />
                                </View>
                                :

                                <BlurView intensity={5} className="absolute rounded w-full h-full justify-center items-center top-0 left-0">
                                    <Image className="w-[118.87px] h-[41px]" source={require('../../../images/marca-de-agua.png')} />
                                </BlurView>
                        }
                    </TouchableOpacity>
                );

                if (i % 2 === 0) {
                    column1.push(image);
                } else {
                    column2.push(image);
                }
            });
        } else if (user.userType === "simple") {
            images?.forEach((img, i) => {
                const image = (
                    <TouchableOpacity key={i} className="relative">
                        <Image
                            className="rounded"
                            source={{ uri: img }}
                            style={{
                                width: '100%',
                                height: imageHeights[i],
                                marginBottom: 8,
                            }}
                        />
                        <View className="absolute w-full h-full justify-center items-center top-0 left-0">
                            <Image className="w-[118.87px] h-[41px]" source={require('../../../images/marca-de-agua.png')} />
                        </View>
                    </TouchableOpacity>
                );

                if (i % 2 === 0) {
                    column1.push(image);
                } else {
                    column2.push(image);
                }
            });
        } else if (user.userType === "premium") {
            images?.forEach((img, i) => {
                const image = (
                    <Image
                        className="rounded"
                        source={{ uri: img }}
                        style={{
                            width: '100%',
                            height: imageHeights[i],
                            marginBottom: 8,
                        }}
                    />
                );

                if (i % 2 === 0) {
                    column1.push(image);
                } else {
                    column2.push(image);
                }
            });

        } else if (user.userType === "super premium") {
            images?.forEach((img, i) => {
                const image = (
                    <Image
                        className="rounded"
                        source={{ uri: img }}
                        style={{
                            width: '100%',
                            height: imageHeights[i],
                            marginBottom: 8,
                        }}
                    />
                );

                if (i % 2 === 0) {
                    column1.push(image);
                } else {
                    column2.push(image);
                }
            });
        }


        return (
            <View style={{ flexDirection: 'row' }}>
                <View className="pr-[4]" style={{ flex: 1 }}>{column1}</View>
                <View className="pl-[4]" style={{ flex: 1 }}>{column2}</View>
            </View>
        );
    };

    // ------------------------- Vista final -------------------------
    
    return (
        <View className="pruebasContenedor mt-[10px] w-full">
            {images.length > 0 ?
                renderImages()
                :
                <View className="mt-[55px] md:mt-[300] w-full items-center">
                    <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                        <Svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="image">
                                <Path id="image_2" d="M17.624 3.25H5.87477C3.50729 3.25 2.20312 4.582 2.20312 7V17C2.20312 19.418 3.50729 20.75 5.87477 20.75H17.624C19.9915 20.75 21.2957 19.418 21.2957 17V7C21.2957 4.582 19.9915 3.25 17.624 3.25ZM5.87477 4.75H17.624C19.1681 4.75 19.827 5.423 19.827 7V13.189L15.9008 9.17993C15.2546 8.51893 14.1188 8.51893 13.4726 9.17993L8.81208 13.939L8.06795 13.1799C7.42174 12.5189 6.286 12.5189 5.63979 13.1799L3.67178 15.1899V7C3.67178 5.423 4.33072 4.75 5.87477 4.75ZM17.624 19.25H5.87477C4.43352 19.25 3.77162 18.654 3.68839 17.293L6.67758 14.24C6.80193 14.114 6.90474 14.114 7.02909 14.24L7.94855 15.179C8.40579 15.647 9.21746 15.646 9.67274 15.179L14.5095 10.239C14.6338 10.113 14.7366 10.113 14.861 10.239L19.8251 15.3091V17C19.827 18.577 19.1681 19.25 17.624 19.25ZM6.60909 9C6.60909 8.31 7.15739 7.75 7.83297 7.75C8.50856 7.75 9.05686 8.31 9.05686 9C9.05686 9.69 8.50856 10.25 7.83297 10.25C7.15739 10.25 6.60909 9.69 6.60909 9Z" fill="#25314C" />
                            </G>
                        </Svg>
                    </View>
                    <View className="items-center my-[16] gap-y-[4]">
                        <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Proximamente</Text>
                        <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">En esta seccion vas a poder ver las imagenes del evento.</Text>
                    </View>
                </View>
            }
        </View>
    )
}
export default Fotos