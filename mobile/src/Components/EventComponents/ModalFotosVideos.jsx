import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Linking } from 'react-native';
import { BlurView } from 'expo-blur';
import { Svg, Path } from 'react-native-svg';
import AddCard from './AddCard';

const ModalFotosVideos = ({isVisible, setIsVisible, setFotosVideos}) => {     
  
    const [selected, setSelected] = useState('')
    const [step, setStep] = useState(0)
    const siguiente = (id) => {
        if (selected === '' ) return
        setFotosVideos(selected)
        // setStep(1)
        setIsVisible(false)
            Linking.openURL(`https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=${selected}`).catch((error) => {
                console.error('Error al abrir el enlace:', error);
            });
        };


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
            {step === 0 && 
        <View className='modal flex flex-col h-[700px] px-6 rounded-[10px] bg-white shadow-xl shadow-slate-500 w-full py-6'>
            <ScrollView>
                <View className='title flex flex-row justify-between'>
                    <View className='label flex flex-col items-start'>
                        <Text className='pack font-latoBold text-lg leading-[25] text-[#23254C] pb-4'>Suscripciones</Text>
                        <Text className='elegi font-latoRegular text-sm text-[#6D6E6D] pb-4'>Elegí la suscripción que más se ajuste a vos</Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsVisible(false)} className='cerrar'>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M18.5297 17.4698C18.8227 17.7628 18.8227 18.2378 18.5297 18.5308C18.3837 18.6768 18.1917 18.7508 17.9997 18.7508C17.8077 18.7508 17.6158 18.6778 17.4698 18.5308L11.9997 13.0608L6.52975 18.5308C6.38375 18.6768 6.19175 18.7508 5.99975 18.7508C5.80775 18.7508 5.61575 18.6778 5.46975 18.5308C5.17675 18.2378 5.17675 17.7628 5.46975 17.4698L10.9398 11.9998L5.46975 6.52981C5.17675 6.23681 5.17675 5.76177 5.46975 5.46877C5.76275 5.17577 6.23775 5.17577 6.53075 5.46877L12.0008 10.9388L17.4707 5.46877C17.7637 5.17577 18.2387 5.17577 18.5317 5.46877C18.8247 5.76177 18.8247 6.23681 18.5317 6.52981L13.0617 11.9998L18.5297 17.4698Z" fill="#929291"/>
                        </Svg>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => setSelected('2c9380848cd5bf06018cd6102ac20038')} className='card flex flex-col pb-4'>
                    <View className='borde bg-[#9FECEE] h-3 w-full rounded-t-[10px]'/>
                    <View className='packEvento w-full rounded-b-[10px] flex flex-col border border-[#D1DADA] border-t-0 px-4 pt-3 pb-4 '>
                        <Text className='evento font-latoBold text-2xl text-[#23254C] mt-[10px]'>Simple</Text>
                        <View className='precio flex flex-col gap-y-0 mt-[10px]'>
                            <View className='numeros flex flex-row'>
                                <Text className='ars font-latoBold text-[24px] text-[#23254C] leading-[59px] '>ARS</Text>
                                <Text className='ars font-latoBold text-[59px] text-[#23254C] leading-[59px] '>7.000</Text>
                            </View>
                            <Text className='eleccion font-latoRegular text-xs leading-[18px] text-[#666666]'>* a elección del jinete/amazona</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Resultados eventos del mes</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Contenido multimedia con marca de agua</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected('mensual')} className='card flex flex-col pb-4'>
                    <View className='borde bg-[#7098CE] h-3 w-full rounded-t-[10px]'/>
                    <View className='packEvento w-full rounded-b-[10px] flex flex-col border border-[#D1DADA] border-t-0 px-4 pt-3 pb-4 '>
                        <Text className='evento font-latoBold text-2xl text-[#23254C] mt-[10px] '>Premium</Text>
                        <View className='precio flex flex-col gap-y-0 mt-[10px]'>
                            <View className='numeros flex flex-row'>
                                <Text className='ars font-latoBold text-[24px] text-[#23254C] leading-[59px] '>ARS</Text>
                                <Text className='ars font-latoBold text-[59px] text-[#23254C] leading-[59px] '>12.000</Text>
                            </View>
                            <Text className='eleccion font-latoRegular text-xs leading-[18px] text-[#666666]'>* a elección del jinete/amazona</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]pb-4'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Resultados eventos del mes</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Contenido multimedia 4K</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Un pack de fotos gratis por mes</Text>
                        </View>
                        <Text className='eleccion font-latoRegular text-xs leading-[18px] text-[#666666] mt-[10px]'>* a elección del jinete/amazona</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setSelected('anual') } className='card flex flex-col pb-4'>
                    <View className='borde bg-[#7098CE] h-3 w-full rounded-t-[10px]'/>
                    <View className='packEvento w-full rounded-b-[10px] flex flex-col border border-[#D1DADA] border-t-0 px-4 pt-3 pb-4 '>
                        <Text className='evento font-latoBold text-2xl text-[#23254C] mt-[10px] '>Super premium</Text>
                        <View className='precio flex flex-col gap-y-0 mt-[10px]'>
                            <View className='numeros flex flex-row'>
                                <Text className='ars font-latoBold text-[24px] text-[#23254C] leading-[59px] '>ARS</Text>
                                <Text className='ars font-latoBold text-[59px] text-[#23254C] leading-[59px] '>100.000</Text>
                            </View>
                            <Text className='eleccion font-latoRegular text-xs leading-[18px] text-[#666666]'>* a elección del jinete/amazona</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Resultados eventos del mes</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Contenido multimedia 4K</Text>
                        </View>
                        <View className='tresfotos flex flex-row gap-x-[7px] h-7 items-center mt-[10px]'>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M6.00019 11.8332C5.99952 11.8332 5.99885 11.8332 5.99819 11.8332C5.86485 11.8325 5.73752 11.7792 5.64352 11.6839L2.97686 8.97585C2.78286 8.77918 2.78552 8.46253 2.98219 8.26853C3.17886 8.0752 3.49619 8.07719 3.68952 8.27386L6.0022 10.6232L12.3129 4.31252C12.5082 4.11718 12.8249 4.11718 13.0202 4.31252C13.2155 4.50785 13.2155 4.82454 13.0202 5.01987L6.35352 11.6865C6.26019 11.7805 6.13286 11.8332 6.00019 11.8332Z" fill="#25314C"/>
                            </Svg>
                            <Text className='label font-latoRegular text-sm text-[#666666]'>Pack de fotos ilimitados</Text>
                        </View>
                        <Text className='eleccion font-latoRegular text-xs leading-[18px] text-[#666666] mt-[10px]'>* a elección del jinete/amazona</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            {/* <StripeComponent planId={selected}/> */}
            <TouchableOpacity className={`button flex flex-col justify-center items-center rounded w-full mb-4 h-10 ${selected !== '' ? 'bg-[#23254C]' : 'bg-[#F3F2F2]'} `}> 
                <View className='continuar flex flex-row items-center '>
                    <Text className={`label font-latoBold text-base mr-2 ${selected != '' ? 'text-white' : 'text-[#BEBDBD]'}`}>Proximamente</Text>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M17.2429 10.2392C17.2113 10.3159 17.1655 10.385 17.108 10.4425L13.7747 13.7758C13.653 13.8975 13.493 13.9591 13.333 13.9591C13.173 13.9591 13.013 13.8983 12.8913 13.7758C12.6472 13.5317 12.6472 13.1358 12.8913 12.8916L15.158 10.625H3.33301C2.98801 10.625 2.70801 10.345 2.70801 9.99998C2.70801 9.65498 2.98801 9.37498 3.33301 9.37498H15.1571L12.8905 7.10834C12.6463 6.86417 12.6463 6.46831 12.8905 6.22414C13.1347 5.97997 13.5305 5.97997 13.7747 6.22414L17.108 9.55747C17.1655 9.61497 17.2113 9.68405 17.2429 9.76072C17.3063 9.91405 17.3063 10.0859 17.2429 10.2392Z" fill="#BEBDBD"/>
                    </Svg>                    
                </View>
            </TouchableOpacity>            

           
        </View>
        }
        {step === 1 && <AddCard selected={selected}/>}
        </BlurView>
      </View>
    </Modal>
  );
};

export default ModalFotosVideos;


