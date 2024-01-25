import React from "react";
import { Text, ImageBackground, View } from "react-native";
import Button from "../Components/Reusable/Button";
import { useNavigation } from "@react-navigation/native";


export const AuthScreen = () => {

  const navigation = useNavigation()
  return (

    <ImageBackground
      source={require('../../assets/fondoCaballo.png')}
      className='w-full h-full relative'
    >
      <View className="pr-5 pl-5 items-center relative flex flex-col justify-end h-full" style={{ backgroundColor: 'rgba(35, 37, 76, .25)' }}>
        <Text className="text-white font-latoBold text-2xl  md:text-[60px] md:pt-[40px] self-center mb-[8px] md:mb-[16px]">¡Bienvenidos a THH!</Text>
        <Text className="text-white font-latoRegular text-base  md:text-[22px] md:max-w-[500px] mb-[16px] md:mb-[48px] md:leading-[30px] self-center text-center">
          Encontrá todos los servicios y productos para vos y tu caballo en un sólo lugar.
        </Text>
        <View className="w-full md:items-center">
          <Button onPress={() => navigation.navigate("OnboardingIndex", { label: "Soy usuario nuevo" })} label="Soy usuario nuevo" extra="w-full  mb-[16px] md:h-[65px] md:max-w-[600px]" />
          {/* <Button onPress={() => navigation.navigate("OnboardingAdminIndex", { label: "Soy usuario administrador nuevo" })} label="Soy usuario administrador nuevo" type="secondary" extra="w-full border-solid md:h-[65px] md:max-w-[600px] border-2 border-[#23254C] " /> */}
          <Button onPress={() => navigation.navigate("Login", { label: "Quiero iniciar sesión" })} label="Quiero iniciar sesión" type="secondary" sinFondo={true} texColor={"text-white"} extra="w-full md:h-[65px] md:max-w-[600px] mb-[16px]"/>
        </View>
      </View>
    </ImageBackground>
  )
}