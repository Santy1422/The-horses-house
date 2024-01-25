import { View, Text } from "react-native";
import { AgregarServicio } from "./AgregarServicio";
import { CardServicios } from "./CardServicios";
import { useSelector } from "react-redux";
import { serviciosProfesores } from "../../../utils/tabs";

export const Profesores = ({ props, tipoServicio }) => {
  const servicioSolicitado = useSelector(
    (state) => state.ReducerMisServicios.servicios[4]
  );

  console.log('profesores', servicioSolicitado)
  return (
    <View className="mt-4 mb-[500] ml-3">
      {typeof props[0] === "string" ? (
        <Text>{props[0]}</Text>
      ) : (
        serviciosProfesores.map((servicio) => {
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

              {servicioSolicitado.profesores[0]
                ? servicioSolicitado.profesores.map((serv, i) => {
                    return (
                      <>
                        <CardServicios
                          key={i}
                          fecha={serv.fecha}
                          estado={serv.status}
                        />
                      </>
                    );
                  })
                : null}
            </View>
          );
        })
      )}
    </View>
  );
};
