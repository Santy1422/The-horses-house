import { useEffect, useRef } from "react";
import { Text, View, Animated, Easing } from "react-native"
import { G, Path, Svg } from "react-native-svg"

const LoadingScreen = () => {
    const pulseValue = useRef(new Animated.Value(0)).current;

    const startPulseAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseValue, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(pulseValue, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ]),
            { iterations: -1 }
        ).start();
    };

    useEffect(() => {
        startPulseAnimation();
    }, []);

    const pulseOpacity = pulseValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1],
    });
    return (
        <View className="w-full h-full justify-center items-center bg-labelDarkBlue">
            <Animated.View className="items-center" style={{opacity: pulseOpacity}}>
                <Svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G id="Page-1">
                        <G id="Horse-shoe">
                            <Path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M42.0472 43.6511H39.1107C42.9202 36.7463 45.2218 28.9685 45.2218 23.0162C45.2218 10.7146 35.3012 0.793945 22.9996 0.793945C10.698 0.793945 0.777344 10.7146 0.777344 23.0162C0.777344 28.9685 3.95195 36.7463 7.76147 43.6511H4.7456V49.2066H14.9837C19.7456 49.2066 17.8408 45.8733 17.8408 45.8733C17.8408 45.8733 8.55512 31.3495 8.55512 22.8574C8.55512 15.0003 15.0631 8.65109 23.0789 8.65109C31.0948 8.65109 37.6027 15.0003 37.6027 22.8574C37.6027 31.1908 32.1266 39.1273 29.5869 45.6352C28.7139 47.7781 29.6662 49.2066 32.6027 49.2066H42.0472V43.6511Z" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_2" d="M22.2061 5.55566H23.7934" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_3" d="M10.3018 8.73047H11.8891" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_4" d="M33.3174 8.73047H34.9047" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_5" d="M38.873 15.0801H40.4603" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_6" d="M5.53906 15.001H7.12636" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_7" d="M40.46 21.4287H42.0473" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_8" d="M40.46 28.5723H42.0473" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_9" d="M4.74609 28.5723H6.3334" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_10" d="M7.12695 35.7148H8.71425" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_11" d="M38.0791 35.7148H39.6664" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_12" d="M34.9043 43.6514H36.4122" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_13" d="M10.3018 43.6514H11.8891" stroke="white" strokeWidth="0.761905" />
                            <Path id="Shape_14" d="M3.95215 21.4287H5.53945" stroke="white" strokeWidth="0.761905" />
                        </G>
                    </G>
                </Svg>
                <Text className="text-white text-base font-latoRegular mt-[26]">Cargando...</Text>
            </Animated.View>
        </View>
    )
}
export default LoadingScreen