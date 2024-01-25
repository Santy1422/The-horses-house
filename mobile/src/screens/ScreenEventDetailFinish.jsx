import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions } from "react-native"
import { Svg, Path, G } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"
import Button from "../Components/Reusable/Button"
import { useEffect, useState } from "react"
import { eventAllSetEventId } from "../Redux/ReducerEventAll"
import { useSelector, useDispatch } from "react-redux"
import { eventGetIdWithInscriptionDetail, getEventPhotos } from "../../auth/eventPeticiones"
import { EventDetailContainer } from "../Components/EventComponents/EventDetailContainer"
import { ContentCard } from "../Components/EventComponents/ContentCard"
import FotosVideos from "../Components/EventComponents/FotosVideos"
import ModalFotosVideos from "../Components/EventComponents/ModalFotosVideos"
import SuscriptionFotoVideo from "../Components/EventComponents/SuscriptionFotoVideo"
import { NavBottom } from "../Components/EventComponents/NavBottom"
import Pruebas from "../Components/EventComponents/EventFinisComponent/Pruebas"
import LoadingScreen from "../Components/Reusable/LoadingScreen"
import Fotos from "../Components/EventComponents/multimedia/Fotos"
import Videos from "../Components/EventComponents/multimedia/Videos"
import FotosDetail from "../Components/EventComponents/multimedia/FotosDetail"

