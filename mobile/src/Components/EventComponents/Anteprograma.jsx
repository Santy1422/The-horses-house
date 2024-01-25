import { View, Text, TouchableOpacity } from "react-native";
import {
  calendarIconBlack,
  concursoIconGris,
  watchBlackIcon,
} from "../../../utils/svgIcons";
import CustomToggle from "../Reusable/CustomToggle";
import { useState } from "react";

export const Anteprograma = ({ event }) => {
  const pruebas = event
  const [isOpen, setIsOpen] = useState(false);
  const [openPrueba, setOpenPrueba] = useState("");

  return (
    <View className="my-[30px] w-full">
      {pruebas &&
        pruebas?.map((prueba) => {
          const fechaArray = prueba.dia.split("T")[0].split("-");
          const fecha = [fechaArray[2], fechaArray[1]].join("/");


          return (
            
            <View
              className="w-100%  bg-white border border-[#DBDBDB] p-4 mt-[10px] rounded-[10px]"
              key={prueba.id}
            >
              <TouchableOpacity
                onPress={() => {
                  setIsOpen(!isOpen), setOpenPrueba(prueba.id);
                }}
              >
                <View className="flex flex-row justify-between items-center">
                  <View className="flex flex-row gap-2 items-center">
                    {concursoIconGris}
                    <Text className="font-lato text-labelDarkBlue font-semibold text-lg">
                      Prueba {prueba.nombre}
                    </Text>
                  </View>

                  <CustomToggle value={isOpen} onToggle={setIsOpen} />
                </View>
              </TouchableOpacity>
              {isOpen && openPrueba === prueba.id && (
                <View className="bg-white w-full h-fit px-1">
                  <View className="divisor border-t border-gray-200 w-full my-6 mx-auto"></View>

                  {/* //FECHA */}
                  <View className="bg-zinc-100  h-[72px] w-full rounded flex-row justify-between items-center p-4">
                    <Text className="text-[#494949] w-[50%] font-lato  text-sm font-normal  leading-tight">
                      Fecha
                    </Text>

                    <View className="w-[50%] flex items-end">
                      <View className="flex-row gap-2 mb-1">
                        {calendarIconBlack}
                        <Text className="text-[#494949] font-lato  text-sm font-normal  leading-[18px]">
                          {fecha}
                        </Text>
                      </View>
                      <View className="flex-row gap-2">
                        {watchBlackIcon}
                        <Text className="text-[#494949] font-lato  text-sm font-normal  leading-[18px]">
                          {prueba.hora}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* categoria */}
                  <View className=" w-full min-h-[72px] flex-row justify-between items-center p-4 h-auto">
                    <Text className="text-[#494949] w-[50%] font-lato text-sm font-normal  leading-tight">
                      Categoría
                    </Text>

                    <View className="w-[50%] flex items-end">
                      {prueba?.categoria?.map((cat) => {
                        return (
                          <Text key={cat} className="text-[#494949] font-lato  text-sm font-normal  leading-[18px]">
                            {cat}
                          </Text>
                        );
                      })}
                    </View>


                    
                  </View>

                  {/* altura */}
                  <View className="bg-zinc-100 w-full  h-[72px] rounded flex-row justify-between items-center p-4">
                    <Text className="text-[#494949] w-[50%] font-lato  text-sm font-normal  leading-tight">
                      Altura
                    </Text>

                    <View className="w-[50%] flex items-end">
                     
                     <Text className="text-[#494949] font-lato  text-sm font-normal  leading-[18px]">{prueba.altura}</Text>
                    </View>
                  </View>

                    {/* definicion */}
                    <View className=" w-full min-h-[72px] flex-row justify-between items-center p-4 h-auto">
                    <Text className="text-[#494949] w-[50%] font-lato text-sm font-normal  leading-tight">
                      Definición
                    </Text>

                    <View className="w-[50%] flex items-end">
                     <Text className="text-[#494949] text-right w-[50%] font-lato text-sm font-normal  leading-tight">{prueba.definicion}</Text>
                    </View>
                    </View>

                     {/* arancel */}
                  <View className="bg-zinc-100 w-full  h-[72px] rounded flex-row justify-between items-center p-4">
                    <Text className="text-[#494949] w-[50%] font-lato  text-sm font-normal  leading-tight">
                      Arancel
                    </Text>

                    <View className="w-[50%] flex items-end">
                     
                     <Text className="text-[#494949] font-lato  text-sm font-normal  leading-[18px]">$ {prueba.arancelInscripcion}</Text>
                    </View>
                  </View>

                  {/* pista */}
                  <View className=" w-full min-h-[72px] flex-row justify-between items-center p-4 h-auto">
                    <Text className="text-[#494949] w-[40%] font-lato text-sm font-normal  leading-tight">
                      Pista
                    </Text>

                    <View className="w-[50%] flex items-end">
                     <Text className="text-[#494949] w-[60%] text-right font-lato text-sm font-normal leading-tight">{prueba.pista === "Seleccionar pista" ? "A definir" : prueba.pista}</Text>
                    </View>
                    </View>

                        {/* premio */}
                  <View className="bg-zinc-100 w-full  h-[72px] rounded flex-row justify-between items-center p-4">
                    <Text className="text-[#494949] w-[40%] font-lato  text-sm font-normal  leading-tight">
                      Premio
                    </Text>

                    <View className="w-[60%] flex items-end">
                     {prueba.premios.length ? prueba.premios.map(premio => {
                        return(<Text key={premio} className="text-[#494949] text-right font-lato text-sm font-normal leading-tight">{premio}</Text>)}) :
                        <Text className="text-[#494949] text-right font-lato text-sm font-normal leading-tight">A definir por el jurado</Text> }
                     
                    </View>
                  </View>

                  

                </View>
              )}
            </View>
          );
        })}
    </View>
  );
};
