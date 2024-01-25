import { ScrollView, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { eventAllSetEventId } from "../Redux/ReducerEventAll"
import { useSelector, useDispatch } from "react-redux"
import { eventGetId } from "../../auth/eventPeticiones"
import { EventDetailContainer } from "../Components/EventComponents/EventDetailContainer"
import { NavHorizontalScroll } from "../Components/EventComponents/NavHorizontalScroll"
import { GeneralTab } from "../Components/EventComponents/EventInscriptedTabs/GeneralTab"
import { AuthoritiesTab } from "../Components/EventComponents/EventInscriptedTabs/AuthoritiesTab"
import { ChallengesTab } from "../Components/EventComponents/EventInscriptedTabs/ChallengesTab"
import { RegisteredTab } from "../Components/EventComponents/EventInscriptedTabs/RegisteredTab"
import Button from "../Components/Reusable/Button"
import LoadingScreen from "../Components/Reusable/LoadingScreen"

const tabs = [
    'Pruebas',
    'Inscriptos',
    'Datos generales',
    'Autoridades'
]

const ScreenEventInscripted = ({ route }) => {
    const [activeLink, setActiveLink] = useState('Pruebas');
    const [loading, setLoading] = useState(false)
    const { id } = route.params
    const navigation = useNavigation()
    const eventId = useSelector((state) => state.ReducerEventAll.eventId)
    const dispatch = useDispatch()

    let fechaFormateada
    let dia
    let mes

    if (eventId) {
        const fecha = new Date(eventId.event.fechaInicio)
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
        fechaFormateada = fecha.toLocaleDateString('es-ES', opciones)
        dia = fecha.getDate()
        mes = fecha.toLocaleDateString('es-ES', { month: 'short' })
        mes = mes.toUpperCase().replace('.', '')
    }

    useEffect(() => {
        eventGetId({
            succes: ((v) => {
                dispatch(eventAllSetEventId(v))
            }),
            error: (e) => console.log("error", e),
            loading: (l) => {
                console.log("loading", l)
                setLoading(l)
            },
            id,
        })

    }, [])

    return (eventId && !loading ?
        <View className="w-full">
            <ScrollView>
                <EventDetailContainer
                    dia={dia}
                    mes={mes}
                    tipoConcurso={eventId?.event?.tipoConcurso}
                    nombreEvento={eventId?.event?.nombreEvento}
                    imgSource={require('../images/event_detail_default.png')}
                >
                    <NavHorizontalScroll tabs={tabs} defaultLink={'Pruebas'} onPress={setActiveLink} containerClass={"mt-[26]"} />
                    {'Datos generales' === activeLink && <GeneralTab fechaFormateada={fechaFormateada} horaInicio={eventId?.event?.horaInicio} ubicacion={eventId?.event?.ubicacion} descripcion={eventId?.event?.descripcionEvento} tipoConcurso={eventId?.event?.tipoConcurso}/>}
                    {'Autoridades' === activeLink && <AuthoritiesTab autoridades={eventId?.event?.autoridadesConcurso} clubOrganizador={eventId?.event?.clubesPatrocinadores} emailContacto={eventId?.event?.emailContacto} />}
                    {'Pruebas' === activeLink && <ChallengesTab pruebas={eventId?.categorias} />}
                    {'Inscriptos' === activeLink && <RegisteredTab pruebas={eventId?.categorias} />}
                </EventDetailContainer>
            </ScrollView>
            {'Inscriptos' === activeLink &&
                <View className="w-full relative px-[20] top-[-70]">
                    <Button label={'Ver todos'} extra={'w-full'} />
                </View>
            }
            {'Pruebas' === activeLink &&
                <View className="w-full relative px-[20] top-[-155]">
                    <Button label={'Inscribite en más pruebas'} extra={'w-full mt-[26]'} />
                    <Button label={'Darse de baja'} type={'secondary'} extra={'w-full bg-[#FBF1EF] mt-[16]'} texColor={'text-[#C70117]'} onPress={() => navigation.navigate('ScreenEventUnsubscribe')} />
                </View>
            }
        </View>
        :
        <LoadingScreen/>
    )
}
export default ScreenEventInscripted