const tabs = ['Pruebas', 'Fotos', 'Videos']
const dates = ['Lunes 01', 'Martes 02', 'Miercoles 03', 'Jueves 04', 'Viernes 05', 'Sabado 06', 'Domingo 07']
export const DetailEventFinish = ({ route }) => {

    const { id } = route.params
    const navigation = useNavigation()
    const eventId = useSelector((state) => state.ReducerEventAll.eventId)
    const [isVisible, setIsVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fotosVideos, setFotosVideos] = useState('')
    const [activeLink, setActiveLink] = useState('Pruebas')
    const [images, setImages] = useState([])
    const [videos, setVideos] = useState([])
    const [selectedImg, setSelectedImg] = useState('https://www.losequinos.com/images/origin/posts/_63e94713d92e8.jpg')
    const [isFotoModalVisible, setIsFotoModalVisible] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const dispatch = useDispatch()
    console.log("asdsa", id)
    let fechaFormateada
    let dia
    let mes

    if (eventId) {
        const fecha = new Date(eventId?.evento?.fechaInicio)
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
        fechaFormateada = fecha.toLocaleDateString('es-ES', opciones)
        dia = fecha.getDate()
        mes = fecha.toLocaleDateString('es-ES', { month: 'short' })
        mes = mes.toUpperCase().replace('.', '')
    }

    useEffect(() => {
        eventGetIdWithInscriptionDetail({
            succes: ((v) => dispatch(eventAllSetEventId(v))),
            error: (e) => console.log("error", e),
            loading: (l) => {
                console.log("loading", l)
                setLoading(l)
            },
            id,
        })
        getEventPhotos({
            succes: ((v) => {
                setImages(v.fotos)
                setVideos(v.videos)
            }),
            error: (e) => {
                console.log("error fotos", e)
            },
            loading: (l) => {
                setLoading(l)
            },
            id,
        })
    }, [])

    return (
        <>
            {eventId && !loading ?
                <View className="main w-full bg-white h-full ">
                    <ScrollView className="main bg-white">
                        <EventDetailContainer tipoConcurso={eventId?.evento?.tipoDeConcurso} nombreEvento={eventId?.evento?.nombreEvento} imgSource={require('../images/detail_event_default_2.png')}  >

                            {/* <View className="FotosVideos w-full pt-6">
                                {fotosVideos === '' && <FotosVideos setIsVisible={setIsVisible} hasEnded />}
                                {fotosVideos !== '' && <SuscriptionFotoVideo fotosVideos={fotosVideos} setIsVisible={setIsVisible} />}
                            </View> */}
                            <View className="flex-row w-full justify-around items-center h-[42] border-b-1 border-b-[#E6E6E9] mt-[20] mb-[2] md:mt-[24]">
                                {
                                    tabs?.map((tab, i) => {
                                        return (
                                            <TouchableOpacity key={i} onPress={() => setActiveLink(tab)} className={`h-full justify-center ${activeLink === tab && "border-b-2 border-b-[#23254C]"}`}>
                                                <Text className={`font-latoRegular text-sm md:text-[22px] md:pt-[3px] leading-5 ${activeLink === tab ? "text-[#23254C]" : "text-[#80807F]"}`}>{tab}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>

                            {activeLink === 'Pruebas' &&
                                <>
                                    <Text className="pruebasTitulo font-latoBold text-xl md:text-[30px] md:my-[20px] leading-[30px] text-[#23254C] mt-5">Pruebas</Text>
                                    <View className="h-8 mt-[16] mb-[4]">
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                            {dates.map((date, i) => {
                                                return (
                                                    <TouchableOpacity key={i} className="rounded-full bg-white items-center h-6 px-2.5 pt-[1] mr-[16]">
                                                        <Text className="font-latoBold text-labelDarkBlue text-sm">{date}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </ScrollView>
                                    </View>

                                    {/* Filtro */}
                                    <View className="my-[10] w-full">
                                    <TouchableOpacity onPress={() => setIsFilterOpen(!isFilterOpen)} className="bg-white w-full flex-row rounded border border-[#CCCCCC] items-center justify-center py-[10px]">
                                        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="filter-plus">
                                                <Path id="filter-plus_2" d="M19.5 13C19.5 13.414 19.164 13.75 18.75 13.75H18.25V14.25C18.25 14.664 17.914 15 17.5 15C17.086 15 16.75 14.664 16.75 14.25V13.75H16.25C15.836 13.75 15.5 13.414 15.5 13C15.5 12.586 15.836 12.25 16.25 12.25H16.75V11.75C16.75 11.336 17.086 11 17.5 11C17.914 11 18.25 11.336 18.25 11.75V12.25H18.75C19.164 12.25 19.5 12.586 19.5 13ZM22.25 13C22.25 15.619 20.119 17.75 17.5 17.75C16.682 17.75 15.923 17.523 15.25 17.157V21C15.25 21.284 15.09 21.544 14.835 21.671C14.73 21.724 14.614 21.75 14.5 21.75C14.341 21.75 14.183 21.699 14.05 21.6L10.05 18.6C9.86205 18.458 9.75 18.236 9.75 18V14C9.75 13.801 9.67205 13.613 9.52905 13.47L4.41003 8.35001C3.98403 7.92501 3.75 7.36001 3.75 6.76001V4.5C3.75 3.259 4.76 2.25 6 2.25H19C20.24 2.25 21.25 3.259 21.25 4.5V6.76001C21.25 7.36001 21.016 7.92501 20.59 8.35101L19.975 8.966C21.334 9.802 22.25 11.291 22.25 13ZM13.75 19.5V15.881C13.132 15.079 12.75 14.088 12.75 13C12.75 10.381 14.881 8.25 17.5 8.25C17.832 8.25 18.156 8.28501 18.469 8.35101L19.53 7.29001C19.673 7.14801 19.751 6.96001 19.751 6.76001V4.5C19.751 4.086 19.414 3.75 19.001 3.75H6.00098C5.58798 3.75 5.25098 4.086 5.25098 4.5V6.76001C5.25098 6.95901 5.32905 7.14701 5.47205 7.29001L10.5909 12.41C11.0169 12.835 11.251 13.4 11.251 14V17.625L13.75 19.5ZM20.75 13C20.75 11.208 19.292 9.75 17.5 9.75C15.708 9.75 14.25 11.208 14.25 13C14.25 14.792 15.708 16.25 17.5 16.25C19.292 16.25 20.75 14.792 20.75 13Z" fill="#2E2E38" />
                                            </G>
                                        </Svg>
                                        <Text className="ml-[6] text-gray-800 text-base font-latoRegular">Filtrar</Text>
                                    </TouchableOpacity>
                                    {isFilterOpen && 
                                    <View className="bg-white px-[9] rounded-bl-[5px] rounded-br-[5px] border-l border-r border-b border-gray-200">
                                        <View className="w-full border-b border-gray-200 px-[16] py-[10]">
                                            <Text className="text-zinc-500 text-base font-latoRegular">Rider</Text>
                                        </View>
                                        <View className="w-full px-[16] py-[10]">
                                            <Text className="text-zinc-500 text-base font-latoRegular">Caballo</Text>
                                        </View>
                                        {/* <View className="w-full px-[16] py-[10]">
                                            <Text className="text-zinc-500 text-base font-latoRegular">Puesto</Text>
                                        </View> */}
                                    </View>
                                    }
                                    </View>

                                    <View className="pruebasContenedor mt-[10px] w-full">
                                        {eventId?.evento?.categorias?.map((prueba, i) => {
                                            return (
                                                <Pruebas
                                                    categoria={prueba.categoria}
                                                    nombre={prueba.nombre}
                                                    altura={prueba.altura}
                                                    definicion={prueba.definicion}
                                                    key={i}
                                                    id={prueba.id}
                                                    tiempoAcordadoR1={prueba.tiempoAcordadoR1}
                                                    tiempoAcordadoR2={prueba.tiempoAcordadoR2}
                                                    tiempoOptimo={prueba.tiempoOptimo}
                                                />
                                            )
                                        })}
                                    </View></>
                            }
                            {
                                activeLink === 'Fotos' &&
                                <>
                                    <Text className="pruebasTitulo font-latoBold text-xl md:text-[30px] md:my-[20px] leading-[30px] text-[#23254C] mt-5">Fotos</Text>
                                    <Fotos images={images} nombreEvento={eventId?.evento?.nombreEvento} setSelectedImg={setSelectedImg} setIsFotoModalVisible={setIsFotoModalVisible} />
                                </>
                            }
                            {
                                activeLink === 'Videos' &&
                                <>
                                    <Text className="pruebasTitulo font-latoBold text-xl md:text-[30px] md:my-[20px] leading-[30px] text-[#23254C] mt-5">Videos</Text>
                                    <Videos videos={videos} />
                                </>
                            }
                        </EventDetailContainer>
                        <FotosDetail setIsFotoModalVisible={setIsFotoModalVisible} selectedImg={selectedImg} isFotoModalVisible={isFotoModalVisible} nombreEvento={eventId?.evento?.nombreEvento} />
                        {/* <ModalFotosVideos isVisible={isVisible} setIsVisible={setIsVisible} setFotosVideos={setFotosVideos} /> */}
                    </ScrollView>
                    <NavBottom />

                </View> : <LoadingScreen />}
        </>
    )
}