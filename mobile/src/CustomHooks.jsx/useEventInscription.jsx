import React, { useState } from "react";
import { useSelector } from "react-redux";


export const useEventInscription = () => {
    const user = useSelector((state) => state.ReducerAuth.profile)

    const [isToggled, setIsToggled] = useState(false);
    const [club, setClub] = useState(null)
    const [name, setName] = useState(user.firstName + user.lastName)
    const [email, setEmail] = useState(user.email)
    const [categoria, setCategoria] = useState(null)
    const [caballoPrueba, setCaballoPrueba] = useState(null)
    const [pruebaInscripto, setPruebaInscripto] = useState(null)    
    const [caballosPorPrueba, setcaballosPorPrueba] = useState([])
    const [prueba1, setPrueba1] = useState({
        caballo1: "",
        caballo2: "",
        pruebaId: "",
        price: "",
        nombre: ""
    })
    const [prueba2, setPrueba2] = useState({
        caballo1: "",
        caballo2: "",
        pruebaId: "",
        precio: "",
        nombre: ""

    })

    const guardarInscripcionRedux = () => {       
        const inscripcion = {
            prueba1,
            prueba2,
            clubRepresenta: club,            
            caballoPrueba,            
        }
        dispatch(setEvento(inscripcion))
        navigation.navigate('CheckoutScreen')
    }
    const handleToggle = () => {
      setIsToggled(previousState => !previousState);
    };


    return{
isToggled, setIsToggled, club, setClub,prueba1, setPrueba1, prueba2, setPrueba2, name, setName, email, setEmail, categoria, setCategoria, caballoPrueba, setCaballoPrueba, pruebaInscripto, setPruebaInscripto, caballosPorPrueba, setcaballosPorPrueba, guardarInscripcionRedux, handleToggle
    }
}