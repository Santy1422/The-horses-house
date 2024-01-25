import { View, Text } from "react-native";
import { AgregarServicio } from "./AgregarServicio";
import { CardServicios } from "./CardServicios";
import { useSelector } from "react-redux";
import { serviciosHerrero } from "../../../utils/tabs";

export const Herrero = ({ props, tipoServicio }) => {
  const servicioSolicitado = useSelector(
    (state) => state.ReducerMisServicios.servicios[1]
  );

  // console.log('serv en herrero', servicioSolicitado)

  return (
    <View className="mt-4 mb-[500] ml-3">
      {typeof props[0] === "string" ? (
        <Text>{props[0]}</Text>
      ) : (
        serviciosHerrero.map((servicio) => {
          return (
            <View key={servicio} className="mb-[15]">
              <Text className="w-full h-[26px] text-slate-700 text-lg font-latoBold">
                {servicio}
              </Text>

              <AgregarServicio
                servicio={servicio}
                tipoServicio={tipoServicio}
                horse={props._id}
              />

              {servicioSolicitado.herrero[0]
                ? servicioSolicitado.herrero.map((serv, i) => {
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
          );
        })
      )}
    </View>
  );
};
