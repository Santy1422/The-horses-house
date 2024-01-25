import { useEffect, useState } from "react"
import styles from "../../styles/Landing.module.css"

const CheckboxWeb = ({opciones, setValue, value}) => {

    
    const [checkedList, setCheckedList] = useState(value || [])
    

    useEffect(() => {
        setValue(checkedList)
    },[checkedList])

    const onChange = (e) => {        
        if (e.target.checked) {
            setCheckedList([...checkedList, e.target.id])
        }
        if (!e.target.checked) {
            setCheckedList(checkedList.filter(filt => filt != e.target.id))
        }
    }

    return (
        <div>
            {
            opciones?.map((lab, i) => {
                return (
                    <div key={i}>
                        <input checked={value?.includes(lab)} type="checkbox" name="" id={lab} onChange={((e) => onChange(e))} /> <label htmlFor={lab} className="label font-primary text-xs">{lab}</label>
                    </div>
                )
            })
            }    
        </div>
    )
}

export default CheckboxWeb