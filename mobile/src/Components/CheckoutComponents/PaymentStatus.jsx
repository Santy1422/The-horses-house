import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

export const PaymentStatus = ({ visible, setVisible, status }) => {
    return (
        <Modal transparent={true} visible={visible}>
            <View className='w-full p-6 h-full justify-end items-center'>

                {/* Pendiente */}

                {
                    status === 'pendiente' &&

                    <View className='w-full p-4 pt-1 gap-y-3 bg-red-50 rounded-lg border border-red-300'>

                        <View className='flex-row justify-between'>
                            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="exclamation-circle">
                                    <Path id="exclamation-circle_2" d="M10 18.9587C5.06001 18.9587 1.04167 14.9403 1.04167 10.0003C1.04167 5.06033 5.06001 1.04199 10 1.04199C14.94 1.04199 18.9583 5.06033 18.9583 10.0003C18.9583 14.9403 14.94 18.9587 10 18.9587ZM10 2.29199C5.74917 2.29199 2.29167 5.74949 2.29167 10.0003C2.29167 14.2512 5.74917 17.7087 10 17.7087C14.2508 17.7087 17.7083 14.2512 17.7083 10.0003C17.7083 5.74949 14.2508 2.29199 10 2.29199ZM10.85 12.917C10.85 12.457 10.4775 12.0837 10.0167 12.0837H10.0083C9.54835 12.0837 9.17908 12.457 9.17908 12.917C9.17908 13.377 9.55669 13.7503 10.0167 13.7503C10.4767 13.7503 10.85 13.377 10.85 12.917ZM10.625 10.0595V6.25033C10.625 5.90533 10.345 5.62533 10 5.62533C9.655 5.62533 9.375 5.90533 9.375 6.25033V10.0595C9.375 10.4045 9.655 10.6845 10 10.6845C10.345 10.6845 10.625 10.4045 10.625 10.0595Z" fill="#A40011" />
                                </G>
                            </Svg>
                            <TouchableOpacity onPress={() => { setVisible(!visible) }}>
                                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="times">
                                        <Path id="times_2" d="M15.4415 14.558C15.6856 14.8021 15.6856 15.198 15.4415 15.4422C15.3198 15.5638 15.1598 15.6255 14.9998 15.6255C14.8398 15.6255 14.6798 15.5647 14.5581 15.4422L9.99979 10.8838L5.44146 15.4422C5.31979 15.5638 5.15979 15.6255 4.99979 15.6255C4.83979 15.6255 4.67979 15.5647 4.55813 15.4422C4.31396 15.198 4.31396 14.8021 4.55813 14.558L9.11646 9.99965L4.55813 5.44134C4.31396 5.19718 4.31396 4.80132 4.55813 4.55715C4.80229 4.31298 5.19813 4.31298 5.4423 4.55715L10.0006 9.11551L14.559 4.55715C14.8031 4.31298 15.199 4.31298 15.4431 4.55715C15.6873 4.80132 15.6873 5.19718 15.4431 5.44134L10.8848 9.99965L15.4415 14.558Z" fill="#A40011" />
                                    </G>
                                </Svg>
                            </TouchableOpacity>
                        </View>

                        <View className=''>
                            <View>
                                <Text className='text-red-800 font-latoRegular leading-[18px]'>Pago pendiente</Text>
                                <Text className='text-red-600 text-sm font-latoLight leading-tight'><Text className='text-red-600 text-sm font-latoBold leading-tight'>Ya estas inscrito en el evento FEI CHALLENGE - 1° Y 2° COMPETICIÓN</Text>, terminar con el pago para poder completar el proceso.</Text>
                            </View>
                        </View>

                        <View className='flex-row gap-x-3'>
                            <TouchableOpacity>
                                <Text className='text-red-600 text-sm font-latoBold'>Continuar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text className='text-red-600 text-sm font-latoBold'>Ir a pagar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                }

                {/* Exitoso */}

                {
                    status === 'completado' &&

                    <View className='w-full p-4 pt-1 gap-y-3 bg-lime-100 rounded-lg border border-lime-500'>

                        <View className='flex-row justify-between'>
                            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="check-circle">
                                    <Path id="check-circle_2" d="M10 1.04199C5.06001 1.04199 1.04167 5.06116 1.04167 10.0003C1.04167 14.9395 5.06001 18.9587 10 18.9587C14.94 18.9587 18.9583 14.9395 18.9583 10.0003C18.9583 5.06116 14.94 1.04199 10 1.04199ZM10 17.7087C5.74917 17.7087 2.29167 14.2512 2.29167 10.0003C2.29167 5.74949 5.74917 2.29199 10 2.29199C14.2508 2.29199 17.7083 5.74949 17.7083 10.0003C17.7083 14.2512 14.2508 17.7087 10 17.7087ZM13.3583 7.61365C13.6025 7.85781 13.6025 8.25368 13.3583 8.49784L9.46918 12.387C9.34751 12.5087 9.18751 12.5703 9.02751 12.5703C8.86751 12.5703 8.70751 12.5095 8.58585 12.387L6.64167 10.4428C6.39751 10.1987 6.39751 9.8028 6.64167 9.55863C6.88584 9.31447 7.28168 9.31447 7.52584 9.55863L9.02835 11.0612L12.475 7.61451C12.7192 7.37035 13.1142 7.37031 13.3583 7.61365Z" fill="#24824D" />
                                </G>
                            </Svg>
                            <TouchableOpacity onPress={() => { setVisible(!visible) }}>
                                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="times">
                                        <Path id="times_2" d="M15.4415 14.558C15.6856 14.8021 15.6856 15.198 15.4415 15.4422C15.3198 15.5638 15.1598 15.6255 14.9998 15.6255C14.8398 15.6255 14.6798 15.5647 14.5581 15.4422L9.99979 10.8838L5.44146 15.4422C5.31979 15.5638 5.15979 15.6255 4.99979 15.6255C4.83979 15.6255 4.67979 15.5647 4.55813 15.4422C4.31396 15.198 4.31396 14.8021 4.55813 14.558L9.11646 9.99965L4.55813 5.44134C4.31396 5.19718 4.31396 4.80132 4.55813 4.55715C4.80229 4.31298 5.19813 4.31298 5.4423 4.55715L10.0006 9.11551L14.559 4.55715C14.8031 4.31298 15.199 4.31298 15.4431 4.55715C15.6873 4.80132 15.6873 5.19718 15.4431 5.44134L10.8848 9.99965L15.4415 14.558Z" fill="#24824D" />
                                    </G>
                                </Svg>
                            </TouchableOpacity>
                        </View>

                        <View className=''>
                            <View>
                                <Text className='text-green-700 font-latoRegular leading-[18px]'>Pago exitoso</Text>
                                <Text className='text-green-700 text-sm font-latoLight leading-tight'><Text className='text-green-700 text-sm font-latoBold leading-tight'>Ya estas inscrito en el evento FEI CHALLENGE - 1° Y 2° COMPETICIÓN</Text>, tu pago ha sido completado</Text>
                            </View>
                        </View>

                    </View>
                }

                {/* Rechazado */}

                {
                    status === 'rechazado' &&

                    <View className='w-full p-4 pt-1 gap-y-3 bg-red-50 rounded-lg border border-red-300'>

                        <View className='flex-row justify-between'>
                            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G id="exclamation-circle">
                                    <Path id="exclamation-circle_2" d="M10 18.9587C5.06001 18.9587 1.04167 14.9403 1.04167 10.0003C1.04167 5.06033 5.06001 1.04199 10 1.04199C14.94 1.04199 18.9583 5.06033 18.9583 10.0003C18.9583 14.9403 14.94 18.9587 10 18.9587ZM10 2.29199C5.74917 2.29199 2.29167 5.74949 2.29167 10.0003C2.29167 14.2512 5.74917 17.7087 10 17.7087C14.2508 17.7087 17.7083 14.2512 17.7083 10.0003C17.7083 5.74949 14.2508 2.29199 10 2.29199ZM10.85 12.917C10.85 12.457 10.4775 12.0837 10.0167 12.0837H10.0083C9.54835 12.0837 9.17908 12.457 9.17908 12.917C9.17908 13.377 9.55669 13.7503 10.0167 13.7503C10.4767 13.7503 10.85 13.377 10.85 12.917ZM10.625 10.0595V6.25033C10.625 5.90533 10.345 5.62533 10 5.62533C9.655 5.62533 9.375 5.90533 9.375 6.25033V10.0595C9.375 10.4045 9.655 10.6845 10 10.6845C10.345 10.6845 10.625 10.4045 10.625 10.0595Z" fill="#A40011" />
                                </G>
                            </Svg>
                            <TouchableOpacity onPress={() => { setVisible(!visible) }}>
                                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="times">
                                        <Path id="times_2" d="M15.4415 14.558C15.6856 14.8021 15.6856 15.198 15.4415 15.4422C15.3198 15.5638 15.1598 15.6255 14.9998 15.6255C14.8398 15.6255 14.6798 15.5647 14.5581 15.4422L9.99979 10.8838L5.44146 15.4422C5.31979 15.5638 5.15979 15.6255 4.99979 15.6255C4.83979 15.6255 4.67979 15.5647 4.55813 15.4422C4.31396 15.198 4.31396 14.8021 4.55813 14.558L9.11646 9.99965L4.55813 5.44134C4.31396 5.19718 4.31396 4.80132 4.55813 4.55715C4.80229 4.31298 5.19813 4.31298 5.4423 4.55715L10.0006 9.11551L14.559 4.55715C14.8031 4.31298 15.199 4.31298 15.4431 4.55715C15.6873 4.80132 15.6873 5.19718 15.4431 5.44134L10.8848 9.99965L15.4415 14.558Z" fill="#A40011" />
                                    </G>
                                </Svg>
                            </TouchableOpacity>
                        </View>

                        <View className=''>
                            <View>
                                <Text className='text-red-800 font-latoRegular leading-[18px]'>Pago rechazado</Text>
                                <Text className='text-red-600 text-sm font-latoLight leading-tight'><Text className='text-red-600 text-sm font-latoBold leading-tight'>Ya estas inscrito en el evento FEI CHALLENGE - 1° Y 2° COMPETICIÓN</Text>, hubo un error con tu método de pago inténtalo de nuevo para poder completar el proceso.</Text>
                            </View>
                        </View>

                        <View className='flex-row gap-x-3'>
                            <TouchableOpacity>
                                <Text className='text-red-600 text-sm font-latoBold'>Continuar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text className='text-red-600 text-sm font-latoBold'>Intentar otra vez</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                }

            </View>
        </Modal>
    )
}