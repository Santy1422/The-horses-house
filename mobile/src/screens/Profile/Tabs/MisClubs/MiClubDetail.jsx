import { View, Text, ScrollView } from 'react-native'
import { EventDetailContainer } from '../../../../Components/EventComponents/EventDetailContainer'
import { ContentCard } from '../../../../Components/EventComponents/ContentCard'
// import MapView, { Marker } from 'react-native-maps'
import { locationMedium } from "../../../../../utils/svgIcons"
const MiClubDetail = ({ route }) => {
    const { nombre, ubicacion } = route?.params?.club
    return (

        <View className="main w-full">
            <ScrollView className="">
                <EventDetailContainer tipoConcurso={"Comunidad"} nombreEvento={nombre} imgSource={require('../../../../images/detail_event_default_2.png')} noDownload >

                    <ContentCard title={'Sobre el club'}  >
                        <Text>Descripcion del club...</Text>
                    </ContentCard>
                    <ContentCard title={'Miembros'}  >
                        <Text>Miembros del club...</Text>
                    </ContentCard>
                    <ContentCard title={'Ubicación'}  >
                        <View className="ubicacionLabel flex-row w-full items-center">
                            {locationMedium}
                            <View className="textContainer flex-1">
                                <Text className="label ml-2 font-latoRegular text-base md:text-[22px] md:my-[20px] text-[#494949] ">{ubicacion}</Text>
                            </View>
                        </View>
                        {/* <View className="map h-[207px] md:h-[400px] rounded-md mt-4 border border-[#00000033] overflow-hidden">
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
                        </View> */}
                    </ContentCard>
                    <ContentCard title={'Comentarios'}  >
                        <Text>Comentarios sobre el club...</Text>
                    </ContentCard>
                </EventDetailContainer>
            </ScrollView>
        </View>
    )
}
export default MiClubDetail