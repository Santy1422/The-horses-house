import { View, Text, TouchableOpacity } from "react-native";
import { AgregarServicio } from "./AgregarServicio";
import { CardServicios } from "./CardServicios";
import { useSelector } from "react-redux";
import { serviciosTransporte } from "../../../utils/tabs";
import {useEffect, useState} from "react"
import CustomToggle from "../Reusable/CustomToggle";

export const Transporte = ({ props, tipoServicio }) => {
  const servicioSolicitado = useSelector(
    (state) => state.ReducerMisServicios.servicios[3]
  );

  const [serviciosAbiertos, setServiciosAbiertos] = useState({}); //obj para ir guardando todos los servicios abiertos

  const toggleDropdown = (servicio) => {
    setServiciosAbiertos((prev) => ({
      ...prev,
      [servicio]: !prev[servicio],
    }));
  };
  
  useEffect(() => {
    if(serviciosTransporte){
      toggleDropdown(serviciosTransporte[0])
    }
  },[])

  return (
    <View className="mt-4 mb-[500]">
      {typeof props[0] === "string" ? (
        <Text>{props[0]}</Text>
      ) : (
        serviciosTransporte.map((servicio) => {
          return (
            <View key={servicio} className="mb-[15] w-[100%]">
              <TouchableOpacity className="w-[100%] py-2 rounded flex-row justify-start items-center" onPress={() => toggleDropdown(servicio)}>
              <Text className="w-[94%] h-[26px] text-slate-700 text-lg font-latoBold">
                {servicio}
              </Text>
              <CustomToggle onToggle={() => toggleDropdown(servicio)} value={serviciosAbiertos[servicio]} />
              </TouchableOpacity>
              {serviciosAbiertos[servicio] &&
              <View className="flex-row justify-between">
              <AgregarServicio
                servicio={servicio}
                tipoServicio={tipoServicio}
                horse={props._id}
              />
              {servicioSolicitado.transporte[0]
                ? servicioSolicitado.transporte.map((serv, i) => {
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
