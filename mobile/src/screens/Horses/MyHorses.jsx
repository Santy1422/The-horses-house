import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import Button from "../../Components/Reusable/Button"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
// import {Svg, Path} from "react-native-svg"

import { getAllHorses } from "../../../auth/horsePeticiones"
import { setMyHorse } from "../../Redux/ReducerHorse"
import { HorseCard } from "./HorseCard"
import { LinearGradient } from "expo-linear-gradient"
import { BackArrow } from "../../Components/Reusable/BackArrow"
import { NavHorizontalScroll } from "../../Components/EventComponents/NavHorizontalScroll"
import LoadingScreen from "../../Components/Reusable/LoadingScreen"
import { EmptyStateHorses } from "../../Components/Reusable/EmptyStateHorses"

const tabs = ['Todos', 'Silla Argentino', 'Zangersheide', 'Importados', 'Pura sangre', 'Mestizos', 'Silla Francés (SF)', 'Hol Holsteiner', 'Hann Hannoverianos', 'Silla Belga', 'Otras']

export const MyHorses = () => {
    const [activeLink, setActiveLink] = useState('Todos')
    // const [isLoading, setisLoading] = useState(false)
    const [filteredHorses, setFilteredHorses] = useState([]);
    const [isLoading, setisLoading] = useState(true)
  
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const profileHorses = useSelector((state) => state.ReducerHorse.myHorse)
    console.log('profile horses', profileHorses)
    // const horseBreeds = profileHorses.length && profileHorses.map((horse) => horse.breed)
    // const uniqueHorseBreeds = [... new Set(horseBreeds)]
    const owner = useSelector((state) => state.ReducerAuth.profile)


   
    const handleFiltering = () => {
        if (profileHorses.length > 0) {
          if (activeLink === 'Todos') {
            return profileHorses;
          }
          if (activeLink !== 'Todos') {
            return [...profileHorses]?.filter((caballo) => caballo.breed === activeLink);
          }
        }
        return [];
      };

      
      useEffect(() => {
        getAllHorses({
          succes: (v) => {
            dispatch(setMyHorse(v))
            setisLoading(false)
          },
          error: (e) => console.log("error", e),
          loading: (l) => console.log("loading", l)
        });
      }, [dispatch]);

      useEffect(() => {
        setFilteredHorses(handleFiltering());
      }, [activeLink, profileHorses]);
   


    function getAge(propdate) {
        let date = new Date(propdate)
        let today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        let month = today.getMonth() - date.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
            age--;
        }
        return age;
    }


    return (
       <>
       {isLoading ? (
         <LoadingScreen/>
       ) :(
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="h-full w-[100%] items-center px-[24]">
            <BackArrow position={'top-[71] left-[24]'}></BackArrow>
            <Text className="font-latoBold center text-[18px] text-labelDarkBlue mt-[84]">Mis caballos</Text>
        {profileHorses.length ? (
          <>
            <NavHorizontalScroll tabs={tabs} defaultLink={'Todos'} onPress={setActiveLink} containerClass={"my-[28] w-full"} />
            {/* <ScrollView horizontal={true} className="mt-[14] w-full">
                    <View className="flex flex-row justify-around w-full ">
                        <TouchableOpacity className={` flex justify-center items-center h-[42] px-[16] border-b ${!filter ? `border-[#2E2E38]` : `border-[#E6E6E9]` }`} onPress={() => setFilter(false)}>
                            <Text className={` text-sm font-latoRegular ${!filter  ? `text-[#2E2E38] ` : `text-[#666]` }`}>Todos</Text>
                        </TouchableOpacity>
                       {uniqueHorseBreeds?.map((raza) => (
                            <TouchableOpacity key={raza} className={`flex justify-center items-center h-[42] px-[16] border-b ${filter === raza ? `border-[#2E2E38]` : `border-[#E6E6E9]` }`} onPress={() => setFilter(raza)}>
                                <Text className={` text-sm font-latoRegular ${filter === raza ? `text-[#2E2E38]` : `text-[#666]` }`}>{raza}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView> */}
            <ScrollView className="h-full w-full">
                <View className="flex flex-row flex-wrap w-full mx-auto justify-between">
                    { Array.isArray(filteredHorses) && filteredHorses?.map((caballo) => (
                        <HorseCard key={caballo._id} horse={caballo} getAge={getAge} owner={owner} />
))}
                </View>
            </ScrollView>
            <View className="w-full mb-[5%]">
                <Button label={'Agregar caballo'} extra={'w-full font-normal bg-white border border-indigo-950'} type="secondary" onPress={() => navigation.navigate('AddHorses')} >
                

                </Button>
            </View>
            </>
            ) : (
              <View className="my-auto h-auto w-full">
              <EmptyStateHorses />
              </View>
            )}
        </LinearGradient>
       )}
        </>
    )
}