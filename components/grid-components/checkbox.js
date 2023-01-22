import { useEffect, useState } from "react";
import styles from "@/styles/checkbox.module.css"

export default function Checkbox(props) {
    const [checked, setChecked] = useState(0);

    useEffect(() => {
        return () => {
            setChecked(0);
        }
    }, [props.clear])
    

    function onCheckboxChange(e) {
        // check identity; cones = 0, cubes = 1
        if (props.row == "botCone") {
            if (props.isDisable[0] == 0) {
                if (e.target.value == 0) {
                    // selected; the other checkbox is disabled
                    setChecked(1);
                    props.handleCheckbox(1, props.row, props.column);
                    props.handleDisable(1, props.row, props.column);
                }

                if (e.target.value == 1) {
                    setChecked(0);
                    props.handleCheckbox(0, props.row, props.column);
                    props.handleDisable(0, props.row, props.column);
                }
            }
        } else if (props.row == "botCube") {
            if (props.isDisable[1] == 0) {
                if (e.target.value == 0) {
                    setChecked(1);
                    props.handleCheckbox(1, props.row, props.column);
                    props.handleDisable(1, props.row, props.column);
                }

                if (e.target.value == 1) {
                    setChecked(0);
                    props.handleCheckbox(0, props.row, props.column);
                    props.handleDisable(0, props.row, props.column);
                }
            }
        } else {
            if (e.target.value == 0) {
                setChecked(1);
                props.handleCheckbox(1, props.row, props.column);
            } else if (e.target.value == 1) {
                setChecked(0);
                props.handleCheckbox(0, props.row, props.column);
            }
        }
    }

    return (
        <>
            <input className={styles.checkbox} type="checkbox" value={checked} checked={checked == 1} onChange={onCheckboxChange}/>
        </>
    )
}