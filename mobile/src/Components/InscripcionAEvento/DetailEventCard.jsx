import React from "react";
import { View, Text } from "react-native"
import CustomToggle from "../Reusable/CustomToggle";
import { concursoIcon } from "../../../utils/svgIcons";
export const DetailEventCard = ({isToggled, handleToggle, eventId}) => {

    return(
        <View className={`eventInscriber flex-col px-4 py-[22px] border border-[#D1DADA] rounded-md z-10 ${isToggled ? 'border-b-0 rounded-b-none' : 'border-b'} `}>
        <Text className="labelInscriber text-xs font-latoRegular leading-[18px] text-[#23254C] ">Te estas inscribiendo al evento</Text>
        <Text className="nameInscriber font-latoBold text-lg leading-[25px] pt-[6px] text-[#23254C]">{eventId.event.nombreEvento}</Text>
        <View className="informationInscriber flex-row justify-between px-1 pt-[14px] items-center ">
            <View className="icon flex flex-row">
                {concursoIcon}
                <Text className="informationInscriberLabel text-sm  leading-5 font-latoBold ml-[6px] text-[#23254C]">Concurso</Text>
            </View>
            <CustomToggle onToggle={handleToggle} value={isToggled} />
        </View>
    </View>
    )
}