import React, { useEffect, useState } from "react";
import { useSteps } from "../../CustomHooks.jsx/useSteps";
import { useNavigation } from "@react-navigation/native";
import { authSetUser } from "../../Redux/ReducerAuth";
import { useDispatch } from "react-redux";
import { realodadUser } from "../../../auth/authPeticiones";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setClientes, setProfesiones, setServicios } from "../../Redux/ReducerProfesion";
import { setMyHorse } from "../../Redux/ReducerHorse";
import { SplashScreen } from "../SplashScreen/SplashScreen";
import { content } from "./content"
import { Image, ScrollView, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { View } from "react-native-animatable";
import Button from "../../Components/Reusable/Button";
import Badge from "../../Components/Reusable/Badge";
import { Svg, Path } from "react-native-svg";
import ArrowFunction from "../../Components/Reusable/ArrowFunction";
import Constants from "expo-constants"
import { LinearGradient } from "expo-linear-gradient";


export const WelcomeScreen = () => {
  const { steps, setSteps, imgSource, setImgSource } = useSteps()
  const [hasToken, setHasToken] = useState('loading')
  const [showSplash, setShowSplash] = useState(true);
  const [splash, setSplash] = useState(false)
  const navigation = useNavigation()

  const dispatch = useDispatch()
  // useEffect(() => {
  //   const refreshToken = async (token) => {
  //     try {
  //       await realodadUser({
  //         token,
  //         succes: async (v) => {
  //           dispatch(authSetUser(v.user),
  //             dispatch(setProfesiones(v.profesiones),
  //               dispatch(setMyHorse(v.userHorses)),
  //               dispatch(setServicios(v.profesiones.servicios),
  //                 dispatch(setClientes(v.profesiones.clientes)))));
  //           navigation.navigate("ScreenEvent");
  //           // navigation.navigate("Federacion");
  //         },
  //         error: (e) => console.log(e),
  //         loading: (l) => setSplash(true)
  //       });
  //     } catch (error) {
  //       console.error('Error al iniciar sesión', error.message);
  //     }
  //   };

  //   const checkToken = async () => {
  //     let token = await AsyncStorage.getItem("token");
  //     if (token) {
  //       setTimeout(() => {
  //         setHasToken('exists')
  //         refreshToken(token);
  //       }, 1500)
  //     } else {
  //       setTimeout(() => {
  //         setHasToken('none')
  //         setShowSplash(false);
  //         setSteps(0)
  //       }, 1500)
  //     }
  //   };

  //   checkToken();
  // }, []);

  useEffect(() => {
    if (steps === 0) {
      setImgSource(require('../../images/welcome11.png'))
    } else if (steps === 1) {
      setImgSource(require('../../images/welcome212.png'))
    } else if (steps === 2) {
      setImgSource(require('../../images/welcome31.png'))
    } else if (steps === 3) {
      setImgSource(require('../../images/welcome41.png'))
    }
  }, [steps])

  const finishStep = () => {
    navigation.navigate("AuthScreen")
  }
  return (
    <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="md:h-full" style={{ paddingTop: Constants.statusBarHeight }}>
    
        <ScrollView className="w-full">
          <View className="min-h-[100vh] md:min-h-0 w-full  px-6 pt-5">
            {steps !== 0 && <ArrowFunction onPress={() => setSteps(steps - 1)} />}
            {steps === 0 && <View className="w-11 h-11 md:w-16 md:h-16" />}
            <View className="items-center justify-center mt-[53] md:mt-0">

              <View className="imagen mb-[25] h-[321px] md:h-[430px] md:mt-[100px]">

                {steps !== 3 && <Image source={imgSource} className={`imagen left-1 ${steps === 0 && ' md:h-[430px] md:w-[340px] md:left-1'} ${steps === 1 && ' md:h-[430px] md:w-[440px] md:left-4'} ${steps === 2 && ' md:h-[430px] md:w-[390px] md:left-0'}`} />}
                {steps === 3 &&
                  <View className="copaYsvg flex flex-row w-[320px] h-[255px] md:w-[430px] md:h-[365px] md:left-[-16px] gap-x-[6px] mb-[55px]">
                    <Svg xmlns="http://www.w3.org/2000/svg" width="50%" height="100%" viewBox="0 0 162 255" fill="none">
                      <Path d="M125.952 20.1627V54.3723V87.2135V139.463H40.3022V87.2135V69.3128L9.10865 87.2135L0.200195 92.324V254.324H40.3022V172.109H125.952V254.324H159.352H161.111V0L125.952 20.1627Z" fill="#23254C" />
                    </Svg>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="50%" height="100%" viewBox="0 0 161 255" fill="none">
                      <Path d="M150.136 87.214L120.898 70.3465V87.214V139.464H35.2479V87.214V54.3728V20.8893L0.0888672 0.586914V254.324H1.84822H35.2479V172.11H120.898V254.324H161V93.4974L150.136 87.214Z" fill="#23254C" />
                    </Svg>
                    <Image source={imgSource} className="copa absolute left-6 md:left-[75px] md:h-[400px]" />
                  </View>}
              </View>

              {/* <ProgressBar progress={steps/4} /> */}

              {steps !== 1 ?

                <Badge
                  label={'Próximamente'}
                  badgeClass={'absolute px-2.5 py-0.5 bg-black rounded-2xl justify-center items-center top-[310] md:top-[520] w-auto  '}
                  labelClass={'text-center text-white text-sm md:text-2xl font-latoRegular'}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .7)' }} />
                :
                <Badge
                  label={''}
                  badgeClass={'absolute  px-2.5 py-0.5'}
                  labelClass={'text-center text-transparent text-sm md:text-xl font-latoRegular'} />
              }

              <View className="flex-row gap-x-1 mb-[28px] md:mt-[40px]">
                {[0, 1, 2, 3].map(i => {
                  return (
                    <Animatable.View
                      key={i}
                      animation={steps === i ? 'fadeIn' : 'pulse'}
                      duration={1000}
                      className={`h-2 md:h-4 rounded-[3px] md:rounded-full  ${steps === i ? "w-[78px] md:w-[100px] bg-labelDarkBlue" : "w-2 md:w-4 bg-zinc-300"} `}
                    ></Animatable.View>
                  )
                })}
              </View>
              <Text className="text-neutral-800 font-latoBold text-2xl md:text-[60px] md:pt-[40px] mb-[18px]">{content[steps].text}</Text>
              <View className="w-full items-center px-1 mb-[62px]">
                <Text className={`text-neutral-800 font-latoRegular text-base text-center md:text-[22px] md:leading-[30px] ${steps === 0 && 'max-w-[273] md:max-w-[303]'} ${steps === 1 && 'max-w-[284]  md:max-w-[343]'} ${steps === 2 && 'max-w-[303]   md:max-w-[403]'} ${steps === 3 && 'max-w-[273] md:max-w-[333]'}`}>{content[steps].supporting}</Text>
              </View>
              <View className="mt-8 w-full md:items-center">
                <Button onPress={() => { steps === 3 ? finishStep() : setSteps(steps + 1) }} label="Siguiente" extra="w-full h-12 md:h-[65px] md:max-w-[600px]" />
                <Button onPress={() => finishStep()} label="Omitir" type="secondary" extra="h-12 w-full md:h-[65px] md:max-w-[600px]" />
              </View>
            </View>
          </View>
        </ScrollView>
    </LinearGradient>
  )
}