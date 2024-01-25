import { ScrollView, View, Text, TouchableOpacity, Modal, Image } from "react-native"
import { Svg, Path, G } from "react-native-svg"
import { CardEvent } from "../Components/EventComponents/CardEvent"
import { NavBottom } from "../Components/EventComponents/NavBottom"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { getEventsforTime } from "../../auth/eventPeticiones"
import { useEffect, useState } from "react"
import { setConcursos, setEventsEnCurso, setEventsFuturos, setEventsPasados, setMisEventos, setPasadas } from "../Redux/ReducerEventAll"
import Search from "../Components/Reusable/Inputs/Search"
import { NavHorizontalScroll } from "../Components/EventComponents/NavHorizontalScroll"
import { LinearGradient } from "expo-linear-gradient"
import { setLoadingAuth } from "../Redux/ReducerAuth"
import { getAllHorses } from "../../auth/horsePeticiones"
import { setMyHorse } from "../Redux/ReducerHorse"
import { BlurView } from "expo-blur"
import Button from "../Components/Reusable/Button"
import CrossSVG from "../../assets/icons/CrossSVG"
import Constants from "expo-constants"
import ModalAlert from "../Components/Reusable/ModalAlert"

const tabs = [
    'Próximos',
    'En curso',
    'Mis eventos',
    'Finalizados',
    'Concursos',
    'Pasadas'
]


