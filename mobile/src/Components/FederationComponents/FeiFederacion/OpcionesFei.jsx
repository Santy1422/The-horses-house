import { View, Text, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg"
import RadioButton from "../../Reusable/RadioButton"
import { useFederation } from "../../../CustomHooks.jsx/useFederation"


const OpcionesFei = ({seleccion, setSeleccion}) => {

    
    return (
        <View>
            <Text className="selecciona font-latoRegular text-base text-[#23254C] mt-[26px]">Seleccioná a quién deseas registrar</Text>
            <Text className="selecciona font-latoRegular text-sm text-[#666666] mb-[16px] ">(podés seleccionar todas)</Text> 
            <View className="adicionales flex flex-col gap-y-[6px]">
                <TouchableOpacity className="pasaporte bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setSeleccion({...seleccion, Jinete: !seleccion.Jinete})}>
                    <View className="iconoLabel flex flex-row items-center">
                        <View className="icono h-8 w-8 justify-center">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M11.3333 1.5H5C3.388 1.5 2.5 2.388 2.5 4V4.83333H2C1.724 4.83333 1.5 5.05733 1.5 5.33333C1.5 5.60933 1.724 5.83333 2 5.83333H2.5V10.1667H2C1.724 10.1667 1.5 10.3907 1.5 10.6667C1.5 10.9427 1.724 11.1667 2 11.1667H2.5V12C2.5 13.612 3.388 14.5 5 14.5H11.3333C12.9453 14.5 13.8333 13.612 13.8333 12V4C13.8333 2.388 12.9453 1.5 11.3333 1.5ZM12.8333 12C12.8333 13.0513 12.3847 13.5 11.3333 13.5H5C3.94867 13.5 3.5 13.0513 3.5 12V11.1667H4C4.276 11.1667 4.5 10.9427 4.5 10.6667C4.5 10.3907 4.276 10.1667 4 10.1667H3.5V5.83333H4C4.276 5.83333 4.5 5.60933 4.5 5.33333C4.5 5.05733 4.276 4.83333 4 4.83333H3.5V4C3.5 2.94867 3.94867 2.5 5 2.5H11.3333C12.3847 2.5 12.8333 2.94867 12.8333 4V12ZM10 4.16667H6.66667C5.94733 4.16667 5.5 4.61333 5.5 5.33333V7.33333C5.5 8.05333 5.94733 8.5 6.66667 8.5H10C10.7193 8.5 11.1667 8.05333 11.1667 7.33333V5.33333C11.1667 4.61333 10.7193 4.16667 10 4.16667ZM10.1667 7.33333C10.1667 7.43733 10.1473 7.47603 10.1486 7.47803C10.1433 7.48069 10.104 7.5 10 7.5H6.66667C6.566 7.5 6.52596 7.48202 6.52262 7.48202C6.52196 7.48202 6.52197 7.48202 6.52197 7.48202C6.51931 7.47602 6.5 7.43733 6.5 7.33333V5.33333C6.5 5.22933 6.5194 5.19064 6.51807 5.18864C6.5234 5.18597 6.56267 5.16667 6.66667 5.16667H10C10.1213 5.16667 10.1447 5.18532 10.1447 5.18465C10.1474 5.19065 10.1667 5.22933 10.1667 5.33333V7.33333Z" fill="#25314C"/>
                            </Svg>
                        </View>
                        <Text className="label font-latoRegular leading-5 text-[#23254C] ">Jinete</Text>
                    </View>
                    <RadioButton selected={seleccion.Jinete} />                            
                </TouchableOpacity>
                <TouchableOpacity className="chip bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setSeleccion({...seleccion, Caballo: !seleccion.Caballo})}>
                    <View className="iconoLabel flex flex-row items-center">
                        <View className="icono h-8 w-8 justify-center">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M11.3333 1.5H5C3.388 1.5 2.5 2.388 2.5 4V4.83333H2C1.724 4.83333 1.5 5.05733 1.5 5.33333C1.5 5.60933 1.724 5.83333 2 5.83333H2.5V10.1667H2C1.724 10.1667 1.5 10.3907 1.5 10.6667C1.5 10.9427 1.724 11.1667 2 11.1667H2.5V12C2.5 13.612 3.388 14.5 5 14.5H11.3333C12.9453 14.5 13.8333 13.612 13.8333 12V4C13.8333 2.388 12.9453 1.5 11.3333 1.5ZM12.8333 12C12.8333 13.0513 12.3847 13.5 11.3333 13.5H5C3.94867 13.5 3.5 13.0513 3.5 12V11.1667H4C4.276 11.1667 4.5 10.9427 4.5 10.6667C4.5 10.3907 4.276 10.1667 4 10.1667H3.5V5.83333H4C4.276 5.83333 4.5 5.60933 4.5 5.33333C4.5 5.05733 4.276 4.83333 4 4.83333H3.5V4C3.5 2.94867 3.94867 2.5 5 2.5H11.3333C12.3847 2.5 12.8333 2.94867 12.8333 4V12ZM10 4.16667H6.66667C5.94733 4.16667 5.5 4.61333 5.5 5.33333V7.33333C5.5 8.05333 5.94733 8.5 6.66667 8.5H10C10.7193 8.5 11.1667 8.05333 11.1667 7.33333V5.33333C11.1667 4.61333 10.7193 4.16667 10 4.16667ZM10.1667 7.33333C10.1667 7.43733 10.1473 7.47603 10.1486 7.47803C10.1433 7.48069 10.104 7.5 10 7.5H6.66667C6.566 7.5 6.52596 7.48202 6.52262 7.48202C6.52196 7.48202 6.52197 7.48202 6.52197 7.48202C6.51931 7.47602 6.5 7.43733 6.5 7.33333V5.33333C6.5 5.22933 6.5194 5.19064 6.51807 5.18864C6.5234 5.18597 6.56267 5.16667 6.66667 5.16667H10C10.1213 5.16667 10.1447 5.18532 10.1447 5.18465C10.1474 5.19065 10.1667 5.22933 10.1667 5.33333V7.33333Z" fill="#25314C"/>
                            </Svg>
                        </View>
                        <Text className="label font-latoRegular leading-5 text-[#23254C] ">Caballo</Text>
                    </View>
                    <RadioButton selected={seleccion.Caballo} />                            
                </TouchableOpacity>
                <TouchableOpacity className="chip bg-white flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setSeleccion({...seleccion, Entrenador: !seleccion.Entrenador})}>
                    <View className="iconoLabel flex flex-row items-center">
                        <View className="icono h-8 w-8 justify-center">
                            <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <Path d="M11.3333 1.5H5C3.388 1.5 2.5 2.388 2.5 4V4.83333H2C1.724 4.83333 1.5 5.05733 1.5 5.33333C1.5 5.60933 1.724 5.83333 2 5.83333H2.5V10.1667H2C1.724 10.1667 1.5 10.3907 1.5 10.6667C1.5 10.9427 1.724 11.1667 2 11.1667H2.5V12C2.5 13.612 3.388 14.5 5 14.5H11.3333C12.9453 14.5 13.8333 13.612 13.8333 12V4C13.8333 2.388 12.9453 1.5 11.3333 1.5ZM12.8333 12C12.8333 13.0513 12.3847 13.5 11.3333 13.5H5C3.94867 13.5 3.5 13.0513 3.5 12V11.1667H4C4.276 11.1667 4.5 10.9427 4.5 10.6667C4.5 10.3907 4.276 10.1667 4 10.1667H3.5V5.83333H4C4.276 5.83333 4.5 5.60933 4.5 5.33333C4.5 5.05733 4.276 4.83333 4 4.83333H3.5V4C3.5 2.94867 3.94867 2.5 5 2.5H11.3333C12.3847 2.5 12.8333 2.94867 12.8333 4V12ZM10 4.16667H6.66667C5.94733 4.16667 5.5 4.61333 5.5 5.33333V7.33333C5.5 8.05333 5.94733 8.5 6.66667 8.5H10C10.7193 8.5 11.1667 8.05333 11.1667 7.33333V5.33333C11.1667 4.61333 10.7193 4.16667 10 4.16667ZM10.1667 7.33333C10.1667 7.43733 10.1473 7.47603 10.1486 7.47803C10.1433 7.48069 10.104 7.5 10 7.5H6.66667C6.566 7.5 6.52596 7.48202 6.52262 7.48202C6.52196 7.48202 6.52197 7.48202 6.52197 7.48202C6.51931 7.47602 6.5 7.43733 6.5 7.33333V5.33333C6.5 5.22933 6.5194 5.19064 6.51807 5.18864C6.5234 5.18597 6.56267 5.16667 6.66667 5.16667H10C10.1213 5.16667 10.1447 5.18532 10.1447 5.18465C10.1474 5.19065 10.1667 5.22933 10.1667 5.33333V7.33333Z" fill="#25314C"/>
                            </Svg>
                        </View>
                        <Text className="label font-latoRegular leading-5 text-[#23254C] ">Entrenador</Text>
                    </View>
                    <RadioButton selected={seleccion.Entrenador} />                            
                </TouchableOpacity>
            </View>
        </View>                    
    )
}

export default OpcionesFei