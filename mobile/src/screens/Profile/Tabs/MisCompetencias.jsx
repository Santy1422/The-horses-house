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
const MisCompetencias = () => {
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

            <Text className="text-center text-lg text-labelDarkBlue font-latoBold mt-[78px] mb-[24px] md:text-[34px] md:mb-[61px] md:pt-[6px] md:mt-[90px]">Mis Competencias</Text>

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
                                            width="36"
                                            height="36"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <G id="trophy">
                                                <Path
                                                    id="trophy_2"
                                                    d="M24.6667 5.63542H23.126C22.9738 4.27967 21.8331 3.21875 20.4375 3.21875H9.5625C8.16688 3.21875 7.02745 4.27967 6.87399 5.63542H5.33333C4.16729 5.63542 3.21875 6.58396 3.21875 7.75V9.74378C3.21875 12.8202 5.5617 14.3608 7.53008 14.6399C8.67558 17.2512 11.149 19.1506 14.0938 19.4781V21.409C11.752 21.7196 10.4688 23.2735 10.4688 25.875V26.7812H19.5312V25.875C19.5312 23.2735 18.248 21.7208 15.9062 21.409V19.4781C18.8498 19.1506 21.3232 17.2512 22.4699 14.6399C24.4383 14.3608 26.7812 12.8202 26.7812 9.74378V7.75C26.7812 6.58396 25.8327 5.63542 24.6667 5.63542ZM5.03125 9.74378V7.75C5.03125 7.58325 5.16658 7.44792 5.33333 7.44792H6.84375V11.375C6.84375 11.7943 6.88599 12.2039 6.94641 12.6063C6.00149 12.2111 5.03125 11.3521 5.03125 9.74378ZM17.6426 24.9688H12.3585C12.6014 23.7085 13.4303 23.1562 15.0012 23.1562C16.572 23.1562 17.3986 23.7085 17.6426 24.9688ZM15.0037 17.7188C15.0025 17.7188 15.0012 17.7176 15 17.7176C14.9988 17.7176 14.9975 17.7188 14.9963 17.7188C11.5006 17.7163 8.65625 14.8719 8.65625 11.375V5.9375C8.65625 5.43725 9.06346 5.03125 9.5625 5.03125H20.4375C20.9365 5.03125 21.3438 5.43725 21.3438 5.9375V11.375C21.3438 14.8719 18.4994 17.7163 15.0037 17.7188ZM24.9688 9.74378C24.9688 11.3521 23.9985 12.2111 23.0536 12.6063C23.1152 12.2039 23.1562 11.7943 23.1562 11.375V7.44792H24.6667C24.8334 7.44792 24.9688 7.58325 24.9688 7.75V9.74378Z"
                                                    fill="#9FA1A3"
                                                />
                                            </G>
                                        </Svg>
                                    </View>
                                    <Text className='font-latoBold text-neutral-700 text-lg mt-[16]'>Tus Eventos</Text>
                                    {
                                        misEventos ?
                                            <View className='mt-[4] w-full'>
                                                <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Estas inscripto en {misEventos.length} evento/s</Text>
                                                <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Te queres inscribir en mas?</Text>
                                                <Button label={'Ver Eventos'} extra={'w-full mt-[16] md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => navigation.navigate('ScreenEvent')} />
                                            </View>
                                            :
                                            <View className='mt-[4] w-full'>
                                                <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Todavía no estas inscripto en un evento</Text>
                                                <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Te queres inscribir?</Text>
                                                <Button label={'Ver Eventos'} extra={'w-full mt-[16] md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => navigation.navigate('ScreenEvent')} />
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


export default MisCompetencias;