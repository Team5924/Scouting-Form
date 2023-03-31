import styles from './checkboxList.module.css'
import Checkbox from './Checkbox/checkbox.js'

const CheckboxList = ({ label, options, value, resetSignal, eventHandler }) => {
    return (
        <div className={styles.checkboxListWrapper}>
            <div className={styles.label}>
                <label>{label}</label>
            </div>
            <div className={styles.checkboxWrapper}>
                <div className={styles.checkboxes}>
                    {options.map((option, i) =>
                        <Checkbox
                            key={i}
                            option={option}
                            resetSignal={resetSignal}
                            value={value}
                            eventHandler={eventHandler}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default CheckboxList