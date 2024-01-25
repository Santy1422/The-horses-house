import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export const NavHorizontalScroll = ({ tabs, onPress, defaultLink, containerClass }) => {
    const [activeLink, setActiveLink] = useState(defaultLink);

    useEffect(() => {
        setActiveLink(defaultLink);
    }, [defaultLink])
    const handlePress = (link) => {
        setActiveLink(link);
        onPress(link);
    };

    return (
        <View className={`h-[32] ${containerClass && containerClass}`}>
            <ScrollView className="w-full" horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className={`FilterOpcion flex-row gap-x-4 h-full w-full border border-b-[#E6E6E9] border-t-0 border-x-0`} >
                    {
                        tabs.map(tab => {
                            return (
                                <TouchableOpacity key={tab} onPress={() => handlePress(tab)} className="w-auto h-auto items-center justify-center">
                                    <Text className={`font-latoRegular text-sm md:text-[22px] leading-5 pb-2 ${activeLink === tab ? "text-[#23254C] border-2 border-b-[#23254C] border-x-0 border-t-0" : "text-[#80807F]"}`}>{tab}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
