import { Image, Text, TouchableOpacity, View } from "react-native"
import { ContentCard } from "../ContentCard"
import { useEffect, useState } from "react"
import { G, Path, Svg } from "react-native-svg"
import Button from "../../Reusable/Button"
import RightArrowSVG from "../../../../assets/icons/RightArrowSVG"


export const ResultadosTabs = ({ pruebas, inscriptos, recibirInscriptos }) => {
    const [days, setDays] = useState([])
    const [months, setMonths] = useState([])
    const [isOpen, setIsOpen] = useState([])

console.log(inscriptos)




    useEffect(() => {
        if (pruebas) {
            let daysArr = []
            let monthsArr = []
            pruebas.forEach(prueba => {
                let date = new Date(prueba.dia)
                daysArr.push(date.getDate())
                monthsArr.push(date.getMonth() + 1)
            })
            setDays(daysArr)
            setMonths(monthsArr)
        }
    }, [])



    const handleIsOpen = (item) => {
        if (isOpen.includes(item)) {
            let newArr = isOpen.filter(openItem => openItem !== item)
            setIsOpen(newArr)
        } else {
            setIsOpen([...isOpen, item])
        }
    }

    return (
        <>
            {
                pruebas.map((prueba, i) => {
                    console.log(prueba.id)
                    return (
                        <ContentCard icon key={i} title={`Prueba ${prueba.nombre}`} id={prueba.id} recibirInscriptos={recibirInscriptos} dropdown isOpenValue={isOpen} value={prueba.nombre} onPress={() => handleIsOpen( prueba.nombre,)} >
                            {isOpen.includes(prueba.nombre) && <>

                                <View className="flex-row self-stretch justify-between h-[72px] bg-white">
                                    <View className="justify-center">
                                        <Text className="text-zinc-700 text-xs font-latoRegular">Resultados en directo</Text>
                                    </View>
    
                                </View>

                                <View className="w-full h-[1] my-[17] bg-[#D1DADA] opacity-50"></View>

                                <View className="flex-row self-stretch justify-between h-[72px] bg-zinc-100 rounded">
                                    <View className="justify-center p-4">
                                        <Text className="text-zinc-700 text-sm font-latoRegular">Fecha</Text>
                                    </View>
                                    <View className="justify-center p-4">
                                        <View className="flex-row">
                                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <G id="calendar-empty-alt">
                                                    <Path id="calendar-empty-alt_2" d="M12 2.5H11.1667V2C11.1667 1.724 10.9427 1.5 10.6667 1.5C10.3907 1.5 10.1667 1.724 10.1667 2V2.5H5.83333V2C5.83333 1.724 5.60933 1.5 5.33333 1.5C5.05733 1.5 4.83333 1.724 4.83333 2V2.5H4C2.388 2.5 1.5 3.388 1.5 5V12C1.5 13.612 2.388 14.5 4 14.5H12C13.612 14.5 14.5 13.612 14.5 12V5C14.5 3.388 13.612 2.5 12 2.5ZM4 3.5H4.83333V4C4.83333 4.276 5.05733 4.5 5.33333 4.5C5.60933 4.5 5.83333 4.276 5.83333 4V3.5H10.1667V4C10.1667 4.276 10.3907 4.5 10.6667 4.5C10.9427 4.5 11.1667 4.276 11.1667 4V3.5H12C13.0513 3.5 13.5 3.94867 13.5 5V5.5H2.5V5C2.5 3.94867 2.94867 3.5 4 3.5ZM12 13.5H4C2.94867 13.5 2.5 13.0513 2.5 12V6.5H13.5V12C13.5 13.0513 13.0513 13.5 12 13.5Z" fill="#494949" />
                                                </G>
                                            </Svg>
                                            <Text className="text-zinc-700 text-xs font-latoRegular">{days[i]}/{months[i]}</Text>
                                        </View>
                                        <View className="flex-row">
                                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <G id="clock">
                                                    <Path id="clock_2" d="M7.99967 0.833008C4.04767 0.833008 0.833008 4.04767 0.833008 7.99967C0.833008 11.9517 4.04767 15.1663 7.99967 15.1663C11.9517 15.1663 15.1663 11.9517 15.1663 7.99967C15.1663 4.04767 11.9517 0.833008 7.99967 0.833008ZM7.99967 14.1663C4.59901 14.1663 1.83301 11.4003 1.83301 7.99967C1.83301 4.59901 4.59901 1.83301 7.99967 1.83301C11.4003 1.83301 14.1663 4.59901 14.1663 7.99967C14.1663 11.4003 11.4003 14.1663 7.99967 14.1663ZM10.353 9.64632C10.5484 9.84165 10.5484 10.1583 10.353 10.3537C10.2557 10.451 10.1277 10.5003 9.99967 10.5003C9.87167 10.5003 9.74366 10.4517 9.64632 10.3537L7.64632 8.35368C7.55232 8.25968 7.49967 8.13233 7.49967 8.00033V4.66699C7.49967 4.39099 7.72367 4.16699 7.99967 4.16699C8.27567 4.16699 8.49967 4.39099 8.49967 4.66699V7.79297L10.353 9.64632Z" fill="#494949" />
                                                </G>
                                            </Svg>
                                            <Text className="text-zinc-700 text-xs font-latoRegular">{prueba.hora}</Text>
                                        </View>
                                    </View>
                                </View>
        
                        
                            </>}
                        </ContentCard>
                    )
                })
            }
            
        </>
    )
}