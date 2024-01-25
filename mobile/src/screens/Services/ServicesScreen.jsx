import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Veterinario } from "../../Components/MisServicios/Veterinario";
import { Herrero } from "../../Components/MisServicios/Herrero";
import { Caballerizo } from "../../Components/MisServicios/Caballerizo";
import { Transporte } from "../../Components/MisServicios/Transporte";
import { Pasaporte } from "../../Components/MisServicios/Pasaporte";
import { Profesores } from "../../Components/MisServicios/Profesores";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CustomToggle } from "../../Components/Reusable/CustomToggle";
import { Proveedores } from "../../Components/MisServicios/Proveedores";
import { LinearGradient } from "expo-linear-gradient";
import { BackArrow } from "../../Components/Reusable/BackArrow";
import { NavHorizontalScroll } from "../../Components/EventComponents/NavHorizontalScroll";
import { tabsServicios } from "../../../utils/tabs";
import {Path, Svg} from "react-native-svg"
import { useNavigation } from "@react-navigation/native";
import { EmptyStateHorses } from "../../Components/Reusable/EmptyStateHorses";
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import LoadingScreen from "../../Components/Reusable/LoadingScreen";

export const ServicesScreen = () => {
  // const [isActive, setIsActive] =useState()
  const navigation = useNavigation()
  // const [isLoading, setisLoading] = useState(true)
  const [activeLink, setActiveLink] = useState("Veterinario");
  const profileHorses = useSelector((state) => state.ReducerHorse.myHorse);
  const [selectedHorse, setSelectedHorse] = useState(
    profileHorses[0] ? profileHorses[0] : ["Selecciona un caballo"]
  );
  const [selectedComponent, setSelectedComponent] = useState();

  function handleSelectedHorse(horseName) {
    const selected = [...profileHorses].filter((c) => c.name === horseName);
    setSelectedHorse(selected[0]);
    console.log(selected[0]);
  }

  let handleActiveLink = (activeLink) => {
    if (activeLink === "Veterinario")
      return <Veterinario props={selectedHorse} tipoServicio={"veterinaria"} />;
    if (activeLink === "Herrero")
      return <Herrero props={selectedHorse} tipoServicio={"herrero"} />;
    if (activeLink === "Caballerizo")
      return <Caballerizo props={selectedHorse} tipoServicio={"caballerizo"} />;
    if (activeLink === "Proveedores")
      return <Proveedores props={selectedHorse} tipoServicio={"proveedores"} />;
    if (activeLink === "Profesores")
      return <Profesores props={selectedHorse} tipoServicio={"profesor"} />;
    if (activeLink === "Transporte")
      return <Transporte props={selectedHorse} tipoServicio={"transporte"} />;
    if (activeLink === "Pasaporte")
      return <Pasaporte props={selectedHorse} tipoServicio={"pasaporte"} />;
  };

  useEffect(() => {
    const selectedComponent = handleActiveLink(activeLink);
    setSelectedComponent(selectedComponent);
  }, [activeLink]);




  const handleModalClose = () => {
    setShowModal(false);
  };

  return (<>
  {/* {isLoading && <LoadingScreen />} */}
  
    <LinearGradient
      colors={["#F0F0F8", "#FFFFFF"]}
      className="h-screen w-[100%] items-center"
    >
      <BackArrow position={"top-[71] left-[24]"}></BackArrow>

      <Text className="font-latoBold center text-[18px] text-labelDarkBlue mt-[84]">
        Mis servicios
      </Text>

{profileHorses && profileHorses.length ? (
      <View className="w-full px-[24] mt-[6]">
        <View>
          <Text className="text-labelDarkBlue text-base font-latoBold mt-2">
            Caballos
          </Text>
          <Text className="font-latoRegular text-sm">
            Selecciona el caballo/yegua al que le quieres realizar el servicio.
          </Text>
        </View>

        <View className="h-[108px]">
          
            <ScrollView horizontal className="mt-4 flex flex-row ">
              {profileHorses &&
                profileHorses?.map((caballo) => {
                  return (
                    <View key={caballo.name} className="w-[70px] h-auto mr-2">
                      <TouchableOpacity
                        onPress={() => handleSelectedHorse(caballo.name)}
                      >
                        <View
                          className={`absolute z-20 w-[70px] h-[70px] rounded-full ${
                            selectedHorse.name &&
                            selectedHorse.name === caballo.name
                              ? "bg-transparent"
                              : "bg-[#1e1b4b] opacity-50"
                          } `}
                        ></View>
                        <Image
                          source={{
                            uri:
                              caballo.horsePic.charAt(
                                caballo.horsePic.length - 1
                              ) === "g"
                                ? caballo.horsePic
                                : "https://t3.ftcdn.net/jpg/06/00/89/90/360_F_600899005_i9BNWdJSIsqdrJNGKKl67nJPrNbfhPq7.jpg",
                          }}
                          alt="imagen de un caballo"
                          className="z-10 w-[70px] h-[70px] rounded-full"
                        />
                        <Text className="text-[10px] text-center mt-2">
                          {caballo.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
<View>
<TouchableOpacity className="z-20 w-[70px] h-[70px] rounded-full border border-gray-200 flex items-center justify-center" onPress={() => navigation.navigate("AddHorses")}>
              <View className="relative w-38 h-38">
              <Svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M30.794 19.0005C30.794 19.6305 30.2827 20.1418 29.6527 20.1418H20.1418V29.6527C20.1418 30.2827 19.6305 30.794 19.0005 30.794C18.3705 30.794 17.8592 30.2827 17.8592 29.6527V20.1418H8.34834C7.71834 20.1418 7.20703 19.6305 7.20703 19.0005C7.20703 18.3705 7.71834 17.8592 8.34834 17.8592H17.8592V8.34834C17.8592 7.71834 18.3705 7.20703 19.0005 7.20703C19.6305 7.20703 20.1418 7.71834 20.1418 8.34834V17.8592H29.6527C30.2827 17.8592 30.794 18.3705 30.794 19.0005Z" fill="#25314C"/>
</Svg>

              </View>
              

            </TouchableOpacity>
            <Text className="text-[10px] text-center mt-2">Agregar</Text>
            </View>
            </ScrollView>
          
          
        </View>

        <View>
          <Text className="text-indigo-950 text-base font-latoBold leading-normal mt-4">
            Servicios
          </Text>
          <Text className="font-latoRegular text-sm">
            Acá vas a poder agregar los servicios que desees realizarle a tus
            caballos y recibirás notificaciones para los próximos eventos
            veterinarios.
          </Text>
        </View>

        {/* Scrollbar */}
        <View>
          <ScrollView horizontal className="w-full h-[42] mt-[8]">
            <NavHorizontalScroll
              tabs={tabsServicios}
              defaultLink={"Veterinario"}
              onPress={setActiveLink}
              containerClass={"mb-[20]"}
            />
          </ScrollView>
        </View>
        {selectedComponent && (
          <ScrollView className="h-full pb-[100]">
            {selectedComponent}
          </ScrollView>
        )}
      </View>)
      : (
        <View className="my-auto h-auto w-full px-6">
<EmptyStateHorses />
</View>
      )}

    </LinearGradient>
    </>
  );
};
