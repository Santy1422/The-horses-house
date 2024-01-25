import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import Button from '../../Components/Reusable/Button'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { handlePayment } from '../../../auth/pagosPeticiones'
import { useCheckout } from '../../CustomHooks.jsx/useCheckout'
import { PaymentStatus } from './PaymentStatus'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { BackArrow } from '../Reusable/BackArrow'

export const CashPayCheckout = ({ setSelectedToRender, evento, prueba1, prueba2, preciototal, finishPruchase, eventId, federrarJinete }) => {
    const { visible, setVisible, success, setSuccess, codigo, setCodigo } = useCheckout()
    const [generatingCode, setGeneratingCode] = useState(false)
    const navigation = useNavigation()

    const handlePay = async () => {
        setGeneratingCode(true)
        let token = await AsyncStorage.getItem("token");

        await handlePayment({
            token,
            payment: finishPruchase,
            codigo: codigo,
            type: 'efectivo',
            succes: (resData) => {
                console.log(resData.inscriptos)
                // setCodigo(resData.inscriptos[resData.inscriptos.length - 1].pago)
                setSuccess(true)
                setVisible(!visible)
                navigation.navigate('ScreenEvent')
            },
            loading: (l) => console.log(l),
            error: (e) => console.log(e)
        })
    }
    console.log(federrarJinete)
    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className='h-full justify-between'>
            <BackArrow position={'top-[71] left-[24]'} ></BackArrow>
            <Text className="text-center text-lg text-labelDarkBlue font-latoBold mt-[78px] mb-[41px] md:text-[34px] md:mb-[61px] md:pt-[6px] md:mt-[90px]">Efectivo</Text>
            <View className='p-4'>
                <View className="items-center">
                    <Text className="font-latoBold text-base text-labelDarkBlue mb-8 md:text-[34px] md:pt-[10px]">{evento && evento.nombreDelEvento}</Text>
                    {success ? <Text className="font-latoRegular text-center text-sm text-labelDarkBlue mb-8 md:text-[22px]">Tienes un puesto reservado en la competencia <Text className='font-latoBold'>para terminar de completar la inscripción deberá pagar</Text></Text> : <Text className="font-latoBold text-sm text-labelDarkBlue md:text-[22px]">Total a pagar</Text>}
                    <Text className="font-latoBold text-[28px] text-labelDarkBlue md:text-[34px] md:mt-[16px]">
                        {preciototal}
                    </Text>
                </View>
            </View>

            {!success &&
                <View className='p-4 bg-white fixed bottom-0 rounded-t-2xl gap-y-4 md:px-[100px]' style={{
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 10,
                    elevation: 30,
                }}>
                    <View>
                        <Text className="font-latoBold text-base md:text-[34px] md:pt-[10px]">Resumen</Text>
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

                    <View className='flex-row justify-between mb-4'>
                        <Text className="font-latoBold text-lg md:text-[30px]">Monto Total</Text>
                        <Text className="font-latoBold text-lg md:text-[30px]">{preciototal},00ARS</Text>
                    </View>
                    {generatingCode ?
                            <Button label="Generando..." extra="w-full mb-4 md:h-16" />
                        :
                            <Button label="Generar codigo" extra="w-full mb-4 md:h-16" onPress={handlePay} />
                    }
                </View>
            }

            {success &&
                <ScrollView>
                    <View className='p-4 gap-y-5'>
                        <View className='p-6 bg-white rounded-[10px] shadow justify-center items-center gap-y-2.5'>
                            <View>
                                <Image source={require('../../images/QR.png')}></Image>
                            </View>
                            <View>
                                <Text className='text-center text-labelDarkBlue text-sm font-latoRegular leading-tight'>Código de pago</Text>
                            </View>
                            <View>
                                <Text className='text-center text-labelDarkBlue text-2xl font-latoBold leading-loose'>{codigo}</Text>
                            </View>
                            <View>
                                <Text className='text-center text-labelDarkBlue text-sm font-latoRegular leading-tight'>Dirección de pago</Text>
                            </View>
                            <View>
                                <Text className='text-center text-labelDarkBlue text-sm font-latoBold leading-tight'>Jockey Club Rosario, Eva Perón 8080 Rosario, Santa Fe</Text>
                            </View>
                        </View>

                        <View className='w-full'>
                            <Button label="Descargar como imagen" extra="w-full" />
                        </View>
                        <View className='w-full items-center'>
                            <TouchableOpacity>
                                <Text className="text-labelDarkBlue text-sm font-latoBold leading-tight">Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View></ScrollView>


            }

            <PaymentStatus visible={visible} setVisible={setVisible} status="pendiente" />
        </LinearGradient>
    )
}
