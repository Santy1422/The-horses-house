import { Image } from "react-native"

export default MdImage = ({profilePic}) => {
    return (
        <>
            <Image className="w-24 h-24 relative rounded-[200px] shadow border-4 border-white" source={{uri: profilePic}} />
        </>
    )
}