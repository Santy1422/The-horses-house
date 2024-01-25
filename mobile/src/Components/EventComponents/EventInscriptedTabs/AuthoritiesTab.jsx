import { Text, View } from "react-native"
import EnvelopeSVG from "../../../../assets/icons/EnvelopeSVG"
import { AuthorityRow } from "../AuthorityRow"
import { ContentCard } from "../ContentCard"

const eventAuthorities = [
  { name: 'Ivan Tagle', charge: 'Delegado técnico' },
  { name: 'José Luis Correbo', charge: 'Diseñador de pista' },
  { name: 'Electro-Time', charge: 'Cronometrista' },
  { name: 'Ricardo Bombichino', charge: 'Jurado técnico - Pista A' },
  { name: 'Graciela Valente', charge: 'Jurado técnico - Pista A' },
  { name: 'Pablo Rubio', charge: 'Jurado técnico - Pista A' }
]

const guardia = [
  { name: 'Mariana Estrada', charge: 'Guardia Veterinaria' },
  { name: 'Ariel Rodriguez', charge: 'Guardia Herrería' }
]

const stewards = [
  { name: 'Hector Torres' },
  { name: 'Jorge Nieto' }
]

export const AuthoritiesTab = ({autoridades, clubOrganizador, emailContacto}) => {
  return (
    <>
      <ContentCard title={'Club Organizador'} >
        <AuthorityRow name={clubOrganizador} charge={'Club organizador'} />
      </ContentCard>
      <ContentCard title={'Autoridades del evento'} >
        {
          autoridades.map((auth, i) => {
            return <AuthorityRow key={i} name={auth.nombre} charge={auth.cargo} />
          })
        }
      </ContentCard>
      {/* <ContentCard title={'Guardia'} >
        {
          guardia.map((auth, i) => {
            return <AuthorityRow key={i} name={auth.name} charge={auth.charge} />
          })
        }
      </ContentCard>
      <ContentCard title={'Stewards'} >
        {
          stewards.map((auth, i) => {
            return <AuthorityRow key={i} name={auth.name} />
          })
        }
      </ContentCard> */}
      <ContentCard title={'Contacto'} >
        <View className="fechaDia flex-row items-center">
          <EnvelopeSVG />
          <Text className="dia ml-2 font-latoRegular text-base text-labelDarkBlue">{emailContacto}</Text>
        </View>
      </ContentCard>
    </>
  )
}