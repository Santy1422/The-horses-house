import { View, Text, TouchableOpacity } from "react-native";
import { AgregarServicio } from "./AgregarServicio";
import { CardServicios } from "./CardServicios";
import { useSelector } from "react-redux";
import { serviciosVeterinarios }  from "../../../utils/tabs";
import {useEffect, useState} from "react"
import CustomToggle from "../Reusable/CustomToggle";

export const Veterinario = ({ props, tipoServicio }) => {
  const servicioSolicitado = useSelector(
    (state) => state.ReducerMisServicios.servicios[0]
  );
  const [serviciosAbiertos, setServiciosAbiertos] = useState({}); //obj para ir guardando todos los servicios abiertos

const toggleDropdown = (servicio) => {
  setServiciosAbiertos((prev) => ({
    ...prev,
    [servicio]: !prev[servicio],
  }));
};

useEffect(() => {
  if(serviciosVeterinarios){
    toggleDropdown(serviciosVeterinarios[0])
  }
},[])

  return (
    <View className="mt-4 mb-[500] w-[100%]">
      {typeof props[0] === "string" ? (
        <Text>{props[0]}</Text>
      ) : (
        serviciosVeterinarios?.map((servicio) => {
          // console.log('serv', servicio)
          return (
            <View key={servicio} className="mb-[15] w-[100%]">
              <TouchableOpacity className="w-[100%] py-2 rounded flex-row justify-start items-center" onPress={() => toggleDropdown(servicio)}>
              <Text className="w-[94%] h-[26px] text-slate-700 text-lg font-latoBold">
                {servicio}
              </Text>
              <CustomToggle onToggle={() => toggleDropdown(servicio)} value={serviciosAbiertos[servicio]} />
              </TouchableOpacity >
              {serviciosAbiertos[servicio] &&
              <View className="flex-row justify-between">
                <AgregarServicio
                  servicio={servicio}
                  tipoServicio={tipoServicio}
                  horse={props._id}
                />

                {servicioSolicitado.veterinario[0]
                  ? servicioSolicitado.veterinario.map((serv, i) => {
                      if (serv.servicio === servicio) {
                        return (
                          <>
                            <CardServicios
                              key={i}
                              fecha={serv.fecha}
                              estado={serv.status}
                            />
                          </>
                        );
                      }
                    })
                  : null}
              </View>
        }
            </View>
          );
        })
      )}
    </View>
  );
};
