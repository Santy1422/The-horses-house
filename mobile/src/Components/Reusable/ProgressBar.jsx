import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';


export default ProgressBar = ({progress, label, labelStyle}) => {
    return (
        <View className={`${labelStyle !== 'bottom' ? 'w-full flex flex-row items-center my-2' : 'flex my-2 items-end '}`}> 
            <Progress.Bar className='w-full' progress={progress} color='#2E2E38' unfilledColor='#D7D7DC' borderColor='transparent' animated={true} width={null}/>
            <Text className=' font-latoRegular'>{label}</Text>
            
        </View>
    )
}