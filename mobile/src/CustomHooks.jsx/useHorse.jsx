import { useState } from "react"

export const  useHorse = () => {

    // General info
    const [horsePic, setHorsePic] = useState('')
    const [horseName, setHorseName] = useState('')
    const [horseNameError, setHorseNameError] = useState(null)
    const [horseBreed, setHorseBreed] = useState(null)
    const [horseBreedError, setHorseBreedError] = useState(null)
    const [horseAAFE, setHorseAAFE] = useState('')
    const [horseAAFEError, setHorseAAFEError] = useState(null)
    const [horseHair, setHorseHair] = useState(null)
    const [minHorseJump, setMinHorseJump] = useState(0.40)
    const [maxHorseJump, setMaxHorseJump] = useState(1.40)
    const [horseGender, setHorseGender] = useState('macho')
    const [horseBirthDate, setHorseBirthDate] = useState(null)
    const [horseBirthDateError, setHorseBirthDateError] = useState(null)
    const [pedigreePic, setPedigreePic] = useState("")
    const [horseId, setHorseId] = useState('')
    // Additional info
    const [sanidadH, setSanidadH] = useState(false)
    const [pateaH, setPateaH] = useState(false)
    const [muerdeH, setMuerdeH] = useState(false)
    const [mansoH, setMansoH] = useState(false)
    const [microchipH, setMicrochipH] = useState(false)


    return {horsePic, setHorsePic, horseName, setHorseName, horseBreed, setHorseBreed, horseAAFE, setHorseAAFE, horseHair, setHorseHair, minHorseJump, setMinHorseJump, maxHorseJump, setMaxHorseJump, horseGender, setHorseGender, horseBirthDate, setHorseBirthDate, sanidadH, setSanidadH, pateaH, setPateaH, muerdeH, setMuerdeH, mansoH, setMansoH, microchipH, setMicrochipH, pedigreePic, setPedigreePic, horseId, setHorseId, horseAAFEError, setHorseAAFEError, horseNameError, setHorseNameError, horseBirthDateError, setHorseBirthDateError, horseBreedError, setHorseBreedError}
}