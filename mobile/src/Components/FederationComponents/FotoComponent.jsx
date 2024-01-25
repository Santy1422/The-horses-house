import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Modal, Image} from 'react-native';
import { BlurView } from 'expo-blur';
import { Svg , Path } from 'react-native-svg';
import { useImage } from '../../CustomHooks.jsx/useImage';
import Button from '../Reusable/Button';
import { useNavigation } from '@react-navigation/native';
import { setearJinete } from '../../Redux/ReducerCart';
import { setearCaballo } from '../../Redux/ReducerCart';
import { useDispatch } from 'react-redux';

// ...

function FotoComponent({modalVisible, setModalVisible, jinete, setJinete, caballo, setCaballo}) {

  const { url, uploadImage } = useImage();
  const [frente, setFrente] = useState(null)
  const [dorso, setDorso] = useState(null)
  const navigation = useNavigation()
  const dispatch = useDispatch() 
    
  

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (url !== '' && frente === 'frente'){
      setFrente(url)
    }
    if (url !== '' && dorso === 'dorso'){
      setDorso(url)
    }
  },[url])

  useEffect(() => {
    setJinete({ ...jinete, fotoFrente: frente, fotoDorso: dorso })  
  },[frente, dorso])

  
  const handleImageFrente = async () => {
    setFrente('frente')
    try {      
      await uploadImage();      
    } catch (error) {
      console.error('Error al cargar la imagen:', error.message);
    }
  };

  const handleImageDorso = async () => {
    setDorso('dorso')
    try {      
      await uploadImage();      
    } catch (error) {
      console.error('Error al cargar la imagen:', error.message);
    }
  };

  const pagar = () => {
    dispatch(setearJinete({jinete: jinete, precio: 100000}))
    if (caballo && caballo.nombreCaballo !== '') {
      dispatch(setearCaballo(caballo))
    }
    navigation.navigate('CheckoutScreen')
  }

  return (
    <ScrollView className="bg-white h-full">
      {/* ... Tu contenido actual */}


      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide" // Puedes personalizar la animación aquí
        onRequestClose={closeModal}
      >
          <View className=' flex flex-1 justify-end'>
          <BlurView          
          className='blur flex flex-1 justify-end items-center '
          intensity={80}
          tint='dark'
          blurReductionFactor={15}
          
          
        >
          <View className='bg bg-white rounded-md w-full px-6 pt-6 h-[350px]'>
            <View className='header flex flex-row justify-between mb-12'>
              <Text className="titulo font-latoBold text-lg leading-[25] text-[#23254C] ">Carga las fotos de tu DNI</Text>
              <TouchableOpacity onPress={closeModal}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path d="M18.5297 17.4707C18.8227 17.7637 18.8227 18.2388 18.5297 18.5318C18.3837 18.6778 18.1917 18.7517 17.9997 18.7517C17.8077 18.7517 17.6158 18.6788 17.4698 18.5318L11.9997 13.0617L6.52975 18.5318C6.38375 18.6778 6.19175 18.7517 5.99975 18.7517C5.80775 18.7517 5.61575 18.6788 5.46975 18.5318C5.17675 18.2388 5.17675 17.7637 5.46975 17.4707L10.9398 12.0008L5.46975 6.53079C5.17675 6.23779 5.17675 5.76275 5.46975 5.46975C5.76275 5.17675 6.23775 5.17675 6.53075 5.46975L12.0008 10.9398L17.4707 5.46975C17.7637 5.17675 18.2387 5.17675 18.5317 5.46975C18.8247 5.76275 18.8247 6.23779 18.5317 6.53079L13.0617 12.0008L18.5297 17.4707Z" fill="#929291"/>
                </Svg>
              </TouchableOpacity>
            </View>
            
            {/* Fila de botones de imágenes */}
            <View className='contenedorBotones flex flex-row gap-x-4'>
              
              {frente === null ?  <TouchableOpacity onPress={handleImageFrente} className='frente rounded h-[182px] border border-[#D1DADA] flex flex-1 flex-col p-4  justify-center gap-y-2 items-start'>
                
                  <Svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <Path d="M15.7605 21.0876C13.4452 21.0876 11.5622 19.2028 11.5622 16.8875C11.5622 14.5723 13.4452 12.6875 15.7605 12.6875C18.0757 12.6875 19.9605 14.5723 19.9605 16.8875C19.9605 19.2028 18.0757 21.0876 15.7605 21.0876ZM15.7605 15.3125C14.8925 15.3125 14.1872 16.0195 14.1872 16.8875C14.1872 17.7555 14.8925 18.4626 15.7605 18.4626C16.6285 18.4626 17.3355 17.7555 17.3355 16.8875C17.3355 16.0195 16.6285 15.3125 15.7605 15.3125ZM21 29.3125C20.2755 29.3125 19.6875 28.7245 19.6875 28V27.4698C19.6875 26.2098 18.8178 24.9375 16.8736 24.9375H14.6283C12.684 24.9375 11.8142 26.2098 11.8142 27.4698V28C11.8142 28.7245 11.2262 29.3125 10.5017 29.3125C9.77721 29.3125 9.18921 28.7245 9.18921 28V27.4698C9.18921 24.9078 11.0565 22.3125 14.6283 22.3125H16.8736C20.4453 22.3125 22.3125 24.906 22.3125 27.4698V28C22.3125 28.7245 21.7245 29.3125 21 29.3125ZM31.5 35.4375H10.5C6.2685 35.4375 3.9375 33.1065 3.9375 28.875V13.125C3.9375 8.8935 6.2685 6.5625 10.5 6.5625H31.5C35.7315 6.5625 38.0625 8.8935 38.0625 13.125V28.875C38.0625 33.1065 35.7315 35.4375 31.5 35.4375ZM10.5 9.1875C7.74025 9.1875 6.5625 10.3652 6.5625 13.125V28.875C6.5625 31.6348 7.74025 32.8125 10.5 32.8125H31.5C34.2598 32.8125 35.4375 31.6348 35.4375 28.875V13.125C35.4375 10.3652 34.2598 9.1875 31.5 9.1875H10.5ZM32.8125 17.3915C32.8125 16.667 32.2245 16.079 31.5 16.079H24.5C23.7755 16.079 23.1875 16.667 23.1875 17.3915C23.1875 18.116 23.7755 18.704 24.5 18.704H31.5C32.2245 18.704 32.8125 18.116 32.8125 17.3915ZM32.725 24.5C32.725 23.7755 32.137 23.1875 31.4125 23.1875H26.1625C25.438 23.1875 24.85 23.7755 24.85 24.5C24.85 25.2245 25.438 25.8125 26.1625 25.8125H31.4125C32.137 25.8125 32.725 25.2245 32.725 24.5Z" fill="#25314C"/>
                  </Svg>
                  <Text className='frenteText font-latoBold text-sm leading-5 text-[#23254C]'>Subir frente</Text>    
                
              </TouchableOpacity>
              :  
                <View className='frente rounded h-[182px] border border-[#D1DADA] flex flex-1 flex-col px-4 py-2 gap-y-2 items-center'>
                  <View className='flex flex-row justify-between w-full'>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Path d="M12 2.16602H4C2.388 2.16602 1.5 3.05402 1.5 4.66602V11.3327C1.5 12.9447 2.388 13.8327 4 13.8327H12C13.612 13.8327 14.5 12.9447 14.5 11.3327V4.66602C14.5 3.05402 13.612 2.16602 12 2.16602ZM4 3.16602H12C13.0513 3.16602 13.5 3.61468 13.5 4.66602V8.79199L10.8267 6.1193C10.3867 5.67864 9.61334 5.67864 9.17334 6.1193L6 9.29199L5.49333 8.78597C5.05333 8.3453 4.28001 8.3453 3.84001 8.78597L2.5 10.126V4.66602C2.5 3.61468 2.94867 3.16602 4 3.16602ZM12 12.8327H4C3.01867 12.8327 2.56798 12.4353 2.51131 11.528L4.54663 9.49268C4.6313 9.40868 4.7013 9.40868 4.78597 9.49268L5.41203 10.1187C5.72336 10.4307 6.27602 10.43 6.58602 10.1187L9.87931 6.82536C9.96398 6.74136 10.034 6.74136 10.1187 6.82536L13.4987 10.2054V11.3327C13.5 12.384 13.0513 12.8327 12 12.8327ZM4.5 5.99935C4.5 5.53935 4.87333 5.16602 5.33333 5.16602C5.79333 5.16602 6.16667 5.53935 6.16667 5.99935C6.16667 6.45935 5.79333 6.83268 5.33333 6.83268C4.87333 6.83268 4.5 6.45935 4.5 5.99935Z" fill="#231D43"/>
                    </Svg>
                    <View className='label flex flex-row gap-x-1'>
                      <Text className='label font-latoRegular text-sm text-[#353535]'>Frente</Text>
                      { frente === null || frente === 'frente' ?                       
                       <Text> ... </Text>
                      :
                      <View className='containercheck flex flex-row justify-center items-center bg-[#23254C] rounded-full p-1'>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                          <Path d="M8.83341 2.5L4.25008 7.08333L2.16675 5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>  
                      </View>
                      }
                    </View>
                  </View>
                  <Image source={frente !== null && frente !== 'frente' && {uri: frente}} className='frente w-full h-[100px] rounded'></Image>                  
                  <Text className='frenteText font-latoBold text-sm leading-5 text-[#23254C]'>{ frente === null || frente === 'frente' ? 'cargando...' : 'cargada' }</Text>
                </View>            
              }

            {dorso === null ?  <TouchableOpacity onPress={handleImageDorso} className='frente rounded h-[182px] border border-[#D1DADA] flex flex-1 flex-col p-4  justify-center gap-y-2 items-start'>
                
                <Svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <Path d="M15.7605 21.0876C13.4452 21.0876 11.5622 19.2028 11.5622 16.8875C11.5622 14.5723 13.4452 12.6875 15.7605 12.6875C18.0757 12.6875 19.9605 14.5723 19.9605 16.8875C19.9605 19.2028 18.0757 21.0876 15.7605 21.0876ZM15.7605 15.3125C14.8925 15.3125 14.1872 16.0195 14.1872 16.8875C14.1872 17.7555 14.8925 18.4626 15.7605 18.4626C16.6285 18.4626 17.3355 17.7555 17.3355 16.8875C17.3355 16.0195 16.6285 15.3125 15.7605 15.3125ZM21 29.3125C20.2755 29.3125 19.6875 28.7245 19.6875 28V27.4698C19.6875 26.2098 18.8178 24.9375 16.8736 24.9375H14.6283C12.684 24.9375 11.8142 26.2098 11.8142 27.4698V28C11.8142 28.7245 11.2262 29.3125 10.5017 29.3125C9.77721 29.3125 9.18921 28.7245 9.18921 28V27.4698C9.18921 24.9078 11.0565 22.3125 14.6283 22.3125H16.8736C20.4453 22.3125 22.3125 24.906 22.3125 27.4698V28C22.3125 28.7245 21.7245 29.3125 21 29.3125ZM31.5 35.4375H10.5C6.2685 35.4375 3.9375 33.1065 3.9375 28.875V13.125C3.9375 8.8935 6.2685 6.5625 10.5 6.5625H31.5C35.7315 6.5625 38.0625 8.8935 38.0625 13.125V28.875C38.0625 33.1065 35.7315 35.4375 31.5 35.4375ZM10.5 9.1875C7.74025 9.1875 6.5625 10.3652 6.5625 13.125V28.875C6.5625 31.6348 7.74025 32.8125 10.5 32.8125H31.5C34.2598 32.8125 35.4375 31.6348 35.4375 28.875V13.125C35.4375 10.3652 34.2598 9.1875 31.5 9.1875H10.5ZM32.8125 17.3915C32.8125 16.667 32.2245 16.079 31.5 16.079H24.5C23.7755 16.079 23.1875 16.667 23.1875 17.3915C23.1875 18.116 23.7755 18.704 24.5 18.704H31.5C32.2245 18.704 32.8125 18.116 32.8125 17.3915ZM32.725 24.5C32.725 23.7755 32.137 23.1875 31.4125 23.1875H26.1625C25.438 23.1875 24.85 23.7755 24.85 24.5C24.85 25.2245 25.438 25.8125 26.1625 25.8125H31.4125C32.137 25.8125 32.725 25.2245 32.725 24.5Z" fill="#25314C"/>
                </Svg>
                <Text className='frenteText font-latoBold text-sm leading-5 text-[#23254C]'>Subir dorso</Text>    
              
            </TouchableOpacity>
            :  
              <View className='frente rounded h-[182px] border border-[#D1DADA] flex flex-1 flex-col px-4 py-2 gap-y-2 items-center'>
                <View className='flex flex-row justify-between w-full'>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Path d="M12 2.16602H4C2.388 2.16602 1.5 3.05402 1.5 4.66602V11.3327C1.5 12.9447 2.388 13.8327 4 13.8327H12C13.612 13.8327 14.5 12.9447 14.5 11.3327V4.66602C14.5 3.05402 13.612 2.16602 12 2.16602ZM4 3.16602H12C13.0513 3.16602 13.5 3.61468 13.5 4.66602V8.79199L10.8267 6.1193C10.3867 5.67864 9.61334 5.67864 9.17334 6.1193L6 9.29199L5.49333 8.78597C5.05333 8.3453 4.28001 8.3453 3.84001 8.78597L2.5 10.126V4.66602C2.5 3.61468 2.94867 3.16602 4 3.16602ZM12 12.8327H4C3.01867 12.8327 2.56798 12.4353 2.51131 11.528L4.54663 9.49268C4.6313 9.40868 4.7013 9.40868 4.78597 9.49268L5.41203 10.1187C5.72336 10.4307 6.27602 10.43 6.58602 10.1187L9.87931 6.82536C9.96398 6.74136 10.034 6.74136 10.1187 6.82536L13.4987 10.2054V11.3327C13.5 12.384 13.0513 12.8327 12 12.8327ZM4.5 5.99935C4.5 5.53935 4.87333 5.16602 5.33333 5.16602C5.79333 5.16602 6.16667 5.53935 6.16667 5.99935C6.16667 6.45935 5.79333 6.83268 5.33333 6.83268C4.87333 6.83268 4.5 6.45935 4.5 5.99935Z" fill="#231D43"/>
                  </Svg>
                  <View className='label flex flex-row gap-x-1'>
                    <Text className='label font-latoRegular text-sm text-[#353535]'>Dorso</Text>
                    { dorso === null || dorso === 'dorso' ?                       
                     <Text> ... </Text>
                    :
                    <View className='containercheck flex flex-row justify-center items-center bg-[#23254C] rounded-full p-1'>
                      <Svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                        <Path d="M8.83341 2.5L4.25008 7.08333L2.16675 5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>  
                    </View>
                    }
                  </View>
                </View>
                <Image source={dorso !== null && dorso !== 'dorso' && {uri: dorso}} className='frente w-full h-[100px] rounded'></Image>                  
                <Text className='frenteText font-latoBold text-sm leading-5 text-[#23254C]'>{ dorso === null || dorso === 'dorso' ? 'cargando...' : 'cargada' }</Text>
              </View>            
            }

          </View>
          <View className='containerButton flex flex-col justify-center items-center mt-4'>

            <Button label={'ir a pagar'} onPress={pagar} disabled={((dorso !== null && dorso !== 'dorso' ) && (frente !== null && frente !== 'frente')) ? false : true }  />
          </View>
            
        </View>
        </BlurView>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default FotoComponent