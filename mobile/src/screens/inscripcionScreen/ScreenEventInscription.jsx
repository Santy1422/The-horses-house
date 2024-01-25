import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { useState } from "react"
import CustomToggle from "../../Components/Reusable/CustomToggle"
import * as Animatable from 'react-native-animatable';
import { ClubEvent } from "../../Components/EventComponents/ClubEvent";
import { DataRiderEvent } from "../../Components/EventComponents/DataRiderEvent";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Reusable/Button";
import { setEvento } from "../../Redux/ReducerCart";
import { useNavigation } from "@react-navigation/native";
import { HorseEvent } from "../../Components/InscripcionAEvento/HorseEvent";
import { LinearGradient } from "expo-linear-gradient";
import { BackArrow } from "../../Components/Reusable/BackArrow";
import { calendarMedium, concursoIcon, locationMedium, watchMedium } from "../../../utils/svgIcons";



export const ScreenEventInscription = ({ route }) => {
    const [modalVisible, setModalVisible] = useState(false) //para el modal de agregar caballo en dropdownsearch
    const { fechaFormateada } = route.params
    const user = useSelector((state) => state.ReducerAuth.profile)
    const horses = useSelector((state) => state.ReducerHorse.myHorse)
    const eventId = useSelector((state) => state.ReducerEventAll.eventId)
    const [isToggled, setIsToggled] = useState(true);
    const [isToggledCaballo, setIsToggledCaballo] = useState(false);
    const [club, setClub] = useState(null)
    const [name, setName] = useState(user.firstName + ' ' + user.lastName)
    const [email, setEmail] = useState(user.email)
    const [categoria, setCategoria] = useState(null)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [cantidadCaballos, setCantidadCaballos] = useState(1)
    const [scrollToEnd, setScrollToEnd] = useState(false);

    const [prueba1, setPrueba1] = useState({
        caballos: [],
        prubaId: "",
        precioPrueba: "",
        nombrePrueba: "",
    })
    const [prueba2, setPrueba2] = useState({
        caballos: [],
        prubaId: "",
        precioPrueba: "",
        nombrePrueba: "",
    })

    const guardarInscripcionRedux = () => {
        const inscripcion = {
            clubRepresenta: club,
            nombreDelEvento: eventId?.event.nombreEvento, // para que pones el ? si lo cargo en el redux en la pantalla anterior. 
            prueba1,
            prueba2: prueba2 && prueba2,
            eventId: eventId._id,
            categoria: categoria
        }
        dispatch(setEvento(inscripcion))
        navigation.navigate('CheckoutScreen')
    }

    const handleToggle = () => {
        setIsToggled(previousState => !previousState);
    };

    const handleScrollToEnd = () => {
        setScrollToEnd(true);
    };

    const handleToggleCaballo = () => {
        setIsToggledCaballo(previousState => !previousState)
        setScrollToEnd(true)
    }

    const guardarPruebaCaballo = (value) => {

        if (value.componente === 1) setPrueba1(value)
        if (value.componente === 2) setPrueba2(value)
    }


    return (
        <>
            <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="h-full">
                <BackArrow position={'top-[71] left-[24]'}></BackArrow>
                <Text  className="text-center text-lg text-labelDarkBlue font-latoBold mt-[78px] mb-[41px] md:text-[34px] md:mb-[61px] md:pt-[6px] md:mt-[90px]">Inscripción a evento</Text>
                <ScrollView
                    className="main px-6 md:px-[100]"
                    ref={(ref) => {
                        if (ref && scrollToEnd) {
                            ref.scrollToEnd({ animated: true });
                            setScrollToEnd(false);
                        }
                    }}
                >
                    <View className="z-20">
                        <View className={`eventInscriber bg-white flex-col px-4 py-[22px] border border-[#D1DADA] rounded-md z-10 ${isToggled ? 'border-b-0 rounded-b-none' : 'border-b'} `}>
                            <Text className="labelInscriber text-xs font-latoRegular leading-[18px] text-[#23254C] md:text-[16px]">Te estas inscribiendo al evento</Text>
                            <Text className="nameInscriber font-latoBold text-lg leading-[25px] pt-[6px] text-[#23254C] md:text-[34px] md:pt-[10px] md:mt-[10px]">{eventId?.event.nombreEvento}</Text>
                            <View className="informationInscriber flex-row justify-between px-1 pt-[14px] items-center ">
                                <View className="icon flex flex-row md:mt-[10px]">
                                    {concursoIcon}
                                    <Text className="informationInscriberLabel text-sm  leading-5 font-latoBold ml-[6px] text-[#23254C] md:text-[22px]">Concurso</Text>
                                </View>
                                <CustomToggle onToggle={handleToggle} value={isToggled} />
                            </View>
                        </View>
                    </View>
                    {isToggled &&
                        <Animatable.View
                            animation={isToggled ? 'slideInDown' : 'slideOutUp'}
                            duration={1000}
                            className={`bg-white ${isToggled ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
                            <View className='fecha flex-col border border-gray-300 rounded-md border-t-0 px-4 rounded-t-none'>
                                <View className="fechaDia flex-row items-center">
                                    {calendarMedium}
                                    <Text className="dia ml-2 font-latoRegular text-base leading-6 text-[#494949] md:text-[18px]">{fechaFormateada}</Text>
                                </View>
                                <View className="fechaHora mt-4 flex-row items-center">
                                   {watchMedium}
                                    <Text className="hora ml-2 font-latoRegular text-base leading-6 text-[#494949] md:text-[18px]">{eventId.event.horaInicio}</Text>
                                </View>
                                <View className="ubicacionLabel flex-row mt-4 w-full ">
                                    {locationMedium}
                                    <View className="textContainer flex-1 mb-2">
                                        <Text className="label font-latoRegular text-base leading-6 text-[#494949] ml-2 md:text-[18px]">{eventId.event.ubicacion}</Text>
                                    </View>
                                </View>
                            </View>
                        </Animatable.View>}
                    <ClubEvent setValue={setClub} />
                    <DataRiderEvent setValue={setCategoria} name={name} email={email} />
                    <View className="contenedorCaballoPruebas mt-7">
                        <TouchableOpacity onPress={() => handleToggleCaballo(!isToggledCaballo)}>
                            <View className="ClubTitle flex-row justify-between items-center">
                                <View className="contenedorLabel flex flex-row gap-x-[16px]">
                                    <Text className="DatosLabel font-latoBold text-lg leading-[25px] text-[#23254C] md:text-[34px] md:pt-[10px]">Sobre el caballo</Text>
                                    {prueba1.nombrePrueba !== '' && prueba1.caballos.length !== 0 && <View className="px-2.5 py-0.5 bg-emerald-50 rounded-full justify-center items-center"><Text className="DatosLabel font-latoBold text-sm text-[#1C694E] md:text-[18px]">Completo</Text></View>}
                                </View>
                                <CustomToggle onToggle={handleToggleCaballo} value={isToggledCaballo} />
                            </View>
                        </TouchableOpacity>
                        {isToggledCaballo &&
                            <View>
                                {Array?.from({ length: cantidadCaballos }, (_, i) => <HorseEvent setScrollToEnd={setScrollToEnd} setValue={guardarPruebaCaballo} horses={horses} pruebas={eventId.categorias} categoriaRider={categoria} index={i} key={i} setCantidadCaballos={setCantidadCaballos} cantidadCaballos={cantidadCaballos} modalVisible={modalVisible} setModalVisible={setModalVisible} />)}
                            </View>
                        }

                    </View>

                </ScrollView>
                <View className="contenedorBoton flex flex-col justify-center items-center py-5 bg-white border border-x-0 border-b-0 border-[#D1DADA] px-6 md:px-[100px]">
                    <Button label={'Continuar'} onPress={guardarInscripcionRedux} extra={'w-full md:h-16'} disabled={false} />
                </View>
            </LinearGradient>

        </>
    )
}