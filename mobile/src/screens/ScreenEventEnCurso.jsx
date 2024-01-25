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
import { ResultadosTabs } from "../Components/EventComponents/EventInscriptedTabs/ResultadosTabs"
import io from 'socket.io-client';
//const socket = io('https://crabby-muscle-production.up.railway.app/'); 
//const socket = io('http://192.168.1.56:3000'); 

const tabs = [
    'Pruebas',
    'Resultados',
    'Datos generales',
    'Autoridades'
]

const ScreenEventEnCurso = ({ route }) => {
    const [activeLink, setActiveLink] = useState('Pruebas');
    const [loading, setLoading] = useState(false)
    const { id } = route.params
    const navigation = useNavigation()
    const eventId = useSelector((state) => state.ReducerEventAll.eventId)
    const dispatch = useDispatch()
    let fechaFormateada
    let dia
    let mes
    const [inscriptos, setInscriptos] = useState([]);

    const recibirInscriptos = (id) => {
        socket.emit('recibir-inscriptos', { categoriaId: id });
    
    }
    // useEffect(() => {
    //     socket.on('connect', () => {
    //         console.log('Conectado al servidor Socket.IO');
    //       });
    //     socket.on('message-received', (data) => {
    //         console.log("data")
    //       setInscriptos("asdasd", data)
    //     });
    //     socket.emit("hola")
      
    //   }, []);

      
    if (eventId) {
        const fecha = new Date(eventId?.event?.fechaInicio)
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
        fechaFormateada = fecha.toLocaleDateString('es-ES', opciones)
        dia = fecha.getDate()
        mes = fecha.toLocaleDateString('es-ES', { month: 'short' })
        mes = mes.toUpperCase().replace('.', '')
    }
    useEffect(() => {

        const handleResultadosActualizados = (data) => {
         
          console.log(data);
        };
    
        socket.on('resultados-filtrados', handleResultadosActualizados);
    
       
        return () => {
          socket.off('resultados-filtrados', handleResultadosActualizados);
        };
      }, []);
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
                    {'Resultados' === activeLink && <ResultadosTabs inscriptos={inscriptos} recibirInscriptos={recibirInscriptos} pruebas={eventId?.categorias} />}

                    
                    {'Pruebas' === activeLink && <ChallengesTab pruebas={eventId?.categorias} />}
                    {'Inscriptos' === activeLink && <RegisteredTab pruebas={eventId?.categorias} />}
                </EventDetailContainer>
            </ScrollView>

         
  
        </View>
        :
        <View className="w-full h-full justify-center items-center">
            <Text>Cargando...</Text>
        </View>
    )
}
export default ScreenEventEnCurso