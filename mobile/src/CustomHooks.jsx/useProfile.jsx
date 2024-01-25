import { useState } from "react"

export const useProfile = () => {
    const [profilePic, setProfilePic] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthday, setBirthday] = useState('')

    return {firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber,birthday, setBirthday, profilePic, setProfilePic}
}