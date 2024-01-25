import { Text, TouchableOpacity, View } from "react-native"
import Badge from '../../../Components/Reusable/Badge';
import JockeyClubSVG from '../../../../assets/icons/JockeyClubSVG';
import { locationGreenIcon, watchGreenIcon, watchRedIcon, locationRedIcon, watchPurpleIcon, locationPurpleIcon, watchBlackIcon, locationIcon, watchOrangeIcon, locationOrangeIcon } from "../../../../utils/svgIcons"

const CalendarCard = ({ estado, titulo, ubicacion, horario, dia, setModalVisible, setModalInfo, fechaInicio, fechaFinalizacion, event }) => {
    return (
        <View className="gap-y-[20px] mt-[1]">
            <View className='px-[16px] py-[10px] bg-[#F3F2F2] flex-row items-center'>
                <View className='w-[9px] h-[9px] bg-labelDarkBlue rounded-full'></View>
                <Text className='text-base font-latoBold pl-[10px]'>{dia}</Text>
            </View>

            <TouchableOpacity 
            onPress={() => {
                setModalVisible(true)
                setModalInfo({
                    fechaInicio,
                    fechaFinalizacion,
                    ubicacion,
                    horario,
                    event
                })
            }} 
            className={`${estado === 'En Curso' && 'bg-[#EFFBF4]'} ${estado === 'Cancelado' && 'bg-[#FBF1EF]'} ${estado === 'Próximo' && 'bg-[#F6F4FB]'} ${estado === 'Reprogramado' && 'bg-[#FFF8F0]'} ${estado === 'Finalizado' && 'bg-[#F3F2F2]'} rounded px-2 pt-2 pb-4`}
            >
                <View className='items-start mb-[12px]'>
                    <Badge
                        label={estado}
                        badgeClass={`rounded-2xl mx-1 h-6 px-2.5 py-0.5 mt-[16] md:mx-2 md:h-9 md:px-5 flex-row text-center items-center justify-around bg-white`}
                        labelClass={`font-latoBold text-[14px] md:text-[18px] ${estado === 'En Curso' && 'text-teal-800'}  ${estado === 'Cancelado' && 'text-[#C70117]'} ${estado === 'Próximo' && 'text-[#4E3B8E]'}  ${estado === 'Reprogramado' && 'text-[#975100]'}`}
                    />
                </View>
                <View className='flex-row overflow-hidden'>
                    <View>
                        <View className="w-[42px] h-[44px] md:w-[62px] md:h-[64px]">
                            <JockeyClubSVG />
                        </View>
                    </View>
                    <View className='ml-[8px] gap-y-[8px]'>
                        <Text className={`${estado === 'En Curso' && 'text-teal-800'} ${estado === 'Cancelado' && 'text-[#C70117]'} ${estado === 'Próximo' && 'text-[#4E3B8E]'} ${estado === 'Reprogramado' && 'text-[#975100]'} ${estado === 'Finalizado' && 'text-[#353535]'} text-sm font-latoBold`}>{titulo}</Text>
                        <View className='flex-row items-center'>
                            {estado === 'En Curso' && locationGreenIcon}
                            {estado === 'Cancelado' && locationRedIcon}
                            {estado === 'Próximo' && locationPurpleIcon}
                            {estado === 'Reprogramado' && locationOrangeIcon}
                            {estado === 'Finalizado' && locationIcon}
                            <Text className={`pl-[4px] ${estado === 'En Curso' && 'text-teal-800'} ${estado === 'Cancelado' && 'text-[#C70117]'} ${estado === 'Próximo' && 'text-[#4E3B8E]'} ${estado === 'Reprogramado' && 'text-[#975100]'} ${estado === 'Finalizado' && 'text-[#353535]'} text-[10px] font-latoLight`} numberOfLines={1}>{ubicacion}</Text>
                        </View>
                        <View className='flex-row items-center'>
                            {estado === 'En Curso' && watchGreenIcon}
                            {estado === 'Cancelado' && watchRedIcon}
                            {estado === 'Próximo' && watchPurpleIcon}
                            {estado === 'Reprogramado' && watchOrangeIcon}
                            {estado === 'Finalizado' && watchBlackIcon}
                            <Text className={`pl-[4px] ${estado === 'En Curso' && 'text-teal-800'} ${estado === 'Cancelado' && 'text-[#C70117]'} ${estado === 'Próximo' && 'text-[#4E3B8E]'} ${estado === 'Reprogramado' && 'text-[#975100]'} ${estado === 'Finalizado' && 'text-[#353535]'} text-[10px] font-latoLight`}>{horario}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default CalendarCard