import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';


const ModalCheckout = ({ isVisible, onClose }) => {

  const navigation = useNavigation()

  const federarse = () => {
    onClose()
    navigation.push('Federacion')
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      className='main px-0 mx-0 py-0 my-0 '

    >
      <View className='contenedorBlur flex flex-1 w-full'>
        <BlurView
          className='blur flex flex-1 justify-end items-center '
          intensity={50}
          tint='light'
          blurReductionFactor={15}
        >
          <View className="w-full h-full justify-end" style={{ backgroundColor: 'rgba(52, 64, 84, 0.6)' }}>
            <View className='modal flex flex-col h-[437px] px-6 py-4 rounded-[10px] bg-white shadow-xl shadow-slate-500 w-full md:px-[100px]'>
              <View className='header flex flex-col gap-5 self-stretch'>
                <Image source={require('../../images/fea.png')} className=" w-[90.42] h-[90.42] md:mb-[20px]" />
                <Text className='textoPregunto font-latoRegular text-lg leading-7 mt-[20] mb-[24] text-[#2E2E38] md:text-[34px] md:pt-[10px]'>¿Estás federado?</Text>
              </View>
              <View className='contenedorParrafo flex flex-col gap-3 mb-2 '>
                <Text className='parrafo font-latoRegular text-base leading-6 text-[#2E2E38] md:text-[22px]'>Vos y tu caballo tienen que estar federados para continuar. </Text>
                <Text className='parrafo font-latoRegular text-base leading-6 text-[#2E2E38] md:text-[22px]'>Si no lo estás, pueden multarte y privarte de competir en esta fecha.  </Text>
              </View>
              <View className='contenedorBotones flex flex-row py-4 px-[24] w-screen justify-between absolute bottom-[16px] md:px-[100px]'>
                <TouchableOpacity onPress={onClose} className="w-[48%]">
                  <View className='botonFedere flex items-center justify-center border rounded border-[#C3C3CB] h-10 flex-grow md:h-16'>
                    <Text className='text font-latoBold text-sm leading-5 text-[#2E2E38] md:text-[25px] md:pt-[5px]'>Ya me federé</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={federarse} className="w-[48%]">
                  <View className='botonFedere flex items-center justify-center border rounded border-[#23254C] bg-[#23254C] h-10 flex-grow md:h-16'>
                    <Text className='text font-latoBold text-sm leading-5 text-white md:text-[25px] md:pt-[5px]'>Quiero federarme</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ModalCheckout;


