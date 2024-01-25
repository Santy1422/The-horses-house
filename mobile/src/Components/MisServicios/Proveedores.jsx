import { View, Text } from "react-native";
import { AgregarServicio } from "./AgregarServicio";
import { CardServicios } from "./CardServicios";
import { useSelector } from "react-redux";
import { serviciosProveedores } from "../../../utils/tabs";

export const Proveedores = ({ props, tipoServicio }) => {
  const servicioSolicitado = useSelector(
    (state) => state.ReducerMisServicios.servicios[6]
  );

  return (
    <View className="mt-4 mb-[500]">
      {typeof props[0] === "string" ? (
        <Text>{props[0]}</Text>
      ) : (
        serviciosProveedores.map((servicio) => {
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

              {servicioSolicitado.proveedores[0]
                ? servicioSolicitado.proveedores.map((serv, i) => {
                    if (servicioSolicitado.servicio === servicio) {
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
              {/* <View class="w-5 h-5 left-[307px] top-[3px] absolute"></View> */}
            </View>
          );
        })
      )}
    </View>
  );
};
