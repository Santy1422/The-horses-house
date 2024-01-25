import { ScrollView, View, TouchableOpacity, Text, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import { Svg , Path } from 'react-native-svg';
import Button from '../../Reusable/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch , useSelector } from 'react-redux';
import { setearCaballo } from '../../../Redux/ReducerCart';


const ModalEnvioConfirmacion = ({modalEnvioConfirmacion, setModalEnvioConfirmacion, receptorCredencial, caballo}) => {
    

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const revisar = useSelector((state) => state.ReducerCart.federarCaballo)
    
    const confirmarEnRedux = () => {        
        const inscripcion = {
            caballo,
            receptorCredencial
        }        
        dispatch(setearCaballo(inscripcion))        
        setModalEnvioConfirmacion(false)
        navigation.navigate('CheckoutScreen')        
    }    
     
    
    return (
        <ScrollView className="bg-white h-full">
          
            <Modal
                transparent={true}
                visible={modalEnvioConfirmacion}
                animationType="slide" 
                 
            >
                <View className=' flex flex-1 justify-end'>
                    <BlurView          
                        className='blur flex flex-1 justify-end items-center '
                        intensity={80}
                        tint='dark'
                        blurReductionFactor={15}
                        >
                        <View className='bg bg-white rounded-md w-full px-6 pt-6 h-[622px]'>
                            <View className='header flex flex-row justify-between mb-12'>
                                <Text className="titulo font-latoBold text-lg leading-[25] text-[#23254C] ">Envio de adicionales</Text>
                                
                            </View>                
                
                            <View className="datosPersonales flex flex-col justify-center items-center  ">
                                <View className='imagen flex flex-col'>
                                    <View className='estrella1 top-6 right-6'>
                                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <Path d="M12 21.75C11.665 21.75 11.371 21.528 11.279 21.206L10.5 18.479C9.807 16.054 7.945 14.192 5.521 13.5L2.79401 12.721C2.47201 12.629 2.25 12.335 2.25 12C2.25 11.665 2.47201 11.371 2.79401 11.279L5.521 10.5C7.946 9.807 9.807 7.946 10.5 5.521L11.279 2.79401C11.371 2.47201 11.665 2.25 12 2.25C12.335 2.25 12.629 2.47201 12.721 2.79401L13.5 5.521C14.193 7.946 16.055 9.808 18.479 10.5L21.206 11.279C21.528 11.371 21.75 11.665 21.75 12C21.75 12.335 21.528 12.629 21.206 12.721L18.479 13.5C16.054 14.193 14.193 16.054 13.5 18.479L12.721 21.206C12.629 21.528 12.335 21.75 12 21.75ZM5.73001 12L5.93301 12.058C8.85901 12.894 11.106 15.141 11.943 18.068L12.001 18.27L12.059 18.068C12.896 15.141 15.142 12.895 18.069 12.058L18.27 12L18.067 11.942C15.141 11.106 12.894 8.85901 12.057 5.93201L12 5.73099L11.942 5.93301C11.105 8.86001 8.85901 11.106 5.93201 11.943L5.73001 12Z" fill="#2B2352"/>
                                        </Svg>
                                    </View>
                                    <View className='checkGigante flex flex-col justify-center items-center bg-[#2B2352] rounded-full h-[143] w-[143] '>
                                        <Svg xmlns="http://www.w3.org/2000/svg" width="123" height="123" viewBox="0 0 123 123" fill="none">
                                            <Path d="M46.129 90.9687C46.1238 90.9687 46.1187 90.9687 46.1136 90.9687C45.0886 90.9636 44.1097 90.5536 43.3871 89.8207L22.8871 69.0029C21.3957 67.491 21.4162 65.0568 22.9281 63.5654C24.44 62.0792 26.8795 62.0945 28.3657 63.6064L46.1444 81.6668L94.6576 33.1536C96.1592 31.6519 98.5936 31.6519 100.095 33.1536C101.597 34.6552 101.597 37.0897 100.095 38.5914L48.8452 89.8414C48.1277 90.564 47.1488 90.9687 46.129 90.9687Z" fill="white"/>
                                        </Svg>
                                    </View>
                                    <View className='estrella2 bottom-20 left-40'>
                                        <Svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <Path d="M9.5 17.2188C9.23479 17.2188 9.00204 17.043 8.9292 16.7881L8.3125 14.6292C7.76388 12.7094 6.28979 11.2353 4.37079 10.6875L2.21192 10.0708C1.95701 9.99796 1.78125 9.76521 1.78125 9.5C1.78125 9.23479 1.95701 9.00204 2.21192 8.9292L4.37079 8.3125C6.29058 7.76388 7.76388 6.29058 8.3125 4.37079L8.9292 2.21192C9.00204 1.95701 9.23479 1.78125 9.5 1.78125C9.76521 1.78125 9.99796 1.95701 10.0708 2.21192L10.6875 4.37079C11.2361 6.29058 12.7102 7.76467 14.6292 8.3125L16.7881 8.9292C17.043 9.00204 17.2188 9.23479 17.2188 9.5C17.2188 9.76521 17.043 9.99796 16.7881 10.0708L14.6292 10.6875C12.7094 11.2361 11.2361 12.7094 10.6875 14.6292L10.0708 16.7881C9.99796 17.043 9.76521 17.2188 9.5 17.2188ZM4.53626 9.5L4.69697 9.54593C7.01339 10.2078 8.79224 11.9866 9.45487 14.3038L9.5008 14.4637L9.5467 14.3038C10.2093 11.9866 11.9874 10.2086 14.3046 9.54593L14.4637 9.5L14.303 9.45407C11.9866 8.79224 10.2078 7.01338 9.54513 4.69617L9.5 4.53703L9.45407 4.69697C8.79145 7.01418 7.01338 8.79224 4.69617 9.45487L4.53626 9.5Z" fill="#2B2352"/>
                                        </Svg>
                                    </View>
                                    <View className='estrella3 bottom-8 right-2'>
                                        <Svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <Path d="M4 7.25C3.88833 7.25 3.79033 7.176 3.75966 7.06866L3.5 6.15967C3.269 5.35133 2.64833 4.73067 1.84033 4.5L0.931335 4.24034C0.824002 4.20967 0.75 4.11167 0.75 4C0.75 3.88833 0.824002 3.79033 0.931335 3.75966L1.84033 3.5C2.64867 3.269 3.269 2.64867 3.5 1.84033L3.75966 0.931335C3.79033 0.824002 3.88833 0.75 4 0.75C4.11167 0.75 4.20967 0.824002 4.24034 0.931335L4.5 1.84033C4.731 2.64867 5.35167 3.26933 6.15967 3.5L7.06866 3.75966C7.176 3.79033 7.25 3.88833 7.25 4C7.25 4.11167 7.176 4.20967 7.06866 4.24034L6.15967 4.5C5.35133 4.731 4.731 5.35133 4.5 6.15967L4.24034 7.06866C4.20967 7.176 4.11167 7.25 4 7.25ZM1.91 4L1.97767 4.01934C2.953 4.298 3.702 5.047 3.981 6.02266L4.00034 6.09L4.01966 6.02266C4.29866 5.047 5.04733 4.29834 6.023 4.01934L6.09 4L6.02233 3.98066C5.047 3.702 4.298 2.953 4.019 1.97734L4 1.91033L3.98066 1.97767C3.70166 2.95334 2.953 3.702 1.97734 3.981L1.91 4Z" fill="#2B2352"/>
                                        </Svg>
                                    </View>
                                </View>
                                    <Text className='listo font-latoBold text-lg leading-6 text-[#23254C]'>Listo!</Text>
                                    <Text className='parrafo font-latoRegular text-base leading-6 text-[#6D6E6D] mt-[26px] text-center px-10' >En las próximas semanas vas a recibir tu adicional en el domicilio. </Text>
                                    <Text className='parrafo font-latoRegular text-base leading-6 text-[#6D6E6D] mt-[26px]'>Ya podés continuar federandote.</Text>

                            </View>
                
                            <View className="flex items-center flex-row mt-[125px] mb-[38px] ">                                
                                <Button  label="Continuar federación " extra=" flex-1 h-11 ml-3" onPress={confirmarEnRedux}/> 
                            </View> 
                        </View>
                    </BlurView>
                </View> 
            </Modal>
        </ScrollView>
    );

}

export default ModalEnvioConfirmacion