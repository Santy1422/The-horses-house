import { Image, Text, View } from "react-native"

export const AuthorityRow = ({name, charge}) => {
  return (
    <View className="w-full flex-row min-h-[70px] justify-start items-center gap-2 inline-flex">
        <Image className="rounded-full w-[46px] h-[46px]" source={require('../../images/Avatar.png')}/>
        <View>
            <Text className="text-labelDarkBlue font-latoRegular text-base">{name}</Text>
            { charge && <Text className="text-zinc-700 font-latoRegular text-sm">{charge}</Text>}
        </View>
    </View>
  )
}