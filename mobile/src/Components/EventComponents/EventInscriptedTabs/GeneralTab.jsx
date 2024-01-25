import { Text, View } from "react-native"
import { ContentCard } from "../ContentCard"
import { Path, Svg } from "react-native-svg"
import ContestSVG from "../../../../assets/icons/ContestSVG"
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";
import { useEffect } from "react";


export const GeneralTab = ({ fechaFormateada, horaInicio, ubicacion, descripcion, tipoConcurso }) => {
    
    // const apikey = "AIzaSyBs5HqMiu-k_EzzsOiDlXxu6i9RROg7yDw"

    // useEffect(() => {
    //     const headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     const encodedAddress = encodeURIComponent('Av. Corrientes 1500, Buenos Aires, Argentina')
    //     const getLocation = async () => {
    //         const respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apikey}`, {headers: headers})
    //         console.log(respuesta)
    //     }
    //     getLocation()
    // },[])
    return (
        <>
            <ContentCard title={'Notificaciones'} toggle ></ContentCard>

            <ContentCard title={'Fecha y lugar'} buttonText={'Agendar'} >
                <View className="fecha flex-col">
                    <View className="fechaDia flex-row items-center">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M18 3.75H16.75V3C16.75 2.586 16.414 2.25 16 2.25C15.586 2.25 15.25 2.586 15.25 3V3.75H8.75V3C8.75 2.586 8.414 2.25 8 2.25C7.586 2.25 7.25 2.586 7.25 3V3.75H6C3.582 3.75 2.25 5.082 2.25 7.5V18C2.25 20.418 3.582 21.75 6 21.75H18C20.418 21.75 21.75 20.418 21.75 18V7.5C21.75 5.082 20.418 3.75 18 3.75ZM6 5.25H7.25V6C7.25 6.414 7.586 6.75 8 6.75C8.414 6.75 8.75 6.414 8.75 6V5.25H15.25V6C15.25 6.414 15.586 6.75 16 6.75C16.414 6.75 16.75 6.414 16.75 6V5.25H18C19.577 5.25 20.25 5.923 20.25 7.5V8.25H3.75V7.5C3.75 5.923 4.423 5.25 6 5.25ZM18 20.25H6C4.423 20.25 3.75 19.577 3.75 18V9.75H20.25V18C20.25 19.577 19.577 20.25 18 20.25Z" fill="#939697" />
                        </Svg>
                        <Text className="dia ml-2 font-latoRegular text-base text-labelDarkBlue">{fechaFormateada}</Text>
                    </View>
                    <View className="fechaHora mt-2 flex-row items-center">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M12 1.25C6.072 1.25 1.25 6.072 1.25 12C1.25 17.928 6.072 22.75 12 22.75C17.928 22.75 22.75 17.928 22.75 12C22.75 6.072 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM15.53 14.47C15.823 14.763 15.823 15.238 15.53 15.531C15.384 15.677 15.192 15.751 15 15.751C14.808 15.751 14.616 15.678 14.47 15.531L11.47 12.531C11.329 12.39 11.25 12.199 11.25 12.001V7.00098C11.25 6.58698 11.586 6.25098 12 6.25098C12.414 6.25098 12.75 6.58698 12.75 7.00098V11.6899L15.53 14.47Z" fill="#939697" />
                        </Svg>
                        <Text className="hora ml-2 font-latoRegular text-base text-labelDarkBlue">{horaInicio}</Text>
                    </View>
                    <View className="fechaHora mt-2 flex-row items-center">
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M12 2.25C7.175 2.25 3.25 6.175 3.25 11C3.25 16.118 7.94699 19.2199 11.055 21.2729L11.584 21.624C11.71 21.708 11.855 21.75 12 21.75C12.145 21.75 12.29 21.708 12.416 21.624L12.945 21.2729C16.053 19.2199 20.75 16.118 20.75 11C20.75 6.175 16.825 2.25 12 2.25ZM12.119 20.021L12 20.1001L11.881 20.021C8.871 18.033 4.75 15.311 4.75 11C4.75 7.002 8.002 3.75 12 3.75C15.998 3.75 19.25 7.002 19.25 11C19.25 15.311 15.128 18.034 12.119 20.021ZM12 7.75C10.208 7.75 8.75 9.208 8.75 11C8.75 12.792 10.208 14.25 12 14.25C13.792 14.25 15.25 12.792 15.25 11C15.25 9.208 13.792 7.75 12 7.75ZM12 12.75C11.035 12.75 10.25 11.965 10.25 11C10.25 10.035 11.035 9.25 12 9.25C12.965 9.25 13.75 10.035 13.75 11C13.75 11.965 12.965 12.75 12 12.75Z" fill="#939697" />
                        </Svg>
                        <View className="textContainer flex-1">
                            <Text className="label ml-2 font-latoRegular text-base text-labelDarkBlue">{ubicacion}</Text>
                        </View>
                    </View>
                </View>

                <View className="map h-[207px] rounded-md mt-4 border border-[#00000033] overflow-hidden">
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

                <View className="mt-8">
                    <Text className="climaLabel font-latoBold text-xl leading-5 text-labelDarkBlue">Clima</Text>
                    <View className="climaInformacion flex-row items-center justify-between mt-6">
                        <View className="climaInformacioIcono flex-row">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path d="M16 19.75H9.5C5.502 19.75 2.25 16.498 2.25 12.5C2.25 8.502 5.502 5.25 9.5 5.25C11.264 5.25 12.9641 5.89198 14.2881 7.05798C14.7021 7.42298 15.0711 7.83303 15.3921 8.28003C15.5931 8.25903 15.794 8.24902 16 8.24902C19.171 8.24902 21.75 10.828 21.75 13.999C21.75 17.17 19.171 19.75 16 19.75ZM9.5 6.75C6.329 6.75 3.75 9.329 3.75 12.5C3.75 15.671 6.329 18.25 9.5 18.25H16C18.344 18.25 20.25 16.344 20.25 14C20.25 11.656 18.344 9.75 16 9.75C15.717 9.75 15.4449 9.77503 15.1689 9.82703C14.8669 9.88503 14.5551 9.74801 14.3931 9.48401C14.0931 8.99901 13.7239 8.56102 13.2959 8.18402C12.2469 7.25902 10.898 6.75 9.5 6.75Z" fill="#939697" />
                            </Svg>
                            <Text className="climaInformacionLabel ml-2 font-latoRegular text-base text-labelDarkBlue">Nublado</Text>
                        </View>
                        <Text className="gradosMinimo font-latoRegular text-base text-labelDarkBlue">8°C</Text>
                        <Text className="gradosMaximo font-latoRegular text-base text-labelDarkBlue">13°C</Text>
                    </View>
                </View>
            </ContentCard>

            <ContentCard title={'Detalles'} >
                <View className="fecha flex-col">
                    <View className="fechaDia mb-[12] flex-row items-center">
                        <ContestSVG />
                        <Text className="dia ml-2 font-latoRegular text-base text-labelDarkBlue">{tipoConcurso}</Text>
                    </View>
                    <Text className="font-latoRegular text-base text-labelDarkBlue">{descripcion}</Text>
                </View>
            </ContentCard>
        </>
    )
}