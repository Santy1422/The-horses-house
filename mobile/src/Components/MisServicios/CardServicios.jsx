import { View, Text, TouchableOpacity } from "react-native";

export const CardServicios = ({ fecha, estado }) => {
  // console.log("props en cardservicios", fecha, estado);

  return (
    <View className="p-[16] mt-[8] w-[47%] bg-white rounded-[10px] border border-gray-300 justify-between items-center">

      <View className="px-2 py-0.5 bg-orange-200 rounded-2xl justify-center items-center flex">
        <Text className="text-center text-yellow-800 text-sm font-bold font-lato leading-tight">
          {estado}
        </Text>
      </View>
      <Text className="text-center text-black text-sm font-latoLight">
        {fecha}
      </Text>

      <TouchableOpacity onPress={() => console.log("editar")} className="self-stretch justify-center items-center">
          <Text className="text-center text-labelDarkBlue text-lg font-latoBold">
            Editar servicio
          </Text>
      </TouchableOpacity>
    </View>
  );
};
