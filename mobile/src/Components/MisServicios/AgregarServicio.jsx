import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import { BlurView } from 'expo-blur';
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import MiCalendario from "../Reusable/MiCalendario";
import DropdownPics from "../Reusable/Inputs/DropdownPics";
import { Svg, Path } from "react-native-svg";
import { useDispatch } from "react-redux";
import { setServices } from "../../Redux/ReducerMisServicios";
import { setMyHorseServices } from "../../Redux/ReducerHorse";
// import { useNavigation } from "@react-navigation/native";
import PhoneInput from "../Reusable/Inputs/PhoneInput";

export const AgregarServicio = ({ servicio, tipoServicio, horse }) => {
  const myIcon = <Icon name="pluscircleo" size={24} color={'#1e1b4b'} />;
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  // modal
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(""); //fecha
  const [onSelect, setOnSelect] = useState(""); //profesional
  const [time, setTime] = useState("17:00"); //hora
  const [value, setValue] = useState(""); //telefono


  const profesionales = [
    {
      name: "Dr. Juan José Perez",
      email: "juanjose@mail.com",
      pics: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Dr. Marcelo Bing",
      email: "marcelobing@mail.com",
      pics: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Dra. Claudia M. López",
      email: "lopezc@mail.com",
      pics: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Dr. Francisco Albarracín",
      email: "francisco@mail.com",
      pics: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Dra. Gabriela Céspedes",
      email: "gabrielace@mail.com",
      pics: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
  ];

  //obj para crear un nuevo servicio
  const newService = {
    profesional: onSelect,
    fecha: date,
    hora: time,
    nombreservicio: servicio,
    servicio: tipoServicio,
    status: "pendiente",
    caballoId: horse,
  };

  // para setear en true el servicio en el caballo
  const setHorseService = {
    id: horse,
    servicio: tipoServicio,
  };

  const solicitarServicio = (newService) => {
    // console.log('new service en dispatch', newService)
    if (
      newService.profesional?.length !== 1 &&
      newService.fecha.length !== 0 &&
      newService.hora.length !== 0
    ) {
      dispatch(setServices(newService));
      dispatch(setMyHorseServices(setHorseService));
    } else {
      Alert.alert("Verifica los datos");
    }
  };

  return (
    <View className="p-[3px] mt-[8] w-[47%] bg-white rounded-[10px] border border-gray-300 justify-center items-center">
      {/* boton agregar servicio */}
      <TouchableOpacity onPress={() => setModalVisible(true)} className="w-full pt-[13px] pb-3 flex-col justify-center items-center">

        <View className="p-4 bg-zinc-100 rounded-full justify-start items-start mb-[15]">
          <View className="w-6 h-6 relative text-slate-800">{myIcon}</View>
        </View>
        <Text className="text-center text-labelDarkBlue text-lg font-latoBold">
          Añadir servicio
        </Text>
      </TouchableOpacity>

      {/* ventana modal para solicitar el servicio */}
      <Modal
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setOnSelect("");
        }}
        onDismiss={() => setOnSelect("")}
        // onShow={() => console.log("lo que hace cuando se carga")}
        transparent
        visible={modalVisible}

      >
        <BlurView
          style={{ flex: 1 }}
          intensity={5}
          tint="light"
          blurReductionFactor={10}
        >
          <View className="w-[343px] h-auto my-auto px-2 pt-5 pb-4 bg-white rounded-xl shadow flex-col flex mx-auto ">
            <View className="mb-2">
              <Text className="text-gray-900 text-lg font-semibold font-inter leading-7 ml-2">
                {servicio}
              </Text>
            </View>

            <Text className="w-[311px] text-gray-500 text-sm font-normal font-inter leading-tight ml-2">
              Agrega el servicio de sanidad de tus caballos y selecciona el
              profesional.
            </Text>

            {/* profesionales */}
            {onSelect ? (
              <View className="flex-row justify-evenly items-center mt-5">
                <Image
                  source={{ uri: onSelect.pics }}
                  className="w-10 h-10 py-2 bg-purple-50 rounded-[200px] justify-center items-center inline-flex"
                ></Image>
                <View className="flex-col w-[183px] ml-4">
                  <Text className="text-slate-700 text-sm font-semibold font-inter leading-tight">
                    {onSelect.name}
                  </Text>
                  <Text className="text-gray-500 text-sm font-normal font-inter leading-tight">
                    {onSelect.email}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setOnSelect("")}>
                  <Text className="text-red-700 text-sm font-semibold font-inter leading-tight">
                    Remover
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}

            <View className="mb-4 mx-auto">
              <View className="w-[311px] h-[70px] flex-col justify-start items-start gap-1.5 inline-flex mt-1">
                <DropdownPics
                  options={profesionales}
                  label={"Añadir profesional al servicio"}
                  onSelect={setOnSelect}
                />
                {/* <Text className="text-slate-700 text-sm font-medium font-inter leading-tight">Añadir profesional al servicio</Text> */}
              </View>
              <View className="flex-row mt-6">
                <Text className="text-zinc-500 text-xs font-normal font-lato leading-[18px]">¿No encuentras al profesional que buscas?</Text>
                <Text className="ml-1 text-[#23254C] text-xs font-bold font-lato leading-[18px]">Invitar</Text>
              </View>

              {/* TELEFONO
            <View className="w-[311px] mt-4">
              <PhoneInput setValue={setValue} />
            </View> */}

              {/* fecha */}
              <View className="w-[311px] mt-2">
                <MiCalendario setDate={setDate} label={"Selecciona la fecha"} />
              </View>

              {/* hora */}
              <View className="w-[311px] mt-3">
                <Text className="font-latoRegular text-base leading-6 pb-1 text-[#23254C]">
                  Selecciona una hora
                </Text>
                <View className="input flex flex-row border rounded border-[#D1DADA] px-[8px] py-[10px] items-center justify-start h-11">
                  <Svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M9 0.9375C4.554 0.9375 0.9375 4.554 0.9375 9C0.9375 13.446 4.554 17.0625 9 17.0625C13.446 17.0625 17.0625 13.446 17.0625 9C17.0625 4.554 13.446 0.9375 9 0.9375ZM9 15.9375C5.17425 15.9375 2.0625 12.8258 2.0625 9C2.0625 5.17425 5.17425 2.0625 9 2.0625C12.8258 2.0625 15.9375 5.17425 15.9375 9C15.9375 12.8258 12.8258 15.9375 9 15.9375ZM11.6475 10.8525C11.8673 11.0722 11.8673 11.4285 11.6475 11.6483C11.538 11.7578 11.394 11.8132 11.25 11.8132C11.106 11.8132 10.962 11.7585 10.8525 11.6483L8.60248 9.39825C8.49673 9.2925 8.4375 9.14923 8.4375 9.00073V5.25073C8.4375 4.94023 8.6895 4.68823 9 4.68823C9.3105 4.68823 9.5625 4.94023 9.5625 5.25073V8.76746L11.6475 10.8525Z"
                      fill="#BEBDBD"
                    />
                  </Svg>
                  <TextInput
                    onChangeText={setTime}
                    placeholder="17:00"
                    keyboardType="numeric"
                    className="input ml-2 font-latoRegular text-[#23254C] w-full"
                  // onFocus={() => showCalendar()}
                  />
                </View>
              </View>
            </View>

            {/* buttons */}
            <View className="inline-flex items-center justify-center gap-1 mt-2">
              <TouchableOpacity
                onPress={() => {
                  solicitarServicio(newService);
                  console.log("despues de solicitar");
                  setModalVisible(!modalVisible);
                  console.log("despues de navegar");
                }}
              >
                <View className="mb-2 w-[311px] h-11 px-[18px] py-2.5 bg-[#1e1b4b] rounded shadow border border-[#1e1b4b] justify-center items-center">
                  <Text className="text-white text-center text-base font-semibold font-lato leading-normal">
                    Solicitar
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setOnSelect("");
                }}
              >
                <View className="w-[311px] h-11 px-[18px] py-2.5 bg-white rounded shadow border border-black border-opacity-20 justify-center items-center inline-flex">
                  <Text className="text-slate-700 text-base text-center font-semibold font-lato leading-normal">
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};
