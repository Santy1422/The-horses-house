import Jinete from "./Jinete"
import Entrenador from "./Entrenador"
import { View } from "react-native-animatable"
import { ScrollView } from "react-native"

const Todas = ({mostrar, setMostrar}) => {
    
    return (
        <View className="main container">
            <ScrollView>
                <Jinete mostrar={mostrar}/>
                <Entrenador mostrar={mostrar} setMostrar={setMostrar} />
            </ScrollView>        
        </View>
    )
}

export default Todas