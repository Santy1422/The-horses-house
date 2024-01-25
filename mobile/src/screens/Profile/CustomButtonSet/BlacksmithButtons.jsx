import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { calendarButtonsIcon, horseButtonsIcon, profileCaballerizasIcon, profileClientesIcon, profileCompetenciasIcon, profileMisClubsIcon, profileServiceIcon } from "../../../../utils/svgIcons";
import ModalAlert from "../../../Components/Reusable/ModalAlert";
import Badge from "../../../Components/Reusable/Badge";

const BlacksmithButtons = ({ profession }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const onClose = () => {
        setModalVisible(false);
    };
    return (
        <View className="w-full flex-row justify-between items-center mt-[33] md:mt-[53] mb-2 md:mb-[20]">
            <View className="flex-grow mr-[15]">
                <TouchableOpacity
                    onPress={handlePress}
                    className="h-[100px] mb-[15] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    <Badge label={'Próximamente'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {profileClientesIcon}
                    <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[115px]">
                        Mis Clientes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlePress}
                    className="h-[100px] md:h-[249px] flex-grow flex justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    <Badge label={'Próximamente'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {profileServiceIcon}
                    <Text className="mt-2 text-[#23254C] md:text-[22px] font-latoBold text-center min-w-[115px]">
                        Mis Servicios
                    </Text>
                </TouchableOpacity>
            </View>


            {
                profession === 'Herrero' ?
                    <View className="flex-grow">
                        <TouchableOpacity
                            onPress={handlePress}
                            className="h-[100px] mb-[15] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                        >
                            <Badge label={'Próximamente'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                            {calendarButtonsIcon}
                            <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[115px]">
                                Mi Agenda
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handlePress}
                            className="h-[100px] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                        >
                            <Badge label={'Próximamente'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                            {profileCaballerizasIcon}
                            <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[115px]">
                                Mis Caballerizas
                            </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View className="flex-grow">
                        <TouchableOpacity
                            onPress={handlePress}
                            className="h-[215px] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                        >
                            <Badge label={'Próximamente'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                            {calendarButtonsIcon}
                            <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[115px]">
                                Mi Agenda
                            </Text>
                        </TouchableOpacity>
                    </View>
            }

            {modalVisible && (
                <ModalAlert modalVisible={modalVisible} onClose={onClose} />
            )}
        </View>
    )
}
export default BlacksmithButtons