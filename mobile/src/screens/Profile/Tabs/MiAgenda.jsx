import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays, format, areIntervalsOverlapping } from 'date-fns';
import { es } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { G, Path, Svg } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import { locationMedium, calendarMedium, watchMedium } from "../../../../utils/svgIcons";
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import useCalendar from '../../../CustomHooks.jsx/useCalendar';
import { BackArrow } from '../../../Components/Reusable/BackArrow';
import WeeklyCalendar from '../../../Components/Reusable/WeeklyCalendar';
import Button from '../../../Components/Reusable/Button';
import CrossSVG from '../../../../assets/icons/CrossSVG';
import CalendarCard from '../Components/CalendarCard';

const dates = eachWeekOfInterval(
    {
        start: subDays(new Date(), 14),
        end: addDays(new Date(), 28)
    },
    {
        weekStartsOn: 1
    }).reduce((acc, cur) => {
        const allDays = eachDayOfInterval({
            start: cur,
            end: addDays(cur, 6)
        })

        acc.push(allDays)

        return acc;
    }, [])
const MiAgenda = () => {
    const navigation = useNavigation()
    const misEventos = useSelector((state) => state.ReducerEventAll.misEventos);
    const [monthYear, setMonthYear] = useState(`${format(dates[0][0], 'MMMM', { locale: es })} ${format(dates[0][0], 'Y', { locale: es })}`)
    const [currentWeek, setCurrentWeek] = useState(dates[0])
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalInfo, setModalInfo] = useState()

    const {
        addToCalendar,
        requestCalendarPermissions,
        calendario,
        setCalendario
    } = useCalendar()

    useEffect(() => {
        requestCalendarPermissions()
    }, [])


    useEffect(() => {
        setLoading(true)
        const checkWeeklyEvents = () => {
            if (misEventos && misEventos.length > 0) {
                const eventsArr = misEventos?.filter(event =>
                    areIntervalsOverlapping(
                        { start: new Date(event?.fechaInicio), end: new Date(event?.fechaFinalizacion) },
                        { start: new Date(currentWeek[0]), end: new Date(currentWeek[currentWeek.length - 1]) }
                    )
                );
                return eventsArr;
            } else {
                return []
            }
        };

        const checkedEvents = checkWeeklyEvents()

        if (checkedEvents.length > 0) {
            setEvents(checkedEvents)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        } else {
            setEvents([])
            setTimeout(() => {
                setLoading(false)
            }, 500);

        }
    }, [currentWeek])
    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className='w-full h-full'>
            <BackArrow position={'top-[71] left-[24]'}></BackArrow>

            <Text className="text-center text-lg text-labelDarkBlue font-latoBold mt-[78px] mb-[24px] md:text-[34px] md:mb-[61px] md:pt-[6px] md:mt-[90px]">Mi Agenda</Text>

            {/* Calendar */}
            <View className='px-[24px]'>
                <WeeklyCalendar dates={dates} month={monthYear} setMonth={setMonthYear} setCurrentWeek={setCurrentWeek} />
            </View>

            <View className='w-full pt-[20px] mt-[20px] bg-white flex-grow rounded-tl-[10px] rounded-tr-[10px]'>
                <ScrollView className='px-[24px] mb-[300px]'>
                    {
                        loading ?
                            <View className='w-full justify-center items-center mt-[180px]'>
                                <Svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="Page-1">
                                        <G id="Horse-shoe">
                                            <Path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M42.0472 43.6511H39.1107C42.9202 36.7463 45.2218 28.9685 45.2218 23.0162C45.2218 10.7146 35.3012 0.793945 22.9996 0.793945C10.698 0.793945 0.777344 10.7146 0.777344 23.0162C0.777344 28.9685 3.95195 36.7463 7.76147 43.6511H4.7456V49.2066H14.9837C19.7456 49.2066 17.8408 45.8733 17.8408 45.8733C17.8408 45.8733 8.55512 31.3495 8.55512 22.8574C8.55512 15.0003 15.0631 8.65109 23.0789 8.65109C31.0948 8.65109 37.6027 15.0003 37.6027 22.8574C37.6027 31.1908 32.1266 39.1273 29.5869 45.6352C28.7139 47.7781 29.6662 49.2066 32.6027 49.2066H42.0472V43.6511Z" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_2" d="M22.2061 5.55566H23.7934" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_3" d="M10.3018 8.73047H11.8891" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_4" d="M33.3174 8.73047H34.9047" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_5" d="M38.873 15.0801H40.4603" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_6" d="M5.53906 15.001H7.12636" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_7" d="M40.46 21.4287H42.0473" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_8" d="M40.46 28.5723H42.0473" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_9" d="M4.74609 28.5723H6.3334" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_10" d="M7.12695 35.7148H8.71425" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_11" d="M38.0791 35.7148H39.6664" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_12" d="M34.9043 43.6514H36.4122" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_13" d="M10.3018 43.6514H11.8891" stroke="#23254C" strokeWidth="0.761905" />
                                            <Path id="Shape_14" d="M3.95215 21.4287H5.53945" stroke="#23254C" strokeWidth="0.761905" />
                                        </G>
                                    </G>
                                </Svg>
                                <Text className="text-[#23254C] text-xl font-latoBold mt-[15]">Cargando</Text>
                            </View>
                            :

                            events.length > 0 ?

                                events.map((event, i) => {
                                    return (
                                        <CalendarCard
                                            key={i}
                                            estado={event.estado === 'Progreso' ? 'En Curso' : event.estado === 'Pendiente' ? 'Próximo' : event.estado === 'Pasado' ? 'Finalizado' : event.estado}
                                            titulo={event.nombreEvento}
                                            ubicacion={event.ubicacion}
                                            horario={event.horaInicio}
                                            dia={`${format(new Date(event.fechaInicio), 'EEEE', { locale: es })} ${format(new Date(event.fechaInicio), 'd', { locale: es })}`}
                                            setModalVisible={setModalVisible}
                                            setModalInfo={setModalInfo}
                                            fechaInicio={`${format(new Date(event.fechaInicio), 'EEEE', { locale: es })} ${format(new Date(event.fechaInicio), 'd', { locale: es })}`}
                                            fechaFinalizacion={`${format(new Date(event.fechaFinalizacion), 'EEEE', { locale: es })} ${format(new Date(event.fechaFinalizacion), 'd', { locale: es })}`}
                                            event={event}
                                        />
                                    )
                                })

                                :
                                <View className='w-full justify-center items-center mt-[140px]'>
                                    <View className='w-[70px] h-[70px] justify-center items-center bg-[#E3E5E3] rounded-full'>
                                        <Svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="36"
                                            height="36"
                                            viewBox="0 0 29 29"
                                            fill="none"
                                        >
                                            <Path
                                                d="M21.75 4.53125H20.2396V3.625C20.2396 3.12475 19.8336 2.71875 19.3333 2.71875C18.8331 2.71875 18.4271 3.12475 18.4271 3.625V4.53125H10.5729V3.625C10.5729 3.12475 10.1669 2.71875 9.66667 2.71875C9.16642 2.71875 8.76042 3.12475 8.76042 3.625V4.53125H7.25C4.32825 4.53125 2.71875 6.14075 2.71875 9.0625V21.75C2.71875 24.6718 4.32825 26.2812 7.25 26.2812H21.75C24.6718 26.2812 26.2812 24.6718 26.2812 21.75V9.0625C26.2812 6.14075 24.6718 4.53125 21.75 4.53125ZM7.25 6.34375H8.76042V7.25C8.76042 7.75025 9.16642 8.15625 9.66667 8.15625C10.1669 8.15625 10.5729 7.75025 10.5729 7.25V6.34375H18.4271V7.25C18.4271 7.75025 18.8331 8.15625 19.3333 8.15625C19.8336 8.15625 20.2396 7.75025 20.2396 7.25V6.34375H21.75C23.6555 6.34375 24.4688 7.15696 24.4688 9.0625V9.96875H4.53125V9.0625C4.53125 7.15696 5.34446 6.34375 7.25 6.34375ZM21.75 24.4688H7.25C5.34446 24.4688 4.53125 23.6555 4.53125 21.75V11.7812H24.4688V21.75C24.4688 23.6555 23.6555 24.4688 21.75 24.4688ZM10.8992 15.7083C10.8992 16.3753 10.3591 16.9167 9.69086 16.9167C9.02386 16.9167 8.47633 16.3753 8.47633 15.7083C8.47633 15.0413 9.01176 14.5 9.67876 14.5H9.69086C10.3579 14.5 10.8992 15.0413 10.8992 15.7083ZM15.7325 15.7083C15.7325 16.3753 15.1924 16.9167 14.5242 16.9167C13.8572 16.9167 13.3097 16.3753 13.3097 15.7083C13.3097 15.0413 13.8451 14.5 14.5121 14.5H14.5242C15.1912 14.5 15.7325 15.0413 15.7325 15.7083ZM20.5659 15.7083C20.5659 16.3753 20.0257 16.9167 19.3575 16.9167C18.6905 16.9167 18.143 16.3753 18.143 15.7083C18.143 15.0413 18.6784 14.5 19.3454 14.5H19.3575C20.0245 14.5 20.5659 15.0413 20.5659 15.7083ZM10.8992 20.5417C10.8992 21.2087 10.3591 21.75 9.69086 21.75C9.02386 21.75 8.47633 21.2087 8.47633 20.5417C8.47633 19.8747 9.01176 19.3333 9.67876 19.3333H9.69086C10.3579 19.3333 10.8992 19.8747 10.8992 20.5417ZM15.7325 20.5417C15.7325 21.2087 15.1924 21.75 14.5242 21.75C13.8572 21.75 13.3097 21.2087 13.3097 20.5417C13.3097 19.8747 13.8451 19.3333 14.5121 19.3333H14.5242C15.1912 19.3333 15.7325 19.8747 15.7325 20.5417ZM20.5659 20.5417C20.5659 21.2087 20.0257 21.75 19.3575 21.75C18.6905 21.75 18.143 21.2087 18.143 20.5417C18.143 19.8747 18.6784 19.3333 19.3454 19.3333H19.3575C20.0245 19.3333 20.5659 19.8747 20.5659 20.5417Z"
                                                fill="#9FA1A3"
                                            />
                                        </Svg>
                                    </View>
                                    <Text className='font-latoBold text-neutral-700 text-lg mt-[16]'>Tus Servicios</Text>
                                    {
                                        misEventos?.length > 0 ?
                                            <View className='mt-[4] w-full'>
                                                <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Tenes {misEventos.length} Servicio/s agendado/s</Text>
                                                {/* <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Te queres inscribir en mas?</Text> */}
                                                {/* <Button label={'Ver Eventos'} extra={'w-full mt-[16] md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => navigation.navigate('ScreenEvent')} /> */}
                                            </View>
                                            :
                                            <View className='mt-[4] w-full'>
                                                <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Todavía no tenes servicios agendados</Text>
                                                {/* <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Te queres inscribir?</Text> */}
                                                {/* <Button label={'Ver Eventos'} extra={'w-full mt-[16] md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => navigation.navigate('ScreenEvent')} /> */}
                                            </View>
                                    }

                                </View>
                    }
                </ScrollView>
            </View>
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
            >
                <BlurView
                    className='blur h-full w-full'
                    intensity={50}
                >
                    <View className="w-full h-full justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View className="w-full bg-white py-[20] px-[32] rounded-tl-[10px] rounded-tr-[10px]">
                            <TouchableOpacity onPress={() => setModalVisible(false)} className="mt-[10] self-end">
                                <CrossSVG color={"#25314C"} size={"24"} stroke={"0.75"} />
                            </TouchableOpacity>

                            {
                                calendario &&
                                <View className='bg-[#EFFBF4] w-full px-2.5 pb-1.5 rounded mt-[4]'>
                                    <TouchableOpacity onPress={() => setCalendario(false)} className="mt-[10] self-end">
                                        <CrossSVG color={"#25314C"} size={"24"} stroke={"0.75"} />
                                    </TouchableOpacity>
                                    <Text className='text-teal-800 text-sm font-latoBold'>Hemos agregado el evento a tu calendario</Text>
                                    <Text className='text-teal-800 text-[10] font-latoLight mt-[4]'>Recibiras una notificaciones antes de que comience el evento</Text>
                                </View>
                            }
                            {/* Fecha */}

                            <View className='flex-row justify-between items-end mt-[23]'>
                                <Text className='text-labelDarkBlue font-latoBold text-xl'>Fecha</Text>
                                <TouchableOpacity onPress={() => addToCalendar(modalInfo?.event)}>
                                    <Text className='text-labelDarkBlue font-latoBold text-base'>Agregar al calendario</Text>
                                </TouchableOpacity>
                            </View>
                            <View className='w-full h-[1.3] bg-[#F3F2F2] my-[23px]'></View>

                            <View className="fecha flex-col md:my-[20px]">
                                <View className="fechaDia flex-row items-center">
                                    {calendarMedium}
                                    <Text className="dia ml-2 font-latoRegular text-base md:text-[22px] text-[#494949] mr-4">{`del ${modalInfo?.fechaInicio} al ${modalInfo?.fechaFinalizacion}`}</Text>
                                </View>
                                <View className="fechaHora mt-2 md:mt-6 flex-row items-center">
                                    {watchMedium}
                                    <Text className="hora ml-2 font-latoRegular text-base md:text-[22px] text-[#494949]">{modalInfo?.horario}</Text>
                                </View>
                            </View>

                            {/* Clima */}

                            <View className='flex-row justify-start items-end mt-[23]'>
                                <Text className='text-labelDarkBlue font-latoBold text-xl'>Clima</Text>
                            </View>
                            <View className='w-full h-[1.3] bg-[#F3F2F2] my-[23px]'></View>
                            <View className="climaInformacion flex-row items-center justify-between">
                                <View className="climaInformacioIcono flex-row md:my-[20px]">
                                    {locationMedium}
                                    <Text className="climaInformacionLabel ml-2 font-latoRegular text-base md:text-[22px] text-[#494949]">Nublado</Text>
                                </View>
                                <Text className="gradosMinimo font-latoRegular text-base md:text-[22px] text-[#494949]">8°C</Text>
                                <Text className="gradosMaximo font-latoRegular text-base md:text-[22px] text-[#494949]">13°C</Text>
                            </View>
                            {/* Ubicacion */}

                            <View className='flex-row justify-between items-end mt-[23]'>
                                <Text className='text-labelDarkBlue font-latoBold text-xl'>Ubicación</Text>
                                <Text className='text-labelDarkBlue font-latoBold text-base'>Ver en el mapa</Text>
                            </View>
                            <View className='w-full h-[1.3] bg-[#F3F2F2] my-[23px]'></View>
                            <View className="ubicacionLabel flex-row w-full items-center">
                                {locationMedium}
                                <View className="textContainer flex-1">
                                    <Text className="label ml-2 font-latoRegular text-base md:text-[22px] md:my-[20px] text-[#494949] ">{modalInfo?.ubicacion}</Text>
                                </View>
                            </View>
                            <View className="map h-[207px] md:h-[400px] rounded-md mt-4 border border-[#00000033] overflow-hidden">
                                <MapView
                                    className="w-full h-full"
                                    initialRegion={{
                                        "latitude": -36.7753666259987,
                                        "latitudeDelta": 0.004012979034591524,
                                        "longitude": -59.85351512208581,
                                        "longitudeDelta": 0.007905475795261907
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            "latitude": -36.7753666259987,
                                            "latitudeDelta": 0.004012979034591524,
                                            "longitude": -59.85351512208581,
                                            "longitudeDelta": 0.007905475795261907
                                        }}
                                    />
                                </MapView>
                            </View>
                        </View>
                    </View>
                </BlurView>
            </Modal>
        </LinearGradient>

    );
};


export default MiAgenda;