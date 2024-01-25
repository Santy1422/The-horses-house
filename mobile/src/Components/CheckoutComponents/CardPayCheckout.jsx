import React from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { G, Path, Svg } from 'react-native-svg'
import Button from '../../Components/Reusable/Button'
import { PaymentStatus } from './PaymentStatus'
import { useCheckout } from '../../CustomHooks.jsx/useCheckout'

export const CardPayCheckout = ({ setSelectedToRender }) => {

    const { visible, setVisible } = useCheckout()

    return (
        <View>
            <ScrollView>
                <View className='min-h-[95.6vh] justify-between'>
                    <TouchableOpacity className="absolute left-[24px] top-[27px] w-11 h-11 bg-white rounded border border-stone-300 justify-center items-center inline-flex" onPress={() => setSelectedToRender('')}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C" />
                        </Svg>
                    </TouchableOpacity>
                    <View className='h-11 justify-center items-center mt-[27px]'>
                        <Text className='text-black text-lg font-latoBold'>Tarjeta de credito</Text>
                    </View>
                    <View className='p-4'>
                        <View className="items-center">
                            <Text className="font-latoBold text-base text-labelDarkBlue mb-8">FEI CHALLENGE - 1° Y 2° COMPETICIÓN</Text>
                            <Text className="font-latoBold text-sm text-labelDarkBlue">Total a pagar</Text>
                            <Text className="font-latoBold text-[28px] text-labelDarkBlue">42.000ARS</Text>
                        </View>

                        <View className='items-center mt-3 mb-12'>
                            <ImageBackground source={require('../../images/credit-card.png')} className="mt-[23.9px] w-[316px] h-[187.46px] justify-between rounded-[20px]">
                                <View className='mt-[17px] ml-[20px]'>
                                    <Text className='text-white text-lg font-latoBold'>MasterCard</Text>
                                </View>
                                <View className='flex-row ml-[20px] justify-between items-end mb-[10px]'>
                                    <View>
                                        <View className='flex-row gap-3'>
                                            <Text className='text-white uppercase font-latoBold'>NOMBRE Y APELLIDO</Text>
                                            <Text className='text-white '>** / **</Text>
                                        </View>
                                        <View className='mt-[8px]'>
                                            <Text className='text-white text-xl'>**** **** **** ****</Text>
                                        </View>
                                    </View>
                                    <View className='mr-[20px] p-2 items-center justify-center bg-slate-600 rounded'>
                                        <Svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="Mastercard">
                                                <Path id="Left" fill-rule="evenodd" clip-rule="evenodd" d="M14.9053 15.7287C13.3266 17.0594 11.2787 17.8628 9.04092 17.8628C4.04776 17.8628 0 13.8632 0 8.92943C0 3.99568 4.04776 -0.00390625 9.04092 -0.00390625C11.2787 -0.00390625 13.3266 0.799425 14.9053 2.13015C16.484 0.799425 18.5319 -0.00390625 20.7697 -0.00390625C25.7629 -0.00390625 29.8106 3.99568 29.8106 8.92943C29.8106 13.8632 25.7629 17.8628 20.7697 17.8628C18.5319 17.8628 16.484 17.0594 14.9053 15.7287Z" fill="#ED0006" />
                                                <Path id="Right" fill-rule="evenodd" clip-rule="evenodd" d="M14.9053 15.7287C16.8492 14.0902 18.0818 11.652 18.0818 8.92943C18.0818 6.20682 16.8492 3.76868 14.9053 2.13015C16.484 0.799423 18.5319 -0.00390625 20.7697 -0.00390625C25.7628 -0.00390625 29.8106 3.99568 29.8106 8.92943C29.8106 13.8632 25.7628 17.8628 20.7697 17.8628C18.5319 17.8628 16.484 17.0594 14.9053 15.7287Z" fill="#F9A000" />
                                                <Path id="Middle" fill-rule="evenodd" clip-rule="evenodd" d="M14.9055 15.7284C16.8494 14.0898 18.082 11.6517 18.082 8.92913C18.082 6.20654 16.8494 3.76842 14.9055 2.12988C12.9616 3.76842 11.729 6.20654 11.729 8.92913C11.729 11.6517 12.9616 14.0898 14.9055 15.7284Z" fill="#FF5E00" />
                                            </G>
                                        </Svg>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                    </View>

                    <View className='p-4 bg-white rounded-t-2xl gap-y-4'>

                        <View>
                            <Text className="font-latoBold">Resumen</Text>
                        </View>
                        <View className='flex-row justify-between'>
                            <Text className="font-latoRegular text-sm">FEI challenge 1° competición</Text>
                            <Text className="font-latoRegular text-sm">21.000ARS</Text>
                        </View>
                        <View className='flex-row justify-between'>
                            <Text className="font-latoRegular text-sm">FEI challenge 2° competición</Text>
                            <Text className="font-latoRegular text-sm">21.000ARS</Text>
                        </View>
                        <View className='flex-row justify-between'>
                            <Text className="font-latoBold text-lg">Monto Total</Text>
                            <Text className="font-latoBold text-lg">42.000ARS</Text>
                        </View>
                        <View className='w-full mb-4'>
                            <Button label="Pagar" extra="w-full" onPress={() => { setVisible(!visible) }} />
                        </View>

                    </View>

                    <PaymentStatus visible={visible} setVisible={setVisible} status="completado" />
                </View>
            </ScrollView>
        </View>
    )
}