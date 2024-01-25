import React from 'react'
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'
import ToggleSwitch from '../../Components/Reusable/ToggleSwitch'
import Button from '../../Components/Reusable/Button'
import CreditCardValidator from 'credit-card';
import { useCheckout } from '../../CustomHooks.jsx/useCheckout'

export const AddCardCheckout = ({setSelectedToRender}) => {
    const {card, setCard, cardError, setCardError, cardFocus, setCardFocus, saveCard, setSaveCard } = useCheckout()

    console.log(card)
    const formatCardNum = (input) => {
        // Remove non-numeric characters
        const numericInput = input.replace(/\D/g, '');

        // Add spaces every five digits for display
        let formattedInput = '';
        for (let i = 0; i < numericInput.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedInput += ' ';
            }
            formattedInput += numericInput[i];
        }

        // Set the formatted and raw values
        setCard({...card, cardNum: numericInput, cardNumDisplay: formattedInput});

        return formattedInput;
    }

    const formatExpiricy = (input) => {
        // Remove non-numeric characters
        const numericInput = input.replace(/\D/g, '');

        // Format the input as MM/YY
        let formattedInput = numericInput;
        if (numericInput.length > 4) {
            return
        } else if (numericInput.length > 2) {
            formattedInput = `${numericInput.slice(0, 2)}/${numericInput.slice(2)}`;
        }

        // Set the formatted value
        setCard({...card, expiricy: formattedInput});

        return formattedInput;
    };

    const onFocus = (field) => {
        if (field === 'name') {
            setCardFocus({...cardFocus, name: true})
        } else if (field === 'cardNum') {
            setCardFocus({...cardFocus, cardNum: true})
        } else if (field === 'expiricy') {
            setCardFocus({...cardFocus, expiricy: true})
        } else if (field === 'CVV') {
            setCardFocus({...cardFocus, cvv: true})
        }
    }

    const onBlur = (field) => {
        if (field === 'name') {
            card.name.length > 4 ? setCardError({...cardError, name: false}) : setCardError({...cardError, name: true})
        } else if (field === 'cardNum') {
            const cardType = CreditCardValidator.determineCardType(card.cardNum)
            const isNumValid = CreditCardValidator.isValidCardNumber(card.cardNum, cardType)
            if (isNumValid) {
                setCardError({...cardError, cardNum: false})
                setCard({...card, cardType: cardType})
            } else {
                setCardError({...cardError, cardNum: true})
                setCard({...card, cardType: ''})
            }
        } else if (field === 'expiricy') {
            const [month, year] = card.expiricy.split("/")

            const dateObject = new Date(Number(`20${year}`), Number(month) - 1)
            const currentDate = new Date()

            currentDate < dateObject ? setCardError({...cardError, expiricy: false}) : setCardError({...cardError, expiricy: true})
        } else if (field === 'CVV') {
            const isValidCvv = CreditCardValidator.doesCvvMatchType(card.cvv, card.cardType);
            isValidCvv ? setCardError({...cardError, cvv: false}) : setCardError({...cardError, cvv: true})
        }
    }


    
    return (
        <View className='h-full justify-between'>
            <ScrollView>
                <View className='items-center'>
                    <TouchableOpacity className="absolute left-[24px] top-[27px] w-11 h-11 bg-white rounded border border-stone-300 justify-center items-center inline-flex" onPress={() => setSelectedToRender('')}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M21.7499 11.9998C21.7499 12.4138 21.4139 12.7498 20.9999 12.7498H4.81091L10.5309 18.4698C10.8239 18.7628 10.8239 19.2378 10.5309 19.5308C10.3849 19.6768 10.1928 19.7508 10.0008 19.7508C9.80885 19.7508 9.61682 19.6778 9.47082 19.5308L2.47082 12.5308C2.40182 12.4618 2.34695 12.3789 2.30895 12.2869C2.23295 12.1039 2.23295 11.8969 2.30895 11.7139C2.34695 11.6219 2.40182 11.5387 2.47082 11.4697L9.47082 4.46975C9.76382 4.17675 10.2389 4.17675 10.5319 4.46975C10.8249 4.76275 10.8249 5.23779 10.5319 5.53079L4.81188 11.2508H20.9999C21.4139 11.2498 21.7499 11.5858 21.7499 11.9998Z" fill="#25314C" />
                        </Svg>
                    </TouchableOpacity>
                    <View className='h-11 justify-center items-center mt-[27px]'>
                        <Text className='text-black text-lg font-latoBold'>Agregar tarjeta</Text>
                    </View>

                    <ImageBackground source={require('../../images/credit-card.png')} className="mt-[23.9px] w-[316px] h-[187.46px] justify-between rounded-[20px]">
                        <View className='mt-[17px] ml-[20px]'>
                            <Text className='text-white text-lg font-latoBold'>{card.cardType}</Text>
                        </View>
                        <View className='flex-row ml-[20px] justify-between items-end mb-[10px]'>
                            <View>
                                <View className='flex-row gap-3'>
                                    <Text className='text-white uppercase font-latoBold'>{card.name === '' ? 'NOMBRE Y APELLIDO' : `${card.name}`}</Text>
                                    <Text className='text-white '>{card.expiricy === '' ? '** / **' : `${card.expiricy}`}</Text>
                                </View>
                                <View className='mt-[8px]'>
                                    <Text className='text-white text-xl'>{card.cardNumDisplay === '' ? '**** **** **** ****' : card.cardNumDisplay}</Text>
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

                    <View className='w-full p-6 gap-y-2.5'>
                        <View className='w-full my-2 gap-y-1.5'>
                            <Text className='font-latoBold text-sm'>Numero de tarjeta*</Text>
                            <View className={`flex flex-row  h-[44px] w-full relative  bg-white border rounded  justify-between items-center ${cardFocus.cardNum ? "border-blue-300" : 'border-gray-300'} ${cardError.cardNum ? "border-red-300" : ''}`}>
                                <TextInput
                                    value={card.cardNumDisplay}
                                    onChangeText={(text) => { formatCardNum(text) }}
                                    placeholder={"**** **** **** ****"}
                                    className="pl-3 font-latoLight w-full"
                                    onFocus={() => { onFocus('cardNum') }}
                                    onBlur={() => { onBlur('cardNum') }}
                                    keyboardType="numeric"
                                />

                                {
                                    cardError.cardNum &&
                                    <View className='absolute right-5'>
                                        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="alert-circle" clip-path="url(#clip0_4480_17765)">
                                                <Path id="Icon" d="M7.99992 5.33301V7.99967M7.99992 10.6663H8.00659M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z" stroke="#FF4136" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            </G>
                                            <Defs>
                                                <ClipPath id="clip0_4480_17765">
                                                    <Rect width="16" height="16" fill="white" />
                                                </ClipPath>
                                            </Defs>
                                        </Svg>
                                    </View>

                                }
                            </View>

                        </View>
                        <View className='w-full my-2 gap-y-1.5'>
                            <Text className='font-latoBold text-sm'>Nombre en la tarjeta*</Text>
                            <View className={`flex flex-row  h-[44px] w-full relative bg-white border rounded  justify-between items-center ${cardFocus.name ? "border-blue-300" : 'border-gray-300'} ${cardError.name ? "border-red-300" : ''}`}>
                                <TextInput
                                    value={card.name}
                                    onChangeText={(text) => setCard({...card, name: text})}
                                    placeholder={"NOMBRE Y APELLIDO"}
                                    className="pl-3  font-latoLight w-full"
                                    onFocus={() => { onFocus('name') }}
                                    onBlur={() => { onBlur('name') }}
                                />

                                {
                                    cardError.name &&
                                    <View className='absolute right-5'>
                                        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G id="alert-circle" clip-path="url(#clip0_4480_17765)">
                                                <Path id="Icon" d="M7.99992 5.33301V7.99967M7.99992 10.6663H8.00659M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z" stroke="#FF4136" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            </G>
                                            <Defs>
                                                <ClipPath id="clip0_4480_17765">
                                                    <Rect width="16" height="16" fill="white" />
                                                </ClipPath>
                                            </Defs>
                                        </Svg>
                                    </View>

                                }
                            </View>

                        </View>

                        <View className='flex-row justify-between'>
                            <View className='w-full max-w-[49%] my-2 gap-y-1.5'>
                                <Text className='font-latoBold text-sm'>Fecha de expiración*</Text>
                                <View className={`flex flex-row  h-[44px] w-full relative bg-white border rounded  justify-between items-center ${cardFocus.expiricy ? "border-blue-300" : 'border-gray-300'} ${cardError.expiricy ? "border-red-300" : ''}`}>
                                    <TextInput
                                        value={card.expiricy}
                                        onChangeText={(text) => { formatExpiricy(text) }}
                                        placeholder={"01/28"}
                                        className="pl-3  font-latoLight w-full"
                                        onFocus={() => { onFocus('expiricy') }}
                                        onBlur={() => { onBlur('expiricy') }}
                                        keyboardType="numeric"
                                    />

                                    {
                                        cardError.expiricy &&
                                        <View className='absolute right-5'>
                                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <G id="alert-circle" clip-path="url(#clip0_4480_17765)">
                                                    <Path id="Icon" d="M7.99992 5.33301V7.99967M7.99992 10.6663H8.00659M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z" stroke="#FF4136" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </G>
                                                <Defs>
                                                    <ClipPath id="clip0_4480_17765">
                                                        <Rect width="16" height="16" fill="white" />
                                                    </ClipPath>
                                                </Defs>
                                            </Svg>
                                        </View>

                                    }
                                </View>

                            </View>
                            <View className='w-full max-w-[49%] my-2 gap-y-1.5'>
                                <Text className='font-latoBold text-sm'>CVV*</Text>
                                <View className={`flex flex-row  h-[44px] w-full relative bg-white border rounded  justify-between items-center ${cardFocus.cvv ? "border-blue-300" : 'border-gray-300'} ${cardError.cvv ? "border-red-300" : ''}`}>
                                    <TextInput
                                        value={card.cvv}
                                        onChangeText={(text) => setCard({...card, cvv: text})}
                                        placeholder={"123"}
                                        className="pl-3  font-latoLight w-full"
                                        onFocus={() => { onFocus('CVV') }}
                                        onBlur={() => { onBlur('CVV') }}
                                        keyboardType="numeric"
                                    />

                                    {
                                        cardError.cvv &&
                                        <View className='absolute right-5'>
                                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <G id="alert-circle" clip-path="url(#clip0_4480_17765)">
                                                    <Path id="Icon" d="M7.99992 5.33301V7.99967M7.99992 10.6663H8.00659M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z" stroke="#FF4136" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </G>
                                                <Defs>
                                                    <ClipPath id="clip0_4480_17765">
                                                        <Rect width="16" height="16" fill="white" />
                                                    </ClipPath>
                                                </Defs>
                                            </Svg>
                                        </View>

                                    }
                                </View>

                            </View>
                        </View>

                        <View className='flex-row my-2 justify-between'>
                            <Text>Guardar tarjeta para próximos pagos</Text>
                            <ToggleSwitch value={saveCard} onToggle={setSaveCard} />
                        </View>


                    </View>
                </View>


                <View className='p-6'>
                    <Button label="Guardar" extra="w-full" />
                </View>
            </ScrollView>
        </View>
    )
}