import styles from './counter.module.css'

const Counter = ({ loc, value, eventHandler }) => {
    function onAdd() {
        // eventHandler((previousValue) => parseInt(previousValue) + 1) 
        eventHandler(loc, 'add')
    }

    function onSubtract() {
        // if (value != 0) eventHandler((previousValue => parseInt(previousValue) - 1))
        eventHandler(loc, 'subtract')
    }

    return (
        <div className={styles.counterWrapper}>
            <div className={styles.counter}>
                <button className={styles.subtract} onClick={onSubtract}>-</button>
                <span className={styles.number}>{value}</span>
                <button className={styles.add} onClick={onAdd}>+</button>
            </div>
        </div>   
    ) 
}
export default Counter