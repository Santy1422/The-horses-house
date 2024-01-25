import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { eventAllSetEventId } from "../Redux/ReducerEventAll"
import { useSelector, useDispatch } from "react-redux"
import { eventGetId, eventGetIdDetailCard } from "../../auth/eventPeticiones"
import { EventDetailContainer } from "../Components/EventComponents/EventDetailContainer"
import { ContentCard } from "../Components/EventComponents/ContentCard"
import LoadingScreen from "../Components/Reusable/LoadingScreen"
import MapView, { Marker, PROVIDER_GOOGLE  } from "react-native-maps"
// import { getWeather } from "../../auth/weatherPeticiones"
import { arrowWhiteButtons, calendarMedium, downloadIcon, locationMedium, watchMedium, watchRecordarEvento } from "../../utils/svgIcons"
import { NavHorizontalScroll } from "../Components/EventComponents/NavHorizontalScroll"
import { Anteprograma } from "../Components/EventComponents/Anteprograma"

export const DetailEvent = ({ route }) => {

    const { id } = route.params
    const navigation = useNavigation()
    const eventId = useSelector((state) => state.ReducerEventAll.eventId)

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const tabs = ['Datos generales', 'Anteprograma']
    const [activeLink, setActiveLink] = useState("Datos generales")

    let fechaFormateadaInicio
    let fechaFormateadaFin
    let fechaFormateada
    let dia
    let mes
    if (eventId) {
        const fecha = new Date(eventId?.event?.fechaInicio)
        const fechaFin = new Date(eventId?.event?.fechaFinalizacion)
        const opcionesSinYear = {
            weekday: 'long',
            day: 'numeric'
        };

        const opciones = { weekday: 'long', day: 'numeric', month: 'long' }
        fechaFormateadaInicio = fecha.toLocaleDateString('es-ES', opcionesSinYear)
        fechaFormateadaFin = fechaFin.toLocaleDateString('es-ES', opciones)
        fechaFormateadaFin = fecha.toLocaleDateString('es-ES', opciones)

        dia = fecha.getDate()
        mes = fecha.toLocaleDateString('es-ES', { month: 'short' })
        mes = mes.toUpperCase().replace('.', '')
    }

    useEffect(() => {
        eventGetIdDetailCard({
            succes: ((v) => dispatch(eventAllSetEventId(v))),
            error: (e) => console.log("error", e),
            loading: (l) => setLoading(l),
            id,
        })

    }, [])


    return (
        <>

            {eventId && !loading ?
                <View className="main w-full">
                    <ScrollView className="main ">
                        <EventDetailContainer tipoConcurso={eventId?.event?.tipoDeConcurso} nombreEvento={eventId?.event?.nombreEvento} imgSource={require('../images/detail_event_default_2.png')} >




                            {/* <View className="buttonContainer w-full md:items-center">
                                <TouchableOpacity onPress={() => console.log("agregado")} className="md:w-full md:px-[2px]">

                                    <View className="button border border-[#23254C] bg-white h-12 rounded-md flex-row justify-center items-center mt-8 md:h-16 md:w-full">
                                        <View className="w-[20] h-[20] md:h-[35] md:w-[35]">
                                            {watchRecordarEvento}
                                        </View>

                                        <Text className="label font-latoBold text-sm text-[#23254C] md:text-[25px] md:pt-[10px] pl-[10px]">Recordame este evento </Text>

                                    </View>
                                </TouchableOpacity>

                            </View> */}

                            {/* <View className="FotosVideos pt-6 w-full">

                                {fotosVideos === '' && <FotosVideos setIsVisible={setIsVisible} />}
                                {fotosVideos !== '' && <SuscriptionFotoVideo fotosVideos={fotosVideos} setIsVisible={setIsVisible} />}
                            </View> */}

                            {/* <ContentCard title={'Premios'} h={'140px'}>
                                <View className="premiosPosiciones flex-row justify-between md:my-[20px]">
                                    <View className="premiosSegundo flex-col items-center">
                                        <Text className="puesto font-latoRegular text-xs leading-5 md:text-[20px] text-[#494949]">Segundo puesto</Text>
                                        <Text className="valor font-latoRegular text-[18px] md:text-[30px] leading-8 text-[#23254C]">$300.000</Text>
                                    </View>
                                    <View className="premiosPrimero flex-col items-center">
                                        <Text className="puesto font-latoRegular text-xs leading-5 md:text-[20px] text-[#494949]">Primer puesto</Text>
                                        <Text className="valor font-latoBold text-xl md:text-[30px] leading-8 text-[#23254C]">$500.000</Text>
                                    </View>
                                    <View className="premiosTercero flex-col items-center">
                                        <Text className="puesto font-latoRegular text-xs leading-5 md:text-[20px] text-[#494949]">Tercer puesto</Text>
                                        <Text className="valor font-latoRegular text-[18px] md:text-[30px] leading-8 text-[#23254C]">$200.000</Text>
                                    </View>

                                </View>
                            </ContentCard> */}


                            {/* TABS */}
                            <View className="mt-6">


                                <NavHorizontalScroll
                                    tabs={tabs}
                                    defaultLink={"Datos generales"}
                                    onPress={setActiveLink}
                                    containerClass={"mb-[-10px]"} />

                            </View>

                            {activeLink === "Datos generales" ? (
                                <>
                                    <ContentCard title={'Fecha'} buttonText={'Agregar al Calendario'} h={'266px'} onPress={() => console.log("asd")} >
                                        <TouchableOpacity onPress={() => console.log("asd")}>

                                            <View className="fecha flex-col md:my-[20px]">
                                                <View className="fechaDia flex-row items-center">
                                                    {calendarMedium}
                                                    <Text className="dia ml-2 font-latoRegular text-base md:text-[22px] text-[#494949] mr-4">{fechaFormateadaInicio && fechaFormateadaInicio} al {fechaFormateadaFin && fechaFormateadaFin}</Text>
                                                </View>
                                                <View className="fechaHora mt-2 md:mt-6 flex-row items-center">
                                                    {watchMedium}
                                                    <Text className="hora ml-2 font-latoRegular text-base md:text-[22px] text-[#494949]">{eventId?.event?.horaInicio && eventId?.event?.horaInicio}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View className="clima flex-col mt-[36]">
                                            <Text className="climaLabel font-latoBold text-xl md:text-[30px] md:pt-[10px] leading-5 text-[#23254C]">Clima</Text>
                                            <View className="w-full h-[1] my-[17] bg-[#D1DADA] opacity-50"></View>
                                            <View className="climaInformacion flex-row items-center justify-between">
                                                <View className="climaInformacioIcono flex-row md:my-[20px]">
                                                    {locationMedium && locationMedium}
                                                    <Text className="climaInformacionLabel ml-2 font-latoRegular text-base md:text-[22px] text-[#494949]">Nublado</Text>
                                                </View>
                                                <Text className="gradosMinimo font-latoRegular text-base md:text-[22px] text-[#494949]">8°C</Text>
                                                <Text className="gradosMaximo font-latoRegular text-base md:text-[22px] text-[#494949]">13°C</Text>
                                            </View>
                                        </View>
                                    </ContentCard>

                                    <ContentCard title={'Ubicación'}  >
                                        <View className="ubicacionLabel flex-row w-full items-center">
                                            {locationMedium}
                                            <View className="textContainer flex-1">
                                                <Text numberOfLines={2} ellipsizeMode="tail" className="label ml-2 font-latoRegular text-base md:text-[22px] md:my-[20px] text-[#494949] ">{eventId?.event?.ubicacion}</Text>
                                            </View>
                                        </View>
                                        {/* <View className="map h-[207px] md:h-[400px] rounded-md mt-4 border border-[#00000033] overflow-hidden"> */}
                                            {/* <MapView
                                                className="w-full h-full"
                                                initialRegion={{
                                                    "latitude": -36.7753666259987,
                                                    "latitudeDelta": 0.004012979034591524,
                                                    "longitude": -59.85351512208581,
                                                    "longitudeDelta": 0.007905475795261907
                                                }}
                                                provider={PROVIDER_GOOGLE}

                                            >
                                                <Marker
                                                    coordinate={{
                                                        "latitude": -36.7753666259987,
                                                        "latitudeDelta": 0.004012979034591524,
                                                        "longitude": -59.85351512208581,
                                                        "longitudeDelta": 0.007905475795261907
                                                    }}
                                                />
                                            </MapView> */}
                                        {/* </View> */}
                                    </ContentCard>


                                </>) : (
                                <View className="w-full">
                                    <Anteprograma event={eventId.categorias} />
                                </View>
                            )
                            }

                        </EventDetailContainer>
                    </ScrollView>
                    {eventId?.event?.estado && eventId?.event?.estado !== "pasado" || "en curso"  && 
                    <View className="inscribite px-6 md:px-[100px] bg-white top-[-85] md:top-[-120] pt-4 border border-x-0 border-b-0 border-[#D1DADA] md:items-center">
                        <TouchableOpacity className=" md:w-full" onPress={() => navigation.navigate('ScreenEventInscription', { fechaFormateada, mes, dia })}>
                            <View className="buttonContainer w-full h-11 md:h-16 flex flex-row items-center justify-center rounded bg-[#23254C] ">
                                <Text className="label font-latoBold text-base md:text-[25px] leading-6 text-white pr-2 ">Inscribite</Text>
                                <View className="w-[21] h-[20] md:w-[36px] md:h-[35px] md:items-center">
                                    {arrowWhiteButtons}
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveLink("Anteprograma")}>
                            <View className="anteprograma flex-row justify-center items-center my-4 md:my-6">
                                {downloadIcon}
                                <Text className="anteprogramaLabel text-base md:text-[25px] font-latoBold leading-6 text-[#191720] ml-2 ">Descargar Anteprograma </Text>
                            </View>
                        </TouchableOpacity>
                    </View>}
                 
                </View> : <LoadingScreen />}
        </>
    )
}