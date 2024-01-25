import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import FotosVideos from "../Components/EventComponents/FotosVideos"
import SuscriptionFotoVideo from "../Components/EventComponents/SuscriptionFotoVideo"
import { useEffect, useState } from "react"
import { EventDetailContainer } from "../Components/EventComponents/EventDetailContainer"
import { NavBottom } from "../Components/EventComponents/NavBottom"
import { useSelector } from "react-redux"
import JockeyClubSVG from "../../assets/icons/JockeyClubSVG"
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg"
import { NavHorizontalScroll } from "../Components/EventComponents/NavHorizontalScroll"
import ModalFotosVideos from "../Components/EventComponents/ModalFotosVideos"
import ResultadosPorInscripto from "../Components/EventComponents/ResultadosPorInscripto"
import LoadingScreen from "../Components/Reusable/LoadingScreen"
import { getPruebaInscriptos } from "../../auth/eventPeticiones"
import { initiateSocket, disconnectSocket } from "../../utils/socket"
import { ordenarPorDefincion } from "../../utils/ordenarPorDefinicion"

const tabs = [
    'Primera',
    'Segunda',
    'Tercera',
    'Amateur',
    'Junior',
    'Pre-junior',
    'Children',
    'Escuela mayor',
    'Escuela menor',
    'Iniciados',
    'Ponys',
    'U-25',
    "CN1", "CN2", "CN3"
]

