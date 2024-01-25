import { Alert, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import EmailInput from "../Components/Reusable/Inputs/EmailInput"
import { useEffect, useRef, useState } from "react"
import PasswordInput from "../Components/Reusable/Inputs/PasswordInput"
import Checkbox from "../Components/Reusable/Checkbox"
import Button from "../Components/Reusable/Button"
import { useNavigation } from "@react-navigation/native"
import app from "../../auth/firebase"
import auth from "../../auth/firebase"
import { FacebookAuthProvider } from "firebase/auth"
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'

import { LoginWithBack } from "../../auth/authPeticiones"
import { authSetUser } from "../Redux/ReducerAuth"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { setClientes, setProfesiones, setServicios } from "../Redux/ReducerProfesion"
import { setMyHorse } from "../Redux/ReducerHorse"
import { G, Path, Svg } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, OAuthProvider, sendEmailVerification } from "firebase/auth"
import LoadingScreen from "../Components/Reusable/LoadingScreen"
import * as WebBrowser from 'expo-web-browser'
import * as Google from "expo-auth-session/providers/google"
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { AndroidLogin } from "../Components/LoginComponents/AndroidLogin"
import { updateCode } from "../../auth/userPeticiones"
import { sendEmailVerificationBrevo } from "../../auth/email"
WebBrowser.maybeCompleteAuthSession()

