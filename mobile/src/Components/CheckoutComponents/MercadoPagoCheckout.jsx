import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import Button from '../../Components/Reusable/Button'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { handlePayment } from '../../../auth/pagosPeticiones'
import { PaymentStatus } from './PaymentStatus'
import { useCheckout } from '../../CustomHooks.jsx/useCheckout'

export const MercadoPagoCheckout = ({ setSelectedToRender, evento, prueba1, prueba2, preciototal, finishPruchase, eventId, federrarJinete}) => {
    const {visible, setVisible} = useCheckout()

 

    const handlePay = async () => {
        let token = await AsyncStorage.getItem("token");

        await handlePayment({
            token,
            payment: finishPruchase,
            type: 'mp',
            succes: (resData) => {
                const redirectToLink = () => {
                    Linking.openURL(resData.body.init_point).catch((error) => {
                        console.error('Error al abrir el enlace:', error);
                    });
                };
                redirectToLink();

            },
            loading: (l) => console.log(l),
            error: (e) => console.log(e)
        })
        setVisible(!visible)
    }
  return (
    <View className='h-full justify-between'>
            <TouchableOpacity className="absolute left-[24px] top-[27px] w-11 h-11 bg-white rounded border border-stone-300 justify-center items-center inline-flex" onPress={() => setSelectedToRender('')}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C" />
                </Svg>
            </TouchableOpacity>
            <View className='h-11 justify-center items-center mt-[27px]'>
                <Text className='text-black text-lg font-latoBold'>MercadoPago</Text>
            </View>
            <View className='p-4'>
                <View className="items-center">
                    <Text className="font-latoBold text-base text-labelDarkBlue mb-8">{evento && evento.nombreDelEvento}</Text>
                    <Text className="font-latoBold text-sm text-labelDarkBlue">Total a pagar</Text>
                    <Text className="font-latoBold text-[28px] text-labelDarkBlue">{preciototal}</Text>
                </View>
            </View>

            <View className='p-4 bg-white fixed bottom-0 rounded-t-2xl gap-y-4'>
                <View>
                    <Text className="font-latoBold">Resumen</Text>
                </View>
                {federrarJinete.length > 0 &&
                        <View className='flex-row justify-between'>
                            <Text className="font-latoRegular text-sm md:text-[22px]">Federacion  de Jinete  CAT {federrarJinete?.jinete && federrarJinete?.jinete?.disciplinaJinete}</Text>
                            <Text className="font-latoRegular text-sm md:text-[22px]">{federrarJinete && federrarJinete?.precio}</Text>
                        </View>
                    }
                    {prueba1 &&

                        <View className='flex-row justify-between'>
                            <Text className="font-latoRegular text-sm md:text-[22px]">{prueba1 && prueba1.nombrePrueba}</Text>
                            <Text className="font-latoRegular text-sm md:text-[22px]">{prueba1 && prueba1.precioPrueba}</Text>
                        </View>
                    }
                    {prueba2 &&

                        <View className='flex-row justify-between'>
                            <Text className="font-latoRegular text-sm md:text-[22px]">{prueba2 && prueba2.nombrePrueba}</Text>
                            <Text className="font-latoRegular text-sm md:text-[22px]">{prueba2 && prueba2.precioPrueba}</Text>
                        </View>
                    }
                <View className='w-full mb-4'>
                    <Button label="Ir a pagar" extra="w-full" onPress={handlePay} />
                </View>
            </View>

            <PaymentStatus visible={visible} setVisible={setVisible} status="completado" />
        </View>
  )
}