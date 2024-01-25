import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Checkbox from 'expo-checkbox';

const CheckboxList = ({label, setValue}) => {

    const [isChecked, setIsChecked] = useState(false)
    const [checkedList, setCheckedList] = useState([])

    useEffect(() => {
        setValue(checkedList)
    },[checkedList])

    const onChange = (e) => {    
        console.log(e)
        if (e.target.checked) {
            setCheckedList([...checkedList, e.target.id])
        }
        if (!e.target.checked) {
            setCheckedList(checkedList.filter(filt => filt != e.target.id))
        }
    }

    return (
        <View>
            {
            label.map((lab) => {
                return (
                    <View className=" mt-3 pl-3 rounded border-2 border-gray-400 w-72 py-3 flex justify-start flex-row" key={lab.value}>
                        <Checkbox  value={lab.name} onValueChange={(e) => onChange(e)} />
                        <Text className="pl-3">{lab.name}</Text>
                    </View>
                )
            })
            }    
        </View>
    )
}

export default CheckboxList