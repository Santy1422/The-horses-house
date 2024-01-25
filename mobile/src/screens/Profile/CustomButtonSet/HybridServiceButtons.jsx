import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ModalAlert from "../../../Components/Reusable/ModalAlert";
import { calendarButtonsIcon, horseButtonsIcon, profileCaballerizasIcon, profileClientesIcon, profileCompetenciasIcon, profileMisClubsIcon, profileServiceIcon } from "../../../../utils/svgIcons";
import Badge from "../../../Components/Reusable/Badge";

const HybridServiceButtons = ({ profession }) => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const onClose = () => {
        setModalVisible(false);
    };

    return (
        <View className="w-full justify-between items-center mt-[33] mb-2">

            {/* Row 1 */}

            <View className="flex-row flex-grow mb-[13]">
                <TouchableOpacity
                    onPress={() => navigation.navigate("MyHorses")}
                    className="h-[100px] md:h-[160px] w-[49%] justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    {horseButtonsIcon}
                    <Text className="mt-2 text-[#23254C] md:text-[22px] font-latoBold text-center min-w-[115px]">
                        Mis Caballos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log("asd")}
                    className="h-[100px] md:h-[160px] w-[49%] flex justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px] ml-[12]"
                >
                    <Badge label={'Próximamente'} badgeClass={`max-w-full rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {profileServiceIcon}
                    <Text className="mt-2 text-[#23254C] md:text-[22px] font-latoBold text-center min-w-[115px]">
                        Mis Servicios
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Row 2 */}

            <View className="flex-row flex-grow mb-[13]">

                <TouchableOpacity
                    onPress={handlePress}
                    className="h-[100] md:h-[160px] w-[49%] justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    <Badge label={'Próximamente'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {profileCaballerizasIcon}
                    <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[115px] md:min-w-[174px]">
                        Mi Caballeriza
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {navigation.navigate("MisCompetencias")}}
                    className="h-[100] md:h-[160px] w-[49%] justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px] ml-[12]"
                >
                    {profileCompetenciasIcon}
                    <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-0.5 text-center min-w-[115px]">
                        Mis Competencias
                    </Text>
                </TouchableOpacity>

            </View>

            {/* Row 3 */}

            <View className="flex-row flex-grow">
                {/* Clubs */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("MisClubs")}
                    className="h-[100] md:h-[160px] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    <Badge label={'Próximam...'} badgeClass={`max-w-full rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {profileMisClubsIcon}
                    <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[101px]">
                        Mis Clubs
                    </Text>
                </TouchableOpacity>

                {/* Agenda */}

                <TouchableOpacity
                    onPress={() => navigation.navigate("MiAgenda")}
                    className="h-[100] md:h-[160px] mx-[12] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    <Badge label={'Próximam...'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {calendarButtonsIcon}
                    <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[101px]">
                        Mi Agenda
                    </Text>
                </TouchableOpacity>

                {/* Clientes */}

                <TouchableOpacity
                    onPress={handlePress}
                    className="h-[100] md:h-[160px] flex-grow justify-center items-center border border-gray-300 bg-zinc-100 rounded-[10px]"
                >
                    <Badge label={'Próximam...'} badgeClass={`rounded-2xl mx-1 h-6 px-2.5 mb-[6px] md:mb-2 md:mx-2 md:h-9 md:px-5 text-center justify-center bg-[#FFFFFF]`} labelClass={`font-latoBold text-[14px] md:text-[18px] text-labelDarkBlue`} />
                    {profileClientesIcon}
                    <Text className="font-latoBold text-[#23254C] md:text-[22px] mt-2 text-center min-w-[101px]">
                        Mis Clientes
                    </Text>
                </TouchableOpacity>

            </View>
            {modalVisible && (
                <ModalAlert modalVisible={modalVisible} onClose={onClose} />
            )}
        </View>
    )
}
export default HybridServiceButtons