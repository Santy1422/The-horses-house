import react, { useState } from "react"

export const useFederation = () => {
    const [steps, setSteps] = useState(0)
    const [tipoRegistro, setTipoRegistro] = useState("")
    const [numeroCelular, setNumeroCelular] = useState("")
    const [club, setClub] = useState({
        nombre:"",
        categoria:'',
        email:'',
        telefono:'',
    })
    
    const [jinete, setJinete] = useState({
        nombreApellido: "",
        emailJinete: "",
        dni: "",
        disciplinaJinete: "",
        fotoFrente:'',
        fotoDorso:''
    })
    const [caballo, setCaballo] = useState({
        nombreCaballo: "",
        disciplinaCaballo: "",
        emailOwner: "",
        solicitaPasaporte: false,
        solicitaChip: false,
        renovacion: false,
        ingreso: false,
        primeraVez: false,
        club: '',
        numeroFederacionNacional:'',
    })
    const [receptorCredencial, setReceptorCredencial] = useState({
        personalmente: false,
        envioCorreo: false,
        nombreReceptor: "",
        domicilio: "",
        localidad: "",
        provincia: "",
        codigopostal: "",
    })
    const [entrenador, setEntrenador] = useState({
        fechaNacimientoEntrenador: "",
        nombreEntrenador: "",
        emailEntrenador: "",
        emailClub: "",
        disciplinaClub: "",
    })
    const [costoFederacion, setCostoFederacion] = useState(0)
    const [comision, setComision] = useState(0)
    const [totalPagar, setTotalPagar] = useState(0)


return{
    steps, setSteps, tipoRegistro, setTipoRegistro, club, setClub, numeroCelular, setNumeroCelular,jinete, setJinete, caballo, setCaballo, receptorCredencial, setReceptorCredencial,entrenador, setEntrenador,costoFederacion, setCostoFederacion, comision, setComision, totalPagar, setTotalPagar
}
}