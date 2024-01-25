import React, { useEffect, useState, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import axios from 'axios';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
//Stripe imports:
import { Alert, Platform, ScrollView, Text, View } from 'react-native';
import Navigator from './src/Navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { saveTokenToServer } from './auth/userPeticiones';
import 'expo-dev-client';


Notifications.setNotificationHandler({
   handleNotification: async () => ({
     shouldShowAlert: true,
     shouldPlaySound: false,
     shouldSetBadge: false,
   }),
 });
 
 async function registerForPushNotificationsAsync() {
   let token;
   if (Device.isDevice) {
     const { status: existingStatus } = await Notifications.getPermissionsAsync();
     let finalStatus = existingStatus;
     if (existingStatus !== 'granted') {
       const { status } = await Notifications.requestPermissionsAsync();
       finalStatus = status;
     }
     if (finalStatus !== 'granted') {
      //  alert('Failed to get push token for push notification!');
       return;
     }
     token = await Notifications.getExpoPushTokenAsync({
       projectId: Constants.expoConfig.extra.eas.projectId,
     });
     console.log('cl48', token);
   } else {
    //  alert('Must use physical device for Push Notifications');
   }
 
   if (Platform.OS === 'android') {
     Notifications.setNotificationChannelAsync('default', {
       name: 'default',
       importance: Notifications.AndroidImportance.MAX,
       vibrationPattern: [0, 250, 250, 250],
       lightColor: '#FF231F7C',
     });
   }
   console.log('cl61', token);
   return token;
 }

export default function App() {
axios.defaults.baseURL = 'https://horse-riders-house-production-34bb.up.railway.app';
//axios.defaults.baseURL = "http://192.168.1.40:8080"   //facundo
//axios.defaults.baseURL = "http://192.168.1.56:8080"   //satiago
// axios.defaults.baseURL = "http://192.168.1.56:8080"  //satiago
//axios.defaults.baseURL = "http://192.168.0.5:8082"  
//  axios.defaults.baseURL = "http://192.168.1.56:8080"  //satiago
//axios.defaults.baseURL = "http://192.168.0.9:8082" 
//axios.defaults.baseURL = "http://192.168.1.56:8080"  //satiago
//axios.defaults.baseURL = "http://192.168.0.18:8082"  
//axios.defaults.baseURL = "http://192.168.1.40:8080"   //facundo
//axios.defaults.baseURL = "http://192.168.1.56:8080"  //satiago
// axios.defaults.baseURL = "http://192.168.1.167:8080"  //nombre
// axios.defaults.baseURL = "http://192.168.1.167:8080"  //nombre
// axios.defaults.baseURL = "http://192.168.0.145:8080" // Ramiro
 //  axios.defaults.baseURL = "http://192.168.0.13:8080" //Moi
// axios.defaults.baseURL = "http://192.168.0.244:8080" // Ramiro
//  axios.defaults.baseURL = "http://192.168.0.13:8080" //Moi

const [expoPushToken, setExpoPushToken] = useState('');
const [notification, setNotification] = useState(false);
const notificationListener = useRef();
const responseListener = useRef();

const [isLoadingNotif, setIsLoadingNotif] = useState(false);

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS !== 'android') {
  } else {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      showBadge: true,
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FE9018',
    });

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
    } else {
      token = (await Notifications.getExpoPushTokenAsync()).data;
      /*  console.log('cl102', token); */
      await saveToken({
        token: token,
        tokenSession: await AsyncStorage.getItem('Token'),
        loading: (isLoading) => {
          // Manejar estado de carga
          setIsLoadingNotif(isLoading);
        },
        success: (response) => {
          /*    console.log('cl111', response); */
        },
        error: (err) => {
          console.log('cl114Error', err);
        },
      });
    }
    noImplementado('Notif Token: ' + token);
  }
}

useEffect(() => {
  registerForPushNotificationsAsync()
    .then(async (token) => {
      setExpoPushToken(token);
      await AsyncStorage.setItem('devicetoken', token);
      let checkToken = await AsyncStorage.getItem('devicetoken');
      if (checkToken !== token) {
        await saveTokenToServer({
          token: token,
          loading: (isLoading) => {},
          success: (response) => {
            console.log('cl132', response);
          },
          error: (err) => {
            console.log('cl135Error', err);
          },
        });
      }
    })
    .catch((e) => {});

  //Event Listeners
  notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
    setNotification(notification);
  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
    const {
      notification: {
        request: {
          content: {
            data: { screen },
          },
        },
      },
    } = response;

    if (screen) {
    }
  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
}, []);
    let [fontsLoaded] = useFonts({
      Lato_100Thin,
      Lato_100Thin_Italic,
      Lato_300Light,
      Lato_300Light_Italic,
      Lato_400Regular,
      Lato_400Regular_Italic,
      Lato_700Bold,
      Lato_700Bold_Italic,
      Lato_900Black,
      Lato_900Black_Italic,
    });
 
if(!fontsLoaded) {
  return null
}

 
  return (
    //headerLeft: null, // Bloquea el botón de retroceso en la barra de navegación

    <Provider store={store}>
    <Navigator />
  </Provider>

  );
}

