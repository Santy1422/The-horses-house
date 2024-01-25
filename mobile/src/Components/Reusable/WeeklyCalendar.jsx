import { StyleSheet, View, Text } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';
import PagerView from 'react-native-pager-view';
import { format, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';

const WeeklyCalendar = ({ dates, month, setMonth, setCurrentWeek }) => {
    const handlePageSelected = (event) => {
        setMonth(`${format(dates[event.nativeEvent.position][0], 'MMMM', { locale: es })} ${format(dates[event.nativeEvent.position][0], 'Y', { locale: es })}`)
        setCurrentWeek(dates[event.nativeEvent.position])
    };
    return (
        <View className="bg-white rounded border border-gray-300 py-[16] px-[24]">
            <View className="flex-row justify-between items-center">
                <View className="p-[10]">
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="angle-left">
                            <Path id="angle-left_2" d="M12.4998 16.4582C12.3398 16.4582 12.1798 16.3974 12.0581 16.2749L6.22475 10.4415C5.98058 10.1974 5.98058 9.80152 6.22475 9.55735L12.0581 3.72402C12.3023 3.47985 12.6981 3.47985 12.9423 3.72402C13.1864 3.96819 13.1864 4.36405 12.9423 4.60821L7.55064 9.99986L12.9423 15.3915C13.1864 15.6357 13.1864 16.0315 12.9423 16.2757C12.8198 16.3974 12.6598 16.4582 12.4998 16.4582Z" fill="#6D6E6D" />
                        </G>
                    </Svg>
                </View>
                <Text className="text-base font-latoRegular text-labelDarkBlue capitalize">{month}</Text>
                <View className="p-[10]">
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G id="angle-right">
                            <Path id="angle-right_2" d="M7.49982 16.4581C7.33982 16.4581 7.17979 16.3973 7.05813 16.2748C6.81396 16.0307 6.81396 15.6348 7.05813 15.3906L12.4498 9.999L7.05813 4.60736C6.81396 4.36319 6.81396 3.96733 7.05813 3.72316C7.30229 3.479 7.69815 3.479 7.94232 3.72316L13.7757 9.5565C14.0198 9.80066 14.0198 10.1965 13.7757 10.4407L7.94232 16.274C7.81982 16.3974 7.65982 16.4581 7.49982 16.4581Z" fill="#6D6E6D" />
                        </G>
                    </Svg>
                </View>
            </View>

            <View className='h-[80px] bg-white w-full'>
                <PagerView style={styles.viewPager} initialPage={0} onPageSelected={handlePageSelected}>
                    {
                        dates.map((week, i) => {
                            return (
                                <View key={i} className="flex-row justify-between h-[200px]">
                                    {
                                        week.map((day, i) => {
                                            const txt = format(day, 'iii', { locale: es })
                                            const d = format(day, 'd', { locale: es })
                                            const isToday = isSameDay(day, new Date(), { locale: es })
                                            return (
                                                <View key={i}>
                                                    <Text className="py-[10] px-[8] text-center text-sm font-latoRegular text-labelDarkBlue capitalize">{txt}</Text>
                                                    <View className={`w-[35] h-[35] justify-center items-center ${isToday && "rounded-full bg-labelDarkBlue"}`}>
                                                    <Text className={`text-center text-sm font-latoRegular ${isToday ? "text-white" : "text-labelDarkBlue"}`}>{d}</Text>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </PagerView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
});

export default WeeklyCalendar