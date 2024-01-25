import { ScrollView, View, TouchableOpacity, Text, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import { Svg , Path } from 'react-native-svg';
import RadioButton from '../../Reusable/RadioButton';
import Button from '../../Reusable/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch , useSelector } from 'react-redux';
import { setearReceptorCredencial } from '../../../Redux/ReducerCart';

const ModalBinomioPasaporteChip = ({modalVisible, setModalVisible, receptorCredencial, setReceptorCredencial, setModalEnvioDatos, setSteps}) => {
    
  const navigation = useNavigation()
  const dispatch = useDispatch()
  

    const closeModal = () => {
        setModalVisible(false);
      };
    
    const continuar = () => {
      if (receptorCredencial.envioCorreo) setModalEnvioDatos(true)
      if (receptorCredencial.personalmente){               
        dispatch(setearReceptorCredencial(receptorCredencial))       
        setSteps(3)
      } 
      setModalVisible(false)
      
      
    }
    
      return (
        <ScrollView className="bg-white h-full">
          
          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide" 
            onRequestClose={closeModal}
          >
              <View className=' flex flex-1 justify-end'>
              <BlurView          
              className='blur flex flex-1 justify-end items-center '
              intensity={80}
              tint='dark'
              blurReductionFactor={15}
              
              
            >
              <View className='bg bg-white rounded-md w-full px-6 pt-6 h-[350px]'>
                <View className='header flex flex-row justify-between mb-12'>
                  <Text className="titulo font-latoBold text-lg leading-[25] text-[#23254C] ">¿Cómo querés obtener tu pasaporte y/o chip?</Text>
                  <TouchableOpacity onPress={closeModal}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <Path d="M18.5297 17.4707C18.8227 17.7637 18.8227 18.2388 18.5297 18.5318C18.3837 18.6778 18.1917 18.7517 17.9997 18.7517C17.8077 18.7517 17.6158 18.6788 17.4698 18.5318L11.9997 13.0617L6.52975 18.5318C6.38375 18.6778 6.19175 18.7517 5.99975 18.7517C5.80775 18.7517 5.61575 18.6788 5.46975 18.5318C5.17675 18.2388 5.17675 17.7637 5.46975 17.4707L10.9398 12.0008L5.46975 6.53079C5.17675 6.23779 5.17675 5.76275 5.46975 5.46975C5.76275 5.17675 6.23775 5.17675 6.53075 5.46975L12.0008 10.9398L17.4707 5.46975C17.7637 5.17675 18.2387 5.17675 18.5317 5.46975C18.8247 5.76275 18.8247 6.23779 18.5317 6.53079L13.0617 12.0008L18.5297 17.4707Z" fill="#929291"/>
                    </Svg>
                  </TouchableOpacity>
                </View>
                
                
                <View className="adicionales flex flex-col gap-y-[6px]">
                        <TouchableOpacity className="pasaporte flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setReceptorCredencial({...receptorCredencial, personalmente: !receptorCredencial.personalmente, envioCorreo: receptorCredencial.personalmente})}>
                            <View className="iconoLabel flex flex-row items-center">
                              <RadioButton selected={receptorCredencial.personalmente} />
                              <Text className="label font-latoRegular leading-5 text-[#23254C] pl-2 ">Retirar personalmente en sede</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="chip flex flex-row p-4 justify-between border rounded border-[#BEBDBD] items-center" onPress={()=> setReceptorCredencial({...receptorCredencial, envioCorreo: !receptorCredencial.envioCorreo, personalmente: receptorCredencial.envioCorreo})}>
                            <View className="iconoLabel flex flex-row items-center">                                
    
                              <RadioButton  selected={receptorCredencial.envioCorreo}/>                            
                              <Text className="label font-latoRegular leading-5 text-[#23254C] pl-2 ">Envio por correo</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View className="flex items-center mt-[42px] mb-[38px]">
                        <Button  label="Continuar" extra=" w-full " onPress={continuar}/> 
                    </View> 
              </View>
            </BlurView>
            </View>
          </Modal>
          
        </ScrollView>
      );

}

export default ModalBinomioPasaporteChip