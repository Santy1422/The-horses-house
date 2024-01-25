import { BlurView } from "expo-blur"
import { Image, Modal, Text, TouchableOpacity, View } from "react-native"
import Button from "../Reusable/Button"
import { useNavigation } from "@react-navigation/native"
import CrossSVG from "../../../assets/icons/CrossSVG"
import { G, Path, Rect, Svg } from "react-native-svg"
import { StatusMesssage } from "../Reusable/StatusMesssage"
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useRef, useState } from "react"

export const UnsubscribeModal = ({ visible, setVisible, selection }) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [showCamera, setShowCamera] = useState(false)
    const [isFlashOn, setIsFlashOn] = useState(false)
    const [image, setImage] = useState(null)
    const cameraRef = useRef(null)
    const navigation = useNavigation()

    useEffect(() => {
        const checkPermissions = async () => {
            MediaLibrary.requestPermissionsAsync()
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            setHasCameraPermission(cameraStatus.status === 'granted')
        }
        checkPermissions()
    }, [])

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setSelectedImage(result.uri);
        }
    };

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync()
                console.log(data)
                setImage(data.uri)
            } catch (e) {
                console.log(e)
            }
        }
    }

    const savePicture = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image)
                alert('Imagen guardada!')
                setSelectedImage(image)
                setImage(null)
                setShowCamera(false)
            } catch (e) {
                console.log(e)
            }
        }
    }
    return (
        <Modal transparent={true} visible={visible}>
            <BlurView
                className='blur h-full w-full'
                intensity={50}
            >
                <View className="w-full h-full justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    {/* {selectedImage && <TouchableOpacity className="absolute w-full top-0 left-0 z-20 items-center" onPress={() => { setSelectedImage(null) }}><Image className="w-full h-80" source={{ uri: selectedImage }} /></TouchableOpacity>} */}
                    {showCamera &&
                        <View className="absolute top-0 left-0 w-full h-full z-20">
                            {hasCameraPermission &&
                                !image ?
                                <View className="w-full h-full">
                                    <Camera ref={cameraRef} className="justify-between w-full flex-grow">
                                    </Camera>
                                    {/* Camera Controls */}
                                    <View className="w-full px-[24px] flex-row bg-labelDarkBlue justify-between h-[184px] items-center">
                                        <View className="items-start w-[82]">
                                            <TouchableOpacity onPress={() => { setShowCamera(!showCamera) }}>
                                                <Text className="text-white text-base font-latoRegular">Cancelar</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity className="w-[65px] h-[65px] rounded-full border-2 border-stone-300 bg-white justify-center items-center" onPress={() => { takePicture() }}>
                                            <View className="w-[47px] h-[47px] rounded-full border-2 border-stone-300">
                                            </View>
                                        </TouchableOpacity>
                                        <View className="flex-row w-[82]">
                                            <TouchableOpacity className="" onPress={() => setIsFlashOn(!isFlashOn)}>
                                                {
                                                    isFlashOn ?
                                                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <G id="bolt-slash-alt">
                                                                <Path id="bolt-slash-alt_2" d="M21.5298 2.47009C21.2368 2.17709 20.7618 2.17709 20.4688 2.47009L14.7488 8.1901V3.00009C14.7488 2.68909 14.5578 2.4111 14.2678 2.3001C13.9778 2.1881 13.6488 2.26809 13.4418 2.49809L4.4418 12.4981C4.2438 12.7191 4.19378 13.0351 4.31478 13.3051C4.43578 13.5751 4.70378 13.7501 4.99978 13.7501H9.18881L2.46877 20.4701C2.17577 20.7631 2.17577 21.2381 2.46877 21.5311C2.61477 21.6771 2.8068 21.7511 2.9988 21.7511C3.1908 21.7511 3.38277 21.6781 3.52877 21.5311L10.5288 14.5311L14.5288 10.5311L21.5288 3.5311C21.8228 3.2371 21.8228 2.76309 21.5298 2.47009ZM9.99978 12.2501H6.6838L13.2498 4.95409V9.68909L10.4938 12.4451C10.3618 12.3271 10.1908 12.2501 9.99978 12.2501ZM19.6848 10.6951C19.8058 10.9661 19.7548 11.2811 19.5578 11.5021L10.5578 21.5021C10.4128 21.6631 10.2088 21.7501 9.99978 21.7501C9.90978 21.7501 9.8188 21.7341 9.7308 21.7001C9.4408 21.5891 9.24978 21.3101 9.24978 21.0001V18.0001C9.24978 17.5861 9.58578 17.2501 9.99978 17.2501C10.4138 17.2501 10.7498 17.5861 10.7498 18.0001V19.0461L17.3158 11.7501H16.9998C16.5858 11.7501 16.2498 11.4141 16.2498 11.0001C16.2498 10.5861 16.5858 10.2501 16.9998 10.2501H18.9998C19.2958 10.2501 19.5638 10.4241 19.6848 10.6951Z" fill="white" />
                                                            </G>
                                                        </Svg>
                                                        :

                                                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <G id="bolt-alt">
                                                                <Path id="bolt-alt_2" d="M10 21.7503C9.91001 21.7503 9.81903 21.7343 9.73103 21.7003C9.44103 21.5893 9.25001 21.3103 9.25001 21.0003V13.7503H5.00001C4.70401 13.7503 4.43602 13.5763 4.31502 13.3053C4.19402 13.0343 4.24503 12.7183 4.44203 12.4983L13.442 2.49828C13.65 2.26728 13.978 2.18829 14.268 2.30029C14.558 2.41129 14.749 2.69028 14.749 3.00028V10.2503H19C19.296 10.2503 19.564 10.4243 19.685 10.6953C19.806 10.9663 19.755 11.2823 19.558 11.5023L10.558 21.5023C10.413 21.6633 10.208 21.7503 10 21.7503ZM6.68404 12.2503H10C10.414 12.2503 10.75 12.5863 10.75 13.0003V19.0463L17.316 11.7503H14C13.586 11.7503 13.25 11.4143 13.25 11.0003V4.95428L6.68404 12.2503Z" fill="white" />
                                                            </G>
                                                        </Svg>
                                                }

                                            </TouchableOpacity>
                                            <TouchableOpacity className="ml-[34]">
                                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <G id="rotate">
                                                        <Path id="rotate_2" d="M21.686 13.0811C21.148 18.0231 16.984 21.75 12 21.75C8.603 21.75 5.504 19.979 3.75 17.186V20C3.75 20.414 3.414 20.75 3 20.75C2.586 20.75 2.25 20.414 2.25 20V15C2.25 14.586 2.586 14.25 3 14.25H8C8.414 14.25 8.75 14.586 8.75 15C8.75 15.414 8.414 15.75 8 15.75H4.66992C6.05992 18.476 8.877 20.25 12 20.25C16.217 20.25 19.7391 17.0979 20.1951 12.9189C20.2391 12.5059 20.613 12.2109 21.021 12.2539C21.434 12.2989 21.73 12.6691 21.686 13.0811ZM21 3.25C20.586 3.25 20.25 3.586 20.25 4V6.81396C18.496 4.02096 15.397 2.25 12 2.25C7.017 2.25 2.85296 5.97695 2.31396 10.9189C2.26896 11.3309 2.56603 11.7011 2.97803 11.7461C3.00503 11.7491 3.03306 11.75 3.06006 11.75C3.43806 11.75 3.76296 11.4651 3.80396 11.0811C4.25996 6.90205 7.78302 3.75 11.999 3.75C15.123 3.75 17.9391 5.524 19.3291 8.25H16C15.586 8.25 15.25 8.586 15.25 9C15.25 9.414 15.586 9.75 16 9.75H21C21.414 9.75 21.75 9.414 21.75 9V4C21.75 3.586 21.414 3.25 21 3.25Z" fill="white" />
                                                    </G>
                                                </Svg>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                :
                                <View className="h-full w-full">
                                    <Image className="justify-end w-full flex-grow" source={{ uri: image }} />
                                    <View className="w-full px-[24px] flex-row bg-labelDarkBlue justify-around h-[184px] items-center">
                                        <View className="items-start w-[82]">
                                            <TouchableOpacity onPress={() => { setImage(null) }}>
                                                <Text className="text-white text-base font-latoRegular">Repetir</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View className="flex-row w-[82] justify-end">
                                            <TouchableOpacity onPress={() => { savePicture() }}>
                                                <Text className="text-white text-base font-latoRegular">Usar foto</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            }
                        </View>
                    }
                    <View className="w-full justify-between px-6 py-4 bg-white rounded-tl-[10px] rounded-tr-[10px]">
                        <View className="w-full">
                            <View className="w-full flex-row justify-between mb-4">
                                <Text className="text-lg font-latoBold text-labelDarkBlue">{selection === 'Otros' ? 'Darse de baja' : '¿Cómo querés subir tu certificado médico?'}</Text>
                                <TouchableOpacity className="justify-center items-center" onPress={() => setVisible(!visible)}>
                                    <CrossSVG color={'#929291'} size={'20'} />
                                </TouchableOpacity>
                            </View>
                            {selection === 'Otros' && <Text className="font-latoRegular text-stone-500 text-sm">Debés abonar una penalización de $40.000</Text>}
                        </View>

                        {selection === 'Otros' ?
                            <View className="w-full mt-6">
                                <Button label={'Pagar ahora'} extra={'w-full'} onPress={() => navigation.navigate('CheckoutScreen')} />
                                <Button label={'Pagar en otro momento'} type={'secondary'} extra={'w-full border-1 border-labelDarkBlue mt-3'} onPress={() => navigation.navigate('ScreenEvent')} />
                            </View>
                            :
                            <View className="w-full">
                                {
                                    selectedImage ?
                                        <View className="w-full">
                                            <View className="flex-row p-4 bg-white justify-center items-start rounded border border-gray-300">
                                                <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Rect x="2" y="2" width="32" height="32" rx="16" fill="#F3F2F2" />
                                                    <Rect x="2" y="2" width="32" height="32" rx="16" stroke="#F3F2F2" stroke-width="4" />
                                                    <Path d="M22 12.166H14C12.388 12.166 11.5 13.054 11.5 14.666V21.3327C11.5 22.9447 12.388 23.8327 14 23.8327H22C23.612 23.8327 24.5 22.9447 24.5 21.3327V14.666C24.5 13.054 23.612 12.166 22 12.166ZM14 13.166H22C23.0513 13.166 23.5 13.6147 23.5 14.666V18.792L20.8267 16.1193C20.3867 15.6786 19.6133 15.6786 19.1733 16.1193L16 19.292L15.4933 18.786C15.0533 18.3453 14.28 18.3453 13.84 18.786L12.5 20.126V14.666C12.5 13.6147 12.9487 13.166 14 13.166ZM22 22.8327H14C13.0187 22.8327 12.568 22.4353 12.5113 21.528L14.5466 19.4927C14.6313 19.4087 14.7013 19.4087 14.786 19.4927L15.412 20.1187C15.7234 20.4307 16.276 20.43 16.586 20.1187L19.8793 16.8254C19.964 16.7414 20.034 16.7414 20.1187 16.8254L23.4987 20.2054V21.3327C23.5 22.384 23.0513 22.8327 22 22.8327ZM14.5 15.9993C14.5 15.5393 14.8733 15.166 15.3333 15.166C15.7933 15.166 16.1667 15.5393 16.1667 15.9993C16.1667 16.4593 15.7933 16.8327 15.3333 16.8327C14.8733 16.8327 14.5 16.4593 14.5 15.9993Z" fill="#231D43" />
                                                </Svg>
                                                <View className="flex-grow ml-[16] mr-[4]">
                                                    <Text className="text-sm text-labelDarkBlue font-latoRegular">Image.jpg</Text>
                                                    <Text className="text-zinc-500 text-sm font-latoRegular">720 Kb</Text>
                                                    <View className="flex-row w-full items-center">
                                                        <View className="bg-labelDarkBlue w-[183px] h-1 rounded-lg"></View>
                                                        <Text className="font-latoRegular text-zinc-700 text-sm ml-[12]">100%</Text>
                                                    </View>
                                                </View>
                                                <View className="bg-labelDarkBlue p-[3px] rounded-full justify-center items-center">
                                                    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <G id="check">
                                                            <Path id="Icon" d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                        </G>
                                                    </Svg>
                                                </View>
                                            </View>
                                            <Button label={'Darse de baja'} type={'secondary'} extra={'w-full bg-[#FBF1EF] mt-[24]'} texColor={'text-[#C70117]'} onPress={() => navigation.navigate('EventInscripted')} />
                                            <Button label={'Cancelar'} type={'secondary'} extra={'w-full bg-[#fff] mt-[12]'} texColor={'text-labelDarkBlue'} onPress={() => { setSelectedImage(null) }} />
                                        </View>
                                        :
                                        <>
                                            <StatusMesssage text={'HRH actúa como intermediario y no es responsable de las decisiones tomadas por nuestros usuarios.'} type={'warning'} />
                                            <View className="w-full flex-row mt-4">
                                                <View className="flex-1 mr-3 grow shrink h-[182px] p-4 bg-white justify-center items-start rounded border border-gray-300">
                                                    <TouchableOpacity className="w-full" onPress={() => { setShowCamera(!showCamera) }}>
                                                        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <G id="camera">
                                                                <Path id="camera_2" d="M31.5 10.9375H28.9451L28.0944 8.38086C27.5572 6.77086 26.0557 5.6875 24.3582 5.6875H17.6418C15.9443 5.6875 14.4428 6.77086 13.9056 8.38086L13.0549 10.9375H10.5C6.2685 10.9375 3.9375 13.2685 3.9375 17.5V31.5C3.9375 35.7315 6.2685 38.0625 10.5 38.0625H31.5C35.7315 38.0625 38.0625 35.7315 38.0625 31.5V17.5C38.0625 13.2685 35.7315 10.9375 31.5 10.9375ZM35.4375 31.5C35.4375 34.2598 34.2598 35.4375 31.5 35.4375H10.5C7.74025 35.4375 6.5625 34.2598 6.5625 31.5V17.5C6.5625 14.7402 7.74025 13.5625 10.5 13.5625H14C14.5653 13.5625 15.0656 13.2004 15.2458 12.6649L16.3977 9.20844C16.5762 8.67119 17.0766 8.31079 17.6418 8.31079H24.3582C24.9234 8.31079 25.4238 8.67119 25.6023 9.20844L26.7542 12.6631C26.9344 13.1986 27.4347 13.5608 28 13.5608H31.5C34.2598 13.5608 35.4375 14.7385 35.4375 17.4983V31.5ZM21 17.9375C17.3828 17.9375 14.4375 20.881 14.4375 24.5C14.4375 28.119 17.3828 31.0625 21 31.0625C24.6173 31.0625 27.5625 28.119 27.5625 24.5C27.5625 20.881 24.6173 17.9375 21 17.9375ZM21 28.4375C18.83 28.4375 17.0625 26.6718 17.0625 24.5C17.0625 22.3282 18.83 20.5625 21 20.5625C23.17 20.5625 24.9375 22.3282 24.9375 24.5C24.9375 26.6718 23.17 28.4375 21 28.4375ZM32.375 18.375C32.375 19.341 31.591 20.125 30.625 20.125C29.659 20.125 28.875 19.341 28.875 18.375C28.875 17.409 29.659 16.625 30.625 16.625C31.591 16.625 32.375 17.409 32.375 18.375Z" fill="#25314C" />
                                                            </G>
                                                        </Svg>
                                                        <Text className="text-sm text-labelDarkBlue font-latoRegular">Tomar fotografía</Text>
                                                        <Text className="text-zinc-500 text-sm font-latoRegular">Abrir cámara</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View className="flex-1 ml-3 grow shrink h-[182px] p-4 bg-white justify-center items-start rounded border border-gray-300">
                                                    <TouchableOpacity className="w-full" onPress={() => { pickImage() }}>
                                                        <Svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <G id="inbox-upload">
                                                                <Path id="inbox-upload_2" d="M38.4552 22.7657C38.4552 22.7605 38.4586 22.7552 38.4586 22.75C38.4586 22.7342 38.4501 22.722 38.4501 22.7062C38.4291 22.582 38.4046 22.4577 38.3749 22.3335C38.3609 22.2915 38.3539 22.2495 38.3364 22.2093C38.2524 21.882 38.1683 21.5565 38.0335 21.2415L34.5702 13.1635C33.6935 11.1177 32.8657 9.18573 28.538 9.18573C27.8135 9.18573 27.2255 9.77373 27.2255 10.4982C27.2255 11.2227 27.8135 11.8107 28.538 11.8107C31.135 11.8107 31.3714 12.3637 32.1572 14.1977L35.2598 21.4357H30.3281C28.1406 21.4357 26.1127 22.6695 24.9 24.738C24.1982 25.9385 22.8943 26.6857 21.4995 26.6857C20.1048 26.6857 18.8008 25.9385 18.0991 24.7363C16.8881 22.6695 14.8584 21.4357 12.6709 21.4357H7.7392L10.8419 14.1977C11.6276 12.3637 11.8641 11.8107 14.4611 11.8107C15.1856 11.8107 15.7736 11.2227 15.7736 10.4982C15.7736 9.77373 15.1856 9.18573 14.4611 9.18573C10.1316 9.18573 9.30552 11.1177 8.42877 13.1635L4.96552 21.2397C4.83077 21.5547 4.74489 21.882 4.66089 22.211C4.64514 22.246 4.63985 22.2845 4.62585 22.3212C4.5961 22.449 4.56999 22.5767 4.54724 22.7062C4.54724 22.7202 4.5387 22.7325 4.5387 22.7465C4.5387 22.7517 4.54041 22.7553 4.54041 22.7605C4.48266 23.1105 4.43359 23.464 4.43359 23.8245V31.5C4.43359 35.7315 6.76459 38.0625 10.9961 38.0625H31.9961C36.2276 38.0625 38.5586 35.7315 38.5586 31.5V23.828C38.5621 23.4675 38.5129 23.1157 38.4552 22.7657ZM31.9995 35.4375H10.9995C8.23976 35.4375 7.06201 34.2597 7.06201 31.5V24.0625H12.6709C13.9169 24.0625 15.0979 24.8115 15.8329 26.0645C17.0037 28.0683 19.1755 29.3125 21.4995 29.3125C23.8235 29.3125 25.9953 28.0682 27.1661 26.0662C27.9011 24.8115 29.0821 24.0625 30.3281 24.0625H35.937V31.5C35.937 34.2597 34.7593 35.4375 31.9995 35.4375ZM17.072 7.92749C16.5592 7.41474 16.5592 6.58348 17.072 6.07073L20.572 2.57073C20.6927 2.44998 20.8382 2.35375 20.9992 2.28725C21.3195 2.15425 21.6817 2.15425 22.002 2.28725C22.163 2.35375 22.308 2.44998 22.4288 2.57073L25.9288 6.07073C26.4415 6.58348 26.4415 7.41474 25.9288 7.92749C25.6733 8.18299 25.3372 8.31249 25.0012 8.31249C24.6652 8.31249 24.3292 8.18474 24.0737 7.92749L22.8137 6.66748V17.5C22.8137 18.2245 22.2257 18.8125 21.5012 18.8125C20.7767 18.8125 20.1887 18.2245 20.1887 17.5V6.66925L18.9288 7.92925C18.4143 8.44025 17.5847 8.44024 17.072 7.92749Z" fill="#25314C" />
                                                            </G>
                                                        </Svg>
                                                        <Text className="text-sm text-labelDarkBlue font-latoRegular">Cargar</Text>
                                                        <Text className="text-zinc-500 text-sm font-latoRegular">Imagen, PDF, etc.</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </>

                                }

                            </View>
                        }
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}