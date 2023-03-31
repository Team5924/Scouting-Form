import { useEffect, useState } from 'react'
import styles from './checkbox.module.css'

const Checkbox = ({ option, resetSignal, value, eventHandler }) => {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(0)
    }, [resetSignal])

    function handleChange(e) {
        if (state == 0) {
            setState(1)
            eventHandler([...value, option])
        }
        else if (state == 1) {
            setState(0)
            eventHandler(value.filter(options => options != option))
        }
    }

    return (
        <div>
            <label className={styles.checkbox}>
                <input
                    type={'checkbox'}
                    value={state}
                    checked={state == 1}
                    onChange={handleChange}
                />
                {option}
            </label>
        </div>
    )
}
export default Checkbox