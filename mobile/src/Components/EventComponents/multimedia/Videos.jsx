import { View } from 'react-native'
import VideoPlayer from './VideoPlayer'
import { Path, Svg } from 'react-native-svg'
import { Text } from 'react-native'




const Videos = ({ videos }) => {
  return (
    <View className='w-full'>
      {videos.length > 0 ?
        videos?.map((video, i) => {
          return (
            <View key={i} className='w-full my-[12]'>
              <VideoPlayer videoSource={video} />
            </View>
          )
        })
        :
        <View className="mt-[55px] md:mt-[300] w-full items-center">
          <View className="w-[70px] h-[70px] md:h-[120px] md:w-[120px] bg-neutral-200 rounded-full items-center justify-center mb-[16]">
            <Svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 20 20" fill="none">
              <Path d="M14.6875 1.875H5.3125C3.09583 1.875 1.875 3.09583 1.875 5.3125V14.6875C1.875 16.9042 3.09583 18.125 5.3125 18.125H14.6875C16.9042 18.125 18.125 16.9042 18.125 14.6875V5.3125C18.125 3.09583 16.9042 1.875 14.6875 1.875ZM16.875 5.3125V6.875H13.125V3.125H14.6875C16.2208 3.125 16.875 3.77917 16.875 5.3125ZM8.125 6.875V3.125H11.875V6.875H8.125ZM5.3125 3.125H6.875V6.875H3.125V5.3125C3.125 3.77917 3.77917 3.125 5.3125 3.125ZM14.6875 16.875H5.3125C3.77917 16.875 3.125 16.2208 3.125 14.6875V8.125H16.875V14.6875C16.875 16.2208 16.2208 16.875 14.6875 16.875ZM12.4775 10.9292L9.85413 9.32332C9.41913 9.05666 8.87251 9.04669 8.42834 9.29586C7.97751 9.54836 7.70915 10.0066 7.70915 10.5225V13.6442C7.70915 14.16 7.97751 14.6183 8.42834 14.8708C8.64251 14.9908 8.88003 15.0509 9.11753 15.0509C9.37337 15.0509 9.62829 14.9817 9.85413 14.8433L12.4767 13.2383C12.8825 12.99 13.125 12.5583 13.125 12.0833C13.125 11.6083 12.8825 11.1767 12.4775 10.9292ZM11.8241 12.1716L9.20085 13.7775C9.13251 13.8183 9.07587 13.8009 9.0392 13.7809C9.00254 13.7601 8.95833 13.72 8.95833 13.6442V10.5225C8.95833 10.4475 9.00254 10.4066 9.0392 10.3857C9.0592 10.3741 9.08668 10.3642 9.11835 10.3642C9.14335 10.3642 9.17166 10.3709 9.20166 10.3892L11.825 11.995C11.825 11.995 11.825 11.995 11.8259 11.995C11.8584 12.015 11.8758 12.045 11.8758 12.0825C11.8758 12.12 11.8575 12.1516 11.8241 12.1716Z" fill="#23254C" />
            </Svg>
          </View>
          <View className="items-center my-[16] gap-y-[4]">
            <Text className="text-labelDarkBlue font-latoBold text-lg md:text-[30px]">Aun no hay videos</Text>
            <Text className="text-zinc-700 text-sm md:text-[22px] md:pt-[26px] font-latoRegular text-center">En cuanto se suban los vas a poder ver aca.</Text>
          </View>
        </View>
      }
    </View>
  )
}
export default Videos