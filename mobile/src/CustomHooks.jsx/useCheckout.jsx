import { useState } from "react"

export const useCheckout = () => {

  //modal
  const [modalVisible, setModalVisible] = useState(false);  
  
  // para el checkbox del tipo de pago en MainCheckout
    const [selected, setSelected] = useState('')

    // renderiza el componente seleccionado al presionar "Continuar"
    const [selectedToRender, setSelectedToRender] = useState('')

    // para los estados de add card
    const [card, setCard] = useState({
        cardType: '',
        name: '',
        cardNumDisplay: '',
        cardNum: '',
        expiricy: '',
        cvv: ''
    })

    const [cardError, setCardError] = useState({
        name: false,
        cardNum: false,
        expiricy: false,
        cvv: false
    })

    const [cardFocus, setCardFocus] = useState({
        name: false,
        cardNum: false,
        expiricy: false,
        cvv: false
    })

    const [saveCard, setSaveCard] = useState(false)

    // para el cash pay
    const [success, setSuccess] = useState(false)
    const [codigo, setCodigo] = useState()

    // para el modal de paymentStatus
    const [visible, setVisible] = useState(false)

  return {
    selected, 
    setSelected, 
    selectedToRender, 
    setSelectedToRender,
    card,
    setCard,
    cardError,
    setCardError,
    cardFocus,
    setCardFocus,
    saveCard,
    setSaveCard,
    visible,
    setVisible,
    success,
    setSuccess,
    codigo,
    setCodigo,
    modalVisible,
    setModalVisible
  }
}
