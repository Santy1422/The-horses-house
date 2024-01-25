import { useEffect, useState } from "react"
import TextInput from "../reusableComponents/TextInput"
import DateInput from "../reusableComponents/DateInput"
import HourInput from "../reusableComponents/HourInput"
import DropdownCheckbox from "../reusableComponents/DropdownCheckbox"
import DropdownWeb from "../reusableComponents/DropdownWeb"
import SaleAmountInput from "../reusableComponents/SaleAmountInput"
import TextArea from "../reusableComponents/textAreaInput"
import PremiosGenerales from "./PremiosGenerales"

const categoriasElegir =  ['Iniciados', 'Ponys', 'Escuela Mayor', 'Escuela Menor', 'Children','Tercera', 'Amateur', 'Segunda', "CN1", "CN2", "CN3"];
const tiposElegir = ['S.V.', 'otros']
const alturaElegir = ['0.30 m', '0.50 m', '0.70 m' , '0.90 m' , '1.30 m']
const definicionElegir = ['S/Def','2F Esp','TD','DR','1D','TOD' ]
const caballosElegir = ['S/L','Otro']
const articuloElegir = ['274 2.5','238 2.1','238 2.2']
const pistaElegir = ['Pista "A"', 'Pista "B"', 'Pista "C"']

const DatosPrueba = ({fechaInicio, setPruebasDelEvento , pruebasDelEvento }) => {
    
    const [nombrePrueba, setNombrePrueba] = useState('1')
    const [diaPrueba, setDiaPrueba] = useState(fechaInicio)
    const [horaPrueba, setHoraPrueba] = useState(null)
    const [categorias, setCategorias] = useState(null)
    const [tipo, setTipo] = useState('Seleccionar tipo')
    const [altura, setAltura] = useState('Seleccionar altura')
    const [definicion, setDefinicion] = useState('Seleccionar definición')
    const [caballos, setCaballos] = useState('Seleccionar caballos')
    const [articulo, setArticulo] = useState('---')
    const [pista, setPista] = useState("Seleccionar pista")
    const [precio, setPrecio] = useState(null)
    const [premio, setPremio] = useState([]);
    const [cantidadPremio, setCantidadPremio] = useState(1);
    const [observaciones, setObservaciones] = useState(null)    

    const agregarPrueba = () => {
        setPruebasDelEvento(
            [...pruebasDelEvento, 
                {nombre: nombrePrueba,
                dia: diaPrueba,
                hora: horaPrueba,
                categoria: categorias,
                tipoPrueba: tipo,
                altura,
                definicion,
                caballos,
                articulo,
                arancelInscripcion: precio,
                observaciones,
                pista,
                premios: premio}           
            ]
        )
    }
    
    const handleSelectTipo = (option) => {        
        setTipo(option);
    }
    
    const handleSelectAltura = (option) => {        
        setAltura(option);
    }

    const handleSelectDefinicion = (option) => {        
        setDefinicion(option);
    }

    const handleSelectCaballos = (option) => {        
        setCaballos(option);
    }

    const handleSelectArticulo = (option) => {        
        setArticulo(option);
    }

    const handleSelectPista = (option) => {        
        setPista(option);
    }
    
    return(
        <div className="contenedor container bg-white border rounded-lg border-gray-300 py-12 px-8 flex flex-col gap-4">
            <div className="titulo font-lato text-2xl font-bold leading-8 text-[#23254C] ">Datos de la prueba</div>
            <div className="Nombre">
                <TextInput setValue={setNombrePrueba} label={'Nombre'}  />
            </div>
            <div className="DiaHora">
                <div className="DiaHora flex flex-row gap-[20px]">
                        <DateInput setValue={setDiaPrueba} dateLabel={'Día y hora'} />
                        <HourInput setValue={setHoraPrueba}/>
                </div >
            </div>            
            <div className="Categorias">                
                <DropdownCheckbox opciones={categoriasElegir} setValue={setCategorias} label={'Categorías'}/>
                {/* {categorias && 
                    <div className="categorias flex flex-row">
                        {
                            categorias.map((categoria, index) => {
                                return (
                                    <div className="categoria flex flex-row py-[2px] px-[5px] border border-gray-300 rounded mt-1 items-center hover:cursor-pointer" 
                                        key={index}                                        
                                        onClick={()=> setCategorias( categorias.filter((cat,i) => i != index  ))}
                                        >
                                            <div className="label font-lato text-sm font-normal leading-5 text-[#251431] " >{categoria}</div>

                                            <div className="borrar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.61305 3.11351C3.75949 2.96707 3.99693 2.96707 4.14338 3.11351L6.49953 5.46967L8.85569 3.11351C9.00214 2.96707 9.23957 2.96707 9.38602 3.11351C9.53247 3.25996 9.53247 3.4974 9.38602 3.64384L7.02986 6L9.38602 8.35616C9.53247 8.5026 9.53247 8.74004 9.38602 8.88649C9.23957 9.03293 9.00214 9.03293 8.85569 8.88649L6.49953 6.53033L4.14338 8.88649C3.99693 9.03293 3.75949 9.03293 3.61305 8.88649C3.4666 8.74004 3.4666 8.5026 3.61305 8.35616L5.9692 6L3.61305 3.64384C3.4666 3.4974 3.4666 3.25996 3.61305 3.11351Z" fill="#251431"/>
                                                </svg>
                                        </div>
                                    </div>
                                )
                            }
                            )           
                        }

                    </div>
                }     */}
            </div>
            <div className="Tipo">
                <DropdownWeb options={tiposElegir} selectedOption={tipo} onSelect={handleSelectTipo} label={'Tipo'} />        
            </div>
            <div className="Altura">
                <DropdownWeb options={alturaElegir} selectedOption={altura} onSelect={handleSelectAltura} label={'Altura'} />    
            </div>
            <div className="definicion">
                <DropdownWeb options={definicionElegir} selectedOption={definicion} onSelect={handleSelectDefinicion} label={'Definición'} />    
            </div>
            <div className="caballos">
                <DropdownWeb options={caballosElegir} selectedOption={caballos} onSelect={handleSelectCaballos} label={'Caballos'} />    
            </div>
            <div className="articulo">
                <DropdownWeb options={articuloElegir} selectedOption={articulo} onSelect={handleSelectArticulo} label={'Artículo'} />    
            </div>
            <div className="valor">
                <SaleAmountInput label={'Valor de inscripción'} setValue={setPrecio}/>
            </div>
            <div className="articulo">
                <DropdownWeb options={pistaElegir} selectedOption={pista} onSelect={handleSelectPista} label={'Pista'} />    
            </div>
            <div>
                <PremiosGenerales
                  premio={premio}
                  setPremio={setPremio}
                  setCantidadPremio={setCantidadPremio}
                  cantidadPremio={cantidadPremio}
                />
            </div>
            <div className="observaciones">
                <TextArea setValue={setObservaciones} rows={4} label={'Observaciones'} placeholder={'Ingresar observaciones para la prueba...'}/>    
            </div>
            <div className="boton flex flex-row-reverse  gap-3">
                <div onClick={() => agregarPrueba()} className="botonAgregarAutoridad hover:cursor-pointer w-[170px] h-[36px] border rounded border-[#23254C] flex flex-row justify-center items-center">
                    <div className="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M16.9587 10.0003C16.9587 10.3453 16.6787 10.6253 16.3337 10.6253H11.1253V15.8337C11.1253 16.1787 10.8453 16.4587 10.5003 16.4587C10.1553 16.4587 9.87533 16.1787 9.87533 15.8337V10.6253H4.66699C4.32199 10.6253 4.04199 10.3453 4.04199 10.0003C4.04199 9.65533 4.32199 9.37533 4.66699 9.37533H9.87533V4.16699C9.87533 3.82199 10.1553 3.54199 10.5003 3.54199C10.8453 3.54199 11.1253 3.82199 11.1253 4.16699V9.37533H16.3337C16.6787 9.37533 16.9587 9.65533 16.9587 10.0003Z" fill="#23254C"/>
                        </svg>
                    </div>
                    <div className="label font-lato text-sm font-bold leading-5 text-[#23254C] " >Agregar prueba</div>
                </div>               
            </div>    
        </div>
    )
}

export default DatosPrueba