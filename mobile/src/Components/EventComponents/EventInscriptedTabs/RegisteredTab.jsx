import { useState } from "react"
import { ContentCard } from "../ContentCard"
import { Text, View } from "react-native"
import Button from "../../Reusable/Button"

const inscriptos = [
  {
    nombre: 'J. Maria Larocca',
    ordenEntrada: '01',
    caballo: 'Pegasus Kiss Me',
    clubPertenece: 'CHA',
    categoria: 'Amt'
  },
  {
    nombre: 'Florencia Marconetto',
    ordenEntrada: '02',
    caballo: 'Dos Marias Ambiciosa',
    clubPertenece: 'CHA',
    categoria: 'Amt'
  },
  {
    nombre: 'Carlos Scarano',
    ordenEntrada: '03',
    caballo: 'Pegasus Emily',
    clubPertenece: 'CHA',
    categoria: 'Amt'
  },
  {
    nombre: 'Veronica Blundi',
    ordenEntrada: '04',
    caballo: 'Chakira Blue',
    clubPertenece: 'CHA',
    categoria: 'Amt'
  },
  {
    nombre: 'Farah Stambul',
    ordenEntrada: '05',
    caballo: 'Baral Tansania',
    clubPertenece: 'CHA',
    categoria: 'Amt'
  },
  {
    nombre: 'Julia Inchauspe',
    ordenEntrada: '06',
    caballo: 'Courtesy Z',
    clubPertenece: 'CHA',
    categoria: 'Amt'
  }
]

export const RegisteredTab = ({ pruebas }) => {
  const [isOpen, setIsOpen] = useState([])

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
          return (
            <ContentCard icon supporting={`${prueba.definicion} | ${prueba.altura}`} key={i} title={`Prueba ${prueba.nombre}`} dropdown isOpenValue={isOpen} value={prueba.nombre} onPress={() => handleIsOpen(prueba.nombre)} >
              {isOpen.includes(prueba.nombre) && <>
                {
                  inscriptos.map((inscripto, i) => {
                    return (
                      <>
                        {i % 2 !== 0 ?
                          <View key={i} className="flex-row self-stretch mt-[16] p-4 justify-start h-[72px] bg-zinc-100 rounded">
                            <View className="justify-center">
                              <Text className="text-labelDarkBlue text-[28px] font-latoBold">{inscripto.ordenEntrada}</Text>
                            </View>
                            <View className="justify-center ml-[16]">
                              <View>
                                <Text className="text-base text-labelDarkBlue font-latoBold">{inscripto.nombre}</Text>
                              </View>
                              <View className="flex-row">
                                <Text className="text-zinc-700 text-sm font-latoRegular">{inscripto.caballo} |</Text>
                                <Text className="text-zinc-700 text-sm font-latoRegular"> {inscripto.categoria} |</Text>
                                <Text className="text-zinc-700 text-sm font-latoRegular"> {inscripto.clubPertenece}</Text>
                              </View>
                            </View>
                          </View>
                          :
                          <View key={i} className={`flex-row self-stretch ${i !== 0 && 'mt-[16]'} gap-x-[16] p-4 justify-start h-[72px] bg-white rounded`}>
                            <View className="justify-center ">
                              <Text className="text-labelDarkBlue text-[28px] font-latoBold">{inscripto.ordenEntrada}</Text>
                            </View>
                            <View className="justify-center ">
                              <View>
                                <Text>{inscripto.nombre}</Text>
                              </View>
                              <View className="flex-row">
                                <Text>{inscripto.caballo} |</Text>
                                <Text> {inscripto.categoria} |</Text>
                                <Text> {inscripto.clubPertenece}</Text>
                              </View>
                            </View>
                          </View>
                        }
                      </>
                    )
                  })
                }
              </>
              }
            </ContentCard>
          )
        })
      }
      
    </>
  )
}