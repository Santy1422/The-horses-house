import React from 'react'
import { Text, View } from 'react-native'
import { MainCheckout } from '../Components/CheckoutComponents/MainCheckout'
import { AddCardCheckout } from '../Components/CheckoutComponents/AddCardCheckout'
import { CardPayCheckout } from '../Components/CheckoutComponents/CardPayCheckout'
import { MercadoPagoCheckout } from '../Components/CheckoutComponents/MercadoPagoCheckout'
import { CashPayCheckout } from '../Components/CheckoutComponents/CashPayCheckout'
import { useCheckout } from '../CustomHooks.jsx/useCheckout'
import { useSelector } from 'react-redux'

export const CheckoutScreen = () => {
    const { selectedToRender, setSelectedToRender } = useCheckout()
    const {inscripcionEvento, federarCaballo, federrarJinete, federarClub, federarEntrenador, federarBinomio, suscribirse} = useSelector((state)=> state.ReducerCart)
    const user = useSelector((state) => state.ReducerAuth.profile)

    let precioPrueba1 = inscripcionEvento.prueba1.precioPrueba
    let precioPrueba2 = inscripcionEvento.prueba2.precioPrueba

    //  precioPrueba1 = prueba1 ? prueba1.precioPrueba : 0;
    //  precioPrueba2 = prueba2 ? prueba2.precioPrueba : 0;
    let uno = precioPrueba1 || 0
    let dos = precioPrueba1 || 0
    let tres = federrarJinete.precio || 0
    const preciototal = uno + dos + tres
    
    let finishPruchase = {
        prueba1:  inscripcionEvento && inscripcionEvento.prueba1 &&  inscripcionEvento.prueba1.pruebaId,
        prueba2:  inscripcionEvento && inscripcionEvento.prueba2 &&  inscripcionEvento.prueba2.pruebaId,
        caballoPrueba1:  inscripcionEvento && inscripcionEvento.prueba1 &&  inscripcionEvento.prueba1.caballos,
        caballoPrueba2:  inscripcionEvento && inscripcionEvento.prueba2 &&  inscripcionEvento.prueba2.caballos,
        precio: preciototal,
        club: inscripcionEvento && inscripcionEvento.clubRepresenta,
        evento: inscripcionEvento && inscripcionEvento.nombreDelEvento, 
        jinete: user.firstName,
        jineteLastName: user.lastName,
        emailJiete: user.email,
        categoria: inscripcionEvento.categoria

    }
    const prueba1 =  inscripcionEvento && {
        nombrePrueba: inscripcionEvento.prueba1.nombrePrueba,
        precioPrueba: inscripcionEvento.prueba1.precioPrueba
    };
    const prueba2 = inscripcionEvento&& {
        nombrePrueba: inscripcionEvento.prueba2.nombrePrueba,
        precioPrueba: inscripcionEvento.prueba2.precioPrueba
    };

    
   
    return (
        <View>
            
        {selectedToRender === '' && <MainCheckout setSelectedToRender={setSelectedToRender} evento={inscripcionEvento} preciototal={preciototal} finishPruchase={finishPruchase}/>}
        {selectedToRender === 'AddCard' && <AddCardCheckout setSelectedToRender={setSelectedToRender} evento={inscripcionEvento} preciototal={preciototal} finishPruchase={finishPruchase}/>}
        {selectedToRender === 'CardPay' && <CardPayCheckout setSelectedToRender={setSelectedToRender} evento={inscripcionEvento} preciototal={preciototal} finishPruchase={finishPruchase}/>}
        {selectedToRender === 'MercadoPay' && <MercadoPagoCheckout federrarJinete={federrarJinete}setSelectedToRender={setSelectedToRender} evento={inscripcionEvento} prueba1={prueba1} prueba2={prueba2} preciototal={preciototal} finishPruchase={finishPruchase} eventId={inscripcionEvento.eventId}/>}
        {selectedToRender === 'CashPay' && < CashPayCheckout federrarJinete={federrarJinete}setSelectedToRender={setSelectedToRender} evento={inscripcionEvento} prueba1={prueba1} prueba2={prueba2} preciototal={preciototal} finishPruchase={finishPruchase} eventId={inscripcionEvento.eventId}/>} 
        </View>
    )
}