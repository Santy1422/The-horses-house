import { useEffect, useState } from "react";
import DropdownCheckbox from "../reusableComponents/DropdownCheckbox";
import TextInput from "../reusableComponents/TextInput";
import CheckboxWeb from "../reusableComponents/CheckboxWeb";

const Premio = ({
    label,
    setValue,
    tipoDePremio,
    categorias,
    premiosTotales,
    index,
    setCantidadPremio,
    cantidadPremio,
}) => {

    const [tiposDePremio, setTiposDePremio] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [addPodio, setAddPodio] = useState(false)
    const [confirmado, setConfirmado] = useState(false)
    const [monto, setMonto] = useState()
    const [monto1, setMonto1] = useState()
    const [monto2, setMonto2] = useState()
    const [monto3, setMonto3] = useState()
    const [monto4, setMonto4] = useState()
    const [otroPremio, setOtroPremio] = useState()

    // const handleSelectOption = (option) => {
    //     setSelectedOption(option);
    //     setCategoria(option);
    //     setNombre2(!nombre2)
    // };
    // useEffect(() => {
    //     setValue(() => [...premiosTotales, { tiposDePremio: tiposDePremio, categoria: categoria }]);
    // }, [tiposDePremio, categoria]);

    // if (premiosTotales.includes({ premio1: [...tiposDePremio], categorias: [...categoria] }))
    return (
        <div className="main container flex flex-col gap-4 pb-6  ">
            <div className="titulo flex flex-row gap-3 items-center justify-between">

                <div className="titulo font-lato text-lg font-bold leading-6 text-[#23254C] ">
                    {label} <span className="text-emerald-600">{ confirmado && "Premio agregado!"}</span>
                </div>
                <div className="botonSacarAutoridad hover:cursor-pointer w-7 h-7 p-[6.22px] bg-white rounded-[3.11px] border border-red-500 flex justify-center items-center">
                    <div
                        className="label font-lato text-sm font-bold leading-5 text-[#23254C] "
                        onClick={() => {
                            setCantidadPremio(cantidadPremio - 1);
                            setValue(premiosTotales.filter((aut, i) => i != index));
                        }}
                    >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="minus">
                                <path id="minus_2" d="M13.0372 8.6442H3.96309C3.60531 8.6442 3.31494 8.35383 3.31494 7.99605C3.31494 7.63827 3.60531 7.3479 3.96309 7.3479H13.0372C13.3949 7.3479 13.6853 7.63827 13.6853 7.99605C13.6853 8.35383 13.3949 8.6442 13.0372 8.6442Z" fill="#FF4136" />
                            </g>
                        </svg>
                    </div>

                </div>

            </div>
            
            <DropdownCheckbox
                label={"Categorias"}
                opciones={categorias}
                setValue={setCategoria}
                placeholder={categoria?.length > 0 ? "" : "Seleccionar categoria"}
            />
            <DropdownCheckbox
                label={"Tipo de premio"}
                opciones={tipoDePremio}
                setValue={setTiposDePremio}
                placeholder={tiposDePremio?.length > 0 ? "" : "Seleccionar tipo de premio"}
            />
            {
                tiposDePremio?.includes("Monetario") &&
                <>
                    <CheckboxWeb opciones={["Agregar podio"]} setValue={() => setAddPodio(!addPodio)} />
                    {
                        !addPodio ?
                            <>
                                <TextInput setValue={setMonto1} label={'1er puesto'} placeholder={'Ingresar un monto'} />
                                <TextInput setValue={setMonto2} label={'2do puesto'} placeholder={'Ingresar un monto'} />
                                <TextInput setValue={setMonto3} label={'3er puesto'} placeholder={'Ingresar un monto'} />
                                <TextInput setValue={setMonto4} label={'4to puesto y resto'} placeholder={'Ingresar un monto'} />
                            </>
                            :
                            <TextInput setValue={setMonto} label={'Monto'} placeholder={'Ingresar un monto'} />
                    }

                </>
            }
            {
                tiposDePremio?.includes("Otro") &&
                <TextInput setValue={setOtroPremio} label={'Tipo de premio (Otro)'} placeholder={'Ingresar tipo de premio...'} height={'120px'}/>
            }
            { tiposDePremio?.length > 0 && categoria?.length > 0 && !confirmado &&
            <div className="w-full flex justify-end">
                <div className="botonSacarAutoridad hover:cursor-pointer w-[170px] h-[36px] border rounded border-[#23254C] flex flex-row justify-center items-center">
                <div
                    className="label font-lato text-sm font-bold leading-5 text-[#23254C] "
                    onClick={() => {
                        setValue(() => [...premiosTotales, { premio1: [...tiposDePremio], categorias: [...categoria] }]);
                        setConfirmado(true)
                    }}
                >
                    Confirmar Premio
                </div>
            </div>
            </div>
            }
        </div>
    )
}
export default Premio