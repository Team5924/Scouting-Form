
import styles from './counter.module.css'

const Counter = ({ label, value, eventHandler }) => {
    function onAdd() {
        eventHandler((previousValue) => parseInt(previousValue) + 1)       
    }

    function onSubtract() {
        if (value != 0) eventHandler((previousValue => parseInt(previousValue) - 1))
    }

    return (
        <div className={styles.counterWrapper}>
            <div className={styles.label}>
                <label>{label}</label>
            </div>
            <div className={styles.counter}>
                <button className={styles.add} onClick={onAdd}>+</button>
                <span className={styles.number}>{value}</span>
                <button className={styles.subtract} onClick={onSubtract}>-</button>
            </div>
        </div>   
    ) 
}
export default Counter