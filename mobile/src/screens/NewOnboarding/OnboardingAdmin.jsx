import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../Components/Reusable/Button";
import Checkbox from "../../Components/Reusable/Checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { Rect, Path, Svg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Dropdown from "../../Components/Reusable/Inputs/Dropdown";
import clubesFederados from "../../../clubesFederados.js";
import Searchbar from "../../Components/Reusable/Searchbar";
import PhoneInput from "../../Components/Reusable/Inputs/PhoneInput";

export const OnboardingAdmin = ({
  steps,
  setSteps,
  setAnswers,
  answers,
  profession,
  text,
  supporting,
  items,
  totalSteps,
  type,
  step1bis,
  step1ter,
  step1cuar,
  step1quin,
}) => {
  const navigation = useNavigation();
  const [localAnswer, setLocalAnswer] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [selectedOption, onSelect] = useState("");
  const [nombre, setNombre] = useState(""); //para el nombre si selecciona rol presidente
  const [telefono, setTelefono] = useState(""); //para el telefono si selecciona rol presidente
  console.log('localAnswwe', localAnswer)
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!items.length) {
      setData(clubesFederados);
    } else return;
  }, []);

  //para manejar el boton siguiente habilitado/deshabilitado
  useEffect(() => {
    setDisabled(true);

    // step1bis tienen solo los clubes
    if (step1bis) {
      if (
        selectedOption === "Presidente" &&
        localAnswer &&
        nombre &&
        telefono
      ) {
        setDisabled(false);
      } else if (
        selectedOption !== "Presidente" &&
        localAnswer &&
        selectedOption
      ) {
        setDisabled(false);
      }
    } else {
      if (localAnswer) {
        if (localAnswer === "Presidente") {
          if (nombre && telefono) {
            setDisabled(false);
          }
        }

        if (localAnswer === "Vocal titular") {
          if (nombre && selectedOption) {
            setDisabled(false);
          }
        } else {
          setDisabled(false);
        }
      } else setDisabled(true);
    }
  }, [disabled, selectedOption, localAnswer, nombre, telefono]);

  //objeto que recopila las respustas del paso dos
  const respuestasstep2 = [localAnswer, nombre, telefono, selectedOption];
  const respuestasFinal = respuestasstep2.filter((resp) => resp.length);

  // let respuestastep3 = [...answers, localAnswer]

  // console.log('resp unif', respuestastep3)

  //boton siguiente
  const handleNextStep = () => {
    if (pasoActual === 2 && localAnswer) {
      setAnswers([...answers].concat(respuestasFinal));
      setSteps(steps + 1);
    }
    if (pasoActual === 3 && localAnswer) {
      // console.log('answ antes de agregar', answers)
      answers.push(localAnswer)

      // console.log('despues de agregar', answers)
    }

    if (totalSteps === steps && localAnswer) {
      // setAnswers([...answers, localAnswer])
      console.log("answers enviado", answers);

      navigation.navigate("Login", {
        profesion: profession,
        answers: [...answers],
      });
    }
  };

  const handleLocalAnswer = (item) => {
    // console.log('item', item)
    setLocalAnswer(item);
    // console.log('el item', item)
  };

  //para el input name
  const handleChangeNombre = (value) => {
    setNombre(value);
    // console.log("localans nombre", nombre);
  };

  //goBack
  const handleGoBack = () => {
    answers.pop();
    setAnswers([...answers]);
    setSteps(steps - 1);
  };

  const handleCancel = () => {
    setSteps(0);
    setAnswers([]);
    navigation.navigate("OnboardingAdminIndex");
  };

  const pasoActual = steps && steps + 1;
  // console.log('paso actual', pasoActual)

  return (
    <>
      <LinearGradient
        colors={["#F0F0F8", "#FFFFFF"]}
        className="px-[24px] pt-[44px] items-start relative h-[100%]"
      >
        {/* <ProgressBar progress={steps / totalSteps} /> */}
        <View className="h-[19%]">
          <View className="flex flex-row relative">
            <TouchableOpacity
              className="pb-[11px] absolute"
              onPress={() => handleGoBack()}
            >
              <Svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Rect
                  x="1"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="3.5"
                  fill="white"
                />
                <Rect
                  x="1"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="3.5"
                  stroke="#D1DADA"
                />
                <Path
                  d="M31.2499 21.9998C31.2499 22.4138 30.9139 22.7498 30.4999 22.7498H16.3109L19.0309 25.4698C19.3239 25.7628 19.3239 26.2378 19.0309 26.5308C18.8849 26.6768 18.6928 26.7508 18.5008 26.7508C18.3088 26.7508 18.1168 26.6778 17.9708 26.5308L13.9708 22.5308C13.9018 22.4618 13.847 22.3789 13.809 22.2869C13.733 22.1039 13.733 21.8969 13.809 21.7139C13.847 21.6219 13.9018 21.5387 13.9708 21.4697L17.9708 17.4698C18.2638 17.1768 18.7389 17.1768 19.0319 17.4698C19.3249 17.7628 19.3249 18.2378 19.0319 18.5308L16.3119 21.2508H30.4999C30.9139 21.2498 31.2499 21.5858 31.2499 21.9998Z"
                  fill="#25314C"
                />
              </Svg>
            </TouchableOpacity>

            <View className="flex items-center w-full">
              <Svg
                width="125"
                height="44"
                viewBox="0 0 125 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M53.2816 15.7548L48.4094 13.1178V15.7548V23.9231H34.1371V15.7548V10.6206V5.38607L28.2783 2.21216V41.8795H28.5715H34.1371V29.0267H48.4094V41.8795H55.0918V16.7371L53.2816 15.7548Z"
                  fill="#231D43"
                />
                <Path
                  d="M21.4245 5.27244V10.6205V15.7546V23.923H7.15217V15.7546V12.9562L1.9542 15.7546L0.469727 16.5536V41.8794H7.15217V29.0266H21.4245V41.8794H26.9901H27.2833V2.12036L21.4245 5.27244Z"
                  fill="#231D43"
                />
                <Path
                  d="M70.3395 2.4005V4.46906H67.531V13H64.9491V4.46906H62.1407V2.4005H70.3395ZM80.8155 2.4005V13H78.2335V8.63639H74.2172V13H71.6353V2.4005H74.2172V6.55272H78.2335V2.4005H80.8155ZM85.2613 4.46906V6.61312H88.719V8.60619H85.2613V10.9314H89.1719V13H82.6794V2.4005H89.1719V4.46906H85.2613ZM71.8947 17.4005V28H69.3127V23.6364H65.2964V28H62.7145V17.4005H65.2964V21.5527H69.3127V17.4005H71.8947ZM78.7714 28.1057C77.7749 28.1057 76.8589 27.8742 76.0234 27.4111C75.198 26.9481 74.5387 26.3039 74.0454 25.4785C73.5623 24.643 73.3207 23.7068 73.3207 22.67C73.3207 21.6333 73.5623 20.7021 74.0454 19.8767C74.5387 19.0513 75.198 18.4071 76.0234 17.9441C76.8589 17.481 77.7749 17.2495 78.7714 17.2495C79.768 17.2495 80.6789 17.481 81.5043 17.9441C82.3398 18.4071 82.9941 19.0513 83.4672 19.8767C83.9504 20.7021 84.192 21.6333 84.192 22.67C84.192 23.7068 83.9504 24.643 83.4672 25.4785C82.9841 26.3039 82.3298 26.9481 81.5043 27.4111C80.6789 27.8742 79.768 28.1057 78.7714 28.1057ZM78.7714 25.7502C79.617 25.7502 80.2914 25.4684 80.7947 24.9047C81.3081 24.341 81.5647 23.5961 81.5647 22.67C81.5647 21.7339 81.3081 20.989 80.7947 20.4354C80.2914 19.8717 79.617 19.5899 78.7714 19.5899C77.9158 19.5899 77.2313 19.8667 76.718 20.4203C76.2147 20.9739 75.963 21.7238 75.963 22.67C75.963 23.6062 76.2147 24.3561 76.718 24.9198C77.2313 25.4734 77.9158 25.7502 78.7714 25.7502ZM91.0338 28L88.8294 23.9988H88.2103V28H85.6284V17.4005H89.9618C90.7973 17.4005 91.5069 17.5465 92.0908 17.8384C92.6847 18.1303 93.1276 18.5329 93.4195 19.0463C93.7114 19.5496 93.8573 20.1133 93.8573 20.7374C93.8573 21.442 93.656 22.0711 93.2534 22.6248C92.8608 23.1784 92.277 23.571 91.5019 23.8025L93.9479 28H91.0338ZM88.2103 22.1718H89.8108C90.2839 22.1718 90.6362 22.056 90.8677 21.8245C91.1093 21.593 91.2301 21.2658 91.2301 20.8431C91.2301 20.4404 91.1093 20.1234 90.8677 19.8918C90.6362 19.6603 90.2839 19.5446 89.8108 19.5446H88.2103V22.1718ZM99.3133 28.1057C98.5382 28.1057 97.8436 27.9799 97.2296 27.7282C96.6156 27.4766 96.1224 27.1041 95.7499 26.6109C95.3875 26.1177 95.1963 25.5238 95.1761 24.8292H97.9242C97.9644 25.2218 98.1003 25.5238 98.3318 25.7351C98.5634 25.9365 98.8653 26.0371 99.2378 26.0371C99.6203 26.0371 99.9223 25.9516 100.144 25.7804C100.365 25.5993 100.476 25.3526 100.476 25.0406C100.476 24.7789 100.385 24.5625 100.204 24.3913C100.033 24.2202 99.8166 24.0793 99.5549 23.9686C99.3032 23.8578 98.9408 23.732 98.4677 23.5911C97.7832 23.3797 97.2246 23.1683 96.7917 22.9569C96.3589 22.7455 95.9865 22.4335 95.6744 22.0208C95.3624 21.6081 95.2063 21.0696 95.2063 20.4052C95.2063 19.4187 95.5637 18.6487 96.2784 18.0951C96.9931 17.5314 97.9242 17.2495 99.0717 17.2495C100.239 17.2495 101.181 17.5314 101.895 18.0951C102.61 18.6487 102.992 19.4238 103.043 20.4203H100.249C100.229 20.0781 100.103 19.8113 99.8719 19.6201C99.6404 19.4187 99.3435 19.3181 98.9811 19.3181C98.6691 19.3181 98.4174 19.4036 98.2261 19.5748C98.0349 19.7358 97.9393 19.9724 97.9393 20.2844C97.9393 20.6267 98.1003 20.8934 98.4224 21.0847C98.7445 21.2759 99.2478 21.4823 99.9323 21.7037C100.617 21.9352 101.17 22.1567 101.593 22.3681C102.026 22.5795 102.399 22.8865 102.711 23.2891C103.023 23.6917 103.179 24.2101 103.179 24.8443C103.179 25.4483 103.023 25.9969 102.711 26.4901C102.409 26.9833 101.966 27.3759 101.382 27.6678C100.798 27.9597 100.108 28.1057 99.3133 28.1057ZM107.349 19.4691V21.6131H110.807V23.6062H107.349V25.9314H111.26V28H104.768V17.4005H111.26V19.4691H107.349ZM116.772 28.1057C115.996 28.1057 115.302 27.9799 114.688 27.7282C114.074 27.4766 113.581 27.1041 113.208 26.6109C112.846 26.1177 112.655 25.5238 112.634 24.8292H115.382C115.423 25.2218 115.559 25.5238 115.79 25.7351C116.022 25.9365 116.324 26.0371 116.696 26.0371C117.079 26.0371 117.38 25.9516 117.602 25.7804C117.823 25.5993 117.934 25.3526 117.934 25.0406C117.934 24.7789 117.844 24.5625 117.662 24.3913C117.491 24.2202 117.275 24.0793 117.013 23.9686C116.761 23.8578 116.399 23.732 115.926 23.5911C115.241 23.3797 114.683 23.1683 114.25 22.9569C113.817 22.7455 113.445 22.4335 113.133 22.0208C112.821 21.6081 112.665 21.0696 112.665 20.4052C112.665 19.4187 113.022 18.6487 113.737 18.0951C114.451 17.5314 115.382 17.2495 116.53 17.2495C117.698 17.2495 118.639 17.5314 119.353 18.0951C120.068 18.6487 120.451 19.4238 120.501 20.4203H117.708C117.688 20.0781 117.562 19.8113 117.33 19.6201C117.099 19.4187 116.802 19.3181 116.439 19.3181C116.127 19.3181 115.876 19.4036 115.684 19.5748C115.493 19.7358 115.397 19.9724 115.397 20.2844C115.397 20.6267 115.559 20.8934 115.881 21.0847C116.203 21.2759 116.706 21.4823 117.391 21.7037C118.075 21.9352 118.629 22.1567 119.051 22.3681C119.484 22.5795 119.857 22.8865 120.169 23.2891C120.481 23.6917 120.637 24.2101 120.637 24.8443C120.637 25.4483 120.481 25.9969 120.169 26.4901C119.867 26.9833 119.424 27.3759 118.84 27.6678C118.256 27.9597 117.567 28.1057 116.772 28.1057ZM71.8947 31.4005V42H69.3127V37.6364H65.2964V42H62.7145V31.4005H65.2964V35.5527H69.3127V31.4005H71.8947ZM78.7714 42.1057C77.7749 42.1057 76.8589 41.8742 76.0234 41.4111C75.198 40.9481 74.5387 40.3039 74.0454 39.4785C73.5623 38.643 73.3207 37.7068 73.3207 36.67C73.3207 35.6333 73.5623 34.7021 74.0454 33.8767C74.5387 33.0513 75.198 32.4071 76.0234 31.9441C76.8589 31.481 77.7749 31.2495 78.7714 31.2495C79.768 31.2495 80.6789 31.481 81.5043 31.9441C82.3398 32.4071 82.9941 33.0513 83.4672 33.8767C83.9504 34.7021 84.192 35.6333 84.192 36.67C84.192 37.7068 83.9504 38.643 83.4672 39.4785C82.9841 40.3039 82.3298 40.9481 81.5043 41.4111C80.6789 41.8742 79.768 42.1057 78.7714 42.1057ZM78.7714 39.7502C79.617 39.7502 80.2914 39.4684 80.7947 38.9047C81.3081 38.341 81.5647 37.5961 81.5647 36.67C81.5647 35.7339 81.3081 34.989 80.7947 34.4354C80.2914 33.8717 79.617 33.5899 78.7714 33.5899C77.9158 33.5899 77.2313 33.8667 76.718 34.4203C76.2147 34.9739 75.963 35.7238 75.963 36.67C75.963 37.6062 76.2147 38.3561 76.718 38.9198C77.2313 39.4734 77.9158 39.7502 78.7714 39.7502ZM88.165 31.4005V37.7421C88.165 38.3762 88.321 38.8644 88.6331 39.2067C88.9451 39.5489 89.4031 39.72 90.0071 39.72C90.6111 39.72 91.0741 39.5489 91.3962 39.2067C91.7183 38.8644 91.8794 38.3762 91.8794 37.7421V31.4005H94.4613V37.727C94.4613 38.6732 94.26 39.4734 93.8573 40.1277C93.4547 40.782 92.9111 41.2752 92.2267 41.6074C91.5522 41.9396 90.7973 42.1057 89.9618 42.1057C89.1263 42.1057 88.3764 41.9446 87.712 41.6225C87.0578 41.2903 86.5394 40.7971 86.1568 40.1428C85.7743 39.4785 85.5831 38.6732 85.5831 37.727V31.4005H88.165ZM100.11 42.1057C99.3344 42.1057 98.6399 41.9799 98.0258 41.7282C97.4118 41.4766 96.9186 41.1041 96.5461 40.6109C96.1838 40.1177 95.9925 39.5238 95.9724 38.8292H98.7204C98.7607 39.2218 98.8966 39.5238 99.1281 39.7351C99.3596 39.9365 99.6616 40.0371 100.034 40.0371C100.417 40.0371 100.719 39.9516 100.94 39.7804C101.161 39.5993 101.272 39.3526 101.272 39.0406C101.272 38.7789 101.182 38.5625 101 38.3913C100.829 38.2202 100.613 38.0793 100.351 37.9686C100.099 37.8578 99.7371 37.732 99.264 37.5911C98.5795 37.3797 98.0208 37.1683 97.588 36.9569C97.1551 36.7455 96.7827 36.4335 96.4707 36.0208C96.1586 35.6081 96.0026 35.0696 96.0026 34.4052C96.0026 33.4187 96.3599 32.6487 97.0746 32.0951C97.7893 31.5314 98.7204 31.2495 99.8679 31.2495C101.036 31.2495 101.977 31.5314 102.691 32.0951C103.406 32.6487 103.789 33.4238 103.839 34.4203H101.046C101.026 34.0781 100.9 33.8113 100.668 33.6201C100.437 33.4187 100.14 33.3181 99.7773 33.3181C99.4653 33.3181 99.2136 33.4036 99.0224 33.5748C98.8311 33.7358 98.7355 33.9724 98.7355 34.2844C98.7355 34.6267 98.8966 34.8934 99.2187 35.0847C99.5408 35.2759 100.044 35.4823 100.729 35.7037C101.413 35.9352 101.967 36.1567 102.389 36.3681C102.822 36.5795 103.195 36.8865 103.507 37.2891C103.819 37.6917 103.975 38.2101 103.975 38.8443C103.975 39.4483 103.819 39.9969 103.507 40.4901C103.205 40.9833 102.762 41.3759 102.178 41.6678C101.594 41.9597 100.905 42.1057 100.11 42.1057ZM108.146 33.4691V35.6131H111.603V37.6062H108.146V39.9314H112.056V42H105.564V31.4005H112.056V33.4691H108.146Z"
                  fill="#23254C"
                />
              </Svg>
            </View>
          </View>

          <View className="mt-9">
            <Text className="w-[326px] text-[#23254C] text-2xl font-bold font-lato leading-loose">
              Configurá tu cuenta
            </Text>
            <Text className="w-[326px] text-neutral-500 text-base font-normal font-lato leading-normal">
              Paso {steps + 1}/ {totalSteps + 1}
            </Text>
          </View>
        </View>

        <View
          className={`${pasoActual === 3 ? "h-[50.8%]" : "h-[58%]"} w-[100%]`}
        >
          <View className="mt-3">
            <Text className="mb-[-5%] w-[326px] text-[#23254C] text-base font-normal font-latoRegular leading-normal ">
              {text && text}
            </Text>
          </View>

          <View className="w-[100%]">
            {type === "radio" ? (
              <View className="mt-3">
                {items?.map((item) => (
                  <View
                    className="mt-2 w-full bg-white p-4 rounded border-2 border-stone-300 flex justify-center"
                    key={item}
                  >
                    <Checkbox
                      label={item}
                      setValue={(item) => handleLocalAnswer(item)}
                      value={item}
                      pasaString={true}
                      mt={"0"}
                      shape={type === "radio" && "circle"}
                    />
                  </View>
                ))}
              </View>
            ) : (
              <View>
                {items.length > 0 ? (
                  <Dropdown
                    options={items}
                    onSelect={setLocalAnswer}
                    selectedOption={localAnswer}
                    supporting={supporting}
                  />
                ) : (
                  <View className="mt-5">
                    <Searchbar
                      data={data}
                      localAnswer={localAnswer}
                      setLocalAnswer={setLocalAnswer}
                    />
                  </View>
                )}
              </View>
            )}
          </View>

          {step1bis ? (
            <View className="w-[100%] mt-4">
              <View>
                <Text className="mb-[-5%] w-[326px] text-[#23254C] text-base font-normal font-latoRegular leading-normal ">
                  {step1bis.text}
                </Text>
              </View>
              <Dropdown
                options={step1bis.items}
                onSelect={onSelect}
                selectedOption={selectedOption}
                supporting={step1bis.supporting}
              />
            </View>
          ) : null}

          {/*Para completar su nombre y telefono, solo si es el presidente del club o de la federacion*/}
          <View className="w-[100%] mt-4">
            {selectedOption === "Presidente" || localAnswer === "Presidente" ? (
              <>
                <View className="gap-1.5 w-[100%]">
                  <View>
                    <Text className="h-6 w-[326px] text-[#23254C] text-base font-normal font-latoRegular leading-normal ">
                      {step1ter && step1ter?.text}
                    </Text>
                  </View>
                  <View className="w-[100%]">
                    <TextInput
                      onChangeText={(value) => handleChangeNombre(value)}
                      value={nombre}
                      className="absolute mb-1 w-[100%] h-11 px-3.5 py-2.5 bg-white rounded shadow border border-gray-300 justify-start items-center inline-flex "
                    />
                  </View>
                </View>

                <View className="mt-10 w-[100%]">
                  <PhoneInput
                    value={telefono}
                    setValue={setTelefono}
                    className="absolute w-[100%] b-1 h-11 px-3.5 py-2.5 bg-white rounded shadow border border-gray-300 justify-start items-center inline-flex "
                  />
                </View>
              </>
            ) : null}

            {/* //SI ES VOCAL TITULAR PARA USUARIOS DE LA FEDERACION  */}
            {localAnswer === "Vocal titular" ? (
              <View className="flex flex-col justify-between">
                <View>
                  <View>
                    <Text className="mb-1 w-[326px] text-[#23254C] text-base font-normal font-latoRegular leading-normal ">
                      {step1ter.text}
                    </Text>
                  </View>
                  <View>
                    <TextInput
                      onChangeText={(value) => handleChangeNombre(value)}
                      value={nombre}
                      className="absolute mb-1 w-full h-11 px-3.5 py-2.5 bg-white rounded shadow border border-gray-300 justify-start items-center inline-flex "
                    />
                  </View>
                </View>

                <View className="w-[100%] mt-[18%]">
                  <View>
                    <Text className="mb-[-5%] w-[326px] text-[#23254C] text-base font-normal font-latoRegular leading-normal ">
                      {step1quin.text}
                    </Text>
                  </View>
                  <Dropdown
                    options={step1quin.items}
                    onSelect={onSelect}
                    selectedOption={selectedOption}
                    supporting={step1quin.supporting}
                  />
                </View>
              </View>
            ) : null}
          </View>
        </View>

        {/* pasos */}
        <View className="h-[23%]">
          <View
            className={`flex flex-row justify-between items-center w-[12%]  h-11 mx-auto ${
              type === "radio" ? "mt-[16%]" : null
            } mb-8`}
          >
            <View className="w-2 h-2 relative">
              <Svg
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Rect
                  x="0.77832"
                  width="8"
                  height="8"
                  rx="4"
                  fill={pasoActual === 1 ? "#23254C" : "#d6d3d1"}
                />
              </Svg>
            </View>

            <View className="w-2 h-2 relative">
              <Svg
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Rect
                  x="0.77832"
                  width="8"
                  height="8"
                  rx="4"
                  fill={pasoActual === 2 ? "#23254C" : "#d6d3d1"}
                />
              </Svg>
            </View>

            <View className="w-2 h-2 relative">
              <Svg
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Rect
                  x="0.77832"
                  width="8"
                  height="8"
                  rx="4"
                  fill={pasoActual === 3 ? "#23254C" : "#d6d3d1"}
                />
              </Svg>
            </View>
          </View>
          <View className="w-[100%] flex flex-row justify-between">
            <Button
              type="secondary"
              label="Cancelar"
              onPress={() => handleCancel()}
              extra="w-[49%] mb-4 flex border border-#23254C "
            />

            <Button
              disabled={disabled}
              onPress={() => handleNextStep()}
              label="Siguente"
              extra="w-[49%] mb-4 flex"
            />
          </View>
        </View>
      </LinearGradient>
</>
);
};
