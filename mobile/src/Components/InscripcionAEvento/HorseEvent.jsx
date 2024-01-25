import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import { useEffect, useState } from "react"
import { Svg, Path } from "react-native-svg"
import CustomToggle from "../Reusable/CustomToggle"
import DropdownSearch from "../Reusable/Inputs/DropdownSearch"
import Dropdown from "../Reusable/Inputs/Dropdown"
import DropdownSearchAlt from "../Reusable/Inputs/DropdownSearchAlt"


export const HorseEvent = ({ horses, pruebas, categoriaRider, cantidadCaballos, label, setCantidadCaballos, index, setValue, setScrollToEnd, modalVisible, setModalVisible }) => {

// console.log('horses', horses)
    const caballos = horses.length ? horses : null

    const [primerPrueba, setPrimerPrueba] = useState("")
    const [isToggled, setIsToggled] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Seleccionar prueba');
    const [listaPruebasRetificada, setListaPruebasRectificadas] = useState(null)
    const [prueba, setPrueba] = useState({
        componente: index + 1,
        caballos: [],
        pruebaId: "",
        precioPrueba: "",
        nombrePrueba: ""
    })
    useEffect(() => {
        if (pruebas) {
            const listaPruebas = pruebas.map(prueba => `Prueba ${prueba.nombre}`);
            setListaPruebasRectificadas(listaPruebas);
        } else {
            setListaPruebasRectificadas(["No existen pruebas"]);
        }
    }, [pruebas]);

    useEffect(() => {
        if (selectedOption !== 'Seleccionar prueba') {
            const pruebaElejida = Array.isArray(pruebas) && pruebas.filter(prueba => `Prueba ${prueba.nombre}` === selectedOption) || ["No existen pruebas"]

            setPrueba((prevState) => {
                let newState = { ...prevState }
                newState.pruebaId = pruebaElejida[0].id,
                    newState.precioPrueba = pruebaElejida[0].arancelInscripcion,
                    newState.nombrePrueba = pruebaElejida[0].nombre
                return newState
            })
        }
    }, [selectedOption])

    useEffect(() => {
        setValue(prueba)
    }, [prueba])


    const handleSelectOption = (option) => {
        setPrimerPrueba(option)

        setSelectedOption(option)
    }

    const handlerAgregarCaballo = () => {
        setCantidadCaballos(cantidadCaballos + 1)
        setScrollToEnd(true)
    }

    const handlerQuitarCaballo = () => {
        setCantidadCaballos(cantidadCaballos - 1)
    }

    const handleToggle = () => {
        setIsToggled(previousState => !previousState);
        setScrollToEnd(true)
    }

    const seleccionarCaballo = (value) => {
        setPrueba((estadoPrevio) => {
            let estadoPosterior = { ...estadoPrevio }
            estadoPosterior = { ...estadoPosterior, caballos: value }
            return estadoPosterior
        })
        setScrollToEnd(true)
    }



    return (
        <View className="Container flex pt-7 w-[100%] pb-7">
            <View className="ClubTitle flex-row justify-between items-center">
                {/* <Text className="DatosLabel font-latoBold text-lg leading-[25px] text-[#23254C] ">{ cantidadCaballos ===  1 ? 'Prueba' : `Prueba ${index + 1}`}</Text> */}
                {/* <CustomToggle onToggle={handleToggle} value={isToggled} />         */}
            </View>
            {/* {isToggled && */}
            <View className=" flex-col mt-[-18px] w-[100%]">

            <DropdownSearchAlt
    options={primerPrueba === "" ? 
        Array.isArray(listaPruebasRetificada) && listaPruebasRetificada : 
        Array.isArray(listaPruebasRetificada) && listaPruebasRetificada.filter((ele) => ele !== `Prueba ${primerPrueba}`)}
    selectedOption={selectedOption}
    onSelect={handleSelectOption}
    label={'Prueba a intervenir (Altura)'}
/>
                <Text className="labelSeleccion font-latoRegular text-sm leading-5 mt-2 text-[#6D6E6D] md:text-[18px]">Podés incribirte en hasta 2 pruebas con un caballo.</Text>
                <DropdownSearch label={'Caballo para competir'} options={caballos} setValue={seleccionarCaballo} value={prueba.caballos} modalVisible={modalVisible} setModalVisible={setModalVisible} />



                {cantidadCaballos == index + 1 && cantidadCaballos == 1 ? <TouchableOpacity onPress={handlerAgregarCaballo} className="containerButton flex w-[261] h-9 border border-[#4949A9] rounded mt-5 self-center justify-center items-center flex-row md:w-full md:h-16 md:mt-[50px]">
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M16.4587 10.0003C16.4587 10.3453 16.1787 10.6253 15.8337 10.6253H10.6253V15.8337C10.6253 16.1787 10.3453 16.4587 10.0003 16.4587C9.65533 16.4587 9.37533 16.1787 9.37533 15.8337V10.6253H4.16699C3.82199 10.6253 3.54199 10.3453 3.54199 10.0003C3.54199 9.65533 3.82199 9.37533 4.16699 9.37533H9.37533V4.16699C9.37533 3.82199 9.65533 3.54199 10.0003 3.54199C10.3453 3.54199 10.6253 3.82199 10.6253 4.16699V9.37533H15.8337C16.1787 9.37533 16.4587 9.65533 16.4587 10.0003Z" fill="#4949A9" />
                    </Svg>
                    <Text className="labelButton font-latoRegular text-sm leading-5 md:text-[22px] md:pl-[5px]">Inscribirse a otra prueba</Text>
                </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handlerQuitarCaballo} className="containerButton flex w-[261] h-9 border border-[#4949A9] rounded mt-5 self-center justify-center items-center flex-row md:w-full md:h-16 md:mt-[50px]">
                        <Text className="labelButton font-latoRegular text-sm leading-5 md:text-[22px]">Quitar prueba</Text>
                    </TouchableOpacity>}

            </View>
            {/* }             */}
        </View>
    )
}