const ScreenResultados = ({ route }) => {

    const { nombre, altura, definicion, id, tiempoAcordadoR1, tiempoAcordadoR2, tiempoOptimo } = route.params
    const [fotosVideos, setFotosVideos] = useState('')
    const [activeLink, setActiveLink] = useState('Primera');
    const [isVisible, setIsVisible] = useState(false)
    const [inscriptos, setInscriptos] = useState([])
    const [inscriptoRecibidoSocket, setInscriptoRecibidoSocket] = useState(null)
    const eventId = useSelector((state) => state.ReducerEventAll.eventId)
    const [isLoading, setIsLoading] = useState(true);

    const ordenarPorDatos = (inscriptos) => {

        const inscriptosConDatos = []
        const inscriptosSinDatos = []

        inscriptos.forEach(element => {

            if (element.tiempo > 0) {
                inscriptosConDatos.push(element)

            } else {
                inscriptosSinDatos.push(element)

            }
        })
        return { inscriptosConDatos, inscriptosSinDatos }
    }


    useEffect(() => {
        if (inscriptoRecibidoSocket) {

            let inscriptosActualizados = inscriptos?.map(insc => {

                if (insc.id === inscriptoRecibidoSocket.inscripto.id) {
                    return inscriptoRecibidoSocket.inscripto
                } else {
                    return insc
                }
            })

            const { inscriptosConDatos, inscriptosSinDatos } = ordenarPorDatos(inscriptosActualizados)

            const inscriptosOrdenados = ordenarPorDefincion([...inscriptosConDatos], definicion, tiempoAcordadoR1, tiempoAcordadoR2, tiempoOptimo)

            setInscriptos(inscriptosOrdenados.concat(inscriptosSinDatos))
        }

    }, [inscriptoRecibidoSocket])


    useEffect(() => {

        initiateSocket({ setInscriptoRecibidoSocket })

        return () => {
            disconnectSocket()
        }

    }, [])

    useEffect(() => {

        getPruebaInscriptos({
            id,
            success: (data) => {

                if (data) {
                    const { inscriptosConDatos, inscriptosSinDatos } = ordenarPorDatos(data.inscriptos)
                    const inscriptosOrdenados = ordenarPorDefincion([...inscriptosConDatos], definicion, tiempoAcordadoR1, tiempoAcordadoR2, tiempoOptimo)
                    setInscriptos(inscriptosOrdenados.concat(inscriptosSinDatos))
                }
            },
            loading: (estado) => setIsLoading(estado),
            error: (error) => console.log(error)
        })

    }, [])


    return (
        <>
            {!isLoading ?
                <View className="main w-full bg-white h-full ">
                    <ScrollView>
                        <EventDetailContainer noDownload={true} tipoConcurso={eventId?.evento?.tipoDeConcurso} nombreEvento={eventId?.evento?.nombreEvento} imgSource={require('../images/detail_event_default_2.png')}  >
                            {/* <View className="FotosVideos w-full pt-6">
                                {fotosVideos === '' && <FotosVideos setIsVisible={setIsVisible} hasEnded />}
                                {fotosVideos !== '' && <SuscriptionFotoVideo fotosVideos={fotosVideos} setIsVisible={setIsVisible} />}
                            </View> */}
                            <View className="Club w-full bg-white border rounded-[10px] border-[#D1DADA] h-[90px] md:h-[130px] mt-4 md:mt-8 flex flex-row items-center px-4">
                                <View className="w-[42px] h-[44px] md:w-[62px] md:h-[64px]">
                                    <JockeyClubSVG />
                                </View>
                                <View className="labelClub flex flex-col ml-2">
                                    <Text className="club font-latoRegular text-base md:text-[24px] capitalize text-[#23254C]">{eventId?.evento?.clubesPatrocinadores}</Text>
                                    <Text className="organizador font-latoRegular text-sm md:text-[20px] md:mt-[12px] text-[#494949]">Club organizador</Text>
                                </View>
                            </View>

                            <NavHorizontalScroll tabs={tabs} defaultLink={activeLink} onPress={setActiveLink} containerClass={"w-full my-[26] md:mb-8 md:mt-10"} />

                            <View className="labelPrueba flex flex-row justify-between items-center w-full">
                                <View className="flex flex-row gap-x-4 ">
                                    <Text className="pruebasTitulo font-latoBold text-lg md:text-[25px] md:pt-[3px] leading-[25px] text-[#23254C]">Prueba {nombre}</Text>
                                    <Text className="pruebasTitulo font-latoRegular text-lg md:text-[25px] text-[#23254C]">{definicion}</Text>
                                    <Text className="pruebasTitulo font-latoRegular text-lg md:text-[25px] text-[#23254C]">{altura}</Text>
                                </View>
                                {/* <View className="contenedorIcon flex flex-row justify-center items-center px-2 py-1 border rounded-full bg-white border-[#CCCCCC] ">
                                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <Path d="M5 2.70898C3.27667 2.70898 1.875 4.11065 1.875 5.83398C1.875 7.55732 3.27667 8.95898 5 8.95898C6.72333 8.95898 8.125 7.55732 8.125 5.83398C8.125 4.11065 6.72333 2.70898 5 2.70898ZM5 7.70898C3.96583 7.70898 3.125 6.86815 3.125 5.83398C3.125 4.79982 3.96583 3.95898 5 3.95898C6.03417 3.95898 6.875 4.79982 6.875 5.83398C6.875 6.86815 6.03417 7.70898 5 7.70898ZM15 11.0423C13.2767 11.0423 11.875 12.444 11.875 14.1673C11.875 15.8907 13.2767 17.2923 15 17.2923C16.7233 17.2923 18.125 15.8907 18.125 14.1673C18.125 12.444 16.7233 11.0423 15 11.0423ZM15 16.0423C13.9658 16.0423 13.125 15.2015 13.125 14.1673C13.125 13.1332 13.9658 12.2923 15 12.2923C16.0342 12.2923 16.875 13.1332 16.875 14.1673C16.875 15.2015 16.0342 16.0423 15 16.0423ZM12.5 6.45898H17.5C17.845 6.45898 18.125 6.17898 18.125 5.83398C18.125 5.48898 17.845 5.20898 17.5 5.20898H12.5C12.155 5.20898 11.875 5.48898 11.875 5.83398C11.875 6.17898 12.155 6.45898 12.5 6.45898ZM7.5 13.5423H2.5C2.155 13.5423 1.875 13.8223 1.875 14.1673C1.875 14.5123 2.155 14.7923 2.5 14.7923H7.5C7.845 14.7923 8.125 14.5123 8.125 14.1673C8.125 13.8223 7.845 13.5423 7.5 13.5423Z" fill="#231D43" />
                                </Svg>
                            </View> */}
                            </View>
                            {inscriptos?.length > 0 ?
                                <>
                                    <View className="w-full bg-white rounded-[10px] border border-gray-300 mt-[19] md:mt-[26]">
                                        <View className="w-full items-center justify-center border-b-1 mt-[22] pb-[10] border-gray-300">
                                            <Text className="font-latoBold text-xl md:text-[30px] text-labelDarkBlue">Clasificados</Text>
                                        </View>
                                        <View className="w-full relative h-[262] md:h-[320] pt-[10]">
                                            {inscriptos && inscriptos.length > 3 ? <View>

                                                {inscriptos[0] &&
                                                    <View className="w-fit items-center">
                                                        <Text className="text-yellow-600 text-2xl md:text-[44px] md:pt-[10px] md:left-[-4] font-latoBold mb-[10]">1</Text>
                                                        <View className="rounded-full bg-labelDarkBlue w-[95] h-[95] md:w-[115] md:h-[115] border-2 items-center justify-center border-yellow-600">
                                                            <Svg width="60" height="60" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <G id="user">
                                                                    <Path id="Icon" d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3334 20H10.6667C9.25222 20 7.89567 20.5619 6.89547 21.5621C5.89528 22.5623 5.33337 23.9188 5.33337 25.3333V28M21.3334 9.33333C21.3334 12.2789 18.9456 14.6667 16 14.6667C13.0545 14.6667 10.6667 12.2789 10.6667 9.33333C10.6667 6.38781 13.0545 4 16 4C18.9456 4 21.3334 6.38781 21.3334 9.33333Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                                </G>
                                                            </Svg>
                                                        </View>
                                                        <Text className="text-black text-[13] md:text-[20px] font-latoBold mt-[16] mb-[12]">{`${inscriptos[0]?.Jinete ? inscriptos[0]?.Jinete?.split(" ")[0] : "Sin nombre"}`}</Text>
                                                        <Text className="text-black text-[13] md:text-[20px] font-latoRegular">{inscriptos[0]?.nombreDelCaballo?.split(" ")[0]}</Text>
                                                    </View>
                                                }
                                                {inscriptos[1] &&
                                                    <View className="absolute items-center left-[16] md:left-[25] top-[53] md:top-[70]">
                                                        <Text className="text-stone-400 text-2xl md:text-[44px] md:pt-[10px] font-latoBold mb-[10]">2</Text>
                                                        <View className="rounded-full bg-labelDarkBlue w-[82] h-[82] md:w-[102] md:h-[102] border-2 items-center justify-center border-stone-400">
                                                            <Svg width="45" height="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <G id="user">
                                                                    <Path id="Icon" d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3334 20H10.6667C9.25222 20 7.89567 20.5619 6.89547 21.5621C5.89528 22.5623 5.33337 23.9188 5.33337 25.3333V28M21.3334 9.33333C21.3334 12.2789 18.9456 14.6667 16 14.6667C13.0545 14.6667 10.6667 12.2789 10.6667 9.33333C10.6667 6.38781 13.0545 4 16 4C18.9456 4 21.3334 6.38781 21.3334 9.33333Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                                </G>
                                                            </Svg>
                                                        </View>
                                                        <Text className="text-black text-[13] md:text-[20px] font-latoBold mt-[16] mb-[12]">{`${inscriptos[1]?.Jinete ? inscriptos[1]?.Jinete?.split(" ")[0] : "Sin nombre"}`}</Text>
                                                        <Text className="text-black text-[13] md:text-[20px] font-latoRegular">{inscriptos[1]?.nombreDelCaballo?.split(" ")[0]}</Text>
                                                    </View>
                                                }
                                                {inscriptos[2] &&
                                                    <View className="absolute items-center right-[16] md:right-[25] top-[53] md:top-[70]">
                                                        <Text className="text-yellow-700 text-2xl md:text-[44px] md:pt-[10px] font-latoBold mb-[10]">3</Text>
                                                        <View className="rounded-full bg-labelDarkBlue w-[82] h-[82] md:w-[102] md:h-[102] border-2 items-center justify-center border-yellow-700">
                                                            <Svg width="45" height="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <G id="user">
                                                                    <Path id="Icon" d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3334 20H10.6667C9.25222 20 7.89567 20.5619 6.89547 21.5621C5.89528 22.5623 5.33337 23.9188 5.33337 25.3333V28M21.3334 9.33333C21.3334 12.2789 18.9456 14.6667 16 14.6667C13.0545 14.6667 10.6667 12.2789 10.6667 9.33333C10.6667 6.38781 13.0545 4 16 4C18.9456 4 21.3334 6.38781 21.3334 9.33333Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                                </G>
                                                            </Svg>
                                                        </View>
                                                        <Text className="text-black text-[13] md:text-[20px] font-latoBold mt-[16] mb-[12]">{`${inscriptos[2]?.Jinete ? inscriptos[2]?.Jinete?.split(" ")[0] : "Sin nombre"}`}</Text>
                                                        <Text className="text-black text-[13] md:text-[20px] font-latoRegular">{inscriptos[2]?.nombreDelCaballo?.split(" ")[0]}</Text>
                                                    </View>

                                                }</View> : null}
                                        </View>
                                    </View>

                                    <>
                                        {inscriptos &&
                                            inscriptos?.map((inscripto, i) => {
                                                // let clubArr = inscripto?.clubRepresenta.split(' ')
                                                // let initialsArr = clubArr.map(word => word.charAt(0));
                                                let clubInitials = inscripto?.clubRepresenta
                                                return (
                                                    <View key={i} className="w-full">
                                                        {definicion === 'TOD' && <ResultadosPorInscripto i={i} estadoCompeticion={inscripto?.estadoCompeticion} jinete={inscripto?.Jinete} caballo={inscripto?.nombreDelCaballo} to tiempoOptimo={inscripto?.tiempoOtimo} tiempo={inscripto?.tiempo} faltas={inscripto?.faltas} clubInitials={clubInitials} posicion={inscripto?.posicion} />}
                                                        {definicion === 'TD' && <ResultadosPorInscripto i={i} estadoCompeticion={inscripto?.estadoCompeticion} jinete={inscripto?.Jinete} caballo={inscripto?.nombreDelCaballo} td tiempoOptimo={inscripto?.tiempoOtimo} tiempo={inscripto?.tiempo} faltas={inscripto?.faltas} clubInitials={clubInitials} posicion={inscripto?.posicion} />}
                                                        {definicion === 'DR' && <ResultadosPorInscripto i={i} estadoCompeticion={inscripto?.estadoCompeticion} jinete={inscripto?.Jinete} caballo={inscripto?.nombreDelCaballo} dr tiempoOptimo={inscripto?.tiempoOtimo} tiempo={inscripto?.tiempo} tiempo1={inscripto?.tiempo2} faltas={inscripto?.faltas} faltas1={inscripto?.faltas2} clubInitials={clubInitials} posicion={inscripto?.posicion} />}
                                                        {definicion === '2F Esp' && <ResultadosPorInscripto i={i} estadoCompeticion={inscripto?.estadoCompeticion} jinete={inscripto?.Jinete} caballo={inscripto?.nombreDelCaballo} tiempoOptimo={inscripto?.tiempoOtimo} dosf tiempo={inscripto?.tiempo} tiempo1={inscripto?.tiempo2} faltas={inscripto?.faltas} faltas1={inscripto?.faltas2} clubInitials={clubInitials} posicion={inscripto?.posicion} />}
                                                        {definicion === '1D' && <ResultadosPorInscripto i={i} estadoCompeticion={inscripto?.estadoCompeticion} jinete={inscripto?.Jinete} caballo={inscripto?.nombreDelCaballo} desem tiempoOptimo={inscripto?.tiempoOtimo} tiempo={inscripto?.tiempo} tiempo1={inscripto?.tiempo2} faltas={inscripto?.faltas} faltas1={inscripto?.faltas2} clubInitials={clubInitials} posicion={inscripto?.posicion} />}
                                                        {definicion === 'S/Def' && <ResultadosPorInscripto i={i} estadoCompeticion={inscripto?.estadoCompeticion} jinete={inscripto?.Jinete} caballo={inscripto?.nombreDelCaballo} sd tiempoOptimo={inscripto?.tiempoOtimo} tiempo={inscripto?.tiempo} faltas={inscripto?.faltas} clubInitials={clubInitials} posicion={inscripto?.posicion} />}
                                                    </View>
                                                )
                                            })
                                        }
                                    </>
                                </>
                                :
                                <View className='w-full justify-center items-center mt-[60px]'>
                                    <View className='w-[70px] h-[70px] justify-center items-center bg-[#E3E5E3] rounded-full'>
                                        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="obstacle 2" clipPath="url(#clip0_10238_57922)">
                                                <G id="Capa 5">
                                                    <Path id="Vector" d="M4.02485 1.15234H5.39198C6.97416 1.15234 8.26448 2.36773 8.26448 3.87542V26.1216C8.26448 27.6293 6.97416 28.8447 5.39198 28.8447H3.99413C2.42731 28.8447 1.15234 27.6447 1.15234 26.1523V3.87542C1.15234 2.36773 2.44267 1.15234 4.02485 1.15234Z" stroke="#9FA1A3" strokeWidth="2" strokeMiterlimit="10" />
                                                    <Path id="Vector_2" d="M24.6088 1.15234H25.976C27.5581 1.15234 28.8485 2.36773 28.8485 3.87542V26.1216C28.8485 27.6293 27.5581 28.8447 25.976 28.8447H24.5781C23.0113 28.8447 21.7363 27.6447 21.7363 26.1523V3.87542C21.7363 2.36773 23.0267 1.15234 24.6088 1.15234Z" stroke="#9FA1A3" strokeWidth="2" strokeMiterlimit="10" />
                                                    <G id="Group">
                                                        <Path id="Vector_3" d="M8.57031 8.15234H15.0077H21.4275" stroke="#9FA1A3" strokeWidth="2" strokeMiterlimit="10" />
                                                        <Path id="Vector_4" d="M8.57031 12.8594H21.4275" stroke="#9FA1A3" strokeWidth="2" stroke-miterlimit="10" />
                                                    </G>
                                                    <G id="Group_2">
                                                        <Path id="Vector_5" d="M8.57031 17.0156H21.4275" stroke="#9FA1A3" strokeWidth="2" strokeMiterlimit="10" />
                                                        <Path id="Vector_6" d="M8.57031 21.7227H21.4275" stroke="#9FA1A3" strokeWidth="2" strokeMiterlimit="10" />
                                                    </G>
                                                </G>
                                            </G>
                                            <Defs>
                                                <ClipPath id="clip0_10238_57922">
                                                    <Rect width="30" height="30" fill="white" />
                                                </ClipPath>
                                            </Defs>
                                        </Svg>
                                    </View>
                                    <Text className='font-latoBold text-neutral-700 text-lg mt-[16]'>Aún sin resultados</Text>

                                    <View className='mt-[4] w-full max-w-[275.99px]'>
                                        <Text className='text-zinc-700 text-sm font-latoRegular text-center'>Todavía no están disponibles los resultados de la prueba</Text>
                                        {/* <Button label={'Ver Eventos'} extra={'w-full mt-[16] md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => navigation.navigate('ScreenEvent')} /> */}
                                    </View>
                                </View>
                            }
                        </EventDetailContainer>
                        {/* <ModalFotosVideos isVisible={isVisible} setIsVisible={setIsVisible} setFotosVideos={setFotosVideos} /> */}
                    </ScrollView>
                    <NavBottom />

                </View>
                :
                <LoadingScreen />
            }
        </>
    )
}

export default ScreenResultados