import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "./screens/Inicio/WelcomeScreen";
import { AuthScreen } from "./screens/AuthScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ScreenEvent } from "./screens/ScreenEvent";
import { DetailEvent } from "./screens/ScreenEventDetail";
import { OnboardingIndex } from './screens/NewOnboarding/OnboardingIndex';
import { ScreenEventInscription } from "./screens/inscripcionScreen/ScreenEventInscription";
import { MyHorses } from "./screens/Horses/MyHorses";
import { AddHorses } from "./screens/Horses/AddHorses";
import { ProfileIndex } from "./screens/Profile/ProfileIndex";
import { CheckoutScreen } from "./screens/CheckoutScreen";
import { EditProfile } from "./screens/Profile/EditProfile";
import { Federacion } from "./screens/Federacion/Federacion";
import { ConfigProfile } from "./screens/Profile/ConfigProfile";
import { ServicesScreen } from "./screens/Services/ServicesScreen";

// import { ProfileScreen } from "./screens/Profile/ProfileScreen";
import ScreenEventInscripted from "./screens/ScreenEventInscripted";
import { ScreenEventUnsubscribe } from "./screens/ScreenEventUnsubscribe";

import { DetailEventFinish } from "./screens/ScreenEventDetailFinish";
import ScreenResultados from "./screens/ScreenResultados";
import ScreenEventEnCurso from "./screens/ScreenEventEnCurso";
// import { OnboardingScreenAdmin } from "./screens/NewOnboarding/OnboardingScreenAdmin"
import {OnboardingAdminIndex} from "./screens/NewOnboarding/OnboardingAdminIndex"
import { ResetPasswordScreen } from "./screens/ResetPaswordScreen";
import { ServicesBottomBar } from "./screens/Services/ServicesEnBottomBar";
import MisCompetencias from "./screens/Profile/Tabs/MisCompetencias";
import { SplashScreen } from "./screens/SplashScreen/SplashScreen";
import MisClubsIndex from "./screens/Profile/Tabs/MisClubs/MisClubsIndex";
import MiClubDetail from "./screens/Profile/Tabs/MisClubs/MiClubDetail";
import MiAgenda from "./screens/Profile/Tabs/MiAgenda";




const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />  
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
                <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="OnboardingIndex"
          component={OnboardingIndex}
          options={{ headerShown: false, statusBarColor: "black" }}
        />

        <Stack.Screen
        name="OnboardingAdminIndex"
        component={OnboardingAdminIndex}
        options={{headerShown: false, statusBarColor: "black"}}
        />
        <Stack.Screen
          name="Federacion"
          component={Federacion}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="ScreenEvent"
          component={ScreenEvent}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="DetailEvent"
          component={DetailEvent}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="DetailEventFinish"
          component={DetailEventFinish}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="ScreenResultados"
          component={ScreenResultados}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
                <Stack.Screen
          name="ScreenEventEnCurso"
          component={ScreenEventEnCurso}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="EventInscripted"
          component={ScreenEventInscripted}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="ScreenEventInscription"
          component={ScreenEventInscription}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="ScreenEventUnsubscribe"
          component={ScreenEventUnsubscribe}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        
        <Stack.Screen
          name="ProfileIndex"
          component={ProfileIndex}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
      <Stack.Screen
          name="ServicesEnBottomBar"
          component={ServicesBottomBar}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
    

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="ConfigProfile"
          component={ConfigProfile}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="MyHorses"
          component={MyHorses}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="AddHorses"
          component={AddHorses}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="MisCompetencias"
          component={MisCompetencias}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="MisClubs"
          component={MisClubsIndex}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="MiClubDetail"
          component={MiClubDetail}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        <Stack.Screen
          name="MiAgenda"
          component={MiAgenda}
          options={{ headerShown: false, statusBarColor: "black" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