export const ScreenEvent = ({ route }) => {

    const [activeLink, setActiveLink] = useState('Próximos');
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { screen } = route.params ? route.params : { screen: 'ScreenEvent' }
    const user = useSelector((state) => state.ReducerAuth.profile)
    const profileHorses = useSelector((state) => state.ReducerHorse.myHorse)
    const loadingAuth = useSelector((state) => state.ReducerAuth.loadingAuth)

    const [search, setSearch] = useState(null)

    useEffect(() => {
        getEventsforTime({
            succes: (v) => {
                dispatch(setEventsEnCurso(v.enCurso));
                dispatch(setEventsFuturos(v.futuros));
                dispatch(setEventsPasados(v.pasados));
                dispatch(setConcursos(v.concurso));
                dispatch(setPasadas(v.pasada));
                dispatch(setMisEventos(v.misEventos))
            },
            error: (e) => console.log("error", e),
            loading: (l) => dispatch(setLoadingAuth(l))
        });
        getAllHorses({
            succes: (v) => {
                dispatch(setMyHorse(v))
                // setisLoading(false)
            },
            error: (e) => console.log("error", e),
            loading: (l) => console.log("loading", l)
        });
    }, []);

    // useEffect(() => {
    //     if (profileHorses && profileHorses?.length === 0) {
    //         setVisible(true)
    //     } else {
    //         setVisible(false)
    //     }
    // }, [profileHorses])

    // Accede al estado de Redux usando useSelector
    const enCurso = useSelector((state) => state.ReducerEventAll.enCurso);
    const pasados = useSelector((state) => state.ReducerEventAll.pasados);
    const proximos = useSelector((state) => state.ReducerEventAll.proximos);
    const concurso = useSelector((state) => state.ReducerEventAll.concurso);
    const misEventos = useSelector((state) => state.ReducerEventAll.misEventos);

    const pasada = useSelector((state) => state.ReducerEventAll.pasada);
    // le mande una bandera a pasados para diferenciarlos del resto, la ptm
    const pasadosBandera = pasados?.map(pasado => {
        return { ...pasado, bandera: 'pasado' }
    })

    return (

        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="w-full h-full" style={{ paddingTop: Constants.statusBarHeight }}>
            <View className="header flex px-6 pt-[26px]">
                <View className="Profile flex-row mb-6 justify-between w-full">
                    <View className="UserData flex-row items-center gap-x-2">
                        <View className="UserPhoto " >
                            <TouchableOpacity onPress={() => navigation.navigate('ProfileIndex')}>
                                <View className="w-[43px] h-[43px] md:w-[93px] md:h-[93px] bg-[#6597DD] border-2 md:border-4 border-white rounded-full justify-center items-center" style={{
                                    shadowColor: 'rgba(0, 0, 0, .5)',
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    elevation: 6,
                                }}>
                                    <Image className="w-[100%] h-[100%] rounded-full" source={{ uri: user.profilePic }} />
                                    {/* <Svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="user">
                                            <Path id="Icon" d="M26.6667 28V25.3333C26.6667 23.9188 26.1048 22.5623 25.1046 21.5621C24.1044 20.5619 22.7479 20 21.3334 20H10.6667C9.25222 20 7.89567 20.5619 6.89547 21.5621C5.89528 22.5623 5.33337 23.9188 5.33337 25.3333V28M21.3334 9.33333C21.3334 12.2789 18.9456 14.6667 16 14.6667C13.0545 14.6667 10.6667 12.2789 10.6667 9.33333C10.6667 6.38781 13.0545 4 16 4C18.9456 4 21.3334 6.38781 21.3334 9.33333Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </G>
                                    </Svg> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View className="UserName flex-col ml-[9px]">
                            <Text className="saludo font-latoRegular text-base  md:text-[22px] font-normal leading-[22px] text-[#5B5B5B]">Buenas Tardes,</Text>
                            {
                                user?.firstName ?
                                    <Text className="name font-latoBold text-lg md:text-[25px] md:mt-[10px] leading-[22px] text-[#191720] ">{user?.firstName} {user?.lastName}</Text>
                                    :
                                    <Text className="name font-latoBold text-lg md:text-[25px] leading-[22px] text-[#191720] ">Usuario</Text>
                            }
                        </View>
                    </View>
                    {/* <View className="NotificationIcon w-11 h-11 justify-center bg-white items-center border rounded border-[#D1DADA] ">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M11.9992 21.75C11.0112 21.75 10.1232 21.237 9.62122 20.378C9.41322 20.02 9.53323 19.561 9.89122 19.352C10.2472 19.144 10.7072 19.264 10.9172 19.622C11.3762 20.409 12.6222 20.409 13.0812 19.622C13.2902 19.264 13.7502 19.144 14.1072 19.352C14.4652 19.56 14.5862 20.02 14.3772 20.378C13.8752 21.237 12.9872 21.75 11.9992 21.75ZM20.6742 18.325C20.7992 18.065 20.7642 17.757 20.5852 17.532C20.5662 17.509 18.7442 15.189 18.7442 12.5V8.995C18.7442 5.276 15.7182 2.25 11.9992 2.25C8.28023 2.25 5.25422 5.276 5.25422 8.995V12.5C5.25422 15.189 3.43223 17.509 3.41323 17.532C3.23423 17.757 3.19922 18.066 3.32422 18.325C3.44922 18.584 3.71123 18.75 3.99923 18.75H19.9992C20.2872 18.75 20.5492 18.584 20.6742 18.325ZM6.75422 12.5V8.995C6.75422 6.103 9.10723 3.75 11.9992 3.75C14.8912 3.75 17.2442 6.103 17.2442 8.995V12.5C17.2442 14.436 17.9942 16.158 18.6122 17.25H5.38523C6.00423 16.158 6.75422 14.436 6.75422 12.5Z" fill="#231D43" />
                        </Svg>
                    </View> */}
                </View>
            </View>
            <ScrollView className=" flex-col px-6 md:px-[50px]">
                <View className="MainTitle mb-6">
                    <Text className="Title font-latoBold text-2xl md:text-[44px] leading-[35px] text-[#23254C] w-[269px] md:w-[550px] md:pt-[10px] md:leading-[55px]">Encontrá todos los eventos que te interesan</Text>
                </View>
                {/* 
                <View className="contenedorBuscador container mb-[22px]">
                    <Search setValue={setSearch} placeholder={'Buscar en todos los eventos'} />
                </View> */}

                <NavHorizontalScroll tabs={tabs} defaultLink={activeLink} onPress={setActiveLink} containerClass={"mb-[20]"} />

                {/* <View className="Date w-full">
                    <Text className="Date font-latoBold text-xl leading-[29px] text-[#23254C] mb-6">Hoy</Text>
                </View> */}
                {/* EVENTOS FUTUROS */}
                <View className="w-full items-center md:flex-row md:flex-wrap md:justify-between">
                    {
                        activeLink === 'Próximos' &&
                        (proximos?.length > 0 ?

                            proximos?.map((event, index) => {
                                let fechaCruda = event.fechaInicio
                                let fechaFormateada
                                if (event.fechaInicio) {
                                    const fecha = new Date(fechaCruda)
                                    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
                                    fechaCruda = fecha
                                    fechaFormateada = fechaCruda.toLocaleDateString('es-ES', opciones)
                                }

                                return (
                                    <CardEvent
                                        nombre={event.nombreEvento}
                                        etiqueta={event.tipoDeConcurso}
                                        fecha={fechaFormateada}
                                        horario={event.horaInicio}
                                        ubicacion={event.ubicacion}
                                        imagen={event.imagen}
                                        key={index}
                                        id={event.id}
                                        futuro
                                    />
                                )
                            })
                            :
                            <View className="mt-[55px] md:mt-[300] w-full items-center">
                                <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                                    <Svg width="60%" height="60%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="ranking">
                                            <Path id="ranking_2" d="M34.125 26.687H28.875C28.3937 26.687 27.9632 26.7588 27.5625 26.8673V21.8745C27.5625 19.4088 26.0907 17.937 23.625 17.937H18.375C15.9093 17.937 14.4375 19.4088 14.4375 21.8745V23.3673C14.0367 23.2588 13.6062 23.187 13.125 23.187H7.875C5.40925 23.187 3.9375 24.6588 3.9375 27.1245V36.7495C3.9375 37.474 4.5255 38.062 5.25 38.062H15.75H26.25H36.75C37.4745 38.062 38.0625 37.474 38.0625 36.7495V30.6245C38.0625 28.1588 36.5908 26.687 34.125 26.687ZM6.5625 27.1245C6.5625 26.0938 6.84425 25.812 7.875 25.812H13.125C14.1558 25.812 14.4375 26.0938 14.4375 27.1245V35.437H6.5625V27.1245ZM17.0625 27.1245V21.8745C17.0625 20.8438 17.3442 20.562 18.375 20.562H23.625C24.6558 20.562 24.9375 20.8438 24.9375 21.8745V30.6245V35.437H17.0625V27.1245ZM35.4375 35.437H27.5625V30.6245C27.5625 29.5938 27.8442 29.312 28.875 29.312H34.125C35.1558 29.312 35.4375 29.5938 35.4375 30.6245V35.437ZM16.6268 12.0816L16.261 14.2095C16.135 14.9393 16.429 15.6656 17.0275 16.1031C17.6295 16.5406 18.4118 16.5999 19.0698 16.2534L21 15.2439L22.932 16.2552C23.2173 16.4039 23.5253 16.4775 23.8333 16.4775C24.234 16.4775 24.633 16.3515 24.9725 16.1048C25.571 15.669 25.8667 14.9427 25.7407 14.2112L25.3732 12.0797L26.9868 10.5136C27.5083 10.0061 27.6938 9.26221 27.4698 8.56921C27.2458 7.87621 26.6578 7.38286 25.9385 7.27786L23.7002 6.95401L22.7377 5.01154C22.4087 4.34654 21.7437 3.93359 21 3.93359C20.2563 3.93359 19.5913 4.34654 19.2623 5.01154L18.2998 6.95401L16.0633 7.27786C15.3423 7.38286 14.7542 7.87621 14.5302 8.56921C14.3062 9.26221 14.4917 10.0061 15.0132 10.5136L16.6268 12.0816ZM19.0522 9.50018C19.67 9.41268 20.2037 9.02603 20.482 8.46603L21 7.4212L21.518 8.46774C21.7963 9.02599 22.33 9.41268 22.946 9.50018L24.0922 9.6666L23.268 10.4662C22.8165 10.9037 22.6118 11.5355 22.7203 12.148L22.9163 13.2856L21.8785 12.743C21.6037 12.5977 21.301 12.5259 21 12.5259C20.699 12.5259 20.3962 12.5977 20.1197 12.743L19.0837 13.2856L19.278 12.1532C19.3865 11.5337 19.1817 10.9037 18.732 10.4662L17.9078 9.66467L19.0522 9.50018Z" fill="#9FA1A3" />
                                        </G>
                                    </Svg>
                                </View>
                                <View className="items-center my-[16] gap-y-[4]">
                                    <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Sin eventos</Text>
                                    <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">Todavía no hay próximos eventos. Cuando esten los vas a poder ver acá.</Text>

                                </View>
                                <Button label={'Ver Concursos'} extra={'w-full md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => setActiveLink('Concursos')} />
                            </View>
                        )

                    }
                    {/* mis eventos */}

                    {

                        activeLink === 'Mis eventos' &&
                        (misEventos?.length > 0 ?

                            misEventos?.map((event, index) => {
                                let fechaCruda = event.fechaInicio
                                let fechaFormateada
                                if (event.fechaInicio) {
                                    const fecha = new Date(fechaCruda)
                                    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
                                    fechaCruda = fecha
                                    fechaFormateada = fechaCruda.toLocaleDateString('es-ES', opciones)
                                }

                                return (
                                    <CardEvent
                                        nombre={event.nombreEvento}
                                        etiqueta={event.tipoDeConcurso}
                                        fecha={fechaFormateada}
                                        horario={event.horaInicio}
                                        ubicacion={event.ubicacion}
                                        imagen={event.imagen}
                                        key={index}
                                        id={event.id}
                                        misEventos={misEventos}
                                    />
                                )
                            })
                            :
                            <View className="mt-[55px] md:mt-[300] w-full items-center">
                                <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                                    <Svg width="60%" height="60%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="ranking">
                                            <Path id="ranking_2" d="M34.125 26.687H28.875C28.3937 26.687 27.9632 26.7588 27.5625 26.8673V21.8745C27.5625 19.4088 26.0907 17.937 23.625 17.937H18.375C15.9093 17.937 14.4375 19.4088 14.4375 21.8745V23.3673C14.0367 23.2588 13.6062 23.187 13.125 23.187H7.875C5.40925 23.187 3.9375 24.6588 3.9375 27.1245V36.7495C3.9375 37.474 4.5255 38.062 5.25 38.062H15.75H26.25H36.75C37.4745 38.062 38.0625 37.474 38.0625 36.7495V30.6245C38.0625 28.1588 36.5908 26.687 34.125 26.687ZM6.5625 27.1245C6.5625 26.0938 6.84425 25.812 7.875 25.812H13.125C14.1558 25.812 14.4375 26.0938 14.4375 27.1245V35.437H6.5625V27.1245ZM17.0625 27.1245V21.8745C17.0625 20.8438 17.3442 20.562 18.375 20.562H23.625C24.6558 20.562 24.9375 20.8438 24.9375 21.8745V30.6245V35.437H17.0625V27.1245ZM35.4375 35.437H27.5625V30.6245C27.5625 29.5938 27.8442 29.312 28.875 29.312H34.125C35.1558 29.312 35.4375 29.5938 35.4375 30.6245V35.437ZM16.6268 12.0816L16.261 14.2095C16.135 14.9393 16.429 15.6656 17.0275 16.1031C17.6295 16.5406 18.4118 16.5999 19.0698 16.2534L21 15.2439L22.932 16.2552C23.2173 16.4039 23.5253 16.4775 23.8333 16.4775C24.234 16.4775 24.633 16.3515 24.9725 16.1048C25.571 15.669 25.8667 14.9427 25.7407 14.2112L25.3732 12.0797L26.9868 10.5136C27.5083 10.0061 27.6938 9.26221 27.4698 8.56921C27.2458 7.87621 26.6578 7.38286 25.9385 7.27786L23.7002 6.95401L22.7377 5.01154C22.4087 4.34654 21.7437 3.93359 21 3.93359C20.2563 3.93359 19.5913 4.34654 19.2623 5.01154L18.2998 6.95401L16.0633 7.27786C15.3423 7.38286 14.7542 7.87621 14.5302 8.56921C14.3062 9.26221 14.4917 10.0061 15.0132 10.5136L16.6268 12.0816ZM19.0522 9.50018C19.67 9.41268 20.2037 9.02603 20.482 8.46603L21 7.4212L21.518 8.46774C21.7963 9.02599 22.33 9.41268 22.946 9.50018L24.0922 9.6666L23.268 10.4662C22.8165 10.9037 22.6118 11.5355 22.7203 12.148L22.9163 13.2856L21.8785 12.743C21.6037 12.5977 21.301 12.5259 21 12.5259C20.699 12.5259 20.3962 12.5977 20.1197 12.743L19.0837 13.2856L19.278 12.1532C19.3865 11.5337 19.1817 10.9037 18.732 10.4662L17.9078 9.66467L19.0522 9.50018Z" fill="#9FA1A3" />
                                        </G>
                                    </Svg>
                                </View>
                                <View className="items-center my-[16] gap-y-[4]">
                                    <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Sin eventos</Text>
                                    <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">Todavía no te inscribiste a ningún evento. Cuando te inscribas lo vas a poder ver acá.</Text>
                                </View>
                                <Button label={'Ver Próximos eventos'} extra={'w-full md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => setActiveLink('Próximos')} />
                            </View>
                        )
                    }

                    {/* EVENTOS en Curso */}
                    {
                        activeLink === 'En curso' &&
                        (enCurso?.length > 0 ?

                            enCurso?.map((event, index) => {
                                let fechaCruda = event.fechaInicio
                                let fechaFormateada
                                if (event.fechaInicio) {
                                    const fecha = new Date(fechaCruda)
                                    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
                                    fechaCruda = fecha
                                    fechaFormateada = fechaCruda.toLocaleDateString('es-ES', opciones)
                                }

                                return (
                                    <CardEvent
                                        nombre={event.nombreEvento}
                                        etiqueta={event.tipoDeConcurso}
                                        fecha={fechaFormateada}
                                        horario={event.horaInicio}
                                        ubicacion={event.ubicacion}
                                        imagen={event.imagen}
                                        key={index}
                                        id={event.id}
                                        enCurso={"sad"}
                                    />
                                )
                            })
                            :
                            <View className="mt-[55px] md:mt-[300] w-full items-center">
                                <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                                    <Svg width="60%" height="60%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="ranking">
                                            <Path id="ranking_2" d="M34.125 26.687H28.875C28.3937 26.687 27.9632 26.7588 27.5625 26.8673V21.8745C27.5625 19.4088 26.0907 17.937 23.625 17.937H18.375C15.9093 17.937 14.4375 19.4088 14.4375 21.8745V23.3673C14.0367 23.2588 13.6062 23.187 13.125 23.187H7.875C5.40925 23.187 3.9375 24.6588 3.9375 27.1245V36.7495C3.9375 37.474 4.5255 38.062 5.25 38.062H15.75H26.25H36.75C37.4745 38.062 38.0625 37.474 38.0625 36.7495V30.6245C38.0625 28.1588 36.5908 26.687 34.125 26.687ZM6.5625 27.1245C6.5625 26.0938 6.84425 25.812 7.875 25.812H13.125C14.1558 25.812 14.4375 26.0938 14.4375 27.1245V35.437H6.5625V27.1245ZM17.0625 27.1245V21.8745C17.0625 20.8438 17.3442 20.562 18.375 20.562H23.625C24.6558 20.562 24.9375 20.8438 24.9375 21.8745V30.6245V35.437H17.0625V27.1245ZM35.4375 35.437H27.5625V30.6245C27.5625 29.5938 27.8442 29.312 28.875 29.312H34.125C35.1558 29.312 35.4375 29.5938 35.4375 30.6245V35.437ZM16.6268 12.0816L16.261 14.2095C16.135 14.9393 16.429 15.6656 17.0275 16.1031C17.6295 16.5406 18.4118 16.5999 19.0698 16.2534L21 15.2439L22.932 16.2552C23.2173 16.4039 23.5253 16.4775 23.8333 16.4775C24.234 16.4775 24.633 16.3515 24.9725 16.1048C25.571 15.669 25.8667 14.9427 25.7407 14.2112L25.3732 12.0797L26.9868 10.5136C27.5083 10.0061 27.6938 9.26221 27.4698 8.56921C27.2458 7.87621 26.6578 7.38286 25.9385 7.27786L23.7002 6.95401L22.7377 5.01154C22.4087 4.34654 21.7437 3.93359 21 3.93359C20.2563 3.93359 19.5913 4.34654 19.2623 5.01154L18.2998 6.95401L16.0633 7.27786C15.3423 7.38286 14.7542 7.87621 14.5302 8.56921C14.3062 9.26221 14.4917 10.0061 15.0132 10.5136L16.6268 12.0816ZM19.0522 9.50018C19.67 9.41268 20.2037 9.02603 20.482 8.46603L21 7.4212L21.518 8.46774C21.7963 9.02599 22.33 9.41268 22.946 9.50018L24.0922 9.6666L23.268 10.4662C22.8165 10.9037 22.6118 11.5355 22.7203 12.148L22.9163 13.2856L21.8785 12.743C21.6037 12.5977 21.301 12.5259 21 12.5259C20.699 12.5259 20.3962 12.5977 20.1197 12.743L19.0837 13.2856L19.278 12.1532C19.3865 11.5337 19.1817 10.9037 18.732 10.4662L17.9078 9.66467L19.0522 9.50018Z" fill="#9FA1A3" />
                                        </G>
                                    </Svg>
                                </View>
                                <View className="items-center my-[16] gap-y-[4]">
                                    <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Sin eventos</Text>
                                    <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">En este momento no hay eventos en curso. Cuando esten los vas a poder ver acá.</Text>
                                </View>
                                <Button label={'Ver Próximos eventos'} extra={'w-full md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => setActiveLink('Próximos')} />
                            </View>
                        )

                    }
                    {/* EVENTOS PASADOS */}
                    {
                        activeLink === 'Finalizados' &&
                        (pasadosBandera?.length > 0 ?

                            pasadosBandera?.map((event, index) => {
                                let fechaCruda = event.fechaInicio
                                let fechaFormateada
                                if (event.fechaInicio) {
                                    const fecha = new Date(fechaCruda)
                                    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
                                    fechaCruda = fecha
                                    fechaFormateada = fechaCruda.toLocaleDateString('es-ES', opciones)
                                }

                                return (
                                    <CardEvent
                                        nombre={event.nombreEvento}
                                        etiqueta={event.tipoDeConcurso}
                                        fecha={fechaFormateada}
                                        horario={event.horaInicio}
                                        ubicacion={event.ubicacion}
                                        imagen={event.imagen}
                                        key={index}
                                        id={event.id}
                                        bandera={event.bandera}

                                    />
                                )
                            })
                            :
                            <View className="mt-[55px] md:mt-[300] w-full items-center">
                                <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                                    <Svg width="60%" height="60%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="ranking">
                                            <Path id="ranking_2" d="M34.125 26.687H28.875C28.3937 26.687 27.9632 26.7588 27.5625 26.8673V21.8745C27.5625 19.4088 26.0907 17.937 23.625 17.937H18.375C15.9093 17.937 14.4375 19.4088 14.4375 21.8745V23.3673C14.0367 23.2588 13.6062 23.187 13.125 23.187H7.875C5.40925 23.187 3.9375 24.6588 3.9375 27.1245V36.7495C3.9375 37.474 4.5255 38.062 5.25 38.062H15.75H26.25H36.75C37.4745 38.062 38.0625 37.474 38.0625 36.7495V30.6245C38.0625 28.1588 36.5908 26.687 34.125 26.687ZM6.5625 27.1245C6.5625 26.0938 6.84425 25.812 7.875 25.812H13.125C14.1558 25.812 14.4375 26.0938 14.4375 27.1245V35.437H6.5625V27.1245ZM17.0625 27.1245V21.8745C17.0625 20.8438 17.3442 20.562 18.375 20.562H23.625C24.6558 20.562 24.9375 20.8438 24.9375 21.8745V30.6245V35.437H17.0625V27.1245ZM35.4375 35.437H27.5625V30.6245C27.5625 29.5938 27.8442 29.312 28.875 29.312H34.125C35.1558 29.312 35.4375 29.5938 35.4375 30.6245V35.437ZM16.6268 12.0816L16.261 14.2095C16.135 14.9393 16.429 15.6656 17.0275 16.1031C17.6295 16.5406 18.4118 16.5999 19.0698 16.2534L21 15.2439L22.932 16.2552C23.2173 16.4039 23.5253 16.4775 23.8333 16.4775C24.234 16.4775 24.633 16.3515 24.9725 16.1048C25.571 15.669 25.8667 14.9427 25.7407 14.2112L25.3732 12.0797L26.9868 10.5136C27.5083 10.0061 27.6938 9.26221 27.4698 8.56921C27.2458 7.87621 26.6578 7.38286 25.9385 7.27786L23.7002 6.95401L22.7377 5.01154C22.4087 4.34654 21.7437 3.93359 21 3.93359C20.2563 3.93359 19.5913 4.34654 19.2623 5.01154L18.2998 6.95401L16.0633 7.27786C15.3423 7.38286 14.7542 7.87621 14.5302 8.56921C14.3062 9.26221 14.4917 10.0061 15.0132 10.5136L16.6268 12.0816ZM19.0522 9.50018C19.67 9.41268 20.2037 9.02603 20.482 8.46603L21 7.4212L21.518 8.46774C21.7963 9.02599 22.33 9.41268 22.946 9.50018L24.0922 9.6666L23.268 10.4662C22.8165 10.9037 22.6118 11.5355 22.7203 12.148L22.9163 13.2856L21.8785 12.743C21.6037 12.5977 21.301 12.5259 21 12.5259C20.699 12.5259 20.3962 12.5977 20.1197 12.743L19.0837 13.2856L19.278 12.1532C19.3865 11.5337 19.1817 10.9037 18.732 10.4662L17.9078 9.66467L19.0522 9.50018Z" fill="#9FA1A3" />
                                        </G>
                                    </Svg>
                                </View>
                                <View className="items-center my-[16] gap-y-[4]">
                                    <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Sin eventos</Text>
                                    <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">En este momento no hay eventos finalizados. Cuando esten los vas a poder ver acá.</Text>
                                </View>
                                <Button label={'Ver Próximos eventos'} extra={'w-full md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => setActiveLink('Próximos')} />
                            </View>
                        )

                    }
                    {/* CONCURSOS */}
                    {
                        activeLink === 'Concursos' &&
                        (concurso?.length > 0 ?

                            concurso?.map((event, index) => {
                                let fechaCruda = event.fechaInicio
                                let fechaFormateada
                                if (event.fechaInicio) {
                                    const fecha = new Date(fechaCruda)
                                    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
                                    fechaCruda = fecha
                                    fechaFormateada = fechaCruda.toLocaleDateString('es-ES', opciones)
                                }

                                return (
                                    <CardEvent
                                        nombre={event.nombreEvento}
                                        etiqueta={event.tipoDeConcurso}
                                        fecha={fechaFormateada}
                                        horario={event.horaInicio}
                                        ubicacion={event.ubicacion}
                                        imagen={event.imagen}
                                        key={index}
                                        id={event.id}
                                        concurso
                                    />
                                )
                            })
                            :
                            <View className="mt-[55px] md:mt-[300] w-full items-center">
                                <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                                    <Svg width="60%" height="60%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="ranking">
                                            <Path id="ranking_2" d="M34.125 26.687H28.875C28.3937 26.687 27.9632 26.7588 27.5625 26.8673V21.8745C27.5625 19.4088 26.0907 17.937 23.625 17.937H18.375C15.9093 17.937 14.4375 19.4088 14.4375 21.8745V23.3673C14.0367 23.2588 13.6062 23.187 13.125 23.187H7.875C5.40925 23.187 3.9375 24.6588 3.9375 27.1245V36.7495C3.9375 37.474 4.5255 38.062 5.25 38.062H15.75H26.25H36.75C37.4745 38.062 38.0625 37.474 38.0625 36.7495V30.6245C38.0625 28.1588 36.5908 26.687 34.125 26.687ZM6.5625 27.1245C6.5625 26.0938 6.84425 25.812 7.875 25.812H13.125C14.1558 25.812 14.4375 26.0938 14.4375 27.1245V35.437H6.5625V27.1245ZM17.0625 27.1245V21.8745C17.0625 20.8438 17.3442 20.562 18.375 20.562H23.625C24.6558 20.562 24.9375 20.8438 24.9375 21.8745V30.6245V35.437H17.0625V27.1245ZM35.4375 35.437H27.5625V30.6245C27.5625 29.5938 27.8442 29.312 28.875 29.312H34.125C35.1558 29.312 35.4375 29.5938 35.4375 30.6245V35.437ZM16.6268 12.0816L16.261 14.2095C16.135 14.9393 16.429 15.6656 17.0275 16.1031C17.6295 16.5406 18.4118 16.5999 19.0698 16.2534L21 15.2439L22.932 16.2552C23.2173 16.4039 23.5253 16.4775 23.8333 16.4775C24.234 16.4775 24.633 16.3515 24.9725 16.1048C25.571 15.669 25.8667 14.9427 25.7407 14.2112L25.3732 12.0797L26.9868 10.5136C27.5083 10.0061 27.6938 9.26221 27.4698 8.56921C27.2458 7.87621 26.6578 7.38286 25.9385 7.27786L23.7002 6.95401L22.7377 5.01154C22.4087 4.34654 21.7437 3.93359 21 3.93359C20.2563 3.93359 19.5913 4.34654 19.2623 5.01154L18.2998 6.95401L16.0633 7.27786C15.3423 7.38286 14.7542 7.87621 14.5302 8.56921C14.3062 9.26221 14.4917 10.0061 15.0132 10.5136L16.6268 12.0816ZM19.0522 9.50018C19.67 9.41268 20.2037 9.02603 20.482 8.46603L21 7.4212L21.518 8.46774C21.7963 9.02599 22.33 9.41268 22.946 9.50018L24.0922 9.6666L23.268 10.4662C22.8165 10.9037 22.6118 11.5355 22.7203 12.148L22.9163 13.2856L21.8785 12.743C21.6037 12.5977 21.301 12.5259 21 12.5259C20.699 12.5259 20.3962 12.5977 20.1197 12.743L19.0837 13.2856L19.278 12.1532C19.3865 11.5337 19.1817 10.9037 18.732 10.4662L17.9078 9.66467L19.0522 9.50018Z" fill="#9FA1A3" />
                                        </G>
                                    </Svg>
                                </View>
                                <View className="items-center my-[16] gap-y-[4]">
                                    <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Sin eventos</Text>
                                    <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">En este momento no hay concursos. Cuando esten los vas a poder ver acá.</Text>
                                </View>
                                <Button label={'Ver Próximos eventos'} extra={'w-full md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => setActiveLink('Próximos')} />
                            </View>
                        )

                    }
                    {/* PASADAS */}
                    {
                        activeLink === 'Pasadas' &&
                        (pasada?.length > 0 ?

                            pasada?.map((event, index) => {
                                let fechaCruda = event.fechaInicio
                                let fechaFormateada
                                if (event.fechaInicio) {
                                    const fecha = new Date(fechaCruda)
                                    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
                                    fechaCruda = fecha
                                    fechaFormateada = fechaCruda.toLocaleDateString('es-ES', opciones)
                                }

                                return (
                                    <CardEvent
                                        nombre={event.nombreEvento}
                                        etiqueta={event.tipoDeConcurso}
                                        fecha={fechaFormateada}
                                        horario={event.horaInicio}
                                        ubicacion={event.ubicacion}
                                        imagen={event.imagen}
                                        key={index}
                                        id={event.id}
                                        conscurso
                                    />
                                )
                            })
                            :
                            <View className="mt-[55px] md:mt-[300] w-full items-center">
                                <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
                                    <Svg width="60%" height="60%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="ranking">
                                            <Path id="ranking_2" d="M34.125 26.687H28.875C28.3937 26.687 27.9632 26.7588 27.5625 26.8673V21.8745C27.5625 19.4088 26.0907 17.937 23.625 17.937H18.375C15.9093 17.937 14.4375 19.4088 14.4375 21.8745V23.3673C14.0367 23.2588 13.6062 23.187 13.125 23.187H7.875C5.40925 23.187 3.9375 24.6588 3.9375 27.1245V36.7495C3.9375 37.474 4.5255 38.062 5.25 38.062H15.75H26.25H36.75C37.4745 38.062 38.0625 37.474 38.0625 36.7495V30.6245C38.0625 28.1588 36.5908 26.687 34.125 26.687ZM6.5625 27.1245C6.5625 26.0938 6.84425 25.812 7.875 25.812H13.125C14.1558 25.812 14.4375 26.0938 14.4375 27.1245V35.437H6.5625V27.1245ZM17.0625 27.1245V21.8745C17.0625 20.8438 17.3442 20.562 18.375 20.562H23.625C24.6558 20.562 24.9375 20.8438 24.9375 21.8745V30.6245V35.437H17.0625V27.1245ZM35.4375 35.437H27.5625V30.6245C27.5625 29.5938 27.8442 29.312 28.875 29.312H34.125C35.1558 29.312 35.4375 29.5938 35.4375 30.6245V35.437ZM16.6268 12.0816L16.261 14.2095C16.135 14.9393 16.429 15.6656 17.0275 16.1031C17.6295 16.5406 18.4118 16.5999 19.0698 16.2534L21 15.2439L22.932 16.2552C23.2173 16.4039 23.5253 16.4775 23.8333 16.4775C24.234 16.4775 24.633 16.3515 24.9725 16.1048C25.571 15.669 25.8667 14.9427 25.7407 14.2112L25.3732 12.0797L26.9868 10.5136C27.5083 10.0061 27.6938 9.26221 27.4698 8.56921C27.2458 7.87621 26.6578 7.38286 25.9385 7.27786L23.7002 6.95401L22.7377 5.01154C22.4087 4.34654 21.7437 3.93359 21 3.93359C20.2563 3.93359 19.5913 4.34654 19.2623 5.01154L18.2998 6.95401L16.0633 7.27786C15.3423 7.38286 14.7542 7.87621 14.5302 8.56921C14.3062 9.26221 14.4917 10.0061 15.0132 10.5136L16.6268 12.0816ZM19.0522 9.50018C19.67 9.41268 20.2037 9.02603 20.482 8.46603L21 7.4212L21.518 8.46774C21.7963 9.02599 22.33 9.41268 22.946 9.50018L24.0922 9.6666L23.268 10.4662C22.8165 10.9037 22.6118 11.5355 22.7203 12.148L22.9163 13.2856L21.8785 12.743C21.6037 12.5977 21.301 12.5259 21 12.5259C20.699 12.5259 20.3962 12.5977 20.1197 12.743L19.0837 13.2856L19.278 12.1532C19.3865 11.5337 19.1817 10.9037 18.732 10.4662L17.9078 9.66467L19.0522 9.50018Z" fill="#9FA1A3" />
                                        </G>
                                    </Svg>
                                </View>
                                <View className="items-center my-[16] gap-y-[4]">
                                    <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Sin eventos</Text>
                                    <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">En este momento no hay pasadas. Cuando esten los vas a poder ver acá.</Text>
                                </View>
                                <Button label={'Ver Próximos eventos'} extra={'w-full md:h-16 md:max-w-[600px] md:pt-[10px] md:mt-[46px]'} onPress={() => setActiveLink('Próximos')} />
                            </View>
                        )

                    }
                </View>
            </ScrollView>
            <Modal transparent={true} visible={visible}>
                <BlurView
                    className='blur h-full w-full'
                    intensity={50}
                >
                    <View className="w-full h-full justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View className="w-full bg-white py-[20] px-[32] rounded-tl-[10px] rounded-tr-[10px]">
                            <TouchableOpacity onPress={() => setVisible(false)} className="mt-[10]">
                                <CrossSVG color={"#25314C"} size={"24"} stroke={"0.75"} />
                            </TouchableOpacity>
                            <View className="items-center">
                                <View className="w-14 h-14 rounded-full items-center justify-center bg-emerald-100 border-8 border-emerald-50">
                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 20 20"
                                        fill="#23254C"
                                    >
                                        <Path
                                            d="M10.3663 0C10.5313 0 10.6965 0 10.8615 0C10.8839 0.0102832 10.9053 0.0258984 10.9289 0.029707C12.6027 0.3104 13.6871 1.57752 13.6718 3.27272C13.6688 3.61321 13.7667 3.8402 14.0112 4.08814C15.4809 5.57959 16.9373 7.08398 18.3712 8.60971C19.0956 9.38057 19.379 10.3262 19.243 11.3827C19.0054 13.2295 17.0542 14.4079 15.3049 13.7646C14.6758 13.5335 14.1886 13.124 13.8352 12.5935C13.5248 12.8498 13.2468 13.1541 12.9044 13.3419C12.565 13.5277 12.4672 13.7604 12.4215 14.1207C12.1107 16.5613 10.2936 18.6313 7.92008 19.2669C7.52437 19.3728 7.11419 19.4238 6.71047 19.5H5.79641C5.57171 19.4642 5.347 19.4307 5.12267 19.3918C2.25899 18.8956 0.0492442 16.3259 0.0126817 13.4242C-0.00636122 11.9076 -0.00217177 10.3906 0.0134435 8.87402C0.0248692 7.76306 0.264811 6.69246 0.752692 5.69385C2.03733 3.06592 4.12673 1.51049 7.02392 1.05536C7.33585 1.00623 7.34727 1.00928 7.33508 0.696211C7.32137 0.355342 7.46115 0.125684 7.7765 0C7.94141 0 8.10671 0 8.27162 0C8.2998 0.0114258 8.32722 0.0289453 8.35655 0.0331348C8.85966 0.100928 9.31441 0.291357 9.73107 0.577002C9.79125 0.618135 9.84952 0.662314 9.94549 0.731631C9.90474 0.352295 10.0658 0.131016 10.3663 0ZM11.2922 13.9562C10.9776 13.9379 10.6733 13.9364 10.3728 13.9002C8.61782 13.6877 7.17436 12.0233 7.20902 10.2626C7.21549 9.92481 7.45772 9.67307 7.77764 9.67154C8.10175 9.66964 8.32989 9.90996 8.35388 10.2539C8.3695 10.474 8.39007 10.6987 8.44719 10.9109C8.73969 11.9936 9.7185 12.7706 10.8059 12.798C11.9987 12.8281 12.9863 12.1311 13.3641 10.9927C13.4844 10.6294 13.6932 10.474 14.0131 10.5087C14.3006 10.5395 14.488 10.7638 14.515 11.1085C14.5836 11.9826 15.2177 12.6594 16.0884 12.7877C16.8908 12.9062 17.7379 12.3924 18.0148 11.5819C18.3107 10.7151 18.0696 9.9469 17.4602 9.30363C16.072 7.83885 14.6689 6.38777 13.2632 4.93937C12.7124 4.37188 12.0387 4.00131 11.2743 3.79755C11.2176 3.78231 11.1582 3.77584 11.1022 3.76594C11.0923 3.79983 11.0858 3.81164 11.0858 3.82383C11.0843 4.0969 11.0846 4.3696 11.0824 4.64268C11.0793 5.02734 10.8489 5.28937 10.5118 5.2928C10.1729 5.29661 9.94207 5.03801 9.94054 4.64915C9.93902 4.16051 9.95235 3.6711 9.93712 3.18284C9.90931 2.30153 9.49151 1.66893 8.68637 1.29987C8.62772 1.27321 8.56297 1.25988 8.48033 1.2336V1.47431C8.48033 2.50263 8.48033 3.53095 8.47995 4.55927C8.47995 4.64153 8.47995 4.72494 8.46852 4.80606C8.43158 5.0681 8.21868 5.26728 7.95703 5.29128C7.70147 5.31451 7.45087 5.14884 7.36822 4.89976C7.3507 4.84682 7.34004 4.79121 7.32366 4.72685C6.63621 4.84225 6.01236 5.09628 5.45859 5.5038C4.18081 6.44452 3.53487 7.71545 3.52763 9.30249C3.52078 10.8195 3.52611 12.3364 3.52611 13.8534C3.52611 14.3782 3.32425 14.582 2.80552 14.5823C2.3801 14.5823 1.95506 14.5823 1.52964 14.5827C1.46909 14.5827 1.40815 14.5877 1.34455 14.5907C1.78025 16.4463 3.69331 18.4812 6.49453 18.349C9.23557 18.2196 11.0504 16.0586 11.2922 13.9566V13.9562ZM7.33623 2.15871C7.102 2.19718 6.90052 2.22193 6.70286 2.26421C3.42366 2.9688 1.15564 5.77269 1.14993 9.1292C1.14764 10.487 1.14993 11.8447 1.14993 13.2025V13.4272H2.38391C2.38391 13.3396 2.38391 13.265 2.38391 13.1899C2.38391 11.8958 2.37744 10.6012 2.38544 9.30706C2.39724 7.39553 3.15668 5.84391 4.66602 4.66972C5.4106 4.09081 6.26182 3.74461 7.19036 3.58274C7.2433 3.5736 7.32937 3.51647 7.33051 3.47991C7.34042 3.0503 7.33699 2.62069 7.33699 2.15909L7.33623 2.15871ZM11.0911 1.24922V2.551C11.5748 2.70372 12.0463 2.85264 12.5159 3.00079C12.4942 2.21736 11.8277 1.38709 11.0911 1.24922Z"
                                            fill="black"
                                        />
                                        <Path
                                            d="M11.9614 7.16885C11.9614 6.99137 11.9576 6.81389 11.9625 6.63679C11.9709 6.31839 12.2021 6.07807 12.5079 6.0636C12.8034 6.04951 13.0807 6.28107 13.0963 6.59337C13.115 6.97271 13.1146 7.35395 13.0971 7.73329C13.0818 8.05702 12.8072 8.28248 12.4946 8.26497C12.1903 8.24745 11.9686 8.00712 11.9621 7.68225C11.9587 7.51125 11.9614 7.34024 11.9617 7.16885H11.9614Z"
                                            fill="#23254C"
                                        />
                                    </Svg>
                                </View>
                            </View>
                            <View className="mb-[24]">
                                <Text className="text-gray-900 text-center text-lg font-latoBold mb-[18]">Agrega tu primer caballo</Text>
                                <View className="flex-row">
                                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="check">
                                            <Path id="check_2" d="M9.00078 17.75C8.99978 17.75 8.99877 17.75 8.99777 17.75C8.79777 17.749 8.60677 17.669 8.46577 17.526L4.46577 13.464C4.17477 13.169 4.17877 12.694 4.47377 12.403C4.76877 12.113 5.24477 12.116 5.53477 12.411L9.00378 15.935L18.4698 6.46902C18.7628 6.17602 19.2378 6.17602 19.5308 6.46902C19.8238 6.76202 19.8238 7.23705 19.5308 7.53005L9.53077 17.5301C9.39077 17.6711 9.19978 17.75 9.00078 17.75Z" fill="#25314C" />
                                        </G>
                                    </Svg>
                                    <Text className="ml-[11] text-gray-500 text-sm font-latoRegular">Rápida inscripción en concursos y pasadas</Text>
                                </View>
                                <View className="flex-row my-[12]">
                                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="check">
                                            <Path id="check_2" d="M9.00078 17.75C8.99978 17.75 8.99877 17.75 8.99777 17.75C8.79777 17.749 8.60677 17.669 8.46577 17.526L4.46577 13.464C4.17477 13.169 4.17877 12.694 4.47377 12.403C4.76877 12.113 5.24477 12.116 5.53477 12.411L9.00378 15.935L18.4698 6.46902C18.7628 6.17602 19.2378 6.17602 19.5308 6.46902C19.8238 6.76202 19.8238 7.23705 19.5308 7.53005L9.53077 17.5301C9.39077 17.6711 9.19978 17.75 9.00078 17.75Z" fill="#25314C" />
                                        </G>
                                    </Svg>
                                    <Text className="ml-[11] text-gray-500 text-sm font-latoRegular">Agendar servicios para tus caballos</Text>
                                </View>
                                <View className="flex-row">
                                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="check">
                                            <Path id="check_2" d="M9.00078 17.75C8.99978 17.75 8.99877 17.75 8.99777 17.75C8.79777 17.749 8.60677 17.669 8.46577 17.526L4.46577 13.464C4.17477 13.169 4.17877 12.694 4.47377 12.403C4.76877 12.113 5.24477 12.116 5.53477 12.411L9.00378 15.935L18.4698 6.46902C18.7628 6.17602 19.2378 6.17602 19.5308 6.46902C19.8238 6.76202 19.8238 7.23705 19.5308 7.53005L9.53077 17.5301C9.39077 17.6711 9.19978 17.75 9.00078 17.75Z" fill="#25314C" />
                                        </G>
                                    </Svg>
                                    <Text className="ml-[11] text-gray-500 text-sm font-latoRegular">Alertas de los nuevos eventos, para que puedas competir con tus caballos</Text>
                                </View>
                            </View>

                            <View>
                                <Button label={'Agregar caballo'} extra={'w-full mt-[26]'} onPress={() => {
                                    setVisible(false)
                                    navigation.navigate("AddHorses")
                                }} />
                                <Button label={'No, mas tarde'} type={'secondary'} extra={'w-full border-1 border-labelDarkBlue mt-3'} onPress={() => setVisible(false)} />
                            </View>

                        </View>
                    </View>
                </BlurView>
            </Modal>
            {modalVisible && (
        <ModalAlert modalVisible={modalVisible} onClose={() => setModalVisible(false)} />
      )}
            <NavBottom screen={screen} setModalVisible={setModalVisible}/>
        </LinearGradient>
    )
}