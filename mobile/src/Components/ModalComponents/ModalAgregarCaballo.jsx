import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Button from "../Reusable/Button";
import { BlurView } from "expo-blur";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useImage } from "../../CustomHooks.jsx/useImage";
import { useHorse } from "../../CustomHooks.jsx/useHorse";
import ReusableTextInput from "../../Components/Reusable/Inputs/ReusableTextInput";
import DropdownSearchAlt from "../Reusable/Inputs/DropdownSearchAlt";
import ReusableRangleSlider from "../Reusable/ReusableRangleSlider";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addNewHorse } from "../../../auth/horsePeticiones";
import { setMyHorse } from "../../Redux/ReducerHorse";
import MiCalendario from "../Reusable/MiCalendario";
import {
  arrowIcon,
  crossCerrarBlack,
  editarIconSmall,
} from "../../../utils/svgIcons";

export const ModalAgregarCaballo = ({ modalVisible, handleModalVisible }) => {
  const navigation = useNavigation();
  // Accesibility
  const { url, uploadImage } = useImage();
  const {
    horsePic,
    setHorsePic,
    horseName,
    setHorseName,
    horseBreed,
    setHorseBreed,
    horseAAFE,
    setHorseAAFE,
    horseHair,
    setHorseHair,
    minHorseJump,
    setMinHorseJump,
    maxHorseJump,
    setMaxHorseJump,
    horseGender,
    setHorseGender,
    horseBirthDate,
    setHorseBirthDate,
    sanidadH,
    setSanidadH,
    pateaH,
    setPateaH,
    muerdeH,
    setMuerdeH,
    mansoH,
    setMansoH,
    microchipH,
    setMicrochipH,
  } = useHorse();
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);

  // Horse info value list
  const horseBreedList = [
    "Silla Argentino",
    "Zangersheide",
    "Importados",
    "Pura sangre",
    "Mestizos",
    "Silla Francés (SF)",
    "Hol Holsteiner",
    "Hann Hannoverianos",
    "Silla Belga",
    "Otras",
  ];
  const hairColors = ["Alazán", "Bayo", "Negro", "Tordillo", "Zaino"];
  const jumpHeights = [
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5,
    1.6,
  ];

  // Uploads pic
  const handleImageUpload = async () => {
    await uploadImage();
    setHorsePic(url);
  };

  // Slider altura salto function
  const handleSliderChange = (values) => {
    setMinHorseJump(values[0]);
    setMaxHorseJump(values[1]);
  };

  // Disables Button
  useEffect(() => {
    if (
      horseAAFE === null ||
      horseName === null ||
      horseBreed == null ||
      horseHair == null
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [horseName, horseBreed, horseAAFE, horseHair]);

  // Changes string to Date format (temporary)
  function transformToDate(dateString) {
    let dateParts = dateString.split("/");
    let day = parseInt(dateParts[0], 10);
    let month = parseInt(dateParts[1], 10) - 1;
    let year = parseInt(dateParts[2], 10);
    return new Date(year, month, day);
  }

  async function setHorse() {
    let newHorse = {
      name: horseName,
      breed: horseBreed,
      aafe: horseAAFE,
      gender: horseGender,
      alturaSalto: maxHorseJump,
      horsePic: horsePic,
      birthDate: transformToDate(horseBirthDate),
      informacionAdicional: {
        sanidad: sanidadH || null,
        patea: pateaH || null,
        muerde: muerdeH || null,
        manso: mansoH || null,
        microchip: microchipH || null,
      },
    };
    let token = await AsyncStorage.getItem("token");
    await addNewHorse({
      token,
      newHorse,
      succes: (s) => {
        dispatch(setMyHorse(s)),
          handleModalVisible(),
          navigation.navigate("ScreenEventInscription");
      },
      loading: (l) => console.log(l),
      error: (e) => setError(e),
    });
  }

  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <BlurView
        className="blur h-full w-full justify-end"
        intensity={20}
        tint="dark"
      >
        <View
          className={`w-[100%] ${
            step === 1 ? "h-[626px]" : "h-[457px]"
          } px-6 pt-5 pb-8 bg-white rounded-tl-[10px] rounded-tr-[10px] shadow flex-col items-center inline-flex justify-between`}
        >
          <View className="w-[327px] h-7 justify-start items-center flex-row">
            <TouchableOpacity
              style={{
                width: 40, 
                height: 40, 
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => handleModalVisible()}
            >
              <View className="h-7 w-7 relative ">{crossCerrarBlack}</View>
            </TouchableOpacity>

            <View className="absolute flex w-[100%] justify-center ">
              <Text className="text-center text-[#23254C] text-lg font-bold font-lato tracking-tight">
                Agregar caballo
              </Text>
            </View>
          </View>

          {/* imagen */}
          {step === 1 ? (
            <>
              <View
                className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center"
                style={{
                  shadowColor: "rgba(0, 0, 0, .5)",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 12,
                  elevation: 12,
                }}
              >
                <View className="absolute z-50 self-end top-1 right-[-5]">
                  <TouchableOpacity
                    onPress={handleImageUpload}
                    className="rounded-full bg-[#D1DADA] h-[23px]   w-[23px] flex justify-center items-center"
                  >
                    {editarIconSmall}
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleImageUpload}>
                  {url ? (
                    <Image
                      source={{ uri: url }}
                      width={73}
                      height={73}
                      className="flex  rounded-full h-[79px] w-[79px]"
                    ></Image>
                  ) : (
                    <Image
                      source={require("../../../assets/profilehorse.png")}
                      width={73}
                      height={73}
                      className="flex  rounded-full h-[79px] w-[79px]"
                    ></Image>
                  )}
                </TouchableOpacity>
              </View>

              <View className="w-full">
                <ReusableTextInput
                  label={"AAFE"}
                  hideHint={true}
                  value={horseAAFE}
                  setValue={setHorseAAFE}
                  number={true}
                  placeholder={"525880"}
                />

                <ReusableTextInput
                  label={"Nombre del caballo"}
                  hideHint={true}
                  value={horseName}
                  setValue={setHorseName}
                  placeholder={"Ingresa el nombre del caballo"}
                />
                {error && (
                  <Text
                    className={`preadquiriste font-latoRegular text-sm text-red-600 mt-1`}
                  >
                    {" "}
                    Ups! El caballo que intentas registrar ya existe
                  </Text>
                )}

                <DropdownSearchAlt
                  selectedOption={horseBreed}
                  options={horseBreedList}
                  onSelect={setHorseBreed}
                  label={"Raza"}
                  placeholder={"Selecciona la raza"}
                />
                <DropdownSearchAlt
                  selectedOption={horseHair}
                  options={hairColors}
                  onSelect={setHorseHair}
                  label={"Color pelo"}
                  placeholder={"Selecciona el color de pelo"}
                />
              </View>

              <Button
                onPress={() => setStep(2)}
                type={"primary"}
                label={"Continuar"}
                extra="w-[100%] mt-6"
                disabled={isDisabled}
              />
            </>
          ) : (
            // paso dos
            <View className="w-[100%] ">
              <ScrollView>
                <View className="mt-[14px] ">
                  <Text className="font-latoRegular text-base text-[#23254C]">
                    Elige altura de salto
                    <Text className=" font-latoLight text-[#23254C]">
                      {" "}
                      en metros
                    </Text>
                  </Text>
                  <ReusableRangleSlider
                    sliderValues={jumpHeights}
                    initialValues={[minHorseJump, maxHorseJump]}
                    onChange={(values) => handleSliderChange(values)}
                  />
                </View>

                <View className="mt-[14px] w-[100%]">
                  <Text className="font-latoRegular text-base text-[#23254C] mb-[6px]">
                    Sexo
                  </Text>
                  <View className=" flex flex-row mt-[4px] w-[100%] ">
                    <TouchableOpacity
                      className={`w-[50%] h-11 px-4 py-3 bg-white flex justify-center border rounded-tl rounded-bl items-center ${
                        horseGender === "hembra"
                          ? "disabled border-gray-400"
                          : "border-[#23254C]"
                      }`}
                      onPress={() => setHorseGender("macho")}
                    >
                      <Text
                        className={` font-latoBold ${
                          horseGender === "hembra"
                            ? `text-gray-400`
                            : `text-[#23254C]`
                        }`}
                      >
                        Caballo
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className={`w-[50%] h-11 px-4 py-3  bg-white flex justify-center border rounded-tr rounded-br items-center ${
                        horseGender === "macho"
                          ? "disabled border-gray-400"
                          : "border-[#23254C]"
                      }`}
                      onPress={() => setHorseGender("hembra")}
                    >
                      <Text
                        className={`font-latoBold ${
                          horseGender === "macho"
                            ? `text-gray-400`
                            : `text-[#23254C]`
                        }`}
                      >
                        Yegua
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="mt-[14px]">
                    <MiCalendario
                      label={"Año de nacimiento"}
                      setDate={setHorseBirthDate}
                    />
                  </View>
                </View>
              </ScrollView>

              <View className="flex flex-row justify-between mt-6">
                <View className="px-3 py-2 border border-gray-300 items-center w-[25%] h-11 bg-white rounded">
                  <TouchableOpacity onPress={() => setStep(1)}>
                    {arrowIcon}
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={() => setHorse()}
                  type={"primary"}
                  label={"Continuar"}
                  extra="w-[70%]"
                />
              </View>
            </View>
          )}
        </View>
      </BlurView>
    </Modal>
  );
};
