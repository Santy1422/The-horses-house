import { useEffect, useState } from "react"
import styles from "../../styles/Landing.module.css"

const CheckboxWeb = ({opciones, setValue}) => {

    
    const [checkedList, setCheckedList] = useState([])

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
                        <input type="checkbox" name="" id={lab} onChange={((e) => onChange(e))} /> <label htmlFor={lab}>{lab}</label>
                    </div>
                )
            })
            }    
        </div>
    )
}

export default CheckboxWeb