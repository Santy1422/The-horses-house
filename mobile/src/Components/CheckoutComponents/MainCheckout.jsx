import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { G, Path, Rect, Svg } from 'react-native-svg'
import Button from '../../Components/Reusable/Button'
import { useCheckout } from '../../CustomHooks.jsx/useCheckout'
import ModalCheckout from '../ModalCheckoutQuestion/ModalCheckout'
import { useSelector } from 'react-redux'
import Constants from "expo-constants"
import { BackArrow } from '../Reusable/BackArrow'

export const MainCheckout = ({ setSelectedToRender, evento, preciototal }) => {
    const { selected, setSelected, modalVisible, setModalVisible } = useCheckout()
    const navigation = useNavigation()
    const cart = useSelector((state) => state.ReducerCart)
    console.log('cart', cart)



    const toggleSelected = (method) => {
        if (selected === '' || selected !== method) {
            setSelected(method)
        } else {
            setSelected('')
        }
    }

    const toggleModal = () => {
        setModalVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setModalVisible(true)
        }, 250)
    }, [])
    console.log("asdasd", preciototal)
    return (
        <View className='h-full'>
            <ModalCheckout isVisible={modalVisible} onClose={toggleModal} />
            {/* <ScrollView> */}
            <ImageBackground source={require('../../images/event_detail_default.png')}>
                <View className="h-full justify-between" style={{ backgroundColor: "rgba(0, 0, 0, .6)", paddingTop: Constants.statusBarHeight }}>

                    <BackArrow position={'top-[71] left-[24]'}></BackArrow>
                    <View className='py-[120px] justify-center items-center pb-8 gap-y-1' >
                        <Text className="text-white text-center text-2xl font-latoBold leading-loose uppercase md:text-[44px] md:pt-[10px] md:mb-[16px]">{evento && evento.nombreDelEvento}</Text>
                        <Text className="text-white text-sm font-latoRegular leading-tight md:text-[22px] md:mb-[16px]">Para confirmar la inscripción al evento deberá pagar</Text>
                        <Text className="text-white text-[28px] font-latoBold leading-9 md:text-[44px] md:pt-[10px]">{preciototal}</Text>
                    </View>


                    <View className='bg-white p-6 w-full rounded-t-2xl md:px-[100px]'>
                        <View className="gap-y-2.5">
                            <View className='md:mb-[16px]'>
                                <Text className="text-black text-base font-latoBold leading-normal md:text-[22px]">Selecciona un método de pago</Text>
                            </View>

                            {/* <TouchableOpacity onPress={() => toggleSelected('')}>
                                    <View className='p-4 flex-row rounded border border-stone-300 justify-start items-center'>

                                        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="credit-card">
                                                <Rect width="32" height="32" fill="white" />
                                                <Path id="credit-card_2" d="M24 5.66699H8C4.776 5.66699 3 7.44299 3 10.667V21.3337C3 24.5577 4.776 26.3337 8 26.3337H24C27.224 26.3337 29 24.5577 29 21.3337V10.667C29 7.44299 27.224 5.66699 24 5.66699ZM27 21.3337C27 23.4363 26.1027 24.3337 24 24.3337H8C5.89733 24.3337 5 23.4363 5 21.3337V14.3337H27V21.3337ZM27 12.3337H5V10.667C5 8.56433 5.89733 7.66699 8 7.66699H24C26.1027 7.66699 27 8.56433 27 10.667V12.3337ZM8.33333 20.0003C8.33333 19.4483 8.78133 19.0003 9.33333 19.0003H13.3333C13.8853 19.0003 14.3333 19.4483 14.3333 20.0003C14.3333 20.5523 13.8853 21.0003 13.3333 21.0003H9.33333C8.78133 21.0003 8.33333 20.5523 8.33333 20.0003Z" fill="#25314C" />
                                            </G>
                                        </Svg>
                                        <Text className='flex-grow pl-[14px]'>Tarjeta Crédito</Text>
                                        <View className="w-4 h-4 border-[1px] justify-center items-center border-black rounded-full">
                                            {
                                                selected === 'CardPay' && <View className='w-2 h-2 rounded-full bg-labelDarkBlue'></View>
                                            }
                                        </View>

                                    </View>
                                </TouchableOpacity> */}

                            <TouchableOpacity onPress={() => toggleSelected('MercadoPay')}>
                                    <View className='p-4 flex-row rounded border border-stone-300 justify-start items-center'>
                                        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="credit-card">
                                                <Rect width="32" height="32" fill="white" />
                                                <Path id="credit-card_2" d="M24 5.66699H8C4.776 5.66699 3 7.44299 3 10.667V21.3337C3 24.5577 4.776 26.3337 8 26.3337H24C27.224 26.3337 29 24.5577 29 21.3337V10.667C29 7.44299 27.224 5.66699 24 5.66699ZM27 21.3337C27 23.4363 26.1027 24.3337 24 24.3337H8C5.89733 24.3337 5 23.4363 5 21.3337V14.3337H27V21.3337ZM27 12.3337H5V10.667C5 8.56433 5.89733 7.66699 8 7.66699H24C26.1027 7.66699 27 8.56433 27 10.667V12.3337ZM8.33333 20.0003C8.33333 19.4483 8.78133 19.0003 9.33333 19.0003H13.3333C13.8853 19.0003 14.3333 19.4483 14.3333 20.0003C14.3333 20.5523 13.8853 21.0003 13.3333 21.0003H9.33333C8.78133 21.0003 8.33333 20.5523 8.33333 20.0003Z" fill="#25314C" />
                                            </G>
                                        </Svg>
                                        <Text className='flex-grow pl-[14px]'>Mercado Pago</Text>
                                        <View className="w-4 h-4 border-[1px] justify-center items-center border-black rounded-full">
                                            {
                                                selected === 'MercadoPay' && <View className='w-2 h-2 rounded-full bg-labelDarkBlue'></View>
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                {/* <TouchableOpacity onPress={() => toggleSelected('')}>
                                    <View className='p-4 flex-row rounded border border-stone-300 justify-start items-center'>
                                        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="arrow-left-arrow-right-square">
                                                <Rect width="32" height="32" fill="white" />
                                                <Path id="arrow-left-arrow-right-square_2" d="M23.5 3H8.5C4.95333 3 3 4.95333 3 8.5V23.5C3 27.0467 4.95333 29 8.5 29H23.5C27.0467 29 29 27.0467 29 23.5V8.5C29 4.95333 27.0467 3 23.5 3ZM27 23.5C27 25.9533 25.9533 27 23.5 27H8.5C6.04667 27 5 25.9533 5 23.5V8.5C5 6.04667 6.04667 5 8.5 5H23.5C25.9533 5 27 6.04667 27 8.5V23.5ZM11.556 16.5573C11.3 16.5573 11.044 16.46 10.8493 16.264L8.62663 14.0413C8.53463 13.9493 8.46278 13.8414 8.41211 13.7201C8.36144 13.5987 8.33464 13.468 8.33464 13.3346C8.33464 13.2013 8.36278 13.0706 8.41211 12.9492C8.46278 12.8279 8.53596 12.7186 8.62663 12.6266L10.8493 10.404C11.24 10.0133 11.8733 10.0133 12.264 10.404C12.6547 10.7946 12.6547 11.428 12.264 11.8187L11.748 12.3346H20C20.552 12.3346 21 12.7826 21 13.3346C21 13.8866 20.552 14.3346 20 14.3346H11.748L12.2627 14.8493C12.6534 15.2386 12.6534 15.8733 12.2627 16.264C12.068 16.46 11.812 16.5573 11.556 16.5573ZM23.6667 18.6641C23.6667 18.7974 23.6385 18.9281 23.5892 19.0495C23.5385 19.1708 23.4653 19.2801 23.3747 19.3721L21.152 21.5947C20.9574 21.7894 20.7 21.888 20.4453 21.888C20.1893 21.888 19.9333 21.7907 19.7386 21.5947C19.3479 21.2041 19.3479 20.5707 19.7386 20.18L20.2533 19.6654H12C11.448 19.6654 11 19.2174 11 18.6654C11 18.1134 11.448 17.6654 12 17.6654H20.252L19.7373 17.1507C19.3466 16.7614 19.3466 16.1267 19.7373 15.736C20.128 15.3453 20.7614 15.3453 21.152 15.736L23.3747 17.9587C23.4667 18.0507 23.5385 18.1599 23.5892 18.2812C23.6385 18.3999 23.6667 18.5307 23.6667 18.6641Z" fill="#25314C" />
                                            </G>
                                        </Svg>
                                        <Text className='flex-grow pl-[14px]'>Transferencia</Text>
                                        <View className="w-4 h-4 border-[1px] justify-center items-center border-black rounded-full">
                                            {
                                                selected === 'transferencia' && <View className='w-2 h-2 rounded-full bg-labelDarkBlue'></View>
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity> */}

                            <TouchableOpacity onPress={() => toggleSelected('CashPay')} className='md:mb-[16px]'>
                                <View className='p-4 flex-row rounded border border-stone-300 justify-start items-center'>
                                    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <G id="dollar-circle">
                                            <Rect width="32" height="32" fill="white" />
                                            <Path id="dollar-circle_2" d="M15.9998 1.66699C8.09584 1.66699 1.6665 8.09633 1.6665 16.0003C1.6665 23.9043 8.09584 30.3337 15.9998 30.3337C23.9038 30.3337 30.3332 23.9043 30.3332 16.0003C30.3332 8.09633 23.9038 1.66699 15.9998 1.66699ZM15.9998 28.3337C9.1985 28.3337 3.6665 22.8017 3.6665 16.0003C3.6665 9.19899 9.1985 3.66699 15.9998 3.66699C22.8012 3.66699 28.3332 9.19899 28.3332 16.0003C28.3332 22.8017 22.8012 28.3337 15.9998 28.3337ZM17.3145 15.2964L15.1705 14.7643C14.8398 14.6817 14.5585 14.4963 14.3465 14.2256C14.1465 13.9723 14.0358 13.647 14.0358 13.3123C14.0358 12.487 14.7065 11.8164 15.5318 11.8164H16.4652C17.2278 11.8164 17.8665 12.3897 17.9532 13.1497C18.0145 13.6991 18.5038 14.0964 19.0585 14.0324C19.6078 13.9711 20.0025 13.4763 19.9412 12.9269C19.7612 11.3243 18.5212 10.0883 16.9692 9.86296V9.33366C16.9692 8.78166 16.5212 8.33366 15.9692 8.33366C15.4172 8.33366 14.9692 8.78166 14.9692 9.33366V9.8724C13.3092 10.1444 12.0358 11.5764 12.0358 13.311C12.0358 14.0937 12.2985 14.859 12.7719 15.4564C13.2465 16.0684 13.9238 16.511 14.6838 16.703L16.8278 17.235C17.4958 17.4044 17.9625 18.0017 17.9625 18.687C17.9625 19.0843 17.8065 19.459 17.5225 19.743C17.2385 20.027 16.8638 20.1829 16.4665 20.1829H15.5332C14.7705 20.1829 14.1318 19.6096 14.0452 18.8496C13.9838 18.3003 13.4825 17.9003 12.9398 17.967C12.3905 18.0283 11.9958 18.5229 12.0572 19.0723C12.2345 20.6549 13.4452 21.8831 14.9692 22.1297V22.667C14.9692 23.219 15.4172 23.667 15.9692 23.667C16.5212 23.667 16.9692 23.219 16.9692 22.667V22.1364C17.7092 22.0284 18.3958 21.7003 18.9358 21.1603C19.5972 20.499 19.9625 19.6216 19.9625 18.6896C19.9625 17.0856 18.8758 15.6924 17.3145 15.2964Z" fill="#25314C" />
                                        </G>
                                    </Svg>
                                    <Text className='flex-grow pl-[14px] md:text-[22px]'>Efectivo</Text>
                                    <View className="w-4 h-4 border-[1px] justify-center items-center border-black rounded-full">
                                        {
                                            selected === 'CashPay' && <View className='w-2 h-2 rounded-full bg-labelDarkBlue'></View>
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* <View className='items-start'>
                                    <TouchableOpacity onPress={() => { setSelectedToRender('AddCard') }}>
                                        <Text className="text-labelDarkBlue text-sm font-latoBold leading-tight">Agregar tarjeta</Text>
                                    </TouchableOpacity>
                                </View> */}
                            <View>
                                {
                                    selected !== '' ?
                                        <Button label="Continuar" extra="w-full md:h-16" onPress={() => { setSelectedToRender(selected) }} />
                                        :
                                        <Button label="Continuar" extra="w-full bg-disabled md:h-16" type="secondary" texColor="text-[#BEBDBD]" />
                                }
                            </View>
                            <View className='items-center'>
                                <TouchableOpacity>
                                    {/* <Text className="text-labelDarkBlue text-sm font-latoBold leading-tight">Pagar mas tarde</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>
            {/* </ScrollView> */}
        </View>
    )
}
