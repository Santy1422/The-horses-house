import TextInput from "../reusableComponents/TextInput"
import DropdownWeb from "../reusableComponents/DropdownWeb"
import AddressInput from "../reusableComponents/AddressInput";
import ImageUpload from "../reusableComponents/ImageUpload";
import { useState } from "react";

const options = ['Entrenamiento', 'Federal', 'Nacional', 'Oficial', 'Regional'];

const DatosBasicos = ({setNombre , setCategoria, setDescripcion , setDireccion}) => {
    
    const [selectedOption, setSelectedOption] = useState('Seleccionar tipo de concurso');

    const handleSelectOption = (option) => {
        setSelectedOption(option)
        setCategoria(option);
    }
    
    return (
        <div className="contenedor container bg-white border rounded-lg border-gray-300 py-12 px-16 flex flex-col gap-4">
            <div className="titulo font-lato text-2xl font-bold leading-8 text-[#23254C] mt-4">Datos básicos</div>
            <div className="nombre">
                <TextInput setValue={setNombre} label={'Nombre'} placeholder={'Ingresar nombre del evento'}/>
            </div>
            <div className="Tipo">
                <DropdownWeb options={options} selectedOption={selectedOption} onSelect={handleSelectOption} label={'Tipo de concurso'}/> 
            </div>
            <div className="description">
                <TextInput setValue={setDescripcion} label={'Descripcion'} placeholder={'Ingresar descripcion para el evento...'} height={'120px'}/>
            </div>
            <div>
                <AddressInput setValue={setDireccion} label={'Ubicacion'} placeholder={'Ingresar direccion'} />
            </div>
            <div>
                <ImageUpload label={'Imagen de portada'}/>
            </div>
        
        </div>
    )
}

export default DatosBasicos