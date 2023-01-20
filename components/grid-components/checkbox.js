import { useEffect, useState } from "react";
import styles from "@/styles/checkbox.module.css"

export default function Checkbox(props) {
    const [checked, setChecked] = useState(0);
    const [dummyCounter, setDummyCounter] = useState(0);

    useEffect(() => {
        if (props.sharedValue) {
            if (props.row == "botCone") {
                setChecked(props.sharedValue[0]);
            } else if (props.row == "botCube") {
                setChecked(props.sharedValue[1])
            }
        }
    }, [dummyCounter])


    function onCheckboxChange(e) {
        if (props.row == "botCone" || props.row == "botCube") {
            props.handleSharedValue(props.row)
            setDummyCounter(dummyCounter + 1);
        } else {
            checked == 0 ? setChecked(1) : checked == 1 ? setChecked(0) : null;
            props.handleCheckbox(checked, props.row, props.column)
        }
    }

    return (
        <>
            <input className={styles.checkbox} type="checkbox" value={checked} checked={checked == 1} onChange={onCheckboxChange}/>
        </>
    )
}