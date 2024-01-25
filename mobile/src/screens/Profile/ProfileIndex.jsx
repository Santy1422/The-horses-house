import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ProximamenteComponent } from "../../Components/Reusable/ProximamenteComponent"
import Badge from "../../Components/Reusable/Badge"
import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native"
import { configuracionIcon, editarIcon, userIcon } from "../../../utils/svgIcons"
import { LinearGradient } from "expo-linear-gradient"
import { BackArrow } from "../../Components/Reusable/BackArrow"
import { ServiceButtons } from "./CustomButtonSet/ServiceButtons"
import HybridServiceButtons from "./CustomButtonSet/HybridServiceButtons"
import { useNavigation } from "@react-navigation/native"
import BlacksmithButtons from "./CustomButtonSet/BlacksmithButtons"


export const ProfileIndex = ({ }) => {
  const [profileType, setProfileType] = useState()
  const profession = useSelector((state) => state.ReducerProfesion.profesiones)
  const user = useSelector((state) => state.ReducerAuth.profile)
  const navigation = useNavigation()

  const mappingObject = {
    "riderProfesional": "Rider Profesional",
    "riderNoProfesional": "Rider No Profesional",
    "riderDomador": "Rider Domador",
    "dueño_de_haras": "Dueño de Haras",
    "herrero": "Herrero",
    "veterinario": "Veterinario",
    "transportista": "Transportista",
    "criador": "Criador",
    "caballerizo": "Caballerizo"
  };

  const transformObjectToArray = (obj) => {
    const result = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key].isActive) {
        result.push(key);
      }
    }
    return result;
  };

  const transformArray = (arr, mapping) => {
    const result = [];
    arr.forEach(item => {
      if (mapping[item]) {
        result.push(mapping[item]);
      }
    });
    return result;
  };



  const professionsArr = transformObjectToArray(profession);

  const profileProfessions = transformArray(professionsArr, mappingObject)

  useEffect(() => {
    if (profileProfessions.length == 1) {
      if (profileProfessions[0] === "Rider Profesional" || profileProfessions[0] === "Rider No Profesional" || profileProfessions[0] === "Rider Domador") {
        setProfileType('Rider')
        // console.log(profileProfessions[0] === "Rider Profesional" || "Rider No Profesional")
      }
      if (profileProfessions[0] === "Dueño de Haras" || profileProfessions[0] === "Veterinario" || profileProfessions[0] === "Criador" || profileProfessions[0] === "Organizador de Eventos" || profileProfessions[0] === "Club Equitacion" || profileProfessions[0] === "Caballerizo") {
        setProfileType('Service')
      }
      if (profileProfessions[0] === "Herrero") {
        setProfileType('Herrero')
      }
      if (profileProfessions[0] === "Rider Domador") {
        setProfileType('Hybrid')
      }
      if (profileProfessions[0] === "Transportista") {
        setProfileType('Transportista')
      }
      if (profileProfessions[0] === "Criador") {
        setProfileType('Criador')
      }
      if (profileProfessions[0] === "Caballerizo") {
        setProfileType('Caballerizo')
      }
    } else { setProfileType('Hybrid') }
    // setProfileType('Transportista')
  }, [profession])
  if (profileProfessions && profileType) {

    return (
      <ScrollView className="bg-white h-full w-full">
        <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="flex w-full justify-around items-center">
          <BackArrow destination={'ScreenEvent'} position={'top-[71] left-[24]'}></BackArrow>

          <Text className="font-latoBold center text-[18px] md:text-[34px] text-labelDarkBlue mt-[84] md:mt-[90]">Perfil</Text>

          <View className="flex flex-row w-full mt-[43] justify-center items-center">
            <TouchableOpacity className="rounded-full bg-[#D1DADA] h-[38px] w-[38px] mr-[31] md:w-[48px] md:h-[48px] md:mr-[46] flex justify-center items-center" onPress={() => navigation.navigate('EditProfile')} >
              <View className="w-[26] h-[26] md:w-[36] md:h-[36]">
                {editarIcon}
              </View>
            </TouchableOpacity>

            <View className="w-[73px] h-[73px] md:w-[113px] md:h-[113px] bg-[#6597DD] border-4 border-white rounded-full justify-center items-center" style={{
              shadowColor: 'rgba(0, 0, 0, .5)',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 12,
            }}>
              {/*  */}
              {
                user?.profilePic ?
                  <Image className="w-full h-full rounded-full" source={{ uri: user.profilePic }} />
                  :
                  { userIcon }
              }

            </View>

            <TouchableOpacity className="rounded-full bg-[#D1DADA] h-[38px] w-[38px] ml-[31] md:w-[48px] md:h-[48px] md:ml-[46] flex justify-center items-center" onPress={() => navigation.navigate('ConfigProfile')}>
              <View className="w-[24] h-[24] md:w-[34] md:h-[34]">
                {configuracionIcon}
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex items-center justify-center w-full flex-col mx-5  mt-[6px] md:mx-0">
            {
              user.firstName || user.lastName ?
                <Text className="font-latoBold text-[#101828] text-lg md:text-[34px] md:pt-[5px] md:my-[10px]">{user.firstName}{user.lastName ? ` ${user.lastName}` : ''}</Text>
                :
                <Text className="font-latoBold text-[#101828] text-lg md:text-[34px]">Usuario</Text>
            }
            <View className="flex-row">
              {/* for each tag... */}
              {
                profileProfessions.length > 0 ?
                  profileProfessions.map((profession) => (
                    <Badge key={profession} label={profession} color={'red'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 py-0.5 mt-[16] md:mx-2 md:h-9 md:px-5 flex text-center items-center justify-around flex-row bg-[#FBF1EF] ${profession === 'Veterinario' && 'bg-[#FFF8F0]'} ${profession === 'Herrero' && 'bg-[#F6F4FB]'}`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-[#C70117] ${profession === 'Veterinario' && 'text-[#975100]'} ${profession === 'Herrero' && 'text-[#4E3B8E]'}`} />
                  ))
                  :

                  <Badge label={"Sin Profesion"} color={'red'} badgeClass={'rounded-2xl mx-1 h-6 px-2.5 py-0.5 mt-[16] flex text-center items-center justify-around flex-row bg-[#FBF1EF]'} labelClass={'font-latoBold text-[14px] text-[#C70117]'} />
              }

            </View>
          </View>

          <View className="mx-[24] md:mx-[100px]">
            {profileType === 'Rider' || profileType === 'Service' ?
              <ServiceButtons profession={profileType} />
              :
              profileType === 'Herrero' || profileType === 'Transportista' || profileType === 'Criador' || profileType === 'Caballerizo' ?
                <BlacksmithButtons profession={profileType} />
                :
                <HybridServiceButtons />
            }
          </View>

          <View className="mt-[34] mx-[24] md:mx-[100px]">
            <Text className="text-[#020623] text-lg md:text-[34px] md:pt-[5px] font-latoBold">Próximos Servicios</Text>
            <Text className="text-slate-800 text-sm md:text-[20px] md:mt-[12px]">Acá vas a poder ver los servicios próximos que le debes realizar a tus caballos.</Text>

            <ProximamenteComponent />
            {/* Rider */}

            {/* <NextServices /> */}

            {/* Hybrid */}

            {/* {activeLink === 'Todos' &&
                        <>
                            <View>
                                <Text className="text-[#020623] text-lg font-latoBold">Servicios mis clientes</Text>
                                <ClientNextServices />
                            </View>
                            <View>
                                <Text className="text-[#020623] text-lg font-latoBold">Servicios mis caballos</Text>
                                <NextServices />
                            </View>
                        </>

                    }
                    {activeLink === 'Mis Clientes' &&
                        <View className="mb-[16]">
                            <ClientNextServices />
                        </View>
                    }
                    {activeLink === 'Mis Caballos' &&
                        <NextServices />
                    } */}

            {/* Service */}

            {/* <ClientNextServices /> */}
          </View>
        </LinearGradient>
      </ScrollView>
    )
  }
}