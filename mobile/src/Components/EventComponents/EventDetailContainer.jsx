import { Image, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Badge from "../Reusable/Badge"
import DownloadButton from "../Reusable/DownloadButton"
import { BackArrow } from "../Reusable/BackArrow"
import ContestSVG from "../../../assets/icons/ContestSVG"

export const EventDetailContainer = ({ children, mes, dia, tipoConcurso, nombreEvento, imgSource, noDownload }) => {

  return (
    <View className="min-h-[100vh] bg-white">
      <BackArrow position={'top-[71] left-[24]'}></BackArrow>
      <View className="dia flex absolute justify-center items-center bg-white right-[24] rounded top-[71] z-20 ">
        {/* {noDownload !== true && <DownloadButton />} */}
      </View>
      <Image className="imagen w-full md:h-[450px] z-0 " source={imgSource}></Image>
      {/* <View className="dia flex-col w-[60px] h-[60px] absolute justify-center items-center bg-white right-6 rounded top-[210] z-20 border">
        <Text className="mes font-latoBold text-sm">{mes}</Text>
        <Text className="dia font-latoBold text-2xl">{dia}</Text>
      </View> */}
      <LinearGradient colors={['#F0F0F8', '#FFFFFF']} className="w-full h-full items-start px-5 md:px-[100px] rounded-tl-[10px] mb-[60] rounded-tr-[10px] left-0 top-[-85] ">
        <Badge icon={<ContestSVG color={"#23254C"}/>} label={tipoConcurso} badgeClass={'mt-[22] flex-row rounded-2xl items-center px-2.5 py-0.5 bg-white'} labelClass={'text-labelDarkBlue font-latoBold text-sm md:text-xl  pl-[6]'} />
        <Text numberOfLines={2} ellipsizeMode="tail" className="text-labelDarkBlue font-latoBold text-[28px] md:text-[44px] md:pt-[10px] leading-9 mt-[12] md:mt-[24]">{nombreEvento}</Text>
        {children}
      </LinearGradient>
    </View>
  )
}
