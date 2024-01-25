import { Image, ScrollView, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native-animatable"
import ReusableTextInput from "../../Components/Reusable/Inputs/ReusableTextInput"
import { useEffect, useState } from "react"
import ToggleSwitch from "../../Components/Reusable/ToggleSwitch"
import ReusableRangleSlider from "../../Components/Reusable/ReusableRangleSlider"
import { useNavigation } from "@react-navigation/native"
import Button from "../../Components/Reusable/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { addNewHorse, claimHorse, editHorse, searchHorseByName, selectHorseById } from "../../../auth/horsePeticiones"
import { setMyHorse } from "../../Redux/ReducerHorse"
import { useDispatch } from "react-redux"
import { useImage } from "../../CustomHooks.jsx/useImage"
import DropdownSearchAlt from "../../Components/Reusable/Inputs/DropdownSearchAlt"
import { useHorse } from "../../CustomHooks.jsx/useHorse"
import { BackArrow } from "../../Components/Reusable/BackArrow"
import { LinearGradient } from "expo-linear-gradient"
import MiCalendario from "../../Components/Reusable/MiCalendario"
import { NavHorizontalScroll } from "../../Components/EventComponents/NavHorizontalScroll"
import { downloadIcon, editarIconSmall, shareIcon } from "../../../utils/svgIcons"
import { ProximamenteComponent } from "../../Components/Reusable/ProximamenteComponent"
import { Path, Svg } from "react-native-svg"
import DatePickerAlt from "../../Components/Reusable/Inputs/DatePickerAlt"

const tabs = [
    "Veterinario",
    "Herrero",
    "Caballerizo",
    "Proveedores",
    "Profesores",
    "Transporte",
    "Pasaporte",
]

export const AddHorses = ({ route }) => {
    // Accesibility
    const { url, uploadImage, setUrl } = useImage()
    const { horsePic, setHorsePic, horseName, setHorseName, horseBreed, setHorseBreed, horseAAFE, setHorseAAFE, horseHair, setHorseHair, minHorseJump, setMinHorseJump, maxHorseJump, setMaxHorseJump, horseGender, setHorseGender, horseBirthDate, setHorseBirthDate, sanidadH, setSanidadH, pateaH, setPateaH, muerdeH, setMuerdeH, mansoH, setMansoH, microchipH, setMicrochipH, pedigreePic, setPedigreePic, horseId, setHorseId, horseAAFEError, setHorseAAFEError, horseNameError, setHorseNameError, horseBirthDateError, setHorseBirthDateError, horseBreedError, setHorseBreedError } = useHorse()
    const [isDisabled, setIsDisabled] = useState(false)
    const [activeLink, setActiveLink] = useState('Veterinario')
    const [searchedHorseName, setSearchedHorseName] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [horseExists, setHorseExists] = useState(false)
    const [horseNotFound, setHorseNotFound] = useState(false)
    const [horseDetail, setHorseDetail] = useState(false)
    let searchTimer = null;
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const [searchError, setSearchError] = useState(false)

    const [aafeFirst, setAafeFirst] = useState(true)
    const [horseNameFirst, setHorseNameFirst] = useState(true)
    const [horseBirthDateFirst, setHorseBirthDateFirst] = useState(true)
    const [horseBreedFirst, setHorseBreedFirst] = useState(true)
    // Horse info value list
    const horseBreedList = ['Silla Argentino', 'Zangersheide', 'Importados', 'Pura sangre', 'Mestizos', 'Silla Francés (SF)', 'Hol Holsteiner', 'Hann Hannoverianos', 'Silla Belga', 'Otras']
    const hairColors = ['Alazán', 'Bayo', 'Negro', 'Tordillo', 'Zaino']
    const jumpHeights = [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1, 1.10, 1.20, 1.30, 1.40, 1.50, 1.60]


    // horse detail useEffect

    useEffect(() => {
        if (route?.params?.horse) {
            let horse = route?.params?.horse
            let dateString = horse?.birthDate
            const [year, month, day] = dateString.split('T')[0].split('-');

const formattedDate = `${day}/${month}/${year}`;
            setHorseDetail(true)
            setHorseName(horse?.name)
            setHorseAAFE(horse?.aaef ? horse?.aaef : '')
            setHorseBreed(horse?.breed)
            setHorseGender(horse?.gender)
            console.log(horse?.informacionAdicional)
            setHorseBirthDate(formattedDate)
            setSanidadH(horse?.informacionAdicional?.sanidad)
            setPateaH(horse?.informacionAdicional?.patea)
            setMansoH(horse?.informacionAdicional?.manso)
            setMuerdeH(horse?.informacionAdicional?.muerde)
            setMicrochipH(horse?.informacionAdicional?.microchip)
            setHorseExists(true)
            horse?.horsePic && setUrl(horse?.horsePic)
            console.log(horse)
        }
    }, [])

    // Search useEffect

    useEffect(() => {
        if (searchedHorseName.length >= 4) {
            clearTimeout(searchTimer);
            setLoading(true);
            setSearchError(false);

            searchTimer = setTimeout(() => {
                searchHorseByName({
                    horsesName: searchedHorseName,
                    succes: ((s) => {
                        setResults(s)
                        setLoading(false);
                        setSearchError(false);
                        setHorseNotFound(false)
                    }),
                    loading: (l) => setLoading(l),
                    error: (e) => {
                        setSearchError(e)
                        setResults([])
                        setHorseNotFound(true)
                    }
                })
            }, 1000)
        } else {
            setLoading(false);
            setResults([])
        }

        return () => {
            clearTimeout(searchTimer);
        }
    }, [searchedHorseName])

    // Search function 

    const handleSearch = async (searchValue) => {
        setSearchedHorseName(searchValue)
    }

    // Select horse function

    const handleSelectHorse = (id) => {
        selectHorseById({
            horsesId: id,
            succes: ((s) => {
                setHorseName(s?.name)
                setHorseAAFE(s?.aaef)
                setPedigreePic(s?.pedigreePic)
                setHorseId(s?._id)
                setHorseExists(true)
                setResults([])
                setSearchedHorseName('')
            }),
            loading: (l) => setLoading(l),
            error: (e) => {
                console.log(e)
            }
        })
    }

    // Slider function

    const handleSliderChange = (values) => {
        setMinHorseJump(values[0])
        setMaxHorseJump(values[1])
    }

    // Navigation 
    const navigation = useNavigation()

    // Validaciones del numero aafe

    useEffect(() => {
        if (aafeFirst) {
            setAafeFirst(false)
        }
        if (horseAAFE == '' && !aafeFirst) {
            setHorseAAFEError('Campo requerido')
        } else if (horseAAFE?.length < 6 && !aafeFirst) {
            setHorseAAFEError('Debe contener al menos 6 digitos')
        } else {
            setHorseAAFEError(null)
        }
    },[horseAAFE])

    // validaciones del nombre del caballo

    useEffect(() => {
        if (horseNameFirst) {
            setHorseNameFirst(false)
        }
        if (horseName == '' && !horseNameFirst) {
            setHorseNameError('Campo requerido')
        } else if (horseName?.length < 2 && !horseNameFirst) {
            setHorseNameError('Debe contener al menos 2 digitos')
        } else {
            setHorseNameError(null)
        }
    },[horseName])

    // validaciones de la fecha de nacimiento del caballo

    useEffect(() => {
        if (horseBirthDateFirst) {
            setHorseBirthDateFirst(false)
        }
        if (horseBirthDate == null && !horseBirthDateFirst) {
            setHorseBirthDateError('Campo requerido')
        } else {
            setHorseBirthDateError(null)
        }
    },[horseBirthDate])

    // validaciones de la raza del caballo

    useEffect(() => {
        if (horseBreedFirst) {
            setHorseBreedFirst(false)
        }
        if (horseBreed == null && !horseBreedFirst) {
            setHorseBreedError('Campo requerido')
        } else {
            setHorseBreedError(null)
        }
    },[horseBreed])

    // Disables Button 
    // useEffect(() => {
    //     if (horseAAFE == null || horseName == '' || horseBreed == null) { 
    //         setIsDisabled(true) 
    //         horseAAFE == null ? setHorseAAFEError('Campo requerido') : setHorseAAFEError(null)
    //     } else { 
    //         setIsDisabled(false)
    //         setHorseAAFEError(null)
    //     }
    // }, [horseName, horseBreed, horseAAFE])

    // Changes string to Date format (temporary)
    function transformToDate(dateString) {
        let dateParts = dateString.split('/');
        let day = parseInt(dateParts[0], 10);
        let month = parseInt(dateParts[1], 10) - 1;
        let year = parseInt(dateParts[2], 10);
        return new Date(year, month, day);
    }

    // Uploads pic
    const handleImageUpload = async () => {
        await uploadImage();
        setHorsePic(url)
    };

    async function setHorse() {
        
        if (horseAAFE == '' || horseName == '' || horseBreed == null || horseBirthDate == null) {
            horseAAFE == '' ? setHorseAAFEError('Campo requerido') : setHorseAAFEError(null)
            horseName == '' ? setHorseNameError('Campo requerido') : setHorseNameError(null)
            horseBirthDate == null ? setHorseBirthDateError('Campo requerido') : setHorseBirthDateError(null)
            horseBreed == null ? setHorseBreedError('Campo requerido') : setHorseBreedError(null)
        } else if (horseDetail) {
            let newHorse = {
                name: horseName,
                breed: horseBreed,
                aaef: horseAAFE,
                gender: horseGender,
                alturaSalto: maxHorseJump,
                horsePic: url,
                birthDate: transformToDate(horseBirthDate),
                informacionAdicional: {
                    sanidad: sanidadH || null,
                    patea: pateaH || null,
                    muerde: muerdeH || null,
                    manso: mansoH || null,
                    microchip: microchipH || null,
                },

            };
            await editHorse({
                horsesId: route?.params?.horse?._id,
                horseData: newHorse,
                succes: ((s) => {
                    dispatch(setMyHorse(s)), navigation.navigate("ProfileIndex")
                }),
                loading: (l) => console.log(l),
                error: (e) => setError(e)
            })
        } else if (horseExists) {
            let horseData = {
                breed: horseBreed,
                gender: horseGender,
                aaef: horseAAFE,
                alturaSalto: maxHorseJump,
                horsePic: url,
                birthDate: transformToDate(horseBirthDate),
                informacionAdicional: {
                    sanidad: sanidadH || null,
                    patea: pateaH || null,
                    muerde: muerdeH || null,
                    manso: mansoH || null,
                    microchip: microchipH || null,
                },

            };

            await claimHorse({
                horseData,
                horsesId: horseId,
                succes: ((s) => {
                    dispatch(setMyHorse(s)), navigation.navigate("ProfileIndex")
                    console.log(s)
                    setHorseExists(false)
                }),
                loading: (l) => console.log(l),
                error: (e) => console.log(e)
            })
            
        } else {
            let newHorse = {
                name: horseName,
                breed: horseBreed,
                aaef: horseAAFE,
                gender: horseGender,
                alturaSalto: maxHorseJump,
                horsePic: url,
                birthDate: transformToDate(horseBirthDate),
                informacionAdicional: {
                    sanidad: sanidadH || null,
                    patea: pateaH || null,
                    muerde: muerdeH || null,
                    manso: mansoH || null,
                    microchip: microchipH || null,
                },

            };
            let token = await AsyncStorage.getItem("token");
            await addNewHorse({
                token,
                newHorse,
                succes: ((s) => {
                    dispatch(setMyHorse(s)), navigation.navigate("ProfileIndex")
                }),
                loading: (l) => console.log(l),
                error: (e) => setError(e)
            })
        }

    }


    return (
        <ScrollView className="bg-white h-full">

            <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="h-full w-full" style={{}}>
                <BackArrow position={'top-[71] left-[24]'}></BackArrow>
                <View className="flex flex-col justify-center items-center  mt-[53px]">
                    <Text className="text-center text-lg text-labelDarkBlue font-latoBold mt-[26] mb-[41px]">{horseDetail ? "Mi Caballo" : "Agregar caballo"}</Text>
                    <View className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center" style={{
                        shadowColor: 'rgba(0, 0, 0, .5)',
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 12,
                        elevation: 12,
                    }}>
                        <View className="absolute z-50 self-end top-1 right-[-5]">
                            <TouchableOpacity onPress={handleImageUpload} className="rounded-full bg-[#D1DADA] h-[23px]   w-[23px] flex justify-center items-center" >
                                {editarIconSmall}
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleImageUpload} className="w-full h-full items-center justify-center">
                            {url ?
                                <Image source={{ uri: url }} className="flex rounded-full h-[90%] w-[90%]"  ></Image>
                                :
                                <Image source={require('../../../assets/profilehorse.png')} className="flex  rounded-full h-[98%] w-[98%]"  ></Image>
                            }
                        </TouchableOpacity>
                    </View>

                    {!horseDetail && <Text className="font-latoRegular text-[16px] mt-[12px]">{horseName && horseName || "Agrega los datos de tu caballo"}</Text>}

                </View>

                {/* Buscador de caballos */}
                {!horseDetail && <View className="px-[24px] w-full mt-4">
                    <Text className='w-full h-7 font-latoRegular text-base md:text-[22px] leading-6 text-[#23254C] pb-1 md:mb-[10px]'>Buscar caballo por nombre</Text>
                    <View className="contenedorSearch  bg-white flex flex-row border border-[#CCCCCC] rounded h-11 items-center w-full flex-initial ml-0 mt-0 px-[14px] py-[10px]  ">
                        <View className="containerIcon flex">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <Path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#BEBDBD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>
                        </View>
                        <TextInput
                            value={searchedHorseName}
                            onChangeText={(text) => handleSearch(text)}
                            placeholder={'Buscar caballo'}
                            className="text flex font-latoRegular text-base leading-6 text-[#6D6E6D] w-full self-center ml-2"
                        />
                    </View>

                </View>}

                {
                    results.length > 0 &&
                    <View className="px-[24px] w-full">
                        <View className="w-full bg-white rounded mt-[4] p-2 border border-[#CCCCCC]">
                            {

                                loading ?
                                    <Text className="text-center font-latoBold text-labelDarkBlue text-xl">Cargando...</Text>
                                    :
                                    results?.map((horse, i) => {
                                        return (
                                            <TouchableOpacity key={i} className="mb-1" onPress={() => handleSelectHorse(horse._id)}>
                                                <Text>{horse.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                            }
                        </View>
                    </View>
                }
                {
                    results.length === 0 && loading &&
                    <View className="px-[24px] w-full">
                        <View className="w-full bg-white rounded mt-[4] p-2 border border-[#CCCCCC]">
                            <Text className="text-center font-latoBold text-labelDarkBlue text-xl">Cargando...</Text>
                        </View>
                    </View>
                }

                {!horseDetail &&
                    <>
                        {searchError ?
                            <View className="flex-row px-[24px] mt-1">
                                <Text className={`preadquiriste font-latoRegular pl-[1] text-sm text-red-600`}>No se encontro tu caballo</Text>
                                <TouchableOpacity className="ml-[4]" onPress={() => setHorseNotFound(true)}>
                                    <Text className="text-sm font-latoRegular text-labelDarkBlue">Agregar manualmente</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View className="flex-row px-[24px] mt-1">
                                <Text className={`preadquiriste font-latoRegular pl-[1] text-sm text-[#74767A]`}>¿No encuentras tu caballo?</Text>
                                <TouchableOpacity className="ml-[4]" onPress={() => setHorseNotFound(true)}>
                                    <Text className="text-sm font-latoRegular text-labelDarkBlue">Agregar manualmente</Text>
                                </TouchableOpacity>
                            </View>

                        }
                    </>
                }

                {/* ------- Carga manual ------ */}

                {(horseNotFound || horseExists) &&
                    <View className="mx-[24px]">
                        <ReusableTextInput label={'Nombre del caballo'} hideHint={true} value={horseName} setValue={setHorseName}  errorMessage={horseNameError}/>
                        {error &&

                            <Text className={`preadquiriste font-latoRegular text-sm text-red-600 mt-1`}> Ups! El caballo que intentas registrar ya existe</Text>

                        }
                    </View>
                }


                <View className="mx-[24px] ">
                    <ReusableTextInput label={'AAFE'} placeholder={'525880'} hideHint={true} value={horseAAFE} setValue={setHorseAAFE} number={true} errorMessage={horseAAFEError}/>
                    <DropdownSearchAlt selectedOption={horseBreed} options={horseBreedList} onSelect={setHorseBreed} label={'Raza'} placeholder="Seleccionar una raza" errorMessage={horseBreedError}/>
                    <DropdownSearchAlt selectedOption={horseHair} options={hairColors} onSelect={setHorseHair} label={'Color de pelo'} placeholder="Seleccionar un color de pelo" />
                </View>
                <View className="mx-[24px] mt-[14px] ">
                    <Text className="font-latoRegular text-base">Elige altura de salto<Text className=" font-latoLight"> en metros</Text></Text>
                    <ReusableRangleSlider sliderValues={jumpHeights} initialValues={[minHorseJump, maxHorseJump]} onChange={(values) => handleSliderChange(values)} />
                </View>
                <View className="mt-[14px] mx-[24px]">
                    <Text className="font-latoRegular text-base ">Sexo</Text>
                    <View className=" flex flex-row justify-between mt-[4px] ">
                        <TouchableOpacity className={`w-1/2 h-[44px] bg-white flex justify-center border rounded-tl rounded-bl items-center ${horseGender === 'hembra' ? `disabled border-gray-400` : `border-2 border-labelDarkBlue`}`} onPress={() => setHorseGender('macho')}>
                            <Text className={`font-latoBold ${horseGender === 'hembra' ? `text-gray-400` : `text-labelDarkBlue`}`}>Macho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`w-1/2 h-[44px] bg-white flex justify-center border rounded-tr rounded-br items-center ${horseGender === 'macho' ? `disabled border-gray-400` : `border-2 border-labelDarkBlue`}`} onPress={() => setHorseGender('hembra')}>
                            <Text className={`font-latoBold ${horseGender === 'macho' ? `text-gray-400` : `text-labelDarkBlue`}`}>Hembra</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="mt-[14px]">
                        <DatePickerAlt label={'Año de nacimiento'} date={horseBirthDate} setDate={setHorseBirthDate} errorMessage={horseBirthDateError}/>
                    </View>
                </View>

                {/* Informacion adicional */}

                <View className="mx-[24px] ">
                    <Text className=" self-start font-latoBold text-[18px] my-[14px]">Informacion adicional</Text>
                    <View className="flex justify-between flex-row mb-[14px]">
                        <Text className=" font-latoRegular text-sm">¿ Tiene Sanidad al dia ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px]">No</Text>
                            <ToggleSwitch onToggle={setSanidadH} value={sanidadH} />
                            <Text className="ml-[2px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px]">
                        <Text className=" font-latoRegular text-sm">¿ Suele patear ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px]">No</Text>
                            <ToggleSwitch onToggle={setPateaH} value={pateaH} />
                            <Text className="ml-[2px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px]">
                        <Text className=" font-latoRegular text-sm">¿ Suele Morder ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px]">No</Text>
                            <ToggleSwitch onToggle={setMuerdeH} value={muerdeH} />
                            <Text className="ml-[2px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px]">
                        <Text className=" font-latoRegular text-sm">¿ Es Manso ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px]">No</Text>
                            <ToggleSwitch onToggle={setMansoH} value={mansoH} />
                            <Text className="ml-[2px]">Si</Text>
                        </View>
                    </View>
                    <View className="flex justify-between flex-row mb-[14px]">
                        <Text className=" font-latoRegular text-sm">¿ Tiene Microchip ?</Text>
                        <View className="flex-row">
                            <Text className="mr-[2px]">No</Text>
                            <ToggleSwitch onToggle={setMicrochipH} value={microchipH} />
                            <Text className="ml-[2px]">Si</Text>
                        </View>
                    </View>
                </View>

                {/* Pedigree */}

                <View className="ml-[24px]">
                    <View className="flex-row justify-between items-center">
                        <Text className="self-start font-latoBold text-[18px] my-[14px]">Pedigree</Text>
                        <View className="flex-row mr-[24px] gap-x-[8px]">
                            {downloadIcon}
                            {shareIcon}
                        </View>
                    </View>

                    <Text className="font-latoRegular text-sm text-[#25314C] mb-[12px]">Acá vas a poder ver el pedigree de tu caballos.</Text>
                    {pedigreePic &&
                        <ScrollView horizontal>
                            <Image source={{ uri: pedigreePic }} />
                        </ScrollView>
                    }
                </View>

                {/* Servicios proximamente */}

                <View className="mx-[24px]">
                    <NavHorizontalScroll tabs={tabs} defaultLink={'Veterinario'} onPress={setActiveLink} containerClass={"my-[28] w-full"} />

                    <ProximamenteComponent />
                </View>
                
                    <View className="w-full px-[24] my-5">
                        <Button label={'Guardar'} extra={'w-full'} disabled={isDisabled} onPress={() => setHorse()} />
                    </View>
                
            </LinearGradient>
        </ScrollView>
    )
}