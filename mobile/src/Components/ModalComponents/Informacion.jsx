import {View, Text, Modal, TouchableOpacity, ScrollView} from "react-native"
import { BlurView } from 'expo-blur';
import {Svg, Path } from "react-native-svg"
import Button from "../Reusable/Button";

const TerminosYCondiciones = ({modalVisible, onClose}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
    >
      <BlurView
        style={{ flex: 1 }}
        intensity={70}
        tint="dark"
        blurReductionFactor={10}
      >
        <View className="w-full h-[626px] my-auto p-4 bg-white rounded-t-[10px] shadow flex flex-col mx-auto">

          <TouchableOpacity onPress={onClose} className="self-end">
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path aquí */}
            </Svg>
          </TouchableOpacity>

          <ScrollView style={{ flex: 1 }}>
            <View className="items-center justify-center px-4">
              {/* SVG del ícono aquí */}
              <Text className="mt-4 text-[#23254C] text-ls  font-lato leading-relaxed text-justify">
              
La presente Política de Privacidad establece los términos en que The Horses House usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web y app mobile. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar periódicamente esta página para asegurarse que está de acuerdo con dichos cambios. {'\n'}
{'\n'}
Información que es recogida{'\n'}
Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónico e información demográfica. Así mismo, cuando sea necesario, podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.{'\n'}
{'\n'}
Uso de la información recogida{'\n'}
Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente, para mantener un registro de usuarios, de pedidos (en caso que aplique) y para mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio. Estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
Estamos altamente comprometidos para cumplir con el compromiso de mantener su información segura. Para ello, usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.{'\n'}
 {'\n'}
Cookies{'\n'}
Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar un permiso para almacenarse en su ordenador. Al aceptar dicho fichero, se crea la cookie y sirve entonces para tener información respecto al tráfico web, y también facilita las futuras noticias. Otra función que tienen las cookies es que con ellas los sitios web pueden reconocerte individualmente y por tanto brindarte un servicio personalizado.{'\n'}
Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico, luego, la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.{'\n'}
{'\n'}
Enlaces a Terceros{'\n'}
Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.{'\n'}
{'\n'}
Control de su información personal{'\n'}
En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.{'\n'}
{'\n'}
The Horses House se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento y sin previo aviso.              </Text>
            </View>
          </ScrollView>

          <Button onPress={onClose} label={'Cerrar'} extra={"border border-[#23254C] min-w-[327px] mx-auto my-4"}>
            {/* Contenido del botón aquí */}
          </Button>
        </View>
      </BlurView>
    </Modal>
  );
};

export default TerminosYCondiciones;