export const LoginScreen = ({ steps, setSteps, route }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [savePassword, setSavePassword] = useState(false)

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [receiveNews, setReceiveNews] = useState(true)
  const [disabled, setDisabled] = useState(true) //para el boton
  const [loginVisible, setLoginVisible] = useState(false)
  const [modal, setModal] = useState(true)
  const [errorLogin, setErrorLogin] = useState(false)
  const [reset, setReset] = useState(false)
  const navigation = useNavigation()
  const [code, setCode] = useState()
  const [verification, setVerification] = useState(false)
  const dispatch = useDispatch()
  const [generateCode, setGenerateCode] = useState("")
  const [userInfo, setUserInfo] = useState()
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '1018261024468-p8d99dfv52dncvh3c1cf7ffsrfgbpeht.apps.googleusercontent.com',
    androidClientId: '1018261024468-gi2o4u2sfaclnkulmjjceukk177daasg.apps.googleusercontent.com'
  })
  const user = useSelector((state) => state.ReducerAuth.profile)


  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [errorCode, setErrorCode] = useState(false)
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  console.log(code1)
  const handleInputChange = (index, value) => {
    // Update the state based on the input index
    switch (index) {
      case 0:
        setCode1(value);
        break;
      case 1:
        setCode2(value);
        break;
      case 2:
        setCode3(value);
        break;
      case 3:
        setCode4(value);
        break;
      default:
        break;
    }

    // Move to the next input if the length of the current input is 1
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const [loading, setLoading] = useState(false)
  console.log(generateCode)

  const signInWithFacebook = async () => {
    const results = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (results.isCancelled) throw 'User cancelled the login process';

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) throw 'Something went wrong obtaining access token';

    const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
    const user = await signInWithCredential(auth, facebookCredential);
    await AsyncStorage.setItem('firebaseToken', user.user.stsTokenManager.accessToken);
    await LoginWithBack({
      professions: route?.params?.profesion || ["ninguna"],
      name: user.user.displayName.split(' ')[0] || null,
      lastname: user.user.displayName.split(' ')[1] || null,
      code: "verificado",
      succes: async (v) => {
        await AsyncStorage.setItem('token', v.newToken);
        dispatch(authSetUser(v.user),
          dispatch(setProfesiones(v.profesiones),
            dispatch(setServicios(v.profesiones.servicios),
              dispatch(setClientes(v.profesiones.clientes)),
              dispatch(setMyHorse(v.userHorses))),
          )),
          navigation.navigate("ScreenEvent")
      },
      error: (e) => console.error("Error al iniciar sesión con Facebook en el backend:", e),
      loading: (l) => setLoading(l)
    });

  }



  const signInWithApple = async () => {
    try {
      const nonce = Math.random().toString(36).substring(2, 10);
      const hashedNonce = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, nonce);
      const appleCredential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ],
        nonce: hashedNonce
      });

      const { identityToken } = appleCredential;
      if (!identityToken) throw new Error('Apple Identity Token no encontrado');
      const provider = new OAuthProvider('apple.com');
      const credential = provider.credential({
        idToken: identityToken,
        rawNonce: nonce
      });
      const userCredential = await signInWithCredential(auth, credential);
      const firebaseToken = userCredential.user.stsTokenManager.accessToken;
      await AsyncStorage.setItem('firebaseToken', firebaseToken); //el token de firebase solamente para el login
      await LoginWithBack({
        professions: route?.params?.profesion || ["ninguna"],
        name: userCredential.user.displayName.split(' ')[0] || null,
        lastname: userCredential.user.displayName.split(' ')[1] || null,
        code: "verificado",

        succes: async (v) => {
          await AsyncStorage.setItem('token', v.newToken);
          dispatch(authSetUser(v.user),
            dispatch(setProfesiones(v.profesiones),
              dispatch(setServicios(v.profesiones.servicios),
                dispatch(setClientes(v.profesiones.clientes)),
                dispatch(setMyHorse(v.userHorses))),
            )),
            navigation.navigate("ScreenEvent")
        },
        error: (e) => console.error("Error al iniciar sesión con Apple en el backend:", e),
        loading: (l) => setLoading(l)
      });
      console.log('Inicio de sesión con Apple exitoso:', userCredential.user);

    } catch (error) {
      console.error('Error al iniciar sesión con Apple:', error);
    }
  };





  useEffect(() => {
    if (!modal) setModal(true)
    if (route.params?.verificar) setVerification(true)
    if (route.params?.profesion) setLoginVisible(true)
    const getData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        items.forEach(item => {
          console.log(item[0], item[1]); // Imprime la clave y el valor de cada elemento en AsyncStorage
        });
      } catch (error) {
        console.error('Error al obtener datos de AsyncStorage: ', error);
      }
    };

    getData();
  }, [])


  useEffect(() => {

    if (response?.type === "success") {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user && user.emailVerified === true) {
        console.log('unsub', user)
        await AsyncStorage.setItem('firebaseToken', user.stsTokenManager.accessToken);
        await LoginWithBack({
          professions: route?.params?.profesion || JSON.parse(await AsyncStorage.getItem('professions')) || ["ninguna"],
          name: user.displayName.split(' ')[0] || await AsyncStorage.getItem('nombre') || null,
          lastname: user.displayName.split(' ')[1] || await AsyncStorage.getItem('apellido') || null,
          code: "verificado",
          succes: async (v) => {
            await AsyncStorage.setItem('token', v.newToken); //traemos un nuevo token para manejarnos despues
            dispatch(authSetUser(v.user),
              setModal(false),
              dispatch(setProfesiones(v.profesiones),
                dispatch(setServicios(v.profesiones.servicios),
                  dispatch(setClientes(v.profesiones.clientes)),
                  dispatch(setMyHorse(v.userHorses))))),
              navigation.navigate("ScreenEvent")
          },
          error: (e) => console.log('loginwithback', e),
          loading: (l) => setLoading(l)
        })


      } else {
        console.log('usuario no authenticated')
      }
    })
    return () => unsub()
  }, [])


  const sendVerificationCode = async ({ email }) => {
    try {
      setVerification(true);
      setLoginVisible(false)
      await sendEmailVerificationBrevo(email, (a) => {
        setGenerateCode(a);
        updateCode({
          code: a,
          succes: (a) => console.log(),
          loading: (a) => console.log(),
          error: (a) => console.error('Error en updateCode:', a),
        });
      });
    } catch (error) {
      console.error('Error en sendVerificationCode:', error);
    }
  };


  const handleLogin = async (e) => {
    try {
      const userCredential = loginVisible ?
        await createUserWithEmailAndPassword(app, email.toLocaleLowerCase(), password)
        :
        await signInWithEmailAndPassword(app, email.toLocaleLowerCase(), password);
      await AsyncStorage.setItem('firebaseToken', userCredential.user.accessToken);
      const valorProfesiones = await AsyncStorage.getItem('professions')
      const objetoProfesiones = JSON.parse(valorProfesiones);
      await LoginWithBack({
        professions: route?.params?.profesion || objetoProfesiones || ["ninguna"],
        name: name,
        lastname: lastname,
        code: loginVisible ? "sin Verificar" : "verificado",
        succes: async (v) => {
          console.log(v.user)
          await AsyncStorage.setItem('token', v.newToken); //traemos un nuevo token para manejarnos despues
          dispatch(authSetUser(v.user),
            dispatch(setProfesiones(v.profesiones),
              dispatch(setServicios(v.profesiones.servicios),
                dispatch(setClientes(v.profesiones.clientes),
                  dispatch(setMyHorse(v.userHorses))))));

          if (loginVisible || v.user.code !== "sin Verificar") {
            sendVerificationCode({ email: email });
          } else {
            setModal(false),
              navigation.navigate("ScreenEvent");
          }

        },
        error: (e) => { setErrorLogin(true); console.log('loginwithback', e) },
        loading: (l) => setLoading(l)
      })
    }
    catch (error) {
      Alert.alert('Error al iniciar sesión', error.message);
      setErrorLogin(true)
    }
  }



  useEffect(() => {
    checkFields();
    handleRememberPassword();
  }, [email, name, lastname, password, agreeTerms]);


  const checkFields = () => {
    const areFieldsFilled = email !== '' && name !== '' && lastname !== '' && password !== '' && agreeTerms;
    setDisabled(!areFieldsFilled);
  };
  const handleResetPassword = async () => {
    try {
      setModal(false)
      await sendPasswordResetEmail(app, email);
      Alert.alert("Revisa tu correo", "Se ha enviado un enlace para restablecer tu contraseña.");
      setReset(false)
      navigation.navigate("AuthScreen")

    } catch (error) {
      Alert.alert("Revisa tu correo", "Se ha enviado un enlace para restablecer tu contraseña.");
      setReset(false)
      navigation.navigate("AuthScreen")


    }
  };


  const handleRememberPassword = async () => {
    try {
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedPassword) {
        setPassword(savedPassword);
      }
    } catch (error) {
      // Handle error
      Alert.alert('Error al obtener la contraseña', error.message);
    }
  };

  return (
    <>
      {Platform.OS !== 'ios' ?
        loading && <LoadingScreen /> ||
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="w-full h-full min-h-[100vh]">
          <ScrollView className="w-full h-full">
            <LinearGradient colors={['#23254C', '#190C1D']} className="h-full max-h-[375px] md:max-h-[550px] bg-[#23254C] flex justify-center px-[21px] md:px-[100px]" >
              <TouchableOpacity className="absolute left-[14px] top-[27px] z-10 w-[48px] h-[48px] md:w-16 md:h-16 bg-white rounded border border-[#D1DADA] justify-center items-center flex" onPress={() => {
                if (reset) {
                  setReset(false); // Si reset es verdadero, cambia su estado a falso
                }
                if (route.params?.verificar) {
                  setVerification(false)
                  setModal(true)
                }
                else {
                  navigation.goBack(); // Si reset es falso, vuelve a la pantalla anterior
                }
              }}
                accessible={true} accessibilityLabel="Go Back">
                <Svg width="60%" height="60%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <G id="arrow left">
                    <Path id="XMLID 1536" d="M26.1397 16.0001C26.1397 16.5868 25.6597 17.0668 25.073 17.0668H9.49971L14.3264 21.9201C14.753 22.3468 14.753 23.0135 14.3264 23.4401C14.113 23.6535 13.8464 23.7601 13.5797 23.7601C13.313 23.7601 13.0197 23.6535 12.833 23.4401L6.19305 16.7735C5.76638 16.3468 5.76638 15.6801 6.19305 15.2801L12.833 8.61345C13.2597 8.18679 13.9264 8.18679 14.353 8.61345C14.7797 9.04012 14.7797 9.70679 14.353 10.1335L9.49971 14.9335H25.073C25.6597 14.9335 26.1397 15.4135 26.1397 16.0001Z" fill="black" />
                  </G>
                </Svg>
              </TouchableOpacity>
              {!reset ?
                <Text className={`font-latoBold text-[28px] md:text-[44px] text-white  ${loginVisible ? 'top-[195]  md:top-[265]' : 'top-[130] md:top-[190]'}`}>{loginVisible || verification ? "Registrarse" : "Iniciar sesión"}</Text>
                :
                <Text className={`font-latoBold text-[28px] text-white  ${loginVisible ? 'top-[190]' : 'top-[130]'}`}>Restablecer contraseña</Text>

              }
              {verification ?

                <View className={`bg-white ${loginVisible ? 'h-[570px] top-[247] md:top-[316] md:h-[740px]' : 'top-[180] md:top-[240]'}  md:px-[10px] w-full flex rounded-xl self-center gap-y-6 justify-center items-center`} style={{ elevation: 12, shadowColor: 'rgba(0, 0, 0, .5)' }} >
                  <Text className="text-sm font-latoLight leading-normal">Te enviamos un código para validar tu cuenta
                    a {email}</Text>
                  <View className="rounded h-[40%]  flex-row">
                    {inputRefs.map((inputRef, index) => (
                      <TextInput
                        key={index}
                        ref={inputRef}
                        value={index === 0 ? code1 : index === 1 ? code2 : index === 2 ? code3 : code4}
                        onChangeText={(value) => handleInputChange(index, value)}
                        className="w-10 text-center font-bold text-2xl rounded bg-gray-300 mx-1 w-16 h-16"
                        maxLength={1}
                        keyboardType="default"
                      />
                    ))}
                  </View>
                  <Button label={"Validar correo"}
                    extra={`  w-[80%] md:h-[65px] md:max-w-[600px] `}
                    onPress={() => {
                      if (code1.toLocaleLowerCase() + code2.toLocaleLowerCase() + code3.toLocaleLowerCase() + code4.toLocaleLowerCase() === generateCode.toLocaleLowerCase() || user?.code === generateCode.toLocaleLowerCase()) {
                        updateCode({
                          code: "verificado",
                          succes: (a) => {
                            setModal(false),
                              navigation.navigate("ScreenEvent")
                          }
                          ,
                          loading: (a) => setLoading(true),
                          error: (a) => console.error('Error en updateCode:', a),
                        });
                      } else { setErrorCode(true) }
                    }} />
                  <Button
                    type={"secondary"}
                    label={"No recibí el código"}
                    extra={`w-full  md:h-[65px] 
                md:max-w-[600px] `}
                    onPress={() => sendVerificationCode({ email: user?.email })} />

                </View>

                :

                <View className={`bg-white ${loginVisible ? 'h-[570px] top-[247] md:top-[316] md:h-[740px]' : 'top-[180] md:top-[240]'} px-[16px] pt-[20px] pb-[24px] md:px-[24px] w-full flex rounded-xl self-center gap-y-6 justify-center items-center`} style={{ elevation: 12, shadowColor: 'rgba(0, 0, 0, .5)' }} >
                  <View className="w-[99px] h-[35px] md:w-[200px] md:h-[136px]">
                    <Svg width="100%" height="100%" viewBox="0 0 99 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M42.1621 12.3323L38.3483 10.2682V12.3323V18.7261H27.1766V12.3323V8.31348V4.21609L22.5906 1.73169V32.7816H22.8201H27.1766V22.721H38.3483V32.7816H43.5791V13.1012L42.1621 12.3323Z" fill="#231D43" />
                      <Path d="M17.225 4.12723V8.31347V12.3323V18.7261H6.05324V12.3323V10.1417L1.98449 12.3323L0.82251 12.9576V32.7816H6.05324V22.721H17.225V32.7816H21.5815H21.811V1.65991L17.225 4.12723Z" fill="#231D43" />
                      <Path d="M55.5138 1.70316V3.32234H53.3155V10H51.2945V3.32234H49.0962V1.70316H55.5138ZM63.714 1.70316V10H61.6929V6.58435H58.5491V10H56.5281V1.70316H58.5491V4.95335H61.6929V1.70316H63.714ZM67.194 3.32234V5.00062H69.9005V6.56071H67.194V8.38082H70.2551V10H65.1729V1.70316H70.2551V3.32234H67.194ZM56.7311 13.7032V22H54.7101V18.5843H51.5663V22H49.5453V13.7032H51.5663V16.9533H54.7101V13.7032H56.7311ZM62.114 22.0827C61.3339 22.0827 60.6169 21.9015 59.963 21.5391C59.3169 21.1766 58.8008 20.6723 58.4147 20.0262C58.0365 19.3723 57.8474 18.6395 57.8474 17.8279C57.8474 17.0164 58.0365 16.2875 58.4147 15.6415C58.8008 14.9954 59.3169 14.4911 59.963 14.1286C60.6169 13.7662 61.3339 13.585 62.114 13.585C62.894 13.585 63.6071 13.7662 64.2532 14.1286C64.9072 14.4911 65.4193 14.9954 65.7897 15.6415C66.1679 16.2875 66.357 17.0164 66.357 17.8279C66.357 18.6395 66.1679 19.3723 65.7897 20.0262C65.4114 20.6723 64.8993 21.1766 64.2532 21.5391C63.6071 21.9015 62.894 22.0827 62.114 22.0827ZM62.114 20.239C62.7758 20.239 63.3037 20.0184 63.6977 19.5771C64.0996 19.1359 64.3005 18.5528 64.3005 17.8279C64.3005 17.0952 64.0996 16.5121 63.6977 16.0787C63.3037 15.6375 62.7758 15.4169 62.114 15.4169C61.4442 15.4169 60.9085 15.6336 60.5066 16.0669C60.1127 16.5003 59.9157 17.0873 59.9157 17.8279C59.9157 18.5607 60.1127 19.1477 60.5066 19.589C60.9085 20.0223 61.4442 20.239 62.114 20.239ZM71.7125 22L69.9869 18.868H69.5023V22H67.4813V13.7032H70.8733C71.5273 13.7032 72.0828 13.8174 72.5398 14.0459C73.0047 14.2744 73.3514 14.5896 73.5798 14.9914C73.8083 15.3854 73.9226 15.8266 73.9226 16.3151C73.9226 16.8667 73.765 17.3591 73.4498 17.7925C73.1426 18.2258 72.6856 18.5331 72.0789 18.7144L73.9935 22H71.7125ZM69.5023 17.4379H70.7551C71.1255 17.4379 71.4012 17.3473 71.5825 17.1661C71.7716 16.9849 71.8661 16.7288 71.8661 16.3979C71.8661 16.0827 71.7716 15.8345 71.5825 15.6533C71.4012 15.472 71.1255 15.3814 70.7551 15.3814H69.5023V17.4379ZM78.1933 22.0827C77.5866 22.0827 77.0429 21.9842 76.5623 21.7873C76.0816 21.5903 75.6956 21.2987 75.404 20.9127C75.1204 20.5266 74.9707 20.0617 74.9549 19.518H77.1059C77.1375 19.8253 77.2438 20.0617 77.425 20.2272C77.6063 20.3848 77.8426 20.4635 78.1342 20.4635C78.4336 20.4635 78.67 20.3966 78.8433 20.2626C79.0167 20.1208 79.1033 19.9278 79.1033 19.6835C79.1033 19.4786 79.0324 19.3092 78.8906 19.1753C78.7566 19.0413 78.5872 18.931 78.3824 18.8444C78.1854 18.7577 77.9017 18.6592 77.5314 18.5489C76.9956 18.3834 76.5583 18.218 76.2195 18.0525C75.8807 17.887 75.5892 17.6428 75.3449 17.3197C75.1007 16.9967 74.9785 16.5751 74.9785 16.0551C74.9785 15.2829 75.2583 14.6802 75.8177 14.2468C76.3771 13.8056 77.1059 13.585 78.0042 13.585C78.9182 13.585 79.6549 13.8056 80.2143 14.2468C80.7737 14.6802 81.0731 15.2869 81.1125 16.0669H78.926C78.9103 15.799 78.8118 15.5902 78.6306 15.4405C78.4493 15.2829 78.2169 15.2042 77.9333 15.2042C77.689 15.2042 77.492 15.2711 77.3423 15.4051C77.1926 15.5311 77.1178 15.7163 77.1178 15.9606C77.1178 16.2285 77.2438 16.4373 77.496 16.587C77.7481 16.7367 78.1421 16.8982 78.6778 17.0715C79.2136 17.2528 79.647 17.4261 79.9779 17.5916C80.3167 17.757 80.6083 17.9973 80.8525 18.3125C81.0968 18.6277 81.2189 19.0335 81.2189 19.5299C81.2189 20.0026 81.0968 20.432 80.8525 20.8181C80.6161 21.2042 80.2695 21.5115 79.8125 21.74C79.3555 21.9685 78.8157 22.0827 78.1933 22.0827ZM84.4837 15.3223V17.0006H87.1902V18.5607H84.4837V20.3808H87.5448V22H82.4627V13.7032H87.5448V15.3223H84.4837ZM91.8588 22.0827C91.2521 22.0827 90.7085 21.9842 90.2278 21.7873C89.7472 21.5903 89.3611 21.2987 89.0696 20.9127C88.7859 20.5266 88.6362 20.0617 88.6205 19.518H90.7715C90.803 19.8253 90.9094 20.0617 91.0906 20.2272C91.2718 20.3848 91.5082 20.4635 91.7997 20.4635C92.0991 20.4635 92.3355 20.3966 92.5089 20.2626C92.6822 20.1208 92.7689 19.9278 92.7689 19.6835C92.7689 19.4786 92.698 19.3092 92.5561 19.1753C92.4222 19.0413 92.2528 18.931 92.0479 18.8444C91.851 18.7577 91.5673 18.6592 91.197 18.5489C90.6612 18.3834 90.2239 18.218 89.8851 18.0525C89.5463 17.887 89.2547 17.6428 89.0105 17.3197C88.7662 16.9967 88.6441 16.5751 88.6441 16.0551C88.6441 15.2829 88.9238 14.6802 89.4832 14.2468C90.0427 13.8056 90.7715 13.585 91.6697 13.585C92.5837 13.585 93.3204 13.8056 93.8799 14.2468C94.4393 14.6802 94.7387 15.2869 94.7781 16.0669H92.5916C92.5758 15.799 92.4774 15.5902 92.2961 15.4405C92.1149 15.2829 91.8825 15.2042 91.5988 15.2042C91.3546 15.2042 91.1576 15.2711 91.0079 15.4051C90.8582 15.5311 90.7833 15.7163 90.7833 15.9606C90.7833 16.2285 90.9094 16.4373 91.1615 16.587C91.4137 16.7367 91.8076 16.8982 92.3434 17.0715C92.8792 17.2528 93.3126 17.4261 93.6435 17.5916C93.9823 17.757 94.2738 17.9973 94.5181 18.3125C94.7623 18.6277 94.8845 19.0335 94.8845 19.5299C94.8845 20.0026 94.7623 20.432 94.5181 20.8181C94.2817 21.2042 93.935 21.5115 93.478 21.74C93.021 21.9685 92.4813 22.0827 91.8588 22.0827ZM56.7311 24.7032V33H54.7101V29.5843H51.5663V33H49.5453V24.7032H51.5663V27.9533H54.7101V24.7032H56.7311ZM62.114 33.0827C61.3339 33.0827 60.6169 32.9015 59.963 32.5391C59.3169 32.1766 58.8008 31.6723 58.4147 31.0262C58.0365 30.3723 57.8474 29.6395 57.8474 28.8279C57.8474 28.0164 58.0365 27.2875 58.4147 26.6415C58.8008 25.9954 59.3169 25.4911 59.963 25.1286C60.6169 24.7662 61.3339 24.585 62.114 24.585C62.894 24.585 63.6071 24.7662 64.2532 25.1286C64.9072 25.4911 65.4193 25.9954 65.7897 26.6415C66.1679 27.2875 66.357 28.0164 66.357 28.8279C66.357 29.6395 66.1679 30.3723 65.7897 31.0262C65.4114 31.6723 64.8993 32.1766 64.2532 32.5391C63.6071 32.9015 62.894 33.0827 62.114 33.0827ZM62.114 31.239C62.7758 31.239 63.3037 31.0184 63.6977 30.5771C64.0996 30.1359 64.3005 29.5528 64.3005 28.8279C64.3005 28.0952 64.0996 27.5121 63.6977 27.0787C63.3037 26.6375 62.7758 26.4169 62.114 26.4169C61.4442 26.4169 60.9085 26.6336 60.5066 27.0669C60.1127 27.5003 59.9157 28.0873 59.9157 28.8279C59.9157 29.5607 60.1127 30.1477 60.5066 30.589C60.9085 31.0223 61.4442 31.239 62.114 31.239ZM69.4669 24.7032V29.6671C69.4669 30.1635 69.589 30.5456 69.8333 30.8135C70.0775 31.0814 70.436 31.2154 70.9088 31.2154C71.3815 31.2154 71.744 31.0814 71.9961 30.8135C72.2483 30.5456 72.3743 30.1635 72.3743 29.6671V24.7032H74.3954V29.6553C74.3954 30.3959 74.2378 31.0223 73.9226 31.5345C73.6074 32.0466 73.1819 32.4327 72.6462 32.6927C72.1183 32.9527 71.5273 33.0827 70.8733 33.0827C70.2194 33.0827 69.6323 32.9567 69.1123 32.7045C68.6002 32.4445 68.1944 32.0584 67.895 31.5463C67.5956 31.0262 67.4459 30.3959 67.4459 29.6553V24.7032H69.4669ZM78.8165 33.0827C78.2098 33.0827 77.6662 32.9842 77.1855 32.7873C76.7049 32.5903 76.3188 32.2987 76.0273 31.9127C75.7436 31.5266 75.5939 31.0617 75.5782 30.518H77.7292C77.7607 30.8253 77.8671 31.0617 78.0483 31.2272C78.2295 31.3848 78.4659 31.4635 78.7574 31.4635C79.0568 31.4635 79.2932 31.3966 79.4666 31.2626C79.6399 31.1208 79.7266 30.9278 79.7266 30.6835C79.7266 30.4786 79.6557 30.3092 79.5138 30.1753C79.3799 30.0413 79.2105 29.931 79.0056 29.8444C78.8086 29.7577 78.525 29.6592 78.1547 29.5489C77.6189 29.3834 77.1816 29.218 76.8428 29.0525C76.504 28.887 76.2124 28.6428 75.9682 28.3197C75.7239 27.9967 75.6018 27.5751 75.6018 27.0551C75.6018 26.2829 75.8815 25.6802 76.4409 25.2468C77.0004 24.8056 77.7292 24.585 78.6274 24.585C79.5414 24.585 80.2781 24.8056 80.8376 25.2468C81.397 25.6802 81.6964 26.2869 81.7358 27.0669H79.5493C79.5335 26.799 79.435 26.5902 79.2538 26.4405C79.0726 26.2829 78.8402 26.2042 78.5565 26.2042C78.3123 26.2042 78.1153 26.2711 77.9656 26.4051C77.8159 26.5311 77.741 26.7163 77.741 26.9606C77.741 27.2285 77.8671 27.4373 78.1192 27.587C78.3714 27.7367 78.7653 27.8982 79.3011 28.0715C79.8369 28.2528 80.2702 28.4261 80.6012 28.5916C80.94 28.757 81.2315 28.9973 81.4758 29.3125C81.72 29.6277 81.8422 30.0335 81.8422 30.5299C81.8422 31.0026 81.72 31.432 81.4758 31.8181C81.2394 32.2042 80.8927 32.5115 80.4357 32.74C79.9787 32.9685 79.439 33.0827 78.8165 33.0827ZM85.1069 26.3223V28.0006H87.8135V29.5607H85.1069V31.3808H88.168V33H83.0859V24.7032H88.168V26.3223H85.1069Z" fill="#23254C" />
                    </Svg>
                  </View>
                  <View className="w-full">
                    <Text>{loginVisible && errorLogin && "La cuenta con la que intentas registrarte ya existe"}</Text>
                    <Text>{!loginVisible && errorLogin && "La contraseña introducida es inválida"}</Text>
                    {loginVisible && !reset &&
                      <View>

                        <View className="rounded h-[40] mt-3 mb-8 justify-center">
                          <ReusableTextInput value={name} setValue={setName} label={'Nombre'} hideHint />
                        </View>
                        <View className="rounded h-[40] mt-3 mb-8 justify-center">
                          <ReusableTextInput value={lastname} setValue={setLastName} label={'Apellido'} hideHint />
                        </View>
                      </View>
                    }
                    <View className="mt-2">
                      <EmailInput value={email} setValue={setEmail} label={'Email'} />
                    </View>
                    {!reset &&
                      <View className="mt-3">
                        <PasswordInput value={password} setValue={setPassword} />
                      </View>
                    }
                    {reset ? null :
                      <View className="w-full">
                        <Checkbox value={savePassword} setValue={setSavePassword} label={'Recordar contraseña'} />
                      </View>
                    }
                  </View>
                  <View className="w-full items-center">
                    {!reset ?
                      <Button label={`${loginVisible ? 'Registrarse' : 'Iniciar Sesion'}`} extra={`mt-0 w-full  md:h-[65px] md:max-w-[600px] ${loginVisible ? 'md:mt-[30px]' : 'Iniciar Sesion'}`} onPress={() => handleLogin()} />
                      :

                      <Button label={`Resetear contraseña`} extra={'mt-0 w-full md:h-[65px] md:max-w-[600px]'} onPress={() => handleResetPassword()} />

                    }
                    {!loginVisible && <Button onPress={() =>
                      setReset(true)
                    } label={'¿No te acordas tu contraseña?'} extra={'w-full mt-[12px] py-0 pb-4 md:h-[65px] md:max-w-[600px] bg-transparent'} type={'secondary'} />}
                  </View>
                </View>
              }

            </LinearGradient>
            {/* <View className={`w-full  absolute bottom-0 mb-6 self-center`}> */}
            <View className={`w-full flex-row items-center justify-between px-[24px] mb-[24] ${!loginVisible ? reset ? 'mt-[230]' : 'mt-[300px]' : reset ? 'mt-[230]' : 'mt-[380px]'}`}>

              <View className="h-[1] bg-[#F0EFF8] w-[100]"></View>
              {!verification &&

                <Text className="text-base text-latoRegular">o continuar con</Text>
              }

              <View className="h-[1] bg-[#F0EFF8] w-[100]"></View>

            </View>
            <View className={`w-full flex-row items-center justify-around ${reset && 'mb-[5]'}`}>
              {!verification && (
                <>
                  <Button onPress={() => promptAsync()} socialMedia={'google'} extra={'border border-gray-300 rounded bg-white flex w-[100] h-[48] self-center pt-6'}></Button>
                  <Button onPress={() => signInWithFacebook()} socialMedia={'facebook'} extra={' border border-gray-300 rounded bg-white flex w-[100] h-[48] self-center pt-6'}></Button>
                </>
              )}
            </View>
            {!reset && <View className="flex flex-row justify-center mt-8 mb-[14px]">
              <Text className="font-latoRegular md:text-[22px] md:mb-[60px]">{!loginVisible ? '¿Todavía no tenés cuenta?' : '¿Ya tenés cuenta?'}  <Text className=" font-latoBold" onPress={() => setLoginVisible(!loginVisible)}>{!loginVisible ? 'Registrate' : 'Iniciar sesion'}</Text></Text>
            </View>}


          </ScrollView>
        </LinearGradient>
        :


        loading && <LoadingScreen /> ||
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="w-full h-full min-h-[100vh]">
          <LinearGradient colors={['#23254C', '#190C1D']} className="h-full max-h-[375px] bg-[#23254C] flex justify-center"  >




          </LinearGradient>

          <Modal visible={modal} transparent={modal} className="h-full justify-center items-center">

            <ScrollView>
              <TouchableOpacity className="absolute left-[14px] top-[64px] z-20 w-[48px] h-[48px] justify-center items-center inline-flex" onPress={() => {
                if (reset) {
                  setReset(false); // Si reset es verdadero, cambia su estado a falso
                }
                if (route.params?.verificar) {
                  setVerification(false)
                  setModal(true)
                }
                else {
                  navigation.goBack(); // Si reset es falso, vuelve a la pantalla anterior
                }
              }}>
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <G id="arrow left">
                    <Path id="XMLID 1536" d="M26.1397 16.0001C26.1397 16.5868 25.6597 17.0668 25.073 17.0668H9.49971L14.3264 21.9201C14.753 22.3468 14.753 23.0135 14.3264 23.4401C14.113 23.6535 13.8464 23.7601 13.5797 23.7601C13.313 23.7601 13.0197 23.6535 12.833 23.4401L6.19305 16.7735C5.76638 16.3468 5.76638 15.6801 6.19305 15.2801L12.833 8.61345C13.2597 8.18679 13.9264 8.18679 14.353 8.61345C14.7797 9.04012 14.7797 9.70679 14.353 10.1335L9.49971 14.9335H25.073C25.6597 14.9335 26.1397 15.4135 26.1397 16.0001Z" fill="white" />
                  </G>
                </Svg>
              </TouchableOpacity>
              <Text className="font-latoBold text-[28px] text-white ml-[24px] top-[120]">{loginVisible || verification ? "Registrarse" : "Iniciar sesión"}</Text>
              {verification ?

                <View className="bg-white px-[16px] pt-[20px] pb-[24px] flex rounded-xl self-center top-[180] gap-y-6 justify-center items-center" style={{
                  shadowColor: 'rgba(45, 54, 138, .08)',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 12,
                  elevation: 12,
                  width: '90%'
                }} >
                  <Text className="text-sm font-latoLight leading-normal">Te enviamos un código para validar tu cuenta
                    a {email}</Text>
                  <View className="rounded h-[40%]  flex-row">
                    {inputRefs.map((inputRef, index) => (
                      <TextInput
                        key={index}
                        ref={inputRef}
                        value={index === 0 ? code1 : index === 1 ? code2 : index === 2 ? code3 : code4}
                        onChangeText={(value) => handleInputChange(index, value)}
                        className="w-10 text-center font-bold text-2xl rounded bg-gray-300 mx-1 w-16 h-16"
                        maxLength={1}
                        keyboardType="default"
                      />
                    ))}
                  </View>
                  <Button label={"Validar correo"}
                    extra={`  w-[80%] md:h-[65px] md:max-w-[600px] `}
                    onPress={() => {
                      if (code1.toLocaleLowerCase() + code2.toLocaleLowerCase() + code3.toLocaleLowerCase() + code4.toLocaleLowerCase() === generateCode.toLocaleLowerCase() || user?.code === generateCode.toLocaleLowerCase()) {
                        updateCode({
                          code: "verificado",
                          succes: (a) => {
                            setModal(false),
                              navigation.navigate("ScreenEvent")
                          }
                          ,
                          loading: (a) => setLoading(true),
                          error: (a) => console.error('Error en updateCode:', a),
                        });
                      } else { setErrorCode(true) }
                    }} />
                  <Button
                    type={"secondary"}
                    label={"No recibí el código"}
                    extra={`w-full  md:h-[65px] md:max-w-[600px] `}
                    onPress={() => sendVerificationCode({ email: user?.email })} />

                </View>

                :
                <View className="bg-white px-[16px] pt-[20px] pb-[24px] flex rounded-xl self-center top-[180] gap-y-6 justify-center items-center" style={{
                  shadowColor: 'rgba(45, 54, 138, .08)',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 12,
                  elevation: 12,
                  width: '90%'
                }} >


                  <Svg width="99" height="35" viewBox="0 0 99 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M42.1621 12.3323L38.3483 10.2682V12.3323V18.7261H27.1766V12.3323V8.31348V4.21609L22.5906 1.73169V32.7816H22.8201H27.1766V22.721H38.3483V32.7816H43.5791V13.1012L42.1621 12.3323Z" fill="#231D43" />
                    <Path d="M17.225 4.12723V8.31347V12.3323V18.7261H6.05324V12.3323V10.1417L1.98449 12.3323L0.82251 12.9576V32.7816H6.05324V22.721H17.225V32.7816H21.5815H21.811V1.65991L17.225 4.12723Z" fill="#231D43" />
                    <Path d="M55.5138 1.70316V3.32234H53.3155V10H51.2945V3.32234H49.0962V1.70316H55.5138ZM63.714 1.70316V10H61.6929V6.58435H58.5491V10H56.5281V1.70316H58.5491V4.95335H61.6929V1.70316H63.714ZM67.194 3.32234V5.00062H69.9005V6.56071H67.194V8.38082H70.2551V10H65.1729V1.70316H70.2551V3.32234H67.194ZM56.7311 13.7032V22H54.7101V18.5843H51.5663V22H49.5453V13.7032H51.5663V16.9533H54.7101V13.7032H56.7311ZM62.114 22.0827C61.3339 22.0827 60.6169 21.9015 59.963 21.5391C59.3169 21.1766 58.8008 20.6723 58.4147 20.0262C58.0365 19.3723 57.8474 18.6395 57.8474 17.8279C57.8474 17.0164 58.0365 16.2875 58.4147 15.6415C58.8008 14.9954 59.3169 14.4911 59.963 14.1286C60.6169 13.7662 61.3339 13.585 62.114 13.585C62.894 13.585 63.6071 13.7662 64.2532 14.1286C64.9072 14.4911 65.4193 14.9954 65.7897 15.6415C66.1679 16.2875 66.357 17.0164 66.357 17.8279C66.357 18.6395 66.1679 19.3723 65.7897 20.0262C65.4114 20.6723 64.8993 21.1766 64.2532 21.5391C63.6071 21.9015 62.894 22.0827 62.114 22.0827ZM62.114 20.239C62.7758 20.239 63.3037 20.0184 63.6977 19.5771C64.0996 19.1359 64.3005 18.5528 64.3005 17.8279C64.3005 17.0952 64.0996 16.5121 63.6977 16.0787C63.3037 15.6375 62.7758 15.4169 62.114 15.4169C61.4442 15.4169 60.9085 15.6336 60.5066 16.0669C60.1127 16.5003 59.9157 17.0873 59.9157 17.8279C59.9157 18.5607 60.1127 19.1477 60.5066 19.589C60.9085 20.0223 61.4442 20.239 62.114 20.239ZM71.7125 22L69.9869 18.868H69.5023V22H67.4813V13.7032H70.8733C71.5273 13.7032 72.0828 13.8174 72.5398 14.0459C73.0047 14.2744 73.3514 14.5896 73.5798 14.9914C73.8083 15.3854 73.9226 15.8266 73.9226 16.3151C73.9226 16.8667 73.765 17.3591 73.4498 17.7925C73.1426 18.2258 72.6856 18.5331 72.0789 18.7144L73.9935 22H71.7125ZM69.5023 17.4379H70.7551C71.1255 17.4379 71.4012 17.3473 71.5825 17.1661C71.7716 16.9849 71.8661 16.7288 71.8661 16.3979C71.8661 16.0827 71.7716 15.8345 71.5825 15.6533C71.4012 15.472 71.1255 15.3814 70.7551 15.3814H69.5023V17.4379ZM78.1933 22.0827C77.5866 22.0827 77.0429 21.9842 76.5623 21.7873C76.0816 21.5903 75.6956 21.2987 75.404 20.9127C75.1204 20.5266 74.9707 20.0617 74.9549 19.518H77.1059C77.1375 19.8253 77.2438 20.0617 77.425 20.2272C77.6063 20.3848 77.8426 20.4635 78.1342 20.4635C78.4336 20.4635 78.67 20.3966 78.8433 20.2626C79.0167 20.1208 79.1033 19.9278 79.1033 19.6835C79.1033 19.4786 79.0324 19.3092 78.8906 19.1753C78.7566 19.0413 78.5872 18.931 78.3824 18.8444C78.1854 18.7577 77.9017 18.6592 77.5314 18.5489C76.9956 18.3834 76.5583 18.218 76.2195 18.0525C75.8807 17.887 75.5892 17.6428 75.3449 17.3197C75.1007 16.9967 74.9785 16.5751 74.9785 16.0551C74.9785 15.2829 75.2583 14.6802 75.8177 14.2468C76.3771 13.8056 77.1059 13.585 78.0042 13.585C78.9182 13.585 79.6549 13.8056 80.2143 14.2468C80.7737 14.6802 81.0731 15.2869 81.1125 16.0669H78.926C78.9103 15.799 78.8118 15.5902 78.6306 15.4405C78.4493 15.2829 78.2169 15.2042 77.9333 15.2042C77.689 15.2042 77.492 15.2711 77.3423 15.4051C77.1926 15.5311 77.1178 15.7163 77.1178 15.9606C77.1178 16.2285 77.2438 16.4373 77.496 16.587C77.7481 16.7367 78.1421 16.8982 78.6778 17.0715C79.2136 17.2528 79.647 17.4261 79.9779 17.5916C80.3167 17.757 80.6083 17.9973 80.8525 18.3125C81.0968 18.6277 81.2189 19.0335 81.2189 19.5299C81.2189 20.0026 81.0968 20.432 80.8525 20.8181C80.6161 21.2042 80.2695 21.5115 79.8125 21.74C79.3555 21.9685 78.8157 22.0827 78.1933 22.0827ZM84.4837 15.3223V17.0006H87.1902V18.5607H84.4837V20.3808H87.5448V22H82.4627V13.7032H87.5448V15.3223H84.4837ZM91.8588 22.0827C91.2521 22.0827 90.7085 21.9842 90.2278 21.7873C89.7472 21.5903 89.3611 21.2987 89.0696 20.9127C88.7859 20.5266 88.6362 20.0617 88.6205 19.518H90.7715C90.803 19.8253 90.9094 20.0617 91.0906 20.2272C91.2718 20.3848 91.5082 20.4635 91.7997 20.4635C92.0991 20.4635 92.3355 20.3966 92.5089 20.2626C92.6822 20.1208 92.7689 19.9278 92.7689 19.6835C92.7689 19.4786 92.698 19.3092 92.5561 19.1753C92.4222 19.0413 92.2528 18.931 92.0479 18.8444C91.851 18.7577 91.5673 18.6592 91.197 18.5489C90.6612 18.3834 90.2239 18.218 89.8851 18.0525C89.5463 17.887 89.2547 17.6428 89.0105 17.3197C88.7662 16.9967 88.6441 16.5751 88.6441 16.0551C88.6441 15.2829 88.9238 14.6802 89.4832 14.2468C90.0427 13.8056 90.7715 13.585 91.6697 13.585C92.5837 13.585 93.3204 13.8056 93.8799 14.2468C94.4393 14.6802 94.7387 15.2869 94.7781 16.0669H92.5916C92.5758 15.799 92.4774 15.5902 92.2961 15.4405C92.1149 15.2829 91.8825 15.2042 91.5988 15.2042C91.3546 15.2042 91.1576 15.2711 91.0079 15.4051C90.8582 15.5311 90.7833 15.7163 90.7833 15.9606C90.7833 16.2285 90.9094 16.4373 91.1615 16.587C91.4137 16.7367 91.8076 16.8982 92.3434 17.0715C92.8792 17.2528 93.3126 17.4261 93.6435 17.5916C93.9823 17.757 94.2738 17.9973 94.5181 18.3125C94.7623 18.6277 94.8845 19.0335 94.8845 19.5299C94.8845 20.0026 94.7623 20.432 94.5181 20.8181C94.2817 21.2042 93.935 21.5115 93.478 21.74C93.021 21.9685 92.4813 22.0827 91.8588 22.0827ZM56.7311 24.7032V33H54.7101V29.5843H51.5663V33H49.5453V24.7032H51.5663V27.9533H54.7101V24.7032H56.7311ZM62.114 33.0827C61.3339 33.0827 60.6169 32.9015 59.963 32.5391C59.3169 32.1766 58.8008 31.6723 58.4147 31.0262C58.0365 30.3723 57.8474 29.6395 57.8474 28.8279C57.8474 28.0164 58.0365 27.2875 58.4147 26.6415C58.8008 25.9954 59.3169 25.4911 59.963 25.1286C60.6169 24.7662 61.3339 24.585 62.114 24.585C62.894 24.585 63.6071 24.7662 64.2532 25.1286C64.9072 25.4911 65.4193 25.9954 65.7897 26.6415C66.1679 27.2875 66.357 28.0164 66.357 28.8279C66.357 29.6395 66.1679 30.3723 65.7897 31.0262C65.4114 31.6723 64.8993 32.1766 64.2532 32.5391C63.6071 32.9015 62.894 33.0827 62.114 33.0827ZM62.114 31.239C62.7758 31.239 63.3037 31.0184 63.6977 30.5771C64.0996 30.1359 64.3005 29.5528 64.3005 28.8279C64.3005 28.0952 64.0996 27.5121 63.6977 27.0787C63.3037 26.6375 62.7758 26.4169 62.114 26.4169C61.4442 26.4169 60.9085 26.6336 60.5066 27.0669C60.1127 27.5003 59.9157 28.0873 59.9157 28.8279C59.9157 29.5607 60.1127 30.1477 60.5066 30.589C60.9085 31.0223 61.4442 31.239 62.114 31.239ZM69.4669 24.7032V29.6671C69.4669 30.1635 69.589 30.5456 69.8333 30.8135C70.0775 31.0814 70.436 31.2154 70.9088 31.2154C71.3815 31.2154 71.744 31.0814 71.9961 30.8135C72.2483 30.5456 72.3743 30.1635 72.3743 29.6671V24.7032H74.3954V29.6553C74.3954 30.3959 74.2378 31.0223 73.9226 31.5345C73.6074 32.0466 73.1819 32.4327 72.6462 32.6927C72.1183 32.9527 71.5273 33.0827 70.8733 33.0827C70.2194 33.0827 69.6323 32.9567 69.1123 32.7045C68.6002 32.4445 68.1944 32.0584 67.895 31.5463C67.5956 31.0262 67.4459 30.3959 67.4459 29.6553V24.7032H69.4669ZM78.8165 33.0827C78.2098 33.0827 77.6662 32.9842 77.1855 32.7873C76.7049 32.5903 76.3188 32.2987 76.0273 31.9127C75.7436 31.5266 75.5939 31.0617 75.5782 30.518H77.7292C77.7607 30.8253 77.8671 31.0617 78.0483 31.2272C78.2295 31.3848 78.4659 31.4635 78.7574 31.4635C79.0568 31.4635 79.2932 31.3966 79.4666 31.2626C79.6399 31.1208 79.7266 30.9278 79.7266 30.6835C79.7266 30.4786 79.6557 30.3092 79.5138 30.1753C79.3799 30.0413 79.2105 29.931 79.0056 29.8444C78.8086 29.7577 78.525 29.6592 78.1547 29.5489C77.6189 29.3834 77.1816 29.218 76.8428 29.0525C76.504 28.887 76.2124 28.6428 75.9682 28.3197C75.7239 27.9967 75.6018 27.5751 75.6018 27.0551C75.6018 26.2829 75.8815 25.6802 76.4409 25.2468C77.0004 24.8056 77.7292 24.585 78.6274 24.585C79.5414 24.585 80.2781 24.8056 80.8376 25.2468C81.397 25.6802 81.6964 26.2869 81.7358 27.0669H79.5493C79.5335 26.799 79.435 26.5902 79.2538 26.4405C79.0726 26.2829 78.8402 26.2042 78.5565 26.2042C78.3123 26.2042 78.1153 26.2711 77.9656 26.4051C77.8159 26.5311 77.741 26.7163 77.741 26.9606C77.741 27.2285 77.8671 27.4373 78.1192 27.587C78.3714 27.7367 78.7653 27.8982 79.3011 28.0715C79.8369 28.2528 80.2702 28.4261 80.6012 28.5916C80.94 28.757 81.2315 28.9973 81.4758 29.3125C81.72 29.6277 81.8422 30.0335 81.8422 30.5299C81.8422 31.0026 81.72 31.432 81.4758 31.8181C81.2394 32.2042 80.8927 32.5115 80.4357 32.74C79.9787 32.9685 79.439 33.0827 78.8165 33.0827ZM85.1069 26.3223V28.0006H87.8135V29.5607H85.1069V31.3808H88.168V33H83.0859V24.7032H88.168V26.3223H85.1069Z" fill="#23254C" />
                  </Svg>
                  <View className="w-full">
                    <Text>{loginVisible && errorLogin && "La cuenta con la que intentas registrarte ya existe"}</Text>
                    <Text>{!loginVisible && errorLogin && "La contraseña introducida es invalida"}</Text>
                    {loginVisible &&
                      <>
                        <View className=" rounded h-[40] mt-3 mb-8 justify-center">
                          <ReusableTextInput value={name} setValue={setName} label={'Nombre'} />
                        </View>
                        <View className=" rounded h-[40] mt-3 mb-8 justify-center">
                          <ReusableTextInput value={lastname} setValue={setLastName} label={'Apellido'} />
                        </View>
                      </>
                    }
                    <View className="mb-[16px]">
                      <EmailInput value={email} setValue={setEmail} label={'Email'} />
                    </View>
                    {!reset &&
                      <PasswordInput value={password} setValue={setPassword} />
                    }
                    {!reset &&
                      loginVisible ?
                      <View className="pr-4">
                        <Checkbox value={agreeTerms} setValue={setAgreeTerms} label={'Estoy de acuerdo con los Términos y condiciones.'} mt={6} />
                        <Checkbox value={receiveNews} setValue={setReceiveNews} label={'No quiero recibir newsletter.'} />
                      </View>
                      :
                      <View className="w-full">
                        {!reset &&
                          <Checkbox value={savePassword} setValue={setSavePassword} label={'Recordar contraseña'} />
                        }
                      </View>
                    }

                  </View>

                  <View className="w-full">
                    {!reset ?
                      <Button label={loginVisible ? "Registrarse" : "Iniciar sesión"} extra={'mt-0 w-full'} onPress={() => handleLogin()} />
                      :
                      <Button label={"Restablecer contraseña"} extra={'mt-0 w-full'} onPress={() => handleResetPassword()} />

                    }
                    {!reset &&
                      <Button onPress={() => {
                        setReset(true)
                      }}
                        label={'¿No te acordas tu contraseña?'} extra={'w-full mt-[12px] py-0 pb-4 bg-transparent'} type={'secondary'} />
                    }
                  </View>
                </View>
              }

              {!verification &&
                <>
                  <View className={`w-full flex-row items-center justify-between px-[24px] mb-[24] ${!loginVisible ? 'mt-[200px]' : 'mt-[200px]'}`}>
                    <View className="h-[1] bg-[#F0EFF8] w-[100]"></View>
                    <Text className="text-base text-latoRegular">o continuar con</Text>
                    <View className="h-[1] bg-[#F0EFF8] w-[100]"></View>
                  </View>
                  <View className="w-full flex-row items-center justify-around">
                    <Button onPress={() => promptAsync()} socialMedia={'google'} extra={' border  border-gray-300 rounded bg-white flex w-[100] mx-[6] h-[48] self-center pt-6'}></Button>
                    <Button onPress={() => signInWithApple()} socialMedia={'apple'} extra={' border border-gray-300 rounded bg-white flex w-[100] mx-[6] h-[48] self-center pt-6'}></Button>
                    <Button onPress={() => signInWithFacebook()} socialMedia={'facebook'} extra={' border  border-gray-300 rounded bg-white flex w-[100] h-[48] self-center pt-6'}></Button>
                  </View>
                </>}



              {!reset && <View className="flex flex-row justify-center mt-8 ">
                <Text className="font-latoRegular md:text-[22px] md:mb-[60px]">{!loginVisible ? '¿Todavía no tenés cuenta?' : '¿Ya tenés cuenta?'}  <Text className=" font-latoBold" onPress={() => setLoginVisible(!loginVisible)}>{!loginVisible ? 'Registrate' : 'Iniciar sesion'}</Text></Text>
              </View>}
            </ScrollView>
          </Modal>
        </LinearGradient>
      }{

      }
    </>
  )
}
