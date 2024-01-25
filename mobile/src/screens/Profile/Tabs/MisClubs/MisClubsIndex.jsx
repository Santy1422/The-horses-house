import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { BackArrow } from '../../../../Components/Reusable/BackArrow'
import { Path, Svg } from 'react-native-svg'
import { useEffect, useState } from 'react'
import Button from '../../../../Components/Reusable/Button'
import { searchClubsByName } from '../../../../../auth/clubPeticiones'
import { getUserClubs, updateUser } from '../../../../../auth/userPeticiones'
import { authSetUser } from '../../../../Redux/ReducerAuth'
import { useDispatch } from 'react-redux'
import { all } from 'axios'
import { useNavigation } from '@react-navigation/native'

// const clubes = ['Asoc.C.Ecu.De Endurance Y P.De Fondo Noa', 'Centro Ecuestre Portal Andino', 'Centro Hipico Aires De La Patagonia', 'Establecimiento Ecuestre El Nogal']

const MisClubsIndex = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [allowEdit, setAllowEdit] = useState(false)
    const [userClubs, setUserClubs] = useState(null)
    const [clubBelongsId, setClubBelongsId] = useState()
    const [clubRepresentsId, setClubRepresentsId] = useState()
    const [clubBelongsResults, setClubBelongsResults] = useState([])
    const [clubRepresentsResults, setClubRepresentsResults] = useState([])
    const [clubsStored, setClubsStored] = useState(false)

    const [isDisabled, setIsDisabled] = useState(true);
    const [onFocusRepresent, setOnFocusRepresent] = useState(false)
    const [onFocusBelong, setOnFocusBelong] = useState(false)
    const [searchedClubRepresentsName, setSearchedClubRepresentsName] = useState("")
    const [searchedClubBelongsName, setSearchedClubBelongsName] = useState("")
    const [loadingBelongs, setLoadingBelongs] = useState(false)
    const [loadingRepresents, setLoadingRepresents] = useState(false)

    let searchTimer = null;

    useEffect(() => {

        if (!userClubs) {
            getUserClubs({
                succes: (s) => setUserClubs(s),
                loading: (l) => console.log(l),
                error: (e) => {
                    setUserClubs(null)
                    console.log(e)
                }
            })
        }

        if (clubBelongsId && clubRepresentsId) {
            setIsDisabled(false)
        }
        if (searchedClubRepresentsName.length >= 4 && onFocusRepresent) {
            clearTimeout(searchTimer);
            setLoadingRepresents(true);
            // setSearchError(false);

            searchTimer = setTimeout(() => {
                searchClubsByName({
                    clubName: searchedClubRepresentsName,
                    succes: ((s) => {
                        setClubRepresentsResults(s)
                        setLoadingRepresents(false);
                        // setSearchError(false);
                        // setHorseNotFound(false)
                    }),
                    loading: (l) => setLoadingRepresents(l),
                    error: (e) => {
                        // setSearchError(e)
                        console.log(e)
                        setClubRepresentsResults([])
                        // setHorseNotFound(true)
                    }
                })
            }, 1000)
        } else {
            setLoadingRepresents(false);
            setClubRepresentsResults([])
        }

        if (searchedClubBelongsName.length >= 4 && onFocusBelong) {
            clearTimeout(searchTimer);
            setLoadingBelongs(true);
            // setSearchError(false);

            searchTimer = setTimeout(() => {
                searchClubsByName({
                    clubName: searchedClubBelongsName,
                    succes: ((s) => {
                        setClubBelongsResults(s)
                        setLoadingBelongs(false);
                        // setSearchError(false);
                        // setHorseNotFound(false)
                    }),
                    loading: (l) => setLoadingBelongs(l),
                    error: (e) => {
                        // setSearchError(e)
                        setClubBelongsResults([])
                        // setHorseNotFound(true)
                    }
                })
            }, 1000)
        } else {
            setLoadingBelongs(false);
            setClubBelongsResults([])
        }

        return () => {
            clearTimeout(searchTimer);
        }
    }, [searchedClubRepresentsName, searchedClubBelongsName])

    const handlerChange = (club, type) => {
        if (type === 'belongs') {
            setSearchedClubBelongsName(club)
        } else {
            setSearchedClubRepresentsName(club)
        }
    }

    const handlerFocus = (type) => {
        if (type === 'belongs') {
            setOnFocusBelong(true)
            setOnFocusRepresent(false)
        } else {
            setOnFocusRepresent(true)
            setOnFocusBelong(false)
        }
    }

    const handleSelected = (club, type) => {
        if (type === 'belongs') {
            setClubBelongsId(club.id)
            setSearchedClubBelongsName(club.nombre)
            setClubBelongsResults([])
            setOnFocusBelong(false)
        } else {
            setClubRepresentsId(club.id)
            setSearchedClubRepresentsName(club.nombre)
            setClubRepresentsResults([])
            setOnFocusRepresent(false)
        }
    }

    const handleStoreSelectedClubs = async () => {
        try {
            let editedUser = {
                club: clubBelongsId,
                clubFederado: clubRepresentsId
            }
            await updateUser({
                editedUser,
                succes: ((s) => {
                    console.log(s),
                        dispatch(authSetUser(s.payload))
                }
                ),
                loading: (l) => console.log(l),
                error: (e) => console.log(e)
            })
            await getUserClubs({
                succes: (s) => {
                    setUserClubs(s)
                    setAllowEdit(false)
                },
                loading: (l) => console.log(l),
                error: (e) => {
                    setUserClubs(null)
                    console.log(e)
                }
            })
        } catch (e) { console.log(e) }
        setClubsStored(true)
    }
    console.log("userClubs", !userClubs)
    return (
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="flex w-full h-full">
            <BackArrow position={'top-[71] left-[24]'}></BackArrow>
            <View className='items-center w-full h-11 mt-[84] md:mt-[90]'>
                <Text className="font-latoBold center text-[18px] md:text-[34px] text-labelDarkBlue">Mis Clubs</Text>
            </View>

            <View className='w-full px-[24px]'>

                {/* Club Al Que Perteneces */}

                {(!userClubs || allowEdit) &&
                    <>
                        <View className="labelClub mt-[10px] mb-[6px] z-10 md:mt-[24px] md:mb-[12px]">
                            <Text className="labelClub font-latoRegular text-base leading-6 text-[#23254C] md:text-[22px]">Club al que perteneces</Text>
                        </View>
                        <View className={`Search flex-row bg-white w-full px-[14px] py-[10px] items-center border border-[#CCC] rounded-md z-10 shadow-sm ${onFocusBelong ? 'border-[#6597DD] ' : 'border-[#CCC]'}`} >
                            {!searchedClubBelongsName && <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <Path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#BEBDBD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>}
                            <TextInput onFocus={() => handlerFocus('belongs')} onChangeText={(text) => handlerChange(text, 'belongs')} value={searchedClubBelongsName} className="inputSearch pl-2 md:text-[18px]" placeholder="Buscar club" ></TextInput>
                        </View>
                        {
                            clubBelongsResults.length > 0 &&
                            <View className="w-full">
                                <View className="w-full bg-white rounded mt-[4] p-2 border border-[#CCCCCC]">
                                    {

                                        loadingBelongs ?
                                            <Text className="text-center font-latoBold text-labelDarkBlue text-xl">Cargando...</Text>
                                            :
                                            clubBelongsResults?.map((club, i) => {
                                                return (
                                                    <TouchableOpacity key={i} className="mb-1" onPress={() => handleSelected(club, 'belongs')}>
                                                        <Text>{club.nombre}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                    }
                                </View>
                            </View>
                        }
                        {
                            clubBelongsResults.length === 0 && loadingBelongs &&
                            <View className="w-full">
                                <View className="w-full bg-white rounded mt-[4] p-2 border border-[#CCCCCC]">
                                    <Text className="text-center font-latoBold text-labelDarkBlue text-xl">Cargando...</Text>
                                </View>
                            </View>
                        }
                    </>
                }

                {/* Club Al Que Representas */}


                {(!userClubs || allowEdit) &&
                    <>
                        <View className="labelClub mt-[10px] mb-[6px] z-10 md:mt-[24px] md:mb-[12px]">
                            <Text className="labelClub font-latoRegular text-base leading-6 text-[#23254C] md:text-[22px]">Club que representás</Text>
                        </View>
                        <View className={`Search flex-row bg-white w-full px-[14px] py-[10px] items-center border border-[#CCC] rounded-md z-10 shadow-sm ${onFocusRepresent ? 'border-[#6597DD] ' : 'border-[#CCC]'}`} >
                            {!searchedClubRepresentsName && <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <Path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#BEBDBD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>}
                            <TextInput onFocus={() => handlerFocus('represents')} onChangeText={(text) => handlerChange(text, 'represents')} value={searchedClubRepresentsName} className="inputSearch pl-2 md:text-[18px]" placeholder="Buscar club" ></TextInput>
                        </View>
                        {
                            clubRepresentsResults.length > 0 &&
                            <View className="w-full">
                                <View className="w-full bg-white rounded mt-[4] p-2 border border-[#CCCCCC]">
                                    {

                                        loadingRepresents ?
                                            <Text className="text-center font-latoBold text-labelDarkBlue text-xl">Cargando...</Text>
                                            :
                                            clubRepresentsResults?.map((club, i) => {
                                                return (
                                                    <TouchableOpacity key={i} className="mb-1" onPress={() => handleSelected(club, 'represents')}>
                                                        <Text>{club.nombre}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                    }
                                </View>
                            </View>
                        }
                        {
                            clubRepresentsResults.length === 0 && loadingRepresents &&
                            <View className="w-full">
                                <View className="w-full bg-white rounded mt-[4] p-2 border border-[#CCCCCC]">
                                    <Text className="text-center font-latoBold text-labelDarkBlue text-xl">Cargando...</Text>
                                </View>
                            </View>
                        }
                    </>
                }

                {/* ------ El Usuario ya esta asociado a clubes --------- */}

                {
                    userClubs && !allowEdit &&
                    <>
                        <View className='mt-[20]'>
                            <Text className='mb-[8] text-base font-latoRegular text-labelDarkBlue'>Club al que perteneces</Text>
                            <TouchableOpacity onPress={() => {navigation.navigate('MiClubDetail', {club: userClubs?.club})}} className='w-full  p-[20px] bg-white rounded-[10px] border border-zinc-300'>
                                <Text numberOfLines={1} ellipsizeMode='tail' className='text-labelDarkBlue font-latoBold text-lg'>{userClubs?.club?.nombre}</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='mt-[20]'>
                            <Text className='mb-[8] text-base font-latoRegular text-labelDarkBlue'>Club que representas</Text>
                            <TouchableOpacity onPress={() => {navigation.navigate('MiClubDetail', {club: userClubs?.clubFederado})}} className='w-full  p-[20px] bg-white rounded-[10px] border border-zinc-300'>
                                <Text numberOfLines={1} ellipsizeMode='tail' className='text-labelDarkBlue font-latoBold text-lg'>{userClubs?.clubFederado?.nombre}</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>

            {(!userClubs || allowEdit) ?
                <View className='w-full px-[24px] absolute bottom-4 left-0'>
                    <Button onPress={handleStoreSelectedClubs} label={'Guardar'} extra={'w-full'} disabled={isDisabled} />
                </View>
                :
                <View className='w-full px-[24px] absolute bottom-4 left-0'>
                    <Button onPress={() => setAllowEdit(true)} label={'Editar'} extra={'w-full'} />
                </View>
            }

        </LinearGradient>
    )
}
export default MisClubsIndex