import Button from "./Button";
import { View, Text, Modal, TouchableOpacity } from "react-native"
import { BlurView } from 'expo-blur';
import { configuracionIcon } from "../../../utils/svgIcons";

const ModalAlert = ({ modalVisible, onClose }) => {
  // console.log('modal visible', modalVisible)
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
    >
      <BlurView
        className='blur h-full w-full'
        intensity={50}
      >
        <View className="w-full h-full justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View className="w-full bg-white py-[20] px-[32] rounded-tl-[10px] rounded-tr-[10px]">
            <TouchableOpacity onPress={() => onClose()} className="mt-[10] self-end">
              <CrossSVG color={"#25314C"} size={"24"} stroke={"0.75"} />
            </TouchableOpacity>
            <View className="items-center">
              <View className="w-14 h-14 rounded-full items-center justify-center bg-gray-300 border-8 border-gray-400">
              {configuracionIcon}
              </View>
            </View>
            <View className="mb-[24px]">
              <Text className="text-gray-900 text-center text-lg font-latoBold mt-[8px] mb-[6px]">Próximamente</Text>
              <View className="flex-row w-full justify-center">
                <Text className="text-center text-gray-500 text-sm font-latoRegular">¡Estamos trabajando para traerte nuevas funcionalidades en nuestra aplicación!</Text>
              </View>
            </View>

            <View>
              <Button label={'Aceptar'} extra={'w-full mb-[16px]'} onPress={() => {
                onClose()
              }} />
            </View>

          </View>
        </View>
      </BlurView>
    </Modal>
  );
};
export default ModalAlert;
