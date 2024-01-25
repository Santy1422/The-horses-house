import React from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import { BlurView } from 'expo-blur';
import { Svg, Path } from "react-native-svg";
import Button from "../Reusable/Button";
import EmailInput from "../Reusable/Inputs/EmailInput";
import PasswordInput from "../Reusable/Inputs/PasswordInput";
import { useState } from "react";
import { deleteAccounttoBack } from "../../../auth/userPeticiones";

const DeleteAccountModal = ({ modalVisible, onClose }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const cerrar = async () => {
    await deleteAccounttoBack({
      loading: (a) => console.log(a),
      error: (e) => console.error(e),
      succes: (a) => navigation.navigate("AuthScreen")
    });
  };

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
              <Text className="mt-4 text-[#23254C] text-xl  font-lato leading-relaxed">¿Deseas eliminar tu cuenta?</Text>
              <Text className="mt-4 text-[#23254C] text-ls  font-lato leading-relaxed text-justify">Al eliminar tu cuenta se eliminarán todos tus datos personales y registros hechos en nuestra aplicación, excepto compras y adquisiciones de bienes que se mantendrán hasta perder vigencia legal.</Text>
              <View className="mt-3">
                <View className="mt-2">
                  <EmailInput value={email} setValue={setEmail} label={'Email'} />
                </View>
                <View className="mt-2">
                <PasswordInput value={password} setValue={setPassword} />
                </View>
              </View>

            </View>

          </ScrollView>

          <Button onPress={() => cerrar()} label={'Eliminar Cuenta'} extra={"border border-[#23254C] min-w-[327px] mx-auto my-4"}>
          </Button>
          <Button onPress={onClose} label={'Cancelar'} extra={"border border-[#23254C] min-w-[327px] mx-auto my-4"}>
          </Button>
        </View>
      </BlurView>
    </Modal>
  );
};

export default DeleteAccountModal;
