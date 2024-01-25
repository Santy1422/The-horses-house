import MdPlaceholder from "./sizes/MdPlaceholder"
import LgPlaceholder from "./sizes/LgPlaceholder"
import MdText from "./sizes/MdText"
import LgText from "./sizes/LgText"
import MdImage from "./sizes/MdImage"
import LgImage from "./sizes/LgImage"
import { useState } from "react"
const ProfilePicComponent = ({type, userName, size, profilePic}) => {
        const [initials, setInitials] = useState('')
        // gets initials of the name 
        function getInitials(txt) {
            const words = txt.split('')
            let initials = ''
            for(let i = 0; i < words.length; i++) {
                initials += words[i].charAt(0).toUpperCase()
            }
            return initials
        }
        // sets initials
        if(userName) {
            let ini = getInitials(userName) 
            setInitials(ini)
        }
        

        return (
            <>
            {type === 'placeholder' && size == 'md' && <MdPlaceholder/> }
            {type === 'placeholder' && size == 'lg' && <LgPlaceholder/> }
            {type === 'text' && size == 'md' && <MdText ini={initials}/> }
            {type === 'text' && size == 'lg' && <LgText ini={initials}/> }
            {type === 'image' && size == 'md' && <MdImage profilePic={profilePic}/>}
            {type === 'image' && size == 'lg' && <LgImage profilePic={profilePic}/>}
            </>
        )
    
}

export default ProfilePicComponent